// Page 3 of Batch 1: /services/ecommerce-marketing-agency (national hub, H3).
// Spec: Batch 1 Page Specification v2.0, Card 3. Keywords: Inventory v4.0 H3.
//
// Primary keyword: "ecommerce marketing agency" (880/mo, Google Keyword Planner).
//
// POSITIONING, set by the plan and non-negotiable: this hub is a claim about
// how the agency is organised, not a service description. It gathers the
// marketing services that already exist on this site (search, creative, email
// and SMS, CRO, analytics) under one umbrella and links DOWN to them. If it
// re-explains any of them it competes with its own service pages, so every
// service is one line saying what it CONTRIBUTES and nothing more. That is why
// this page carries a serviceMap and deliberately no services accordion: hub 2
// sells one service in depth, this one routes.
//
// CANNIBALISATION: /services/ecommerce-agency is the nearest neighbour and the
// plan draws the line as build versus grow. That hub owns "we build the store
// AND market it, one team". This one owns "you already have a store, which
// channel do you fix first". check-shingles compares them at the geo-set
// threshold. Do not reuse hub 1's engagement steps or objections.
//
// The Only-Here Asset is a channel routing table. It states no vendor figures
// and no performance statistics, because neither could be verified for a claim
// this general. What it encodes is which channel addresses which symptom, which
// is judgement, disclosed as judgement in the method block.

import type { HubPage } from "../types";

export const ECOMMERCE_MARKETING_AGENCY: HubPage = {
  type: "hub",
  slug: "ecommerce-marketing-agency",
  path: "/services/ecommerce-marketing-agency",
  status: "draft",

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce marketing agency",
  secondaryKeywords: [
    "ecommerce digital marketing agency",
    "ecommerce marketing services",
    "ecommerce advertising agency",
    "ecommerce marketing company",
    "best ecommerce marketing agency",
  ],
  faqKeywords: [
    "what services do e-commerce marketing agencies offer",
    "what to look for in an ecommerce marketing agency",
    "what is an ecommerce marketing agency",
    "how to find an ecommerce marketing agency",
    "how much should an ecommerce marketing agency cost",
    "how to choose an ecommerce marketing agency",
  ],
  metaTitle: "Ecommerce Marketing Agency That Fixes One Thing First",
  metaDescription:
    "An ecommerce marketing agency for stores that already work. We tell you which one channel to fix first, which ones will not help at all, and what it is worth.",
  shortTitle: "Ecommerce Marketing Agency",
  serviceType: "Ecommerce marketing",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "An Ecommerce Marketing Agency That Fixes One Thing First",
  qualifier:
    "You do not have a marketing problem. You have one broken channel and four that are fine. We find out which, and we tell you before you pay us anything, even when the answer is not something we sell.",
  heroImage: {
    // Ad creative we produced for Prose, from the creative-strategy case study.
    // src doubles as the poster and as the still shown under reduced motion.
    src: "/images/Creative%20strategy%20services/Case%20studies/prose-hero.jpg",
    video: "/images/Creative%20strategy%20services/Case%20studies/prose-cover.mp4",
    alt: "Ad creative we produced for the haircare brand Prose",
    aspect: "3 / 2",
  },

  // Figures come from lib/brand-stats.ts. The rating is the same 4.9 shown
  // elsewhere on the site; nothing here is a page-specific number.
  heroStats: [
    { value: "150+", label: "Stores Built" },
    { value: "$400M+", label: "Client Revenue" },
    { value: "4.9★", label: "Client Rating" },
    { value: "8+", label: "Years Doing This" },
  ],

  // The hero's second button jumps to the routing table below.
  assetCtaLabel: "See which channel to fix first",

  // Answer-first definition. This is the passage AI Overviews lift.
  quickAnswer:
    "An ecommerce marketing agency brings people to a store that already works and turns more of them into buyers. That covers search, paid ads and the creative in them, email and SMS, the store's own conversion rate, and the tracking underneath it all. It is a different job from an ecommerce agency, which builds the store. The useful ones tell you which of those five to spend on first instead of selling you all five.",

  // ── Trust bar ─────────────────────────────────────────────────────────
  trust: {
    heading: "We Have Built {storesBuilt} Stores. Here Are a Few.",
    subheading:
      "We market stores we could have built ourselves, which is how we can tell when the problem is the marketing and when it is the shop.",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Somebody has told you that you need all of it. Search, ads, email, a new landing page, a conversion audit, and a dashboard to watch it on. Five retainers to fix one problem, and the easiest pitch in this industry because it can never be proved wrong.\n\nHere is what is usually true. One thing is broken and the other four are fine. An ecommerce marketing agency that cannot tell you which is which is guessing with your money, and will keep guessing for as long as you keep paying.",

  // ── Block 3: What we actually do ──────────────────────────────────────
  // Routes, does not re-explain. Each service gets one line on what it
  // contributes; the service pages themselves do the explaining.
  whatWeDo: [
    "An ecommerce marketing agency should look at the whole thing before touching any of it. Where your visitors come from, what they do when they arrive, where they stop, and what happens after they buy. Then we tell you which channel to fix first and what it is worth, in writing, whether you hire us or not.",
    "Then we do the work with our own people. Nothing gets handed to somebody you never meet, which is how most of this industry runs and why nobody can tell you who broke what.",
    "And if your store itself turns out to be the problem, we will say so. That is a different job, and it lives on our [link:/services/ecommerce-agency|ecommerce agency] page.",
  ].join("\n\n"),

  // The service map: link down, never re-explain. One line each on what the
  // service CONTRIBUTES to the whole, per the Card 3 positioning rule.
  serviceMap: [
    {
      name: "Search",
      href: "/services/ecommerce-seo-agency",
      role: "The visitors who keep arriving after you stop paying for them. The slowest channel to start, and the only one that lowers what every other channel costs an ecommerce marketing agency to run for you, because a customer who found you for free never entered an auction.",
    },
    {
      name: "Ad creative",
      href: "/services/creative-strategy",
      role: "The thing people actually see, and usually why ads stopped working. New creative is also the cheapest test you own: it tells you what message lands before you spend a year building content around the wrong one.",
    },
    {
      name: "Email and SMS",
      href: "/services/klaviyo-audit",
      role: "Turning one purchase into three, from a list you already own. It is the only channel where you have already paid for the customer, which is why it decides whether your ad spend is affordable or not.",
    },
    {
      name: "Conversion",
      href: "/services/shopify-cro-agency",
      role: "More sales from the visitors already arriving, without spending more. Every point you gain here makes search, ads and email worth more on the same day, because they all deliver into the same checkout.",
    },
    {
      name: "Testing",
      href: "/services/a-b-testing",
      role: "Proof a change worked before you roll it out everywhere. Without it an ecommerce marketing agency is collecting opinions, and the loudest one in the room wins by default.",
    },
    {
      name: "Landing pages",
      href: "/services/shopify-landing-page-design",
      role: "Where your ad traffic lands, and whether the click was worth paying for. A page built for one campaign nearly always beats sending that traffic to a product page built for everybody.",
    },
    {
      name: "Tracking",
      href: "/services/shopify-analytics-and-tracking-setup",
      role: "Numbers you can trust before you decide against them. This comes first whatever your problem is, because every other decision an ecommerce marketing agency makes for you rests on it.",
    },
    {
      name: "Cart value",
      href: "/services/shopify-cart-gamification",
      role: "A bigger order from the same customer, at the same traffic. It is the fastest way to make an expensive channel affordable, because it moves what a customer is worth rather than what one costs.",
    },
    {
      name: "AI search",
      href: "/services/shopify-agentic-commerce",
      role: "Getting bought when a customer asks an assistant rather than Google. It is early, it is cheap to do properly now, and it is the same structured work that already helps you in normal search.",
    },
  ],

  // ── Industries ────────────────────────────────────────────────────────
  // Not a grid of nouns. Each entry states the one thing that actually changes
  // about marketing that vertical. The six chosen are the verticals with three
  // published case studies each behind them in lib/case-studies.ts.
  industries: {
    heading: "What Changes in Your Industry",
    intro:
      "The five channels are the same everywhere. What differs is which one pays first, and why. An ecommerce marketing agency that treats a jewelry brand like a snack brand will spend your first quarter finding that out.",
    items: [
      {
        name: "Beauty and skincare",
        whatsDifferent:
          "The first order rarely pays for itself. Whether ads are affordable at all is decided by how many people order a second time, so retention is not a nice-to-have here, it is the whole model.",
      },
      {
        name: "Fashion and apparel",
        whatsDifferent:
          "Returns eat the margin before marketing gets a say. Helping somebody pick the right size the first time is usually worth more than another thousand visitors.",
      },
      {
        name: "Food and drink",
        whatsDifferent:
          "Order values are small, so paid ads almost never pay back on a first purchase. Subscription and repeat carry the whole thing, and any plan that ignores that is a plan to lose money on every new customer.",
      },
      {
        name: "Health and wellness",
        whatsDifferent:
          "The ad platforms restrict what you are allowed to claim, so your best message is often the one that gets rejected. An ecommerce marketing agency working here builds creative around that from the start rather than appealing afterwards.",
      },
      {
        name: "Jewelry and accessories",
        whatsDifferent:
          "High prices mean long thinking time. People come back four or five times before they buy, which makes last-click reporting lie about which channel earned the sale.",
      },
      {
        name: "B2B and wholesale",
        whatsDifferent:
          "Few buyers, big orders, long cycles. Search intent beats ad volume, because the handful of people who matter are looking for exactly what you sell rather than being interrupted with it.",
      },
    ],
  },

  // ── Who we work with ──────────────────────────────────────────────────
  segments: {
    heading: "Which One Of These Are You?",
    intro:
      "Most stores that call an ecommerce marketing agency are in one of these six spots. The right first move differs in every one, and it is usually not what you were about to buy.",
    items: [
      {
        icon: "search",
        name: "Nobody finds you",
        what: "Sales come from ads and from people who already know your name. Search brings you almost nothing.",
        breaks: "The moment you pause ads, revenue stops. You are renting every customer you have.",
      },
      {
        icon: "cart",
        name: "Traffic but no sales",
        what: "Plenty of people arrive and hardly any buy. Everyone tells you to buy more traffic.",
        breaks: "More traffic. You pay again for the same leak, and the leak gets more expensive.",
      },
      {
        icon: "chart",
        name: "Ads stopped working",
        what: "Campaigns that paid for themselves last year now cost more than the order is worth.",
        breaks: "Bidding. People stopped responding to the creative and the auction charged you for finding that out.",
      },
      {
        icon: "box",
        name: "They buy once",
        what: "You get the first order and never hear from them again. Your list is big and quiet.",
        breaks: "Repeat rate. You are paying full price for every sale because nobody comes back on their own.",
      },
      {
        icon: "platform",
        name: "You cannot trust the numbers",
        what: "Meta says one thing, Shopify says another, and nobody can say which is right.",
        breaks: "Every decision after that. You cannot allocate a budget against numbers you do not believe.",
      },
      {
        icon: "code",
        name: "Growing, but not profitably",
        what: "Revenue is up and the bank balance is not. Every extra sale costs more than the last.",
        breaks: "Margin. You have been buying growth rather than earning it, and the price keeps going up.",
      },
    ],
  },

  // ── Block 4: Only-Here Asset (channel routing table) ──────────────────
  asset: {
    title: "Which Channel Actually Fixes Your Problem?",
    intro:
      "Find your problem down the left. Read across for which channel to spend on first, which comes next, and which ones will not touch it whatever anyone tells you.",
    renderer: "matrix",
    method: {
      captured: "2026-08-21",
      howGathered:
        "This is our judgment, not a study, and we are labelling it as such. The ordering comes from what we see on the stores we work on: which channel moved the number, and which were bought first and did nothing. Nobody publishes verifiable data on this, so treat any agency showing you a percentage here with suspicion.",
    },
    columns: ["Your problem", "Search", "Ads and creative", "Email and SMS", "Conversion work", "Tracking"],
    rows: [
      {
        label: "Hardly anyone finds us in Google",
        cells: ["Start here", "Helps a bit", "No effect", "No effect", "No effect"],
        note: "Ads buy visitors today and stop the day you stop paying. Search is the only one here that compounds, and the slowest, so start it now rather than when you need it.",
      },
      {
        label: "Plenty of visitors, hardly any buy",
        cells: ["Makes it worse", "Makes it worse", "Helps a bit", "Start here", "Helps a bit"],
        note: "The expensive mistake. Buying more traffic for a store that does not convert means paying twice for the same leak. Fix the store, then turn the traffic back up.",
      },
      {
        label: "Ads cost more than the order is worth",
        cells: ["Next", "Start here", "Helps a bit", "Next", "Next"],
        note: "Nearly always the creative, not the targeting. People stopped responding to what they were shown and the auction charged you to find out. Check your tracking too: since the iOS privacy changes, plenty of ads look worse than they are.",
      },
      {
        label: "They buy once and never come back",
        cells: ["No effect", "No effect", "Start here", "Helps a bit", "No effect"],
        note: "You already paid for these people. Email and SMS is the only channel here where the customer is already yours and the next sale costs almost nothing.",
      },
      {
        label: "We do not trust our own numbers",
        cells: ["No effect", "No effect", "No effect", "No effect", "Start here"],
        note: "Nothing else here works until this is done, because every other decision rests on numbers nobody believes. Usually a week of work, then fixed for good.",
      },
      {
        label: "Sales are fine, the average order is small",
        cells: ["No effect", "No effect", "Next", "Start here", "No effect"],
        note: "Getting more people to the store does not change what they put in the basket. This is work on the cart and the product page, then a nudge by email.",
      },
    ],
    derived:
      "Every column has rows it cannot touch, and that is the part an ecommerce marketing agency selling five retainers will not put in writing. Search cannot fix a store that does not convert. Ads cannot make somebody buy twice. Email cannot bring people who have never heard of you. Tracking earns its keep on one row, but that row outranks the rest: if your numbers disagree, nothing else here can be decided. Find your row, buy that one thing, and make somebody prove it worked before the second.",
    derivedList: {
      title: "When we will tell you not to hire us",
      items: [
        "Your store itself is the problem. More traffic into a store that does not work is money set on fire. That is a build job, and it lives on our [link:/services/ecommerce-agency|ecommerce agency] page.",
        "Nobody is searching for what you sell and nobody is asking for it. Marketing moves demand around. It cannot invent it.",
        "Your margin cannot survive what a customer costs to acquire in your category. We would rather run that number with you now than take a retainer and watch it happen.",
        "You want all five channels started at once. We will not do it. You would never know which worked, and within a year you would be paying for four out of habit.",
      ],
    },
    supportingBlocks: [
      {
        heading: "How to find your row without us",
        body:
          "Open your analytics and answer four questions. What share of sales came from search rather than paid? What percentage of visitors buy? How many customers ordered twice last year? Does the revenue in your ad platform match Shopify? Those answers put you in a row without an agency.",
      },
    ],
    reviewAfterDays: 180,
  },

  midCta: {
    text: "Not sure which row you are in? Send us your store address and we will tell you. No charge, no pitch.",
    label: "Ask us",
  },

  // ── Block 5: How the engagement runs ──────────────────────────────────
  engagement: {
    heading: "What Working With Us Looks Like",
    intro:
      "One channel at a time, and each has to prove it worked before the next starts. Slower than five retainers, and the reason you will still know what is doing the work in a year.",
    steps: [
      {
        week: "Before you pay anything",
        title: "We Find Your Row",
        what: "We go through your analytics, ad accounts and email numbers and tell you which channel is costing you money. In writing, whether you hire us or not.",
      },
      {
        week: "Week 1",
        title: "We Make the Numbers Honest",
        what: "If your tracking disagrees with itself we fix that first, because every decision after it rests on it. On most stores that is a week, and then it is done for good.",
      },
      {
        week: "Weeks 2 to 6",
        title: "We Fix the One Thing",
        what: "One channel, properly, against a number agreed in advance. No second channel starts while the first is still being proved.",
      },
      {
        week: "Month 2 onward",
        title: "We Add the Next One",
        what: "Only once the first is holding on its own. Usually search, because it is slowest to arrive and the only one that keeps paying after you stop.",
      },
      {
        week: "Every month",
        title: "A Report You Can Argue With",
        what: "What we changed, what it did to the number we agreed on, and what it cost. If a change did not work we say so and undo it. No slides about reach.",
      },
    ],
  },

  // ── Block 6: What we don't do ─────────────────────────────────────────
  whatWeDontDo: [
    "We do not sell you five channels at once. You would never learn which one worked, which is exactly why it gets sold that way.",
    "We do not report on reach, impressions or engagement when sales are flat. If revenue has not moved, that is the first line of the report.",
    "We do not take a share of your revenue. You pay a fee and you keep everything the work earns.",
    "We do not hand your account to somebody you have never met. The people on the first call are the people doing it.",
  ],

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // Six different stores across the two proof beats, as on hub 2. These cards
  // carry the growth numbers; the slider below carries the client quotes.
  proofHeading: "Work We Have Done",
  proof: [
    {
      slug: "saddleback-shopify-plus-b2b",
      vertical: "B2B and wholesale",
      whatWasBuilt: "Wholesale storefront rebuilt around what buyers actually search for",
      outcome: "+704% traffic growth, 9.54% B2B conversion rate",
      verified: true,
    },
    {
      slug: "candy-kittens-shopify-food-beverage-cro",
      vertical: "Food and beverage",
      whatWasBuilt: "Conversion work on a store that already had the traffic it needed",
      outcome: "+182% conversion rate, +$8.1M new annual revenue",
      verified: true,
    },
    {
      slug: "wild-shopify-plus-subscriptions",
      vertical: "Cosmetics and beauty",
      whatWasBuilt: "Subscription work to turn first orders into repeat ones",
      outcome: "80K+ monthly subscribers, 34% lower churn",
      verified: true,
    },
  ],

  results: {
    heading: "We Fixed One Thing. Here Is What It Did.",
    intro:
      "Not forecasts. Three stores where the work is documented, the client says so in their own words, and every number opens into the case study it came from.",
    slugs: [
      "evie-lou-shopify-fashion-cro",
      "sneak-energy-shopify-redesign",
      "111skin-shopify-cro-redesign",
    ],
    headlines: {
      "evie-lou-shopify-fashion-cro":
        "{brand} grew organic revenue 47% without buying a single extra visitor",
      "sneak-energy-shopify-redesign":
        "{brand} lifted mobile conversion 68% on traffic they were already paying for",
      "111skin-shopify-cro-redesign":
        "{brand} turned the same visitors into 46% more sales",
    },
  },

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What You Are Probably Thinking",
  objections: [
    {
      objection: "Every agency says they will find the real problem. Then they sell me everything anyway.",
      answer:
        "Fair. So ask for the finding in writing before you sign, and ask which channels they are ruling out. An ecommerce marketing agency that cannot name what it will not sell you has looked at its price list, not your store. Ours comes with the ruled-out list on it.",
    },
    {
      objection: "One channel at a time sounds slow. My competitors are doing everything.",
      answer:
        "Some are, and most cannot tell you which part is working. One thing done properly gets you a number you can trust in six weeks. Five gets you a bigger invoice and an argument about attribution. If speed matters more than knowing, we are the wrong ecommerce marketing company and we will say so on the first call.",
    },
    {
      objection: "You are a Shopify agency. We want marketing, not another rebuild.",
      answer:
        "Then you get marketing. Knowing how the store is built is why we can tell a failing channel from a store that is losing people, which is the most expensive thing here to get wrong. If the answer is a rebuild we will say so, and you are free to ignore us.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // The six tertiary keyphrases ARE the questions here.
  faqs: [
    {
      question: "What is an ecommerce marketing agency?",
      answer:
        "An ecommerce marketing agency brings people to a store that already works and turns more of them into buyers. In practice that means search, paid ads and the creative inside them, email and SMS, conversion work on the store, and the tracking underneath it all. It is not the same as an ecommerce agency, which builds the store in the first place.",
      unique: false,
    },
    {
      question: "What services do e-commerce marketing agencies offer?",
      answer:
        "Almost all offer the same five: search, paid advertising, email and SMS, conversion work, and analytics. The list is not what separates them. What separates them is whether they tell you which one you need and which four you do not, because ecommerce marketing services sold as a bundle are bundled for the agency, not for you.",
      unique: false,
    },
    {
      question: "How much should an ecommerce marketing agency cost?",
      answer:
        "Less at the start than you are expecting, because you should only be buying one channel. We price per store rather than by package, and the first look is priced on its own so you can buy the finding, read it, and decide after. Be wary of any agency whose cheapest option still includes five channels.",
      unique: false,
    },
    {
      question: "How do you choose an ecommerce marketing agency?",
      answer:
        "Ask them what they would not sell you. Anyone can list channels. An agency that has actually looked at your store can name the two or three that will do nothing for your particular problem, and will explain why. Beyond that, what to look for in an ecommerce marketing agency is short: the diagnosis before the contract, findings you could take elsewhere, one number you have both agreed to be judged on in writing, and a straight answer on who does the work. The quickest way to find an ecommerce marketing agency worth keeping is to ask each one to name a client they told not to buy. Search, ads and email are the easiest things for an ecommerce digital marketing agency to pass quietly to a contractor you never meet.",
      unique: true,
    },
    {
      question: "How is ecommerce marketing different from ecommerce SEO?",
      answer:
        "Ecommerce SEO is one channel inside ecommerce marketing. SEO earns you visitors from search results. Marketing covers that plus paid ads, email and SMS, the store's conversion rate, and the tracking underneath. If search is the only thing wrong with your store, hire an [link:/services/ecommerce-seo-agency|ecommerce SEO agency] and stop there. If you do not know which channel is wrong, that is the question this page answers.",
      unique: true,
    },
    {
      question: "How do you measure ecommerce marketing performance?",
      answer:
        "Against one number agreed before the work starts, and it should be a money number. Revenue from the channel, cost to acquire a customer, or what a customer is worth over a year. Not traffic, not reach, not impressions, and not a score out of a hundred from a tool. Any agency reporting to you in units you cannot spend has chosen a number it cannot lose on. The best ecommerce marketing agency for you is the one that agrees the measure up front and then reports against it honestly, including the months it did not move.",
      unique: true,
    },
    {
      question: "Can we do this in-house instead of hiring an agency?",
      answer:
        "Often, yes, and we will say so. One channel run properly by somebody who owns it beats five run part-time by an agency. Hiring in-house usually wins when you have a single steady channel and someone who can be held to it. An agency wins when you need to find out which channel is broken, or need a specialist for a few months rather than a salary forever.",
      unique: true,
    },
    {
      question: "Is SEO or paid advertising better for an online store?",
      answer:
        "They solve different problems. Paid brings visitors today and stops the day you stop paying. Search takes months and keeps paying after. With no traffic at all you usually need both, paid for now and search for later. Ask an ecommerce advertising agency and you will hear paid; ask an SEO shop and you will hear search. Ask somebody who sells both.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  conversion: {
    whatYouGet:
      "Send us your store address. Before you pay an ecommerce marketing agency anything, we will write back and tell you which channel is costing you money and which ones to leave alone.",
    whatWeWillTellYouNotToDo:
      "If your store is the problem rather than your marketing, we will tell you not to spend a penny on ads until it is fixed.",
    responseExpectation:
      "A senior marketer writes back within one working day. If we get on a call, your written scope and price follow within two days of it.",
  },

  sources: [],

  // Geo children per Inventory v4.0: Los Angeles and Miami. None built yet, so
  // this renders as nothing rather than as placeholders.
  children: [
    "/services/ecommerce-marketing-agency/los-angeles",
    "/services/ecommerce-marketing-agency/miami",
  ],

  // Raised from the spec band on 2026-08-21: competitor research put the
  // top-ranking page for this term at ~3,800 words with a section per channel.
  // The added words are channel depth and three more FAQs, not filler.
  wordCountTarget: [1500, 3400],
};
