# Performance / Core Web Vitals: ecommwizards.com

Date: 2026-11-16. **All values are lab or header-derived estimates.** The PSI API returned a rate-limit error (no API key). CrUX and `lcp_subparts.py` need a Google API key (not configured). **No field data (CrUX) was available, so LCP, INP and CLS pass/fail cannot be stated.** I measured raw HTTP timing, HTML and resource analysis, and `preload_check.py`. The six templates were fetched with curl and Node fetch from one location. I did not run Lighthouse or render the pages.

## Score: Performance 62/100 (estimate)

Server HTML is small on the wire, assets are cacheable and JS is moderate. The score is held down by an uncached HTML TTFB of about 0.6-0.9 s, hero-adjacent preload clutter, a large HTML/RSC payload and no preconnects.

## Measurements (curl, HTTP/1.1, Brotli)

| Template | TTFB | Wire HTML | Decoded HTML | Imgs | JS decoded |
|---|---|---|---|---|---|
| / | 0.73 s | 57 KB | 584 KB | 183 | ~800 KB (12 files) |
| /services/shopify-development-agency | 0.63 s | 66 KB | 440 KB | 36 | ~625 KB |
| /services/.../charlotte | 0.79 s | 62 KB | 389 KB | 29 | ~630 KB |
| /case-studies/111skin... | 0.90 s | 40 KB | 394 KB | 15 | ~625 KB |
| /book-shopify-consultation | 0.68 s | 23 KB | 179 KB | 5 | ~620 KB |
| /services/migration/woocommerce-to-shopify | 0.63 s | 71 KB | 468 KB | 129 | ~625 KB |

Notes on the table:
- TTFB includes TCP and TLS from this client. The origin reported `x-hcdn-upstream-rt: 0.239`.
- JS decoded is the sum of all `<script src>` chunks after decompression (charlotte JS is an estimate from chunk list; others measured on home, service, book, migration).
- Shared CSS is one file of 64 KB decoded, and it is render-blocking.
- JS wire size was not captured.
- Third-party cost was not measured. See finding 7.

## Findings

1. **HIGH: HTML is not edge-cached and TTFB is borderline.**
   - Evidence: TTFB was 0.63-0.90 s, above web.dev's 0.8 s "good" line on 2 of 6 pages and close on the rest.
   - Headers: `Cache-Control: public, max-age=0, must-revalidate`, `x-hcdn-cache-status: DYNAMIC` and `Vary: rsc, next-router-state-tree, ...`. This is despite `x-nextjs-cache: HIT` and `x-nextjs-prerender: 1`, so the pages are statically prerendered.
   - Fix: have the hosting layer cache prerendered HTML, for example `s-maxage` with `stale-while-revalidate` via `headers()` in `next.config`, if Hostinger honours it. Test whether the Vary on `rsc` is blocking CDN caching. Target TTFB under 0.4 s.
   - Impact: moves LCP directly.

2. **HIGH: Homepage HTML/RSC payload is 584 KB decoded.** This confirms your suspicion.
   - It contains 183 `<img>` tags. 102 of them have `alt=""` and many are repeated sliders.
   - It also contains 4 `<video>` tags and a large inline `__next_f.push` payload.
   - Brotli brings it to 57 KB on the wire, but parse, hydration and RSC deserialisation cost remains on mobile CPUs. This hurts INP, and DOM size likely exceeds the 1,500-element guideline.
   - Fix: render below-the-fold sections as lazy client components. Dedupe sliders, for example by rendering partner logos once with CSS animation instead of duplicated track copies. Do not serialise large props.
   - The migration page has 129 images, the same problem on a smaller scale.

3. **MEDIUM: Homepage preloads 5 images, and 4 are not LCP candidates.**
   - The preloads are the hero WebP (correct, srcset and fetchpriority), `Group_1000004265.svg`, `web.png`, `landing-pages.png` and `ad-blocker.png`.
   - These are small (`web.png` is 17 KB), but they compete with the hero on mobile bandwidth.
   - `arrow vector.png` is preloaded on every page. The path contains a space and the file is a PNG. It is also an `alt=""` decorative image, so it is not worth a preload.
   - On the migration page `woocommerce-hero-scaled.webp` is preloaded twice, and a second nari image is preloaded too. Fix the duplicate.
   - Fix: keep only the LCP image preloaded and use `priority` on that one image. Drop the others.

4. **MEDIUM: Fonts are self-hosted via @fontsource with 7 `@font-face` rules and 12 woff/woff2 URLs. No font preload is present.**
   - `font-display: swap` is set, which is good.
   - Nunito appears inline on the homepage (2 hits) but no Nunito `@font-face` is in the CSS, so it falls back to `sans-serif`. That is a likely FOUT and CLS source.
   - Fix: migrate to `next/font`, which gives size-adjusted fallbacks and automatic preload, or preload the one or two weights used above the fold. Drop unused weights. Either load Nunito properly or remove the reference.

5. **MEDIUM: JS weight.**
   - About 620 KB decoded on every page and about 800 KB on the homepage.
   - Largest chunks are `3794-...js` (238 KB), `4bd1b696-...js` (196 KB) and `polyfills-...js` (110 KB).
   - Polyfills at 110 KB suggest a broad `browserslist`. Modern targets would let Next drop most of it.
   - 11 of the 12 script tags on the homepage are async. Chunks are immutable-cached for a year (good).
   - Fix: set `browserslist` to modern browsers, audit `3794` with `@next/bundle-analyzer`, and lazy-load below-fold interactive code.

6. **MEDIUM: Render-blocking CSS.** A single 64 KB (decoded) stylesheet is shared by all pages. It is acceptable for one request, but it is not split per route. Consider Tailwind purge checks and `experimental.inlineCss` if available.

7. **MEDIUM: Third-party cost.**
   - The only third party found in the HTML is GTM (GTM-PZV8S2C2), loaded via the standard `gtm.js` snippet, plus its noscript iframe. I did not measure what tags GTM injects.
   - Social links are plain anchors, so there is no third-party cost there.
   - There are no `preconnect` or `dns-prefetch` hints at all (0 found).
   - Fix: audit GTM container contents, since pixels there are usually the real cost. Add `preconnect` for `www.googletagmanager.com`, and for `app.cal.com` on the booking page.

8. **MEDIUM: Booking page, Cal.com embed.**
   - The embed is client-injected, so it is not in the server HTML and I could not measure it without rendering. The SSR HTML has a `cal.com/ecomm-wizards/30min` fallback link in a noscript block.
   - A real render is needed to see the embed's weight and its CLS. Reserve a fixed `min-height` for the embed container. Load it on `IntersectionObserver` or on first interaction, and preconnect to `app.cal.com`.
   - Other pages (service, city) also mention cal.com.

9. **LOW: `critical-ch: Sec-CH-Prefers-Color-Scheme` and `accept-ch` headers.** On a first visit, Chromium may re-request the page when a Critical-CH header is present and the client did not already send the hint. This could cause an extra navigation round trip on first load. Check whether the site actually needs the hint. If not, remove both headers.

10. **LOW: No Speculation Rules and no prerender.** `preload_check.py` scored 75/100. Add `speculationrules` with moderate-eagerness prefetch for the nav and CTA paths (for example `/book-shopify-consultation`). That makes the booking page feel instant.

11. **LOW: HTTP/1.1 observed.** `alt-svc: h3` is advertised, so a real browser should negotiate h3 and this is probably a curl artefact.

## What works
- Prerendered static pages (`x-nextjs-prerender`) with Brotli compression.
- Immutable one-year caching for `/_next/static` and 30-day caching with SWR for images.
- Hero images use `next/image` with srcset and fetchpriority (homepage, service, city and case-study pages). Hero preload detection passes.
- Below-the-fold images are lazy (171 of 183 on the homepage). Videos load via IntersectionObserver.
- `font-display: swap` and one consolidated CSS file.
- GTM is loaded asynchronously.
- Security headers (HSTS, CSP, and so on) are present.

## Needs a Google API key (or a real browser run) before sign-off
- CrUX field LCP, INP and CLS (75th percentile) per URL, and LCP subparts.
- Lighthouse score and CLS, with the Cal embed and the video elements.
- Third-party transfer size and main-thread time (GTM contents).
