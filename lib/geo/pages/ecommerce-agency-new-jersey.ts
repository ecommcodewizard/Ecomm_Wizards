// Batch 1b, page 39: /services/ecommerce-agency/new-jersey
// Inventory: Geo Inventory & Batch Plan v4.0, row #39.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// ══ THE OWNER'S BRIEF, 10 OCTOBER 2026 ═════════════════════════════════════
// Build it with published research rather than a scan of our own, the way
// Maryland #38 was built. Point the page at the design and development
// secondaries: an ecommerce agency in this region that designs and builds the
// store for brands. Pain points in the pain-point section, a short summary,
// and brand owners' own objections in the objection block.
//
// ══ THREE MEASUREMENTS DIED ON THIS ROW BEFORE THE BRIEF CHANGED ═══════════
//   1. TEMPLATE DRIFT. Whether product pages of the same product_type differ
//      from each other. Dead on method: the shipping, returns and reviews
//      wording it looked for sits in the site FOOTER, so presence was
//      guaranteed and every difference was noise.
//   2. BUNDLE CONTENTS. Whether a variety pack says what is inside. The feed
//      said 70% did not, across 156 assortments on 11 stores. Rendering killed
//      it outright: 37 of 37 flagged pages stated the contents. The contents
//      live in a metafield panel body_html cannot see. THIS IS THE THIRD TIME
//      that exact failure has killed a measurement, after the Arizona
//      dimensions scan and the Maryland serving-rate scan.
//   3. COLD LANDING. Whether a product page gives a lost visitor a way back.
//      10 of 14 stores carried no breadcrumb markup on any product page, which
//      looked like a finding until it was verified: all five stores checked by
//      hand had "shop all" wording and between 7 and 14 collection links on the
//      page itself. The claim would have been false.
// A fourth idea, a mobile layout scan, was not attempted because Atlanta #30
// had already killed it during its own validation.
// So this page carries published documentation rather than original research,
// and the asset says so rather than dressing it up.
//
// ── THE KEYWORD ─────────────────────────────────────────────────────────────
// Primary: "ecommerce agency new jersey", 10/mo on Google Keyword Planner, the
// figure of record. SEMrush reads volume 0, KD 3% ("very easy"), CPC $0 and
// competitive density 0, and puts the 10/mo on a different phrase, "ecommerce
// agency and consulting new jersey". Not taken as a secondary: it is an awkward
// phrasing, GKP is the volume of record, and three secondaries are assigned.
//
// THREE SECONDARIES, ALL BUILD AND DESIGN TERMS, which is what sets this page's
// subject: ecommerce website development agency nj · ecommerce development nj ·
// ecommerce web design nj. All three end in the ABBREVIATION, which cannot be
// written as a noun phrase in English. Handled the way Raleigh #26 handled
// "raleigh nc": each one starts its own relative clause, so "an ecommerce
// website development agency NJ brands hire" parses, where "an ecommerce
// website development agency NJ" does not.
//
// ── SERP, 10 October 2026 ───────────────────────────────────────────────────
// The weakest in the batch. The #1 result ranks on ONE referring domain and one
// backlink with a page authority of 6, on an exact-match URL. Five of the nine
// organic results are directories carrying zero backlinks and zero traffic
// (Sermondo, The Manifest, DesignRush, F6S), one is a state government page,
// and one is a scraped Semrush mirror hosted on a printing company's domain.
// Three real agencies rank. NOT USED AS THE PAGE: the owner has rejected
// agency-market research as page content twice.
//
// ── ONE IDEA (15 words) ─────────────────────────────────────────────────────
// Your store gets handed back. Nobody tells you which parts you can change
// yourself.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["E"], emerging-led, thin agency supply. Justified by the SERP rather than
// asserted: five directories, a scraper and a government page occupy a page-one
// that a one-backlink page leads. New Jersey is NOT in Master §5.9's vertical
// map, so no dominant vertical is claimed anywhere on this page and the case
// studies are matched on what the WORK was, not on where anybody sits.
//
// ── WHAT IS ALREADY TAKEN ON THIS HUB, NOW NINETEEN PAGES ───────────────────
// FOUR LINES TO STAY CLEAR OF, all of them adjacent to a build page:
//   DALLAS owns "the storefront is the quick part of a development project,
//   what takes the time is everything behind it", and its asset is where custom
//   code beats an app. This page never argues build-versus-buy. It asks a
//   different question: once it is built, who is allowed to change it.
//   DENVER owns the store that accumulated one install at a time. This is not
//   about drift; it is about what was decided deliberately at build time.
//   MAINE owns what a build involves before anybody quotes for it.
//   ATLANTA owns catalog structure and the labels behind it.
// ACCESSIBILITY WAS CONSIDERED AND REJECTED as the subject: shopify-development
// -agency/california already argues it from Civil Code §52(a), and Boston's
// header carries an explicit instruction not to re-argue it.
//
// ── SOURCED FACTS ───────────────────────────────────────────────────────────
// Three pages of Shopify's own published documentation, read 10 October 2026:
// theme sections, metafields, and checkout style. Chosen because every one of
// them describes a limit the reader will meet personally, and because none of
// it is contentious: it is the platform describing itself.
// NO SOURCE IS NAMED IN VISIBLE COPY, per the owner's standing rule. The facts
// carry the citations.
//
// PRESENCE (Master §4): none claimed. REVIEW: 365 days.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_NEW_JERSEY: GeoPage = {
  type: "geo",
  slug: "new-jersey",
  path: "/services/ecommerce-agency/new-jersey",
  hub: "/services/ecommerce-agency",

  geo: {
    name: "New Jersey",
    type: "state",
    areaServed: "New Jersey",
  },
  archetype: ["E"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency new jersey",
  secondaryKeywords: [
    "ecommerce website development agency nj",
    "ecommerce development nj",
    "ecommerce web design nj",
  ],
  faqKeywords: [
    "what can i change on my shopify store myself",
    "can i edit the checkout page",
    "what does an ecommerce agency do",
    "how much of my store will i be able to edit",
    "do you work on woocommerce or magento",
    "what is a metafield",
  ],
  reviewedPhrases: ["in New Jersey"],

  metaTitle: "Ecommerce Agency New Jersey | Design and Build Your Store",
  metaDescription:
    "An ecommerce agency New Jersey brands hire to design, build and develop the store. Plus what you can change yourself after launch, and where that stops.",
  shortTitle: "Ecommerce agency New Jersey",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "Ecommerce agency New Jersey brands hire to build a store you can run yourself",
  qualifier:
    "Design, development, custom work, migration, conversion and retention. One team across the whole store. Built so the things you change every week are things your own team can change.",

  heroImage: {
    src: "/images/ecommerce-agency-new-jersey-hero-v1.webp",
    alt: "A product page we built for the wellbeing brand NEOM, showing the product, its reviews and a subscribe and save panel, with result cards beneath it reading checkout conversion up 34 percent and order volume up 10 percent",
    cutout: true,
  },

  heroGlow: true,
  heroCtaLabel: "Get in touch with us",
  relatedTone: "white",
  whatWeDoAboutItTone: "cream",
  gradientLayerTone: "white",
  assetBeforeServices: true,

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years building stores" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "{storesBuilt} stores built, and handed over working.",
    subheading:
      "Apparel, beauty, food, gear. Ask any ecommerce agency New Jersey brands shortlist what you will be able to change on your own once they leave.",
  },

  assetCtaLabel: "See what you can change yourself",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // PAIN FIRST, and a pain almost every owner has lived through, rather than a
  // guess that the reader's store is broken, which Step 04 rule 4 forbids.
  hook:
    "Your store gets handed back on a Tuesday. It looks right, everything works, and somebody tells you it is yours now.\n\nThen you want to move a banner up the page. Or add one line to every product. And the answer turns out to be an email to whoever built it, and a wait.\n\nNobody told you, before the work started, which parts you would be able to change yourself. An ecommerce agency New Jersey brands hire should say it out loud, because it gets decided while the store is being built and not afterwards.",

  // ── Short summary, on the owner's instruction of 10 October 2026 ──────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency New Jersey brands hire to take on a whole store rather than one slice of it. Design, development, migration, conversion and keeping customers. We start from the store you have now rather than the one you meant to build. And we build it so the things you change most often are things your team can change without us.",

  // ── Pain points ───────────────────────────────────────────────────────
  // Every one breaks on something the reader cannot change without help, which is
  // this page's territory and is covered by no other segments block on the hub.
  segments: {
    heading: "What you cannot change yourself, by category",
    intro:
      "Every brand has a short list of things it needs to change constantly. Which things they are depends on what you sell. Whether you can do them yourself was settled when the store was built, and an ecommerce agency New Jersey brands hire should have asked you first.",
    items: [
      {
        icon: "apparel",
        name: "Apparel and footwear",
        what: "Launch pages you can put up yourself, and a size guide your own team can edit.",
        breaks:
          "The drop. If a launch page needs a developer, your date moves to suit somebody else's calendar.",
      },
      {
        icon: "beauty",
        name: "Beauty and personal care",
        what: "A fixed place for ingredients and how to use it, on every product, in the same spot.",
        breaks:
          "The reformulation. Change one ingredient and you have to find every page that mentions it.",
      },
      {
        icon: "consumable",
        name: "Food and drink",
        what: "Seasonal ranges you can swap over, and shipping rules that change with the weather.",
        breaks:
          "The season. Your range turns over four times a year. The store was built once.",
      },
      {
        icon: "jewelry",
        name: "Jewelry and accessories",
        what: "Gifting pages you can set up in an afternoon, and engraving choices on the product itself.",
        breaks:
          "The window. Gifting season is short, and a page you cannot build yourself arrives after it.",
      },
      {
        icon: "outdoor",
        name: "Equipment and gear",
        what: "Specs, fit and what works with what, each in a field of its own on your product pages.",
        breaks:
          "The detail. Buyers ask one precise question, and the answer has nowhere on your page to live.",
      },
    ],
  },

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // New Jersey has NO entry in Master §5.9, so no dominant vertical is claimed.
  // What is said here is geography, which is checkable, and then it turns to
  // the reader rather than continuing about the state.
  placeLayerHeading: "You are selling between two of the country's biggest markets",
  placeLayer:
    "Sell from New Jersey and you have New York on one side of you and Philadelphia on the other. That is an enormous number of buyers close by, and nearly all of them will meet you on a phone rather than in person.\n\nSo your store is the shop. It has to carry a new product, a seasonal range and a launch, sometimes in the same month.\n\nThat is a lot of changing for a store that nobody built to be changed. An ecommerce agency New Jersey brands hire should ask how often you expect to change it before deciding how to build it.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "What you can change yourself was decided before launch",
  gradientLayer:
    "**Your theme is built out of sections.** A template is customized by adding, removing and rearranging sections, and the blocks inside them. That is the part your team can do alone.\n\n**But the slots run out, and checkout is not one of them.** Sections go on any page of your online store except the gift card and the checkout pages. Checkout has its own, much shorter, list of settings.\n\n**And a field your theme has no room for needs code.** You can add your own data to products and connect most of it in the theme editor, as long as the theme allows it. Where it does not, somebody edits theme code. Which of those you land in is a build decision, and an ecommerce website development agency NJ brands hire should tell you which one before it starts.",
  gradientFacts: [
    {
      id: "shopify-theme-sections-2026",
      claim:
        "Shopify Help Center, 'Sections and blocks' (help.shopify.com/en/manual/online-store/themes/theme-structure/sections), read 10 October 2026. States that 'Templates are customized by adding, removing, and rearranging sections and the blocks within.' Sets explicit ceilings: 'You can have up to 25 sections for each template, and each template can contain up to 1250 blocks across all sections.' On where sections may be used it states that 'Sections can be customized and added to any page of your online store, with the exception of gift card and checkout pages', and notes that 'Not all sections will have individual blocks to customize.' Drawn on by the gradient block and by rows one, two and three of the asset table, which set out what a merchant can rearrange without a developer and where that stops. LIMITS OF THIS CITATION: the ceilings and the behaviour described are Shopify's own documentation of its current online store, they vary by theme, and the page carries no visible date of last revision; nothing here is claimed about any other platform.",
      url: "https://help.shopify.com/en/manual/online-store/themes/theme-structure/sections",
      publisher: "Shopify Help Center",
      captured: "2026-10-10",
      reviewAfterDays: 365,
    },
    {
      id: "shopify-metafields-2026",
      claim:
        "Shopify Help Center, 'Metafields' (help.shopify.com/en/manual/custom-data/metafields), read 10 October 2026. States that 'Metafields allow you to extend an existing platform data model, such as products, customers, and orders with your own custom data.' On whether a merchant can surface that data without a developer it states that 'If you have a theme that supports dynamic sources, then you can connect most metafields to your theme by using the theme editor', and that 'If you're using vintage themes, or if you want to add metafield types that your theme doesn't support, then you can edit your theme code.' Supports the third paragraph of the gradient block and rows six and seven of the asset: a custom field is a merchant-level change on a theme that supports it, and a code change where the theme does not. BOUNDS: one platform's documentation of its own behaviour; what a given theme supports is not claimed here, and the page carries no visible date of last revision.",
      url: "https://help.shopify.com/en/manual/custom-data/metafields",
      publisher: "Shopify Help Center",
      captured: "2026-10-10",
      reviewAfterDays: 365,
    },
    {
      id: "shopify-checkout-style-2026",
      claim:
        "Shopify Help Center, 'Checkout style' (help.shopify.com/en/manual/checkout-settings/checkout-style), read 10 October 2026. Documents what a merchant may change about checkout appearance from settings rather than code, including that 'You can add your store logo to the checkout pages' and may align it 'on the left, right, or center of the banner area', that 'You can change the background color of that banner', that 'You can change the color of the buttons and accents such as links on the checkout pages', and that 'You can select from a list of fonts to customize your checkout pages'; it also describes switching between one-page and three-page checkout. On the limit, it states that 'If you're on the Shopify Plus plan, then you can use Checkout Blocks to make advanced checkout branding customizations without making API calls.' Supports rows four and five of the asset. BOUNDS: appearance settings only, on one platform, with no claim made here about what any individual plan costs; the page carries no visible date of last revision.",
      url: "https://help.shopify.com/en/manual/checkout-settings/checkout-style",
      publisher: "Shopify Help Center",
      captured: "2026-10-10",
      reviewAfterDays: 365,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // NOT A MEASUREMENT, and the intro says so. Three measurements died on this
  // row, so what is published is the platform's own documentation, set out as
  // questions about the reader's store with the answer beside each.
  asset: {
    title: "Seven things you will want to change, and who can change them",
    intro:
      "Every brand ends up changing the same handful of things over and over. On the left is what you will want to do. On the right is what it takes on a store built the ordinary way. This one is not a study of ours, it is simply how the platform works, and it is worth settling before your build starts rather than after.",
    renderer: "checklist",
    tone: "cream",
    method: {
      captured: "2026-10-10",
      howGathered:
        "Read from the platform's own documentation, not a summary. Two limits. What a theme allows varies, so the right column is a general rule and not a reading of your store. And this is one platform only.",
    },
    columns: ["What you will want to change", "What it takes"],
    rows: [
      {
        label: "Move a section up the home page?",
        cells: ["Yours, in the theme editor"],
        note: "Templates are built from sections you can add, remove and reorder.",
      },
      {
        label: "Add another block to a product page?",
        cells: ["Yours, until you hit the ceiling"],
        note: "Up to 25 sections per template, and 1,250 blocks across all of them.",
      },
      {
        label: "Change the checkout page the same way?",
        cells: ["You cannot. It is not a section."],
        note: "Sections go on every page of the store except gift card and checkout.",
      },
      {
        label: "Put your logo, colors and type on checkout?",
        cells: ["Yours, in settings"],
        note: "Logo and its alignment, banner and button colors, fonts, and one or three page layout.",
      },
      {
        label: "Go further than that on checkout?",
        cells: ["Needs the Plus plan, or an extension"],
        note: "The advanced branding tools are documented as a Plus feature.",
      },
      {
        label: "Add a field your products need?",
        cells: ["Yours, if the theme supports it"],
        note: "Custom fields connect in the theme editor on a theme that allows it.",
      },
      {
        label: "Show that field where the theme has no slot?",
        cells: ["Somebody edits code"],
        note: "Older themes, or a field type the theme does not support, mean theme code.",
      },
    ],
    derived:
      "Read it back and a pattern shows up. Three of the seven are yours outright, two depend entirely on how your store was built, and two were never going to be yours.\n\nThe ones in the middle are the whole argument. Whether a new field is something your team adds in an afternoon or something you email about is not a limit of the platform. It is a decision somebody made while building your store, usually without mentioning it.\n\nIf none of this came up before your build, it is not because it is obscure. It is because it is easier to deliver a store that only its builder can change, which is worth knowing about any ecommerce agency New Jersey brands meet.\n\nThat suits whoever built it and it does not suit you. The cost never shows up on the invoice. It shows up the week you need a landing page and the answer is Thursday.\n\nIt is worth putting to any ecommerce agency New Jersey brands are weighing up, before the work starts rather than after the handover.",
    derivedList: {
      title: "Three things to settle before you sign anything",
      items: [
        "Ask which parts of the page your team will be able to change alone, and get the answer in writing rather than in a meeting.",
        "Name the three things you change most often, and ask specifically whether each of them is yours afterwards.",
        "Ask what happens to the custom fields your products need, and whether showing them means editing code every time.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why this never comes up before a build",
        body:
          "**Because nobody asks it.** You are buying a store, so the conversation is about how it looks and what it does on launch day. What it is like to live with a year later is not on the agenda.\n\n**And it is invisible at handover.** Everything works on the day. The limits only appear the first time you want something that nobody planned for.\n\n**So it falls to you to raise it.** Which is the wrong way round, and an ecommerce agency New Jersey companies retain should be the one bringing it up.",
      },
    ],
    reviewAfterDays: 365,
  },

  // ── Block 6: Service menu ─────────────────────────────────────────────
  // Six services. Somebody searching "ecommerce agency" has not narrowed yet,
  // so every major service is named. BODIES only on the three rows carrying an
  // assigned secondary, which is what types.ts allows them for.
  disciplines: {
    label: "What we do",
    heading: "Six jobs, and you can take one or all of them",
    intro:
      "Every row below links to the build it came from. Start with one and the others stay open to you later. Together they cover what an ecommerce agency New Jersey teams keep on retainer gets asked for.",
    items: [
      {
        label: "Design and build",
        heading: "We design the storefront, and build it so you can move it",
        body:
          "Most ecommerce web design NJ brands ask us for is not really a new look. It is the same store, rebuilt so the team can change it.",
        covers: ["Storefront design", "Product pages", "Checkout", "Account area", "Design systems"],
        imageAlt: "A rebuild for the outdoor brand Dryrobe, which had three stores and one brand",
        caseSlug: "dryrobe-shopify-plus-redesign",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Ecommerce development",
        heading: "We build the logic a theme was never going to hold",
        body:
          "The ecommerce development NJ brands pay for is usually not a whole new store. It is the handful of things the current one cannot be made to do.",
        covers: ["Custom features", "Order logic", "Integrations", "Custom fields", "Support"],
        imageAlt: "Development work for the wellbeing brand Neom, held back by its own setup",
        caseSlug: "neom-wellbeing-shopify-upgrade",
        cta: { label: "Explore ecommerce development", href: "/services/shopify-store-development" },
      },
      {
        label: "Conversion",
        heading: "We change one thing, then show you what it did",
        body:
          "An ecommerce website development agency NJ brands trust should be able to show the reading before the work and the reading after it, whichever way they went.",
        covers: ["A/B testing", "Product page work", "Checkout conversion", "Analytics"],
        imageAlt: "Conversion work for the skincare brand 111SKIN",
        caseSlug: "111skin-shopify-cro-redesign",
        cta: { label: "Explore conversion work", href: "/services/ecommerce-marketing-agency" },
      },
      {
        label: "Migration",
        heading: "We move you off what you outgrew",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Search equity"],
        imageAlt: "ChloBo, moved onto a platform that could carry the brand",
        caseSlug: "chlobo-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Retention",
        heading: "We make the next order easier than the last",
        covers: ["Subscriptions", "Email and SMS", "Loyalty", "Lifetime value"],
        imageAlt: "Subscription work for the personal care brand Wild",
        caseSlug: "wild-shopify-plus-subscriptions",
        cta: { label: "Explore retention work", href: "/services/ecommerce-marketing-agency" },
      },
      {
        label: "Wholesale and B2B",
        heading: "We let trade buyers order without emailing you",
        covers: ["B2B storefronts", "Price lists", "Net terms", "Quote to order", "ERP integration"],
        imageAlt: "Wholesale ordering for the access equipment brand Henchman",
        caseSlug: "henchman-shopify-plus-b2b",
        cta: { label: "Explore wholesale work", href: "/services/shopify-store-development" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "The part that never changes",
    tone: "white",
    intro:
      "These four hold whichever of the six you take. Worth asking the same of every ecommerce agency New Jersey brands consider.",
    items: [
      {
        title: "We agree what you will be able to change yourself",
        body: "Before anything is built, we write down which parts your team will own afterwards. That list is part of the scope, not a chat. It is the first thing to ask an ecommerce agency New Jersey brands bring in.",
      },
      {
        title: "Every job carries a number",
        body: "We take the reading before we touch anything, then again once it is done. You get both figures exactly as they came out, not a tidied version of them.",
      },
      {
        title: "Everything stays in your name",
        body: "The build, the accounts and the customer records are all registered to you from day one. End it whenever you want and none of it leaves with us.",
      },
      {
        title: "Scope is agreed before anything starts",
        body: "Nothing gets built until the scope is written down and signed off. If it has to grow, you hear what that costs and decide, instead of meeting it on a bill.",
      },
    ],
  },

  // ── Block 7: Where we would start ─────────────────────────────────────
  whatWeDoAboutItHeading: "Where we would start on your store",
  whatWeDoAboutIt:
    "We ask you for the three things you change most often, then we go and see whether your store actually lets you change them. The answer says more about how your store was built than looking at it ever does.\n\nThen you get the list: what your team owns today, what needs a developer every time, and which of those we would move across first.\n\nSome of it is a morning's work. An ecommerce agency New Jersey brands keep should be willing to do that part early, even though it is the least impressive thing on the invoice.",

  midCta: {
    text: "Want to know what your team can change without help? Send us the address and you get the answer back.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure where yours would start? Tell us about the store and we will name the one we would start on.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The first call is about your store and nothing else. We do not charge for it, and we are quite willing to end it by telling you there is little to do.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  // Matched on the WORK, not on geography: New Jersey has no vertical in §5.9.
  proofHeading: "Three builds, and the numbers after them",
  proof: [
    {
      slug: "dryrobe-shopify-plus-redesign",
      vertical: "Outdoor and apparel",
      whatWasBuilt: "Three separate stores rebuilt into one, without losing what each was doing",
      outcome: "+89% online revenue, +23% checkout completion, -31% return rate",
      verified: true,
    },
    {
      slug: "neom-wellbeing-shopify-upgrade",
      vertical: "Wellbeing",
      whatWasBuilt: "A store rebuilt on current theme architecture, with retail and three markets joined to it",
      outcome: "+34% checkout conversion, +10% order volume, 4 retail hubs connected",
      verified: true,
    },
    {
      slug: "111skin-shopify-cro-redesign",
      vertical: "Skincare",
      whatWasBuilt: "A conversion rebuild on a premium catalog that buyers could not navigate",
      outcome: "+46% conversion rate, +21% revenue, +4% order value",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  // Brand owners' own objections, per the owner's instruction. Distinct from
  // Maryland #38 (paid before and nothing moved / busy season / juniors) and
  // from Maine #35 (inherited mess). Copy Standard 6.4 wants at least one
  // conceded honestly: the second and third both are.
  objectionsHeading: "Where people push back",
  objections: [
    {
      objection: "We already have a developer.",
      answer:
        "Then keep them. Plenty of what we do sits alongside somebody in-house rather than replacing them.\n\nWhat we would ask is what happens to your store when they are away, and whether the list of things only they can do has been getting longer.",
    },
    {
      objection: "If our team can edit it, our team will break it.",
      answer:
        "That is a fair worry and it is why this is a build question rather than a training one.\n\nThe parts you change weekly get built so they are safe to change. The parts that would do damage stay locked. Which is which is something we agree with you, not something we decide quietly.",
    },
    {
      objection: "We only want a redesign, not a rebuild.",
      answer:
        "Then that is what we would quote for, and we have talked people out of the bigger job before.\n\nWe would still tell you where a new look sits on top of something that will fight you later. An ecommerce agency New Jersey brands hire should say that before quoting rather than after.",
    },
    {
      objection: "We are on WooCommerce, not Shopify.",
      answer:
        "That is fine, and we work on it as it stands. The platform is rarely the thing actually holding a store back.\n\nIf moving would pay for itself, we will show you which part of the business pays for it. If it would not, we will tell you to stay where you are.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  faqHeading: "What brands ask before they pick anyone",
  faqs: [
    {
      question: "What can I change on my store myself?",
      answer:
        "On a current theme, you can add, remove and reorder the sections a page is built from, and the blocks inside them. That covers most layout changes. What you cannot reach that way is checkout, and any field your theme has no slot for.",
      unique: true,
    },
    {
      question: "Can I edit the checkout page?",
      answer:
        "Only how it looks, and only from settings. That means your logo and where it sits. The banner and button colors. The fonts. And whether checkout runs on one page or three. Anything deeper needs the Plus plan or an extension.",
      unique: true,
    },
    {
      question: "How much of my store will I be able to edit after launch?",
      answer:
        "That depends on how it is built. Which is why it belongs in the scope, not the handover. We write the list down before the work starts, so you agree to it rather than find out later.",
      unique: true,
    },
    {
      question: "What is a metafield?",
      answer:
        "It is a field you add yourself for data the platform does not have a home for, like an ingredient list or a fit note. On a theme that supports it you can connect it in the editor. Where the theme does not, it needs code.",
      unique: true,
    },
    {
      question: "What does an ecommerce agency do?",
      answer:
        "An ecommerce agency New Jersey brands hire does six jobs. Designs and builds the storefront. Writes the code a theme will not stretch to. Moves you off a platform you have outgrown. Raises how many visitors actually buy. Gets those buyers ordering a second time. And opens a separate route for trade customers.",
      unique: true,
    },
    {
      question: "Will you work on a WooCommerce or Magento store?",
      answer:
        "Yes. We do not open by asking what you are on. We open by asking where the orders are going.",
      unique: true,
    },
    {
      question: "Are you an ecommerce agency New Jersey brands can work with remotely?",
      answer:
        "Yes, and remote is how we work with everybody. We hold no premises in New Jersey, and where the work gets done makes no difference to what you get.",
      unique: true,
    },
    {
      question: "Can you make an existing store easier for us to edit?",
      answer:
        "Usually, yes, and it is a smaller job than a rebuild. It tends to mean moving hard-coded content into sections and fields your team can reach. We would tell you first which parts are worth doing and which are not.",
      unique: true,
    },
    {
      question: "Do we lose design quality if the team can edit it?",
      answer:
        "No, as long as the limits are built in. Editable does not mean a blank canvas. It means your team gets a set of choices that all look right, which is a design job as much as a development one.",
      unique: true,
    },
    {
      question: "How long does the work usually take?",
      answer:
        "Weeks rather than months for the editing work on an existing store. A full design and build is longer, and we give you the dates before you commit to anything.",
      unique: true,
    },
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    heading: "Give us the address and we will tell you what your team can change",
    whatYouGet:
      "A plain account of what your team can change today and what needs a developer.",
    whatWeWillTellYouNotToDo:
      "If your store is already built well for this, that is what you get told, rather than a proposal for work you do not need. An ecommerce agency New Jersey brands trust should be willing to say that.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition:
        "Those same seven questions from the table, put to your own store. It is the first thing we check as an ecommerce agency New Jersey brands hire. None of it is conditional on buying anything.",
      offer: "Put your store address in the form, and you get back:",
      parts: [
        "Which of the seven your team can already do without help.",
        "The ones that need a developer every single time, and roughly what that is costing you in waiting.",
        "The one thing we would move across first, and everything we would deliberately leave alone.",
      ],
      limit: "You get the findings and nothing else attached to them.",
      noObligation: "Free, and nobody chases you afterwards.",
    },
  },

  // Wider than the usual [2000, 2500] because this page carries six disciplines
  // and three secondaries, following Arizona #37 and Maryland #38 at [2000, 3000].
  wordCountTarget: [2000, 3000],
  sources: [],
};
