// Batch 1, page 8: /services/shopify-development-agency/san-diego
// Spec: Batch 1 Page Specification v2.0 — gradient §3 row 8, asset §4.8,
// case studies §5 row 8, FAQ §6.3 row 8, conversion §7. Build Manual card 8.
// Copy: docs/ecomm-wizards-page-standard.md, which supersedes
// docs/copy-standard.md v2.0 wherever the two disagree.
//
// Primary keyword: "shopify agency san diego" (10/mo, Google Keyword Planner).
// Inventory: Geo Inventory & Batch Plan v4.0, California row 5.
// PRIMARY ONLY. Inventory §6b lists this page among the thirteen seeded two to
// four times that returned no usable secondary. That is a measured result, not
// a gap, and it means ALL differentiation has to come from the payload.
// Hub: /services/shopify-development-agency, which already exists.
//
// ── STEP 01 DECIDES THE SHAPE OF THIS PAGE ──────────────────────────────────
//
// The page standard uses this exact keyword family as its first worked example:
//
//   `shopify agency <city>`  ->  "He is on Shopify. He wants an agency.
//                                 WHICH SERVICE — he never said. It could be
//                                 design, development, marketing, all of it.
//                                 Never assume. Show him everything and let
//                                 him point."
//
// So this is NOT a development-deep page. Step 07's table is explicit: for this
// keyword the reader "has not picked a service, show the menu of services
// early". He HAS picked the platform, which is the one thing pages 5 and 7
// could not assume, so Shopify is a given here and never argued for.
//
// THE TENSION, and the thing to get right. Spec §3 assigns this page the
// subscription-migration gradient. That is the DEPTH, not the whole page. A San
// Diego brand on Shopify that runs no subscription must not read the H1 and
// leave. Pages 5 and 7 both had to be rewritten for exactly that, so this one
// was built that way from the start: the H1, qualifier, hook and disciplines
// serve any Shopify store, and the subscription argument lives in the gradient,
// the asset and the FAQ.
//
// ── ARCHETYPE A+E, from Build Manual card 8 ─────────────────────────────────
// A is vertical-led (the nutra and action-sports cluster Master §5.9 gives San
// Diego), E is emerging-led, "why brands here outgrow their first agency". E is
// what the migration argument actually is: the subscription app you chose at
// $200k is the one you are stuck inside at $5M.
//
// NO CROSS-LINK TO PAGE 7 (/services/ecommerce-agency/san-diego). Card 8 and
// check-links both enforce it. Page 7 is a merchant with a live subscription
// programme that is legally exposed; this page is a merchant deciding whether
// to move platforms. Spec §3 warns that if the two drafts converge, cut this
// one. They do not: page 7 is about what the law makes you configure, this page
// is about what a migration costs you in subscribers. Nothing about the FTC,
// the California ARL, consent records or cancellation flows appears here.
//
// SHARES A HUB WITH PAGE 4 (shopify-development-agency/los-angeles), so
// check-shingles compares them. Page 4 is drop-day operations and creative
// density. No overlap in subject, and no sentence frame carried across.
//
// ══ THE RESEARCH: WHAT ACTUALLY DECIDES A SUBSCRIPTION MIGRATION ════════════
//
// Spec §4.8 is strict about method: pricing pages, then each platform's own
// MIGRATION DOCUMENTATION, developer docs or support articles rather than
// marketing pages, and "confirm token transfer explicitly; absence of a
// statement is not a yes." Everything below is from vendor documentation read
// on 15 September 2026.
//
// THE HEADLINE, and it is not what merchants expect. The subscription app is
// NOT what decides whether your subscribers have to re-enter their cards.
// Three other things decide it:
//
//   1. YOUR PLAN TIER. Shopify's own help documentation states that only
//      Shopify Plus or Enterprise can migrate credit card PANs directly. Below
//      that tier the direct route does not exist.
//   2. YOUR PROCESSOR. Skio's docs state plainly that payment tokens cannot be
//      transferred between different payment processors. Loop's docs list the
//      providers it can import tokens from (Shopify Payments, Stripe,
//      Authorize.net, Braintree, PayPal Express, Adyen) and state that "other
//      providers are currently not supported", with Adyen supported for new
//      subscriptions only and NOT for token migration.
//   3. YOUR PAYMENT MIX. Shopify's documentation states that accelerated
//      wallets — Venmo, Apple Pay, Google Pay — and bank account information
//      are not supported for migration. Those subscribers re-authorize no
//      matter which app you move to.
//
// THE PATTERN ALL FOUR SHARE, and the thing that reframes the project: the
// migration is not a day, it is a tail. Shopify calls it the secondary or
// legacy subscription payment gateway: existing contracts keep billing through
// the old processor, and each customer moves into Shopify's vault only when
// they next update their billing details. Shopify's own docs call this the
// slow drip method. Loop describes the same behaviour: "Shopify vaults the
// tokens, but billing will continue with your external provider unless the
// customer updates their payment method natively in Shopify." Recharge
// describes the same for stores on Shopify Checkout Integration.
//
// FOUR MORE FACTS THAT CHANGE SCOPE, each from the vendor's own docs:
//   - Recharge: stores on Shopify Checkout Integration CANNOT migrate
//     subscriptions to another store also on Shopify Checkout Integration.
//   - Shopify: if the Shopify Payments ACCOUNT changes, for a market or legal
//     entity move, saved payment methods do not carry over at all. That is the
//     one case where everybody re-authorizes.
//   - Skio: canceled subscriptions cannot be migrated, because they lack the
//     required data. Anyone planning to win back churned subscribers after a
//     move is planning on a list that does not travel.
//   - Skio: subscriptions with no valid payment method on file route to
//     payment recovery rather than migrating cleanly.
//
// WHAT WAS DELIBERATELY NOT USED. A competitor blog states flatly that "it is
// not possible to migrate payment tokens to Shopify Payments due to Shopify
// limitations." Recharge's own support documentation describes a PAN migration
// into Shopify Payments, and Shopify's documentation describes the supported
// route. The blog contradicts both vendors' own docs, so it is not cited and
// should not be reintroduced.
//
// ── SERP, 15 September 2026 ─────────────────────────────────────────────────
// Rendered in a browser. This SERP is shaped DIFFERENTLY from pages 5, 6 and 7:
// it is mostly real agency service pages rather than directories, and several
// competitors have genuine San Diego presence.
//
//   JadePuma            130 words, ranks, genuinely based in Pacific Beach
//   Forix               846 words
//   Conspire          1,061 words, in the city since 2011
//   Shero             1,130 words, headquartered in New York
//   Sermondo listicle 1,208 words, the only page stating a price
//   Blue Media        2,828 words, a generic service page, not San Diego-specific
//   SDG                 403 to automated clients; Platinum partner since 2006
//
// THE GAP. Of the seven: 0 mention subscriptions, 0 mention payment tokens or
// re-authorization, 0 carry original research. Three mention migration, all in
// passing. In the metro Master §5.9 gives to supplements, nutra and action
// sports, which is the cluster where recurring billing IS the business model.
//
// THE HONEST COMPETITIVE POSITION. We cannot beat JadePuma, Conspire or SDG on
// local presence, because they have it and we do not. Master §4 forbids
// claiming any, and this page does not. What is available is substance: the
// page states a price, which only the listicle does, and carries a comparison
// nobody else has.
//
// ── ROIA (Step 03) ──────────────────────────────────────────────────────────
//
// ONE READER. On Shopify already. Has not said which service. Step 02: owns the
// store, 28 to 45, $10-50M, already decided to hire an agency.
//
// ONE IDEA (16 words)
// The subscription app you picked when you were small is the one you are stuck
// inside now.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every button says "Get in touch with us"
// and points at #contact.
//
// ── KEYWORD PLACEMENT (Step 09) ─────────────────────────────────────────────
// Primary-only page, so there are no secondaries to spread. Shapes varied:
// shortlist, quote, brands hire, engagement, plus the H1 and the FAQ block's
// generated H2. ZERO keywords in the conversion block, and no city name in it.
//
// ── CASE STUDIES, spec §5 row 8 ─────────────────────────────────────────────
// §5 asks for supplements or sports nutrition, outdoor and action sports, and
// subscription consumables, with AT LEAST ONE MIGRATION.
//
//   hero image   This Works
//   disciplines  This Works, Everlast, Wild, Loop Earplugs
//   proof        This Works, Everlast, Wild
//
// This Works carries the mandatory migration slot and is unspent anywhere else.
// Everlast is unspent. Wild appears on page 6 under a retention framing rather
// than a migration one; it is the corpus's clearest subscription programme and
// the reuse is recorded rather than hidden. There is still no pet or true
// sports-nutrition study that is unspent.
//
// PRESENCE (Master §4): no claim anywhere.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const SHOPIFY_DEV_SAN_DIEGO: GeoPage = {
  type: "geo",
  slug: "san-diego",
  path: "/services/shopify-development-agency/san-diego",
  hub: "/services/shopify-development-agency",
  status: "published",

  geo: {
    name: "San Diego",
    type: "metro",
    areaServed: "San Diego, California",
  },
  archetype: ["A", "E"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "shopify agency san diego",
  // Primary-only. Inventory v4.0, California #5: "No usable secondary exists."
  secondaryKeywords: [],
  faqKeywords: [
    "do subscribers re-enter payment details migration",
    "how to tell subscribers about a platform migration",
    "subscription migration rollback plan",
    "shopify agency cost san diego",
  ],
  reviewedPhrases: ["in San Diego"],

  // 56 characters. Step 10 wants 55-60 with the keyword and no presence claim.
  metaTitle: "Shopify Agency San Diego | Design, Build, Migrate, Grow",
  // 155 characters, inside Step 10's 150-160.
  metaDescription:
    "A Shopify agency San Diego brands use for design, build, migration and growth. We check what moves and what re-authorizes before anyone quotes a rebuild.",
  shortTitle: "Shopify agency San Diego",
  serviceType: "Shopify agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Deliberately NOT subscription-specific. Step 01 says this reader has picked
  // the platform and nothing else, so the H1 names the range and the argument
  // without assuming he sells on repeat.
  h1: "Shopify agency San Diego, we work on the store you already have",
  qualifier:
    "Design, build, migration, CRO and the work after launch. Take one piece or hand us the lot. You get a number and a date in writing first.",

  heroImage: {
    src: "/images/Case%20studies/posters/This%20Works%20video.webp",
    alt: "A wellness storefront we replatformed onto Shopify Plus for This Works",
    video: "/images/Case%20studies/This%20Works%20video.mp4",
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
      "Wellness, sports, personal care. Different catalogs, all already trading when we arrived.",
  },

  assetCtaLabel: "See what actually moves",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Most of what we're asked to do here isn't a new store. It's a store like yours: working, outgrown, and nobody wants to touch it.\n\nThat's fair. A rebuild on a live store is the one project where the downside beats the upside, and you can probably name a brand it went badly for.\n\nSo the first question is what breaks if we do nothing. Sometimes the answer is nothing much, and we say so.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is a Shopify agency San Diego brands hire for design, build, migration and CRO. We work on Shopify and Shopify Plus. Most of our jobs are stores that already trade, so we measure what a change would cost you before recommending it.",

  // ── Block 3: Place layer. Archetype A, the vertical ───────────────────
  placeLayerHeading: "This city's brands grow up inside their first setup",
  placeLayer:
    "The categories here sell the same thing repeatedly to the same person, and that shapes the store more than the design does.\n\nA brand like yours installs a subscription app early, usually the cheapest one that works, then builds three years of customers inside it. The catalog grows, the offers get complicated, and the app stops keeping up.\n\nWhich is when somebody says the store needs rebuilding. It usually doesn't. What needs moving is underneath it, and that belongs in a different brief.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "The theme is the last thing you touch",
  gradientLayer:
    "A subscription brand's rebuild is a data migration wearing a redesign's clothes. What goes wrong isn't the layout. It's whether every subscriber survives without being asked for their card again.\n\n**The app you move to is not what decides that.** Three other things do, and all three sit in the platforms' own docs rather than on a pricing page.\n\n**Your plan tier.** Shopify's docs put direct card migration on Plus and Enterprise. Below that, the direct route isn't there.\n\n**Your processor.** Tokens don't move between processors. One app's docs say so outright; another lists six providers it can import from and says nothing else is supported.\n\n**Your payment mix.** Apple Pay, Google Pay, Venmo and bank details can't be migrated anywhere. Whatever share pays that way re-authorizes, on any platform, however the move is run.\n\nAnd the move isn't a day. Every platform describes the same shape: old contracts keep billing where they are, and each customer crosses over when they next update their card. Shopify's docs call it the slow drip. You run two systems for months, and sequencing matters more than the build.",
  gradientFacts: [
    {
      id: "shopify-payment-method-migration",
      claim:
        "Shopify's own help documentation on migrating payment methods states that customer payment information can be migrated to Shopify from Stripe, Braintree, PayPal Express and Authorize.net; that migrating credit card PANs directly is available only on Shopify Plus or Enterprise plans; that accelerated wallets including Venmo, Apple Pay and Google Pay, plus bank account information, are NOT supported for migration; and that under the secondary or legacy subscription payment gateway method, existing contracts continue billing through the third-party processor and each customer moves into Shopify's vault only when they next update their billing details, which the documentation calls the slow drip method. It also states that where the Shopify Payments ACCOUNT itself changes, for a market or legal entity move, saved payment methods do not carry over because they are stored with the account that processed them.",
      url: "https://help.shopify.com/en/manual/products/purchase-options/subscriptions/migrating-payment-methods",
      publisher: "Shopify Help Center",
      captured: "2026-09-15",
      reviewAfterDays: 180,
    },
    {
      id: "skio-migration-docs",
      claim:
        "Skio's own migration documentation states that Skio does not store payment method data in its database, that all payment data is stored in the payment processor and referenced by token, and therefore that customers do not need to re-enter card details when migrating in. It also states three limits: payment tokens CANNOT be transferred between different payment processors; canceled subscriptions cannot be migrated because they lack the required data; and subscriptions with no valid payment method on file are routed to payment recovery rather than migrating.",
      url: "https://help.skio.com/hc/en-us/articles/24864934046491-Data-Migration-An-Overview",
      publisher: "Skio, Data Migration documentation",
      captured: "2026-09-15",
      reviewAfterDays: 180,
    },
    {
      id: "loop-payment-migration-docs",
      claim:
        "Loop Subscriptions' payment migration documentation lists the providers whose tokens it can import: Shopify Payments, Stripe, Authorize.net, Braintree, PayPal Express and Adyen, with the explicit caveat that Adyen is supported by Shopify for new subscription creation only and NOT for payment token migration. It states that other providers are currently not supported for token import, and describes the same post-migration behavior Shopify does: Shopify vaults the tokens but billing continues with the external provider unless the customer updates their payment method natively in Shopify. Manual import is documented for fewer than 50 records, with assisted migration above that.",
      url: "https://help.loopwork.co/en/articles/12742688-payment-migration",
      publisher: "Loop Subscriptions Help Center",
      captured: "2026-09-15",
      reviewAfterDays: 180,
    },
    {
      id: "recharge-sci-migration-limit",
      claim:
        "Recharge's support documentation on Shopify Checkout Integration states that stores on Shopify Checkout Integration cannot migrate subscriptions to another store that is also on Shopify Checkout Integration, and that pre-existing Recharge subscriptions continue to be processed via the gateway configured in Recharge until the customer updates their payment method or billing information, at which point they are automatically vaulted into Shopify Payments. Recharge separately documents migrating legacy payment methods directly into Shopify Payments using PAN migrations. NOTE FOR ANYONE EDITING: a competitor blog claims token migration into Shopify Payments is impossible. That contradicts both Recharge's and Shopify's own documentation and is deliberately not cited here.",
      url: "https://support.getrecharge.com/hc/en-us/articles/4403505928599-Shopify-Checkout-Integration-technical-details-and-requirements",
      publisher: "Recharge Support",
      captured: "2026-09-15",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // Renderer `comparison` per card 8, token portability as the lead row per
  // §4.8. Columns are the four routes a San Diego subscription brand actually
  // chooses between. The supporting blocks carry §4.8's switching-cost model.
  asset: {
    title: "What actually moves when you change subscription platform",
    intro:
      "Six rows, read off each platform's own migration docs rather than its pricing page, on 15 September 2026. The lead row decides the project: whether subscribers keep paying without being asked for their card.",
    renderer: "comparison",
    method: {
      captured: "2026-09-15",
      howGathered:
        "Read from vendor docs only. Shopify's Help Center article on migrating payment methods. Skio's data migration overview. Loop's payment migration article. Recharge's articles on Checkout Integration and PAN migration. Marketing and pricing pages were not used as evidence for the token row. Where a vendor states nothing, the table says unstated. It never says yes.",
    },
    columns: ["What you're checking", "Shopify Subscriptions", "Recharge", "Skio", "Loop"],
    rows: [
      {
        label: "Payment token portability",
        cells: [
          "Import supported from four gateways",
          "Vaults on next customer update",
          "Tokens stay in the processor",
          "Import from six providers",
        ],
        note: "Nobody moves them all at once. Tokens follow the processor, not the app, so the next row matters more than this one.",
      },
      {
        label: "The limit that actually bites",
        cells: [
          "Direct card migration is Plus and Enterprise only",
          "Checkout Integration to Checkout Integration is not supported",
          "Tokens cannot cross processors",
          "Adyen is new subscriptions only, not migration",
        ],
        note: "Each is in the vendor's own docs. None is on a pricing page. Any one turns a migration into a re-acquisition campaign, so check here first.",
      },
      {
        label: "What never moves, on any of them",
        cells: ["Apple Pay, Google Pay, Venmo, bank details", "Same", "Same", "Same"],
        note: "Not supported for migration on any platform. Whatever share pays this way re-authorizes whichever column you pick.",
      },
      {
        label: "How the changeover behaves",
        cells: [
          "Slow drip via a legacy gateway",
          "Old gateway until the customer updates",
            "Processor API keeps billing",
          "External provider until updated natively",
        ],
        note: "All four describe the same shape. Customers cross over as they update details, so budget for two systems for months, not a cutover weekend.",
      },
      {
        label: "What does not come with you",
        cells: [
          "Unstated in the migration article",
          "Unstated",
          "Canceled subscriptions cannot be migrated",
          "Unstated",
        ],
        note: "Only one vendor says this outright. If the plan after moving is winning back churned subscribers, check that list travels.",
      },
      {
        label: "Who runs the import",
        cells: [
          "Encrypted PCI-approved import flow",
          "Self-serve under 5,000 rows",
          "Preview, then assisted",
          "Manual under 50 records, assisted above",
        ],
        note: "The thresholds tell you whether this is a form or a project with a named contact.",
      },
    ],
    derived:
      "Read the second row across. The app is rarely the constraint. Your plan tier, your processor and your payment mix decide most of it, and all three are settled before you shortlist anybody.\n\nSo the order is backwards from the usual one. Find out what moves. Decide whether to move. Pick a platform. The theme comes last. Anyone on your Shopify agency San Diego shortlist should give you a re-authorization number before they show you a design.",
    derivedList: {
      title: "Four things to find out before anybody quotes you",
      items: [
        "What share of your subscribers pay by Apple Pay, Google Pay or Venmo. That share re-authorizes whatever you do.",
        "Which processor your tokens sit with, and whether the destination reads them.",
        "Whether you're on Plus, since the direct card route depends on it.",
        "What a subscriber is worth over twelve months, so the risk has a number against it.",
      ],
    },
    supportingBlocks: [
      {
        heading: "The switching cost nobody quotes",
        body:
          "The quote covers the build. It does not cover the subscribers you lose while moving, and that is usually the larger number.\n\n**The arithmetic is one line.** Subscribers affected, times the share you expect to lose, times what a subscriber is worth.\n\n**Worked at an assumed 5% loss**, our planning figure rather than a measured one, so substitute your own: 10,000 subscribers at $180 lifetime value, losing 5%, is $90,000. Against a $40,000 build quote the migration is the larger half.\n\n**Then re-run it on the wallet share.** Say 20% pays by Apple Pay. Those re-authorize, so the exposure sits on 2,000 people rather than the whole base, and sequencing is what moves it.",
      },
     {
        heading: "When we say don't move",
        body:
          "**If the platform is fine and the churn is a product problem**, a migration costs you subscribers and fixes nothing. The most common version we see.\n\n**If you're below Plus and your tokens sit with a processor the destination can't read**, the move means re-authorizing your base. Sometimes that's still right. Never by accident.\n\n**If the complaint is the admin rather than the customer experience**, the cheaper fix is configuration on what you already run.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Disciplines ───────────────────────────────────────────────────────
  // Step 01: this reader has NOT picked a service, so this is a menu rather
  // than a deep dive, and it covers the range rather than leaning on
  // subscriptions.
  disciplines: {
    label: "What we do",
    heading: "Four things we do, and you can take one or all four",
    intro:
      "You've picked the platform, so the question is which piece. A Shopify agency San Diego engagement should let you buy them one at a time. Every row below was already trading when we got there.",
    items: [
      {
        label: "Migration and replatforming",
        heading: "We move you onto Shopify Plus and keep the customers you already have",
        covers: ["Platform migration", "Subscription migration", "Data and token mapping", "Redirect mapping", "Parallel running"],
        imageAlt: "A wellness storefront we replatformed onto Shopify Plus for This Works",
        caseSlug: "this-works-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Design and build",
        heading: "We rebuild the storefront without rebuilding what already works",
        covers: ["Theme development", "Custom development", "Design systems", "Shopify Plus", "Integrations"],
        imageAlt: "A sports equipment storefront we redesigned for Everlast",
        caseSlug: "everlast-shopify-plus-sports-redesign",
        cta: { label: "Explore development", href: "/services/shopify-development-agency" },
      },
      {
        label: "Subscriptions and retention",
        heading: "We build the recurring side so it survives the next three years of growth",
        covers: ["Subscription setup", "Churn reduction", "Customer portal", "Replenishment logic", "Retention reporting"],
        imageAlt: "A subscription program we built for Wild",
        caseSlug: "wild-shopify-plus-subscriptions",
        cta: { label: "Explore retention work", href: "/services/shopify-cro-agency" },
      },
      {
        label: "CRO and testing",
        heading: "We test the changes before you pay to roll them out",
        covers: ["A/B testing", "Landing pages", "Checkout optimization", "Analytics", "Conversion work"],
        imageAlt: "Landing page and conversion work we ran for Loop Earplugs",
        caseSlug: "loop-earplugs-shopify-landing-page-cro",
        cta: { label: "Explore CRO", href: "/services/shopify-cro-agency" },
      },
    ],
  },

  // ── Who we work with ──────────────────────────────────────────────────
  // Added 2026-09-15 after the owner's Semrush export. Two of the ten ranking
  // pages carry an industries section, including Netalico, which is cited in
  // the AI Overview at Page Authority 0 with no backlinks — so its CONTENT
  // earned that citation, not its authority. "Have you built for a brand like
  // mine" is the question this block answers, and it is the shape an AI
  // Overview lifts.
  //
  // Categories come from Master §5.9, which gives San Diego and Orange County
  // supplements and nutra, action sports, outdoor and pet. Each entry names
  // what actually changes in the BUILD, per the SegmentsSchema note that this
  // must never be a grid of category nouns.
  segments: {
    heading: "Who we build for here",
    intro:
      "Three categories this city runs on. Each changes something structural in the build, and a Shopify agency San Diego proposal should say which one you are.",
    items: [
      {
        icon: "consumable",
        name: "Supplements and nutra",
        what: "Flavor, size and interval are all variants of one product, so the option logic holds three dimensions without the page turning into a form.",
        breaks: "Variants get restructured for a redesign and the subscription contracts still point at the old IDs.",
      },
      {
        icon: "outdoor",
        name: "Action sports and outdoor",
        what: "Deep size and fit runs, seasonal collections that turn over completely, often with a dealer channel beside the direct one.",
        breaks: "The size chart lives in the theme rather than metafields, so every seasonal rebuild loses it.",
      },
      {
        icon: "box",
        name: "Pet and repeat consumables",
        what: "The reorder cycle is set by the animal, not by you, so the interval is a product decision that belongs on the customer record.",
        breaks: "Intervals sit inside the subscription app, so they don't survive a move to a different one.",
      },
   ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "What working with us looks like",
    intro:
      "Nobody here is down the coast from you, and several agencies on your Shopify agency San Diego shortlist are. So here's what we offer instead.",
    items: [
      {
        title: "Everything is built in your accounts",
        body:
          "Your repository, your Shopify, your app logins. We work inside them, so there's nothing to hand back.",
      },
      {
        title: "Whoever builds it is who you message",
        body:
          "A shared channel with the developer in it. Not a queue, and not someone relaying questions.",
      },
      {
        title: "Cutovers happen on your clock",
        body:
          "Releases go out on Pacific hours, so somebody your side is awake when the switch flips.",
      },
      {
        title: "Nothing gets built that wasn't quoted",
        body:
          "Your scope, number and date agreed first. If any moves, it goes back through a quote before it reaches a developer.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  whatWeDoAboutItHeading: "What it costs and how it runs",
  whatWeDoAboutIt:
    "The first week is measurement, not design. Your wallet share, your processor, your plan tier, and what a subscriber is worth. That gives you the exposure number before anything is committed.\n\nThen a scope, a number and a date, in writing. After that the order is data, then parallel billing, then the theme.\n\nBuilds run $5,000 to $50,000 depending on how much is custom, and a migration assessment costs a fraction of that. Any Shopify agency San Diego quote should price them separately.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  proofHeading: "Three stores that were already trading",
  proof: [
    {
      slug: "this-works-shopify-plus-migration",
      vertical: "Wellness and personal care",
      whatWasBuilt: "A replatform onto Shopify Plus for a live store, carrying the existing customer base across",
      outcome: "+38% conversion rate, +45% mobile conversion lift",
      verified: true,
    },
    {
      slug: "wild-shopify-plus-subscriptions",
      vertical: "Subscription consumables",
      whatWasBuilt: "A Shopify Plus subscription program built for refills, with churn-reduction flows",
      outcome: "-34% subscription churn, 80K+ monthly subscribers at 12 months",
      verified: true,
    },
    {
      slug: "everlast-shopify-plus-sports-redesign",
      vertical: "Sports and fitness",
      whatWasBuilt: "A Shopify Plus redesign of an established catalog, rebuilt around the buying path",
      outcome: "+152% conversion rate, +48% total orders",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What you're probably thinking",
  objections: [
    {
      objection: "There are agencies actually based here. Why would we use a remote one?",
      answer:
        "For some work you shouldn't. If you want people in the room, hire people who can be in it.\n\nFor a migration it makes little difference. The risky part is data and sequencing, not meetings. What matters is whether whoever does it has moved a base before, and will say what won't survive.",
    },
    {
      objection: "Our subscription app says the migration is free and easy.",
      answer:
        "The import usually is. The exposure isn't in the import.\n\nIt's in the share of your base paying by a method that can't be migrated. In whether your tokens read where you're going. In the months you run two systems.\n\nAsk the vendor to put your re-authorization estimate in writing. The good ones will.",
    },
    {
      objection: "Every agency says they'll be straight with us. Why would yours be?",
      answer:
        "You can't tell from a page we wrote about ourselves. Nobody on your Shopify agency San Diego shortlist can prove it in a paragraph, us included.\n\nSo the first assessment costs nothing and you keep it, including the part where we say don't move. Every claim in the table names the vendor doc it came from.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // The first three unique questions are fixed by spec §6.3 row 8. The office
  // question is §6.4, required on all seven geo pages.
  faqs: [
    {
      question: "Will our subscribers have to re-enter their payment details?",
      answer:
        "Most won't. Some will. The split is knowable before you start. Cards held with a processor the destination can read usually carry across. Apple Pay, Google Pay, Venmo and bank details aren't supported anywhere, so that share re-authorizes regardless.",
      unique: true,
    },
    {
      question: "How do we tell an active subscriber base we're migrating?",
      answer:
        "Mostly you don't, and that's the aim. A clean migration is invisible: billing continues, dates hold, nothing changes in their account. The people who need telling are the ones who have to act, usually the wallet group.",
      unique: true,
    },
    {
      question: "What does the rollback look like if it goes wrong?",
      answer:
        "The old system stays live and billing until the new one proves itself, which is how these run anyway. Rollback is stopping the drip and leaving contracts where they are. What you can't roll back is a subscriber asked to re-enter a card who didn't.",
      unique: true,
    },
    {
      question: "Do we need Shopify Plus for this?",
      answer:
        "For a straight build, no. For migrating card numbers directly, Shopify's docs put that on Plus and Enterprise. Below that you move by the gradual route instead, which changes the timeline rather than the outcome.",
      unique: true,
    },
    {
      question: "How much does a Shopify agency San Diego brands hire usually charge?",
      answer:
        "Ours is $5,000 to $50,000 for a build, fixed before we start. A migration assessment on its own costs a fraction of that, and it's the thing worth buying first, because it tells you whether the build is worth buying.",
      unique: true,
    },
    {
      question: "How long does a migration take?",
      answer:
        "The build is six to eight weeks. The tail is longer, because your customers cross over as they update details. Plan on two billing systems for a few months.",
      unique: true,
    },
    {
      question: "Do you have an office we can visit?",
      answer:
        "No, and some agencies you're comparing us with do. We're remote, working with brands across the US, and we'd rather say so plainly. What we bring instead is the table above.",
      unique: true,
    },
    {
      question: "Do you only work on subscription stores?",
      answer:
        "No. Subscriptions take up most of this page because that's the migration that goes wrong most expensively here. Your design, build and CRO work is the same either way.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Step 09: zero keywords here, and no city name either. The
  // whatWeWillTellYouNotToDo line is specified verbatim in spec §7 for page 8.
  conversion: {
    heading: "Send us your subscription setup",
    whatYouGet:
      "Tell us what you run today. We'll tell you what survives a move and what doesn't, before anyone designs anything.",
    whatWeWillTellYouNotToDo:
      "If the platform is fine and the churn is a product problem, don't migrate. A move will cost you subscribers and fix none of it, and we'd rather say so than sell you a rebuild.",
    responseExpectation:
      "A developer who has done one of these replies inside a working day.",
    audit: {
      transition:
        "You already know which part of the setup you've stopped trusting.",
      offer:
        "Tell us what you're on and roughly how many subscribers. We'll assess it and hand you the findings:",
      parts: [
        "What share of your base would have to re-authorize, and why.",
        "Whether your tokens can be read where you want to go.",
        "What that exposure is worth against staying put.",
      ],
      limit:
        "It stops at the assessment. The work is quoted separately and you can decline.",
      noObligation:
        "No charge, and the numbers are yours whichever way you decide.",
    },
  },

  sources: [],

  // Owner's instruction, 2026-09-15: under 2,500 for this page, tightened from
  // the 2,500-2,700 band pages 6 and 7 use. Card 8 says 1,300-1,700, which
  // describes a bare spine without the trust bar, quick answer, four discipline
  // rows, an industries block, a six-row comparison and nine FAQs.
  wordCountTarget: [2000, 2500],
};
