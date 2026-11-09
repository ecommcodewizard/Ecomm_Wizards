// Geo v5 S2, page 5 of 18: Miami, service format.
//
// Keywords (v5 plan 3.2 + SEMrush 2026-11-10: KD 1%, every ranking page has
// 0 backlinks except a DR 3 freelancer):
//   primary    shopify developer miami (50; Ahrefs says trending down)
//   secondary  shopify experts miami (90): FAQ heading + title. SERP check
//              passed (Shopify directory only at #8; agencies + Upwork)
//              shopify development miami (50, KD 0, SEMrush): services heading
//   variants   shopify expert miami, shopify web developer miami
// SERP mixes hiring and jobs intent; the AI Overview quotes hourly rates, so
// the FAQ answers hire / cost / manage / scam questions with no figures.
// Angle: selling across the Americas (Markets, currencies, languages, duties).
// Kept clear of /services/ecommerce-agency/miami ("ecommerce development
// miami", "ecommerce website design miami"): Shopify wording only.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_MIAMI: ServiceGeoPage = {
  type: "service",
  slug: "miami",
  path: "/services/shopify-development-agency/miami",
  hub: "/services/shopify-development-agency",
  geo: { name: "Miami", type: "metro", areaServed: "Miami, Florida" },

  targetKeyword: "shopify developer miami",
  secondaryKeywords: ["shopify experts miami", "shopify development miami"],
  faqKeywords: ["shopify expert miami", "shopify web developer miami"],
  metaTitle: "Shopify Developer Miami | Shopify Experts for the Americas",
  metaDescription:
    "Shopify developer Miami brands hire to sell across the Americas: custom builds, Shopify Plus, Markets for currencies and languages. Shopify experts, fixed price.",
  shortTitle: "Shopify Developer Miami",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Developer for Miami Brands",
    h1Lead: "",
    h1Gradient: "Shopify Developer",
    h1Tail: "Miami Brands Hire to Sell Across the Americas",
    intro:
      "Your next customer could be in Bogotá or São Paulo as easily as down the street. We're the Shopify developer Miami brands hire to build stores that sell across borders: [link:/services/shopify-theme-development|custom themes], [link:/services/shopify-plus-development|Shopify Plus], multi-currency and multi-language storefronts, and [link:/services/migration|platform migrations], all at a fixed price with the launch date agreed before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-miami-hero-v1.webp",
      alt: "International Shopify stores for Dryrobe, This Works and Ronaldo Jewelry, with sales up 250% and online revenue up 89%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify-only agency and a Shopify developer Miami brands can hire to sell across the US and Latin America: custom themes, Shopify Plus, Shopify Markets for multiple currencies and languages, and platform migrations. Every project has a fixed price and a launch date in writing, and most stores go live in about six weeks.",

  trust: {
    heading: "Brands That Trust Us With Their Shopify Store",
    subheading: "Many of them sell in more than one country, and every store was built in-house by Shopify experts who work on nothing else.",
  },

  pains: {
    heading: "Where Selling Across Borders Breaks a Store",
    intro:
      "Shipping to Colombia, pricing in reais, a Spanish product page: each one sounds simple until the store has to do all three at once. These are the four problems any Shopify developer Miami brands hire should solve first.",
    items: [
      {
        icon: "layers",
        name: "One Store, One Currency, One Language",
        desc: "International shoppers see US dollars, English copy and a US shipping estimate. Many leave before they find out whether you ship to them at all.",
        cost: "Cross-border traffic you paid for converts as if it never arrived.",
      },
      {
        icon: "receipt",
        name: "Duties That Surprise the Buyer at the Door",
        desc: "Without duties shown at checkout, an international order arrives with a customs bill the buyer didn't expect. Some refuse the parcel, and you pay to ship it back.",
        cost: "Refused parcels, return shipping and a customer you won't see twice.",
      },
      {
        icon: "store",
        name: "A Separate Store for Every Country",
        desc: "Running another Shopify store for each market means duplicate products, duplicate apps and inventory that never matches between stores.",
        cost: "Every product launch is done three times, and the mistakes multiply with it.",
      },
      {
        icon: "clock",
        name: "Slow Pages for Shoppers Far Away",
        desc: "Heavy themes and app scripts hurt most on slower mobile networks abroad. A page that feels fast on your office Wi-Fi can crawl for a shopper in another country.",
        cost: "Your best-converting market at home becomes your worst one abroad.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Miami Brands Selling at Home and Abroad",
    intro:
      "Every build is handled in-house by people who work only on Shopify. Once the store is live, we can also run [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO] across each of your markets.",
    items: [
      {
        title: "Shopify Markets Setup",
        body: "Local currencies, translated storefronts, country-specific pricing and domains, all run from one Shopify admin. We configure Markets so each country sees a store that feels made for it.",
      },
      {
        title: "Multi-Language Storefronts",
        body: "Spanish, Portuguese or any other language on the same store: product pages, navigation, checkout and emails translated, on their own URLs so search engines index each version.",
      },
      {
        title: "Duties and International Shipping",
        body: "Duties and import taxes shown and collected at checkout where Shopify supports it, with shipping zones, rates and delivery estimates set for each market.",
      },
      {
        title: "Custom Theme Development",
        body: "Our Shopify web developers build a fast, custom theme for mobile shoppers on any connection, with sections your team can update without calling anyone.",
      },
      {
        title: "Shopify Plus for Growing Brands",
        body: "Expansion stores, checkout extensions, Shopify Functions and B2B, for brands whose volume and markets justify Plus. We'll tell you if you don't need it yet.",
      },
      {
        title: "Platform Migration",
        body: "Move from WooCommerce, Magento, BigCommerce or a regional platform with products, customers and orders intact, and every old URL redirected.",
      },
      {
        title: "Apps and Integrations",
        body: "Connect Shopify to your ERP, 3PL, payment providers and marketplaces, or get a custom app built when nothing off the shelf fits.",
      },
      {
        title: "Ongoing Store Management",
        body: "Every build includes 60 days of post-launch support, then an optional monthly retainer if you'd rather hand the store's day-to-day upkeep to us.",
      },
    ],
  },

  local: {
    label: "Selling from Miami",
    heading: "What Selling from Miami Means for Your Store",
    intro:
      "Miami changes three things about how your store should be built: where your customers are, which tax rules apply, and what the weather can do to your delivery dates.",
    items: [
      {
        icon: "flag",
        name: "A Gateway to Latin America",
        desc: "The Miami-Dade Beacon Council says about a third of all US exports to Latin America and the Caribbean move through Miami. If your brand sells south, your store should too, with local currencies, Spanish or Portuguese pages and delivery estimates for each country.",
      },
      {
        icon: "receipt",
        name: "Florida Sales Tax, Set Up Right",
        desc: "Miami-Dade's combined sales tax rate is 7%: Florida's 6% plus a 1% county surtax. Selling into Florida from another state? You must collect once your taxable Florida sales pass $100,000 a year, with no order-count test. We set up Shopify Tax for whichever applies, and your accountant handles registration and filing.",
      },
      {
        icon: "alert",
        name: "Hurricane Season Delivery Planning",
        desc: "Atlantic hurricane season runs from June 1 to November 30. We build delivery notices you can switch on quickly, set backup shipping rules and keep order-status emails clear, so a storm delay doesn't turn into a wave of support tickets.",
      },
    ],
  },

  caseStudies: {
    heading: "Stores Built to Sell in More Than One Market",
    intro:
      "Proof to ask of any Shopify developer Miami brands consider: each brand here sells across borders or channels, and each result was measured after launch.",
    items: [
      {
        slug: "dryrobe-shopify-plus-redesign",
        tags: ["Outdoor Apparel", "Shopify Plus", "International"],
        description: "An outdoor apparel brand merged three separate country stores into one international Shopify Plus build. Online revenue grew 89% and returns fell 31%.",
        video: "/images/Case%20studies/dryrobe%20video.mp4",
      },
      {
        slug: "this-works-shopify-plus-migration",
        tags: ["Beauty", "Magento Exit", "UK, US and EU"],
        description: "A skincare brand left Magento for Shopify Plus storefronts in the UK, US and EU. Conversion rate rose 38% and mobile conversion 45%.",
        video: "/images/Case%20studies/This%20Works%20video.mp4",
      },
      {
        slug: "ronaldo-jewelry-shopify-plus-redesign",
        tags: ["Jewelry", "Shopify Plus", "Product Configurator"],
        description: "A handcrafted jewelry brand rebuilt its store with a custom piece configurator and checkout trust for high-value orders. Total sales rose 250% and conversion 120%.",
        video: "/images/Case%20studies/Ronaldo%20Jewelry-video.mp4",
      },
    ],
  },

  process: {
    heading: "From Kickoff to Selling in New Markets",
    intro:
      "Five stages with your sign-off at each one, in the order any Shopify developer Miami brands hire should follow. Most stores are live in about six weeks, and new markets can be added later.",
    steps: [
      { title: "Map Your Markets", desc: "We look at where your customers are today and where you want to sell next, then fix the scope, the price and the launch date in writing." },
      { title: "Design for Every Market", desc: "Figma designs for desktop and mobile, with room for longer translated copy, local payment badges and currency switching. You approve every screen." },
      { title: "Build and Translate", desc: "Theme, Markets, translations, duties and shipping rules built on a staging store, with your apps and data connected." },
      { title: "Test Each Country", desc: "Test orders in every currency and language, checking prices, duties, taxes and delivery estimates before launch." },
      { title: "Launch and Expand", desc: "A planned go-live, 60 days of support, and a plan for your next market when you're ready for it." },
    ],
  },

  compare: {
    heading: "Questions to Ask Your Shopify Developer Miami Shortlist",
    intro: "Your search will turn up freelancers, local agencies and directory listings. Here is what each one is good for, and what to check before you sign.",
    options: [
      {
        name: "Freelance Shopify developer",
        goodFor: "Quick fixes and small features on a single-market store.",
        watchFor: "Cross-border setups touch design, tax, shipping and translation at once. One person rarely covers all of it, and the work stops when they're busy.",
      },
      {
        name: "Local full-service agency",
        goodFor: "Brands that want ads, social media and web design from one team.",
        watchFor: "Ask how many stores they've launched in more than one currency or language, and ask to see them working.",
      },
      {
        name: "Directory and marketplace listings",
        goodFor: "Comparing reviews and hourly rates side by side.",
        watchFor: "A listing tells you a rate, not a result. Ask for measured outcomes from stores like yours.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Multi-currency and multi-language stores, built in-house",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Selling across borders changes the build in every category. Here is what a Shopify developer Miami brands hire should plan for in each one.",
    items: [
      { icon: "shirt", name: "Fashion and Swimwear", desc: "Size conversion for international shoppers, seasonal drops timed by hemisphere, and lookbooks that link straight to products." },
      { icon: "star", name: "Beauty and Skincare", desc: "Translated ingredient lists, shade finders, regimen bundles and subscriptions for the products customers reorder." },
      { icon: "cart", name: "Jewelry and Accessories", desc: "Personalization previews, trust signals for high-value orders, and multi-currency prices that round sensibly." },
      { icon: "food", name: "Food and Wellness", desc: "Subscriptions, bundles, and shipping rules set for what each destination country accepts." },
      { icon: "home", name: "Home and Lifestyle", desc: "Large option sets, swatches and freight shipping for bigger items, with delivery estimates by country." },
      { icon: "box", name: "B2B and Distribution", desc: "Trade pricing, net terms and quick reorder for distributors at home and abroad. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Developer FAQs for Miami Brands",
  faqs: [
    {
      question: "Freelancer or agency: who should build my Shopify store?",
      answer:
        "A freelancer suits small fixes and single features. An agency suits work that spans design, development, translation, tax and launch, because it covers every skill at once and your project doesn't stall when one person is busy.",
      unique: true,
    },
    {
      question: "How much does it cost to hire a Shopify expert?",
      answer:
        "It depends on the scope, so we price by project, not by the hour. A fair Shopify developer Miami quote is one fixed price in writing; ours arrives within 48 hours of a short online call, with the launch date included.",
      unique: false,
    },
    {
      question: "Are you Shopify experts for Miami brands?",
      answer:
        "Yes. We work only on Shopify and Shopify Plus and have built 150+ stores, including stores that sell in several countries and currencies, so the people on your project know the platform in depth.",
      unique: true,
    },
    {
      question: "Is it worth it to hire a Shopify expert?",
      answer:
        "It is when the store is your main sales channel. An expert avoids the mistakes that cost the most later: slow themes, broken redirects, wrong tax settings and app bloat. Our case studies show the measured result of each project, so you can judge the return yourself.",
      unique: true,
    },
    {
      question: "Can I hire someone to manage my Shopify store?",
      answer:
        "Yes. After launch you can keep us on a monthly retainer for updates, new pages, app changes and fixes, so the store keeps moving without an in-house hire.",
      unique: true,
    },
    {
      question: "Can one Shopify store sell in several countries and currencies?",
      answer:
        "Yes. Shopify Markets runs local currencies, languages, prices and domains from one admin. We set up each market with its translations, duties and shipping, and test real orders in every currency before launch.",
      unique: true,
    },
    {
      question: "How do I avoid getting scammed when hiring a Shopify developer?",
      answer:
        "Ask for live stores they built and measured results, a written scope with a fixed price, and confirmation that you own the code and every account from day one. Never hand over your store's owner login; add developers as staff or collaborators instead.",
      unique: true,
    },
    {
      question: "Do you set up Florida sales tax in Shopify?",
      answer:
        "Yes. We configure Shopify Tax so each order carries the right Florida rate, including Miami-Dade's 7% combined rate. Out-of-state sellers must collect once their taxable Florida sales pass $100,000 a year. We set up the store side; your accountant handles registration and filing.",
      unique: true,
    },
  ],

  book: {
    heading: "Book a Free Call With a Shopify Expert",
    sub: "Pick a time for an online call with a senior Shopify specialist. Tell us where you sell today and where you want to sell next, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your store, your markets and what is holding sales back",
      "Get a fixed price and a launch date within 48 hours",
      "Find out what Shopify Markets handles natively and what needs custom work",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "beacon-trade",
      claim: "Approximately one-third of all US exports to Latin America and the Caribbean move through Miami",
      url: "https://www.beaconcouncil.com/trade/",
      publisher: "Miami-Dade Beacon Council",
      captured: "2026-11-10",
      reviewAfterDays: 365,
    },
    {
      id: "fl-surtax",
      claim: "Miami-Dade County discretionary sales surtax 1%; Florida state rate 6%; combined 7%",
      url: "https://floridarevenue.com/Forms_library/current/dr15dss.pdf",
      publisher: "Florida Department of Revenue (DR-15DSS)",
      captured: "2026-11-10",
      reviewAfterDays: 180,
    },
    {
      id: "fl-nexus",
      claim: "Florida remote sellers must collect once taxable remote sales into Florida exceed $100,000 in the prior calendar year (from July 1, 2021); no transaction test",
      url: "https://www.bdo.com/insights/tax/florida-enacts-economic-nexus-and-marketplace-legislation",
      publisher: "BDO (Florida SB 50)",
      captured: "2026-11-10",
      reviewAfterDays: 180,
    },
    {
      id: "noaa-season",
      claim: "The Atlantic hurricane season runs June 1 to November 30",
      url: "https://www.nhc.noaa.gov/climo/",
      publisher: "NOAA National Hurricane Center",
      captured: "2026-11-10",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
