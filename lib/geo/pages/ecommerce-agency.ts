// Page 1 of Batch 1: /services/ecommerce-agency (national hub, H1).
// Spec: Batch 1 Page Specification v2.0 (hub spine, section 4.1 asset, section
// 5 proof, section 6 FAQ, section 7 conversion). Keywords: Inventory v4.0 H1.
//
// Primary keyword: "ecommerce agency" (2,400/mo, Google Keyword Planner).
// Secondaries placed once each: "e-commerce agency", "full service ecommerce
// agency", "digital commerce agency", "ecommerce management agency",
// "ecommerce strategy agency".
//
// Every platform figure in the Only-Here Asset came from the vendor's own
// pricing page or developer documentation on 2026-08-19. Per the owner's call,
// the page carries no visible citations and no Sources section; the capture
// date and method stay disclosed in asset.method.
// Every cell is filled and verified as of that date. If a future edit adds a
// figure nobody has checked, mark it NI(...) rather than guessing: an honest
// gap costs less than a wrong number on a table this page is built around.
//
// Copy rules: US spelling, no em dashes, no filler words (lib/geo/forbidden.ts),
// active voice, concrete numbers over adjectives. Agency price bands must stay
// consistent with app/services/shopify-development-agency/page.tsx.

import type { HubPage } from "../types";

const NI = (what: string) => `[NEEDS INPUT: ${what}]`;

export const ECOMMERCE_AGENCY: HubPage = {
  type: "hub",
  slug: "ecommerce-agency",
  path: "/services/ecommerce-agency",
  status: "published",

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency",
  secondaryKeywords: [
    "e-commerce agency",
    "full service ecommerce agency",
    "digital commerce agency",
    "ecommerce management agency",
    "ecommerce strategy agency",
  ],
  // Tertiary / FAQ keyphrases assigned to H1 in the keyword plan. Question
  // forms: they belong in the FAQ block and in answer-shaped passages.
  faqKeywords: [
    "how to choose an ecommerce agency for brand growth",
    "when to hire ecommerce agency",
    "what to look for in an ecommerce development partner",
    "how to choose an ecommerce development agency for my industry",
    "how to value an ecommerce platform design and development agency",
    "what is ecommerce development",
  ],
  metaTitle: "Ecommerce Agency That Builds and Grows Your Store",
  metaDescription:
    "An ecommerce agency that builds your store and then helps you sell more through it. One team for both. Fixed price and launch date in writing before we start.",
  shortTitle: "Ecommerce Agency",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "An Ecommerce Agency That Builds Your Store and Grows It",
  qualifier:
    "We build your store, move it off a platform that stopped working, or fix the one somebody else got wrong. Then we help you sell more through it. You get the full price and the launch date in writing before we start.",

  // Same hero image the Shopify development landing page uses.
  heroImage: {
    src: "/images/Group_1000003974_d0eba414-7aec-4930-b534-a4dcc91d004e_1024x1024.png",
    alt: "Ecommerce agency team building a custom Shopify storefront",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "You have probably been here before. You hired an ecommerce agency. The designs looked great. Then the launch date moved twice, the bill grew past the quote, and months later your sales looked the same as when you started.\n\nThe design was almost never the reason. The reason was that nobody wrote down what you were getting, or what it would cost, before the work began. So there was nothing to hold anyone to.",

  // Answer-first definition block. This is the passage an AI Overview or an LLM
  // lifts, so it defines the entity, states the band it serves, and names the
  // deliverable, all without depending on the rest of the page.
  quickAnswer:
    "An ecommerce agency is the team that builds your online store and then helps you sell more through it. That covers design, the build itself, the tools it connects to, and the marketing that brings people in. We do all of it on Shopify, for one fixed price agreed before we start. Most stores go live in six weeks, and the code is yours.",

  // ── Trust bar (under the hero) ────────────────────────────────────────
  // {storesBuilt} resolves from lib/brand-stats.ts at render time so the
  // headline figure cannot drift from the canonical number.
  trust: {
    heading: "We Have Built {storesBuilt} Stores. Here Are a Few.",
    subheading:
      "Every one was built by the same people you would be talking to. No handing you over to a team you never meet, which is how most of the ecommerce agency world works.",
  },

  // ── Block 3: What we actually do ──────────────────────────────────────
  whatWeDo: [
    "People hire an ecommerce agency for one of two jobs. We do both. We build the store, and we bring people to it. Most agencies pick one and hand you to someone else for the other, which is how you end up with two suppliers blaming each other.",
    "On the building side: a new store, a [link:/services/migration|move off a platform] that stopped working, or a rescue when the last agency left you something broken. Anything no app can do, we write ourselves as [link:/services/shopify-development-agency|custom development].",
    "On the selling side: [link:/services/shopify-seo-agency|search], [link:/services/shopify-cro-agency|turning visitors into buyers], email and SMS, and [link:/services/creative-strategy|the ads themselves]. Same team. If traffic goes up and sales do not, nobody gets to point across the room.",
    "Builds usually land between $10,000 and $50,000. Growth work is monthly. Either way you get the number and the date in writing before we start.",
  ].join("\n\n"),

  // ── Who we work with ──────────────────────────────────────────────────
  // Six categories, every one of them backed by studies in lib/case-studies.ts
  // (apparel, beauty, food and drink, jewelry, sports, B2B). Do not add a
  // category here that the corpus cannot evidence.
  segments: {
    heading: "Who Do We Work With?",
    intro:
      "These six are where we have built most. The plumbing is the same everywhere. What changes is how you sell and what breaks when you grow. Here is what we watch in each, so you are not paying an ecommerce agency to learn on your store.",
    items: [
      {
        icon: "apparel",
        name: "Fashion and Apparel",
        what: "Size and fit data, returns that do not eat the margin, and drop mechanics that hold when traffic spikes.",
        breaks: "Returns. When size data does not match what arrives, one sale becomes two shipping legs, a restock, and a refund.",
      },
      {
        icon: "beauty",
        name: "Beauty and Skincare",
        what: "Routine merchandising, ingredient detail at scale, and subscription flows a customer can cancel without emailing you.",
        breaks: "Cancellation. A flow that hides the exit turns a churned subscriber into a chargeback and a public review.",
      },
      {
        icon: "consumable",
        name: "Food, Drink and Supplements",
        what: "Subscription billing, batch and expiry handling, and the disclosure rules that follow anything ingestible.",
        breaks: "Lot and expiry. Shopify counts a SKU, not a batch, so short-dated stock and recalls need a system built on top.",
      },
      {
        icon: "jewelry",
        name: "Jewelry and Accessories",
        what: "High-consideration product pages, made-to-order and engraving options, and heavy imagery that still loads fast.",
        breaks: "Page weight. Full-quality imagery at this price point pushes LCP past the point where mobile buyers leave.",
      },
      {
        icon: "outdoor",
        name: "Sports and Outdoors",
        what: "Spec tables buyers compare line by line, wide variant matrices, and stock that moves with the season.",
        breaks: "The option ceiling. Shopify allows three, so size by width by color leaves nothing for length, fit, or gender.",
      },
      {
        icon: "wholesale",
        name: "B2B and Wholesale",
        what: "Company accounts, a price list per customer, net terms, and quote-to-order without running a second store.",
        breaks: "Price leakage. Trade pricing that renders for logged-out visitors ends up indexed in Google.",
      },
    ],
  },

  // ── Block 4: Only-Here Asset (platform decision table) ────────────────
  asset: {
    title: "What Does Each Platform Really Cost You?",
    renderer: "comparison",
    method: {
      captured: "2026-08-19",
      howGathered:
        "Figures come from each vendor's own pricing page and developer documentation on the capture date. We excluded comparison articles and affiliate roundups because their numbers are sold, not reported. License figures are annual-billing list prices in USD. App and hosting costs sit outside the table because no vendor publishes a representative number.",
    },
    columns: ["Cost or limit", "Shopify", "Shopify Plus", "BigCommerce", "WooCommerce", "Adobe Commerce"],
    rows: [
      {
        label: "Yearly fee at $1M in sales",
        cells: ["$3,588", "$27,600", "$3,588 plus 0.9% over the cap", "$0", "Quote only"],
        note: "Just the platform fee. Apps, hosting and card processing are on top.",
      },
      {
        label: "Yearly fee at $10M in sales",
        cells: ["$3,588", "From $27,600", "From $17,988", "$0", "Quote only"],
        note: "WooCommerce stays free to license. By this size your servers are the bill.",
      },
      {
        label: "Yearly fee at $50M in sales",
        cells: ["Not this plan", "You negotiate", "You negotiate", "$0", "Quote only"],
        note: "Three of the five stop publishing a price before you get this big.",
      },
      {
        label: "Extra fee if you use your own payment provider",
        cells: ["0.6% to 2%", "0.2%", "0% to 2%", "None", "None"],
        note: "This is the number that bites. At $10M in sales, 0.6% is $60,000 a year, which dwarfs the platform fee above it.",
      },
      {
        label: "How many versions of one product you can list",
        cells: ["2,048", "2,048", "600", "No limit", "No published limit"],
        note: "Shopify also caps you at three choices per product, like size, color and material. A fourth is where people get stuck.",
      },
      {
        label: "Can you change the checkout?",
        cells: ["Apps only", "Yes, within limits", "Yes, it is open source", "Yes, it is your code", "Yes, it is your code"],
        note: "Open does not mean free. On the last two, anything you change is yours to build and yours to maintain.",
      },
      {
        label: "Getting your data out if you leave",
        cells: ["Products, customers, orders", "Same, plus saved cards", "Products, customers, orders", "Products only", "No order export"],
        note: "Saved card details never travel in a spreadsheet. Moving them is a separate deal between the two payment companies, and only Shopify Plus can do it. Skip it and every subscriber types their card in again.",
      },
    ],
    derived:
      "Two things jump out. The monthly fee is almost never the number that matters: the payment fee and the first limit you hit will both cost you more. And published pricing runs out at about $2M in sales, so above that what you pay depends on how well you negotiate. Shopify wins most of these for stores under $50M. Not all. An ecommerce agency worth paying tells you when yours is the exception.",
    derivedList: {
      title: "When we would tell you not to move to Shopify",
      items: [
        "You need more than three choices on a single product. Shopify stops at three, and working around it costs more than it saves.",
        "Your checkout has to do something unusual. Shopify only lets you change checkout in set ways now, and some rules simply will not fit.",
        "You sell something most payment companies refuse to handle. The platform stops mattering if you cannot take the money.",
        "You sell wholesale in a way that needs quotes going back and forth, and rebuilding that costs more than the platform ever saves you.",
        "You already have a system that talks to your warehouse and it works. Rebuilding it costs more than you save. Keeping something nobody loves is sometimes right.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Where headless fits",
        body:
          "You may have been pitched headless. It is not a sixth option because it is not a platform. It means running the shop window separately from the machinery behind it, on any of these five. It gives you total control of how the site looks. It costs you the drag-and-drop editor, most apps, and a front-end developer forever. Under about $20M in sales it usually takes more than it gives.",
      },
    ],
    reviewAfterDays: 180,
  },

  // Mid-page conversion prompt, placed where the reader has just finished the
  // platform table and intent is highest.
  midCta: {
    text: "Not sure which column you belong in? Send us your store address and we will tell you. No charge, no pitch.",
    label: "Ask us",
  },

  // ── Block 5: How the engagement runs ──────────────────────────────────
  // Rendered as the numbered phase cards used on the Shopify development
  // landing page. Card numbers come from array order, so this order is the
  // sequence a client actually moves through.
  engagement: {
    heading: "What Working With Us Looks Like",
    intro: "Five steps, one price, one date, all in writing before we start. Most ecommerce agency projects slip because nobody wrote down what was being built. We write it down first.",
    steps: [
      {
        week: "Before you pay anything",
        title: "We Look At Your Store",
        what: "We go through what you have now and find where people drop out, what is slow, and what it is costing you. You get that in writing whether you hire us or not, so you learn where you are losing money before you have paid us anything.",
      },
      {
        week: "Week 1",
        title: "We Agree the Price",
        what: "We write down what you are getting, what you are not, and the day it goes live. You have the price and the date by Friday. We do not bill by the hour, so a slow week is our problem, not your invoice.",
      },
      {
        week: "Weeks 2 to 4",
        title: "We Build It",
        what: "Everything goes into a practice version of your store you can open whenever you like. You see it every week instead of waiting for one big reveal, and you approve each stage before we start the next.",
      },
      {
        week: "Week 5",
        title: "We Move Your Data",
        what: "Products, customers and past orders come across. Every old web address gets pointed at its new one and tested first, so the Google traffic you already earn does not vanish overnight. Then we test on phones, tablets and every browser people actually use.",
      },
      {
        week: "Week 6, then 60 days",
        title: "We Launch and Hand Over",
        what: "We go live with a way to undo it if anything looks wrong. You get the code, the files and written notes on how it all works. Then 60 days of support, and we watch your search traffic and checkout closely for the first month.",
      },
    ],
  },

  // ── Block 6: What we don't do ─────────────────────────────────────────
  whatWeDontDo: [
    "We do not make money on apps. Nobody pays us to recommend theirs, so if we tell you to install one, that is the only reason.",
    "We do not make changes straight onto your live store. Everything gets tried on a copy first, even a one-line fix, so your shop never goes down while we work.",
    "We do not take a share of your company or your sales. You pay us a fee and you keep everything the work earns.",
    "We do not give you a price in a meeting. Every number comes in writing, after we have looked inside your store. That is the least you should expect from an ecommerce agency.",
  ],

  proofHeading: "Work We Have Done",
  objectionsHeading: "What You Are Probably Thinking",

  // ── Block 7: Proof (build type, per Page Spec section 5) ──────────────
  // Figures below are the published heroMetric values in lib/case-studies.ts.
  // No client location appears anywhere, by design.
  proof: [
    {
      slug: "john-hardy-shopify-plus-migration",
      vertical: "Jewelry and accessories",
      whatWasBuilt: "Replatform from Salesforce Commerce Cloud to Shopify Plus",
      outcome: "+71% conversion rate",
      verified: true,
    },
    {
      slug: "capelli-sports-shopify-migration",
      vertical: "Sports and fitness",
      whatWasBuilt: "Migration off WordPress with full redirect mapping",
      outcome: "+24% conversion rate, 95% of SEO equity retained",
      verified: true,
    },
    {
      slug: "wild-shopify-plus-subscriptions",
      vertical: "Cosmetics and beauty",
      whatWasBuilt: "Ground-up Shopify Plus build with a subscription program",
      outcome: "80,000+ monthly subscribers",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  objections: [
    {
      objection: "We paid an agency for a rebuild last year and conversion did not move.",
      answer:
        "Then the rebuild was fixing the wrong thing. Before we quote, we find where people actually drop out: the traffic you buy, the product page, the cart, or the checkout. If it is not the build, we say so and you keep your money. Any digital commerce agency that quotes a rebuild without opening your analytics is selling you a template.",
    },
    {
      objection: "How do I know the price will not move?",
      answer:
        "Because we agree the number before we start, and if the job grows we requote before building, not after. Bills grow when an ecommerce agency quotes a rough range against a vague brief. We write down exactly what you get first, which is why our quote takes two days instead of an afternoon.",
    },
    {
      objection: "What happens if you disappear after launch?",
      answer:
        "You own the code and the notes from day one, so walking away costs you nothing. Every project comes with 60 days of support after launch. After that you can keep us on, hire in-house, or hand it to another agency. Nothing we build locks you in.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // The six tertiary keyphrases assigned to this page in the keyword plan are
  // question forms, so they ARE the questions here rather than phrases buried in
  // answer prose. Each still carries one of the shared-set topics required by
  // Page Spec section 6.2 (cost, timeline, who does the work, what we need from
  // you, what happens if it goes wrong) and the three unique topics from 6.3
  // (freelancer vs agency, who owns the code, when we say no), folded into the
  // answers. Every answer opens with a complete answer to its own question, so
  // a model can quote one line without the surrounding page.
  faqs: [
    {
      // tertiary: what is ecommerce development
      question: "What is ecommerce development?",
      answer:
        "Ecommerce development is the work of building and running the store itself: templates, checkout, integrations, and the product and customer data underneath. Design decides what the store looks like. Development decides whether it loads, converts, and survives your biggest trading day.",
      unique: false,
    },
    {
      // tertiary: how to value an ecommerce platform design and development agency
      // shared set: cost, and what happens if it goes wrong
      question: "How do you value an ecommerce platform design and development agency?",
      answer:
        "Weigh the fixed number against the written scope, never the day rate. Custom theme builds run $10,000 to $20,000, Shopify Plus builds with B2B or complex integrations run $20,000 to $50,000, migrations start at $15,000. Ours is fixed before development starts, so if we underestimate, that cost is ours. If an e-commerce agency hands you a range instead of a number, ask what closes the gap.",
      unique: false,
    },
    {
      // shared set: timeline, and what we need from you
      question: "How long does an ecommerce build take?",
      answer:
        "Most stores go live within six weeks of kickoff: four to six for a new build, six to eight for a migration carrying full product, customer, and order history. From you we need admin access, brand assets, and one person who can decide without a committee. Budget two hours a week. An ecommerce agency that will not commit to a date has not finished scoping.",
      unique: false,
    },
    {
      // tertiary: what to look for in an ecommerce development partner
      // shared set: who does the work, who do I talk to
      question: "What should you look for in an ecommerce development partner?",
      answer:
        "Ask who writes the code and whether you get to talk to them. Here the developers who scope your project build it, with no account manager relaying messages and no part going to a subcontractor you never met. Get the fixed price and go-live date in writing before you sign. That is the difference between a full service ecommerce agency and a reseller.",
      unique: false,
    },
    {
      // tertiary: how to choose an ecommerce agency for brand growth
      // unique: what an agency does that a freelancer cannot
      question: "How do you choose an ecommerce agency for brand growth?",
      answer:
        "Compare them on results, not on how busy they look. Ask any ecommerce agency what happened to revenue after launch, not how many stores they shipped. A freelancer is the better hire for one well-defined task, like a theme tweak or a single integration. An agency earns the difference when design, development, data migration, and SEO move at once and somebody has to answer when one breaks another.",
      unique: true,
    },
    {
      // tertiary: how to choose an ecommerce development agency for my industry
      question: "How do you choose an ecommerce development agency for your industry?",
      answer:
        "Ask for the two builds closest to your category and what changed after launch. Plenty carries across every industry: checkout, speed, data structure. Plenty does not. Subscription billing, wholesale pricing, configurable products, and regulated categories each fail in ways you only learn by shipping them. If nobody has shipped yours, you fund their education.",
      unique: true,
    },
    {
      // tertiary: when to hire ecommerce agency
      // unique: the two situations where we say no
      question: "When should you hire an ecommerce agency, and when should you not?",
      answer:
        "Hire one when the work spans more roles than you employ, or when a deadline makes getting it wrong cost more than the fee. Do not hire one when your conversion problem sits in the product or the pricing: a rebuild moves that problem rather than solving it, and an honest ecommerce strategy agency says so before quoting. Under $250,000 in revenue, the same money returns more in acquisition.",
      unique: true,
    },
    {
      // unique: who owns the code
      question: "Who owns the code when the project ends?",
      answer:
        "You do. Every line of code, every Liquid template, every metafield definition, and the documentation alongside it. Nothing runs on a proprietary system that keeps you paying us. Any developer or ecommerce management agency can pick the codebase up and carry on.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  conversion: {
    whatYouGet:
      "Send us your store address. Before you pay anything, we will write back and tell you where you are losing sales, and whether hiring an ecommerce agency is even the right thing to spend on.",
    whatWeWillTellYouNotToDo:
      "If the reason people are not buying is your pricing or your product, we will tell you, and we will tell you not to spend a penny on a rebuild.",
    responseExpectation:
      "A senior developer writes back within one working day. If we get on a call, your written price and date follow within two days of it.",
  },

  // ── Block 11: Sources ─────────────────────────────────────────────────
  // Empty by owner decision (2026-08-19): no visible Sources section and no
  // inline citation markers on the page. The vendor URLs behind the platform
  // table are recorded in the commit message and in asset.method.howGathered,
  // which still states where the figures came from and when they were captured.
  sources: [],

  children: [
    "/services/ecommerce-agency/los-angeles",
    "/services/ecommerce-agency/san-diego",
    "/services/ecommerce-agency/san-francisco",
    "/services/ecommerce-agency/new-york",
    "/services/ecommerce-agency/austin",
    "/services/ecommerce-agency/dallas",
    "/services/ecommerce-agency/miami",
    "/services/ecommerce-agency/florida",
    "/services/ecommerce-agency/boston",
    "/services/ecommerce-agency/raleigh",
    "/services/ecommerce-agency/minneapolis",
    "/services/ecommerce-agency/chicago",
    "/services/ecommerce-agency/atlanta",
    "/services/ecommerce-agency/denver",
    "/services/ecommerce-agency/philadelphia",
    "/services/ecommerce-agency/milwaukee",
    "/services/ecommerce-agency/wisconsin",
    "/services/ecommerce-agency/maine",
    "/services/ecommerce-agency/arizona",
    "/services/ecommerce-agency/maryland",
    "/services/ecommerce-agency/new-jersey",
  ],

  // Wider than the spec's 1,500-2,000 hub range, by the owner's call. This hub
  // carries a 6-column x 7-row comparison table whose 35 cells and 4 notes all
  // count as body words, so the prose budget and the table budget were fighting
  // each other. The table is the reason the page exists, so the range moved
  // rather than the table.
  wordCountTarget: [1500, 2600],
};
