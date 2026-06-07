import type { CaseStudy } from "./case-studies";

export interface AppStudyOverview {
  clientType: string;
  industry: string;
  goal: string;
  timeline: string;
}

export interface AppCaseStudy extends CaseStudy {
  type: "app";
  appLogo: string;
  appBg: string;
  appCategory: string;
  overview: AppStudyOverview;
}

export const APP_CASE_STUDIES: AppCaseStudy[] = [
  {
    slug: "teelaunch-print-on-demand",
    type: "app",
    brandName: "teelaunch",
    appLogo: "/images/teelaunch-logo.svg",
    appBg: "#0A0A0A",
    appCategory: "Print-on-Demand",
    industry: "Print-on-Demand",
    serviceType: "Shopify App Build | Print-on-Demand",
    heroMetric: "50,000+",
    heroSubMetric: "Merchants Onboarded",
    heroImage: "/images/Case%20studies/teelaunch-shopify-app.webp",
    challengeImage: "/images/Case%20studies/teelaunch-shopify-app-1.webp",
    heroDescription:
      "How we built the first print-on-demand fulfillment app on the Shopify App Store for teelaunch, reaching 50,000+ merchants, 20,000 daily downloads at peak, and earning a mention in Shopify's own keynote at Unite 2017.",
    stats: [
      { label: "Merchants Onboarded", value: "50k+", shortLabel: "Merchants" },
      { label: "Daily Downloads (peak)", value: "20k", shortLabel: "Downloads/Day" },
      { label: "Business Growth", value: "10x", shortLabel: "Growth in 2 Yrs" },
    ],
    overview: {
      clientType: "teelaunch",
      industry: "Shopify App Development",
      goal: "First POD app on Shopify App Store",
      timeline: "Live since 2015",
    },
    challengeTitle: "Building What Didn't Exist Yet",
    challengeBody:
      "In 2015, there was no print-on-demand app on the Shopify App Store. No template to follow, no competitor to benchmark against, no proven model for how direct-to-garment fulfillment should work inside an ecommerce platform. teelaunch saw the gap: Shopify merchants wanted to sell custom products without holding inventory. They came to us to build the app that would define the category.\n\nThis was never going to be a straightforward build. We needed to figure out what their business model looked like inside Shopify, architect the fulfillment workflow from scratch, build the merchant-facing app and a separate admin backend, and design a supply chain that could handle orders at scale.\n\nWe also had to solve problems no one had solved before. How do you route an order from a merchant's Shopify store to the right print facility automatically? How do you handle product variants across hundreds of customizable SKUs? How do you build something reliable enough to support tens of thousands of merchants from day one?",
    approachTitle: "From concept to category leader.",
    approachItems: [
      {
        step: 1,
        title: "Product Architecture",
        desc: "Started with business logic: how orders flow from a merchant's Shopify store through to fulfillment. Mapped every edge case, built microservices for bulk uploads and order routing, and chose a stack built to handle the volume we knew was coming.",
      },
      {
        step: 2,
        title: "App & Admin Build",
        desc: "Built the teelaunch Shopify app end-to-end: merchant dashboard, product catalog, print-spec configuration, order tracking. Developed the admin section and a separate market site for non-Shopify clients wanting access to the fulfillment network.",
      },
      {
        step: 3,
        title: "Integration Layer",
        desc: "Connected teelaunch to third-party logistics and print facilities in real time. Built the on-demand supply chain architecture and engineered the API layer that lets merchants publish products and have orders route to the right print partner automatically, including a full Etsy integration reaching over 2.7 million sellers.",
      },
      {
        step: 4,
        title: "Scale & Iteration",
        desc: "Stayed on as long-term development partners as teelaunch grew. Pivoted the architecture to support sustainable scale, cut fulfillment time by 60%, reduced error rates by 75%, and maintained 99.98% API uptime across a merchant base that grew 10x in two years.",
      },
    ],
    workImages: [
      "/images/Case%20studies/teelaunch-shopify-app.webp",
      "/images/Case%20studies/teelaunch-shopify-app-1.webp",
      "/images/Case%20studies/teelaunch-shopify-app-2.webp",
      "/images/Case%20studies/teelaunch-shopify-app-3.webp",
    ],
    results: [
      { label: "Shopify Merchants", before: "0", after: "50,000+", improvement: "50k+" },
      { label: "Business Growth in 2 Years", before: "1x", after: "10x", improvement: "10x" },
      { label: "Fulfillment Time", before: "Manual routing", after: "Real-time", improvement: "-60%" },
      { label: "Integration Error Rate", before: "High", after: "Minimal", improvement: "-75%" },
    ],
    resultsDescription:
      "From zero to the top of the Shopify App Store. Weeks after launch it exploded: tens of thousands of customers, up to 20,000 downloads a day, and a mention from Shopify themselves at the 2017 Unite keynote.",
    sliderStats: [
      "50,000+ Merchants",
      "20k Downloads a Day",
      "10x Growth in 2 Years",
      "Category #1 on Shopify",
      "99.98% API Uptime",
      "Shopify Unite Keynote 2017",
    ],
    techStack: [
      { name: "Shopify", logo: "/images/shopify.svg" },
      { name: "teelaunch", logo: "/images/teelaunch%20logo.png" },
      { name: "Etsy", logo: "/images/Etsy_logo.png" },
    ],
    quote:
      "No one had built a print-on-demand app for Shopify before. There was nothing to copy from. What got built didn't just work, it became the category. 20,000 downloads a day isn't luck. That's engineering and execution.",
    quotePerson: "teelaunch Team",
    quoteRole: "Shopify Unite Keynote Feature, 2017",
    quoteAvatar: "/images/teelaunch%20logo%20icon.png",
    quoteAvatarIsLogo: true,
  },
  {
    slug: "what3words-shopify-checkout-app",
    type: "app",
    brandName: "what3words",
    appLogo: "/images/what3words%20logo.webp",
    appBg: "#001A1F",
    appCategory: "Checkout & Delivery",
    industry: "Checkout & Delivery",
    serviceType: "Shopify App Build | Checkout & Delivery",
    heroMetric: "5+",
    heroSubMetric: "Years of Active Development",
    heroImage: "/images/Case%20studies/what3words.jpg",
    challengeImage: "/images/Case%20studies/what3words-3.jpg",
    heroDescription:
      "How we built and maintained the official what3words Shopify checkout app: free on the App Store, rated 4.5 stars, integrated with DHL, DPD, and Evri, and actively developed for over five years so merchants can collect precise 3-word delivery addresses at checkout and eliminate lost parcels for good.",
    stats: [
      { label: "Years of Active Development", value: "5+", shortLabel: "Years Active" },
      { label: "Delivery Precision", value: "3m²", shortLabel: "3m² Precision" },
      { label: "Delivery Partners", value: "3", shortLabel: "DHL, DPD & Evri" },
    ],
    overview: {
      clientType: "what3words",
      industry: "Location Technology",
      goal: "Official Shopify checkout app for precise delivery",
      timeline: "Live since Sept 2022, ongoing",
    },
    challengeTitle: "Addresses Were the Weakest Link in Delivery",
    challengeBody:
      "Every Shopify merchant collects delivery addresses at checkout. The problem is that traditional addresses are unreliable. They point to the front of a building, miss rural properties entirely, or get misread by drivers. The result: lost parcels, failed deliveries, customer service tickets, and costly redeliveries.\n\nwhat3words had already divided the entire world into 3-metre squares, each with a unique 3-word address. The technology worked. What they needed was a simple way for Shopify merchants to collect those addresses at checkout, validate them in real time, and pass them to delivery partners automatically.\n\nThere was no off-the-shelf solution. The app had to work across Shopify Basic and Shopify Plus, integrate cleanly with DHL, DPD, and Evri, support multiple themes and languages, and be simple enough for customers to use without explanation.",
    approachTitle: "Built for every merchant, tested for every edge case.",
    approachItems: [
      {
        step: 1,
        title: "Checkout Integration",
        desc: "Built a what3words address field that sits natively inside Shopify checkout. Customers enter a 3-word address and an autosuggest feature confirms the exact location in real time. No friction, no second guessing.",
      },
      {
        step: 2,
        title: "Validation and Address Passing",
        desc: "Every address entered is validated against the what3words API before the order completes. The confirmed location passes directly to the delivery partner, cutting out the manual steps that cause errors.",
      },
      {
        step: 3,
        title: "Delivery Partner Integrations",
        desc: "Integrated the app with DHL, DPD, and Evri so that confirmed what3words addresses flow directly into each carrier's system. Couriers navigate to the exact 3-metre square, not a vague street-level approximation.",
      },
      {
        step: 4,
        title: "Theme, Language and 5 Years of Iteration",
        desc: "Engineered the app to work across every Shopify theme without custom configuration. Localized for multiple languages, built with country and region restrictions, and maintained as an ongoing technical partner as Shopify checkout extensibility evolved.",
      },
    ],
    workImages: [
      "/images/Case%20studies/what3words-2.webp",
      "/images/Case%20studies/what3words-6.webp",
      "/images/Case%20studies/what3words-7.webp",
      "/images/Case%20studies/what3words-5.webp",
    ],
    results: [
      { label: "Active Development", before: "Launch", after: "5+ Years", improvement: "Ongoing" },
      { label: "Delivery Precision", before: "Street-level", after: "3m²", improvement: "Exact" },
      { label: "Carrier Integrations", before: "None", after: "DHL, DPD, Evri", improvement: "3 Live" },
      { label: "Theme Compatibility", before: "Per-theme builds", after: "Universal", improvement: "100%" },
    ],
    resultsDescription:
      "A free app, live on the Shopify App Store since 2022, rated 4.5 stars, and actively maintained. Merchants install it in minutes. Customers use it without needing to understand how it works. And parcels land exactly where they should, confirmed at 3-metre precision by DHL, DPD, and Evri.",
    sliderStats: [
      "5+ Years Active",
      "3m² Delivery Precision",
      "4.5 Stars on App Store",
      "DHL, DPD and Evri",
      "Free to Install",
      "Shopify Basic and Plus",
    ],
    techStack: [
      { name: "Shopify", logo: "/images/shopify.svg" },
      { name: "what3words", logo: "/images/what3words%20logo.webp", noFilter: true },
      { name: "DHL", logo: "/images/dhl%20logo.svg", noFilter: true },
      { name: "DPD", logo: "/images/DPD_logo.svg" },
      { name: "Evri", logo: "/images/evri-logo.png" },
    ],
    quote:
      "Integrating what3words with both our Shopify ecommerce sites and our trade sales team ensures reliable deliveries to city centre delis, remote farm shops, and pop-up festivals.",
    quotePerson: "Richard Heath",
    quoteRole: "Brand & Marketing Manager, Olives Et Al",
    quoteAvatar: "/images/Case%20studies/Richard%20health.jpg",
  },
  {
    slug: "vytronix-shopify-app-development",
    type: "app",
    brandName: "Vytronix",
    appLogo: "/images/vytronix-logo.svg",
    appBg: "#0A0A14",
    appCategory: "Custom App Development",
    industry: "Custom App Development",
    serviceType: "Shopify App Build | Magento Migration",
    heroMetric: "3-in-1",
    heroSubMetric: "Migration, Theme & Custom App",
    heroImage: "/images/Case%20studies/Vytronix.jpg",
    challengeImage: "/images/Case%20studies/vytronix-1.jpg",
    heroDescription:
      "How we migrated Vytronix from Magento to Shopify, built a fully custom OS 2.0 theme with a custom account portal, and developed a private Shopify app for product registration so their service team could see everything in one place. One brief, one team, one delivery.",
    stats: [
      { label: "Platform Migrated", value: "Magento", shortLabel: "From Magento" },
      { label: "Theme Build", value: "Custom", shortLabel: "Custom Theme" },
      { label: "Registration Data", value: "100%", shortLabel: "Centralized" },
    ],
    overview: {
      clientType: "Vytronix",
      industry: "Technology & Home Appliances",
      goal: "Migration, custom theme and custom registration app",
      timeline: "Full project delivery",
    },
    challengeTitle: "One Brand, Three Problems to Solve at Once",
    challengeBody:
      "Vytronix makes straightforward home appliances. No gimmicks, just products that work. Their ecommerce setup was the opposite: a Magento store that was holding them back, a brand experience that didn't reflect the quality of their products, and a service team manually processing product registration data spread across disconnected systems.\n\nCustomers had no way to register their devices online. The service team had no way to see registration history alongside order data. And the existing Magento store gave them no room to grow the brand properly.\n\nThey didn't want three separate agencies running three separate projects. They wanted one team who could handle the migration, the redesign, and the custom app development together so everything came out cohesive and nothing fell through the gaps.",
    approachTitle: "One project, built in full.",
    approachItems: [
      {
        step: 1,
        title: "Magento to Shopify Migration",
        desc: "Conducted a full site crawl before touching anything. Migrated customers, orders, products and blog content to Shopify, set up a complete redirect strategy to protect organic rankings, and managed the data extraction carefully so nothing was lost in transit.",
      },
      {
        step: 2,
        title: "Custom Theme and Account Portal",
        desc: "Started with brand discovery and wireframes for every page. Built the theme pixel-perfect from the ground up on Shopify Online Store 2.0 with advanced product filtering, a fully custom account portal, native blogging, and a Trustpilot integration built directly into the design.",
      },
      {
        step: 3,
        title: "Custom Product Registration App",
        desc: "Designed and built a private Shopify app that lets customers register their devices post-purchase. Once registered, the app writes the data directly to the customer's Shopify profile so the service team sees registrations, orders, and contact details in one place without switching tools.",
      },
      {
        step: 4,
        title: "Infrastructure and Launch",
        desc: "Hosted the registration app on Heroku using Shopify's Storefront API. Optimized the store for performance, ran a complete launch strategy, and handed over a store and app stack Vytronix could operate and grow without ongoing technical dependency.",
      },
    ],
    workImages: [
      "/images/Case%20studies/vytronix-1.jpg",
      "/images/Case%20studies/vytronix-2.jpg",
      "/images/Case%20studies/vytronix-3.png",
      "/images/Case%20studies/Vytronix-pdp.png",
    ],
    results: [
      { label: "Customer Data", before: "Fragmented", after: "Single profile", improvement: "Unified" },
      { label: "Platform", before: "Magento", after: "Shopify OS 2.0", improvement: "Migrated" },
      { label: "Account Portal", before: "None", after: "Fully custom", improvement: "Built" },
      { label: "Registration", before: "Manual", after: "Automated", improvement: "Solved" },
    ],
    resultsDescription:
      "One brief, one team, one delivery. The store migrated cleanly with SEO intact, the theme reflects the brand properly for the first time, and the registration app removed a manual process that was costing the service team time every single day.",
    sliderStats: [
      "Magento to Shopify",
      "Custom OS 2.0 Theme",
      "Custom Account Portal",
      "Custom Private App",
      "Unified Customer Data",
      "SEO-Safe Migration",
    ],
    techStack: [
      { name: "Shopify", logo: "/images/shopify.svg" },
      { name: "Vytronix", logo: "/images/Case%20studies/Vytronix_Logo.webp" },
      { name: "Heroku", logo: "/images/Case%20studies/Heroku_logo.svg.png", noFilter: true },
    ],
    quote:
      "We needed one partner who could handle the full picture: migrate the platform, build the store from scratch, and create a registration app that didn't exist anywhere else. Everything came together as one cohesive project, and the service team now has everything they need in a single place.",
    quotePerson: "Vytronix Team",
    quoteRole: "Technology & Home Appliances",
    quoteAvatar: "/images/Case%20studies/Vytronix_Logo.webp",
    quoteAvatarIsLogo: true,
  },
  {
    slug: "untuckit-gift-card-api",
    type: "app",
    brandName: "UntuckIt",
    appLogo: "/images/untuckit-logo.svg",
    appBg: "#0D0A08",
    appCategory: "Gift Cards & Payments",
    industry: "Gift Cards & Payments",
    serviceType: "Shopify App Build | Custom API",
    heroMetric: "3x",
    heroSubMetric: "Peak Traffic Handled",
    heroImage: "/images/Case%20studies/untuckit.webp",
    challengeImage: "/images/Case%20studies/untuckit-1.webp",
    heroDescription:
      "How we built Gift Card Pro for UntuckIt: a custom Shopify app and API that let customers send digital gift cards directly to any recipient, with occasion-matched landing pages and AWS infrastructure that held up when holiday traffic nearly tripled.",
    stats: [
      { label: "Peak Traffic Handled", value: "3x", shortLabel: "Peak Traffic" },
      { label: "Retail Locations", value: "74", shortLabel: "US Stores" },
      { label: "Infrastructure", value: "AWS", shortLabel: "AWS Hosted" },
    ],
    overview: {
      clientType: "UntuckIt",
      industry: "Fashion & Apparel",
      goal: "Custom gift card send-to-recipient workflow",
      timeline: "Custom build, holiday-ready",
    },
    challengeTitle: "A Gift Card That Couldn't Be Gifted",
    challengeBody:
      "UntuckIt had 74 retail locations and a fast-growing Shopify store. Gift cards are one of the highest-converting products in apparel, but Shopify's native gift card system had a fundamental limitation: customers could only send a gift card to themselves.\n\nIf someone wanted to buy a card for a friend or family member, they received it first and had to manually forward the details. That's not a gift card experience. That's a workaround that makes the brand look unfinished.\n\nUntuckIt needed a custom workflow where customers purchase a gift card, address it to a recipient, and it lands directly in that person's inbox with a landing page matched to the occasion. Shopify couldn't do it natively. We built it from scratch.",
    approachTitle: "Custom from the ground up.",
    approachItems: [
      {
        step: 1,
        title: "Custom Gift Card Page",
        desc: "Built a custom Shopify theme page with expanded gift card form fields. Customers enter the recipient's name, email, a personal message, and the occasion. All details are captured as order properties and pass through automatically to the fulfillment workflow.",
      },
      {
        step: 2,
        title: "Gift Card Pro App",
        desc: "Developed Gift Card Pro, a custom Shopify app that intercepts completed gift card orders and triggers a new fulfillment workflow outside of Shopify's native system. The app reads the recipient details, generates the gift card, and delivers it directly to their inbox.",
      },
      {
        step: 3,
        title: "Occasion-Matched Landing Pages",
        desc: "Built dynamic landing pages tied to the gifting occasion selected at checkout. When a recipient opens their gift card link, they land on a page built for that specific moment: holiday, birthday, or a custom event. No generic receipts.",
      },
      {
        step: 4,
        title: "AWS Infrastructure",
        desc: "Hosted the application on a highly available AWS infrastructure with managed services. During peak holiday periods, web traffic nearly tripled. The infrastructure scaled automatically and without manual intervention.",
      },
    ],
    workImages: [
      "/images/Case%20studies/untuckit-4.webp",
      "/images/Case%20studies/untuckit-5.png",
      "/images/Case%20studies/untuckit-2.webp",
      "/images/Case%20studies/untuckit-3.webp",
    ],
    results: [
      { label: "Peak Traffic", before: "1x", after: "3x", improvement: "Handled" },
      { label: "Gift Card Workflow", before: "Self-send only", after: "Direct to recipient", improvement: "Solved" },
      { label: "Landing Pages", before: "Generic receipt", after: "Occasion-matched", improvement: "Custom" },
      { label: "Infrastructure", before: "Standard hosting", after: "AWS managed", improvement: "Scalable" },
    ],
    resultsDescription:
      "Customers could finally buy a gift card and actually gift it. The recipient gets a landing page matched to the occasion, the card lands in their inbox, and the infrastructure held up when holiday traffic nearly tripled.",
    sliderStats: [
      "3x Peak Traffic Handled",
      "Direct-to-Recipient",
      "AWS Infrastructure",
      "Occasion-Matched Pages",
      "74 Retail Locations",
      "Holiday-Ready at Launch",
    ],
    techStack: [
      { name: "Shopify", logo: "/images/shopify.svg" },
      { name: "UntuckIt", logo: "/images/untuckit%20logo.png", noFilter: true },
      { name: "AWS", logo: "/images/AWS%20logo.png", noFilter: true },
    ],
    quote:
      "We needed a gift card workflow that Shopify couldn't handle natively, and it had to be production-ready before the holiday season. The team understood exactly what we needed, built it cleanly, and the infrastructure held up when traffic nearly tripled.",
    quotePerson: "UntuckIt Team",
    quoteRole: "Fashion & Apparel, 74 US Retail Locations",
  },
  {
    slug: "emma-noah-bundle-app",
    type: "app",
    brandName: "emma&noah",
    appLogo: "/images/emma-noah%20logo.png",
    appBg: "#1A1A2E",
    appCategory: "Bundles & Upsell",
    industry: "Bundles & Upsell",
    serviceType: "Shopify App Build | Bundles & Upsell",
    heroMetric: "+61%",
    heroSubMetric: "Average Order Value",
    heroImage: "/images/Case%20studies/emma-noah.webp",
    challengeImage: "/images/Case%20studies/emma-noah-1.png",
    heroDescription:
      "How we built a custom Mix & Match bundle app for emma&noah, a sustainable baby brand: a fully configurable bundler with tiered discount thresholds, real-time progress tracking, and FOMO-driven UI that lifted average order value by 61% from launch.",
    stats: [
      { label: "Average Order Value", value: "+61%", shortLabel: "AOV Increase" },
      { label: "Collections in Drawer", value: "18", shortLabel: "18 Collections" },
      { label: "Launch", value: "Aug 2024", shortLabel: "Launched Aug 2024" },
    ],
    overview: {
      clientType: "emma&noah",
      industry: "Sustainable Baby Products",
      goal: "Custom Mix & Match bundle app to increase AOV",
      timeline: "Launched August 2024",
    },
    challengeTitle: "Parents Needed to Bundle. Shopify Couldn't Do It.",
    challengeBody:
      "emma&noah sells organic baby products built to last. The problem was getting parents to buy the full picture at once. A newborn needs a lot of things, and those things work best together, but browsing product by product meant customers either bought too little or abandoned before building a complete set.\n\nPre-packaged bundles weren't the answer either. Every family is different. A gift buyer has different needs from a first-time parent. Forcing a fixed bundle means someone always gets something they didn't want and misses something they did.\n\nWhat emma&noah needed was a custom app that let customers build their own bundle, guided by smart category logic and motivated by tiered discounts that rewarded adding more. Nothing like it existed natively in Shopify.",
    approachTitle: "Built to reward every add to cart.",
    approachItems: [
      {
        step: 1,
        title: "Threshold-Based Discount Engine",
        desc: "Designed a bundle system where customers earn progressively larger discounts as they add more items. Discount triggers and thresholds are fully configurable by the team in a real-time admin panel. No developer needed to adjust incentives.",
      },
      {
        step: 2,
        title: "Progress-Driven Customer UI",
        desc: "Built a customer-facing interface with a persistent progress tracker showing exactly how many items away they are from the next discount tier. Dynamic messaging updates at each threshold using FOMO psychology to keep customers adding.",
      },
      {
        step: 3,
        title: "Drawer and Product Selection",
        desc: "Built a full drawer interface spanning 18 category collections with variant selectors, inventory indicators, and custom product grouping by tags. Unavailable variants are struck through rather than hidden, protecting the brand experience.",
      },
      {
        step: 4,
        title: "Theme App Block and Admin",
        desc: "Engineered as a Shopify theme app block so the team can configure heading text, button copy, column counts, colors, and messaging variables directly from the theme editor. A/B testing copy changes without touching code.",
      },
    ],
    workImages: [
      "/images/Case%20studies/emma-noah-2.png",
      "/images/Case%20studies/emma-noah-3.png",
      "/images/Case%20studies/emma-noah-4.png",
      "/images/Case%20studies/emma-noah-5.png",
    ],
    results: [
      { label: "Average Order Value", before: "Baseline", after: "+61%", improvement: "+61%" },
      { label: "Discount Tiers", before: "0", after: "3 Tiers", improvement: "3 Tiers" },
      { label: "Collections in Drawer", before: "0", after: "18", improvement: "18" },
      { label: "Live Since", before: "Pre-launch", after: "Aug 2024", improvement: "Aug 2024" },
    ],
    resultsDescription:
      "61% increase in average order value from launch. Customers build exactly what they need, earn discounts as they go, and emma&noah's team controls the entire experience from the theme editor without writing a line of code.",
    sliderStats: [
      "+61% AOV from Launch",
      "18 Collections",
      "Tiered Discount Engine",
      "FOMO Progress Tracker",
      "No-Code Admin",
      "Shopify Theme App Block",
    ],
    techStack: [
      { name: "Shopify", logo: "/images/shopify.svg" },
      { name: "emma&noah", logo: "/images/emma-noah%20logo.png", noFilter: true, multiplyBlend: true },
    ],
    quote:
      "We wanted customers to build bundles that actually made sense for their family, not pick from a list we decided for them. The app does exactly that, and the numbers show it.",
    quotePerson: "Emma & Noah",
    quoteRole: "Founders, emma&noah",
    quoteAvatar: "/images/Case%20studies/emma-noah%20pic.jfif",
  },
  {
    slug: "abask-shopify-wishlist-app",
    type: "app",
    brandName: "ABASK",
    appLogo: "/images/ABASK%20logo.png",
    appBg: "#0D0A08",
    appCategory: "Wishlist & Social",
    industry: "Luxury & Social Commerce",
    serviceType: "Shopify App Build | Wishlist & Social",
    heroMetric: "165",
    heroSubMetric: "Territories on Shopify Markets",
    heroImage: "/images/Case%20studies/ABASK-hero%20section.webp",
    challengeImage: "/images/Case%20studies/ABASK.jpg",
    heroDescription:
      "How we built a custom collaborative wishlist and mood board app for ABASK, the luxury curated goods platform founded by Tom Chapman of MatchesFashion, alongside a Shopify Markets rollout covering 165 territories from day one.",
    stats: [
      { label: "Territories on Shopify Markets", value: "165", shortLabel: "Territories" },
      { label: "Global from Day One", value: "Day 1", shortLabel: "Day 1 Global" },
      { label: "Platform", value: "Shopify Plus", shortLabel: "Shopify Plus" },
    ],
    overview: {
      clientType: "ABASK",
      industry: "Luxury Curated Goods",
      goal: "Custom wishlist app and global commerce platform",
      timeline: "Launched October 2022",
    },
    challengeTitle: "Luxury Shopping Is Personal. The Tech Had to Match.",
    challengeBody:
      "ABASK was founded by Tom Chapman, the original founder of MatchesFashion, to create a curated destination for rare, antique, and contemporary luxury goods from sources across the world. Every item has a story. The shopping experience had to reflect that.\n\nTwo problems needed solving at once. The first was international: ABASK needed to operate across borders from day one: multiple currencies, local tax handling, territory-specific content, and a single checkout that worked everywhere without managing separate stores.\n\nThe second was social: luxury customers don't always shop alone. They share finds with partners, build wish lists for occasions, and create mood boards for interiors or wardrobes. No native Shopify feature could do this. The platform needed to feel less like a store and more like a destination.",
    approachTitle: "International by design. Personal by default.",
    approachItems: [
      {
        step: 1,
        title: "Shopify Markets Across 165 Territories",
        desc: "Implemented Shopify Markets with single sign-in for global customers, cross-border checkout, local tax handling, and territory-specific content controls. ABASK launched internationally without managing multiple stores or duplicating content.",
      },
      {
        step: 2,
        title: "Custom Collaborative Wishlist App",
        desc: "Built a custom Shopify app that lets customers save products and editorial content, create shareable mood boards, and send wish lists directly to friends and family. Designed for discovery and collaboration, not just bookmarking.",
      },
      {
        step: 3,
        title: "Social and Marketing Data Layer",
        desc: "The wishlist app feeds interaction data back into marketing: what customers are saving, sharing, and building mood boards around. This gives ABASK a richer signal for targeted campaigns than purchase history alone.",
      },
      {
        step: 4,
        title: "Platform Architecture for Growth",
        desc: "Built on Shopify Plus with tech integrations and optimizations designed for a platform that expects to keep growing. Not a launch and leave. An architecture ABASK could build on as the brand and catalog expanded.",
      },
    ],
    workImages: [
      "/images/Case%20studies/ABASK.jpg",
      "/images/Case%20studies/ABASK-1.jpg",
      "/images/Case%20studies/ABASK-2.jpg",
      "/images/Case%20studies/ABASK-3.jpg",
    ],
    results: [
      { label: "Global Coverage", before: "0", after: "165 territories", improvement: "Day One" },
      { label: "Checkout", before: "Per-region stores", after: "Single global", improvement: "Unified" },
      { label: "Social Features", before: "None", after: "Wishlists and mood boards", improvement: "Built" },
      { label: "Marketing Signals", before: "Purchase only", after: "Save and share data", improvement: "Richer" },
    ],
    resultsDescription:
      "Live across 165 territories from day one. A custom wishlist app that turns browsing into a social experience. And a platform architecture built for a luxury brand that expects to keep growing.",
    sliderStats: [
      "165 Territories",
      "Shopify Markets",
      "Custom Wishlist App",
      "Mood Board Builder",
      "Single Global Checkout",
      "Founded by Tom Chapman",
    ],
    techStack: [
      { name: "Shopify", logo: "/images/shopify.svg" },
      { name: "ABASK", logo: "/images/ABASK%20logo.png", noFilter: true, multiplyBlend: true },
      { name: "Shopify Markets", logo: "/images/shopify-plus.svg" },
    ],
    quote:
      "The platform needed to feel less like a store and more like a destination. Every item has a story, and the experience had to reflect that from the moment a customer lands to the moment they share a find with someone they love.",
    quotePerson: "ABASK Team",
    quoteRole: "Luxury Curated Goods Platform",
  },
];

export function getAppCaseStudyBySlug(slug: string): AppCaseStudy | undefined {
  return APP_CASE_STUDIES.find((s) => s.slug === slug);
}
