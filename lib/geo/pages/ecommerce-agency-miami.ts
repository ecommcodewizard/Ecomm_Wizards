// Batch 1b, page 16: /services/ecommerce-agency/miami
// Inventory: Geo Inventory & Batch Plan v4.0, row #16.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce agency miami" (10/mo, inventory).
// Secondaries supplied by the owner 1 October 2026: "ecommerce development
// miami", "ecommerce website design miami", "miami beach ecommerce web design",
// "top ecommerce development agency in miami".
//
// ── WHAT THE SECONDARIES CHANGE ─────────────────────────────────────────────
// The primary is broad, but every secondary is DEVELOPMENT or DESIGN. That is
// where the demand behind this URL actually sits, so design and build carry the
// weight in the services menu and lead the discipline rows. The menu still runs
// wide, because the primary leaves the service open and narrowing it would shut
// out a buyer who wants CRO or retention.
//
// Two secondaries are unusable in prose and live in secondaryKeywords only:
// "miami beach ecommerce web design" names a locale we would have to imply a
// presence in, and "top ecommerce development agency in miami" contains the
// literal "in miami" that Master Strategy section 4 forbids and
// check-forbidden enforces.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// "ecommerce agency <city>": PLATFORM IS OPEN and SERVICE IS OPEN. He may be on
// Shopify, on something else, or on nothing. He has not named a service.
// So: services menu early, no line that assumes a platform, and no line that
// assumes which of the four kinds of work he came for.
//
// ── ONE IDEA (11 words) ─────────────────────────────────────────────────────
// Miami shops in three languages. Most stores here sell in one.
//
// ── SECTION JOBS, after the owner's review on 1 October 2026 ────────────────
// The first draft had the hook and the place layer both announcing the language
// statistic, which is one section's job done twice. Owner's rule: a section
// earns its place or it goes. They now do three different jobs:
//   hook         - the one market number, stated plainly, and nothing else.
//   place layer  - whether it is even his problem, and our promise not to sell
//                  him a second storefront if his traffic says national. The
//                  owner asked for this reassurance in the top three sections
//                  rather than buried in the asset.
//   gradient     - ONE statistic (40% never buy) and the argument off it. The
//                  first draft stacked four numbers here and read as a data
//                  dump. Minimal copy is a positioning decision, not a style.
//
// Migration is in the services menu because we only build on Shopify: a reader
// on WooCommerce or BigCommerce has nothing else he can buy from us, and this
// keyword leaves his platform open. Standing instruction, repeated 1 October.
//
// The idea is stated about THE MARKET, never about his store. Step 04 rule 4
// forbids guessing what is broken, and a page that opens by telling him his
// store is monolingual is guessing. The asset therefore carries a "skip it
// when these are true" list, the same self-handicapping shape the San
// Francisco page uses for its hire-versus-retainer model.
//
// ── WHAT IS ALREADY TAKEN ───────────────────────────────────────────────────
// On this hub: Austin owns judging value by a number, Boston the three answers
// before the cart, Dallas what sits behind the storefront, Los Angeles selling
// what is not on the shelf, New York the platform ceiling, San Diego
// subscription law, San Francisco in-house cost, Raleigh the category page and
// load order, Minneapolis photography built for a shelf. Language and the
// second storefront are unclaimed across the whole programme.
//
// No twin page exists for this metro yet. When shopify-development-agency/miami
// is built, section 5.10 forces a different archetype emphasis on it, and the
// language argument is spent here.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// D, density-led: the argument is built on who is actually in this market, not
// on a vertical. Archetype A is deliberately NOT used. Master section 5.10's
// vertical-led block ("What [vertical] brands here get wrong on Shopify")
// produces exactly the narrowing that cost us the Los Angeles page a rewrite.
// Miami's verticals are signalled through the proof and the hero video only.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// Four sourced facts, all in gradientFacts below. The CSA Research study is
// from 2020 and the page says so in its own prose rather than hiding it; it is
// still the largest survey anyone has run on language and buying, and the page
// frames it as a direction rather than a decimal.
//
// The Shopify Translate & Adapt fact is stated conditionally ("on Shopify")
// because the platform is open on this keyword. It is not an assumption that
// he is on Shopify.
//
// Rows two to five of the Only-Here Asset are our own planning view of what the
// work involves, not a measurement, and method.howGathered says so.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_MIAMI: GeoPage = {
  type: "geo",
  slug: "miami",
  path: "/services/ecommerce-agency/miami",
  hub: "/services/ecommerce-agency",

  geo: {
    name: "Miami",
    type: "metro",
    areaServed: "Miami, Florida",
  },
  archetype: ["D"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency miami",
  secondaryKeywords: [
    "ecommerce development miami",
    "ecommerce website design miami",
    "miami beach ecommerce web design",
    "top ecommerce development agency in miami",
  ],
  faqKeywords: [
    "ecommerce agency cost miami",
    "how long does a store build take",
    "who owns the store code",
    "do you build in more than one language",
  ],
  // "in Miami" appears once, in the place-layer heading the owner dictated on
  // 1 October 2026: "Three in four people in Miami speak a language other than
  // English". It describes the city's residents, not us, and makes no claim
  // that we are located here. Read and approved rather than auto-allowed.
  reviewedPhrases: ["in Miami"],

  metaTitle: "Ecommerce Agency Miami | Design, Development, Growth Team",
  metaDescription:
    "An ecommerce agency Miami brands hire for design, development, migration and growth. We read your traffic first and tell you what your store actually needs.",
  shortTitle: "Ecommerce agency Miami",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Names the three kinds of work (service is open) and gives the why-us
  // through the market, not through his store.
  h1: "Ecommerce agency Miami brands hire when the store has to earn its keep",
  qualifier:
    "Design, development, migration to Shopify, CRO and email. Take one of those or take all of them. You get a fixed price and a start date in writing before we touch anything.",

  heroImage: {
    src: "/images/Case%20studies/posters/John%20Hardy%20video.webp",
    alt: "John Hardy's Shopify Plus store, rebuilt to sell across markets",
    video: "/images/Case%20studies/John%20Hardy%20video.mp4",
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
    subheading: "Jewelry, beauty, outdoor and food brands, among others.",
  },

  assetCtaLabel: "See what we'd check first",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "A store either pays for itself or it doesn't.\n\nSo we read yours before we pitch anything at it. Sometimes the answer is a rebuild. Sometimes it's a move off the platform that's holding you back. Sometimes it's three small fixes and no project at all.\n\nYou get that answer first. The quote comes after it.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Miami brands hire for design, development, CRO and email. We build on Shopify. We also move stores onto it from WooCommerce, Magento and BigCommerce. You buy the work you need, at a price agreed before we start.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  placeLayerHeading: "Three in four people in Miami speak a language other than English",
  placeLayer:
    "Whether that matters to you depends on who's actually buying.\n\nSome stores here sell to the neighborhood. Some sell to the whole country out of a warehouse that happens to sit here. For the second kind, none of this is your problem.\n\nFor the first kind it might be a big one. CSA Research asked 8,709 shoppers across 29 countries, and 40% said they never buy from a site in a language that isn't theirs. Never, not less often. That survey ran in 2020 and nobody has run a bigger one since, so treat it as a direction rather than a decimal.\n\nYour own analytics settle it in about ten minutes. They already hold the language every browser asked for and the country it came from.\n\nSo we read that before we quote you anything, and anyone on your ecommerce agency Miami shortlist should do the same. If your buyers are national and reading in English, we'll say so, and we won't sell you a second storefront you don't need.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "Most of what's costing you orders doesn't show up in a brief",
  gradientLayer:
    "A brief says what you want built. It doesn't say what's losing you money now.\n\nThose are two different questions, and the second one usually changes the answer to the first.\n\nSo we read the store before we price anything. An ecommerce agency Miami quote that lands before that has guessed at it.\n\nHere's the list we work through, and what each line actually tells us.",
  gradientFacts: [
    {
      id: "acs-2024-miami-dade-language",
      claim:
        "U.S. Census Bureau, American Community Survey 2024 1-year estimates, Miami-Dade County, Florida, read via Census Reporter on 1 October 2026. Population aged 5 and over speaking a language other than English at home 75.7% plus or minus 0.6% (2,033,083 plus or minus 16,586.4). The page states this once, in the hook, in plain words as 'three in four people here don't speak English at home', which rounds 75.7% down rather than up. Foreign-born population in the same table is 55.3% (1,570,170 plus or minus 16,991); it is recorded here for the next writer but is deliberately NOT on the page, because the owner asked for one number per argument rather than a stack of them.",
      url: "http://censusreporter.org/profiles/05000US12086-miami-dade-county-fl/",
      publisher: "U.S. Census Bureau, American Community Survey 2024 1-year estimates",
      captured: "2026-10-01",
      reviewAfterDays: 365,
    },
    {
      id: "csa-cant-read-wont-buy-2020",
      claim:
        "CSA Research, 'Can't Read, Won't Buy - B2C', published 7 July 2020, fielded with Kantar. 8,709 verified consumers across 29 countries in Europe, Asia, North America and South America, filtered from 31,933 screened. Findings quoted on the page: 76% of online shoppers prefer to buy products with information in their own language, and 40% will never buy from websites in other languages. The page states the study's 2020 date in its own prose and tells the reader to treat it as a direction rather than a precise figure, because it is six years old at time of writing. No larger study on language and purchase behavior has been published since.",
      url: "https://csa-research.com/l/media/Consumers-Prefer-their-Own-Language",
      publisher: "CSA Research, Can't Read, Won't Buy - B2C",
      captured: "2026-10-01",
      reviewAfterDays: 365,
    },
    {
      id: "shopify-translate-and-adapt-2026",
      claim:
        "Shopify App Store listing for Translate & Adapt, Shopify's own first-party translation app, read 1 October 2026. The app auto-translates up to two languages at no cost, and an unlimited number of further languages can be added manually. It pairs with Shopify Markets for localized domains, pricing and payment methods. The page states this conditionally ('if you're on Shopify') because the target keyword leaves the reader's platform open and the page must not assume he is on Shopify.",
      url: "https://apps.shopify.com/translate-and-adapt",
      publisher: "Shopify App Store",
      captured: "2026-10-01",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "What we read before we quote you",
    intro:
      "Five things, in this order. Each one either turns into work or rules it out, and the ruling out is the useful half.",
    renderer: "comparison",
    method: {
      captured: "2026-10-01",
      howGathered:
        "This is the order we work in, not a measurement of anything. It comes from the stores we've built and the ones we've been called in to fix. Treat it as a list to argue with. None of it is about your store until we've opened it.",
    },
    columns: ["What we read", "What it tells us", "What usually comes out of it"],
    rows: [
      {
        label: "Load time on your top five pages",
        cells: [
          "What you lose before anyone sees a product",
          "A theme rebuild, or four fixes and no project",
        ],
        note: "We start here because it's the cheapest thing to measure and the most common thing to find.",
      },
      {
        label: "The platform you're on",
        cells: [
          "Whether the platform is the thing holding you back",
          "A migration to Shopify, or leaving you where you are",
        ],
        note: "We only build on Shopify, so we'll say plainly when moving isn't worth it for you.",
      },
      {
        label: "Where people drop out of checkout",
        cells: ["Whether the problem is the store or the traffic", "CRO work, or a conversation about your ads"],
        note: "Plenty of stores don't have a conversion problem. They have a traffic problem wearing one.",
      },
      {
        label: "Where your visitors come from, and what language they asked for",
        cells: ["Whether a second storefront would pay for itself", "Usually nothing. Occasionally a second store."],
        note: "This is the Miami question from earlier. For most stores here the number is too small to act on, and we'll show you the figure either way.",
      },
      {
        label: "What your email flows are doing",
        cells: ["How much of your revenue is repeat custom", "Flow builds, or nothing if yours already work"],
        note: "The cheapest revenue in any store is the customer you already paid to get.",
      },
    ],
    derived:
      "Four of those five usually come back as no. That's the point of doing them in this order: the cheap checks rule things out before anyone writes a proposal.\n\nWhat's left is a short list of work with a number against each line, and you can take one line or all of them.\n\nAnyone on your ecommerce agency Miami shortlist should be willing to show you this before they quote, not after.",
    derivedList: {
      title: "When we'd tell you not to hire us",
      items: [
        "The fixes are small enough that your own developer should do them.",
        "You're staying on a platform we don't build on, and moving isn't worth it yet.",
        "What you need is more traffic, not a better store.",
        "You're picking on price. We'll lose that one, and we'd rather say so now.",
      ],
    },
    supportingBlocks: [
      {
        heading: "What it costs",
        body:
          "**A build is $5,000 to $50,000**, quoted against a scope you approve first.\n\n**Ongoing work is $3,000 to $15,000 a month**, and it covers the running, not the build.\n\n**Those two are quoted apart.** Ecommerce agency Miami pricing that rolls them into one number hides which of them you're actually paying for.",
      },
    ],
    reviewAfterDays: 365,
  },

  // ── Disciplines. Design and development lead, per the secondaries ─────
  disciplines: {
    label: "What we do",
    heading: "Six kinds of work, bought one at a time or together",
    intro:
      "Take one of these or take all of them. Most ecommerce agency Miami engagements start as one row and grow into two. Every store below was real, and most were already trading when we arrived.",
    items: [
      {
        label: "Website design",
        heading: "We design the store around how people actually shop it, not around a mockup",
        covers: ["Store design", "Design systems", "Product pages", "Navigation", "Mobile"],
        imageAlt: "111Skin's Shopify store, redesigned around a skin finder quiz",
        caseSlug: "111skin-shopify-cro-redesign",
        cta: { label: "Explore design work", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        label: "Development",
        heading: "We build in your accounts, so nothing walks out of the door when we do",
        covers: ["Theme development", "Custom development", "Integrations", "Speed", "Shopify Plus"],
        imageAlt: "Everlast's storefront, rebuilt on Shopify Plus",
        caseSlug: "everlast-shopify-plus-sports-redesign",
        cta: { label: "Explore ecommerce development", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration to Shopify",
        heading: "We move you off WooCommerce, Magento or BigCommerce and your rankings come with you",
        covers: ["Platform migration", "Data migration", "Redirect mapping", "SEO preservation", "No downtime"],
        imageAlt: "Capelli Sports, moved off WordPress onto Shopify with no downtime",
        caseSlug: "capelli-sports-shopify-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "A second storefront",
        heading: "We've shipped stores in a second language, and we'll tell you when you don't need one",
        covers: ["Shopify Markets", "Second storefronts", "Currencies", "Store consolidation"],
        imageAlt: "Wild's Shopify Plus store, with its German storefront",
        caseSlug: "wild-shopify-plus-subscriptions",
        cta: { label: "Explore Shopify Markets work", href: "/services/shopify-integration-services" },
      },
      {
        label: "CRO and testing",
        heading: "We find what's losing you orders and prove the fix with a test first",
        covers: ["A/B testing", "Landing pages", "Checkout", "Analytics"],
        imageAlt: "A landing page we built and tested for Loop Earplugs",
        caseSlug: "loop-earplugs-shopify-landing-page-cro",
        cta: { label: "Explore CRO", href: "/services/shopify-cro-agency" },
      },
      {
        label: "Email and retention",
        heading: "We build the flows that sell to the customers you already paid for",
        covers: ["Klaviyo", "Welcome and cart flows", "Segmentation", "SMS", "Campaign calendar"],
        imageAlt: "Andrea Maack's Klaviyo email program, rebuilt from scratch",
        caseSlug: "andrea-maack-klaviyo-email",
        cta: { label: "Explore email and retention", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "How the work runs, and what you're buying",
    intro: "Nobody from our team sits in your office, so here's what you get instead.",
    items: [
      {
        title: "Everything we build lives in your accounts",
        body:
          "Your repository, your store, your design files, your app logins. We leave the documentation next to the code.",
      },
      {
        title: "A fixed price and a date before anything starts",
        body:
          "You approve a scope with a number and a delivery date on it. If the scope changes, you see the new number before we do the work.",
      },
      {
        title: "Four disciplines on one invoice",
        body:
          "Design, development, testing and retention, used as the work needs them. You aren't paying four suppliers to point at each other.",
      },
      {
        title: "You talk to the person doing the work",
        body: "In a shared channel, not through an account manager relaying it.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  whatWeDoAboutItHeading: "How it actually starts",
  whatWeDoAboutIt:
    "You send the URL. We go through the five lines above and come back with what each one said about your store.\n\nThen you get a short list of work, with a number and a date against each line. Take one line, take all of them, or take none.\n\nThat's week one of an ecommerce agency Miami project, and it happens before anybody signs anything. Nothing begins until you've approved the scope and the price in writing.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  proofHeading: "Three brands, and what the work actually moved",
  proof: [
    {
      slug: "john-hardy-shopify-plus-migration",
      vertical: "Jewelry sold at high AOV",
      whatWasBuilt: "A replatform onto Shopify Plus with Markets Pro, delivered before Black Friday",
      outcome: "+71% conversion rate, replatformed in under three months",
      verified: true,
    },
    {
      slug: "wild-shopify-plus-subscriptions",
      vertical: "Beauty and personal care",
      whatWasBuilt: "A first Shopify store, then a second storefront for a different language",
      outcome: "80K+ monthly subscribers at 12 months, German store live in 6 weeks",
      verified: true,
    },
    {
      slug: "living-in-sunshine-klaviyo-email",
      vertical: "Surf and outdoor lifestyle",
      whatWasBuilt: "Email flows and campaigns rebuilt on a store that already had the traffic",
      outcome: "+461.2% attributed revenue, +219.8% from flows alone",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What you're probably thinking",
  objections: [
    {
      objection: "Our customers all speak English.",
      answer:
        "Plenty do, and if your traffic says so then this isn't your problem and we'll stop raising it.\n\nBut speaking English and choosing to buy in English aren't the same thing, and most of the people in that 40% are bilingual.\n\nTen minutes in your analytics settles it either way.",
    },
    {
      objection: "We already have a developer.",
      answer:
        "Good, and a lot of our work sits next to one.\n\nYour developer will know your store better than we do for the first month. What we usually bring is the hours they don't have, or the parts nobody wants to own.\n\nIf your developer can do the work and has the time, don't pay us to do it.",
    },
    {
      objection: "We only want a redesign. We're not interested in any of this.",
      answer:
        "Then that's what you buy, and the rest of this page is just something to know.\n\nDesign, development, CRO and retention are sold separately here, and most brands we work with take one of them.\n\nYou're not going to get a second storefront quoted into a redesign you didn't ask for.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  faqs: [
    {
      question: "Who owns the code, and where does it live?",
      answer:
        "You do, and it sits in your accounts from the first day. Your repository, your store, your app logins. Nothing runs on a system of ours that keeps you paying us to reach it.",
      unique: true,
    },
    {
      question: "What does an ecommerce agency Miami build usually cost?",
      answer:
        "Most ecommerce development Miami brands hire for runs $5,000 to $50,000 as a build. Ongoing work is $3,000 to $15,000 a month. You get a fixed number and a date before anything starts, and the two are quoted apart.",
      unique: true,
    },
    {
      question: "How long does a store build take?",
      answer:
        "Most builds run six to twelve weeks, from your approved scope to launch. A replatform can move faster. John Hardy came off Salesforce Commerce Cloud onto Shopify Plus in under three months, before Black Friday.",
      unique: true,
    },
    {
      question: "Do you build stores in more than one language?",
      answer:
        "Yes, and we'll tell you when not to. On Shopify, two languages translate automatically through Translate & Adapt at no cost. The work is in the emails, the images with text on them, the ads and the support, which is what the table above is about.",
      unique: true,
    },
    {
      question: "Can you work with our platform if we're not on Shopify?",
      answer:
        "We build on Shopify. We also move stores onto it from WooCommerce, Magento, BigCommerce and Salesforce Commerce Cloud. If you plan to stay where you are, we're the wrong agency for you, and we'll say so early.",
      unique: true,
    },
    {
      question: "What does ecommerce website design include?",
      answer:
        "Ecommerce website design Miami brands ask us for covers the design system, the templates, your product and collection pages, the navigation and every mobile layout. You see all of it and approve it before a line gets built. The build is quoted on its own.",
      unique: true,
    },
    {
      question: "Can you work alongside the team we already have?",
      answer:
        "Yes, and it's how most of our work runs. Your developer keeps the day to day and we take the build, or your designer owns the brand and we take the templates. We write down what we do so your team can pick it up after.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion. Zero keywords, no city name ─────────────────
  conversion: {
    heading: "Send us your store",
    whatYouGet:
      "Send us the URL. We'll read the traffic, tell you what share of it isn't browsing in English, and what we'd fix first either way.",
    whatWeWillTellYouNotToDo:
      "If barely anyone lands on your store in another language, we'll tell you not to spend a dollar on a second one.",
    responseExpectation: "Someone who scopes these replies inside a working day.",
    audit: {
      transition: "You already know whether you've looked at this or not.",
      offer: "Send the URL over and we'll hand you the findings:",
      parts: [
        "What share of your traffic arrives in another language.",
        "Which pages those visitors leave from.",
        "What we'd fix first, and what we'd leave alone.",
      ],
      limit: "It stops at the findings, and any work is quoted separately, so you can say no.",
      noObligation: "It's free, and what we find is yours whether you hire us or not.",
    },
  },

  sources: [],

  // Owner's instruction, 1 October 2026: minimal copy, more visuals. Set below
  // the 2,000-2,500 band the later Batch 1b pages used.
  wordCountTarget: [1700, 2200],
};
