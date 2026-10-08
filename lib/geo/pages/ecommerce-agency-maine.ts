// Batch 1b, page 36: /services/ecommerce-agency/maine
// Inventory: Geo Inventory & Batch Plan v4.0, row #36.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "ecommerce agency maine" (10/mo inventory from Google Keyword
// Planner, the figure of record).
// AND A NUMBER THE OWNER SHOULD KEEP IN VIEW: SEMrush scores that exact phrase
// at ZERO, KD 6%. The demand sits on the REVERSED WORD ORDER, "maine ecommerce
// agency" at 110/mo, KD 14, which is the largest single keyword volume in the
// programme. The five-variation cluster totals 150 and 110 of it is in a phrase
// the inventory does not name. The URL and the primary follow the inventory, as
// instructed, and the reversed order is worked into the trust line and an FAQ
// rather than ignored.
//
// FOUR SECONDARIES, the most of any row so far:
//   "ecommerce developer maine", "maine ecommerce design",
//   "custom e-commerce website cost maine",
//   "build online store for small business maine"
// Two read as English and two do not, so the two natural ones sit in discipline
// body lines, per the owner's 2026-09-05 ruling that a body exists only where an
// assigned secondary has to live, and the two awkward ones are carried by FAQ
// questions, which Step 09 names as a good home. Sounding natural beats hitting
// the number, which the Standard says outright.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// THE SECONDARIES SAY WHO HE IS, AND HE IS NOT THE #35 READER. "cost", "small
// business" and "build online store" describe somebody at the START. Row #35, on
// the shopify-development hub, is written for a man who already runs a Shopify
// store and has lost the developer who built it. This one has not built yet, or
// what he has is minimal. That split is what keeps two Maine pages apart.
//
// ── ONE IDEA (16 words) ─────────────────────────────────────────────────────
// We build your store, and we tell you what that involves before anybody asks
// you for a price.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// AN EARLIER IDEA WAS REJECTED BY THE OWNER AND IS RECORDED SO IT IS NOT
// REVIVED: "the quote you are chasing is for the website, and the website is the
// small part". He was right twice over. It is obscure, and worse, it argues
// against the thing being sold, which Step 04 rule 1 forbids outright. Telling a
// man shopping for a store build that the build hardly matters loses him.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["E"], derived, the same as row #35. Master §5.10 covers metros and does not
// reach Maine. E is emerging-led, "fast growth, THIN AGENCY SUPPLY", and thin
// supply is measured rather than assumed here: of the seven agency pages ranking
// for this term, none states a cost, none states what is included, and the median
// page runs 505 words. Both Maine rows face the same market condition, so both
// carry the same archetype. That is honest rather than contrived.
//
// ── WHAT IS ALREADY TAKEN, AND THE FOUR LINES TO STAY CLEAR OF ──────────────
// This hub: Atlanta product data, Austin judging value, Boston the three answers
// before the cart, Chicago shipping weights, Dallas what sits behind the
// storefront, Denver accumulated architecture, Los Angeles selling what is not on
// the shelf, Milwaukee the buyer who wants fifty, Minneapolis photography, New
// York the platform ceiling, Philadelphia the second order, Raleigh the category
// page, San Diego subscription law, San Francisco in-house cost, Wisconsin the
// agency list being one-town firms.
//   AUSTIN owns ecommerce work being easy to buy and hard to JUDGE, tied to a
//   number. This page never argues about how to judge a job. It says what a job
//   contains, which is a different question asked earlier.
//   ORANGE COUNTY owns a derived list titled "Four things to settle before
//   anybody quotes you". No list here uses that shape or that phrasing.
//   SAN FRANCISCO owns in-house cost versus agency cost, which is why this page
//   never compares hiring somebody to retaining us.
//   MAINE #35, same state, owns whether the ranking pages were WRITTEN for Maine,
//   proved with a template test and a control. This row asks a different question
//   of a different set: whether those pages tell a buyer what he is buying.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 8 October 2026, from the owner's SEMrush export ───────────────────
// A local pack and nine organic results. No AI Overview, unlike #35.
// A PIRATED SEMRUSH MIRROR RANKS FIFTH (semrush-2.ahsanprinters.com), which is
// the same proxy whose watermark appears on the owner's own screenshots.
// firstpier.com/maine-shopify-agency ranks FOURTH here and FIRST on row #35, so
// one page is covering both terms.
//
// ── ORIGINAL OBSERVATION, 8 October 2026 ────────────────────────────────────
// THE QUESTION, taken straight from the secondaries: if you are trying to find
// out what a store costs, what it includes and how long it takes, does anything
// on this page tell you?
// Ten URLs opened in a desktop browser at 1440px, nine readable, one 403.
//   Agency pages stating any cost                  0 of 7
//   Agency pages stating what is included          0 of 7
//   Agency pages stating how long anything takes    1 of 7
//   Pages carrying any of the three                 2 of 9, and BOTH ARE
//     DIRECTORIES rather than agencies
//   Median page length                             505 words
//   Shortest in the local pack                     321 words
// So the only pages answering the question are the two that do not do the work.
//
// ── SOURCED FACT ────────────────────────────────────────────────────────────
// The platform's own setup documentation, used because it proves the point
// rather than asserting it: a store build is a published list of tasks, so "it
// depends" is not the only answer anyone could give.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Chosen for numbers an owner can weigh, which he asked for on #34:
//   Candy Kittens   conversion +182%, AOV +34%
//   Happy Mammoth   lifetime value +89%, conversion +61%
//   Capelli Sports  conversion +24%, site speed +38%
//
// PRESENCE (Master §4): none claimed. REVIEW: 180 days.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_MAINE: GeoPage = {
  type: "geo",
  slug: "maine",
  path: "/services/ecommerce-agency/maine",
  hub: "/services/ecommerce-agency",

  geo: {
    name: "Maine",
    type: "state",
    areaServed: "Maine",
  },
  archetype: ["E"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency maine",
  secondaryKeywords: [
    "ecommerce developer maine",
    "maine ecommerce design",
    "custom e-commerce website cost maine",
    "build online store for small business maine",
  ],
  faqKeywords: [
    "what does an ecommerce website cost",
    "how long does it take to build an online store",
    "what is included in an ecommerce build",
    "can you build a store for a small business",
    "do i need a custom store or a theme",
    "what do i need before an agency can start",
  ],
  reviewedPhrases: ["in Maine"],

  metaTitle: "Ecommerce Agency Maine | Build the Online Store From Scratch",
  metaDescription:
    "An ecommerce agency Maine businesses hire to build the online store. We checked whether anyone ranking here tells you what a build includes. Nobody does.",
  shortTitle: "Ecommerce agency Maine",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Service first, differentiator at the end, no problem named. Must differ from
  // every H1 on this hub and from Maine #35's "build, fix and extend the store".
  h1: "Ecommerce agency Maine brands hire to build the online store from scratch",
  qualifier:
    "Design, build, migration and growth for businesses selling online. Before you are asked for a budget, you get the list of what the work covers and what it leaves out.",

  // Built by scratchpad/me36-hero.mjs. New filename each time, never an
  // overwrite: next/image caches per path. Cards below the window with the
  // position derived from the window's real height.
  heroImage: {
    src: "/images/ecommerce-agency-maine-hero-v1.webp",
    alt: "A store we built for the confectionery brand Candy Kittens, beside cards reading conversion up 182 percent and average order value up 34 percent",
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
    // Carries the reversed word order, which is where the search volume
    // actually sits, without displacing the inventory's primary.
    heading: "{storesBuilt} stores built, and a written scope on every one.",
    subheading: "Food, outdoor, craft, apparel. Ask any Maine ecommerce agency on your list what their build includes and what it does not, and see who answers in writing.",
  },

  assetCtaLabel: "See what 9 pages told a buyer",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // PAIN FIRST, and the pain is the reader's, not a complaint about anybody.
  hook:
    "You want a straight answer about what an online store costs and what you get for it. Nobody seems willing to give you one.\n\nSo we checked whether anybody here does. We opened every result for this search and looked for three things: a cost, a timeline, and a list of what the work covers.\n\nOf the seven agency pages, none stated a cost, none said what was included, and one mentioned how long anything takes. The only two pages carrying any of it were directories, which do not build anything. That gap is what we would want any ecommerce agency Maine businesses meet to close first.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Maine businesses hire to design, build and grow online stores. We work on any platform you are already using. Before money is discussed you get a written list of what the build covers, what it does not, and roughly how long each part runs.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // MUST DIFFER FROM #35, which owns "one city and everybody else a long way
  // from it" and the store built once by whoever was nearest. This is about
  // businesses that sold in person first, which is the earlier stage and the
  // reader this row's secondaries describe.
  placeLayerHeading: "Most of these businesses sold something before they sold online",
  placeLayer:
    "A great many Maine businesses started somewhere physical. A shop, a stand at a market, a bench in a workshop, an account with a few stores that stocked them.\n\nSelling online comes later, and usually it starts small. A page somebody built at the kitchen table, or a listing on a marketplace that takes its cut.\n\nSo the first real store is a genuine decision rather than a refresh, and you are making it without having made it before. That is the position an ecommerce agency Maine owners approach is usually being asked to step into.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // Sourced, and chosen because it PROVES the page's claim rather than asserting
  // it: the platform publishes the task list, so nobody has to say "it depends".
  gradientLayerHeading: "A build is a list of jobs, and the list is published",
  gradientLayer:
    "**None of this is secret.** The platform publishes its own setup guide, which it describes as outlining the most important tasks to get a business up and running. Products, payments, shipping, taxes, a domain, a theme.\n\n**So the work can be named.** Anybody who has built a store before can tell you which of those jobs you are buying, which you will do yourself, and which nobody has thought about yet.\n\n**Which makes vagueness a choice.** It is reasonable for a price to depend on scope. It is not reasonable for the scope itself to stay a mystery, and any ecommerce agency Maine founders meet should put it in writing first.",
  gradientFacts: [
    {
      id: "shopify-setup-checklist-2026",
      claim:
        "Shopify Help Center, 'Getting set up to start selling' (help.shopify.com/en/manual/intro-to-shopify/initial-setup/setup-checklist), read 8 October 2026. States verbatim: 'This section of the Help Center outlines the most important tasks to get your Shopify business up and running as quickly as possible.' It opens 'It's time to build your store! There are so many different ways that you can use Shopify', notes that the section 'focuses on selling online' and points elsewhere for in-person selling, and sets out the first steps for creating an account and store before linking onward to 'New to Shopify checklists' and 'Adding business settings for your store'. Used in the gradient block to support one point only: that the parts of a store build are published and can be named, rather than being unknowable by nature. BOUNDS: this is a vendor's onboarding guide describing a merchant's own setup tasks, not an agency's scope of work, and no revision date appears on it. Nothing is drawn from it about two builds requiring equal effort.",
      url: "https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/setup-checklist",
      publisher: "Shopify Help Center",
      captured: "2026-10-08",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-maine-scope-scan-2026",
      claim:
        "Original observation, 8 October 2026. Ten URLs from the first page of results for 'ecommerce agency maine', comprising the local pack and the organic listings, were opened at 1440px in a desktop browser. Nine rendered something readable and one answered 403. Each was checked for three things a first-time buyer needs: any figure he could use, any statement of how long work takes, and any statement of what a build includes. Results across the nine: 2 carried any figure, 2 carried a range or a starting-from, 2 mentioned a timeline, and 1 stated what was included. Separating agencies from directories is what makes the finding: of the SEVEN agency pages, none stated a cost, none stated what was included, and one mentioned a timeline, while BOTH of the pages carrying this information were directories, which do not build stores. Page length across the nine ran from 274 to 2,835 words, median 505, and the shortest entry in the local pack ran 321 words. CONTEXT FROM THE SAME EXPORT, recorded but not claimed on the page: the inventory's primary scores zero monthly searches on SEMrush while the reversed word order 'maine ecommerce agency' scores 110; a pirated SEMrush mirror ranks fifth for this term; and one agency page ranks fourth here and first for 'shopify agency maine'. LIMITS: one browser on one day; one page per domain, normally the home page, so a firm may state scope elsewhere on its site and several plainly do on request; the agency-or-directory split turns on whether a page exists to list other companies; and declining to publish a price is a commercial decision, not a shortcoming. No firm is named.",
      url: "https://www.ecommwizards.com/services/ecommerce-agency/maine",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-10-08",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "What nine pages told somebody trying to buy a store",
    intro:
      "We went looking for the three things anybody buying a first store needs: what it costs, what it includes, and how long it runs. Then we checked every result an ecommerce agency Maine search returns for them. No firm is named below.",
    renderer: "frequency",
    tone: "cream",
    method: {
      sampleSize: 10,
      window: "10 results opened, 9 readable, 8 October 2026",
      captured: "2026-10-08",
      howGathered:
        "We opened the local map results and every organic listing, then read each one looking for a figure, a timeline and a description of what the work covers. We separated the agencies from the directories, because a directory listing other firms is not selling you a build. Four limits you should know. One page per business, usually the home page, so a firm may well set out its scope elsewhere or on a call. One browser, one day. Choosing not to publish a price is a sales decision, not a failing. And no firm is named here.",
    },
    columns: ["What a buyer was looking for", "How many pages had it"],
    rows: [
      { label: "Pages we could open and read", cells: ["9 of 10"] },
      { label: "Agency pages stating any cost", cells: ["0 of 7"] },
      { label: "Agency pages saying what is included", cells: ["0 of 7"] },
      { label: "Agency pages saying how long it takes", cells: ["1 of 7"] },
      { label: "Pages that carried any of the three", cells: ["2 of 9"], note: "Both of them were directories." },
      { label: "Middle page length", cells: ["505 words"], note: "The shortest ran 274." },
      { label: "Shortest entry in the map results", cells: ["321 words"] },
    ],
    derived:
      "Read the fifth row again, because it is the whole finding.\n\nThe only two pages telling a buyer anything about cost, scope or timing were directories. Neither of them builds stores. Every firm that actually does the work said none of it.\n\nThat is not dishonesty and it is not laziness. Publishing a price invites comparison on the wrong number, and most agencies would rather have the conversation than lose it to a figure taken out of context. It is a defensible decision.\n\nBut it leaves you where you started. You cannot compare what nobody will describe, so the choice comes down to who you liked on the phone.\n\nWe would rather hand you the scope and let you compare it. That is the test worth setting for any ecommerce agency Maine businesses put on a shortlist, ours included.",
    derivedList: {
      title: "Three things to ask for in writing",
      items: [
        "The list of what the build covers, and the list of what it does not. The second one matters more.",
        "Who writes the product descriptions and who takes the photographs, because that is usually assumed rather than agreed.",
        "What happens after launch, and for how long, before anything becomes chargeable again.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why nobody publishes a number",
        body:
          "**Because the honest number is a range.** A store with thirty products and one shipping rule is not a store with three thousand and twelve, and a figure stripped of that context misleads everybody.\n\n**And a published price gets compared to a cheaper one.** Usually one that covers far less, which is a conversation no agency wants to start from.\n\n**So the fix is scope, not price.** Say what the work contains and the number stops being mysterious, which is what you should want from an ecommerce agency Maine brands were weighing up.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Block 6: Service menu (he has not picked a service) ────────────────
  // TWO body lines, carrying the two secondaries that read as English. The other
  // two assigned secondaries are awkward as prose and are carried by FAQ
  // questions instead, which Step 09 names as a good home.
  disciplines: {
    label: "What we do",
    heading: "Four jobs, and what each one covers",
    intro:
      "Each row opens the store it was built for. Most businesses need the first and discover they wanted the last as well. Together they are what an ecommerce agency Maine owners retain gets asked to do.",
    items: [
      {
        label: "Design and build",
        heading: "We build the store and hand you the scope first",
        body: "Maine ecommerce design work starts with a written list of every page, template and rule the build covers, so nothing arrives as a surprise halfway through.",
        covers: ["Storefront build", "Product pages", "Checkout", "Account area", "Design systems"],
        imageAlt: "A store rebuild for the confectionery brand Candy Kittens",
        caseSlug: "candy-kittens-shopify-food-beverage-cro",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Ecommerce development",
        heading: "We build the parts a theme will never cover",
        body: "An ecommerce developer Maine businesses bring in should be able to say where a feature will live and what it will cost to maintain, before a line of it is written.",
        covers: ["Custom features", "Integrations", "Speed", "Subscriptions", "Support"],
        imageAlt: "Subscription and conversion development for the health brand Happy Mammoth",
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        cta: { label: "Explore ecommerce development", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration",
        heading: "We move you off what you outgrew",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Search equity"],
        imageAlt: "A platform move for the sports brand Capelli Sports",
        caseSlug: "capelli-sports-shopify-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Growth",
        heading: "We work on the store after it opens",
        covers: ["A/B testing", "Conversion work", "Email and retention", "Paid landing pages"],
        imageAlt: "Direct to consumer growth work for the drinks brand VITHIT",
        caseSlug: "vithit-shopify-plus-d2c",
        cta: { label: "Explore growth work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "The part that never changes",
    tone: "white",
    intro: "Four of these, whatever you buy. Ask any ecommerce agency Maine businesses consider for the same four.",
    items: [
      {
        title: "You get the scope before the number",
        body: "What the build covers and what it leaves out arrives in writing first. You can take that list to anybody, including somebody else.",
      },
      {
        title: "We say who is doing what",
        body: "Photographs, descriptions, stock counts. Somebody has to produce them, and we agree whether that is you or us rather than assuming.",
      },
      {
        title: "Your store stays yours",
        body: "The store, the domain and the customer list are registered to you from the first day. Stop working with us and all of it simply stays where it is.",
      },
      {
        title: "Changes get a number attached",
        body: "If the job grows, you hear what it adds before the work starts, not when the invoice turns up.",
      },
    ],
  },

  // ── Block 7: Where we would start ─────────────────────────────────────
  whatWeDoAboutItHeading: "Where we would start with you",
  whatWeDoAboutIt:
    "We go through what you sell, how many of it there is, and how it gets to people today. That is one conversation and it costs nothing.\n\nThen you get the scope back in writing. It lists the pages and rules your store would need. It also says what we would do, what you would do, and what we would leave until later.\n\nTake that list wherever you like. An ecommerce agency Maine businesses keep should be willing to be compared on it, and we would rather be compared on scope than on who sounded friendlier.",

  midCta: {
    text: "Want that scope written for your business? Tell us what you sell and we will put it together.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure which of the four you need? Tell us about the business and we will name the one we would start on.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The first call is about what you sell and what a store for it would have to do. There is no charge, and no obligation at the end of it.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  proofHeading: "Three stores, and what happened after they opened",
  proof: [
    {
      slug: "candy-kittens-shopify-food-beverage-cro",
      vertical: "Confectionery",
      whatWasBuilt: "A storefront rebuilt for a product people buy in handfuls and send as presents",
      outcome: "+182% conversion, +34% average order value, $8.1M new annual revenue",
      verified: true,
    },
    {
      slug: "happy-mammoth-shopify-subscriptions-cro",
      vertical: "Health and supplements",
      whatWasBuilt: "An account and repeat-order flow for customers who already knew what they wanted",
      outcome: "+89% lifetime value, +134% subscription revenue, +61% conversion",
      verified: true,
    },
    {
      slug: "capelli-sports-shopify-migration",
      vertical: "Sport",
      whatWasBuilt: "A move onto a platform that could carry the catalog it had grown",
      outcome: "+24% conversion, +38% site speed, 95% of search equity retained",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  objectionsHeading: "Where people push back",
  objections: [
    // FIRST on purpose. The H1 says "from scratch", which a reader who already
    // runs a store can read as "not for me". This catches him before the rest.
    {
      objection: "We already have a store. We are not starting from nothing.",
      answer:
        "Then we start from what you have, and most of this work is exactly that.\n\nA first build and a rescue are different jobs. So is moving off a marketplace. Whichever one you are buying gets written down, and an ecommerce agency Maine businesses trust should say which of the three you need.",
    },
    {
      objection: "We only sell a handful of things.",
      answer:
        "Then your build is smaller and the scope says so.\n\nA short catalog is easier to do properly, not harder. What takes the time is the rules around it, and with ten products there are usually very few.",
    },
    {
      objection: "Could we not just use a template ourselves?",
      answer:
        "Often, yes, and we will say so when it is true.\n\nIt stops working at one of two points. A rule your theme cannot express, or the day you are keeping the store running while also running the business.",
    },
    {
      objection: "We have no photographs or descriptions ready.",
      answer:
        "Almost nobody does, and it is the single most common reason a build runs late. Every ecommerce agency Maine brands shortlist should raise it unprompted.\n\nSo it goes in the scope as a job with a name against it. Either you are doing it, or we are, and agreeing which beats discovering it in week six.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  // Two FAQ questions carry the two assigned secondaries that do not read as
  // English in prose: the cost one and the small-business one.
  faqHeading: "What businesses ask before they pick anyone",
  faqs: [
    {
      question: "What does a custom e-commerce website cost Maine businesses?",
      answer:
        "It turns on how many products you sell and how many rules sit around them. Ask for the scope before the figure, because a number without one tells you nothing you can compare.",
      unique: true,
    },
    {
      question: "Can you build an online store for a small business in Maine?",
      answer:
        "Yes, and a smaller catalog usually means a shorter build rather than a worse one. The work scales with your rules, not with how big the company is.",
      unique: true,
    },
    {
      question: "How long does it take to build an online store?",
      answer:
        "Weeks rather than months for most first stores. The part that stretches is never the code, it is waiting on your photographs, descriptions and decisions about shipping.",
      unique: true,
    },
    {
      question: "What is actually included in a build?",
      answer:
        "Templates, the product setup, checkout, shipping and tax rules, and the pages people need before they buy. Anything outside that should be named in writing before you agree to it.",
      unique: true,
    },
    {
      question: "Do I need a custom store or will a theme do?",
      answer:
        "A theme covers most first stores perfectly well. Custom work is for a rule your theme cannot express, and any ecommerce agency Maine owners ask should test that before charging for it.",
      unique: true,
    },
    {
      question: "What do we need ready before you can start?",
      answer:
        "A list of what you sell, a price for each, weights if you ship, and whatever photographs exist. Nothing needs to be finished, but somebody has to own getting it done.",
      unique: true,
    },
    {
      question: "Will you work with the platform we are already on?",
      answer:
        "Yes. Moving is a separate decision and we will only recommend it when staying is costing you something specific.",
      unique: true,
    },
    {
      question: "Are you an ecommerce agency Maine businesses can work with remotely?",
      answer:
        "Yes, and that is how the whole job runs. We hold no premises here, and a store gets built the same way whether you are an hour from us or a thousand miles.",
      unique: true,
    },
    {
      question: "What if we need to stop part way through?",
      answer:
        "You keep what has been built and paid for, and it is yours to continue with elsewhere. Nothing is held back to make leaving difficult.",
      unique: true,
    },
    {
      question: "Do you only work with bigger brands?",
      answer:
        "No. A first store and a replatform are different jobs, and the scope is written for whichever you are actually buying.",
      unique: true,
    },
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    heading: "Tell us what you sell and we will write the scope",
    whatYouGet:
      "You get the list of what a store for your business would involve, and what it would leave out.",
    whatWeWillTellYouNotToDo:
      "If a template or your marketplace is genuinely enough for now, we will say so instead of writing up a build.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition: "The scope the nine pages would not give you, written for your business.",
      offer: "Tell us what you sell in the form, and you get back:",
      parts: [
        "The pages, templates and rules a store for you would actually need.",
        "Which parts we would do, which you would do, and which can wait.",
        "Roughly how long each part runs, so nothing arrives as a surprise.",
      ],
      limit: "You get the scope and nothing else attached to it.",
      noObligation: "Free, and nobody chases you afterwards.",
    },
  },

  wordCountTarget: [2000, 2500],
  sources: [],
};
