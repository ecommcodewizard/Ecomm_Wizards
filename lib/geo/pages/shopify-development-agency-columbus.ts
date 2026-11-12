// Geo v5 S2, page 4 of 18: Columbus (Ohio), service format.
//
// Keywords (v5 plan 3.2; SERP checked 2026-11-10: SEMrush KD 2%, every local
// ranking page has 0 backlinks; Electric Eye, 862 RDs, is the strong local):
//   primary    shopify development columbus (50 / 60)
//   secondary  shopify experts columbus oh (30): FAQ heading. SERP check
//              passed (no Jobs, no Shopify directory; map-heavy AI Overview)
//              shopify ecommerce development columbus oh (30): build service
//   variants   shopify developers columbus, columbus shopify developers,
//              shopify developer columbus oh, shopify columbus
// Angle: launch, test and scale (Columbus is the US retail test market).
// No other Columbus page exists, so no cannibalisation.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_COLUMBUS: ServiceGeoPage = {
  type: "service",
  slug: "columbus",
  path: "/services/shopify-development-agency/columbus",
  hub: "/services/shopify-development-agency",
  geo: { name: "Columbus", type: "metro", areaServed: "Columbus, Ohio" },

  targetKeyword: "shopify development columbus",
  secondaryKeywords: ["shopify experts columbus oh", "shopify ecommerce development columbus oh"],
  faqKeywords: ["shopify developers columbus", "columbus shopify developers", "shopify developer columbus oh", "shopify columbus"],
  metaTitle: "Shopify Development Columbus | Launch, Test and Scale on Shopify",
  metaDescription:
    "Shopify development Columbus brands hire to launch, test and scale: custom themes, Shopify Plus, migrations and testing-ready builds. Fixed price, live in ~6 weeks.",
  shortTitle: "Shopify Development Columbus",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Development for Columbus Brands",
    h1Lead: "",
    h1Gradient: "Shopify Development",
    h1Tail: "Columbus Brands Hire to Launch, Test and Scale",
    intro:
      "A launch only teaches you something if the store can measure it. We deliver the Shopify development Columbus brands hire to ship new products fast, test what sells and grow what works: [link:/services/shopify-theme-development|custom themes], [link:/services/shopify-plus-development|Shopify Plus], [link:/services/migration|platform migrations] and pages built for A/B testing. Your price and launch date are fixed in writing before any code is written.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-columbus-hero-v1.webp",
      alt: "Shopify stores we built for Twillory, VITHIT and 111SKIN, with a 70% A/B test win rate and a 170% conversion lift",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify-only agency providing Shopify development Columbus brands can hire to launch, test and scale: custom themes, Shopify Plus builds, platform migrations and store design ready for A/B testing. Every project has a fixed price and a launch date in writing, and most stores go live in about six weeks.",

  trust: {
    heading: "Brands That Trust Us to Launch Their Stores",
    subheading: "Every launch was scoped, built and tested in-house by our own Shopify developers, with nothing outsourced.",
  },

  pains: {
    heading: "Why New Launches Stall on Your Current Store",
    intro:
      "If launching a product means a week of theme edits, or you can't tell which version of a page sold more, the store is slowing the business down. These are the four problems any Shopify development Columbus brands hire should fix before the next launch.",
    items: [
      {
        icon: "clock",
        name: "Every Launch Waits on a Developer",
        desc: "New collections, landing pages and promotions need code changes because the theme was never built with flexible sections. By the time the page is live, the moment has passed.",
        cost: "Launches slip by days, and paid traffic lands on pages that weren't ready.",
      },
      {
        icon: "chart",
        name: "No Way to Test What Actually Sells",
        desc: "Changing a headline, an offer or a bundle means editing the live theme and hoping. Without A/B testing set up properly, every decision is a guess, and the guesses never get checked.",
        cost: "You keep spending on changes you can't prove worked.",
      },
      {
        icon: "layers",
        name: "A Theme That Breaks Under New Products",
        desc: "Each new line adds variants, filters and options the theme wasn't designed for. Workarounds pile up until a simple product update breaks a page somewhere else.",
        cost: "Every new product costs more to launch than the last one.",
      },
      {
        icon: "alert",
        name: "Outgrowing Your Platform Mid-Growth",
        desc: "WooCommerce, Magento or an early Shopify build that worked at launch starts to fight you at scale: slow pages, fragile apps and a checkout you can't change.",
        cost: "Growth stalls at exactly the point it should speed up.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Services for Launching and Growing",
    intro:
      "Every piece of Shopify development Columbus brands hire us for is delivered in-house by developers who work only on Shopify. Once your store is live, we can also run [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO] to grow it.",
    // Visual rows (owner, 2026-11-12): 8 services merged to 6, each with a
    // case study the page's own case-studies section doesn't use.
    items: [
      {
        title: "Shopify Ecommerce Development, Start to Finish",
        heading: "Setup, design, apps and tax, launched on a date you agree before work starts",
        body: "Shopify ecommerce development for Columbus brands that need a store built or rebuilt end to end, under one fixed price.",
        covers: ["Store setup", "Design", "Payments", "Shipping and tax", "Launch plan"],
        caseSlug: "neom-wellbeing-shopify-upgrade",
        imageAlt: "NEOM Wellbeing store built and launched end to end",
        cta: { label: "Explore store development", href: "/services/shopify-store-development" },
      },
      {
        title: "Custom Theme and Testing-Ready Design",
        heading: "Sections your team edits and layouts you can A/B test from day one",
        body: "A theme built from flexible sections and metafields, with tracking in place so headlines, offers and bundles can be tested cleanly.",
        covers: ["Custom sections", "Metafields", "Test-ready layouts", "Tracking setup", "Landing pages"],
        caseSlug: "loop-earplugs-shopify-landing-page-cro",
        imageAlt: "Loop Earplugs landing pages built for A/B testing",
        cta: { label: "Explore A/B testing", href: "/services/a-b-testing" },
      },
      {
        title: "Shopify Plus Development",
        heading: "Plus when your volume calls for it, and a straight answer when it doesn't",
        body: "Checkout extensions, Shopify Functions, multiple storefronts and Flow automation, scoped to the orders you actually take.",
        covers: ["Checkout extensions", "Shopify Functions", "Expansion stores", "Shopify Flow", "Plus audit"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy jewelry store running on Shopify Plus",
        cta: { label: "Explore Shopify Plus", href: "/services/shopify-plus-development" },
      },
      {
        title: "Platform Migration",
        heading: "Your rankings, reviews and customer logins follow you to Shopify",
        body: "Products, customers, orders and reviews move from WooCommerce, Magento, BigCommerce or Salesforce, with every old URL redirected.",
        covers: ["WooCommerce", "Magento", "Salesforce", "Review import", "301 redirects"],
        caseSlug: "this-works-shopify-plus-migration",
        imageAlt: "This Works store migrated to Shopify Plus with its reviews intact",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Product Launch Pages",
        heading: "Preorders and drops that stay up when the launch email goes out",
        body: "Waitlists, countdowns and limited releases built and load-tested before the traffic arrives all at once.",
        covers: ["Preorders", "Waitlists", "Countdowns", "Limited drops", "Load testing"],
        caseSlug: "sneak-energy-shopify-redesign",
        imageAlt: "Sneak Energy launch pages with a custom bundle builder",
        cta: { label: "Explore landing pages", href: "/services/shopify-landing-page-design" },
      },
      {
        title: "Apps, Integrations and Support",
        heading: "Your ERP, 3PL and email tools talking to Shopify, with us on call after launch",
        body: "We connect the systems you run on, build a custom app when nothing off the shelf fits, and stay on with 60 days of support.",
        covers: ["ERP", "3PL", "Reviews", "Custom apps", "60-day support"],
        caseSlug: "henchman-shopify-plus-b2b",
        imageAlt: "Henchman store connected to its ERP for wholesale orders",
        cta: { label: "Explore integrations", href: "/services/shopify-integration-services" },
      },
    ],
  },

  local: {
    label: "Selling from Columbus",
    heading: "What Selling from Columbus Means for Your Store",
    intro:
      "Three things about Columbus change how your store should be built: who your shoppers compare you with, how far you can ship in a day, and Ohio's sales tax rules.",
    items: [
      {
        icon: "chart",
        name: "Built for a Test Market",
        desc: "Columbus is known as the country's retail test market, and it's home to the headquarters of Abercrombie & Fitch, Bath & Body Works, Victoria's Secret and Express. If they test new ideas on Columbus shoppers, you can test yours with the same discipline. We build your store so every launch can be split-tested and measured.",
      },
      {
        icon: "truck",
        name: "A One-Day Drive to 45% of the Country",
        desc: "One Columbus says the region reaches 45% of the US population and manufacturing base within a one-day drive. If you ship from the region, that is a delivery promise worth showing on the product page, with dates by ZIP code and local pickup where you offer it.",
      },
      {
        icon: "receipt",
        name: "Ohio Sales Tax, Set Up Right",
        desc: "Columbus has collected 8% combined sales tax since Franklin County's rate rose on April 1, 2025. Selling into Ohio from another state? You must collect once you pass $100,000 in Ohio sales or 200 Ohio orders in a year, so a small store can cross the line on order count alone. We set up Shopify Tax for whichever applies, and your accountant handles registration and filing.",
      },
    ],
  },

  caseStudies: {
    heading: "Launches and Tests With Numbers Behind Them",
    intro:
      "Proof is the fair test for any Shopify development Columbus brands consider: each project here changed how a brand launches or tests, and each result was measured.",
    items: [
      {
        slug: "twillory-shopify-cro",
        tags: ["Apparel", "A/B Testing", "Theme Development"],
        description: "A men's shirt brand A/B tested every part of its store and kept only the winners: a 70% test win rate and $5.4M in new annual revenue.",
        video: "/images/Case%20studies/Twillory%20video.mp4",
      },
      {
        slug: "111skin-shopify-cro-redesign",
        tags: ["Beauty", "Skin Quiz", "Custom Theme"],
        description: "A luxury skincare brand added a skin quiz and a custom theme on a data-led roadmap. Conversion rate rose 46% and revenue 21%.",
        video: "/images/Case%20studies/111skin%20video.mp4",
      },
      {
        slug: "vithit-shopify-plus-d2c",
        tags: ["Drinks", "Shopify Plus", "D2C Launch"],
        description: "A functional drinks brand built its direct-to-consumer store on Shopify Plus with automated bundling. Conversion rate rose 170% and revenue 115% year on year.",
        video: "/images/Case%20studies/VITHIT%20video.mp4",
      },
    ],
  },

  process: {
    heading: "From Kickoff to Your First Launch",
    intro:
      "Five steps with your sign-off at each one, in the order any Shopify development Columbus brands hire should follow. Most stores are live about six weeks after kickoff.",
    steps: [
      { title: "Scope and Launch Date", desc: "We review your store, your product roadmap and what you want to test, then fix the scope, the price and the launch date in writing." },
      { title: "Design for Testing", desc: "Figma designs for desktop and mobile, with the sections you'll want to test built in as variants. You approve every screen." },
      { title: "Build on Staging", desc: "The theme, apps and integrations are built on a staging copy of your store, with analytics and test tracking wired in before launch." },
      { title: "Launch Checks", desc: "Every device, checkout path, tax rule and tracking event checked with real test orders before anything goes live." },
      { title: "Go Live and Start Testing", desc: "A planned launch with a rollback ready, 60 days of support, and the first A/B tests ready to run once traffic arrives." },
    ],
  },

  compare: {
    heading: "Questions to Ask Your Shopify Development Columbus Shortlist",
    intro: "Search results will show you local agencies, national Shopify partners and freelancers. Each one suits a different stage of growth.",
    options: [
      {
        name: "Local full-service marketing agency",
        goodFor: "Brands that want web design, ads and social media under one roof.",
        watchFor: "Shopify may be one service among many. Ask how many Shopify Plus builds and migrations they have launched.",
      },
      {
        name: "National Shopify partner",
        goodFor: "Large builds with a big team behind them.",
        watchFor: "Check their minimum project size, and who looks after your store once it launches.",
      },
      {
        name: "Freelance Shopify developer",
        goodFor: "Small fixes and one-off features.",
        watchFor: "Testing setups, migrations and integrations usually need more than one person, and timelines move when they're busy.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Stores built to launch and test, not just to look good",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Launch on Shopify",
    intro:
      "Columbus is home to some of the biggest fashion and retail headquarters in the country, and those categories launch differently. Here is what changes in the build for each, and what any Shopify development Columbus brands hire should plan for.",
    items: [
      { icon: "shirt", name: "Fashion and Apparel", desc: "Drop-based collections, size and fit guidance, lookbooks that link to products, and pre-orders for new lines." },
      { icon: "star", name: "Beauty and Personal Care", desc: "Shade and skin-type finders, regimen bundles, samples, and subscriptions for products customers reorder." },
      { icon: "food", name: "Food and Beverage", desc: "Subscriptions, bundles and gift boxes, plus shipping rules for perishables and local delivery." },
      { icon: "home", name: "Home and Lifestyle", desc: "Large option sets, swatches, room-scene images and freight shipping for bigger items." },
      { icon: "paw", name: "Pet", desc: "Auto-ship, size-by-breed guidance and bundles that bring customers back on schedule." },
      { icon: "box", name: "B2B and Wholesale", desc: "Trade pricing, net terms and quick reorder alongside retail. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Launching something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Development FAQs for Columbus Brands",
  faqs: [
    {
      question: "Do Columbus brands need a Shopify developer nearby?",
      answer:
        "No. The work happens on screens either way, so what matters is Shopify depth and fast replies. We run every project through online calls, a staging store you can test yourself, and written weekly updates.",
      unique: true,
    },
    {
      question: "Are you Shopify experts for Columbus, OH brands?",
      answer:
        "Yes. We work only on Shopify and Shopify Plus and have launched 150+ stores, so the people on your project know the platform in depth, from theme code to checkout extensions.",
      unique: true,
    },
    {
      question: "How is Shopify development priced?",
      answer:
        "By project, not by the hour. After a short online call we send a written scope with one fixed price and a launch date within 48 hours, and that number only changes if you add to the work.",
      unique: true,
    },
    {
      question: "Can you set up A/B testing on our Shopify store?",
      answer:
        "Yes. We build pages so headlines, offers, bundles and layouts can be split-tested cleanly, connect the testing tool you prefer, and make sure every test tracks the right conversion events before it runs.",
      unique: true,
    },
    {
      question: "How long does a Shopify launch take?",
      answer:
        "Most stores go live about six weeks after kickoff. A theme rebuild takes four to six weeks and a Shopify Plus or migration project six to ten. Once the store runs on a flexible theme, a new landing page can ship within days.",
      unique: false,
    },
    {
      question: "Can you migrate us from WooCommerce or Magento?",
      answer:
        "Yes. Products, customers, orders and reviews come across, every old URL gets a 301 redirect, and we check Search Console for 30 days after launch so your rankings follow you to Shopify.",
      unique: false,
    },
    {
      question: "Do you handle Ohio sales tax setup?",
      answer:
        "Yes. We configure Shopify Tax so each order carries the right Ohio rate, including Columbus's 8% combined rate. Out-of-state sellers must collect once they pass $100,000 in Ohio sales or 200 Ohio orders a year. We set up the store side; your accountant handles registration and filing.",
      unique: true,
    },
    {
      question: "Is Shopify Plus worth it for a growing brand?",
      answer:
        "Only when the features pay for themselves: checkout customization, B2B, multiple storefronts or automation at volume. We'll tell you on the scoping call if standard Shopify still fits, and plan the build so moving to Plus later is simple.",
      unique: true,
    },
  ],

  book: {
    heading: "Book a Free Shopify Launch Call",
    sub: "Choose a time for an online call with a senior Shopify specialist. Tell us what you're launching and what you want to test, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Talk through your launch, your catalog and what you want to test",
      "Get a fixed price and a launch date within 48 hours",
      "Find out what Shopify handles natively and what needs custom work",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "franklin-8pct",
      claim: "Franklin County sales tax rose 0.5% on April 1, 2025, putting most of Columbus at 8% combined",
      url: "https://abc6onyourside.com/newsletter-daily/franklin-county-sales-tax-increases-8-starting-april-1-tuesday-linkus-development-rapid-transit-transportation-modernization",
      publisher: "ABC6 (WSYX)",
      captured: "2026-11-10",
      reviewAfterDays: 180,
    },
    {
      id: "ohio-nexus",
      claim: "Ohio remote seller nexus: more than $100,000 in gross receipts or 200+ separate transactions in the current or preceding calendar year",
      url: "https://www.avalara.com/us/en/blog/ohio-to-enforce-economic-nexus-august-2019.html",
      publisher: "Avalara (Ohio H.B. 166)",
      captured: "2026-11-10",
      reviewAfterDays: 180,
    },
    {
      id: "onecolumbus-reach",
      claim: "45% of the US population and manufacturing base within a one-day drive of the Columbus Region",
      url: "https://columbusregion.com/?p=38436",
      publisher: "One Columbus",
      captured: "2026-11-10",
      reviewAfterDays: 365,
    },
    {
      id: "onecolumbus-retail",
      claim: "Columbus is the nation's retail test market; headquarters of Abercrombie & Fitch, Bath & Body Works, Victoria's Secret and Express",
      url: "https://columbusregion.com/industries/retail-brands/",
      publisher: "One Columbus",
      captured: "2026-11-10",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
