import { NextRequest, NextResponse } from "next/server";

// Canonicalize requests before they render:
//   1. Host: redirect www.ecommwizards.com -> apex ecommwizards.com so the site
//      lives on ONE host (the www copy was a full crawlable duplicate).
//   2. Strip the legacy ?c= tracking param (utm_* and others are preserved).
// Both fold into a single 308 to the clean apex URL. Once the host is the apex
// and `c` is gone, nothing matches again, so there is no chain or loop.
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  let changed = false;

  const host = (req.headers.get("host") ?? "").split(":")[0]; // hostname, no port
  if (host.startsWith("www.")) {
    url.protocol = "https:";
    url.hostname = host.slice(4); // drop the leading "www."
    url.port = "";
    changed = true;
  }

  if (url.searchParams.has("c")) {
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
