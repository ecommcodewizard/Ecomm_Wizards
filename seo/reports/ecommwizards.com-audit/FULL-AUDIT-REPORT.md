# Full SEO + GEO audit — ecommwizards.com
**Date:** 16 Nov 2026 · **Method:** claude-seo `/seo audit` (8 specialist checks on live pages: all 144 sitemap URLs for on-page, 30 rendered samples for content, per-template samples for the rest) + Ahrefs connector baseline + code checks in this repo.
**Business type:** Shopify / Shopify Plus agency, lead generation (goal: booked discovery calls). Markets US, UK, CA, AU.
**Limits:** no Google Search Console / GA4 / CrUX data yet (no access or API key), so rankings and real Core Web Vitals are unknown. PageSpeed Insights hit its free quota; performance numbers are lab estimates. SERP checks used web search, not live Google.

---

## Executive summary

### SEO Health Score: **66 / 100**
| Category | Weight | Score | Detail |
|---|---|---|---|
| Technical SEO | 22% | 78 | [findings/technical.md](findings/technical.md) |
| Content quality (E-E-A-T) | 23% | 55 | [findings/content.md](findings/content.md) |
| On-page SEO | 20% | 70 | [findings/onpage.md](findings/onpage.md) |
| Schema / structured data | 10% | 68 | [findings/schema.md](findings/schema.md) |
| Performance (lab est.) | 10% | 62 | [findings/performance.md](findings/performance.md) |
| AI search readiness (GEO) | 10% | 59 | [findings/geo.md](findings/geo.md) |
| Images | 5% | 66 | [findings/images.md](findings/images.md) |
| *Not in the score:* Search experience (SXO) | — | 60 | [findings/sxo.md](findings/sxo.md) |
| *Not in the score:* Mobile / visual | — | 82 | [findings/visual.md](findings/visual.md) |
| *Not in the score:* Agent readiness | — | 88 | [findings/agentic.md](findings/agentic.md) |
| *Separate:* Backlinks (Ahrefs) | — | DR 15 | [../../baseline/ahrefs-2026-11-16.md](../../baseline/ahrefs-2026-11-16.md) |

**One-line verdict:** the site is technically sound and fully crawlable, but **trust is its weakest point**: copied testimonials and unsupported claims, no named people, no linked reviews, no contact details. That hurts Google (E-E-A-T), AI citations and, most of all, a visitor's decision to book a call.

### Top 5 critical issues
1. **Testimonials credited to "Ben Francis, Founder, Gymshark" on 6 migration pages** (WooCommerce, Magento, Salesforce, Amazon, PrestaShop, Liquid→Hydrogen), plus "thousands of migrations", "100% client satisfaction", "90% less downtime". Very likely carried over from Shopify's own pages; reads as if Gymshark is a client. Master Plan §2 ⛔ (fake testimonials/stats) and a legal risk. Verified in code: `app/(frontend)/services/migration/*/page.tsx`.
2. **Fake scarcity on `/services/shopify-store-audit`:** static "Only 2 spots remain… This Week Only… reverts to the standard $1,950 price".
3. **Unverifiable trust claims across the site:** "4.9★ average client rating" (no source), "Shopify Plus Certified / Partner / platinum partner" (inconsistent, and the site's own article says the Plus Partner badge was retired in 2024), "$400M+ revenue", Clutch/Trustpilot badges that link nowhere.
4. **Spam backlink attack:** referring domains went from ~39 (Apr 2026) to 888, almost all link-seller sites with "premium backlinks / PBN" anchors (~300 dofollow). Not built by us (to confirm). Check GSC Manual actions; decide on a disavow.
5. **Booking tracking gaps** (from the code review in the plan): Klaviyo-page bookings aren't tracked or saved, most forms send no conversion, bookings store no source page. We can't yet tell which pages produce calls.

### Top 5 quick wins
1. Remove the Gymshark testimonials and unsupported numbers on the 6 migration pages; remove the fake countdown (≈ 2–3 h, owner confirms what's real).
2. Add the 11 `/insights` posts + `lastmod` to `sitemap.xml` (≈ 1 h).
3. Move real client quotes (Candy Kittens, Everlast, 111SKIN, BARK) onto `/reviews` and link the Clutch/Trustpilot/Google profiles (≈ 2 h + owner links).
4. Fix the blog-post schema bugs: broken image URL (`https://ecommwizards.comhttps://…neon.tech/…`, also exposes a storage host), dateModified earlier than datePublished, author "Ecomm Wizards" as a Person (≈ 2 h).
5. Point migration CTAs to a migration-specific booking/brief instead of the CRO/SEO audit form; bring the booking calendar higher on mobile (≈ ½ day).

---

## Technical SEO — 78
**Works:** absolute self-referencing canonicals everywhere, no stray noindex, 20/20 random sitemap URLs 200 with no redirects, trailing slash → one 308, HSTS, `?c=` spam URLs return 410 and are disallowed, robots.txt groups consistent, real 404 status, full server-side rendering (no JS gap).
**Issues:**
- High: `/insights` (11 posts) missing from `sitemap.xml`; no `lastmod` in either sitemap.
- High: heavy HTML — home 584 KB raw (57 KB compressed; ~140 KB RSC payload, 183 images), service pages ~440 KB, city pages 355–420 KB.
- Medium: HTML not edge-cached (`max-age=0`, `x-hcdn-cache-status: DYNAMIC`) → TTFB 0.63–0.90 s.
- Medium: `http://www.` takes 2 hops; default Next.js 404 page (no custom page with links/CTA).
- Low: minimal CSP sent twice; `Host:` line in robots.txt; retired bot names (Claude-Web, anthropic-ai).
- Hostinger CDN returns 429 to GPTBot and meta-externalagent (training crawlers) although robots.txt allows them — pick one policy in hPanel. Search/user bots (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot…) get through.

## Content quality — 55
**Works:** city pages are genuinely unique (median 5-gram overlap 0.03; the California page is a model: short answer block, own 26-store audit data, cited laws); insights articles are answer-first, 2,200–2,600 words; case studies feature named brands and client quotes.
**Issues:**
- Critical: the Gymshark testimonials / "thousands" / "100% satisfaction" claims; fake countdown on the store-audit page.
- High: `/reviews` is 49 words with no reviews; "4.9★" unsourced; partner-tier claims contradict each other and the site's own article.
- High: no named people (no team bios, unsigned founder note, author "Ecomm Wizards"); no phone/email/address anywhere (the `+1 555 123 4567` is only a form placeholder, but the phone field is required).
- Medium: city pages repeat an exact "<keyword> <City> brands hire" phrase 9–15×; Maine page says "any platform" (vs Shopify-only); no prices shown although `/faqs` has real ranges ($3k–15k, $5k–50k).
- Medium: case studies are short (386–497 words) with no baseline, time window or data source; numbers need owner verification.
- Medium: no "updated" dates on service pages; two posts have modified < published.

## On-page — 70
**Works:** 144 unique titles and descriptions, one H1 per page, templated-metadata risk low.
**Issues:**
- High: cannibalisation — `/insights/shopify-cro-agency` vs `/services/shopify-cro-agency`; `/insights/shopify-plus-development-agency` vs `/services/shopify-plus-development` (the article is the stronger page in both); development pages overlap (agency / store-development / 2-0 / theme); `/services/shopify-store-audit` vs `/free-shopify-store-audit`.
- Medium: several pages per city (Miami ×4, NY ×3, Chicago ×3, Raleigh ×3) and city/state pairs; footer links all 57 city pages from every page (172–227 internal links per page).
- Medium: 9 different CTA labels and 7 offers; city pages send visitors to a `#contact` form rather than the calendar; several money pages link to no case study.
- Low: 12 titles > 60 chars, 13 descriptions > 160 chars (mostly shopify-development-agency city pages).

## Schema — 68
**Works:** all JSON-LD valid and server-rendered; Service + BreadcrumbList + FAQPage on service and city pages (correction: static service pages *do* have Service); no LocalBusiness/Review/AggregateRating (guardrails respected).
**Issues:** High — blog-post image URL broken (double origin, leaks storage host), dates inverted, author Person "Ecomm Wizards". Medium — conflicting Organization nodes (post publisher reuses `/#organization` with a different shape; case studies add @id-less Organizations); thin Organization (string logo, no contactPoint, 4 sameAs); case-study Article without dates or VideoObject; no BreadcrumbList on the booking page. Ready-made JSON-LD snippets are in the findings file.

## Performance — 62 (lab estimates)
TTFB 0.63–0.90 s; ~620 KB JS per page (~800 KB home; 110 KB polyfills); homepage preloads 5 images (4 aren't the LCP image); fonts via @fontsource (7 faces, no preload, "Nunito" referenced without a font face); Cal embed not measurable without a rendered run. Real LCP/INP/CLS unknown until a PageSpeed API key or GSC access.

## Images — 66
Correction to the code estimate: on the 6 live templates checked, **0 of 397 images lack the alt attribute**; the real issue is **empty `alt=""` on client/partner logos** (102 on the home page). 93/183 home images lack width/height; migration-page originals ~4.4 MB with PNGs up to 581 KB.

## AI search readiness (GEO) — 59
Platform estimates: Google AI Overviews 60, ChatGPT Search 57, Perplexity 58, Bing Copilot 52. Crawler access good (78). Weak points: authority/off-site proof (40) and citability (52) — inconsistent facts across pages, schema and llms.txt; no "Ecomm Wizards is a…" statement on the home page; slogan headings instead of buyer questions; badges not linked; no named founder. 40 buyer prompts (10 per market) are listed in [findings/geo.md](findings/geo.md) for the tracker's AI Prompts tab.

## Search experience (SXO) — 60
- "woocommerce to shopify migration" SERP is ~80% how-to guides; our page is a SaaS-style sales page ("Get a Demo", gated playbook) → page-type mismatch.
- Migration CTAs open the CRO/SEO audit form; timelines conflict (2–6 weeks vs 8–14 weeks on the Plus page).
- "shopify development agency" / "shopify plus agency" SERPs are ~half "top agency" listicles → get listed (outreach list in the findings file: ecommercefastlane.com ranks for all six keywords).
- Persona fit: replatforming merchant 43 · DIY audit seeker 57 · Plus ecommerce manager 68 · $1–10M founder 72 · Klaviyo buyer 76.

## Mobile / visual — 82
Booking CTA above the fold on all 5 tested pages; no popups; CLS ≈ 0. But the calendar sits ~1.7 screens down on the booking page and ~80% down service/city pages; the rotating "BOOK A CALL" badge overlaps the hero CTA; hamburger 45×27 px and many links under 48 px; most body text 13–14 px. Screenshots in [screenshots/](screenshots/).

## Agent readiness — 88
Accessibility tree fully labelled, server-rendered, real 404s, llms.txt valid. Optional: Content-Signal line in robots.txt; trim llms.txt.

## Backlinks (Ahrefs) — DR 15
888 live referring domains, of which ~30–40 look genuine; surge since May 2026 from spam link sellers. Ahrefs sees 0 organic keywords (common for small sites; GSC needed). See baseline file.

---
Prioritised fixes: [ACTION-PLAN.md](ACTION-PLAN.md) · Structured data: [audit-data.json](audit-data.json)
