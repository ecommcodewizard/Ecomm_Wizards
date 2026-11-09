// Geo v5 S2, page 3 of 18: Dallas, service format.
//
// Keywords (v5 plan 3.2; SERP checked 2026-11-08/09: SEMrush KD 1%, every
// ranking page has 0 backlinks, listicles + AI Overview with a B2B lead):
//   primary    shopify agency dallas (40); variant dallas shopify agency (40)
//   secondary  shopify developer dallas (60): agencies dominate, one Indeed
//              result, so kept; dallas shopify expert (40): FAQ 2;
//              shopify website design dallas (30): design service
// Angle: retail + wholesale in one store (the AI Overview leads with DFW B2B).
// Kept clear of /services/ecommerce-agency/dallas, which owns "ecommerce
// development agency dallas", "dallas ecommerce web design" and "b2b
// ecommerce development dallas": this page uses Shopify wording only.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_DALLAS: ServiceGeoPage = {
  type: "service",
  slug: "dallas",
  path: "/services/shopify-development-agency/dallas",
  hub: "/services/shopify-development-agency",
  geo: { name: "Dallas", type: "metro", areaServed: "Dallas, Texas" },

  targetKeyword: "shopify agency dallas",
  secondaryKeywords: ["shopify developer dallas", "dallas shopify expert", "shopify website design dallas"],
  faqKeywords: ["dallas shopify agency", "shopify expert dallas"],
  metaTitle: "Shopify Agency Dallas | Shopify Experts for Builds and B2B",
  metaDescription:
    "The Shopify agency Dallas brands hire to sell retail and wholesale from one store: custom builds, Shopify Plus B2B, design and migrations. Fixed price, live in ~6 weeks.",
  shortTitle: "Shopify Agency Dallas",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Dallas Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Dallas Brands Hire When Retail and Wholesale Share One Store",
    intro:
      "Your retail customers want a fast, good-looking store. Your wholesale accounts want their own prices, their own terms and a quick way to reorder. We're the Shopify agency Dallas brands hire to build one store that serves both, with [link:/services/shopify-b2b-store-setup|Shopify B2B], [link:/services/shopify-plus-development|Shopify Plus] and [link:/services/migration|migrations] handled in-house, at a fixed price agreed before any work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/Group_1000003974_d0eba414-7aec-4930-b534-a4dcc91d004e_1024x1024.png",
      alt: "Shopify store designs for retail and wholesale built by Ecomm Wizards",
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency Dallas brands hire to sell retail and wholesale from one store: Shopify Plus B2B portals, custom builds, ERP integrations, design and migrations. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before work starts.",

  trust: {
    heading: "Retail and Wholesale Brands That Trust Us With Their Store",
    subheading: "From direct-to-consumer launches to trade portals, every build was scoped, built and supported by our own Shopify team.",
  },

  pains: {
    heading: "Where Selling Retail and Wholesale Starts to Break",
    intro:
      "Running two channels on a store built for one of them creates work nobody planned for. These are the four problems any Shopify agency Dallas brands hire should fix first, and the ones we meet most often when a brand adds wholesale, or retail, to an existing store.",
    items: [
      {
        icon: "receipt",
        name: "Wholesale Orders Still Arrive by Email",
        desc: "Trade buyers email a spreadsheet or phone in an order because the store has no place for them. Someone on your team keys it into Shopify by hand and checks stock in a separate system.",
        cost: "Hours of admin every week, and the typos land on your best accounts.",
      },
      {
        icon: "layers",
        name: "One Price List Pretending to Be Three",
        desc: "Retail, wholesale and distributor pricing held together with discount codes, tags and hidden collections. One shared link or one expired code, and a retail shopper sees trade prices.",
        cost: "Margin leaks quietly, and nobody notices until a customer does.",
      },
      {
        icon: "box",
        name: "Stock That Doesn't Match Across Channels",
        desc: "Retail orders, trade orders and a warehouse or ERP that each keep their own count. Something sells out online while the system still shows twenty units on the shelf.",
        cost: "Canceled orders, back-orders you can't explain, and refunds you never needed to issue.",
      },
      {
        icon: "clock",
        name: "A Store That Slows Down as It Grows",
        desc: "Every new channel added another app and another script. Pages that loaded fast at launch now crawl on a phone, and checkout carries code nobody remembers installing.",
        cost: "More traffic stops turning into more orders.",
      },
    ],
  },

  services: {
    label: "Shopify Services",
    heading: "Everything Your Store Needs, Built by One Shopify Team",
    intro:
      "For Dallas brands, our Shopify developers build, connect and look after the whole store, so you never brief three vendors for one project. Need demand as well? We also run [link:/services/shopify-seo-agency|Shopify SEO] and [link:/services/shopify-cro-agency|conversion rate optimization].",
    items: [
      {
        title: "Shopify B2B and Wholesale Portals",
        body: "Company accounts with their own price lists, payment terms, minimum quantities and quick reorder, inside the same store as your retail site. Built on Shopify Plus B2B where it covers the job, with custom code where it doesn't.",
      },
      {
        title: "Shopify Website Design",
        body: "Custom design for retail shoppers and trade buyers alike, with Figma screens for desktop and mobile that you approve before any build starts. Dallas brands that come to us for Shopify website design get a store that looks like their brand, not like a theme.",
      },
      {
        title: "Custom Shopify Development",
        body: "Our Shopify developers build the features your business runs on: custom sections, product configurators, bulk order forms, CSV uploads, and anything a theme or an app can't do cleanly.",
      },
      {
        title: "ERP, Inventory and 3PL Integrations",
        body: "We connect Shopify to your ERP, warehouse or 3PL so stock, orders and invoices stay in sync across retail and wholesale, without anyone re-keying them.",
      },
      {
        title: "Shopify Plus Builds and Upgrades",
        body: "Checkout extensions, Shopify Functions, multiple markets and automation with Shopify Flow, scoped to what your volume actually needs. If you don't need Plus yet, we will tell you.",
      },
      {
        title: "Migration to Shopify",
        body: "Move from WooCommerce, Magento, BigCommerce or Salesforce Commerce Cloud with products, customers, orders and trade accounts intact, and a 301 redirect for every old URL.",
      },
      {
        title: "Multi-Language and Multi-Currency Stores",
        body: "Shopify Markets lets one store sell in more than one language and currency. We set up translated pages, local prices and the right domains so each market sees a store made for it.",
      },
      {
        title: "Support and Retainers",
        body: "Every build includes 60 days of post-launch support, then an optional monthly retainer for new features, fixes and seasonal work.",
      },
    ],
  },

  local: {
    label: "Selling from Dallas",
    heading: "What Selling from Dallas Means for Your Store",
    intro:
      "Dallas changes three things in how we build your store: how far your orders can reach, which tax rules apply, and which languages your customers shop in.",
    items: [
      {
        icon: "truck",
        name: "Shipping from the Center of the Country",
        desc: "The Dallas Regional Chamber says carriers from Dallas-Fort Worth reach up to 99% of the US population within 48 hours. If your stock ships from the region, that two-day promise is a selling point. We show it on the product page, with delivery dates by ZIP code and separate shipping rules for pallet-size trade orders.",
      },
      {
        icon: "receipt",
        name: "Texas Sales Tax, Set Up Right",
        desc: "Dallas collects 8.25% combined sales tax. If you sell into Texas from another state, you must collect once your Texas sales pass $500,000 a year, and you can choose a single flat local rate set by the state instead of tracking every city. We configure Shopify Tax for whichever route you take and keep exemption certificates on your trade accounts. Your accountant still makes the filing calls.",
      },
      {
        icon: "user",
        name: "A Store in English and Spanish",
        desc: "About 42% of Dallas residents are Hispanic or Latino, according to the 2020 Census. Shopify can run a full Spanish version of your store from the same admin, with translated product pages, checkout and emails. If Spanish-speaking customers are part of your market, we build it in from the start.",
      },
    ],
  },

  caseStudies: {
    heading: "Retail and Wholesale Stores We've Built",
    intro: "Each one serves more than one kind of buyer: trade accounts, retail shoppers, or customers in more than one country.",
    items: [
      {
        slug: "saddleback-shopify-plus-b2b",
        tags: ["B2B Distribution", "Shopify Plus", "Bulk Ordering"],
        description: "A European cycling distributor replaced a clunky wholesale portal with a Shopify Plus B2B store and CSV bulk ordering. B2B sales grew 881% in the first month.",
        video: "/images/Case%20studies/Saddleback%20video.mp4",
      },
      {
        slug: "everlast-shopify-plus-sports-redesign",
        tags: ["Retail and Trade", "Shopify Plus", "Custom Theme"],
        description: "The boxing brand's rebuilt store runs retail and trade checkout side by side. Conversion rate rose 152% and total orders 48%.",
        video: "/images/Case%20studies/Everlast%20video.mp4",
      },
      {
        slug: "john-hardy-shopify-plus-migration",
        tags: ["Jewelry", "Salesforce Migration", "Shopify Markets"],
        description: "A luxury jewelry brand moved from Salesforce Commerce Cloud to Shopify Plus in under three months, with Shopify Markets for international shoppers. Conversion rate rose 71%.",
        video: "/images/Case%20studies/John%20Hardy%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How We Build a Store for Two Kinds of Buyer",
    intro: "This is how a Shopify agency Dallas brands trust should run the build: five stages, with your sign-off at each one. Most stores are live about six weeks after kickoff; B2B and ERP work can take longer.",
    steps: [
      { title: "Map Both Channels", desc: "We look at how your retail shoppers buy and how your trade accounts order today, then write the scope, a fixed price and a launch date." },
      { title: "Design for Each Buyer", desc: "Retail pages built to sell, trade pages built for speed: quick order, saved lists and account pricing. You approve every screen in Figma." },
      { title: "Build and Connect", desc: "We build the theme and features on a staging store and connect your ERP, warehouse or 3PL, so stock and orders flow both ways." },
      { title: "Test With Real Orders", desc: "Retail orders, trade orders, tax-exempt accounts and every shipping rule, tested on staging across devices before anything goes live." },
      { title: "Launch, Onboard and Support", desc: "A planned go-live, help moving your trade accounts onto the new portal, and 60 days of support from launch day." },
    ],
  },

  compare: {
    heading: "What to Check on Your Shopify Agency Dallas Shortlist",
    intro: "Google will show you freelancers, local studios and large partner agencies. Here is what each one is good for, and what to check before you sign.",
    options: [
      {
        name: "Freelance Shopify developer",
        goodFor: "Quick fixes, small features and stores with a single sales channel.",
        watchFor: "B2B pricing, ERP links and migrations are rarely one-person jobs, and your project waits whenever they are busy.",
      },
      {
        name: "Local web design studio",
        goodFor: "Brand-led websites and the option to meet face to face.",
        watchFor: "Ask how many Shopify B2B stores they have launched. Wholesale is a different build from a retail theme.",
      },
      {
        name: "Large partner agency",
        goodFor: "Big programs with a large team and a budget to match.",
        watchFor: "Check who works on your account day to day, and whether a smaller store gets their senior people.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Retail and B2B in one store, built by one team",
        "Fixed price and launch date in writing up front",
        "Case studies with measured results",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Retail and Wholesale Categories We Build For",
    intro: "Selling retail and wholesale looks different in every category. Here is what a Shopify agency Dallas brands hire should change in the build for each.",
    items: [
      { icon: "shirt", name: "Fashion and Apparel", desc: "Size runs and prepacks for stockists, line sheets, seasonal pre-orders, and fit guidance for retail shoppers." },
      { icon: "star", name: "Beauty and Skincare", desc: "Professional pricing for salons and spas, regimen bundles, subscriptions, and shade or skin-type finders." },
      { icon: "home", name: "Home and Furniture", desc: "Trade accounts for designers, swatch requests, freight and white-glove delivery, and large option sets." },
      { icon: "flag", name: "Sports and Outdoor", desc: "Team and club bulk orders, size and fit tools, and dealer pricing running alongside retail." },
      { icon: "box", name: "Distribution and Wholesale", desc: "Catalogs by account, net terms, quick order by SKU, and ERP sync. See how our [link:/services/shopify-b2b-store-setup|Shopify B2B setup] works." },
      { icon: "cart", name: "Jewelry and Accessories", desc: "Engraving and personalization previews, checkout trust for high-value orders, and wholesale for boutiques." },
    ],
    footnote: "Selling something else? We build for every category. The platform is always Shopify.",
  },

  faqHeading: "Shopify Agency FAQs for Dallas Brands",
  faqs: [
    {
      question: "Should a Dallas brand hire a freelance Shopify developer or an agency?",
      answer:
        "Hire a freelancer for small fixes and single features; hire an agency when the job spans design, development, integrations and launch. B2B portals, ERP connections and migrations need several skills at once, and an agency covers them without your project stalling when one person is busy.",
      unique: true,
    },
    {
      question: "What does a Dallas Shopify expert do?",
      answer:
        "A Shopify expert designs, builds, fixes and grows stores on Shopify: themes, custom features, migrations, integrations, speed and conversion work. We work only on Shopify and Shopify Plus, so every developer on your project knows the platform in depth.",
      unique: true,
    },
    {
      question: "How much does it cost to hire a Shopify developer?",
      answer:
        "It depends on the scope, so a fair Shopify agency Dallas quote is priced by project, not by the hour. After a short online call we send a written scope with one fixed price and a launch date, usually within 48 hours, and that number holds unless you add to the work.",
      unique: false,
    },
    {
      question: "Can one Shopify store sell to retail and wholesale customers?",
      answer:
        "Yes. With Shopify Plus B2B, trade accounts log in to their own prices, payment terms and minimums, while retail shoppers see your normal store. Both run on one product catalog and one inventory, so stock stays accurate across channels.",
      unique: false,
    },
    {
      question: "Does my Shopify agency need to be local to Dallas?",
      answer:
        "No. What matters is Shopify depth and how easy the team is to reach. We run projects through online calls, a shared staging store and written weekly updates, and you get a fixed price and launch date in writing before any work starts.",
      unique: true,
    },
    {
      question: "Can you connect Shopify to our ERP or warehouse system?",
      answer:
        "Yes. We connect Shopify to ERPs, inventory systems and 3PLs so stock levels, orders and invoices move between them automatically. The connection method is agreed in the scope: a ready-made connector where one fits, and a custom integration where it doesn't.",
      unique: true,
    },
    {
      question: "How do you handle Texas sales tax for trade customers?",
      answer:
        "We set up Shopify Tax so retail orders collect the right Texas rate, including Dallas's 8.25% combined rate, and we store resale or exemption certificates on trade accounts so those orders are not taxed. If you sell into Texas from another state, collection starts once your Texas sales pass $500,000 a year. Your accountant handles registration and filing.",
      unique: true,
    },
    {
      question: "Can you build our store in English and Spanish?",
      answer:
        "Yes. Shopify Markets runs a full Spanish version of your store from the same admin, with translated products, pages, checkout and emails on their own URLs so Google can index them. We set it up during the build or add it to an existing store.",
      unique: true,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for an online call with a senior Shopify specialist. Tell us how you sell today, retail, wholesale or both, and within 48 hours you get a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your retail and wholesale setup and what is slowing it down",
      "Get a fixed price and a launch date within 48 hours",
      "Find out what Shopify B2B covers natively and what needs custom work",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "dallas-rate",
      claim: "Dallas combined sales tax rate 8.25% (6.25% state + 1% city + 1% DART); Dallas County adds none",
      url: "https://trykintsugi.com/sales-tax-guides/usa/texas/dallas",
      publisher: "Kintsugi (Texas Comptroller rates)",
      captured: "2026-11-09",
      reviewAfterDays: 180,
    },
    {
      id: "tx-remote-seller",
      claim: "Texas remote sellers must collect once Texas revenue exceeds $500,000 in the prior 12 months; optional single local use tax rate",
      url: "https://www.salestaxinstitute.com/?p=17643",
      publisher: "Sales Tax Institute (Texas Comptroller guidance)",
      captured: "2026-11-09",
      reviewAfterDays: 180,
    },
    {
      id: "census-dallas",
      claim: "Dallas city: 41.9% Hispanic or Latino (2020 Census)",
      url: "https://www.census.gov/quickfacts/fact/table/dallascitytexas,US",
      publisher: "US Census Bureau QuickFacts",
      captured: "2026-11-09",
      reviewAfterDays: 365,
    },
    {
      id: "drc-logistics",
      claim: "Carriers can reach up to 99% of the US population within 48 hours from Dallas-Fort Worth",
      url: "https://www.dallaschamber.org/wp-content/uploads/2026/03/EDG2026_Industry-Logistics.pdf",
      publisher: "Dallas Regional Chamber, 2026 Economic Development Guide",
      captured: "2026-11-09",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
