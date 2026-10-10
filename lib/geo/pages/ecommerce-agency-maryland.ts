// Batch 1b, page 38: /services/ecommerce-agency/maryland
// Inventory: Geo Inventory & Batch Plan v4.0, row #38. PRIMARY ONLY.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// ══ THIS PAGE CARRIES NO ORIGINAL RESEARCH, AND THAT IS A DELIBERATE CHOICE ══
// Every other page in this batch publishes a measurement of our own. This one
// does not, and the owner agreed to it explicitly on 9 October 2026 after being
// shown the alternative, which was to skip the row.
// SEVEN MEASUREMENTS WERE BUILT AND KILLED ACROSS ROWS #34, #37 AND #38. The two
// attempted for this row:
//   1. UNIT PRICING. Whether the bigger size is actually cheaper per unit, and
//      whether a buyer can tell. Computed from variant titles and prices across
//      83 multi-size products. Result: 0 of 83. Brands price bigger packs
//      cheaper per unit, consistently. The hypothesis was simply wrong, and only
//      6 of 20 stores carried enough multi-size products to judge at all.
//   2. DAYS OF SUPPLY. Whether a product sold by count says how long it lasts.
//      The feed said 89% did not. Rendering the flagged pages killed it: onnit
//      shows "chew 3 gummies per day" and a duration, with 22 supplement facts
//      images on the page, and olly states a duration on one and a rate on
//      another. Four of six checkable products DID say it. Same failure as the
//      Arizona dimensions scan: the answer lives in a panel the feed never
//      exposes. Also invalid at the edges, since food and drink brands read 100%
//      and nobody asks how many days a can of soda lasts.
// So the asset here is built from a published federal rule rather than from a
// scan, and it is presented as what the rule says rather than as a finding.
//
// ── THE KEYWORD, AND ITS WEAKEST SIGNAL IN THE BATCH ────────────────────────
// Primary: "ecommerce agency maryland", 10/mo on Google Keyword Planner, the
// figure of record. SEMrush returns n/a for volume, CPC, competitive density
// AND trend: no coverage at all, which is weaker than Maine #36's explicit zero.
// KD reads 11%, "very easy". The one measurable term in the cluster is
// "ecommerce marketing agency near maryland" at 20/mo, a different service on a
// different hub and an awkward phrasing, so it is not taken as a secondary.
//
// ── SERP, 9 October 2026 ────────────────────────────────────────────────────
// A local pack and nine organic results, no AI Overview. 6 of 10 readable.
// FOUR of the six readable are directories or an SEO page rather than ecommerce
// agency pages. The agency ranking sixth carries Page Authority 59 and 1.4K
// referring domains on a 385-WORD HOME PAGE that uses the word "ecommerce" once.
// HEALTH is named on 4 of the 6, more than any other vertical, which matches
// Master §5.9 giving Baltimore "industrial B2B, health, speciality food".
// NOT USED AS THE PAGE. The owner rejected agency-market research on Arizona for
// being the fourth of its kind, and that judgement holds here.
//
// ── ONE IDEA (16 words) ─────────────────────────────────────────────────────
// You gave a ship date and missed it. There is a federal rule about what
// happens next.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// ── ARCHETYPE ───────────────────────────────────────────────────────────────
// ["A"], vertical-led, the same as Arizona. Master §5.9 gives Baltimore
// "industrial B2B, health, speciality food", and all three ship physical goods
// against a promised date, which is what the page is about.
//
// ── WHAT IS ALREADY TAKEN ON THIS HUB, NOW EIGHTEEN PAGES ───────────────────
// THREE LINES TO STAY CLEAR OF, all of them close:
//   BOSTON owns the three answers BEFORE the cart, one of which is when it
//   arrives. This page is entirely AFTER the order is placed: what is owed to a
//   buyer once a promised date has already been missed. Different moment,
//   different obligation, and the page never discusses what to publish pre-cart.
//   CHICAGO owns shipping COST and the weights behind it. Nothing here touches
//   what delivery costs.
//   SAN DIEGO owns consumer law, specifically California auto-renewal and how to
//   cancel. This cites a federal shipping rule instead. Two law-adjacent pages on
//   one hub is a real risk, so this one stays on the single obligation and never
//   broadens into compliance generally.
//
// ── SOURCED FACT ────────────────────────────────────────────────────────────
// 16 CFR Part 435, the Mail, Internet, or Telephone Order Merchandise Rule.
// Chosen because almost no merchant has read it and every merchant is bound by
// it: it sets a default shipping deadline, and it says what must happen when
// that deadline is going to be missed.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Six builds across the service rows, three in the proof block, chosen to avoid
// the sets used on Arizona #37 and Maine #36 where possible.
//
// PRESENCE (Master §4): none claimed. REVIEW: 365 days, since the page rests on
// a rule rather than on a scan that ages.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_MARYLAND: GeoPage = {
  type: "geo",
  slug: "maryland",
  path: "/services/ecommerce-agency/maryland",
  hub: "/services/ecommerce-agency",

  geo: {
    name: "Maryland",
    type: "state",
    areaServed: "Maryland",
  },
  archetype: ["A"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency maryland",
  secondaryKeywords: [],
  faqKeywords: [
    "what happens if i cannot ship on time",
    "what is the 30 day shipping rule",
    "do i have to refund a delayed order",
    "what does an ecommerce agency do",
    "do you work on woocommerce or magento",
    "how do i set shipping expectations on my store",
  ],
  reviewedPhrases: ["in Maryland"],

  metaTitle: "Ecommerce Agency Maryland | Build and Support Your Store",
  metaDescription:
    "An ecommerce agency Maryland brands hire to design, build and run the store. Plus the federal rule that decides what yours owes a buyer when an order runs late.",
  shortTitle: "Ecommerce agency Maryland",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "Ecommerce agency Maryland brands hire to build and support the store",
  qualifier:
    "Design, build, custom work, migration, conversion and retention. One team for your whole store. That includes the parts that only matter after an order is taken.",

  // Built by scratchpad/md38-hero.mjs. New filename each time, never an
  // overwrite: next/image caches per path.
  heroImage: {
    src: "/images/ecommerce-agency-maryland-hero-v1.webp",
    alt: "A storefront we built for the wellbeing brand This Works, showing its sleep category with the products beneath it, and result cards beside it reading conversion up 38 percent and mobile conversion up 45 percent",
    cutout: true,
  },

  heroGlow: true,
  heroCtaLabel: "Get in touch with us",
  // Owner's call, 10 October 2026: no second button in the hero at all. The
  // only place it could point is the asset, and this page's asset is a table of
  // a federal rule, which is homework rather than an invitation. So the hero
  // offers one action. assetCtaLabel is deliberately absent, not forgotten.
  hideHeroSecondaryCta: true,
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
    heading: "{storesBuilt} stores built, and the orders behind them shipped.",
    subheading: "Health, food, industrial, apparel. Ask any ecommerce agency Maryland brands shortlist what their build does on the day you cannot ship.",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // PAIN FIRST, and a pain nearly every store owner has lived rather than a
  // guess about his store being broken, which Step 04 rule 4 forbids.
  hook:
    "Your store was built around the sale. Every page, every photograph, every button, argued over for weeks.\n\nWhat happens after the order never got that attention. Nobody plans for the week a supplier is late and forty parcels cannot go out.\n\nThere is even a federal rule about that week, and the odds are nobody raised it when your store was built. It sets a deadline where you never stated one. It says what you owe the buyer once you know you will miss it. An ecommerce agency Maryland brands hire should have built your store so that answer is automatic.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Maryland brands hire to take on a whole store rather than one slice of it. Building it, replatforming it, making it convert and keeping customers. Whatever you are running today is what we work on. That includes the operational parts, like what the store does when an order cannot go out on time.",

  // ── Pain points, the section the owner asked for on 10 October 2026 ────
  // Every one breaks on something AFTER the order, which is what this page is
  // about and what no other segments block on the hub covers.
  segments: {
    heading: "What goes wrong after the order, by category",
    intro:
      "Getting the sale is the part everybody plans for. What happens next decides whether you keep the customer. It looks different depending on what you sell, and an ecommerce agency Maryland brands hire should know which one is yours.",
    items: [
      {
        icon: "consumable",
        name: "Health and supplements",
        what: "Repeat shipments that land before your customer's last bottle runs out. A clear line on what is in stock.",
        breaks: "A gap in the routine. Miss a delivery on something taken daily and the habit stops, which is harder to restart than it was to start.",
      },
      {
        icon: "box",
        name: "Specialty food and drink",
        what: "Shipping days that match how it travels. Dates your customer sees before ordering.",
        breaks: "Time. A two-day slip turns fresh food into a complaint. No apology fixes what arrived.",
      },
      {
        icon: "wholesale",
        name: "Trade and industrial",
        what: "Order status a buyer can check without asking, and a way to reorder a part without a phone call.",
        breaks: "Somebody else's deadline. Your late delivery stops their job, so they chase you daily until it lands.",
      },
      {
        icon: "apparel",
        name: "Apparel and footwear",
        what: "Exchanges that keep the sale. Honest timings around your launches and the gifting season.",
        breaks: "The occasion. Late for the date it was bought for is not a delay, it is a refund.",
      },
      {
        icon: "outdoor",
        name: "Equipment and gear",
        what: "Real lead times on the things that take weeks. Parts your buyer can still get long after the sale.",
        breaks: "Silence. On a long wait, a buyer who hears nothing assumes the worst and asks for the money back.",
      },
    ],
  },

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Master §5.9 gives Baltimore "industrial B2B, health, speciality food". All
  // three ship physical goods against a promised date, which is the page.
  placeLayerHeading: "Whatever you sell here, somebody has to put it on a truck",
  placeLayer:
    "If you sell from Maryland you are almost certainly shipping a real thing. Health products, food and drink, parts and gear for other businesses.\n\nNone of it is a download. Somebody picks your order, packs it, puts it on a truck. Any one of those steps can slip, and not for reasons you control.\n\nSo what your store promises at checkout is a promise about the real world. An ecommerce agency Maryland founders brief will find a beautiful storefront. It will also find the day after the order run on email.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "Your store has a deadline even if you never set one",
  gradientLayer:
    "**Your silence gets filled for you.** Where your store states no shipping time clearly, a federal rule gives you thirty days from a properly completed order. That applies whether you knew about it or not.\n\n**And missing it is not just an apology.** Once you know you cannot ship in time, your buyer has to be offered a choice, unprompted. Accept the delay, or cancel and take a prompt refund.\n\n**Which makes it your build, not your lawyer.** Out of the box a refund is something a person issues from the admin, one order at a time. Whether yours works that way was settled when the store was built, and an ecommerce agency Maryland brands trust should raise it before you need it.",
  gradientFacts: [
    {
      id: "cfr-435-mail-internet-order-2026",
      claim:
        "16 CFR Part 435, the Mail, Internet, or Telephone Order Merchandise Rule, read via eCFR (ecfr.gov, title 16, chapter I, subchapter D, part 435) on 9 October 2026. Provides that where no shipping time is clearly and conspicuously stated, the seller must ship 'within thirty (30) days after receipt of a properly completed order from the buyer', with fifty days rather than thirty where the buyer has applied for credit to pay for the merchandise in whole or in part. Where the seller cannot ship within the applicable time, the rule requires it to offer the buyer, 'clearly and conspicuously and without prior demand, an option either to consent to a delay in shipping or to cancel the buyer's order and receive a prompt refund', and states that this offer 'shall be made within a reasonable time after the seller first becomes aware of its inability to ship within the applicable time set forth in paragraph (a)(1) of this section, but in no event later than said applicable time'. Where a further delay follows, the buyer must be given 'a renewed option either to consent to a further delay or to cancel the order and to receive a prompt refund'. The rule also provides that a seller's failure to have records or procedures assuring shipment in the ordinary course within the applicable time 'will create a rebuttable presumption that the seller lacked a reasonable basis for any expectation of shipment within said applicable time'. Drawn on by the gradient block and the asset table, which both set out the obligation the rule creates. LIMITS OF THIS CITATION: what appears on the page is a plain account of the rule's text and must not be read as legal advice, since the rule carries exceptions and defined terms that are not reproduced; nothing is claimed about enforcement, about any particular seller's compliance, or about how any state rule interacts with it. A merchant with a real problem should take advice rather than rely on a summary.",
      url: "https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-435",
      publisher: "Electronic Code of Federal Regulations",
      captured: "2026-10-09",
      reviewAfterDays: 365,
    },
    {
      id: "shopify-refund-order-2026",
      claim:
        "Shopify Help Center, 'Refunding orders' (help.shopify.com/en/manual/orders/refund-cancel-order), read 9 October 2026. States that 'You can refund an entire order or only part of an order from the Orders page in your Shopify admin' and that 'Refunding an order sends payment back to the customer, which can help you resolve disputes, correct pricing errors, or honor your return policy.' It notes that 'As part of the refund process, you have the option to restock the items and to send a notification email to the customer', that 'In some cases, you can cancel an order and then issue a refund', and that to refund orders a user must 'be the store owner, or have the following Orders permissions' for the payment method concerned. Supports one line of the gradient block: that issuing the refund and sending the notice a late order needs are, by default, things a human does inside the admin rather than behaviour the store has of its own. BOUNDS: this is one platform's documentation of its default behaviour; apps and custom work can automate parts of it, which is the page's argument rather than a contradiction of it; and the page carries no visible date of last revision.",
      url: "https://help.shopify.com/en/manual/orders/refund-cancel-order",
      publisher: "Shopify Help Center",
      captured: "2026-10-09",
      reviewAfterDays: 365,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // NOT A MEASUREMENT. This is the rule set out plainly, which is the honest
  // thing to publish when two attempts at an original scan have failed. The
  // intro says as much rather than dressing it up as research.
  asset: {
    title: "Seven things your store has to handle after the order",
    intro:
      "Every store needs an answer for the week it cannot ship, whoever built it. On the left is what yours either does by itself or does not. On the right is what a federal rule requires of it. This one is not a study of ours, it is published law, and it is the sort of thing an ecommerce agency Maryland brands hire should have put to you already.",
    renderer: "checklist",
    tone: "cream",
    method: {
      captured: "2026-10-09",
      howGathered:
        "We read the rule itself rather than somebody's summary of it, and the wording below follows what it says. Three limits you should know. This is what the rule requires, not legal advice, and it carries exceptions this table does not reproduce. State rules can sit on top of it. And if you have a real problem with a late order, take advice rather than relying on a table on an agency's website.",
    },
    columns: ["What your store has to handle", "What the rule requires"],
    rows: [
      { label: "Does your store state a shipping time at all?", cells: ["If not, you get 30 days"], note: "50 days where the buyer applied for credit to pay." },
      { label: "Is the date you publish one you can hold?", cells: ["Whatever you state is the deadline"], note: "Publishing a shorter one does not buy you anything." },
      { label: "Can it tell a customer the date has slipped?", cells: ["Required, before the deadline passes"], note: "The rule says no later than the applicable time." },
      { label: "Does that message carry a real choice?", cells: ["Wait, or cancel for a prompt refund"], note: "And it has to be offered without being asked for." },
      { label: "Can a cancellation refund without a person?", cells: ["The refund has to be prompt"], note: "By default somebody issues it from the admin, one at a time." },
      { label: "What happens if it slips a second time?", cells: ["The same choice, offered again"] },
      { label: "Is any of it written down afterwards?", cells: ["Without records, you are presumed to have had no basis"], note: "The rule calls that a rebuttable presumption." },
    ],
    derived:
      "Read it back and almost none of it is a legal problem. It is a build problem, which is why an ecommerce agency Maryland brands hire should be the one raising it.\n\nEvery line above is a thing your store either does by itself or does not. Does a delayed order trigger a message? Does that message carry a real choice? Does a cancellation refund without somebody opening the admin?\n\nIf none of that exists on yours, it is because nobody was asked for it when the store was built. The storefront gets specified in detail and the day after the order gets left to whoever is on email.\n\nThat is a reasonable way to start and a poor way to run. It only hurts on the worst week of your year, when the supplier is late and the orders are stacked up.\n\nWiring it properly is a small job done early and a miserable one done during a backlog, which is worth saying to any ecommerce agency Maryland brands are weighing up.",
    derivedList: {
      title: "Three things to check on your own store",
      items: [
        "Find out what your store does today when an order cannot ship. If the answer is that somebody notices, that is the gap.",
        "Check whether your shipping times are stated clearly on the page, because the rule fills the silence with thirty days if they are not.",
        "Ask whether a cancellation refunds without anybody opening the admin, and how long that takes in practice.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Why this never gets specified",
        body:
          "**Because nobody briefs for the bad day.** A build gets scoped around the sale, and the sale is the happy path. Delays belong to a week nobody is imagining in a kickoff meeting.\n\n**And it is invisible until it is not.** Your store can run a long time without this mattering, then need it on everything at once.\n\n**So it sits with the team.** Which works until the volume arrives, and an ecommerce agency Maryland companies retain should be the one raising it rather than you.",
      },
    ],
    reviewAfterDays: 365,
  },

  // ── Block 6: Service menu ─────────────────────────────────────────────
  // Six services. The same reasoning as Arizona #37: somebody searching
  // "ecommerce agency" has not narrowed, so every major service gets named.
  // NO body lines: this row is primary only, and types.ts allows a body only
  // where an assigned secondary has to live.
  disciplines: {
    label: "What we do",
    heading: "Six jobs, and you can take one or all of them",
    intro:
      "Each row links the build it came from. Take one now and you can add another later without starting again. Together they cover what an ecommerce agency Maryland teams keep on retainer gets asked for.",
    items: [
      {
        label: "Design and build",
        heading: "We build the storefront people actually buy from",
        covers: ["Storefront build", "Product pages", "Checkout", "Account area", "Design systems"],
        imageAlt: "A storefront rebuild for the wellbeing brand This Works",
        caseSlug: "this-works-shopify-plus-migration",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Ecommerce development",
        heading: "We build the logic a theme was never going to hold",
        covers: ["Custom features", "Order logic", "Integrations", "Notifications", "Support"],
        imageAlt: "Development work for the drinks brand VITHIT",
        caseSlug: "vithit-shopify-plus-d2c",
        cta: { label: "Explore ecommerce development", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration",
        heading: "We move you off what you outgrew",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Search equity"],
        imageAlt: "Capelli Sports, moved onto a platform that could carry its catalog",
        caseSlug: "capelli-sports-shopify-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Conversion",
        heading: "We change one thing, then show what it did",
        covers: ["A/B testing", "Product page work", "Checkout conversion", "Analytics"],
        imageAlt: "Theme and conversion work for the sock brand Feetures",
        caseSlug: "feetures-shopify-theme-development",
        cta: { label: "Explore conversion work", href: "/services/ecommerce-marketing-agency" },
      },
      {
        label: "Retention",
        heading: "We make the next order easier than the last",
        covers: ["Subscriptions", "Email and SMS", "Loyalty", "Lifetime value"],
        imageAlt: "Subscription work for the health brand Happy Mammoth",
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
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
    intro: "These four hold whichever of the six you take. Worth asking the same of every ecommerce agency Maryland brands consider.",
    items: [
      {
        title: "We ask about the bad week, not just the good one",
        body: "Before anything is built, we ask what your store does when stock runs out and a supplier is late. That is the week it has to survive.",
      },
      {
        title: "Every job carries a number",
        body: "Whatever we are asked to shift gets a reading before the work and another after it. You are sent the two numbers themselves rather than a summary of them.",
      },
      {
        title: "Everything stays in your name",
        body: "Every asset sits in your name from the outset, the build, the accounts, the customer records. Walk away at any point and you keep the lot.",
      },
      {
        title: "Scope is agreed before anything starts",
        body: "Scope is documented and signed before a line is written. Should it need to expand, the cost of that reaches you ahead of the work rather than on an invoice.",
      },
    ],
  },

  // ── Block 7: Where we would start ─────────────────────────────────────
  whatWeDoAboutItHeading: "Where we would start on your store",
  whatWeDoAboutIt:
    "We place a test order and then ask your team what would happen to it if the stock were not there. That one question usually tells us more than an audit of the storefront does.\n\nThen you get the list: what your store handles by itself, what depends on somebody noticing, and what is simply not covered anywhere.\n\nMost of it is small to fix before you need it. An ecommerce agency Maryland brands keep should be willing to do that part first, even though it is the least impressive thing on the invoice.",

  midCta: {
    text: "Want to know what your store does with an order it cannot ship? Send the address and we will tell you.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure which of the six you need? Tell us about the store and we will name the one we would start on.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "That opening call covers your store alone. Nothing is charged for it, and nothing changes if our conclusion turns out to be that very little needs doing.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  proofHeading: "Three builds, and the numbers after them",
  proof: [
    {
      slug: "this-works-shopify-plus-migration",
      vertical: "Beauty and wellbeing",
      whatWasBuilt: "A replatform and a conversion rebuild taken as one job rather than two",
      outcome: "+38% conversion rate, +45% on mobile, -15% bounce",
      verified: true,
    },
    {
      slug: "vithit-shopify-plus-d2c",
      vertical: "Drinks",
      whatWasBuilt: "A direct to consumer build carrying custom work a theme could not reach",
      outcome: "+115% revenue growth, +170% conversion, +31% order value",
      verified: true,
    },
    {
      slug: "henchman-shopify-plus-b2b",
      vertical: "Access equipment",
      whatWasBuilt: "A single store carrying both the public and the trade, without duplicating the whole thing",
      outcome: "-70% on wholesale order processing, +58% revenue, -45% in platform cost",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  objectionsHeading: "Where people push back",
  objections: [
    {
      objection: "We paid an agency before and nothing moved.",
      answer:
        "That happens often enough that we assume it. Usually nobody agreed what number the work was meant to move, so there was no way to tell afterwards.\n\nEvery job here gets one number attached before it starts. You see the reading at the beginning and the reading at the end, whichever way they went.",
    },
    {
      objection: "We cannot have the store disrupted in our busy season.",
      answer:
        "Then we would tell you to wait, and we have said that to people before.\n\nWork happens on a duplicate of your theme and nothing reaches customers without your say-so. If the timing is genuinely wrong, the honest answer is a date rather than a workaround.",
    },
    {
      objection: "Do we get the people who pitched, or a junior?",
      answer:
        "It is the right question, and worth putting to every ecommerce agency Maryland brands shortlist, including us.\n\nYou are told who is doing the work and you speak to them directly. If that ever changes mid-project, you hear it from us at the time.",
    },
    {
      objection: "We are on WooCommerce, not Shopify.",
      answer:
        "That is fine. In our experience the platform is seldom the real constraint, and we work with whatever you have in place.\n\nWhere a move would genuinely pay, we will point at the specific part of the business it improves. Where it would not, we say so.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  faqHeading: "What brands ask before they pick anyone",
  faqs: [
    {
      question: "What happens if we cannot ship an order on time?",
      answer:
        "The federal rule says you offer the buyer a choice before the deadline passes, unprompted. Accept the delay, or cancel for a prompt refund. The part worth solving is whether your store does that by itself.",
      unique: true,
    },
    {
      question: "What is the 30 day shipping rule?",
      answer:
        "Where your store states no shipping time clearly, the rule gives you thirty days from a properly completed order. Stating your own time is what replaces that default.",
      unique: true,
    },
    {
      question: "Do we have to refund a delayed order?",
      answer:
        "If your buyer chooses to cancel rather than wait, yes, and promptly. The choice has to be offered rather than waited for.",
      unique: true,
    },
    {
      question: "How do we set shipping expectations properly?",
      answer:
        "State the time clearly where somebody is deciding, and make sure what you state is what your warehouse can actually do. A published date you cannot hold is worse than a longer one you can.",
      unique: true,
    },
    {
      question: "What does an ecommerce agency do?",
      answer:
        "Six jobs, in the order most brands meet them. Puts the storefront together. Codes whatever the theme will not stretch to. Carries you off a platform you have outgrown. Lifts the rate at which visitors buy. Brings the same people back. And opens a trade route if you sell to businesses.",
      unique: true,
    },
    {
      question: "Will you work on a WooCommerce or Magento store?",
      answer:
        "Yes. The platform is not our opening question. What is costing you orders this month is.",
      unique: true,
    },
    {
      question: "Are you an ecommerce agency Maryland brands can work with remotely?",
      answer:
        "Yes, and remote is the only way we work. No premises of ours exist in Maryland, and nothing about your result depends on the desk it came from.",
      unique: true,
    },
    {
      question: "Is this page legal advice?",
      answer:
        "No. It sets out what a published federal rule says, and the rule carries exceptions this page does not cover. If you have a live problem with a late order, take proper advice.",
      unique: true,
    },
    {
      question: "Can you build this into a store you did not make?",
      answer:
        "Usually, yes. It is mostly notification logic and a refund path, and both can be added to your store without disturbing anything else.",
      unique: true,
    },
    {
      question: "How long does something like this take?",
      answer:
        "Days rather than weeks on most stores. It is one of the smaller jobs on your list, which is exactly why it keeps getting left off it.",
      unique: true,
    },
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    heading: "Give us the address and we will tell you how your store handles a late order",
    whatYouGet:
      "You get a plain account of what your store handles by itself and what waits for somebody to notice.",
    whatWeWillTellYouNotToDo:
      "If your store already covers it, that is what you get told, rather than a proposal for work you do not need.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition:
        "Those same questions from the table, put to your own store. It is the first thing we check as an ecommerce agency Maryland brands hire. You do not have to buy anything to get the answers.",
      offer: "Put your store address in the form, and you get back:",
      parts: [
        "What your store does today when an order cannot ship on time.",
        "Whether your stated shipping times match what the warehouse can hold.",
        "The one thing we would wire first, and everything we would deliberately leave alone.",
      ],
      limit: "You get the findings and nothing else attached to them.",
      noObligation: "Free, and nobody chases you afterwards.",
    },
  },

  // Wider than the usual [2000, 2500] because this page carries six disciplines,
  // following Arizona #37 at [2000, 3000]. Austin and Dallas run [1300, 4300].
  wordCountTarget: [2000, 3000],
  sources: [],
};
