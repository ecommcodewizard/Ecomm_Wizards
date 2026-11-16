# Site intake — ecommwizards.com (Master Plan §3.1)
*Filled 16 Nov 2026 from the repo and the owner's answers. ☐ = waiting on the owner. Mirrors the tracker's Site Intake tab.*

```
SITE NAME:            Ecomm Wizards                 URL: https://ecommwizards.com
SITE TYPE:            [x] Agency/Service  [ ] Local business (☐ depends on GBP office)  [x] Blog (/insights)
STAGE (3.4):          ☐ set from GSC in week 1 — expected: US services C/D · city pages B/C · blog B/C · UK/CA/AU B
LAST 3 MONTHS (GSC):  impressions ☐  clicks ☐  change vs last year ☐
SPECIAL SITUATIONS:   [x] negative SEO / spam URLs (~409k ?c= URLs, contained)  [x] seasonal (Jan–Mar replatforming)
                      [x] new markets (UK, CA, AU)  [ ] traffic but no leads (☐ decide from baseline)
PLATFORM / CMS:       Next.js (App Router) + Payload CMS + MySQL · hosted on Hostinger (LiteSpeed) · deploys from GitHub repo
SEO PLUGIN:           none (code-level: metadata exports, lib/og.ts, lib/cms/seo.ts, JSON-LD components)
ANALYTICS:            Google Tag Manager GTM-PZV8S2C2 (GA4 inside GTM ☐ confirm)
BOOKING TOOL:         Cal.com inline embed (event link ☐ confirm; webhooks on plan? ☐)
MARKETS & LANGUAGES:  English only
                      | Country        | Language | Currency | URL            | Priority |
                      | United States  | English  | USD      | / (root)       | 1        |
                      | United Kingdom | English  | GBP      | / (root)       | 2        |
                      | Canada         | English  | CAD      | / (root)       | 3        |
                      | Australia      | English  | AUD      | / (root)       | 4        |
PHYSICAL LOCATION:    ☐ GBP exists — is the office real and staffed? Address? (About page says "Headquartered in Toronto")
BUSINESS MODEL:       leads → booked discovery call → project
MONEY PAGES:          /book-shopify-consultation · /free-shopify-store-audit · /services/shopify-development-agency
                      · /services/shopify-plus-development · /services/migration/* · /services/shopify-cro-agency
                      · /services/shopify-store-development · /services/shopify-theme-development · /services/headless-shopify-agency
                      · /services/shopify-app-development · /services/klaviyo-agency · /services/shopify-seo-agency
                      · /services/shopify-store-audit · hubs /services/ecommerce-agency, /ecommerce-seo-agency, /ecommerce-marketing-agency
                      (31 service folders in total under app/(frontend)/services)
TOP 3 GOALS:          1. More qualified calls held per week (now 3–10 bookings/week)
                      2. Rank + get cited for Shopify Plus / migration / CRO in US, UK, CA, AU
                      3. Build a repeatable weekly SEO+GEO routine
PERSONAS:             DTC founders and ecommerce/marketing managers at $1M+/yr Shopify stores; Shopify Plus merchants;
                      brands replatforming from WooCommerce/Magento/BigCommerce/Wix/Squarespace/PrestaShop/Amazon
KNOWN FOR (1 line):   "Ecomm Wizards is a Shopify agency that designs, develops, migrates and grows Shopify and Shopify Plus
                      stores for ambitious DTC brands in the US, UK, Canada and Australia." (☐ owner to confirm wording)
ACCESS:               [ ] GSC  [ ] Bing WMT  [ ] GA4  [ ] GTM  [ ] Ahrefs (Lite, CSV exports)  [x] CMS/repo  [ ] GBP  [ ] Cal.com
BRAND ASSETS:         logo /images/ecomm-green.png · 30+ case studies with numbers (☐ verify) · ~31 case-study videos
                      · social: Facebook, X @theecommwizards, Instagram theecommwizards, LinkedIn company/ecomm-wizards
                      · ☐ Clutch, Trustpilot, Google review links · ☐ founder name + bio · ☐ team bios
RESTRICTIONS:         Risky tactics (Master Plan §2): NONE approved. Geo guardrails in lib/geo/forbidden.ts stay in force.
```

## Competitors (☐ owner confirms; Claude will propose from SERPs if blank)
| Market | Direct competitors (5–10) | Low-DR / high-traffic (5) |
|---|---|---|
| US | ☐ | ☐ |
| UK | ☐ | ☐ |
| CA | ☐ | ☐ |
| AU | ☐ | ☐ |

## Decisions log
| Date | Decision | Reason |
|---|---|---|
| 2026-11-16 | One English site for all 4 markets; no hreflang unless prices/offers differ | §10.4 |
| 2026-11-16 | AI training bots stay allowed in robots.txt | Max AI visibility (§5.2 default) |
| 2026-11-16 | No new city pages until existing ones earn impressions | R8, §14.3 |
