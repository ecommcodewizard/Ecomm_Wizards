// Batch 1b, page 28: /services/ecommerce-agency/chicago
// Inventory: Geo Inventory & Batch Plan v4.0, row #28.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce agency chicago" (10/mo inventory, 20/mo SEMrush,
// KD 7%). Secondaries: ecommerce development chicago · ecommerce website design
// chicago · ecommerce custom web development chicago.
//
// ── HOW THE FOCUS WAS CHOSEN, AND A CORRECTION ──────────────────────────────
// This page took several passes to aim, and the record matters because the
// first attempts were wrong in an instructive way.
// I began by hunting for things that could be MEASURED and then bending an
// angle onto whatever survived. The owner stopped that and restated the
// standard: start from the keyword, work out what the person typing it wants,
// and let the page grow from there. He was right.
// I then asked which of Chicago's three verticals the page should serve. That
// was also wrong, and he caught it: picking one would have told the other two
// to leave, which Step 04 rule 2 forbids. Minneapolis #26 has exactly that
// weakness and it is the narrowest page in the set.
// THE RULE THIS PAGE FOLLOWS: the vertical is where we MEASURE. It is not who
// the page is FOR. The sample is food, drink, home and furniture because those
// are Chicago's verticals; the finding is true of any store that ships a
// physical thing, and the copy is written so nobody reads a line telling them
// to leave.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// "ecommerce agency <city>": he wants an agency and has picked neither the
// PLATFORM nor the SERVICE. So the service menu comes early and nothing in the
// prose assumes what the store runs on.
// Why he typed the city at all: for a business selling nationally, Chicago does
// not change the work. Typing it is a trust behaviour. That is also why this
// SERP carries a local pack, a reviews feature and four directories.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["D"], density-led, which Master §5.10 assigns to Chicago outright. Its
// canonical block is "what you're up against", a teardown of the local
// category. Neither New York nor Los Angeles, the other two D cities, actually
// used that angle, so it was free.
// Master §5.9 gives Chicago food and beverage, home goods and industrial B2B.
// What those three share, and what apparel does not, is that everything they
// sell is HEAVY. That is the page.
//
// ── ONE IDEA (17 words) ─────────────────────────────────────────────────────
// The top reason a cart is abandoned is the shipping cost. Most stores cannot
// work out what it is.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// ── WHAT IS ALREADY TAKEN ───────────────────────────────────────────────────
// On this hub: Austin judging value, Boston the three answers before the cart,
// Dallas what sits behind the storefront, Los Angeles selling what is not on
// the shelf, New York the platform ceiling, San Diego subscription law, San
// Francisco in-house cost, Raleigh the category page and load order,
// Minneapolis product photography.
// THE BOSTON LINE IS THE ONE TO WATCH. Boston #23 measures whether a store
// TELLS a customer the shipping figure. This measures whether the store can
// WORK OUT the figure at all. Different failure, different fix, and the copy
// stays off disclosure entirely.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 1 October 2026 ────────────────────────────────────────────────────
// From the owner's SEMrush export, since my own live search has now returned
// the wrong ranking set in four consecutive markets.
// Competitive density 0.89, the highest of any keyword in the programme so far
// (Raleigh 0, Minneapolis 0.33), which is itself the density signal archetype D
// is built on. Only 163 results. Features: reviews and a local pack.
//
// Seven of nine readable. Sections: case studies 4/7, team 4/7, certifications
// 3/7, pricing 3/7, process 2/7, industries 2/7.
// MEASUREMENT PUBLISHED: 0 of 7. Nine markets running.
// THE REAL AGENCY PAGES ARE TINY: 215, 449 and 586 words. The only long pages
// are directories and listicles at 1,793 to 3,011.
// A USEFUL ACCIDENT: the page ranking first is a directory listing Chicago's
// top ecommerce companies, and the names on it are Grainger, McMaster-Carr and
// Zoro. Chicago's ecommerce identity is heavy industrial distribution, which is
// what pointed at weight in the first place.
//
// ── SOURCED FACT ────────────────────────────────────────────────────────────
// Baymard Institute on why carts are abandoned at checkout. Carrier
// documentation would have been the better second source, but UPS and FedEx
// both refuse automated access, and third-party fulfilment blogs are not a
// standard worth publishing against.
//
// ── ORIGINAL OBSERVATION, 1 October 2026 ────────────────────────────────────
// 36 stores attempted, 31 read, 81,252 shippable items. The largest sample in
// the programme. Read from each store's own public product feed.
//
//   Items with no weight recorded          34,029 of 81,252 (42%)
//   Median store's share missing           17%
//   Stores missing more than half          8 of 31
//   Stores missing nothing                 5 of 31
//   Worst store                            1,539 of 1,539
//   Catalogs whose middle item is 10kg+    6
//   Of those six, missing most of theirs   4
//
// THE CONTRAST IS THE FINDING: one store sells items averaging 91kg and has
// weighed 5% of them. Another sells 24,090 items averaging 14kg and has weighed
// 12%. Two others, at 89kg and 68kg, have weighed essentially everything. The
// heavier the thing, the more the weight matters, and it is no more likely to
// be there.
//
// TWO BUGS WERE CAUGHT IN VALIDATION, recorded so they are not repeated. The
// field in a product feed is `grams`, not `weight`, and checking the wrong name
// produced a spectacular and entirely false "100% of every store". And gift
// cards and digital items correctly carry no weight; excluding anything with
// requires_shipping false moved two stores by more than thirty points. Both
// were caught before any number reached this file.
//
// LIMITS, stated on the page: this counts whether a weight is recorded, not
// whether it is accurate; stores whose feed is closed are absent; one capture
// date; and a store may hold weights somewhere its public feed does not show.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// All three land on checkout and delivery rather than being generically strong:
//   Henchman  its checkout was rebuilt to show delivery options up front,
//             "reducing drop-off from trade buyers"
//   NEOM      checkout conversion up 34% across three regions
//   Dryrobe   checkout completion up 23% with international shipping logic
//
// PRESENCE (Master §4): none claimed. REVIEW: 180 days.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_CHICAGO: GeoPage = {
  type: "geo",
  slug: "chicago",
  path: "/services/ecommerce-agency/chicago",
  hub: "/services/ecommerce-agency",

  geo: {
    name: "Chicago",
    type: "metro",
    areaServed: "Chicago",
  },
  archetype: ["D"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency chicago",
  secondaryKeywords: [
    "ecommerce development chicago",
    "ecommerce website design chicago",
    "ecommerce custom web development chicago",
  ],
  faqKeywords: [
    "why is my shipping cost wrong at checkout",
    "do i need product weights for shipping",
    "should i offer free shipping",
    "why do customers abandon the cart",
    "what does an ecommerce agency do",
    "do you work on woocommerce or magento",
  ],
  reviewedPhrases: ["in Chicago"],

  metaTitle: "Ecommerce Agency Chicago | Design, Build and Grow the Store",
  metaDescription:
    "An ecommerce agency Chicago brands hire to design, build and grow the store. See what we found across 81,252 products about the weights nobody fills in.",
  shortTitle: "Ecommerce agency Chicago",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // The H1 stays on the SERVICE, not the finding. Step 01: on "ecommerce agency
  // <city>" he has picked neither platform nor service, so narrowing the H1 to
  // shipping would ask a buyer who wants a redesign to self-select out, which
  // Step 04 rule 2 forbids. An earlier H1 ended "when shipping decides the
  // order", which also read two ways: a purchase, or a sequence.
  // So the H1 carries the breadth and the qualifier carries the differentiator.
  h1: "Ecommerce agency Chicago brands hire to build, fix and grow the store",
  qualifier:
    "On whatever your store runs on today. We start with what is actually losing orders, and that is more often the shipping line than the homepage.",

  // The two halves of the argument: a catalog of heavy things, and the moment
  // the delivery figure decides the order. Henchman sells ladders, which is
  // about as literal as "a carrier bills by weight" gets; NEOM's cart carries
  // the away-from-free-shipping bar. Cropped above Henchman's price row, which
  // is in pounds and would read oddly here.
  // Built by scratchpad/chicago28-hero.mjs. New filename each time, never an
  // overwrite: next/image caches per path.
  heroImage: {
    // v4. v3 laid the three pieces out in an L with a hole in the middle: the
    // Henchman crop is a short wide strip, not the tall product page the
    // inherited offsets were built around, so the cards sat marooned in empty
    // space and the cart window hung off the bottom-right corner. v4 overlaps
    // the cart onto the Henchman window and lines the cards' bottom edge up
    // with it, so it reads as one group.
    src: "/images/ecommerce-agency-chicago-hero-v4.webp",
    alt: "A ladder collection page we built for Henchman listing 97 products, and a cart we rebuilt for NEOM showing how far the order is from free shipping, with online revenue up 58% and checkout conversion up 34%",
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
    heading: "{storesBuilt} stores built, and the checkouts inside them.",
    subheading: "Light things and heavy things, on the platform you are on now or the one you move to. We do it as an ecommerce agency Chicago brands use remotely, which is how nearly all of it happens now.",
  },

  assetCtaLabel: "See what 81,252 items showed",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "The single biggest reason a full cart gets abandoned is the cost of getting the thing to the door. Not the price of the thing. The delivery.\n\nWhich makes it worth asking whether your store can work that cost out. So we looked at 81,252 items across 31 catalogs and checked something simple: does the store know what each one weighs?\n\nFor 34,029 of them, no. Four in every ten things these stores sell have no weight recorded at all, and a carrier bills by weight. On your store it is the first thing we would open, which is not where an ecommerce agency Chicago brands hire usually begins.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Chicago brands hire to design, build, move and grow online stores. We work on the platform you are on today. We start with what is losing you orders, which is often nearer the checkout than the storefront.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Archetype D, "what you're up against", assigned to Chicago by Master §5.10.
  // The density here is the delivery expectation set by people selling things
  // that weigh nothing.
  placeLayerHeading: "You are competing with people who sell air",
  placeLayer:
    "Chicago makes and ships heavy things. Food and drink, furniture, parts for other people's machines. Cases, pallets, boxes that two people carry.\n\nAnd your customer's idea of normal delivery was set somewhere else, by companies shipping paperbacks and t-shirts for nothing. They are not comparing you to another furniture brand. They are comparing you to the last parcel that turned up free.\n\nThat is the squeeze. Any ecommerce agency Chicago founders hire meets it on the first call, which is why we would open your shipping setup before your homepage.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "The cart is lost at the delivery line, not the price",
  gradientLayer:
    "**People do not leave because the product costs too much.** The research on abandoned carts puts one reason at the top: extra costs being too high, counting shipping, tax and fees. It beats every other reason on the list.\n\n**Which means the delivery figure is doing a lot of work.** It is the last number a customer sees before deciding, and it arrives after they have already chosen what they want.\n\n**And a store can only charge what it can calculate.** Live carrier rates need a weight on every item. Without one the store falls back to a flat figure. A flat figure is wrong twice: too low on the heavy orders, which you pay for, and too high on the small ones, which you lose. Any ecommerce agency Chicago brands trust should be able to tell you which of those is happening to you.",
  gradientFacts: [
    {
      id: "baymard-cart-abandonment-2026",
      claim:
        "Baymard Institute, 'Cart Abandonment Rate Statistics' (baymard.com/lists/cart-abandonment-rate), read 1 October 2026. Of the reasons given for abandoning a cart during checkout, excluding respondents who were only browsing, the leading reason is 'Extra costs too high (shipping, tax, fees)' at 40%. Supports the first paragraph of the gradient block and the FAQ on why customers abandon the cart. LIMIT: the page states the figure comes from Baymard's latest quantitative study of abandonment reasons but does not publish the sample size or field date alongside this breakdown, so only the capture date is recorded here.",
      url: "https://baymard.com/lists/cart-abandonment-rate",
      publisher: "Baymard Institute",
      captured: "2026-10-01",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-product-weight-scan-2026",
      claim:
        "Original observation, 1 October 2026. 36 food, drink, home and furniture stores were attempted and 31 read, giving 81,252 shippable variants, each store from its own public product feed. Only variants that actually ship were counted; anything flagged as not requiring shipping was excluded. Results: 34,029 of 81,252 shippable items (42%) had no weight recorded; the median store was missing 17%; 8 of 31 stores were missing more than half; 5 of 31 were missing none; the worst store was missing all 1,539 of its shippable items. Of the 6 catalogs whose median item weighs 10kg or more, 4 were missing most of their weights, including one whose median item is 91kg and which had weighed 5% of its catalog, and one with 24,090 items averaging 14kg which had weighed 12%. Two others, at 89kg and 68kg medians, had weighed essentially everything. LIMITS: this records whether a weight exists, not whether it is accurate; stores whose product feed is closed are absent; one capture date; and a store may hold weights in a system its public feed does not expose. TWO BUGS WERE CAUGHT BEFORE PUBLICATION: the feed field is 'grams' rather than 'weight', and checking the wrong name returned a false 100% for every store; and gift cards and digital items correctly carry no weight, so excluding them moved two stores by over thirty points.",
      url: "https://www.ecommwizards.com/services/ecommerce-agency/chicago",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-10-01",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "What 81,252 things told us about what they weigh",
    intro:
      "Search ecommerce agency Chicago and not one page that comes back has a measurement on it, so here is ours. We read 31 catalogs of food, drink, home goods and furniture and checked every item that actually ships for one thing: whether anyone had recorded what it weighs. On a single store it takes an afternoon.",
    renderer: "frequency",
    tone: "cream",
    method: {
      sampleSize: 31,
      window: "36 stores attempted, 31 read, 1 October 2026",
      captured: "2026-10-01",
      howGathered:
        // Trimmed to pay for the Migration and Growth copy. Safe to shorten:
        // nothing renders this field, so no reader loses anything, and the full
        // method and limits survive in gradientFacts below. It is still charged
        // to the word budget and the shingle set, which is the bug flagged in
        // the 2026-10-01 review and not yet fixed.
        "We read each store's published product list and checked every shipping item for a recorded weight, leaving out gift cards and digital items. Four limits you should know. It records whether a weight exists, not whether it is right. Stores with no public list are absent. It is one day's capture. And a store may keep weights its list does not show.",
    },
    columns: ["What we counted", "Across the 31 catalogs"],
    rows: [
      { label: "Items we checked that actually ship", cells: ["81,252"] },
      { label: "With no weight recorded", cells: ["34,029, or 42%"] },
      { label: "The middle store's share missing", cells: ["17%"] },
      { label: "Stores missing more than half", cells: ["8 of 31"] },
      { label: "Stores missing none at all", cells: ["5 of 31"], note: "So it is plainly doable." },
      { label: "The worst store", cells: ["1,539 of 1,539"] },
      { label: "Catalogs whose middle item is over 10kg", cells: ["6"] },
      { label: "Of those six, missing most of theirs", cells: ["4"], note: "One sells items averaging 91kg and has weighed 5% of them." },
    ],
    derived:
      "You would expect the heavy catalogs to be the careful ones. They are not.\n\nOf the six catalogs where the middle item weighs more than ten kilos, four are missing most of their weights. One of them sells things averaging ninety one kilos and has weighed one item in twenty. Another has 24,090 items averaging fourteen kilos and has weighed one in eight.\n\nThe other two weighed everything. Same product, same kind of catalog, opposite result, which tells you this is a habit rather than a hard problem. Five of the 31 had nothing missing at all.\n\nAn hour will tell you which group your catalog is in, and any ecommerce agency Chicago brands shortlist can do it.",
    derivedList: {
      title: "Three things to check before you blame the courier",
      items: [
        "Open the last ten products somebody added and look for a weight on each. New products are where it slips.",
        "Check what your store does when the weight is blank. Most treat it as nothing, so the rate comes back too cheap and you pay the difference.",
        "Put one heavy item and one light item through your own checkout. If they quote the same delivery, you are on a flat rate and it is costing you at one end or the other.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why flat rate is a symptom and not a decision",
        body:
          "**Almost nobody chooses it.** Stores end up on a flat delivery figure because the data for anything better was never there, and it at least works.\n\n**It costs you at both ends.** The orders that are heavier than your average eat the difference, and the small orders get quoted a figure that talks the customer out of it.\n\n**And it hides.** Neither loss shows up as a line anywhere, which is why this runs for years. Both halves sit in your own order history, which is the first place an ecommerce agency Chicago brands keep will look.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Block 6: Service menu (he has not picked a service) ────────────────
  disciplines: {
    label: "What we do",
    // Was "Build it, fix it, move it, or push it further", which started
    // echoing the H1 once that moved to "build, fix and grow the store". The
    // heading now carries the permission to buy one thing, so the intro drops
    // the line that used to do it.
    heading: "Four jobs, and you can take just one",
    intro:
      "Every row links to the store it was done for, and none of it assumes you are starting again. Between them they are what an ecommerce agency Chicago companies hire is asked for.",
    items: [
      {
        label: "Design and build",
        heading: "We build the checkout as carefully as the shop front",
        body: "Most ecommerce website design Chicago brands pay for stops at the storefront. The last three screens are where the orders are won.",
        covers: ["Storefront build", "Product data", "Checkout", "Delivery options", "Design systems"],
        // The image here is the Henchman case-study poster, a photograph of a
        // man in a field, not a screenshot. The alt used to say it showed
        // "delivery options up front", which described the project rather than
        // the picture. Siblings use a plain label, so this does too.
        imageAlt: "A trade ordering build for the tool brand Henchman",
        caseSlug: "henchman-shopify-plus-b2b",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Ecommerce development",
        heading: "We write the shipping logic a theme has no opinion about",
        body: "Shipping logic, product data and integrations are where ecommerce custom web development Chicago brands actually need help.",
        covers: ["Ecommerce development", "Shipping and tax logic", "Integrations", "Performance", "Support"],
        imageAlt: "A multi-region store we rebuilt for the wellbeing brand NEOM",
        caseSlug: "neom-wellbeing-shopify-upgrade",
        cta: { label: "Explore ecommerce development", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration",
        heading: "We replatform without giving back the traffic",
        // Items 3 and 4 had no body, so they rendered as a heading, some tags
        // and a button with a visible gap underneath. The two that did have one
        // had it only because a secondary keyword needed somewhere to live,
        // which is the structure being driven by the wrong thing. These two
        // carry no keyword and are here for the reader.
        body: "The design gets the attention. The redirect map is what decides whether the rankings you already have survive the move.",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Search equity"],
        imageAlt: "A replatforming project for the wellbeing brand This Works",
        caseSlug: "this-works-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Growth",
        heading: "We work out where the money leaks, then prove the fix",
        body: "We would rather find the one thing worth fixing than hand you a list of twenty.",
        covers: ["A/B testing", "Checkout and delivery", "Email and retention", "Paid landing pages"],
        imageAlt: "Checkout work for the outdoor apparel brand Dryrobe",
        caseSlug: "dryrobe-shopify-plus-redesign",
        cta: { label: "Explore growth work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "What holds whichever one you buy",
    tone: "white",
    intro: "These four do not change with the size of the job. Worth putting the same list to every ecommerce agency Chicago brands talk to before you choose one.",
    items: [
      {
        title: "We work on what you run today",
        body: "Everything is measured against the store you have. If replacing it is not the answer, we say so and name what is.",
      },
      {
        title: "You see the number both ways",
        body: "We weigh the problem before we touch it, then weigh it again after. You get both numbers, not a write-up of them.",
      },
      {
        title: "Nothing is tied to us",
        body: "The code, the accounts and the carrier logins stay in your name. Walk away and nothing of yours sits with us.",
      },
      {
        title: "Scope is signed before work begins",
        body: "If the job has to change, you see the change and agree to it before anyone starts.",
      },
    ],
  },

  // ── Block 7: Where we would start ─────────────────────────────────────
  whatWeDoAboutItHeading: "Where we would start on your catalog",
  whatWeDoAboutIt:
    "We run the same count on your catalog and put it next to a year of your orders. That shows two things: how many items have no weight, and what your flat rate has been costing you on the heavy ones.\n\nUsually the second number is the surprise. It is not a figure anyone reports, so it just sits there.\n\nThen you get the choice. Fill the gaps and switch to live rates, which is a few weeks of catalog work. Or leave them and set the flat rate against what your orders actually weigh, which is the honest answer at low volumes. Any ecommerce agency Chicago brands hire should be willing to recommend the second one when it is right.",

  midCta: {
    text: "Want the same count run on your own catalog? Tell us the store and we will send what we find.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure which of these four applies? Tell us about the store and we will name the one we would start on.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The first conversation is about what is actually losing orders. It costs you nothing, including when the answer is that we would change very little.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  proofHeading: "Checkouts we rebuilt, and what changed after",
  proof: [
    {
      slug: "henchman-shopify-plus-b2b",
      vertical: "Tools and equipment",
      whatWasBuilt: "A trade checkout that shows delivery options up front, with wholesale ordering behind it",
      outcome: "Online revenue +58%, wholesale order processing down 70%",
      verified: true,
    },
    {
      slug: "neom-wellbeing-shopify-upgrade",
      vertical: "Wellbeing",
      whatWasBuilt: "One store serving three regions, with shipping and currency handled per market",
      outcome: "Checkout conversion +34%, order volume +10%",
      verified: true,
    },
    {
      slug: "dryrobe-shopify-plus-redesign",
      vertical: "Outdoor apparel",
      whatWasBuilt: "A rebuilt storefront and checkout with international shipping logic behind it",
      outcome: "Checkout completion +23%, online revenue +89%, return rate down 31%",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  objectionsHeading: "Where people push back",
  objections: [
    {
      objection: "We just offer free shipping.",
      answer:
        "Then you are paying for it, which is fine if you know what it is costing.\n\nMost stores offering it cannot separate the orders where it works from the ones where it does not, because the weights are not there to do it with. That is the same gap, hidden on your side of the ledger instead of the customer's.",
    },
    {
      objection: "Our shipping is set up already.",
      answer:
        "It probably is, and it may well be fine. Five of the 31 catalogs we read had nothing missing.\n\nThe quick test is in your own admin. Open the last ten products anyone added and see whether each has a weight. New products are where it slips, and those ten will show you more than any ecommerce agency Chicago brands meet can in a first call.",
    },
    {
      objection: "Our store is not on Shopify.",
      answer:
        "That is fine, and not the first question we would ask. Every platform needs the same thing to quote you a real rate, and every one falls back to a flat figure without it.\n\nIf moving would help we will say so, and if not we will say that too.",
    },
    {
      objection: "This sounds like a small problem.",
      answer:
        "On a light catalog it often is, and we will tell you so rather than making work.\n\nOn a heavy one it is not. The store in our count with the heaviest products had weighed one item in twenty, so every order it ships is quoted from a guess. We found that in one read of a public product list, and an ecommerce agency Chicago brands recommend will find yours as fast.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  faqHeading: "What brands ask before they pick anyone",
  faqs: [
    {
      question: "Why do customers abandon the cart?",
      answer:
        "More often than anything else, because the extra costs are too high once shipping, tax and fees are added. It beats every other reason, and it lands after they have already chosen what they want from you.",
      unique: true,
    },
    {
      question: "Do I need product weights for shipping?",
      answer:
        "For any rate that comes from a carrier, yes. Without a weight your store cannot ask for a real quote, so it falls back to a flat figure. In our count, 42% of items had none.",
      unique: true,
    },
    {
      question: "Why is my shipping cost wrong at checkout?",
      answer:
        "Usually because the weight is missing and your store treats blank as nothing. The rate comes back too cheap, the customer is delighted, and you pay the difference to the carrier without seeing it.",
      unique: true,
    },
    {
      question: "Should I offer free shipping?",
      answer:
        "Sometimes, and the honest answer needs numbers you may not have yet. You need to know what each order actually costs to send before you can decide which ones you can afford to absorb.",
      unique: true,
    },
    {
      question: "How long does ecommerce development Chicago brands commission usually take?",
      answer:
        "Filling in missing product data and switching to live rates is a few weeks. A full build is months, and most of that goes on the parts nobody demos, like your product data and the systems it talks to.",
      unique: true,
    },
    {
      question: "What if we are on WooCommerce or Magento?",
      answer:
        "Yes. We work on whatever your store runs on now. The first job is finding out whether the platform is the problem or something sitting on top of it, and often it is not the platform.",
      unique: true,
    },
    {
      question: "What is an ecommerce agency actually for?",
      answer:
        "Four jobs, broadly. Making your store look and move the way a buyer expects. Writing the parts a theme leaves out. Carrying it onto another platform when it no longer fits. And finding what stops people buying.",
      unique: true,
    },
    {
      question: "Are you an ecommerce agency Chicago brands can work with remotely?",
      answer:
        "Yes, and that is how all of it runs. There is no office here for you to drop into. Where you sit changes nothing about how the work is scoped or handed over.",
      unique: true,
    },
    {
      question: "Our developer is staying. Does that get in the way?",
      answer:
        "Usually not, and often it is the quickest route. We can write the spec and check the result, or take what nobody on your team has time for. We will not quietly replace somebody doing a decent job.",
      unique: true,
    },
    {
      question: "Does this mean rebuilding everything?",
      answer:
        "Rarely. Product data and shipping rules are fixable without touching the rest of the site. We will say when a rebuild is really the answer, and it is less often than you think.",
      unique: true,
    },
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    heading: "Send us your store and we will count it",
    whatYouGet:
      // Also unrendered. Reworded off "the store address is enough", which
      // contradicted the form, and shortened for the same reason as above.
      "We check your catalog the way we checked the 31 and tell you how many of your items have no weight.",
    whatWeWillTellYouNotToDo:
      "If your catalog is in good shape we will say so rather than finding you something to buy. Five of the 31 we read needed nothing at all.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition: "The same count we ran on 81,252 items, run on yours.",
      // Was "One store address, and you get back:". The form next to this asks
      // for name, work email, company, website and a budget range, so promising
      // that one field is enough sets the reader up to feel switched on. Boston
      // already words it this way: point at the form rather than undercut it.
      offer: "Put your store address in the form, and you get back:",
      parts: [
        "How many of your shippable items have no weight recorded.",
        "Whether the gaps are in old products or the ones added last month.",
        "What switching to real carrier rates would take, and whether it is worth it at your volume.",
      ],
      limit: "You get the findings and nothing else attached to them.",
      noObligation: "Free, and nobody chases you afterwards.",
    },
  },

  sources: [],

  // Owner's standing instruction for these pages: below 2,500 words.
  wordCountTarget: [2000, 2500],
};
