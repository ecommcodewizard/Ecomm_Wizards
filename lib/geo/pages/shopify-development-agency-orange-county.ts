// Batch 1, page 9: /services/shopify-development-agency/orange-county
// Spec: Batch 1 Page Specification v2.0 — gradient §3 row 9, asset §4.9,
// case studies §5 row 9, FAQ §6.3 row 9, conversion §7. Build Manual card 9.
// Copy: docs/ecomm-wizards-page-standard.md, which supersedes
// docs/copy-standard.md v2.0 wherever the two disagree.
//
// Primary keyword: "shopify agency orange county" (10/mo, Google Keyword
// Planner — GKP is the figure of record).
// Inventory: Geo Inventory & Batch Plan v4.0, California row 6.
// PRIMARY ONLY. Inventory §6b lists this page among the thirteen seeded two to
// four times that returned nothing usable, so all differentiation is payload.
// Hub: /services/shopify-development-agency, which already exists.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// Same keyword family as page 8, and the Page Standard uses it as its own
// worked example: `shopify agency <city>` means he is on Shopify and wants an
// agency, and has NOT said which service. So the menu comes early, Shopify is
// never argued for, and the B2B depth lives in the gradient, the asset and the
// FAQ rather than in the H1.
//
// THE TRAP, same one pages 5, 7 and 8 had to be rewritten for: an Orange County
// brand on Shopify with NO dealer channel must not read the H1 and leave. Hence
// "we build around how you sell, direct, wholesale or both": the three are
// named as equal options, so nobody's way of selling is presumed.
//
// ── ARCHETYPE A+G, from Build Manual card 9 ─────────────────────────────────
// A is vertical-led (Master §5.9 gives Orange County action sports, outdoor and
// nutra), G is B2B-led, "selling wholesale on Shopify". Card 9 notes A+G is
// ASSIGNED rather than drawn from Master §5.10, which covers metros and does
// not list Orange County.
//
// SHARES A HUB with pages 4 (LA), 8 (San Diego) and Austin, so check-shingles
// compares all four directly and Master §5.11 applies. Page 4 is drop-day
// operations, page 8 is subscription migration, Austin is its own. Nothing here
// touches subscriptions, payment tokens or re-authorization — that is page 8's
// argument and repeating it would collapse two pages into one. No case study,
// discipline framing or howWeWork item is carried across from any of them.
//
// No forbidden cross-link pair applies to this page (card 9 names none).
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 16 September 2026 ─────────────────────────────────────────────────
// Every ranking competitor has genuine Orange County presence except one, and
// that one is the most interesting result on the page.
//
//   DYODE          ~2,500 words, headquartered Fullerton, address published,
//                  one price ($7,495 speed audit), 8 named clients
//   SeedCMS        ~2,200 words, "Orange County & Los Angeles", Shopify
//                  PLATINUM partner, 110 migrations, no price
//   Orange Web Gp  ~1,450 words, office in Orange CA, 6 FAQs, no price,
//                  the only one with real B2B service copy
//   Solo Media     ~4,500-5,000 words, 24+ FAQs, states $20k+ project and
//                  $3,000/mo retainer, Platinum, AND says outright:
//                  "We don't have an Orange County office."
//   Brandastic     403 to automated clients
//
// THE GAP, and it is the whole asset: 0 of them carry original research. 0
// mention a dealer locator, stockist page, MAP, or index leakage from a gated
// catalog. Two mention B2B generically ("gated B2B portals", "account-level
// pricing"). Nobody says which of the three wholesale architectures to pick or
// what each costs. In the county Master §5.9 gives to action sports and
// outdoor, where the dealer channel is frequently the OLDER revenue.
//
// THE HONEST COMPETITIVE POSITION. We cannot beat DYODE, SeedCMS or Orange Web
// Group on local presence, and Master §4 forbids claiming any. Two of them are
// Platinum partners and our own tier is still unconfirmed (Master §9 open item
// 3), so no tier is claimed here either. Solo Media already runs the honest
// remote play at 5,000 words. What is actually available is substance: a stated
// price, and a comparison nobody else has.
//
// ── THE SHOPIFY FACTS, from Shopify's own docs, read 16 September 2026 ──────
// These reframe the page, because the usual advice is out of date.
//
//   2 APRIL 2026 — Shopify's changelog moved key B2B features off Plus.
//   Company profiles, net payment terms, volume pricing, ACH and vaulted cards
//   now run on Basic, Grow and Advanced. So "you need Plus for wholesale",
//   which is what most agency copy still says, stopped being true this year.
//
//   WHAT IS STILL PLUS-ONLY: unlimited catalogs, DIRECT catalog assignment to
//   companies and company locations (i.e. per-dealer pricing), deposits and
//   partial payments. Below Plus the cap is 3 active catalogs across all B2B
//   markets. That turns "do we need Plus" into a countable question.
//
//   WHAT B2B DOES NOT DO, from Shopify's considerations page: no accelerated
//   checkouts (Shop Pay, Apple Pay, Google Pay, Amazon Pay), no subscriptions,
//   no local delivery or pickup points, no tipping, no legacy customer
//   accounts. Orders cap at 500 LINE ITEMS. And in a blended store most
//   features cannot be applied selectively to one customer type.
//
// The 500-line-item cap is the one that bites this market specifically: a
// preseason dealer order across a full size and color run approaches it.
//
// ── THE ASSET: ORIGINAL OBSERVATION, 16 September 2026 ──────────────────────
// Spec §4.9 asks for 8 action-sports or outdoor brands selling both direct and
// through retail, their dealer-side architecture, and their dealer locator
// markup. Twelve were attempted, eleven returned; Electric reset the
// connection and is excluded rather than guessed at.
//
// Sample: Fox Racing, Troy Lee Designs, Hobie, Futures Fins, Volcom, RVCA, Von
// Zipper, Nixon, 100%, Sector 9, Katin. Each rendered in Chromium with a fresh
// context, scrolled to force footers, then its dealer and locator paths probed.
// Both measurements are location-independent — the scripts a site loads and the
// JSON-LD in its DOM are identical from any vantage point — which is the same
// property that made page 6's capture-stack asset usable and its offer-text
// observation unusable.
//
//   PLATFORM: 9 of 11 run Shopify on the direct side. 2 not detected.
//   ARCHITECTURE, placeable from outside on 6 of 11:
//     3 run a separate B2B store on a subdomain
//       (b2b.troyleedesigns.com, b2b.volcom.com, pro.100percent.com)
//     2 gate a section of the main Shopify store (Sector 9, Fox Racing)
//     1 routes to a third-party portal (Hobie: Handshake markers on /dealers,
//       plus dealer.hobie.com)
//     5 expose no dealer channel an outsider can place. Recorded as that, not
//       as "none".
//   NOTE: 100% runs BOTH a /dealers section on the main store and a pro.
//   subdomain. Counted once, under separate store, and the double is stated.
//
// ── THE FINDING THAT CONTRADICTS THE SPEC ───────────────────────────────────
// Spec §4.9 predicted that most dealer locators emit LocalBusiness schema and
// "most should not". THAT IS NOT WHAT THE SAMPLE SHOWS, and the page says so.
//
// 7 of 11 have a findable dealer locator. ZERO emit LocalBusiness, and zero
// emit any per-dealer structured data at all:
//   Troy Lee Designs, Futures Fins, 100%  — Organization only
//   Nixon                                 — Organization + PostalAddress, and
//                                           that address is Nixon's OWN
//                                           Carlsbad HQ, which is correct
//   Fox Racing, Hobie, Sector 9           — no ld+json on the locator at all
//
// Addresses rendered as plain text with nothing marking them up: 100% renders
// 724, Fox Racing 6, Troy Lee Designs 3, Futures Fins 1. Hobie, Nixon and
// Sector 9 draw theirs into a map widget after load, so nothing was in the DOM
// at capture and they are reported as not observed rather than as zero.
//
// The real finding is the inverse of the hypothesis and more useful: the
// default is to publish dealer addresses as unmarked text. Nobody in this
// sample is making the presence-claim mistake — but a brand that decided to fix
// the "missing" markup would reach for LocalBusiness, and that is the mistake.
//
// ── WHAT GOOGLE ACTUALLY SAYS, checked rather than assumed ──────────────────
// The LocalBusiness reference does NOT forbid marking up a business other than
// the page's subject; it says markup "can be added to any page". That was
// checked precisely because the opposite was assumed first, and no claim that
// Google forbids it appears on this page.
//
// The applicable rule is the structured-data POLICY page: "Don't mark up
// content that is not visible to readers of the page", "Your structured data
// must be a true representation of the page content", and "Don't use structured
// data to deceive or mislead users", which names misrepresenting ownership or
// affiliation. That is the line a brand's name on a stockist's address crosses,
// and it is stated as our own reading, not as a Google prohibition.
//
// ── MAP: DELIBERATELY NARROW ────────────────────────────────────────────────
// MAP is a contract and policy matter, not a store setting, and this page does
// not pretend otherwise. Shopify lists no native MAP enforcement on any plan.
// What the STORE controls is who sees which price. That is all this page
// claims, and the FAQ says the rest belongs with counsel — the same discipline
// page 7 uses, without needing page 7's disclaimer component, because nothing
// here interprets a statute.
//
// ── ROIA (Step 03) ──────────────────────────────────────────────────────────
//
// ONE READER. On Shopify. Has not said which service. Step 02: owns the store,
// 28 to 45, $10-50M, already decided to hire an agency.
//
// ONE IDEA (17 words)
// Your dealers came first. Almost every Shopify B2B guide assumes they came
// second, and that changes the build.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every button says "Get in touch with us"
// and points at #contact.
//
// ── KEYWORD PLACEMENT (Step 09) ─────────────────────────────────────────────
// Primary-only, so no secondaries to spread. Target is the house norm on pages
// 5 and 8 (0.34-0.36%), not the script's generic 0.6%. Shapes varied and none
// reused from page 8: h1, quick answer, disciplines intro, whatWeDoAboutIt,
// asset.derived, an objection, the price FAQ, and the FAQ block's generated H2.
// ZERO keywords in the conversion block, and no city name in it.
//
// ── CASE STUDIES, spec §5 row 9 ─────────────────────────────────────────────
// §5 asks for action sports and outdoor, apparel with a wholesale channel, and
// automotive aftermarket or nutra, and says to PRIORITISE THE B2B COMPONENT.
//
//   hero image   Saddleback
//   disciplines  Saddleback, Feetures, Henchman, Mouldings One
//   proof        Saddleback, Feetures, Henchman
//
// Saddleback is cycling distribution and wholesale, which carries the action
// sports slot and the B2B priority in one. Feetures is performance apparel sold
// through specialty retail, which is the "grew through shops, added direct"
// story this page is about. Henchman carries tiered price books and an ERP.
//
// CORPUS GAP, stated rather than papered over: there is no automotive
// aftermarket study and no surf, skate or moto brand in the corpus, so §5's
// third slot is filled by substitution. Three of the four are unspent on this
// hub; Feetures also appears on page 4, which is a redesign framing rather than
// a wholesale one.
//
// PRESENCE (Master §4): no claim anywhere. No partner tier claimed, because
// ours is still unconfirmed.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const SHOPIFY_DEV_ORANGE_COUNTY: GeoPage = {
  type: "geo",
  slug: "orange-county",
  path: "/services/shopify-development-agency/orange-county",
  hub: "/services/shopify-development-agency",
  status: "published",

  geo: {
    name: "Orange County",
    type: "metro",
    areaServed: "Orange County, California",
  },
  archetype: ["A", "G"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "shopify agency orange county",
  // Primary-only. Inventory v4.0, California #6: "No usable secondary exists."
  secondaryKeywords: [],
  faqKeywords: [
    "hide dealer pricing from search engines shopify",
    "does wholesale need a separate shopify store",
    "map enforcement shopify store level",
    "shopify agency cost orange county",
  ],
  reviewedPhrases: ["in Orange County"],

  // 58 characters. Step 10 wants 55-60 with the keyword and no presence claim.
  metaTitle: "Shopify Agency Orange County | Design, Build, Wholesale",
  // 156 characters, inside Step 10's 150-160.
  metaDescription:
    "A Shopify agency Orange County brands hire for design, build, CRO and wholesale. We map how your dealer channel is wired before anyone quotes a rebuild.",
  shortTitle: "Shopify agency Orange County",
  serviceType: "Shopify agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Owner's pick, 2026-09-16, replacing "we build the whole store, including
  // the half your dealers log into". That one still presumed the reader HAS
  // dealers. This names direct, wholesale and both as equal options, so a
  // direct-only brand is not shut out (Step 04, never two), and "around how you
  // sell" is the why-us Step 06 asks a heading to carry.
  h1: "Shopify agency Orange County, we build around how you sell, direct, wholesale or both",
  qualifier:
    "Design, build, CRO and your wholesale side. One piece or all of it, with a scope, a number and a date in writing first.",

  heroImage: {
    src: "/images/Case%20studies/posters/Saddleback%20video.webp",
    alt: "A wholesale ordering portal we built on Shopify Plus for the cycling distributor Saddleback",
    video: "/images/Case%20studies/Saddleback%20video.mp4",
    aspect: "4 / 5",
  },

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on the platform" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading:
      "Distribution, performance apparel, trade supply. Most sell two ways at once.",
  },

  assetCtaLabel: "Compare the three setups",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Almost every guide to selling wholesale on Shopify is written for a brand that sells direct and is adding dealers.\n\nRound here it's the other way round. The shop accounts are older than the website, and the direct store got built later because everyone was building one.\n\nThat changes what you build, and which plan you need. That answer moved in April.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is a Shopify agency Orange County brands hire for design, build, CRO and wholesale. We work on Shopify and Shopify Plus. Most stores we're handed here have a dealer channel attached, so we map yours first.",

  // ── Block 3: Place layer. Archetype A, the vertical ───────────────────
  placeLayerHeading: "Your oldest revenue still arrives as a purchase order",
  placeLayer:
    "Surf, skate, moto, outdoor. The categories this county grew up on sold through shops first, and plenty still take more money that way than direct.\n\nSo there are two buyers on your one catalog. One buys a single item at full price on a phone. The other buys four hundred units twice a year, on terms, through a rep.\n\nSame products, different needs. Most stores here were built for one and patched for the other.",

  // ── Block 4: Gradient layer. Archetype G, the trade base ──────────────
  gradientLayerHeading: "The plan question changed in April, and the answer is a number you can count",
  gradientLayer:
    "**On 2 April 2026 Shopify moved most B2B features off Plus.** Company profiles, net terms, volume pricing, ACH and vaulted cards now run on Basic, Grow and Advanced.\n\nSo \"you need Plus for wholesale\" stopped being true this year, and plenty of advice still says it.\n\n**What stayed on Plus is narrow enough to test yourself.** Unlimited catalogs, assigning one straight to a company or location, deposits and partial payments. Below Plus the cap is three active catalogs across all your B2B markets.\n\nSo count your price lists. Three or fewer and the plan isn't your problem. Pricing that differs per dealer, and it is.\n\n**Then read the list nobody quotes from.** Shopify's docs say a B2B order can't use Shop Pay, Apple Pay, Google Pay or Amazon Pay. No subscriptions, no local delivery, no pickup. And it stops at 500 line items.\n\nThat last one is a real ceiling here: a preseason order across a full size run gets close.\n\nOn a blended store most of those can't be on for one customer type and off for the other. Which makes the first decision structural: one store, or two.",
  gradientFacts: [
    {
      id: "shopify-b2b-plan-features-2026",
      claim:
        "Shopify's Help Center page on B2B features by plan states that companies, company locations and location-level permissions, quantity rules and price breaks, net payment terms and payment reminders, ACH payments and vaulted credit cards, draft orders, PO numbers, reorders, sales staff permissions, the Trade theme, quick order lists and Shopify Flow automations are available on the Basic, Grow and Advanced plans. It states that on Basic, Grow and Advanced \"you can assign up to 3 active catalogs across all your B2B markets\", and that on Shopify Plus \"you can create an unlimited number of B2B market catalogs\". Direct assignment of catalogs to specific companies and company locations for customer-level pricing is Plus-only, as are deposit requirements, partial payments and payment requests per fulfillment. Using B2B catalog features below Plus requires the store to be on new Shopify Markets.",
      url: "https://help.shopify.com/en/manual/b2b/getting-started/plan-features",
      publisher: "Shopify Help Center, B2B features by plan",
      captured: "2026-09-16",
      reviewAfterDays: 180,
    },
    {
      id: "shopify-b2b-non-plus-changelog-2026",
      claim:
        "Shopify's changelog post dated 2 April 2026 states that key B2B functionality previously exclusive to Shopify Plus became available on the Basic, Grow and Advanced plans at no additional cost: up to 3 active B2B catalogs assigned via Markets, company profiles, payment terms, volume pricing, ACH payments (US only) and vaulted credit cards. It states that unlimited catalogs for customer-specific pricing, direct catalog assignment to companies and locations, partial payments and deposits remain exclusive to Plus. This is the fact that dates most published 'you need Plus for wholesale' advice.",
      url: "https://changelog.shopify.com/posts/key-b2b-features-now-available-on-non-plus-plans",
      publisher: "Shopify Changelog",
      captured: "2026-09-16",
      reviewAfterDays: 180,
    },
    {
      id: "shopify-b2b-considerations-limits",
      claim:
        "Shopify's Help Center page on requirements and considerations for using B2B states that B2B does not work with accelerated checkouts including Shop Pay, Apple Pay, Google Pay and Amazon Pay; local delivery; pickup points; tipping; subscriptions; legacy customer accounts; agentic storefronts; certain third-party apps; and checkout.liquid customizations. It states that B2B orders are limited to a maximum of 500 line items, and that transactions without a properly assigned B2B customer are charged standard D2C rates rather than contracted B2B pricing. It further states that on blended B2B and D2C stores most features cannot be selectively applied to specific customer types. Pickup in store, line item scripts, abandoned checkouts and gift cards at checkout are off by default for B2B and need to be enabled.",
      url: "https://help.shopify.com/en/manual/b2b/getting-started/considerations",
      publisher: "Shopify Help Center, B2B requirements and considerations",
      captured: "2026-09-16",
      reviewAfterDays: 180,
    },
    {
      id: "ecw-oc-dealer-architecture-2026",
      claim:
        "Original observation, 16 September 2026. Twelve action-sports and outdoor brands selling both direct and through retail were rendered in Chromium with a fresh browser context per brand, scrolled to force footer and menu links to load, then their dealer, wholesale and store-locator paths probed directly. Eleven returned; Electric reset the connection and is excluded. 9 of 11 run Shopify on the direct side. A dealer channel was placeable from outside on 6 of 11: three run a separate B2B store on a subdomain (b2b.troyleedesigns.com, b2b.volcom.com, pro.100percent.com), two gate a section of the main Shopify store (Sector 9, Fox Racing), and one routes to a third-party portal (Hobie, with Handshake markers on /dealers and a dealer.hobie.com host). 100% runs both a /dealers section on the main store and a pro. subdomain, and is counted once under separate store. The remaining five expose no dealer channel an outside observer can place, which is recorded as not observable rather than as absent.",
      url: "https://www.ecommwizards.com/services/shopify-development-agency/orange-county",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-09-16",
      reviewAfterDays: 180,
    },
    {
      id: "ecw-oc-dealer-locator-schema-2026",
      claim:
        "Original observation, 16 September 2026, same sample and method. Seven of the eleven brands have a findable dealer or store locator: Fox Racing, Troy Lee Designs, Hobie, Futures Fins, Nixon, 100% and Sector 9. NONE of the seven emits LocalBusiness, and none emits any per-dealer structured data. Troy Lee Designs, Futures Fins and 100% emit an Organization block only. Nixon emits Organization plus a PostalAddress, and that address is Nixon's own Carlsbad headquarters, which is a correct use. Fox Racing, Hobie and Sector 9 emit no application/ld+json on the locator at all. Dealer addresses rendered as plain unmarked text at capture: 100% 724, Fox Racing 6, Troy Lee Designs 3, Futures Fins 1. Hobie, Nixon and Sector 9 draw their results into a map widget after load, so nothing was present in the DOM at capture and they are reported as not observed rather than zero. NOTE FOR ANYONE EDITING: Page Specification v2.0 §4.9 predicted that most dealer locators emit LocalBusiness and 'most should not'. The sample does not corroborate that, and this page states the observed result instead of the prediction.",
      url: "https://www.ecommwizards.com/services/shopify-development-agency/orange-county",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-09-16",
      reviewAfterDays: 180,
    },
    {
      id: "google-structured-data-policies",
      claim:
        "Google's structured data general guidelines state \"Don't mark up content that is not visible to readers of the page\", that \"Your structured data must be a true representation of the page content\", and under quality guidelines \"Don't use structured data to deceive or mislead users\", which names impersonation and misrepresenting ownership or affiliation. NOTE FOR ANYONE EDITING: Google's LocalBusiness reference does NOT forbid marking up a business other than the page's subject — it says the markup can be added to any page — so no claim that Google prohibits marking up a stockist appears on this page. The presence-claim argument is stated as our own reading of the deception guideline, not as a Google rule.",
      url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
      publisher: "Google Search Central, structured data general guidelines",
      captured: "2026-09-16",
      reviewAfterDays: 365,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // Renderer `comparison` per card 9. Three approaches × eight rows, exactly
  // the shape §4.9 specifies, with §4.9's two supporting blocks after it.
  asset: {
    title: "Three ways to run wholesale beside your direct store",
    intro:
      "The same eight decisions under each setup, so you can see what each costs before picking. The rows are what goes wrong, not features.",
    renderer: "comparison",
    method: {
      sampleSize: 11,
      window: "single rendered visit per brand, fresh browser context, plus direct path probes",
      captured: "2026-09-16",
      howGathered:
        "Two sources, kept separate. The platform rows come from Shopify's own documentation: the B2B features-by-plan page, the changelog post of 2 April 2026, and the requirements and considerations page. The observed rows come from twelve action-sports and outdoor brands selling both direct and through retail. Each was rendered in Chromium with a fresh context, then its dealer and locator paths probed. Eleven returned; one reset the connection. Brands are counted, and named only where the architecture is published on their own site. Where a brand exposes nothing, you'll see it recorded as not observable, never none.",
    },
    columns: ["The decision", "Separate B2B store", "Gated on your main store", "Third-party portal"],
    rows: [
      {
        label: "Index leakage and duplicate catalog",
        cells: [
          "Clean: noindexed second store",
          "The risk lives here",
          "Clean: not your domain",
        ],
        note: "One catalog on two paths. If a gated collection renders to a crawler, trade prices get indexed.",
      },
      {
        label: "Price-list management",
        cells: [
          "Two sets to keep in step",
          "One set, catalogs on top",
          "Two systems and a sync",
        ],
        note: "Three active catalogs across all B2B markets below Plus. Count yours before this becomes an argument about plans.",
      },
      {
        label: "MAP control at store level",
        cells: ["Behind login only", "Depends on the gate holding", "Never public"],
        note: "No plan enforces MAP. A store controls who sees which price; the rest is your dealer agreement.",
      },
      {
        label: "Account approval and gating",
        cells: ["Company accounts you approve", "Same, one login", "The portal's own flow"],
        note: "On every paid plan since April, so no longer a reason to buy Plus.",
      },
      {
        label: "Minimums and net terms",
        cells: ["Native", "Native", "Native to the portal"],
        note: "Quantity rules, price breaks and net terms on every paid plan. Deposits and partial payments stay Plus-only.",
      },
      {
        label: "Maintenance",
        cells: ["Two themes, two deploys", "One theme, full of conditions", "One theme plus an integration"],
        note: "Gating looks cheapest until the conditional logic spreads and every direct-side change is tested twice.",
      },
      {
        label: "What the dealer experiences",
        cells: ["Purpose-built, nothing consumer in it", "Familiar, carries consumer furniture", "Whatever the portal is"],
        note: "On all three, a B2B order can't use Shop Pay, Apple Pay, Google Pay or Amazon Pay, and stops at 500 lines.",
      },
      {
        label: "Disruption to dealers you already have",
        cells: ["New URL and login", "Least disruptive", "Retraining on somebody else's UI"],
        note: "Dealers are a relationship, not traffic. Whoever quotes this should say how the first order after cutover happens.",
      },
    ],
    derived:
      "Read the first and last rows together and the trade is obvious. Gating is kindest to the dealers you have and hardest to keep clean in search. A separate store inverts it.\n\nThe middle rows stopped deciding anything in April. So the questions run: how many price lists, how loud the search risk, how much retraining. The plan falls out of those.\n\nAnyone on your Shopify agency Orange County shortlist should walk these eight rows with you before showing a design.",
    derivedList: {
      title: "Four things to settle before anybody quotes you",
      items: [
        "How many genuinely different price lists you run. Three or fewer changes the plan you need.",
        "Whether a logged-out crawler can reach a trade price today. Check before anyone redesigns.",
        "Your largest preseason order, in line items. The cap is 500.",
      ],
    },
    supportingBlocks: [
      {
        heading: "What eleven brands here actually do",
        body:
          "**Nine of the eleven run Shopify** on the direct side, so this is a real choice for you, not a hypothetical one.\n\n**Six expose a dealer channel** an outsider can place. Three run a separate B2B store on a subdomain. Two gate a section of the main store. One routes to a third-party portal.\n\n**Five expose nothing.** Recorded as not observable, not as none: a channel behind a rep leaves no trace.\n\nThe separate store is both the most common answer and the dearest to keep. Nobody got there by comparing eight rows.",
      },
      {
        heading: "Your dealer locator, and the markup nobody uses",
        body:
          "Seven of the eleven publish a locator. **None marks up a single dealer.** Three emit their own Organization and nothing else. One emits its own headquarters address, correctly. Three emit nothing. One renders 724 dealer addresses as plain text with nothing describing them.\n\n**That looks like an oversight and mostly isn't.** The obvious fix is to mark each shop up as a LocalBusiness under your own name, which asserts the shop is you. Google's guidelines say structured data must truly represent the page and must not misrepresent ownership or affiliation.\n\n**So list them as text and keep your Organization to yourself.** If you do mark dealers up, each is its own named entity, never an address hanging off your brand. We run that rule here, which is why this page carries no address.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Disciplines ───────────────────────────────────────────────────────
  // Step 01: he has not picked a service, so this is the menu, and it covers
  // the range rather than leaning entirely on wholesale.
  disciplines: {
    label: "What we do",
    heading: "Four things we do, and you can take one or all four",
    intro:
      "You've picked the platform, so the question is which piece. A Shopify agency Orange County engagement should let you buy them separately. Every row below already had customers.",
    items: [
      {
        label: "Wholesale and dealer ordering",
        heading: "We build the side your dealers use, not a consumer store with a discount on it",
        body:
          "Then the part that decides whether reps stop taking orders by email.",
        covers: ["B2B setup", "Company accounts", "Price lists", "Net terms", "Bulk ordering"],
        imageAlt: "A wholesale ordering portal we built on Shopify Plus for the cycling distributor Saddleback",
        caseSlug: "saddleback-shopify-plus-b2b",
        cta: { label: "Explore B2B work", href: "/services/shopify-plus-development" },
      },
      {
        label: "Store design and build",
        heading: "We rebuild the storefront around how the catalog is really bought",
        covers: ["Theme development", "Custom development", "Design systems", "Metafields"],
        imageAlt: "A performance sock storefront we rebuilt for Feetures",
        caseSlug: "feetures-shopify-theme-development",
        cta: { label: "Explore development", href: "/services/shopify-development-agency" },
      },
      {
        label: "Migration and replatforming",
        heading: "We move you off the old platform and bring the trade accounts",
        covers: ["Platform migration", "Price book mapping", "Redirects", "Parallel running"],
        imageAlt: "An access equipment storefront we moved onto Shopify Plus for Henchman",
        caseSlug: "henchman-shopify-plus-b2b",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Integrations and the work after launch",
        heading: "We connect the store to the systems already running the business",
        covers: ["ERP and inventory", "Order automation", "Reporting", "Ongoing support"],
        imageAlt: "A trade ordering portal we built for Mouldings One",
        caseSlug: "mouldings-one-shopify-b2b-portal",
        cta: { label: "Explore support", href: "/services/shopify-maintenance-and-support" },
      },
    ],
  },

  // ── Who we work with ──────────────────────────────────────────────────
  // Deliberately NOT page 8's three categories, which are the same county
  // cluster in Master §5.9 and would put two same-hub pages on one list.
  // These are framed by what the DEALER side does to the build.
  segments: {
    heading: "Who we build for here",
    intro:
      "Three shapes of catalog this county runs on. Each breaks a different part of the wholesale setup, and a proposal should say which you are.",
    items: [
      {
        icon: "outdoor",
        name: "Action sports and moto",
        what: "Two selling seasons ordered months ahead, against a catalog that isn't finished yet.",
        breaks: "Preseason quantities sit in a spreadsheet beside the store, so the site never knows what's committed.",
      },
      {
        icon: "apparel",
        name: "Apparel that sells through shops",
        what: "Deep size and color runs: a dealer buys a curve, a customer buys one unit.",
        breaks: "The run is modeled as consumer variants, so ordering one pack means thirty lines by hand.",
      },
      {
        icon: "wholesale",
        name: "Parts and hard goods",
        what: "Fitment decides what a buyer can order, and getting it wrong means a return, not a refund.",
        breaks: "Fitment data lives in the theme instead of metafields, so it never reaches the dealer side.",
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  // None of these four repeats page 8's, which shares this hub.
  howWeWork: {
    heading: "What working with us looks like",
    intro:
      "Several agencies you're comparing us with are down the freeway. We aren't, so here's what we offer.",
    items: [
      {
        title: "The dealer list is yours and stays yours",
        body:
          "Companies, price lists, terms, the repository. All in your accounts from day one, so nothing is handed back.",
      },
      {
        title: "We talk to whoever takes the orders today",
        body:
          "Usually a rep or a service lead. They know the part nobody wrote down.",
      },
      {
        title: "Cutovers stay out of your ordering window",
        body:
          "Preseason is the worst fortnight of your year to change how orders are placed, so we schedule round it.",
      },
      {
        title: "Scope, number and date before anyone starts",
        body:
          "If one moves, it goes back through a quote before a developer sees it.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  whatWeDoAboutItHeading: "What it costs and how it runs",
  whatWeDoAboutIt:
    "Week one is the eight rows above, run against your store, not a questionnaire. Price lists counted, the gate tested logged out, your biggest order measured in line items.\n\nThat produces a recommendation with a plan tier attached, and you keep it either way. Then a scope, a number and a date. The build order is price lists, then accounts and terms, then the storefront.\n\nBuilds run $5,000 to $50,000 depending on how much is custom, and the assessment alone costs a fraction. Any Shopify agency Orange County quote should price the two apart.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // §5 row 9, prioritising the B2B component.
  proofHeading: "Three brands that sell direct and through the trade",
  proof: [
    {
      slug: "saddleback-shopify-plus-b2b",
      vertical: "Cycling distribution and wholesale",
      whatWasBuilt: "A Shopify Plus B2B store replacing a wholesale portal, with a credit application and CSV bulk ordering",
      outcome: "+881% B2B sales growth in month one, 9.54% B2B conversion rate",
      verified: true,
    },
    {
      slug: "feetures-shopify-theme-development",
      vertical: "Performance apparel",
      whatWasBuilt: "A theme rebuilt with variant-aware product pages and metafield-driven automation",
      outcome: "+32% add-to-cart rate, +19% average order value",
      verified: true,
    },
    {
      slug: "henchman-shopify-plus-b2b",
      vertical: "Trade supply and B2B",
      whatWasBuilt: "An Adobe Commerce exit onto Shopify Plus with self-service trade ordering, tiered price books and an ERP",
      outcome: "+58% online revenue, 45% lower platform cost",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What you're probably thinking",
  objections: [
    {
      objection: "Our reps take the orders and it works. Why put it on the website?",
      answer:
        "If it works, keep it. We'd rather say so than sell you a portal.\n\nThe question is what your reps spend preseason doing. If it's typing orders somebody already decided on, move that. If it's selling, leave it alone.",
    },
    {
      objection: "Shopify's B2B isn't a real wholesale platform.",
      answer:
        "It wasn't, and for some businesses it still isn't.\n\nWhat changed is the floor: company accounts, terms, volume pricing and vaulted cards came off Plus in April.\n\nWhere it runs out is per-dealer pricing beyond three catalogs, deposits, and quote-to-order. Check those against your list before anyone argues platform.",
    },
    {
      objection: "Won't opening a portal upset the dealers we've had for years?",
      answer:
        "It can, and the ones who've been with you longest are likeliest to mind.\n\nThe version that goes badly is a new login appearing unannounced the week orders are due. The one that works gives the same terms, a shorter path and a person to call.\n\nAsk every Shopify agency Orange County shortlist how that first order gets placed.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // The first three unique questions are fixed by spec §6.3 row 9. The office
  // question is §6.4, required on all seven geo pages.
  faqs: [
    {
      question: "How do we show dealer pricing without it getting indexed?",
      answer:
        "Behind the login, not behind a script. A price hidden with CSS is still in the HTML, and the HTML is what search engines read. Dealer pricing should come from a Shopify catalog a logged-out request never receives. Test yours with no session.",
      unique: true,
    },
    {
      question: "Does wholesale need its own store, or can it live on ours?",
      answer:
        "Both work, and the table above is the comparison. One store is cheaper to run and kinder to the dealers you have. Two is cleaner in search. What decides it is how much conditional logic your theme can carry.",
      unique: true,
    },
    {
      question: "How is MAP enforced at store level?",
      answer:
        "It isn't, and that's worth being plain about. No Shopify plan has native MAP enforcement. A store only controls who sees which price, so trade pricing sits behind an approved account and never renders publicly. Enforcement is your dealer agreement, and that belongs with counsel.",
      unique: true,
    },
    {
      question: "How much does a Shopify agency Orange County brands hire usually charge?",
      answer:
        "Ours is $5,000 to $50,000 for a build, fixed before anyone starts. The wholesale assessment alone costs a fraction, and it's the thing to buy first: it tells you whether the build is worth buying.",
      unique: true,
    },
    {
      question: "Do you have an office we can visit?",
      answer:
        "No, and several agencies you're comparing us with do. We're remote, working with brands across the US, and we'd rather say so now than in week three. What we bring instead is the table above.",
      unique: true,
    },
    {
      question: "Do you only work on stores with a wholesale channel?",
      answer:
        "No. Wholesale takes up this page because it's what gets built wrong most expensively here. If you sell direct only, the design, build and conversion work is the same job.",
      unique: true,
    },

    // Entity-shaped rather than problem-shaped: it answers the question the way
    // a search engine phrases it, so the page can be returned for the
    // qualifying question buyers ask beside the head term. Last on purpose,
    // because a human reading top to bottom wants the real answers first.
    {
      question: "Do you provide Shopify development in Orange County?",
      answer:
        "Yes, though nobody here is local. The work is remote anyway: your dealer side gets built and tested, not talked through in a room. We do it for brands across the state.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Step 09: zero keywords here, and no city name either.
  conversion: {
    heading: "Send us a trade URL",
    whatYouGet:
      "Send one link a dealer would use. We'll tell you what a logged-out crawler sees, and whether it's worth fixing.",
    whatWeWillTellYouNotToDo:
      "If you run three price lists or fewer, don't buy a second store or a bigger plan for this. Both cost more than the problem, and we'd rather say so than quote a build.",
    responseExpectation:
      "A developer who has built one replies inside a working day.",
    audit: {
      transition:
        "You already know whether a dealer can reorder without emailing somebody.",
      offer:
        "Tell us what your trade side runs on. We'll work the eight rows and hand you the findings:",
      parts: [
        "What a logged-out request sees of your trade pricing today.",
        "How many real price lists you have, and which plan that puts you on.",
        "Which of the three setups fits, and what the other two cost.",
      ],
      limit:
        "It stops at the findings. The build is quoted separately and you can walk away.",
      noObligation:
        "No charge, and the write-up is yours either way.",
    },
  },

  sources: [],

  // Owner's instruction carried forward from pages 6, 7 and 8: below 2,500.
  // Card 9 says 1,300-1,700, which describes a bare spine without the trust
  // bar, quick answer, four discipline rows, an industries block, an
  // eight-row comparison with two supporting blocks and eight FAQs.
  wordCountTarget: [2000, 2500],
};
