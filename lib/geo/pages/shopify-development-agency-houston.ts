// Geo v5 S2, page 6 of 18: Houston, service format.
//
// Keywords (v5 plan 3.2; SERP checked 2026-11-10: SEMrush KD 9% on the
// experts term, local pages have 0-3 referring domains; map pack + AI
// Overview list agencies with Houston addresses):
//   primary    shopify agency houston (20)
//   secondary  shopify experts houston (80): title, meta, FAQ heading. SERP
//              check passed (Shopify directory #4, Upwork #3, rest agencies)
//   variants   shopify expert houston (40), houston shopify expert developer (30)
// Angle: industrial and B2B suppliers (part-number catalogs, quotes, account
// pricing). Distinct from Dallas (retail + wholesale in one store).

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_HOUSTON: ServiceGeoPage = {
  type: "service",
  slug: "houston",
  path: "/services/shopify-development-agency/houston",
  hub: "/services/shopify-development-agency",
  geo: { name: "Houston", type: "metro", areaServed: "Houston, Texas" },

  targetKeyword: "shopify agency houston",
  secondaryKeywords: ["shopify experts houston"],
  faqKeywords: ["shopify expert houston", "houston shopify expert developer"],
  metaTitle: "Shopify Agency Houston | Shopify Experts for Industrial and B2B",
  metaDescription:
    "The Shopify agency Houston suppliers hire for B2B stores: big catalogs, quote requests, account pricing and ERP links, built by Shopify experts at a fixed price.",
  shortTitle: "Shopify Agency Houston",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Agency for Houston Brands",
    h1Lead: "",
    h1Gradient: "Shopify Agency",
    h1Tail: "Houston Brands Hire for Industrial and B2B Stores That Sell Online",
    intro:
      "Your buyers know the part number, the quantity and the price they were quoted. Your store should let them order in a minute, not send an email and wait. We're the Shopify agency Houston suppliers hire for that: [link:/services/shopify-b2b-store-setup|Shopify B2B], [link:/services/shopify-plus-development|Shopify Plus], ERP integrations and [link:/services/migration|platform migrations], at a fixed price agreed before any work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-houston-hero-v1.webp",
      alt: "B2B Shopify stores for Henchman, Mouldings One and Saddleback, with order processing time down 74% and B2B sales up 881%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency Houston suppliers and manufacturers hire to sell B2B online: Shopify Plus B2B portals, large part-number catalogs, quote requests, account pricing and ERP integrations. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before work starts.",

  trust: {
    heading: "B2B and Retail Brands That Trust Us With Their Store",
    subheading: "From trade portals to consumer stores, every build was scoped, built and supported by our own Shopify team.",
  },

  pains: {
    heading: "What Holds an Industrial Supplier Back Online",
    intro:
      "Most B2B buyers already order online from someone. If your store can't handle part numbers, quotes and account pricing, they order from the someone. These are the four problems any Shopify agency Houston suppliers hire should fix first.",
    items: [
      {
        icon: "receipt",
        name: "Quotes and Orders Still Go Through Email",
        desc: "Buyers email for a price, wait for a reply, then email the order back. Your team retypes it into the system and checks stock by phone.",
        cost: "Slow quotes lose jobs to suppliers who answer first.",
      },
      {
        icon: "search",
        name: "A Catalog Nobody Can Search",
        desc: "Thousands of SKUs with specs, sizes and materials, on a theme built for a few hundred products. Buyers can't search by part number or filter by spec, so they call instead.",
        cost: "Your sales team spends the day answering questions the store should answer.",
      },
      {
        icon: "layers",
        name: "One Price for Every Account",
        desc: "Contract pricing, volume breaks and customer-specific catalogs live in spreadsheets, not in the store. Every account sees list price, so they keep ordering offline.",
        cost: "Your online channel never takes the orders it was built for.",
      },
      {
        icon: "box",
        name: "Stock and Orders Out of Sync With the ERP",
        desc: "Shopify shows one stock level and the ERP shows another. Orders are rekeyed by hand, and mistakes show up on the delivery.",
        cost: "Back-orders, credit notes and accounts that quietly go elsewhere.",
      },
    ],
  },

  services: {
    label: "B2B Shopify Services",
    heading: "Everything a B2B Store Needs, From One Shopify Team",
    intro:
      "Every build is delivered in-house by people who work only on Shopify. Once the store is live, we can also handle [link:/services/shopify-seo-agency|Shopify SEO] and [link:/services/shopify-cro-agency|conversion rate optimization].",
    // Visual rows (owner, 2026-11-12): 8 services merged to 6, each with a
    // case study the page's own case-studies section doesn't use.
    items: [
      {
        title: "Shopify Plus B2B Portals",
        heading: "Buyers log in, see their contract prices and reorder in a few clicks",
        body: "Company accounts with their own catalogs, payment terms and order limits, kept apart from anything a consumer sees.",
        covers: ["Company catalogs", "Contract pricing", "Payment terms", "Order limits", "Buyer logins"],
        caseSlug: "everlast-shopify-plus-sports-redesign",
        imageAlt: "Everlast store running retail and trade checkout side by side",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
      {
        title: "Quick Order and Quote Requests",
        heading: "Order by part number, upload a CSV, or ask for a quote on the big jobs",
        body: "Saved reorder lists, CSV uploads and quote requests your sales team approves inside Shopify.",
        covers: ["Part-number entry", "CSV upload", "Saved lists", "Quote requests", "Approval flow"],
        caseSlug: "capelli-sports-shopify-migration",
        imageAlt: "Capelli Sports Shopify storefront",
      },
      {
        title: "Large Catalog Search and Filters",
        heading: "Find the right SKU by spec instead of scrolling for it",
        body: "Search by SKU and part number, filters built from your real specs, and product pages with drawings and downloadable sheets.",
        covers: ["SKU search", "Spec filters", "Spec sheets", "Drawings", "Downloads"],
        caseSlug: "dryrobe-shopify-plus-redesign",
        imageAlt: "Dryrobe store with clear navigation across a large range",
        cta: { label: "Explore UX and UI design", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        title: "ERP and Inventory Integrations",
        heading: "Stock, pricing and invoices that match your ERP without rekeying",
        body: "Two-way sync with your ERP or warehouse system, so the numbers your buyers see are the numbers in your books.",
        covers: ["Two-way sync", "Live stock", "Price lists", "Invoices", "Warehouse systems"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy store with its inventory connected after migration",
        cta: { label: "Explore ERP connections", href: "/services/erp-connections-to-shopify" },
      },
      {
        title: "Custom Development and Migration",
        heading: "Configurators, approval flows and a clean move off your old portal",
        body: "Calculators and custom apps for the steps no app covers, plus a migration from Magento, WooCommerce or a legacy portal with pricing and order history intact.",
        covers: ["Configurators", "Calculators", "Approval workflows", "Custom apps", "Portal migration"],
        caseSlug: "ronaldo-jewelry-shopify-plus-redesign",
        imageAlt: "Ronaldo Jewelry store with a custom product configurator",
        cta: { label: "Explore custom app development", href: "/services/shopify-app-development" },
      },
      {
        title: "Retail Storefront and Support",
        heading: "Sell to consumers from the same catalog, with us on call after launch",
        body: "Retail pricing and checkout kept separate from trade accounts, then 60 days of support and an optional monthly retainer.",
        covers: ["Retail storefront", "Shared inventory", "Separate pricing", "60-day support", "Monthly retainer"],
        caseSlug: "sneak-energy-shopify-redesign",
        imageAlt: "Sneak Energy consumer store with a mobile-first design",
        cta: { label: "Explore maintenance and support", href: "/services/shopify-maintenance-and-support" },
      },
    ],
  },

  local: {
    label: "Selling from Houston",
    heading: "What Selling from Houston Means for Your Store",
    intro:
      "Three things about Houston change how a supplier's store should be built: how your stock arrives, which tax rules your buyers fall under, and who your customers are.",
    items: [
      {
        icon: "truck",
        name: "Built Around the Port",
        desc: "Port Houston calls the Houston Ship Channel the largest US port for waterborne tonnage. If your stock comes in by sea, your store should show real lead times and incoming stock dates, and let trade buyers back-order against the next container.",
      },
      {
        icon: "receipt",
        name: "Tax-Exempt Buyers, Handled in Checkout",
        desc: "Houston collects 8.25% combined sales tax, but many industrial buyers are exempt or buy for resale. We set up Shopify so exempt accounts are never charged tax, with their certificates stored against the account. If you sell into Texas from another state, collection starts once your Texas sales pass $500,000 a year. Your accountant handles registration and filing.",
      },
      {
        icon: "user",
        name: "Buyers Who Speak More Than English",
        desc: "More than 140 languages are spoken across the Houston area, with Spanish, Vietnamese and Chinese among the most common. Shopify can run translated storefronts from the same admin, so buyers can read specs and order in the language they work in.",
      },
    ],
  },

  caseStudies: {
    heading: "B2B Stores With Results You Can Check",
    intro:
      "Proof to ask of any Shopify agency Houston suppliers consider: each project here moved trade ordering online, and each result was measured.",
    items: [
      {
        slug: "henchman-shopify-plus-b2b",
        tags: ["Industrial", "Shopify Plus B2B", "ERP Integration"],
        description: "A ladder and access equipment specialist left Magento for Shopify Plus with self-service wholesale ordering and Brightpearl ERP. Online revenue grew 58% and wholesale order processing time fell 70%.",
        video: "/images/Case%20studies/Henchman%20video.mp4",
      },
      {
        slug: "mouldings-one-shopify-b2b-portal",
        tags: ["Building Supplies", "Trade Portal", "ERP Integration"],
        description: "A trade supplier moved ordering off email and phone into a Shopify Plus B2B portal with live stock from its ERP. Order processing time fell 74% and B2B revenue grew 50%.",
        video: "/images/Case%20studies/Mouldings%20One%20video.mp4",
      },
      {
        slug: "saddleback-shopify-plus-b2b",
        tags: ["Distribution", "Shopify Plus", "Bulk Ordering"],
        description: "A cycling distributor replaced a clunky wholesale portal with Shopify Plus B2B and CSV bulk ordering. B2B sales grew 881% in the first month.",
        video: "/images/Case%20studies/Saddleback%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How We Move Your Trade Ordering Online",
    intro:
      "Five stages with your sign-off at each one, the way any Shopify agency Houston suppliers trust should run a B2B build. Most stores are live in six to ten weeks, depending on the ERP.",
    steps: [
      { title: "Map How Buyers Order Today", desc: "We go through your accounts, pricing rules, catalog and ERP, then write the scope, a fixed price and a launch date." },
      { title: "Design for Fast Ordering", desc: "Quick order, saved lists, account pricing and spec-rich product pages, designed in Figma for desktop and mobile. You approve every screen." },
      { title: "Build and Connect the ERP", desc: "Theme, B2B setup and integrations built on a staging store, with stock, pricing and orders syncing to your ERP." },
      { title: "Test With Real Accounts", desc: "Test orders for each account type, price list, tax exemption and shipping rule before anything goes live." },
      { title: "Launch and Onboard Buyers", desc: "A planned go-live, help moving your trade accounts onto the portal, and 60 days of support from launch day." },
    ],
  },

  compare: {
    heading: "What to Check on Your Shopify Agency Houston Shortlist",
    intro: "Search results show local web agencies, freelancers and national partners. Each one suits a different job.",
    options: [
      {
        name: "Local web and marketing agency",
        goodFor: "Brand websites, SEO and ads for local businesses.",
        watchFor: "Ask how many Shopify B2B portals with ERP connections they have launched. Trade ordering is a different build from a brochure site.",
      },
      {
        name: "Freelance Shopify developer",
        goodFor: "Small fixes and single features.",
        watchFor: "ERP integrations and B2B builds need several skills at once, and timelines slip when one person is busy.",
      },
      {
        name: "Large partner agency",
        goodFor: "Very large programs with big budgets.",
        watchFor: "Check who works on your account day to day, and whether a mid-size supplier gets their senior people.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "B2B portals and ERP integrations, built in-house",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Industries We Build B2B Stores For",
    intro:
      "Houston is home to energy, manufacturing, distribution and healthcare supply. Here is what a Shopify agency Houston brands hire should change in the build for each.",
    items: [
      { icon: "box", name: "Industrial Supply and MRO", desc: "Search by part number, spec filters, bulk order forms and account pricing for maintenance and repair buyers." },
      { icon: "code", name: "Energy Equipment and Parts", desc: "Spec sheets and drawings on product pages, quote requests for configured items, and lead times by product." },
      { icon: "star", name: "Healthcare and Lab Supply", desc: "Account-only catalogs, approval steps before checkout, and reorder lists for the products clinics buy every month." },
      { icon: "home", name: "Building and Construction", desc: "Large option sets, freight shipping, job-site delivery notes and trade pricing for contractors." },
      { icon: "truck", name: "Wholesale Distribution", desc: "Customer-specific catalogs, net terms and CSV upload. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
      { icon: "cart", name: "Consumer Brands", desc: "A retail storefront from the same catalog and inventory, with its own pricing and checkout." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Agency FAQs for Houston Brands",
  faqs: [
    {
      question: "Are you Shopify experts for Houston suppliers?",
      answer:
        "Yes. We work only on Shopify and Shopify Plus and have built 150+ stores, including B2B portals with ERP integrations, so every Shopify expert on your project knows the platform in depth.",
      unique: true,
    },
    {
      question: "How much does a Houston Shopify expert developer cost?",
      answer:
        "It depends on the scope, especially the ERP integration, so we price by project rather than by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours.",
      unique: false,
    },
    {
      question: "Is it worth hiring a Shopify expert for a B2B store?",
      answer:
        "It is if online orders are meant to replace email and phone orders. The expensive mistakes in B2B are pricing leaks, stock that doesn't match the ERP and buyers who can't find parts, and those are exactly what an experienced team prevents.",
      unique: true,
    },
    {
      question: "Can Shopify handle B2B pricing and net terms?",
      answer:
        "Yes. Shopify Plus B2B supports company accounts, customer-specific price lists, volume breaks, payment terms and order limits. Where your rules go further, we add them with Shopify Functions or a custom app.",
      unique: true,
    },
    {
      question: "Can you connect Shopify to our ERP?",
      answer:
        "Yes. We sync stock, pricing, orders and invoices between Shopify and your ERP, using a proven connector where one fits and a custom integration where it doesn't. The method is agreed in the scope before work starts.",
      unique: false,
    },
    {
      question: "Can I hire someone to manage my Shopify store?",
      answer:
        "Yes. After launch, a monthly retainer covers catalog updates, new features, integration changes and fixes, so your team can focus on customers instead of the store.",
      unique: false,
    },
    {
      question: "How do I avoid hiring the wrong Shopify developer?",
      answer:
        "Ask for B2B stores they built, measured results, a written scope with a fixed price, and confirmation you own the code and every account. Give developers staff or collaborator access, never your owner login.",
      unique: true,
    },
    {
      question: "How do you handle tax-exempt and resale buyers?",
      answer:
        "We set up Shopify so exempt and resale accounts are not charged tax, with each buyer's certificate stored against their company account. Retail orders still collect Houston's 8.25% combined rate. Your accountant handles registration and filing.",
      unique: true,
    },
  ],

  book: {
    heading: "Book a Free Call About Your B2B Store",
    sub: "Pick a time for an online call with a senior Shopify specialist. Tell us how your buyers order today and which ERP you run, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your catalog, accounts, pricing and ERP",
      "Get a fixed price and a launch date within 48 hours",
      "Find out what Shopify B2B covers natively and what needs custom work",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "port-houston",
      claim: "The Houston Ship Channel complex is the nation's largest port for waterborne tonnage",
      url: "https://porthouston.com/wp-content/uploads/2026/01/Port-Houston-Celebrates-Best-Year-Yet.pdf",
      publisher: "Port Houston",
      captured: "2026-11-10",
      reviewAfterDays: 365,
    },
    {
      id: "houston-rate",
      claim: "Houston combined sales tax 8.25% (6.25% state + 1% city + 1% METRO); Harris County 0%",
      url: "https://www.avalara.com/taxrates/en/state-rates/texas/cities/houston.html",
      publisher: "Avalara (Texas Comptroller rates)",
      captured: "2026-11-10",
      reviewAfterDays: 180,
    },
    {
      id: "tx-remote-seller",
      claim: "Texas remote sellers must collect once Texas revenue exceeds $500,000 in the prior 12 months",
      url: "https://www.salestaxinstitute.com/?p=17643",
      publisher: "Sales Tax Institute (Texas Comptroller guidance)",
      captured: "2026-11-10",
      reviewAfterDays: 180,
    },
    {
      id: "houston-languages",
      claim: "More than 140 languages are spoken in the Houston metropolitan area; Spanish, Vietnamese and Chinese among the most common",
      url: "https://patch.com/texas/houston/houston-s-melting-pot-how-diversity-unites-bayou-city",
      publisher: "Patch (Houston)",
      captured: "2026-11-10",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
