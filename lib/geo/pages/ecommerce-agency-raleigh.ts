// Batch 1b, page 25: /services/ecommerce-agency/raleigh
// Inventory: Geo Inventory & Batch Plan v4.0, row #25.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce agency raleigh" (10/mo, Google Keyword Planner,
// the figure of record for this programme). Semrush shows 0/mo for this exact
// term and 20/mo for "ecommerce marketing agency raleigh", which sits on a
// different hub. Recorded, not acted on: GKP governs.
// Secondaries: ecommerce development raleigh · custom ecommerce website
// raleigh nc · ecommerce website design company raleigh · ecommerce website
// development raleigh.
// Hub: /services/ecommerce-agency.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// The Page Standard is explicit about this exact keyword family: on
// "ecommerce agency <city>" the PLATFORM IS OPEN. "He may be on Shopify. He may
// be on something else. He may have nothing yet. Never write as if he is
// already on Shopify."
// The SERP confirms it. Across the ranking set, WooCommerce is named by three
// pages, Magento by two and Shopify by one. NOT ONE PAGE IS SHOPIFY-FIRST.
// So: no Shopify in the prose, the service menu comes early because he has not
// picked a service either, and every commitment is written to hold "on whatever
// your store runs on today".
//
// ── ONE IDEA (19 words) ─────────────────────────────────────────────────────
// The category page is where a growing catalog collapses. Not from loading too
// much, but from what loads first.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// ── WHAT IS ALREADY TAKEN ───────────────────────────────────────────────────
// Nine pages had to be cleared before this spine was free. Austin owns judging
// value by a number. Boston #23 owns the three answers before the cart. Dallas
// owns what sits behind the storefront. Los Angeles owns selling what is not on
// the shelf. New York owns the platform ceiling and migration. San Diego owns
// subscription law. San Francisco owns in-house cost. Boston #22 owns product
// page data. Raleigh #24 owns the two kinds of app.
// NOTE ON #24: same city, same archetype, so the place layer had to be built
// differently. #24's place layer is systems outgrown ("the point where the app
// stops fitting"). This one is the CATALOG outgrowing the site, which is the
// same archetype seen from the merchandising side rather than the systems side.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["E"], emerging-led. Master §5.10 assigns Raleigh E and only E: "why brands
// here outgrow their first agency, the scaling break point". Master §5.9 gives
// Raleigh furniture and home (the High Point market), apparel and food tech,
// which is why the measurement below is taken on home and furniture stores.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 30 September 2026 ─────────────────────────────────────────────────
// PASS 1 was a live search and returned the wrong set, exactly as on #24. It is
// recorded so the mistake is not repeated: a live search sample is not the
// ranking set.
// PASS 2 used the owner's Semrush export. Volume 0 (Semrush) against GKP's 10,
// KD 2% "very easy", intent COMMERCIAL, CPC $0, competitive density 0, 68.2K
// results. SERP features: local pack and reviews, both closed to us.
//
// The ranking set is astonishingly weak. Page Authority Score is 0 for six of
// the nine URLs; only a Shopify agency directory (45) and WebFX (12) carry any.
// FIVE OF NINE ARE NOT AGENCY SERVICE PAGES AT ALL: a directory profile, a
// BuiltIn listicle, a Quora thread, a localbiznetwork listing and an
// Expertise.com directory. Position 8 is a 2015 press release about a local
// agency being the 15th fastest-growing company in the Triangle.
//
// Section frequency across the five readable pages: local presence 5/5,
// pricing 4/5, certifications 3/5, industries 3/5, process 2/5, FAQ 1/5.
// Schema: AggregateRating 3/5 and PostalAddress 3/5, both barred here.
// AND 0 OF 5 PUBLISH A MEASUREMENT OF ANY KIND, which is the whole opening.
//
// EVERY ONE OF THEM CLAIMS RALEIGH PRESENCE. We cannot, so local has to be
// beaten with something local cannot buy. That is what the asset is for.
//
// ── ORIGINAL OBSERVATION, 30 September 2026 ─────────────────────────────────
// A FAILED ATTEMPT FIRST, recorded so it is not retried. The original plan was
// to measure which filters home and furniture stores offer on a category page.
// Across two attempts on nine stores it produced usable facet names on two.
// One returned nothing but cookie-consent panels. Building a defensible sample
// would have needed hand-found URLs and per-site tuning, which is curation
// dressed as a scan. Abandoned rather than published.
//
// WHAT WAS MEASURED INSTEAD. For each store: open the home page, follow the
// first link naming a furniture or home category, and measure the page that
// loads. One rule, no per-site tuning. Largest Contentful Paint comes from
// PerformanceObserver and request counts from resource timing, so neither
// depends on how a store writes its markup.
//
//   65 stores attempted, 31 measured.
//   Median LCP                          3.7 s
//   In Google's "poor" band (> 4.0s)    15 of 31
//   In Google's "good" band (<= 2.5s)    8 of 31
//   Median requests                     434
//   Median weight                       3.9 MB
//   Range                               1.4 s to 25.5 s
//
//   THE FINDING THAT MADE IT WORTH PUBLISHING: request count does not predict
//   speed, and very nearly inverts it. The page making the MOST requests in the
//   sample (1,108) loads in 2.9 s, better than the median. The page making the
//   FEWEST (72) takes 8.6 s, among the five slowest.
//
// LIMITS, stated on the page: lab data, one run per store, one location, a
// desktop viewport, not field data from real visitors. 31 of 65 measured, and
// the stores that block automated access are absent, which skews the sample
// toward mid-size brands.
// A DATA HYGIENE NOTE: five stores returned 403 bot-block pages of 2-6 KB that
// an early cut counted as real measurements, dragging median LCP from 4.5 s
// down to 3.7 s. Anything not returning 200 is excluded. Two weight readings
// (133 MB, 25 MB) are implausible content-length sums and are excluded from the
// weight figure only; they move the median by 0.1 MB, so it is robust either
// way.
//
// ── SOURCED FACTS ───────────────────────────────────────────────────────────
// Google's own documentation for both halves of the gradient argument: the
// thresholds, and the fact that this feeds ranking.
// NO SOURCE LINKS OR NAMES IN VISIBLE COPY (owner's standing rule).
// NO PRICES ANYWHERE (owner's standing rule). Four of five ranking pages show
// money and we do not.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Chosen because every outcome is about BROWSING AND SPEED rather than about a
// platform, so they land for a reader on WooCommerce or Magento as well:
//   Everlast      large catalog, limited filtering, navigation rebuilt by
//                 sport, load cut 6.1s to 1.9s, catalog abandonment down 38%
//   Evie Lou      collection pages reorganised, load cut 5.8s to 2.1s
//   Candy Kittens catalog restructured around gifting, mobile bounce down 41%
//
// NO ENGAGEMENT BLOCK, deliberately. Only 2 of 5 ranking pages carry a process,
// the disciplines block already answers "what do you do", and the budget is
// better spent on the FAQ: 4 of 5 ranking pages have NO FAQ at all, so depth
// there is a structural advantage nobody on this SERP is contesting.
//
// PRESENCE (Master §4): none claimed. REVIEW: 180 days; the scan is a dated
// observation and sites change.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_RALEIGH: GeoPage = {
  type: "geo",
  slug: "raleigh",
  path: "/services/ecommerce-agency/raleigh",
  hub: "/services/ecommerce-agency",

  geo: {
    name: "Raleigh",
    type: "metro",
    areaServed: "Raleigh",
  },
  archetype: ["E"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency raleigh",
  secondaryKeywords: [
    "ecommerce development raleigh",
    "custom ecommerce website raleigh nc",
    "ecommerce website design company raleigh",
    "ecommerce website development raleigh",
  ],
  faqKeywords: [
    "how fast should a category page load",
    "why is my ecommerce site slow",
    "do you work on woocommerce or magento",
    "does site speed affect google ranking",
    "how many products is too many for one page",
    "what does an ecommerce agency actually do",
  ],
  reviewedPhrases: ["in Raleigh"],

  metaTitle: "Ecommerce Agency Raleigh | Design, Build, Migrate and Grow",
  metaDescription:
    "An ecommerce agency Raleigh brands hire to design, build and grow stores on any platform. See what we measured on 31 home and furniture category pages.",
  shortTitle: "Ecommerce agency Raleigh",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "Ecommerce agency Raleigh brands hire when the catalog outgrew the site",
  qualifier:
    "Design, build, migration and growth, on whatever your store runs on today. Tell us what is slowing it down and we will tell you what we would fix first.",

  // Composite of two category pages, which is what this page argues about:
  // Everlast's collection page with its filter rail and product rows, and the
  // Evie Lou designer index carrying 132 designers. Both metric cards are load
  // times rather than revenue, because speed is what the asset measures.
  // NOTE for anyone regenerating it: the Evie Lou screenshot still has "Insert
  // short designer description here lorem ipsum" in its middle cards, so the
  // crop stops at the top band. Built by scratchpad/raleigh25-hero.mjs.
  heroImage: {
    // v3. The composite's ASPECT matters more than its size here: the hero
    // media column is about 610 CSS px wide, so a 1900x1150 strip (1.65:1)
    // rendered only 369px tall next to a ~700px column of copy and read as a
    // thin band. v3 stacks the windows vertically at 1550x1350 (1.15:1), which
    // renders around 530px tall and fills the slot.
    // New filename each time, not an overwrite: next/image caches per path.
    src: "/images/ecommerce-agency-raleigh-hero-v3.webp",
    alt: "A collection page we rebuilt for Everlast, with its filter rail and product rows, and a 132-designer index we built for Evie Lou, with category page load times cut from 6.1 to 1.9 seconds and 5.8 to 2.1 seconds",
    cutout: true,
  },

  heroGlow: true,
  heroCtaLabel: "Get in touch with us",
  relatedTone: "white",
  whatWeDoAboutItTone: "cream",
  gradientLayerTone: "white",
  // The measurement is what this page is here to give away and the hook
  // promises it in the second paragraph, so it runs before the service menu.
  assetBeforeServices: true,

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years building stores" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "{storesBuilt} stores built, and the catalogs behind them.",
    subheading: "Ten products or ten thousand, on the platform you are on now or the one you move to. That is the span an ecommerce agency Raleigh brands keep has to cover.",
  },

  assetCtaLabel: "See what 31 stores measured",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Every catalog starts small enough that browsing just works. Then one day yours does not, and nobody can say when it changed.\n\nSo we measured it. On 31 home and furniture stores we opened the page people browse a category on, and timed it. The middle one took 3.7 seconds. Fifteen sat in the band Google calls poor.\n\nThe surprising part was what did not explain it. The store loading the most pieces was faster than average, and the store loading the fewest was among the slowest. An ecommerce agency Raleigh brands hire should have checked that before recommending anything.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Raleigh brands hire to design, build, move and grow online stores. We work on the platform you are on today. We say which parts are worth keeping before anything gets rebuilt.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Archetype E from the MERCHANDISING side. Raleigh #24 takes the same
  // archetype from the systems side, so the two do not repeat.
  placeLayerHeading: "The catalog grew and the site did not",
  placeLayer:
    "Growing brands add products faster than they rebuild. Forty became four hundred one launch at a time, and no single launch was the moment to start again.\n\nYour home page still looks right, because it never had to hold four hundred of anything. The damage is one level down, on the page where somebody is trying to narrow the field.\n\nThat is usually when brands go looking for help, and the point an ecommerce agency Raleigh brands hire should measure before proposing anything.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "Two and a half seconds, and the bill arrives twice",
  gradientLayer:
    "**There is a published number for this.** Google treats a page as good when its biggest element appears within two and a half seconds, and poor once it passes four. The reading is taken at the seventy-fifth percentile, so it is not your best visit that counts. It is close to your worst.\n\n**And the same number reaches search.** Google states plainly that these measures are used by its ranking systems. Relevance still wins, so a slow page about the right thing beats a fast page about nearly the right thing. But where two are close, this is not nothing.\n\nSo the bill arrives twice. Once from the visitor who leaves before the grid fills, and once from a search engine that noticed. An ecommerce agency Raleigh brands trust should show you both numbers for your own store.",
  gradientFacts: [
    {
      id: "google-lcp-thresholds-2026",
      claim:
        "Google, 'Largest Contentful Paint (LCP)' (web.dev/articles/lcp), read 30 September 2026. LCP 'reports the render time of the largest image, text block, or video visible in the viewport, relative to when the user first navigated to the page.' Thresholds: good is 2.5 seconds or less, needs improvement is 2.5 to 4.0 seconds, poor is greater than 4.0 seconds. Assessed at the 75th percentile of page loads, segmented by mobile and desktop. Supports the first rule in the gradient block and the bands used in the asset table.",
      url: "https://web.dev/articles/lcp",
      publisher: "Google, web.dev",
      captured: "2026-09-30",
      reviewAfterDays: 365,
    },
    {
      id: "google-page-experience-ranking-2026",
      claim:
        "Google Search Central, 'Understanding page experience in Google Search results' (developers.google.com/search/docs/appearance/page-experience), read 30 September 2026. 'Google's core ranking systems look to reward content that provides a good page experience' and 'Core Web Vitals are used by our ranking systems.' Google also states the limit relied on in the copy: 'Google Search always seeks to show the most relevant content, even if the page experience is sub-par.' Supports the second paragraph of the gradient block, including its concession that relevance still wins.",
      url: "https://developers.google.com/search/docs/appearance/page-experience",
      publisher: "Google Search Central",
      captured: "2026-09-30",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-category-page-scan-2026",
      claim:
        "Original observation, 30 September 2026. 65 home and furniture stores were attempted and 31 measured. Method: open the store's home page, follow the first link naming a furniture or home category, and measure the page that loads. Largest Contentful Paint was read from PerformanceObserver and request counts from the Resource Timing API. Results: median LCP 3.7 s; 15 of 31 above 4.0 s; 8 of 31 at or under 2.5 s; median 434 requests; median weight 3.9 MB; range 1.4 s to 25.5 s. The store issuing the most requests (1,108) rendered in 2.9 s; the store issuing the fewest (72) took 8.6 s. LIMITS: lab data, one run per store, one location, desktop viewport, not field data; stores that block automated access are absent, skewing the sample toward mid-size brands; anything not returning HTTP 200 was excluded, including five bot-block pages whose inclusion would have moved median LCP from 4.5 s to 3.7 s; two content-length totals (133 MB, 25 MB) were implausible and are excluded from the weight median only, which moves it by 0.1 MB.",
      url: "https://www.ecommwizards.com/services/ecommerce-agency/raleigh",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-09-30",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "What 31 category pages actually did",
    intro:
      "Nobody ranking for this work publishes a measurement, so here is ours. At 31 home and furniture stores we opened the page shoppers browse a category on and timed how long it took to show its largest element. It is the first thing an ecommerce agency Raleigh brands shortlist should do for your store.",
    renderer: "frequency",
    tone: "cream",
    method: {
      sampleSize: 31,
      window: "65 stores attempted, 31 measured, 30 September 2026",
      captured: "2026-09-30",
      // NOTE: this field renders nowhere. OnlyHereAsset.tsx never reads
      // asset.method, but proseStrings() counts it against the 2,500 ceiling.
      // Kept short for that reason; the method and every limit are recorded in
      // full on the ecw-category-page-scan-2026 source above, which is not
      // counted. Same finding as Raleigh #24.
      howGathered:
        "We opened each store's home page, followed the first link naming a category, and timed what loaded. Three limits you should know. One visit per store, from one place. Stores that block automated visits are missing. Anything that did not load properly was dropped.",
    },
    columns: ["What we measured", "Across the 31 stores"],
    rows: [
      { label: "How long the middle store took", cells: ["3.7 seconds"] },
      { label: "Sat in the band Google calls poor", cells: ["15 of 31"], note: "Poor starts at four seconds." },
      { label: "Sat in the band Google calls good", cells: ["8 of 31"] },
      { label: "Slowest store on the list", cells: ["25.5 seconds"] },
      { label: "Fastest store on the list", cells: ["1.4 seconds"] },
      { label: "Pieces the middle store loaded", cells: ["434"] },
      { label: "The store that loaded the most", cells: ["1,108 pieces, 2.9 seconds"], note: "More than any other store, and quicker than most of them." },
      { label: "The store that loaded the fewest", cells: ["72 pieces, 8.6 seconds"], note: "The lightest page we measured, and one of the five slowest." },
    ],
    derived:
      "Read the last two lines together and the usual advice falls over. One store asks for fifteen times as much as the other and still shows up six seconds sooner.\n\nSo the problem is not how much a page loads. It is the order. A page that fetches its main picture first and its tracking last feels quick even when it is heavy. One that waits on a script before drawing anything feels slow with barely anything on it.\n\nThat is worth knowing before you pay anyone to strip things out, and a fair thing to ask any ecommerce agency Raleigh brands recommend.",
    derivedList: {
      title: "Three things to check on your own category page",
      items: [
        "Time it on a phone, on mobile data, from cold. Not on office wifi on a machine open all day.",
        "Watch what draws first. If it sits blank then arrives all at once, something is blocking it rather than weighing it down.",
        "Count how far you get before the grid fills. If you scroll past empty boxes, the pictures are loading in the wrong order.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why this page and not the home page",
        body:
          "**The home page is the one everybody tests.** It has the fewest things on it, and your team looks at it every day.\n\n**The category page is where the catalog shows up.** Forty products or four hundred, this is the page that has to carry them. It is also where a shopper decides whether you have what they want.\n\n**And it gets worse as you grow.** Every launch adds to it and nothing comes off, which is why an ecommerce agency Raleigh brands keep looks here first.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Block 6: The service menu (broad keyword, so it comes early) ───────
  disciplines: {
    label: "What we do",
    heading: "Design it, build it, move it, or fix what is already there",
    intro:
      "Take one or take all four. Each links to the store it was done for, and none assumes you are starting again. This is the range an ecommerce agency Raleigh brands hire should cover.",
    items: [
      {
        label: "Design and build",
        heading: "We design the browsing, not just the branding",
        body: "What an ecommerce website design company Raleigh brands shortlist should be judged on is the category page, not the home page.",
        covers: ["Custom ecommerce website design", "Category and search", "Product pages", "Checkout", "Design systems"],
        imageAlt: "A store we rebuilt for the fashion brand Evie Lou, reorganised around how people shop on a phone",
        caseSlug: "evie-lou-shopify-fashion-cro",
        cta: { label: "Explore design and build", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        label: "Ecommerce development",
        heading: "We build the parts a theme was never going to cover",
        body: "Most ecommerce development Raleigh brands pay for is not a new store. It is the handful of things the old one cannot do.",
        covers: ["Ecommerce website development", "Custom features", "Integrations", "Performance work", "Ongoing support"],
        imageAlt: "A large-catalog rebuild for the sports brand Everlast, with navigation restructured by discipline",
        caseSlug: "everlast-shopify-plus-sports-redesign",
        cta: { label: "Explore ecommerce development", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration",
        heading: "We move the store and bring the rankings with it",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Search equity"],
        imageAlt: "A replatforming project for the wellbeing brand This Works",
        caseSlug: "this-works-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Growth",
        heading: "We find where people give up, then test the fix",
        covers: ["A/B testing", "Category and product pages", "Email and retention", "Paid landing pages"],
        imageAlt: "Conversion work for the confectionery brand Candy Kittens, rebuilt around gifting",
        caseSlug: "candy-kittens-shopify-food-beverage-cro",
        cta: { label: "Explore growth work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── Who we have built for ─────────────────────────────────────────────
  // Three of the five ranking pages carry an industries block and we did not.
  // It renders straight after the service menu and before the "not sure which
  // one" prompt, which is the right place for it: what we do, then who we have
  // done it for, then an offer to pick.
  // Every category is one the case-study corpus can back, per SegmentsSchema:
  // home and furniture (Mouldings One), apparel (Evie Lou), food and drink
  // (Candy Kittens), sport (Everlast). Each `breaks` names the catalog failure
  // that category actually hits, so the block is not a grid of nouns.
  segments: {
    heading: "Four catalogs we know well",
    intro: "What actually breaks in each. Ask any ecommerce agency Raleigh brands shortlist to be this specific about yours.",
    items: [
      {
        icon: "box",
        name: "Home and furniture",
        what: "Large pieces and long lead times, where dimensions decide it.",
        breaks: "Filters that cannot narrow by size, so your visitor just scrolls.",
      },
      {
        icon: "apparel",
        name: "Apparel",
        what: "Deep size and color grids, where one style becomes forty rows.",
        breaks: "A page that loads every variant image before your first product shows.",
      },
      {
        icon: "consumable",
        name: "Food and drink",
        what: "Small baskets, repeat buyers, and gifting that peaks for six weeks.",
        breaks: "Seasonal ranges bolted on as pages your buyers never find in January.",
      },
      {
        icon: "outdoor",
        name: "Sport and equipment",
        what: "Technical specs that decide the sale, across sizes and grades.",
        breaks: "Kit priced like a commodity, with nothing for you to compare.",
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "What you get whichever one you buy",
    tone: "white",
    intro:
      "Four things that hold whatever you buy. Hold every ecommerce agency Raleigh brands talk to against the same four.",
    items: [
      {
        title: "We start on what you already have",
        body: "The checks run on your current store, on whatever it is built on. If it does not need replacing, we will tell you that and say what does.",
      },
      {
        title: "You get the number before and after",
        body: "We time the pages we are asked to fix, and time them again when done. You see both numbers, not a description.",
      },
      {
        title: "Nothing is locked to us",
        body: "The code, the accounts and the licenses are in your name. If you leave there is nothing to ask us for.",
      },
      {
        title: "Scope is agreed before work starts",
        body: "If it has to change, you see it and agree first.",
      },
    ],
  },

  // ── Block 7: What it takes from the buyer ─────────────────────────────
  whatWeDoAboutItHeading: "Where we would start on your store",
  whatWeDoAboutIt:
    "With the page you have the most of. Whichever category holds the biggest share of your catalog carries the most weight, and nobody has opened it on a phone in a year.\n\nWe time it cold on mobile data and watch the order things arrive in. That tells us whether you have a weight problem or an order problem, and they need opposite fixes.\n\nThen you get the list, worst first. Hand it to us or to anyone else. Any ecommerce agency Raleigh brands hire should start that way.",

  midCta: {
    text: "Want the same timing run on your own category page? Tell us the address and we will send what we find.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure which of the four you need? Describe the store and we will say where we would start.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The first conversation is about what is actually slow and why. It costs you nothing, including when the answer is that we would change very little.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  // Every outcome is about browsing and speed rather than a platform, so the
  // block lands for a reader on WooCommerce or Magento too.
  proofHeading: "Catalogs we rebuilt, and what changed after",
  proof: [
    {
      slug: "everlast-shopify-plus-sports-redesign",
      vertical: "Sports equipment",
      whatWasBuilt: "A large catalog restructured by sport, with filtering and a theme built to load fast",
      outcome: "Page load cut from 6.1s to 1.9s, catalog abandonment down 38%, conversion +152%",
      verified: true,
    },
    {
      slug: "evie-lou-shopify-fashion-cro",
      vertical: "Fashion",
      whatWasBuilt: "Collection pages reorganised around how people actually shop on a phone",
      outcome: "Page load cut from 5.8s to 2.1s, conversion +82%",
      verified: true,
    },
    {
      slug: "candy-kittens-shopify-food-beverage-cro",
      vertical: "Food and drink",
      whatWasBuilt: "The catalog restructured around gifting and occasions, with a gift finder",
      outcome: "Mobile bounce rate down 41%, conversion +182%",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  objectionsHeading: "What usually gives people pause",
  objections: [
    {
      objection: "We are not on Shopify.",
      answer:
        "That is fine, and it is not the first question we would ask. The timing above runs the same way whatever a store is built on, because it measures the page rather than the platform.\n\nAny ecommerce agency Raleigh brands trust should be able to work on what you already have. If moving would help we will say so, and if it would not we will say that too.",
    },
    {
      objection: "Our developer says the site is fine.",
      answer:
        "They may be right, and the way to settle it is a number rather than an opinion.\n\nTime your category page cold on a phone, on mobile data. That is the visit that decides it, and the one an office machine never reproduces.",
    },
    {
      // ADDED after the review passes. Every page ranking for this term leads
      // on being local; five of five claim a Raleigh address. It is the first
      // thing this reader is weighing and the page had no answer to it. We
      // cannot claim presence and will not run down anyone who has it, so the
      // answer concedes what local is genuinely good for and names what it
      // does not decide.
      objection: "We would rather use somebody local.",
      answer:
        "Plenty of good reasons to, and we will not pretend otherwise. Someone in the room for a workshop is worth having.\n\nJust ask both of us the same thing first. Have them time your category page and say what loads first. Distance does not decide that answer, and it is the one you are buying.",
    },
    {
      objection: "We just rebuilt it.",
      answer:
        "Then this should be quick to settle.\n\nA recent build with a slow category page usually has an order problem rather than a weight problem. That is a far smaller job than the one you already paid for, and any ecommerce agency Raleigh brands shortlist should spot it in an afternoon.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  // Four of five ranking pages carry NO FAQ, so depth here is a structural
  // advantage nobody on this SERP is contesting.
  faqHeading: "What brands ask before they pick anyone",
  faqs: [
    {
      question: "How fast should a category page load?",
      answer:
        "Google counts your page good when the biggest thing on screen appears within two and a half seconds, and poor after four. When we timed 31 home and furniture stores, the middle one took 3.7 seconds and fifteen were over four.",
      unique: true,
    },
    {
      question: "Why is my ecommerce site slow?",
      answer:
        "Usually one of two things, and they need opposite fixes. Either the page carries too much, or it carries a normal amount in the wrong order. Timing it cold on a phone tells you which, and guessing wrong wastes the work.",
      unique: true,
    },
    {
      question: "Do you work on WooCommerce or Magento?",
      answer:
        "Yes. We work on whatever your store runs on now. The first job is finding out whether the platform is the problem or something sitting on top of it. Often it is not the platform.",
      unique: true,
    },
    {
      question: "Does site speed affect Google ranking?",
      answer:
        "Yes, though not as much as people hope. Google says these measures are used by its ranking systems, and also that the most relevant page still wins. So speed rarely beats a better answer, but it can separate your page from one that is otherwise close.",
      unique: true,
    },
    {
      question: "How many products is too many for one page?",
      answer:
        "There is no number. The store loading the most pieces in our scan was quicker than most. What matters is what loads first, not how much there is, which is why cutting your catalog rarely fixes it.",
      unique: true,
    },
    {
      question: "Do you build custom ecommerce websites?",
      answer:
        "Yes, and the usual ask is a custom ecommerce website Raleigh NC brands can run themselves: something the team can change without calling anyone. We work remotely, and there is no office in the city to visit. Where you sit does not change how the work is scoped or delivered.",
      unique: true,
    },
    {
      question: "What does an ecommerce agency actually do?",
      answer:
        "Four things, usually. An ecommerce agency Raleigh brands hire designs how your store looks and how people move through it. It builds what a theme cannot. It moves the store when it stops fitting. And it keeps testing what makes people buy.",
      unique: true,
    },
    {
      question: "Can you work with our existing developer?",
      answer:
        "Usually, and often the quickest route. We can scope and hand over, or take the parts nobody on your team has time for. We will not quietly replace somebody doing a decent job.",
      unique: true,
    },
    {
      question: "Do we have to rebuild the whole store?",
      answer:
        "Rarely. Most of what we find on a slow category page is fixable without touching the rest of the site. We will tell you when a rebuild really is the answer, and it is less often than you would think.",
      unique: true,
    },
    {
      question: "How long does ecommerce website development take?",
      answer:
        "A focused fix is usually weeks. Full ecommerce website development Raleigh brands take on runs to months. Most of that time goes on parts nobody shows you. Your product data, your other systems, and whatever has to still work on launch day.",
      unique: true,
    },
    // Two questions were cut here to pay for the segments block: "What do you
    // need from us to start?" (the conversion block already asks for exactly
    // one address) and "What happens if we stop working together?" (howWeWork
    // item three already says nothing is locked to us). Ten questions still
    // puts this page ahead of four of the five ranking pages, which carry none.
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    heading: "Send us the page that worries you",
    whatYouGet:
      "One address is enough. We time it, watch what loads in what order, and tell you whether it is a weight or an order problem.",
    whatWeWillTellYouNotToDo:
      "If your store is fine we will say so, rather than finding you something to buy. Rebuilding a store that works is the worst way to spend a year.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition: "The same timing we ran on 31 stores, run on yours.",
      offer: "Send one address and we will come back with:",
      parts: [
        "How long it takes to show its biggest element, timed cold on a phone.",
        "What loads first, and what is holding the rest up.",
        "The two or three changes we would make, worst first.",
      ],
      limit: "It stops at the findings, and you can hand them to anyone.",
      noObligation: "No charge, and no follow-up sequence.",
    },
  },

  sources: [],

  // Owner's standing instruction for these pages: below 2,500 words.
  wordCountTarget: [2000, 2500],
};
