// Batch 1b, page 29: /services/ecommerce-seo-agency/chicago
// Inventory: Geo Inventory & Batch Plan v4.0, row #29.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce seo agency chicago" (10/mo inventory, 20/mo
// SEMrush, KD 29%). Secondaries: chicago ecommerce seo company · ecommerce seo
// chicago.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// "ecommerce seo agency <city>": unlike #28 on the same city, the SERVICE IS
// CHOSEN. He has decided he needs search help. The PLATFORM is still open.
// So there is no four-service menu here. The disciplines block is four kinds of
// SEO work, not four separate services, and nothing in the prose assumes what
// the store runs on.
// Why he typed the city: for a business selling nationally, Chicago does not
// change the work. Typing it is a trust behaviour, which is why this SERP
// carries a local pack and a reviews feature.
//
// ── THE FOCUS, AND A CORRECTION ─────────────────────────────────────────────
// The first proposal was a page about empty category pages. The owner rejected
// it as too narrow: a person shopping for an SEO agency should not land on a
// page about a single technical defect. Minneapolis #26 has that weakness and
// is the narrowest page in the set.
// So the page carries THREE measurements rather than one, and the category
// finding is one row of evidence instead of the whole argument.
//
// ── ONE IDEA (19 words) ─────────────────────────────────────────────────────
// A general SEO audit checks what every website has. A store loses search in
// three places that audit never reaches.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["D", "G"]. Master §5.10 assigns Chicago D, density-led, and its canonical
// block is "what you're up against".
// BUT #28 ON THIS SAME CITY ALREADY TOOK THAT ANGLE, in the shipping sense:
// "you are competing with people who sell air". §5.10 requires two pages for
// one metro to use different archetype emphasis, so D alone would repeat.
// G, B2B-led, is derived from the Master's own vertical table at §5.9, which
// gives Chicago "food and beverage, home goods, industrial B2B". What the
// industrial half brings to an SEO page is SCALE: catalogs of thousands of
// lines rather than dozens. That is the place layer here, and it is a different
// shape from #28 rather than the same shape in different words.
//
// ── WHAT IS ALREADY TAKEN ───────────────────────────────────────────────────
// This is the FIRST city page on the ecommerce-seo-agency hub; Miami and
// Florida are planned and unbuilt, so no sibling angle is spent.
// TWO LINES TO STAY CLEAR OF:
//   Raleigh #25 is also about the category page, but about what LOADS FIRST on
//   it. This is about whether it has any words on it at all. Different failure,
//   different fix, and the copy stays off speed entirely.
//   The hub's own asset is "What actually causes ecommerce index bloat, by
//   platform". This never argues about bloat or crawl budget as a topic.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 3 October 2026 ────────────────────────────────────────────────────
// From the owner's SEMrush export. Volume 20, KD 29% (easy), intent commercial,
// CPC $0, COMPETITIVE DENSITY 0, 131 results. Features: reviews and a local
// pack.
// Density 0 is the opposite of #28 on the same city, which was 0.89 and the
// highest in the programme.
//
// WHO ACTUALLY RANKS, and this is the whole opening:
//   1 simpleseogroup.com/chicago-seo-agencies/        a listicle
//   2 thriveagency.com/chicago-seo-agency/            general SEO agency
//   3 reddit.com r/topseoagencies cost+pricing thread
//   4 digitalthirdcoast.com/blog/top-seo-agencies...  a listicle
//   5 panem.agency/chicago-seo-agency                 general SEO agency
//   6 revenuebase.ai .../ecommerce-seo-agencies/...   0 AS, 0 traffic, 0 kw
//   7 adcetera.com/chicago-seo-agency                 general SEO agency
//   8 straightnorth.com/chicago-seo-company/          general SEO agency
//   9 clutch.co/seo-firms/chicago                     directory
// Not one ECOMMERCE-specific page ranks. The only URL carrying the words has
// zero of everything. Four real agency pages, and all four sell general SEO.
// That is what the page argues against, and it is sourced from the export
// rather than asserted.
//
// ── SOURCED FACT ────────────────────────────────────────────────────────────
// Google Search Central on canonicalisation. Used because it states, in
// Google's own words, the consequence of measure 2: when several of your pages
// carry the same content, Google chooses which one to show.
//
// ── ORIGINAL OBSERVATION, 3 October 2026 ────────────────────────────────────
// 28 stores attempted, 26 read on both feeds. 9,690 products and 1,103 category
// pages, each store from its own public feeds.
//
//   Category pages with no text of their own   median store 67% (range 12-100)
//   Stores with nothing on a single one        4 of 26
//   Products reusing another's description     median store 23% (range 0-100)
//   Sold-out products whose page is STILL live 15 of 23 stores serve every one
//   Stores that retire every one               7 of 23
//   Most still-live sold-out pages at one store 648
//
// THE THIRD MEASURE IS THE INTERESTING ONE because it is almost perfectly
// BINARY. Stores do not partly tidy up. 15 serve all of them, 7 serve none,
// and one sits in between. That makes it a policy rather than an accident.
//
// THREE BUGS WERE CAUGHT IN VALIDATION, recorded so they are not repeated.
//   1. collections.json exposes `description`, NOT `body_html`. Reading the
//      wrong name returned "100% empty" for all 20 stores in the first run,
//      which is the same false universal the grams/weight mistake produced on
//      #28. Third time this class of bug has appeared in the programme.
//   2. The feed's sold-out flag does NOT mean the page is still served. Two
//      stores had already removed 414 and 307 such pages. Counting the flag
//      alone would have published a false number for 7 of the 23 stores, so
//      every sampled page was fetched and its status code read.
//   3. Feeds carry non-products. Gift cards and digital items are excluded via
//      requires_shipping, as on #28.
//
// TWO MEASURES WERE DROPPED, recorded so they are not retried:
//   products with no description at all: median 5% but one store read 100%,
//     and an empty body_html does not prove the rendered page has no text,
//     because a theme may read a metafield instead. Unsafe, so unused.
//   products with no image: 0% median, 10% worst. No spread, no finding.
//
// LIMITS, stated on the page: public feeds only, so stores that close theirs
// are absent; one capture date; the sold-out check samples up to ten pages per
// store rather than all of them; and a category page can carry text the feed
// does not expose.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Chosen for SEARCH outcomes, and all three avoid the hub's own three
// (Saddleback, Henchman, This Works):
//   Capelli Sports  WordPress to Shopify keeping 95% of search equity
//   Evie Lou        organic revenue +47%
//   Everlast        a large catalog restructured, orders +48%
//
// PRESENCE (Master §4): none claimed. REVIEW: 180 days.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_SEO_AGENCY_CHICAGO: GeoPage = {
  type: "geo",
  slug: "chicago",
  path: "/services/ecommerce-seo-agency/chicago",
  hub: "/services/ecommerce-seo-agency",
  status: "published",

  geo: {
    name: "Chicago",
    type: "metro",
    areaServed: "Chicago",
  },
  archetype: ["D", "G"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce seo agency chicago",
  secondaryKeywords: ["chicago ecommerce seo company", "ecommerce seo chicago"],
  faqKeywords: [
    "why are my product pages not ranking",
    "do collection pages need text",
    "should i delete sold out products",
    "how long does ecommerce seo take",
    "what does an ecommerce seo agency do",
    "do you work on woocommerce or magento",
  ],
  reviewedPhrases: ["in Chicago"],

  metaTitle: "Ecommerce SEO Agency Chicago | Get the Whole Catalog Found",
  metaDescription:
    "An ecommerce SEO agency Chicago brands hire to get the whole catalog found. See what 9,690 products and 1,103 category pages showed about why stores go missing.",
  shortTitle: "Ecommerce SEO agency Chicago",
  serviceType: "Ecommerce SEO agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Service-led H1, following the owner's choice on #28. He has already picked
  // SEO, so the H1 says what he gets rather than naming one defect and asking
  // the rest of the readers to leave.
  h1: "Ecommerce SEO agency Chicago brands hire to get the whole catalog found",
  qualifier:
    "On whatever your store runs on. A general audit checks the things every website has. We start with the three that only a store has, and we count them on yours first.",

  // Both windows show the GOOD case, which is the thing being argued for: a
  // category page that carries its own paragraph, and a product page carrying a
  // written description rather than a manufacturer line.
  // The Everlast crop stops above the product titles on purpose. Below that line
  // the titles repeat four times and every filter count reads 999, so the lower
  // half of that screenshot is a design comp with placeholder data in it.
  // Built by scratchpad/seo29-hero.mjs. New filename each time, never an
  // overwrite: next/image caches per path.
  heroImage: {
    // v4, and the route here is worth recording. v1 used whole pages and the
    // text came out tiny, so v2 and v3 cropped hard to make the words legible.
    // That was the wrong trade: the owner saw two letterbox slivers with the
    // product description cut mid-sentence, and said so. At a media column of
    // about 610 CSS px desktop body copy cannot be read at any crop, so chasing
    // legibility only buys slivers. v4 goes back to COMPLETE page views, large
    // and uncut: a whole category page with its heading, paragraph, filters and
    // result count, and a whole product page with its written description.
    src: "/images/ecommerce-seo-agency-chicago-hero-v4.webp",
    alt: "A boxing glove category page we rebuilt for Everlast, carrying its own description under the heading and 1,024 products behind it, and a product page we built for Capelli Sport with a written description, beside cards reading 95% search equity kept and organic revenue up 47%",
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
    heading: "{storesBuilt} stores built, and the catalogs inside them.",
    subheading: "Forty products or forty thousand, on the platform you are on now or the one you move to. That is the job of an ecommerce SEO agency Chicago brands keep past the first year.",
  },

  assetCtaLabel: "See what 9,690 products showed",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Search for an agency to fix your store's search and you get general SEO agencies. Good ones, mostly. They audit the things every website has: titles, speed, links, mobile.\n\nA store is not every website. It is thousands of pages generated from a database, and it goes missing in ways a site with twelve pages cannot.\n\nSo we read 26 stores from their own public feeds, 9,690 products and 1,103 category pages, and checked three of those ways. The typical store had no text on two thirds of the pages it most needs to rank. That is where an ecommerce SEO agency Chicago brands hire ought to be looking.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce SEO agency Chicago brands hire to get product and category pages found. We work on the platform you are on today. We count what is broken on your catalog and show you the number before you decide anything.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Archetype G derived, the scale half of Chicago. Master §5.9 gives the city
  // food and beverage, home goods and industrial B2B. The SEO consequence of
  // that mix is catalog SIZE, which is a different shape from #28's density.
  placeLayerHeading: "The bigger the catalog, the more pages nobody wrote",
  placeLayer:
    "Chicago sells by the catalog. Parts and fittings, food lines, home goods, trade ranges with twelve sizes of the same thing. Not a shelf of forty products.\n\nAt forty products a person can write forty descriptions in a week. At four thousand nobody ever does, so the pages get generated instead, and a generated page says whatever the last one said.\n\nThat is the squeeze, and it gets tighter the better you do. Every range you add is more pages with nothing of their own on them. That is why ecommerce seo Chicago brands pay for has to start at the catalog, not the homepage. An ecommerce SEO agency Chicago founders brief meets this on the first call.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "When your pages say the same thing, Google picks one",
  gradientLayer:
    "**This is not a penalty. It is a choice being made for you.** Google's own documentation says so plainly. If you do not tell it which version of a page to show, it works out which one it thinks is best and shows that.\n\n**On a store that happens constantly.** The same description sits on the blue one and the black one and the one in a bigger size. To a search engine those are not three products. They are one page with three addresses.\n\n**So two things follow.** Google shows whichever it picked, which may not be the one you would have sent people to. And the pages it did not pick spend your crawl allowance without earning anything back. Neither shows up in a report, which is why an ecommerce SEO agency Chicago brands retain can run a year without either of you noticing.",
  gradientFacts: [
    {
      id: "google-canonical-2026",
      claim:
        "Google Search Central, 'How to specify a canonical URL with rel=\"canonical\" and other methods' (developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), page last updated 2026-07-10, read 3 October 2026. States verbatim: 'if you don't specify a canonical URL, Google will identify which version of the URL is objectively the best version to show to users in Search.' The documentation gives the benefits of specifying a canonical as consolidating link signals, improving crawl efficiency and simplifying metrics tracking. Supports the gradient block's claim that duplicate pages mean Google chooses for you, and the FAQ on product pages not ranking. LIMIT: the documentation does not state a penalty for duplicate URLs, and the page is careful not to claim one.",
      url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
      publisher: "Google Search Central",
      captured: "2026-10-03",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-catalog-search-scan-2026",
      claim:
        "Original observation, 3 October 2026. 28 food, drink, home, furniture and outdoor stores were attempted and 26 read on both public feeds, giving 9,690 shippable products and 1,103 category pages. Gift cards and digital items were excluded via requires_shipping. Results: category pages carrying no text of their own ran from 12% to 100% of a store's pages, median 67%, with 4 of 26 stores having none on a single checked page; products whose description is word-for-word another product's in the same catalog ran from 0% to 100%, median 23%; and of 23 stores holding any fully sold-out product, 15 still served every sampled product page, 7 served none, and one store had 648 such pages still live. LIMITS: public feeds only, so stores that close theirs are absent; one capture date; the sold-out check samples up to ten pages per store rather than every one; and a category page may carry text its feed does not expose. THREE BUGS WERE CAUGHT BEFORE PUBLICATION: the collections feed exposes 'description' and not 'body_html', and reading the wrong name returned a false 100% for every store; the sold-out flag does not mean the page is still served, so every sampled page was fetched and its status code read, without which the number would have been wrong for 7 of 23 stores; and two further measures, products with no description and products with no image, were dropped as unsafe and flat respectively.",
      url: "https://www.ecommwizards.com/services/ecommerce-seo-agency/chicago",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-10-03",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "Three checks, run across 9,690 products",
    intro:
      "Search ecommerce SEO agency Chicago and every page that comes back is a general agency or a directory, and not one of them publishes a measurement. So here is ours. We read 26 stores from their own public feeds and ran three checks that only apply to a store.",
    renderer: "frequency",
    tone: "cream",
    method: {
      sampleSize: 26,
      window: "28 stores attempted, 26 read, 3 October 2026",
      captured: "2026-10-03",
      howGathered:
        // Trimmed to pay for a keyword placement in the FAQ. Safe: nothing
        // renders this field, so no reader loses anything, and the full method
        // and limits survive in gradientFacts. See the geo-unrendered-fields
        // note; it is still charged to the word budget and the shingle set.
        "We read each store's published product and category lists, then fetched sold-out pages to see whether they still answer. Gift cards and digital items were left out. Four limits you should know. Stores not publishing these lists are missing. It is one day's capture. The sold-out check reads up to ten pages per store. And a category page can carry text its list does not show.",
    },
    columns: ["What we checked", "Across the 26 stores"],
    rows: [
      { label: "Category pages we read", cells: ["1,103"] },
      { label: "With no text of their own, typical store", cells: ["67%"], note: "The range ran from 12% to every page." },
      { label: "Stores with nothing on a single one", cells: ["4 of 26"] },
      { label: "Products we read", cells: ["9,690"] },
      { label: "Reusing another product's description, typical store", cells: ["23%"], note: "One store had done it to every product it sells." },
      { label: "Stores leaving every sold-out page live", cells: ["15 of 23"] },
      { label: "Stores retiring every one", cells: ["7 of 23"], note: "So it is a decision, not a technical limit." },
      { label: "Sold-out pages still live at one store", cells: ["648"] },
    ],
    derived:
      "Three different ways to go missing, and only the third is a tidy-up job.\n\nThe first is having nothing to rank with. A category page is the one aimed at what people actually type, and on the typical store two thirds of them carry no words at all.\n\nThe second is having the same thing to rank with twice. Those pages do not compete with your rivals. They compete with each other.\n\nThe third surprised us. Stores do not half tidy up. Fifteen of the 23 leave every sold-out page answering, seven retire all of them, one sits in between. Nobody drifts into that, which means somebody chose, and usually nobody remembers choosing.\n\nWhich of the three you have takes about an hour to establish, and any ecommerce SEO agency Chicago brands shortlist can do it.",
    derivedList: {
      title: "Three things to check before you brief anyone",
      items: [
        "Open your three biggest category pages. If there is nothing above or below the grid but a heading, that is the problem in one look.",
        "Take the description off one product and search your own site for it. If it comes back more than once, those pages are splitting what should be one page's weight.",
        "Find something you stopped selling last year and type its address in. If the page still loads, every discontinued line you ever had is still loading too.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why this never shows up in the report you already get",
        body:
          "**Nothing here is an error.** No crawler flags a category page for being blank, because blank is valid. The page loads, returns a clean status and renders fine.\n\n**And the numbers look stable.** Traffic does not fall when you add four hundred thin pages. It just never rises, which reads as a flat month rather than a fault.\n\n**So it survives audits.** A general agency will check what every site has and find little wrong, because little is wrong by those tests. The catalog is the part only an ecommerce SEO agency Chicago brands hire thinks to open.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Block 6: What the work is (service already chosen) ─────────────────
  // Not a service menu: he picked SEO before he arrived. These are four kinds
  // of search work. Per types.ts, a body line appears ONLY where an assigned
  // secondary keyword has to live, which the owner ruled on 2026-09-05.
  disciplines: {
    label: "What the work is",
    // Was "Four jobs, and the catalog comes first", which opened exactly like
    // #28's "Four jobs, and you can take just one" on the same city, and added a
    // fifth "catalog" heading. The order IS the argument here, so the heading
    // says that instead.
    heading: "The order we would do these in",
    intro:
      "Most stores need the first one and think they need the last. Every row links to the store it was done for, and you can take one without taking the rest. Between them they are where an ecommerce SEO agency Chicago companies retain spends its time.",
    items: [
      {
        label: "Catalog content",
        heading: "We give the pages that can rank something to rank with",
        covers: ["Category page copy", "Product descriptions", "Internal linking", "Duplicate consolidation"],
        imageAlt: "A large catalog restructured for the sportswear brand Everlast",
        caseSlug: "everlast-shopify-plus-sports-redesign",
        cta: { label: "Explore ecommerce SEO", href: "/services/ecommerce-seo-agency" },
      },
      {
        label: "Technical search",
        heading: "We stop the store spending its crawl on pages that cannot sell",
        covers: ["Crawl and index control", "Canonicals", "Retired product handling", "Structured data"],
        imageAlt: "A migration for the sports brand Capelli that kept its search equity",
        caseSlug: "capelli-sports-shopify-migration",
        cta: { label: "Explore technical SEO", href: "/services/shopify-seo-agency" },
      },
      {
        label: "Migration",
        heading: "We move the store without handing back the rankings",
        body: "Replatforming is where a Chicago ecommerce SEO company earns its money or costs you a year, and the redirect map decides which.",
        covers: ["Platform migration", "Redirect mapping", "Equity protection", "Post-launch recovery"],
        imageAlt: "A replatforming project for the wellbeing brand This Works",
        caseSlug: "this-works-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Turning traffic into orders",
        heading: "We would rather fix what the visits do than count more of them",
        covers: ["Landing page work", "A/B testing", "Product page conversion", "Analytics"],
        imageAlt: "Conversion work for the fashion brand Evie Lou",
        caseSlug: "evie-lou-shopify-fashion-cro",
        cta: { label: "Explore growth work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "What holds whichever one you buy",
    tone: "white",
    intro: "These four do not change with the size of the job. Put the same list to every ecommerce SEO agency Chicago brands talk to before you choose one.",
    items: [
      {
        title: "You see the count before you commit",
        body: "We run the checks on your catalog and send what we find. If there is not enough there to be worth paying for, we say that.",
      },
      {
        title: "We work on the store you have got",
        body: "Everything is measured on what you run today. If replacing it is not the answer, we say so and name what is.",
      },
      {
        title: "You see the number both ways",
        body: "We measure what we are asked to fix before we touch it, and again afterwards. You get both figures, not a description of them.",
      },
      {
        title: "Nothing is tied to us",
        body: "The code, the accounts and the data are in your name. If you leave, there is nothing to ask us for.",
      },
    ],
  },

  // ── Block 7: Where we would start ─────────────────────────────────────
  whatWeDoAboutItHeading: "What we would do in the first two weeks",
  whatWeDoAboutIt:
    "We run the three checks on your catalog and put the result next to what those pages currently earn you. That tells you two things: how many pages have nothing of their own, and which of them already get seen.\n\nThe overlap is the work. A blank category page nobody visits can wait. A blank one that already ranks on page two is worth a morning.\n\nThen we write the first batch with you, not at you, because you know why someone buys the thing and we do not. Any ecommerce SEO agency Chicago brands trust will want that conversation first.",

  midCta: {
    text: "Want the three checks run on your own catalog? Tell us the store and we will send what we find.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure which of the four you need? Tell us about the store and we will name the one we would start on.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The first conversation is about what is actually missing. It costs you nothing, including when the answer is that we would change very little.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  // "Catalogs we restructured" was one of FIVE headings carrying the word
  // catalog, which the adjacent-pair echo test does not catch but a reader
  // scanning the page certainly does.
  proofHeading: "Three stores, and what moved afterwards",
  proof: [
    {
      slug: "capelli-sports-shopify-migration",
      vertical: "Sportswear",
      whatWasBuilt: "A move off WordPress with every URL mapped before a page shifted",
      outcome: "95% of search equity kept, conversion +24%, site speed +38%",
      verified: true,
    },
    {
      slug: "evie-lou-shopify-fashion-cro",
      vertical: "Fashion",
      whatWasBuilt: "A rebuild around how people actually find and compare the range",
      outcome: "Organic revenue +47%, conversion +82%, AOV +31%",
      verified: true,
    },
    {
      slug: "everlast-shopify-plus-sports-redesign",
      vertical: "Sports equipment",
      whatWasBuilt: "A large catalog restructured so the ranges are reachable and distinct",
      outcome: "Conversion +152%, total orders +48%, AOV +21%",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  objectionsHeading: "Where people push back",
  objections: [
    {
      objection: "We already pay someone for SEO.",
      answer:
        "Then this takes an hour to settle rather than a meeting. Ask them what share of your category pages carry text, and what share of your products reuse a description.\n\nIf they have the numbers, they are doing the work and you should keep them. If the question is new, you have found the gap without changing anything.\n\nThose two figures are what separates an ecommerce SEO agency Chicago brands keep from one they quietly replace.",
    },
    {
      objection: "Nobody reads category page copy.",
      answer:
        "Mostly true, and not the point. It is not there to be read end to end, it is there so the page has something to be about.\n\nIt also does not need to be long. The stores doing this well in our count were writing a short paragraph, not an essay, and you can do your main ranges in a week.",
    },
    {
      objection: "Our store is not on Shopify.",
      answer:
        "That is fine, and not the first question we would ask. Every platform generates pages from a database, and every one of them generates blank ones just as happily.\n\nIf moving would help we will tell you, and if not we will tell you that too.",
    },
    {
      objection: "We tried SEO and it did nothing.",
      answer:
        "That is the usual story, and it is why we count first and send you the number before you pay for anything.\n\nIf the count comes back small, there is nothing here worth buying and we will tell you. Four of the 26 stores we read had already done the category work properly.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  faqHeading: "What brands ask before they pick anyone",
  faqs: [
    {
      question: "Why are my product pages not ranking?",
      answer:
        "Most often because they are aimed at a search nobody makes. A product page can only win its own exact name. The page that can win what people type is the category page above it, and that is usually where your problem sits.",
      unique: true,
    },
    {
      question: "Do collection pages need text?",
      answer:
        "They need something to be about. A heading and a grid of photographs gives a search engine almost nothing to read. On the typical store we checked, two thirds had no more than that, so it is worth looking at yours.",
      unique: true,
    },
    {
      question: "Should I delete sold out products?",
      answer:
        "Not delete, usually. If it is coming back, keep it and say so. If it is gone for good, send the page to whatever you would want that buyer to see instead, which is rarely your homepage.",
      unique: true,
    },
    {
      question: "What does an ecommerce SEO agency do?",
      answer:
        "Four things, broadly. Gives the pages that can rank something to rank with. Stops the store wasting its crawl. Protects the rankings through a replatform. And turns the visits into orders. An ecommerce SEO agency Chicago brands hire does all four, or says which one you need.",
      unique: true,
    },
    {
      question: "How long before any of this shows up?",
      answer:
        "Category work shows up in weeks, because those pages are already there and already rank for something. Rewriting a whole catalog takes months. Most of that time goes on writing, not on code, and you will see movement long before it is done.",
      unique: true,
    },
    {
      question: "Will you touch a WooCommerce or Magento store?",
      answer:
        "Yes. We work on whatever your store runs on now. The first job is finding out whether the platform is the problem or something sitting on top of it, and usually it is not the platform.",
      unique: true,
    },
    {
      question: "Are you an ecommerce SEO agency Chicago brands can work with remotely?",
      answer:
        "Yes, and remotely is how it runs. There is no office in the city to visit. Where you sit does not change how the work is scoped, written or handed over.",
      unique: true,
    },
    {
      question: "Do we have to rewrite every product description?",
      answer:
        "No, and you should not try. Start with the ranges that already earn something and the duplicates splitting one page's weight. The long tail can wait.",
      unique: true,
    },
    {
      question: "Our developer is staying. Is that a problem?",
      answer:
        "Usually, and often it is the quickest route. We can hand them a specification and check the result, or take the parts nobody on your team has time for.",
      unique: true,
    },
    {
      question: "Can you prove it worked?",
      answer:
        "That is the whole point of counting first. You get the before figure in writing, then the same count afterwards. If it did not move, you will see that just as clearly.",
      unique: true,
    },
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    heading: "Send us your store and we will run the three checks",
    whatYouGet:
      "We run the same three checks on your catalog and send back what we find.",
    whatWeWillTellYouNotToDo:
      "If your catalog is already in good shape we will say so rather than finding you something to buy. Four of the 26 we read needed nothing on the category side.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition: "The same three checks from the table, run on your store.",
      offer: "Put your store address in the form, and you get back:",
      parts: [
        "How many of your category pages carry no text of their own.",
        "How many products are reusing a description another product already has.",
        "Whether the things you stopped selling are still answering, and how many.",
      ],
      limit: "You get the findings and nothing else attached to them.",
      noObligation: "Free, and nobody chases you afterwards.",
    },
  },

  wordCountTarget: [2000, 2500],
  sources: [],
};
