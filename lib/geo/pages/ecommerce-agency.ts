// Page 1 of Batch 1: /services/ecommerce-agency (national hub, H1).
// Spec: Batch 1 Page Specification v2.0 (hub spine, section 4.1 asset, section
// 5 proof, section 6 FAQ, section 7 conversion). Keywords: Inventory v4.0 H1.
//
// COPY STANDARD v2.0 (24 August 2026) governs every word below. Where the older
// page spec and the copy standard disagreed on voice, offer or keyword
// placement, the copy standard won. The specific decisions it forced here:
//
//  ROIA (s1). One reader: an owner or senior operator of a $1M-$50M brand who
//  needs a store built, needs off a platform that is failing them, or inherited
//  a broken build. One idea: "ecommerce projects fail on scope and price nobody
//  wrote down, not on design, so we fix the number and the date first." Every
//  section below traces to that. One offer, two doors (s1.2): the free audit,
//  taken either by booking a call or by leaving details. Nothing else is asked
//  for anywhere on the page.
//
//  Voice (s2). Second person to the reader throughout. Third person is used
//  only for the market and other agencies, never to describe the reader.
//
//  Keywords (s7). Primary "ecommerce agency" appears 4 times in counted prose:
//  h1, the hook's first sentence, whatWeDo (inside the "full service ecommerce
//  agency" secondary), and one FAQ question. The cap is 5. Zero keywords appear
//  in the conversion block, which is where the previous revision stuffed them.
//  Each secondary owns exactly ONE section and appears nowhere else (s7.2):
//    full service ecommerce agency -> whatWeDo
//    digital commerce agency       -> segments intro
//    ecommerce strategy agency     -> asset.derived
//    ecommerce management agency   -> engagement intro
//    e-commerce agency             -> objections[1]
//  Before adding an instance anywhere, check the count. Adding one here is how
//  the stuffing came back last time.
//
// Every platform figure in the Only-Here Asset came from the vendor's own
// pricing page or developer documentation on 2026-08-19. Per the owner's call,
// the page carries no visible citations and no Sources section; the capture
// date and method stay disclosed in asset.method. The table's numbers were NOT
// touched by the copy rewrite: only the prose around them was. If a future edit
// adds a figure nobody has checked, mark it NI(...) rather than guessing.
//
// Copy rules: US spelling, no em dashes, no filler words (lib/geo/forbidden.ts),
// sentence case headings, active voice, concrete numbers over adjectives.
// Agency price bands must stay consistent with
// app/services/shopify-development-agency/page.tsx.

import type { HubPage } from "../types";

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
  // Tertiary / FAQ keyphrases assigned to H1 in the keyword plan. Per the owner's
  // review these are now asked the way a buyer asks them, in the first person
  // ("how do I", "what should I"), rather than in our voice ("how do you").
  faqKeywords: [
    "how to choose an ecommerce agency for brand growth",
    "when to hire ecommerce agency",
    "what to look for in an ecommerce development partner",
    "how to choose an ecommerce development agency for my industry",
    "how to value an ecommerce platform design and development agency",
    "what is ecommerce development",
  ],
  metaTitle: "Ecommerce agency built on reliability and excellence",
  metaDescription:
    "An ecommerce agency built on reliability and excellence. We build, migrate and grow Shopify stores, and when something breaks we are on it the same day.",
  shortTitle: "Ecommerce Agency",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // The hero sells RELIABILITY and nothing else, because nothing else on the
  // page does, and because it is the only thing the reader at the top of this
  // funnel is actually weighing. Owner's direction: a founder running a $40M
  // brand is not comparing our fee against a cheaper quote. He is asking
  // whether these people will be there when it goes wrong. What he wants to
  // feel by the end of the fold is relief.
  //
  // The H1 states the values outright, because a founder at this size is buying
  // a relationship, not a deliverable. The qualifier then has one job: prove it
  // with the only thing that proves reliability, which is what we do when the
  // work is inconvenient.
  //
  // Four rules for the qualifier, each learned by breaking it. Keep it PLAIN.
  //   1. Say the weekend. Without it the promise is just "we fix things when
  //      they break", which is what he already pays every agency to do. The
  //      claim only has value at the hours the competition is closed.
  //   2. Plain English, one person to another (ROIA). No wordplay, no clipped
  //      fragments, no setup lines. Say the thing and stop.
  //   3. One person or the whole team, whatever it takes. A reader can picture
  //      that. "Always available" is on forty other agency sites.
  //   4. Do NOT explain how the team recovers the hours. A line about our
  //      people taking the time back was cut by the owner: it invites the
  //      reader to wonder whether he is being billed for it, or whether we go
  //      quiet afterwards. Both are doubts the sentence created and nothing
  //      else on the page answers. His availability, not our rota.
  //
  // Rejected drafts, so nobody re-lands on them: "puts your price and date in
  // writing" (restates the engagement block below), "answers on Sunday" and
  // "at 2am" (any hour in an H1 reads as a limit, not a proof), "actually has
  // your back" (claim with no mechanism), and a version opening "Things break,
  // and rarely on a Tuesday morning" (cleverness that delayed the point).
  //
  // Contractions are deliberate (copy standard section 2.2: expected, and
  // formal register reads as a brochure). The rest of this file still avoids
  // them, which is why the sections below read stiffer than the hero.
  //
  // GeoPageHero gradients the last two words: keep them a phrase that can
  // carry it. Here that is "and excellence".
  h1: "An ecommerce agency built on reliability and excellence",
  qualifier:
    "If something breaks on a weekend, most agencies are closed and you wait until Monday.\n\nWe don't do that. One person or the whole team, whatever it takes to fix it, we're there.\n\nThis isn't a support tier you pay extra for. It's just how we work.",

  // Hero secondary button. Points at the case studies (ProofBlock renders with
  // id="proof"), not at the platform table, so the two hero buttons offer a
  // conversation and the evidence for it rather than two reading detours.
  heroSecondaryCta: { label: "See our work", href: "#proof" },

  // Same hero image the Shopify development landing page uses.
  heroImage: {
    // WebP, not the 140 KB PNG. The Hostinger CDN caches /_next/image
    // responses without Vary: Accept, so whichever format is requested first is
    // served to everyone, and it had cached the PNG variant. A WebP source
    // removes the dependency on runtime format negotiation entirely.
    src: "/images/hero-ecommerce-agency.webp",
    alt: "Ecommerce agency team building a custom Shopify storefront",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // Rewritten after owner review: the previous version's point was buried in an
  // abstraction ("there was nothing to hold anyone to") and the owner could not
  // tell what it was arguing. Same argument, stated flat, and it now ends on
  // what we do about it rather than on the diagnosis.
  hook:
    "You have hired an ecommerce agency before. The designs looked good. Then the launch slipped twice, the invoice passed the quote, and six months later your sales had not moved.\n\nThe design was rarely the problem. Nobody wrote down what you were buying, or what it would cost, before the work started. So when the job drifted, there was nothing to measure it against.\n\nWe write both down first. One price, one date, agreed before anyone touches your store.",

  // Answer-first block. This is the passage an AI Overview or an LLM lifts, so
  // it has to stand alone. Copy standard s5.1 bans defining your own H1 term in
  // a body section, so this no longer opens "an ecommerce agency is...". It
  // answers what the reader gets instead, which is still liftable and does not
  // spend the reader's first ten seconds explaining a phrase they just searched.
  quickAnswer:
    "We build Shopify stores and then grow them: design, build, migration, and the marketing that brings people in. One team, one fixed price agreed before we start. Most go live in six weeks, and you own the code and documentation from day one.",

  // ── Trust bar (under the hero) ────────────────────────────────────────
  // {storesBuilt} resolves from lib/brand-stats.ts at render time so the
  // headline figure cannot drift from the canonical number.
  trust: {
    heading: "We have built {storesBuilt} stores. Here are a few.",
    // One sentence, because the second one ("you will not be handed to a team
    // you never met") restated it, which copy standard section 5.4 rules out.
    subheading: "The people who scope your build are the people who build it.",
  },

  // ── Block 3: What we actually do ──────────────────────────────────────
  // Owns the secondary "full service ecommerce agency" (s7.2), placed in the
  // first sentence. It appears nowhere else on the page.
  whatWeDo: [
    "A full service ecommerce agency should do both halves of the job: build the store, and bring people to it. We do both. Most agencies pick one and hand you to somebody else for the other, which is how you end up with two suppliers blaming each other.",
    "On the building side: a new store, a [link:/services/migration|move off a platform] that stopped working, or a rescue when the last team left you something broken. Anything no app can do, we write ourselves as [link:/services/shopify-development-agency|custom development].",
    "On the selling side: [link:/services/shopify-seo-agency|search], [link:/services/shopify-cro-agency|turning visitors into buyers], email and SMS, and [link:/services/creative-strategy|the ads themselves]. Same team. If your traffic climbs and your sales do not, nobody gets to point across the room.",
    "Builds land between $10,000 and $50,000. Growth work is monthly. Either way the number and the date come in writing first.",
  ].join("\n\n"),

  // ── Who we work with ──────────────────────────────────────────────────
  // Six categories, every one of them backed by studies in lib/case-studies.ts
  // (apparel, beauty, food and drink, jewelry, sports, B2B). Do not add a
  // category here that the corpus cannot evidence.
  //
  // Owns the secondary "digital commerce agency", in the intro's first sentence.
  // Each `breaks` line now defines its own jargon in place rather than assuming
  // it (copy standard s3.2): "three options per product", not "the option
  // ceiling" with no explanation.
  segments: {
    heading: "Who we build for",
    // "digital commerce agency" moved out of here and into the FAQ question
    // that owns it now, so the secondary sits in an H3 rather than in prose.
    intro:
      "Ask any agency which categories they have actually shipped in. These six are ours. The plumbing is the same everywhere. What changes is what breaks when you grow, so here is what we watch in each.",
    items: [
      {
        icon: "apparel",
        name: "Fashion and apparel",
        what: "Size and fit data, returns that do not eat your margin, and drops that hold when traffic spikes.",
        breaks: "Returns. When your size chart does not match what arrives, one sale becomes two shipping legs and a refund.",
      },
      {
        icon: "beauty",
        name: "Beauty and skincare",
        what: "Routine merchandising, ingredient detail at scale, and subscriptions a customer can cancel without emailing you.",
        breaks: "Cancellation. Hide the exit and a churned subscriber becomes a chargeback and a public review.",
      },
      {
        icon: "consumable",
        name: "Food, drink and supplements",
        what: "Subscription billing, batch and expiry tracking, and the label rules that follow anything people swallow.",
        breaks: "Lot and expiry. Shopify counts a product, not a batch, so short-dated stock and recalls need a system on top.",
      },
      {
        icon: "jewelry",
        name: "Jewelry and accessories",
        what: "Product pages built for a long decision, made-to-order and engraving options, and heavy images that still load fast.",
        breaks: "Page weight. Full-quality images at this price point push your load time past where mobile buyers leave.",
      },
      {
        icon: "outdoor",
        name: "Sports and outdoors",
        what: "Spec tables buyers compare line by line, wide size grids, and stock that moves with the season.",
        breaks: "The option ceiling. Shopify allows three options per product, so size by width by color leaves nothing for length or fit.",
      },
      {
        icon: "wholesale",
        name: "B2B and wholesale",
        what: "Company accounts, a price list per customer, net terms, and quote-to-order without a second store.",
        breaks: "Price leakage. Trade pricing that shows to logged-out visitors ends up indexed in Google.",
      },
    ],
  },

  // ── Block 4: Only-Here Asset (platform decision table) ────────────────
  // The figures in `rows` are sourced and dated. The copy rewrite did not touch
  // a single number, column or cell: only `title`, `derived`, `derivedList` and
  // the supporting block were rewritten. Keep it that way.
  //
  // Owns the secondary "ecommerce strategy agency", in the first sentence of
  // `derived`.
  asset: {
    title: "What does each platform really cost you?",
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
        // No note: `derived` below already makes the point that published
        // pricing runs out around $2M, and repeating it here spent words the
        // page's count could not afford.
        label: "Yearly fee at $50M in sales",
        cells: ["Not this plan", "You negotiate", "You negotiate", "$0", "Quote only"],
      },
      {
        label: "Extra fee if you use your own payment provider",
        cells: ["0.6% to 2%", "0.2%", "0% to 2%", "None", "None"],
        note: "This is the number that bites. At $10M in sales, 0.6% is $60,000 a year, which dwarfs the platform fee above it.",
      },
      {
        // No note: the three-options-per-product cap is already stated in the
        // segments block above ("Sports and outdoors"), and saying it twice was
        // restatement the copy standard's section 5.4 rules out anyway.
        label: "How many versions of one product you can list",
        cells: ["2,048", "2,048", "600", "No limit", "No published limit"],
      },
      {
        label: "Can you change the checkout?",
        cells: ["Apps only", "Yes, within limits", "Yes, it is open source", "Yes, it is your code", "Yes, it is your code"],
        note: "Open does not mean free. On the last two, anything you change is yours to build and yours to maintain.",
      },
      {
        label: "Getting your data out if you leave",
        cells: ["Products, customers, orders", "Same, plus saved cards", "Products, customers, orders", "Products only", "No order export"],
        note: "Saved card details never travel in a spreadsheet. Moving them is a deal between the two payment companies, and only Shopify Plus can do it. Skip it and every subscriber re-types their card.",
      },
    ],
    derived:
      "An agency worth paying earns its fee on this table, not on the build. The monthly fee is almost never the number that matters: the payment fee and the first limit you hit will both cost you more. Published pricing also runs out at about $2M in sales, so above that you pay what you negotiate. Shopify wins most of these rows under $50M. Not all of them, and we will tell you when yours is the exception.",
    derivedList: {
      title: "When we would tell you not to move to Shopify",
      items: [
        "You need more than three choices on a single product. Working around that cap costs more than it saves.",
        "Your checkout has to do something unusual. Shopify only lets you change it in set ways, and some rules will not fit.",
        "You sell something most payment companies refuse to handle. The platform stops mattering if you cannot take the money.",
        "You sell wholesale in a way that needs quotes going back and forth. Rebuilding that costs more than the platform saves.",
        "You already have a system that talks to your warehouse and it works. Keeping something nobody loves is sometimes right.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Where headless fits",
        body:
          "You may have been pitched headless. It is not a sixth option, because it is not a platform: it means running your shop window separately from the machinery behind it, on any of these five. You get total control of how the site looks. You lose the drag-and-drop editor, most apps, and a front-end developer forever. Under about $20M it takes more than it gives.",
      },
    ],
    reviewAfterDays: 180,
  },

  // Mid-page conversion prompt, placed where the reader has just finished the
  // platform table and intent is highest. Label matches the hero's primary
  // button (copy standard s1.4: one CTA label, used consistently).
  midCta: {
    text: "Not sure which column you belong in? Send us your store address and we will tell you. No charge, no pitch.",
    label: "Get your free audit",
  },

  // ── Block 5: How the engagement runs ──────────────────────────────────
  // Rendered as the numbered phase cards used on the Shopify development
  // landing page. Card numbers come from array order, so this order is the
  // sequence a client actually moves through.
  //
  // Owns the secondary "ecommerce management agency", in the intro's first
  // sentence, where the ongoing-retainer reading of the phrase is the true one.
  engagement: {
    heading: "What working with us looks like",
    intro:
      "Whether you hire us for one build or keep us on as your ecommerce management agency, the first five steps are the same. One price, one date, both written down before anyone starts.",
    steps: [
      {
        week: "Before you pay anything",
        title: "We look at your store",
        what: "We go through what you have now and find where people drop out, what is slow, and what it costs you. You get that in writing whether you hire us or not.",
      },
      {
        week: "Week 1",
        title: "We agree the price",
        what: "We write down what you are getting, what you are not, and the day it goes live. You have the price and the date by Friday. We do not bill by the hour, so a slow week is our problem, not your invoice.",
      },
      {
        week: "Weeks 2 to 4",
        title: "We build it",
        what: "Everything goes into a practice copy of your store you can open whenever you like. You see progress every week instead of one big reveal, and you approve each stage before the next starts.",
      },
      {
        week: "Week 5",
        title: "We move your data",
        what: "Products, customers and past orders come across. Every old web address gets pointed at its new one and tested first, so the Google traffic you already earn does not vanish. Then we test on phones, tablets and the browsers your customers use.",
      },
      {
        week: "Week 6, then 60 days",
        title: "We launch and hand over",
        what: "We go live with a way to undo it if anything looks wrong. You get the code, the files and written notes on how it works. Then 60 days of support, with your search traffic and checkout watched closely for the first month.",
      },
    ],
  },

  // ── Block 6: What we don't do ─────────────────────────────────────────
  whatWeDontDo: [
    "We do not make money on apps. Nobody pays us to recommend theirs, so if we tell you to install one, that is the only reason.",
    "We do not make changes straight onto your live store. Everything gets tried on a copy first, even a one-line fix, so your shop never goes down.",
    "We do not take a share of your company or your sales. You pay us a fee and you keep everything the work earns.",
    "We do not give you a price in a meeting. Every number comes in writing, after we have looked inside your store.",
  ],

  proofHeading: "Work we have done",
  // Copy standard s6.4 bans stating an objection as "you are probably
  // thinking". The old heading was exactly that, so it is now flat.
  objectionsHeading: "The objections we hear most",

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
  // Copy standard s6.2: each objection runs four moves in order. State it in
  // their words, concede the true part, answer with a mechanism or a checkable
  // fact, then name the condition where the objection holds. s6.4 requires one
  // we do not fully beat; that is the first, which concedes we cannot price the
  // value of a fix in advance.
  //
  // Owns the secondary "e-commerce agency", in the second card.
  objections: [
    {
      objection: "We paid an agency for a rebuild last year and conversion did not move.",
      answer:
        "That happens, and it is not always the agency's fault. A rebuild only moves conversion when the build was what lost you the sale. So before we quote, we open your analytics and find where people drop out: the ads you buy, the product page, the cart, or the checkout. If it is not the build, we say so and you keep your money. Where you would be right to doubt us: we can find the leak, but we cannot price what closing it is worth.",
    },
    {
      objection: "How do I know the price will not move?",
      answer:
        "You have the number before we start, and if the job grows we requote before we build, not after. Prices move when an e-commerce agency quotes a range against a vague brief and then discovers the brief. We write the scope down first, which is why our quote takes two days rather than an afternoon. We do not bill by the hour, so a slow week costs us, not you. Change what you asked for mid-build and the number does change, but you see why first.",
    },
    {
      objection: "What happens if you disappear after launch?",
      answer:
        "You own the code and the documentation from day one, so walking away costs you nothing but time. Every project carries 60 days of support after launch. After that you can keep us on, hire in-house, or hand the codebase to another team. The honest limit: ownership protects you from us, not from your next hire. Hand a Shopify codebase to somebody who does not know Shopify and you will still have a bad year.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // Asked in the buyer's voice, in the first person, per the owner's review.
  // The six tertiary keyphrases assigned to this page are question forms, so
  // they ARE the questions here. Each still carries one of the shared-set topics
  // required by Page Spec section 6.2 (cost, timeline, who does the work, what
  // we need from you, what happens if it goes wrong) and the three unique topics
  // from 6.3 (freelancer vs agency, who owns the code, when we say no).
  //
  // The first question is the ONE definition permitted on the page (copy
  // standard s5.1) and is held under 40 words for that reason. Do not add a
  // second definition anywhere, and never as a body section.
  faqs: [
    {
      // tertiary: what is ecommerce development
      question: "What is ecommerce development?",
      answer:
        "Ecommerce development is the work of building and running the store itself: templates, checkout, integrations, and the product and customer data underneath. Design decides how it looks. Development decides whether it loads, converts, and survives your biggest day.",
      unique: false,
    },
    {
      // tertiary: how to value an ecommerce platform design and development agency
      // shared set: cost, and what happens if it goes wrong
      question: "How do I value an ecommerce platform design and development agency?",
      answer:
        "Weigh the fixed number against the written scope, never the day rate. Custom theme builds run $10,000 to $20,000. Shopify Plus builds with B2B or complex integrations run $20,000 to $50,000. Migrations start at $15,000. Ours is fixed before development starts, so if we underestimate, that cost is ours. If you are handed a range, ask what closes the gap.",
      unique: false,
    },
    {
      // shared set: timeline, and what we need from you
      question: "How long will my build take, and what do you need from me?",
      answer:
        "Most stores go live within six weeks of kickoff: four to six for a new build, six to eight for a migration carrying full product, customer and order history. From you we need admin access, brand assets, and one person who can decide without a committee. Budget two hours a week.",
      unique: false,
    },
    {
      // tertiary: what to look for in an ecommerce development partner
      // shared set: who does the work, who do I talk to
      question: "What should I look for in an ecommerce development partner?",
      answer:
        "Ask who writes the code and whether you get to talk to them. Here, the developers who scope your project build it. No account manager relaying messages, no part handed to a subcontractor you never met. Get the fixed price and go-live date in writing before you sign.",
      unique: false,
    },
    {
      // tertiary: how to choose an ecommerce agency for brand growth
      // unique: what an agency does that a freelancer cannot
      question: "How do I choose an ecommerce agency for brand growth?",
      answer:
        "Compare on results, not on how busy they look. Ask what happened to revenue after launch, not how many stores were shipped. A freelancer is the better hire for one well-defined task, like a theme tweak or a single integration. An agency earns the difference when design, development, migration and search move at once, and somebody has to answer when one breaks another.",
      unique: true,
    },
    {
      // tertiary: how to choose an ecommerce development agency for my industry
      // Carries the secondary "digital commerce agency" in the H3 itself.
      question: "How do I choose a digital commerce agency for my industry?",
      answer:
        "Ask for the two builds closest to your category and what changed after launch. Plenty carries across every industry: checkout, speed, data structure. Plenty does not. Subscription billing, wholesale pricing, configurable products and regulated categories each fail in ways you only learn by shipping. If nobody has shipped yours, you fund their education.",
      unique: true,
    },
    {
      // tertiary: when to hire ecommerce agency
      // unique: the two situations where we say no
      // Carries the secondary "ecommerce strategy agency" in the H3 itself.
      question: "When should I hire an ecommerce strategy agency, and when should I not?",
      answer:
        "Hire one when the work spans more roles than you employ, or when a deadline makes getting it wrong cost more than the fee. Do not hire one when your problem is the product or the price, because a rebuild moves that problem rather than solving it. Under $250,000 in revenue, the same money returns more spent on finding customers.",
      unique: true,
    },
    {
      // unique: who owns the code
      question: "Who owns the code when the project ends?",
      answer:
        "You do. Every line of code, every Liquid template, every metafield definition, and the documentation beside it. Nothing runs on a private system that keeps you paying us. Any developer can pick it up and carry on.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Rebuilt to copy standard s8. The rules that shaped it, because they are the
  // easiest ones to undo by accident:
  //   s8.2  ZERO keyword targets in this block. Not the primary, not a
  //         secondary. The previous revision had "hiring an ecommerce agency"
  //         here, which is the stuffing the owner flagged.
  //   s8.2  Under 180 words of prose above the form, and "you" or "your" in
  //         every sentence. Currently ~165.
  //   s8.4  The free audit, specified: the reader names the bottleneck, we
  //         return three named parts, we say what it will NOT do, we name the
  //         turnaround (3 business days, owner's call), and the no-obligation
  //         line is unambiguous.
  //   s1.2  Two doors, spelled out in the FIRST paragraph, CALL FIRST and form
  //         second (owner's order: the call is the door we want taken). Do not
  //         bury them again; a reader who cannot see how to start does not.
  //
  // Three owner edits worth keeping, because each was a real read of how the
  // sentence lands rather than a preference:
  //   - "we'll get back to you", never "one of us will get back to you". The
  //     second makes the reader feel handed to whoever is free.
  //   - The audit is stated, not offered. "If you want, we'll also audit..."
  //     invited a no before anyone had said yes to anything.
  //   - No "you don't have to work with us afterwards, and nobody will chase
  //     you" here. It reads as apologizing for selling. The same reassurance
  //     still runs under the form in responseExpectation, which is where a
  //     reader looks for it and where it costs the pitch nothing.
  conversion: {
    whatYouGet: [
      "You've got two ways to do this. Use the button below to book a free 30-minute call at a time that suits you, or fill in the form and we'll get back to you. On the call you'll speak to an ecommerce expert who listens to what's going on and tells you honestly whether we can help.",
      "We'll also audit whatever is holding your store back. Tell us the one thing bothering you most, whether that's speed, conversion, or a build that has stalled, and we'll come back with what's actually happening, why it's happening, and how to fix it. This free audit covers that one problem you're facing right now. It won't be a complete review of your entire site.",
      "You'll have it within three business days.",
    ].join("\n\n"),
    whatWeWillTellYouNotToDo:
      "If your store doesn't need a rebuild, we'll say so on the call and tell you where the money would do more good, even though that costs us the work.",
    responseExpectation:
      "A senior developer replies within one working day. You won't be added to a mailing list, and nobody will call you to ask if you read it.",
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
  // carries a 6-column x 7-row comparison table whose 35 cells and notes all
  // count as body words, so the prose budget and the table budget were fighting
  // each other. The table is the reason the page exists, so the range moved
  // rather than the table.
  //
  // Raised 2,600 -> 2,700 during the Copy Standard v2.0 rewrite. Section 8
  // specifies a conversion block roughly 115 words longer than the one it
  // replaced (the audit's three parts, the turnaround, the no-obligation line,
  // both doors), and 157 words of restatement had already been cut to pay for
  // it. Past that point the ceiling was being paid for out of the hero, which
  // is the worst possible trade on a lead-generation page. If this needs to go
  // back to 2,600, cut from the platform table's notes, not from the hero or
  // the conversion block.
  wordCountTarget: [1500, 2700],
};
