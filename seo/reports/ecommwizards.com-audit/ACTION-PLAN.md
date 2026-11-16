# Action plan — ecommwizards.com audit (16 Nov 2026)
*Ordered by impact on booked calls, then by the plan's audit order (§14.2: baseline → technical P1 → cannibalisation → quick wins). Each item notes its site-plan priority (P0–P3), effort (S < 2 h · M < 1 day · L multi-day) and whether the owner must decide or supply something. Every shipped item gets a row in the tracker's Change Log.*

## Critical — this week (trust & legal; these also hold back bookings)
| # | Fix | Where | Effort | Owner input |
|---|---|---|---|---|
| C1 | Remove the "Ben Francis, Founder, Gymshark" testimonials and the "thousands of migrations / 100% client satisfaction / 90% less downtime / up to 150% faster" claims; replace with real client quotes and verified numbers from our case studies | `app/(frontend)/services/migration/*/page.tsx` (WooCommerce, Magento, Salesforce, Amazon, PrestaShop, Liquid→Hydrogen) + `services/migration/page.tsx` | M | Confirm which numbers are real |
| C2 | Remove the static countdown "Only 2 spots remain… This Week Only… $1,950" | `/services/shopify-store-audit` | S | — |
| C3 | Make credentials consistent and true everywhere (pages, schema, llms.txt): partner tier wording, "4.9★" (source it or remove), "$400M+", "150+ stores"; link every review badge to its live profile | site-wide, `lib/brand-stats.ts`, `app/llms.txt/route.ts` | M | Real partner status, review profile links |
| C4 | Check GSC → Manual actions + Security issues; decide on a disavow file for the spam link domains | GSC; Ahrefs export (~13k units) | S | Did anyone ever buy links? |
| C5 | Booking measurement (site plan P0): shared Cal link, Klaviyo embeds tracked + saved, `lead_submit` on every form, `cta_click` / `cal_open`, booking source (landing page, UTM, referrer) stored, Cal webhook | `CalEmbed.tsx` ×3, forms, `/api/bookings` | L | Real Cal link, Cal plan (webhooks) |

## High — weeks 1–3
| # | Fix | Where | Effort | Owner input |
|---|---|---|---|---|
| H1 | Add `/insights` + all posts to the sitemap; add `lastmod` to all URLs | `app/sitemap.ts` | S | — |
| H2 | Fix blog-post schema: image URL double origin (and stop exposing the storage host), datePublished ≤ dateModified with full timestamps, real named author (Person with url/image/sameAs) | `app/(frontend)/insights/[slug]/page.tsx`, `lib/blog/cms.ts` | M | Author names + bios |
| H3 | Real contact details (phone/email, WhatsApp optional) in header/footer/contact + Organization `contactPoint`; make the phone field optional on the audit form | layout, `Footer.tsx`, `AuditForm.tsx` | S | Phone, email |
| H4 | `/reviews`: show real named quotes (Candy Kittens, Everlast, 111SKIN, BARK) + links to Clutch/Google/Trustpilot | `app/(frontend)/reviews/page.tsx` | M | Profile links |
| H5 | Named people: team bios, signed founder note, author pages | About page, Payload Authors | M | Names, bios, photos |
| H6 | Migration pages: CTAs go to a migration-specific booking/brief (not the CRO audit form); one consistent timeline; add a how-to/guide section (or a companion guide post) to match the SERP | `services/migration/*` | L | Real timelines |
| H7 | Booking calendar higher on mobile (booking page hero shorter; service/city CTAs anchor to the calendar or the booking page); move the rotating badge off the hero CTA; tap targets ≥ 48 px (hamburger, CTAs, footer icons) | `book-shopify-consultation/page.tsx`, `ServicePageTemplate.tsx`, Header | M | — |
| H8 | Cannibalisation decisions: insights vs service pages for "shopify cro agency" and "shopify plus development agency"; development page overlap; `/services/shopify-store-audit` vs `/free-shopify-store-audit` (merge/301/canonical/re-angle) | several | M | **Approval for any merge/301 (D1 if large)** |
| H9 | Edge-cache prerendered HTML on Hostinger (target TTFB < 0.4 s); align CDN bot policy with robots.txt (GPTBot, meta-externalagent currently 429) | hPanel / `next.config.ts` headers | M | hPanel access |
| H10 | Give logos real alt text (first copy of each) or mark decorative copies `aria-hidden` | logo sliders | S | — |

## Medium — weeks 3–6
- Home page: 40–60-word "Ecomm Wizards is a Shopify agency that…" block + short FAQ; question-style H2s with answer-first paragraphs on the top service pages (GEO). Run `/seo drift compare` first (template change).
- City pages: cut the repeated "<keyword> <City> brands hire" phrase; fix the Maine "any platform" line; show the real price ranges from `/faqs`; send CTAs to the calendar instead of `#contact`; review the footer's 57 city links (link by hub instead).
- Schema: Organization logo as ImageObject, fuller `sameAs` (Clutch, Shopify Partner Directory, Crunchbase, YouTube); one Organization node (no conflicting copies); case-study dates + VideoObject; BreadcrumbList on the booking page; CollectionPage on `/insights`.
- Pricing / packages page using the real ranges (site plan G.3).
- Case studies: add baseline, time window and data source to each result (owner verifies) and set `verified: true`.
- Performance: one LCP preload only; fonts via `next/font` (fix the missing Nunito); modern `browserslist` to cut polyfills; WebP/AVIF for heavy PNG/JPG; width/height on images; reserve space + preconnect for Cal.
- 12 long titles and 13 long descriptions (mostly shopify-development-agency city pages).
- Custom `not-found.tsx` with links to top services and a booking CTA; `http://www` → one redirect hop; clean robots.txt (retired bot names, `Host:` line).
- Mobile body text ≥ 16 px.

## Low / later
- Content-Signal line in robots.txt; trim llms.txt and keep its facts in sync with the site.
- Remove the duplicate CSP header.
- Outreach/GEO targets from the SXO check (ecommercefastlane.com, DesignRush, Klaviyo partner directory, app-vendor "best agency" lists) → site plan §H.4, after C1–C3 are fixed.

## Data still needed for a complete picture
- **Search Console** (rankings, indexing, manual actions) and **GA4** (bookings by landing page).
- A free **PageSpeed Insights API key** for real Core Web Vitals (and CrUX field data).
