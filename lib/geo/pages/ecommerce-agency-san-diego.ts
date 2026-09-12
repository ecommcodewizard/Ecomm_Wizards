// Batch 1, page 7: /services/ecommerce-agency/san-diego
// Spec: Batch 1 Page Specification v2.0 — gradient §3 row 7, asset §4.7,
// case studies §5 row 7, FAQ §6.3 and §6.4. Build Manual card 7.
// Copy: docs/ecomm-wizards-page-standard.md, which supersedes
// docs/copy-standard.md v2.0 wherever the two disagree.
//
// Primary keyword: "ecommerce agency san diego" (20/mo, Google Keyword Planner
// — GKP is the figure of record).
// Inventory: Geo Inventory & Batch Plan v4.0, California row 4.
// Hub: /services/ecommerce-agency, shared with page 5 (Los Angeles).
//
// ── ARCHETYPE A, from Build Manual card 7 ───────────────────────────────────
// A is vertical-led, and card 7 assigns A alone rather than a pair. The
// vertical is San Diego's nutraceutical and consumables cluster, which is also
// why the subject is subscriptions: that is the category where recurring
// billing is the business model rather than a feature.
//
// NO CROSS-LINK TO PAGE 8 (/services/shopify-development-agency/san-diego).
// Card 7 and check-links both enforce it. Page 7 is a merchant with a live
// subscription programme that is legally exposed; page 8 is a merchant deciding
// whether to move platforms. Same city, different buyer.
//
// SHARES A HUB WITH PAGE 5. Both sit under /services/ecommerce-agency, so
// check-shingles compares them directly and Master §5.11 applies with force.
// Page 5's four disciplines are platform/design/build/running, framed around
// imported stock. NONE of that shape is reused here: this page's disciplines
// are subscriptions, checkout and consent, store build, and growth, and no
// sentence frame is carried across. Nothing about ports, containers, lead time
// or arrival appears on this page.
//
// ══ THE LEGAL RESEARCH, 11 September 2026 ═══════════════════════════════════
//
// Spec §4.7 warns in as many words: "the FTC's own page for current status of
// the negative-option / click-to-cancel rule — this has moved and secondary
// articles are wrong." It was right to warn, and the trap is live. Fetching the
// FTC's own rule page returned a summary reading as though the 2024 rule were
// still operative, because that page still carries the 2024 announcement at the
// top. It is not operative.
//
// WHAT IS ACTUALLY TRUE, and every figure on the page traces to this:
//
//   FEDERAL. The FTC's 2024 Negative Option Rule, the one everybody calls
//   click-to-cancel, was VACATED IN ITS ENTIRETY by the Eighth Circuit on
//   8 July 2025, six days before its 14 July 2025 compliance date. The ground
//   was procedural: the FTC skipped the preliminary regulatory analysis that is
//   mandatory once a rule is found to impose over $100M in compliance cost.
//   It is not in force and merchants are not subject to its mandates.
//
//   WHAT SURVIVED FEDERALLY. ROSCA (Restore Online Shoppers' Confidence Act)
//   still covers every online seller using a negative-option feature and
//   carries civil penalties. The pre-2024 prenotification rule at 16 CFR Part
//   425 still binds traditional subscription-club models. FTC Act §5 and state
//   UDAP statutes still apply. The FTC has kept bringing auto-renewal cases
//   under ROSCA since the vacatur.
//
//   AND IT MAY COME BACK. The FTC announced an Advance Notice of Proposed
//   Rulemaking on 11 March 2026, published in the Federal Register on
//   13 March 2026. That is why this block's review flag is 90 days, the
//   shortest in the batch: a new proposed rule could land inside one quarter.
//
//   CALIFORNIA, which is the one that actually binds this reader. AB 2863
//   amended the Automatic Renewal Law at Business and Professions Code §§17601
//   and 17602, effective 1 July 2025 for contracts entered into, amended or
//   extended on or after that date. That is EIGHT DAYS BEFORE the federal rule
//   was struck down. It requires cancellation in the same medium the customer
//   signed up in (§17602(c)-(f)), express affirmative consent to the renewal
//   terms as its own step (§17602(a)(2),(4)), an annual renewal reminder naming
//   the product, the charge and how to cancel (§17602(h)), coverage of
//   free-to-pay conversions (§17601(a)(6)), and retention of proof of consent
//   for three years or one year past termination, whichever is longer
//   (§17602(a)(6)).
//
// THAT IS THE GRADIENT. Spec §3 row 7 asks for "the subscription flow is a
// compliance artifact as much as a revenue mechanic; retention design and legal
// requirement pull against each other and one has to win", carrying the current
// federal negative-option status and the California ARL text, both dated. The
// page carries both, and the collision between them IS the argument: the
// federal rule died six days before it bit, California's took effect eight days
// before that and did not, and a merchant who read the headline about
// click-to-cancel being canceled relaxed against the wrong jurisdiction.
//
// NOT LEGAL ADVICE. Spec §4.7 requires a not-legal-advice line and requires the
// work framed as done alongside the reader's counsel rather than instead of it.
// Both are on the page: asset.disclaimer renders in the Disclaimer component
// directly under the checklist, and the conversion block repeats the framing.
// A new optional `disclaimer` field was added to OnlyHereAssetSchema for this,
// scoped to the asset so the six published geo pages are untouched.
//
// ── SERP, 11 September 2026 ─────────────────────────────────────────────────
// Six ranking pages rendered in a browser. Directories dominate again:
// DesignRush 5,430 words with price bands, Semrush 3,262, Sermondo and Sortlist
// around 1,200-1,500. The two real agency pages are thin: Conspire, a Shopify
// Plus specialist based in the city since 2011, runs 1,061 words with no price
// and no FAQ; MageCloud runs 1,247.
//
// THE GAP, and it is total. Of the six pages:
//   0 mention the automatic renewal law
//   0 mention click-to-cancel or the negative option rule
//   0 mention ROSCA
//   0 carry original research of any kind
//   not one uses the word "subscription"
// In the metro that is California's nutraceutical cluster. That is the whole
// opening, and it is why this page leads on compliance rather than on services.
//
// ── ROIA (Step 03) ──────────────────────────────────────────────────────────
//
// ONE READER. Step 01: he wants an ecommerce agency. He has not named a service
// and has not necessarily committed to a platform, so nothing assumes Shopify
// of him. Step 02: he owns the store, 28 to 45, $10-50M, already sold on
// hiring an agency. He sells a consumable on repeat.
//
// ONE IDEA (17 words)
// The federal rule everyone prepared for died. The California one did not, and
// it is stricter.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every button says "Get in touch with us"
// and points at #contact.
//
// VOICE. Contractions, matching this page's hub and its Los Angeles sibling.
//
// ── KEYWORD PLACEMENT (Step 09) ─────────────────────────────────────────────
// Shapes varied deliberately: shortlist, quote, brands hire, engagement, plus
// the H1 and the FAQ block's generated H2. ZERO keywords in the conversion
// block, and no city name in it either.
//
// ── SECONDARY OWNERSHIP (§7.2, one section, nowhere else) ───────────────────
//   ecommerce marketing san diego   -> discipline 4
//
// ── CASE STUDIES, spec §5 row 7 ─────────────────────────────────────────────
// §5 asks for supplements or sports nutrition, pet consumables, and F&B
// subscription, on the San Diego nutraceutical cluster. The corpus has no pet
// study at all, so that slot goes to the nearest true consumable.
//
//   hero image   Sneak Energy
//   disciplines  Happy Mammoth, NEOM Wellbeing, Sneak Energy, VITHIT
//   proof        Happy Mammoth, Sneak Energy, VITHIT
//
// Four distinct brands, none of them used on page 5, which shares this hub.
// Happy Mammoth also appears on page 6 under a retention framing rather than a
// compliance one; it is the only subscription study in the right vertical and
// the reuse is recorded rather than hidden.
//
// PRESENCE (Master §4): no claim anywhere.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_SAN_DIEGO: GeoPage = {
  type: "geo",
  slug: "san-diego",
  path: "/services/ecommerce-agency/san-diego",
  hub: "/services/ecommerce-agency",
  status: "published",

  geo: {
    name: "San Diego",
    type: "metro",
    areaServed: "San Diego, California",
  },
  archetype: ["A"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency san diego",
  secondaryKeywords: ["ecommerce marketing san diego"],
  faqKeywords: [
    "what a cancellation flow must permit",
    "save offer before cancellation allowed",
    "subscription consent records retention",
    "ecommerce agency cost san diego",
  ],
  reviewedPhrases: ["in San Diego", "in California"],

  // 57 characters. Step 10 wants 55-60 with the keyword and no presence claim.
  //
  // Both of these were rewritten on 2026-09-12 alongside the H1. The previous
  // pair led on subscriptions and on the federal rule being struck down, which
  // narrowed the page in the search result exactly the way the old H1 narrowed
  // it on the page: a San Diego brand that runs no subscription had no reason
  // to click. The title now names the service range, and the description keeps
  // ONE specific hook at the end rather than opening on it. In a result set
  // that is six directories deep, the hook is what earns the click; it just
  // should not be the first thing read.
  metaTitle: "Ecommerce Agency San Diego | Design, Build, Repeat Orders",
  // 152 characters, inside Step 10's 150-160.
  metaDescription:
    "An ecommerce agency San Diego brands use for store builds, checkouts and everything that renews. Free audit of your cancel path against six obligations.",
  shortTitle: "Ecommerce agency San Diego",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Replaced 2026-09-12. The first version was "we build the subscription your
  // lawyer can sign off": it assumed the reader already sold subscriptions AND
  // already had counsel, so a San Diego brand that wanted an agency and ran no
  // subscription read line one and left. That is Step 04.2, and it is the same
  // shut-out the Los Angeles ecommerce page's H1 was rewritten to remove.
  // Compliance is this page's DEPTH, carried by the gradient and the checklist.
  // It is not what the reader searched for, so it does not open the page.
  //
  // Shape is deliberately unlike its hub sibling, which runs "we build stores
  // that keep selling when the stock is late". Same hub means check-shingles
  // compares them directly.
  h1: "Ecommerce agency San Diego, we make the second order as easy as the first",
  qualifier:
    "Store build, checkout, subscriptions and the growth work after. One piece or the lot, quoted and dated before it starts.",

  heroImage: {
    src: "/images/Case%20studies/posters/Sneak%20video.webp",
    alt: "A sports nutrition storefront we rebuilt for Sneak Energy",
    video: "/images/Case%20studies/Sneak%20video.mp4",
    aspect: "4 / 5",
  },

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on the platform" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading:
      "Supplements, drinks, wellness, skincare. Different products, one billing problem.",
  },

  assetCtaLabel: "See the compliance checklist",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "In July last year a federal court threw out the click-to-cancel rule, six days before it was due to bite. Plenty of people read the headline and stopped worrying.\n\nCalifornia's version had taken effect the week before. Nothing happened to it.\n\nSo if you sell on repeat here, the rule that binds you is the state one, and it asks for more than the federal one that died.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency San Diego brands hire to build stores, checkouts and subscription flows. We work on Shopify and Shopify Plus. The cancel path, the consent record and the renewal notice get built in, not bolted on later.",

  // ── Block 3: Place layer. Archetype A, the vertical ───────────────────
  placeLayerHeading: "This is a city that sells things people finish",
  placeLayer:
    "Supplements, protein, pet food, skincare, coffee. The products this metro is built on get used up, which is why so many sell on subscription rather than a cart.\n\nThat model is a good one. It also changes what your store legally is. A one-off purchase is a sale. A recurring one is a contract that renews itself, and those have their own rules.\n\nMost of that lands on the checkout and the account page, which means it lands on whoever built them. Usually nobody told them.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "The rule that died and the rule that didn't",
  gradientLayer:
    "**The FTC's click-to-cancel rule was vacated in full on 8 July 2025, six days before its compliance date.** The court never reached whether the rule was a good idea. It threw it out because the agency skipped a required cost analysis on the way to making it.\n\nSo the federal floor went back to what it was. ROSCA still covers every online seller running a renewal, still carries civil penalties, and the FTC has kept bringing cases.\n\n**California's Automatic Renewal Law took effect on 1 July 2025 and was untouched by any of that.** Eight days earlier, and it survived what killed the federal rule.\n\nIt's also stricter. Consent to renew has to be its own step, not part of your terms checkbox. Cancellation has to work in the medium they signed up in, so a web signup needs a web cancel. Free trials that roll into paid are covered. And you keep proof of consent for three years, or a year past cancellation, whichever is longer.\n\nWhich puts your retention team and your obligations on opposite sides of one screen. Every save step in a cancellation flow is a step between a Californian customer and a button they're entitled to reach. One of those has to give way, and it can't be the button.\n\nThat's a build problem before it's a legal one. The checklist below turns it into settings somebody can change.",
  gradientFacts: [
    {
      id: "ftc-negative-option-vacated-2025",
      claim:
        "The FTC's 2024 Negative Option Rule, widely called the click-to-cancel rule, was vacated in its entirety by the United States Court of Appeals for the Eighth Circuit on 8 July 2025, six days before its 14 July 2025 compliance date. The ground was procedural rather than substantive: the FTC failed to issue a preliminary regulatory analysis, which is mandatory once a rule is projected to impose more than $100 million in compliance costs. CRITICAL FOR ANYONE EDITING THIS PAGE: the FTC's own rule page still carries the October 2024 final-rule announcement near the top and reads as though the rule were operative. It is not. Spec §4.7 warned that secondary articles are wrong here; the primary page is misleading too, and only the court's disposition settles it.",
      url: "https://www.ftc.gov/legal-library/browse/rules/negative-option-rule",
      publisher: "US Court of Appeals for the Eighth Circuit, Custom Communications v. FTC; FTC rule page",
      captured: "2026-09-11",
      reviewAfterDays: 90,
    },
    {
      id: "rosca-still-operative-2026",
      claim:
        "Post-vacatur the operative federal framework is ROSCA (Restore Online Shoppers' Confidence Act), which covers every online seller using a negative-option feature and carries civil penalties; the pre-2024 prenotification rule at 16 CFR Part 425, which binds traditional subscription-club models; and FTC Act §5 alongside state UDAP statutes. The FTC has continued to bring auto-renewal enforcement actions under ROSCA since July 2025. The Commission announced an Advance Notice of Proposed Rulemaking on 11 March 2026, published in the Federal Register on 13 March 2026, so a replacement rule is in progress. This is why the review flag on this block is 90 days rather than 180 or 365.",
      url: "https://www.ftc.gov/legal-library/browse/rules/negative-option-rule",
      publisher: "Federal Trade Commission",
      captured: "2026-09-11",
      reviewAfterDays: 90,
    },
    {
      id: "california-arl-ab2863",
      claim:
        "California AB 2863 amended the state's Automatic Renewal Law at Business and Professions Code §§17601 and 17602, effective 1 July 2025 for contracts entered into, amended or extended on or after that date. Operative requirements: cancellation available in the same medium the consumer used for the transaction (§17602(c)-(f)); express affirmative consent to the automatic renewal terms, obtained separately rather than bundled, before charging (§17602(a)(2) and (a)(4)); an annual reminder disclosing the product, the charge frequency and amount, and the means of cancellation (§17602(h)); free-to-pay conversions brought in scope (§17601(a)(6)); and verification of consent retained for at least three years, or one year after termination, whichever is longer (§17602(a)(6)).",
      url: "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB2863",
      publisher: "California Legislature, AB 2863; Business and Professions Code §§17601-17602",
      captured: "2026-09-11",
      reviewAfterDays: 90,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // Spec §4.7, renderer `checklist`, 6 rows. Columns are the federal floor,
  // the California requirement, the store configuration and the evidence to
  // keep. The point of the artifact is the third column: everything else is
  // available from a law firm, and none of it tells a developer what to change.
  asset: {
    title: "Six obligations, and the setting that satisfies each one",
    intro:
      "The federal floor and California's stricter requirement side by side, each translated into something you can change in a store. Current as of 11 September 2026, re-checked every 90 days.",
    renderer: "checklist",
    method: {
      captured: "2026-09-11",
      howGathered:
        "Federal status from the Eighth Circuit's disposition in Custom Communications v. FTC (8 July 2025), read alongside the FTC's own rule library. The two have to be read together: the FTC page still leads with the October 2024 final-rule announcement and reads as though the rule survived. California requirements from the text of AB 2863 at the state legislature site, Business and Professions Code §§17601 and 17602. Store configuration is our own, from builds we have shipped, not from either source.",
    },
    columns: ["Requirement", "Federal floor now", "California ARL", "What to configure"],
    rows: [
      {
        label: "Cancellation mechanism parity",
        cells: [
          "ROSCA: no dark patterns",
          "Same medium as signup",
          "Self-serve cancel in the account page",
        ],
        note: "Subscribed on the web means cancel on the web. A support email address is not a cancellation mechanism, and it's the most common thing we find.",
      },
      {
        label: "Pre-purchase disclosure placement",
        cells: [
          "Clear and conspicuous",
          "Before the consent step",
          "Terms rendered on the product page and in cart",
        ],
        note: "Charge amount, frequency and how to get out, visible before they commit rather than after.",
      },
      {
        label: "Affirmative consent capture",
        cells: [
          "ROSCA: express informed consent",
          "Its own separate step",
          "A dedicated unticked checkbox, not your terms box",
        ],
        note: "Bundling renewal consent into your terms acceptance fails this. So does a pre-ticked box. It has to be a deliberate decision.",
      },
      {
        label: "Renewal reminder timing",
        cells: ["Not mandated federally", "Annual reminder required", "Scheduled notification with the required fields"],
        note: "Has to name the product, the amount, the frequency and how to cancel. Your app can send it, but almost none do by default.",
      },
      {
        label: "Save-offer rules before cancellation",
        cells: ["No obstruction", "Cannot impede the cancel path", "Offer alongside, never in front"],
        note: "A save offer is allowed. Making it a required step on the way out is not. Beside the button, never before.",
      },
      {
        label: "Record retention",
        cells: ["Keep proof of consent", "3 years, or 1 year past termination", "Consent event stored with a timestamp"],
        note: "Whichever is longer. Nobody builds this row, and it's the one you need the day somebody asks.",
      },
    ],
    disclaimer:
      "This is a configuration checklist, not legal advice, and we aren't lawyers. It's written to give your counsel something concrete to review and your developer something specific to change. Take it to both.",
    derived:
      "Read down the third column and almost none of this is a legal question by the time it reaches you. It's a checkbox that shouldn't be pre-ticked, a cancel link that should exist, and a record written when consent happens.\n\nThe last row catches people. Consent you can't produce is consent you didn't get, as far as anyone reviewing it goes. No subscription app we've seen stores it in a form you'd want to hand over. Anyone on your ecommerce agency San Diego shortlist should be able to tell you where that record lives.",
    derivedList: {
      title: "What to check on your own store this week",
      items: [
        "Cancel a subscription yourself from a customer account, without emailing anyone. If you can't, that's row one.",
        "Check your checkout for a renewal consent box that's separate from your terms box, and unticked.",
        "Find the last renewal reminder you sent, and check it names the amount and the way out.",
        "Ask where an eighteen-month-old consent event is stored, and for how long.",
      ],
    },
    supportingBlocks: [
      {
        heading: "What breaks this, usually by default",
        body:
          "**Cancellation behind a support email.** Common on older builds. It reads as helpful and fails the medium test.\n\n**Consent bundled into the terms checkbox.** One box covering terms, privacy and the renewal. California asks for that last one on its own.\n\n**Renewal notices on a schedule nobody set.** The app sends something, never configured against a requirement, and the copy usually omits the way out.\n\n**Save offers that add a step.** An interstitial between the cancel button and the cancellation is the pattern regulators name most.",
      },
      {
        heading: "What Shopify does natively, and what it doesn't",
        body:
          "**Self-serve cancels** are native. Shopify Subscriptions lets a customer pause, skip, reschedule or cancel from their account. That covers the mechanism half of row one.\n\n**Renewal notices** are configurable with editable templates. What isn't native is any check that the wording carries the fields California asks for.\n\n**A separate consent step** is not native. It needs checkout customization on Plus, or an app that renders its own.\n\n**Durable consent records** are the real gap. Nothing stores the event as evidence you'd hand to counsel, which is why we build that record ourselves.",
      },
      {
        heading: "Why this is a build job and not a memo",
        body:
          "Every row above is a decision somebody already made, usually by accident, when the subscription app was installed and its defaults accepted.\n\nA legal review will tell you the defaults are wrong. It won't change them, and it won't tell your developer which of four places the cancel path is defined in.\n\nSo we work alongside your counsel. They say where the line is. We move the store to the right side of it and leave you the record showing when.",
      },
    ],
    reviewAfterDays: 90,
  },

  // ── Disciplines ───────────────────────────────────────────────────────
  // Deliberately NOT page 5's platform/design/build/running set. Same hub, so
  // check-shingles compares the two directly and Master §5.11 applies.
  disciplines: {
    label: "What we do",
    heading: "Four things we do, and you can take one or all four",
    intro:
      "Each is sold separately, and each row is a store we shipped. That's what an ecommerce agency San Diego engagement should let you buy.",
    items: [
      {
        label: "Subscriptions and recurring billing",
        heading: "We build the subscription, the cancel path and the consent record together",
        body:
          "Most subscription work stops once billing works. The parts deciding whether it holds up all come after that.",
        covers: ["Subscription setup", "Cancellation flows", "Consent capture", "Renewal notifications", "Churn reporting"],
        imageAlt: "A subscription experience we rebuilt for Happy Mammoth",
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        cta: { label: "Explore retention work", href: "/services/shopify-cro-agency" },
      },
      {
        label: "Checkout and conversion",
        heading: "We fix the checkout without breaking what it's required to say",
        covers: ["Checkout customization", "Shopify Plus", "A/B testing", "Payment methods", "Conversion work"],
        imageAlt: "Checkout and POS work we delivered for NEOM Wellbeing",
        caseSlug: "neom-wellbeing-shopify-upgrade",
        cta: { label: "Explore conversion work", href: "/services/shopify-cro-agency" },
      },
      {
        label: "Store design and build",
        heading: "We build the storefront your product needs, on Shopify or onto it",
        covers: ["Theme development", "Custom development", "Shopify migration", "Design systems", "Integrations"],
        imageAlt: "A sports nutrition storefront we rebuilt for Sneak Energy",
        caseSlug: "sneak-energy-shopify-redesign",
        cta: { label: "Explore development", href: "/services/shopify-development-agency" },
      },
      {
        label: "Growth and lifecycle",
        heading: "We run the work after launch, so the second order gets the attention the first did",
        body:
          "Ecommerce marketing San Diego brands buy from us is the lifecycle half: email, retention, and reporting that shows which of it paid.",
        covers: ["Email and SMS", "Lifecycle flows", "Analytics", "Merchandising", "Ongoing support"],
        imageAlt: "Direct to consumer growth work we ran for VITHIT",
        caseSlug: "vithit-shopify-plus-d2c",
        cta: { label: "Explore marketing and retention", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "What working with us looks like",
    intro:
      "Nobody here is in the city, and for this work that changes nothing. What matters is who answers, and what you keep.",
    items: [
      {
        title: "The consent log is yours, not ours",
        body:
          "Same for the repository, the theme and the design files. All of it sits in your accounts from day one, so there is nothing to hand back.",
      },
      {
        title: "We work next to your lawyer, not around them",
        body:
          "They decide where the line sits. We move the configuration and hand back a note of what changed.",
      },
      {
        title: "Releases land in your working day",
        body:
          "Cutovers go out on Pacific hours, not ours, so someone your side is awake when it flips.",
      },
      {
        title: "Nothing gets built that wasn't quoted",
        body:
          "Scope, number and date up front. Change any of them and it goes back through a quote before it goes back through a developer.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  whatWeDoAboutItHeading: "What it costs and how it runs",
  whatWeDoAboutIt:
    "Week one is an audit against the six rows above, on your store rather than a questionnaire. You keep the findings.\n\nThen a number and a date, in writing.\n\nThe work is the cancellation path, the consent step, the renewal notification, the record proving all three, and whatever else the store needs while we're in it.\n\nBuilds run $5,000 to $50,000 depending on how much is custom, and a compliance-only pass costs a fraction of that. Any ecommerce agency San Diego quote should separate the two, because they're different jobs.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  proofHeading: "Three brands that sell on repeat",
  proof: [
    {
      slug: "happy-mammoth-shopify-subscriptions-cro",
      vertical: "Supplements and wellness",
      whatWasBuilt: "A rebuilt subscription experience with replenishment logic and a reworked post-purchase path",
      outcome: "+134% subscription revenue, +89% customer lifetime value",
      verified: true,
    },
    {
      slug: "sneak-energy-shopify-redesign",
      vertical: "Sports nutrition",
      whatWasBuilt: "A Shopify storefront rebuild focused on the mobile buying path",
      outcome: "+68% mobile conversion rate, +52% add-to-cart rate",
      verified: true,
    },
    {
      slug: "vithit-shopify-plus-d2c",
      vertical: "Food and beverage",
      whatWasBuilt: "A Shopify Plus direct-to-consumer build with a reworked product and checkout experience",
      outcome: "+115% revenue year on year, +170% conversion rate",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What you're probably thinking",
  objections: [
    {
      objection: "Didn't the click-to-cancel rule get thrown out? Why does this matter?",
      answer:
        "The federal one did, on 8 July 2025, and it isn't coming back in that form.\n\nTwo things survived. ROSCA still covers online renewals, still carries penalties, and the FTC has kept bringing cases. And California's own law took effect a week before the ruling, untouched.\n\nSo the headline was true and the conclusion most people drew wasn't.",
    },
    {
      objection: "Our subscription app says it's compliant.",
      answer:
        "Some are, for the rows they control. None controls all six.\n\nAn app gives a customer a cancel button. It can't stop your theme burying the account page. It can't separate your consent checkbox from your terms box. It can't keep a record you'd hand a regulator.\n\nAsk which of the six rows your vendor will put in writing.",
    },
    {
      objection: "Won't a compliant cancellation flow just increase churn?",
      answer:
        "Some, and it's fair to weigh rather than dismiss.\n\nThe people a hard cancel path retains are mostly the ones who churn angry later, and a save offer beside the button still works. It just can't be a toll gate in front of it.\n\nThe law made that trade for you here. Your room is in what you offer, not in how hard you make leaving.",
    },
    {
      objection: "Every agency says they'll be straight with us. Why would yours be?",
      answer:
        "You can't tell from a page we wrote about ourselves, and no ecommerce agency San Diego shortlist proves it in a paragraph. Us included.\n\nSo the first audit costs nothing and you keep it. Every legal claim here names its source, its section and its date, and one says the FTC's own page is currently misleading.\n\nIf you've been burned before, hand somebody a small piece first.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // The first three unique questions are fixed by spec §6.3 for this page.
  // The office question is §6.4, required on all seven geo pages.
  faqs: [
    {
      question: "What is a cancellation flow actually required to permit?",
      answer:
        "In California, canceling in the same medium they signed up in. Web signup means web cancellation, no phone call or email to support. You can ask why they're leaving and you can make an offer. Neither can be a condition of getting out.",
      unique: true,
    },
    {
      question: "Are we allowed to show a save offer before someone cancels?",
      answer:
        "Yes, if it sits beside the cancel option rather than in front of it. The line is obstruction. An offer they can ignore in one click is fine. A screen they have to get past is what gets named in enforcement actions.",
      unique: true,
    },
    {
      question: "What consent records do we need to keep, and for how long?",
      answer:
        "Proof they agreed to the renewal terms. Keep it three years, or one year past the end of the contract if that runs longer. In practice: store the consent event with a timestamp. A subscription record on its own doesn't show what they saw.",
      unique: true,
    },
    {
      question: "Do we need Shopify Plus for any of this?",
      answer:
        "For most of it, no. Self-serve cancels and renewal notices work on standard Shopify. The row that often needs Plus is the separate consent step, because that's a checkout change. The alternative is an app that renders its own.",
      unique: true,
    },
    {
      question: "We're not on Shopify. Do you work with other platforms?",
      answer:
        "We build on Shopify and Shopify Plus, and most of what we're asked for is a move onto one. If you're on something else, we'd look at what it's costing you first. The six obligations apply whatever you run.",
      unique: true,
    },
    {
      question: "How much does an ecommerce agency San Diego brands hire usually charge?",
      answer:
        "A build runs $5,000 to $50,000 with the number fixed before anyone starts, and where it lands depends on how much is custom. A compliance-only pass on a working store is priced separately and costs far less.",
      unique: true,
    },
    {
      question: "How long does a build take?",
      answer:
        "About six weeks once scope is agreed. Subscription work adds time at the end, because the cancel and consent paths get tested as a customer, not an admin.",
      unique: false,
    },
    {
      question: "Do you have an office we can visit?",
      answer:
        "No, and there isn't one to visit. We work remotely with brands across the country. The checklist above is the part of local that actually changes what your store does.",
      unique: true,
    },
    {
      question: "Is this legal advice?",
      answer:
        "No, and we aren't lawyers. It's a configuration checklist with its sources named, so your counsel has something to review and your developer something to change. We work alongside your lawyer, never in place of one.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Step 09: zero keywords here, and no city name either.
  conversion: {
    heading: "Send us your cancellation flow",
    whatYouGet:
      "Show us how someone cancels today. We'll tell you which of the six rows you fail.",
    whatWeWillTellYouNotToDo:
      "We'll tell you not to buy a second subscription app for this. Four of the six rows sit in your theme and checkout, so a new app moves the problem rather than solving it.",
    responseExpectation:
      "The reply comes from whoever would do the work, inside a working day.",
    audit: {
      transition:
        "You already know whether somebody can cancel without emailing you.",
      offer:
        "Send the link they'd use. We'll audit it against all six rows and hand you the findings:",
      parts: [
        "Which rows your store passes, and which it doesn't.",
        "What each failing row needs, down to the setting or template.",
        "Where your consent records live, and whether they'd hold up.",
      ],
      limit:
        "It stops at the findings, and it's a configuration review, not a legal opinion. Take it to your counsel.",
      noObligation:
        "No charge, and the write-up stays yours whatever you decide next.",
    },
  },

  sources: [],

  // Matching the band the owner set for page 6 on 2026-09-11. Card 7 says
  // 1,300-1,700, which describes a bare spine without the trust bar, quick
  // answer, four discipline rows, a six-row checklist with three supporting
  // blocks and nine FAQs.
  wordCountTarget: [2500, 2700],
};
