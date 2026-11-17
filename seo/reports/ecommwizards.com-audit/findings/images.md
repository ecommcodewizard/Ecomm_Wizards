# Image audit: ecommwizards.com

Date: 2026-11-16. Method: static analysis of live server HTML for 4 templates in depth (home, service, case study, migration) and counts for the other two, plus HEAD requests for original file sizes. I did not render the pages, so intrinsic dimensions and displayed sizes are not compared.

## Score: Images 66/100

## Counts (live HTML)

| Page | `<img>` | Missing `alt` attr | `alt=""` | Lazy | No width/height | Formats |
|---|---|---|---|---|---|---|
| / | 183 (91 unique) | 0 | 102 | 171 | 93 | 84 svg, 54 webp, 22 avif, 19 png, 4 jpg |
| /services/shopify-development-agency | 36 | 0 | 20 | 34 | 8 | svg, png, webp |
| /services/.../charlotte | 29 | 0 | 10 | 27 | 6 | not broken down |
| /case-studies/111skin... | 15 | 0 | 1 | 13 | 10 | 8 svg, 6 jpg, 1 png |
| /book-shopify-consultation | 5 | 0 | 1 | 4 | 0 | not broken down |
| /services/migration/woocommerce-to-shopify | 129 (84 unique) | 0 | 32 | 125 | 109 | 54 webp, 53 svg, 18 png, 4 avif |

## Findings

1. **Correction to the code-count assumption: no live `<img>` is missing the `alt` attribute (0 of 397 across the six templates).**
   - Next's image component enforces `alt`, so the code lines that lack it are probably spread or wrapped, or are not rendered on these pages. The real problem is empty alt on content images, below.
   - The migration page has 32 empty-alt images, fewer than the homepage (102). Other migration pages were not checked, so the claim that they are worst is unverified.

2. **HIGH: `alt=""` on meaningful images.**
   - The empty alts are on client and partner logos (`partner_logo_*.svg`, `Case studies/logos/*`, `partner-images-*`) and on `ecomm-green-logo-cropped.png`.
   - Empty alt is correct only for decorative images such as `arrow vector.png`. Logos that serve as social proof should carry the brand name, for example "Everlast logo". The logo rows are duplicated in sliders, so the repeated copies can stay `alt=""` or `aria-hidden`.
   - Fix: add real alt text to the first copy of each logo. Keep decorative copies empty.
   - Impact: accessibility, image search and entity signals. Moderate for SEO but a clear a11y failure.

3. **MEDIUM: Weak alt.** I found one alt of "EBY" on the migration page. Replace it with a descriptive phrase. I did not review every alt string for quality or keyword stuffing.

4. **MEDIUM: Oversized and legacy-format originals.**
   - On the migration page: `lids-px-new-2.png` 581 KB, `everlast-px-new-2.png` 416 KB, `everlast-final-new.png` 395 KB and `slider-desktop-two_2048x2048.png` 220 KB. Total originals are about 4.4 MB for 84 unique images.
   - On the homepage: `ecommwizards_1.jpg` 343 KB and `image-4.png` 243 KB. Total originals are about 2.7 MB.
   - On the service page the hero `Group_1000003974_..._1024x1024.png` is 143 KB.
   - Whether the visitor downloads these depends on whether the image passes through `/_next/image`. Some references are served raw from `/images/...` with a PNG or JPG extension, which suggests unoptimised usage. I did not verify which.
   - Fix: convert PNG and JPG screenshots to WebP or AVIF at source. Check that these pass through `next/image`, and set `sizes` correctly.

5. **MEDIUM: Missing width/height.** 93 of 183 homepage images and 109 of 129 migration images have no width/height attributes. That is a CLS risk. Many of these are probably `fill` or CSS-sized logos, so verify with a Lighthouse CLS run. Provide dimensions or aspect-ratio wrappers.

6. **MEDIUM: Preload clutter (see performance.md finding 3).**
   - The homepage preloads 4 non-hero images.
   - `arrow vector.png` (a decorative PNG with a space in the filename) is preloaded on every page. Rename it, make it an inline SVG, and drop the preload.

7. **LOW: Lazy-loading is mostly correct.** About 93% of homepage images are lazy and the hero is eager. 12 homepage images are eager, and several are the same repeated SVG (`Group_1000004265.svg`). Review whether all need to be eager.

8. **LOW: Format mix.** 22 AVIF on the homepage is good. Logos in `.png` (`111skin logo.png`, `NEOM Wellbeing.png`, `Everlast.png`, `Twillory.png`) should become SVG or WebP.

## What works
- Every `<img>` has an `alt` attribute (zero missing).
- `next/image` is used for heroes, with srcset and `fetchpriority`.
- Heavy use of WebP and AVIF (about 76 of 183 homepage images) and SVG for logos and icons.
- Lazy loading is applied to the large majority of below-the-fold images.
- Images are served with 30-day cache plus stale-while-revalidate.
- The case-study page is lean (12 unique images, about 711 KB of originals).

## Not verified
- Rendered dimensions versus intrinsic dimensions (oversizing).
- Whether specific `/images/*.png` are re-encoded by `/_next/image` in the browser.
- Actual transfer bytes for images per page.
