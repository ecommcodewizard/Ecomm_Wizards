// Geo v5 S2, page 11 of 18: Raleigh, service format.
//
// Keywords (v5 plan 3.2 + SEMrush 2026-11-11: 70/mo, KD 0%; every local
// ranking page 0 referring domains except TheeDigital, 14):
//   primary    shopify development services raleigh (70)
//   secondary  shopify store development services raleigh (40, KD 6,
//              SEMrush): services heading
//              shopify developer raleigh nc (40, Ahrefs): FAQ heading only;
//              its SERP shows job-search filters and an hourly-rate AI answer
// H1 owner pick: "make smart products easy to buy". Angle: products that
// need explaining (Research Triangle, life sciences). Kept clear of
// /services/ecommerce-agency/raleigh ("ecommerce agency raleigh") and
// /services/shopify-app-development/raleigh (app terms), and of the
// Charlotte and North Carolina pages' facts.

import type { ServiceGeoPage } from "../types";

export const SHOPIFY_DEV_RALEIGH: ServiceGeoPage = {
  type: "service",
  slug: "raleigh",
  path: "/services/shopify-development-agency/raleigh",
  hub: "/services/shopify-development-agency",
  geo: { name: "Raleigh", type: "metro", areaServed: "Raleigh, North Carolina" },

  targetKeyword: "shopify development services raleigh",
  secondaryKeywords: ["shopify store development services raleigh", "shopify developer raleigh nc"],
  faqKeywords: [],
  metaTitle: "Shopify Development Services Raleigh | Smart Products, Clear Stores",
  metaDescription:
    "Shopify development services Raleigh brands hire to make smart products easy to buy: quizzes, comparison tables, custom themes and Shopify Plus at a fixed price.",
  shortTitle: "Shopify Development Services Raleigh",
  serviceType: "Shopify development",

  hero: {
    badge: "Shopify Development for Raleigh Brands",
    h1Lead: "",
    h1Gradient: "Shopify Development Services",
    h1Tail: "Raleigh Brands Hire to Make Smart Products Easy to Buy",
    intro:
      "If shoppers need to understand your product before they buy it, a pretty store isn't enough. We provide the Shopify development services Raleigh brands hire to make clever products clear: product quizzes, comparison tables, [link:/services/shopify-theme-development|custom themes], [link:/services/shopify-plus-development|Shopify Plus] and [link:/services/migration|migrations], at a fixed price agreed before work starts.",
    stats: [
      { value: "150+", label: "Stores Built" },
      { value: "$400M+", label: "Client Revenue" },
      { value: "8+ Years", label: "On Shopify" },
      { value: "60 Days", label: "Support Included" },
    ],
    image: {
      src: "/images/shopify-development-agency-raleigh-hero-v1.webp",
      alt: "Shopify stores for Loop Earplugs, 111SKIN and This Works, with conversion up 46% and 38%",
      cutout: true,
    },
    footnote: "Shopify Plus Partner. 150+ stores built on Shopify only.",
  },

  summary:
    "Ecomm Wizards provides Shopify development services Raleigh brands hire to make smart products easy to buy: product quizzes and finders, comparison tables, clear spec and ingredient pages, custom themes, Shopify Plus and migrations. The team works only on Shopify, has built 150+ stores, and agrees a fixed price and launch date in writing before work starts.",

  trust: {
    heading: "Brands With Products Worth Explaining Trust Us",
    subheading: "Every store was designed, built and launched in-house by our own Shopify team.",
  },

  pains: {
    heading: "Why Smart Products Stall on Ordinary Stores",
    intro:
      "When a product needs a minute of explaining, a standard theme gives it a photo and a price. These are the four gaps any Shopify development services Raleigh brands hire should close first.",
    items: [
      {
        icon: "search",
        name: "Shoppers Can't Tell Which Version They Need",
        desc: "Several models, strengths or formulas that look alike on the page. Without help choosing, shoppers guess, pick the wrong one or leave to research elsewhere.",
        cost: "Lost first orders, and returns from the shoppers who guessed wrong.",
      },
      {
        icon: "receipt",
        name: "The Science Is Buried or Missing",
        desc: "Ingredients, test results, specs and how-it-works detail sit in a PDF or nowhere at all, so the reason your product is better never reaches the shopper.",
        cost: "Shoppers compare you on price, because nothing on the page tells them why to pay more.",
      },
      {
        icon: "alert",
        name: "Questions That Turn Into Support Emails",
        desc: "The same questions arrive every day: will it fit, is it safe, how is it different. If the store answered them, those emails would be orders.",
        cost: "Your team answers questions while the shopper's interest fades.",
      },
      {
        icon: "star",
        name: "Proof Hidden Below the Fold",
        desc: "Reviews, expert endorsements and results sit at the bottom of the page, where a hesitant shopper never scrolls.",
        cost: "Shoppers who wanted reassurance leave before they find it.",
      },
    ],
  },

  services: {
    label: "Development Services",
    heading: "Shopify Store Development Services for Raleigh Brands With Smart Products",
    intro:
      "Everything is built in-house by people who work only on Shopify. Once the store is live, we can also run [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-seo-agency|Shopify SEO].",
    // Visual rows (owner, 2026-11-12): 8 services merged to 6, each with a
    // case study the page's own case-studies section doesn't use.
    items: [
      {
        title: "Product Quizzes and Finders",
        heading: "A few questions, the right product, and answers your email tool can use",
        body: "Quizzes that point each shopper to the right product, save the answers to their account and pass them to your email marketing.",
        covers: ["Product quizzes", "Saved answers", "Email handoff", "Personalized results", "Retake flow"],
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        imageAlt: "Happy Mammoth store with a goals-based product quiz",
        cta: { label: "Explore CRO", href: "/services/shopify-cro-agency" },
      },
      {
        title: "Comparison and Proof Pages",
        heading: "Specs, ingredients and test results right where the decision is made",
        body: "Side-by-side comparisons and spec tables from metafields, with ingredients, expert quotes and reviews placed beside the add-to-cart button.",
        covers: ["Comparison tables", "Spec pages", "Ingredient lists", "Test results", "Review placement"],
        caseSlug: "neom-wellbeing-shopify-upgrade",
        imageAlt: "NEOM Wellbeing product pages with ingredient detail",
        cta: { label: "Explore UX and UI design", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        title: "Custom Theme Development",
        heading: "Education pages and launches without a developer on call",
        body: "A custom theme with flexible sections, so your team adds guides, FAQs and new products on its own schedule.",
        covers: ["Custom sections", "Education pages", "FAQ blocks", "Metafields", "Launch templates"],
        caseSlug: "vithit-shopify-plus-d2c",
        imageAlt: "VITHIT drinks store on a flexible custom theme",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        title: "Subscriptions and Reorders",
        heading: "The products customers use every month, reordered automatically",
        body: "Subscribe-and-save and reorder flows with a portal to skip, swap or pause, so repeat orders don't depend on reminders.",
        covers: ["Subscribe and save", "Reorder flows", "Customer portal", "Skip or swap", "Retention offers"],
        caseSlug: "wild-shopify-plus-subscriptions",
        imageAlt: "Wild refillable deodorant store built around subscriptions",
      },
      {
        title: "Shopify Plus and Migration",
        heading: "Onto Shopify Plus from WooCommerce or Magento with every review intact",
        body: "Products, customers, orders and reviews move across with each URL redirected, and Plus is added when your volume calls for it.",
        covers: ["WooCommerce", "Magento", "Shopify Plus", "Review import", "301 redirects"],
        caseSlug: "john-hardy-shopify-plus-migration",
        imageAlt: "John Hardy store migrated onto Shopify Plus",
        cta: { label: "Explore migrations", href: "/services/migration" },
      },
      {
        title: "Support After Launch",
        heading: "The same team on hand for new pages, features and fixes",
        body: "60 days of post-launch support with every build, then an optional monthly retainer for whatever comes next.",
        covers: ["60-day support", "New pages", "Feature work", "Bug fixes", "Monthly retainer"],
        caseSlug: "evie-lou-shopify-fashion-cro",
        imageAlt: "Evie Lou fashion store supported after launch",
        cta: { label: "Explore maintenance and support", href: "/services/shopify-maintenance-and-support" },
      },
    ],
  },

  local: {
    label: "Selling from Raleigh",
    heading: "What Selling from Raleigh Means for Your Store",
    intro:
      "Three things about Raleigh change how your store should be built: the research community around you, the science-backed products it produces, and Wake County's sales tax.",
    items: [
      {
        icon: "chart",
        name: "Next Door to the Largest US Research Park",
        desc: "Research Triangle Park, between Raleigh and Durham, is the largest research park in the United States, at about 7,000 acres. Brands born near it often sell products built on real science, and their stores need to show that science clearly.",
      },
      {
        icon: "star",
        name: "A Life Sciences State",
        desc: "NCBiotech counts more than 840 North Carolina life sciences companies, employing over 75,000 people. If your product comes out of that world, from supplements to skincare to devices, shoppers expect evidence, and the store should put it in front of them.",
      },
      {
        icon: "receipt",
        name: "Wake County Sales Tax, Set Up Right",
        desc: "Raleigh's combined sales tax rate is 7.25%: North Carolina's 4.75%, Wake County's 2% and a 0.5% transit tax. Out-of-state sellers collect once their North Carolina sales pass $100,000 a year. We set up Shopify Tax for each address, and your accountant handles registration and filing.",
      },
    ],
  },

  caseStudies: {
    heading: "Smart Products, Clear Stores, Measured Results",
    intro:
      "Proof to ask of any Shopify development services Raleigh brands consider: each product here needed explaining, and each result was measured.",
    items: [
      {
        slug: "loop-earplugs-shopify-landing-page-cro",
        tags: ["Hearing Tech", "Product Quiz", "Landing Pages"],
        description: "An earplug brand selling in 100+ countries rebuilt its landing pages and launched a product recommendation quiz. New-shopper conversion rose 5.9% and revenue 6.4% in testing.",
        video: "/images/Case%20studies/Loop%20Earplugs%20video.mp4",
      },
      {
        slug: "111skin-shopify-cro-redesign",
        tags: ["Clinical Skincare", "Skin Quiz", "Custom Theme"],
        description: "A dermatologist-founded skincare brand added a skin quiz and a custom theme. Conversion rate rose 46% and revenue 21%.",
        video: "/images/Case%20studies/111skin%20video.mp4",
      },
      {
        slug: "this-works-shopify-plus-migration",
        tags: ["Sleep Skincare", "Magento Exit", "Shopify Plus"],
        description: "A science-led sleep and skincare brand left Magento for Shopify Plus storefronts in the UK, US and EU. Conversion rate rose 38% and mobile conversion 45%.",
        video: "/images/Case%20studies/This%20Works%20video.mp4",
      },
    ],
  },

  process: {
    heading: "From Kickoff to a Store That Explains Itself",
    intro:
      "Five stages with your sign-off at each one, the way Shopify development services Raleigh brands trust should run. Most stores are live about six weeks after kickoff.",
    steps: [
      { title: "Learn the Product", desc: "We go through your products, your customers' common questions and your proof, then fix the scope, a fixed price and a launch date in writing." },
      { title: "Plan the Explanation", desc: "Quiz questions, comparison points and page structure mapped in wireframes, so each page answers the right question at the right moment." },
      { title: "Design the Store", desc: "Full Figma designs for desktop and mobile, with room for specs, ingredients and reviews. You approve every screen." },
      { title: "Build and Test", desc: "The theme, quiz and apps built on a staging store, then every product path, device and tax rule tested before launch." },
      { title: "Launch and Learn", desc: "A planned go-live, 60 days of support, and the first tests to run once real shoppers start using the quiz." },
    ],
  },

  compare: {
    heading: "What to Check on Your Shopify Development Services Raleigh Shortlist",
    intro: "Search results show local web agencies, freelancers and directory lists. Here is what each one suits, and what to ask before you sign.",
    options: [
      {
        name: "Local web and marketing agency",
        goodFor: "Brand websites, local SEO and ads.",
        watchFor: "Ask to see quizzes, comparison tools and product education they have built on Shopify, not just homepages.",
      },
      {
        name: "Freelance Shopify developer",
        goodFor: "Small fixes and single features.",
        watchFor: "Design, quizzes, apps and migration rarely sit with one person, and launches slip when they're busy.",
      },
      {
        name: "Directory and review listings",
        goodFor: "Comparing options and hourly rates side by side.",
        watchFor: "A listing shows a rate, not a result. Ask for measured outcomes from products like yours.",
      },
    ],
    us: {
      name: "Ecomm Wizards",
      points: [
        "Shopify only, with 150+ stores built",
        "Quizzes, finders and comparison tools built in-house",
        "Fixed price and launch date in writing",
        "Measured results in every case study",
        "You own the code, the data and every account",
      ],
    },
  },

  industries: {
    heading: "Products We Build Shopify Stores For",
    intro:
      "Any product that needs explaining benefits from a clearer store. Here is what Shopify development services Raleigh brands hire should add for each category.",
    items: [
      { icon: "star", name: "Clinical Skincare", desc: "Skin quizzes, ingredient breakdowns, before-and-after galleries and regimen bundles." },
      { icon: "food", name: "Supplements and Nutrition", desc: "Formula detail, dosage guidance, subscriptions and quizzes that match goals to products." },
      { icon: "code", name: "Consumer Tech and Devices", desc: "Spec tables, side-by-side comparisons, compatibility checkers and setup guides." },
      { icon: "user", name: "Health and Wellbeing", desc: "Plain-language explanations, expert proof and reorder flows for daily-use products." },
      { icon: "flag", name: "Performance Gear", desc: "Fit finders, materials and testing detail, and comparisons between models." },
      { icon: "box", name: "Lab and Professional Supply", desc: "Account pricing and reorders for professional buyers. See our [link:/services/shopify-b2b-store-setup|Shopify B2B setup]." },
    ],
    footnote: "Making something else? We build for every category, always on Shopify.",
  },

  faqHeading: "Shopify Development FAQs for Raleigh Brands",
  faqs: [
    {
      question: "Should I hire a Shopify developer Raleigh NC brands recommend, or an agency?",
      answer:
        "A freelance developer suits small fixes and single features. An agency suits work that spans design, quizzes, apps and launch, because it covers every skill at once and your project doesn't stall when one person is busy.",
      unique: true,
    },
    {
      question: "How are Shopify development services priced?",
      answer:
        "By project, not by the hour. After a short online call you get a written scope with one fixed price and a launch date within 48 hours, and that number holds unless you add to the work.",
      unique: false,
    },
    {
      question: "Can you build a product quiz for our store?",
      answer:
        "Yes. We build quizzes that match shoppers to the right product, save their answers to their account and send them to your email platform, so follow-ups are personal too.",
      unique: false,
    },
    {
      question: "How do you show scientific or technical detail without overwhelming shoppers?",
      answer:
        "We lead with the plain benefit and let shoppers open the detail when they want it: short summaries first, then expandable specs, ingredient lists, test results and comparisons below.",
      unique: true,
    },
    {
      question: "Can we make health or performance claims on our store?",
      answer:
        "That's a question for your regulatory adviser, not your developer. What we do is make it easy to show approved claims, references and disclaimers consistently on every product page, and to update them in one place.",
      unique: true,
    },
    {
      question: "Does our Shopify agency need to be local?",
      answer:
        "No. We run every project through online calls, a staging store you can test yourself and written weekly updates, with the scope, price and launch date agreed in writing first.",
      unique: true,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Most stores go live about six weeks after kickoff. Quizzes and comparison tools fit inside that window; Shopify Plus and migrations can take longer. You get the launch date in writing before we start.",
      unique: false,
    },
    {
      question: "Do you set up North Carolina sales tax in Shopify?",
      answer:
        "Yes. We configure Shopify Tax so each order carries the right state and county rate, including Raleigh's 7.25% combined rate. Out-of-state sellers collect once their North Carolina sales pass $100,000 a year.",
      unique: true,
    },
  ],

  book: {
    heading: "Book a Free Call About Your Store",
    sub: "Pick a time for an online call with a senior Shopify specialist. Tell us about your product and what shoppers ask before buying, and within 48 hours you'll have a fixed price and a launch date in writing.",
    bullets: [
      "Walk through your products, your customers' questions and your proof",
      "Get a fixed price and a launch date within 48 hours",
      "See which quiz or comparison tools would help shoppers most",
      "Keep the written scope, whether you hire us or not",
    ],
  },

  sources: [
    {
      id: "rtp",
      claim: "Research Triangle Park is the largest research park in the United States, about 7,000 acres",
      url: "https://www.rtp.org/about-us/",
      publisher: "Research Triangle Park",
      captured: "2026-11-11",
      reviewAfterDays: 365,
    },
    {
      id: "ncbiotech",
      claim: "North Carolina has 840+ life sciences companies employing more than 75,000 people",
      url: "https://www.ncbiotech.org/news/north-carolina-booked-over-10-billion-life-sciences-investments-2024",
      publisher: "NCBiotech",
      captured: "2026-11-11",
      reviewAfterDays: 365,
    },
    {
      id: "wake-rate",
      claim: "Wake County combined sales tax rate 7.25% (4.75% state, 2% county, 0.5% transit)",
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
