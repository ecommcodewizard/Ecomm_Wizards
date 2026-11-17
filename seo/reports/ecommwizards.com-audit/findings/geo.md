# GEO / AI Search Readiness: ecommwizards.com

Audited 2026-11-16. Live fetches: /robots.txt, /llms.txt, home, /services/shopify-plus-development, /services/migration/woocommerce-to-shopify, /services/shopify-cro-agency, /services/shopify-development-agency/california, /case-studies/everlast-shopify-plus-sports-redesign, /about-shopify-agency. All pages are server-rendered (Next.js prerender, `x-nextjs-prerender: 1`, `is_spa: false`). Raw fetch only (no browser render).

## AI Search Readiness Score: 59 / 100

| Dimension | Weight | Score | Why |
|---|---|---|---|
| Citability | 25% | 52 | Only some sections open with an answer; no sourced stats; case study is 359 words |
| Structural Readability | 20% | 65 | Clean H1-H3 and FAQPage schema on service pages, but few question headings (1-4 of ~30-40 per page; city page 13) |
| Multi-Modal | 15% | 60 | Video sitemap and images are present; little original data shown as tables or charts |
| Authority & Brand | 20% | 40 | No named people, claims don't match from page to page, sameAs is thin, no Wikipedia/Wikidata entry |
| Technical Accessibility | 20% | 78 | SSR, open robots.txt, good llms.txt; the CDN blocks GPTBot and meta-externalagent |

Platform estimates (judgement, not measured): Google AIO 60, ChatGPT Search 57, Perplexity 58, Bing Copilot 52 (we couldn't confirm that the CDN lets the real bingbot through).

## AI crawler access

robots.txt: one shared group allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, Amazonbot, CCBot, Bytespider, meta-externalagent, FacebookBot, cohere-ai and MistralAI-User. Every other bot falls under `*` and is allowed too. Disallows: /admin, /cms, /cms-api, `?c=`. Sitemaps are declared.

CDN test (hcdn, same URL, UA spoofed from one non-bot IP):

| Bot | Governs | robots.txt | CDN response |
|---|---|---|---|
| OAI-SearchBot | ChatGPT Search | Allowed | 200 |
| ChatGPT-User | ChatGPT user fetch | Allowed | 200 |
| GPTBot | OpenAI training | Allowed | **429 every time (6/6)** |
| Claude-SearchBot / Claude-User | Claude search / user fetch | Allowed (`*`) | 200 |
| ClaudeBot | Anthropic training | Allowed | 200 |
| PerplexityBot / Perplexity-User | Perplexity | Allowed | 200 |
| DuckAssistBot | DuckDuckGo AI answers | Allowed (`*`) | 200 |
| meta-externalagent | Meta AI training | Allowed | **429 every time (3/3)** |
| meta-webindexer / meta-externalfetcher | Meta AI search / fetch | Allowed (`*`) | 200 |
| Amzn-SearchBot / Amzn-User / Amazonbot | Alexa+/Rufus search, fetch, training | Allowed | 200 |
| MistralAI-Index / MistralAI-User | Le Chat | Allowed | 200 |
| Google-Extended | Gemini training/grounding (not AIO) | Allowed | 200 (robots-only token) |
| Googlebot / bingbot / Applebot | Google Search+AIO / Bing+Copilot / Siri-Spotlight | Allowed | 403 when spoofed |
| Applebot-Extended | Apple Intelligence training | Allowed | 403 when spoofed |

The 403s for spoofed Googlebot, bingbot and Applebot most likely mean the CDN checks the requester's IP for those names. Real crawlers should get through, but we couldn't confirm that from here.

## Findings

**F1 - High: The migration page makes claims that contradict the rest of the site and can't be verified.** /services/migration/woocommerce-to-shopify says "We've delivered thousands of woocommerce to shopify migration services projects," "100% client satisfaction," "90% less downtime," and "site speeds up to 150% faster." It also cites "(Shopify, 2025)" for "six are heading the other way," with no link. Elsewhere the site says 150+ stores in total. AI engines check claims against other sources, and figures that disagree hurt trust in the whole site. This is also close to the ⛔ "fake stats" line in Master Plan §2. *Fix:* replace these with verified numbers, link the Shopify source or remove it, and remove the keyword-stuffed "migrate shopify to woocommerce" sentences.

**F2 - High: The partner tier is described differently on different pages.** The home stats strip says "Shopify Plus Certified." llms.txt and the About timeline say "Shopify Plus Partner (since 2021)." The migration page shows a "shopify platinum partner" badge image. The About FAQ says "Shopify-first," but llms.txt says "Works only on Shopify." The About text says "Headquartered in Toronto," but the About FAQ says "We operate globally." *Fix:* pick one verified wording for each fact and use it everywhere, including schema and llms.txt.

**F3 - High: Nothing about the company checks out off-site, and no people are named.** The Organization schema has 4 sameAs links (Facebook, X, Instagram, LinkedIn). It has no founder, foundingDate, address or contactPoint, and no links to review or partner profiles. The site shows Clutch, Trustpilot, Google, GoodFirms and DesignRush badges, but none of them link to a profile (no outbound links found). "A Note From Our Founder" shows no name in the HTML text. The 9 awards on About don't say who gave them. Wikipedia search and Wikidata search both return 0 results for "Ecomm Wizards." We couldn't check Clutch or DesignRush directly (both return 403 to automated requests). A guessed Shopify Partner Directory URL returned 404, so the real listing URL is still unknown. *Fix:* link every badge to its live profile and add those URLs, plus the Shopify Partner Directory listing, to sameAs. Name the founder and team leads, with a Person schema. Name who gave each award.

**F4 - Medium: The CDN blocks GPTBot and meta-externalagent even though robots.txt allows them.** Neither bot affects ChatGPT Search or Meta AI search (OAI-SearchBot and meta-webindexer both get 200). But the policy now contradicts itself, and future model knowledge of the brand suffers. *Fix:* in the Hostinger hPanel CDN/bot settings, either allow these bots or deliberately keep them out. Make robots.txt match whichever you choose.

**F5 - Medium: The homepage has no clear "what is Ecomm Wizards" statement and no FAQ.** The H1 is "We Are the Shopify Agency That Designs, Develops and Grows Stores." The paragraphs under it are 9-11 words long. The stats strip shows up 3 times in the extracted text. Only 5 of 64 paragraphs are 40+ words. There's no FAQPage. The Organization description is generic ("Let's grow your ecommerce together."). *Fix:* add a 40-60 word block under the H1, e.g. "Ecomm Wizards is a Shopify Plus agency that designs, builds, migrates and optimizes Shopify stores for $1M-$50M brands in the US, UK, Canada and Australia..." (verified facts only). Use the same sentence in the schema description.

**F6 - Medium: Case studies are too thin to cite.** The Everlast case study is 359 words. It lists results (+152% conversion, 48% order growth) but gives no time period, baseline, or how they were measured. Its Article schema has no datePublished/dateModified and no named author. *Fix:* add a 60-word "Result in brief" block (period, baseline, metric, method) and dates. Only publish numbers you have verified.

**F7 - Medium: Section openers don't answer much, and there are few question headings.** Most H2s are slogans ("Working with Ecomm Wizards is like bringing a Gun to a Knife Fight," "We've done this thousands of times. Literally."). On every audited page, the first paragraph under most H3s is under 35 words. No page cites outside stats, apart from the city page. *Fix:* rewrite 3-5 H2s per money page as buyer questions ("How long does a WooCommerce to Shopify migration take?", "How much does Shopify Plus development cost?"). Open each with a 40-60 word direct answer.

**F8 - Low: robots.txt still lists old names.** Claude-Web and anthropic-ai are retired. `Host:` is a Yandex-only directive. Bytespider is allowed, which is a choice to review. *Fix:* remove the retired names. If you want any bots listed by name, add Claude-SearchBot, Claude-User, OAI-SearchBot (already there), meta-webindexer and Amzn-SearchBot.

**F9 - Low: llms.txt is long and repeats claims that need checking.** It's well formed (H1, summary, key facts, sections, Optional), but it's 3,218 words, with long location blurbs. It repeats "$400M+," "150+ stores" and the client list, so F1 and F2 apply here too. *Fix:* shorten the location blurbs to one line each. Add the FAQ hub and the top 5 case studies near the top.

## What works
- All pages are server-rendered, with full HTML available without JavaScript. Pages are cached at the CDN edge.
- The search and user-fetch bots for OpenAI, Anthropic, Perplexity, DuckDuckGo, Meta, Amazon and Mistral all get 200.
- llms.txt exists, is correctly structured, and opens with a clear "Ecomm Wizards is a Shopify Plus agency that..." statement.
- The California city page is a model to copy. It has an "In short" answer block ("Ecomm Wizards is a Shopify agency California brands use..."), its own audit data (26 stores tested), 13 question headings, and outbound citations to CA Civil Code §52/§1770 and an FTC press release. Its schema avoids LocalBusiness, in line with lib/geo/forbidden.ts.
- Service pages have FAQPage, Service and BreadcrumbList schema. The CRO page has a good answer-first H2 ("What Is Shopify Conversion Rate Optimization and Who Needs It?", 66-word answer).
- The Plus page opens with a clear 67-word problem/answer paragraph.

## Top 5 changes (impact / effort)
1. Fix or remove the unverifiable migration-page claims, then make every claim match across all pages, schema and llms.txt (F1, F2). Highest impact, about 2 hours, needs owner verification.
2. Link the review and partner badges to their live profiles, add them to sameAs, name the founder (Person schema), and name who gave each award (F3). High impact, about 3 hours plus owner input.
3. Add an entity answer block and FAQ to the homepage, and rewrite the Organization description (F5). High impact, about 2 hours, template change, so run `/seo drift compare` first.
4. Bring the 3 money pages up to the California page's pattern: question H2s and 40-60 word answers (F7). Medium-high impact, 1 day.
5. Decide the CDN bot policy in hPanel and clean up robots.txt (F4, F8). Medium impact, 30 minutes.

## Buyer prompts to track monthly (AI Prompts tab)

**US**
1. Best Shopify Plus agency in the US
2. Who can migrate my WooCommerce store to Shopify without losing SEO?
3. Top Shopify CRO agencies for DTC brands
4. Shopify Plus development agency for a $10M brand
5. How much does a Shopify Plus build cost with an agency?
6. Best Shopify agency in California
7. Shopify B2B wholesale portal agency
8. Fixed-price Shopify development agency
9. Shopify agency for supplement / wellness brands
10. Ecomm Wizards reviews

**UK**
1. Best Shopify Plus agency UK
2. Shopify agency London for fashion brands
3. WooCommerce to Shopify migration agency UK
4. Shopify CRO agency UK
5. Magento to Shopify Plus migration partner UK
6. Shopify Plus agency for beauty brands UK
7. How long does a Shopify Plus migration take?
8. Klaviyo and Shopify agency UK
9. Shopify headless Hydrogen agency UK
10. Is Ecomm Wizards a good Shopify agency?

**Canada**
1. Best Shopify Plus agency in Canada
2. Shopify agency Toronto
3. WooCommerce to Shopify migration Canada
4. Shopify CRO agency Canada
5. Shopify Markets setup for Canada and US selling
6. Shopify B2B agency Canada
7. Shopify Plus partner Toronto for enterprise brands
8. Shopify development agency Vancouver
9. Best agency to redesign a Shopify store in Canada
10. Ecomm Wizards Toronto

**Australia**
1. Best Shopify Plus agency Australia
2. Shopify agency Sydney
3. Shopify agency Melbourne
4. WooCommerce to Shopify migration Australia
5. Shopify CRO agency Australia
6. Shopify Plus partner for AU and NZ brands
7. Neto/Maropost to Shopify migration agency
8. Shopify B2B wholesale agency Australia
9. Shopify agency for subscription brands Australia
10. Ecomm Wizards Shopify agency reviews

## audit-data.json (AI Search Readiness)
```json
{"category":"AI Search Readiness","score":59,
 "subscores":{"citability":52,"structure":65,"multimodal":60,"authority":40,"technical":78},
 "findings":[
  {"id":"GEO-F1","severity":"high","title":"Unverifiable/contradictory claims on WooCommerce migration page"},
  {"id":"GEO-F2","severity":"high","title":"Inconsistent partner tier and entity facts across pages"},
  {"id":"GEO-F3","severity":"high","title":"Weak entity corroboration: thin sameAs, unlinked badges, no named people, no Wikidata"},
  {"id":"GEO-F4","severity":"medium","title":"hcdn returns 429 to GPTBot and meta-externalagent despite robots Allow"},
  {"id":"GEO-F5","severity":"medium","title":"Homepage lacks entity definition block and FAQ"},
  {"id":"GEO-F6","severity":"medium","title":"Case studies thin, results lack period/baseline/method, no dates"},
  {"id":"GEO-F7","severity":"medium","title":"Few question headings and answer-first section openers"},
  {"id":"GEO-F8","severity":"low","title":"Retired bot names (Claude-Web, anthropic-ai) and Host directive in robots.txt"},
  {"id":"GEO-F9","severity":"low","title":"llms.txt verbose (3,218 words) and repeats claims needing verification"}]}
```
