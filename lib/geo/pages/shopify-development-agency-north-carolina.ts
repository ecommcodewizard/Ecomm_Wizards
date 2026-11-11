// Geo v5 S2, page 10 of 18: North Carolina (state), service format.
//
// Keywords (v5 plan 3.2; SEMrush 2026-11-11: 50/mo, KD 4%, Commercial;
// ranking pages mostly 0 referring domains, Realm Web Design 10):
//   primary    shopify development agency north carolina (50-60)
//   secondary  shopify design north carolina (60, KD 0): leads the design
//              service and an FAQ heading
// Rules (plan risk note #4): state terms only. Charlotte has its own page
// (shopify development charlotte, shopify design charlotte) and Raleigh is
// next, so this page names no Charlotte or Raleigh keyword and does not
// reuse the Charlotte page's facts (NASCAR, Mecklenburg 8.25%).
// Angle: design and build of the whole store for NC makers (furniture and
// home from the High Point region, food and agriculture).

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_NORTH_CAROLINA: ServiceGeoPage = {
  type: "service",
  slug: "north-carolina",
  path: "/services/shopify-development-agency/north-carolina",
  hub: "/services/shopify-development-agency",
  geo: { name: "North Carolina", type: "state", areaServed: "North Carolina" },

  targetKeyword: "shopify development agency north carolina",
  secondaryKeywords: ["shopify design north carolina"],
  faqKeywords: [],
  metaTitle: "Shopify Development Agency North Carolina | Design and Build",
  metaDescription:
    "The Shopify development agency North Carolina brands hire to design and build the whole store: custom design, themes, B2B and Shopify Plus at a fixed price.",
  shortTitle: "Shopify Development Agency North Carolina",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Development for North Carolina Brands",
    h1Lead: "",
    h1Gradient: "Shopify Development Agency",
    h1Tail: "North Carolina Brands Hire to Design and Build the Whole Store",
    intro:
      "One team for the design, the build and the launch, so nothing gets lost between a mockup and a live store. We're the Shopify development agency North Carolina brands hire for the whole job: [link:/services/shopify-theme-development|custom design and themes], [link:/services/shopify-b2b-store-setup|trade and wholesale accounts], [link:/services/shopify-plus-development|Shopify Plus] and [link:/services/migration|platform migrations], at a fixed price agreed before design starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-north-carolina-hero-v1.webp",
      alt: "Shopify stores for Mouldings One, Sneak Energy and Evie Lou, with B2B revenue up 50% and conversion up 82%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify development agency North Carolina brands hire to design and build the whole store: custom design, themes, trade and wholesale accounts, Shopify Plus and platform migrations, for makers in furniture, home, food and apparel. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before design starts.",

  trust: {
    heading: "Makers and Brands That Trust Us With Their Store",
    subheading: "Every store was designed, built and launched by one in-house team that works only on Shopify.",
  },

  pains: {
    heading: "Where Design and Build Come Apart",
    intro:
      "When one firm designs the store and another builds it, the gaps show up after launch. These are the four problems any Shopify development agency North Carolina makers hire should prevent from the start.",
    items: [
      {
        icon: "grid",
        name: "A Design That Never Made It to the Live Store",
        desc: "The mockups looked great. The live store doesn't, because the developer had to cut corners the designer never planned for, and nobody owned the gap.",
        cost: "You paid for a design you don't have.",
      },
      {
        icon: "layers",
        name: "Products With Too Many Options",
        desc: "Fabrics, finishes, sizes, flavors and pack counts: a theme built for simple products turns your range into a confusing list of near-identical items.",
        cost: "Shoppers can't find the version they want, so they leave or call.",
      },
      {
        icon: "store",
        name: "Trade Buyers Treated Like Retail Shoppers",
        desc: "Designers, retailers and stockists want their own prices and a fast way to order, but the store only knows one kind of customer.",
        cost: "Trade orders stay on email, and the store misses your biggest accounts.",
      },
      {
        icon: "code",
        name: "A Store Only a Developer Can Change",
        desc: "New collections, landing pages and seasonal banners all need code, so updates wait in someone's queue while the season moves on.",
        cost: "Launches slip, and the store looks older every month.",
      },
    ],
  },

  services: {
    label: "Design and Development",
    heading: "Shopify Design and Development From One Team",
    intro:
      "Designers and developers work side by side in-house, and only on Shopify. Once the store is live, we can also run [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    items: [
      {
        title: "Shopify Design for North Carolina Brands",
        body: "Store design that starts with your products and customers: every page designed in Figma for desktop and mobile, and approved by you before we build it.",
      },
      {
        title: "Custom Theme Development",
        body: "The approved design built as a custom theme, with sections your team can edit to launch collections and campaigns without calling a developer.",
      },
      {
        title: "Large Option Sets and Configurators",
        body: "Swatches, fabric and finish pickers, bundles and configurators that turn a big range into a clear choice instead of a long list.",
      },
      {
        title: "Trade and Wholesale Accounts",
        body: "Trade pricing, sample requests, net terms and quick reorder for designers, retailers and stockists, in the same store as your retail site.",
      },
      {
        title: "Shopify Plus Builds",
        body: "Checkout extensions, Shopify Functions, B2B and automation for brands whose volume justifies Plus. We'll tell you if yours doesn't yet.",
      },
      {
        title: "Platform Migration",
        body: "Move from WooCommerce, Magento, BigCommerce or Squarespace with products, customers, orders and reviews intact, and every old URL redirected.",
      },
      {
        title: "Shipping for Big and Perishable Items",
        body: "Freight and white-glove options for furniture, cold-chain rules for food, and delivery dates shown before checkout.",
      },
      {
        title: "Support After Launch",
        body: "Every build includes 60 days of post-launch support, then an optional monthly retainer for new pages, features and fixes.",
      },
    ],
  },

  local: {
    label: "Selling from North Carolina",
    heading: "What Selling from North Carolina Means for Your Store",
    intro:
      "Three things about North Carolina change how your store should be built: the furniture trade you may sell into, the food and farm products the state is known for, and county-by-county sales tax.",
    items: [
      {
        icon: "home",
        name: "Home of the Furniture Trade",
        desc: "High Point Market, held twice a year, is described as the largest home furnishings trade show in the world, with buyers from more than 100 countries. If you sell furniture or home goods, your store has to work for those trade buyers as well as for shoppers: trade logins, net pricing and sample requests.",
      },
      {
        icon: "food",
        name: "A Food and Farm State",
        desc: "USDA data has ranked North Carolina the country's top sweet potato producer every year since 1971, and the state's food makers sell far beyond it. Food brands need subscriptions, gift boxes and shipping rules that protect perishables in transit.",
      },
      {
        icon: "receipt",
        name: "Sales Tax That Varies by County",
        desc: "North Carolina's state rate is 4.75%, and counties add their own, so combined rates run from 6.75% to 8.25% depending on where an order is delivered. Out-of-state sellers collect once their North Carolina sales pass $100,000 a year. We set up Shopify Tax for each address, and your accountant handles registration and filing.",
      },
    ],
  },

  caseStudies: {
    heading: "Design and Build Projects With Results",
    intro:
      "Proof to ask of any Shopify development agency North Carolina brands consider: each project here was designed and built end to end, and each result was measured.",
    items: [
      {
        slug: "mouldings-one-shopify-b2b-portal",
        tags: ["Home and Interiors", "Trade Portal", "Shopify Plus"],
        description: "An architectural mouldings supplier replaced a legacy trade portal with a custom Shopify Plus store for designers and contractors. B2B revenue grew 50% and order processing time fell 74%.",
        video: "/images/Case%20studies/Mouldings%20One%20video.mp4",
      },
      {
        slug: "sneak-energy-shopify-redesign",
        tags: ["Food and Drink", "Redesign", "Bundle Builder"],
        description: "A drinks brand got a mobile-first redesign and a custom bundle builder. Mobile conversion rate rose 68% and add-to-cart rate 52%.",
        video: "/images/Case%20studies/Sneak%20video.mp4",
      },
      {
        slug: "evie-lou-shopify-fashion-cro",
        tags: ["Apparel", "Store Redesign", "Product Discovery"],
        description: "A women's fashion brand rebuilt its store around mobile shopping and easier product discovery. Conversion rate rose 82% and average order value 31%.",
        video: "/images/Case%20studies/evie-lou%20video.mp4",
      },
    ],
  },

  process: {
    heading: "From First Sketch to a Live Store",
    intro:
      "Five stages with your sign-off at each one, the way a Shopify development agency North Carolina brands trust should run a design and build. Most stores are live about six weeks after kickoff.",
    steps: [
      { title: "Scope and Fixed Price", desc: "We review your products, customers and trade accounts, then agree the scope, a fixed price and a launch date in writing." },
      { title: "Wireframes First", desc: "Navigation, page layouts and the path to checkout in plain wireframes, so we agree how the store works before how it looks." },
      { title: "Visual Design", desc: "Full Figma designs for desktop and mobile, in your brand. You comment on the screens and we revise until you sign off." },
      { title: "Build and Test", desc: "The same team builds the approved design on a staging store, then tests every page, device, trade account and shipping rule." },
      { title: "Launch and Support", desc: "A planned go-live with a rollback ready, then 60 days of support while we watch the numbers." },
    ],
  },

  compare: {
    heading: "What to Check on Your Shopify Development Agency North Carolina Shortlist",
    intro: "You'll find local studios, freelancers and national partners. Each one suits a different kind of project.",
    options: [
      {
        name: "Design studio plus a separate developer",
        goodFor: "A strong brand look from a specialist designer.",
        watchFor: "Two firms means a handover. Ask who is responsible when the build doesn't match the design.",
      },
      {
        name: "Freelance Shopify developer",
        goodFor: "Small fixes and single features.",
        watchFor: "Design, trade accounts and migration rarely sit with one person, and launches slip when they're busy.",
      },
      {
        name: "Large national partner",
        goodFor: "Very large programs with big budgets.",
        watchFor: "Check their minimum project size and who designs and builds your store day to day.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Design and development by one in-house team",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the designs, the code and every account",
      ],
    },
  },

  industries: {
    heading: "North Carolina Categories We Design Stores For",
    intro:
      "From furniture to food, each category needs something different from its store. Here is what a Shopify development agency North Carolina makers hire should design in for each.",
    items: [
      { icon: "home", name: "Furniture and Home", desc: "Fabric and finish pickers, room-scene images, freight delivery and trade accounts for designers." },
      { icon: "food", name: "Food and Specialty Products", desc: "Gift boxes, subscriptions, cold-chain shipping rules and wholesale for the stores that stock you." },
      { icon: "shirt", name: "Apparel and Textiles", desc: "Size guidance, lookbooks that link to products, and line sheets for stockists." },
      { icon: "star", name: "Health and Beauty", desc: "Regimen bundles, quizzes, ingredient detail and subscriptions for products customers reorder." },
      { icon: "flag", name: "Outdoor and Recreation", desc: "Seasonal collections, fit guides and preorders for the sizes that sell out first." },
      { icon: "box", name: "Wholesale and Distribution", desc: "Account pricing, net terms and quick reorder. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Making something else? We design for every category, always on Shopify.",
  },

  faqHeading: "Shopify Development FAQs for North Carolina Brands",
  faqs: [
    {
      question: "Do you handle Shopify design for North Carolina brands too?",
      answer:
        "Yes. Design and development happen in the same in-house team: we design every page in Figma, you approve it, and the same people build it. If you already have designs, we can build them exactly as they are.",
      unique: true,
    },
    {
      question: "What does a Shopify development agency North Carolina brands hire cost?",
      answer:
        "It depends on the scope, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours, and that number holds unless you add to the work.",
      unique: false,
    },
    {
      question: "Does my Shopify agency need to be local?",
      answer:
        "No. Design reviews happen on screen whoever you hire, so what matters is the work and how easy the team is to reach. We run projects through online calls, shared Figma files, a staging store and written weekly updates.",
      unique: true,
    },
    {
      question: "Can one store sell to shoppers and to trade buyers?",
      answer:
        "Yes. With Shopify Plus B2B, designers, retailers and stockists log in to their own prices, terms and minimums, while shoppers see your normal store, all from one catalog and one inventory.",
      unique: false,
    },
    {
      question: "Can Shopify handle furniture with lots of fabrics and finishes?",
      answer:
        "Yes, with the right build. We use swatch pickers, configurators and metafields so large option sets stay clear, and set freight and white-glove delivery rules for bigger items.",
      unique: true,
    },
    {
      question: "Can you ship food products safely through Shopify?",
      answer:
        "We set shipping rules by product and destination, limit perishables to days and zones that keep them fresh, and show delivery dates before checkout. Subscriptions and gift boxes work alongside them.",
      unique: true,
    },
    {
      question: "How long does a design and build take?",
      answer:
        "Most stores go live about six weeks after kickoff: wireframes and design first, then build and testing. Large catalogs and B2B work take longer. You get the launch date in writing before we start.",
      unique: false,
    },
    {
      question: "Do you set up North Carolina sales tax in Shopify?",
      answer:
        "Yes. We configure Shopify Tax so each order carries the right state and county rate for its delivery address, and store exemption certificates for trade buyers. Out-of-state sellers collect once their North Carolina sales pass $100,000 a year.",
      unique: true,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for an online call with a senior Shopify specialist. Show us your store and your products, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your store, your range and your trade accounts",
      "Get a fixed price and a launch date within 48 hours",
      "See what needs custom design or code and what Shopify already does",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "high-point-market",
      claim: "High Point Market is the largest home furnishings trade show in the world, held twice a year, with buyers from more than 100 countries",
      url: "https://www.wunc.org/post/nc-furniture-shines-high-point-market",
      publisher: "WUNC",
      captured: "2026-11-11",
      reviewAfterDays: 365,
    },
    {
      id: "nc-sweet-potato",
      claim: "North Carolina has been the top US sweet potato producer every year since 1971 (USDA NASS)",
      url: "https://carolinademography.cpc.unc.edu/2021/11/17/north-carolina-leading-sweet-potato-production-for-50-years/",
      publisher: "Carolina Demography, UNC (USDA NASS data)",
      captured: "2026-11-11",
      reviewAfterDays: 365,
    },
    {
      id: "ncdor-rates",
      claim: "NC state rate 4.75% plus county rates; combined 6.75% to 8.25% (Mecklenburg 8.25% from July 1, 2026)",
      url: "https://www.ncdor.gov/taxes-forms/sales-and-use-tax/sales-and-use-tax-rates/current-sales-and-use-tax-rates",
      publisher: "North Carolina Department of Revenue",
      captured: "2026-11-11",
      reviewAfterDays: 180,
    },
    {
      id: "nc-remote-seller",
      claim: "North Carolina remote sellers collect once gross sales into NC exceed $100,000",
      url: "https://sovos.com/blog/sut/what-is-the-sales-tax-nexus-in-north-carolina/",
      publisher: "Sovos",
      captured: "2026-11-11",
      reviewAfterDays: 180,
    },
  ],
  wordCountTarget: [1600, 2800],
};
