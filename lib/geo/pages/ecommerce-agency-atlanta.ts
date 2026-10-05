// Batch 1b, page 30: /services/ecommerce-agency/atlanta
// Inventory: Geo Inventory & Batch Plan v4.0, row #30.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce agency atlanta" (10/mo inventory, 40/mo SEMrush,
// KD 12%). Secondaries, four of them, the most any page in the set has carried:
// ecommerce website design atlanta · ecommerce development atlanta · homepage
// design for ecommerce atlanta · full-service ecommerce agencies atlanta.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// "ecommerce agency <city>": he wants an agency and has picked neither the
// PLATFORM nor the SERVICE, so the service menu comes early and nothing in the
// prose assumes what the store runs on.
// BUT THE CLUSTER LEANS DESIGN HARDER THAN ANY CITY SO FAR. Our primary is
// 40/mo; "ecommerce website design agency atlanta" is 140/mo, "ecommerce web
// design agency atlanta" 50/mo, and one assigned secondary is literally
// "homepage design for ecommerce atlanta". The person arriving here thinks the
// store needs to LOOK better. That is what the page has to answer honestly.
//
// ── THE FOCUS, AND TWO CORRECTIONS ──────────────────────────────────────────
// First proposal was a mobile-layout page. It died in validation, see below.
// Second was a page about navigation alone. The owner rejected it the same way
// he rejected the category-page-only draft of #29: too narrow. A person
// shopping for an agency should not land on a page about one section.
// So the claim is whole-store: menus, filters, search and recommendations are
// all generated from the same product data, and a redesign touches none of it.
//
// ── ONE IDEA (20 words) ─────────────────────────────────────────────────────
// Your customer is not moving through a design. They are moving through your
// product data, and nobody wrote it for them.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["G", "B"]. Master §5.9 gives Atlanta "logistics-enabled DTC, beauty, apparel
// ⚠️ AmericasMart trade base", and §5.10 lists Atlanta under both B and G.
// G IS THE ONE THAT EARNS ITS PLACE HERE, and it is not decoration. Atlanta
// brands sell through more than one channel: DTC, wholesale through the trade
// base, retail, marketplaces. That is WHY the product record fills up with
// channel instructions rather than product facts. The scan found exactly that,
// unprompted: internal-order-only, retail-team-only-products,
// omnichannel-only-products, b2b_exclusive:no. The place layer is that finding.
//
// ── WHAT IS ALREADY TAKEN ON THIS HUB ───────────────────────────────────────
// Austin judging value, Boston the three answers before the cart, Chicago
// shipping weights, Dallas what sits behind the storefront, Los Angeles selling
// what is not on the shelf, New York the platform ceiling, San Diego
// subscription law, San Francisco in-house cost, Raleigh the category page and
// load order, Minneapolis product photography.
// THE DALLAS LINE IS THE ONE TO WATCH. Dallas says the storefront is the quick
// part and what takes the TIME is everything behind it: that is about build
// effort. This is about what the CUSTOMER moves through. Different claim,
// different evidence, and the copy stays off build timelines entirely.
// Raleigh #25 is also near the category page, but about what LOADS on it.
// Chicago #29 measured whether category pages carry TEXT. This measures whether
// the data can group the products at all. Three different failures.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 4 October 2026 ────────────────────────────────────────────────────
// From the owner's SEMrush export. Volume 40, KD 12% "very easy", intent
// commercial, CPC $0, competitive density 0.33, and only 44 results in the
// entire SERP, the thinnest in the program.
// WHO RANKS: five of ten are directories (Semrush's own agency list, BuiltIn,
// DesignRush, Sortlist, The Manifest). THREE ARE AGENCY HOME PAGES, not even
// dedicated pages: eastmontdigital, sodawebmedia, m16marketing. Only Barrel
// (barrelny.com/markets/atlanta-ga) and Thrive have built something deliberate.
// Nobody has written a real page for this, which is the opening.
//
// ── SOURCED FACT ────────────────────────────────────────────────────────────
// Shopify's own documentation on smart collections, used because it states the
// MECHANISM plainly: collections assemble themselves from product conditions,
// up to 60 of them. Google's Merchant Center spec was checked first and
// rejected: it marks product_type and google_product_category OPTIONAL, which
// would not support the claim, so it is not cited.
//
// ── ORIGINAL OBSERVATION, 4 October 2026 ────────────────────────────────────
// 26 stores read from their own public product feeds: 9,926 products carrying
// 10,889 distinct tags. Every store read cleanly; nothing was dropped.
//
//   Tags used on exactly ONE product     median 30% (range 3-88)
//   Stores where over half are used once 5 of 26
//   Tags carrying a colon or underscore  median 42% (range 0-100)
//   Products per product type            median 17 (range 1-122)
//
// THE TWO FAILURE MODES ARE OPPOSITE, which is what makes it a finding rather
// than a complaint. One store sorts 486 products into 4 types, and the types
// are Men's, Women's, Unisex and Kids', so a jacket and a sock are the same
// category. Another has 69 types for 77 products, which groups nothing either.
// WHAT THE TAGS ACTUALLY SAY, found when verifying the extremes and the reason
// the page exists: remove-klevu, remove-search, narvar-exclude, YBlocklist,
// exclude_rebuy, internal-order-only, retail-team-only-products,
// influencer-only-products, omnichannel-only-products, clr:burgundy,
// col:26_fw_bl2, col_rank:6, b2b_exclusive:no. Instructions for other software.
//
// MEASURING BY TAG NAME WOULD HAVE BEEN A HEURISTIC and heuristics do not get
// published. "Used on exactly one product" is objective: a tag one product
// carries cannot group anything, whatever the words mean.
//
// THREE IDEAS DIED IN VALIDATION FIRST, recorded so they are not retried:
//   MOBILE LAYOUT. Sideways scroll was 0 on 13 of 14 stores, flat. Fixed-chrome
//     height returned 844px on three stores, which is the whole viewport, so it
//     was catching overlays not headers. The buy button was detected on 1 of 14
//     product pages. Unusable.
//   HOME PAGE SHOPPABILITY. Three stores read zero products AND zero
//     collections while plainly selling both: a URL-structure artifact, not a
//     finding. One store's page height came back as exactly the viewport.
//   PRODUCTS WITH NO TYPE ALONE. Median 0%, so no spread without the other cuts.
// THE PATTERN WORTH KEEPING: in this program, product-feed reads have been
// reliable every time and rendered positional measures never have.
//
// LIMITS, stated on the page: public feeds only, so stores that close theirs
// are absent; one capture date; tags and types are what the feed exposes, and a
// store may hold better categorization in a system it does not publish.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Picked against Atlanta's own verticals, beauty and apparel plus the trade
// base, and avoiding the three the hub page itself uses:
//   111SKIN        beauty, conversion +46%
//   Twillory       apparel, $5.4M added, 70% test win rate
//   Mouldings One  a trade catalog and 340+ trade accounts, the wholesale half
//
// PRESENCE (Master §4): none claimed. REVIEW: 180 days.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_ATLANTA: GeoPage = {
  type: "geo",
  slug: "atlanta",
  path: "/services/ecommerce-agency/atlanta",
  hub: "/services/ecommerce-agency",

  geo: {
    name: "Atlanta",
    type: "metro",
    areaServed: "Atlanta",
  },
  archetype: ["G", "B"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency atlanta",
  secondaryKeywords: [
    "ecommerce website design atlanta",
    "ecommerce development atlanta",
    "homepage design for ecommerce atlanta",
    "full-service ecommerce agencies atlanta",
  ],
  faqKeywords: [
    "why can't customers find products on my store",
    "do i need a redesign or a rebuild",
    "what are product tags for",
    "how do i fix my store navigation",
    "what does an ecommerce agency do",
    "do you work on woocommerce or magento",
  ],
  reviewedPhrases: ["in Atlanta"],

  metaTitle: "Ecommerce Agency Atlanta | Design the Store, Fix the Catalog",
  metaDescription:
    "An ecommerce agency Atlanta brands hire to design the store and fix what runs it. See what 9,926 products showed about why customers cannot find anything.",
  shortTitle: "Ecommerce agency Atlanta",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Service-led, following the owner's choice on #28, but it has to differ from
  // that page's "build, fix and grow the store" since both sit on this hub.
  // Was "...and fix what runs it". Two problems on the rendered page: it wrapped
  // to four lines, and the green accent lands on the last words, which were
  // "runs it". A pronoun and a verb carry no meaning, and "what runs it" is not
  // a thing a brand owner can picture. "The catalog" is a word every one of them
  // uses daily, and the qualifier underneath still carries the full service list
  // so nothing is narrowed.
  h1: "Ecommerce agency Atlanta brands hire to design the store and fix the catalog",
  qualifier:
    "Design, build, migration and growth, on whatever your store runs on today. We will also tell you when a new design is not what is losing you the sale.",

  // Both windows show the GOOD case, which is what the argument asks for: a
  // catalog a customer can actually move through. Mouldings One carries a real
  // category with its own written copy, a breadcrumb, and two separate routes in
  // the menu. On 111SKIN, Shop by Concern is a category built out of product
  // attributes, and the finder turns that same data into one person's route.
  // Built by scratchpad/atl30-hero.mjs. New filename each time, never an
  // overwrite: next/image caches per path.
  // v2: v1 ran the second window off the right edge of the canvas and cut the
  // product shots mid-bottle. Complete, uncut page views, per the #29 lesson.
  heroImage: {
    src: "/images/ecommerce-agency-atlanta-hero-v2.webp",
    alt: "A category page we built for Mouldings One, carrying its own written description and two routes through the catalog in the menu, and a skincare finder we built for 111SKIN that turns the same product data into one person's routine, beside cards reading B2B revenue up 50% and conversion up 46%",
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
    heading: "{storesBuilt} stores built, and the product data under them.",
    subheading: "Beauty, apparel, home. Trade ranges with forty sizes of one thing. Whichever ecommerce agency Atlanta brands you pick, make sure it reads your product data first.",
  },

  assetCtaLabel: "See what 9,926 products showed",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "When you look at your store you see pages somebody designed. A homepage, a product page.\n\nYour customer mostly uses the parts nobody designed. The menu. The filters down the side. What comes back from the search box. Those are built automatically out of the small labels attached to each product.\n\nSo we read 26 stores and counted those labels: 9,926 products carrying 10,889 of them. On the middle store, three in ten were attached to a single product, which means they group nothing at all. That is the part an ecommerce agency Atlanta brands hire should open first.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Atlanta brands hire to design, build, move and grow online stores. We work on the platform you are on today. We start with what is losing the sale, and it is more often the product data than the design.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Archetype G, the trade base. This is not decoration: selling through several
  // channels is WHY the product record fills with channel instructions, which
  // the scan found without being asked to look for it.
  placeLayerHeading: "Your product record is serving four masters",
  placeLayer:
    "Atlanta brands rarely sell one way. There is the store, the wholesale side, the retail accounts, the marketplaces. The same product has to appear in all of them, which is the first thing an ecommerce agency Atlanta founders brief runs into.\n\nSo the product record fills up with instructions for other systems. Hide this from search. Do not send this to that app. Internal orders only. Wholesale, not retail. Every one of those is a sensible note to somebody.\n\nNone of them is a fact about the product. And the store builds your menus and filters out of exactly that field, which is why ecommerce development Atlanta brands pay for has to start under the surface.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "Nobody builds your category pages. They build themselves",
  gradientLayer:
    "**This is the bit most owners have never been told.** A collection on your store is usually not a list somebody wrote. The platform's own documentation describes it plainly: you set conditions, and matching products are included automatically. You can stack up to sixty of them.\n\n**Which means the conditions are the design.** Whoever chose what a product is called, what type it is and what tags it carries decided what your customer can browse, filter and search. That was probably not a designer, and it may not have been a person at all.\n\n**And the same data runs more than the menu.** Search results, related products, the filters on a category page. Redesign the page and all of it carries over unchanged, which is why an ecommerce agency Atlanta brands trust will ask for the catalog before the brief.",
  gradientFacts: [
    {
      id: "shopify-smart-collections-2026",
      claim:
        "Shopify Help Center, 'Legacy smart collections' (help.shopify.com/en/manual/products/collections/automated-collections), read 4 October 2026. States verbatim: 'A smart collection uses selection conditions to automatically include matching products. You can add up to 60 selection conditions, and you can specify whether products need to meet all conditions or any condition to be included in the collection.' Supports the gradient block's claim that collections assemble themselves from product conditions rather than being written by hand, and the FAQ on fixing store navigation. LIMIT: this is one platform's documentation and the page does not claim every platform works identically, only that each one generates these surfaces from product data. CHECKED AND REJECTED as a source: Google's Merchant Center product data specification, which marks both product_type and google_product_category OPTIONAL and so would not support the claim.",
      url: "https://help.shopify.com/en/manual/products/collections/automated-collections",
      publisher: "Shopify Help Center",
      captured: "2026-10-04",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-catalog-labels-scan-2026",
      claim:
        "Original observation, 4 October 2026. 26 beauty, apparel, home, outdoor and food stores were read from their own public product feeds, giving 9,926 shippable products carrying 10,889 distinct tags. Gift cards and digital items were excluded via requires_shipping. Results: tags used on exactly one product ran from 3% to 88% of a store's tags, median 30%, with 5 of 26 stores above half; tags containing a colon or underscore, which is how software namespaces a field and people do not, ran from 0% to 100%, median 42%; products per product type ran from 1 to 122, median 17. The two failure modes are opposite: one store sorts 486 products into 4 types, those types being Men's, Women's, Unisex and Kids', while another carries 69 types for 77 products. Tags observed while verifying the extremes include remove-klevu, remove-search, narvar-exclude, YBlocklist, exclude_rebuy, internal-order-only, retail-team-only-products, omnichannel-only-products, clr:burgundy, col:26_fw_bl2 and b2b_exclusive:no. MEASUREMENT NOTE: tags were NOT classified by what their words appear to mean, which would have been a heuristic; 'used on exactly one product' is objective and carries the same point. LIMITS: public feeds only, so stores that close theirs are absent; one capture date; tags and types are what the feed exposes, and a store may hold better categorization in a system it does not publish. THREE EARLIER IDEAS WERE DISCARDED IN VALIDATION: a mobile layout scan (sideways scroll flat at 0 on 13 of 14 stores, fixed-chrome height returning the full 844px viewport on three, buy button detected on 1 of 14 product pages), a home page shoppability scan (three stores returned zero products and zero collections while plainly selling both, a URL-structure artifact), and products-with-no-type measured alone (median 0%).",
      url: "https://www.ecommwizards.com/services/ecommerce-agency/atlanta",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-10-04",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "What 10,889 labels showed about finding anything",
    intro:
      "Search ecommerce agency Atlanta and you get directories, a few home pages, and nobody publishing a measurement. So here is ours. We read 26 stores from their own public feeds and counted the labels their menus, filters and search are built from.",
    renderer: "frequency",
    tone: "cream",
    method: {
      sampleSize: 26,
      window: "26 stores read, 4 October 2026",
      captured: "2026-10-04",
      howGathered:
        "We read each store's own published product list and counted the type and the tags on every item that ships. Gift cards and digital items were left out. We did not judge a tag by what its words seem to mean, because that would be a guess. A tag on exactly one product cannot group anything, whatever it says. Three limits you should know. Stores that do not publish a product list are missing. It is one day's capture. And a store may hold better categories in a system it does not publish.",
    },
    columns: ["What we counted", "Across the 26 stores"],
    rows: [
      { label: "Products read", cells: ["9,926"] },
      { label: "Distinct labels on them", cells: ["10,889"] },
      { label: "Labels attached to one product only, middle store", cells: ["30%"], note: "They cannot group anything. The worst store was at 88%." },
      { label: "Stores where over half are like that", cells: ["5 of 26"] },
      { label: "Labels written for software, middle store", cells: ["42%"], note: "One store's labels were all like this." },
      { label: "Products per category, middle store", cells: ["17"] },
      { label: "The coarsest store", cells: ["122 per category"], note: "486 products in four: Men's, Women's, Unisex, Kids'." },
      { label: "The finest store", cells: ["1 per category"], note: "69 categories for 77 products groups nothing either." },
    ],
    derived:
      "The two ways to get this wrong are opposites, which is what makes it worth measuring rather than asserting.\n\nOne store sells 486 things and files them under four labels: Men's, Women's, Unisex, Kids'. A jacket and a pair of socks are the same category. No menu can separate them, because the store does not know they are different.\n\nAnother has 69 categories for 77 products. Almost a category each, which groups nothing either. Both stores look fine. Both are impossible to shop past the first click. Either takes a morning to spot, which is why we would rather an ecommerce agency Atlanta brands meet looked before it quoted.\n\nAnd the labels themselves are rarely about the product. The ones we read included instructions to hide an item from search, to keep it out of an app, to show it to staff only. Sensible notes, all of them, sitting in the field your filters are built from.",
    derivedList: {
      title: "Three things to try on your own store tonight",
      items: [
        "Use your own search box the way a customer would. Type the plain word for a thing you sell, not its product name, and see what comes back.",
        "Open a category page and look at the filters. If there are none, or they are the same four on every page, the data behind them is thin.",
        "Open any product in your admin and read its tags out loud. If most of them would mean nothing to a customer, that is the field your store is sorting by.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why a redesign leaves this exactly where it was",
        body:
          "**A redesign changes the surface.** New type, new spacing, new photography, new homepage. Most ecommerce website design Atlanta brands buy is exactly that, and all of it is worth doing when the surface is the problem.\n\n**It does not touch the sorting.** The menu still groups what it grouped before, the filters still filter on the same field, and the search box still looks in the same place. The pages are new and the routes through them are not.\n\n**Which is why the order matters.** Fix what your store knows about your products first, and the redesign has something to work with. Any full-service ecommerce agencies Atlanta brands shortlist should be willing to say that before quoting the design.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Block 6: Service menu (he has not picked a service) ────────────────
  // Per types.ts, a body line appears ONLY where an assigned secondary keyword
  // has to live, which the owner ruled on 2026-09-05. Four secondaries on this
  // page, so two sit here and two sit in the prose above.
  disciplines: {
    label: "What we do",
    heading: "Take one of these, or the lot",
    intro:
      "Every row links to the store it was done for, and none of it assumes you are starting again. Most brands arrive asking for the first one. Between them they are what an ecommerce agency Atlanta companies hire gets asked for.",
    items: [
      {
        label: "Design and build",
        heading: "We design the store around what you actually sell",
        body: "Most homepage design for ecommerce Atlanta brands commission is drawn before anyone has looked at the catalog it has to carry.",
        covers: ["Storefront design", "Homepage", "Product data", "Navigation and filters", "Design systems"],
        imageAlt: "A conversion-led redesign for the skincare brand 111SKIN",
        caseSlug: "111skin-shopify-cro-redesign",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Ecommerce development",
        heading: "We write what the theme was never going to do",
        body: "Catalog structure, integrations and the feeds that carry your products out to other channels.",
        covers: ["Ecommerce development", "Catalog structure", "Integrations", "Performance", "Support"],
        imageAlt: "A trade catalog and ordering portal built for Mouldings One",
        caseSlug: "mouldings-one-shopify-b2b-portal",
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
        heading: "We find what is losing orders and prove the fix",
        covers: ["A/B testing", "Product discovery", "Email and retention", "Paid landing pages"],
        imageAlt: "Conversion testing for the menswear brand Twillory",
        caseSlug: "twillory-shopify-cro",
        cta: { label: "Explore growth work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    // Was "What holds whichever one you buy", which is word for word the H2 on
    // both Chicago pages. Three pages on one hub carrying an identical heading
    // is something a reader moving between them sees, and it feeds the shingle
    // score as well.
    heading: "Four things that do not move",
    tone: "white",
    intro: "They hold whether you buy one job or all four. Put the same list to every ecommerce agency Atlanta brands talk to before you choose.",
    items: [
      {
        title: "We look before we quote",
        body: "We read your catalog first and tell you what we find. If the design really is the problem, we will say so and get on with it.",
      },
      {
        title: "You see the number both ways",
        body: "We take the reading before anyone touches the catalog, and again afterwards. You get both numbers, not an account of them.",
      },
      {
        title: "Nothing is tied to us",
        body: "The code, the accounts and the product data are yours from day one. If you leave, nothing of yours stays behind.",
      },
      {
        title: "Scope is signed before work begins",
        body: "Nothing starts until you have agreed what it is. If it has to change midway, you see that first.",
      },
    ],
  },

  // ── Block 7: Where we would start ─────────────────────────────────────
  whatWeDoAboutItHeading: "What we would do before anything else",
  whatWeDoAboutIt:
    "We run the same count on your catalog and put it beside what your search box gets asked for. Those two lists settle the argument in an afternoon.\n\nIf people search for things you sell and get nothing back, the labels are the job and the design can wait. If they find everything and still leave, the design is the job and we will say so.\n\nEither way you get the answer before you commit, which is the part an ecommerce agency Atlanta brands keep tends to get right.",

  midCta: {
    text: "Want the same count run on your own catalog? Tell us the store and we will send what we find.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure which of the four you need? Tell us about the store and we will name the one we would start on.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The first conversation is about what is actually losing the sale. It costs you nothing, including when the answer is that we would change very little.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  proofHeading: "Three stores, and what changed",
  proof: [
    {
      slug: "111skin-shopify-cro-redesign",
      vertical: "Skincare",
      whatWasBuilt: "A redesign built around how people compare products before buying",
      outcome: "Conversion +46%, revenue +21%, AOV +4%",
      verified: true,
    },
    {
      slug: "mouldings-one-shopify-b2b-portal",
      vertical: "Trade and millwork",
      whatWasBuilt: "A trade catalog and self-service ordering portal over a large product range",
      outcome: "B2B revenue +50%, order processing down 74%, 340+ trade accounts",
      verified: true,
    },
    {
      slug: "twillory-shopify-cro",
      vertical: "Menswear",
      whatWasBuilt: "A testing program run against the pages that decide the sale",
      outcome: "$5.4M new annual revenue, 70% of tests won",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  objectionsHeading: "Where people push back",
  objections: [
    {
      objection: "We came here for a redesign.",
      answer:
        "Then you may well get one, and we build them. This is about the order of work, not a refusal.\n\nWe will read the catalog first because it takes an afternoon and it changes what the design has to do. If it comes back clean, we design and nobody has lost anything. It is the one check an ecommerce agency Atlanta brands hire can run before taking your money.",
    },
    {
      objection: "Our tags are fine, we use them internally.",
      answer:
        "They probably are fine for that, and we would not touch the ones your team relies on.\n\nThe catch is that the same field feeds your menus and filters. Internal notes and customer categories can sit side by side, but only if somebody keeps them apart on purpose.",
    },
    {
      objection: "Our store is not on Shopify.",
      answer:
        "That is fine, and it is not the first question we would ask. Every platform builds its menus and filters out of product data, and every one of them is only as good as what it has to sort.\n\nIf moving would help we will tell you, and if not we will tell you that too.",
    },
    {
      objection: "Our catalog is small, so this will not apply.",
      answer:
        "Often true, and we will say so rather than making work. Under a hundred products you can usually fix this by hand in a week.\n\nIt bites at a few hundred and upwards, and it bites hardest when you add a range, because new products inherit whatever the last ones had. Any ecommerce agency Atlanta brands recommend will tell you where that line falls.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  faqHeading: "What brands ask before they pick anyone",
  faqs: [
    {
      question: "Why can't customers find products on my store?",
      answer:
        "Usually because the store cannot tell your products apart. Menus, filters and search are built from the type and tags on each item, so when those are thin there is nothing to sort by.",
      unique: true,
    },
    {
      question: "Do I need a redesign or a rebuild?",
      answer:
        "Most often neither to begin with. Read the catalog first: if people are searching for things you sell and getting nothing, that is cheaper to fix and it changes what any redesign should look like.",
      unique: true,
    },
    {
      question: "What are product tags for?",
      answer:
        "Two different jobs, which is the problem. They group products for customers, and they also carry instructions for other software. The same field does both on your store, and nobody is told to keep them apart.",
      unique: true,
    },
    {
      question: "How do I fix my store navigation?",
      answer:
        "Start under it, not on it. Work out the categories your customers would look for, give every product one, then build the menu from those. That is where an ecommerce agency Atlanta brands brief starts too.",
      unique: true,
    },
    {
      question: "What does an ecommerce agency do?",
      answer:
        "Four things, broadly. Designs and builds your store. Writes the parts a theme leaves out. Moves it to another platform when it stops fitting. And finds what stops people buying.",
      unique: true,
    },
    {
      question: "Will you work on a WooCommerce or Magento store?",
      answer:
        "Yes. We work on whatever you are on now. Every platform builds its menus out of product data, so the first job is reading yours rather than reading the admin.",
      unique: true,
    },
    {
      question: "Are you an ecommerce agency Atlanta brands can work with remotely?",
      answer:
        "Yes, and remote is how the whole thing runs. There is no office here for you to visit. None of the work changes because of where either of us sits.",
      unique: true,
    },
    {
      question: "How long does this take to fix?",
      answer:
        "Reading your catalog is an afternoon. Sorting a few hundred products takes a week or two, and most of that is deciding the categories, not typing them in.",
      unique: true,
    },
    {
      question: "Our developer is staying on. Is that awkward?",
      answer:
        "Usually, and often it is the quickest route. We can hand them a plan and check the result, or take the parts nobody on your team has time for.",
      unique: true,
    },
    {
      question: "What if the design really is the problem?",
      answer:
        "Then we design it, and we will have told you so in the first week. We would rather be the people who checked than the people who sold you a redesign that changed nothing.",
      unique: true,
    },
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    heading: "Send us your store and we will count the labels",
    whatYouGet:
      "We run the same count on your catalog and send back what we find against the 26.",
    whatWeWillTellYouNotToDo:
      "If your catalog is in good order we will say so, not find you something to buy. Then we will talk about the design instead.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition: "The same count from the table, run on your store.",
      offer: "Put your store address in the form, and you get back:",
      parts: [
        "How many of your labels are attached to a single product.",
        "How many products sit in your biggest category, and whether that category means anything.",
        "Which of the two is worth fixing first, and whether a redesign would have touched it.",
      ],
      limit: "You get the findings and nothing else attached to them.",
      noObligation: "Free, and nobody chases you afterwards.",
    },
  },

  wordCountTarget: [2000, 2500],
  sources: [],
};
