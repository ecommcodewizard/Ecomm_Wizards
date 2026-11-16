# Visual / mobile audit - ecommwizards.com (2026-11-16)
Viewports: desktop 1440x900, mobile 390x844 (2x). Screenshots: screenshots/p{1-5}_{desktop,mobile}_atf.png
(p1 /, p2 /book-shopify-consultation, p3 /free-shopify-store-audit, p4 /services/shopify-development-agency, p5 .../charlotte)

Score: 82/100

## Passes
- No horizontal scroll (scrollWidth = viewport) on all 5 pages, both viewports.
- No popups/modals/cookie banners at load. Layout shift negligible (CLS 0 mobile, <=0.054 desktop home/book/audit).
- Value prop + booking CTA above fold on mobile on all 5 pages (home: "Book a Call" 52px at y=376; service/city: "Book a Free Discovery Call" 52px; book/audit: sticky 56px pill).
- Cal.com inline embed (30min) renders on mobile and desktop.

## Findings
1. MEDIUM - Cal embed on /book-shopify-consultation sits ~1,400px down on mobile (iframe top 1548px, ~1.7 screens), below a long intro and a cream section. Desktop: calendar is partly above fold at y=535. Mitigated by sticky "Book My Free Call" pill. Fix: on mobile, shorten hero copy/move calendar under H1.
2. MEDIUM - Service/city pages: calendar is 19,800px (service) / 22,000px (Charlotte) down on mobile (~80-85% of page). Only reachable via CTAs/sticky badge. Confirm CTAs anchor-scroll to #book-a-call or open the booking page.
3. MEDIUM - Fixed circular rotating "BOOK A CALL" badge (92px, 11% of viewport) on service/city mobile overlaps the end of the primary hero CTA ("Book a Free Discovery Call" arrow clipped by the badge in p5 screenshot) and covers content while scrolling. Under 15% rule but collides with CTA. Fix: reposition/reduce, hide near hero CTA.
4. LOW - Sticky elements: header 101px (12%) + bottom pill 56px (7%) = ~19% of viewport combined on book/audit mobile pages. Each is under 15%, but combined chrome is high. Consider shrinking header on scroll.
5. MEDIUM - Tap targets <48px: hamburger "Open menu" 45x27px (most important mobile control); hero CTAs 43-52px high (home "Free Quote"/"Free Strategy" 43px; "Get a Free Audit" text link 26px tall; "See Case Studies" 26px); menu drawer links 43px; inline text links in body 19-23px tall (city page); footer social icons 32x32; carousel dots 8x8 (home). Fix: min 48x48 hit area via padding.
6. MEDIUM - Font sizes below 16px: base body/card text is 13-14px on mobile (about 180-220 elements at 13px, ~90-180 at 14px) and 9-12px in labels/breadcrumbs (city breadcrumb ~12px, truncated "Servic...", "Shopify Development Ag..."). analyze_visual.py reports base 16 (body default), but computed visible text is mostly 13-15px. Fix: raise to >=16px for paragraphs/links, >=14px labels.
7. LOW - Breadcrumb on mobile truncates with ellipsis (Servic..., Shopify Development Ag...) - low usability, fine for SEO.
8. LOW - Home hero mobile: two cards ("Free Quote", "Free Strategy") crowd the fold; "Get a Free Audit" is a small 26px-tall text link below. Secondary CTAs compete with primary "Book a Call"; acceptable.
9. LOW - Home desktop CLS 0.054 (good, <0.1); no visible jump. Desktop /services/shopify-development-agency has a fixed 320px-tall (36% of viewport) element ("DEVELOPMENT SERVICES / Every Sho...") - likely a sticky sidebar or mega-menu panel; verify it is not covering content at 1440 wide.
10. INFO - Home and book page: mobile H1s are readable and large; the hero image on home is dim/dark overlay (low contrast but text legible). Audit page trust bar "150+ Stores Built / $400M+ Revenue" is a marquee, clipped by design. Claims (150+ stores, $400M+, 95%+) are site copy - verify against sources per CLAUDE.md.

## Per-page above-fold (mobile)
| Page | H1 | Booking CTA ATF | Notes |
|---|---|---|---|
| / | yes | Book a Call 52px | + 2 cards; menu 45x27 |
| /book-shopify-consultation | yes | sticky pill 56px | calendar 1.7 screens down |
| /free-shopify-store-audit | yes | sticky pill 56px | form-based, no Cal |
| /services/shopify-development-agency | yes | CTA 52px + badge | Cal ~20k px down |
| .../charlotte | yes | CTA 52px, badge overlaps | Cal ~22k px down |

Sandbox: true (Chromium sandbox active). Tool note: capture_screenshot.py only supports 1920/375 presets; custom 1440/390 captures were done with the skill's bundled Playwright. Per-page default captures were removed.
