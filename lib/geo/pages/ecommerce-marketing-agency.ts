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
// channel do you fix first". Do not reuse hub 1's engagement steps or objections.
//
// COPY STANDARD v2.0 governs every word. What it forced here:
//
//  ROIA (s1). One reader: runs a store that works, is being told by everyone
//  that they need all five channels, and cannot tell which one is actually
//  costing them money. One idea: "one channel is broken and four are fine, and
//  anyone who can't tell you which is guessing with your money."
//
//  Voice (s2, s3). Contractions, plain English, one person talking to another.
//
//  Keywords (s7). The previous revision used the primary 20 times against a cap
//  of 5, including inside the conversion block where the cap is zero, and FAQ 4
//  carried three separate keyphrases stuffed into one answer. The primary now
//  appears 5 times: h1, hook, and three FAQ questions that ARE assigned
//  keyphrases. Note "best ecommerce marketing agency" contains the primary, so
//  it counts toward that five. Each secondary owns ONE section (s7.2):
//    ecommerce marketing services        -> whatWeDo
//    ecommerce digital marketing agency  -> industries intro
//    ecommerce advertising agency        -> asset.derived
//    ecommerce marketing company         -> objections[1]
//    best ecommerce marketing agency     -> faqs[5]
//  s4 bans unearned superlatives, so "best ecommerce marketing agency" only ever
//  appears inside a question the READER asks. We never claim it.
//
// The Only-Here Asset is a channel routing table. It states no vendor figures
// and no performance statistics, because neither could be verified for a claim
// this general. What it encodes is which channel addresses which symptom, which
// is judgement, disclosed as judgement in the method block. The rewrite did not
// touch a cell.

import type { HubPage } from "../types";

export const ECOMMERCE_MARKETING_AGENCY: HubPage = {
  type: "hub",
  slug: "ecommerce-marketing-agency",
  path: "/services/ecommerce-marketing-agency",
  status: "published",

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
  // 59 chars. Deliberately NOT identical to the h1 below: "built to optimize"
  // pushed this to 62 and Google truncated it mid-phrase in desktop results.
  // "that optimizes" says the same thing and fits.
  metaTitle: "Ecommerce marketing agency that optimizes your sales funnel",
  metaDescription:
    "An ecommerce marketing agency for brands with a funnel that already works. We find the step that's leaking, fix it, and show you what it moved. One at a time.",
  shortTitle: "Ecommerce Marketing Agency",
  serviceType: "Ecommerce marketing",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // START FROM WHAT HE WANTS, NOT FROM WHAT WE ARE. Owner's reasoning, and it
  // is the sharpest read on this keyword anyone has had: a brand at this size
  // ALREADY HAS a working funnel. He is not shopping for one built. He is
  // shopping for more return out of the one he runs. So the H1 names the
  // keyword and the funnel together, and the qualifier promises more from the
  // same traffic rather than a rebuild.
  //
  // Every rejected draft failed by opening on us instead of on him:
  //   - "built to grow your brand": true of every agency on the term. It said
  //     nothing he could not read on ten other sites.
  //   - "that can also fix your store": an internal capability quirk.
  //   - "that knows which channel pays" / "you can't tell which one is making
  //     you money": tells a founder who reads his dashboards weekly that the
  //     page was written for somebody less capable than he is. NEVER write
  //     down to this reader.
  //   - "you won't have to manage": every agency implies this, so it
  //     differentiates nothing.
  //   - "names what it won't sell you": argues we are honest before it argues
  //     we are any good.
  //
  // Constraints: the hook below owns the one-channel argument, so the hero
  // states the promise and does not argue the method. Plain words.
  //
  // Credibility by numbers is carried by heroStats directly below (150+ stores,
  // $400M+, 4.9 rating, 8+ years), so the copy never repeats a figure.
  //
  // metaTitle says the same thing in fewer characters so it survives SERP
  // truncation; keep the two in step in MEANING, not word for word.
  // GeoPageHero gradients the last two words: keep them a real phrase.
  h1: "An ecommerce marketing agency built to optimize your sales funnel",
  qualifier:
    "You've already got a funnel that works. What you want is more out of the same traffic.\n\nWe find the step that's leaking, fix that one, and show you what it moved before we touch anything else.",

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

  // Hero secondary button points at the case studies, matching hubs 1 and 2.
  heroSecondaryCta: { label: "See our work", href: "#proof" },

  // The mid-page button still jumps to the routing table.
  assetCtaLabel: "See which channel to fix first",

  // Answer-first block, and the passage AI Overviews lift. Copy standard s5.1
  // bans defining your own H1 term in a body section, so this no longer opens
  // "an ecommerce marketing agency is...". It leads on the claim instead, which
  // is both more useful to quote and the thing the page actually argues.
  quickAnswer:
    "Most stores don't have a marketing problem. They have one broken channel and four that are working fine. The five that matter are search, paid ads and the creative inside them, email and SMS, conversion work on the store, and the tracking underneath it all. Spending on the wrong one costs you a year.",

  // ── Trust bar ─────────────────────────────────────────────────────────
  trust: {
    heading: "We have built {storesBuilt} stores. Here are a few.",
    // The build-and-market point moved up into the hero, so this line no longer
    // makes it. Two sections making the same argument is the restatement copy
    // standard section 5.4 rules out.
    subheading:
      "Brands we've grown, and the numbers behind them open in the case studies below.",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // The one-channel argument, made to somebody smart. Two rejected openers and
  // why: "somebody's told you that you need all of it" (the reader's first
  // reaction is "who?", which the page can't answer) and "buy all five and
  // you'll never know which one worked" (assumes he can't read his own
  // attribution, which he can). The real reason one-at-a-time wins is
  // ATTENTION, not measurement, and that argument survives a smart reader.
  hook:
    "Five retainers beat one, so most agencies will happily sell you all five channels at once. Each one then gets a slice of somebody's week, and none of them gets the attention it actually needed.\n\nOne channel done properly moves your revenue further in six weeks than five done partly will in six months. That's why we take them one at a time, against a number agreed before we start.",

  // ── Block 3: What we actually do ──────────────────────────────────────
  // Routes, does not re-explain. Each service gets one line on what it
  // contributes; the service pages themselves do the explaining.
  //
  // Owns the secondary "ecommerce marketing services", where the reason we sell
  // them one at a time is the actual point of the paragraph.
  whatWeDo: [
    "We look at the whole thing before touching any of it. Where your visitors come from, what they do when they arrive, where they stop, and what happens after they buy. Then we tell you which channel to fix first and what it's worth, in writing, whether you hire us or not.",
    "Most ecommerce marketing services get sold as a bundle, because a bundle is easier to sell than a diagnosis. Ours go one at a time, in the order your own numbers point at, and we do the work with our own people. Nothing gets handed to somebody you never meet.",
    "Sales funnels are what we're strongest on. Most of the money you lose is lost between the click and the checkout, and closing that gap is usually the fastest win on this list.",
    "And if your store itself turns out to be the problem, we'll say so. That's a different job, and it lives on our [link:/services/ecommerce-agency|ecommerce agency] page.",
  ].join("\n\n"),

  // The service map: link down, never re-explain. One line each on what the
  // service CONTRIBUTES to the whole, per the Card 3 positioning rule.
  serviceMap: [
    {
      // FIRST by the owner's call: funnels are what we are strongest at, and
      // buried at position six nobody found it. The prose above claims the
      // strength; this card describes the work, so the two do not repeat.
      name: "Sales funnels",
      href: "/services/shopify-landing-page-design",
      role: "The whole path from the ad click to the checkout, and whether that click was worth paying for. A funnel built for one campaign nearly always beats dropping that traffic on a product page built for everybody.",
    },
    {
      name: "Search",
      href: "/services/ecommerce-seo-agency",
      role: "The visitors who keep arriving after you stop paying for them. The slowest channel to start, and the only one that lowers what every other channel costs you, because a customer who found you for free never entered an auction.",
    },
    {
      name: "Creative strategy",
      href: "/services/creative-strategy",
      role: "The thing people actually see, and usually why ads stopped working. New creative is also the cheapest test you own: it tells you what message lands before you spend a year building content around the wrong one.",
    },
    {
      name: "Email and SMS",
      href: "/services/klaviyo-audit",
      role: "Turning one purchase into three, from a list you already own. It's the only channel where you've already paid for the customer, which is why it decides whether your ad spend is affordable or not.",
    },
    {
      name: "Conversion",
      href: "/services/shopify-cro-agency",
      role: "More sales from the visitors already arriving, without spending more. Every point you gain here makes search, ads and email worth more on the same day, because they all deliver into the same checkout.",
    },
    {
      name: "Testing",
      href: "/services/a-b-testing",
      role: "Proof a change worked before you roll it out everywhere. Without it you're collecting opinions, and the loudest one in the room wins by default.",
    },
    {
      name: "Tracking",
      href: "/services/shopify-analytics-and-tracking-setup",
      role: "Numbers you can trust before you decide against them. This comes first whatever your problem is, because every other decision rests on it.",
    },
    {
      name: "Cart value",
      href: "/services/shopify-cart-gamification",
      role: "A bigger order from the same customer, at the same traffic. It's the fastest way to make an expensive channel affordable, because it moves what a customer is worth rather than what one costs.",
    },
    {
      name: "AI search",
      href: "/services/shopify-agentic-commerce",
      role: "Getting bought when a customer asks an assistant rather than Google. It's early, it's cheap to do properly now, and it's the same structured work that already helps you in normal search.",
    },
  ],

  // ── Industries ────────────────────────────────────────────────────────
  // Not a grid of nouns. Each entry states the one thing that actually changes
  // about marketing that vertical. The six chosen are the verticals with three
  // published case studies each behind them in lib/case-studies.ts.
  //
  // Owns the secondary "ecommerce digital marketing agency", in the first
  // sentence of the intro.
  industries: {
    heading: "What changes in your industry",
    // "ecommerce digital marketing agency" moved out of here and into the FAQ
    // question that owns it now, so the secondary sits in an H3 rather than in
    // prose.
    intro:
      "An agency that treats a jewelry brand like a snack brand will spend your first quarter finding out it can't. The five channels are the same everywhere. What differs is which one pays first, and why.",
    items: [
      {
        name: "Beauty and skincare",
        whatsDifferent:
          "The first order rarely pays for itself. Whether ads are affordable at all is decided by how many people order a second time, so retention isn't a nice-to-have here, it's the whole model.",
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
          "The ad platforms restrict what you're allowed to claim, so your best message is often the one that gets rejected. The work here is building creative around that from the start rather than appealing afterwards.",
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
    heading: "Which one of these are you?",
    intro:
      "Most stores that call us are in one of these six spots. The right first move differs in every one, and it's usually not what you were about to buy.",
    items: [
      {
        icon: "search",
        name: "Nobody finds you",
        what: "Sales come from ads and from people who already know your name. Search brings you almost nothing.",
        breaks: "The moment you pause ads, revenue stops. You're renting every customer you have.",
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
        breaks: "Repeat rate. You're paying full price for every sale because nobody comes back on their own.",
      },
      {
        icon: "platform",
        name: "You can't trust the numbers",
        what: "Meta says one thing, Shopify says another, and nobody can say which is right.",
        breaks: "Every decision after that. You can't allocate a budget against numbers you don't believe.",
      },
      {
        icon: "code",
        name: "Growing, but not profitably",
        what: "Revenue is up and the bank balance is not. Every extra sale costs more than the last.",
        breaks: "Margin. You've been buying growth rather than earning it, and the price keeps going up.",
      },
    ],
  },

  // ── Block 4: Only-Here Asset (channel routing table) ──────────────────
  // Owns the secondary "ecommerce advertising agency", in `derived`, where the
  // limits of the ads channel are the actual subject.
  asset: {
    title: "Which channel actually fixes your problem?",
    intro:
      "Find your problem down the left. Read across for which channel to spend on first, which comes next, and which ones won't touch it whatever anyone tells you.",
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
      "Every column has rows it can't touch, and that's the part a five-retainer pitch will never put in writing. Search can't fix a store that doesn't convert. No ecommerce advertising agency can make somebody buy twice. Email can't bring people who've never heard of you. Tracking earns its keep on one row, but that row outranks the rest: if your numbers disagree with each other, nothing else here can be decided. Find your row, buy that one thing, and make somebody prove it worked before you buy the second.",
    derivedList: {
      title: "When we will tell you not to hire us",
      items: [
        "Your store itself is the problem. More traffic into a store that doesn't work is money set on fire. That's a build job, and it lives on our [link:/services/ecommerce-agency|ecommerce agency] page.",
        "Nobody is searching for what you sell and nobody is asking for it. Marketing moves demand around. It can't invent it.",
        "Your margin can't survive what a customer costs to acquire in your category. We'd rather run that number with you now than take a retainer and watch it happen.",
        "You want all five channels started at once. We won't do it. You'd never know which worked, and within a year you'd be paying for four out of habit.",
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
    text: "Not sure which row you're in? Send us your store address and we'll tell you. No charge, no pitch.",
    label: "Get your free audit",
  },

  // ── Block 5: How the engagement runs ──────────────────────────────────
  engagement: {
    heading: "What working with us looks like",
    intro:
      "One channel at a time, and each has to prove it worked before the next one starts. Slower than five retainers, and the reason you'll still know what's doing the work in a year.",
    steps: [
      {
        week: "Before you pay anything",
        title: "We find your row",
        what: "We go through your analytics, ad accounts and email numbers and tell you which channel is costing you money. In writing, whether you hire us or not.",
      },
      {
        week: "Week 1",
        title: "We make the numbers honest",
        what: "If your tracking disagrees with itself we fix that first, because every decision after it rests on it. On most stores that's a week, and then it's done for good.",
      },
      {
        week: "Weeks 2 to 6",
        title: "We fix the one thing",
        what: "One channel, properly, against a number agreed in advance. No second channel starts while the first is still being proved.",
      },
      {
        week: "Month 2 onward",
        title: "We add the next one",
        what: "Only once the first is holding on its own. Usually search, because it's slowest to arrive and the only one that keeps paying after you stop.",
      },
      {
        week: "Every month",
        title: "A report you can argue with",
        what: "What we changed, what it did to the number we agreed on, and what it cost. If a change didn't work we say so and undo it. No slides about reach.",
      },
    ],
  },

  // ── Block 6: What we don't do ─────────────────────────────────────────
  whatWeDontDo: [
    "We don't sell you five channels at once. You'd never learn which one worked, which is exactly why it gets sold that way.",
    "We don't report on reach, impressions or engagement when sales are flat. If revenue hasn't moved, that's the first line of the report.",
    "We don't take a share of your revenue. You pay a fee and you keep everything the work earns.",
    "We don't hand your account to somebody you've never met. The people on the first call are the people doing it.",
  ],

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // Six different stores across the two proof beats, as on hub 2. These cards
  // carry the growth numbers; the slider below carries the client quotes.
  proofHeading: "Work we have done",
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
    heading: "What our clients say",
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
  // Copy standard s6.2: state it in their words, concede the true part, answer
  // with a mechanism, then name the condition where the objection holds. s6.4
  // requires one we do not fully beat: that is the first, which concedes the
  // reader has no way to tell us apart from the last agency until we deliver.
  //
  // s6.4 also bans "you are probably thinking" as a framing, which is what the
  // old heading was.
  //
  // Owns the secondary "ecommerce marketing company", in the second card.
  objectionsHeading: "The questions we get asked most",
  objections: [
    {
      objection: "Every agency says they'll find the real problem. Then they sell me everything anyway.",
      answer:
        "That's fair, and you have no way of telling us apart from them on a first call. So don't take our word for it. Ask for the finding in writing before you sign, and ask which channels are being ruled out. Anyone who can't name what they won't sell you has looked at their price list rather than your store. Ours comes with the ruled-out list on it. That's the only proof we can offer you up front, and you're right that it isn't much until we deliver.",
    },
    {
      objection: "One channel at a time sounds slow. My competitors are doing everything.",
      answer:
        "Some of them are, and most of them can't tell you which part is working. One thing done properly gets you a number you can trust in six weeks. Five gets you a bigger invoice and an argument about attribution. If speed matters more to you than knowing, we're the wrong ecommerce marketing company and we'll say so on the first call rather than take the money.",
    },
    {
      objection: "You're a Shopify agency. We want marketing, not another rebuild.",
      answer:
        "Then you get marketing. Knowing how the store is built is why we can tell a failing channel from a store that's losing people, which is the most expensive thing here to get wrong. If the answer does turn out to be a rebuild we'll say so, and you're free to ignore us and take the finding to whoever you like.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // Asked in the buyer's voice, first person, per the owner's review.
  //
  // faqs[0] is the ONE definition permitted on the page (copy standard s5.1)
  // and is held short for that reason. faqs[5] carries "best ecommerce
  // marketing agency" inside what the reader would ask; we never claim it.
  //
  // faqs[3] used to carry THREE keyphrases stuffed into one answer, which is
  // the stuffing the owner flagged. It now carries the argument and nothing
  // else. Do not put the other phrases back.
  faqs: [
    {
      question: "What is an ecommerce marketing agency?",
      answer:
        "It brings people to a store that already works and turns more of them into buyers: search, paid ads and the creative inside them, email and SMS, conversion work, and the tracking underneath. That's a different job from building the store in the first place.",
      unique: false,
    },
    {
      question: "What services do e-commerce marketing agencies offer?",
      answer:
        "Almost all offer the same five: search, paid advertising, email and SMS, conversion work, and analytics. The list isn't what separates them. What separates them is whether they tell you which one you need and which four you don't, because a bundle is bundled for the agency and not for you.",
      unique: false,
    },
    {
      question: "How much should an ecommerce marketing agency cost?",
      answer:
        "Less at the start than you're expecting, because you should only be buying one channel. We price per store rather than by package, and the first look is priced on its own so you can buy the finding, read it, and decide after. Be wary of anyone whose cheapest option still includes five channels.",
      unique: false,
    },
    {
      // Carries the secondary "ecommerce digital marketing agency" in the H3.
      question: "How do I choose an ecommerce digital marketing agency?",
      answer:
        "Ask what they wouldn't sell you. Anyone can list channels. Someone who has actually looked at your store can name the two or three that will do nothing for your problem and explain why. Beyond that, what to look for is short: the diagnosis before the contract, findings you could take elsewhere, one number you've both agreed to be judged on, and a straight answer on who does the work.",
      unique: true,
    },
    {
      question: "How is ecommerce marketing different from ecommerce SEO?",
      answer:
        "SEO is one channel inside marketing. It earns you visitors from search results. Marketing covers that plus paid ads, email and SMS, your conversion rate, and the tracking underneath. If search is the only thing wrong with your store, hire an [link:/services/ecommerce-seo-agency|ecommerce SEO agency] and stop there. If you don't know which channel is wrong, that's the question this page answers.",
      unique: true,
    },
    {
      question: "How do I know I've found the best ecommerce marketing agency for me?",
      answer:
        "You won't know up front, so judge the measure instead of the pitch. The right one agrees a money number before the work starts, revenue from the channel or what a customer costs to acquire, and then reports against it honestly, including the months it didn't move. Anyone reporting in units you can't spend has picked a number they can't lose on.",
      unique: true,
    },
    {
      question: "Can I do this in-house instead of hiring an agency?",
      answer:
        "Often, yes, and we'll say so. One channel run properly by somebody who owns it beats five run part-time. In-house usually wins when you have a single steady channel and someone who can be held to it. An agency wins when you need to find out which channel is broken, or need a specialist for a few months rather than a salary forever.",
      unique: true,
    },
    {
      question: "Is SEO or paid advertising better for my store?",
      answer:
        "They solve different problems. Paid brings visitors today and stops the day you stop paying. Search takes months and keeps paying after. With no traffic at all you usually need both, paid for now and search for later. Ask an ads shop and you'll hear paid, ask an SEO shop and you'll hear search, so ask somebody who sells both.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Rebuilt to copy standard s8, matching hubs 1 and 2. The rules that shaped it:
  //   s8.2  ZERO keyword targets here. The previous revision put the primary in
  //         this block, which is the stuffing the owner flagged.
  //   s1.2  Two doors, CALL FIRST and form second, both named in the opening
  //         paragraph so a reader can see how to start without hunting.
  //   s8.4  The free audit, specified, turnaround named, scope limited out loud.
  // Owner's standing edits: "we'll get back to you", never "one of us will";
  // the audit is stated rather than offered; and no "you don't have to work
  // with us afterwards" line, which reads as apologizing for selling.
  conversion: {
    whatYouGet: [
      "There are two ways in, and you can take either. Book a free 30-minute call using the button below, at whatever time suits you, or fill in the form and we'll get back to you. On the call you'll speak to someone who does this work, not a salesperson.",
      "We'll also audit the channel that's costing you money. Tell us what's bothering you most, and we'll come back with which of the five to fix first, which ones won't touch your problem, and what fixing it is worth. This free audit covers that one channel. It won't be a review of everything you're running.",
      "You'll have it within three business days.",
    ].join("\n\n"),
    whatWeWillTellYouNotToDo:
      "If your store is the problem rather than your marketing, we'll say so on the call and tell you not to spend a penny on ads until it's fixed, even though that costs us the retainer.",
    responseExpectation:
      "A senior marketer replies within one working day. No mailing list, no follow-up sequence, and nobody chasing you for an answer.",
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
