// Geo v5 S2, page 8 of 18: Milwaukee, service format.
//
// Keywords (v5 plan 3.2; SEMrush 2026-11-11: 110/mo, KD 5%, Commercial;
// Ahrefs: every ranking page 0-1 referring domains, Barrel #1 at 33 visits):
//   primary    milwaukee shopify agency (exact word order kept in H1/title)
//   secondary  milwaukee shopify developer (40): FAQ heading. SERP mixes
//              agencies with one ZipRecruiter listing and hourly-rate AI
//              answer, so it gets a freelancer-or-agency FAQ, no section
//   variants   shopify developer milwaukee
// Angle: manufacturers selling direct alongside dealers and distributors
// (MAP pricing, dealer locator, order routing). Distinct from Houston
// (suppliers taking B2B orders online). Kept clear of
// /services/ecommerce-agency/milwaukee and /wisconsin ("ecommerce agency").

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_MILWAUKEE: ServiceGeoPage = {
  type: "service",
  slug: "milwaukee",
  path: "/services/shopify-development-agency/milwaukee",
  hub: "/services/shopify-development-agency",
  geo: { name: "Milwaukee", type: "metro", areaServed: "Milwaukee, Wisconsin" },

  targetKeyword: "milwaukee shopify agency",
  secondaryKeywords: ["milwaukee shopify developer"],
  faqKeywords: ["shopify developer milwaukee"],
  metaTitle: "Milwaukee Shopify Agency | Shopify Stores for Makers and Brands",
  metaDescription:
    "The Milwaukee Shopify agency manufacturers hire to sell direct without undercutting dealers: custom builds, B2B, dealer locators and Shopify Plus, at a fixed price.",
  shortTitle: "Milwaukee Shopify Agency",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Milwaukee Brands",
    h1Lead: "Milwaukee",
    h1Gradient: "Shopify Agency",
    h1Tail: "Manufacturers Hire to Sell Direct Without Undercutting Dealers",
    intro:
      "You've built the product and the dealer network. Now customers want to buy straight from you, and your dealers are watching how you do it. We're the Milwaukee Shopify agency manufacturers hire to sell direct the right way: [link:/services/shopify-theme-development|custom stores], [link:/services/shopify-b2b-store-setup|B2B portals], dealer locators, [link:/services/shopify-plus-development|Shopify Plus] and [link:/services/migration|migrations], at a fixed price agreed before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-milwaukee-hero-v1.webp",
      alt: "Direct-to-consumer Shopify stores for Feetures, Capelli Sports and Everlast, with conversion up 152% and add-to-cart up 32%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Milwaukee Shopify agency choice for manufacturers and product brands that want to sell direct alongside their dealers: custom Shopify stores, B2B and dealer portals, dealer locators, Shopify Plus and platform migrations. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before work starts.",

  trust: {
    heading: "Product Brands That Trust Us With Their Store",
    subheading: "Makers selling direct, through dealers or both, every store built in-house by our own Shopify team.",
  },

  pains: {
    heading: "Where Selling Direct Goes Wrong for a Manufacturer",
    intro:
      "Selling direct can grow margin and customer data, or it can start a fight with the dealers who built your business. These are the four problems any Milwaukee Shopify agency manufacturers hire should solve first.",
    items: [
      {
        icon: "layers",
        name: "Undercutting Your Own Dealers",
        desc: "List the product cheaper online, or discount it once, and every dealer notices. Without a pricing plan built into the store, direct sales cost you the network that sells the rest.",
        cost: "Dealers drop the line or stop pushing it, and wholesale volume falls faster than direct sales grow.",
      },
      {
        icon: "store",
        name: "No Way to Send Shoppers to a Dealer",
        desc: "Some customers want to see the product, get it fitted or have it installed. With no dealer locator or in-store pickup, they either buy elsewhere or don't buy at all.",
        cost: "Sales that should go to your dealers go to a competitor instead.",
      },
      {
        icon: "receipt",
        name: "Dealer Orders Still Come In by Phone",
        desc: "Retail customers check out online, but dealers still email order forms that someone rekeys, with pricing checked against a spreadsheet.",
        cost: "Slow, error-prone wholesale orders from your most valuable accounts.",
      },
      {
        icon: "code",
        name: "A Catalog Built for Sales Reps, Not Shoppers",
        desc: "Part numbers, spec tables and model codes that make sense to a dealer mean nothing to a consumer. The products are right; the way they're shown isn't.",
        cost: "Shoppers can't tell which model they need, so they leave.",
      },
    ],
  },

  services: {
    label: "Shopify Services",
    heading: "Shopify Development for Brands Selling Direct and Through Dealers",
    intro:
      "Everything is built in-house by people who work only on Shopify. Once you're selling direct, we can also run [link:/services/shopify-seo-agency|Shopify SEO] and [link:/services/shopify-cro-agency|conversion rate optimization].",
    // Visual rows (owner, 2026-11-12): 8 services merged to 6, each with a
    // case study the page's own case-studies section doesn't use.
    items: [
      {
        title: "Direct-to-Consumer Store Builds",
        heading: "Product pages a consumer understands without a dealer explaining them",
        body: "Plain-language pages, model finders, comparison tables and photography that shows the product working.",
        covers: ["Model finders", "Comparison tables", "Plain-language specs", "In-use photography", "Custom theme"],
        caseSlug: "dryrobe-shopify-plus-redesign",
        imageAlt: "Dryrobe store with an activity finder for consumers",
        cta: { label: "Explore store development", href: "/services/shopify-store-development" },
      },
      {
        title: "Dealer Locator and MAP-Safe Pricing",
        heading: "Selling direct that sends business to your dealers, not around them",
        body: "A store locator, in-store pickup and nearest-dealer routing, with promotions that respect your minimum advertised price.",
        covers: ["Store locator", "In-store pickup", "Dealer routing", "MAP rules", "Promotion limits"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy Shopify storefront",
      },
      {
        title: "Dealer and Distributor Portal",
        heading: "Dealers reorder at their own price, on their own schedule",
        body: "Shopify Plus B2B accounts with price lists, payment terms, minimums and quick reorder, in the same store as your consumer site.",
        covers: ["Dealer accounts", "Price lists", "Payment terms", "Minimums", "Quick reorder"],
        caseSlug: "saddleback-shopify-plus-b2b",
        imageAlt: "Saddleback dealer portal on Shopify Plus B2B",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        title: "ERP and Inventory Integration",
        heading: "One stock count across consumer, dealer and distributor orders",
        body: "Two-way sync with your ERP or warehouse, so pricing and inventory match in every channel.",
        covers: ["Two-way sync", "Channel inventory", "Dealer pricing", "Order routing", "Invoices"],
        caseSlug: "henchman-shopify-plus-b2b",
        imageAlt: "Henchman store synced to its ERP across channels",
        cta: { label: "Explore ERP connections", href: "/services/erp-connections-to-shopify" },
      },
      {
        title: "Parts, Accessories and Warranty",
        heading: "Parts by model number and warranty claims without a phone call",
        body: "Parts lookups by model, accessory cross-sells, product registration and warranty claims, all inside the store.",
        covers: ["Parts lookup", "Accessory cross-sells", "Product registration", "Warranty claims", "Model search"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        imageAlt: "Mouldings One Shopify storefront",
      },
      {
        title: "Migration and Support",
        heading: "Off Magento or a legacy dealer portal, with us on call afterward",
        body: "Products, accounts, pricing and order history come across with every URL redirected, then 60 days of support and an optional retainer.",
        covers: ["Magento", "Legacy portals", "Account pricing", "301 redirects", "Monthly retainer"],
        caseSlug: "daring-headless-shopify-hydrogen",
        imageAlt: "Daring store rebuilt on Shopify with a headless frontend",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
    ],
  },

  local: {
    label: "Selling from Milwaukee",
    heading: "What Selling from Milwaukee Means for Your Store",
    intro:
      "Three things about Milwaukee change how a product brand's store should be built: the manufacturing base you sell from, the dealers you sell through, and Wisconsin's tax rules.",
    items: [
      {
        icon: "box",
        name: "A Manufacturing Region",
        desc: "Milwaukee 7 says manufacturing makes up about sixteen percent of the region's workforce, second among the 50 largest US metros. Many brands here started as makers selling through others; a direct store is a new channel to build carefully, not just a website to launch.",
      },
      {
        icon: "store",
        name: "Selling Alongside Your Dealers",
        desc: "If dealers and distributors carry your line, the store has to work for them too: a locator that sends shoppers their way, pricing that holds your MAP, and a portal where they reorder without calling.",
      },
      {
        icon: "receipt",
        name: "Wisconsin Sales Tax, Set Up Right",
        desc: "Milwaukee's combined rate is 7.9%, including a 2% city tax added on January 1, 2024. Selling into Wisconsin from another state? You collect once your Wisconsin sales pass $100,000 a year; the old 200-order test ended in February 2021. We set up Shopify Tax and dealer exemptions, and your accountant handles registration and filing.",
      },
    ],
  },

  caseStudies: {
    heading: "Product Brands Selling Direct, With Results",
    intro:
      "Proof to ask of any Milwaukee Shopify agency you consider: each brand here makes its own products and sells them direct, and each result was measured.",
    items: [
      {
        slug: "feetures-shopify-theme-development",
        tags: ["Product Brand", "Custom Theme", "Variant Toggles"],
        description: "A performance sock brand rebuilt its Shopify theme with custom collection pages and men's and women's variant toggles. Add-to-cart rate rose 32% and average order value 19%.",
        video: "/images/Case%20studies/Feetures%20video.mp4",
      },
      {
        slug: "capelli-sports-shopify-migration",
        tags: ["Sportswear", "WordPress Migration", "Integrations"],
        description: "A global sportswear brand moved from WordPress to Shopify with zero downtime and a 10-app integration stack. Conversion rate rose 24% and 95% of SEO equity was kept.",
        video: "/images/Case%20studies/Capelli%20Sports%20video.mp4",
      },
      {
        slug: "everlast-shopify-plus-sports-redesign",
        tags: ["Consumer and Trade", "Shopify Plus", "Dual Checkout"],
        description: "The boxing brand's rebuilt store runs consumer and trade checkout side by side. Conversion rate rose 152% and total orders 48%.",
        video: "/images/Case%20studies/Everlast%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How We Take a Manufacturer Direct",
    intro:
      "Five stages with your sign-off at each one, the way a Milwaukee Shopify agency should run a direct-to-consumer launch. Most stores are live in six to ten weeks, depending on the ERP and dealer setup.",
    steps: [
      { title: "Map Your Channels", desc: "We look at your dealers, distributors, pricing rules and catalog, then write the scope, a fixed price and a launch date." },
      { title: "Design for Consumers and Dealers", desc: "Consumer product pages and a dealer ordering path, designed in Figma for desktop and mobile. You approve every screen." },
      { title: "Build and Connect", desc: "Theme, dealer locator, B2B portal and ERP sync built on a staging store, with your catalog and price lists loaded." },
      { title: "Test Every Channel", desc: "Consumer orders, dealer orders, pickup, routing, MAP pricing and tax rules tested before launch." },
      { title: "Launch and Brief Your Dealers", desc: "A planned go-live, help explaining the new store to your dealer network, and 60 days of support." },
    ],
  },

  compare: {
    heading: "What to Check on Your Milwaukee Shopify Agency Shortlist",
    intro: "Search results show local marketing agencies, national partners and freelancers. Each one suits a different job.",
    options: [
      {
        name: "Local web and marketing agency",
        goodFor: "Brand websites, local SEO and ads.",
        watchFor: "Ask how many manufacturers they have taken direct, and how they handled dealer pricing and B2B ordering.",
      },
      {
        name: "Freelance Shopify developer",
        goodFor: "Small fixes and single features.",
        watchFor: "Dealer portals, ERP sync and migrations need several skills at once, and launches slip when one person is busy.",
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
        "Consumer stores, dealer portals and ERP sync in-house",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Product Categories We Build Direct Stores For",
    intro:
      "Every kind of maker sells direct a little differently. Here is what a Milwaukee Shopify agency should change in the build for each.",
    items: [
      { icon: "code", name: "Tools and Equipment", desc: "Model finders, spec comparisons, parts lookup, warranty registration and dealer pricing." },
      { icon: "flag", name: "Outdoor and Powersports", desc: "Dealer locators, accessory fitment by model, and pickup or installation through local dealers." },
      { icon: "food", name: "Food and Beverage Makers", desc: "Direct subscriptions and gift boxes alongside wholesale accounts for stores and restaurants." },
      { icon: "home", name: "Home and Furniture", desc: "Large option sets, swatches, freight delivery and trade pricing for designers." },
      { icon: "shirt", name: "Apparel and Footwear", desc: "Size and fit guidance, variant toggles and line sheets for stockists." },
      { icon: "box", name: "Industrial Components", desc: "Part-number search and B2B accounts. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Making something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Milwaukee Shopify Agency FAQs",
  faqs: [
    {
      question: "Should I hire a Milwaukee Shopify developer or an agency?",
      answer:
        "A freelance developer suits small fixes and single features. An agency suits work that spans design, development, B2B setup, ERP integration and launch, because it covers every skill at once and the project doesn't stall when one person is busy.",
      unique: true,
    },
    {
      question: "How much does a Milwaukee Shopify agency cost?",
      answer:
        "It depends on the scope, especially dealer portals and ERP integration, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours.",
      unique: false,
    },
    {
      question: "Can we sell direct without upsetting our dealers?",
      answer:
        "Yes, if the store is built for it. We set pricing that respects your MAP, add a dealer locator and pickup or routing options, and give dealers their own portal, so selling direct supports your network instead of competing with it.",
      unique: true,
    },
    {
      question: "Can one Shopify store serve consumers and dealers?",
      answer:
        "Yes. Shopify Plus B2B lets dealers log in to their own prices, terms and minimums while consumers see your retail store, all from one catalog and one inventory.",
      unique: false,
    },
    {
      question: "Can you connect Shopify to our ERP?",
      answer:
        "Yes. We sync stock, pricing, orders and invoices between Shopify and your ERP, using a proven connector where one fits and a custom integration where it doesn't.",
      unique: false,
    },
    {
      question: "Does a Shopify developer Milwaukee brands hire need to be local?",
      answer:
        "No. We run every project through online calls, a staging store you can test yourself and written weekly updates, with the scope, fixed price and launch date agreed in writing before work starts.",
      unique: true,
    },
    {
      question: "Can you build a parts finder or warranty registration?",
      answer:
        "Yes. We build parts lookups by model or serial number, accessory fitment, product registration and warranty claims into the store, connected to your catalog and customer records.",
      unique: true,
    },
    {
      question: "Do you set up Wisconsin sales tax in Shopify?",
      answer:
        "Yes. We configure Shopify Tax so each order carries the right Wisconsin rate, including Milwaukee's 7.9% combined rate, and store exemption certificates for dealers buying for resale. Out-of-state sellers collect once their Wisconsin sales pass $100,000 a year.",
      unique: true,
    },
  ],

  book: {
    heading: "Book a Free Call About Selling Direct",
    sub: "Pick a time for an online call with a senior Shopify specialist. Tell us how you sell today and how you want to sell direct, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your catalog, dealers, pricing and ERP",
      "Get a fixed price and a launch date within 48 hours",
      "Find out what Shopify handles natively and what needs custom work",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "m7-manufacturing",
      claim: "Manufacturing accounts for about sixteen percent of the Milwaukee 7 region's workforce, second among the top 50 US metros for manufacturing jobs",
      url: "https://biztimes.com/milwaukee-7-wisconsins-manufacturing-center/",
      publisher: "BizTimes / Milwaukee 7",
      captured: "2026-11-11",
      reviewAfterDays: 365,
    },
    {
      id: "mke-rate",
      claim: "Milwaukee combined sales tax 7.9% (5% state, 0.9% county, 2% city); city tax added January 1, 2024 under 2023 Wisconsin Act 12",
      url: "https://trykintsugi.com/sales-tax-guides/usa/wisconsin/milwaukee",
      publisher: "Kintsugi (Wisconsin DOR rates)",
      captured: "2026-11-11",
      reviewAfterDays: 180,
    },
    {
      id: "wi-nexus",
      claim: "Wisconsin remote sellers collect once gross sales into Wisconsin exceed $100,000; the 200-transaction threshold was removed effective February 20, 2021 (2021 Wis. Act 1)",
      url: "https://www.revenue.wi.gov/Pages/Businesses/remote-sellers.aspx",
      publisher: "Wisconsin Department of Revenue",
      captured: "2026-11-11",
      reviewAfterDays: 180,
    },
  ],
  wordCountTarget: [1600, 2800],
};
