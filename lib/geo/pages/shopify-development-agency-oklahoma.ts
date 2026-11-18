// Geo v5 S5, Shopify dev Phase 2a, page 8 of 15: Oklahoma (state), service
// format.
//
// Keywords (v5 plan 3.3):
//   primary    shopify developer oklahoma (SEMrush 10 / Ahrefs 10, KD 0)
//   secondary  shopify agency oklahoma (KD 15)
// SERP (2026-11-18, personalised to Boise): results lean Oklahoma City;
// Shero owns the industrial B2B angle; ZipRecruiter #8 (413 jobs) but no Jobs
// pack. AI Overviews ask: build new, migrate (WooCommerce/Wix) or fix speed
// and conversion; standard or Plus; B2B, DTC or migration.
// Statewide page; Tulsa is a later Phase 2a page and its terms are left to it.
// H1 owner pick: "Store Builds, Platform Moves and More Sales" (owner edit).
// Grocery-tax angle deliberately skipped: Kansas and Arkansas already use it.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_OKLAHOMA: ServiceGeoPage = {
  type: "service",
  slug: "oklahoma",
  path: "/services/shopify-development-agency/oklahoma",
  hub: "/services/shopify-development-agency",
  geo: { name: "Oklahoma", type: "state", areaServed: "Oklahoma" },

  targetKeyword: "shopify developer oklahoma",
  secondaryKeywords: ["shopify agency oklahoma"],
  faqKeywords: [],
  metaTitle: "Shopify Developer Oklahoma | Store Builds, Moves and More Sales",
  metaDescription:
    "Looking for a Shopify developer? Oklahoma brands hire us for store builds, moves off Wix and WooCommerce, and changes that bring more sales. Fixed price.",
  shortTitle: "Shopify Developer Oklahoma",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Development for Oklahoma Brands",
    h1Lead: "",
    h1Gradient: "Shopify Developer",
    h1Tail: "Oklahoma Brands Hire for Store Builds, Platform Moves and More Sales",
    intro:
      "You need a store built properly, you're ready to leave Wix or WooCommerce, or your Shopify store gets visitors who don't buy. Each one calls for a Shopify developer. Oklahoma brands hire our team for [link:/services/shopify-theme-development|store builds], [link:/services/migration|platform moves] and [link:/services/shopify-cro-agency|changes that lift sales], at a fixed price agreed in writing before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-oklahoma-hero-v1.webp",
      alt: "Shopify stores for Twillory, This Works and Ronaldo Jewelry, with $5.4M in new annual revenue and conversion rate up 38%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards is a Shopify agency that builds stores, moves brands off Wix, WooCommerce and Magento, and improves stores that aren't selling, for Oklahoma brands from Oklahoma City and Norman to Edmond and Broken Arrow. Most start on standard Shopify and move to Plus for checkout control or wholesale. Every project has a fixed price and date in writing.",

  trust: {
    heading: "Brands That Trust Us With Their Stores",
    subheading: "New builds, platform moves and sales growth, each designed and developed in-house by our own Shopify team.",
  },

  pains: {
    heading: "What Stops a Store From Selling More",
    intro:
      "Most stores that underperform share the same four problems, and fixing them is daily work for a Shopify developer. Oklahoma or anywhere else, here is what each one costs you.",
    items: [
      {
        icon: "layers",
        name: "A Website Builder You've Outgrown",
        desc: "Wix or Squarespace got you started, but product options, inventory and checkout are now held together with workarounds.",
        cost: "Lost orders and hours spent managing the site instead of the business.",
      },
      {
        icon: "chart",
        name: "Visitors Who Look and Leave",
        desc: "Traffic is steady, but product pages don't answer questions, reviews are hidden and checkout has too many steps.",
        cost: "Marketing spend that brings visitors but not orders.",
      },
      {
        icon: "star",
        name: "Product Claims Nobody Checks",
        desc: "Handmade, Native-made or locally made labels are typed into descriptions by hand, so a new product can carry a claim it shouldn't.",
        cost: "Customer complaints, refunds and, for some claims, legal risk.",
      },
      {
        icon: "receipt",
        name: "One Tax Rate for Every Order",
        desc: "The store charges a flat rate, but Oklahoma tax depends on where each order is delivered.",
        cost: "Under-collected tax you end up paying yourself.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Development for Oklahoma Brands",
    intro:
      "Every project is designed and developed by our own Shopify team, never passed to subcontractors. After launch, we can also take on [link:/services/shopify-seo-agency|Shopify SEO] and ongoing support.",
    // Visual rows; the page's own case studies (Ronaldo Jewelry, This Works,
    // Twillory) are not reused here.
    items: [
      {
        title: "Custom Store Builds",
        heading: "A store built for your products, not squeezed into a template",
        body: "A custom theme with product pages, collections and navigation planned around what you sell and how people shop, fast on a phone. Evie Lou's rebuilt store nearly doubled its conversion rate, up 82%.",
        covers: ["Custom theme", "Product pages", "Collections", "Navigation", "Mobile speed"],
        caseSlug: "evie-lou-shopify-fashion-cro",
        imageAlt: "Evie Lou fashion store rebuilt on Shopify Plus",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Moves Off Wix, WooCommerce and WordPress",
        heading: "Your products, customers and rankings, moved without losing them",
        body: "Products, customer accounts, order history and reviews come across, every old page is redirected, and rankings are watched after launch. Capelli Sports left WordPress for Shopify and kept 95% of its search traffic.",
        covers: ["Wix", "WooCommerce", "WordPress", "301 redirects", "Rank tracking"],
        caseSlug: "capelli-sports-shopify-migration",
        imageAlt: "Capelli Sports store migrated from WordPress to Shopify",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Handmade and Artisan Stores",
        heading: "Maker stories and product claims shown only where they're true",
        body: "Maker profiles, materials and origin stored as product data, so badges like handmade or Native-made appear only on products that qualify. John Hardy's handcrafted jewelry store grew conversion rate 71% after its rebuild.",
        covers: ["Maker profiles", "Product badges", "Metafields", "Story pages", "Gift options"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy handcrafted jewelry store on Shopify Plus",
      },
      {
        title: "Launches and Limited Drops",
        heading: "Limited releases that go live on time and sell out cleanly",
        body: "Launch pages scheduled ahead, stock caps, waitlists and pre-orders with ship dates. Loop Earplugs' rebuilt landing pages delivered a 6.4% revenue uplift.",
        covers: ["Launch pages", "Stock caps", "Waitlists", "Pre-orders", "Scheduled releases"],
        caseSlug: "loop-earplugs-shopify-landing-page-cro",
        imageAlt: "Loop Earplugs landing page on Shopify",
      },
      {
        title: "Subscriptions and Repeat Orders",
        heading: "Turn one-time buyers into customers who reorder on their own",
        body: "Subscribe-and-save, reorder reminders and a customer portal to skip or swap. Happy Mammoth's subscription rebuild grew subscription revenue 134%.",
        covers: ["Subscriptions", "Reorder reminders", "Customer portal", "Loyalty", "Post-purchase emails"],
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        imageAlt: "Happy Mammoth subscription store on Shopify Plus",
      },
      {
        title: "Wholesale and Ongoing Support",
        heading: "Trade buyers who reorder online, and help after launch",
        body: "Company accounts with tiered prices and quick reorder, then 60 days of fixes with every build and a monthly plan if you want one. Henchman's B2B rebuild grew online revenue 58%.",
        covers: ["Trade accounts", "Tiered pricing", "Quick reorder", "60-day support", "Monthly plan"],
        caseSlug: "henchman-shopify-plus-b2b",
        imageAlt: "Henchman wholesale store on Shopify Plus",
        cta: { label: "Explore B2B setup", href: "/services/shopify-b2b-store-setup" },
      },
    ],
  },

  local: {
    label: "Selling from Oklahoma",
    heading: "What Oklahoma Means for Your Store",
    intro:
      "Three things about Oklahoma shape how your store should be set up. Settle each one with your Shopify developer. Oklahoma brands selling crafts, merchandise or anything taxable meet them first.",
    items: [
      {
        icon: "star",
        name: "Native-Made Claims Are Federal Law",
        desc: "Oklahoma is home to 38 federally recognized tribal nations, and Native-made art, jewelry and crafts are sold widely. Under the federal Indian Arts and Crafts Act, marketing a product as Indian-made, Native American or the work of a specific tribe when it isn't is a crime. If you sell these goods, drive the claim from verified product data so it appears only where it's true; your lawyer confirms what you can say.",
      },
      {
        icon: "flag",
        name: "Route 66's Centennial Year",
        desc: "Route 66 turned 100 on November 11, 2026, and Oklahoma has more than 400 drivable miles of it, more than any other state. Visitors buy on the road and go home. If you sell merchandise or souvenirs, schedule limited drops, capture emails at the point of sale and make reordering online easy.",
      },
      {
        icon: "receipt",
        name: "Tax Set by the Delivery Address",
        desc: "Oklahoma's state sales tax is 4.5%, but city and county taxes push the average combined rate to about 9%, and up to 11.5% in some places. Tax follows where the order is delivered, so one flat rate is wrong for most orders. We set up Shopify Tax to charge by address; your accountant handles registration and filing.",
      },
    ],
  },

  caseStudies: {
    heading: "Store Builds, Platform Moves and More Sales: Three Results",
    intro:
      "One project for each reason brands hire a Shopify developer. Oklahoma owners can compare like for like: each comes with measured results.",
    items: [
      {
        slug: "ronaldo-jewelry-shopify-plus-redesign",
        tags: ["Store Build", "Product Configurator", "Handmade Jewelry"],
        description: "A handmade jewelry brand rebuilt its store with a configurator so shoppers can design a piece and see it before paying. Total sales rose 250% and conversion rate 120%.",
        video: "/images/Case%20studies/Ronaldo%20Jewelry-video.mp4",
      },
      {
        slug: "this-works-shopify-plus-migration",
        tags: ["Platform Move", "Magento to Shopify Plus", "Skincare"],
        description: "A skincare brand left Magento 1 for Shopify Plus, with storefronts for the UK, US and EU. Conversion rate rose 38% and mobile conversion 45%.",
        video: "/images/Case%20studies/This%20Works%20video.mp4",
      },
      {
        slug: "twillory-shopify-cro",
        tags: ["More Sales", "A/B Testing", "Apparel"],
        description: "A shirt brand tested its product pages, navigation and checkout change by change. 70% of tests won, adding $5.4M in new annual revenue and $455k in the first 90 days.",
        video: "/images/Case%20studies/Twillory%20video.mp4",
      },
    ],
  },

  process: {
    heading: "How a Build, Move or Sales Project Runs",
    intro:
      "Five stages, each approved by you before work moves on. It's how a project with a Shopify developer should run. Oklahoma projects typically go live about six weeks after the first call.",
    steps: [
      { title: "Review and Quote", desc: "We look at your store, your platform and your numbers, then write down what to build, move or improve, with one price and a date." },
      { title: "Plan and Design", desc: "Page designs for phone and desktop, or a migration map of every product, customer and URL. You sign off before we build." },
      { title: "Build on Staging", desc: "All work happens on a staging store, so your current site keeps selling until launch day." },
      { title: "Test Orders and Claims", desc: "Test orders to several Oklahoma addresses, product badges, discounts and redirects, all checked before launch." },
      { title: "Launch and Support", desc: "We go live at a quiet hour, watch orders and rankings, and handle fixes for 60 days." },
    ],
  },

  compare: {
    heading: "Shopify Agency, Oklahoma Freelancer or DIY Builder?",
    intro: "Before hiring, most Oklahoma owners weigh three kinds of help against us. Each fits someone; these questions show which fits you.",
    options: [
      {
        name: "Freelance developer",
        goodFor: "Theme tweaks and single features.",
        watchFor: "A full build or platform move is a lot for one person. Ask who tests it and who answers after launch.",
      },
      {
        name: "Website builder you run yourself",
        goodFor: "A small catalog and a simple checkout.",
        watchFor: "Growth brings inventory, options and tax rules builders handle badly. Count your own hours as part of the cost.",
      },
      {
        name: "Industrial B2B specialist",
        goodFor: "Large distributor catalogs and ERP-heavy projects.",
        watchFor: "Retail and direct-to-consumer stores need a different focus. Ask for consumer stores they've grown.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Builds, migrations and sales work in-house",
        "One fixed price and date, in writing",
        "Real numbers from every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Categories We Build Shopify Stores For",
    intro:
      "Every category asks something different of its store. Before you brief a Shopify developer, Oklahoma brands in these categories should list the following.",
    items: [
      { icon: "star", name: "Jewelry, Art and Crafts", desc: "Maker profiles, verified product claims and gift options." },
      { icon: "flag", name: "Merchandise and Souvenirs", desc: "Limited drops, stock caps and easy online reorders." },
      { icon: "shirt", name: "Apparel and Western Wear", desc: "Size guides, new-season launches and fast collection pages." },
      { icon: "food", name: "Food and Specialty Goods", desc: "Gift boxes, subscriptions and ship-day rules." },
      { icon: "home", name: "Home and Outdoor", desc: "Large option sets, freight delivery and seasonal collections." },
      { icon: "box", name: "Wholesale and Trade", desc: "Company accounts and tiered pricing. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Selling something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Developer Oklahoma FAQs",
  faqs: [
    {
      question: "How do I know whether I need a new store or a redesign?",
      answer:
        "If you're on Wix, WooCommerce or another platform you've outgrown, you need a new store on Shopify. If you're already on Shopify and getting visitors who don't buy, a redesign of the pages that matter usually does more. We'll tell you which on the first call.",
      unique: true,
    },
    {
      question: "Can you move my store off Wix or WooCommerce?",
      answer:
        "Yes. Products, customer accounts, order history and reviews come across, and every old page points to its new address so you keep your search rankings.",
      unique: true,
    },
    {
      question: "How do you get a store to sell more?",
      answer:
        "We look at where shoppers drop off, fix the pages that lose the most sales first, and test changes against the original where traffic allows. Twillory added $5.4M in new annual revenue that way.",
      unique: true,
    },
    {
      question: "Can my store show Native-made or handmade badges safely?",
      answer:
        "Yes. We store maker and origin details as product data and show badges only where that data says they apply, so a new product never carries a claim by accident. Your lawyer confirms what you can say.",
      unique: true,
    },
    {
      question: "Do I need Shopify Plus?",
      answer:
        "Most brands don't at first. Plus earns its cost with checkout customization, wholesale company accounts, more automation or several storefronts. We'll recommend one, with reasons.",
      unique: false,
    },
    {
      question: "Is a freelancer enough, or do I need a team?",
      answer:
        "For one change to an existing theme, a freelancer is often enough. Moving platforms or rebuilding the store means design, development, testing and aftercare all at once, and that is easier to trust to a team that does all four.",
      unique: false,
    },
    {
      question: "What will my project cost?",
      answer:
        "Prices follow the work: a platform move with thousands of products costs more than a redesign of five templates. So there's no rate card. After a short call you get one fixed price and a date in writing, usually within two working days.",
      unique: false,
    },
    {
      question: "When could the new store go live?",
      answer:
        "Most builds and moves take around six weeks from the first call. If a launch, a drop or the holiday season sets your deadline, we plan backwards from it and write the date into the scope.",
      unique: false,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Grab a slot for a video call with a senior Shopify specialist. Show us the store and tell us where sales stall; a written price and date follows within two working days.",
    bullets: [
      "Share your store, your platform and your numbers",
      "Hear whether a build, a move or a redesign comes first",
      "Receive one fixed price and a launch date in writing",
      "Keep the scope document either way",
    ],
  },

  sources: [
    {
      id: "iaca-1990",
      claim: "The Indian Arts and Crafts Act of 1990 is a truth-in-advertising law making it a federal crime to misrepresent a good as Indian-made, Native American or the product of a particular tribe; enforced by the Indian Arts and Crafts Board",
      url: "https://doi.gov/iacb/act",
      publisher: "US Department of the Interior, Indian Arts and Crafts Board",
      captured: "2026-11-18",
      reviewAfterDays: 365,
    },
    {
      id: "ok-tribal-nations",
      claim: "38 federally recognized tribal nations are headquartered in Oklahoma",
      url: "https://www.okhistory.org/research/tribalnations",
      publisher: "Oklahoma Historical Society",
      captured: "2026-11-18",
      reviewAfterDays: 365,
    },
    {
      id: "ok-route-66-centennial",
      claim: "Route 66 was born November 11, 1926; Oklahoma has more than 400 drivable miles, the most of any state, and is marking the 2026 centennial",
      url: "https://travelok.com/route-66-centennial",
      publisher: "TravelOK (Oklahoma Tourism)",
      captured: "2026-11-18",
      reviewAfterDays: 365,
    },
    {
      id: "ok-sales-tax",
      claim: "Oklahoma state sales tax 4.5%; average combined state and local rate 8.99%",
      url: "https://taxfoundation.org/location/oklahoma/page/2/",
      publisher: "Tax Foundation",
      captured: "2026-11-18",
      reviewAfterDays: 365,
    },
    {
      id: "ok-destination-max",
      claim: "Oklahoma sales tax is destination-based; combined rates reach up to 11.5%",
      url: "https://stripe.com/resources/more/oklahoma-sales-tax-rate",
      publisher: "Stripe",
      captured: "2026-11-18",
      reviewAfterDays: 365,
    },
  ],
  wordCountTarget: [1600, 2800],
};
