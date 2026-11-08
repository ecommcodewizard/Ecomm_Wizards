// Geo v5 S2, page 1 of 18: the Charlotte pilot for the service-format location
// page (owner-approved 2026-11-08). Rendered by
// components/sections/geo/ServicePageTemplate.tsx.
//
// Keywords (SEMrush / Ahrefs, Nov 2026):
//   primary    shopify development charlotte (110 / 150, KD 3)
//   secondary  shopify design charlotte (90 / 90): the design service + FAQ 7
//              ecommerce website development charlotte (40 / 50): build-scope service
//   variants   shopify developers (in) charlotte, charlotte shopify design agency,
//              shopify design charlotte nc, shopify developer charlotte nc
// Never "in Charlotte" (presence rule). Facts are sourced below; nothing else
// about the city is claimed.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_CHARLOTTE: ServiceGeoPage = {
  type: "service",
  slug: "charlotte",
  path: "/services/shopify-development-agency/charlotte",
  hub: "/services/shopify-development-agency",
  geo: { name: "Charlotte", type: "metro", areaServed: "Charlotte, North Carolina" },

  targetKeyword: "shopify development charlotte",
  secondaryKeywords: ["shopify design charlotte", "ecommerce website development charlotte"],
  faqKeywords: ["shopify developers charlotte", "charlotte shopify design agency", "shopify design charlotte nc", "shopify developer charlotte nc"],
  metaTitle: "Shopify Development Charlotte NC | Custom Design and Builds",
  metaDescription:
    "Shopify development and design for Charlotte brands: custom themes, Shopify Plus, B2B and WooCommerce migrations. 150+ stores built, fixed price, live in about 6 weeks.",
  shortTitle: "Shopify Development Charlotte",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Development for Charlotte Brands",
    h1Lead: "",
    h1Gradient: "Shopify Development",
    h1Tail: "Charlotte Brands Hire to Sell More, Not Just Look Better",
    intro:
      "Your store has to carry the whole business: a big catalog, trade accounts, local pickup and the weekends when everyone shows up at once. We build it for that. [link:/services/shopify-theme-development|Custom theme development], Shopify Plus, [link:/services/migration/woocommerce-to-shopify|moves off WooCommerce] and the speed work that turns visits into orders, all at a fixed price with your launch date agreed before we write any code.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "95%+", label: "Rankings Retained" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/Group_1000003974_d0eba414-7aec-4930-b534-a4dcc91d004e_1024x1024.png",
      alt: "Custom Shopify store design and development by Ecomm Wizards",
    },
    footnote: "Shopify Plus Partner. 150+ stores built exclusively on Shopify.",
  },

  trust: {
    heading: "150+ Shopify Stores Built. These Brands Trust Us.",
    subheading: "Every one was scoped, built and launched in-house by developers who work only on Shopify.",
  },

  pains: {
    heading: "Where Your Store Is Losing Sales Before Checkout",
    intro:
      "If you sell retail and trade, ship nationwide and offer pickup, or run one-day drops next to your steady sellers, a stock theme starts to fight you. These are the four problems we fix most often.",
    items: [
      {
        icon: "layers",
        name: "Your Theme Can't Handle Your Catalog",
        desc: "Size, color, finish and fabric add up fast. When the theme was not built for that many variants, you split one product into several listings, filters return the wrong results, and shoppers give up looking.",
        cost: "Duplicate listings split your reviews and your rankings across pages, and a confusing filter sends the shopper back to Google.",
      },
      {
        icon: "clock",
        name: "A Mobile Store That Loads Too Slowly",
        desc: "Most of your visitors arrive on a phone, often from an ad or a social post. Google's target is the main image on screen in under 2.5 seconds. Miss it and many of those visitors leave before they see a product. Our [link:/services/shopify-speed-optimization|speed work] fixes the cause, not just the score.",
        cost: "You keep paying for the click. You just stop getting the sale.",
      },
      {
        icon: "alert",
        name: "Leaving WooCommerce Without Losing Rankings",
        desc: "If you are on WooCommerce, you probably have years of product and category pages ranking on Google. Move them without mapping every old URL to its new one, and those rankings disappear with the old site.",
        cost: "Organic traffic you built over years can take months to win back, and your ad budget has to cover the gap.",
      },
      {
        icon: "store",
        name: "Wholesale and Retail Fighting in One Store",
        desc: "Your trade buyers need their own prices, minimum quantities and payment terms. Your retail shoppers should never see any of it. Built with discount codes and hidden pages, it breaks the first time someone shares a link.",
        cost: "Trade orders end up arriving by email and phone, and someone on your team retypes every one.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development Services for Charlotte Brands",
    intro:
      "Everything below is built in-house by developers who work only on Shopify. Hand us one piece or the whole store. If you need the traffic too, we also run [link:/services/shopify-seo-agency|Shopify SEO] and [link:/services/shopify-cro-agency|conversion rate work].",
    items: [
      {
        title: "Custom Shopify Design",
        body: "Your store designed from scratch around your brand and your products, not a theme with your logo dropped in. Every page is designed in Figma for desktop and mobile, and you approve it before any build starts. Charlotte brands that hire us for Shopify design get a storefront no other store is running.",
      },
      {
        title: "Custom Shopify Theme Development",
        body: "We turn the approved design into a theme built for your catalog: custom sections, metafields for the details your products actually have, and filters that keep working with large variant sets. Your team can edit every page without calling a developer.",
      },
      {
        title: "Ecommerce Website Development, Start to Finish",
        body: "Starting from zero, or rebuilding a store that no longer fits? For Charlotte brands that need ecommerce website development from the ground up, we scope the whole job: store setup, design, theme, apps, payments, shipping rules, tax settings and launch. One fixed price and one go-live date, agreed before we start.",
      },
      {
        title: "WooCommerce and Platform Migration",
        body: "We move your products, customers, orders and reviews off WooCommerce, Magento, BigCommerce or Squarespace. Every old URL gets a 301 redirect to its new page, tested on staging before go-live, so Google follows you to the new store.",
      },
      {
        title: "Shopify Plus and B2B Wholesale",
        body: "Trade pricing by account, net payment terms, minimum order quantities, quick reorder and a separate wholesale catalog, all in the same store as your retail site. Built on Shopify Plus B2B features where they fit, and custom code where they don't.",
      },
      {
        title: "Product Drops and Launch Pages",
        body: "Countdown pages, limited stock, preorders and waitlists, built to keep selling when the traffic arrives all at once. We run test orders through every drop page and the full checkout before your launch date, not on it.",
      },
      {
        title: "Speed and Core Web Vitals",
        body: "We remove the app scripts you no longer need, compress and lazy-load images, and fix whatever slows your theme down on a phone. You get a written report of what we changed, with the before and after scores.",
      },
      {
        title: "Ongoing Shopify Support",
        body: "Every build includes 60 days of post-launch support. After that, you can keep us on a monthly retainer for changes, fixes and new features, so you are never briefing a new freelancer from scratch.",
      },
    ],
  },

  local: {
    label: "Selling from Charlotte",
    heading: "What Selling from Charlotte Means for Your Store",
    intro:
      "Where you sell from changes how your store should be built: when traffic spikes, how fast orders reach customers, and which tax rules apply at checkout. These are the three we plan around for Charlotte brands.",
    items: [
      {
        icon: "flag",
        name: "Race Weeks and Merch Drops",
        desc: "Most NASCAR teams are based within about 50 miles of Charlotte, so if you sell fan merchandise, the race calendar is your sales calendar. Traffic arrives in hours, not weeks. We build drop pages, stock limits and waitlists that hold up through the spike.",
      },
      {
        icon: "truck",
        name: "Shipping from the Middle of the East Coast",
        desc: "Charlotte sits where I-77 meets I-85, about halfway down the East Coast, so a fast delivery promise is often one you can keep. We put it where it sells: delivery dates on the product page, local pickup, and local delivery for nearby customers.",
      },
      {
        icon: "receipt",
        name: "North Carolina Sales Tax, Set Up Right",
        desc: "Mecklenburg County's combined sales tax rate rose to 8.25% on July 1, 2026, and North Carolina expects remote sellers to collect once their sales into the state pass $100,000 a year. We configure Shopify Tax so every order is charged the right rate. Your accountant still makes the filing calls.",
      },
    ],
  },

  caseStudies: {
    heading: "Shopify Builds for Brands Like Yours",
    intro: "Matched to the industries below: a wholesale supplier, an apparel brand and a food brand, each with the numbers from the project.",
    items: [
      {
        slug: "mouldings-one-shopify-b2b-portal",
        tags: ["Shopify Plus B2B", "Trade Portal", "ERP Integration"],
        description: "A trade supplier moved wholesale ordering off email and phone and into a Shopify Plus B2B portal. Order processing time fell 74% and B2B revenue grew 50%.",
        video: "/images/Case%20studies/Mouldings%20One%20video.mp4",
      },
      {
        slug: "twillory-shopify-cro",
        tags: ["Apparel", "A/B Testing", "Theme Development"],
        description: "A men's performance shirt brand tested every part of its store and kept only what won, adding $5.4M in new annual revenue.",
        video: "/images/Case%20studies/Twillory%20video.mp4",
      },
      {
        slug: "candy-kittens-shopify-food-beverage-cro",
        tags: ["Food and Drink", "Shopify Plus", "Gifting UX"],
        description: "A confectionery brand rebuilt its store around gifting and seasonal campaigns. Conversion rate rose 182% and average order value 34%.",
        video: "/images/Case%20studies/Candy%20Kittens%20video.mp4",
      },
    ],
  },

  process: {
    heading: "From First Call to a Live Store in About Six Weeks",
    intro: "Five steps, one written scope, and a launch date you can plan a race week or a holiday push around.",
    steps: [
      { title: "Scope and Fixed Price", desc: "We look at your store, your catalog and how you sell: retail, trade or both. You get a written scope and a fixed price before any work starts." },
      { title: "Design You Approve", desc: "Every page designed in Figma for desktop and mobile, built around your products and your brand. Nothing goes into development until you sign it off." },
      { title: "Build on Staging", desc: "We build the theme, features and integrations on a staging copy of your store. You see progress every week and can test it as it comes together." },
      { title: "Test Before Launch", desc: "Every device, browser and checkout path, plus speed checks against Google's Core Web Vitals. Drop pages, shipping rules and tax settings are tested with real orders before go-live." },
      { title: "Launch and Hand Over", desc: "A planned go-live with a rollback ready, timed around your sales calendar. You get the code, the documentation and 60 days of support from launch day." },
    ],
  },

  compare: {
    heading: "Choosing a Shopify Developer for Your Charlotte Brand",
    intro: "You will probably talk to three kinds of agency. Each can be the right fit for someone. Here is how to tell which one your store needs.",
    options: [
      {
        name: "General web design firms",
        goodFor: "Brochure sites and simple stores, often with the option to meet in person.",
        watchFor: "Shopify may be one platform among many, so large catalogs, B2B and migrations can be new ground for the team.",
      },
      {
        name: "National agencies with city pages",
        goodFor: "Large teams and a long client list.",
        watchFor: "Ask who actually builds your store. The senior people on the sales call are not always the people on the project.",
      },
      {
        name: "Package and template shops",
        goodFor: "Getting a simple store live quickly from a fixed menu.",
        watchFor: "A package covers what is on the list. Custom variants, trade pricing or a migration usually fall outside it.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Fixed price and launch date in writing before work starts",
        "The developers on your call are the developers on your build",
        "You own all of the code and every account",
        "60 days of post-launch support included",
      ],
    },
  },

  industries: {
    heading: "Industries We Build Shopify Stores For",
    intro: "The Charlotte region has deep roots in textiles, furniture and motorsports, and food and beverage is one of its growing sectors. Here is what changes in the build for each.",
    items: [
      { icon: "flag", name: "Motorsports and Fan Merch", desc: "Drop calendars that follow the race schedule, team and driver collections, and stock limits that hold when a whole fan base shows up at once." },
      { icon: "home", name: "Home and Furniture", desc: "Large catalogs with fabric, finish and size options, swatch ordering, freight shipping rules, and trade accounts for designers." },
      { icon: "shirt", name: "Apparel and Textiles", desc: "Size guides that cut returns, fit notes, swatches that match the photo, and wholesale line sheets for your stockists." },
      { icon: "food", name: "Food and Drink", desc: "Subscriptions, gift boxes, local delivery windows, and shipping rules that keep perishables off the road over a weekend." },
      { icon: "paw", name: "Pet and Household", desc: "Auto-ship for the products customers run out of, bundles, and reorder reminders that bring them back on schedule." },
      { icon: "box", name: "B2B and Wholesale", desc: "Trade portals, tiered pricing, net terms and quick reorder, in the same store as your retail site. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category. The platform is always Shopify.",
  },

  faqHeading: "Shopify Development FAQs for Charlotte Brands",
  faqs: [
    {
      question: "Do I need a local Shopify developer for my Charlotte brand?",
      answer:
        "No. What matters is that your developer knows Shopify deeply and is easy to reach. We work with brands across the US through online calls, a staging copy of your store and written weekly updates, and you get the same scope, fixed price and launch date in writing wherever you are.",
      unique: true,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Most of our Shopify builds go live about six weeks after kickoff. A custom theme takes four to six weeks, a Shopify Plus or B2B build six to ten, and a migration six to eight depending on the catalog. You get the launch date in writing before work starts, so you can plan a drop or a holiday push around it.",
      unique: false,
    },
    {
      question: "Can you move my store from WooCommerce without losing rankings?",
      answer:
        "Yes. We map every old URL to its new Shopify page, set up 301 redirects, keep your titles, descriptions and structured data, and test it all on staging before launch. When the redirect map is done properly, 95% or more of organic rankings carry over, and we watch Search Console for 30 days after go-live to catch anything that slips.",
      unique: false,
    },
    {
      question: "Do you set up North Carolina sales tax in Shopify?",
      answer:
        "Yes. We configure Shopify Tax so each order is charged the right state and county rate, including Mecklenburg County's 8.25% combined rate from July 1, 2026. North Carolina also expects remote sellers to register once sales into the state pass $100,000 a year. We set up the store side; your accountant handles registration and filing.",
      unique: true,
    },
    {
      question: "What does Shopify development cost for a Charlotte brand?",
      answer:
        "It depends on what you need built, so we don't publish a price list. After a short online call we send a written scope with one fixed price and a launch date, usually within 48 hours. The price you sign is the price you pay, with no hourly billing.",
      unique: false,
    },
    {
      question: "Can one Shopify store handle wholesale and retail?",
      answer:
        "Yes. On Shopify Plus, trade buyers log in to see their own prices, minimum quantities and payment terms, while retail shoppers see your normal store. For a smaller wholesale program on a standard plan, we can set up trade pricing with a vetted app instead. Either way, trade orders stop arriving by email.",
      unique: true,
    },
    {
      question: "Do you design the store as well as develop it?",
      answer:
        "Yes. Shopify design and development both happen in-house: we design every page in Figma, you approve it, and the same team builds it. If you already have designs, we can build them exactly as they are.",
      unique: true,
    },
    {
      question: "Can you build product drop pages that survive a traffic spike?",
      answer:
        "Yes. Shopify's servers carry the traffic; what usually breaks during a drop is the theme and the apps. We build drop pages with stock limits, waitlists and preorders, strip out scripts that slow the page down, and run test orders through the full checkout before your launch date.",
      unique: true,
    },
  ],

  book: {
    heading: "Book Your Free Shopify Development Call",
    sub: "Pick a time below for an online call with a senior Shopify developer. We look at your store and what you want built, then send a fixed price and launch date in writing within 48 hours.",
    bullets: [
      "Talk through your build: design, theme, Shopify Plus, B2B or a WooCommerce move",
      "Get a fixed-price quote and a launch date within 48 hours",
      "Find out what needs custom code and what Shopify already does",
      "Leave with a written scope you can compare against any other agency",
    ],
  },

  sources: [
    {
      id: "ncdor-mecklenburg-rate",
      claim: "Mecklenburg County combined sales and use tax rate 8.25% effective July 1, 2026 (up from 7.25%)",
      url: "https://www.ncdor.gov/taxes-forms/sales-and-use-tax/sales-and-use-tax-rates/current-sales-and-use-tax-rates",
      publisher: "North Carolina Department of Revenue",
      captured: "2026-11-08",
      reviewAfterDays: 180,
    },
    {
      id: "nc-remote-seller-threshold",
      claim: "North Carolina economic nexus for remote sellers: $100,000 gross sales; the 200-transaction test was repealed from July 1, 2024",
      url: "https://sovos.com/blog/sut/what-is-the-sales-tax-nexus-in-north-carolina/",
      publisher: "Sovos",
      captured: "2026-11-08",
      reviewAfterDays: 180,
    },
    {
      id: "uncc-motorsports",
      claim: "90%+ of NASCAR teams are based within 50 miles of Charlotte",
      url: "https://belkcollege.charlotte.edu/wp-content/uploads/sites/953/2023/12/Motorsports-Report-10-05-04.pdf",
      publisher: "UNC Charlotte, Belk College of Business",
      captured: "2026-11-08",
      reviewAfterDays: 365,
    },
    {
      id: "crba-industries",
      claim: "Charlotte region: textile, apparel and furniture manufacturing heritage; food and beverage processing a growing sector (225+ processors)",
      url: "https://charlotteregion.com/industries/advanced-manufacturing/",
      publisher: "Charlotte Regional Business Alliance",
      captured: "2026-11-08",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
