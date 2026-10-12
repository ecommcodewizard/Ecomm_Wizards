// Batch 1, Florida #21: /services/ecommerce-seo-agency/florida
// Inventory: Geo Inventory & Batch Plan, Florida state row ("ecommerce seo
// agency florida", 10/mo, KD 2). No secondaries assigned.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// ── STEP 01, THE INTENT ─────────────────────────────────────────────────────
// "He typed this because he already decided he needs search work for his
// online store, and still needs to work out which kind, and who will do it
// properly." SERVICE IS CHOSEN (SEO), PLATFORM IS OPEN. So no agency menu:
// proof early, then depth on the work and the method (Step 07). Nothing
// assumes Shopify: the read works on any platform, the work runs on Shopify,
// and a move to Shopify keeps the rankings.
//
// ── ONE IDEA (17 words) ─────────────────────────────────────────────────────
// Florida brands sell to every state, so they need search work built for
// products, not maps. Premium position as set by the owner (reliable,
// technically solid): the work is engineering on the store, sourced to
// Google's own documentation.
//   hook        a lot of SEO is built for businesses with a front door
//   place       the shoppers are in every state; they find you by product
//   proof       stores built properly for search
//   gradient    Google ranks a map listing and a product page by different
//               rules, and its AI answers read the same indexed pages
//   asset       local SEO and ecommerce SEO side by side
//   work        SEO, AEO and GEO on the pages that sell
//   method      the published process, step by step
//   objections / results / how a job starts / FAQ / form
//
// SEO + AEO + GEO argued as one (owner's brief, 12 October 2026). Google's AI
// features doc says AI Overviews and AI Mode need nothing beyond an indexed,
// snippet-eligible page, so the AEO case here is the technical foundation.
// That argues FOR SEO (Step 04 rule 1).
//
// OWNER'S RULES APPLIED (from the Miami SEO review, 13 October 2026):
//   no sentence sends the reader to another agency;
//   "AI" means every assistant, with ChatGPT, Gemini, Copilot and Perplexity
//   as examples, never ChatGPT alone.
// And from the Florida pages: no external links, no location claim or denial,
// no hurricane mention, no prices (no SEO price is published anywhere).
//
// ── WHAT IS ALREADY TAKEN ───────────────────────────────────────────────────
// Hub index bloat by platform; Chicago catalog duplication; Minneapolis
// product images; New York SEO AEO shortlist and third-party mentions; Miami
// product data feeds and "one page feeds all three". Local versus ecommerce
// search is unclaimed.
//
// ── PUBLISHED COMMITMENTS USED (Step 04 #3) ─────────────────────────────────
// From the ecommerce-seo-agency hub: the store is crawled and read in writing
// before you pay; weeks 1-2 full check; weeks 3-6 foundation; month 2 onward
// categories and content; monthly report that leads with search revenue; no
// bought links; no twelve-month tie-in before the first read.
//
// ARCHETYPE: ["E"], built on the work, as on Miami SEO.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
//   hero     Evie Lou product page, Capelli, Candy Kittens
//   proof    Evie Lou (+47% organic revenue), Capelli (95% SEO equity),
//            Sneak Energy (sub-2.9s pages, +68% mobile conversion)
//   work     Candy Kittens, Twillory, Henchman, Loop, John Hardy
//   results  Ronaldo, 111Skin, Everlast (disjoint from proof)
//
// PRESENCE: none claimed or denied. REVIEW: 180 days.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_SEO_AGENCY_FLORIDA: GeoPage = {
  type: "geo",
  slug: "florida",
  path: "/services/ecommerce-seo-agency/florida",
  hub: "/services/ecommerce-seo-agency",

  geo: {
    name: "Florida",
    type: "state",
    areaServed: "Florida",
  },
  archetype: ["E"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce seo agency florida",
  secondaryKeywords: [],
  faqKeywords: [
    "difference between local seo and ecommerce seo",
    "how long does ecommerce seo take",
    "how do i get my products into google ai overviews",
    "do i need structured data on product pages",
    "what is in an ecommerce seo audit",
    "can i keep my rankings when i change platforms",
  ],

  metaTitle: "Ecommerce SEO Agency Florida | SEO, AEO and GEO for Stores",
  metaDescription:
    "An ecommerce SEO agency Florida brands hire to get products found in every state, on Google, in its AI answers and in AI assistants. We read your store first.",
  shortTitle: "Ecommerce SEO agency Florida",
  serviceType: "Ecommerce SEO agency",

  // ── Hero ──────────────────────────────────────────────────────────────
  h1: "Ecommerce SEO agency Florida brands hire to get found by shoppers who've never heard of them",
  qualifier:
    "Search work for online stores: category pages, product pages, technical fixes, AI answers and platform moves. We read your store before you pay anything, and you keep what we find.",

  // Built by scratchpad seo-hero.html (same template as the other Florida
  // heroes), rendered in headless Edge at 2x on a transparent background.
  heroImage: {
    cutout: true,
    src: "/images/ecommerce-seo-agency-florida-hero-v1.webp",
    alt: "A product page on the Evie Lou store, with Capelli Sports and Candy Kittens beside it, and results of +47% organic revenue for Evie Lou and 95% of SEO equity kept for Capelli Sports",
  },
  heroGlow: true,
  heroCtaLabel: "Get in touch with us",
  assetCtaLabel: "See local and ecommerce SEO side by side",
  assetBeforeServices: true,
  relatedTone: "white",
  whatWeDoAboutItTone: "cream",

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years in ecommerce" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "{storesBuilt} online stores built, and every one has to be found to sell.",
    subheading: "Fashion, sweets, sportswear, skincare, tools. Brands whose buyers search for the product first.",
  },

  // ── Hook ──────────────────────────────────────────────────────────────
  // The market, not his store, and no claim about other agencies.
  hook:
    "A lot of SEO is built for businesses with a front door. Maps, reviews, a Business Profile, and customers who live nearby.\n\nAn online store's front door is a product page. The shopper can be in any state, and they don't know your name yet. They type what they want, and Google, its AI answers or an AI assistant decides who shows up.\n\nThat's the search we work on. Below is how it differs from local SEO, the stores we've done it for, and how the work runs.",

  // ── GEO passage ───────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce SEO agency Florida brands hire to get their products found by shoppers across the US. We work on category pages, product pages, structured data and technical fixes. That covers SEO for Google, AEO for its AI answers, and GEO for AI assistants. We read your store before you pay anything.",

  // ── Place layer ───────────────────────────────────────────────────────
  placeLayerHeading: "Your shoppers are in every state. They find you through a product, not a map.",
  placeLayer:
    "About 93 in every 100 American shoppers live outside Florida, per the Census Bureau's 2025 figures. For an online store, they're the market. None of them is close enough for distance to help you.\n\nThey find you by typing the thing they want: a dress in their size, a pretzel snack, a ladder for uneven ground. So the pages that have to rank are the ones that sell. Your categories and your products.",

  // ── Proof ─────────────────────────────────────────────────────────────
  proofHeading: "Three stores we rebuilt, and what happened in search and sales",
  proof: [
    {
      slug: "evie-lou-shopify-fashion-cro",
      vertical: "Womenswear",
      whatWasBuilt: "A custom Shopify Plus theme with editorial collection pages and rebuilt product pages",
      outcome: "+47% organic revenue, +82% conversion, +31% average order value",
      verified: true,
    },
    {
      slug: "capelli-sports-shopify-migration",
      vertical: "Sportswear",
      whatWasBuilt: "A move from WordPress to Shopify with every old URL mapped before launch",
      outcome: "95% of SEO equity kept, +24% conversion, 38% faster site",
      verified: true,
    },
    {
      slug: "sneak-energy-shopify-redesign",
      vertical: "Energy drinks",
      whatWasBuilt: "A redesigned store with pages that load in under three seconds",
      outcome: "+68% mobile conversion, +52% add-to-cart rate, pages under 2.9s",
      verified: true,
    },
  ],
  proofCta: {
    text: "Want to know where your store stands in search?",
    label: "Get in touch with us",
  },

  // ── Gradient: two sets of rules, from Google ──────────────────────────
  gradientLayerHeading: "Google ranks a map listing and a product page by different rules. Your store lives by the second set.",
  gradientLayer:
    "**Maps run on distance.** Google's own help page says local results weigh relevance, distance and how well known a business is. Distance is how far you are from the person searching, so for a store selling to every state it does nothing.\n\n**Products run on your pages.** Google's guide for product pages says the right markup can put your price, stock and reviews into its results, its image search and its product listings. That's work on your store, not on a Business Profile.\n\n**AI answers read the same pages.** Google says its AI Overviews need nothing more than a page that's indexed and eligible for a snippet. So the technical work that gets you ranked is also what gets you quoted. That's why, as an ecommerce SEO agency Florida brands hire, we fix the store before we write anything.",
  gradientFacts: [
    {
      id: "census-quickfacts-fl-us-2025",
      claim:
        "US Census Bureau QuickFacts, Vintage 2025 population estimates for 1 July 2025: Florida 23,462,518; United States 341,784,857. Florida is 6.86% of the US population, so about 93 in every 100 Americans live outside the state. Supports the place layer.",
      url: "https://www.census.gov/quickfacts/fact/table/FL,US/PST045225",
      publisher: "US Census Bureau",
      captured: "2026-10-12",
      reviewAfterDays: 365,
    },
    {
      id: "google-local-ranking",
      claim:
        "Google Business Profile Help, 'Tips to improve your local ranking on Google' (support.google.com/business/answer/7091), read 13 October 2026: local results are based primarily on relevance, distance and prominence. 'Relevance is how well a Business Profile matches what someone is searching for.' 'Distance refers to how far each business is from the customer who's searching.' 'Prominence means how well-known a business is.'",
      url: "https://support.google.com/business/answer/7091",
      publisher: "Google Business Profile Help",
      captured: "2026-10-13",
      reviewAfterDays: 365,
    },
    {
      id: "google-merchant-listing-structured-data",
      claim:
        "Google Search Central, 'Merchant listing (Product, Offer) structured data', read 13 October 2026: Product markup on a page where shoppers can buy 'can be eligible for display in merchant listing experiences on Google Search', including 'the shopping knowledge panel, Google Images, popular product results, and product snippets'. Required: Product name, image and offers, with a price above zero and a currency.",
      url: "https://developers.google.com/search/docs/appearance/structured-data/merchant-listing",
      publisher: "Google Search Central",
      captured: "2026-10-13",
      reviewAfterDays: 180,
    },
    {
      id: "google-ai-features",
      claim:
        "Google Search Central, 'AI features and your website', read 13 October 2026: to be shown as a supporting link in AI Overviews or AI Mode a page must be 'indexed and eligible to be shown in Google Search with a snippet'; 'There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary.' Inclusion is not guaranteed.",
      url: "https://developers.google.com/search/docs/appearance/ai-features",
      publisher: "Google Search Central",
      captured: "2026-10-13",
      reviewAfterDays: 180,
    },
  ],

  // ── Only-Here Asset: local SEO and ecommerce SEO side by side ─────────
  asset: {
    title: "Local SEO and ecommerce SEO are two different jobs",
    intro:
      "Both are called SEO, and both are worth doing for the right business. Here's what each one is built to win, so you can tell which work you're being offered.",
    renderer: "comparison",
    method: {
      captured: "2026-10-13",
      howGathered:
        "Built from Google's own help pages on local ranking, product markup and AI answers, all read on 13 October 2026. It compares two kinds of work so you can see which one you need. It doesn't rank or name anyone.",
    },
    columns: ["What to compare", "Local SEO", "Ecommerce SEO"],
    rows: [
      { label: "Who it's for", cells: ["Shoppers near a shop, office or clinic", "Shoppers anywhere you ship"] },
      { label: "What Google weighs", cells: ["Relevance, distance and how well known you are", "How well your pages match what people type, and whether Google can read them"] },
      { label: "Where you show up", cells: ["The map and the local listings", "Search results, product listings, image search and AI answers"] },
      { label: "What the work touches", cells: ["Your Business Profile, reviews and listings", "Your categories, product pages, markup, speed and site structure"] },
      { label: "What gets measured", cells: ["Calls, visits and directions", "Search traffic that turns into orders"] },
      { label: "What breaks it", cells: ["Wrong hours and missing reviews", "Pages Google can't crawl, thin categories and lost redirects"] },
    ],
    derived:
      "If you also run a shop or a showroom, the left column still matters for that location.\n\nThe store needs the right-hand column. That's the work we do as an ecommerce SEO agency Florida brands hire, on Shopify, and on the move to Shopify for stores coming from somewhere else.",
    reviewAfterDays: 180,
  },
  midCta: {
    text: "Want to see which column your current SEO work sits in? Send us the store address.",
    label: "Get in touch with us",
  },

  // ── The work: SEO, AEO and GEO on the pages that sell ─────────────────
  disciplines: {
    label: "What the work is",
    heading: "SEO, AEO and GEO, done on the pages that sell",
    intro:
      "Five kinds of search work. Each row opens a store we built. You might need one of them, or all five, and we'll tell you which after the first read.",
    items: [
      {
        label: "Category pages",
        heading: "We build category pages around the words shoppers type, in every state you ship to",
        covers: ["Keyword research", "Collection structure", "Filters", "Internal links"],
        imageAlt: "Category and gifting pages we built for Candy Kittens",
        caseSlug: "candy-kittens-shopify-food-beverage-cro",
        cta: { label: "Explore ecommerce SEO", href: "/services/ecommerce-seo-agency" },
      },
      {
        label: "Product pages",
        heading: "We mark up every product so Google can show its price, stock and reviews",
        covers: ["Structured data", "Product copy", "Images and alt text", "Reviews"],
        imageAlt: "Product pages we worked on for the menswear brand Twillory",
        caseSlug: "twillory-shopify-cro",
        cta: { label: "Explore Shopify SEO", href: "/services/shopify-seo-agency" },
      },
      {
        label: "Technical SEO",
        heading: "We clear what stops Google reading your store, before we write a word",
        covers: ["Crawl and index", "Duplicate pages", "Speed", "Redirects"],
        imageAlt: "A Shopify Plus store we built for the tools brand Henchman",
        caseSlug: "henchman-shopify-plus-b2b",
        cta: { label: "Explore speed work", href: "/services/shopify-speed-optimization" },
      },
      {
        label: "AEO and GEO",
        heading: "We get your pages into AI answers and in front of ChatGPT, Gemini, Copilot and Perplexity",
        covers: ["Answer-ready pages", "Product data", "AI crawler access", "Agentic commerce"],
        imageAlt: "Landing pages and a product quiz we built for Loop Earplugs",
        caseSlug: "loop-earplugs-shopify-landing-page-cro",
        cta: { label: "Explore agentic commerce", href: "/services/shopify-agentic-commerce" },
      },
      {
        label: "Migration",
        heading: "We move you to Shopify and bring the rankings you've earned with you",
        covers: ["Redirect mapping", "URL structure", "Search Console", "Launch checks"],
        imageAlt: "John Hardy's store, moved to Shopify Plus before Black Friday",
        caseSlug: "john-hardy-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
    ],
  },

  // ── Method: the hub's published process, in this page's words ────────
  engagement: {
    heading: "How the work runs, from the first read to the monthly report",
    intro: "No packages and no tiers. As an ecommerce SEO agency Florida brands use for search across the country, we look first. Nobody knows what your store needs until they've read it.",
    steps: [
      {
        week: "Before you pay",
        title: "We read your store",
        what: "We crawl it the way Google does and go through your Search Console data. You get what we found in writing, whether you hire us or not.",
      },
      {
        week: "Weeks 1 to 2",
        title: "The full check",
        what: "How much of the store Google crawls, which pages it shouldn't, how pages link, and how fast they load. Ranked by what each costs you.",
      },
      {
        week: "Weeks 3 to 6",
        title: "The foundation",
        what: "We fix that list in order. Google's crawling usually changes before rankings do, and you watch the same data we do.",
      },
      {
        week: "Month 2 onward",
        title: "Categories, products and answers",
        what: "We rebuild categories around what people type, mark up your products, and write only where someone is searching.",
      },
      {
        week: "Every month",
        title: "A report that leads with revenue",
        what: "What search brought in, where you rank, what Google crawled and what we changed. If something didn't work, we say so and undo it.",
      },
    ],
  },
  servicesCta: {
    text: "The first step is the free read of your store. It's yours to keep either way.",
    label: "Get in touch with us",
  },

  // ── Objections (three) ────────────────────────────────────────────────
  objectionsHeading: "Three doubts we hear before the first read",
  objections: [
    {
      objection: "We've paid for SEO before and saw nothing.",
      answer:
        "Then the report is where we'd start. Ours leads with what search brought in, so if it's flat, you see that on the first line.\n\nYou're not tied in for a year before we've looked, either. If the first read doesn't convince you, you can walk away and keep it.",
    },
    {
      objection: "We already rank for our own brand name.",
      answer:
        "That's the easy part, because those shoppers already know you.\n\nThe growth is in the ones who don't. They type the product, not your name, and that's the search your category and product pages have to win.",
    },
    {
      objection: "We're not on Shopify.",
      answer:
        "We can still read your store and tell you what's holding it back in search. The work itself runs on Shopify.\n\nIf you move, we map every old URL first. Capelli Sports kept 95% of its SEO equity moving from WordPress.",
    },
  ],

  // ── Client quotes (disjoint from proof) ───────────────────────────────
  results: {
    heading: "Three more owners on what changed",
    intro:
      "Before you pick an ecommerce SEO agency Florida brands trust, hear from three more clients. Every number links to its case study.",
    slugs: ["ronaldo-jewelry-shopify-plus-redesign", "111skin-shopify-cro-redesign", "everlast-shopify-plus-sports-redesign"],
    headlines: {
      "ronaldo-jewelry-shopify-plus-redesign": "{brand} grew total sales 250% on a rebuilt Shopify Plus store",
      "111skin-shopify-cro-redesign": "{brand} grew conversion 46%, with repeat purchases up 41%",
      "everlast-shopify-plus-sports-redesign": "{brand} grew total orders 48% after the redesign",
    },
  },

  // ── How a job starts ──────────────────────────────────────────────────
  whatWeDoAboutItHeading: "It starts with a read of your store, not a proposal",
  whatWeDoAboutIt:
    "Send us the address. We crawl the store, look at what Google can and can't read, and see which pages already bring in search traffic.\n\nYou get a short written list: what's working, what's holding the store back, and the first fix we'd make. If you want us to do the work, the scope comes in writing.\n\nThat's how every job starts for us as an ecommerce SEO agency Florida brands hire. You see the problem before you pay for the fix.",
  processCta: {
    text: "The read is free, and nobody follows up to push a sale.",
    label: "Get in touch with us",
  },

  // ── FAQ (AEO): each answer opens with the direct answer ──────────────
  faqHeading: "Questions store owners ask about ecommerce SEO",
  faqs: [
    {
      question: "What's the difference between local SEO and ecommerce SEO?",
      answer:
        "Local SEO helps people nearby find a place on the map. Ecommerce SEO helps shoppers anywhere find your products. It works on your category pages, your product pages and the setup behind them.",
      unique: true,
    },
    {
      question: "How long does ecommerce SEO take to work?",
      answer:
        "Google's crawling usually changes first, a few weeks after the technical fixes. Rankings and revenue follow over the months after that. Our monthly report shows all three, so you can watch it move.",
      unique: true,
    },
    {
      question: "How do I get my products into Google's AI answers?",
      answer:
        "There's no separate trick. Google says a page needs to be indexed and eligible for a snippet, with no extra requirements. So the work is solid SEO on the pages you want quoted.",
      unique: true,
    },
    {
      question: "Do my product pages need structured data?",
      answer:
        "Yes, if you want Google to show your price, stock and reviews in its results. The markup tells Google what each page sells. Without it, Google has to guess.",
      unique: true,
    },
    {
      question: "What's in an ecommerce SEO audit?",
      answer:
        "Ours covers how Google crawls your store, which pages it indexes and shouldn't, how your pages link, how fast they load, and which pages already earn search traffic. You get it in writing.",
      unique: true,
    },
    {
      question: "Can I keep my rankings if I change platforms?",
      answer:
        "Yes, if every old URL on your store is mapped to a new page with a redirect before launch. Capelli Sports kept 95% of its SEO equity moving from WordPress to Shopify.",
      unique: true,
    },
    {
      question: "What does a month with an ecommerce SEO agency Florida brands hire look like?",
      answer:
        "A few fixes from the list, worked through in order, and the pages they touch. Then a report on what search brought in, what Google crawled and what we changed, so you can see what your money did.",
      unique: true,
    },
    {
      question: "Will you write blog posts for my store?",
      answer:
        "Only where people search for the topic and buy after reading. Your category and product pages come first, because they're the pages that sell.",
      unique: true,
    },
    {
      question: "Do you buy links?",
      answer:
        "No. No link networks and no paid placements dressed up as PR. Nothing you'd be left cleaning up after.",
      unique: true,
    },
    {
      question: "Do you work with stores that aren't on Shopify?",
      answer:
        "We'll read any store and tell you what's holding it back. The work runs on Shopify, and we move stores there from WooCommerce, Magento, BigCommerce and others with their rankings intact.",
      unique: true,
    },
    {
      question: "Are you an ecommerce SEO agency Florida brands can hire without a long contract?",
      answer:
        "Yes. You're not tied in for a year before we've looked. The first read is free, and you can stop there and keep what we found.",
      unique: true,
    },
  ],

  // ── Conversion ────────────────────────────────────────────────────────
  // Step 09: zero keywords and no place name in this block.
  conversion: {
    heading: "Send us your store address. We'll show you what search can't see yet.",
    whatYouGet:
      "We crawl your store and send back what Google can't read, which pages are earning, and the first fix we'd make.",
    whatWeWillTellYouNotToDo:
      "If your store doesn't need new content yet, we'll say so. Fixing what Google can't read comes first.",
    responseExpectation: "A developer replies within one working day.",
    audit: {
      transition: "The right-hand column of the table, checked against your store.",
      offer: "Put your store address in the form, and you'll get back:",
      parts: [
        "What Google can and can't read on your store, and why.",
        "Which of your pages already bring in search traffic, and which should.",
        "The first fix we'd make, and what we'd leave alone.",
      ],
      limit: "You get the findings, with nothing else attached.",
      noObligation: "It's free, and nobody follows up to push a sale.",
    },
  },

  sources: [],
  wordCountTarget: [2000, 2500],
};
