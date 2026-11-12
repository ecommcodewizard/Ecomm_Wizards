// Geo v5 S2, page 9 of 18: Colorado (state), service format.
//
// Keywords (v5 plan 3.2; SERP checked 2026-11-11: every ranking page in
// Ahrefs has 0 referring domains; SEMrush shows 20/mo, no KD):
//   primary    shopify development agency colorado (20-30)
//   secondary  colorado ecommerce agencies with shopify expertise (40, KD 0):
//              leads the compare section
//              boulder shopify agency (30, Ahrefs): leads the Boulder block.
//              SERP check passed (Boulder agencies + local pack, no jobs)
//   variants   shopify development services boulder colorado
// Denver terms are left to the Denver page (v5 #15). H1 owner pick #16
// ("sell in every season"). Angle: outdoor and natural-products brands,
// seasonal launches. 100xelevate ranks with Adams County, Centennial and
// Boulder pages; we don't echo their structure.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_COLORADO: ServiceGeoPage = {
  type: "service",
  slug: "colorado",
  path: "/services/shopify-development-agency/colorado",
  hub: "/services/shopify-development-agency",
  geo: { name: "Colorado", type: "state", areaServed: "Colorado" },

  targetKeyword: "shopify development agency colorado",
  secondaryKeywords: ["colorado ecommerce agencies with shopify expertise", "boulder shopify agency"],
  faqKeywords: ["shopify development services boulder colorado"],
  metaTitle: "Shopify Development Agency Colorado | Stores for Every Season",
  metaDescription:
    "The Shopify development agency Colorado brands hire for stores that sell in every season: custom builds, seasonal launches, headless and Shopify Plus at a fixed price.",
  shortTitle: "Shopify Development Agency Colorado",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Development for Colorado Brands",
    h1Lead: "",
    h1Gradient: "Shopify Development Agency",
    h1Tail: "Colorado Brands Hire for Stores That Sell in Every Season",
    intro:
      "Ski gear in November, trail gear in May, holiday gifting in between: your store has to change as fast as your catalog does. We're the Shopify development agency Colorado brands hire to build for that, with [link:/services/shopify-theme-development|custom themes], seasonal launch pages, [link:/services/headless-shopify-agency|headless builds], [link:/services/shopify-plus-development|Shopify Plus] and [link:/services/migration|migrations], at a fixed price agreed before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-colorado-hero-v1.webp",
      alt: "Outdoor and natural-product Shopify stores for Chilly's, Dryrobe and Daring, with online revenue up 89% and conversion up 38%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify development agency Colorado brands hire for stores that sell in every season: custom themes, seasonal launches and preorders, headless storefronts, Shopify Plus and migrations, with a focus on outdoor and natural-products brands. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before work starts.",

  trust: {
    heading: "Outdoor, Lifestyle and Food Brands That Trust Us",
    subheading: "Every store was designed, built and launched in-house by our own Shopify team.",
  },

  pains: {
    heading: "Why Seasonal Brands Outgrow Their Store",
    intro:
      "When half your catalog changes twice a year, a store built for a fixed range starts to hold you back. These are the four problems any Shopify development agency Colorado brands hire should fix before the next season starts.",
    items: [
      {
        icon: "calendar",
        name: "Every Season Means a Rebuild",
        desc: "New collections, new homepage, new landing pages, and each one needs a developer because the theme was never built to change. By the time it's ready, the season has started.",
        cost: "You launch late into the busiest weeks of the year.",
      },
      {
        icon: "box",
        name: "Stock That Can't Keep Up With Demand",
        desc: "The first cold snap or the first warm weekend sells out your best sizes in a day, and the store keeps showing them, or hides them with no way to wait for more.",
        cost: "Oversold orders, cancellations and shoppers who buy the restock from someone else.",
      },
      {
        icon: "search",
        name: "Gear That's Hard to Choose",
        desc: "Fit, size, temperature rating, terrain, ingredients: shoppers have real questions, and a standard product page doesn't answer them.",
        cost: "Returns from customers who chose the wrong thing, and sales lost to the ones who didn't choose at all.",
      },
      {
        icon: "clock",
        name: "Slow Pages on a Phone",
        desc: "Big lifestyle photography and a stack of apps make the store heavy. Shoppers on a phone, often outdoors on mobile data, wait and leave.",
        cost: "Your best images end up costing you the sale they were meant to win.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development Built Around Your Seasons",
    intro:
      "Everything is built in-house by people who work only on Shopify. Once the store is live, we can also run [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    // Visual rows (owner, 2026-11-12): 8 services merged to 6, each with a
    // case study the page's own case-studies section doesn't use.
    items: [
      {
        title: "Custom Themes and Seasonal Launches",
        heading: "A new season live in an afternoon, with preorders before the stock lands",
        body: "Flexible sections for each collection, plus launch pages, countdowns, preorders and back-in-stock alerts so early demand still becomes orders.",
        covers: ["Seasonal templates", "Preorders", "Back-in-stock alerts", "Countdowns", "Editable sections"],
        caseSlug: "sneak-energy-shopify-redesign",
        imageAlt: "Sneak Energy store with launch pages and bundles",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Product Finders and Fit Guides",
        heading: "Ask what they're heading out to do, then point them to the right gear",
        body: "Size and fit guidance, comparison tables and finders that turn a big range into one confident choice.",
        covers: ["Activity finders", "Fit guides", "Comparison tables", "Size charts", "Saved answers"],
        caseSlug: "loop-earplugs-shopify-landing-page-cro",
        imageAlt: "Loop Earplugs store with a guided product finder",
        cta: { label: "Explore CRO", href: "/services/shopify-cro-agency" },
      },
      {
        title: "Headless Storefronts",
        heading: "A Hydrogen storefront for content and speed a theme can't reach",
        body: "A custom Hydrogen or Next.js frontend for brands that outgrow a theme, with Shopify still running products, carts and checkout.",
        covers: ["Hydrogen", "Next.js", "Content-led pages", "Edge speed", "Shopify checkout"],
        caseSlug: "denim-tears-headless-shopify-hydrogen",
        imageAlt: "Denim Tears storefront built headless on Shopify Hydrogen",
        cta: { label: "Explore headless Shopify", href: "/services/headless-shopify-agency" },
      },
      {
        title: "Subscriptions and Reorders",
        heading: "Wax, fuel and snacks that reorder before your customer runs out",
        body: "Subscribe-and-save and reorder flows for consumables, so regular buyers come back without being asked.",
        covers: ["Subscribe and save", "Reorder reminders", "Customer portal", "Bundled refills", "Skip or pause"],
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        imageAlt: "Happy Mammoth store with recurring subscription orders",
      },
      {
        title: "Shopify Plus and B2B",
        heading: "Plus for your volume, with wholesale for the outfitters that stock you",
        body: "Shopify Plus features plus trade accounts with their own prices and reorders, run from the same catalog as your direct store.",
        covers: ["Shopify Plus", "Outfitter accounts", "Trade pricing", "Quick reorder", "Shared inventory"],
        caseSlug: "saddleback-shopify-plus-b2b",
        imageAlt: "Saddleback cycling wholesale portal on Shopify Plus",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        title: "Migration and Support Between Seasons",
        heading: "Off WooCommerce or Magento, and planned work between seasons after",
        body: "Products, customers, orders and reviews move with every URL redirected, then 60 days of support and an optional retainer so the next season is planned, not rushed.",
        covers: ["WooCommerce", "Magento", "301 redirects", "60-day support", "Season planning"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy store migrated to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
    ],
  },

  local: {
    label: "Selling from Colorado",
    heading: "What Selling from Colorado Means for Your Store",
    intro:
      "Three things about Colorado change how your store should be built: the outdoor economy you sell into, the natural-products scene in Boulder, and a sales tax system unlike most states'.",
    items: [
      {
        icon: "flag",
        name: "An Outdoor Economy With Peaks",
        desc: "Federal BEA data puts Colorado's outdoor recreation economy at $18.1 billion in 2024, with the state first in the country for snow sports. If you sell gear, demand arrives with the weather, so the store needs launch pages, preorders and stock alerts ready before it does.",
      },
      {
        icon: "food",
        name: "Choosing a Boulder Shopify Agency for Natural Brands",
        desc: "A Boulder Shopify agency is often the first search for natural and organic brands, and Visit Boulder says the city has the largest concentration of those companies in the country. What these brands need from a store is the same anywhere: ingredient detail, subscriptions and wholesale for the stores that stock them.",
      },
      {
        icon: "receipt",
        name: "Colorado Sales Tax, City by City",
        desc: "Colorado lets home-rule cities, Denver among them, collect their own sales tax, so the tax on an order depends on exactly where it's delivered. Out-of-state sellers must collect once their Colorado sales pass $100,000 a year. We set up Shopify Tax to charge each address correctly, and your accountant handles registration and filing.",
      },
    ],
  },

  caseStudies: {
    heading: "Outdoor and Natural Brands With Results",
    intro:
      "Proof to ask of any Shopify development agency Colorado brands consider: each brand here sells gear or natural products online, and each result was measured.",
    items: [
      {
        slug: "dryrobe-shopify-plus-redesign",
        tags: ["Outdoor Apparel", "Shopify Plus", "Size Finder"],
        description: "An outdoor changing-robe brand merged three stores into one Shopify Plus build with an activity and size finder. Online revenue grew 89% and returns fell 31%.",
        video: "/images/Case%20studies/dryrobe%20video.mp4",
      },
      {
        slug: "daring-headless-shopify-hydrogen",
        tags: ["Plant-Based Food", "Headless", "Hydrogen"],
        description: "A plant-based food brand moved to a headless Shopify Plus storefront with recipes and storytelling built in. Conversion rate rose 38% and average order value 27%.",
        video: "/images/Case%20studies/Daring%20video.mp4",
      },
      {
        slug: "chillys-headless-commerce-layer",
        tags: ["Drinkware", "Headless", "Personalization"],
        description: "A reusable bottle brand rebuilt its store headless in ten weeks with personalized pages. Pages load 42% faster and conversion rate rose 28%.",
        video: "/images/Case%20studies/Chillys%20Headless%20video.mp4",
      },
    ],
  },

  process: {
    heading: "From Kickoff to Your Next Season Launch",
    intro:
      "Five stages with your sign-off at each one, the way a Shopify development agency Colorado brands trust should time a build: live before your season starts. Most builds take about six weeks.",
    steps: [
      { title: "Plan Around Your Calendar", desc: "We look at your seasons, launches and catalog, then fix the scope, the price and a launch date that lands before your peak." },
      { title: "Design for Your Products", desc: "Figma designs for desktop and mobile, built around your photography, fit guidance and product detail. You approve every screen." },
      { title: "Build and Connect", desc: "Theme, finders, preorders and apps built on a staging store, with your catalog, reviews and customer data brought across." },
      { title: "Test Under Load", desc: "Launch pages, preorders, stock alerts and checkout tested on every device, with tax rules checked against real addresses." },
      { title: "Launch Before the Rush", desc: "A planned go-live ahead of your season, 60 days of support, and the next season's work mapped out." },
    ],
  },

  compare: {
    heading: "Comparing Colorado Ecommerce Agencies With Shopify Expertise",
    intro: "Colorado ecommerce agencies with Shopify expertise range from Denver studios to Boulder consultants and national partners. Here is how to tell which fits your brand.",
    options: [
      {
        name: "Local full-service agency",
        goodFor: "Brand, ads, SEO and web design from one team.",
        watchFor: "Shopify may be one service among many. Ask to see seasonal launches and preorder setups they have built.",
      },
      {
        name: "Boutique Shopify consultant",
        goodFor: "Strategy, audits and smaller projects.",
        watchFor: "Custom development, headless builds and migrations usually need a bigger team than one consultant.",
      },
      {
        name: "Large national partner",
        goodFor: "Very large programs with big budgets.",
        watchFor: "Check their minimum project size and who works on your store day to day.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Themes, headless and Shopify Plus in-house",
        "Fixed price and a launch date before your season",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Outdoor and natural products lead the way, but every category sells to its own calendar. Here is what a Shopify development agency Colorado brands hire should change in the build for each.",
    items: [
      { icon: "flag", name: "Outdoor and Snow Sports", desc: "Seasonal collections, fit and size finders, preorders, and back-in-stock alerts for the sizes that sell out first." },
      { icon: "food", name: "Natural and Organic Food", desc: "Ingredient detail, subscriptions, bundles and wholesale accounts for the grocers that stock you." },
      { icon: "star", name: "Wellness and Personal Care", desc: "Regimen bundles, subscriptions and quizzes that match customers to the right product." },
      { icon: "shirt", name: "Apparel and Footwear", desc: "Size guidance that cuts returns, seasonal drops and lookbooks that link to products." },
      { icon: "home", name: "Home and Lifestyle", desc: "Large option sets, gifting and freight delivery for bigger items." },
      { icon: "box", name: "Wholesale and Outfitters", desc: "Account pricing and reorders for retailers and outfitters. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Development FAQs for Colorado Brands",
  faqs: [
    {
      question: "How much does a Shopify development agency Colorado brands hire cost?",
      answer:
        "It depends on the scope, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours, and that number holds unless you add to the work.",
      unique: false,
    },
    {
      question: "Do you offer Shopify development services for Boulder, Colorado brands?",
      answer:
        "Yes. We work with brands across Colorado, Boulder included, through online calls, a staging store you can test yourself and written weekly updates, with the scope, price and launch date agreed in writing first.",
      unique: true,
    },
    {
      question: "Can you have our new store live before our season starts?",
      answer:
        "Yes, if we start early enough. Most builds take about six weeks, and we set the launch date in writing at the start, working back from your peak so you have time to load products and test before the rush.",
      unique: true,
    },
    {
      question: "Can Shopify handle preorders and back-in-stock alerts?",
      answer:
        "Yes. We set up preorders for items that aren't in stock yet and alerts for sizes that sell out, so demand that arrives early still becomes orders instead of lost visits.",
      unique: true,
    },
    {
      question: "Should we go headless?",
      answer:
        "Only if a theme can't deliver what you need: heavy content, very custom design or speed at scale. Headless costs more to build and run, so we'll tell you on the first call whether a custom theme will do the job.",
      unique: true,
    },
    {
      question: "Can one store sell direct and to retailers?",
      answer:
        "Yes. Shopify Plus B2B lets retailers and outfitters log in to their own prices, terms and minimums, while consumers see your normal store, all from one catalog and one inventory.",
      unique: false,
    },
    {
      question: "Can you move us from WooCommerce without losing rankings?",
      answer:
        "Yes. We map every old URL to its new page, set up 301 redirects, keep titles and structured data, and watch Search Console for 30 days after launch.",
      unique: false,
    },
    {
      question: "How do you handle Colorado's city sales taxes?",
      answer:
        "We configure Shopify Tax so each order is charged for its exact delivery address, including the home-rule cities that collect their own tax. Out-of-state sellers must collect once their Colorado sales pass $100,000 a year. Your accountant handles registration and filing.",
      unique: true,
    },
  ],

  book: {
    heading: "Book a Free Call Before Your Next Season",
    sub: "Pick a time for an online call with a senior Shopify specialist. Tell us about your catalog and your calendar, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your store, your seasons and what slows launches down",
      "Get a fixed price and a launch date within 48 hours",
      "Find out whether a custom theme or headless fits your brand",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "bea-co-outdoor",
      claim: "Colorado's outdoor recreation economy was worth $18.1 billion in value added in 2024 (10th nationally); Colorado is first for snow activities",
      url: "https://www.axios.com/local/denver/2026/03/16/colorado-s-outdoor-recreation-economy-is-worth-18-1b",
      publisher: "Axios Denver (BEA Outdoor Recreation Satellite Account, March 2026)",
      captured: "2026-11-11",
      reviewAfterDays: 365,
    },
    {
      id: "boulder-natural",
      claim: "Boulder is home to the nation's largest concentration of natural and organic products companies",
      url: "https://bouldercoloradousa.com/meetings-and-groups/why-meet-in-boulder/top-industries/natural-products-companies/",
      publisher: "Visit Boulder",
      captured: "2026-11-11",
      reviewAfterDays: 365,
    },
    {
      id: "co-home-rule",
      claim: "Colorado home-rule municipalities may self-collect sales tax; remote sellers must collect once annual sales into Colorado exceed $100,000",
      url: "https://www.avalara.com/us/en/blog/2024/05/colorado-makes-sales-tax-simpler-for-out-of-state-sellers",
      publisher: "Avalara (Colorado HB 24-1041)",
      captured: "2026-11-11",
      reviewAfterDays: 180,
    },
  ],
  wordCountTarget: [1600, 2800],
};
