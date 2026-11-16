# ECOMM WIZARDS — SEO + GEO BOOKINGS OPERATING PLAN
### How we run SEO, AEO and GEO for ecommwizards.com, week by week, to get more booked calls

**Version:** 1.0 · 16 Nov 2026 · **Owner:** Mateen (ecommcodewizard) · **Operator:** Claude (Claude Code in this repo)
**Rulebook:** [MASTER-SEO-GEO-PLAN.md](MASTER-SEO-GEO-PLAN.md) (v1.0). This file is the site-specific instance of that plan; every `§x` below points to the Master Plan section where the full method lives.
**Working log:** [SEO-GEO-Site-Tracker.xlsx](SEO-GEO-Site-Tracker.xlsx) (Checklist, Routine, Approvals, Keywords, Content, Links, AI Prompts, KPIs, Weekly Bookings, Change Log).

---

## HOW TO USE THIS FILE

1. **The goal is booked calls.** Every task here exists to raise *qualified calls held per week*. If a task doesn't connect to that within 90 days, it waits.
2. **Rulebook vs. this file.** The Master Plan says *how* to do each thing; this file says *what we do for this site, in what order, and why*. When they disagree, this file wins for Ecomm Wizards (and the reason is written here).
3. **Progress lives in the tracker,** not in this file. This file changes only when strategy changes (log it in §L Change history at the bottom).
4. **The repo is the live site.** Every change goes: branch → PR → owner approval → merge → live. Run `/seo drift compare` before merging anything that touches page templates.
5. **Risky tactics need written approval** (Master Plan §2). Logged on the tracker's *Approvals* tab.

### Contents
- A. Where we are today (site facts)
- B. Classification (intake, stage, special situations, route)
- C. North star & measurement
- D. Day-0 baseline
- E. Work plan by priority (P0 → P3)
- F. Research system with Ahrefs Lite
- G. Architecture & content
- H. GEO, authority & local
- I. Inputs needed from the owner
- J. Operating rhythm (daily / weekly / monthly / quarterly)
- K. 12-week roadmap
- L. Tools, skills & prompts map
- M. Rules for anyone (human or AI) working on this site
- N. Change history

---

## A. WHERE WE ARE TODAY (SITE FACTS, CHECKED IN THE CODE 16 NOV 2026)

### A.1 Stack
- Next.js (App Router) + Payload CMS, MySQL, hosted on **Hostinger** (cPanel Node app, LiteSpeed). Deploys from this repo.
- Analytics: **Google Tag Manager only** (`GTM-PZV8S2C2`, `app/(frontend)/layout.tsx:31`). GA4 and anything else live inside GTM.
- Booking: **Cal.com** inline embed. Leads/bookings stored in MySQL; viewable at `/admin/leads` and `/admin/bookings`.

### A.2 Pages
| Group | URLs | Built from |
|---|---|---|
| Home | `/` | `app/(frontend)/page.tsx` |
| Services | 31 folders under `/services/*` (development, Plus development, CRO, headless, migration ×7 platforms, apps, themes, SEO, speed, store audit, Klaviyo agency/audit, POS, B2B, A/B testing…) | one `page.tsx` each |
| Hubs | `/services/ecommerce-agency`, `/ecommerce-seo-agency`, `/ecommerce-marketing-agency` | `HubPageTemplate` + `lib/geo/registry.ts` |
| City pages | ~59, **all US cities** (Charlotte, Raleigh, NYC, LA, Miami…) under 7 service folders | `lib/geo/pages/*.ts` → `ServicePageTemplate` / `GeoPageTemplate`; guarded by `npm run geo:*` |
| Blog | `/insights`, `/insights/[slug]` | Payload `Posts` (FAQs, quick answer, takeaways, `contentUpdatedAt`) |
| Case studies | `/case-studies`, `/case-studies/[slug]` (24 main + Klaviyo/creative/app studies, with real numbers) | `lib/case-studies.ts` etc. |
| Conversion | `/book-shopify-consultation`, `/free-shopify-store-audit`, `/contact-shopify-agency` | Cal embed, `AuditForm`, `ContactForm` |
| Trust | `/about-shopify-agency`, `/reviews`, `/faqs`, `/partners` | |

### A.3 Already done well (keep)
- `robots.ts` allows AI crawlers; blocks `/admin`, `/cms`, `/cms-api` and the **~409k spam `?c=` URLs** (also answered 410 by `middleware.ts`). Background: in Aug–Nov 2026, 57% of Googlebot requests hit those junk URLs and 21 location pages sat "Discovered, never crawled".
- `llms.txt`, video sitemap, Organization + WebSite schema, BlogPosting/FAQ/Breadcrumb on posts, Service + Breadcrumb + FAQ on city pages, lazy-loaded videos, www → apex redirect, ~40 legacy 301s.
- Geo guardrails (`lib/geo/forbidden.ts`, `scripts/geo/*`) deliberately ban LocalBusiness/Review/AggregateRating schema and fake-location claims on city pages. **We keep these rules.**

### A.4 Leaks and gaps (the work list starts here)
**Booking & tracking**
1. Klaviyo pages use their own Cal embeds (`services/klaviyo-agency/KvCalEmbed.tsx`, `services/klaviyo-audit/CalEmbed.tsx`) that **fire no conversion and don't save the booking**.
2. Bookings store **no source**: no landing page, UTM or referrer (`app/(frontend)/api/bookings/route.ts`). Form leads already store `landing_page` (`lib/leads.ts`).
3. Only `components/ui/LeadForm.tsx` pushes `lead_submit`; `AuditForm`, `ContactForm`, `CreativeAuditForm` push nothing.
4. No CTA click tracking anywhere.
5. `CAL_LINK = "ecomm-wizards/30min"` still marked `TODO` in 3 files.
6. Placeholder phone `+1 555 123 4567` in `free-shopify-store-audit/AuditForm.tsx:141`; no phone, email or WhatsApp link anywhere on the site.

**Trust**
7. No custom 404 page (`app/(frontend)/not-found.tsx` missing).
8. No Privacy Policy or Terms pages; no cookie consent (needed for UK/Canada visitors).
9. `/reviews` shows no reviews; the "4.9★" in `lib/brand-stats.ts` has no source.
10. About page: team has names/roles/photos but no bios; the founder is never named. Author Person schema has no `url`/`sameAs`/`image`; no author pages.
11. No pricing/packages page.
12. Case studies are not marked `verified` (the geo README requires it before numbers are reused).

**SEO / technical**
13. `app/sitemap.ts` doesn't include `/insights` or any blog post; no `lastmod`.
14. Static service pages have no Service schema (the component exists: `components/seo/ServiceSchema.tsx`).
15. Organization schema has only 4 `sameAs` profiles, no `contactPoint`, logo as a plain string.
16. Service and city pages show no "updated" date and have no `dateModified`.
17. ~125 `<img>` tags may be missing `alt` (mostly migration pages).
18. `robots.ts` is missing current bots from Master Plan §5.2 (Claude-SearchBot, Claude-User, Applebot, DuckAssistBot, meta-webindexer, meta-externalfetcher, Amzn-SearchBot, Amzn-User, MistralAI-Index/Training) and still lists retired names (`Claude-Web`, `anthropic-ai`).
19. No IndexNow.
20. No UK / Canada / Australia content at all, although these are target markets.

---

## B. CLASSIFICATION (§0, §3)

### B.1 Intake (§3.1)
Filled in [intake.md](intake.md) and the tracker's *Site Intake* tab. Summary:
- **Type:** Agency / service (§16.1) + Blog (§16.6). Local (§13, §16.2) **only if** the GBP office is real and staffed (decision pending, see §I).
- **Business model:** leads → booked discovery calls → projects.
- **Markets:** US (priority 1), UK (2), Canada (3), Australia (4). English only.
- **Money pages:** `/book-shopify-consultation`, `/free-shopify-store-audit`, the ~30 service pages, the 3 hubs.
- **Personas:** DTC brand founders and ecommerce/marketing managers at Shopify (or replatforming) stores doing ~$1M+/year; Shopify Plus merchants; brands migrating from WooCommerce/Magento/BigCommerce/etc.

### B.2 Tracker flags (switch the Checklist rows on/off)
| Flag | Value | Why |
|---|---|---|
| AG Agency/service | **Y** | core business |
| BL Blog | **Y** | `/insights` |
| INT More than one country | **Y** | US/UK/CA/AU |
| PHY Physical location | **Pending** | depends on the GBP office (§I) |
| NEG Spam-link spike | **Y** | ~409k `?c=` spam URLs |
| SEAS Seasonal | **Y** | BFCM code freeze now; January–March replatforming peak |
| MKT New market | **Y** | UK/CA/AU have no content yet |
| NOCONV Traffic but few leads | **Set after baseline** | |
| JS JavaScript SPA | N | Next.js renders on the server (verified per template in P1) |

### B.3 Stage per section and market (§3.4)
Confirmed from GSC in week 1 (3 months vs same period last year), re-checked every quarter.
| Section / market | Expected stage | Route |
|---|---|---|
| US — home + services | C or D | §17.2 |
| US — city pages | B or C | §17.2, quick-win focus + R8 review |
| Blog `/insights` | B or C | §17.2 |
| UK / CA / AU | B | treat as new market (§10.4) |

### B.4 Special situations handled first (§3.6)
| Situation | First actions | When |
|---|---|---|
| NEG (spam URLs) / possible old hack | GSC → Security issues + Manual actions; Wayback check of the `?c=` history; watch Pages report for "Indexed, though blocked by robots.txt"; monthly log-file share of Googlebot hits on 410s | Day 0, then monthly |
| New markets (UK/CA/AU) | §G.5 | Weeks 9–10 decision |
| Seasonal | Compare bookings **year-over-year**, not month-over-month; publish/refresh migration & replatforming content 6–8 weeks before January | Weeks 5–8 |
| AI describes us wrongly | Score accuracy in the baseline AI prompt run; fix facts on About/FAQ/schema and on cited sources | Baseline + monthly |

### B.5 Route and order (§0.3, §14.2, §17.2)
Goal = leads, so **measurement and conversion come first** (§16.1, §8.9). Multiple markets make §10.4 a P1. The order is:
**baseline → P0 measurement & conversion → technical P1 → cannibalisation → quick wins → foundation/schema → research → content → GEO → authority**, then the recurring routine forever.

### B.6 Permission Gate for this site (§2)
Logged on the tracker's *Approvals* tab before anything happens:
- **R8** city/doorway pages — every new city page, and the 59 existing ones are under review.
- **D1** deleting/merging/noindexing more than 10% of the site (the city-page review would be).
- **R11** outreach volume (20–50/day max, personalised).
- **R12** Reddit / Shopify Community participation rules.
- **R1/R2** paid links or exchanges — default **No**.
- The ⛔ NEVER list is never done (fake reviews, fake stats, cloaking, etc.).

---

## C. NORTH STAR & MEASUREMENT (§15.1, §16.1, §8.9)

### C.1 What we count
- **North star:** *qualified calls held per week* that came from organic search or AI search.
- **Supporting:** bookings made, no-shows/cancellations, form leads (audit, contact, creative audit), form → booking rate, booking rate per landing page.

### C.2 The funnel
`GSC impressions → clicks → money-page sessions → cta_click → cal_open → booking → call held → qualified`
Each step is a number on the weekly scorecard; the weakest step decides the week's focus.

### C.3 Attribution (built in P0)
1. On first visit, store landing page, referrer and UTMs (first touch) in the browser.
2. Pass them into Cal as `metadata[...]` and into every form.
3. Save them with each booking in `/api/bookings` (new columns, same pattern as `lib/leads.ts`).
4. Add a server-side **Cal.com webhook** (booking created / cancelled / rescheduled / no-show) so counts don't depend on ad blockers or cookie consent.
5. Optional "How did you hear about us?" field (Google, ChatGPT/AI, LinkedIn, referral, other): AI referrals are often stripped.

### C.4 Reports
- **Weekly Bookings tab** (tracker): week · bookings · held · qualified · no-shows · form leads · organic/AI share · top 3 landing pages.
- **Monthly page → booking table:** page | GSC clicks | sessions | cta_click | cal_open | bookings | held | rate.
- **KPIs tab** (monthly, §15.1): visibility, rankings, indexing, authority, technical, AI, local, content.
- **Targets** are set after the baseline week (e.g. +50% qualified calls in 90 days), reviewed every Monday.

### C.5 Testing reality
At 3–10 bookings a week, classic A/B tests never reach significance. We change **one thing at a time per page**, judge it over a 4-week before/after window, and use Clarity recordings and micro-conversions (`cta_click`, `cal_open`) as early signals.

---

## D. DAY-0 BASELINE (§3.3) — frozen before any change ships
Saved to `seo/baseline/2026-11-day0.md` (template ready).
1. **GSC** (3 months, vs same period last year): clicks, impressions, CTR, position — by country, by folder (`/services`, city folders, `/insights`, `/case-studies`), brand vs non-brand. Indexed vs not-indexed; top 20 queries and pages; `?c=` URLs still reported; **§14.0 decline check**.
2. **GA4:** sessions by channel, key events, AI referrals (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai).
3. **Bookings:** last 12 weeks from `/admin/bookings` + Cal.com; leads from `/admin/leads`.
4. **Ahrefs** (Lite UI / Ahrefs Webmaster Tools): DR, referring domains, organic keywords (top 3/10), Site Audit health.
5. **Bing WMT:** clicks, impressions, AI Performance.
6. **PageSpeed Insights (mobile)** per template: home, service page, city page, blog post, case study, booking page.
7. **GBP:** calls, website clicks, direction requests, reviews.
8. **AI visibility:** the 30-prompt set per market (§H.1).
9. **`/seo drift baseline`** on the key URLs (home, booking, audit, top 5 services, 2 city pages, 1 post).

---

## E. WORK PLAN BY PRIORITY

Each line becomes a tracker Checklist row with Priority, Effort, Type and its § reference.

### P0 — Weeks 1–2: measurement & conversion (§16.1, §8.9)
**Tracking (code PR #1)**
- [ ] Confirm the real Cal.com link; one shared `CAL_LINK` constant for all embeds.
- [ ] Klaviyo pages reuse the main `CalEmbed` (conversion + save to `/api/bookings`).
- [ ] Attribution pipeline + Cal.com webhook (§C.3).
- [ ] `lead_submit` (form name + landing page) from AuditForm, ContactForm, CreativeAuditForm — copy the `LeadForm` pattern.
- [ ] `cta_click` (location: header / hero / CTABar / inline / sticky / footer) and `cal_open` events.
- [ ] `tel:`, `mailto:`, `wa.me` click events.
- [ ] GA4: mark `booking`, `lead_submit`, `cta_click` as key events; build the AI-referral segment/exploration.
- [ ] Microsoft Clarity via GTM (delayed load).
- [ ] Consent banner + Google Consent Mode v2 (UK GDPR/PECR, Canada). Server-side records (webhook, `/api/lead`) stay the source of truth.

**Conversion (code PR #2)**
- [ ] Real phone + email (and WhatsApp if wanted) in header/footer/contact; replace the placeholder.
- [ ] `/book-shopify-consultation`: call length, what happens on the call, who they'll meet (photo + name), 3 testimonials next to the calendar, fewest possible fields, visitor's time zone, slots that suit UK and AU, soft fallback ("not ready? email us"), load Cal on intent.
- [ ] Thank-you route after booking (reliable conversion + pre-call prep to cut no-shows).
- [ ] Top 10 organic landing pages: booking CTA or `BookingSwitch` above the fold; context-specific CTA copy; proof next to every CTA (§8.9 step 3–4).
- [ ] Sticky mobile "Book a free call" bar: ≤ 15% of screen height, tap targets ≥ 48px (§10.2 mobile).
- [ ] **Intent audit (§8.9 step 1–2)** of the top 10 GSC pages → journey table (blog → comparison → service → booking).

**Trust (code PR #3)**
- [ ] Privacy Policy + Terms pages.
- [ ] `not-found.tsx` with search-style links to top services + booking CTA.
- [ ] `/reviews` shows real reviews (Clutch / Google / Trustpilot embeds or quoted with links); source or remove the "4.9★".
- [ ] Team bios + named founder on About (feeds E-E-A-T and Person schema).

**Process (no code)**
- [ ] Speed-to-lead: audit/contact leads answered within 15 minutes in business hours; auto-reply email with the Cal link; 3-touch follow-up; audit delivered as a Loom video ending with a booking CTA. Track form → booking rate.

### P1 — Weeks 2–4: technical triage → cannibalisation → quick wins (§10.1, §7.1, §14.1)
- [ ] `/seo audit` + `/seo technical` → `seo/reports/`; triage with the §10.1 matrix (page value × issue).
- [ ] GSC Pages report: every not-indexed reason; URL Inspection "View rendered HTML" for each template.
- [ ] P10 orphan diff (crawl vs sitemap vs GSC); redirect chains; trailing slash and canonical consistency; 404/410 decisions logged.
- [ ] Cannibalisation map: `shopify-development-agency` vs `shopify-store-development` vs `shopify-2-0-development` vs the `ecommerce-agency` hub vs city pages; `shopify-store-audit` vs `/free-shopify-store-audit`; `shopify-cro-agency` vs `a-b-testing` → one intent per page (merge / 301 / canonical / re-angle).
- [ ] Title + meta rewrites (P18/P19) on pages whose CTR is below **our own CTR-by-position curve**.
- [ ] Striking-distance queries (positions 5–20; 21–40 = topic gaps) → add sections with P14.
- [ ] Internal links to near-page-1 pages.
- [ ] Each change: Change Log row + GSC compare at 4 and 8 weeks. Request indexing only for pages truly ready.

### P2 — Weeks 3–6: foundation, schema, entity (§5, §9, §11.3)
- [ ] `app/sitemap.ts`: add `/insights` + every published post; `lastmod` everywhere.
- [ ] IndexNow key + ping on publish/update.
- [ ] `robots.ts` → the §5.2 single-group pattern (all allowed bots share one group with identical rules); add the missing bots, drop retired names; record the **AI-training decision (current: allowed)**; check Hostinger/LiteSpeed/CDN bot protection isn't blocking AI search bots (confirm in logs).
- [ ] Schema inventory first (no duplicate graphs, §9.3), then:
  - Service schema on all static service pages (reuse `ServiceSchema.tsx`).
  - Organization: `contactPoint`, full `sameAs` (Clutch, Shopify Partner directory, Crunchbase, YouTube, etc.), logo as ImageObject.
  - Person schema for authors and team (`url`, `sameAs`, `image`) + author pages.
  - VideoObject on case studies (videos already in the video sitemap).
  - **Never:** self-serving review stars; LocalBusiness on city pages (matches the geo guardrails).
- [ ] Visible "Updated" date + `dateModified` on service and city pages.
- [ ] Alt text on the ~125 images (`/seo images`).
- [ ] Core Web Vitals green per template; trim third-party cost (GTM tags, Clarity, Cal).
- [ ] GSC Domain property; social profiles as GSC platform properties (§11.5); Bing WMT + sitemap; Ahrefs project (Site Audit weekly; Rank Tracker 20–50 keywords per market if the plan allows).
- [ ] Security (§18.3): 2FA on Payload, Hostinger, Cal, GSC; daily backups; uptime monitor.

### P3 — Week 4 onward: research, content, GEO, authority
Sections F, G, H, run on the rhythm in section J.

---

## F. RESEARCH SYSTEM WITH AHREFS LITE (§6, §21)

Ahrefs Lite/Standard has no API, so **the owner exports CSVs and Claude analyses them**. The full export checklist is in [research/README.md](research/README.md).

### F.1 Competitors (intake)
Per market (US, UK, CA, AU): 5–10 direct competitors (Shopify / Shopify Plus / migration / Klaviyo agencies) **+ 5 low-DR, high-traffic sites** ranking for our services. Claude can propose them from the SERPs; the owner confirms.

### F.2 What gets exported (summary)
- **Site Explorer** — us + each competitor: Organic keywords, Top pages, Referring domains, Backlinks (newest first).
- **Keywords Explorer** — per country, for these seeds: *shopify agency, shopify developer, shopify plus agency, shopify migration (+ woocommerce/magento/bigcommerce/wix/squarespace/prestashop/amazon to shopify), shopify cro, headless shopify, shopify app development, shopify theme development, klaviyo agency, shopify seo*. Reports: Matching terms, Questions, Related terms. Filters: Lowest DR ≤ 20, word count ≥ 4 (plus a no-filter pull for head terms).
- **Content Gap** — us vs 3–5 competitors. **Link Intersect** — who links to 2+ competitors but not us.
- **First check what Lite includes** (Content Gap, Link Intersect, Content Helper, Brand Radar, Rank Tracker, export row limits). Fallbacks: sitemap diff (P8), optimiser term list via P7, manual AI prompt sheet, Ahrefs Webmaster Tools (free, own site), Ahrefs SEO Toolbar (free).

### F.3 What Claude does with them
Relevance score (P2) → intent + page type (§6.3) → low-competition scorecard (§6.5) → Traffic Potential / Parent Topic → clustering (P3, `/seo cluster`) → **Keywords tab** (plus Market and Commercial/Informational columns) → **topical map** (§7) → URL mapping (existing page / new page / blog post).

### F.4 Extra methods
- Competitor page audit (P1, §6.6-E) on the top 10 money keywords.
- Weak-competitor mining (§6.6-C).
- Competitor-name queries: "[agency] alternatives / reviews / vs".
- Monthly GSC mining (§6.7) with the regexes in [regex.md](regex.md).
- UK/AU spellings ("optimisation", "organisation") as separate rows.

---

## G. ARCHITECTURE & CONTENT (§7, §8, §16.1)

### G.1 Topical map & site tree
Topical map sheet: Topic | main keyword | supporting keywords | intent | page type | URL | cluster | funnel level | status. Every important page ≤ 3 clicks from home; BreadcrumbList everywhere; no orphan pages; internal-link table from P5.

### G.2 Cluster order (§7.3) — finish one before starting the next
1. **Shopify Plus & migration** (January replatforming peak) — migration cost guide, platform-specific checklists, "X to Shopify" pages already exist → strengthen, then supporting posts.
2. **CRO** (CRO agency, A/B testing, store audit).
3. **Development** (agency, custom build, theme, headless).
4. **Klaviyo / email.**
5. **Apps.**

### G.3 New money pages (§16.1)
- **Pricing / packages** page (none today).
- Cost guides: "How much does a Shopify Plus migration cost", "Shopify store development cost".
- Industries served (fashion, beauty, supplements, food & beverage — only where we have case studies).
- Comparisons: "Shopify agency vs freelancer", "in-house vs agency", "[competitor] alternatives", "Shopify vs [platform]" (`/seo competitor-pages`).
Each links to its service page and the booking page.

### G.4 City pages (R8, §14.3)
- Run `npm run geo:shingles` (uniqueness) + GSC impressions per city page.
- With impressions → add genuine local proof (clients/projects in that state, local examples).
- No impressions after 90 days → propose merge / noindex / 410. **Needs written approval (D1).**
- **No new city pages** until existing ones earn impressions.

### G.5 UK, Canada, Australia (§10.4 — P1 for a multi-market site)
- One English site. **No hreflang** unless prices/offers differ by country. No IP redirects.
- Country-level pages only where research shows demand, each with real proof (clients in that country, local-time call slots, local currency on pricing).
- Per-country listings (§H.3), PR and prompts; GSC performance by country in the monthly report.
- Decision point: weeks 9–10, from GSC country data + Ahrefs per-country research.

### G.6 Blog & content process (§8)
- **Pace:** start at 1–2 posts/week; increase only while GSC "Discovered/Crawled – not indexed" isn't growing (§8.7).
- **Process:** `/seo content-brief` (§8.5) → draft with the §8.3 GEO format (answer in the first 100 words, one idea per section, FAQs, stats with sources, expert quotes) → owner adds real experience/numbers → **QA Gate §8.6** (service pages use proof instead of the stat rhythm) → publish in Payload with category → service link (`Categories.serviceHref`) and an in-article booking CTA.
- **Refresh loop (§8.8):** 2–5 pages a month; `/seo sxo` on pages that rank but don't convert.

---

## H. GEO, AUTHORITY & LOCAL (§11, §12, §13)

### H.1 GEO measurement (§11.8)
- **30 prompts per market** (P15) — e.g. "best Shopify Plus agency", "Shopify migration agency UK", "Klaviyo agency for Shopify brands", "who can migrate my WooCommerce store to Shopify". Logged on the *AI Prompts* tab monthly in ChatGPT, Perplexity, Gemini/AI Mode, Claude, Copilot.
- Fields: mentioned, cited, position, our page cited, competitors named, fan-out queries, third-party URLs cited, accurate?
- Target: share of voice vs the top 3 competitors. **Trigger:** a money prompt with 0 mentions for 2 months → reverse-engineer the winner.
- Also: Bing WMT AI Performance, GSC Generative AI report (if available), GA4 AI referrals.

### H.2 GEO actions
- §11.6 ChatGPT fan-out logging (prompt → searches it ran → URLs it cited) → optimise for those queries (Google **and Bing**) and pitch the cited listicles.
- §11.7 AI Overview gap (P11) on keywords where we already rank top 10.
- Answer-first blocks, stats, FAQs on money pages (P17).
- **Proprietary data (§11.9):** an annual "Shopify migration & CRO benchmarks" report from aggregated, verified case-study results.

### H.3 Entity profiles (§11.4, §12.3)
Clutch, GoodFirms, DesignRush, Sortlist, UpCity, Shopify Partner directory, LinkedIn, Crunchbase, Glassdoor, G2, Trustpilot, YouTube (case-study videos + transcripts). Same name, description, logo and link everywhere; add each to Organization `sameAs`. Genuine participation in r/shopify and the Shopify Community (R12 rules).

### H.4 Authority (§12)
- Link Intersect loop: P12 cleaning → P13 personalised outreach + 2 follow-ups, 20–50/day (R11).
- Competitors' newest links (sort by First seen) monthly; Ahrefs alerts if the plan has them.
- SOS / Qwoted / Featured: 15 minutes a day.
- Podcast guesting on Shopify/ecommerce shows; unlinked mention reclaim; Klaviyo and app-partner links.
- Linkable assets that double as lead magnets: migration-cost calculator, store-speed checker.
- Every link vetted (§12.6); natural anchors; paid links/exchanges only with R1/R2 approval (default: no).

### H.5 Local (§13) — decision first
- Is the GBP office real and staffed, and in a target market (About page says Toronto)?
  - **Yes →** PHY = Y; Organization address + contact on About/Contact only (never on city pages); §13.2 playbook: real name (no keywords, §13.1a), categories, services, 750-character description, weekly posts, ~5 reviews/month asked at project handoff, reply to every review, consistent NAP.
  - **No →** GBP stays an entity signal only (P3); no address in schema.

---

## I. INPUTS NEEDED FROM THE OWNER
★ = blocks work.
- ★ Access: GSC, GA4, GTM, Bing WMT, GBP (add Claude's workflow via exports or shared logins as you prefer).
- ★ The real Cal.com event link; whether the Cal plan supports webhooks.
- ★ Real contact phone + email (WhatsApp optional).
- ★ GBP office: real address? staffed? which city?
- ★ Competitors per market (or approve Claude's proposed list).
- Team bios, founder name and credentials; review profile links (Clutch, Google, Trustpilot).
- Which case-study numbers are verified (to set `verified: true`).
- Who answers leads, and the speed-to-lead target.

---

## J. OPERATING RHYTHM (§15.2) — the tracker's *Routine* tab
| When | What | Who |
|---|---|---|
| **Daily (15–20 min)** | SOS/Qwoted replies; reply to reviews; check new leads/bookings and that speed-to-lead was met | Owner |
| **Monday — Scorecard** | Weekly Bookings tab + `seo/weekly/YYYY-Wxx.md` (from [weekly/TEMPLATE.md](weekly/TEMPLATE.md)); GSC quick check (drops, indexing, manual actions); Site Audit P1s; rank movements; choose the week's 3 priorities from the weakest funnel step | Claude drafts, owner reviews |
| **Tuesday — Quick wins** | 3–5 GSC-driven fixes (titles, sections, internal links) → PR; `/seo drift compare` before merge | Claude |
| **Wednesday — Content** | Briefs, drafts, refreshes → owner review | Claude + owner |
| **Thursday — Conversion** | One sequential change on a top landing page; Clarity review of booking-page drop-off | Claude |
| **Friday — Authority/GEO + ship** | Directory/outreach/community batch; GBP post; merge approved PRs; Change Log | Owner + Claude |
| **Monthly** | Ahrefs exports refresh; GSC mining (§6.7) + social-property queries; refresh 2–5 pages; AI prompt set + fan-out log; AIO gap; backlink gap + competitors' newest links + own backlink audit; log-file check (`?c=` share); page → booking table; KPIs tab; §15.3 report incl. ⚠️ decisions waiting | Claude + owner |
| **Quarterly** | Full `/seo audit`; stage re-check per section & market; topical map review; city-page decisions (with approval); competitor review; schema re-validation; re-check §5.2 bot list & §9.2 rich-result rules; roadmap reset | Claude, owner approves |
| **After any Google core/spam update** | Compare 2 weeks before/after by page type; don't panic-change; fix quality on losing page types | Claude |

---

## K. 12-WEEK ROADMAP (§17.2)
| Week | Focus | Done when |
|---|---|---|
| **W1** (16–22 Nov) | Access, intake, frozen baseline, §3.6 checks, start P0 tracking PR | Baseline file complete; tracker flags set |
| **W2** | Finish P0 (tracking, attribution, webhook, booking page, trust pages); `/seo audit` | Every booking/lead recorded with source; audit report saved |
| **W3–4** | Technical P1 → cannibalisation → quick wins; first Ahrefs exports; keyword master | P1 issues closed on money pages; Keywords tab populated |
| **W5–6** | P2 schema/entity/robots/sitemap/IndexNow; topical map + link table; cluster 1 (Plus/migration); pricing page | Rich Results clean; cluster 1 money pages live |
| **W7–8** | Cost guides + comparison pages; blog at §8.7 pace; entity profiles; first fan-out + AIO gap pass | Profiles live; first GEO actions logged |
| **W9–10** | Link Intersect outreach, podcasts, linkable tool; UK/CA/AU decision | Outreach running; market decision logged |
| **W11–12** | Refresh loop; city-page review + approval request; **90-day review vs baseline**; routine reset | 90-day report delivered |

BFCM note: the site is not an e-commerce store, so no freeze applies to us, but prospects are busy until early December. Use W1–W3 for measurement and fixes; demand for migrations and rebuilds rises from January.

---

## L. TOOLS, SKILLS & PROMPTS MAP (§19–21)
| Job | Tool / skill | Master Plan |
|---|---|---|
| Full / technical audit | `/seo audit`, `/seo technical`, Ahrefs Webmaster Tools, Screaming Frog (free ≤ 500 URLs) | §10 |
| Regression safety | `/seo drift baseline` / `compare` before every template deploy | §18.3 |
| Schema | `/seo schema`, Rich Results Test, validator.schema.org | §9 |
| GEO / AI | `/seo geo`, AI Prompts tab, ChatGPT network tab | §11 |
| Content | `/seo content-brief`, `/seo content`, prompts P6, P7, P14, P17 | §8 |
| Intent mismatch | `/seo sxo` | §6.3, §8.9 |
| Clustering | `/seo cluster`, prompt P3 | §7 |
| Comparison pages | `/seo competitor-pages` | §16.1 |
| Images | `/seo images` | §9.1 |
| Bing / IndexNow | `/seo bing` | §5.1 |
| Backlinks | `/seo backlinks`, Ahrefs exports, prompts P12–P13 | §12 |
| Local | `/seo local` | §13 |
| Titles / metas | prompts P18, P19 | §9.1, §14.1 |
| GSC regexes | [regex.md](regex.md) | §20 |
| Research | Ahrefs Lite CSVs ([research/README.md](research/README.md)), prompts P1–P3, P8 | §6 |

---

## M. RULES FOR ANYONE (HUMAN OR AI) WORKING ON THIS SITE
1. Bookings first: when choosing between tasks, pick the one closest to a booked call.
2. Branch → PR → owner approval → merge. Never push to `main`. Run `npm run build`, `npm run lint`, `npm run typecheck` and (for city pages) `npm run geo:check` before asking for review.
3. Log every change that could move rankings or conversions in the tracker's Change Log (date, change, pages, reason/§, result after 4 weeks).
4. Never invent numbers, reviews, quotes, clients or credentials. Case-study numbers are used only when marked verified.
5. Respect the geo guardrails (`lib/geo/forbidden.ts`): no LocalBusiness/Review/AggregateRating schema or fake addresses on city pages.
6. Permission Gate (§2): anything marked ⚠️ waits for written approval on the Approvals tab.
7. Every new page passes the §8.6 QA Gate and has a booking CTA.

---

## N. CHANGE HISTORY
| Date | Change | By |
|---|---|---|
| 2026-11-16 | v1.0 created from MASTER-SEO-GEO-PLAN v1.0 + code review of the repo | Claude, approved by owner |
