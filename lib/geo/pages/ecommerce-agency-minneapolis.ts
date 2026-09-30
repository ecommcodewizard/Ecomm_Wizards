// Batch 1b, page 27: /services/ecommerce-agency/minneapolis
// Inventory: Geo Inventory & Batch Plan v4.0, row #27. PRIMARY ONLY.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce agency minneapolis" (10/mo, inventory).
// NO SEMRUSH EXPORT for this term. The owner supplied one for rows #24, #25
// and #26, and in all three my own live search returned the wrong ranking set.
// The SERP notes below are therefore from my own teardown and should be
// treated as provisional until an export confirms them.
//
// ── ARCHETYPE: DERIVED, AND DIFFERENT FROM #26 ──────────────────────────────
// Master §5.10 assigns Minneapolis no archetype at all. Row #26 derived A,
// vertical-led on apparel, so §5.10's rule ("two pages for the same metro use
// different archetype emphasis") forces a different one here.
// Derived as G, B2B-led, which Master defines on a "wholesale and trade base".
// Minneapolis is retail-heritage country, the city's vertical still free after
// #26 took apparel, and a brand that grew up selling INTO shops is a wholesale
// business first. That origin is the place layer, and what it did to the
// product pages is the spine.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// "ecommerce agency <city>": the PLATFORM IS OPEN. He may be on Shopify, on
// something else, or on nothing.
// IMPORTANT DIFFERENCE FROM #26: that page leads on being a Shopify specialist,
// because its reader had already chosen Shopify. THAT ANGLE IS FORBIDDEN HERE.
// Saying "we only do Shopify" to a reader who may be on WooCommerce or Magento
// shuts out a buyer, which Step 04 rule 2 forbids. Nothing in the prose below
// assumes a platform.
// He has also not picked a service, so the menu comes early.
//
// ── ONE IDEA (13 words) ─────────────────────────────────────────────────────
// Your photography was built for a shelf. A product page is not a shelf.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// H1 is the owner's pick from a menu of four (option D, the broad one). He was
// told it commits to less than the other three and chose it anyway; recorded so
// it is not quietly changed later.
//
// ── WHAT IS ALREADY TAKEN ───────────────────────────────────────────────────
// On this hub: Austin owns judging value by a number, Boston the three answers
// before the cart, Dallas what sits behind the storefront, Los Angeles selling
// what is not on the shelf, New York the platform ceiling, San Diego
// subscription law, San Francisco in-house cost, Raleigh the category page and
// load order. Elsewhere: Boston #22 owns product-page TEXT hidden behind a
// click, which is why this page is about whether there is anything to LOOK at,
// not about what is written. Minneapolis #26 owns the state clothing tax rule.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 1 October 2026 (PROVISIONAL, see note above) ──────────────────────
// Seven URLs, six readable. Section frequency: pricing 5/6, case studies 4/6,
// certifications 3/6, team 3/6, industries 2/6, guarantees 1/6.
// MEASUREMENT PUBLISHED: 0 of 6. That is now seven markets running.
// Five of six sell three or more platforms and only one is single-platform,
// the same shape as #26. Unusable here for the reason given above.
//
// ── SOURCED FACTS ───────────────────────────────────────────────────────────
// Google's merchant listing structured data spec, read 1 October 2026: the
// image property is REQUIRED, and Google recommends multiple high-resolution
// images at three aspect ratios. Both halves matter: the 30 products in our
// scan with no image cannot appear at all, and the 1,322 with fewer than three
// sit below Google's own recommendation.
//
// ── ORIGINAL OBSERVATION, 1 October 2026 ────────────────────────────────────
// TWO CANDIDATES WERE TESTED AND DROPPED FIRST. Recorded so they are not
// retried.
//   CATALOG REACHABILITY, products in a feed but in no collection. Invalid: the
//   product feed caps and only part of the collection list was read, so one
//   store returned MORE products inside collections than its feed contained.
//   The 47% and 49% it produced were sampling artifacts. Caught before it
//   reached a page.
//   VARIANT IMAGE COVERAGE, color choices with no photo of their own. Worked
//   mechanically but came back 0 to 12%, too thin to publish.
//
// WHAT HELD: every figure below is the length of an array in a store's own
// product feed. Nothing is sampled, so nothing can be sampled wrong.
// 34 apparel and home stores attempted, 26 read, 10,301 products.
//
//   Images on a typical product, median store        5.5
//   Images on that store's best product, median      17
//   Images on its bottom tenth, median                2.5
//   Widest gap inside one store                      56 against 1
//   Products with fewer than three images         1,322 of 10,301 (13%)
//   Products with no image at all                    30
//   Stores whose bottom tenth gets two or fewer      13 of 26
//
// THE GAP IS THE POINT, not the average. Stores photograph the product they
// built the campaign around and stop. The one a customer actually searched for
// gets two pictures.
//
// LIMITS, stated on the page: this counts images, not whether they are any
// good; stores with a closed product feed are absent; one capture date; and a
// feed lists what the store publishes, which may differ from what renders.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// All three tie to the spine rather than being generically good:
//   Ronaldo Jewelry  its own case study opens "Photography was inconsistent"
//   Evie Lou         "product photography was not being shown at its best"
//   Dryrobe          a 31% lower return rate, which is what better pictures buy
//
// PRESENCE (Master §4): none claimed. REVIEW: 180 days.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_MINNEAPOLIS: GeoPage = {
  type: "geo",
  slug: "minneapolis",
  path: "/services/ecommerce-agency/minneapolis",
  hub: "/services/ecommerce-agency",
  status: "published",

  geo: {
    name: "Minneapolis",
    type: "metro",
    areaServed: "Minneapolis",
  },
  archetype: ["G"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency minneapolis",
  secondaryKeywords: [],
  faqKeywords: [
    "how many product images should i have",
    "do product photos affect returns",
    "does google need a product image",
    "how many photos does a product page need",
    "what does an ecommerce agency do",
    "do you work on woocommerce or magento",
  ],
  reviewedPhrases: ["in Minneapolis"],

  metaTitle: "Ecommerce Agency Minneapolis | Design, Build, Grow the Store",
  metaDescription:
    "An ecommerce agency Minneapolis brands hire to design, build and grow the store. See what we found in 10,301 products about how far photography falls off.",
  shortTitle: "Ecommerce agency Minneapolis",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // H1 is the owner's pick (option D of four). Broad by choice.
  h1: "Ecommerce agency Minneapolis brands hire to design, build and grow the store",
  qualifier:
    "Design, build, migration and growth, on whatever your store runs on today. Tell us what is not working and we will tell you what we would fix first.",

  // Both windows show the good case the page argues for. Ronaldo carries a
  // thumbnail rail of three distinct shots (on white, another angle, styled in
  // context), which is what Google recommends and what the bottom of most
  // catalogs does not get; its own case study opens "Photography was
  // inconsistent", so this is the after. Dryrobe pairs with the return-rate
  // cut, which is what better pictures actually buy.
  // Built by scratchpad/mpls27-hero.mjs.
  heroImage: {
    src: "/images/ecommerce-agency-minneapolis-hero-v1.webp",
    alt: "A jewelry product page we rebuilt for Ronaldo showing three separate photographs of one bracelet, and an outdoor apparel product page we built for Dryrobe, with total sales up 250% and the return rate down 31%",
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
    heading: "{storesBuilt} stores built, and the product pages inside them.",
    subheading: "Ten products or ten thousand, on the platform you are on now or the one you move to.",
  },

  assetCtaLabel: "See what 10,301 products showed",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "A shelf only ever needed one photograph. The pack did the rest of the work, because the customer was standing in front of it and could pick it up.\n\nA product page has to do all of that with pictures. So we counted them. Across 26 stores and 10,301 products, the typical product had five or six.\n\nThe interesting number was the gap. In the middle store, the best product had 17 photographs and the bottom tenth had two. In the widest case we found, 56 against one. It is the first thing an ecommerce agency Minneapolis brands hire should count on yours.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Minneapolis brands hire to design, build, move and grow online stores. We work on the platform you are on today. We start by finding what is actually losing you orders.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Archetype G, derived. Wholesale and trade base, which here means brands
  // that grew up selling INTO shops rather than direct.
  placeLayerHeading: "Brands here grew up selling into shops",
  placeLayer:
    "A lot of the good ones started on somebody else's shelf. The buyer saw a line sheet, the shopper saw the box, and the job of the photograph was to make the packaging look right under strip lights.\n\nThen the store arrived, usually built quickly and usually by whoever was available. The photography moved across unchanged, because nobody had a reason to think it was the wrong photography.\n\nIt is a good problem to have. It means the product already sells. But an ecommerce agency Minneapolis brands hire should be able to tell you which part of that inheritance is still working online and which part is quietly costing you.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "One picture is below the line Google draws",
  gradientLayer:
    "**A product with no picture does not qualify.** Google's own rules for product results make the image required, not optional. A product without one cannot show up as a product, whatever else is right about it.\n\n**And one is the floor, not the target.** Google asks for several photographs, at three different shapes, so its results can use whichever fits. A single square pack shot meets the minimum and nothing more.\n\nSo the products at the bottom of your catalog are not just harder to buy. They are harder to find at all, which is what an ecommerce agency Minneapolis brands trust should check first.",
  gradientFacts: [
    {
      id: "google-merchant-listing-image-2026",
      claim:
        "Google Search Central, 'Merchant listing (Product) structured data' (developers.google.com/search/docs/appearance/structured-data/merchant-listing), read 1 October 2026. The image property is listed as REQUIRED, described as 'The URL of a product photo. Pictures clearly showing the product (for example, against a white background) are preferred.' Minimum resolution is 50K pixels (width multiplied by height). Google states 'we recommend providing multiple high-resolution images' and names three recommended aspect ratios, 16x9, 4x3 and 1x1. Image URLs must be crawlable and indexable. Supports both halves of the gradient block: products with no image cannot qualify, and a single image sits below Google's own recommendation.",
      url: "https://developers.google.com/search/docs/appearance/structured-data/merchant-listing",
      publisher: "Google Search Central",
      captured: "2026-10-01",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-product-image-scan-2026",
      claim:
        "Original observation, 1 October 2026. 34 apparel and home stores were attempted and 26 read, giving 10,301 products, each store from its own public product feed as JSON. Every figure is the length of a product's images array, so nothing is sampled. Results: median store's typical product carried 5.5 images; that store's best-photographed product carried a median of 17; its bottom tenth carried a median of 2.5. The widest gap inside a single store was 56 images on its best product against 1 on its bottom tenth. 1,322 of 10,301 products (13%) carried fewer than three images and 30 carried none. 13 of 26 stores had a bottom tenth getting two images or fewer; 15 of 26 had a best product getting 15 or more. LIMITS: this counts images and says nothing about whether they are any good; stores whose product feed is closed are absent, which skews the sample toward stores that publish one; one capture date; and a feed lists what a store publishes, which can differ from what its product page renders.",
      url: "https://www.ecommwizards.com/services/ecommerce-agency/minneapolis",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-10-01",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "What 10,301 product pages had to look at",
    intro:
      "Nobody ranking for this work publishes a measurement of anything, so here is ours. We read 26 store catalogs and counted the photographs on every product, then looked at how far the count falls between the best product and the rest. Any ecommerce agency Minneapolis brands trust should be able to do the same for one store.",
    renderer: "frequency",
    tone: "cream",
    method: {
      sampleSize: 26,
      window: "34 stores attempted, 26 read, 1 October 2026",
      captured: "2026-10-01",
      howGathered:
        "We read each store's own published product list and counted the pictures on every item. Four limits you should know. This counts how many there are, not whether they are any good. Stores that do not publish a product list are missing. It is one day's capture. And a list says what a store holds, which can differ from what its page shows you.",
    },
    columns: ["What we counted", "Across the 26 stores"],
    rows: [
      { label: "Products we read", cells: ["10,301"] },
      { label: "Photographs on a typical product", cells: ["5 or 6"] },
      { label: "On the store's best product", cells: ["17"], note: "Usually the one the campaign was built around." },
      { label: "On the bottom tenth of the same store", cells: ["2 or 3"] },
      { label: "Widest gap we found inside one store", cells: ["56 against 1"] },
      { label: "Products with fewer than three", cells: ["1,322 of 10,301"], note: "Below the number Google recommends." },
      { label: "Products with no photograph at all", cells: ["30"], note: "These cannot appear as a product result at all." },
      { label: "Stores whose bottom tenth gets two or fewer", cells: ["13 of 26"] },
    ],
    derived:
      "The average is not the story. Five or six photographs is a perfectly reasonable product page, and if that were true across a catalog nobody would need to read this.\n\nThe gap is the story. The same store that gives its hero product 17 pictures gives the bottom of its catalog two, and there is far more of that than there is hero product. Nobody decided that. It is what happens when photography is commissioned campaign by campaign and the rest gets whatever the supplier sent.\n\nHalf the stores we read are in that position. Finding out whether you are is an afternoon, and it is a fair thing to ask any ecommerce agency Minneapolis brands shortlist to do before it proposes anything.",
    derivedList: {
      title: "Three things to check on your own catalog",
      items: [
        "Sort your products by how recently they were added and open the oldest one. That is usually where the drop-off starts.",
        "Count the pictures on something outside your top twenty sellers. Those are the ones that get looked after.",
        "Look at whether every color you sell has a photograph of that color. If not, somebody is buying blind.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why the bottom of the catalog is worth the trouble",
        body:
          "**The top of it already works.** Your best sellers get the photography, the copy and the attention, and they convert accordingly. There is not much left to win there.\n\n**The rest is where the search traffic lands.** Someone looking for a specific thing arrives on the page for that specific thing, and that page is usually not your hero product.\n\n**And pictures are what get returned.** A customer who cannot see it properly guesses, and some of those guesses come back. That is the part an ecommerce agency Minneapolis brands keep should be able to put a number against.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Block 6: Service menu (he has not picked a service) ────────────────
  disciplines: {
    label: "What we do",
    heading: "Make it look right, make it work, move it, or grow it",
    intro:
      "Take one or take all four. Every row links to the store it was done for, and none of it assumes you are starting again. It is the range an ecommerce agency Minneapolis brands hire should cover.",
    items: [
      {
        label: "Design and build",
        heading: "We build the page that has to sell it without you there",
        covers: ["Storefront build", "Product pages", "Product data", "Checkout", "Design systems"],
        imageAlt: "A jewelry store we rebuilt for Ronaldo, where the photography was inconsistent before we started",
        caseSlug: "ronaldo-jewelry-shopify-plus-redesign",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Ecommerce development",
        heading: "We build the parts a theme was never going to cover",
        covers: ["Custom features", "Integrations", "Performance work", "Ongoing support"],
        imageAlt: "An outdoor apparel store we rebuilt for Dryrobe",
        caseSlug: "dryrobe-shopify-plus-redesign",
        cta: { label: "Explore development", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration",
        heading: "We replatform without losing what already ranks",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Search equity"],
        imageAlt: "A replatforming project for the wellbeing brand This Works",
        caseSlug: "this-works-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Growth",
        heading: "We test what actually changes the order rate",
        covers: ["A/B testing", "Product and collection pages", "Email and retention", "Paid landing pages"],
        imageAlt: "Conversion work for the fashion brand Evie Lou",
        caseSlug: "evie-lou-shopify-fashion-cro",
        cta: { label: "Explore growth work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "Four things we hold to on every job",
    tone: "white",
    intro: "Four things that hold whatever you buy. Hold every ecommerce agency Minneapolis brands talk to against the same four.",
    items: [
      {
        title: "We start on what you already have",
        body: "The checks run on your current store, on whatever it is built on. If it does not need replacing, we will say so and tell you what does.",
      },
      {
        title: "You get the number before and after",
        body: "We count what we are asked to fix, and count it again when we are done. You see both, not a description of both.",
      },
      {
        title: "You own all of it",
        body: "The code, the accounts and the assets are in your name. If you leave there is nothing to ask us for.",
      },
      {
        title: "Nothing starts before the scope is signed",
        body: "Changes come to you before they happen, not after.",
      },
    ],
  },

  // ── Block 7: Where we would start ─────────────────────────────────────
  whatWeDoAboutItHeading: "What the first week looks like",
  whatWeDoAboutIt:
    "With the same count, run on your catalog. It sorts every product by how much there is to look at and shows you the bottom of the list.\n\nMost of the time that list is shorter than people fear and duller than they expect. A few hundred products that were added in a hurry and never went back.\n\nThen you get the two versions. Fixing the worst of it, which is quick, or changing how a product gets added so it stops happening, which is not. Any ecommerce agency Minneapolis brands hire should show you both and let you pick.",

  midCta: {
    text: "Curious what your own bottom hundred looks like? Send us the store and we will count it.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure which of these you want? Tell us about the store and we will point.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The first conversation is about what is actually losing you orders. It costs you nothing, including when the answer is that we would change very little.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  proofHeading: "Stores we rebuilt, and what changed after",
  proof: [
    {
      slug: "ronaldo-jewelry-shopify-plus-redesign",
      vertical: "Jewelry",
      whatWasBuilt: "A rebuilt store for handcrafted pieces whose photography had been inconsistent",
      outcome: "Total sales +250%, conversion +120%, AOV +46%",
      verified: true,
    },
    {
      slug: "dryrobe-shopify-plus-redesign",
      vertical: "Outdoor apparel",
      whatWasBuilt: "A rebuilt storefront with product data and sizing sorted out before launch",
      outcome: "Return rate down 31%, online revenue +89%, checkout completion +23%",
      verified: true,
    },
    {
      slug: "evie-lou-shopify-fashion-cro",
      vertical: "Fashion",
      whatWasBuilt: "Collection and product pages rebuilt around how people actually shop on a phone",
      outcome: "Conversion +82%, AOV +31%, repeat purchase rate doubled",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  objectionsHeading: "The doubts worth raising",
  objections: [
    {
      objection: "Our photography is good.",
      answer:
        "At the top of your catalog it almost certainly is. That was true of every store we read.\n\nThe question is what the four hundredth product got. In half the stores we counted, the answer was two pictures or fewer, which is what any ecommerce agency Minneapolis brands shortlist should check first.",
    },
    {
      objection: "We are not on Shopify.",
      answer:
        "That is fine, and it is not the first question we would ask. The count above runs the same way whatever a store is built on, because it reads your catalog rather than the platform.\n\nIf moving would help we will say so, and if it would not we will say that too.",
    },
    {
      // Rewritten after the review passes. The page diagnosed a photography
      // problem and never said who fixes it, which left a reader asking the
      // obvious question: do you take the pictures? We do not, and saying so
      // plainly is what makes the rest of the answer worth anything.
      objection: "Reshooting the whole catalog is not happening.",
      answer:
        "Nor should it, and we would not propose it. We do not take photographs.\n\nWhat an ecommerce agency Minneapolis brands hire builds is everything around them. The list of which products actually need a shoot. The rule that stops a new one going live without enough. And pages that use what you already have properly, which is usually where half the win turns out to be.",
    },
    {
      objection: "We would rather work with someone nearby.",
      answer:
        "Fair, and there are good people here to choose from. Someone in the room is worth having.\n\nJust ask both of us the same thing first. Ask how many photographs the bottom of your catalog carries, and see who comes back with a number rather than an opinion.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  faqHeading: "What brands ask before they pick anyone",
  faqs: [
    {
      question: "How many product images should I have?",
      answer:
        "Google recommends several, at three different shapes, so its results can use whichever fits. As a floor, anything of yours with fewer than three is below that. In our count, 1,322 of 10,301 products were.",
      unique: true,
    },
    {
      question: "Does Google need a product image?",
      answer:
        "Yes. Google's rules for product results make the image required, not optional. A product of yours without one cannot appear as a product at all. Thirty in our count had none.",
      unique: true,
    },
    {
      question: "Do product photos affect returns?",
      answer:
        "They can. A customer who cannot see something properly guesses, and some guesses come back. It is one of the few things you can change that moves returns and conversion in the same direction.",
      unique: true,
    },
    {
      question: "How many photos does a product page need?",
      answer:
        "Enough to answer what somebody would pick it up to check. Scale, texture, what the back looks like, and the color they are actually choosing. For most products that is five or six, and any ecommerce agency Minneapolis brands recommend should tell you where yours falls short.",
      unique: true,
    },
    {
      question: "Does it matter what our store is built on?",
      answer:
        "Yes. We work on whatever your store runs on now, and the first job is finding out whether the platform is the problem or something sitting on top of it. Often it is not the platform.",
      unique: true,
    },
    {
      question: "What does an ecommerce agency do?",
      answer:
        "Four things, usually. Design how your store looks and how people move through it. Build what a theme cannot cover. Move the store when it stops fitting. And keep testing what makes people buy.",
      unique: true,
    },
    {
      question: "Are you an ecommerce agency Minneapolis brands can work with remotely?",
      answer:
        "Yes. Everything runs remotely, and there is no office in the city to call at. None of your work changes shape because of where either of us sits.",
      unique: true,
    },
    {
      question: "Can our current developer stay involved?",
      answer:
        "Usually, and it is often the fastest way through. We can hand your team a scope to build, or pick up only the parts they have no time for. Nobody doing a decent job gets quietly pushed out.",
      unique: true,
    },
    {
      question: "Do we have to rebuild the whole store?",
      answer:
        "Rarely. Most of what we find is fixable without touching the rest of the site. We will say when a rebuild really is the answer, and it is less often than you think.",
      unique: true,
    },
    {
      question: "How long does this kind of work take?",
      answer:
        "Counting yours is an afternoon. Fixing the worst of the list is weeks. Changing how a product gets added so the list stops growing back is longer, and it is the only version that lasts.",
      unique: true,
    },
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    heading: "Send us your store and we will count it",
    whatYouGet:
      "The store address is enough. We will sort your catalog the way we sorted the 26 and show you the bottom of the list.",
    whatWeWillTellYouNotToDo:
      "If your catalog is in good shape we will say so rather than finding you something to buy. Reshooting a catalog that works is the worst way to spend a quarter.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition: "The same count we ran on 10,301 products, run on yours.",
      offer: "Give us the store address and you get back:",
      parts: [
        "How many photographs your typical product carries, and your worst hundred.",
        "Which products carry fewer than three, or none at all.",
        "Whether this is a short list to fix or a rule that needs changing.",
      ],
      limit: "It stops at the findings, and you can hand them to anyone.",
      noObligation: "No charge, and no follow-up sequence.",
    },
  },

  sources: [],

  // Owner's standing instruction for these pages: below 2,500 words.
  wordCountTarget: [2000, 2500],
};
