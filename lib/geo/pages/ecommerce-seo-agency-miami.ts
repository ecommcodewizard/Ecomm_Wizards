// Inventory row #18: /services/ecommerce-seo-agency/miami
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce seo agency miami" (10/mo, inventory).
// Secondaries supplied by the owner 12 October 2026: "ecommerce product seo
// miami", "ecommerce seo company miami", "miami ecommerce seo services",
// "ecommerce seo audit miami".
//
// ── STEP 01 ─────────────────────────────────────────────────────────────────
// "He typed this because he already decided he needs search help for his
// store, and still needs to work out who will actually get his products found,
// and what that work involves now." SERVICE IS CHOSEN, PLATFORM IS OPEN. So no
// broad agency menu: the work rows are kinds of search work, proof arrives
// early (Step 07), and nothing assumes Shopify. Diagnosis on any platform,
// delivery on Shopify, and a migration that keeps rankings for everyone else.
//
// ── ONE IDEA (19 words) ─────────────────────────────────────────────────────
// Google, its AI answers and every AI assistant read the same product pages.
// Get those right and you show up in all of them.
//
// OWNER'S REVIEW, 13 OCTOBER 2026: (1) not only ChatGPT, every AI engine, so
// the hero and every "ChatGPT" line widened to assistants in general, with
// ChatGPT, Gemini, Copilot and Perplexity as examples. Rows that name ChatGPT
// do so because the fact is ChatGPT-specific. (2) No sentence may send the
// reader to another agency ("ask any ecommerce SEO agency Miami brands...").
// Five such keyword sentences were cut or turned into claims about us.
// (3) A section saying the page is for Miami brands, without implying they sell
// only to Miami buyers: the place layer below.
//
// THE OWNER'S BRIEF, 12 OCTOBER 2026: the fresh take is AEO and GEO as well as
// SEO, and the whole page argues one thing. So SEO, AEO and GEO are not three
// services bolted together; they are three places a buyer meets the product,
// and the product page feeds all of them. Every section serves that:
//   hook        buyers search, or ask, in three places; all read your pages
//   categories  what they ask for depends on what you sell
//   proof       stores rebuilt with search in mind
//   work        six kinds of work, SEO, AEO and GEO, on the same pages
//   gradient    the evidence that one page feeds all three
//   asset       six places a buyer finds products, what each reads, what we check
//   objections  paid before; "AEO and GEO are SEO renamed"; not on Shopify
//
// STEP 04 RULE 1, the SEO version: "an SEO page must not say rankings matter
// less now". So Pew's click-rate finding (8% vs 15%) is deliberately NOT used,
// only the share of searches carrying an AI summary. Google's own statement
// that AI answers draw on pages already indexed for search is used instead, and
// it argues FOR SEO: rankings are the entry ticket to the AI answer.
//
// The Miami principle from the marketing page holds: the brand is in Miami,
// the buyer can be anywhere. Shopify's own guide says ChatGPT shopping is live
// for merchants selling to US buyers "regardless of store location".
//
// ── WHAT IS ALREADY TAKEN ───────────────────────────────────────────────────
// Hub: index bloat by platform. Chicago #29: empty category pages, reused
// descriptions, sold-out pages. Minneapolis: product images. New York SEO:
// AEO as the brand shortlist in Google's answer, GEO as earning third-party
// mentions. This page's GEO is the PRODUCT DATA side (catalog syndication,
// crawler access, feeds), which New York does not touch.
//
// ── SERP, 12 October 2026 ───────────────────────────────────────────────────
// Ranked lists, Semrush directories, an AI-built single-vendor page and general
// Miami SEO agencies. Nobody shows what a product page now has to serve.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["E"], built on the work rather than the market. Different emphasis from the
// two Miami siblings (agency D, marketing C).
//
// ── SECONDARY OWNERSHIP (one section each) ──────────────────────────────────
//   ecommerce product seo miami     -> disciplines[0].body
//   miami ecommerce seo services    -> disciplines.intro
//   ecommerce seo company miami     -> placeLayer
//   ecommerce seo audit miami       -> faqs[3]
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
//   hero     NEOM (video). Ronaldo was tried first and swapped: its video opens
//            on a "Welcome to New Albany" shopfront sign, the wrong town for a
//            Miami page.
//   work     Feetures, Wild (AEO, as on New York), Everlast (GEO: the showcase
//            on our own agentic commerce page, structured data for Shopping),
//            Dryrobe, Sneak Energy, ChloBo
//   proof    Evie Lou (+47% organic), Capelli (95% search equity), This Works
//   results  Ronaldo Jewelry, John Hardy (quotes)
//
// No SEO price has been published anywhere in the programme, so none is
// stated: the audit is free and the work is quoted in writing.
//
// PRESENCE (Master §4): none claimed.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_SEO_AGENCY_MIAMI: GeoPage = {
  type: "geo",
  slug: "miami",
  path: "/services/ecommerce-seo-agency/miami",
  hub: "/services/ecommerce-seo-agency",

  geo: {
    name: "Miami",
    type: "metro",
    areaServed: "Miami, Florida",
  },
  archetype: ["E"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce seo agency miami",
  secondaryKeywords: [
    "ecommerce product seo miami",
    "ecommerce seo company miami",
    "miami ecommerce seo services",
    "ecommerce seo audit miami",
  ],
  faqKeywords: [
    "difference between seo aeo and geo",
    "how to get products into chatgpt",
    "what does ecommerce product seo involve",
    "what is in an ecommerce seo audit",
    "ecommerce seo agency cost miami",
  ],

  metaTitle: "Ecommerce SEO Agency Miami | SEO, AEO and GEO for Stores",
  metaDescription:
    "An ecommerce SEO agency Miami brands hire to get found on Google, in its AI answers and in AI assistants. Product SEO, AEO, GEO, audits and migrations.",
  shortTitle: "Ecommerce SEO agency Miami",
  serviceType: "Ecommerce SEO agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "Ecommerce SEO agency Miami brands hire to be the answer on Google and every AI engine",
  qualifier:
    "SEO, AEO and GEO: product pages, Google's AI answers, assistants like ChatGPT, Gemini, Copilot and Perplexity, technical fixes, and migrations that keep your rankings. Take one piece or the whole job. You get a scope, a price and a start date in writing first.",

  heroImage: {
    src: "/images/Case%20studies/posters/NEOM%20Wellbeing%20video.webp",
    alt: "The wellbeing brand NEOM, whose store we rebuilt on current theme architecture",
    video: "/images/Case%20studies/NEOM%20Wellbeing%20video.mp4",
    aspect: "4 / 5",
  },

  heroCtaLabel: "Get in touch with us",
  assetCtaLabel: "See where shoppers find you",
  gradientLayerTone: "white",
  servicesBeforeGradient: true,
  whatWeDoAboutItTone: "cream",
  relatedTone: "white",

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on the platform" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "{storesBuilt} stores built, product page by product page.",
    subheading: "Jewelry, socks, outdoor gear, energy drinks, wellbeing and skincare, among others.",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "A buyer used to search Google and click a link. Now plenty of them ask a question and read the answer, from Google's AI or from an assistant like ChatGPT, Gemini or Perplexity.\n\nAll three decide what to show by reading the same thing: your product pages. The price, the stock, the reviews, the sizes, and plain answers to what buyers ask.\n\nSo that's where our work as an ecommerce SEO agency Miami brands hire starts, for SEO, AEO and GEO alike. Every product page made easy to read, for a search engine, an AI answer or a shopping assistant.",

  quickAnswer:
    "Ecomm Wizards is an ecommerce SEO agency Miami brands hire for SEO, AEO and GEO. That means getting your products found in Google's results, quoted in its AI answers, and named by AI assistants like ChatGPT, Gemini and Perplexity. We do the work on Shopify. On another platform? We move you over and keep your rankings.",

  // ── Block 3: Place layer. Who this page is for ────────────────────────
  // Added on the owner's instruction, 13 October 2026: say plainly the page is
  // for Miami brands, WITHOUT implying they only sell to Miami buyers, and
  // without changing the argument. So the place is the brand's address, and
  // the section says the address is not what search or AI ranks.
  placeLayerHeading: "You sell from Miami. Your buyers search from everywhere.",
  placeLayer:
    "A Miami brand might sell to buyers nearby, across the country, or both. We're an ecommerce SEO agency Miami brands hire for either, because the work is the same.\n\nProduct results in Google and answers from AI assistants come from your product data, not your address. Shopify says its ChatGPT channel works for stores selling to US buyers, wherever the store is. So a Denver buyer asking for a linen shirt can find you. So can a Seattle shopper looking for reef-safe sunscreen, or someone down the road.\n\nThat's the job we take on as the ecommerce SEO company Miami brands hire: making every product page the best answer, wherever the question is asked.",

  // ── Categories: what buyers ask for, by what you sell ─────────────────
  segments: {
    heading: "Shoppers ask for a shade, a size or a stone. Your pages have to answer.",
    intro:
      "People who don't know your brand yet describe what they need in their own words. They say it to Google, or to an AI assistant. Which words depends on what you sell, so finding them is the first thing we do as an ecommerce SEO agency Miami brands hire.",
    items: [
      {
        icon: "apparel",
        name: "Fashion and apparel",
        what: "Buyers ask for a color, a size or a fit.",
        breaks: "Variants. If each color has no address of its own, only one of them can show up.",
      },
      {
        icon: "beauty",
        name: "Beauty and skincare",
        what: "Buyers ask about an ingredient, a shade or a skin concern.",
        breaks: "The ingredient list. If it's only in a photo of the box, neither Google nor an AI can read it.",
      },
      {
        icon: "consumable",
        name: "Wellness and supplements",
        what: "Buyers compare doses, flavors and what other people thought.",
        breaks: "Star ratings. Reviews in a widget don't always reach the data a search engine reads.",
      },
      {
        icon: "jewelry",
        name: "Jewelry and watches",
        what: "Buyers ask for a metal, a stone, or a gift for someone.",
        breaks: "The material. If the metal only shows in the photo, nobody can find it by asking.",
      },
      {
        icon: "box",
        name: "Food and drink",
        what: "Buyers ask for a flavor, a diet or a pack size.",
        breaks: "Pack sizes. Five sizes on one page, with nothing saying they're separate.",
      },
      {
        icon: "outdoor",
        name: "Outdoor and gear",
        what: "Buyers ask about a spec: weight, size, or what it fits.",
        breaks: "Specs locked in a PDF or an image, where no search engine or assistant can reach them.",
      },
    ],
  },

  // ── Block 7: Proof, early, because the service is chosen ──────────────
  proofHeading: "Stores we rebuilt with search in mind, and what moved after",
  proof: [
    {
      slug: "evie-lou-shopify-fashion-cro",
      vertical: "Fashion and apparel",
      whatWasBuilt: "A rebuilt store with smarter product discovery and cleaner collection pages",
      outcome: "+47% organic revenue in a year, +82% conversion rate",
      verified: true,
    },
    {
      slug: "capelli-sports-shopify-migration",
      vertical: "Sportswear",
      whatWasBuilt: "A WordPress exit to Shopify with zero downtime and every ranking page protected",
      outcome: "95% of search equity kept, +38% site speed",
      verified: true,
    },
    {
      slug: "this-works-shopify-plus-migration",
      vertical: "Cosmetics and beauty",
      whatWasBuilt: "A Magento exit with every URL mapped and redirected before a page moved",
      outcome: "+38% conversion rate, +45% mobile conversion",
      verified: true,
    },
  ],

  // ── The work ──────────────────────────────────────────────────────────
  disciplines: {
    label: "What the work is",
    heading: "SEO, AEO and GEO: six kinds of work, all built on the same product pages",
    intro:
      "Shopping for Miami ecommerce SEO services? Here's what the work covers now. Take one row or all six, and every row links to a store we did it on.",
    items: [
      {
        label: "Product SEO",
        heading: "We give every product page the details Google can show: price, stock, stars and shipping",
        body:
          "This is the ecommerce product SEO Miami brands can check for themselves. Search a product's name and look at what Google shows.",
        covers: ["Product data", "Reviews and ratings", "Variants", "Shipping and returns", "Merchant Center feed"],
        imageAlt: "Product pages we rebuilt from scratch for the sock brand Feetures",
        caseSlug: "feetures-shopify-theme-development",
        cta: { label: "Explore ecommerce SEO", href: "/services/ecommerce-seo-agency" },
      },
      {
        label: "AEO",
        heading: "We put plain answers on your pages that Google's AI answers can quote",
        covers: ["Answer-first copy", "Product FAQs", "Structured data", "Comparison pages", "AI Overview tracking"],
        imageAlt: "Wild's storefront, with answer-first product content and structured data",
        caseSlug: "wild-shopify-plus-subscriptions",
        cta: { label: "Explore Shopify SEO", href: "/services/shopify-seo-agency" },
      },
      {
        label: "GEO",
        heading: "We get your products ready for ChatGPT, Gemini and Copilot to recommend",
        covers: ["Shopify Agentic Storefronts", "Catalog data", "Product feeds", "AI crawler access", "AI visibility tracking"],
        imageAlt: "Everlast's Shopify Plus store, with a structured data layer for Google Shopping",
        caseSlug: "everlast-shopify-plus-sports-redesign",
        cta: { label: "Explore agentic commerce", href: "/services/shopify-agentic-commerce" },
      },
      {
        label: "Category pages",
        heading: "We build category pages around the words shoppers actually use",
        covers: ["Collection pages", "Filters", "Internal links", "Category copy"],
        imageAlt: "Navigation we built for Dryrobe, sorting the range by sport and activity",
        caseSlug: "dryrobe-shopify-plus-redesign",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Technical SEO",
        heading: "We fix what slows Google down before it ever reads a product",
        covers: ["Page speed", "Crawling", "Indexing", "Duplicate pages", "Site structure"],
        imageAlt: "Sneak Energy's store, rebuilt for speed on mobile",
        caseSlug: "sneak-energy-shopify-redesign",
        cta: { label: "Explore speed work", href: "/services/shopify-speed-optimization" },
      },
      {
        label: "Migration",
        heading: "We move you to Shopify and your rankings come with you",
        covers: ["Redirect mapping", "URL structure", "Metadata transfer", "Ranking checks"],
        imageAlt: "ChloBo's jewelry store, moved to Shopify Plus with every redirect built first",
        caseSlug: "chlobo-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
    ],
  },

  servicesCta: {
    text: "Not sure which of the six your store needs first? Send us a product link and we'll tell you.",
    label: "Get in touch with us",
  },

  // ── Block 4: Gradient layer. Service x place ──────────────────────────
  gradientLayerHeading: "Google, its AI answers and every AI assistant read your product page. What they show depends on it.",
  gradientLayer:
    "**Search isn't only ten links anymore.** In a Pew Research study of 900 US adults, 18% of their Google searches showed an AI summary at the top.\n\n**Those answers come from pages that already rank.** Google says its AI answers need no special trick. A page has to be indexed and eligible to show in normal search, with its key content in plain text. So SEO is the entry ticket, and AEO is what gets you quoted.\n\n**AI shopping reads your product data too.** Shopify now sends its stores' products to ChatGPT and Microsoft Copilot, with Google's AI Mode and Gemini rolling out. Shopify says the quality and completeness of that data decides whether a product comes up in the conversation.\n\n**So one job feeds all three.** Get the product page right and each of them has something worth showing, for a buyer down the street or across the country. That's the work we do as an ecommerce SEO agency Miami brands hire.",
  gradientFacts: [
    {
      id: "pew-ai-summaries-2025",
      claim:
        "Pew Research Center, 'Google users are less likely to click on links when an AI summary appears in the results', 22 July 2025, read 12 October 2026. Browsing data from 900 US adults in Pew's KnowledgePanel Digital panel, March 1-31, 2025: 'Some 18% of all the Google searches in our study generated an AI summary'. The page uses ONLY the 18% share. The click-rate findings (8% of visits with a summary vs 15% without) are deliberately not used: Page Standard Step 04 bars an SEO page from implying rankings matter less.",
      url: "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/",
      publisher: "Pew Research Center",
      captured: "2026-10-12",
      reviewAfterDays: 180,
    },
    {
      id: "google-ai-features",
      claim:
        "Google Search Central, 'AI features and your website' (last updated 2025-12-10), read 12 October 2026. Covers AI Overviews and AI Mode. 'There are no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations necessary', and 'no special schema.org structured data that you need to add'. A supporting link must be indexed and eligible to be shown in Search with a snippet. Best practices include 'Making sure that important content is available in textual form', 'Making sure your structured data matches the visible text on the page', and 'Checking that your Merchant Center and Business Profile information is up-to-date'. Supports gradient paragraph two and asset row three.",
      url: "https://developers.google.com/search/docs/appearance/ai-features",
      publisher: "Google Search Central",
      captured: "2026-10-12",
      reviewAfterDays: 180,
    },
    {
      id: "shopify-agentic-storefronts",
      claim:
        "Shopify blog, 'Agentic Commerce on Shopify: How It Works' (18 June 2026), read 12 October 2026. Supported AI channels: ChatGPT ('Live for millions of Shopify merchants who sell to US buyers, regardless of store location'), Microsoft Copilot (live for merchants discoverable through Catalog), and AI Mode in Google Search and the Gemini app (select brands, 'broader rollout underway'). 'Products are syndicated across every major AI channel automatically' through Shopify Catalog. AI agents 'read structured data' including 'product titles, descriptions, images, pricing, inventory, shipping speeds', and 'The quality and completeness of that data determines whether a product surfaces in a conversation.' Purchasing is limited to US buyers. Supports gradient paragraph three, asset row five and FAQ three.",
      url: "https://www.shopify.com/blog/how-agentic-commerce-works",
      publisher: "Shopify",
      captured: "2026-10-12",
      reviewAfterDays: 90,
    },
    {
      id: "openai-oai-searchbot",
      claim:
        "OpenAI developer docs, 'Overview of OpenAI Crawlers', read 12 October 2026: 'OAI-SearchBot is for search' and 'is used to surface websites in search results in ChatGPT's search features'; 'we recommend allowing OAI-SearchBot in your site's robots.txt file'. It is independent of GPTBot, which governs training use. Supports asset row four. OpenAI's shopping help article (11128490) refused automated reads; per search summaries of it, Shopify merchants are covered through Shopify Catalog and other merchants can apply for direct feeds. That article is not cited on the page.",
      url: "https://developers.openai.com/api/docs/bots",
      publisher: "OpenAI",
      captured: "2026-10-12",
      reviewAfterDays: 90,
    },
    {
      id: "google-product-results",
      claim:
        "Google Search Central, 'Introduction to Product structured data' (last updated 2025-12-10) and 'Merchant listing (Product) structured data', read 12 October 2026. On pages where people can buy, users 'can see price, availability, review ratings, shipping information, and more right in search results', and sites can share return information. Required: name, image, offers with a price above zero and currency. Recommended: availability, shippingDetails and hasMerchantReturnPolicy (a store-wide policy under Organization is preferred), aggregateRating and review. 'Share your product data with Google' lists Search, Images, the Shopping tab and Lens, and recommends both on-page structured data and a Merchant Center feed. Merchant Center Help, 'Free listings for products': products can show 'at no cost'. Supports asset rows one and two.",
      url: "https://developers.google.com/search/docs/appearance/structured-data/merchant-listing",
      publisher: "Google Search Central",
      captured: "2026-10-12",
      reviewAfterDays: 180,
    },
    {
      id: "google-product-variants",
      claim:
        "Google Search Central, 'Product variant structured data' (last updated 2026-09-08), read 12 October 2026. Variant markup makes products 'eligible for display with variant information in merchant listing experiences', and 'The site must have the ability to preselect each variant directly with a distinct URL'. Supports asset row six and the apparel and food category cards.",
      url: "https://developers.google.com/search/docs/appearance/structured-data/product-variants",
      publisher: "Google Search Central",
      captured: "2026-10-12",
      reviewAfterDays: 180,
    },
    {
      id: "google-local-ranking",
      claim:
        "Google Business Profile Help, 'Tips to improve your local ranking on Google', read 12 October 2026: 'Local results are mainly based on relevance, distance, and popularity', shown on Google Maps and Search. Supports FAQ six, which separates map results for a walk-in shop from product results.",
      url: "https://support.google.com/business/answer/7091",
      publisher: "Google Business Profile Help",
      captured: "2026-10-12",
      reviewAfterDays: 365,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "Where buyers find products now, and what each one reads from your store",
    intro:
      "Six places a buyer can meet your product before they reach your site. The middle column is what each one reads, from its own documentation. The last is what our audit checks.",
    renderer: "comparison",
    method: {
      captured: "2026-10-12",
      howGathered:
        "Taken from Google's, OpenAI's and Shopify's own help pages, read on 12 October 2026. The last column is what our audit checks. It is not a study of any store.",
    },
    columns: ["Where they look", "What it reads", "What we check"],
    rows: [
      {
        label: "Google results",
        cells: [
          "Product data on the page: price, stock, ratings, shipping and returns.",
          "That every product gives all five, and they match the page.",
        ],
      },
      {
        label: "Shopping tab, Images and Lens",
        cells: [
          "Your page data or a Merchant Center feed. Showing up there is free.",
          "That your feed exists, matches the site, and shows no errors.",
        ],
      },
      {
        label: "Google's AI Overviews and AI Mode",
        cells: [
          "The same indexed pages as normal search, with the key content in plain text.",
          "That your pages are indexed and answer buyer questions in words, not images.",
        ],
      },
      {
        label: "ChatGPT search",
        cells: [
          "Sites its search crawler, OAI-SearchBot, is allowed to reach.",
          "That your store doesn't block it by accident.",
        ],
      },
      {
        label: "ChatGPT, Copilot and Gemini shopping",
        cells: [
          "Product data sent through Shopify's catalog: titles, descriptions, images, prices, stock, shipping.",
          "That your catalog data is complete enough to come up.",
        ],
      },
      {
        label: "Each size and color",
        cells: ["Variants grouped together, each one at its own URL.", "That every variant has its own address."],
      },
    ],
    derived:
      "Read down the middle column and the same thing keeps coming back: your product's facts, written plainly, in data a machine can read. That's SEO, AEO and GEO in one line.\n\nIt's also why our audit starts with these six. It tells you which of them your store misses, product by product.",
    derivedList: {
      title: "Check one of your own products today",
      items: [
        "Search for its exact name on Google. Do you see a price and a rating, or just a link?",
        "Search a question your buyers ask. Does Google's AI answer quote any page of yours?",
        "Ask ChatGPT, Gemini or Perplexity for the best version of what you sell. Are you named?",
        "Open Google's Shopping tab. Is your product there at all?",
      ],
    },
    tone: "cream",
    reviewAfterDays: 90,
  },

  midCta: {
    text: "Want the six checked on your store? Send us one product link and we'll show you what each of them sees.",
    label: "Get in touch with us",
  },

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What store owners ask before they hand over their search",
  objections: [
    {
      objection: "We've paid for SEO before and got a report, not sales.",
      answer:
        "Then judge us on a different number. We report the orders and revenue that came from search, page by page. We also show where you're named in AI answers.\n\nIf a page we worked on isn't earning, you see it in the next report, with what we'd change.",
    },
    {
      objection: "Aren't AEO and GEO just SEO with a new name?",
      answer:
        "Partly, and Google says so itself: its AI answers use the same pages as normal search. That's why, as an ecommerce SEO agency Miami brands hire, we do the SEO first.\n\nWhat's new sits on top. Plain answers on the page, complete product data for AI shopping, and letting AI crawlers in. Skip those and you can rank well and still never get named.",
    },
    {
      objection: "We're not on Shopify.",
      answer:
        "We can still audit your store and tell you what's holding it back. The fixing, we do on Shopify, which also sends your products to ChatGPT and Copilot through its catalog.\n\nIf moving makes sense, we map every URL and build the redirects before a page moves. If it doesn't, we'll say so.",
    },
  ],

  results: {
    heading: "Two clients, in their own words",
    intro: "Each quote opens the case study behind it, so you can check the figures yourself.",
    slugs: ["ronaldo-jewelry-shopify-plus-redesign", "john-hardy-shopify-plus-migration"],
  },

  // ── Block 6: How it starts, and what it costs ─────────────────────────
  whatWeDoAboutItHeading: "How it starts, and what it costs",
  whatWeDoAboutIt:
    "We start with the audit. We check the six places above for your top products and ask the AI assistants what they say about your category. Then we crawl the rest of the store for anything slowing Google down.\n\nThen you get a list of fixes in order, each with a price and a date. Take one line or all of them. The audit is free, and the work is quoted in writing before anything starts.\n\nSEO usually runs as a monthly retainer, sized to your catalog. You'll see exactly what the first month covers before you agree to it.",

  processCta: {
    text: "The first conversation is about how buyers find your store and nothing else. It's free, and it can end with us saying there's little to fix.",
    label: "Get in touch with us",
  },

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  faqHeading: "What store owners ask before they pick an SEO agency",
  faqs: [
    {
      question: "What's the difference between SEO, AEO and GEO?",
      answer:
        "SEO gets your pages ranking in Google's results. AEO gets them quoted when Google answers a question directly. GEO gets your products and brand named by AI assistants like ChatGPT, Gemini and Copilot. All three read the same product pages.",
      unique: true,
    },
    {
      question: "What does ecommerce product SEO involve?",
      answer:
        "It means making each product page clear to search engines and AI: the name, price, stock, reviews, shipping, returns and every variant, in data they can read. Then making sure the words on the page match what people ask for.",
      unique: true,
    },
    {
      question: "Can you get our products into ChatGPT and other AI assistants?",
      answer:
        "We can make them ready and easy to pick. On Shopify, products reach ChatGPT and Copilot through Shopify's catalog, with Google's AI Mode and Gemini rolling out. So the job is complete product data and an open door for AI crawlers. Nobody can promise what an assistant will say, including us.",
      unique: true,
    },
    {
      question: "What's in the ecommerce SEO audit Miami brands get from us?",
      answer:
        "We check what Google, its AI answers and the AI assistants show for your top products, how your category pages match real searches, and what's slowing Google down. You get the fixes in order, each with a price. The audit is free.",
      unique: true,
    },
    {
      question: "How long does ecommerce SEO take to work?",
      answer:
        "Product data fixes can show once Google or an assistant reads the page again. New rankings take longer, usually months rather than weeks. Your plan gives a date for each fix.",
      unique: true,
    },
    {
      question: "Does a Miami address help our store get found?",
      answer:
        "Not for buyers searching from somewhere else. Product results and AI shopping answers are built from your product data, wherever your store is. If you also run a shop people walk into, map results depend partly on distance, and that's a separate job.",
      unique: true,
    },
    {
      question: "Will our rankings drop if we move to Shopify?",
      answer:
        "Not if the move is done right. Rankings usually drop when old URLs break. We map every one and build the redirects before the switch. Capelli Sports kept 95% of its search equity coming off WordPress.",
      unique: true,
    },
    {
      question: "Are you an ecommerce SEO agency Miami brands can work with remotely?",
      answer:
        "Yes. Every client works with us remotely, on calls and in a shared channel. Your store, your Search Console and your feeds stay in your name the whole time.",
      unique: true,
    },
    {
      question: "How much does an ecommerce SEO agency Miami brands hire cost?",
      answer:
        "Ours is a monthly retainer, sized to your catalog and how much needs fixing. The audit is free, and you get the price for the work in writing before anything starts.",
      unique: true,
    },
    {
      question: "Can you work alongside our developer or current SEO agency?",
      answer:
        "Yes, we work alongside both. We write down every fix so your developer can ship it, or we ship it ourselves. If someone else runs your content, we can take the product data, AI and technical side.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion. Zero keywords, no city name ─────────────────
  conversion: {
    heading: "Send us one product link. We'll show you what Google and AI assistants see.",
    whatYouGet: "Send one product link and we'll show you what Google, its AI answers and AI assistants show for it.",
    whatWeWillTellYouNotToDo:
      "If your product pages already give them everything, we'll tell you not to spend on this work, and point you at what will move.",
    responseExpectation: "Someone who does the search work replies within one working day.",
    audit: {
      transition: "You already know which product you'd most like buyers to find.",
      offer: "Send us that one, and we'll audit it and send you back:",
      parts: [
        "What Google, its AI answers and AI assistants show for it today.",
        "What's missing, and why.",
        "What we'd fix first across the rest of the store.",
      ],
      limit: "It stops at the findings. Any work is quoted separately, and you can say no.",
      noObligation: "It's free, and the findings are yours to keep.",
    },
  },

  sources: [],

  // Minimal copy, in line with the two Miami siblings.
  wordCountTarget: [1800, 2500],
};
