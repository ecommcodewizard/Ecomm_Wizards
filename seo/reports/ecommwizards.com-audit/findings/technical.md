# Technical SEO findings: ecommwizards.com (2026-11-16)

Technical score: **78/100**. Method: live curl on ~19 sampled pages plus 20 random sitemap URLs, with 1 s delay. No browser render was run, so the rendering gap rests on raw-HTML inspection only.

## Category status
| Category | Status |
|---|---|
| Crawlability | Pass with issues (sitemap gaps) |
| Indexability | Pass (self-canonicals, no stray noindex) |
| Security | Pass (CSP is minimal) |
| URL structure | Pass (one 2-hop chain) |
| Mobile | Pass (viewport present on all samples) |
| Core Web Vitals (source) | Needs work (HTML weight) |
| Structured data | Present on every page (2-8 JSON-LD blocks) |
| JS rendering | Pass (SSR/ISR, content in raw HTML) |
| Sitemap | Fail (blog missing, no lastmod) |

## Findings

### 1. Blog missing from sitemap.xml (High)
- Evidence: `/insights` returns 200 and lists 11 posts, e.g. `/insights/magento-shopify-integration`, and each post has a self-canonical. The 144 sitemap URLs contain 0 `/insights` entries.
- Recommendation: Add `/insights` and every post to `app/sitemap.ts`, pulled from Payload. Without them, posts depend on internal links alone for discovery.

### 2. No `<lastmod>` in sitemap.xml (High)
- Evidence: `https://ecommwizards.com/sitemap.xml` contains only `<loc>` entries (12.5 KB, 144 URLs).
- Recommendation: Emit a real `lastmod` from the CMS `updatedAt` or a git-derived date. Do not stamp every URL with the build date. Add `lastmod` to the video sitemap as well.

### 3. Homepage and service HTML is very heavy (High)
- Evidence, raw HTML:

| Page | Size |
|---|---|
| `/` | 583,807 B |
| `/case-studies` | 450 KB |
| `/services/shopify-development-agency` | 440 KB |
| City pages | 355-420 KB |
| Case studies | ~395-406 KB |
| `/book-shopify-consultation` | 179 KB |

- Brotli is on. The homepage's flight payload (`self.__next_f`) is about 140 KB of text. It has 183 `<img>` tags, 171 of them lazy. Roughly 10 KB of inline CSS is also present.
- Impact: Large HTML delays parse and hydration, which puts INP at risk on mid-range mobile. The big RSC payload comes from passing large props to client components.
- Recommendation: Move below-the-fold sections to server components or `next/dynamic`. Paginate or virtualise the logo, review and case-study grids. Don't serialise full Payload documents into client props. Target homepage HTML under 250 KB.

### 4. `http://www` takes two redirects (Medium)
- Evidence: `http://www.ecommwizards.com/` returns 301 to `https://www.ecommwizards.com/`, then 308 to `https://ecommwizards.com/` (2 hops).
- Other variants take one hop: `http://ecommwizards.com/` returns a 301 to https, and `https://www.…/book-shopify-consultation` returns a 308 to the apex.
- Recommendation: At the Hostinger/CDN layer, redirect `http://www` straight to `https://ecommwizards.com`. This is low impact but easy to fix.

### 5. Custom 404 page missing, but status code is correct (Medium)
- Evidence: `/this-does-not-exist-xyz` returns a true 404 with `noindex`, `Cache-Control: no-store` and a 5.9 KB body titled "404: This page could not be found." This is the default Next.js page, so it is not a soft 404.
- Recommendation: Add `app/not-found.tsx` with navigation, search and links to services and the audit page. The page is for users, so there is no ranking cost, only lost recoveries.

### 6. CSP is minimal and has a duplicate header (Low)
- Evidence: Two `content-security-policy` headers are sent. One is `upgrade-insecure-requests; object-src 'none'; base-uri 'self'; frame-ancestors 'self'`. The other is `upgrade-insecure-requests` alone. There is no `script-src` or `default-src`.
- Recommendation: Merge them into one header. Add `script-src` in report-only mode first. Also add `Cross-Origin-Opener-Policy: same-origin-allow-popups`. This has no SEO impact.

### 7. `Cache-Control: public, max-age=0, must-revalidate` on HTML (Low)
- Evidence: Every HTML page, `robots.txt` and `sitemap.xml` use this header. The homepage showed `x-nextjs-cache: HIT` in `home-render.json`.
- Recommendation: Add `s-maxage` / `stale-while-revalidate` for the CDN on HTML, to cut TTFB on cache misses.

### 8. AI-bot robots group is redundant (Low / Info)
- Evidence: `robots.txt` has a 17-bot named group (GPTBot, ClaudeBot, PerplexityBot, Google-Extended and others) and a `*` group. Both carry identical `Allow: /` plus `Disallow: /admin`, `/cms`, `/cms-api`, `/*?c=`, `/*&c=`.
- The group does no harm. It is an explicit allow, and the disallows are identical, so there is no inconsistency.
- `Host:` is a legacy Yandex directive. It is harmless.
- Note: `/cms-api` has no trailing-slash issue, but `Disallow: /cms` also blocks any public path starting with `/cms`. Confirm no such path exists.

### 9. Spam `?c=` URLs handled correctly (Info, confirmed)
- Evidence: `/?c=test` returns 410 with `Cache-Control: no-store`. It is also disallowed in `robots.txt`.
- Caveat: Because the URLs are disallowed in robots.txt, Google may never recrawl them to see the 410. That is acceptable. Let them age out. Don't remove the disallow while the volume is large (~409k URLs).

### 10. Pagination and parameter handling (Info)
- Evidence: `/insights?page=2` returns 200 with a canonical to `/insights`, so the same 11 posts are served and no real pagination exists. `/?utm_source=x` returns 200 with a canonical to `https://ecommwizards.com`.
- Impact: This is safe now. If the blog grows past ~12 posts, add crawlable `/insights/page/2` links with self-canonicals.

### 11. Homepage canonical omits trailing slash (Info)
- Evidence: Canonical is `https://ecommwizards.com`, while the sitemap lists `https://ecommwizards.com/`. These are equivalent for a root URL. No action is needed.

### 12. Missing security.txt (Info)
- Evidence: `/.well-known/security.txt` returns 404. `/llms.txt` returns 200.

## What works
- All 20 random sitemap URLs returned 200 with 0 redirects, so there are no redirected or dead URLs in the sitemap.
- Every sampled page has an absolute, self-referencing canonical, one `<h1>`, a viewport tag, JSON-LD and an OG image.
- No stray `noindex` on any indexable page. `/insights` has an explicit `index, follow`.
- Trailing-slash handling is consistent. `/x/` returns 308 to `/x`, and the sitemap uses the no-slash form.
- HTTPS and www are canonicalised. HSTS is set (`max-age=31536000; includeSubDomains`).
- Other security headers are present: X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy.
- Brotli compression is on, and the hero image is preloaded with `fetchPriority="high"`.
- 171 of 183 homepage images are lazy-loaded.
- HTML is server-rendered, so content is visible without JS. The spam-URL 410 is clean.
- A video sitemap exists, with 29 entries for case-study pages.
- `robots.txt` declares both sitemaps and the declarations resolve (200). No hreflang is used, which is appropriate for a single-language site.

## Prioritised actions
1. Add `/insights` and posts to the sitemap, with real `lastmod`.
2. Cut homepage and template HTML and RSC weight.
3. Collapse the `http://www` redirect chain.
4. Build a custom `not-found.tsx`.
5. Tidy the CSP and add CDN cache directives.

No browser-sandbox warnings arose because no render was performed.
