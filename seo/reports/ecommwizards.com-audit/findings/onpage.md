# On-page: titles, metas, headings, intent mapping, internal links: ecommwizards.com

Fetched 2026-11-16. Title, meta, H1 and canonical were parsed from raw HTML for all 144 sitemap URLs. Headings, links and CTAs were analysed on a 30-page rendered sample. The templated-metadata check (`metadata_template.py`) was run across all 144 title/description pairs.

## Score

**On-page: 70 / 100.** The technical hygiene is close to clean. The points are lost on keyword-to-URL mapping, where several pages target the same query, and on link and CTA sprawl.

## Hygiene (all 144 URLs)

| Check | Result |
|---|---|
| Duplicate titles / descriptions | 0 / 0 |
| H1 count ≠ 1 | 0 pages |
| Canonical | self-referencing on all 144; no robots noindex |
| Titles > 60 chars | 12 (e.g. /services/shopify-development-agency/raleigh 67, /atlanta 64, /columbus 64, /chicago 63, /case-studies/denim-tears-... 62) |
| Descriptions > 160 chars | 13, almost all in the /services/shopify-development-agency/* family (the hub is 169, /dallas 169, /atlanta 168, /alabama 167, /colorado 167) |
| Templated metadata | `site_risk: low`, `templated_ratio: 0.0`, `shared_cta_phrases: {}` |
| Secondary flags | `brand_suffix_in_description` ×35, `description_echoes_title` ×17 (e.g. /services/shopify-development-agency, /shopify-plus-development, /shopify-store-development, /klaviyo-agency) |

Fix (Low): trim the 25 over-length tags. In the 17 descriptions that echo the title, replace the restated title with a proof point or a price or timeline fact. Example: "Fixed-price builds from $X, live in ~6 weeks", using the ranges already published on /faqs.

## Findings

**1. Insights articles compete with the matching service pages (High)**
- Evidence:
  - /insights/shopify-cro-agency ("Shopify CRO Agency for $10M+ Brands: How to Choose", 2,207 words) targets the same head term as /services/shopify-cro-agency ("Shopify CRO Agency | Conversion Rate Optimization Services").
  - /insights/shopify-plus-development-agency (H1 "Shopify Plus Development Agency: How to Choose...") competes with /services/shopify-plus-development ("Shopify Plus Development Agency | Enterprise Builds"), which is only 620 words.
  - In both cases the article is longer and more answer-first than the page that converts.
- Fix: retarget each article to the "how to choose a …" modifier in its title and H1, keeping the slug unless there is approval for a redirect. Add a prominent contextual link from each article to its service page. Check in GSC which URL currently receives impressions for the head term before changing anything.

**2. The 11 insights articles are missing from the sitemap (High)**
- Evidence: /insights links to 11 articles (/insights/shopify-cro-agency, /shopify-plus-consultants, /shopify-vs-woocommerce, …), and none of them are in the 144-URL sitemap list.
- Fix: add /insights and every article to the sitemap with a correct lastmod.

**3. Development cluster: several pages target one query (High)**
- Evidence:

  | URL | Title | Words |
  |---|---|---|
  | /services/shopify-development-agency | "Shopify Development Agency \| Custom Builds and Shopify Plus" | 1,116 |
  | /services/shopify-store-development | "Custom Shopify Store Development \| Ecomm Wizards" | 658 |
  | /services/shopify-2-0-development | "Shopify 2.0 Development \| Online Store 2.0 Experts" | 581 |
  | /services/shopify-theme-development | "Shopify Theme Development Agency" | not sampled |
  | / (home) | "Shopify Agency \| Design, CRO, Development…" | 1,403 |

  - Store-development and 2.0 also call themselves "Shopify development agency" in their H2s ("Why Brands Choose Ecomm Wizards as Their Shopify 2.0 Development Agency").
  - Store-development has 0 in-body case-study links and a Flesch score of 38.
  - The /services/ecommerce-agency hub ("Ecommerce agency built on reliability and excellence") is platform-neutral and distinct enough. Its title should state the intent, e.g. "Ecommerce Agency for Shopify Brands | Build, Migrate, Grow".
- Fix: make /services/shopify-development-agency the single "Shopify development agency/company" target. Give each other page a distinct intent:
  - store-development: new-store and launch builds for first-time or smaller brands.
  - 2.0: OS 1.0 → 2.0 / Horizon theme upgrades. "Shopify 2.0" is now an ageing term.
  - theme-development: custom themes.

  Each should link to the hub with descriptive anchors. Any merge or 301 needs owner approval.

**4. Audit pages: two pages offer the same free audit (High)**
- Evidence:
  - /free-shopify-store-audit ("Free Shopify Store Audit | Find Revenue Leaks", 275 words, form) and /services/shopify-store-audit ("Shopify Store Audit | CRO, SEO & UX Audit Service", 807 words) both cover CRO/SEO/speed/UX.
  - Both currently offer the audit free; the service page uses the "$1,950 … This Week Only" countdown (see content.md CQ1).
  - /services/klaviyo-audit is a third audit offer.
- Fix: /free-shopify-store-audit keeps "free shopify store audit". /services/shopify-store-audit becomes the paid, in-depth audit with a fixed price and deliverables, retitled e.g. "Shopify CRO & UX Audit Service | Prototypes in 5 Days". The two pages should link to each other ("Want the full paid audit?" and the reverse).

**5. CRO and A/B testing pages overlap only mildly (Medium)**
- Evidence:
  - /services/shopify-cro-agency's meta claims "A/B testing", and /services/a-b-testing ("Shopify A/B Testing Agency | Shoplift Certified Experts") targets the overlapping "Shopify A/B testing agency".
  - The A/B page has 0 in-body case-study links.
- Fix: keep both pages. Present A/B testing as the Shoplift-led sub-service of CRO: the CRO page links to it with the anchor "Shopify A/B testing", and the A/B page links back to the CRO page. Drop "A/B testing" from the CRO meta. Add 2 CRO case studies to the A/B page.

**6. Multiple city pages per city (Medium)**
- Evidence:
  - New York has 3 pages: /services/shopify-development-agency/new-york ("Shopify Agency New York"), /services/ecommerce-agency/new-york ("Ecommerce Agency New York Brands Hire") and /services/shopify-seo-agency/new-york.
  - Miami ×4, Chicago ×3, Raleigh ×3, Florida ×3, and LA, Boston, Austin and Minneapolis ×2 each.
  - City and state pairs overlap too: Denver + Colorado, Milwaukee + Wisconsin, LA/SD/OC + California.
  - "Shopify agency <city>" and "ecommerce agency <city>" have close SERP intent for a Shopify-only agency.
- Fix: check GSC for query overlap per city pair. Make sure each pair has distinct H1 and intro intent and cross-links. No new city pages without approval (R8). Ask the owner to decide whether the state pages should consolidate the city pages.

**7. Titles in the shopify-development-agency/* family drift from the hub's keyword (Medium)**
- Evidence:
  - /chicago targets "Shopify Website Design Company Chicago" (title and H1, 9 exact uses).
  - /miami and /vermont target "Shopify Developer …", /raleigh "Shopify Development Services Raleigh", and /seattle "Seattle Shopify Agencies Compared", which reads as listicle intent on a money page.
- Fix: varied modifiers are fine, but keep the parent term (Shopify agency / development) in every title. Retitle Seattle to transactional intent.

**8. Sitewide footer links all 57 city pages (Medium)**
- Evidence: the footer on the home page and every sampled page carries links to all 57 city pages, so each sampled page has 172-227 internal links. This pattern is commonly read as a doorway signal, and it dilutes the links to money pages.
- Fix: replace it with one "Locations" link (or a short list by state) in the footer. Keep the contextual "Other markets" blocks on city pages, limited to 6-8 relevant cities.

**9. Too many CTAs and offers for the call goal (Medium)**
- Evidence:
  - CTA labels in the sample: "Book a Call", "Get Started", "Get a Free Quote", "Work With Us", "Get in touch with us", "Claim Free Audit", "Try it Free", "Start the A/B Test Drive" and "Get a Free Klaviyo Audit".
  - Offers: free consultation, free audit, a $1,950 audit, a free quote, a Klaviyo audit, an A/B "test drive" and a migration "test drive".
  - City pages send users to an on-page #contact form ("Get in touch with us") rather than the /book-shopify-consultation calendar.
- Fix: one primary CTA sitewide, "Book a free 30-min call", pointing to the calendar, plus one secondary, "Get a free store audit". City pages should embed or link the calendar. Log the change in the tracker Change Log, since it affects conversion.

**10. Proof pages are under-linked from money pages (Medium)**
- Evidence: there are 0 in-body case-study links on /about-shopify-agency, /services/shopify-store-audit, /free-shopify-store-audit, /services/shopify-store-development and /services/a-b-testing. On /services/migration/woocommerce-to-shopify, the "Migration Case Studies" section links to none.
- Fix: link 2-3 matching case studies (e.g. Capelli Sports or Chlobo for migrations) with descriptive anchors. Link the case studies back to their service page ("See our Shopify CRO service").

**11. Weak or generic titles and H1s (Low)**
- Evidence:
  - The case-study H1s are all "<Brand> Shopify Case Study".
  - /services/ecommerce-seo-agency is titled "Ecommerce SEO agency that makes Google like your product".
  - /contact-shopify-agency is titled "Hire a Shopify Plus Agency | Contact…", which competes with Plus intent.
- Fix: case-study H1s should take the form "<Brand>: +46% conversion after a Shopify Plus CRO redesign". The contact page title should become "Contact Ecomm Wizards | Shopify Agency".

## What works

- Every title and description is unique across the site, and the template-risk check is low.
- Exactly one H1 per page, self-canonicals, no stray noindex.
- Most titles are under 60 characters and lead with the keyword.
- Service and city H2s are descriptive and question-led ("Is Your Store Design Costing You Orders?", "What NYC brands ask before they decide"), which supports answer-first extraction.
- FAQPage, BreadcrumbList and Service schema are on all service and city pages.
- /book-shopify-consultation is reachable from the nav on every page.

## Structured findings (audit-data.json → On-page)

```json
[
{"id":"OP1","severity":"high","title":"Insights articles cannibalise CRO and Plus service pages"},
{"id":"OP2","severity":"high","title":"11 insights articles absent from sitemap"},
{"id":"OP3","severity":"high","title":"Development cluster keyword overlap (dev-agency/store-dev/2.0/theme)"},
{"id":"OP4","severity":"high","title":"Two free-audit pages target same query"},
{"id":"OP5","severity":"medium","title":"CRO vs A/B testing mild overlap"},
{"id":"OP6","severity":"medium","title":"Multiple city pages per city/state"},
{"id":"OP7","severity":"medium","title":"City title keyword drift (Chicago, Seattle)"},
{"id":"OP8","severity":"medium","title":"Sitewide footer links all 57 city pages"},
{"id":"OP9","severity":"medium","title":"CTA and offer sprawl; city CTAs bypass calendar"},
{"id":"OP10","severity":"medium","title":"Money pages lack case-study links"},
{"id":"OP11","severity":"low","title":"25 over-length titles/metas; 17 descriptions echo title"}
]
```
