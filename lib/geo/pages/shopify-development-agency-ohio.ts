// Geo v5 S5, Shopify dev Phase 2a, page 12 of 15: Ohio (state), service format.
//
// Keywords (v5 plan 3.3):
//   primary    shopify agency ohio (KD 7; paid ads on this SERP)
//   secondary  shopify developer ohio (KD 8; Google rewrites to
//              "shopify development ohio", PAA all cost / hire questions)
// SERP (2026-11-19): Netalico, Media Captain, 121eCommerce, Shero, dekstech,
// aqsashahzad.com; results lean Cleveland and Columbus. Statewide page:
// Columbus has its own page and Cleveland is a later Phase 2a page, so
// neither city's terms are targeted. One AI Overview gives a vetting
// checklist (Partner status, in-house staff vs subcontractors, staging),
// answered in the summary and FAQs. Local facts avoid everything on the
// Columbus page (Franklin County rate, remote-seller nexus, one-day drive,
// test market).
// H1 owner pick: "Retail, Wholesale and Manufacturer Stores".

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_OHIO: ServiceGeoPage = {
  type: "service",
  slug: "ohio",
  path: "/services/shopify-development-agency/ohio",
  hub: "/services/shopify-development-agency",
  geo: { name: "Ohio", type: "state", areaServed: "Ohio" },

  targetKeyword: "shopify agency ohio",
  secondaryKeywords: ["shopify developer ohio"],
  faqKeywords: [],
  metaTitle: "Shopify Agency Ohio | Retail, Wholesale and Manufacturer Stores",
  metaDescription:
    "The Shopify agency Ohio brands hire for retail, wholesale and manufacturer stores, built in-house, tested on staging and priced in writing before work starts.",
  shortTitle: "Shopify Agency Ohio",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Ohio Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Ohio Brands Hire for Retail, Wholesale and Manufacturer Stores",
    intro:
      "You might sell to shoppers, to the shops and distributors that stock you, or straight from your own factory floor. Most Ohio brands do more than one. We're the Shopify agency Ohio brands hire to build a store for all of it: [link:/services/shopify-theme-development|retail stores], [link:/services/shopify-b2b-store-setup|wholesale portals] and catalogs built for manufacturers, by our own team, at a fixed price agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-ohio-hero-v1.webp",
      alt: "Shopify stores for Evie Lou, Saddleback and Henchman, with B2B sales up 881% and conversion rate up 82%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  // Answers the AI Overview's vetting checklist: Partner status, in-house
  // staff, staging tests.
  summary:
    "Ecomm Wizards is a Shopify Plus Partner that builds retail stores, wholesale portals and manufacturer catalogs for Ohio brands from Cincinnati and Dayton to Toledo and Akron. Our own team designs and builds every store, nothing goes to subcontractors, and every change is tested on a staging copy before it goes live. Each project has a fixed price in writing.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "Storefronts for shoppers, ordering portals for stockists and catalogs for makers, all built by our own people.",
  },

  pains: {
    heading: "When Retail and Trade Run on Different Systems",
    intro:
      "Selling to shoppers and trade buyers from separate tools is where the hours go. These four problems are what the Shopify agency Ohio brands hire should fix first, and here is what each one costs you now.",
    items: [
      {
        icon: "box",
        name: "Trade Orders on Paper and Email",
        desc: "Distributors and stockists send purchase orders by email, someone checks a price sheet and keys the order in by hand.",
        cost: "Slow reorders and pricing mistakes on your biggest accounts.",
      },
      {
        icon: "layers",
        name: "Stock Counted in Two Places",
        desc: "Retail and wholesale orders draw on the same warehouse, but your ERP and your store keep separate counts.",
        cost: "Oversold products and trade orders you can't fill.",
      },
      {
        icon: "search",
        name: "A Catalog Buyers Can't Search",
        desc: "Part numbers, specs and sizes live in PDFs, so trade buyers phone to ask instead of ordering online.",
        cost: "Sales staff answering questions the website should.",
      },
      {
        icon: "receipt",
        name: "Tax Rules Set Up for Last Year",
        desc: "The store still follows an old tax-holiday setup, or charges every customer the same way.",
        cost: "Refunds, corrections and an awkward call with your accountant.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Ohio Brands",
    intro:
      "Every project is designed and developed by our own Shopify team, never passed to subcontractors. Based near the capital? Our [link:/services/shopify-development-agency/columbus|Columbus page] covers what changes there.",
    // Visual rows; the page's own case studies (Evie Lou, Saddleback,
    // Henchman) are not reused here.
    items: [
      {
        title: "Retail Store Design",
        heading: "A retail store shoppers find easy to buy from on a phone",
        body: "A custom theme with clear collections, product pages built around your range and reviews where shoppers look. Feetures' rebuilt theme lifted add-to-cart rate 32%.",
        covers: ["Custom theme", "Collections", "Product pages", "Reviews", "Mobile speed"],
        caseSlug: "feetures-shopify-theme-development",
        imageAlt: "Feetures performance sock store on a custom Shopify theme",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Wholesale and Trade Checkout",
        heading: "Shoppers and trade buyers in one store, each with their own path to checkout",
        body: "Company accounts, price lists, payment terms and minimum orders alongside your retail store. Everlast's separate retail and trade checkouts lifted conversion rate 152%.",
        covers: ["Company accounts", "Price lists", "Payment terms", "Minimum orders", "Trade checkout"],
        caseSlug: "everlast-shopify-plus-sports-redesign",
        imageAlt: "Everlast store with retail and trade checkout paths",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        title: "ERP and Inventory Sync",
        heading: "One stock count across your ERP, your warehouse and your store",
        body: "Orders flow to your ERP as they're placed; stock, prices and tracking flow back, with alerts if a sync fails. Mouldings One's trade portal and ERP sync cut order processing time 74%.",
        covers: ["ERP sync", "Live stock", "Price updates", "Tracking sync", "Error alerts"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        imageAlt: "Mouldings One trade portal connected to its ERP",
        cta: { label: "Explore ERP connections", href: "/services/erp-connections-to-shopify" },
      },
      {
        title: "Manufacturer Catalogs and Configurators",
        heading: "Part numbers, specs and custom options buyers can order online",
        body: "Searchable catalogs with part numbers and spec sheets, product builders with live pricing, and request-a-quote for large orders. Ronaldo Jewelry's configurator lifted total sales 250%.",
        covers: ["Part search", "Spec sheets", "Configurators", "Request a quote", "Bulk ordering"],
        caseSlug: "ronaldo-jewelry-shopify-plus-redesign",
        imageAlt: "Ronaldo Jewelry store with a custom product configurator",
      },
      {
        title: "Migrations to Shopify Plus",
        heading: "Off Magento or WooCommerce with every product, account and URL intact",
        body: "Products, customer and trade accounts, order history and reviews moved, every URL redirected and rankings watched after launch. This Works left Magento for Shopify Plus and grew conversion rate 38%.",
        covers: ["Magento", "WooCommerce", "Trade accounts", "301 redirects", "Rank tracking"],
        caseSlug: "this-works-shopify-plus-migration",
        imageAlt: "This Works store migrated from Magento to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Testing and Ongoing Support",
        heading: "Changes tested against the original, and help after launch",
        body: "A/B tests on product pages and checkout, plus 60 days of fixes with every build and a monthly plan if you want one. Twillory kept 70% of its tests as winners and added $5.4M in new annual revenue.",
        covers: ["A/B testing", "Staging reviews", "Analytics", "60-day support", "Monthly plan"],
        caseSlug: "twillory-shopify-cro",
        imageAlt: "Twillory shirt store improved through A/B testing",
        cta: { label: "Explore conversion optimization", href: "/services/shopify-cro-agency" },
      },
    ],
  },

  local: {
    label: "Selling from Ohio",
    heading: "What Ohio Means for Your Store",
    intro:
      "Three things about doing business in the state shape how your store should be set up. A Shopify agency Ohio brands rely on should plan for all three before launch.",
    items: [
      {
        icon: "box",
        name: "A Manufacturing State",
        desc: "Ohio has 687,345 manufacturing jobs, third in the country behind only California and Texas. Plenty of Ohio brands make what they sell and sell it two ways: to consumers and to trade buyers. Your store should handle both, with trade pricing, part search and quote requests next to your retail checkout.",
      },
      {
        icon: "receipt",
        name: "A Higher Bar for the Commercial Activity Tax",
        desc: "Since January 1, 2025, businesses with Ohio taxable gross receipts of $6 million or less are excluded from the Commercial Activity Tax, up from $3 million. It doesn't change how your store charges customers, but it can change what you owe. Your accountant confirms where you stand.",
      },
      {
        icon: "calendar",
        name: "A Smaller Tax Holiday Than Last Year",
        desc: "Ohio's 2026 sales tax holiday ran August 7 to 9 and covered only clothing up to $75 an item and school supplies up to $20. The 2024 and 2025 holidays covered most items up to $500. If your store was set up for the bigger version, its tax categories need checking before next August.",
      },
    ],
  },

  caseStudies: {
    heading: "Retail, Wholesale and Manufacturer Stores: Three Results",
    intro:
      "One store for each kind of seller, and the proof to ask of any Shopify agency Ohio brands consider: real stores with measured results.",
    items: [
      {
        slug: "evie-lou-shopify-fashion-cro",
        tags: ["Retail", "Mobile UX", "Fashion"],
        description: "A women's fashion brand rebuilt its store around mobile shoppers and better product discovery. Conversion rate rose 82% and organic revenue 47% within a year.",
        video: "/images/Case%20studies/evie-lou%20video.mp4",
      },
      {
        slug: "saddleback-shopify-plus-b2b",
        tags: ["Wholesale", "Shopify Plus B2B", "Cycling"],
        description: "A cycling distributor replaced a clunky wholesale portal with a Shopify Plus B2B store, a custom credit application and bulk CSV ordering. B2B sales grew 881% in the first month.",
        video: "/images/Case%20studies/Saddleback%20video.mp4",
      },
      {
        slug: "henchman-shopify-plus-b2b",
        tags: ["Equipment Brand", "ERP Integration", "Tiered Pricing"],
        description: "A ladder and access equipment brand left Magento for Shopify Plus, with tiered price books and Brightpearl ERP handling orders. Online revenue grew 58% and order handling time fell 70%.",
        video: "/images/Case%20studies/Henchman%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How We Build a Store for Retail and Trade",
    intro:
      "Five stages, each signed off by you before the next starts: the way the Shopify agency Ohio brands trust should run a build. Most stores go live about six weeks after the first call.",
    steps: [
      { title: "Audit How Orders Arrive", desc: "We trace a retail order and a trade order from click to warehouse, then write the scope, one price and an opening date." },
      { title: "Lay Out Two Storefronts in One", desc: "Shopper pages and the trade side, part search included, mocked up for phone and desktop for your sign-off." },
      { title: "Develop on a Staging Copy", desc: "Our own developers do every piece of work on a private copy of the store; customers never see half-finished pages." },
      { title: "Run Real Orders Through It", desc: "We place retail, trade and quote orders, force a failed ERP sync and check every tax category before anything goes live." },
      { title: "Open, Then Stay On Call", desc: "The store switches over during a quiet hour, we watch the first days of orders, and fixes are covered for 60 days." },
    ],
  },

  compare: {
    heading: "Comparing Your Shopify Agency Ohio Options",
    intro: "Three other routes usually come up when Ohio owners plan a store. Here's the question that separates each from us.",
    options: [
      {
        name: "Agency that subcontracts",
        goodFor: "A big name on the proposal.",
        watchFor: "Ask who actually writes the code. If it's passed to subcontractors, ask who answers when it breaks.",
      },
      {
        name: "Freelance developer",
        goodFor: "Theme edits and single features.",
        watchFor: "A trade portal plus an ERP sync is a lot for one person. Ask how changes are tested before they go live.",
      },
      {
        name: "Monthly retainer shop",
        goodFor: "Ongoing small tasks on a fixed monthly fee.",
        watchFor: "A new store or migration rarely fits a retainer. Ask what's included and what's billed extra.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify Plus Partner, 150+ stores built",
        "Our own team builds every store, no subcontractors",
        "Every change tested on staging first",
        "One fixed price and date, in writing",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Shoppers and trade buyers mix differently in every category. These are the features a Shopify agency Ohio brands pick should plan for, category by category.",
    items: [
      { icon: "box", name: "Manufacturing and Industrial", desc: "Part search, spec sheets, quote requests and ERP sync." },
      { icon: "home", name: "Home, Furniture and Building Products", desc: "Large option sets, freight delivery and contractor accounts." },
      { icon: "shirt", name: "Apparel and Team Wear", desc: "Size guides, bulk team orders and tax-holiday product categories." },
      { icon: "food", name: "Food and Specialty Goods", desc: "Gift boxes, subscriptions and stockist ordering." },
      { icon: "star", name: "Health and Beauty", desc: "Subscriptions, product quizzes and salon or spa trade accounts." },
      { icon: "store", name: "Retail With a Physical Shop", desc: "Shopify POS, shared stock and customers across your shop and your site." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency Ohio FAQs",
  faqs: [
    {
      question: "How do I check a Shopify agency before hiring?",
      answer:
        "Check its Shopify Partner listing, ask whether its own staff or subcontractors will build your store, and ask how changes are tested before they go live. We're a Shopify Plus Partner, our own team builds every store, and every change is tested on a staging copy first.",
      unique: true,
    },
    {
      question: "Can I hire someone to set up my Shopify store?",
      answer:
        "Yes. We set up and build the whole store: theme, products, payments, shipping, tax, apps and integrations, then launch it on the date in your scope and support it for 60 days.",
      unique: true,
    },
    {
      question: "Shopify developer or agency: which should an Ohio brand hire?",
      answer:
        "A Shopify developer Ohio freelance sites list may suit one fix or a single feature. A store serving retail and trade buyers needs design, development, testing and support together, which is what an agency is for.",
      unique: true,
    },
    {
      question: "Can one store serve retail shoppers and trade buyers?",
      answer:
        "Yes. Shoppers and trade accounts buy from the same store, each seeing their own prices, payment options and checkout, with one stock count behind them.",
      unique: true,
    },
    {
      question: "Does the Commercial Activity Tax affect my online store?",
      answer:
        "It doesn't change how your store charges customers. Since 2025, businesses with Ohio taxable gross receipts of $6 million or less are excluded from it; your accountant confirms whether you are.",
      unique: true,
    },
    {
      question: "At what point does wholesale justify Shopify Plus?",
      answer:
        "When you have many trade accounts that each need their own catalog, net terms or approval steps. A handful of stockists on discount codes runs fine on standard Shopify. We look at your account list and tell you which side of the line you're on.",
      unique: false,
    },
    {
      question: "What will my project cost?",
      answer:
        "That depends on how many buyer types and systems the store has to serve, so we quote per project rather than per hour. After a short call you get one fixed price and a date in writing within two working days.",
      unique: false,
    },
    {
      question: "When could the new store open?",
      answer:
        "A retail store usually opens about six weeks after our first call. Adding a trade portal and ERP connection at the same time pushes that out, so we fix the date together and build the plan backwards from it.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Set up a video call with one of our senior Shopify people. Show us how orders come in today, from shoppers and from trade accounts, and you'll have a written price and opening date two working days later.",
    bullets: [
      "Show us how retail and trade orders arrive now",
      "Learn which parts belong on Shopify Plus, if any",
      "Receive a fixed price and an opening date in writing",
      "Keep the scope document, whatever you decide",
    ],
  },

  sources: [
    {
      id: "oh-manufacturing-jobs",
      claim: "Ohio has 687,345 manufacturing jobs, third nationally behind California and Texas (Ohio Manufacturing Counts 2025)",
      url: "https://www.ohiomfg.com/our-communities/2025-manufacturing-counts-new-report-confirms-manufacturing-remains-ohios-economic-backbone/",
      publisher: "Ohio Manufacturers' Association",
      captured: "2026-11-19",
      reviewAfterDays: 365,
    },
    {
      id: "oh-cat-exclusion",
      claim: "From January 1, 2025, the Ohio Commercial Activity Tax annual exclusion rose from $3 million to $6 million of taxable gross receipts; the 0.26% rate applies above it",
      url: "https://ohiocpa.com/advocacy/advocacy-news/2024/12/20/upcoming-changes-to-the-commercial-activity-tax",
      publisher: "Ohio Society of CPAs",
      captured: "2026-11-19",
      reviewAfterDays: 365,
    },
    {
      id: "oh-tax-holiday-2026",
      claim: "Ohio's 2026 sales tax holiday ran August 7-9 covering clothing up to $75 per item and school supplies and instructional materials up to $20; HB 186 replaced the expanded 2024-2025 holidays that covered most items up to $500",
      url: "https://www.gbq.com/resources/article/ohio-2026-sales-tax-holiday-focuses-on-cutting-back-to-school-costs",
      publisher: "GBQ Partners",
      captured: "2026-11-19",
      reviewAfterDays: 180,
    },
  ],
  wordCountTarget: [1600, 2800],
};
