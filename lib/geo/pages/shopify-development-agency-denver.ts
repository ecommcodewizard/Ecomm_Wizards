// Geo v5 S2, page 15 of 18: Denver (Colorado), service format.
//
// Keywords (v5 plan 3.2; SEMrush 2026-11-12: 30/mo, no SERP data; Ahrefs:
// 40/mo, KD 5, every ranking page 0-1 referring domains):
//   primary    shopify agency denver (30-40)
//   secondary  denver shopify expert (10): SERP checked 2026-11-12, mix of
//              freelancers (LinkedIn, Upwork, Facebook) and agencies, usable
//   variants   denver shopify agency; shopify expert in denver (demand only)
// "shopify developer denver" excluded (plan: Jobs SERP). Split from the
// Colorado page: Colorado keeps outdoor, Boulder and the home-rule tax
// overview; Denver gets its own sales tax license and the drinks angle.
// H1 owner pick #6 ("stores built to scale"). Angle: growth without the
// store slowing or breaking.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_DENVER: ServiceGeoPage = {
  type: "service",
  slug: "denver",
  path: "/services/shopify-development-agency/denver",
  hub: "/services/shopify-development-agency",
  geo: { name: "Denver", type: "metro", areaServed: "Denver, Colorado" },

  targetKeyword: "shopify agency denver",
  secondaryKeywords: ["denver shopify expert"],
  faqKeywords: ["denver shopify agency"],
  metaTitle: "Shopify Agency Denver | Stores Built to Scale",
  metaDescription:
    "The Shopify agency Denver brands hire for stores built to scale: Shopify Plus, wholesale, subscriptions and migrations, at a fixed price agreed before work starts.",
  shortTitle: "Shopify Agency Denver",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Denver Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Denver Brands Hire for Stores Built to Scale",
    intro:
      "Your orders are growing. Your store should handle twice the traffic, a bigger catalog and wholesale buyers without slowing down or needing a rebuild. We're the Shopify agency Denver brands hire for that: [link:/services/shopify-plus-development|Shopify Plus], [link:/services/shopify-theme-development|custom themes], wholesale, subscriptions and [link:/services/migration|migrations], at a fixed price agreed before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-denver-hero-v1.webp",
      alt: "Shopify stores for Everlast, Henchman and Sneak Energy, with conversion up 152% and online revenue up 58%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency Denver brands hire for stores built to scale: Shopify Plus, custom themes, wholesale, subscriptions and migrations from Magento or WooCommerce. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before work starts. Denver orders get the city's own sales tax set up correctly.",

  trust: {
    heading: "Growing Brands That Trust Us",
    subheading: "Every store was designed, built and launched in-house by our own Shopify team.",
  },

  pains: {
    heading: "Where Growing Stores Start to Break",
    intro:
      "A store that worked at launch often struggles at twice the size. These are the four problems a Shopify agency Denver brands hire should fix before they cost you sales.",
    items: [
      {
        icon: "clock",
        name: "Pages That Slow Down as You Grow",
        desc: "More products, more images and more apps make every page heavier, until the store that once felt quick takes seconds to load on a phone.",
        cost: "Shoppers leave before the page they came for finishes loading.",
      },
      {
        icon: "layers",
        name: "Apps Stacked on Apps",
        desc: "Each new need gets another app, and each app adds scripts, monthly fees and another thing that can break during a sale.",
        cost: "Rising costs and a store nobody fully understands.",
      },
      {
        icon: "box",
        name: "Manual Work That Grows With Orders",
        desc: "Wholesale orders typed in by hand, stock fixed in spreadsheets and customer emails answered one by one. It works at 50 orders a day, not 500.",
        cost: "Your team spends its time on admin instead of growth.",
      },
      {
        icon: "code",
        name: "Every Change Needs a Developer",
        desc: "A theme with fixed layouts means a new landing page or campaign waits in someone's queue.",
        cost: "Launches slip and good ideas never ship.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Denver Brands",
    intro:
      "Everything is built in-house by people who work only on Shopify. Once the store is live, we can also run [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    items: [
      {
        title: "Shopify Plus Builds",
        body: "Shopify Plus for brands at volume: checkout extensions, Shopify Flow automation and stores for more than one country, all from one admin.",
      },
      {
        title: "Wholesale and B2B",
        body: "Trade accounts with their own prices, terms and bulk ordering, so retailers reorder themselves instead of emailing your team.",
      },
      {
        title: "Custom Theme Development",
        body: "A fast custom theme with flexible sections, so your team can build pages and launch campaigns without calling a developer.",
      },
      {
        title: "Subscriptions and Bundles",
        body: "Recurring orders, build-your-own bundles and mixed cases that raise order value and bring customers back.",
      },
      {
        title: "Platform Migration",
        body: "Move from Magento, WooCommerce or BigCommerce with products, customers, orders and reviews intact, and every old URL redirected.",
      },
      {
        title: "ERP and Inventory Integration",
        body: "Shopify connected to your ERP, warehouse and accounting, so stock and orders sync without anyone retyping them.",
      },
      {
        title: "Speed and App Cleanup",
        body: "We remove the apps you don't need, rebuild what they did in the theme, and get pages loading fast on a phone again.",
      },
      {
        title: "Support After Launch",
        body: "Every build includes 60 days of post-launch support, then an optional monthly retainer for new features and fixes.",
      },
    ],
  },

  local: {
    label: "Selling from Denver",
    heading: "What Selling from Denver Means for Your Store",
    intro:
      "Three things change how a Denver brand's store should be built: the city's own sales tax, a drinks scene the whole country watches, and growth that soon reaches past Colorado.",
    items: [
      {
        icon: "receipt",
        name: "Denver Runs Its Own Sales Tax",
        desc: "Denver collects its own sales tax and issues its own license, separate from the state's. Sellers outside Colorado that pass the state's sales threshold need a Denver license too and must collect Denver's tax on orders delivered there. We set up Shopify Tax to charge each Denver address correctly; your accountant handles the licenses and filing.",
      },
      {
        icon: "food",
        name: "A City That Judges Drinks for a Living",
        desc: "Denver hosts the Great American Beer Festival every year, and in 2026 its judges scored 7,267 beer and cider entries from breweries across 49 states. If you sell drinks, your store needs age checks, shipping rules for each state and bundles that make a mixed case easy to build.",
      },
      {
        icon: "truck",
        name: "Growth That Reaches Past Colorado",
        desc: "As orders grow, more of them ship out of state, and each state sets its own point where you must start collecting its sales tax. Shopify Tax tracks those thresholds for you, so you know when a new state needs attention.",
      },
    ],
  },

  caseStudies: {
    heading: "Stores That Scaled With Measured Results",
    intro:
      "Proof to ask of any Shopify agency Denver brands consider: each store here grew in volume, and each result was measured after launch.",
    items: [
      {
        slug: "everlast-shopify-plus-sports-redesign",
        tags: ["Retail and Trade", "Shopify Plus", "Custom Theme"],
        description: "The boxing brand's rebuilt Shopify Plus store runs retail and trade checkout side by side. Conversion rate rose 152% and total orders 48%.",
        video: "/images/Case%20studies/Everlast%20video.mp4",
      },
      {
        slug: "henchman-shopify-plus-b2b",
        tags: ["Industrial B2B", "Magento Exit", "ERP Integration"],
        description: "A ladder and access equipment specialist left Magento for Shopify Plus with self-service wholesale ordering and an ERP link. Online revenue grew 58% and order processing time fell 70%.",
        video: "/images/Case%20studies/Henchman%20video.mp4",
      },
      {
        slug: "sneak-energy-shopify-redesign",
        tags: ["Food and Drink", "Mobile-First", "Bundle Builder"],
        description: "An energy drink brand with mostly mobile traffic got a mobile-first redesign and a custom bundle builder. Mobile conversion rate rose 68% and add-to-cart rate 52%.",
        video: "/images/Case%20studies/Sneak%20video.mp4",
      },
    ],
  },

  process: {
    heading: "From Kickoff to a Store Ready for Growth",
    intro:
      "Five stages with your sign-off at each one, the way a Shopify agency Denver brands trust should run a build. Most stores are live about six weeks after kickoff.",
    steps: [
      { title: "Plan for Next Year's Volume", desc: "We look at your orders, catalog and growth plans, then fix the scope, one price and a launch date in writing." },
      { title: "Design for Speed", desc: "Figma designs for desktop and mobile, with page weight and app use planned from the start. You approve every screen." },
      { title: "Build and Integrate", desc: "Theme, wholesale, subscriptions and ERP links built on a staging store, with your catalog and customers brought across." },
      { title: "Test Under Load", desc: "Checkout, wholesale ordering and sale pages tested with simulated traffic and real test orders on every device." },
      { title: "Launch and Support", desc: "A planned go-live, 60 days of support, and a list of what to build next as you grow." },
    ],
  },

  compare: {
    heading: "What to Check on Your Shopify Agency Denver Shortlist",
    intro: "Search results show local studios, freelancers and national partners. Here is what each one suits, and what to ask before you sign.",
    options: [
      {
        name: "Local design studio",
        goodFor: "Brand identity, photography and creative direction.",
        watchFor: "Ask for live Shopify Plus builds with wholesale or integrations, not just design work.",
      },
      {
        name: "Freelance Shopify developer",
        goodFor: "Small fixes and single features.",
        watchFor: "Migrations, ERP links and wholesale need several skills at once, and timelines slip when one person is busy.",
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
        "Shopify Plus, B2B and integrations in-house",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Every category scales differently. Here is what a Shopify agency Denver brands hire should build in for each.",
    items: [
      { icon: "food", name: "Craft Drinks", desc: "Age checks, mixed-case bundles, subscriptions and shipping rules for each state." },
      { icon: "star", name: "Health and Wellness", desc: "Product quizzes, subscribe-and-save and clear ingredient pages." },
      { icon: "flag", name: "Sports and Fitness", desc: "Size guidance, kit bundles and pages that stay fast under sale traffic." },
      { icon: "shirt", name: "Apparel and Footwear", desc: "Size finders, colorway swatches and launch pages for new drops." },
      { icon: "home", name: "Home and Lifestyle", desc: "Large option sets, gifting and freight delivery for bigger items." },
      { icon: "box", name: "Wholesale and Distribution", desc: "Account pricing, bulk ordering and reorders for trade buyers. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency FAQs for Denver Brands",
  faqs: [
    {
      question: "What does a Denver Shopify agency cost?",
      answer:
        "It depends on the scope, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours, and that number holds unless you add to the work.",
      unique: false,
    },
    {
      question: "Should I hire a freelancer or an agency?",
      answer:
        "A Shopify expert working alone is a good fit for small fixes. Once the work covers design, development, integrations and launch at the same time, a team keeps the timeline, and one person's busy week doesn't stop your build.",
      unique: true,
    },
    {
      question: "Does my Shopify agency need to be local?",
      answer:
        "No. We run every project through online calls, a staging store you can test yourself and written weekly updates, with the scope, price and launch date agreed in writing first.",
      unique: false,
    },
    {
      question: "When should we move to Shopify Plus?",
      answer:
        "Usually when you need wholesale on the same store, checkout changes, automation or stores for several countries. We look at your volume and needs on the first call and tell you honestly if standard Shopify is enough.",
      unique: true,
    },
    {
      question: "Do we need a separate Denver sales tax license?",
      answer:
        "Yes, if you sell to Denver addresses and meet Denver's rules: the city licenses and collects its own sales tax, separately from the state. We set up Shopify Tax to charge Denver orders correctly; your accountant handles the licenses and filing.",
      unique: true,
    },
    {
      question: "Can you sell alcohol or drinks online on Shopify?",
      answer:
        "Yes, within each state's rules. We build age checks, block shipping to states you can't sell into, and set up bundles and subscriptions. Your licenses decide what you can ship where.",
      unique: true,
    },
    {
      question: "Can you move us off Magento without losing rankings?",
      answer:
        "Yes. We move products, customers, orders and reviews, redirect every old URL, and watch Search Console for 30 days after launch so your rankings follow you.",
      unique: false,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Most stores go live about six weeks after kickoff. We set the launch date in writing at the start, working back from your next season or launch.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for an online call with a senior Shopify specialist. Tell us where your store is today and where you want it next year, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your store, your volume and your growth plans",
      "Get a fixed price and a launch date within 48 hours",
      "Find out what Shopify handles natively and what needs custom work",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "denver-own-license",
      claim: "Non-resident retailers without physical presence in Colorado that engage in business in Denver (including via economic nexus tied to the state threshold) must obtain a Denver sales tax license and collect Denver's sales tax on retail sales in the city",
      url: "https://www.denvergov.org/files/assets/public/v/2/finance/documents/treasury/tax-guides/taxguidetopic22_engagedinbusiness.pdf",
      publisher: "City and County of Denver, Treasury Division (Tax Guide Topic 22)",
      captured: "2026-11-12",
      reviewAfterDays: 365,
    },
    {
      id: "gabf-2026",
      claim: "The Great American Beer Festival is held in Denver; in 2026, 225 judges evaluated 7,267 beer and cider entries from breweries across 49 states, DC and Puerto Rico",
      url: "https://www.greatamericanbeerfestival.com/news/2026-gabf-winners-announced/",
      publisher: "Brewers Association (Great American Beer Festival)",
      captured: "2026-11-12",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
