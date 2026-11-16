# SXO Findings: ecommwizards.com (2026-11-16)

**SXO Gap Score: 60/100** (separate from the SEO Health Score)

| Dimension | Score | Evidence |
|---|---|---|
| Page Type | 9/15 | CRO, Klaviyo and dev pages match the SERP. The Woo migration page (service page vs a SERP of guides) and the audit page (lead form vs a mixed SERP of checklists and service pages) do not |
| Content Depth | 11/15 | Service pages run 2.3k to 4k words with process, FAQ and case studies. /free-shopify-store-audit has 865 words and no case studies |
| UX Signals | 8/15 | Mobile hero text overflows on the dev and Plus pages. Migration and CRO CTAs send users to the wrong destination. The audit page has no CTA above the fold on mobile |
| Schema | 11/15 | Service, FAQPage and BreadcrumbList are on the service pages. The /free-shopify-store-audit and /book pages have only FAQPage, Org and WebSite |
| Media | 9/15 | 29 to 124 images on the service pages and video on most. The audit page has 0 images |
| Authority | 5/15 | No third-party review source (Clutch, Shopify Partner Directory, Klaviyo tier). Several claims look unverifiable or fabricated (see F1) |
| Freshness | 7/10 | Service pages dated 2026-11-12. The audit and book pages are dated 2026-01-01 |

## SERP consensus (US, via WebSearch, so the result order is approximate)

| Keyword | Dominant type (approx. share) | Our page | Mismatch |
|---|---|---|---|
| shopify development agency | Listicle/comparison ~55%, service ~35%, directory ~10% | Service | MEDIUM |
| shopify plus agency | Listicle ~55%, service ~35%, directory ~10% | Service | MEDIUM |
| woocommerce to shopify migration | How-to guide ~80%, migration tool ~15%, service ~5% (dev.co only) | Service | **CRITICAL** |
| shopify cro agency | Service ~55%, listicle ~35%, marketplace (Fiverr/Upwork/G2) ~10% | Service | ALIGNED |
| shopify store audit | Guide/checklist ~50%, productized audit service ~25%, marketplace ~10%, tool ~10% | Lead-form landing page | HIGH |
| klaviyo agency | Service ~55%, listicle ~25%, Klaviyo partner directory ~15% | Service | ALIGNED |

The SERPs expect these sections: price ranges (listicles quote "$25k+", "$50k minimum", Klaviyo "$2-10k/mo"), partner tier badges (Shopify Plus Partner, Klaviyo Silver to Elite), a revenue-band fit statement ("for $2M+ brands", "mid-market"), timelines, and named client results.

## Findings (by severity)

**F1. CRITICAL: Probable fabricated testimonials and claims on /services/migration/woocommerce-to-shopify.** The page has two quotes attributed to "Ben Francis, Founder, Gymshark". One reads "Our launch engineer was incredible...", which implies Gymshark is a client. The page also claims "thousands" of migrations, which contradicts "150+ stores" elsewhere on the site, plus "100% client satisfaction" and "90% less downtime". This falls under the Master Plan ⛔ list (fake quotes and stats) and is a legal risk. *Rec:* remove these today unless the owner can produce written verification. Also check "4.9★ Client Rating" (Plus page, no source) and "$400M+" (site-wide).

**F2. CRITICAL: Page-type mismatch on "woocommerce to shopify migration".** Google ranks step-by-step guides here (Metorik, Omnisend, Bluehost, Meetanshi). The page is a sales page built from a SaaS template ("Get a Demo", "Built right inside the Shopify Customizer"). Its "playbook" is gated behind an email field. *Rec:* make it a hybrid page. Put an ungated guide block above the fold: method comparison (app vs CSV vs expert), a data-mapping table, a 301 redirect/SEO checklist and a plugin-to-app equivalents table. Keep the service CTA alongside. Or publish a standalone guide that links to this page.

**F3. HIGH: Migration CTAs send replatformers to the wrong place.** "Try it Free" and "Get a Migration Test Drive" both point to /free-shopify-store-audit, a CRO/SEO audit form that never mentions migration. "Get a Demo" goes to a generic consult page. The FAQ says migrations take 2-6 weeks, but the Plus page says 8-14 weeks. *Rec:* use one CTA, "Book a Migration Scoping Call", linking to a Cal event with a migration intake question. Add a price floor (the dev page already says migrations "start from $15,000") and reconcile the timelines.

**F4. HIGH: "shopify store audit" has two competing pages and the weaker one is the conversion page.** /services/shopify-store-audit (Service schema, process section, case proof) competes with /free-shopify-store-audit (865 words, 0 images, no Service or Breadcrumb schema, no case studies near the form). The services page also uses "Claim Your Free $1,950 Audit (This Week Only)" and "Limited Spots", which is false urgency and a trust risk. *Rec:* pick one canonical ranking page (the service page). Remove the fake urgency. Add 2-3 named audit outcomes and a sample deliverable (redacted screenshot or Loom) next to the form.

**F5. HIGH: Mobile hero overflows horizontally on /services/shopify-development-agency and /services/shopify-plus-development.** The H1, intro text and stat row are clipped at 375px ("Builds Store...", "...certifie"). This makes the first screen look broken to the founder persona on a phone. *Rec:* fix overflow-x in the hero container. Run `npm run geo:check` and `/seo drift compare` before merging the template change.

**F6. HIGH: The audit form has friction and no proof.** On mobile the hero has no CTA button, so the form starts below the fold. The form asks for 5 fields (including phone) plus 5 checkboxes. The stat marquee repeats three times, and there are no logos or testimonials near the submit button. *Rec:* add a hero button that jumps to #audit-form. Cut the form to URL and email (make phone optional or remove it). Put 1 testimonial and 3 client logos next to submit. After submit, show the Cal embed ("Want the walkthrough live? Pick a time").

**F7. MEDIUM: CTA labels promise one thing and deliver another.** On the CRO page, "Book a Free CRO Audit" lands on /book-shopify-consultation, a generic "growth plan" call page. On the Plus page, "Book a Free Strategy Call" goes to the same generic page, so the Plus context is lost. The dev and Klaviyo pages work better: they anchor to an in-page Cal embed, so booking takes one tap. *Rec:* put the in-page Cal embed (#book) on every service page. Pass a service parameter to Cal so the call is pre-qualified.

**F8. MEDIUM: Listicle-dominated SERPs (dev, Plus) need inclusion more than on-page fixes.** About half of the top 10 results are "Top X agencies" lists. The service page can only compete for the 3-4 agency slots. *Rec:* do outreach (below). On-page, add what listicles cite: a starting price on the Plus page (it currently shows only Shopify's own fee), a revenue-band fit line ("built for $2M-$50M brands") and a Shopify Partner Directory link.

**F9. MEDIUM: Missing third-party authority signals.** No page has a Clutch, Google or Shopify Partner Directory review widget or link. The Klaviyo page shows no Klaviyo partner tier, even though the SERP has the Klaviyo directory and competitors lead with "Master Elite" and "Silver". *Rec:* link verified profiles only. Do not add AggregateRating schema (geo guardrails and the ⛔ list).

**F10. LOW: The mobile header hides "Book a Call" inside the hamburger menu, and no sticky CTA was observed.** *Rec:* add a persistent mobile header button or a sticky bottom "Book a call" bar.

## User stories (from SERP signals)
1. Awareness: "As a Woo merchant, I want to know if I can migrate myself with an app or CSV before paying anyone." *Signal: 8 of 10 results are how-to guides, plus tool pages (LitExtension, Cart2Cart, Matrixify).*
2. Consideration: "As a founder, I want a shortlist of vetted agencies with prices." *Signal: listicles quoting "$25k+" and "$50k minimum".*
3. Consideration: "As a Plus ecom manager, I need proof the agency is an accredited partner." *Signal: titles such as "Platinum partner", "certified partner".*
4. Decision: "As a CRO buyer, I want to know if my store is big enough." *Signal: "for $2M+ brands", "testing minimums" in titles.*
5. Decision: "As a Klaviyo buyer, I want monthly cost and partner tier." *Signal: "$2,000-$10,000/month", Klaviyo directory ranking.*

## Persona scores (weakest first)

| Persona | Rel | Clar | Trust | Action | Total | Top fix |
|---|---|---|---|---|---|---|
| Woo replatformer | 14 | 13 | 6 | 10 | **43** | F1 + F2 + F3: remove the fake quotes, add the guide content, add a migration-specific Cal CTA |
| DIY audit seeker | 15 | 18 | 10 | 14 | **57** | F4 + F6: one canonical page, sample deliverable, shorter form |
| Plus ecommerce manager | 21 | 17 | 15 | 15 | **68** | Agency price floor, sourced 4.9★ or remove it, Plus-specific Cal event, fix mobile overflow |
| Founder $1-10M DTC | 20 | 19 | 14 | 19 | **72** | Fix mobile hero, add a review-platform link next to the CTA, revenue-band fit line |
| Klaviyo/retention lead | 21 | 19 | 15 | 21 | **76** | Show partner tier, name the clients behind "+461%" |

## Booking path summary

| Page | CTA above fold (mobile) | Destination | Proof near CTA | Taps to calendar |
|---|---|---|---|---|
| Dev agency | Yes (~707px) | In-page Cal | Stats only | 1 |
| Plus | Yes (~737px) | /book (generic) | Stats, unsourced 4.9★ | 2 |
| Woo migration | Yes, "Try it Free" | Audit form (wrong intent) | None | Form, no calendar |
| CRO | Yes | /book (label mismatch) | Stats + testimonial | 2 |
| Free audit | **No** | Form (10 inputs) | None | Form, no calendar |
| Klaviyo | Yes | In-page Cal | Result stats | 1 |

## Third-party GEO and outreach targets (ranking for these queries)
- **In all 6 SERPs:** ecommercefastlane.com (dev, Plus, CRO, audit, Klaviyo lists and a Woo guide). This is the #1 target.
- **Directories:** DesignRush (Shopify, Shopify Plus), ecommerceguide.com/agencies/shopify-plus, the Gartner agency directory, Klaviyo partner directory (connect.klaviyo.com / klaviyo.partnerpage.io), G2, Upwork, Fiverr, Contra.
- **Listicles by app vendors (realistic to pitch):** channelwill, trueprofit, bsscommerce, ringly.io, shopplaza, wholesalehelper, raftlabs, webtonic, avenuez, aureatelabs, skailama, ainfluencer, bogos.io, onrec, mobiloud, deliberatedirections, topgrowthmarketing.
- **Migration guide hosts (for guest guides and quotes):** Metorik, tiny-img, Meetanshi, Omnisend, ecosire, LitExtension/Cart2Cart/Matrixify partner pages.
- **Competitor-authored lists (low odds):** eastsideco, ecorn, redefineweb.
- Any paid placement or link swap is a ⚠️ or ⛔ tactic under the Master Plan and needs owner approval.

## Limitations
- The SERPs came from WebSearch, not a live Google SERP. Exact positions, ads, AI Overview and PAA were not visible, and the type shares are estimates.
- Mobile was checked with a single 375px first-screen screenshot per page (4 pages). Sticky CTAs below the fold and the post-submit form behavior were not tested.
- Cal embeds load via JS ("Loading calendar..."), so booking completion was not tested.
- Claim accuracy (BARK, Everlast, $400M+, 4.9★, +461%) cannot be verified externally. The owner must confirm.
- No GSC or GA4 data, so current rank and CTR per keyword are unknown.

## Structured findings (audit-data.json, category: Search Experience)
```json
{"category":"Search Experience","sxo_gap_score":60,"findings":[
{"id":"SXO-1","severity":"critical","page":"/services/migration/woocommerce-to-shopify","title":"Unverified/likely fabricated Gymshark quotes and 'thousands of migrations' claims"},
{"id":"SXO-2","severity":"critical","page":"/services/migration/woocommerce-to-shopify","title":"Page-type mismatch: SERP is how-to guides"},
{"id":"SXO-3","severity":"high","page":"/services/migration/woocommerce-to-shopify","title":"CTAs route to unrelated audit form; conflicting timelines"},
{"id":"SXO-4","severity":"high","page":"/free-shopify-store-audit","title":"Cannibalization with /services/shopify-store-audit; false urgency"},
{"id":"SXO-5","severity":"high","page":"/services/shopify-development-agency,/services/shopify-plus-development","title":"Mobile hero horizontal overflow"},
{"id":"SXO-6","severity":"high","page":"/free-shopify-store-audit","title":"No above-fold CTA on mobile, 10-input form, no proof near submit"},
{"id":"SXO-7","severity":"medium","page":"/services/shopify-cro-agency,/services/shopify-plus-development","title":"CTA label/destination mismatch; generic /book page"},
{"id":"SXO-8","severity":"medium","page":"/services/shopify-plus-development","title":"Listicle SERP: missing price floor and fit band"},
{"id":"SXO-9","severity":"medium","page":"site-wide","title":"No third-party review/partner-tier links"},
{"id":"SXO-10","severity":"low","page":"site-wide","title":"Mobile Book a Call hidden in hamburger"}]}
```
