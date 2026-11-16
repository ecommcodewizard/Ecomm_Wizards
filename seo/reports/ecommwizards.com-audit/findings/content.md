# Content Quality / E-E-A-T: ecommwizards.com

Fetched 2026-11-16. Sample: 30 pages, rendered and text-extracted (home, about, book, free audit, contact, reviews, FAQs, case-study hub, insights hub, 2 insights articles, 10 service pages, 6 city pages, 3 case studies). Raw HTML for all 144 sitemap URLs was also pulled and used for the duplication and metadata checks. Every claim below was observed on the live site. Nothing is copied from code.

## Scores

| Category | Score |
|---|---|
| **Content quality** | **55 / 100** |
| E-E-A-T, weighted (internal model, not Google's) | 51 |
| Experience (20%) | 65: named-client case studies with named quotes; first-hand SERP research on the city pages |
| Expertise (25%) | 55: technical depth is solid, but no person is named as the expert |
| Authoritativeness (25%) | 45: logos and award names only, with no links to Clutch, Trustpilot or the Shopify Partner Directory |
| Trustworthiness (30%) | 42: fake scarcity, an unsourced rating, an empty reviews page, no contact details, claims that contradict each other |
| AI citation readiness | 62 / 100 |

## Critical / High

**1. Fake-scarcity countdown on the paid-audit page (Critical)**
- Evidence: /services/shopify-store-audit has the H2 "Claim Your Free $1,950 Shopify Store Audit (This Week Only)". The page says "4 complimentary... audits this week. Only 2 spots remain. When the timer hits zero... the page reverts to the standard $1,950 price", with a "DISAPPEARS IN:" timer. This is static evergreen copy that crawlers and every visitor see.
- Why it matters: this is a deceptive-urgency pattern. QRG treats it as a trust negative, it creates FTC dark-pattern exposure in the US, and it puts off the sophisticated Plus buyers the site is chasing. It also runs into the CLAUDE.md "never invent numbers" rule.
- Fix: remove the timer and the "spots remain" copy. If the $1,950 audit is real, publish it as a fixed offer.

**2. The /reviews page has no reviews (High)**
- Evidence: /reviews is 49 words. The H1 is "What Our Clients Say About Ecomm Wizards" and the meta says "Read what 150+ Shopify merchants say... Real reviews", but there are no testimonials on the page. The page is linked sitewide.
- Fix: move the real named testimonials already on the home page and case studies (Jamie Laing of Candy Kittens, Daniel Summerson of Everlast, Eva Alexandridis of 111SKIN, Nari Sitaraman of BARK) onto /reviews, each linked to its case study. Embed or link the real Clutch and Trustpilot profiles. Until then, noindex the page or rewrite the meta. Do not add Review or AggregateRating schema (geo guardrails).

**3. "4.9★ Average client rating" has no source (High)**
- Evidence: it is a hero stat on city pages (e.g. /services/ecommerce-agency/maine, /maryland, /shopify-development-agency/new-york, /shopify-app-development/raleigh) and on /services/shopify-2-0-development and /services/shopify-plus-development. It has no platform, review count or link. The home page shows "Clutch Reviews" and "Trustpilot Reviews" logos that are images with no link.
- Fix: name the source and count (e.g. "4.9 on Clutch, N reviews") and link to the profile. If no such figure exists, remove it.

**4. The site's own article undercuts its main credential (High)**
- Evidence: /insights/shopify-plus-development-agency says the "Shopify Plus Partner" badge "was retired by Shopify at the end of 2024. Plenty of agencies still show it anyway." The site itself still shows "Shopify Plus Partners Since 2021" and "Shopify Plus Partner" (/services/shopify-development-agency), "Shopify Plus Certified" (home) and "Earned Shopify Plus Partner status" (about timeline).
- Fix: replace the badge claims with the current Shopify partner tier and a Partner Directory link, so the site passes its own scorecard.

**5. No named people anywhere (High)**
- Evidence: there is no team section on the about page, even though its meta description promises "Meet the team". "A Note From Our Founder" is unsigned. Insights articles name "Ecomm Wizards" as author, typed as `Person` in BlogPosting schema. The site claims "80+ team members" but names none.
- Fix: name the founder and add 3-6 leads, each with a photo, role, years on Shopify, LinkedIn and a short bio. Use a real Person byline and reviewer on articles, and fix the schema.

**6. No contact details (High)**
- Evidence: there are no `tel:` or `mailto:` links on any sampled page, and no postal address. "Headquartered in Toronto" appears only in the about-page copy. Organization schema has no address or contactPoint. The "+1 555 123 4567" seen on /free-shopify-store-audit is only an input placeholder, but that phone field is required (*), which adds friction.
- Fix: publish a business email and a real phone and/or office address on /contact-shopify-agency and in the footer. Make the phone field optional.

## Medium

**7. City pages repeat one keyword-stuffing pattern (Medium, doorway signal)**
- Evidence: the pages are unique. Median 5-gram Jaccard across all 57 city pages is 0.03, and Maine vs Maryland is under 0.05. However, each one inserts the exact-match phrase in an ungrammatical "<keyword> <City> brands hire" construction:

  | Page | Phrase | Uses | Density |
  |---|---|---|---|
  | Maine | "ecommerce agency Maine" | 15 | 2.3% |
  | Raleigh app | "shopify app development company raleigh" | 15 | 3.2% |
  | NY | "shopify agency new york" | 15 | 2.7% |

  Example: "what an ecommerce agency Maine owners retain gets asked to do". Every page also links to all 57 cities from the footer.
- Fix: keep the phrase in the H1, title and once in the intro, and use natural language elsewhere. Limit "other markets" links to nearby or related cities. Hold new city pages (R8).

**8. City pages contradict the site's positioning and pricing stance (Medium)**
- Evidence: Maine says "We work on any platform you are already using", while service pages say "We build exclusively on Shopify". Maine also criticises competitors because "none stated a cost" (0 of 7), then answers its own cost FAQ with "It turns on how many products you sell". Real ranges exist on /faqs ($3,000-$15,000 and $5,000-$50,000) but not on service or city pages.
- Fix: settle on one positioning. Put the FAQ price ranges on the city and service pages; that turns the page's own argument into a reason to book.

**9. Claims that conflict with each other (Medium)**
- Evidence: the WooCommerce migration page says "We've done this thousands of times. Literally" and "100% client satisfaction", while the site elsewhere says 150+ stores. The home page charts "Shopify Tasks Completed" doubling to "512,000" by 2030 (projected). "Every second saved = 7% more conversions" has no source. The CRO page says clients "rank us among the best".
- Fix: keep one verified set of numbers (150+ / $400M+ / 8+ years) and cite the source for any third-party stat. Remove the projections and the superlatives.

**10. Case-study proof is thin (Medium)**
- Evidence: the three sampled case studies are 386-497 words. Headline percentages exist (111SKIN +46% CVR, +21% revenue YoY; John Hardy +71% in under 3 months; Andrea Maack +144.3% flows revenue), but there is no baseline, measurement window, data source or scope. Every H1 reads "<Brand> Shopify Case Study".
- Fix: add Challenge, Baseline, What we did, Result (period, source: GA4/Shopify), Team, Stack. Verify each number with the owner before editing.

**11. Freshness signals are missing or wrong (Medium)**
- Evidence: no service page shows an "Updated" date. Insights BlogPosting schema has datePublished after dateModified (cro-agency: published 2026-11-13, modified 2026-11-12; plus-dev-agency: 11-10 vs 11-09).
- Fix: show "Last reviewed <date> by <name>" on service pages and correct the article dates.

## Low

- **Thin conversion pages:** /book-shopify-consultation has 139 words before "Loading calendar..." and /contact-shopify-agency has 114. Add a short "what happens on the call", who you'll speak to (named), and 2-3 proof points next to the calendar.
- **Readability:** Flesch 38-48 on /services/shopify-store-development, /shopify-store-audit, /about-shopify-agency and /shopify-development-agency, against 65-79 on the city pages and insights articles. Bring the older service pages up to the newer style.
- **Generic copy:** the about page reads as boilerplate ("Zero Cutting Corners", "Growth Obsessed Team", "Gun to a Knife Fight"), and the award list gives no issuers ("Best Shopify Agency"). Name who gave each award and in which year.

## What works

- City pages are genuinely unique and carry real information gain: original SERP research (Maine: "0 of 7 agency pages stating any cost"), objection handling, and "In short" answer-first blocks. They are not boilerplate doorways.
- The insights articles are strong. They open with "The short answer", run 2,200-2,600 words with Flesch 67-76, and include cost tables and scorecards. This is good AI-citation material.
- Case studies are named, recognisable brands with named client quotes, which is real Experience evidence.
- FAQPage schema on service, city and insights pages. /faqs answers cost and timeline questions with figures.
- CTAs are consistent: every service page has in-body "Book a Free Discovery Call / Strategy Call".

## AI citation readiness (62)

Plus: answer-first blocks, tables, FAQ schema, quotable price ranges on /faqs and insights. Minus: no named author entity, unsourced stats, the /insights articles are missing from the sitemap (see onpage.md), and the dates are inconsistent.

## Structured findings (audit-data.json → Content Quality)

```json
[
{"id":"CQ1","severity":"critical","title":"Fake-scarcity countdown on paid audit page","url":"/services/shopify-store-audit"},
{"id":"CQ2","severity":"high","title":"/reviews contains no reviews","url":"/reviews"},
{"id":"CQ3","severity":"high","title":"Unsourced 4.9-star rating stat","url":"city pages, /services/shopify-plus-development"},
{"id":"CQ4","severity":"high","title":"Plus Partner badge claim contradicted by own article","url":"/insights/shopify-plus-development-agency"},
{"id":"CQ5","severity":"high","title":"No named team, founder or authors","url":"/about-shopify-agency, /insights/*"},
{"id":"CQ6","severity":"high","title":"No phone/email/address published","url":"sitewide"},
{"id":"CQ7","severity":"medium","title":"Exact-match keyword pattern repeated on city pages","url":"/services/*/<city>"},
{"id":"CQ8","severity":"medium","title":"City copy contradicts Shopify-only positioning and price stance","url":"/services/ecommerce-agency/maine"},
{"id":"CQ9","severity":"medium","title":"Inflated or inconsistent claims","url":"/services/migration/woocommerce-to-shopify, /"},
{"id":"CQ10","severity":"medium","title":"Case studies lack baseline, period and source","url":"/case-studies/*"},
{"id":"CQ11","severity":"medium","title":"No visible updated dates; datePublished > dateModified","url":"/services/*, /insights/*"}
]
```
