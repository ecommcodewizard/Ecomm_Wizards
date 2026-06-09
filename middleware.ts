import { NextRequest, NextResponse } from "next/server";

// Strip the ?c= tracking parameter so search engines index only clean URLs.
// Any request carrying ?c=... is 308-redirected to the same path with `c`
// removed (other params like utm_* are preserved). Once `c` is gone the next
// request no longer matches, so there is no redirect loop.
export function middleware(req: NextRequest) {
  if (req.nextUrl.searchParams.has("c")) {
    const url = req.nextUrl.clone();
    url.searchParams.delete("c");
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

// Run on page routes only — skip Next internals and static asset files.
export const config = {
  matcher: ["/((?!_next/|.*\\.).*)"],
};
