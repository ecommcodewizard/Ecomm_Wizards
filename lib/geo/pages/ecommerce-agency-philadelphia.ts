// Batch 1b, page 32: /services/ecommerce-agency/philadelphia
// Inventory: Geo Inventory & Batch Plan v4.0, row #32.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce agency philadelphia" (10/mo inventory, 90/mo
// SEMrush, KD 9%).
// NO SECONDARIES. The inventory marks this row PRIMARY ONLY, and the SEMrush
// cluster backs it: 7 variations, 180 total volume, and the only one with any
// weight is "philadelphia ecommerce seo agency" at 30, which belongs to a
// different hub. Three published pages already ship with an empty list, so this
// is supported rather than improvised.
// CONSEQUENCE FOR THE SERVICE MENU: types.ts says a discipline body line exists
// ONLY where an assigned secondary has to live, which the owner ruled on
// 2026-09-05. There are none here, so no item carries a body. That is the rule
// applied, not an omission.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// "ecommerce agency <city>": neither platform nor service picked, so the
// service menu comes early and nothing assumes what the store runs on.
// Unlike Atlanta, which leaned design, and Denver, which leaned development,
// THERE IS NO LEAN HERE AT ALL. The cluster is too thin to read intent from,
// which is why the SERP had to carry it.
//
// ── ONE IDEA (17 words) ─────────────────────────────────────────────────────
// Your best customer is the one your store serves worst. Buying it again is
// harder than buying it.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["A"], derived. Master §5.10 assigns Philadelphia NO archetype, so this is
// reasoned from §5.9, which gives the city "food and beverage, apparel,
// pharma-adjacent retail". What those three share is that everything in them
// gets bought AGAIN: the same cereal, the same socks, the same vitamins. A is
// vertical-led, "one dominant vertical with a specific problem", and the
// specific problem here is the second order.
// Minneapolis #26 and #27 set the precedent for deriving where the Master
// assigns none.
//
// ── WHAT IS ALREADY TAKEN ON THIS HUB ───────────────────────────────────────
// Atlanta product data behind the design, Austin judging value, Boston the
// three answers before the cart, Chicago shipping weights, Dallas what sits
// behind the storefront, Denver accumulated architecture, Los Angeles selling
// what is not on the shelf, Minneapolis photography, New York the platform
// ceiling, Raleigh the category page and load order, San Diego subscription
// law, San Francisco in-house cost.
// TWO LINES TO STAY CLEAR OF:
//   SAN DIEGO owns subscription LAW: what you must disclose and how to cancel.
//   This page never argues about law. It is about whether buying again is
//   possible at all, which is a different question with a different answer.
//   BOSTON owns the three answers before the cart, one of which is the returns
//   window. This is entirely after the first purchase, not before it.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 6 October 2026 ────────────────────────────────────────────────────
// From the owner's SEMrush export. Volume 90, KD 9% "very easy", commercial
// intent, CPC $0, competitive density 0.33, 158 results.
// THE WEAKEST SERP IN THE PROGRAMME. Six of the ten results are not agency
// pages: four directories (DesignRush, BuiltIn, Sermondo, Clutch), a "best
// agencies in 2026" listicle, and YELP AT POSITION SEVEN. A consumer review
// site ranking for a business-to-business agency term means there is very
// little real material for Google to choose from.
// AND THE NUMBER THAT MATTERS: Barrel ranks SECOND with Page Authority 0, zero
// referring domains and zero backlinks. A page with no authority whatsoever is
// sitting at number two, so this keyword is decided on relevance alone.
//
// ── SOURCED FACT ────────────────────────────────────────────────────────────
// Shopify's own documentation on subscriptions as a purchase option, used
// because it states the mechanism plainly: selling on a recurring basis is
// something a merchant ADDS deliberately. It is a decision nobody made rather
// than a limit anyone hit.
//
// ── ORIGINAL OBSERVATION, 6 October 2026 ────────────────────────────────────
// 17 stores attempted, 16 read, in food and drink, supplements and apparel.
// 3,142 products from their own public feeds, plus one real product page per
// store read in a desktop browser.
//
//   Products where a bigger size is ON the page   median 1% (range 0-76)
//   Stores where NOT ONE product offers it        8 of 16
//   Stores selling bigger packs as SEPARATE items 8 of 16
//   Stores offering no repeat order at all        11 of 15
//
// THE SHAPE OF IT: one store carries 96 multipack products and another 72, but
// both let you choose the bigger pack on 1% and 0% of pages respectively. The
// depth exists. It is just scattered across separate listings a buyer has to go
// and find, which is the finding rather than a complaint about range.
//
// THREE MEASUREMENT FAILURES BEFORE THIS HELD, all recorded so they are not
// repeated. They matter because the first two produced numbers that looked
// entirely plausible and would have shipped:
//   1. COMPOSITION. The first hypothesis for this page was that stores do not
//      say what things are made of. Median came back 100%: 12 of 14 stated it
//      on every page. Simply untrue, and dropped.
//   2. "SELLS MORE OF IT", first pass, matched the option NAME, so four apparel
//      brands scored 85-100% for selling shirts in medium. Size on a sock is
//      fit, not depth. Now judged on option VALUES.
//   3. "REPEAT OPTION", first pass, matched the bare word subscribe, which sits
//      in the newsletter form in every footer, so 12 of 16 read 100%. Now
//      matched only on phrases that exist where a real control does, such as
//      "one-time purchase", which only appears beside a subscribe toggle.
//   AND A FALSE ZERO caught by checking extremes by hand: Nature Made carries
//   an option named "Count" with values 60, 90, 120. The shoe-size rule read
//   two-digit numbers as garment fit, so a brand plainly selling three bottle
//   sizes read 0%. It reads 22% now. The detector is unit-tested on nine cases
//   before the scan runs.
//
// LIMITS, stated on the page: public feeds only; one product page per store;
// a desktop browser; and a bigger pack sold as its own listing is counted as
// existing, because it does, just not where the buyer is standing.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Chosen for the second-order metric rather than headline conversion:
//   Happy Mammoth  lifetime value +89%, subscription revenue +134%
//   VITHIT         a drinks brand, AOV +31% and revenue +115%
//   Candy Kittens  confectionery, AOV +34%
//
// PRESENCE (Master §4): none claimed. REVIEW: 180 days.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_PHILADELPHIA: GeoPage = {
  type: "geo",
  slug: "philadelphia",
  path: "/services/ecommerce-agency/philadelphia",
  hub: "/services/ecommerce-agency",
  status: "published",

  geo: {
    name: "Philadelphia",
    type: "metro",
    areaServed: "Philadelphia",
  },
  archetype: ["A"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency philadelphia",
  secondaryKeywords: [],
  faqKeywords: [
    "how do i get customers to order again",
    "should i offer subscriptions on my store",
    "how do i increase repeat purchases",
    "why do customers only buy once",
    "what does an ecommerce agency do",
    "do you work on woocommerce or magento",
  ],
  reviewedPhrases: ["in Philadelphia"],

  metaTitle: "Ecommerce Agency Philadelphia | Build It, Keep the Customer",
  metaDescription:
    "An ecommerce agency Philadelphia brands hire to build the store and keep the customer. See what 3,142 products showed about how hard stores make buying again.",
  shortTitle: "Ecommerce agency Philadelphia",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Service-led with the differentiator at the end, the shape the owner chose on
  // #28 and #30. Must differ from Chicago's "build, fix and grow the store",
  // Atlanta's "design the store and fix the catalog" and Denver's "when the
  // store outgrew its first build", all on this hub.
  // The headline carries the SERVICES and the rest of the page carries the
  // angle, which is the split the owner picked on #28 and #30. An earlier
  // version ended "to win the second order": he asked what it meant, which is
  // the answer, and it repeated the exact ambiguity he caught on Chicago, where
  // "the order" read as either a purchase or a sequence. It also named a problem
  // in the H1, which would tell a buyer who wants a redesign that this page is
  // not for him. "Build the store" keeps him in; "keep the customer" is the
  // differentiator and takes the accent.
  h1: "Ecommerce agency Philadelphia brands hire to build the store and keep the customer",
  qualifier:
    "Design, build, migration and growth, on whatever your store runs on today. We start where most stores are weakest, which is the customer who has already said yes once.",

  // ONE window, not two, which is a departure from #28-#31 and deliberate: this
  // single page carries BOTH halves of the argument at once. The buying options
  // sit side by side, a one-time purchase next to a repeat order, and directly
  // under them the jar quantities run one, two and four. No other screenshot
  // available added anything to that, and one window renders larger, which has
  // been the recurring complaint since #24.
  // Built by scratchpad/phl32-hero.mjs. New filename each time, never an
  // overwrite: next/image caches per path.
  heroImage: {
    src: "/images/ecommerce-agency-philadelphia-hero-v1.webp",
    alt: "A product page we built for Happy Mammoth where the buying options sit side by side, a one-time purchase next to a repeat order, with the jar quantities underneath running one, two and four, beside cards reading lifetime value up 89% and average order value up 31%",
    cutout: true,
  },

  heroGlow: true,
  heroCtaLabel: "Get in touch with us",
  relatedTone: "white",
  whatWeDoAboutItTone: "cream",
  gradientLayerTone: "white",
  assetBeforeServices: true,

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years building stores" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "{storesBuilt} stores built, and the customers who came back to them.",
    subheading: "Food, supplements, socks. The things people buy on a loop. Whichever ecommerce agency Philadelphia brands you pick, ask what it would change for your second-time buyer.",
  },

  assetCtaLabel: "See what 3,142 products showed",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Somebody finished your product and liked it. They want another one. That should be the easiest sale you will ever make.\n\nSo we looked at 16 stores selling the kind of thing people run out of. Across 3,142 products we checked one question: can the customer who wants more of it get more of it?\n\nOn the middle store, one product in a hundred lets them pick a bigger size. Eight of the sixteen offer it on nothing at all. It is the gap an ecommerce agency Philadelphia brands hire ought to look at before touching the homepage.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Philadelphia brands hire to design, build, move and grow online stores. We work on the platform you are on today. We start with what happens after the first order, because that is where the margin is and where most stores do the least.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Archetype A derived. Master §5.9 gives Philadelphia food and beverage,
  // apparel and pharma-adjacent retail. What those three share is that
  // everything in them is bought again.
  placeLayerHeading: "Everything this city sells, somebody runs out of",
  placeLayer:
    "Philadelphia sells things that get used up. Food and drink, supplements, the socks and shirts that wear through. Almost nothing here is bought once and kept forever.\n\nThat should make the business easy. You are not hunting for a new customer every month, you are serving the same one on a loop. The second sale takes none of the work the first one did.\n\nExcept the store does not know any of that. It greets the returning buyer exactly as it greeted the stranger, which is why an ecommerce agency Philadelphia founders brief tends to find the money sitting here.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "Nobody decided not to let them buy again",
  gradientLayer:
    "**Selling on repeat is something you switch on.** The platform's own documentation is plain about it: adding a recurring purchase option is a thing a merchant sets up deliberately, product by product. It is not a feature that arrives with the store.\n\n**Which means the absence of it is not a limit.** It is a decision nobody got round to making. There was no meeting where somebody decided the repeat buyer should start over each time.\n\n**And it compounds quietly.** Every month the same people re-find the same product, some of them do not bother, and nothing in any report tells you which ones. An ecommerce agency Philadelphia brands trust will go looking for that before it proposes a redesign.",
  gradientFacts: [
    {
      id: "shopify-subscriptions-2026",
      claim:
        "Shopify Help Center, 'Shopify Subscriptions' (help.shopify.com/en/manual/products/purchase-options/shopify-subscriptions), read 6 October 2026. States verbatim: 'Adding subscriptions as a purchase option lets you sell products on a recurring basis.' The page describes subscription plans as something the merchant creates deliberately, setting the recurring frequency and any discount, rather than something present by default. Supports the gradient block's claim that the absence of a repeat option is a decision nobody made rather than a platform limit, and the FAQ on whether to offer subscriptions. LIMITS: this is one platform's documentation and no last-updated date is shown on the page; the page argues only that every platform treats recurring purchase as something switched on, not that they are identical.",
      url: "https://help.shopify.com/en/manual/products/purchase-options/shopify-subscriptions",
      publisher: "Shopify Help Center",
      captured: "2026-10-06",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-second-order-scan-2026",
      claim:
        "Original observation, 6 October 2026. 17 food, drink, supplement and apparel stores were attempted and 16 read, giving 3,142 products from their own public feeds, plus one real product page per store read in a desktop browser at 1440px. Results: products where a bigger size or pack can be chosen on the page itself ran from 0% to 76%, median 1%; 8 of 16 stores offered it on no product at all; 8 of 16 sold bigger packs as separate product listings instead, one carrying 96 such listings and another 72; and of 15 stores whose product pages were read, 11 offered no recurring purchase option. MEASUREMENT NOTES, all of which cost a rewrite: an earlier version matched the option NAME, so apparel brands scored 85-100% for selling shirts in medium, and depth is now judged on option VALUES; an earlier version matched the bare word 'subscribe', which appears in the newsletter form in nearly every footer, so 12 of 16 read 100%, and it now matches only phrases that exist beside a real control such as 'one-time purchase'; and a false zero was caught by hand on a brand carrying an option named 'Count' with values 60, 90 and 120, which a shoe-size rule had read as garment fit. The detector is unit-tested on nine cases before the scan runs. AN EARLIER HYPOTHESIS FOR THIS PAGE WAS DISCARDED ENTIRELY: that stores do not state what products are made of, which returned a median of 100% across 14 stores and was simply untrue. LIMITS: public feeds only; one product page per store; a desktop browser; and a bigger pack sold as its own listing is counted as existing, because it does exist, just not where the buyer is standing.",
      url: "https://www.ecommwizards.com/services/ecommerce-agency/philadelphia",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-10-06",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "What 3,142 products showed about buying it twice",
    intro:
      "Search ecommerce agency Philadelphia and you get four directories, a listicle and a review site, with nobody publishing a measurement. So here is ours. We took 16 stores selling things people run out of and asked one question of every product.",
    renderer: "frequency",
    tone: "cream",
    method: {
      sampleSize: 16,
      window: "17 stores attempted, 16 read, 6 October 2026",
      captured: "2026-10-06",
      howGathered:
        "We read each store's own published product list and checked whether a buyer can choose a bigger size or pack on the product itself. We judged that on the choices offered rather than their labels, because a size on a sock means a fit and a size on a bottle means more of it. Then we opened one real product page on each store to see whether anything could be set up to arrive again. Four limits you should know. Public lists only. One page per store. A desktop browser. And where a bigger pack is sold as its own separate listing we counted it as existing, because it does, just not where you are standing.",
    },
    columns: ["What we counted", "Across the 16 stores"],
    rows: [
      { label: "Products we checked", cells: ["3,142"] },
      { label: "Where a bigger size is on the page, middle store", cells: ["1%"], note: "The best store managed 76%." },
      { label: "Stores offering it on nothing at all", cells: ["8 of 16"] },
      { label: "Stores selling bigger packs as separate listings", cells: ["8 of 16"], note: "So the depth exists. It is just somewhere else." },
      { label: "Most separate pack listings at one store", cells: ["96"] },
      { label: "And at the next one", cells: ["72"] },
      { label: "Stores where nothing can be set to arrive again", cells: ["11 of 15"] },
    ],
    derived:
      "Two different stores can fail the same customer in opposite ways.\n\nThe first kind simply has no bigger size. One pouch, one bottle, one bag, and somebody who gets through it in two weeks has the same four clicks to make as a first-time buyer, every time.\n\nThe second kind is stranger. One store in the set has 96 multipack products and another has 72, so the bigger pack plainly exists. But almost none of them sit on the page you are already looking at. You have to know it exists, leave, and go and find it.\n\nNeither store is badly run. Both built the thing that gets a stranger to buy, which is the hard part, and then stopped.\n\nWhich of the two your store is takes an hour to settle, and any ecommerce agency Philadelphia brands shortlist can do it with you.",
    derivedList: {
      title: "Three things to try on your own store tonight",
      items: [
        "Buy your own best seller, then try to buy it again a week later without using the back button or your order history. Count the clicks.",
        "Look at whether the page you land on offers a bigger size. If it does not, check whether one exists somewhere else on the site.",
        "Ask your team who decided not to offer a repeat option. If nobody can remember deciding, that is the point.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why the second order never gets anyone's attention",
        body:
          "**It does not show up as a problem.** A customer who quietly stops reordering looks identical to one who was never coming back. There is no abandoned anything, no error, nothing to flag.\n\n**And the first order takes all the oxygen.** That is where the ads land, where the landing pages get tested, and where everyone can see the number move.\n\n**So it stays unowned.** Nobody on your team is tasked with it, which is why an ecommerce agency Philadelphia companies retain will usually find the easiest win sitting right here.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Block 6: Service menu (he has not picked a service) ────────────────
  // NO body lines anywhere in this block. types.ts: a body exists only where an
  // assigned secondary keyword has to live, which the owner ruled on
  // 2026-09-05. This row is primary only, so there is nothing to place.
  disciplines: {
    label: "What we do",
    heading: "Take one of these, or the lot",
    intro:
      "Every row links to the store it was done for, and none of it assumes you are starting again. Most brands come for the first and get the most out of the last. Between them they are what an ecommerce agency Philadelphia teams retain gets asked for.",
    items: [
      {
        label: "Design and build",
        heading: "We build the store around the customer who comes back",
        covers: ["Storefront build", "Product pages", "Checkout", "Account area", "Design systems"],
        imageAlt: "A subscription build for the health brand Happy Mammoth",
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Ecommerce development",
        heading: "We make buying it again take one click, not four",
        covers: ["Ecommerce development", "Repeat purchase", "Bundles and sizes", "Integrations", "Support"],
        imageAlt: "A direct to consumer build for the drinks brand VITHIT",
        caseSlug: "vithit-shopify-plus-d2c",
        cta: { label: "Explore ecommerce development", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration",
        heading: "We replatform without giving back the traffic",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Search equity"],
        imageAlt: "A replatforming project for the wellbeing brand This Works",
        caseSlug: "this-works-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Growth",
        heading: "We go after the order nobody is working on",
        covers: ["A/B testing", "Lifetime value", "Email and retention", "Paid landing pages"],
        imageAlt: "Conversion work for the confectionery brand Candy Kittens",
        caseSlug: "candy-kittens-shopify-food-beverage-cro",
        cta: { label: "Explore growth work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "The part that never changes",
    tone: "white",
    intro: "Four of them, whatever you buy. Worth asking every ecommerce agency Philadelphia brands weigh up for the same four.",
    items: [
      {
        title: "We buy from you first",
        body: "Before we propose anything we go through your store as a customer would, twice, and tell you what the second time was like.",
      },
      {
        title: "You get the figure at both ends",
        body: "Whatever we are asked to improve gets measured before we start and after we finish. Both numbers come to you, not a description of them.",
      },
      {
        title: "Nothing is held hostage",
        body: "The code, the accounts and the customer list are yours throughout. If you walk away, none of it stays with us.",
      },
      {
        title: "You agree the work before it starts",
        body: "Scope is signed first. If it has to move once we are in, you hear it from us before anything changes.",
      },
    ],
  },

  // ── Block 7: Where we would start ─────────────────────────────────────
  whatWeDoAboutItHeading: "Where we would start on your store",
  whatWeDoAboutIt:
    "We run the same count on your catalog and put it beside a year of your own orders. That tells you how many of your customers bought once, and whether the ones who came back had to work for it.\n\nUsually a handful of products carry almost all the repeat buying. Those are the ones to fix first, and it is a short list rather than a project.\n\nThen you choose. Put the bigger sizes on the page, or set up a repeat option, or neither if the numbers say your customers genuinely only need one. An ecommerce agency Philadelphia brands keep will tell you which of the three it is.",

  midCta: {
    text: "Want the same count run on your own catalog? Tell us the store and we will send what we find.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure which of the four you need? Tell us about the store and we will name the one we would start on.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The first conversation is about what happens after someone buys. It costs you nothing, including when the answer is that we would change very little.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  proofHeading: "Three brands people buy from twice",
  proof: [
    {
      slug: "happy-mammoth-shopify-subscriptions-cro",
      vertical: "Health and supplements",
      whatWasBuilt: "A subscription and account experience built for people reordering, not browsing",
      outcome: "Lifetime value +89%, subscription revenue +134%, conversion +61%",
      verified: true,
    },
    {
      slug: "vithit-shopify-plus-d2c",
      vertical: "Drinks",
      whatWasBuilt: "A direct to consumer store built around multipacks rather than single bottles",
      outcome: "Revenue +115%, conversion +170%, AOV +31%",
      verified: true,
    },
    {
      slug: "candy-kittens-shopify-food-beverage-cro",
      vertical: "Confectionery",
      whatWasBuilt: "A rebuild around how people actually buy sweets, in quantity and as gifts",
      outcome: "Conversion +182%, AOV +34%, $8.1M new annual revenue",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  objectionsHeading: "Where people push back",
  objections: [
    {
      objection: "Our customers only need one.",
      answer:
        "Then the numbers will show it quickly and we will say so.\n\nWorth checking rather than assuming, though. The stores most sure of it are usually the ones whose repeat rate nobody has looked at in years. It is the first number an ecommerce agency Philadelphia brands meet ought to ask you for.",
    },
    {
      objection: "We tried subscriptions and nobody took them.",
      answer:
        "That happens a lot, and it is usually because the offer arrived before the habit did.\n\nA bigger pack is the easier first step. It asks nothing of the customer except a different click, and it tells you who your repeat buyers are before you build anything for them.",
    },
    {
      objection: "Our store is not on Shopify.",
      answer:
        "That is fine, and it is not the first question we would ask. Every platform treats repeat buying as something you switch on, and every one of them ships without it switched on.\n\nIf moving would help we will tell you, and if not we will tell you that too.",
    },
    {
      objection: "This sounds like a small change.",
      answer:
        "Often it is, and that is the appeal rather than a problem. Putting a bigger size on a page is an afternoon.\n\nThe work is deciding which products deserve one, which needs your order history rather than an opinion. We would rather spend the time there than on the build, and any ecommerce agency Philadelphia brands recommend will spend it there too.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  faqHeading: "What brands ask before they pick anyone",
  faqs: [
    {
      question: "How do I get customers to order again?",
      answer:
        "Make it easier than the first time. Most stores make it identical, so someone coming back to you repeats every step a stranger does, including hunting for the product again.",
      unique: true,
    },
    {
      question: "Why do customers only buy once?",
      answer:
        "Often because nothing invited them back, and buying from you again was no easier than the first time. It rarely shows up as a complaint, which is why it goes unnoticed for years.",
      unique: true,
    },
    {
      question: "Should I offer subscriptions on my store?",
      answer:
        "Only once you know people are already reordering. Start by selling a bigger pack and watch who buys it, then build the subscription for those people rather than guessing.",
      unique: true,
    },
    {
      question: "How do I increase repeat purchases?",
      answer:
        "Three things in order. Put a bigger size on your product page, make reordering take one click, then give people a reason to come back on a schedule.",
      unique: true,
    },
    {
      question: "What does an ecommerce agency do?",
      answer:
        "Four things, broadly. Designs and builds your store. Writes what a theme cannot. Moves it to another platform when it no longer fits. And finds the money the store is leaving behind.",
      unique: true,
    },
    {
      question: "Will you work on a WooCommerce or Magento store?",
      answer:
        "Yes. We work on whatever you are running now. The first question is never the platform, it is what your own order history says about who comes back.",
      unique: true,
    },
    {
      question: "Are you an ecommerce agency Philadelphia brands can work with remotely?",
      answer:
        "Yes, and remote is how all of it runs. There is no office here for you to visit, and none of the work changes because of where either of us sits.",
      unique: true,
    },
    {
      question: "Is a bigger pack just discounting?",
      answer:
        "It does not have to be. Plenty of customers take a larger size at the same unit rate simply to avoid reordering, and you can find that out before deciding anything.",
      unique: true,
    },
    {
      question: "Our developer is staying on. Does that work?",
      answer:
        "Usually, and it is often the quickest route. We can hand them the list and check the result, or take the parts nobody on your team has time for.",
      unique: true,
    },
    {
      question: "How long does this take?",
      answer:
        "Counting your catalog is an afternoon. Putting bigger sizes on the products that deserve them is a week or two, and most of that is deciding which ones.",
      unique: true,
    },
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    // Not "check the second order". Plenty of people jump straight to the form,
    // so this heading has to stand alone without the page's context, which is
    // the same reason the H1 moved off that phrase.
    heading: "Send us your store and we will check it for repeat buyers",
    whatYouGet:
      "We run the same count on your catalog and send back how it reads against the 16.",
    whatWeWillTellYouNotToDo:
      "If your customers genuinely buy once and that is the business, we will say so rather than selling you a subscription nobody wants.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition: "The same count from the table, run on your store.",
      offer: "Put your store address in the form, and you get back:",
      parts: [
        "How many of your products let someone buy a bigger size without leaving the page.",
        "Whether the bigger packs exist somewhere else on your site already.",
        "Which handful of products are worth fixing first, and which to leave alone.",
      ],
      limit: "You get the findings and nothing else attached to them.",
      noObligation: "Free, and nobody chases you afterwards.",
    },
  },

  wordCountTarget: [2000, 2500],
  sources: [],
};
