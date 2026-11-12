// Geo v5 S2, page 12 of 18: Vermont (state), service format.
//
// Keywords (v5 plan 3.2; SERP checked 2026-11-11: Ahrefs shows the Vermont
// SERP is weak and partly off-topic, with Seattle and Portland pages ranking):
//   primary    shopify developer vermont (30, KD 0)
//   secondary  shopify experts vermont (30): FAQ heading. SERP check passed
//              (agencies, LinkedIn, no Shopify directory)
//              shopify support vermont (30): support service + FAQ. Its SERP
//              is mostly people looking for Shopify's own customer service,
//              so the FAQ says plainly what Shopify Support covers and what a
//              developer covers. We never present ourselves as Shopify.
//   variants   shopify help vermont
// No app development terms (Vermont app page comes later). H1 owner pick #1.
// Angle: Vermont makers who want one team to build the store and keep it
// running.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_VERMONT: ServiceGeoPage = {
  type: "service",
  slug: "vermont",
  path: "/services/shopify-development-agency/vermont",
  hub: "/services/shopify-development-agency",
  geo: { name: "Vermont", type: "state", areaServed: "Vermont" },

  targetKeyword: "shopify developer vermont",
  secondaryKeywords: ["shopify experts vermont", "shopify support vermont"],
  faqKeywords: ["shopify help vermont"],
  metaTitle: "Shopify Developer Vermont | Build, Support and Grow Your Store",
  metaDescription:
    "The Shopify developer Vermont makers hire to build the store and keep it running: custom builds, ongoing support, subscriptions and gifting, at a fixed price.",
  shortTitle: "Shopify Developer Vermont",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Developer for Vermont Brands",
    h1Lead: "",
    h1Gradient: "Shopify Developer",
    h1Tail: "Vermont Makers Hire to Build the Store and Keep It Running",
    intro:
      "You make the product. You shouldn't also have to be the person who fixes the store at midnight. We're the Shopify developer Vermont makers hire to build a store that sells and then keep looking after it: [link:/services/shopify-theme-development|custom themes], gifting and subscriptions, [link:/services/migration|migrations] and ongoing support, at a fixed price agreed before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-vermont-hero-v1.webp",
      alt: "Shopify stores for Candy Kittens, Ronaldo Jewelry and Wild, with total sales up 250% and conversion up 182%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify developer Vermont makers and food brands hire to build the store and keep it running: custom themes, gifting and subscriptions, platform migrations and ongoing support from the same team. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before work starts.",

  trust: {
    heading: "Makers and Brands That Trust Us With Their Store",
    subheading: "Every store was built in-house, and many are still looked after by the same team that built them.",
  },

  pains: {
    heading: "What Wears Down a Small Brand's Store",
    intro:
      "Most makers didn't start a business to manage a website. These are the four problems any Shopify developer Vermont brands hire should take off your plate first.",
    items: [
      {
        icon: "alert",
        name: "Nobody to Call When Something Breaks",
        desc: "An app update breaks checkout, or a page stops loading, and the freelancer who built the store has moved on. You lose a weekend and a week of orders figuring it out.",
        cost: "Lost sales while the store is broken, and hours you should have spent on the product.",
      },
      {
        icon: "store",
        name: "A Store That Doesn't Tell Your Story",
        desc: "Your product is made by hand, in small batches, by people who care. A stock theme makes it look like every other listing on a marketplace.",
        cost: "Shoppers compare you on price, because the store doesn't show why you're worth more.",
      },
      {
        icon: "calendar",
        name: "Holiday Gifting Is Half Your Year",
        desc: "Gift boxes, gift messages, ship-to-someone-else and holiday deadlines, all handled with workarounds that strain every December.",
        cost: "Your busiest weeks are also the ones most likely to go wrong.",
      },
      {
        icon: "clock",
        name: "Customers Who Should Reorder but Don't",
        desc: "People love the product, finish it and forget to come back. With no subscription or reminder, every repeat sale depends on their memory.",
        cost: "Repeat revenue that should be steady is left to chance.",
      },
    ],
  },

  services: {
    label: "Development and Support",
    heading: "Shopify Development and Ongoing Help From One Team",
    intro:
      "The people who build your store are the people who support it afterwards, and they work only on Shopify. When you're ready for more traffic, we can also run [link:/services/shopify-seo-agency|Shopify SEO] and [link:/services/shopify-cro-agency|conversion rate optimization].",
    // Visual rows (owner, 2026-11-12): 8 services merged to 6, each with a
    // case study the page's own case-studies section doesn't use.
    items: [
      {
        title: "Custom Store Design and Build",
        heading: "Your story and photography first, then a theme your team updates itself",
        body: "A store designed around your products and the people who make them, built as a custom theme you can change without calling anyone.",
        covers: ["Brand story pages", "Product photography", "Custom theme", "Editable sections", "Mobile design"],
        caseSlug: "chlobo-shopify-plus-migration",
        imageAlt: "ChloBo handmade jewelry store with a custom design",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Shopify Support for Vermont Brands",
        heading: "Fixes, app updates and seasonal changes from people who know your store",
        body: "A monthly retainer after launch for new pages, app updates and holiday changes, handled by the team that built it.",
        covers: ["Monthly retainer", "App updates", "Seasonal changes", "New pages", "Bug fixes"],
        caseSlug: "neom-wellbeing-shopify-upgrade",
        imageAlt: "NEOM Wellbeing store maintained on a monthly retainer",
        cta: { label: "Explore maintenance and support", href: "/services/shopify-maintenance-and-support" },
      },
      {
        title: "Gifting and Holiday Setup",
        heading: "Gift boxes and cut-off dates ready before the holiday rush starts",
        body: "Gift messages, ship-to-multiple-addresses and holiday delivery deadlines shown on the product page, set up weeks ahead.",
        covers: ["Gift boxes", "Gift messages", "Multiple addresses", "Holiday cut-offs", "Gift guides"],
        caseSlug: "111skin-shopify-cro-redesign",
        imageAlt: "111SKIN Shopify storefront",
      },
      {
        title: "Subscriptions and Reorders",
        heading: "The products customers use up, reordered without a nudge from you",
        body: "Subscribe-and-save and reorder reminders, with a portal where customers skip, swap or pause on their own.",
        covers: ["Subscribe and save", "Reorder reminders", "Customer portal", "Skip or pause", "Gift subscriptions"],
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        imageAlt: "Happy Mammoth store with subscription ordering",
      },
      {
        title: "Migration and Wholesale",
        heading: "Off Etsy or Squarespace, with co-op and shop accounts in the same store",
        body: "Products, customers, orders and reviews come across with every URL redirected, and trade pricing for the stores that carry you is built in.",
        covers: ["Etsy", "Squarespace", "Wix", "Trade pricing", "301 redirects"],
        caseSlug: "mouldings-one-shopify-b2b-portal",
        imageAlt: "Mouldings One store with trade accounts beside retail",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Speed and Shopify Plus",
        heading: "Fast on a phone now, and ready for Plus when your volume says so",
        body: "Unused app scripts removed and images compressed, with checkout extensions and B2B added only once Plus earns its place.",
        covers: ["Speed fixes", "Image compression", "App cleanup", "Shopify Plus", "Checkout extensions"],
        caseSlug: "chillys-headless-commerce-layer",
        imageAlt: "Chilly's store rebuilt to load 42% faster",
        cta: { label: "Explore speed optimization", href: "/services/shopify-speed-optimization" },
      },
    ],
  },

  local: {
    label: "Selling from Vermont",
    heading: "What Selling from Vermont Means for Your Store",
    intro:
      "Three things about Vermont change how your store should be built: the value of the Vermont name, the products the state is known for, and Vermont's tax rules.",
    items: [
      {
        icon: "star",
        name: "The Vermont Name Sells",
        desc: "A 2026 University of Vermont study found that origin was by far the most important factor for maple syrup buyers, ahead of price, and that they would pay a large premium for Vermont-made syrup. If your product is Vermont-made, the store should say so clearly and prove it.",
      },
      {
        icon: "food",
        name: "A Maker State",
        desc: "Vermont produces about 53% of all US maple syrup, according to USDA data for 2026, and it's known for cheese, specialty food and crafts made in small batches. Those products sell on story, gifting and repeat orders, so the store has to handle all three.",
      },
      {
        icon: "receipt",
        name: "Vermont Sales Tax, Set Up Right",
        desc: "Vermont's state rate is 6%, and towns with a local option tax, Burlington among them, add 1%. Out-of-state sellers must collect once they pass $100,000 of Vermont sales or 200 Vermont orders a year. We set up Shopify Tax for each address, and your accountant handles registration and filing.",
      },
    ],
  },

  caseStudies: {
    heading: "Small-Batch and Gift Brands With Results",
    intro:
      "Proof to ask of any Shopify developer Vermont brands consider: each brand here sells on story, gifting or repeat orders, and each result was measured.",
    items: [
      {
        slug: "candy-kittens-shopify-food-beverage-cro",
        tags: ["Food Gifting", "Shopify Plus", "Seasonal Campaigns"],
        description: "A confectionery brand rebuilt its store around gifting and seasonal campaigns. Conversion rate rose 182% and average order value 34%.",
        video: "/images/Case%20studies/Candy%20Kittens%20video.mp4",
      },
      {
        slug: "ronaldo-jewelry-shopify-plus-redesign",
        tags: ["Handcrafted", "Product Configurator", "Shopify Plus"],
        description: "A handcrafted jewelry brand rebuilt its store with a custom piece configurator and trust signals for high-value orders. Total sales rose 250%.",
        video: "/images/Case%20studies/Ronaldo%20Jewelry-video.mp4",
      },
      {
        slug: "wild-shopify-plus-subscriptions",
        tags: ["Personal Care", "First Store", "Subscriptions"],
        description: "A small personal care brand launched its first Shopify store and a subscription program from zero, reaching 80,000+ monthly subscribers.",
        video: "/images/Case%20studies/WeareWild%20video.mp4",
      },
    ],
  },

  process: {
    heading: "From First Call to a Store You Don't Have to Babysit",
    intro:
      "Five stages with your sign-off at each one, the way a Shopify developer Vermont makers trust should work. Most stores are live about six weeks after kickoff.",
    steps: [
      { title: "Scope and Fixed Price", desc: "We look at your products, your busy seasons and what keeps going wrong, then fix the scope, the price and the launch date in writing." },
      { title: "Design Your Store", desc: "Figma designs for desktop and mobile, built around your story and photography. You approve every screen." },
      { title: "Build and Move Your Data", desc: "The theme, gifting, subscriptions and apps built on a staging store, with your products, customers and reviews brought across." },
      { title: "Test Every Order Path", desc: "Gift orders, subscriptions, discounts, shipping and tax tested on every device before launch." },
      { title: "Launch and Stay On", desc: "A planned go-live, 60 days of support, then the same team on a monthly retainer if you'd like us to keep looking after the store." },
    ],
  },

  compare: {
    heading: "What to Check on Your Shopify Developer Vermont Shortlist",
    intro: "You'll find local studios, freelancers and remote agencies. Here is what each one suits, and what to ask before you sign.",
    options: [
      {
        name: "Local web design studio",
        goodFor: "Brand work and the option to meet in person.",
        watchFor: "Ask who supports the store after launch, and how fast they respond when something breaks.",
      },
      {
        name: "Freelance Shopify developer",
        goodFor: "Small fixes and single features.",
        watchFor: "If they're busy or move on, you're left without anyone who knows how your store was built.",
      },
      {
        name: "Do it yourself with apps",
        goodFor: "Very early stores on a tight budget.",
        watchFor: "Each app adds a monthly fee and some load time, and they don't always work well together.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "The team that builds your store supports it after launch",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Vermont Categories We Build Stores For",
    intro:
      "Small-batch products sell on story, gifting and repeat orders. Here is what a Shopify developer Vermont makers hire should build in for each category.",
    items: [
      { icon: "food", name: "Maple and Specialty Food", desc: "Gift boxes, subscriptions, sizes and grades explained clearly, and shipping rules for glass and liquids." },
      { icon: "home", name: "Cheese and Perishables", desc: "Cold-chain shipping days, delivery dates by ZIP code and holiday cut-offs shown before checkout." },
      { icon: "star", name: "Body Care and Wellness", desc: "Ingredient detail, bundles and subscriptions for the products customers reorder." },
      { icon: "cart", name: "Crafts and Handmade Goods", desc: "Maker stories, made-to-order options and personalization previews." },
      { icon: "flag", name: "Outdoor and Snow Gear", desc: "Seasonal collections, size guides and preorders for the items that sell out first." },
      { icon: "box", name: "Wholesale to Stores and Co-ops", desc: "Trade pricing and reorders for shops that carry you. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Making something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Developer FAQs for Vermont Brands",
  faqs: [
    {
      question: "Is this Shopify support for Vermont, or Shopify's own customer service?",
      answer:
        "We're an independent Shopify agency, not Shopify. For your account, billing or plan, contact Shopify Support through the Shopify Help Center, available around the clock. For your store itself (the theme, apps, broken pages, new features), that's what a developer like us handles.",
      unique: true,
    },
    {
      question: "Are you Shopify experts for Vermont brands?",
      answer:
        "Yes. We work only on Shopify and Shopify Plus and have built 150+ stores, so every Shopify expert on your project knows the platform in depth, from theme code to subscriptions and checkout.",
      unique: true,
    },
    {
      question: "Where can Vermont makers get Shopify help after launch?",
      answer:
        "From us, if you'd like. Every build includes 60 days of support, then an optional monthly retainer for fixes, app updates, new pages and seasonal changes, handled by the team that built the store.",
      unique: true,
    },
    {
      question: "How much does a Shopify developer cost?",
      answer:
        "It depends on the scope, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours, and that number holds unless you add to the work.",
      unique: false,
    },
    {
      question: "Does my Shopify developer need to be local?",
      answer:
        "No. We run every project through online calls, a staging store you can test yourself and written weekly updates, with the scope, price and launch date agreed in writing first.",
      unique: true,
    },
    {
      question: "Can you move my store from Etsy or Squarespace?",
      answer:
        "Yes. We bring over products, customers, orders and reviews where the platform allows, redirect old URLs, and set up the parts Etsy or Squarespace never handled for you, like subscriptions and gifting.",
      unique: true,
    },
    {
      question: "Can Shopify handle holiday gifting?",
      answer:
        "Yes. We set up gift boxes, gift messages, ship-to-someone-else and multiple addresses, with holiday cut-off dates shown on the product page so customers order in time.",
      unique: true,
    },
    {
      question: "Do you set up Vermont sales tax in Shopify?",
      answer:
        "Yes. We configure Shopify Tax so each order carries the right rate: 6% statewide, or 7% in local option towns. Out-of-state sellers must collect once they pass $100,000 of Vermont sales or 200 Vermont orders a year.",
      unique: true,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for an online call with a senior Shopify specialist. Tell us about your products and what keeps going wrong, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your store, your busy seasons and what needs fixing",
      "Get a fixed price and a launch date within 48 hours",
      "Find out what ongoing support would cover for your store",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "uvm-origin",
      claim: "2026 University of Vermont study: product origin was the most important attribute for maple syrup buyers (77% relative importance vs 11.6% for price), with a large willingness-to-pay premium for Vermont-made syrup",
      url: "https://scholarworks.uvm.edu/items/22888fe7-ccb9-49c3-b4c5-db90ed6c959e",
      publisher: "University of Vermont ScholarWorks",
      captured: "2026-11-11",
      reviewAfterDays: 365,
    },
    {
      id: "vt-maple",
      claim: "Vermont produced 3.091 million of 5.877 million US gallons of maple syrup in 2026, about 53% (USDA NASS)",
      url: "https://vermontmaple.org/sites/default/files/2026-06/VMSMA%202026%20USDA%20Maple%20Crop%20Data%20_Press%20Release_June%202026.pdf",
      publisher: "Vermont Maple Sugar Makers' Association (USDA data)",
      captured: "2026-11-11",
      reviewAfterDays: 365,
    },
    {
      id: "vt-tax",
      claim: "Vermont state sales tax 6%; local option towns add 1% (e.g. Burlington 7%)",
      url: "https://stripe.com/us/resources/more/vermont-sales-tax-rate",
      publisher: "Stripe (Vermont Department of Taxes rates)",
      captured: "2026-11-11",
      reviewAfterDays: 180,
    },
    {
      id: "vt-nexus",
      claim: "Vermont remote sellers collect at $100,000 in sales or 200 transactions in the preceding 12 months",
      url: "https://www.avalara.com/us/en/learn/nexus/state/vermont.html",
      publisher: "Avalara (Vermont Department of Taxes)",
      captured: "2026-11-11",
      reviewAfterDays: 180,
    },
  ],
  wordCountTarget: [1600, 2800],
};
