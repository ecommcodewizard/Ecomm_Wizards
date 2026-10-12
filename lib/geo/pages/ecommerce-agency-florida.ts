// Batch 1, Florida #20: /services/ecommerce-agency/florida
// Inventory: Geo Inventory & Batch Plan, Florida state row ("ecommerce agency
// florida", 10/mo, KD 2). Secondary supplied by the owner 13 October 2026:
// "florida ecommerce website design".
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// ── STEP 01, THE INTENT ─────────────────────────────────────────────────────
// "He typed this because he already decided he wants an ecommerce agency, and
// still needs to work out which platform, which job, and who to trust."
// PLATFORM IS OPEN and SERVICE IS OPEN. He may be on Shopify, on WooCommerce,
// Magento or BigCommerce, or on nothing yet. So: the platform question is
// answered straight after the hook (place layer), migration is a main door in
// the menu, and no line assumes he is already on Shopify.
// The secondary is DESIGN, so design leads the menu and carries the argument.
//
// ── ROIA (Step 03) ──────────────────────────────────────────────────────────
// ONE IDEA (16 words): design and engineering as one job, so the store looks
// premium and still works years later. Same premium position the owner set on
// the Shopify Florida page (reliable, technically solid), argued here through
// design because that is where this keyword's demand sits.
//   hook          the market: every US shopper can reach you, and compares
//   place layer   whatever you run today, where the work starts
//   proof + menu  the work, seven jobs, design first
//   gradient      what's decided in the design file, sourced
//   asset         eight things a finished design should hand you
//   promises      the published reliability commitments
//   objections / results / how a job starts / FAQ / form
// ONE OFFER, ONE ACTION: the free read of his store; every button says
// "Get in touch with us" and goes to #contact.
//
// ── WHAT IS ALREADY TAKEN ───────────────────────────────────────────────────
// Hub: Raleigh speed and load order, Denver app weight, Chicago checkout
// abandonment, New York platform ceilings, Boston answers before the cart,
// Miami language. So no Core Web Vitals or Baymard argument here.
// Twin, shopify-development-agency/florida: owns "built right, launched on
// time", seven build questions, hurricane season (its only mention). Nothing
// here repeats them; hurricanes are not mentioned at all.
//
// LOCATION, owner's ruling 13 October 2026: never claim to be in Florida and
// never say we aren't. No office FAQ, no "remote", no hire-local objection.
// validate-content's optional office-FAQ WARN is expected.
//
// NO PRICES (owner's California ruling), so the cost FAQ is absent.
// ARCHETYPE: ["D"], density-led on the national-shopper fact.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
//   hero        Ronaldo (design), Capelli (migration), Living in Sunshine
//               (email; the beach shot is the visual Florida hint)
//   proof       ChloBo (Magento), This Works, Capelli (WordPress), all moves
//               to Shopify, because this reader's platform is open
//   disciplines Ronaldo, Mouldings One, Capelli, Happy Mammoth, Evie Lou,
//               Chilly's, Living in Sunshine
//   results     Everlast, Wild, Sneak (disjoint from proof)
//
// PRESENCE: none claimed or denied. REVIEW: 180 days.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_FLORIDA: GeoPage = {
  type: "geo",
  slug: "florida",
  path: "/services/ecommerce-agency/florida",
  hub: "/services/ecommerce-agency",

  geo: {
    name: "Florida",
    type: "state",
    areaServed: "Florida",
  },
  archetype: ["D"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency florida",
  secondaryKeywords: ["florida ecommerce website design"],
  faqKeywords: [
    "how long does it take to build an ecommerce website",
    "what should ecommerce website design include",
    "which ecommerce platform is best",
    "can you migrate my store without losing seo",
    "can you redesign my existing online store",
    "who owns my ecommerce website",
  ],

  metaTitle: "Ecommerce Agency Florida | Design, Build and Move to Shopify",
  metaDescription:
    "An ecommerce agency Florida brands hire to design, build, migrate and grow online stores. Design and engineering as one job, with the scope in writing first.",
  shortTitle: "Ecommerce agency Florida",
  serviceType: "Ecommerce agency",

  // ── Hero ──────────────────────────────────────────────────────────────
  h1: "Ecommerce agency Florida brands hire to build a store they're proud to send people to",
  qualifier:
    "Website design, development, migration to Shopify, SEO, testing, creative and email. You can take one of them or all seven. Whatever you sell on today, the scope is in writing before any work starts.",

  // Built by scratchpad ea-hero.html (same template as the Shopify Florida
  // hero), rendered in headless Edge at 2x on a transparent background.
  heroImage: {
    cutout: true,
    src: "/images/ecommerce-agency-florida-hero-v1.webp",
    alt: "A storefront we designed for Ronaldo Jewelry, a store we moved to Shopify for Capelli Sports, and Living in Sunshine, whose email program we built, with results of +250% total sales and 95% of SEO equity kept",
  },
  heroGlow: true,
  heroCtaLabel: "Get in touch with us",
  assetCtaLabel: "See what a finished design includes",
  servicesBeforeGradient: true,
  relatedTone: "white",
  whatWeDoAboutItTone: "cream",

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years in ecommerce" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "{storesBuilt} online stores designed, built or moved. A few of the brands behind them.",
    subheading: "Jewelry, sportswear, skincare, drinks, wholesale. Some came to us on Shopify, and plenty didn't.",
  },

  // ── Hook ──────────────────────────────────────────────────────────────
  // The market, never his store. One sourced number, then the idea.
  hook:
    "About 93 in every 100 American shoppers live outside Florida. Online, any of them can land on your store. And they'll judge it against the best store they used this week.\n\nSo the design has to hold up to that, on a phone and on a laptop. The build under it has to hold up too, long after launch day.\n\nWe treat those as one job. Below are the stores we've designed and built, the seven jobs we take on, and what a finished design should hand you.",

  // ── GEO passage ───────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Florida brands hire to design, build, move and grow their online stores. We build on Shopify and Shopify Plus. We also move stores to Shopify from WooCommerce, Magento, BigCommerce and other platforms. Design and build run as one job. You get the scope and launch date in writing before any work starts on your store.",

  // ── Place layer: the platform question, answered early ────────────────
  // Platform is open on this keyword, so this block meets all three readers
  // and makes migration the door for anyone not on Shopify.
  placeLayerHeading: "On Shopify, on another platform, or not online yet. The work starts in the same place.",
  placeLayer:
    "**Already on Shopify?** We design, build and grow on the store you have. Nothing gets rebuilt that doesn't need to be.\n\n**On WooCommerce, Magento, BigCommerce or something else?** We move you to Shopify. Your products, customers, orders and search rankings come with you, and the launch date is set before any code is written.\n\n**Not selling online yet?** We design and build your first store, so it starts out the way we'd want to find it.",

  // ── Proof: moves to Shopify, for a reader whose platform is open ─────
  proofHeading: "Three brands that came to us on other platforms, and what changed after the move",
  proof: [
    {
      slug: "chlobo-shopify-plus-migration",
      vertical: "Jewelry",
      whatWasBuilt: "A move from Magento to Shopify Plus, with a new design and a custom engraving preview",
      outcome: "+48% conversion, +39% mobile revenue, 52% lower platform cost",
      verified: true,
    },
    {
      slug: "this-works-shopify-plus-migration",
      vertical: "Skincare",
      whatWasBuilt: "A replatform to Shopify Plus with a redesigned storefront",
      outcome: "+38% conversion, +45% mobile conversion, 15% lower bounce rate",
      verified: true,
    },
    {
      slug: "capelli-sports-shopify-migration",
      vertical: "Sportswear",
      whatWasBuilt: "A move from WordPress to Shopify with every old URL mapped before launch",
      outcome: "95% of SEO equity kept, +24% conversion, 38% faster site",
      verified: true,
    },
  ],
  proofCta: {
    text: "Thinking about a move like these?",
    label: "Get in touch with us",
  },

  // ── Service menu ──────────────────────────────────────────────────────
  // Design leads: the secondary keyword says that's where the demand is. The
  // one body line houses the secondary (owner's 2026-09-05 ruling: a body
  // line only where an assigned secondary has to live).
  disciplines: {
    label: "What we do",
    heading: "Seven jobs, and design and build never handed between teams",
    intro:
      "Each row opens the store the work was done for. An ecommerce agency Florida brands hire should let you start with one job and add the rest when you're ready.",
    items: [
      {
        label: "Website design",
        heading: "We design stores your shoppers trust on sight, and your team can still edit",
        body: "We plan Florida ecommerce website design and the build as one job, so nothing in the design needs a workaround later.",
        covers: ["Store design", "Product pages", "Mobile and desktop", "Design systems", "Accessibility"],
        imageAlt: "A Shopify Plus storefront we designed for Ronaldo Jewelry",
        caseSlug: "ronaldo-jewelry-shopify-plus-redesign",
        cta: { label: "Explore store design", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        label: "Development",
        heading: "We build the features and connections a theme can't, without slowing the store",
        covers: ["Custom features", "B2B and wholesale", "ERP and inventory", "Integrations", "Shopify Plus"],
        imageAlt: "A trade portal we built on Shopify for Mouldings One",
        caseSlug: "mouldings-one-shopify-b2b-portal",
        cta: { label: "Explore development", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration to Shopify",
        heading: "We move you to Shopify from any platform and keep the rankings you earned",
        covers: ["WooCommerce", "Magento", "BigCommerce", "Redirect mapping", "Customer and order data"],
        imageAlt: "Capelli Sports' store, moved from WordPress to Shopify",
        caseSlug: "capelli-sports-shopify-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "CRO",
        heading: "We test changes on real shoppers before they go live for everyone",
        covers: ["A/B testing", "Product pages", "Quizzes", "Subscriptions"],
        imageAlt: "Subscription and conversion work for the supplement brand Happy Mammoth",
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        cta: { label: "Explore CRO", href: "/services/shopify-cro-agency" },
      },
      {
        label: "SEO, AEO and GEO",
        heading: "We get your products found on Google, in its AI answers and in ChatGPT",
        covers: ["Technical SEO", "Collection pages", "Product page SEO", "AI answers (AEO)", "AI search (GEO)"],
        imageAlt: "Search work on product and collection pages for the womenswear brand Evie Lou",
        caseSlug: "evie-lou-shopify-fashion-cro",
        cta: { label: "Explore ecommerce SEO", href: "/services/ecommerce-seo-agency" },
      },
      {
        label: "Creative strategy",
        heading: "We make the ads, test them, and spend your budget on the ones that sell",
        covers: ["Ad creative", "Paid social", "Creative testing", "Creator content"],
        imageAlt: "Ad creative we made and tested for the drinkware brand Chilly's",
        caseSlug: "chillys-creative-strategy",
        cta: { label: "Explore creative strategy", href: "/services/creative-strategy" },
      },
      {
        label: "Email and retention",
        heading: "We build the email flows that turn a first order into a habit",
        covers: ["Klaviyo", "Welcome and cart flows", "Segmentation", "Campaigns"],
        imageAlt: "The Klaviyo email program we built for the surf and outdoor brand Living in Sunshine",
        caseSlug: "living-in-sunshine-klaviyo-email",
        cta: { label: "Explore email marketing", href: "/services/klaviyo-audit" },
      },
    ],
  },
  servicesCta: {
    text: "Not sure which of the seven you need first? Tell us about your store and we'll say.",
    label: "Get in touch with us",
  },

  // ── Gradient: what's decided in the design ────────────────────────────
  gradientLayerHeading: "Most of what a store can do is decided in the design file. The build can't fix what the design missed.",
  gradientLayer:
    "**Google ranks the phone version.** Google's own docs say it uses the mobile version of a site for indexing and ranking. A design that only looks finished on a laptop isn't finished.\n\n**Contrast and labels are design choices too.** The accessibility standard asks for text with a contrast ratio of at least 4.5:1. Florida courts saw 950 website accessibility lawsuits in 2025, nearly a quarter of the US total, per EcomBack's annual report.\n\n**So design and build belong together.** When they're split, the developer finishes the design by guessing. Any ecommerce agency Florida brands hire should show you the full design before the build starts, so you can check it.",
  gradientFacts: [
    {
      id: "census-quickfacts-fl-us-2025",
      claim:
        "US Census Bureau QuickFacts, Vintage 2025 population estimates for 1 July 2025: Florida 23,462,518; United States 341,784,857. Florida is 6.86% of the US population, so about 93 in every 100 Americans live outside the state. Supports the hook.",
      url: "https://www.census.gov/quickfacts/fact/table/FL,US/PST045225",
      publisher: "US Census Bureau",
      captured: "2026-10-12",
      reviewAfterDays: 365,
    },
    {
      id: "google-mobile-first-indexing",
      claim:
        "Google Search Central, 'Mobile-first indexing best practices', read 13 October 2026: 'Google uses the mobile version of a site's content, crawled with the smartphone agent, for indexing and ranking. This is called mobile-first indexing.' 'Only the content shown on the mobile site is used for indexing.'",
      url: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
      publisher: "Google Search Central",
      captured: "2026-10-13",
      reviewAfterDays: 365,
    },
    {
      id: "w3c-wcag22-contrast-minimum",
      claim:
        "W3C, Understanding WCAG 2.2, Success Criterion 1.4.3 Contrast (Minimum), Level AA, read 13 October 2026: 'The visual presentation of text and images of text has a contrast ratio of at least 4.5:1', with large-scale text at least 3:1.",
      url: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html",
      publisher: "W3C Web Accessibility Initiative",
      captured: "2026-10-13",
      reviewAfterDays: 365,
    },
    {
      id: "ecomback-2025-ada-website-lawsuits-florida",
      claim:
        "EcomBack, 2025 ADA Website Accessibility Lawsuit Annual Report, covering 1 January to 31 December 2025 and built from PACER, CourtLink and state court case search portals: 3,948 lawsuits in total; by state, New York 1,108 (28.06%), Florida 950 (24.06%), California 787 (19.93%). A commercial compliance vendor's count, cited as such. Same report the California page cites, captured there 17 September 2026; the Florida row is used here.",
      url: "https://www.ecomback.com/annual-2025-ada-website-accessibility-lawsuit-report",
      publisher: "EcomBack, 2025 annual ADA website lawsuit report",
      captured: "2026-09-17",
      reviewAfterDays: 365,
    },
  ],

  // ── Only-Here Asset: what a finished design hands you ─────────────────
  asset: {
    title: "Eight things a finished ecommerce design should hand you before the build",
    intro:
      "Use this to check any design you're shown, ours included. If something's missing, the developer will fill the gap by guessing.",
    renderer: "checklist",
    method: {
      captured: "2026-10-13",
      howGathered:
        "We wrote this list from the sources above and from Shopify's own docs. We also drew on what goes wrong when a design reaches the build half done. It's a checklist, not a ranking of anyone. You can hold any design up against it.",
    },
    columns: ["What you should get", "Why it matters"],
    rows: [
      { label: "Phone and laptop designs for every page type", cells: ["Google ranks the phone version, and most designs are only finished on a laptop"] },
      { label: "Product pages in every state", cells: ["Sold out, on sale, many sizes, no reviews yet. The mockup shows the best case; real pages hit all of them"] },
      { label: "Text and buttons that pass contrast", cells: ["At least 4.5:1 for text. Fixing it after launch means redoing the design"] },
      { label: "A name for every icon, link and image", cells: ["A cart icon with no label is invisible to a screen reader"] },
      { label: "Sections your team can edit", cells: ["If every banner change needs a developer, you'll pay for each one"] },
      { label: "Image sizes and formats set out", cells: ["Big images are the usual reason a beautiful page loads slowly"] },
      { label: "The checkout and account pages, not just the cart", cells: ["It's where the order is won or lost, and each platform has its own rules there"] },
      { label: "A redirect map, if you're changing platforms", cells: ["Every old URL needs a new home on launch day, or the rankings it earned are lost"] },
    ],
    derived:
      "None of the eight is exotic. They get missed because the design and the build are handled by different people, and each assumes the other has it.\n\nAsk for all eight before the build starts. An ecommerce agency Florida brands can rely on will have them ready, or tell you when they will.",
    reviewAfterDays: 180,
  },
  midCta: {
    text: "Want us to check your current store against all eight? Send the address.",
    label: "Get in touch with us",
  },

  // ── Promises (all published on ecommwizards.com) ─────────────────────
  howWeWork: {
    heading: "What you can count on, on a redesign or a full move",
    intro: "Four things that hold whatever you hire us for.",
    items: [
      {
        title: "Scope and launch date first",
        body: "Within 48 hours of the first call you get the scope and timeline in writing. The go-live date is set before any code is written.",
      },
      {
        title: "Nothing ships unchecked",
        body: "Every build goes through QA on phones and desktop browsers, with accessibility checks, before you see it live.",
      },
      {
        title: "Every change has a record",
        body: "Your theme is kept in version control, so any change can be traced and rolled back.",
      },
      {
        title: "It's all yours",
        body: "The store, the code, the design files and the customer data stay in your name, whoever you work with next.",
      },
    ],
  },

  // ── Objections (three) ────────────────────────────────────────────────
  objectionsHeading: "Three things owners ask before they commit",
  objections: [
    {
      objection: "We're not on Shopify.",
      answer:
        "That's where a lot of our work starts. We move stores from WooCommerce, Magento, BigCommerce and others.\n\nYour products, customers, orders and rankings come across, and every old URL is redirected before launch.",
    },
    {
      objection: "Our last redesign looked great and sold less.",
      answer:
        "That happens when a redesign replaces what was working without testing it first.\n\nWe find what's earning you money before we touch it, and we test the big changes on real shoppers before they go live for everyone.",
    },
    {
      objection: "We only want it to look better. We don't need a rebuild.",
      answer:
        "Then that's the job. On Shopify, a lot of a redesign can happen inside the store you have.\n\nWe'll tell you which parts need new design and which only need cleaning up. Ask any ecommerce agency Florida brands shortlist for the same split.",
    },
  ],

  // ── Client quotes (disjoint from proof) ───────────────────────────────
  results: {
    heading: "Three more owners on what the work did",
    intro:
      "Before you pick an ecommerce agency Florida brands vouch for, hear it from three more clients. Every number links to its case study.",
    slugs: ["everlast-shopify-plus-sports-redesign", "wild-shopify-plus-subscriptions", "sneak-energy-shopify-redesign"],
    headlines: {
      "everlast-shopify-plus-sports-redesign": "{brand} more than doubled conversion, up 152% after the redesign",
      "wild-shopify-plus-subscriptions": "{brand} reached 80,000 monthly subscribers within a year",
      "sneak-energy-shopify-redesign": "{brand} lifted mobile conversion 68% on a redesigned store",
    },
  },

  // ── How a job starts ──────────────────────────────────────────────────
  whatWeDoAboutItHeading: "How it starts: we read your store before we design anything",
  whatWeDoAboutIt:
    "Whatever platform you're on, we start with what's there. What's selling, what's slow, what's costing you, and what the move or redesign would touch.\n\nYou get that back as a short list, with the first change we'd make. If you go ahead, the scope and timeline arrive in writing within 48 hours of the call.\n\nAsk every ecommerce agency Florida brands talk to for the same read before they show you a design. It's the quickest way to see who looked.",
  processCta: {
    text: "The read is free, and the list is yours to keep either way.",
    label: "Get in touch with us",
  },

  // ── FAQ (AEO): each answer opens with the direct answer ──────────────
  faqHeading: "Questions to ask before you hire an ecommerce agency",
  faqs: [
    {
      question: "How long does it take to build an ecommerce website?",
      answer:
        "Most new stores launch in 6 to 10 weeks. A move from another platform or a large custom build can take longer. You get the date in writing before any code is written.",
      unique: true,
    },
    {
      question: "What should ecommerce website design include?",
      answer:
        "It should cover every page type, on a phone and a laptop. You should also get product pages in every state, readable contrast, labels, editable sections, image sizes and the checkout. If you're changing platforms, add a redirect map.",
      unique: true,
    },
    {
      question: "Which ecommerce platform is best for my store?",
      answer:
        "We build on Shopify and Shopify Plus. It's the platform we can stand behind for most brands that sell online. If you're on another one, we'll show you what a move would gain you and how long it takes, before you decide.",
      unique: true,
    },
    {
      question: "Can you move my store to Shopify without losing my Google rankings?",
      answer:
        "Yes, that's what the redirect map is for. We match every old URL on your store to its new page and set the redirects before launch. Capelli Sports kept 95% of its SEO equity moving from WordPress.",
      unique: true,
    },
    {
      question: "Can you redesign my existing online store?",
      answer:
        "Yes. If you're on Shopify, we redesign the store you have and keep what works. If you're on another platform, we do the new design and the move to Shopify together.",
      unique: true,
    },
    {
      question: "Who owns my ecommerce website after it's built?",
      answer:
        "You do. The store, the code, the design files and the customer data are all in your name, and stay there if you move on.",
      unique: true,
    },
    {
      question: "What does Florida ecommerce website design cover with you?",
      answer:
        "Your whole storefront, on phone and laptop: home, collections, product pages, cart, checkout and accounts. It's planned with the build, so the developer never has to guess.",
      unique: true,
    },
    {
      question: "Are you an ecommerce agency Florida brands can hire for design only?",
      answer:
        "Yes. You can hire us for design, a build, a move or growth work on its own. Each job gets its scope in writing before we start.",
      unique: true,
    },
    {
      question: "Do you handle marketing as well as the website?",
      answer:
        "Yes. SEO for Google and AI answers, ad creative, email and conversion testing are all on the menu. You can take them with a build or on their own.",
      unique: true,
    },
  ],

  // ── Conversion ────────────────────────────────────────────────────────
  // Step 09: zero keywords and no place name in this block.
  conversion: {
    heading: "Send us your store address. We'll tell you what to keep and what to change.",
    whatYouGet:
      "We read your store, whatever it runs on, and send back what's working, what's holding it back and what we'd change first.",
    whatWeWillTellYouNotToDo:
      "If part of your store is already working, we'll tell you to keep it, even in the middle of a redesign.",
    responseExpectation: "A developer replies within one working day.",
    audit: {
      transition: "The eight-point design check from the table, run on your store.",
      offer: "Put your store address in the form, and you'll get back:",
      parts: [
        "Which of the eight your store already has, and which it's missing.",
        "What's working on your current platform, and what's holding it back.",
        "The first change we'd make, and what we'd leave alone.",
      ],
      limit: "You get the findings, with nothing else attached.",
      noObligation: "It's free, and nobody follows up to push a sale.",
    },
  },

  sources: [],
  wordCountTarget: [2000, 2500],
};
