# Ahrefs research — what to pull (Ahrefs Lite)
*Update 16 Nov 2026: the Ahrefs connector works on our Lite plan (200,000 API units/month, resets on the 10th), so **Claude pulls these reports directly** and saves results in `seo/research/YYYY-MM-DD/`. Check units first (`subscription-info-limits-and-usage`); if they run low, the owner exports the same reports as CSVs using the file names below. Master Plan §6, §21.*

## 0. First: check what the plan includes (one time)
Open each and note Yes/No in `seo/research/plan-features.md`:
- [ ] Content Gap (Competitive Analysis)
- [ ] Link Intersect
- [ ] Rank Tracker (how many keywords?)
- [ ] Site Audit (how many pages/crawls?)
- [ ] Content Helper / AI Content Helper
- [ ] Brand Radar
- [ ] Export row limit per report, monthly export credits
Also: create a free **Ahrefs Webmaster Tools** project for ecommwizards.com (full Site Audit + backlinks for our own site at no cost).

## 1. Our own site (monthly)
Site Explorer → `ecommwizards.com` → Country: All (then US, UK, CA, AU if limits allow)
| Report | Settings | File name |
|---|---|---|
| Organic keywords | all positions | `us-organic-keywords.csv` |
| Top pages | | `us-top-pages.csv` |
| Referring domains | | `us-referring-domains.csv` |
| Backlinks | One link per domain | `us-backlinks.csv` |

## 2. Competitors (monthly; 5–10 per market)
Same four reports for each competitor → `comp-<domain>-organic-keywords.csv`, `comp-<domain>-top-pages.csv`, `comp-<domain>-referring-domains.csv`, `comp-<domain>-backlinks-newest.csv` (Backlinks → One link per domain → sort **First seen** newest).
Competitor list lives in [../intake.md](../intake.md).

## 3. Keyword research (once, then quarterly) — per country: US, UK, CA, AU
Keywords Explorer → country → seed → reports **Matching terms**, **Questions**, **Related terms**.
Pull twice: (a) filters **Lowest DR ≤ 20** and **Word count ≥ 4** (winnable long-tail); (b) no filters, top 1,000 by volume (head terms, for Traffic Potential / Parent Topic).

Seeds:
1. shopify agency
2. shopify developer
3. shopify plus agency
4. shopify migration · woocommerce to shopify · magento to shopify · bigcommerce to shopify · wix to shopify · squarespace to shopify · prestashop to shopify · amazon to shopify
5. shopify cro (+ "shopify conversion rate")
6. headless shopify
7. shopify app development
8. shopify theme development
9. klaviyo agency
10. shopify seo
11. shopify store audit
12. shopify development cost / shopify plus pricing

File names: `kw-<country>-<seed-slug>-<report>-<a|b>.csv`, e.g. `kw-us-shopify-plus-agency-matching-a.csv`.

## 4. Content Gap (once, then quarterly) — if the plan has it
Us vs 3–5 competitors per market, "show keywords where at least 2 targets rank". File: `gap-<country>.csv`.
Fallback if not available: export each competitor's sitemap (`/sitemap.xml`) → Claude runs prompt P8.

## 5. Link Intersect (quarterly) — if the plan has it
"Show me who links to" 3–5 competitors "but doesn't link to" ecommwizards.com → "at least 2 targets". File: `link-intersect-<date>.csv`.
Fallback: the competitors' referring-domain exports from step 2 (Claude diffs them).

## 6. SERP checks (as needed)
For any keyword Claude flags: Keywords Explorer → SERP overview → export → `serp-<keyword-slug>.csv` (gives Lowest DR, referring domains of the top 10 for the §6.5 scorecard).

## What Claude returns
- `keyword-master.csv` → tracker *Keywords* tab (keyword · market · relevance · intent · page type · volume · KD · TP · parent topic · lowest DR · scorecard · cluster · target URL · commercial/informational).
- `topical-map.md` (pillars → clusters → URLs, funnel level, status).
- `opportunities-<date>.md`: quick wins, new pages, link prospects, with priority.
