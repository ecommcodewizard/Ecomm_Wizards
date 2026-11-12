// Geo v5 S2, page 13 of 18: Portland (Oregon), service format.
//
// Keywords (v5 plan 3.2; SEMrush 2026-11-12: 40/mo, KD 5%, Commercial;
// Ahrefs: every ranking page 0 referring domains except Solver Collective):
//   primary    shopify agency portland (40-50)
//   secondary  shopify development portland (30): build-scope service
//   variants   portland shopify agency
// "shopify portland" excluded (plan: Shopify-office intent). One result is
// Portland, Maine (First Pier); this page is Portland, Oregon throughout.
// H1 owner pick #2 ("stores that perform like their products"). Angle:
// athletic, outdoor, footwear and apparel brands.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_PORTLAND: ServiceGeoPage = {
  type: "service",
  slug: "portland",
  path: "/services/shopify-development-agency/portland",
  hub: "/services/shopify-development-agency",
  geo: { name: "Portland", type: "metro", areaServed: "Portland, Oregon" },

  targetKeyword: "shopify agency portland",
  secondaryKeywords: ["shopify development portland"],
  faqKeywords: ["portland shopify agency"],
  metaTitle: "Shopify Agency Portland | Stores Built for Gear and Apparel",
  metaDescription:
    "The Shopify agency Portland brands hire for stores that perform like their products: fit finders, fast pages, drops and Shopify Plus, at a fixed price.",
  shortTitle: "Shopify Agency Portland",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Portland Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Portland Brands Hire for Stores That Perform Like Their Products",
    intro:
      "You obsess over every seam, sole and stitch. Your store should be built with the same care: fast, clear on fit, and ready for launch day. We're the Shopify agency Portland brands hire for that: [link:/services/shopify-theme-development|custom themes], fit and size finders, product drops, [link:/services/shopify-plus-development|Shopify Plus] and [link:/services/migration|migrations], at a fixed price agreed before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-portland-hero-v1.webp",
      alt: "Shopify stores for Capelli Sports, Feetures and Dryrobe, with online revenue up 89% and add-to-cart up 32%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency Portland brands hire for stores that perform like their products: custom themes, fit and size finders, product drops, Shopify Plus and migrations, with a focus on athletic, outdoor, footwear and apparel brands. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before work starts.",

  trust: {
    heading: "Performance and Lifestyle Brands That Trust Us",
    subheading: "Every store was designed, built and launched in-house by our own Shopify team.",
  },

  pains: {
    heading: "Where Gear and Apparel Stores Lose the Sale",
    intro:
      "Great product doesn't sell itself online if shoppers can't tell whether it fits. These are the four problems any Shopify agency Portland brands hire should fix first.",
    items: [
      {
        icon: "shirt",
        name: "Shoppers Can't Tell What Size to Buy",
        desc: "Sizing varies by style, fit and fabric. Without clear guidance, shoppers order two sizes and send one back, or don't order at all.",
        cost: "Returns eat the margin on the orders you do win.",
      },
      {
        icon: "layers",
        name: "Variants That Swamp the Page",
        desc: "Colorways, widths, lengths and men's and women's fits pile up on one product. A theme built for simple products turns that into a confusing list.",
        cost: "Shoppers miss the version they wanted and leave.",
      },
      {
        icon: "calendar",
        name: "Launch Days That Strain the Store",
        desc: "A new colorway or a limited release brings a rush of traffic in the first hour, and a store built for normal days slows down or oversells.",
        cost: "The launch you planned for months ends in canceled orders and complaints.",
      },
      {
        icon: "clock",
        name: "Heavy Images on Slow Phones",
        desc: "Action photography and product videos make the store heavy. On a phone, outdoors on mobile data, pages crawl.",
        cost: "Your best imagery costs you the sale it was meant to win.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Portland Gear and Apparel Brands",
    intro:
      "Everything is built in-house by people who work only on Shopify. Once the store is live, we can also run [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    // Visual rows (owner, 2026-11-12): 8 services merged to 6, each with a
    // case study the page's own case-studies section doesn't use.
    items: [
      {
        title: "Fit and Size Finders",
        heading: "The right size first time, so fewer boxes come back",
        body: "Finders that ask height, use and preference, then recommend a size, with fit notes on every product.",
        covers: ["Size finders", "Fit notes", "Size charts", "Saved answers", "Return reduction"],
        caseSlug: "loop-earplugs-shopify-landing-page-cro",
        imageAlt: "Loop Earplugs store with a guided fit quiz",
        cta: { label: "Explore CRO", href: "/services/shopify-cro-agency" },
      },
      {
        title: "Custom Themes and Variant Display",
        heading: "Every width, length and colorway on one clear product page",
        body: "A fast custom theme with swatches and men's and women's toggles built from metafields, so options stay accurate as your range changes.",
        covers: ["Swatches", "Gender toggles", "Width options", "Metafields", "Custom theme"],
        caseSlug: "everlast-shopify-plus-sports-redesign",
        imageAlt: "Everlast store with clear variant and colorway display",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Product Drops and Launches",
        heading: "Release-day traffic in the first hour, and the checkout still holds",
        body: "Launch pages, countdowns, stock limits, waitlists and preorders, load-tested before release day.",
        covers: ["Launch pages", "Countdowns", "Stock limits", "Waitlists", "Load testing"],
        caseSlug: "denim-tears-headless-shopify-hydrogen",
        imageAlt: "Denim Tears storefront built for limited drops",
        cta: { label: "Explore landing pages", href: "/services/shopify-landing-page-design" },
      },
      {
        title: "Shopify Plus and Wholesale",
        heading: "Plus for your volume, with accounts for the retailers and outfitters you supply",
        body: "Shopify Plus features and B2B accounts with their own prices and reorders, in the same store as your direct site.",
        covers: ["Shopify Plus", "Retailer accounts", "Price lists", "Quick reorder", "Shared catalog"],
        caseSlug: "saddleback-shopify-plus-b2b",
        imageAlt: "Saddleback wholesale portal on Shopify Plus B2B",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        title: "Platform Migration",
        heading: "Off Salesforce Commerce Cloud or Magento without losing your history",
        body: "Products, customers, orders and reviews come across with every old URL redirected before launch.",
        covers: ["Salesforce", "Magento", "WooCommerce", "Review import", "301 redirects"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy store migrated to Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Speed and Support",
        heading: "Sharp action photography that still loads fast outdoors on a phone",
        body: "Image compression, lazy loading and lighter video, then 60 days of support and an optional retainer for new seasons and drops.",
        covers: ["Image compression", "Lazy loading", "Video tuning", "60-day support", "Season updates"],
        caseSlug: "chillys-headless-commerce-layer",
        imageAlt: "Chilly's store with lighter imagery and 42% faster loads",
        cta: { label: "Explore speed optimization", href: "/services/shopify-speed-optimization" },
      },
    ],
  },

  local: {
    label: "Selling from Portland",
    heading: "What Selling from Portland Means for Your Store",
    intro:
      "Three things about Portland change how your store should be built: the gear and apparel industry around you, the shoppers you compete for, and Oregon's tax position.",
    items: [
      {
        icon: "flag",
        name: "Home of the Athletic and Outdoor Industry",
        desc: "The Portland region is home to Nike, Columbia Sportswear and Adidas North America, and Prosper Portland counts more than 20,000 athletic and outdoor jobs in the metro. Many brands here are started by people who came out of those companies, and shoppers expect the same standard online.",
      },
      {
        icon: "star",
        name: "Shoppers Who Expect Big-Brand Quality",
        desc: "Your customers also shop the biggest sportswear stores in the world. Fast pages, clear sizing and smooth checkout aren't extras for a Portland brand; they're the baseline you're measured against.",
      },
      {
        icon: "receipt",
        name: "No Oregon Sales Tax, But Other States Still Count",
        desc: "Oregon has no general sales tax, so orders delivered in Oregon carry none. Ship to customers in other states, though, and you may owe their sales tax once you cross each state's threshold. We set up Shopify Tax to handle both, and your accountant decides where you register.",
      },
    ],
  },

  caseStudies: {
    heading: "Gear and Apparel Stores With Results",
    intro:
      "Proof to ask of any Shopify agency Portland brands consider: each brand here sells performance or outdoor products, and each result was measured.",
    items: [
      {
        slug: "capelli-sports-shopify-migration",
        tags: ["Sportswear", "Migration", "Integrations"],
        description: "A global sportswear and soccer brand moved to Shopify with zero downtime and a performance-first redesign. Conversion rate rose 24% and site speed 38%.",
        video: "/images/Case%20studies/Capelli%20Sports%20video.mp4",
      },
      {
        slug: "feetures-shopify-theme-development",
        tags: ["Performance Socks", "Custom Theme", "Variant Toggles"],
        description: "A performance sock brand rebuilt its theme with men's and women's toggles and custom collection pages. Add-to-cart rate rose 32%.",
        video: "/images/Case%20studies/Feetures%20video.mp4",
      },
      {
        slug: "dryrobe-shopify-plus-redesign",
        tags: ["Outdoor Apparel", "Size Finder", "Shopify Plus"],
        description: "An outdoor apparel brand added an activity and size finder to a unified Shopify Plus store. Online revenue grew 89% and returns fell 31%.",
        video: "/images/Case%20studies/dryrobe%20video.mp4",
      },
    ],
  },

  process: {
    heading: "From Kickoff to a Store Ready for Launch Day",
    intro:
      "Five stages with your sign-off at each one, the way a Shopify agency Portland brands trust should run a build. Most stores are live about six weeks after kickoff.",
    steps: [
      { title: "Scope Around Your Calendar", desc: "We look at your range, your seasons and your next launch, then fix the scope, the price and a launch date in writing." },
      { title: "Design for Fit and Speed", desc: "Figma designs for desktop and mobile, with sizing, variants and imagery planned in. You approve every screen." },
      { title: "Build and Connect", desc: "Theme, finders, drop pages and integrations built on a staging store, with your catalog and reviews brought across." },
      { title: "Test Under Load", desc: "Drop pages, checkout and stock limits tested with simulated traffic and real test orders on every device." },
      { title: "Launch and Support", desc: "A planned go-live, 60 days of support, and the next season's drops mapped out." },
    ],
  },

  compare: {
    heading: "What to Check on Your Shopify Agency Portland Shortlist",
    intro: "Search results show local agencies, national partners and freelancers. Here is what each one suits, and what to ask before you sign.",
    options: [
      {
        name: "Local brand and creative agency",
        goodFor: "Brand identity, campaigns and creative direction.",
        watchFor: "Ask to see live Shopify builds with size finders and drop pages, not just brand work.",
      },
      {
        name: "Freelance Shopify developer",
        goodFor: "Small fixes and single features.",
        watchFor: "Launch-day load, migrations and wholesale need several skills at once, and timelines slip when one person is busy.",
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
        "Fit finders, drops and Shopify Plus in-house",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Gear and apparel lead the way, but each category needs something different. Here is what a Shopify agency Portland brands hire should build in for each.",
    items: [
      { icon: "shirt", name: "Footwear", desc: "Width and size finders, colorway swatches and drop pages for limited releases." },
      { icon: "flag", name: "Outdoor and Camping Gear", desc: "Specs and comparisons, seasonal collections and preorders for the items that sell out." },
      { icon: "star", name: "Athletic Apparel", desc: "Fit guidance, men's and women's toggles and bundles for kits and sets." },
      { icon: "cart", name: "Bikes and Accessories", desc: "Compatibility checkers, parts lookups and assembly or pickup options." },
      { icon: "food", name: "Craft Food and Drink", desc: "Subscriptions, gift boxes and shipping rules for what each state accepts." },
      { icon: "box", name: "Wholesale to Retailers", desc: "Account pricing and reorders for the shops that stock you. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency FAQs for Portland Brands",
  faqs: [
    {
      question: "What does a Portland Shopify agency cost?",
      answer:
        "It depends on the scope, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours, and that number holds unless you add to the work.",
      unique: false,
    },
    {
      question: "Does our Shopify agency need to be local?",
      answer:
        "No. We run every project through online calls, a staging store you can test yourself and written weekly updates, with the scope, price and launch date agreed in writing first.",
      unique: true,
    },
    {
      question: "Can you build a size or fit finder?",
      answer:
        "Yes. We build finders that ask a few simple questions, recommend a size by style, and save the answer for next time, so shoppers order the right size the first time.",
      unique: true,
    },
    {
      question: "Can Shopify handle a limited-release drop?",
      answer:
        "Yes, if the store is built for it. Shopify's servers carry the traffic; what breaks is usually the theme and apps. We build drop pages with stock limits and waitlists and test them under load before release day.",
      unique: false,
    },
    {
      question: "Do Oregon brands need to charge sales tax?",
      answer:
        "Not on orders delivered in Oregon, since the state has no general sales tax. Orders shipped to other states may owe that state's tax once you pass its threshold. We set up Shopify Tax to handle both; your accountant decides where you register.",
      unique: true,
    },
    {
      question: "Can one store sell direct and to retailers?",
      answer:
        "Yes. Shopify Plus B2B lets retailers and outfitters log in to their own prices, terms and minimums, while consumers see your normal store, from one catalog and one inventory.",
      unique: false,
    },
    {
      question: "Can you move us off Salesforce Commerce Cloud or Magento?",
      answer:
        "Yes. We move products, customers, orders and reviews, redirect every old URL, and watch Search Console for 30 days after launch so your rankings follow you.",
      unique: true,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Most stores go live about six weeks after kickoff. We set the launch date in writing at the start, working back from your next season or drop.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for an online call with a senior Shopify specialist. Tell us about your range and your next launch, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your store, your sizing and your next launch",
      "Get a fixed price and a launch date within 48 hours",
      "Find out what Shopify handles natively and what needs custom work",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "pdx-ao-cluster",
      claim: "Nike, Columbia and Adidas are the foundation firms of Portland's athletic and outdoor cluster; Adidas moved its North America HQ to Portland in 1993; the metro has 20,000+ athletic and outdoor jobs",
      url: "https://prosperportland.us/?p=17824",
      publisher: "Prosper Portland",
      captured: "2026-11-12",
      reviewAfterDays: 365,
    },
    {
      id: "or-no-sales-tax",
      claim: "Oregon has no state or local general sales tax; remote sellers have no Oregon sales tax to collect",
      url: "https://www.avalara.com/blog/en/north-america/2022/09/seasonal-local-sales-tax-up-for-a-vote-in-oregon-a-state-with-no-sales-tax.html",
      publisher: "Avalara",
      captured: "2026-11-12",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
