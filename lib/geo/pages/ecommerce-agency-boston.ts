// Batch 1b, page 23: /services/ecommerce-agency/boston
// Inventory: Geo Inventory & Batch Plan v4.0, row #23.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce agency boston" (10/mo, Google Keyword Planner).
// Secondary: b2b ecommerce agency in boston / ecommerce developers new england /
// ecommerce website development company in boston / top ecommerce agencies in boston.
// Hub: /services/ecommerce-agency. NOTE: that hub lists its children in an
// explicit `children` array rather than discovering them, so this path had to
// be added there by hand or the page ships with no internal link in.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// The Standard's own table: "ecommerce agency <city>" means he wants an
// ecommerce agency and HAS NOT DECLARED A PLATFORM. He may be on Shopify, on
// something else, or on nothing. NEVER write as if he is already on Shopify.
// That is the single thing separating this page from Boston #22 on the other
// hub, whose reader is already on Shopify.
//
// Consequence for the research: whatever this page measures had to read
// identically on Shopify, Magento, WooCommerce, BigCommerce and headless. That
// requirement killed the first candidate (see below) and chose the winner.
//
// ── ONE IDEA (16 words) ─────────────────────────────────────────────────────
// He decides before the cart. Most stores make him hunt for the three answers
// that decide it.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch
// with us" and resolves to #contact.
//
// ── WHAT IS ALREADY TAKEN ON THIS HUB ───────────────────────────────────────
//   New York      every platform has a ceiling; moving pays off, and who
//                 handles the data decides whether yours does
//   Los Angeles   built to sell what is on the shelf; growth means selling
//                 what is not
//   San Diego     the federal rule died, the California one did not
//   San Francisco a salary pays for every week; most work doesn't need every week
//   Austin        easy to buy and hard to judge, so tie every job to a number
//   Dallas        the storefront is the quick part; the systems behind it are the job
// And on the other hub, same city, published today:
//   Boston #22    the facts that decide the sale are written, then hidden
//                 behind a click that nothing else can make
// #22 is the nearest neighbour and the one to stay clear of. The separation:
// #22 is the PRODUCT page and what a machine can read; this is the BUYING
// decision and what a person can find before committing. Different hub,
// different reader (he is not on Shopify yet), different facts, different fix.
// Run check-shingles early rather than after the copy is written.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 23 September 2026 ─────────────────────────────────────────────────
// Nine ranking pages rendered, plus Semrush's ranked list for the primary.
// NOT ONE publishes a measurement of any kind. Zero of nine.
//
// The SERP is structurally different from the Shopify keyword. Half of page
// one is directories and listicles (ClickPost 2,451w, Built In Boston, Clutch,
// Semrush Agency Partners, Sermondo 1,213w, Digital Agency Network). The real
// agency pages are THIN: Barrel 729w, Third and Grove 586w, Netalico 579w,
// Brave New Markets 408w at a doorway URL. Netlynx runs 1,945w with 38 FAQ
// accordions and claims Boston presence, as does ClickPost.
//
// AUTHORITY IS THE STORY, from the Semrush export. Referring domains for the
// top ten: 285, 0, 1, 0, 1, 1, 16, 14, 1, 14. Only bostondigital.com has real
// link strength. Position two is a listicle with zero links. A scraped Semrush
// mirror sits at #12 on someone else's domain. This keyword is winnable on the
// page itself, which is why substance is the whole game here.
//
// Nine or ten of the top twenty are location pages, so the FORMAT is proven.
// And Google blends this query with "digital marketing agency boston" (Thrive,
// Media Components, Seoteric, NewMedia, Brick Marketing, Ladybugz, TribalVision,
// AMP all rank), which is why the disciplines below cover growth and not only
// building. Three local-pack slots sit above everything and are unavailable to
// us; we have no office and will not pretend otherwise.
//
// ── THE MEASUREMENT THAT WAS REJECTED FIRST ─────────────────────────────────
// On-site search quality, piloted on six New England sites across Shopify,
// WooCommerce and Magento. It failed: 3 of 6 had no search input in the DOM
// because it sits behind a click; one returned identical counts for the correct
// spelling and a typo because navigation links were being counted; one reported
// no results for the correct term and 43 for the typo; the Magento site
// returned zero for both because product-link patterns differ per platform.
// Counting results comparably across four platforms is the unreliable part.
// Recorded here so nobody re-proposes it.
//
// A platform census was also considered and rejected on the owner's call: we
// are a Shopify agency, so "Shopify won" is the most self-serving finding we
// could publish, and a reader on WooCommerce would be told he picked wrong,
// which breaks Step 04 #2 (never shut out a buyer).
//
// ── ORIGINAL OBSERVATION, 23 September 2026 ─────────────────────────────────
// 35 New England brands attempted across MIXED platforms on purpose. 27
// measured. Every signal is text presence in a document, which reads the same
// on every platform — that is exactly why it survived where search died.
//
//   WHAT SHIPPING COSTS      states a figure 5 of 27 | mentions it 12 | silent 10
//   WHEN IT ARRIVES          states a timeframe 1 of 27 | mentions it 14 | silent 12
//   HOW LONG TO SEND IT BACK states a window 3 of 27 | mentions it 16 | silent 8
//
// The sharpest number: 19 of 27 talk about returns on the product page and 3
// say how long you have. All three of those appeared only after opening a tab.
//
// BOTH READINGS ARE PUBLISHED SIDE BY SIDE. "Mentions returns" and "tells you
// the window" are different claims, and #22 had to be corrected twice for
// conflating a tight pattern with an absolute absence. The weaker reading sits
// next to the stronger one in the table rather than behind it.
//
// ATTRITION, stated on the page: 8 of 35 unreachable. King Arthur Baking
// serves a bot-protection interstitial; the rest had no reachable product page
// or reset the connection. That attrition fell mainly on the non-Shopify and
// headless sites, so the measured set leans Shopify even though the sample did
// not. Three of my own method bugs were found and fixed before any number was
// used: sitemaps read through the browser returned Chrome's XML viewer rather
// than the markup; Stonewall's product URLs end in .html with no /product/
// segment; and the strict patterns had to be re-run with generous wording and
// with the shipping and returns tabs clicked.
//
// ── SOURCED FACTS ───────────────────────────────────────────────────────────
// Two Massachusetts regulations, both verified from the regulation text, both
// reaching sellers who target Massachusetts rather than sellers located there,
// which is what makes them usable on a page that claims no presence.
//
// THE TRAP, checked rather than assumed: 940 CMR 38.04(2)(a) EXCLUDES Shipping
// Charges and Government Charges from the fee disclosure at the initial price
// presentation. So this page must never say Massachusetts requires shipping in
// the advertised price. What 38.04(3)(a) requires is that the FINAL amount
// before the sale includes shipping, and 38.04(4) requires the total price
// before a consumer is asked for personal information.
//
// NO SOURCE LINKS OR NAMES IN VISIBLE COPY (owner's standing rule). Everything
// is in gradientFacts with url, publisher and capture date.
// NO PRICES ANYWHERE (owner's standing rule).
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Chosen so none repeats Boston #22 or California, and so the page is not read
// as Shopify-only advice.
//   proof        Dryrobe (its published results include a 31% fall in returns
//                and 23% better checkout completion, which is this page's own
//                subject), Henchman (B2B, carrying the secondary), This Works
//   disciplines  Dryrobe, Henchman, This Works, Everlast
//   results      Everlast, Wild, Sneak Energy, each with a signed-off quote
//
// PRESENCE (Master §4): none claimed. The office question is answered plainly.
// REVIEW: 180 days; the scan is a dated observation and policies change.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_BOSTON: GeoPage = {
  type: "geo",
  slug: "boston",
  path: "/services/ecommerce-agency/boston",
  hub: "/services/ecommerce-agency",
  status: "published",

  geo: {
    name: "Boston",
    type: "metro",
    areaServed: "Boston",
  },
  archetype: ["D"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency boston",
  secondaryKeywords: [
    "b2b ecommerce agency in boston",
    "ecommerce developers new england",
    "ecommerce website development company in boston",
    "top ecommerce agencies in boston",
  ],
  faqKeywords: [
    "what should an ecommerce agency proposal include",
    "do you work with platforms other than shopify",
    "how long does an ecommerce build take",
    "can you handle b2b and wholesale ordering",
    "should shipping cost be on the product page",
  ],
  reviewedPhrases: ["in Boston"],

  metaTitle: "Ecommerce Agency Boston | Build, B2B, Migration & Growth",
  metaDescription:
    "An ecommerce agency Boston brands hire for build, B2B, migration and growth. See what 27 New England stores tell a buyer before the cart, and check your own.",
  shortTitle: "Ecommerce agency Boston",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Owner's pick, 23 September 2026, from a menu of five. Names the finding
  // without being a riddle, and "before the cart" is where the page lives.
  h1: "Ecommerce agency Boston, stores that answer before the cart",
  qualifier:
    "Build, B2B, migration, conversion and growth. Whatever you sell on, take one piece or all of it, and the scope is agreed in writing first.",

  heroGlow: true,
  heroCtaLabel: "Get in touch with us",
  relatedTone: "white",
  whatWeDoAboutItTone: "cream",
  // The hook promises the research is below; without this the reader meets the
  // whole discipline menu first. Owner's call, 24 September 2026, after a store
  // owner review and a CRO review independently stopped at the same place.
  assetBeforeServices: true,

  // Composite built only from this page's own case studies. Deliberately a
  // DIFFERENT composition from Boston #22 on the other hub, which is a laptop
  // flanked by two product pages: this is a diagonal cascade of three
  // storefronts, and its badges carry REDUCTIONS rather than growth, because
  // what this page argues for is fewer returns and less order handling.
  // Source layout: scratchpad mk/b23-hero.html, rendered at 2x, exported at
  // 1400px. cutout drops the hero's own shadow and rounded corners.
  heroImage: {
    cutout: true,
    // v2, not a re-export of v1: next/image caches per path, so overwriting the
    // same filename kept serving the old badge positions even though the bytes
    // on disk had changed. Same lesson as the California hero.
    src: "/images/ecommerce-agency-boston-hero-v3.webp",
    alt: "Stores we built for Dryrobe, This Works and Henchman, with results of a 31% lower return rate for Dryrobe and 70% less order handling for Henchman",
  },

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years building stores" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "{storesBuilt} stores built, on more than one platform.",
    subheading: "Apparel, wholesale, beauty, food and drink. Brands selling direct, through buyers, or both.",
  },

  assetCtaLabel: "See what 27 stores tell a visitor",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "A visitor makes up their mind before they reach the cart. They want three things: what delivery costs, when it turns up, and how long they have to send it back.\n\nSo we went and checked. We opened 27 New England stores, on five different platforms, and read the product page the way a visitor does. One of them said when it would arrive.\n\nEverything we found is below. Run the six checks on your own store before you sit through another agency pitch.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Boston brands hire to build, move and grow an online store, direct to consumer and B2B. We work across platforms rather than one. Before a build goes live we check what a visitor can find out before they buy.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Owner approved this copy verbatim, 23 September 2026, after rejecting two
  // earlier place blocks on other pages as geography tours. It ties the city to
  // the page's own subject and carries the B2B secondary, and it claims nothing
  // about where we are.
  placeLayerHeading: "Some visitors are shopping for their company",
  placeLayer:
    "Plenty of Boston brands sell to people and to companies at the same time. A university, a hospital, an office buying gifts for staff. If you do, the same three answers decide both sales.\n\nThe difference is what happens when the answers are missing. Someone buying for their company will email and ask, because they cannot order without them. A shopper just leaves, and you never hear why.\n\nWhoever builds your store should be building for both at once.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "Massachusetts already requires your returns policy and your total price",
  gradientLayer:
    "Delivery cost, arrival date, returns window. Two of those three are not just good practice. They are required.\n\n**Your returns policy has to be in front of them before the sale completes.** Massachusetts makes it an unfair and deceptive act to hide it. You have to disclose the exact nature and extent of your refund, return or cancellation policy, clearly, before the transaction completes. Not on request. Before.\n\n**And the total price has to come before you ask them for anything about themselves.** A newer rule makes it unfair to ask for personal details, billing included, before you have shown the total price. The final amount they see has to include shipping. The price you advertise earlier does not.\n\nBoth rules follow the customer, not the seller. They reach any business selling into Massachusetts, wherever it sits. We are not lawyers and this is not legal advice; what applies to you is your counsel's call. For us it lands in the build. It belongs in the brief you hand an ecommerce agency Boston brands trust.",
  gradientFacts: [
    {
      id: "ma-940-cmr-3-13-refund-disclosure",
      claim:
        "940 CMR 3.13(2)(a), Massachusetts Attorney General's consumer protection regulations, read from the regulation text: it is an unfair and deceptive act or practice 'To fail to clearly and conspicuously disclose to a buyer, prior to the consummation of a transaction, the exact nature and extent of the seller's refund, return, or cancellation policy.' Supports the first rule in the gradient block and the returns row of the asset.",
      url: "https://www.law.cornell.edu/regulations/massachusetts/940-CMR-3-13",
      publisher: "Massachusetts 940 CMR 3.13, via Cornell Legal Information Institute",
      captured: "2026-09-23",
      reviewAfterDays: 365,
    },
    {
      id: "ma-940-cmr-38-04-total-price",
      claim:
        "940 CMR 38.04, Unfairness and Deception in Connection with Marketing/Solicitation/Sale, applying to 'any Advertising or marketing, solicitation, or offer of Sale that is Targeted To or results in a Sale in Massachusetts'. Subsection (4) makes it an unfair and deceptive practice to fail to disclose Clearly and Conspicuously the Total Price of any Product 'prior to requiring a consumer to provide any personal information, including billing information'. Subsection (3)(a) requires the final presentation of price before the Sale to state the final transaction amount inclusive of applicable Shipping Charges and Government Charges. IMPORTANT AND CHECKED: subsection (2)(a) expressly EXCLUDES Shipping Charges and Government Charges from the fee disclosure required at the initial price presentation, so this page must not claim Massachusetts requires shipping to be inside the advertised price.",
      url: "https://www.law.cornell.edu/regulations/massachusetts/940-CMR-38-04",
      publisher: "Massachusetts 940 CMR 38.04, via Cornell Legal Information Institute",
      captured: "2026-09-23",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-new-england-pre-cart-2026",
      claim:
        "Original observation, 23 September 2026. 35 brands headquartered across Massachusetts, Maine, Vermont, Connecticut and Rhode Island were attempted, deliberately mixed across platforms; 27 were measured, on Shopify, WooCommerce, BigCommerce, Salesforce Commerce and headless builds. One product page per store was read twice, first as delivered and again with the shipping and returns tabs opened, and every signal is text presence in the document rather than a platform-specific element. Shipping cost: a figure stated on 5 of 27, shipping mentioned without a figure on 12, no mention on 10. Delivery timing: a timeframe stated on 1 of 27, mentioned without a timeframe on 14, no mention on 12. Returns: a window in days stated on 3 of 27, returns mentioned without a window on 16, no mention on 8; all three of the stated windows appeared only after a tab was opened. Limits: one product page per store, so a store may do better elsewhere in its catalog; 8 of 35 were unreachable, one of them serving a bot-protection interstitial, and that attrition fell mainly on non-Shopify and headless sites, so the measured set leans Shopify although the sample did not; policy pages carry more than product pages do and are counted separately. Brands are counted, never named.",
      url: "https://www.ecommwizards.com/services/ecommerce-agency/boston",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-09-23",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "We checked 27 stores. One said when the order would arrive.",
    intro:
      "Six checks, each a minute on your own store. Run them before you brief an ecommerce agency Boston brands use. We ran them on 27 New England brands in September 2026, across five platforms. Brands are counted, not named.",
    renderer: "checklist",
    tone: "white",
    method: {
      sampleSize: 27,
      window: "one product page per store, 23 September 2026",
      captured: "2026-09-23",
      howGathered:
        "Each product page was read twice: as it arrives, then again with the shipping and returns tabs opened. We counted whether the page states a figure and whether it only mentions the subject. That gap is most of what you see below. Three limits. One product page per store. Eight of the thirty-five were unreachable, one behind bot protection, and most of those were not on Shopify, so the measured set leans that way. Policy-page facts are counted separately.",
    },
    columns: ["The check", "What we found across 27 stores", "What it means for you"],
    rows: [
      {
        label: "Does it say what delivery costs?",
        cells: ["5 stated a figure. 12 mentioned shipping without one. 10 said nothing", "10 of them let a visitor reach the cart before learning what delivery costs"],
      },
      {
        label: "Does it say when it arrives?",
        cells: ["1 store in 27 gave a timeframe", "They are deciding whether it arrives in time, and guessing"],
        note: "This was the worst result of the six by a distance, and the cheapest to put right.",
      },
      {
        label: "Does it say how long they have to send it back?",
        cells: ["3 stated a window. 16 mentioned returns without one. 8 said nothing", "Talking about returns is not the same as answering the question"],
        note: "The gap between 16 and 3 is the finding. Nearly everyone raises the subject; almost nobody closes it.",
      },
      {
        label: "Were the return windows behind a click?",
        cells: ["All three of them. Every stated window needed a tab opened first", "A shopper in a hurry does not open tabs"],
      },
      {
        label: "Does the policy page agree with the product page?",
        cells: ["Policy pages carried more than product pages every time", "The answer exists. It is just not where they are standing"],
      },
      {
        label: "Is the total right before you ask who they are?",
        cells: ["Not measured. We stopped at the product page rather than enter 27 checkouts", "The one of the six we could not run for you, and the one with a rule attached"],
        note: "Sell to buyers here and the total price has to be disclosed before you ask for personal or billing details.",
      },
    ],
    disclaimer:
      "This is a build checklist, not legal advice, and we are not lawyers. Whether a rule reaches your business, and how, is a question for your counsel.",
    derived:
      "Nineteen of these twenty-seven stores talk about returns on the product page. Three say how long you have.\n\nNone of this is a platform problem. We found the same gap on Shopify, WooCommerce, BigCommerce, Salesforce and headless builds. None of these three answers is a platform feature.\n\nThe subject gets raised and the question never gets answered, so the buyer guesses at the moment of deciding.\n\nRun the first three on your own best seller before you hand the job to an ecommerce agency Boston brands recommend.",
    derivedList: {
      title: "Three checks to run on your own store this week",
      items: [
        "Open your best seller as a stranger would. Without clicking anything, write down the delivery cost, the arrival window and the returns window.",
        "Count how many of the three you had to go looking for, and how many clicks.",
        "Put the same three answers on the page, then watch your support inbox.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why this is not a copywriting job",
        body:
          "**The answers usually exist.** They sit on a policy page, where nobody is standing.\n\n**Where a fact lives decides where it can appear.** A returns window held as store data shows on the product page, in the cart and in the email. Typed into a policy page, it can only ever be there.\n\n**The cost lands twice.** A visitor who cannot find it either leaves, or buys and asks your team.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Disciplines ───────────────────────────────────────────────────────
  // Four rows rather than a six-service menu. The SERP blends this query with
  // digital marketing, so growth earns a row alongside building.
  disciplines: {
    label: "What we do",
    heading: "Build it, move it, sell wholesale on it, and grow it",
    intro: "Take one of these or all four. You can start anywhere, and each row links to the store it was done for.",
    items: [
      {
        label: "Design and build",
        heading: "We build the buying part, not just the browsing part",
        covers: ["Storefront build", "Product data", "Checkout", "Delivery promises", "Returns flows"],
        imageAlt: "A store rebuilt for the outdoor apparel brand Dryrobe",
        caseSlug: "dryrobe-shopify-plus-redesign",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "B2B and wholesale",
        heading: "We put your trade buyers on the same store, with their own terms",
        covers: ["Company accounts", "Price lists", "Payment terms", "Reordering", "Order approval"],
        imageAlt: "A wholesale ordering build for the tool brand Henchman",
        caseSlug: "henchman-shopify-plus-b2b",
        cta: { label: "Explore B2B builds", href: "/services/shopify-b2b-store-setup" },
      },
      {
        label: "Migration",
        heading: "We move your store and keep what already ranks and sells",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Search equity"],
        imageAlt: "A replatforming project for the wellbeing brand This Works",
        caseSlug: "this-works-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Growth",
        heading: "We find where buyers drop off and test the fix before it ships",
        covers: ["A/B testing", "Product pages", "Email and retention", "Paid landing pages"],
        imageAlt: "Conversion work for the sportswear brand Everlast",
        caseSlug: "everlast-shopify-plus-sports-redesign",
        cta: { label: "Explore growth work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "What holds whatever you hire us for",
    tone: "cream",
    intro: "Four things to expect from an ecommerce agency Boston brands keep, whether you buy one fix or the whole build.",
    items: [
      {
        title: "We start with what you have",
        body: "The checks run on your current store, on whatever it is built on. If it does not need replacing, we will say so.",
      },
      {
        title: "Your answers end up reusable",
        body: "Delivery windows and returns terms go into your store data. From there they show on the page, in the cart and in the email, with nobody retyping them.",
      },
      {
        title: "Nothing is locked to us",
        body: "The repository, the theme and the app accounts are in your name. If you leave, there is nothing to ask us for.",
      },
      {
        title: "Scope is agreed before work starts",
        body: "If it has to change, you see the change and agree to it first.",
      },
    ],
  },

  // ── Block 6: What happens first ───────────────────────────────────────
  whatWeDoAboutItHeading: "What happens first",
  whatWeDoAboutIt:
    "It starts with the six checks, run on your homepage and your best seller. You get a list of what a buyer can find before they commit, and where they have to go looking.\n\nThen you choose. Fix it on the store you have, or fold it into a rebuild, a migration or a B2B build. Either way the scope is agreed in writing first.\n\nWhoever you hire, ask for that list before you agree to a redesign. It is a fair first question for an ecommerce agency Boston brands trust.",

  midCta: {
    text: "Rather not run them yourself? Send us your store, name your best seller, and we'll run all six.",
    label: "Get in touch with us",
  },

  // Added 24 September 2026. A CRO review measured 7,038px between the hero
  // button and the first inline prompt, a stretch holding twelve links that all
  // lead away from the page. These drop a way to act at the two points where
  // intent actually peaks: straight after the proof, and straight after the
  // service menu. Neither is a second offer; both point at #contact.
  proofCta: {
    text: "Wondering what your own store would score? Send us the link.",
    label: "Get in touch with us",
  },
  servicesCta: {
    text: "Not sure which of the four you need? Tell us what's broken and we'll say which.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The first step is the list of what your visitor cannot find. It's free, and it's yours either way.",
    label: "Get in touch with us",
  },

  // ── Block 7: Proof ────────────────────────────────────────────────────
  proofHeading: "What we built, and what it did for the business",
  proof: [
    {
      slug: "dryrobe-shopify-plus-redesign",
      vertical: "Outdoor apparel",
      whatWasBuilt: "A rebuild focused on the checkout and what the product page promises",
      outcome: "+89% online revenue, +23% checkout completion, -31% return rate",
      verified: true,
    },
    {
      slug: "henchman-shopify-plus-b2b",
      vertical: "B2B and wholesale",
      whatWasBuilt: "A wholesale ordering system with company accounts and terms",
      outcome: "+58% online revenue, -70% wholesale order processing time",
      verified: true,
    },
    {
      slug: "this-works-shopify-plus-migration",
      vertical: "Wellbeing",
      whatWasBuilt: "A replatforming that kept the search equity and reworked the mobile journey",
      outcome: "+38% conversion rate, +45% mobile conversion",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  // Three, not four: the grid runs three per row and a fourth leaves an orphan.
  objectionsHeading: "What you're probably thinking",
  objections: [
    {
      objection: "We're not on Shopify.",
      answer:
        "Then we start where you are. The checks in the table ran on five different platforms and found the same thing on all of them, because none of it is a platform feature.\n\nIf moving is the right answer we will tell you, and if it is not, we will tell you that instead.",
    },
    {
      // Replaced the "you are not local" objection on the owner's call,
      // 24 September 2026. The no-office answer still lives in the FAQ, where
      // it is asked directly; here the more useful objection is the one this
      // page is written for: a reader who has not chosen a platform, which is
      // the one thing separating him from the Boston page on the other hub.
      objection: "We haven't picked a platform yet.",
      answer:
        "Then this is the cheapest moment to sort it. These three answers are the same work on every platform.\n\nWhat matters is where they are stored, not whose logo is on the invoice. Decide that before the build and you pay once. A fair question for an ecommerce agency Boston brands hire.",
    },
    {
      objection: "Our last agency missed every deadline.",
      answer:
        "It is the most common thing we hear about the last ecommerce agency Boston brands hired.\n\nScope is agreed in writing first. The work runs in phases you can stop at. Any change comes back to you before anyone carries on, so a slip shows up in week two rather than week ten.",
    },
  ],

  // ── Client quotes ─────────────────────────────────────────────────────
  results: {
    heading: "Three more owners, in their own words",
    intro: "An ecommerce agency Boston brands vouch for should show you this. Each number links to its case study, so you can check it.",
    slugs: [
      "everlast-shopify-plus-sports-redesign",
      "wild-shopify-plus-subscriptions",
      "sneak-energy-shopify-redesign",
    ],
    headlines: {
      "everlast-shopify-plus-sports-redesign": "{brand} lifted conversion 152% and orders 48%",
      "wild-shopify-plus-subscriptions": "{brand} reached 80K+ monthly subscribers and cut churn 34%",
      "sneak-energy-shopify-redesign": "{brand} took mobile conversion up 68% and add-to-cart up 52%",
    },
  },

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  faqHeading: "What brands ask before they hire us",
  faqs: [
    {
      question: "Do you only work on Shopify?",
      answer:
        "No. We build most often on Shopify, and we work with stores on other platforms too. The checks on this page were run across five of them. An ecommerce agency Boston brands hire should tell you what each platform would cost you in work, not which one it prefers. That is the answer you will get here.",
      unique: true,
    },
    {
      question: "How long does an ecommerce build take?",
      answer:
        "Six to ten weeks for most stores once your scope is agreed. A migration carrying real order history runs longer, and the extra time goes on data rather than design.",
      unique: true,
    },
    {
      question: "Should the delivery cost be on the product page?",
      answer:
        "Put what you can there. A flat rate or a free-shipping threshold can sit on the page; an exact cost often cannot until an address exists. Of the 27 stores we checked, 5 managed a figure and 1 gave an arrival window, so there is room to be the clearest store a buyer sees that day. Whoever builds your store should be able to tell you which of the two it can support.",
      unique: true,
    },
    {
      question: "Can you handle B2B and wholesale ordering as well as retail?",
      answer:
        "Yes. Company accounts, price lists, order minimums, payment terms and reordering can run alongside your retail store, not as a second site. That is what a b2b ecommerce agency in Boston should set up for you. It is what we built for the wholesale brand above.",
      unique: true,
    },
    {
      question: "What should a proposal from the top ecommerce agencies in Boston include?",
      answer:
        "A written scope, a list of what your store fails today, who is doing the work, and what happens after launch. Ask for the list first. Any ecommerce agency Boston brands consider should open with it, and ours starts with the six checks.",
      unique: true,
    },
    {
      question: "Are you ecommerce developers New England brands can work with remotely?",
      answer:
        "Yes, and remotely is how it runs. Where your office sits does not change how the work is scoped, built or released.",
      unique: true,
    },
    {
      question: "Are you an ecommerce website development company in Boston?",
      answer:
        "We work for Boston brands, with no office in the city to visit. We would rather say so than let you find out later. You get our working hours, a named lead and a release process you can see.",
      unique: true,
    },
    {
      question: "Do you support the store after launch?",
      answer:
        "Most brands keep us on for releases and fixes. If you would rather hand it to your own developer, the documentation goes with it.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  conversion: {
    // Copy rewritten 24 September 2026 to match the fields the shared form
    // actually has. It asks for a store URL and carries one free-text box, so
    // asking for "a product page" pointed at a field that does not exist.
    heading: "Send us your store",
    whatYouGet:
      "Put your store URL in the form and name your best seller in the box underneath. We will run the same six checks and send back what a buyer can find before they commit, and what they have to go hunting for.",
    whatWeWillTellYouNotToDo:
      "If you are about to commission a redesign to fix this, wait. Most of what we find is store data and template settings, and a new design carries the same gap across.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition: "The same six checks from the table, run on your store.",
      offer: "Put your store URL in the form, and name your best seller in the box underneath. We'll run the checks and hand you the findings:",
      parts: [
        "What a visitor can learn without clicking anything.",
        "Which of the three answers are missing, and where they actually live.",
        "What to fix first, and what to leave alone.",
      ],
      limit: "It stops at the findings, and you can take the list to any developer.",
      noObligation: "No charge, and the findings are yours either way.",
    },
  },

  sources: [],

  // Owner's standing instruction for these pages: below 2,500 words.
  wordCountTarget: [2000, 2500],
};
