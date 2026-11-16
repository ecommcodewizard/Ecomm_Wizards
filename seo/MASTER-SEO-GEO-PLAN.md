# MASTER SEO + GEO PLAN
### The complete, stage-by-stage operating system for ranking any website on Google and getting it cited by AI (ChatGPT, Gemini, Perplexity, Claude, Copilot, Google AI Overviews / AI Mode)

**Version:** 1.0 · November 2026
**Built from:** 52 expert videos (mainly **Ghulam Ali**, YouTube [@GhulamAliseo](https://www.youtube.com/@GhulamAliseo), founder of **GMS Digitals**, Lahore, free course at ghulamaliseo.com/free), plus baseline best practice and current platform documentation. Every method is credited in the text as **[GA]** (from the expert videos) or **[Baseline]** (a standard practice added to fill gaps or strengthen a point).
**Works for:** agency / service businesses · tool & SaaS sites · e-commerce (Shopify, WooCommerce, others) · local businesses · real estate · blogs & publishers. New sites and existing sites.
**Main tool:** Ahrefs (with the Ahrefs connector where available), Google Search Console, Bing Webmaster Tools, GA4, Claude / ChatGPT.

---

## HOW TO USE THIS FILE

1. **Upload this file to any project** (a Claude Project, ChatGPT Project, or hand it to a team). It is the single source of truth.
2. **Start every new website with Section 3 (Site Intake).** It decides which stages and branches apply.
3. **Work stage by stage** (Stages 0–10). Each stage has: goal → checklist → how-to → prompts → done-criteria.
4. **Track progress** in the companion tracker **SEO-GEO-Site-Tracker.xlsx** (one copy per website; every task row shows its section number here).
5. **Re-run the cycles** in Section 15 (weekly / monthly / quarterly) forever. SEO is a loop, not a project.

### Table of contents
- 0. Instructions for the AI using this plan
- 1. Core principles (read once)
- 2. The Permission Gate (risky tactics)
- 3. Site Intake & Classification (incl. site stage A–E, task types, special situations)
- 4. Stage 0: Domain & pre-launch decisions
- 5. Stage 1: Foundation & Findability (launch checklist)
- 6. Stage 2: Research (keywords, intent, competitors, opportunities)
- 7. Stage 3: Topical map, site architecture & internal linking
- 8. Stage 4: Content system (writing, AI use, QA gate, publishing pace)
- 9. Stage 5: On-page SEO & structured data (schema)
- 10. Stage 6: Technical SEO deep audit
- 11. Stage 7: GEO (AI search) layer
- 12. Stage 8: Authority (backlinks, mentions, digital PR)
- 13. Stage 9: Local SEO & Google Business Profile
- 14. Stage 10: Existing-site growth (quick wins, refresh loop)
- 15. Measurement, KPIs & operating cadence
- 16. Branch playbooks by site type (incl. real estate and a template for any niche)
- 17. 30 / 60 / 90-day roadmaps (new site, existing site, agency 30-day sprint)
- 18. Risk register & defence
- 19. Prompt library
- 20. Regex library (Search Console)
- 21. Tool stack
- 22. Ahrefs connector map
- 23. Credits, sources & caveats

---

## 0. INSTRUCTIONS FOR THE AI USING THIS PLAN

You are a senior SEO + GEO strategist working for the user. Follow these rules on every website:

1. **Start with intake.** Never give advice before you know the site type, stage (new or existing), market, language, money pages and goals (Section 3). Ask for anything missing.
2. **Work from data, not guesses.** Use the user's Google Search Console, Ahrefs, GA4 and real search results. If you can browse or use the Ahrefs connector, fetch the data yourself; otherwise ask the user to export it using the instructions in this plan. Never invent keywords, volumes, competitors, backlinks, reviews or statistics.
3. **Classify, then follow the right route.** Set the site's **stage (A–E, Section 3.4)** from its real data, check for any **special situation (3.6)**, then follow the stage's route: A → 17.1 · B → 17.3 · C → 17.2 with the quick-win focus · D → 17.2 growth track · E → 14.0 diagnosis first, then 17.2. Within any route: foundation before content, money pages before blog posts, finished clusters before new clusters, fixes on high-value pages before low-value pages. Every task is one of three **types (3.5)**: do **Quick wins** first, finish **Setup** once, then keep the **Recurring** routine (15.2) running forever. Re-check the stage every quarter: sites move between stages.
   - **Goals reorder priorities:** if a stated top goal is AI visibility, pull the GEO entity/off-site work (11.3–11.6) and Bing into the first 30 days; if it's leads, measurement (16.1 lead tracking) comes in week 1; if a site sells in several countries, Section 10.4 is P1.
4. **Prioritise by impact × page value.** A broken redirect on the best-selling category page beats 300 warnings on pages nobody visits [GA].
5. **Respect the Permission Gate (Section 2).** Any tactic marked ⚠️ RISKY must be explained (what it is, why it's risky, the safe alternative) and **explicitly approved by the user in writing** before you implement, plan or automate it. Never assume approval. Ask again for each site and each new use.
6. **Never do the ⛔ NEVER list** (Section 2), even if asked; explain why and offer the safe alternative.
7. **Be honest about uncertainty and time.** SEO takes weeks to months. AI answers are probabilistic. Don't promise rankings. Label estimates as estimates.
8. **Quality bar for content:** every page must pass the Content QA Gate (Section 8.6) before publishing, whether written by a human or AI.
9. **Output format:** give the user checklists, tables and ready-to-paste items (titles, metas, schema, robots.txt, prompts, outreach drafts). Mark each recommendation with priority (P1/P2/P3), effort (S/M/L) and the stage it belongs to.
10. **Log decisions.** Keep a running change log per site (date, page, change, reason) so results can be measured before/after.

---

## 1. CORE PRINCIPLES (READ ONCE)

1. **SEO is the base; GEO is the layer on top.** ChatGPT, Perplexity, Gemini and Copilot ground their answers on search indexes (Google and Bing). If you don't exist in search, you don't exist for AI. "SEO gets you the ticket; GEO gets you the seat." "SEO gets you clicked; GEO gets you quoted." Roughly 80% of GEO is traditional SEO done well; ~20% is new. [GA]
2. **One great page serves both.** A page that is clear, genuinely useful, answer-first, well-structured, trusted and referenced by others performs best for Google *and* AI. [GA]
3. **Google ranks topics, not keywords.** One page can rank for hundreds or thousands of keyword variations if it covers the topic and matches the intent. Never build several pages for the same intent (keyword cannibalisation: none of them rank). [GA]
4. **Intent decides the page type.** The right content for the wrong intent never converts (e.g. a product grid for "best gaming laptop", or a 5,000-word review for "gaming laptop price"). [GA]
5. **Money pages first.** Service, product, category, pricing and feature pages make the money; informational content supports them through internal links. [GA]
6. **Rank without backlinks first; use links to protect.** Choose winnable keywords, build topical authority and perfect on-page. Backlinks keep rankings stable and stop competitors overtaking you. [GA]
7. **Technical triage: three things make or break rankings:** anything blocking the crawler, duplicate content splitting signals, and slow pages losing users. Everything else is housekeeping. [GA]
8. **Freshness and proof win AI citations.** Statistics, named expert quotes, cited primary sources, recent updates and original data are what AI engines pick and name. [GA]
9. **Brand is an entity.** AI judges *you*, not just your pages: consistent name, profiles, schema, authors, reviews and third-party mentions across the web. [GA]
10. **Consistency beats bursts.** A sustainable publishing pace with quality beats publishing 100 pages in a month and getting hit later. [GA]
11. **Measure, refresh, repeat.** Every win comes from the loop: measure → find weak spots → improve → re-measure. [GA]

### 1.1 The expert's tactic tier list (V16) and how this plan uses it
| Tactic | His score (1–10) | Plan decision |
|---|---|---|
| Reddit SEO | 10 | Genuine participation only (⚠️ R12 at scale); a top AI-citation source |
| Original research | 10 | Core GEO move (11.9) |
| Content refreshes | 9 | Monthly refresh loop (8.8, 14.1) |
| Location pages | 9 | Real locations/areas only (⚠️ R8 doorway risk) |
| Backlinks | 8 | Stage 8 |
| AI content | 3 | Allowed only through the QA Gate (8.6); mass AI = ⚠️ R6 |
| Schema markup | 2 | Kept as a baseline: doesn't rank pages by itself, but enables rich results and helps AI understand entities |
| Internal linking | 2 | Kept as mandatory: his own V12, V24 and V41 make it core; it's cheap and fixes orphans/crawl paths |
| Programmatic SEO | 1 | Only with unique data per page (⚠️ R7) |

---

## 2. THE PERMISSION GATE (RISKY TACTICS)

The experts mention several shortcut tactics. They are documented here **so you know them**, but each carries a real risk of penalties, deindexing, account bans or wasted money. Google's spam policies explicitly cover link spam, scaled content abuse, site reputation abuse and expired domain abuse.

### ⚠️ RISKY: allowed only with explicit written approval from the user
Before implementing any item below, the AI must (a) explain the tactic, (b) explain the specific risk, (c) offer the safe alternative, and (d) get a clear "yes, I approve [tactic] for [site]" from the user.

| # | Tactic | Source | Risk | Safe alternative |
|---|---|---|---|---|
| R1 | **Buying backlinks** (guest posts / niche edits from sellers; tempting because many sites ask e.g. $300 just to link a study) | [GA] V23, V13 | Link spam policy; many seller sites are blacklisted; fake DR/traffic; $5–10 links do nothing | Value-led outreach, digital PR, SOS/journalist requests, linkable assets; if paid placements are used, they must be vetted (Section 12.6) and marked `rel="sponsored"` |
| R2 | **Large-scale link exchanges / exchange networks** (incl. app "link networks" swapping links among thousands of sites) | [GA] V4, V13, V43 | "Excessive link exchanges" = link scheme | Occasional, genuinely relevant partner links; resource mentions |
| R3 | **PBNs** (private blog networks, owned or rented; rented/public networks where everyone buys are even riskier) | [GA] V23, V26 | Footprints → whole network + every money site linked to it penalised; ~$3–4k for 10 domains | Build real authority; earned mentions |
| R4 | **Parasite SEO** (publishing on high-authority third-party sites mainly to borrow their ranking power, e.g. Medium, LinkedIn Pulse, Reddit, Quora, news-site sponsored sections) | [GA] V9 | Site reputation abuse policy → deindexing | Genuine posts on your *own* Medium/LinkedIn/Reddit/YouTube accounts that help users and link back |
| R5 | **Expired / aged domains** bought for their backlinks | [GA] V26 | Expired domain abuse policy if used for unrelated or low-value content | Only same-niche, legitimate use after full vetting (Section 4.3) |
| R6 | **Mass / unedited AI content, or publishing hundreds of pages at once** | [GA] V22, V23, V29 | Scaled content abuse; sites rise then crash 1.5–2 months later | Content QA Gate + drip publishing schedule (Section 8) |
| R7 | **Programmatic SEO** (thousands of template pages) | [GA] V16 | Thin/duplicate pages = scaled content risk | Only with unique, useful data per page; start small; monitor indexing |
| R8 | **Location / doorway pages** for places you don't serve | [GA] V16 (strengthened) | Doorway page spam | Real location/service-area pages with unique, local content |
| R9 | **Buying cheap "shared" or resold SEO tool accounts** (e.g. Ahrefs from third-party sellers) | [GA] V4, V13, V44, V45 | Breaks tool terms; accounts cut off; data/privacy risk | Official plan (the user already has Ahrefs), free trials, Ahrefs Webmaster Tools |
| R10 | **Exact-match domain** as the main brand | [GA] V9, V32 | Low-quality EMDs get demoted; brand limits | Fine for tools/local when the site is genuinely good; partial-match/brandable alternatives |
| R11 | **Mass cold outreach** (thousands of emails) | [GA] V4 | Domain marked as spam; anti-spam laws | Personalised outreach in small daily batches with opt-out |
| R12 | **Reddit / forum marketing at scale** | [GA] V9, V16 | Bans; fake accounts / vote manipulation = policy violation | Genuine participation, disclose affiliation, follow subreddit rules |

### ⛔ NEVER (do not implement, even if asked; explain and offer the alternative)
- Cloaking (showing Google different content than users), hidden text/links, sneaky redirects.
- Link farms, automated link blasts, comment/forum spam.
- Fake, paid or incentivised reviews; review gating; fake ratings in schema.
- Fake statistics, fake expert quotes, invented case studies or credentials.
- Copying competitor content (take ideas and coverage, never wording).
- Keyword stuffing.
- Negative SEO against competitors.
- Scraping/republishing others' content as your own.

---

## 3. SITE INTAKE & CLASSIFICATION

Fill this for every website before doing anything else. The AI should ask for missing items.

### 3.1 Intake form
```
SITE NAME:                    URL:
SITE TYPE (pick all):         [ ] Agency/Service  [ ] Local business  [ ] Tool/Micro-tool  [ ] SaaS
                              [ ] E-commerce (platform: ______)  [ ] Blog/Publisher/Affiliate  [ ] Real estate
                              [ ] Other niche: ______ (write a niche playbook with 16.8)
STAGE (Section 3.4):           [ ] A Not launched  [ ] B Live, almost no impressions  [ ] C Impressions, few clicks
                              [ ] D Steady traffic  [ ] E Declining
LAST 3 MONTHS (GSC, per month): impressions ____  clicks ____  change vs same period last year ____%
SPECIAL SITUATION (3.6):      [ ] none  [ ] migration/redesign  [ ] platform/domain change  [ ] penalty/manual action  [ ] hacked
                              [ ] sudden drop  [ ] traffic but no sales  [ ] new market/section  [ ] inherited site  [ ] other: ____
PLATFORM / CMS:               WordPress / Shopify / Webflow / Wix / Custom (framework: ____)
SEO PLUGIN / APP:             Rank Math / Yoast / SEOPress / SEOWILL / other
MARKETS & LANGUAGES:          (countries, cities, languages; international by default)
                              → one row per market: country | language | currency | URL (subfolder/ccTLD) | priority
PHYSICAL LOCATION / SERVICE AREA: [ ] Yes (office/store/service area customers visit or you travel to)  [ ] No (online only)
                              → Yes = Stage 9 (Local/GBP) applies, whatever the site type
BUSINESS MODEL:               leads / sales / ads (AdSense) / subscriptions / affiliate
MONEY PAGES (top 5–10):       services / products / categories / pricing / tools
TOP 3 BUSINESS GOALS:         (e.g. +50% leads in 6 months)
TARGET AUDIENCE / PERSONAS:
3–10 KNOWN COMPETITORS:
WHAT WE WANT TO BE KNOWN FOR (one sentence):
ACCESS:                       [ ] GSC  [ ] Bing WMT  [ ] GA4  [ ] Ahrefs project  [ ] CMS admin  [ ] GBP
BRAND ASSETS:                 logo, founder/author bios, social profiles, reviews, case studies, original data
RESTRICTIONS / APPROVALS:     (anything legal/brand-sensitive; risky tactics approved? default: NONE)
```

### 3.2 Which stages and branches apply

| Stage / Branch | Agency / Service | Local | Tool | SaaS | E-commerce | Blog / Publisher |
|---|---|---|---|---|---|---|
| 0 Domain & pre-launch | if not launched | if not launched | ✔ (EMD option) | if not launched | if not launched | if not launched |
| 1 Foundation | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| 2 Research | ✔ | ✔ + local methods | ✔ + tool-niche method | ✔ | ✔ + intent-by-page-type | ✔ |
| 3 Architecture | services silos | service × area | tool categories | features/use-cases | category tree | topic silos |
| 4 Content | ✔ | ✔ | light (supporting content) | ✔ | buying guides + category copy | ✔✔ |
| 5 On-page & schema | ✔ | ✔ LocalBusiness | ✔ SoftwareApplication | ✔ | ✔ Product/Offer | ✔ Article |
| 6 Technical | ✔ | ✔ | ✔ speed! | ✔ JS rendering! | ✔✔ duplicates/facets! | ✔ |
| 7 GEO | ✔✔ | ✔✔ | light on tool pages | ✔✔ | ✔ | ✔✔ |
| 8 Authority | ✔ | ✔ citations | ✔ | ✔ | ✔ | ✔ |
| 9 Local SEO / GBP | if physical/area | ✔✔ | – | – | if store | – |
| 10 Existing-site growth | if existing | if existing | if existing | if existing | if existing | if existing |
| Branch playbook (Sec. 16) | 16.1 | 16.2 | 16.3 | 16.4 | 16.5 | 16.6 |

Real estate uses 16.7 (plus Stage 9 when there's an office); any other niche: Section 16.8 template.

### 3.3 Baseline snapshot (record before changing anything)
Record on day 0 so every change can be measured:
- GSC: clicks, impressions, CTR, average position (last 3 months); indexed vs. not-indexed pages; top 20 queries; top 20 pages.
- Ahrefs: Domain Rating, referring domains, organic keywords (top 3 / top 10), organic traffic estimate, Site Audit health score.
- GA4: sessions by channel, conversions, AI referrals (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai).
- Bing WMT: clicks/impressions.
- AI visibility: run the 30-prompt set (Section 11.8) in ChatGPT, Perplexity, Gemini/AI Mode, Claude, Copilot; record mentions and citations. Ahrefs Brand Radar if available.
- PageSpeed Insights (mobile) for one page of each template.
- GBP (local): calls, direction requests, reviews count/rating.


### 3.4 Site stage A–E (set from data, not age)
Pull the last 3 months from Google Search Console (Performance, monthly averages) and compare with the same period last year. The numbers are rough guides: scale them for very small local markets or very large niches, and when in doubt pick the earlier stage.

| Stage | How to recognise it | What's holding it back | Do first (in order) | Route |
|---|---|---|---|---|
| **A. Not launched** | No live site yet, or a rebuild that isn't live | Nothing yet: get the foundations right | Intake → domain/hosting (4) → keyword research and topical map (6–7) → launch checklist (5) → 5–10 best pages (8) | 17.1 |
| **B. Live, almost no visibility** | Under ~1,000 impressions/month, or many pages "Discovered/Crawled – not indexed", or ranks only for its brand name | Indexing, weak foundations, keywords too competitive, thin content | Indexing + technical blockers (5.1, 10.1, 10.2) → re-do keyword choice for winnable long-tail (6.2, 6.5) → rewrite/upgrade the 5–10 key pages (8, 9) → entity profiles + citations (12.2) → GBP if local (13) | 17.3 |
| **C. Impressions, few clicks** | Impressions growing but clicks low: under ~1,000 clicks/month, CTR well below the site's expected CTR, most queries sitting in positions 8–40 | Pages are "almost there": weak titles, missing sections, thin internal links, low authority | **Quick wins:** title/meta rewrites (14.1) → striking-distance queries 5–20 (6.7) → add missing query sections (P14) → internal links to those pages (7.4) → cannibalisation (7.1) → schema → then links to the pages closest to page 1 | 17.2 (quick-win focus) |
| **D. Steady traffic** | 1,000+ clicks/month and stable or growing; organic already brings leads/sales | Conversion, authority, coverage gaps, AI visibility | Conversion layer on top pages (8.9) → content gap and new clusters (6.6, 7) → authority (12) → GEO (11) → refresh loop (8.8) → international/new sections if relevant | 17.2 (growth track) |
| **E. Declining** | Clicks down ~20%+ vs the same period last year (or vs the previous 3 months for young sites) for 2+ months | Updates, decay, competitors, technical breakage, AI Overviews | **Decline diagnosis first (14.0)** → fix the biggest cause → then back to the C or D list | 14.0 → 17.2 |

A site can be D overall but have sections in C (e.g. a new blog) or E (one product line falling): treat each section by its own stage.

### 3.5 Task types: Setup, Quick win, Recurring
| Type | Meaning | Examples | When |
|---|---|---|---|
| **Quick win** | Small effort, fast measurable impact, mostly on pages that already have impressions | Title/meta rewrites, striking-distance sections, internal links to near-page-1 pages, removing a stray noindex, fixing broken money-page links, GBP name/category/hours fixes, CTA + trust fixes on top-traffic pages | First 2–4 weeks (stages B–E) |
| **Setup** | Done once (re-checked occasionally) | GSC/Bing/GA4, robots.txt, sitemap, schema templates, site architecture, GBP creation, lead tracking, hreflang | By the roadmap (17.x) |
| **Recurring** | Never finished: SEO is a loop | Weekly: Site Audit, GSC check, GBP post, link batch · Monthly: GSC mining, 2–5 refreshes, AI prompt set, competitor links, KPI report · Quarterly: full audit, topical map review, pruning, schema re-validation | Forever, on the cadence in 15.2 |

The tracker labels every task with its type, and its **Routine** tab lists every recurring task with a month-by-month tick-off.

### 3.6 Special situations (can happen at any stage)
If any of these apply, handle them **before** the normal route; they override it.
| Situation | Signs | First actions | Sections |
|---|---|---|---|
| **Migration or redesign** (new URLs, new theme, new CMS) | Planned change of URLs/templates | Crawl and export every URL + top pages and backlinks → 1:1 redirect map (old → new, 301) → keep titles/content/internal links/schema → staging noindexed → launch → submit sitemaps, monitor GSC Pages + rankings daily for 2–4 weeks → fix 404s fast. ⚠️ Ask the owner before deleting or merging many pages (D1) | 4.4, 10.2, 18 |
| **Domain change / rebrand** | New domain or brand name | Same as migration + GSC Change of Address tool, update every profile/citation/GBP/sameAs to the new name and URL, keep the old domain renewed and redirecting for years | 3.6 migration, 11.4, 12.3, 13 |
| **Platform change** (e.g. WordPress → Shopify) | Different URL patterns (/product/ vs /products/) | Migration steps + map platform-specific URLs, rebuild schema, re-check speed, canonicals and robots.txt on the new platform | 5.2, 9.2, 16.5 |
| **Manual action / penalty** | GSC → Manual actions shows an issue; sudden index loss | Read the exact action → remove the cause (bad links: remove/disavow; spam content: delete/improve) → document everything → reconsideration request | 18.2 |
| **Hacked / malware** | GSC Security issues, spam pages in `site:` search, browser warnings | Clean and secure (updates, passwords, 2FA, malware scan), remove injected pages (410), request review in GSC | 10.2, 18.2 |
| **Sudden drop** (days, not months) | Clicks fall sharply in days | Check in order: robots.txt/noindex/canonical changes, server errors, recent deploys (Change Log), manual actions, Google update dates; fix technical causes first | 14.0, 18.2 |
| **Traffic but no sales/leads** | Stage C/D numbers but few conversions | Conversion layer (8.9) on the top 10 landing pages; lead/sale tracking (16.1); intent audit | 8.9, 16.1 |
| **Inherited site** (new client, unknown history) | No records of past SEO | Full baseline + backlink audit (spam/paid patterns, anchor spikes) + GSC manual actions + Wayback history + content quality sample; decide what to keep, fix or prune | 3.3, 4.3 vetting, 10, 12.6, 14.3 |
| **New market or language** | Expanding to a new country/language | International setup (10.4) for the new market; treat the new section as stage A/B | 10.4 |
| **New section or product line** | New service, category or blog on an established site | Treat the section as stage A: research, cluster, money pages first, internal links from strong existing pages | 6, 7, 8 |
| **Seasonal business** | Demand peaks at fixed times (Eid, Christmas, summer) | Publish/refresh seasonal pages 6–8 weeks before the peak; keep the same URL every year; compare year-over-year, not month-over-month | 8.8, 15 |
| **Multi-location expansion** | Opening new branches | One GBP per real location; a location page per branch with unique content; consistent NAP per branch | 13, 13.3 |
| **AI describes the brand wrongly** | Wrong facts in ChatGPT/Gemini/AI Overviews | Fix the facts on your site (About, FAQ, schema) and on the sources AI cites; consistent descriptions everywhere | 11.8, 18.2 |
| **Negative SEO / spam links** | Sudden spike of spammy referring domains | Usually ignore; disavow only with a manual action or a clear large pattern | 18.2 |
| **JavaScript-heavy site** (React/Next/Vue SPA) | Content missing from rendered HTML | Server-side rendering or pre-rendering for key pages; test with URL Inspection | 10.2 |

---

## 4. STAGE 0: DOMAIN & PRE-LAUNCH DECISIONS
*(Only for sites not yet launched, or a rebrand/new project.)*

### 4.1 Choose the domain
- [ ] Short, memorable, easy to spell; prefer `.com` or the main country TLD; no hyphens. [Baseline]
- [ ] Brandable name for agencies, SaaS and e-commerce. [Baseline]
- [ ] **Exact-match domain (EMD) option** for tool sites and some local businesses: if a tool keyword has good search volume and the exact-match domain is available, buying it makes the keyword your brand query; Google tends to rank the brand first for its brand name. [GA V32, V9] ⚠️ R10: the site must still be genuinely good; low-quality EMDs are demoted (Google's 2012 EMD update), and the brand effect only helps once people actually search the name.
- [ ] Trademark check: never register a competitor's brand. [Baseline]

### 4.2 Hosting, CMS & theme
- [ ] Fast hosting (e.g. SiteGround or Cloudways) + Cloudflare CDN (free plan is fine). [GA V28, V46] (Hosted platforms such as Shopify, Wix, Squarespace: hosting/CDN is handled; focus on theme weight and apps.)
- [ ] Lightweight theme (e.g. GeneratePress, Astra for WordPress); don't make pages heavy "for design". [GA V28]
- [ ] SSL/HTTPS from day one. [GA V5, V28, V45]
- [ ] SEO plugin/app installed (Rank Math / Yoast / SEOPress; Shopify: an SEO app or manual). [GA V5]
- [ ] Staging site **password-protected** and `noindex` (never let a staging copy be indexed). [GA V11]

### 4.3 Aged / expired domain path ⚠️ R5 (Permission Gate)
*Only with approval, only for the same niche.* [GA V26] Why people do it: a dofollow link from a site like nymag.com would cost $2–4k to earn; an expired domain that already has one costs ~$10. Google's expired domain abuse policy (2024) targets buying domains to host low-value or unrelated content.
1. **Find:** Ahrefs Site Explorer → a huge site in your niche (e.g. a major publication) → outgoing **Linked domains / outgoing links** → filter **Dofollow** + status **Not found (404)** → export → repeat across many large sites/publications (the expert's demo used a general publication, nymag.com) → then filter the list for niche relevance.
2. **Check availability in bulk:** Namecheap → Domain search → **Beast Mode** (up to 5,000 domains) → skip premium-priced ones. Alternatives: ExpiredDomains.net, SpamZilla, GoDaddy/NameJet/DropCatch auctions. [GA + Baseline]
3. **Vet before buying (all must pass):**
   - [ ] Wayback Machine (archive.org), every year: snapshots should be blue (200 OK), not green (redirects to another domain); no PBN pattern (homepage = stream of unrelated articles each linking out; mixed-niche link-selling), no adult/spam/foreign-language spam history. [GA]
   - [ ] Ahrefs: anchor-text profile clean (no spam/adult/pharma/foreign anchors), referring-domain history natural (no spikes/crashes), relevant linking sites. [Baseline]
   - [ ] `site:domain.com` in Google (still indexed?). [Baseline]
   - [ ] Trademark check (no brand names you don't own). [Baseline]
   - [ ] Topically relevant to your business; you will publish genuinely useful, same-niche content. [Baseline]
4. Never chain expired domains into the money site with redirects at scale. [Baseline]

### 4.4 Pre-launch checklist
- [ ] Decide **what you want to be known for** + audience (one sentence). [GA V35]
- [ ] Search those questions on Google AND AI platforms; note which sites get cited (your future competitors and outreach targets). [GA V35]
- [ ] Draft the site architecture (Stage 3) before building pages.
- [ ] Prepare brand entity assets: logo, About page, founder/author bios with credentials, consistent NAP (name, address, phone), social profile handles. [GA V34]

---

## 5. STAGE 1: FOUNDATION & FINDABILITY (LAUNCH CHECKLIST)
*Goal: search engines and AI crawlers can find, crawl, render and trust the site. If this fails, everything else is wasted.* [GA V5, V14, V35]

### 5.1 Launch checklist
| # | Task | Notes | Source |
|---|---|---|---|
| 1 | **Remove the noindex tag** left from development | WordPress: Settings → Reading → uncheck "Discourage search engines"; check the SEO plugin defaults. Shopify: remove the storefront password (Online Store → Preferences). Others: check the platform's "hide from search engines" setting | [GA V5] |
| 2 | **Set up Google Search Console** | Domain property (DNS) preferred; URL-prefix also fine | [GA V5] |
| 3 | **Generate & submit the XML sitemap** | From the SEO plugin; submit in GSC | [GA V5] |
| 4 | **Request indexing for the homepage** (and key money pages) | GSC → URL Inspection → Request indexing; only when pages are truly ready | [GA V5, V43] |
| 5 | **Set up Bing Webmaster Tools** + submit the sitemap | Bing powers Copilot and is one of the sources ChatGPT search uses; import from GSC | [GA V5, V35] |
| 6 | **Enable IndexNow** | Instant URL submission to Bing & partners; many SEO plugins/CDNs support it | [Baseline] |
| 7 | **Install GA4** (+ conversions) | Track all channels; create an "AI referrals" segment | [GA V5] + [Baseline] |
| 8 | **Install Microsoft Clarity** (free heatmaps/session recordings) | UX insight | [GA V17] |
| 9 | **Google Business Profile** (if local or a physical location) | See Stage 9 | [GA V5, V38] |
| 10 | **HTTPS everywhere** | Small ranking signal, but users feel safe; one canonical version (https + www or non-www), 301 the rest | [GA V5] |
| 11 | **robots.txt review**: allow Google, Bing and AI search crawlers | Template in 5.2; also check Cloudflare's AI-bot blocking setting | [GA V5, V34, V35] |
| 12 | **Unique title tag on every page** | No duplicates | [GA V5] |
| 13 | **Page speed per template** | PageSpeed Insights for home, service/product, category, blog, tool pages; aim < 3 s load; Core Web Vitals green | [GA V5, V11, V40] |
| 14 | **Mobile-friendly** | ~60% of traffic is mobile; mobile-first indexing | [GA V28, V40] |
| 15 | **Organization / WebSite schema + sameAs** | Section 9 | [GA V34] |
| 16 | **Social profiles created & linked** (same name everywhere) | Sections 11.5, 12.3 | [GA V7, V9, V33] |
| 17 | **Connect social profiles to Search Console** (platform properties: Instagram, TikTok, X, YouTube) | GSC property selector → Add property → choose platform → authorise | [GA V7] |
| 18 | **Breadcrumbs + logical navigation** | Section 7 | [GA V41] |
| 19 | **404 page + redirect plan** | Never delete pages without a redirect/410 decision; WordPress: scan with the Broken Link Checker plugin (run it, fix, then deactivate it, as it's heavy) and 301 every 404 that has a better page | [GA V11, V28, V46] |
| 20 | **Change log started** | Date, page, change, reason | [Baseline] |
| 21 | **Ahrefs project + Site Audit + Rank Tracker set up** | Weekly crawl, track 20–50 keywords | [Baseline] |
| 22 | **Content freshness system** | Visible "last updated" dates; dateModified in schema | [GA V34] |

### 5.2 robots.txt template (allow search + AI search; decide on training)
**How robots.txt works:** a crawler obeys only the *one* group that matches it most specifically. If you give a bot its own group (e.g. `User-agent: bingbot` + `Allow: /`), it ignores the `*` rules (so it would crawl cart/checkout/parameter URLs). So: list the bots you allow **in the same group** as `*` (several `User-agent` lines may share one set of rules), and give a bot its own group **only to block it**.
```
# One shared group: all search engines + AI search/fetch bots + (by default) AI training bots
User-agent: *
User-agent: Googlebot
User-agent: bingbot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Applebot
User-agent: DuckAssistBot
User-agent: meta-webindexer
User-agent: meta-externalfetcher
User-agent: Amzn-SearchBot
User-agent: Amzn-User
User-agent: MistralAI-Index
User-agent: MistralAI-User
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: CCBot
User-agent: meta-externalagent
User-agent: Amazonbot
User-agent: MistralAI-Training
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /*?*orderby=
Disallow: /*?*filter_
# (adjust faceted/parameter rules per site; never block CSS/JS needed for rendering)

# AI TRAINING: business decision. Default = allowed (above) for maximum AI visibility.
# To opt out of training only, REMOVE the training bots (GPTBot, ClaudeBot, CCBot, meta-externalagent,
# Amazonbot, MistralAI-Training) from the group above and add:
# User-agent: GPTBot
# User-agent: ClaudeBot
# User-agent: CCBot
# User-agent: meta-externalagent
# User-agent: Amazonbot
# User-agent: MistralAI-Training
# User-agent: Google-Extended
# User-agent: Applebot-Extended
# Disallow: /
# (Never block OAI-SearchBot, Claude-SearchBot, PerplexityBot, meta-webindexer, Amzn-SearchBot,
# MistralAI-Index, bingbot or Googlebot.)

Sitemap: https://www.example.com/sitemap_index.xml
```
The paths above are WordPress/WooCommerce examples. **Shopify:** robots.txt is generated by Shopify and edited only through the `robots.txt.liquid` theme template (its defaults already block cart/checkout). Other platforms: adapt the paths.

Key facts [GA V34 + Baseline]: OpenAI uses **GPTBot** (training), **OAI-SearchBot** (search) and **ChatGPT-User** (user-triggered fetch). Anthropic uses **ClaudeBot** (training), **Claude-SearchBot** (search) and **Claude-User** (fetch). Perplexity uses **PerplexityBot** (search) and **Perplexity-User** (fetch). **Google-Extended** and **Applebot-Extended** are control tokens only (no separate crawler). Meta uses **meta-externalagent** (training/indexing), **meta-webindexer** (Meta AI search) and **meta-externalfetcher** (fetch); Amazon uses **Amazonbot** (training), **Amzn-SearchBot** (search, e.g. Alexa) and **Amzn-User** (fetch); Mistral uses **MistralAI-Training**, **MistralAI-Index** (search) and **MistralAI-User** (fetch). Google AI Overviews/AI Mode use normal **Googlebot**; Copilot uses **bingbot**; Applebot data may also train Apple models unless Applebot-Extended is disallowed. User-triggered fetchers (ChatGPT-User, Perplexity-User, meta-externalfetcher, Amzn-User, Google-Agent) may not follow robots.txt. **Blocking search bots = very unlikely to be cited.** The list changes often (checked 9 Nov 2026; Momentic's list was updated Oct 2026). Also check the CDN/WAF (Cloudflare "Block AI bots" toggle, bot-fight mode) isn't silently blocking them.

### 5.3 llms.txt (optional, low priority)
A markdown file listing your best content for AI. Evidence of impact is weak: ~10% adoption, crawlers rarely fetch it (only a few hundred fetches across 500M sites in one study), and Google says it doesn't use it (comparing it to the old keywords meta tag). **Add it if it's free and easy; expect nothing.** [GA V34, V43]

### 5.4 Done-criteria for Stage 1
- Homepage and money pages indexed in Google and Bing; sitemap processed without errors.
- No `noindex` on pages meant to rank; robots.txt allows Google, Bing and AI search bots.
- GA4 + GSC + Bing WMT + Clarity collecting data; baseline recorded.
- Mobile + speed acceptable on every template.

---

## 6. STAGE 2: RESEARCH (KEYWORDS, INTENT, COMPETITORS, OPPORTUNITIES)
*Goal: a master keyword sheet of winnable, relevant, intent-labelled keywords, grouped into topics, with money pages first.*

### 6.1 The worst approach (avoid)
Opening Ahrefs, typing one broad industry term, seeing "50,000 searches" and choosing it without checking relevance, competition or intent. Never pick a keyword by volume alone. [GA V31]

### 6.2 Keyword research SOP (the full method)
**Step 1: Mass-collect into ONE master sheet.** [GA V31 + V28 + V37]
- Ahrefs Keywords Explorer → seed topics (your core services/products) → country → **Matching terms**, **Related terms**, **Search suggestions**, **Questions**.
- Competitors' organic keywords (Ahrefs Site Explorer → Organic keywords) for 5–10 competitors, especially **low-DR, high-traffic** competitors ("done-for-you research"). [GA V28, V37]
- **Big-site seed method:** enter the biggest site in the niche (for tools: a big multi-tool site) → Organic keywords → filter. [GA V6]
- GSC queries you already appear for (Section 6.7).
- Google autocomplete, People Also Ask, Reddit/Quora threads, AI fan-out queries (Section 11.6). [GA V39, V19]
- Local SERPs: set the search location (Ahrefs SEO Toolbar/SERP settings, or Google's location settings) to the target city to see what locals actually get. [GA V52]
- Aim for a large list (thousands to ~50,000 for big niches) before filtering. [GA V31]
- Service-niche example (V28): Keywords Explorer → core service ("cleaning") → country → Matching terms → **Include any word** ("house") → **Lowest DR ≤ 20** → exact service keywords; then remove the include filter to discover related services. Save them in a sheet **split into commercial (service/money pages) and informational (blog)** tabs. [GA V28]

**Finish the research before building (~90–95% complete)** [GA V48]: choose keywords by competition, not volume (e.g. "insurance Dubai" KD 67 vs "travel insurance for Schengen visa" KD 8). Half-done research causes: no topical map (so no topical authority), the same keyword targeted twice (duplication/cannibalisation), a site structure that has to be rebuilt, and incomplete on-page work.

**Lowest DR rule (one rule for the whole plan):** start at **Lowest DR in the top 5 ≤ 20** (≤ 10 for tool niches; ≤ 5 where big portals dominate, e.g. real estate); tighten it if the list is huge, loosen it if it's too short. Combine with **word count ≥ 4** for long-tail, and aim for **30–50 untapped keywords** for a new site's first month. [GA V30, V44, V46, V50]

**Step 2: Score relevance.** Give every keyword a relevance score to the business: 100% / 75% / 50% / 0%. Delete 0%. Claude/ChatGPT can pre-score (Prompt P2) and you check. [GA V31]

**Step 3: Label intent (Section 6.3).**

**Step 4: Check difficulty and winnability (Sections 6.4–6.5).**

**Step 5: Prioritise by traffic potential, not volume.** Use Ahrefs' **Traffic Potential** and **Parent Topic** columns: a 100-search keyword can bring ~2,000 visits because the page ranks for the whole topic (and the #1 result takes ~50% of clicks). [GA V20 + Baseline]

**Step 6: Cluster into topics (Stage 3)** → one topic = one page.

**Master sheet columns:**
`Keyword | Volume | Traffic Potential | KD | Lowest DR in top 5 | Intent | Relevance % | Parent topic | Cluster | Page type | Target URL (existing/new) | Priority | Status`

### 6.3 Search intent: the 4 types and the right page type [GA V15, V20, V37]
| Intent | The searcher wants | Example | Modifiers | Page type to build |
|---|---|---|---|---|
| **Informational** | To learn | how to train a puppy; how to clean glasses safely | how to, what is, why, can you, is it, guide | Guide / answer article / FAQ hub |
| **Navigational** | A specific site/brand | facebook login; PetSmart dog training | brand names | Brand/product/login page (you rank for your own brand) |
| **Commercial investigation** | To compare before buying | best gaming laptop; MacBook review | best, top, review, vs, alternatives, compare, cheap + product | "Best X" buying guide / comparison / review: 5–10 options, pros & cons, comparison table, links to product/service pages |
| **Transactional** | To buy / book / sign up now | buy iPhone; iPhone 17 price in UK / in Pakistan; dog training class near me sign up | buy, price, order, near me, service + area, deal, coupon | Product / category / pricing / service / booking page; for "price in X": a clear price list, not a long review |

**How to check intent:** Google the keyword and look at the top 10. Blog posts = informational; comparison articles = commercial; product/category pages = transactional; mixed results = unclear intent (pick the dominant format, or build both page types if both clearly rank). Copy the dominant **3 Cs**: content type, format, angle. Ahrefs also shows intent labels. [GA V37]
**Rule:** short keywords = more competition + mixed intent ("coffee", 600K searches, mixed SERP); long-tail = clear intent + low competition ("best dark roast coffee beans for espresso"). Long-tail is best for new sites. [GA V37]

### 6.4 The keyword "sweet spot" (4 checks) [GA V37]
1. **Demand:** do people search it (or will it bring traffic via the topic)?
2. **Business fit:** does it match what you sell?
3. **Intent:** can you give the searcher exactly what they came for?
4. **Difficulty:** can you realistically rank? (A new site can't beat Amazon for "running shoes" but can rank for "best running shoes for flat feet in winter".)

### 6.5 Low-competition scorecard (score 0–7; target ≥ 4) [GA V28, V30 + Baseline]
| Signal | How to check | Point |
|---|---|---|
| Lowest DR in the top 5 ≤ 20 (≤ 10 for tool niches) | Ahrefs Keywords Explorer "Lowest DR" filter / SERP overview | +1 |
| A forum/Reddit/Quora result in the top 5 (for a service/product query) | Google the keyword (V46's ideal keyword has all three: a low-DR site, an irrelevant result and a forum in the top 5) | +1 |
| An irrelevant or weakly matching result in the top 5 | Google the keyword | +1 |
| A young site (< 5 years) in the top 5 | Ahrefs/WHOIS | +1 |
| allintitle count < 50 (`allintitle:keyword`) (rough proxy) | Google | +1 |
| KD ≤ 20 (new sites) | Ahrefs | +1 |
| Top-ranking pages have few referring domains (< 10) | Ahrefs SERP overview | +1 |

> "Target such keywords with your eyes closed; even 10 searches/month is fine." [GA V30] Use Traffic Potential to choose among easy keywords.

### 6.6 Special research methods
**A. Tool / calculator niches** [GA V6, V44, V45]
1. Ahrefs Keywords Explorer → country (e.g. US) → broad search for the whole database → filters: **Lowest DR ≤ 10**, Include any word: **calculator** (also: generator, converter, checker, maker, counter, planner, template) → **Word count ≥ 4** → tens of thousands of easy keywords.
2. Better: Google one keyword → find a **whole site with very low DR but high traffic** → mine all its keywords (one tool page can get 40K+ visits a month).
3. **Big-tool-site mining** [GA V6]: Ahrefs Site Explorer → paste a big multi-tool site (converters, generators, checkers) → Organic keywords → filters: position 1–10 (proven demand), KD ≤ 10–20, volume ≥ 100–500, include modifiers (calculator, generator, converter, checker, maker, free, online, "to"), exclude brand terms → check the ranking URL has few referring domains → also check that site's **Top pages** report → repeat for 5–10 big tool sites. Works for any niche (use the biggest site in the niche as the seed).
4. Validate the SERP (small sites ranking), group by tool (one page per tool), and check the tool is buildable.

**B. Local hyperlocal methods** [GA V39]
- **Neighbourhood / district / zip-code keywords:** "architect in DHA Lahore" (30 searches, ranks within a month) instead of "architect in Lahore" (450 searches, stuck on page 2–3); same idea: "dentist in Shoreditch" vs "dentist in London", "plumber in JLT Dubai" vs "plumber in Dubai".
- **Near me + urgency/time modifiers:** near me, open now, open on Sunday, opening hours, 24 hours, same day, emergency.
- **Landmark keywords:** "[service] near [mall/stadium/university/hospital/station]", e.g. "lawyer close to [court house]". **No keyword tool shows these**; use local knowledge + Google autocomplete.
- **Competitor-name variations:** "[competitor] alternatives / vs / reviews / price".
- **Mobile-style queries:** directions to, phone number, is [business] open now, walking distance, closest to me.
- Sources: Google autocomplete (partial queries), People Also Ask, competitor GBPs, local subreddits.

**C. Weak-competitor reverse-engineering** [GA V28, V37]
Google your main service keyword → find competitors with **low DR but good traffic** → Ahrefs → their top pages + organic keywords → copy the topics (not the content) that bring them business → note new service opportunities (e.g. "floor deep cleaning Dubai"). Keep a list of 50–100 competitors. "You can do your entire research from competitors."

**E. Competitor page audit (fast win for one keyword)** [GA V1]
Google the keyword → copy the #1 result's URL → run it through a page-audit tool (Ahrefs SEO Toolbar / Site Audit page explorer / SEOWILL extension) → note H1–H3, word count, keyword occurrences, content structure (e.g. competitor 2,480 words with Intro, Buying Guide, Top Picks, FAQ vs yours 1,350 with Intro, Tips, Conclusion) → give it to Claude/ChatGPT: "This is my competitor. Why are they ranking for this keyword?" → audit your page the same way → "This is my website. What do I need to do to outrank my competitors?" (Prompt P1) → fix intent alignment, topic coverage and heading structure.

**D. Content gap** [GA V3, V42]
Ahrefs **Content Gap / Competitive Analysis**: your site vs. 2–5 competitors → keywords and pages they have that you don't → keep relevant ones; **missing money pages first**; prefer keywords where 2+ competitors rank. Free alternative: compare competitor sitemaps (`/sitemap.xml`) with yours using Prompt P8.

### 6.7 Search Console opportunity mining (existing sites) [GA V2, V8, V21]
Run these monthly. Regexes are in Section 20 (or ask Claude/ChatGPT: "Create a regex that filters Search Console queries to only questions", the expert's way). [GA V2]
1. **Questions you already appear for:** Performance → Search results → Add filter → Query → **Custom (regex)** → question regex → these are the real questions people type → build or answer them.
2. **Buying queries:** e-commerce/transactional regex → buying searches → optimise money pages.
3. **Zero-click "striking distance" queries:** last 28 days (also 3 months) → Impressions on → optional Position filter (greater than 4.9 and smaller than 20.1) → sort high→low → keep **position 5–20 with 0 clicks (or CTR < 1%)** → check only one of your pages ranks for it (if two, fix cannibalisation, 7.1) → click the query → **Pages** tab (which page ranks) → open the page → Ctrl+F the query → if missing, add a section answering it: a heading containing the exact query, a first sentence that answers it directly, and an FAQ entry (+ title if possible) → internal links with the query as anchor → request indexing → wait 1–2 months → compare the page's clicks/impressions before vs after (GSC date compare). [GA V8]
4. **High impressions, low CTR:** rewrite the title/meta (Section 14.1).
5. Combine: buying queries + position 5–20 = fastest revenue wins.

### 6.8 Done-criteria for Stage 2
- Master keyword sheet with relevance, intent, difficulty, traffic potential, clusters.
- List of money pages (existing + to create) with target keywords.
- Competitor list (5–10 direct + low-DR/high-traffic examples) and content-gap list.
- For existing sites: a GSC opportunities list (questions, striking-distance, low-CTR, buying queries).

---

## 7. STAGE 3: TOPICAL MAP, SITE ARCHITECTURE & INTERNAL LINKING

### 7.1 Clustering rules (one intent = one page) [GA V10, V20, V28, V37]
- Group keywords with the **same intent** into one topic = **one page**. E.g. "best gaming laptop", "best budget gaming laptop", "best gaming laptop 2026" → ONE page. "Best laptop for video editing" and "best laptop for office work" → separate pages.
- **SERP-overlap test:** if two keywords share 3–4+ of the same top-10 URLs, they belong on the same page. [Baseline]
- Proof check: the Ahrefs SEO Toolbar on the SERP shows how many keywords each ranking page ranks for (one page = hundreds of variants). [GA V10]
- Use Ahrefs **Parent Topic** and clustering features to speed this up; Claude can cluster an exported list (Prompt P3).
- **Cannibalisation:** multiple pages for the same intent → none rank (GMS case study: fixing this alone took a store to $5K/month). Find it with Ahrefs Organic keywords (several URLs ranking for one keyword) or GSC (one query, several pages). Fix: merge into the best page → 301 the others → update internal links → one canonical. [GA V10 + Baseline]

### 7.2 Architecture rules [GA V12, V41]
- **Flat:** every important page within **3 clicks** of the homepage.
- **Silo/pillar structure:** Home → section (pillar/category) → topic/cluster pages → supporting posts. Pages in a silo interlink; clusters link up to the pillar; the pillar links down; cross-silo links only where relevant.
- **No orphan pages:** every page gets at least one contextual internal link.
- **Short, descriptive URLs** (`site.com/seo-guide/`), reflecting the hierarchy where sensible.
- **Predictable navigation:** header = main categories/services; footer = policies, contact, about; mobile menu; **breadcrumbs** on every page (+ BreadcrumbList schema).
- **Sitemap** includes all indexable pages; submit in GSC + Bing.
- **Structure by site type:** e-commerce → categories/subcategories/products; agency → services → sub-services → guides + case studies; tools → tool categories → tools; publishers → topics.

### 7.3 The money funnel per cluster [GA V37]
Build clusters as funnels, finishing one before starting the next:
```
EDUCATIONAL (top)      → brewing ratios, methods, grind size, "what is ransomware"
      ↓ internal links
COMMERCIAL (middle)    → best coffee subscription, subscription box comparison, "how to prevent ransomware", "ransomware response checklist"
      ↓ internal links
MONEY PAGE (bottom)    → coffee subscription (product/service/pricing); for a security firm: "cybersecurity assessment services"
```
Order: **money pages first → then finish clusters one by one.** Google doesn't judge pages in isolation; covering the whole journey earns trust. [GA V37]

### 7.4 Internal linking system [GA V12, V16, V24, V41, V42 + Baseline]
- Internal linking is cheap, high-leverage and **mandatory**. (One expert tier list scored it low, but the same expert's architecture, technical and "secret" videos treat it as core.)
- **Plan it with AI (Prompt P5):** give Claude the topical map + all researched keywords + existing URLs → get a link table (Source URL | Target URL | Anchor | Placement | Status) and a visual structure. [GA V24]
- **Rules:** 3–10 contextual links per article; descriptive, varied anchors (include the target query naturally); link money pages from related content; link new pages from older, high-authority pages; don't overdo sitewide links. [GA V42 + Baseline]
- **Find opportunities:** Ahrefs Site Audit → **Internal link opportunities**; Site Audit → most internally linked pages / pages with few inlinks; Screaming Frog (inlinks); GSC → Links → Top linked pages. Find pages with 0–2 internal links and add links. [GA V42, V24]
- Apply the link plan to every page, published and not yet published (build links into drafts before publishing). [GA V24]
- Re-run the linking plan whenever a cluster is added.

### 7.5 Done-criteria for Stage 3
- Topical map sheet: Topic | Main keyword | Supporting keywords | Intent | Page type | URL | Silo/cluster | Funnel level | Status.
- Site tree drawn (≤ 3 clicks), navigation and breadcrumb plan, internal-link table.
- Cannibalisation list resolved (existing sites).

---

## 8. STAGE 4: CONTENT SYSTEM (WRITING, AI USE, QA GATE, PUBLISHING PACE)

### 8.1 Content principles
- **Write on topics, not keywords (semantic content).** Keyword repetition doesn't matter; well-covered topics rank even for phrases not on the page (e.g. #3 for "windows gaming laptop" without the phrase). [GA V20]
- **Answer first.** Define/answer in the first sentence, then explain. Both Google and AI reward it. [GA V34, V35, V36]
- **Cover it all, then one more.** Everything competitors cover + one unique angle nobody covers. Gets new sites trusted faster. [GA V35]
- **Human or AI doesn't matter to Google; quality does.** [GA V28, V37] Cost logic: a writer ~PKR 5,000–10,000/article vs ChatGPT ~$20/month for ~50 drafts, but AI is fine only if its output passes the QA Gate; if it doesn't, use a human writer. [GA V20]
- **Write for the brand search:** the goal is a reader so impressed that next time they search your brand name, not the keyword. Brand searches are the strongest signal you can earn. [GA V52]
- **Rewriting beats publishing more:** a client's year-old page that didn't rank went from page 4 to page 1 in two weeks just by replacing its content with semantically optimised content. [GA V52]
- **Fewer, better pages.** For a new site, start with 5–10 genuinely best pages; publishing 100 at once gives no benefit. [GA V35]

### 8.2 The 4-phase content process [GA V28, V37]
**Phase 1: Research.** Google the keyword; open and read the top 5. Note: (1) topics covered, (2) what's missing, (3) average length, (4) each page's unique angle. Do it manually for the first 2–3 articles, then speed up with AI (Prompt P6).
**Phase 2: Structure.** Build the outline from the top 3–4 competitors' headings [GA V20]; draft it with Claude/ChatGPT; refine it. Each heading = one idea. Add an FAQ block with real questions (PAA, GSC, Reddit).
**Phase 3: Writing.** AI can handle scaffolding, basic definitions and sentence flow. **Add what AI can't:**
- Experience: what actually happened; your opinion on what's overrated, underrated or wrong.
- Original data: your results, case studies, tests, photos.
- Specific examples, real numbers, real dates, real outcomes.
- Expert quotes (from podcasts, books, interviews; attributed).
**Phase 4: Optimise.** Check coverage, semantics and depth with a content optimiser: **Ahrefs Content Helper** (inside Ahrefs; availability depends on your Ahrefs plan), or Surfer SEO, NeuronWriter, Rankability, Frase. Or use AI to semantically optimise (Prompt P7). Rankability-style flow: enter the keyword → term list with suggested usage counts + target score (Rankability Score: optimal 89+) → give it to the writer → include all terms naturally. [GA V20, V44]

### 8.3 GEO-ready formatting (apply on every page) [GA V34, V35, V36]
- **Answer-first sections:** the page's 40–60-word direct answer starts within its **first 100 words** [GA V46], and each section opens with a direct, complete, self-contained answer in the first **40–60 words**, then expands. It should still make sense if extracted alone.
- **Front-load value:** ~44% of AI citations come from the first third of a page.
- **Semantic chunking:** one idea per section; never blend a definition, how-to and case study in one block; each concept gets its own heading and clean passage.
- **Question headings** where natural (H2/H3 phrased as the question).
- **Clear entity statements:** "[Brand] is a [category] that [does what] for [whom] in [where]." on home/About and key pages. [GA V14]
- **Load "winners":** a meaningful statistic every ~150–200 words; attributed expert quotes; links to primary sources (link the study itself, not a blog about it).
- **FAQ section:** 5–7 self-contained Q&A pairs on important pages.
- **Proof makes you quotable:** "lowers heart-disease risk by about 27%" beats "is good for your heart". [GA V36]
- **Formats AI loves:** "best / top / vs" listicles and comparisons (~25% more priority than opinion posts), tables, bullet lists, step lists.
- **Visible author + dates:** author bio with credentials; published and updated dates.
- "Write for a smart, busy human first; then add the structure that makes it liftable by AI." No thin content.

### 8.4 Content types by intent & site type
| Need | Content type | Notes |
|---|---|---|
| Transactional | Service, product, category, pricing, booking pages | Clear offer, price/packages, proof (reviews, case studies), CTA, FAQ |
| Commercial | "Best X", "X vs Y", "X alternatives", reviews, comparison tables | 5–10 options, pros/cons, who it's for, table; link to your offers. Include competitors honestly |
| Informational | Guides, how-tos, definitions, checklists, templates | Answer-first; link to commercial/money pages |
| Authority / links | Original research, data studies, free tools, calculators, templates, ultimate guides | Linkable assets (Stage 8) |
| Local | Location/service-area pages | Only for real locations or areas served; unique local content |
| Tool | Tool page + supporting content (how it works, formulas, examples, FAQ) | Tool above the fold; supporting content below |

### 8.5 Content brief template (use Prompt P6 to generate)
```
Title tag (<60 chars, keyword first, click-worthy):
Meta description (~150 chars, ad copy):
URL slug:
Primary keyword / Parent topic / Supporting keywords:
Search intent + page type:
Target reader + their goal:
H1:
Outline (H2/H3, each with notes; question headings where natural):
Direct answer (40–60 words) for the top:
Must-cover points (from top-5 analysis) + the "one more" unique angle:
Semantic terms to include (from Ahrefs Content Helper / optimiser):
Proof to add: statistics (with sources), expert quotes, examples, original data/photos:
FAQ (5–7 real questions):
Internal links: to (money pages) / from (existing pages):
External citations (primary sources):
Schema type(s):
Media: images (with alt text), table, video:
Target length (match/beat the competitor average; no padding):
CTA:
```

### 8.6 Content QA Gate (every page, before publishing) [GA V20 + V28 + V34 + Baseline]
*Apply by page type:* **articles/guides/comparisons** = every check, incl. the stat every 150–200 words and expert quotes (8.3); **service/pricing pages** = all checks except the stat rhythm (use proof instead: case-study numbers, reviews, credentials); **product/collection pages** = intent, unique copy, specs/features, FAQ, reviews, on-page, schema, internal links (no stat rhythm or quotes needed); **tool pages** = working tool + supporting content checks.
- [ ] Matches the search intent and the page type that ranks.
- [ ] Answer-first; each section self-contained; one idea per section.
- [ ] Covers everything the top 5 cover + one unique angle.
- [ ] Includes real experience, specific examples, real numbers (sourced), at least one expert quote or primary source.
- [ ] Semantically optimised (optimiser score at target); no keyword stuffing.
- [ ] Easy to read: short paragraphs, lists/tables, native-level language, no grammar/punctuation errors, active voice.
- [ ] Better than the competitors (would you cite this page?).
- [ ] Title, meta, H1, URL, alt text, schema done (Stage 5).
- [ ] 3–10 internal links in, links out to money pages, no orphans.
- [ ] Author shown; published/updated dates visible; facts checked.
- [ ] AI-assisted drafts: fully read, edited and fact-checked by a human. **Never publish unread AI text.** (A 5-minute unread AI article gets penalised; one good AI-assisted article takes ~1–2 hours.) [GA V22, V23]

### 8.7 Publishing pace (velocity rule) ⚠️ R6 [GA V22, V29]
- **Producing content fast is fine; publishing hundreds of pages at once is what gets penalised.** Case: 100 articles on a fresh site → early impressions/clicks → site dropped after 1.5–2 months.
- **Default cadence (new sites):** a sustainable 8–20 quality pieces/month, scaling only while every piece passes the QA Gate. Scale needs quality + quantity + perfect on-page together. [GA V22]
- **Drip ramp (when a large backlog is ready):** even if 200 pages are ready, publish Week 1 = 1/day → Week 2 = 2/day → Week 3 = 3/day → hold at a pace you can sustain for 6+ months. A drop in the pace after setting a baseline hurts (the expert's case: 46 → 95 → 72 → 100 articles/month with zero results).
- **Monitor before ramping:** GSC Pages report: if "Crawled – currently not indexed" or "Discovered – currently not indexed" grows, or new URLs get no impressions, slow down and improve quality/internal links.
- Content refreshes count toward the cadence. Product/collection pages of a store launch don't count as "content": a store can launch with its whole catalogue (as long as every product page has unique copy); the cadence applies to blog/guide content.
- To scale (100–200/month) all 4 must be true: semantic content, proper internal linking, structured for AI pickup, serves users and machines. [GA V22]

### 8.8 Content refresh loop (all sites) [GA V34, V35, V42]
- Content updated within ~30 days is cited by AI ~3× more often (especially pricing, comparisons, stats, regulations).
- Monthly: pick pages with high impressions but falling clicks, positions 4–20, outdated stats, or low AI citations → add depth, better answers, new stats, the GSC queries the page ranks for but doesn't contain (Section 6.7), internal links, updated date (content + schema dateModified) → request indexing.

### 8.9 Conversion layer: turn rankings into revenue ("R to R" framework) [GA V49]
Rankings without conversions are the **content-to-revenue gap**. Case: a Shopify fashion store's post ranked #2 for ~3,000 searches/month and brought thousands of visitors but only 8 orders in 3 months: great content, but no product link, no CTA, no buy button. Apply these 5 steps to every page, starting with the pages that already get the most traffic.
1. **Intent audit** (the expert's estimate: ~90% of sites targeting only informational keywords get traffic but never convert it): GSC → top 10 pages → note each page's main query → Google it. Wikipedia, how-to blogs and news in the results = informational: expect traffic, not sales, unless you add steps 2–5.
2. **Align content with the revenue journey** (awareness → comparison → decision):

| Page | Intent / funnel | What the page must do |
|---|---|---|
| "How to style a kurta" | Informational (TOFU) | Show related products inside the article as the solution; contextual links to them |
| "Best kurta brands in Pakistan" | Commercial (MOFU) | Honest comparison table that includes and highlights your brand |
| "Buy floral kurta online" | Transactional (BOFU) | Direct product/category page, zero distractions |

3. **Smart CTAs on every page:** above the fold (visible on load), mid-content (where readers are engaged) and at the end (after the summary; lowest conversion). Make them context-specific, not "Click here": "Get a free SEO audit of your website on WhatsApp now" beats "Contact us for more info"; "Planning to buy this kurta for Eid? Stock is limited" beats "Shop now". Test several CTAs and keep the winner.
4. **Close the trust gap:** real author bio with credentials; client testimonials/results with screenshots; clear contact info (phone, email, address); Privacy Policy + Terms; HTTPS; real product/service reviews. Case: adding an author bio + 3 testimonials lifted one client's conversion rate from 1.2% to 4.7%.
5. **Make the page conversion-ready:** loads in < 3 s; CTA buttons easy to tap on mobile; no clutter (excess sidebar widgets, pop-ups, menu items); the first screen says what you sell and why to buy.
Track: GA4 key events per landing page (Section 16.1 lead tracking; e-commerce purchases), conversion rate by page, and revenue per organic landing page in the monthly report (15.3).

---

## 9. STAGE 5: ON-PAGE SEO & STRUCTURED DATA (SCHEMA)

### 9.1 On-page checklist (every page) [GA V5, V28, V37, V45 + Baseline]
| Element | Rule |
|---|---|
| Title tag | Unique; primary keyword near the start; < 60 characters; click-worthy: main keyword + a specific number + a power/intriguing word + an emotional hook (and year/benefit where relevant), e.g. "Best 12 LinkedIn Tools in 2026" [GA V42, V52]. Check with a headline analyzer (e.g. CoSchedule Headline Studio); generate options with Prompt P18 |
| Meta description | ~150–160 characters, written like ad copy (Prompt P19); includes the keyword; doesn't rank but lifts CTR. Missing meta = copywriting task, not an emergency [GA V11] |
| H1 | One per page; contains the primary keyword; matches the title's promise |
| H2s | Main sections; at least one contains the primary keyword or a close variant; question H2s where natural (multiple H2s are normal) |
| H3s | Sub-sections |
| URL | Short, descriptive, keyword; lowercase; hyphens |
| First paragraph | Contains the keyword (within the first 100 words) + the direct answer. Keyword placements that matter: URL, title, first 100 words, H1, an H2 [GA V52] |
| Above the fold | Keyword visible; what the page offers; for tools, the tool itself |
| Internal links | 3–10 contextual; link to money pages; descriptive anchors |
| External links | To primary sources / authoritative references |
| Images | Descriptive file names; alt text describing the image (include the keyword where natural); WebP; compressed; lazy-load below the fold; preload the hero image |
| Author & dates | Author bio with credentials; published + updated dates |
| Content quality | Passes the QA Gate (8.6); covers intent; secondary keywords; video where useful |
| Minimums for an article page [GA V48] | Keyword in title, in at least one H2 and in an image alt text; at least 1 relevant video (where one exists or can be made), 1 external link and 1 internal link (plus several internal links in, 7.4). Spot-check any page with an SEO Chrome extension (Ahrefs SEO Toolbar or similar: title, meta, canonical, headings, alt text, schema) |
| Canonical | Self-referencing canonical on indexable pages |
| Schema | Per page type (9.2) |

### 9.2 Schema by site type & page (JSON-LD, Google-recommended) [GA V18, V34, V40 + Baseline]
**Every site:** Organization (or a subtype) + WebSite + BreadcrumbList; **sameAs** linking all official profiles (LinkedIn, X, Facebook, Instagram, YouTube, TikTok, Crunchbase, Wikipedia/Wikidata if eligible, GBP); Person schema for authors/founders; Article/BlogPosting on posts with author, datePublished, dateModified.

| Site / page type | Schema types |
|---|---|
| Agency / service | ProfessionalService or LocalBusiness subtype, Service (per service page), Person (team), Review/AggregateRating (**only genuine, on-page reviews**), FAQPage, Article |
| Local business | LocalBusiness (most specific subtype) with address, geo, openingHours, telephone, areaServed, sameAs (GBP, Yelp…) |
| Tool / SaaS | SoftwareApplication or WebApplication (applicationCategory, operatingSystem, offers/price, aggregateRating if genuine), FAQPage (no rich result; AI understanding only); HowTo-style content in text (HowTo rich results are deprecated but structure still helps) |
| E-commerce | Product + Offer (price, availability, priceCurrency), AggregateRating/Review (genuine), MerchantReturnPolicy, OfferShippingDetails, BreadcrumbList; ItemList on category pages; Organization/OnlineStore |
| Publisher | Article/NewsArticle/BlogPosting, Person (author), FAQPage (AI understanding only) |
| Video content | VideoObject (embedding a relevant video is one of the expert's 8 on-page essentials) |
| News publishers | Speakable (beta; news publishers, US English only, Google Assistant on Google Home devices) |

Notes: **Review stars:** Google does not show star rich results for reviews a business marks up about itself (Organization/LocalBusiness/Service on its own site, including embedded Google/Facebook review widgets); show those reviews on the page for users, but expect stars only for Product, SoftwareApplication, Recipe-type items, etc. **FAQ rich results no longer appear in Google Search (since 7 May 2026)** and HowTo rich results are gone; keep visible FAQs (they help users and AI) and FAQPage markup optionally, for machine/AI understanding only (no rich result). Schema can't force citations; it removes ambiguity, which raises the chance of being picked. [GA V34 + Baseline]

### 9.3 Schema & entity audit with Claude (the expert's method) [GA V18]
1. Give Claude the site URL with Prompt P9 (it reads key pages: home, about, contact, services/products, blog, case study).
2. It returns: missing schema, entities not properly defined, pages needing structured data, and **ready-to-deploy JSON-LD** (a global entity graph for every page + page-type blocks) + a phased checklist.
3. **Before deploying:** check what the SEO plugin/app already outputs (avoid duplicate or conflicting graphs); include only facts confirmed on the live site; let the plugin emit dateModified (don't hard-code).
4. **Validate:** Google Rich Results Test + Schema Markup Validator (validator.schema.org).
5. **Competitor check:** run the top 10 competitors' pages through the validators; note the types they use; implement the ones that fit. [GA V40]
6. Monitor GSC → Enhancements reports after deploying.

### 9.4 Done-criteria
- Every indexable page passes the on-page checklist; no duplicate titles/H1s.
- Valid schema on all templates; no errors in the Rich Results Test; sameAs complete.

---

## 10. STAGE 6: TECHNICAL SEO DEEP AUDIT

### 10.1 Triage first (what actually moves rankings) [GA V11]
Audit tools list 300–400 issues sorted by colour, not consequence. Most are housekeeping (low text-to-HTML ratio, a short contact page, missing alt on a background image). **Fix in this order:**
1. **Crawl blockers:** broken internal links, 404s, redirect chains/loops, bad robots.txt, broken/unparseable sitemap, noindex on money pages, JS-only content. If the crawler can't reach a page, nothing else matters.
2. **Duplicate content:** one product/page reachable at several URLs (printer versions, tracking parameters, faceted filters, staging copies, http/https, www/non-www, `/collections/x/products/y` vs `/products/y` on Shopify) → pick the version to rank, canonicalise/redirect the rest so signals reunite.
3. **Speed / UX:** real users on mobile data leaving because the hero image or scripts block the page.
4. Everything else (housekeeping) in batches.
**Triage by page value, not error type:** important pages = revenue, traffic, internal-link hubs, money pages. Use the Priority Matrix:

| | High page value | Low page value |
|---|---|---|
| **Blocks crawl/index or splits signals** | P1: fix now | P2 |
| **UX/speed issue** | P2 | P3 |
| **Housekeeping warning** | P3 | Ignore / batch |

### 10.2 Technical audit checklist (deep) [GA V11, V28, V40, V45 + Baseline]
**Crawling & indexing**
- [ ] Ahrefs Site Audit (weekly) + Screaming Frog crawl (monthly or after big changes).
- [ ] GSC → Pages (indexing) report: "Crawled – currently not indexed", "Discovered – currently not indexed", "Duplicate without user-selected canonical", "Alternate page with proper canonical", "Blocked by robots.txt", "Excluded by noindex", "Soft 404", "Not found (404)".
- [ ] robots.txt correct; XML sitemap only has 200, canonical, indexable URLs.
- [ ] **Log file analysis** (sites with 1,000+ URLs or indexing problems): how many pages Googlebot crawls, where crawl budget is wasted (faceted/parameter URLs), crawl errors not in GSC, bot patterns, redirect chains. GMS case: 40% of crawl budget wasted on faceted-navigation URLs → new products took 90 days to be crawled → disallowed parameters in robots.txt, canonicalised filter URLs, linked orphans (Google retired the GSC URL Parameters tool in 2022, so parameter handling = robots.txt + canonicals + clean internal links) → indexed within a week, +34% traffic in 6 months. Tools: Screaming Frog Log File Analyser, server logs, Cloudflare logs. [GA V40]
- [ ] Faceted navigation / parameters: block useless combinations from crawling, canonicalise, noindex thin filter pages. [GA V40]
- [ ] **Orphan pages:** crawl (Screaming Frog / Ahrefs) + XML sitemap + GSC pages → compare (Claude can diff the lists) → valuable = add internal links; outdated but strong URL = 301 to the best page; useless = **410** so Google drops it. [GA V40]
- [ ] Redirects: single-hop 301s; no chains/loops; deleted pages get a 301 or 410 decision; fix internal links to point at final URLs. [GA V11, V28]
- [ ] Canonicals self-referencing; consistent https + www/non-www; trailing-slash consistency.
- [ ] Staging/dev sites password-protected and not indexed. [GA V11]
- [ ] Pagination crawlable; infinite scroll has paginated URLs.
- [ ] Hreflang for multi-language/multi-country sites. [Baseline]

**Rendering**
- [ ] **JavaScript rendering:** for React/Vue/Angular/Next sites, GSC URL Inspection → Test live URL → View rendered HTML → compare with the real page. Critical content, navigation and internal links must be in server-rendered/static HTML; AI crawlers often don't execute JS. [GA V34, V40]

**Speed & Core Web Vitals**
- [ ] Test **every template**, not just the homepage (developers often show a 92 homepage while product pages take 7+ seconds). GSC → Core Web Vitals report (field data, mobile + desktop). [GA V40]
- [ ] Targets (at the 75th percentile of real users): LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1; ideally page load ~1–3 s (tool pages ~1 s). [Baseline + GA V45]
- [ ] **WordPress speed stack** [GA V46]: a caching plugin (WP Rocket, or free alternatives such as LiteSpeed Cache on LiteSpeed hosting) + image compression (WP Smush, ShortPixel, Imagify) + Cloudflare CDN (free plan). Re-test after enabling; aggressive minify/defer settings can break layouts.
- [ ] Remove render-blocking resources: combine/minify CSS (e.g. 12 files → 1), remove unused JS libraries, defer non-critical JS, self-host/preload fonts with `font-display: swap`, delay analytics/heatmap scripts, lazy-load third-party widgets (chat boxes, popups, social feeds). [GA V40]
- [ ] Heavy pages kill CWV (2–5 MB images, heavy JS); don't make pages heavy for design. [GA V28]
- [ ] Images: WebP/AVIF, compressed, correct dimensions, lazy-load below the fold, preload the LCP/hero image. [GA V28, V11]
- [ ] Fast hosting + CDN + caching. [GA V28]

**Mobile** [GA V40]
- [ ] Mobile-first: content parity with desktop.
- [ ] Base font ≥ 16px; tap targets ≥ 48×48px; no horizontal scrolling; no full-screen popups/intrusive interstitials on mobile; sticky elements < 15% of screen height.
- [ ] Test on real phones (scroll, tap, navigate), not only DevTools; PageSpeed Insights mobile tab / Chrome Lighthouse. (Google retired its Mobile-Friendly Test tool and the GSC Mobile Usability report in Dec 2023, so videos that mention them are out of date.)

**Security & hygiene** [GA V23 + Baseline]
- [ ] HTTPS; CMS, theme and plugins updated; 2FA on admin; WAF; daily backups; malware scanning.
- [ ] Watch for **injected spam pages** (hacked sites spawn thousands of pages): `site:yourdomain.com` + spammy terms; sudden jumps in the GSC Pages report's indexed count; GSC Security issues + Manual actions reports.

### 10.3 Done-criteria
- No P1 issues; indexing ratio healthy (≥ 90% of the URLs you want indexed are indexed, and none of the money pages missing); CWV green on key templates; mobile checks pass; orphans resolved; redirect map clean.

### 10.4 International & multilingual sites (P1 when there's more than one market) [Baseline]
| Decision | Options | Choose when |
|---|---|---|
| URL structure | **Subfolders** (`/uk/`, `/de/`) · ccTLDs (`.co.uk`, `.de`) · subdomains | Subfolders = default (one domain's authority); ccTLDs only with local teams/budget per country; avoid subdomains unless technically forced. Shopify: **Shopify Markets** with subfolders |
| Same language, several countries (US/UK/AU) | One English version + hreflang variants only if prices, currency, spelling or offers differ | Make the differences real (currency, shipping, spelling, local examples), or don't split |
| Different languages | Fully translated + localised pages (human-reviewed, not raw machine translation) | Translate keywords too: research each language separately |

Checklist:
- [ ] **Hreflang** on every localised page (each version lists all versions incl. itself) + `x-default`; self-referencing canonicals per version; never canonicalise all versions to one.
- [ ] Don't auto-redirect by IP; offer a country/language switcher (Google crawls mostly from the US).
- [ ] **Keyword research per market** (Ahrefs country selector; `keywords-explorer-volume-by-country`); local spelling and terms (colour/color, trainers/sneakers).
- [ ] Local currency, prices, shipping, returns and contact details per market; schema `priceCurrency`, `OfferShippingDetails` and `MerchantReturnPolicy` per country.
- [ ] Merchant Center: a feed/target per country.
- [ ] RTL languages (Arabic, Urdu): `dir="rtl"`, mirrored layout, RTL-tested mobile pages.
- [ ] GSC: performance by country (`gsc-metrics-by-country`); Ahrefs `site-explorer-metrics-by-country`.
- [ ] Local listings per country (Section 11.4/12.3) and local link/PR targets.

---

## 11. STAGE 7: GEO (AI SEARCH) LAYER
*Goal: be retrieved, selected, integrated **and named** in AI answers (ChatGPT, Gemini, Google AI Overviews/AI Mode, Perplexity, Claude, Copilot).*

### 11.1 How AI answers are built (why the rules work) [GA V34]
1. **Query fan-out:** the prompt is split into many sub-searches (e.g. "best AI tools for keyword research", "AI tools for technical SEO"). → Cover the whole intent space: definitions, comparisons, edge cases, objections, variants.
2. **Chunking + embeddings:** pages are cut into passages; each passage gets a "fingerprint". The engine asks "is this paragraph the best answer?", not "is this site good?". → Best answers buried in 400-word paragraphs are never pulled.
3. **Ranking the survivors:** relevance, clarity, trust and, importantly, **freshness**.
4. **Generation:** surviving passages are combined into one answer.
- If picked: selected → integrated → absorbed. The nightmare is **"selection without citation"** (your info used, no credit). Goal: selected, integrated, **named**.
- Ranking still matters: pages ranking #1 on Google are cited ~3.5× more by ChatGPT, yet only ~7% of ChatGPT citations overlap Google's top 10. Search isn't dead: ChatGPT handles ~2.5B prompts/day vs Google's ~13.5–14B searches/day (the expert's figures). SEO gets you into the pool; GEO wins the pick.

### 11.2 The research-proven boosters (Princeton GEO study, 2023) [GA V34]
Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan and Deshpande (Princeton, with IIT Delhi, Georgia Tech and the Allen Institute for AI; arXiv 2023, KDD 2024) tested ~10,000 queries across domains. Techniques raised visibility in AI answers by up to ~40%:
1. **Add statistics:** replace vague claims with hard numbers ("25.7% of marketers plan to build content specifically for AI citations"). Numbers are checkable = credible.
2. **Add quotations:** direct quotes attributed to named, credible people.
3. **Cite sources:** link original studies, government data, primary sources (especially helps smaller sites).

### 11.3 The 4-layer GEO system (build bottom-up) [GA V34]
| Layer | What | Checklist |
|---|---|---|
| **1. Content** | Liftable answers | Answer-first 40–60 words; semantic chunking; stats every 150–200 words; quotes; primary-source links; FAQ (5–7 Q&As); listicles/comparisons/tables; no thin content (Section 8.3) |
| **2. Entity & authority** | AI judges YOU | Recognisable entity: same brand/author names everywhere; clean About page; schema (Organization, Person, Article, FAQ) + sameAs; E-E-A-T: real author bios + credentials, visible published/updated dates, transparent sourcing; no anonymous content |
| **3. Technical** | AI can access & read | robots.txt allows AI search/fetch bots (5.2); CDN not blocking bots; fast; clean HTML; content renders without JS; freshness (update cadence, visible dates + dateModified); llms.txt optional |
| **4. Off-site** | What the web says about you | Mentions in trusted publications, communities, directories, review sites, "best of" roundups; digital PR; consistent descriptions across independent sources (linked or unlinked mentions both count); help people where customers spend time (Quora, Reddit, Facebook groups). A brand cited in authoritative publications beats a site with 500 articles on its own domain |
| **Crown** | Proprietary data | Original research/data that exists nowhere else → you become the source others cite (Section 11.9) |

### 11.4 The 32 places AI checks before recommending a business [GA V33]
Make sure your brand exists, is consistent and is discussed (linked or unlinked) where relevant:
1 Your website · 2 Google Business Profile · 3 Google reviews · 4 Google Maps · 5 Facebook page · 6 Instagram · 7 LinkedIn company page · 8 YouTube channel · 9 YouTube transcripts · 10 Trustpilot · 11 TripAdvisor · 12 Apple Maps (Business Connect) · 13 Bing Places · 14 Podcast transcripts · 15 Wikipedia (only if notable; no self-promotion) · 16 Reddit threads · 17 Quora answers · 18 Facebook groups · 19 Stack Exchange · 20 Product Hunt · 21 Industry forums · 22 G2 · 23 Capterra · 24 Clutch · 25 Glassdoor · 26 Crunchbase · 27 Indeed listings · 28 Angie · 29 Thumbtack · 30 News articles · 31 Trade publications · 32 Wikidata (if eligible)

**Priority by site type:** Local/service → 2, 3, 4, 12, 13, 28, 29, 11, Yelp · Agency → 7, 24, 25, 26, 22 · SaaS/tool → 20, 22, 23, 19, 26, AlternativeTo · E-commerce → 10, 3, 16, 21, marketplace profiles · Everyone → 1, 5–9, 16, 17, 30, 31.

### 11.5 Social profiles as search assets [GA V7, V9]
- Create/claim profiles on every relevant platform with the same name, description, logo and website link; add them to Organization **sameAs**.
- **Add Instagram, TikTok, X and YouTube to Google Search Console** ("platform properties", available to all since July 2026): Performance (clicks, impressions by post and query), Insights, Achievements. Use the queries as content ideas; optimise profile names, bios and post captions for brand + niche terms.
- Reddit and YouTube are among the most-cited sources in AI answers → genuine participation (⚠️ R12 rules).

### 11.6 ChatGPT fan-out & citation research [GA V19]
See what ChatGPT actually searches for and which pages it cites:
1. On chatgpt.com (desktop), ask a buyer question in your niche (e.g. "best property advisor in Pakistan", "best CRM for small agencies in the UK").
2. Copy the conversation ID (the part of the URL after `/c/`).
3. Right-click → Inspect → **Network** tab → paste the ID into the filter → refresh.
4. Click the request with the `{}` JSON icon → **Response** tab → find the search queries it ran (fan-out) and the URLs it used (e.g. `safe_urls`, cited links with `utm_source=chatgpt.com`).
5. Act: (a) optimise your pages for those fan-out queries (and rank them in **Bing** as well as Google); (b) get included on the third-party pages it cites (listicles, directories, review sites) via outreach (Stage 8); (c) create honest "best X" / comparison pages for those queries.
- Log it: prompt → fan-out queries → cited URLs (AI Prompts tab of the tracker) for 20–50 buyer prompts; repeat monthly because answers change.
- Field names are undocumented and can change; if missing, use the visible citations. Repeat in Perplexity (sources shown openly), Gemini/AI Mode, Claude and Copilot.

### 11.7 Google AI Overviews gap method [GA V27]
1. Find keywords that trigger AI Overviews (Google them; Ahrefs Organic keywords → SERP features filter "AI Overview"; Ahrefs SERP overview / Brand Radar Google AI Overviews data to capture the AIO text and cited URLs; note whether you're cited).
2. For each: copy the AIO answer + open every cited page.
3. Give Claude the AIO text + the cited pages' content + your page (Prompt P11): "I want to be cited here. What am I missing?"
4. Implement: missing facts/sub-questions, passage format (direct answer under a question heading, lists, tables), entities, freshness, E-E-A-T, schema.
5. Prioritise keywords where you already rank top 10 (AIO citations favour pages that already rank). Re-check monthly.

### 11.8 Measuring AI visibility [GA V34, V35 + Baseline]
- **Prompt set:** standard = **30 prompts** (20 minimum; up to 100 for large brands), kept the same every month so trends are comparable; write prompts your customers would actually type into AI (problems, "best X for Y", comparisons, "X vs Y", local "near me" equivalents, brand questions).
- **Run them monthly** in ChatGPT, Perplexity, Gemini / Google AI Mode, Claude, Copilot; record: mentioned (Y/N), linked/cited (Y/N), position, which page cited, which competitors, accuracy/sentiment.
- **AI share of voice** = % of answers that mention your brand (e.g. 28/100 = 28%). Also track citation frequency, citation quality (which passages are quoted) and sentiment/accuracy (does AI describe you correctly?).
- **Targets & triggers:** set a share-of-voice target vs the top 3 competitors; act (Section 11.7 / reverse-engineer the winner) when a money prompt shows 0 mentions for 2 months in a row or share of voice falls 2 months running.
- Answers are probabilistic: the same prompt gives different citations on different platforms and days. **Never judge from one check; track trends over weeks.** "One screenshot is an anecdote."
- **Scale with tools:** Ahrefs **Brand Radar** (AI mentions, citations, share of voice; available via the Ahrefs connector), or Peec AI, or Surfer's AI tracker.
- **Traffic:** GA4 → AI referral segment (chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai; `utm_source=chatgpt.com`). GSC: the main Performance report blends AI Overviews/AI Mode into Web; use the separate **Generative AI performance** report if your property has it (rolling out since June 2026; impressions only). **Bing Webmaster Tools → AI Performance** (public preview since Feb 2026): citations across Copilot, Bing AI summaries and partners, plus grounding queries.
- **Reverse-engineer the winner:** find the competitor who keeps getting cited instead of you → study their format, schema, answer structure, off-site mentions.

### 11.9 The most powerful move: proprietary data [GA V34]
Publish original, proprietary data that exists nowhere else (surveys, benchmarks, pricing indexes, usage stats, experiments, case-study aggregates). Others discuss and cite it → your name spreads across independent sources → AI associates you with the topic → the gap widens each cycle. It can't be faked or copied.

### 11.10 New-site 30-day SEO + GEO plan [GA V14, V35]
*Background: the roadmap to follow is Section 17.1 (building from scratch) or 17.3 (day-by-day sprint for a site that's built but has little traffic); 17.1 merges this plan and the V37 plan below.*
| Week | Focus | Actions |
|---|---|---|
| 1 | **Foundation & Findability** | (full list: 5.1, incl. IndexNow, Organization schema + sameAs, About/author/NAP, social profiles, optional llms.txt) GSC, Bing WMT (Bing powers Copilot and is one of ChatGPT search's sources), sitemap, robots.txt allows Google + AI bots, < 3 s, mobile, HTTPS; decide what you want to be known for; search your questions on Google + AI and note who gets cited |
| 2 | **Core content** | 5–10 genuinely best pages with 4 rules: answer first · cover it completely + one more · structure (headings, short paragraphs, lists, tables, real FAQ) · support claims (numbers, sources, expert quotes); internal links (no orphans) + schema |
| 3 | **GEO layer + early authority** (most important: Google rankings need site age + backlinks; AI citations need fresh, well-structured content) | Short self-contained Q&A blocks on every page; off-site presence: help in communities/forums, get into relevant directories and "best of" roundups (linked or unlinked); freshness |
| 4 | **Measure + the ongoing engine** | Test the 30-prompt set (11.8) in ChatGPT, Perplexity, Google AI Mode; track mentions/links; GSC pages with impressions on pages 1–2 and pages near ranking / cited low → find weak spots → add depth, better answers, internal links, fresh data → **the Refresh Loop** until results |

**Alternative 30-day plan (V37, beginner blueprint):** Week 1 foundation: GSC; pick 10–15 keywords with the sweet-spot framework (6.4); analyse top-5 intent; identify money pages · Week 2 money pages: build or optimise them (4-phase process + on-page checklist) · Week 3 funnel: pick one cluster, publish one mid- or top-funnel piece linking to the money pages · Week 4 promote + monitor: SOS 15–20 min/day; in GSC watch impressions rise and positions move from page 5 to page 3 (early signs). [GA V37]
Not a "rank #1 in 30 days" promise: it sets the foundation; AI visibility often comes in weeks, Google later.

### 11.11 Tool-site note [GA V44, V45, reconciled]
The expert says "LLM optimisation doesn't work for tool sites": AI can't run your calculator, so pure-tool queries gain little from GEO. **Keep GEO light on the tool page itself**, but apply it fully to supporting content (how it works, formulas, examples, comparisons, FAQs) and brand/entity signals, which still get cited.

---

## 12. STAGE 8: AUTHORITY (BACKLINKS, MENTIONS, DIGITAL PR)

### 12.1 Philosophy [GA V13, V28, V45]
- Backlinks are the most expensive part of SEO. Strategy first targets keywords that can rank **without** backlinks: the expert's 4 steps (keyword research, topical mapping, content, on-page) + bonus technical SEO, all done 100%; one mistake spoils the rest. [GA V28, V45]
- Common link types: Web 2.0, forums, profiles, video links (foundation); guest posts and niche edits (main paid types, ⚠️ R1). [GA V37, V45]
- Backlinks still matter: they **keep rankings stable** and stop competitors outranking you. Build them steadily.
- Best links: from **relevant, powerful, aged** sites; **contextual** (in the body); relevant anchor text; real traffic.
- Pass authority on: link from the pages that earn backlinks to your money pages (7.4). [GA V13]
- In GEO, **mentions** (linked or unlinked) on trusted third-party sites play the role backlinks play in SEO. [GA V34]

### 12.2 Timeline for a new site [GA V13]
| Period | Link type | Examples |
|---|---|---|
| **Months 1–2: foundational** | Free/brand links that establish the entity | **One rule: only on your own active brand accounts with real content.** Social profiles (all platforms), local citations/business directories, Web 2.0 (Blogger, WordPress.com, Medium, Tumblr, Weebly/Wix, Google Sites), Reddit/Quora profiles with genuine participation, forum profiles, profile links, video links (YouTube/Vimeo descriptions), launch/listing platforms (Section 12.3). **Genuine, populated profiles only**: real bio, real content, real participation. ⛔ No mass/automated profile, forum, comment or Web 2.0 link blasts and no thin Web 2.0 blogs made only for links |
| **Month 3 onward: quality** | Links that move rankings | Digital PR/journalist requests (SOS), linkable assets, guest posts on genuine sites (the editor decides on any link; no placed keyword anchors), resource-page links, podcast appearances, partner links, (⚠️ R1/R2 niche edits, exchanges, paid placements only with approval) |

Keep link velocity natural (steady, not spikes); anchor mix mostly branded/URL/generic/partial, with exact-match anchors kept low. [Baseline]

**Day-1 order for a brand-new site** [GA V51]:
1. **Entity stacking first:** brand profiles and listings across many platforms that prove the brand exists (same name, logo, description, link), pointing to the **home page** with **brand-name anchors**. A brand that appears consistently on many platforms earns trust and tends to be steadier through updates. Build them gradually (not batch-created). Note: this is **not** the grey-hat "Google entity stack" of interlinked Google Docs/Sheets/Drive/Sites built for links; treat that as a link scheme (⛔).
2. **Local citations in the country you want traffic from** (not random foreign directories).
3. Profile links, document/PDF-sharing profiles, genuine Web 2.0 brand pages and forum participation (below).
4. **Strong editorial/guest links only once the site has real content and some traffic.** The expert's reasoning: powerful links arriving on a site with no visitors look unnatural. Paid links remain ⚠️ R1 whatever the timing.
- **Finding niche forums and Q&A sites:** Google `[niche] inurl:forum`, and also try `[niche] "directory"`, `[niche] "Q&A"`, `[niche] answers`; list the relevant ones and participate before linking.
- ⛔ Don't build Web 2.0 sites with AI-written filler articles or to "justify" stronger links: that's a link-scheme pattern. Only real brand pages with real content.

### 12.3 Free foundation sources [GA V4, V9, V25, V33 + Baseline]
- **Expert's list (optional; a third-party list, check each source's relevance to your market):** ghulamaliseo.com/backlinks: "High DR Free Backlinks", 128+ sources, highest DR 99, 4 tiers (DR 90+: 31 · DR 70–89: 39 · DR 50–69: 33 · DR < 50: 25), plus "Top Picks: Priority Launch & Listing Platforms". (The list is rendered by JavaScript; open it in a browser and copy it into the tracker.) Build steadily (e.g. 5–10/week), not all in one day. The expert's claim: working through the list lifts DR to ~30–40 and replaces links people pay $200–1,000 for (DR is a third-party metric, not a Google ranking factor; rankings matter more). [GA V25]
- **Everyone:** LinkedIn, X, Facebook, Instagram, YouTube, Pinterest, TikTok, Reddit, Quora, Medium, Crunchbase, About.me-type profiles, GitHub (if relevant).
- **Local/service:** Google Business Profile, Bing Places, Apple Business Connect, Yelp, Angie, Thumbtack, TripAdvisor (hospitality), industry/country directories, chambers of commerce. Consistent **NAP** everywhere.
- **Agency:** Clutch, GoodFirms, DesignRush, Sortlist, UpCity, Glassdoor.
- **SaaS/tool:** Product Hunt, G2, Capterra, AlternativeTo, SaaSHub, BetaList, Indie Hackers, Chrome Web Store (if you have an extension; a high-DR listing), GitHub.
- **E-commerce:** Google Merchant Center, Trustpilot, Pinterest, marketplace profiles.
- Many are nofollow/UGC despite "DoFollow" claims; they still build entity, AI mentions, referral traffic and a natural profile. Verify each live link in Ahrefs.

### 12.4 Competitor backlink gap (Link Intersect) [GA V4, V13]
1. Build a list of 50–100 competitors (Ahrefs Organic competitors + SERP research).
2. Ahrefs **Link Intersect**: "Show me who links to" (competitors, in batches) "but doesn't link to" (your site) → domains linking to 2+ competitors first → export the full list (it can be 10,000+ sites).
3. Clean the list (Prompt P12): remove spam, PBNs, link sellers, irrelevant/foreign sites; keep relevant DR 20+ with real traffic; classify the link type (guest post, resource page, directory, mention, partner, PR, community).
4. Find contacts → personalised outreach (Prompt P13) → follow up once after 4–5 days and once more after a week; 20–50 emails/day from a warmed domain email.
5. **Offers, best to worst:** value (guest article, data, better resource, broken-link fix) → free mention request → link exchange (⚠️ R2: the expert's method offers exchanges at scale; any exchange program needs approval; only occasional, genuinely relevant partner links are fine). **Skip paid demands** unless R1 is approved.
- **Newest competitor links:** Ahrefs → competitor → Backlinks → **one link per domain** → sort by **First seen** (newest) → then DR → check where each link sits (body, comments, profile, directory) → replicate what's achievable. Set Ahrefs Alerts for competitors' new backlinks. [GA V13]

### 12.5 Quality link tactics [GA V37 + Baseline]
- **Forum & community links (days 26–28 for a new site)** [GA V46]: Reddit (add value first, link only where it genuinely helps), niche forums and Q&A sites (e.g. Quora, Stack Exchange, WebmasterWorld, Digital Point): answer questions, build credibility, link sparingly. ⚠️ R12 at scale. Plus 2–3 earned guest posts. "5 quality links beat 50–100 weak ones."
- **Source of Sources (SOS)** (free): journalists post daily requests for expert quotes → respond with concise, quotable expertise; 15–20 minutes daily; "a numbers game, but the most viable tactic for beginners". Also Qwoted, Featured.com, Help a B2B Writer.
- **Be a source:** publish original data/analysis → journalists and bloggers cite you (Section 11.9).
- **Linkable assets:** comprehensive guides, templates, checklists, free tools/calculators (non-coders can build simple tools with Claude/Replit in minutes) = backlink magnets. Build 10–15 great pieces before heavy outreach.
- **Podcast guesting** via podcast directories/guest platforms (links + transcripts AI reads).
- **"Best of" roundups:** get your product/service listed in third-party roundups (AI cites them heavily).
- **Unlinked mentions:** find brand mentions without links (Ahrefs Content Explorer / Brand Radar) → ask for a link.
- **Broken-link building:** find broken resources on relevant sites → offer your page.

### 12.6 Link vetting checklist (any link, especially paid/guest) [GA V23]
- [ ] Real organic traffic (not tool-manipulated); check the traffic trend and the keywords it ranks for.
- [ ] Real authority: DR grew naturally (no sudden pump).
- [ ] Not a link-selling site ("write for us" everywhere, every niche, hundreds of guest posts).
- [ ] Topically relevant; real content quality; real audience.
- [ ] Not part of a PBN (homepage of unrelated articles each linking out; shared footprints).
- [ ] Link is contextual, in the body, indexable page; `rel="sponsored"` if paid.
- [ ] Guest posts vs niche edits (⚠️ R1 when paid): avoid generic guest-post sellers; niche edits on aged, trafficked, relevant pages are stronger, but a profile dominated by niche edits looks unnatural.

### 12.7 Done-criteria (ongoing)
Referring domains growing steadily each month; links pointing at money pages and pillar pages; no toxic spikes; brand mentions increasing in Brand Radar.

---

## 13. STAGE 9: LOCAL SEO & GOOGLE BUSINESS PROFILE
*(Local businesses, service-area businesses, agencies with an office, stores.)*

### 13.1 How the local pack ranks [GA V38, V47]
- **Relevance:** how well you match the search (categories + description terms).
- **Distance:** physical distance from the searcher.
- **Prominence:** how well known you are (total + positive reviews, citations, links, mentions).
- **Supporting signals** (reviews, photos, posts, citations, backlinks, engagement) strengthen these three. Case: a local client reached ~$20K/month and ~150 GBP calls/month without ads; 70–80% of the steps are the same for every local client. [GA V47]

**First decision: Map Pack, organic results, or both?** [GA V47]
| Business | Customers travel… | Focus |
|---|---|---|
| Hyper-local, small service area (salon, barber, clinic, gym) | Rarely far; they pick the closest, so distance matters most | **Map Pack / GBP first**, website supports it |
| Customers travel or order from further (restaurant with delivery, specialist clinic, showroom) | 5–10 km+ | **Both** Map Pack and organic local pages |
| Service-area business (plumber, cleaner, agency serving a city) | You go to them | Both; location/service-area pages (13.3) + GBP with service areas |

### 13.1a Business name rules (the fastest way to get suspended) [GA V47]
- [ ] Use the business's **real-world name**, as used consistently on its signage, website and stationery and known to customers (Google's guideline). The expert also matches it to the registration document.
- [ ] No added keywords ("Best Dental Clinic Khan"), no superlatives (best, top, #1, cheap, premium, affordable).
- [ ] No added locations ("Khan Dental Clinic DHA Phase 5 Lahore") unless they're genuinely part of the real-world name (e.g. on the signage).
- [ ] No service lists ("Khan Dental Clinic Teeth Whitening Implants Braces").
- If the current name breaks these rules: edit it to the real name now. Suspension is slow and painful to reverse (the expert's experience: 3+ weeks without calls and several appeals). Keywords belong in categories, services, description, posts and the website, not the name.

### 13.2 GBP playbook (the expert ranked a brand-new GMB in 14 days) [GA V38]
1. **Categories:** the most specific primary category (e.g. "SEO consultant", not a broad one) + up to 9 secondary categories. Search your business name while logged in → Edit profile → pencil next to Business category.
2. **Description (750 characters max; truncated after a few hundred, so front-load):** what you are, who you serve, services, location, differentiators; include keywords from local research naturally; no stuffing.
3. **Photos & videos:** follow Google's specs (JPG/PNG, 10 KB–5 MB, min 250×250, recommended 720×720, authentic, no stock, no heavy filters); variety: exterior, interior, team, products, at work, signature features; encourage customer (user-generated) photos; add new ones periodically; videos for engagement.
4. **Products & services:** Edit services (Google's suggestions or custom) + Edit products → Get started (name, price, description) → Publish → more relevant searches + easier for customers to judge fit.
5. **Reviews:** consistency beats totals (~5 new reviews/month can outperform a competitor with 50 old ones and 2 recent). Ask at natural moments (right after a good interaction), make it simple (share the review link from the GBP dashboard, post-purchase email/SMS/QR). Never incentivise, pay, fake or gate reviews. **Reply to every review**, including negative ones.
   - **How Google judges reviews (patterns, not a public score)** [GA V47]: there's no confirmed per-review quality score, but Google evaluates patterns: **spikes** (4 reviews in 6 months, then 30 in a week = red flag; 50 in a day after an incentive gets caught fast); **authenticity** (does the reviewer review other places? real account? does their location make sense?); **reviewer trust** (the expert's observation, not documented by Google: a new account that only reviewed you seems to count less than an active Local Guide with hundreds of reviews). "100 reviews will rank you" and "only 5-star reviews count" are myths.
   - What works: **authentic, detailed, naturally paced** reviews. Ask customers to mention specifics (what service, how long, how it felt): one detailed real review beats many vague or fake ones; "20 real reviews > 200 fake".
6. **Posts (regularly; weekly at minimum, the expert posts daily for active clients) [GA V38, V47]:** Updates (news/tips), Offers (discounts, limited deals), Events (dates/details); always add a CTA button.
7. **Accurate, consistent info:** hours (incl. holidays; wrong hours "silently kill" a listing: a customer who arrives to a closed door is a negative signal) [GA V47], phone, website, attributes; review periodically; keep NAP identical across citations (Google cross-checks Yelp, Facebook, Bing, Apple…).
8. **Common questions:** GBP/Maps Q&A was retired in late 2025 (replaced by an AI "Ask" feature that answers from your profile, reviews and website). So put answers to common questions in the GBP description, services, posts and an FAQ on your website, which the AI reads. [Baseline, verified Nov 2026]
9. **Track:** GBP Performance (calls, direction requests, website clicks, searches) + local rank grid (e.g. Local Falcon-style) for key terms. [Baseline]

### 13.2a Engagement signals: make the listing useful [GA V47]
Google watches how people use the listing: **calls, direction requests, website clicks, photo views, hours checks, service views**. Together they show how useful the listing is (your digital shop window), which feeds prominence. Exact weights are unknown.
- [ ] Real, high-quality photos (no stock): interior, exterior, team, products, services; add new ones regularly (listings with fresh photos get more engagement).
- [ ] Services filled in with descriptions and prices where possible (service views).
- [ ] Posts with offers, updates and new services.
- [ ] Accurate hours, incl. holiday hours.
- [ ] Common questions answered in the description, services, posts and the website FAQ (GBP Q&A is retired).
- [ ] **Website landing page per service/area** (real areas served only, ⚠️ R8, 13.3) that matches exactly what the searcher wanted (generic pages make visitors bounce straight back, a bad signal).
- [ ] Compare your engagement rates with the top competitor's (calls, website clicks, directions per day from GBP Performance); a gap here explains a lot.

### 13.2b Why does a competitor with fewer reviews outrank you? (diagnosis) [GA V47]
| Check | What to look at | Fixable? |
|---|---|---|
| 1. Proximity | Where the searcher stands; if they're closer to the competitor, the competitor wins | No (natural distance signal); widen relevance and prominence instead |
| 2. Category relevance | Primary category exact (e.g. "Dentist", not "Medical clinic"); services list complete; no overlapping categories | Yes: fix category and services |
| 3. Brand prominence | Internet footprint: news mentions, directory citations, social presence, backlinks; years in the area | Slowly: citations, PR, links (12) |
| 4. Review profile trust | Pattern, not count: 80 reviews in 3 months (spike) can lose to 40 spread over 2 years | Yes, over time: steady, real, detailed reviews |
| 5. Engagement | Competitor's call, click and direction rates higher → seen as more useful | Yes: photos, posts, hours, services, landing pages (13.2a) |

### 13.3 Local website SEO [GA V39 + Baseline]
- Location/service-area pages for real areas served (⚠️ R8: no doorway pages): unique content (local projects, photos, testimonials, landmarks, FAQs, map embed, NAP, LocalBusiness schema).
- Target hyperlocal, near-me + urgency, landmark, competitor-alternative and mobile-style keywords (Section 6.6-B).
- Citations: Bing Places, Apple Business Connect, Yelp, Facebook, industry/local directories (12.3).
- Mobile-first experience (click-to-call, directions, opening hours visible).

---

## 14. STAGE 10: EXISTING-SITE GROWTH (QUICK WINS & THE REFRESH LOOP)
*"5 easiest ways to increase organic traffic without writing new content" + the opportunity mining.* [GA V42, V8, V2, V21]

### 14.0 Traffic decline diagnosis (run first on any declining site) [Baseline]
1. **Size it:** GSC 16 months, compare the last 3 months vs the same period last year (removes seasonality); Google Trends for the main topics (is demand itself falling?).
2. **Where:** split by page type/folder, country, device and query type (brand vs non-brand). A decline concentrated in one page type points to a cause.
3. **When:** mark the start date against Google core/spam update dates, site changes (Change Log), migrations, CMS/theme/plugin updates.
4. **Why, by pattern:**
   - Positions stable, CTR falling → AI Overviews/SERP features taking clicks (check the SERP; optimise for AIO citation, 11.7; rich results; titles).
   - Positions falling on many pages after an update date → quality issue on that page type (helpful content, thin/AI content, E-E-A-T) → improve the losing type.
   - Positions falling on specific pages → content decay or a competitor overtaking (compare competitor pages in Ahrefs; refresh, P14).
   - Pages dropping out of the index → technical (Section 10, GSC Pages report).
   - Referring domains lost → link losses (Ahrefs lost links; reclaim).
5. **Act on the biggest cause first**, log changes, re-measure after 4–8 weeks.

### 14.1 The quick-win sequence
1. **Refresh metadata for CTR** (the expert's agency rewrites every existing page title for each new client first, and credits about half of early results to it) [GA V52]: titles with numbers, year and benefit ("Best 12 LinkedIn Tools in 2026"); authority cues; study the SERP and mimic what works (don't copy); keep the target keyword (as seen in GSC) in the title.
2. **High impressions, low CTR pages** (GSC; "low" = below the site's own average CTR for that position, from `gsc-ctr-by-position` or GSC grouped by position): update titles/metas; if no change → either the page isn't optimised for those queries (add sections) or it lacks authority (internal links + backlinks).
3. **Internal links with the right anchors:** find pages with 0–2 internal links (Ahrefs Site Audit → internal links reports) → add contextual links from relevant, strong pages; don't overdo it.
4. **Content refresh "the process":** GSC queries a page ranks for but doesn't contain (positions 5–40: 5–20 = striking distance, 21–40 = topical gaps) → add semantically optimised paragraphs/sections covering them → request indexing. Example result: +170 traffic on one page.
5. **Topical authority gap:** Ahrefs Content Gap → relevant keywords competitors rank for and you don't → new pages or sections.
6. **Striking-distance zero-click queries** (6.7-3).
7. **Cannibalisation fixes** (7.1).
8. **Technical P1 fixes** on high-value pages (10.1).
9. **Conversion fixes on high-traffic pages** (8.9: product links, smart CTAs, trust signals): often the fastest revenue win on an existing site. [GA V49]
10. **Schema upgrades** for rich results (the expert reports CTR jumping from ~30% to ~80% with rich snippets on the right pages; treat as his case result, not a norm). Eligible types today: Product, reviews on products/software, Breadcrumb, Video, Event, Organization logo, etc.; FAQ rich results stopped in May 2026 and HowTo rich results are gone, so don't count on them for CTR. [GA V40 + Baseline]

### 14.2 Existing-site audit order
Baseline (3.3) → technical triage P1 (10.1) → cannibalisation (7.1) → quick wins (14.1) → topical gaps (6.6-D) → GEO layer (11) → authority (12) → ongoing cadence (15).

### 14.3 Content pruning (sites with many weak pages) [Baseline]
For each page with no clicks, no impressions, no links and no business value over 12 months: **improve** (if the topic matters) → **merge** into a stronger page + 301 → **noindex** (useful to users, useless for search) → **delete with 410** (useless). Never prune pages that have backlinks without redirecting them. ⚠️ Large-scale deletions (> 10% of the site): ask the user first.

---

## 15. MEASUREMENT, KPIs & OPERATING CADENCE

### 15.1 KPI set (record in the tracker's KPI tab)
| Area | KPI | Source |
|---|---|---|
| Visibility | Impressions, clicks, CTR, average position (site + money pages) | GSC (or Ahrefs connector `gsc-*`) |
| Rankings | Tracked keywords in top 3 / top 10 / top 20 | Ahrefs Rank Tracker |
| Indexing | Indexed vs submitted pages; "Crawled/Discovered – not indexed" count | GSC Pages report |
| Business | Organic leads/calls/sales/sign-ups/AdSense revenue; conversion rate | GA4 (key events), CRM, GBP |
| Authority | Referring domains (new/lost), DR trend, links to money pages | Ahrefs Site Explorer |
| Technical | Site Audit health score, P1 issue count, CWV pass rate | Ahrefs Site Audit, GSC CWV |
| AI search | AI share of voice (prompt set), AI citations/mentions, AI referral sessions, AIO citations | Brand Radar / prompt sheet / GA4 |
| Local | GBP calls, direction requests, website clicks; review count + rating; local rank grid | GBP Performance |
| Content | Pages published/refreshed vs plan; QA-gate pass rate | Tracker |
| Conversion | Conversion rate and revenue/leads per organic landing page; CTA click rate | GA4 key events, e-commerce reports |
| Social (GSC) | Clicks/impressions on social platform properties | GSC |

### 15.2 Cadence
*These are the **Recurring** tasks (3.5). The tracker's Routine tab lists them with a tick-off per month.*
| When | Do |
|---|---|
| **Daily (5–20 min)** | SOS/journalist requests (if used); reply to reviews; publish per drip schedule |
| **Weekly** | Ahrefs Site Audit review (new P1s); GSC quick check (drops, indexing errors, manual actions); rank tracker movements; GBP post; 5–10 foundation links (new sites); outreach batch |
| **Monthly** | GSC opportunity mining (6.7: questions, buying, striking distance, low CTR); GSC social-platform properties: review/export queries (11.5); refresh 2–5 pages (8.8); AI prompt-set run + share of voice (11.8); AIO gap check (11.7); backlink gap + newest competitor links (12.4); own backlink audit (new/lost referring domains, spikes, anchors); KPI snapshot; report to the user |
| **Quarterly** | Full technical audit (10.2) incl. Screaming Frog + logs (large sites); topical map review + new clusters; content pruning (14.3); competitor review (new competitors, their new pages); schema re-validation; roadmap reset |
| **After every Google core/spam update** | Compare 2 weeks before/after per page type; don't panic-change; fix quality issues on losing page types |

### 15.3 Reporting template (monthly, to the user)
1. Headline: organic business results (leads/sales/revenue) vs last month and last year.
2. Visibility: clicks, impressions, top-10 keywords, AI share of voice.
3. Work done (from the tracker): pages published/refreshed, fixes, links, GBP.
4. Wins + losses (with reasons).
5. Next month's priorities (P1 first) + any **⚠️ decisions waiting for approval**.

---

## 16. BRANCH PLAYBOOKS BY SITE TYPE
*Run the core stages for every site, then add the branch for its type. A site can use more than one branch (e.g. agency + local).*

### 16.1 Agency / service business
- **Money pages:** one page per service (and per service + location only where genuinely served), pricing/packages, case studies, industries served, "hire / near me" landing pages. [GA V3, V37]
- **Funnel:** blog guides → service page; comparison pages ("agency vs freelancer", "in-house vs agency"); cost guides ("how much does X cost") → pricing page.
- **Proof:** case studies with numbers, client logos (with permission), reviews (Trustindex widget or similar), team bios with credentials (Person schema). [GA V17]
- **Entity & listings:** Clutch, GoodFirms, DesignRush, Sortlist, UpCity, LinkedIn company page, Crunchbase, Glassdoor (12.3, 11.4).
- **Schema:** ProfessionalService/LocalBusiness + Service + Person + FAQPage (9.2); show genuine reviews on the page, but self-reviews won't produce stars (9.2 note).
- **GEO:** "best [service] agency in [city/country]" prompts → get onto the third-party listicles AI cites (11.6); publish proprietary data (client-results benchmarks).
- **Local:** add 13 if there's an office or service area.
- **Lead tracking (set up in week 1):** GA4 key events for form submits, phone-click (`tel:`), WhatsApp click (`wa.me`/`api.whatsapp.com`), email click, booking/calendar; call tracking if calls matter; pass lead source (organic, AI referral, GBP) into the CRM; report leads by landing page and by channel incl. AI referrals (Section 11.8).

### 16.2 Local business (single or multi-location)
- Stage 9 is the core. GBP + reviews + citations + location pages (real locations only, ⚠️ R8).
- Hyperlocal keywords (6.6-B); one strong page per service; location pages with unique content.
- AI: Google Maps, Apple Maps, Bing Places, Yelp, Angie, Thumbtack, TripAdvisor, Facebook (11.4).
- Track GBP Performance + local rank grid; ~5 new reviews/month.

### 16.3 Tool / calculator site [GA V6, V32, V44, V45]
1. **Niche:** Ahrefs method (6.6-A): US (or target country), Lowest DR ≤ 10, include "calculator/generator/converter/checker…", word count ≥ 4 → or find one low-DR, high-traffic tool site and mine its keywords. Check search volume, CPC/AdSense value and that you can build it. Accept a keyword if a top-10 site has DR < 10 (or < 20). (The expert's examples: his tool site ~$1,400/month AdSense; one 91K-traffic tool page ~$3–4K/month; one 4-page site with 82K traffic, all on one tool page.)
2. **Domain:** consider an exact-match domain when the main tool keyword has good volume and the EMD is available (⚠️ R10; the site still has to be good). [GA V32]
3. **Build the tool (vibe coding):** Replit / Claude / ChatGPT: paste a competitor tool's URL or screenshot: *"This is an example; please take note of all the features in this and build me a similar tool"* → test (correct results, edge cases, mobile) → Replit builds a prototype in ~7 minutes and self-tests it in the browser → refine in plain language → publish (a custom domain on Replit needs a paid plan) → embed on your site (WordPress: add a page → paste the tool's HTML/JS into a Custom HTML block; or iframe the published app; self-hosting on your own domain is best for speed and SEO). Make sure the tool works without errors, loads in ~1–2 s, and the output is crawlable text where useful. [GA V44, V45]
4. **One page per tool;** the tool above the fold; below it: semantically optimised supporting content (what it is, how it works, formula, worked examples, tables/charts, FAQs) built from an optimiser term list (Rankability / Surfer / NeuronWriter / Ahrefs Content Helper) (8.2).
5. **On-page (20+ elements, 9.1)** + technical from day one (HTTPS, no duplicates, ~1–2 s load, mobile, robots.txt, schema `WebApplication`/`SoftwareApplication`, fix broken pages). [GA V45]
6. **Links:** foundation links (12.3), especially tool directories, GitHub, Product Hunt, Chrome Web Store (if you also ship an extension); then a few relevant, contextual links to protect rankings (⚠️ R1 if paid). [GA V45]
7. **Monetise:** AdSense first (needs original content, privacy policy, about/contact pages, no policy violations, enough useful pages before applying); Ezoic / Mediavine-type ad networks once traffic qualifies; later direct ads/affiliate/premium features.
8. **GEO:** light on tool pages; normal on supporting content (11.11).
9. **Failure risks to avoid:** wrong niche, getting stuck while building, competitive keywords, poor content, technical issues (not indexed), wrong backlinks (penalty), AdSense not approved. [GA V44]
10. Scale: add related tools as a cluster (e.g. finance calculators) with internal links between them.

### 16.4 SaaS / software product
- **Money pages:** product/features pages, use-case pages, integration pages, pricing, "[competitor] alternative(s)", "[you] vs [competitor]", templates. [Baseline]
- **Free tools** as linkable assets + lead magnets (16.3 method). [GA V37]
- **Listings:** G2, Capterra, Product Hunt, AlternativeTo, SaaSHub, Stack Exchange answers, GitHub (11.4, 12.3).
- **GEO:** AI is asked "best [category] tool for [use case]": track these prompts, get onto the cited roundups, publish proprietary usage data; docs/help centre in clean HTML (AI and users read it).
- ⚠️ R7 programmatic pages (integrations, templates, "X for [industry]") only with unique, useful content per page.

### 16.5 E-commerce (Shopify & others) [GA V10, V11, V21, V43]
- **Architecture:** Home → collections/categories (money pages for commercial keywords) → products (transactional) → blog feeding collections via internal links (7.3). Collections are often the best-ranking pages; give them unique intro + FAQ content.
- **Before any change:** duplicate the theme / back up. [GA V43]
- **Duplicates:** Shopify's `/collections/x/products/y` vs `/products/y` → make sure the canonical points to `/products/y` and internal links use the canonical URL; filter/sort parameters canonicalised or blocked; variants handled. [GA V11]
- **Product pages:** unique descriptions (no manufacturer copy), primary keyword in the title + first paragraph, H2s in the description, 1–4 key features, specs table, FAQ, genuine reviews, alt text on all images (e.g. template = product title), compressed WebP images (medium compression), video where useful. Target a 90+ score in your SEO app. [GA V43]
- **Schema:** Product + Offer + MerchantReturnPolicy + OfferShippingDetails + genuine AggregateRating/Review + BreadcrumbList; Organization with logo and sameAs; LocalBusiness if there's a store. [GA V43]
- **Google Merchant Center** free listings (product feed) + Microsoft Merchant Center (Bing Shopping). [Baseline]
- **Technical:** sitemap submitted in GSC + Bing WMT; choose which page types are indexed; 404 → 301 to the most relevant page (auto-redirect for deleted products); out-of-stock: keep the page if it returns (show alternatives), 301 if permanently discontinued. [GA V43 + Baseline]
- **Research:** buying regex in GSC (Section 20); keyword clustering by parent topic (one intent = one page) for collections. [GA V10, V21]
- **Apps (optional):** SEOWILL (SEOAnt) – AI SEO by CWILL (the expert's walkthrough: SEO checker, speed, AI blog writer, content optimisation scores, alt/meta automation, broken links, HTML sitemap, schema incl. Organization for the knowledge panel, llms.txt, instant indexing, keyword module (rank tracking, apply a keyword to a specific product, competitor tracking, GSC connected inside the app), Chrome extension).
  - **AI blog-writer flow worth copying with any tool:** business details + personas → keyword with volume/competition → target location + language → topical overview (related topics) → reference pages (top competitors), video reviews, community advice → SERP analysis → outline with notes per heading → one-click internal links → title/meta preview → generate → edit (entities, links, images) → schema toggles (Breadcrumb, Article, FAQ) → content score (e.g. 94) → publish. Alternatives: Yoast for Shopify, Plug in SEO, Smart SEO, or manual + Ahrefs. **⚠️ R2: do not join any app's automated link-exchange network without approval.** [GA V43]
- **AI content writers inside apps:** every generated post still passes the QA Gate (8.6) and the drip schedule (8.7).
- **GEO / AI shopping:** product feeds are the source for AI shopping answers: keep Google Merchant Center (feeds Google Shopping/AI Mode) complete and accurate (GTIN/brand, price, availability, shipping, returns, images); submit to other shopping programmes as they open (e.g. ChatGPT/Perplexity merchant programmes where available); complete product data on-page; reviews on Trustpilot/Google; Reddit/forum discussion; "best X for Y" roundups; marketplace presence where your buyers shop (e.g. Etsy for handmade, Amazon).

### 16.6 Blog / publisher / affiliate
- Topical authority by cluster (7); low-competition scorecard ≥ 4 (6.5); semantic content (8); drip publishing (8.7).
- Original research and first-hand testing (photos, data) to survive helpful-content and AI summaries. [GA V16, V34]
- Affiliate links `rel="sponsored"`; honest comparisons; update "best X" posts often (freshness).
- Monetisation: AdSense/display, affiliate, own products.

### 16.7 Real estate (property dealers, housing societies, builders, rentals) [GA V50]
*Case: a DHA Lahore property office got 147 qualified leads in 6 months; another client with 8 months of no results had 47 indexing errors; fixing them showed improvement within 3 weeks.*
1. **Research:** portals (Zameen.com, OLX, Graana; Rightmove/Zillow-type portals abroad) own the head terms ("property for sale", "real estate [country]"). Target long-tail, location- and property-specific buyer queries ("5 marla house for sale DHA Phase 6 Lahore"): the searcher has already decided. Ahrefs: niche seed → country → Matching terms → Lowest DR in top 5 ≤ 5–20 → word count ≥ 4. Ideal keyword: a low-DR site and an irrelevant result in the top 5, location-specific, buyer intent.
2. **Entity & GBP:** category, service area, real photos, genuine client reviews, weekly posts, updated info (Stage 9). Ranking in both Maps and organic results gives two chances at each searcher.
3. **Authority content by intent:** informational guides ("how to buy property in [area]", "5 marla vs 10 marla", "property tax rules"), commercial comparisons ("best housing societies in [city] 2026", "[society A] vs [society B]"), transactional listings/landing pages. Write like an expert: the topic's natural vocabulary (e.g. loan, registry, mutation, stamp duty, society, NOC, fard, title deed) shows real expertise.
4. **Location pages in a hierarchy:** City → Area → Phase/Block → Property type (e.g. Lahore Real Estate → DHA Lahore → DHA Phase 6 → 5 Marla Houses). Each page gets unique local information: landmarks, price ranges, schools, hospitals, transport. Only for areas you genuinely serve (⚠️ R8).
5. **Technical:** compress heavy property images (WebP; WP Smush/WP Rocket-type tools); HTTPS (free via Cloudflare); the same property on several URLs → canonical tags; listing schema (schema.org RealEstateListing, a pending type, + Offer with price, address, property type; add as custom JSON-LD since SEO plugins rarely have a template; validate with validator.schema.org). Google has no dedicated real-estate rich result, so expect help with understanding rather than stars. Mobile-first: 54–60% of traffic. Remove sold listings with a 301 to the area/category page (or keep with a "sold" label and alternatives).
6. **Links (months 1–2):** GBP, national real estate directories, social profiles, chamber of commerce and business association listings. **Month 3+:** guest posts on property blogs, local newspaper digital editions, data-driven content ("[area] property prices 2026"), real estate/business podcasts, builder association listings. "One relevant local backlink beats 50 generic ones."
7. **Conversion:** WhatsApp/call buttons on every listing and location page; enquiry forms tracked as GA4 key events; trust (agent bios, licences/registration, testimonials) (Section 8.9).

### 16.8 Building a playbook for any other niche (template) [GA V46–V50 pattern]
For a niche without its own branch (dentists, law firms, travel, education…), answer these 7 questions and write a one-page branch like 16.7:
1. Who owns the head terms (portals, marketplaces, directories) and which long-tail, location-specific, buyer-intent queries are left?
2. Map Pack, organic, or both (13.1)? Which GBP categories?
3. The 3 content types: which informational guides, commercial comparisons and transactional pages does the buyer journey need?
4. Which location or service hierarchy (city → area → service) do real customers use?
5. Which niche-specific technical issues (heavy media, duplicate listings, faceted filters, booking widgets)?
6. Which niche directories, associations, publications and podcasts give relevant links and mentions?
7. How does a lead or sale happen (call, WhatsApp, form, booking, cart), and how is it tracked (8.9, 16.1)?

---

## 17. 30 / 60 / 90-DAY ROADMAPS

### 17.1 New site (stage A)
| Period | Focus | Key tasks (sections) |
|---|---|---|
| **Days 1–7** | Foundation & findability | Intake + baseline (3); domain/hosting decisions (4); launch checklist incl. GSC, Bing WMT, GA4, Clarity, sitemap, robots.txt with AI bots, HTTPS, speed, mobile (5); decide what you want to be known for; search your topics on Google + AI and note who's cited (11.10) |
| **Days 8–14** | Research & map | Keyword SOP + scorecard (6); topical map + architecture + money pages (7); entity: social profiles + sameAs + GSC social properties (11.5) |
| **Days 15–30** | Core content + GEO layer | 5–10 best pages (money pages first) with answer-first + Q&A blocks + stats/quotes + schema + internal links (8, 9); publishing pace (8.7); foundation links + listings (12.2–12.3); GBP if local (13); run the 30-prompt AI set (11.8) |
| **Days 31–60** | Expand + authority start | Continue clusters at a steady pace; first refresh loop on pages getting impressions (8.8); weekly site audit; directories/roundups/communities (11.4); month 3 prep: linkable asset + SOS routine |
| **Days 61–90** | Quality links + optimise | Quality link tactics (12.5); backlink gap (12.4); GSC mining (6.7); AIO gap (11.7); monthly AI share of voice; KPI review (15) |

"Not a promise of #1 in 30 days: it builds the foundation. AI visibility often appears in weeks; Google usually takes longer." [GA V35, V36]

### 17.2 Existing site (stages C, D, E)
| Period | Focus | Key tasks |
|---|---|---|
| **Days 1–14** | Diagnose | Intake + baseline incl. AI prompt-set baseline (3); decline diagnosis if traffic is falling (14.0); Ahrefs Site Audit + GSC indexing + CWV + manual actions; triage P1s (10.1); cannibalisation list (7.1); robots.txt AI bots (5.2) |
| **Days 15–30** | Quick wins | Fix P1s on high-value pages; CTR rewrites; striking-distance + question + buying mining (6.7); refresh top 5–10 pages (14.1); internal links to money pages; schema (9) |
| **Days 31–60** | Gaps & GEO | Content gap + weak-competitor mining (6.6); new money pages; GEO layer on top pages (11.3); entity/listings (11.4); monthly AI prompt-set run |
| **Days 61–90** | Authority & scale | Backlink gap + outreach (12.4–12.5); linkable asset/proprietary data (11.9); pruning (14.3); set the ongoing cadence (15.2) |


**Focus by stage:** **C** = do the quick-win list in 3.4 in days 15–30 and keep it running monthly; links go to the pages closest to page 1. **D** = quick wins are smaller; put days 15–60 into conversion (8.9), new clusters and authority. **E** = days 1–14 are the decline diagnosis (14.0); fix the biggest cause before anything else.

### 17.3 Agency 30-day sprint, day by day [GA V46]
*Which roadmap?* Stage A → **17.1**. Stage B (live, almost no visibility) → **17.3** (this sprint). Stages C–E → **17.2** (diagnose first; Section 3.4 sets the focus). The expert says he ranked 100+ client sites with this sprint.

| Days | Do | Plan sections |
|---|---|---|
| **0** | Intake + baseline (incl. the 30-prompt AI baseline); launch checklist incl. GA4 key events/lead tracking, robots.txt with AI bots, Bing WMT | 3, 5.1, 5.2, 16.1 |
| **1–5** | Untapped keyword research: Ahrefs Keywords Explorer → country → Matching terms → **Lowest DR ≤ 20** + **word count ≥ 4** → Google each candidate → keep ones whose top 5 has a low-DR site, an irrelevant result and/or a forum → collect **30–50 untapped keywords** (long-tail like "SEO services for real estate Lahore", not "SEO services"). In parallel: **entity stacking** (brand profiles + sameAs to the home page, brand anchors) | 6.2, 6.5, 12.2 |
| **6–7** | Foundation check: fast hosting, lightweight theme, SSL, GSC (+ Bing WMT), SEO plugin (Rank Math: XML sitemap, schema, titles/metas) | 4.2, 5.1 |
| **8–10** | Outlines: search each keyword, study the top 3–5 results' structure, build yours | 8.2, 8.5 |
| **11–14** | Write semantically optimised content (optimiser term list: Surfer, NeuronWriter, Frase, Rankability, Ahrefs Content Helper) with the GEO formatting built in (answer-first, chunked sections, FAQs; 8.3); pass the QA Gate. **Publish the 5–10 best pages in the sprint**; the rest of the 30–50 keywords follow the 8.7 pace | 8.2, 8.3, 8.6, 8.7 |
| **15–21** | On-page (the 8 essentials: keyword in title, meta, H1; variations in H2s; keyword in image alt; internal links; external authority links; a relevant embedded video) + technical: speed stack, mobile, indexing (sitemap, URL Inspection), 404s → 301 | 9.1, 10.2 |
| **22–25** | Foundation links: local citations in the target country, profiles, Web 2.0 brand pages on your own accounts | 12.2, 12.3 |
| **26–28** | Community participation (Reddit/forums, value first) + start guest-post outreach on the easiest keywords' pages; placements usually land in months 2–3 (12.2) | 12.2, 12.5 |
| **29–30** | Verify the AI-search basics on every published page (answer in the first 100 words, structure, schema), finish E-E-A-T pages (author bios with credentials, professional About page, case studies with real results), re-run the 30-prompt set | 8.3, 9.2, 11 |

Then continue with 17.1's days 31–90 and the cadence (15.2). Note: the video's line "AI-optimised content converts 4.4× better" misreads Semrush's 2025 study, which found the average AI-search *visitor* converts about 4.4× better than a traditional organic visitor; that's about where the visitor comes from, not a property of the content.

---

## 18. RISK REGISTER & DEFENCE

### 18.1 Google spam policies to respect (summary) [GA V23, V26 + Baseline]
Link spam (buying/selling links that pass PageRank, excessive exchanges, PBNs, automated link programs) · Scaled content abuse (many pages made mainly to rank, by AI or humans, with little value) · Site reputation abuse (third-party content on a host site to exploit its rankings; since Aug 2026 its manual actions no longer affect rankings for EEA users) · Expired domain abuse (scaled content and expired domain abuse policies since March 2024) · Doorway abuse · Cloaking / sneaky redirects · Hidden text/links · Keyword stuffing · Fake reviews / review gating · Thin affiliation · Hacked content / user-generated spam.
See Section 2 for the Permission Gate (R1–R12) and the NEVER list.

### 18.2 Warning signs & response
| Sign | Check | Response |
|---|---|---|
| Sudden traffic drop | GSC by page type/date; Google update dates; Manual actions; Security issues; robots/noindex/canonical changes; server errors | Fix technical causes first; if update-related, improve quality on losing page types; don't mass-change |
| Manual action | GSC → Manual actions | Fix everything listed (remove/nofollow bad links, remove spam content) → reconsideration request with evidence |
| Spammy backlink spike (negative SEO) | Ahrefs new referring domains; anchors | Usually ignore: Google ignores spam links by default (e.g. 100k junk links bought for ~$10 on Fiverr); use the **Google Disavow Tool only** when there's a manual action or a clear, large paid/spam pattern you or a past SEO created |
| Index bloat | GSC indexed count far above real pages | Find the source (parameters, tags, search pages, hacks) → noindex/canonical/block/410 |
| Hacked content | `site:` search for spam terms; GSC Security issues | Clean, update, change passwords, request review |
| Ranking but not cited by AI | Prompt set; AIO gap | GEO layer (11.3); off-site mentions; freshness |
| AI says wrong things about the brand | Prompt set sentiment/accuracy | Fix facts on your site + the sources AI cites; consistent descriptions everywhere |

### 18.3 Defence basics
Backups (daily) · security updates · 2FA · monitoring alerts (Ahrefs alerts for new/lost links and keywords; uptime monitor) · keep a change log in the tracker so any drop can be traced to a change.

---

## 19. PROMPT LIBRARY
*Use with Claude or ChatGPT. Replace [brackets]. Always review the output; verify facts and numbers before publishing. The expert's original prompts are marked [GA]; the others are written for this plan.*

**P1. Competitor page audit (why they rank / how to outrank)** [GA V1, strengthened]
```
A) This is my competitor's page for the keyword "[keyword]": [URL or pasted content + headings, word count, keyword occurrences].
Why is this page ranking for this keyword? Analyse search intent match, topic coverage,
content structure (H1–H3), depth, entities/terms, E-E-A-T signals, media, internal links and schema.
B) This is my page for the same keyword: [URL or content]. What exactly do I need to do to outrank
the competitor? Give a prioritised list: missing sections (with suggested H2/H3s), facts/data to add,
intent fixes, on-page fixes, internal links, and one unique angle the competitor doesn't have.
```

**P2. Keyword relevance scoring** [GA V31, strengthened]
```
My business: [what we sell/do, for whom, where]. Score each keyword below for relevance to the
business: 100% (we sell exactly this), 75% (closely related, can convert), 50% (informational,
same topic), 0% (irrelevant). Also label search intent (informational / commercial / transactional /
navigational) and the best page type. Return a table: keyword | relevance | intent | page type | reason.
[paste keywords]
```

**P3. Keyword clustering / topical map** [GA V10, V20, strengthened]
```
Cluster these keywords into pages: one search intent = one page. Group keywords that would be answered
by the same page (same intent, same SERP). For each cluster give: main keyword, supporting keywords,
intent, page type (service/product/category/comparison/guide/tool), suggested URL, pillar it belongs to,
and whether it is a money page. Then show the topical map as pillars → clusters, and flag any
existing URLs [list] that would cannibalise each other.
[paste keywords with volume/KD/parent topic]
```

**P4. GSC question & query analysis** [GA V2, V21, strengthened]
```
These are Search Console queries for [site] (query, page, clicks, impressions, CTR, position).
1) Group the questions by topic and intent. 2) For each group: is it answered on the ranking page?
(Page content: [paste or URL]). 3) Recommend: add a section (give the H2 + a 40–60-word direct answer),
create a new page, or ignore. 4) Highlight buying/commercial queries and positions 5–20 first.
[paste export]
```

**P5. Internal linking plan** [GA V24 verbatim + strengthened]
*Expert's prompt (verbatim):* "Act as an SEO executive to Make me an internal linking structure for all the keywords that i have provided. The goals is rank higher in google by building topical authority. I need you to provide me internal linking plan with the implementation details to help me understand how to implement it."
*Strengthened version:*
```
Act as a senior SEO. Using this topical map [paste], these keywords [paste] and these existing URLs [paste],
build the internal linking plan to grow topical authority and push authority to money pages.
Rules: pillar ↔ cluster links; cluster → money page; related clusters in the same silo link to each other;
every page ≤ 3 clicks from home; no orphan pages; 3–10 contextual links per article; varied, descriptive
anchors (no exact-match spam). Output: (1) a table Source URL | Target URL | Anchor | Where on the page |
Priority; (2) breadcrumb plan; (3) a Mermaid diagram of the structure; (4) which older strong pages should
link to new pages.
```

**P6. Top-5 research + content brief** [GA V28, V37 + Baseline]
```
Keyword: "[keyword]" | Market: [country/language] | Business: [description] | Page type: [type].
Here are the top 5 ranking pages [URLs or pasted content]. For each: topics covered, what's missing,
length, unique angle. Then write a content brief using this template: [paste template from Section 8.5].
Include the "cover it all + one more" angle, real questions for the FAQ, statistics I should find
(with likely primary sources), and expert quote ideas. Don't invent statistics.
```

**P7. Semantic optimisation of a draft** [GA V20, V44]
```
Here is my draft for "[keyword]" [paste] and the term list from my content optimiser [paste terms + target counts].
Rewrite only where needed to cover missing subtopics and terms naturally (no stuffing), keep my voice and
my first-hand experience, make every section answer-first (40–60 words), one idea per section,
active voice, short paragraphs. Mark every change. List any claims that need a source.
```

**P8. Sitemap / page gap comparison (free content gap)** [GA V3 alternative]
```
Here are URL lists from my sitemap [paste] and from competitors' sitemaps [paste, labelled].
Infer each page's topic from the URL. List topics/pages competitors have that I don't, grouped by
type (money page / blog / tool / location), with priority (High if 2+ competitors have it and it's commercial).
```

**P9. Schema & entity audit** [GA V18, written for this plan; the expert's own prompt is in his pinned comment]
```
Act as a technical SEO and structured-data specialist. Audit [site URL] (key pages: home, about, contact,
services/products, blog post, case study, [others]). For each page type report: existing schema (if visible),
missing schema, entities not clearly defined (organisation, people, services/products, location),
and sameAs profiles to add [list profiles]. Then give ready-to-deploy JSON-LD: (1) a global entity graph
(Organization/LocalBusiness + WebSite + logo + sameAs) and (2) a block per page type. Use only facts
I've confirmed [paste facts]; leave placeholders for anything unknown; never invent reviews or ratings.
Finish with a phased implementation checklist and how to validate (Rich Results Test, validator.schema.org).
```

**P10. Orphan / URL list diff (technical)** [GA V40]
```
List A = URLs found by crawling (Screaming Frog/Ahrefs) [paste]. List B = URLs in the XML sitemap [paste].
List C = URLs with impressions in GSC [paste]. Find: orphan pages (in B or C but not A), sitemap URLs that
shouldn't be there (redirects, 404s, noindex, non-canonical), and crawled URLs missing from the sitemap.
For each orphan recommend: add internal links (from which pages), 301 to [best page], or 410.
```

**P11. AI Overview gap** [GA V27]
```
Keyword: "[keyword]". Here's the Google AI Overview text [paste] and the pages it cites [paste content/URLs].
Here's my page [paste/URL]. I want my page to be cited in this AI Overview. What am I missing?
Compare: facts and sub-questions covered, direct-answer passages (40–60 words under question headings),
lists/tables, entities and terms, freshness, author/E-E-A-T signals, sources cited, schema.
Give the exact sections/passages to add.
```

**P12. Backlink prospect cleaning** [GA V4, strengthened]
```
Here's a list of domains linking to my competitors but not to me (Ahrefs Link Intersect export with DR,
traffic, linked competitors) [paste]. Remove spam, PBN-like sites, link sellers ("write for us" in every niche),
irrelevant or wrong-language sites. Keep relevant DR 20+ sites with real traffic. For each kept domain:
likely link type (guest post, resource page, directory, mention, partner, PR, community) and the angle to pitch.
Sort by priority.
```

**P13. Personalised outreach email** [GA V4, strengthened: value-first, no paid demands]
*Expert's prompt (verbatim idea; his Claude flow: Website contact → Personalised email → Link Exchange Proposal):* "Analyze these websites and help me draft personalized backlink outreach emails to explore relevant link exchange opportunities." ⚠️ R2: the link-exchange version needs approval; the version below is value-first.
```
Write a short, personalised outreach email (under 120 words) to [site/person]. Context: [their page URL + what
it covers], my resource: [URL + why it's useful to their readers]. Offer value (an updated stat, a better
resource, a broken-link fix, a guest article idea, or a relevant partner mention) — no payment, no generic flattery.
Include a clear subject line, one specific reference to their content, and a polite opt-out line.
Also write 2 follow-ups (day 4–5 and day 11–12).
```

**P14. Content refresh plan** [GA V8, V42]
```
Page: [URL + content]. Search Console queries this page ranks for (positions 5–40, impressions, clicks) [paste].
Which queries are not covered on the page? For each: add a section (H2 + 40–60-word answer), add a sentence to
an existing section, or create a separate page (if a different intent). Also suggest a new title (< 60 chars,
keyword first, number/year/benefit), meta description (~150 chars), outdated facts to update, and internal links.
```

**P15. AI visibility prompt set** [GA V34, V35]
```
My business: [description, location, competitors]. Write [50] prompts real customers would type into ChatGPT/
Gemini/Perplexity at different stages: problem-aware, solution comparison ("best X for Y", "X vs Y", "alternatives"),
local ("best X in [city]"), and brand questions ("is [brand] good", "[brand] pricing"). Group by stage and
mark the 10 most valuable for revenue.
```

**P16. Tool cloning brief (vibe coding)** [GA V44]
```
This is an example: [competitor tool URL/screenshot]. Please take note of all the features in this and build me
a similar tool. Requirements: [inputs, outputs, formula], mobile-friendly, fast (no heavy libraries), accessible
labels, clear error messages, results shown as text, works as a single embeddable HTML/JS block. Test it with
these cases: [examples with expected results]. Replicate the features only: write your own code,
text and design; don't copy proprietary code, content or branding.
```

**P17. GEO passage rewrite** [GA V34]
```
Rewrite this section so it can be quoted by AI answers: start with a direct, complete, self-contained answer
in 40–60 words; then expand. Add a specific statistic with its source [provide], one attributed expert quote
[provide], and use a question heading. One idea only. Keep it accurate: [paste section].
```

**P18. Title options** [GA V52, the expert's prompt, lightly edited]
```
Act as an SEO expert and suggest the best possible title under 60 characters for the keyword below.
It must contain the main keyword, a specific number, intriguing power words and an emotional hook,
and make searchers want to click it over the other results. Give 5 options and say which is best and why.
Keyword: [keyword]
```

**P19. Meta description** [GA V52, the expert's prompt, lightly edited]
```
Act as an SEO expert and write a compelling meta description of up to 160 characters for the keyword below.
It must contain the main keyword, state the benefit clearly and convince searchers to click our result.
Give 3 options. Keyword: [keyword]. Page summary: [2–3 lines].
```

**P20. Section-by-section drafting with a semantic term list** [GA V52]
```
(1) Generate a relevant and concise SEO article outline for the keyword: [keyword].
(2) [Upload the optimiser's term list as a file] Write the section "[H2 from the outline]" using the terms
from the attached file naturally where they fit. Follow every instruction; don't copy or paraphrase content
from any website; answer-first; short paragraphs; active voice. Repeat for each section, then I'll add
my own experience, examples and data before publishing.
```


---

## 20. REGEX LIBRARY (SEARCH CONSOLE)
*Where: GSC → Performance → Search results → + Add filter → Query → Custom (regex) → "Matches regex". GSC uses RE2 syntax; matching is case-sensitive unless you start with `(?i)`. Queries are mostly lowercase anyway. Use "Doesn't match regex" to exclude, e.g. your brand.*

| Purpose | Regex |
|---|---|
| Questions (expert's, starts with) [GA V2] | `^(who\|what\|why\|how\|when\|where\|which\|can\|does\|do\|is\|are\|should\|will\|could\|would)\b` |
| Questions anywhere (broad; `is/are/do/can/will` add noise, remove them for a tighter list) | `(?i)\b(who\|what\|why\|how\|when\|where\|which\|can\|does\|do\|is\|are\|should\|will\|could\|would)\b` |
| Roman Urdu / Hindi questions (optional, for South Asian markets) | `(?i)\b(kya\|kaise\|kese\|kaisay\|kyun\|kyon\|kab\|kahan\|kon\|kaun\|kitna\|kitne\|kitni)\b` |
| Buying / transactional (expert's, starts with; `get` also catches "get rid of…") [GA V21] | `^(buy\|order\|purchase\|get\|best price\|cheap\|discount\|deal\|promo\|offer\|sale\|where to buy\|how much\|cost of\|price of)(\s\|$)` |
| Buying anywhere (improved; catches "running shoes discount", which the `^` version misses; `order` also matches "in order to") | `(?i)\b(buy\|order\|purchase\|price\|prices\|pricing\|cost\|cheap\|cheapest\|discount\|deal\|deals\|coupon\|promo\|offer\|sale\|shop\|for sale\|where to buy\|how much\|delivery\|free shipping)\b` |
| Commercial investigation | `(?i)\b(best\|top\|vs\|versus\|review\|reviews\|alternative\|alternatives\|compare\|comparison\|cheapest\|rated)\b` |
| Arabic questions (optional, for Arabic markets; no `\b` because RE2 word boundaries are ASCII-only) | `(ما\|ماذا\|كيف\|لماذا\|متى\|أين\|هل\|كم\|من هو\|أفضل)` |
| Local | `(?i)\b(near me\|nearby\|open now\|closest\|around me\|london\|shoreditch\|dubai\|marina)\b` (replace the example place names with your cities, districts and landmarks; a generic `in [a-z]+` pattern was dropped because it matches almost every query) |
| Long-tail (5+ words) | `^(\S+\s){4,}\S+$` |
| Brand (to exclude or isolate) | `(?i)(yourbrand\|your brand\|yourbrand\.com\|common misspelling)` |
| Year / freshness queries | `\b20(2[5-9])\b` |
| Tool intent | `(?i)\b(calculator\|generator\|converter\|checker\|maker\|counter\|planner\|template\|tool\|online\|free)\b` |

Note: in the table `\|` is just `|` (escaped for the table); paste the regex with plain `|`.

---

## 21. TOOL STACK
*The expert's stack (V17) + what replaces it with Ahrefs (the user's main tool) + free options.*

| Job | Expert uses [GA V17 + other videos] | With Ahrefs | Free / alternatives |
|---|---|---|---|
| Search performance | Google Search Console | Ahrefs GSC integration / connector | GSC, **Bing Webmaster Tools** (also feeds Copilot/ChatGPT search) |
| Analytics | GA4 | Ahrefs Web Analytics (extra) | GA4; Microsoft Clarity (heatmaps, session recordings) |
| Keyword research | Ahrefs | Keywords Explorer (Matching terms, Related, Questions, Parent Topic, Traffic Potential, clusters) | Google autocomplete, People Also Ask, GSC, Ahrefs free keyword generator, Google Keyword Planner |
| Competitor research | Ahrefs (Content Gap, Top pages) | Site Explorer + Competitive Analysis / Content Gap + Link Intersect | Competitor sitemaps + Prompt P8 |
| Backlinks | DataForSEO (API), Ahrefs | Site Explorer (Backlinks, Referring domains, Link Intersect, alerts) | Ahrefs Webmaster Tools (own sites), GSC Links report |
| Site crawl / technical | Screaming Frog SEO Spider | Ahrefs Site Audit | Screaming Frog free (500 URLs), GSC Pages report |
| Log files | Screaming Frog Log File Analyser | — | Server/Cloudflare logs |
| Page speed | Google PageSpeed Insights | Site Audit performance (CWV via CrUX) | PageSpeed Insights, Lighthouse (Chrome), GSC Core Web Vitals |
| Content briefs / writing | Claude (custom skill) | Ahrefs AI Content Helper | Claude/ChatGPT with Prompts P6–P7 |
| Content optimisation | Rankability, Surfer SEO, NeuronWriter | Ahrefs Content Helper | — |
| Schema | schema.org + Claude | — | Rich Results Test, validator.schema.org |
| Reviews | Trustindex | — | GBP review link, Trustpilot |
| AI search visibility | Peec AI | **Brand Radar** | Manual prompt-set sheet (11.8) |
| Rank tracking | Ahrefs | Rank Tracker | GSC positions |
| AI assistants | Claude, ChatGPT | Ahrefs MCP connector (Section 22) | — |
| Tool building | Replit, Claude, ChatGPT | — | — |
| Page audit (on any page) | SEOWILL Chrome extension, page-audit tool (V1) | Ahrefs SEO Toolbar (free), SERP overview, Site Audit page explorer | Detailed SEO Extension-type tools |
| Shopify | SEOWILL (SEOAnt) by CWILL | — | Yoast for Shopify, Plug in SEO, Smart SEO |
| Local | GBP | — | Bing Places, Apple Business Connect; local rank grid tools |
| Digital PR | Source of Sources (SOS) | — | Qwoted, Featured.com, Help a B2B Writer |
| Expired domains | Namecheap Domain Search → Beast Mode (bulk search), auction/expired-domain marketplaces, Wayback Machine | Site Explorer (backlink & anchor history; connector: `site-explorer-referring-domains`, `site-explorer-anchors`, `site-explorer-linked-domains`, `site-explorer-domain-rating-history`) | ⚠️ R5 |
| Free backlink list | ghulamaliseo.com/backlinks | Verify live links in Site Explorer | — |

⚠️ R9: use official tool plans only (no shared/resold accounts).

---

## 22. AHREFS CONNECTOR MAP (FOR THE AI WORKING ON A SITE)
*When the Ahrefs connector (MCP) is available, use it instead of manual exports. Read the tool's doc before first use. Monetary values come in USD cents.*

| Plan step | Ahrefs connector tool(s) |
|---|---|
| Baseline (3.3) | `site-explorer-metrics`, `site-explorer-domain-rating`, `site-explorer-backlinks-stats`, `site-explorer-metrics-history`, `gsc-performance-history` |
| Competitors (6.6-C) | `site-explorer-organic-competitors`, `site-explorer-top-pages`, `site-explorer-pages-by-traffic`, `site-explorer-organic-keywords` |
| Keyword research (6.2) | `keywords-explorer-matching-terms`, `keywords-explorer-related-terms`, `keywords-explorer-search-suggestions`, `keywords-explorer-overview`, `keywords-explorer-volume-by-country`, `keywords-explorer-volume-history` |
| SERP check / scorecard (6.5) | `serp-overview` |
| Content gap (6.6-D) | `site-explorer-organic-keywords` for you + competitors, then diff (or `batch-analysis`) |
| GSC mining (6.7, 14.1) | `gsc-keywords`, `gsc-pages`, `gsc-page-history`, `gsc-keyword-history`, `gsc-ctr-by-position`, `gsc-performance-by-position`, `gsc-performance-by-device`, `gsc-metrics-by-country`, `gsc-anonymous-queries` |
| Content optimisation (8.2) | `content-helper-topics` |
| Technical (10) | `site-audit-projects`, `site-audit-issues`, `site-audit-page-explorer`, `site-audit-page-content` |
| Internal links (7.4, 14.1) | `site-explorer-pages-by-internal-links`, `site-explorer-linked-anchors-internal` |
| International (10.4) | `site-explorer-metrics-by-country`, `keywords-explorer-volume-by-country`, `gsc-metrics-by-country` |
| Link Intersect (12.4) | No single tool: pull `site-explorer-referring-domains` for each competitor and for your site, then diff (or `batch-analysis`); or use Link Intersect in the Ahrefs UI |
| Backlinks (12) | `site-explorer-referring-domains`, `site-explorer-all-backlinks` (sort by first_seen for competitors' newest links), `site-explorer-anchors`, `site-explorer-broken-backlinks`, `site-explorer-refdomains-history`, `site-explorer-pages-by-backlinks`, `site-explorer-linked-domains` |
| AI visibility (11.8) | `brand-radar-*` (mentions, citations, share of voice, cited pages/domains, AI responses), `management-brand-radar-prompts(-create)`, `site-explorer-ai-responses-count` |
| Rank tracking (15) | `management-projects`, `management-project-keywords(-add)`, `rank-tracker-overview`, `rank-tracker-competitors-overview` |
| Reporting | `render-scorecard`, `render-data-table`, `render-time-series-chart` |
| Limits | `subscription-info-limits-and-usage` (check before large pulls) |

---

## 23. CREDITS, SOURCES & CAVEATS

### 23.1 Credits
- **Ghulam Ali** (YouTube: [@GhulamAliseo](https://www.youtube.com/@GhulamAliseo); site: ghulamaliseo.com; agency: GMS Digitals, gmsdigitals.com, Lahore). Source of most methods in this plan, tagged [GA Vxx]. Free resources: ghulamaliseo.com/free, ghulamaliseo.com/backlinks. Paid: Tools Website Mastery (TWM) workshop, SEO courses.
- Video 5 (launch checklist) presenter: name not shown in the video. Video 7 (social profiles in GSC): presenter on the same channel.
- **Research cited:** Aggarwal et al., "GEO: Generative Engine Optimization" (Princeton University and collaborators, 2023; KDD 2024).
- **Google documentation (baseline):** Search Essentials & spam policies; structured data guidelines; Core Web Vitals; robots.txt and Google crawlers (Google-Extended).
- **AI crawler lists:** momenticmarketing.com/blog/ai-search-crawlers-bots; searchenginejournal.com/ai-crawler-user-agents-list; OpenAI, Anthropic and Perplexity bot documentation.
- **Platform facts checked 9 Nov 2026:** OpenAI bots (developers.openai.com/api/docs/bots); Anthropic crawlers (support.claude.com/en/articles/8896518); Perplexity bots (docs.perplexity.ai/guides/bots); Google crawlers (developers.google.com/search/docs/crawling-indexing/google-common-crawlers); RFC 9309 (rfc-editor.org/rfc/rfc9309); FAQ rich results end, May 2026 (ppc.land/google-kills-faq-rich-results-what-seos-saw-coming-since-2019); review snippets (developers.google.com/search/docs/appearance/structured-data/review-snippet); GSC social platform properties (developers.google.com/search/blog/2026/07/search-console-social-video-platforms); Bing AI Performance (blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview); GBP Q&A retirement (seroundtable.com/google-maps-qa-feature-ask-40594.html); spam policies (developers.google.com/search/docs/essentials/spam-policies); GEO paper (arxiv.org/abs/2311.09735). Mobile-Friendly Test retirement (searchengineland.com/google-officially-drops-mobile-usability-report-mobile-friendly-test-tool-and-mobile-friendly-test-api-435377); AI-visitor 4.4× value (semrush.com/blog/ai-search-seo-traffic-study).
- [Baseline] = standard SEO practice added to fill gaps or strengthen a point.

### 23.2 Video index (V-numbers used in tags)
V1 Competitor page audit · V2 GSC question regex · V3 Ahrefs Content Gap · V4 Backlink gap + free list · V5 15-thing launch checklist · V6 Tool-site untapped keywords · V7 Social profiles in GSC · V8 Zero-click position 5–20 · V9 How to dominate (EMD, parasite, free links) · V10 Keyword clustering · V11 Technical triage · V12 Silo structure · V13 Backlinks then vs now · V14 LLM 30-day plan (short) · V15 Search intent · V16 Tactic tier list · V17 Tool stack · V18 Claude schema audit · V19 ChatGPT network-tab fan-out · V20 Topical mapping + semantic content · V21 Buying regex · V22 100 articles a month · V23 Black-hat SEO explained · V24 Internal linking prompt · V25 DR90+ free backlinks · V26 Expired domains · V27 AI Overviews gap · V28 Rank without backlinks · V29 Drip publishing · V30 Low-competition criteria · V31 Worst keyword research approach · V32 EMD for tool sites · V33 32 places AI checks · V34 GEO 2,000 hours · V35 30-day SEO+GEO roadmap · V36 SEO+GEO from zero · V37 Master SEO 2026 · V38 GMB in 14 days · V39 Local keyword methods · V40 500 technical audits · V41 Architecture playbook · V42 5 traffic ways · V43 Shopify SEOWILL · V44 Tool site build · V45 Rank a tool site · V46 Agency 30-day plan for new clients · V47 Local SEO case study ($20K/month) · V48 SEO for a new website (2016 vs 2026) · V49 Blog posts rank but don't convert · V50 Real estate SEO masterclass (R-to-R framework) · V51 Link building for a new website · V52 Writing SEO content that ranks

### 23.3 Caveats
- Numbers quoted from the videos (case-study traffic, earnings, "40%", "3×", "44%") are the expert's or the cited studies' figures, not guarantees. Results vary by niche, market and competition.
- Some tactics in the videos break Google's guidelines; they are kept only behind the Permission Gate (Section 2), as the site owner requested.
- Search and AI platforms change quickly (crawler names, GSC features, rich-result eligibility). Re-check Section 5.2 and 9.2 every quarter. Plan last reviewed: 9 Nov 2026.
- Where the expert's advice conflicted (e.g. internal linking 2/10 in V16 vs core in V12/V24/V41; "GEO doesn't work for tool sites"), the plan explains the decision in place.

*End of plan.*
