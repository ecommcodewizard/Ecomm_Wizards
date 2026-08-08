import { NextRequest, NextResponse } from "next/server";

// The ~400k spam-generated "?c=<10-16 digit id>" ghost URLs get a terminal 410
// Gone instead of a redirect: a redirect keeps them in Google's recrawl ledger
// forever ("Page with redirect", 230k+), while a 410 deindexes them and stops
// the recrawling that starves real pages of crawl budget. Only the junk numeric
// fingerprint gets the 410; any other ?c= value falls through to the 308 strip.
const JUNK_C = /^\d{10,16}$/;

const GONE_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>410 Gone</title></head><body style="font-family:system-ui,sans-serif;padding:40px"><h1>410 &mdash; This page is gone</h1><p>This URL never held real content and has been permanently removed.</p><p><a href="https://ecommwizards.com/">Go to the Ecomm Wizards homepage</a></p></body></html>`;

// Canonicalize requests before they render:
//   1. Junk ?c= URLs -> 410 Gone (terminal, no redirect chain).
//   2. Host: redirect www.ecommwizards.com -> apex ecommwizards.com so the site
//      lives on ONE host (the www copy was a full crawlable duplicate).
//   3. Strip any non-junk legacy ?c= param (utm_* and others are preserved).
// 2 and 3 fold into a single 308 to the clean apex URL. Once the host is the
// apex and `c` is gone, nothing matches again, so there is no chain or loop.
export function middleware(req: NextRequest) {
  // Note: /admin auth is handled in the Node runtime (app/admin/(protected)/layout.tsx
  // + the login route), not here — Edge middleware no longer reads ADMIN_*.
  const url = req.nextUrl.clone();
  let changed = false;

  const cParam = url.searchParams.get("c");
  if (cParam !== null && JUNK_C.test(cParam)) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const host = (req.headers.get("host") ?? "").split(":")[0]; // hostname, no port
  if (host.startsWith("www.")) {
    url.protocol = "https:";
    url.hostname = host.slice(4); // drop the leading "www."
    url.port = "";
    changed = true;
  }

  if (cParam !== null) {
    url.searchParams.delete("c");
    changed = true;
  }

  if (changed) return NextResponse.redirect(url, 308);
  return NextResponse.next();
}

// Run on page routes only — skip Next internals and static asset files.
export const config = {
  matcher: ["/((?!_next/|.*\\.).*)"],
};
