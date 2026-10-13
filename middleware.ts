import { NextRequest, NextResponse } from "next/server";

// EVERY "?c=" URL gets a terminal 410 Gone. A redirect keeps the URL in Google's
// recrawl ledger forever, which is what "Page with redirect" counts; a 410
// deindexes it and stops the recrawling that starves real pages of crawl budget.
//
// WIDENED 2026-10-13. This used to 410 only a ?c= value of 10 to 16 DIGITS and
// fall through to a 308 for anything else. Verified live before changing:
// ?c=1234567890 returned 410, while ?c=1, ?c=99, ?c=abc, ?c= (empty) and
// ?c=123456789012345678 (18 digits, outside the range) all returned 308.
//
// HOW BIG THIS ACTUALLY IS, measured rather than assumed. A Search Console
// export of the "Page with redirect" bucket (1,000 rows sampled from 300,284)
// held 992 ?c= URLs, and 989 of them ALREADY returned 410 under the narrow
// rule. Only 3 fell through. So this change is worth roughly 0.3% of that
// bucket, not the whole of it.
//
// IT IS STILL WORTH MAKING, because of which 3 they were. Everything served a
// 410 was last crawled 4-9 August and has not been touched since; the three
// still serving a 308 were crawled on 5 October. Google retires a 410 and keeps
// re-checking a redirect, so the fall-through group is the only one still
// costing anything. The daily crawl counts on the 410 group fall away to
// nothing: 392, 248, 104, 116, 88, 41, then silence.
//
// AND THE BUCKET TOTAL IS A STALE LABEL, NOT A LIVE COST. It jumped to 300,059
// on 25 July and has been flat ever since, because clearing it needs a re-crawl
// that Google is in no hurry to perform on URLs it has already judged gone.
//
// SAFE BECAUSE "c" IS NEVER READ AS A REAL PARAMETER: nothing in app/, lib/ or
// components/ reads it, and nothing on the site links to it. Tracking params
// (utm_*, gclid, fbclid) are deliberately untouched and still resolve normally,
// because Google Ads depends on them.
//
// ROBOTS.TXT IS DELIBERATELY NOT USED. Google's removals documentation says "Do
// not use robots.txt as a blocking mechanism": a blocked URL cannot be crawled,
// so Google never sees the 410 and never drops it. The Disallow goes in only
// once the count has collapsed.

const GONE_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>410 Gone</title></head><body style="font-family:system-ui,sans-serif;padding:40px"><h1>410 &mdash; This page is gone</h1><p>This URL never held real content and has been permanently removed.</p><p><a href="https://ecommwizards.com/">Go to the Ecomm Wizards homepage</a></p></body></html>`;

// Canonicalize requests before they render:
//   1. ANY ?c= URL -> 410 Gone (terminal, no redirect chain, never cached).
//   2. Host: redirect www.ecommwizards.com -> apex ecommwizards.com so the site
//      lives on ONE host (the www copy was a full crawlable duplicate).
// Step 1 returns before step 2, so a www ?c= URL gets the 410 rather than a
// redirect into another 410: one hop, one terminal answer. Everything else,
// tracking params included, is left exactly as it was.
export function middleware(req: NextRequest) {
  // Note: /admin auth is handled in the Node runtime (app/admin/(protected)/layout.tsx
  // + the login route), not here — Edge middleware no longer reads ADMIN_*.
  const url = req.nextUrl.clone();
  let changed = false;

  // Any ?c= at all, whatever its value, including empty. Terminal: no redirect,
  // so there is never a chain for Google to follow or re-check.
  if (url.searchParams.has("c")) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        // Nothing should cache a tombstone that Google needs to re-read.
        "Cache-Control": "no-store",
      },
    });
  }

  const host = (req.headers.get("host") ?? "").split(":")[0]; // hostname, no port
  if (host.startsWith("www.")) {
    url.protocol = "https:";
    url.hostname = host.slice(4); // drop the leading "www."
    url.port = "";
    changed = true;
  }

  if (changed) return NextResponse.redirect(url, 308);
  return NextResponse.next();
}

// Run on page routes only — skip Next internals and static asset files.
export const config = {
  matcher: ["/((?!_next/|.*\\.).*)"],
};
