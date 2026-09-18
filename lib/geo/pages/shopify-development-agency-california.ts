// Group A, California #8: /services/shopify-development-agency/california
// Inventory: Geo Inventory & Batch Plan v4.0, California row 8 (Batch 1b).
// Primary keyword: "shopify agency california" (10/mo, Google Keyword Planner,
// the figure of record). Secondary: "shopify development company in
// california" and "expert shopify developers in california".
// Hub: /services/shopify-development-agency (exists).
// Copy: docs/ecomm-wizards-page-standard.md, which supersedes the older docs.
//
// ── WHAT THE SPEC DOESN'T COVER ─────────────────────────────────────────────
// Page Specification v2.0 stops at ten pages, so this state page has no
// gradient row, no asset specification and no build card. Master §5.10
// archetypes cover metros only (Inventory §6, "archetype gap"). Everything
// below is derived from the Inventory, the Master Strategy and research,
// with the Page Standard deciding shape and copy.
//
// ARCHETYPE: recorded as D, the nearest defined letter, because the schema
// requires one. D is "what you're up against". For a state page that is
// regulatory rather than competitive: the rules every store selling to
// Californians has to be built for.
//
// ── STEP 01, THE INTENT ─────────────────────────────────────────────────────
// `shopify agency <place>`: he is on Shopify and wants an agency, and he has
// NOT said which service. So the menu comes early and the H1 stays broad.
// The state angle is what a city page can't carry: California writes its own
// privacy, accessibility and pricing rules, and those rules land in the theme,
// the pixels and the checkout of any store selling to people there. The page
// never guesses his store is failing (Step 04 #4). It shows what a sample of
// other California brands' storefronts do, and what each rule touches.
//
// The page 7 lesson applied: page 7's first H1 was rejected for assuming a
// lawyer and a subscription. Nothing here assumes either. The H1 names the
// service and the reader's customers; the rules live in the hook, gradient
// and asset.
//
// H1 CHOSEN BY THE OWNER, 18 September 2026, from a menu of nine. He first
// took the same line ending "how your customers here buy", then dropped
// "here" when it was flagged as the one word on the page that could read as
// presence. The place is already in the line, so nothing was lost. Do not
// reintroduce it, and do not change the H1 without asking.
//
// NO OVERLAP WITH PAGE 7 (/services/ecommerce-agency/san-diego), which owns
// California's automatic renewal law. That law is deliberately left out here.
// SHARES A HUB with Los Angeles, New York, Austin, San Diego and Orange County,
// so check-shingles compares them; no sentence frame is carried across.
//
// ══ THE RESEARCH, 17 September 2026 ════════════════════════════════════════
//
// ── SERP (own teardown; owner's Semrush export to follow) ───────────────────
//   Shero        ~3,500 words, 6 FAQs, no price, says outright it has no
//                California office, Premier partner
//   mgroup       ~2,100 words, states $5,000 and $15,000-$50,000+, claims a
//                "California-based team", 8 FAQs incl. "What California cities
//                do you serve?"
//   GroRapid     ~1,300 words, price bands $5,000 to $50,000+
//   Stymeta      ~1,450 words, San Francisco page ranking for the state term
//   Sleepless    ~630 words; Ecommerce Pro ~280 words
//   SDG, Bitcot, Bluedge: Cloudflare blocked automated rendering. Cyrus
//   Webtech's California page returned 404.
//   Directories and listicles: Goodfirms, Techreviewer, TopDevelopers,
//   Brandastic, eBizTrait, Flashyminds. Upwork ranks for the "expert
//   developers" phrasing, matching the Inventory's freelancer-intent rule.
// THE GAP: not one readable page mentions anything specific to California
// beyond city names. No privacy law, no accessibility statute, no pricing
// rule, no data.
//
// ── THE THREE RULES, from primary sources ───────────────────────────────────
// 1. PRIVACY. CPPA "Does My Business Need To Comply With The CCPA?": a
//    for-profit business doing business in California that has gross annual
//    revenue over $26,625,000, OR buys, sells or shares personal information
//    of 100,000+ consumers or households, OR earns 50%+ of revenue from
//    selling or sharing it. Threshold effective 1 January 2025, next CPI
//    adjustment 1 January 2027.
// 2. ACCESSIBILITY. Civil Code §52(a): Unruh Act damages "in no case less
//    than four thousand dollars ($4,000)" per offense. EcomBack 2025 annual
//    report (PACER, CourtLink, state court portals, calendar 2025): 3,948
//    website accessibility lawsuits; California 787 (19.93%); websites on
//    Shopify 1,318 (33.38%); 983 (24.90%) against sites with a widget present.
//    FTC, 3 January 2025 (final April 2025): accessiBe paid $1 million over
//    claims its widget could make any website WCAG-compliant.
// 3. PRICING. Civil Code §1770(a)(29), operative 1 July 2024: a displayed
//    price must include all mandatory fees other than government taxes or fees
//    and postage or carriage charges actually incurred to ship. A handling fee
//    is not an exclusion. (The AG's FAQ page refused connections from our
//    network, so the statute text is the source.)
//
// ── THE ASSET: ORIGINAL OBSERVATION, 17 September 2026 ──────────────────────
// 26 direct-to-consumer brands headquartered in California, homepage each,
// rendered in Edge with a fresh context and CSP bypassed. All 26 on Shopify.
//   axe-core 4.13, WCAG 2 A and AA rules: 24 of 26 had at least one serious
//   or critical violation; 14 had a critical one. Most common: color-contrast
//   (15 sites), link-name (12), image-alt (8), button-name (4).
//   Accessibility widgets by network request: 10 of 26 (accessiBe 5, UserWay
//   4, EqualWeb 1). 9 of those 10 still had automated violations after load.
//   Consent platforms by network request: 20 of 26 (OneTrust 8, Osano 4,
//   Consentmo 3, Pandectes 3, Termly, Ketch, Cookiebot 1 each). Shopify's own
//   customer-privacy script loads on every store by default, so it was NOT
//   counted as a consent platform.
//   Visible privacy opt-out wording on the rendered homepage: 15 of 26.
// LIMITS, stated on the page: homepage only; automated scans find only part
// of what a disabled shopper hits; the collecting machine is outside the US,
// so region-targeted banners and links may differ for a Californian; fees
// aren't observable without a checkout, so that row says so.
// BRANDS ARE NOT NAMED. Naming stores beside accessibility errors would be
// unfair to them and adds nothing a count doesn't.
//
// ── WHAT WE ACTUALLY OFFER (Step 04 #3) ─────────────────────────────────────
// The published Shopify development page already promises "Accessibility
// checks" before handover; the analytics page covers consent setup. The page
// promises checks and theme work, never legal compliance, and carries a
// not-legal-advice line on the asset.
//
// ── ROIA (Step 03) ──────────────────────────────────────────────────────────
// ONE READER: owns a Shopify store selling to Californians, 28 to 45,
// $10-50M, has decided on an agency, hasn't picked the service.
// ONE IDEA (13 words), revised 19 September 2026 after the owner's rewrites:
// know what your store fails before anyone sells you a design. The hook
// (check instead of compare), the rules, the six checks, "fix without the
// redesign", "How a project starts" and the offer all trace back to it.
// ONE OFFER, ONE ACTION: every button says "Get in touch with us" to #contact.
//
// ── KEYWORDS (Step 09) ──────────────────────────────────────────────────────
// Primary shapes: h1, "brands use" (quick answer), "quote" (disciplines),
// "shortlist" (asset), "proposal" (what it costs), "work with" (objection),
// "brands hire" (price FAQ). Secondary 1 in an FAQ question about hiring
// locally vs remotely; secondary 2 in the entity-shaped FAQ. Both contain
// "in California" as the brand's frame, never ours, and the soft-presence
// scan's acknowledgement is recorded in reviewedPhrases. Zero keywords and no
// place name in the conversion block.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// No Master §5.9 row for a state; California spans LA beauty and apparel,
// San Diego and Orange County supplements, Bay Area subscriptions.
//   hero       NEOM Wellbeing (never used on this hub)
//   proof      NEOM Wellbeing, Evie Lou, Happy Mammoth
//   disciplines NEOM Wellbeing, ChloBo, Evie Lou, Happy Mammoth
// Evie Lou and ChloBo appear once on New York; Happy Mammoth once on Austin.
//
// PRESENCE (Master §4): no claim anywhere. REVIEW: 180 days; the CCPA
// threshold changes on 1 January 2027 and the lawsuit counts are annual.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const SHOPIFY_DEV_CALIFORNIA: GeoPage = {
  type: "geo",
  slug: "california",
  path: "/services/shopify-development-agency/california",
  hub: "/services/shopify-development-agency",
  status: "published",

  geo: {
    name: "California",
    type: "state",
    areaServed: "California",
  },
  archetype: ["D"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "shopify agency california",
  secondaryKeywords: ["shopify development company in california", "expert shopify developers in california"],
  faqKeywords: [
    "does my store need to follow ccpa",
    "does an accessibility widget make a store compliant",
    "can we add a handling fee at checkout",
    "how long does a shopify build take",
    "do we need a shopify redesign",
  ],
  reviewedPhrases: ["in California"],

  metaTitle: "Shopify Agency California | Design, Build, CRO, Migration",
  metaDescription:
    "A Shopify agency California brands use for design, build, CRO and migration. See what 26 of the state's Shopify stores failed before you plan a redesign.",
  shortTitle: "Shopify agency California",
  serviceType: "Shopify agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  h1: "Shopify agency California, stores built for how your customers buy",
  qualifier:
    "Design, build, migration, CRO and support after launch. Choose what you need, and the scope is agreed in writing before any work begins.",

  // A still of the storefront itself, not the brand video, owner's call
  // 19 September 2026 after the CRO review: the video was a candle close-up
  // that showed no store and no work. This is NEOM's homepage as we built it,
  // the store behind the +34% checkout result in the proof section.
  // CROPPED, not the full screenshot: the full 1396px page shrunk into a
  // ~610px column put its text at about 5px and looked blurred. This crop
  // (logo, icons, nav and the product shot, 840x709) is shown at ~73%
  // instead of ~44%, so it stays sharp. Source: "NEOM Wellbeing hero
  // section.png", cropped at x=556.
  //
  // REPLACED AGAIN the same day: the owner found the crop sharp but flat. Now
  // a composite in the style of the Ecommerce Agency hub's hero, built only
  // from this page's own case studies: ChloBo's homepage on a laptop, NEOM
  // and Evie Lou as floating browser windows, and two published results
  // (+34% NEOM checkout conversion, +134% Happy Mammoth subscription
  // revenue). Behind it, the same soft green glow the footer and the case
  // studies page use (owner's call; the first version had a green and a
  // purple circle). Transparent background, so it sits on the black hero. Source
  // layout: scratchpad mk/hero.html, rendered at 2x and exported at 1400px.
  // The glow lives on the hero SECTION, not in the image: the same green
  // glow and dot pattern as the /case-studies hero, a little stronger (owner's
  // call 19 September 2026). Baked into the image it was boxed in by the
  // image's edges and read as a faint patch.
  heroGlow: true,
  // Same label as every inline button on this page (Standard Step 03: one
  // action, one label). The template default is "Talk to us".
  heroCtaLabel: "Get in touch with us",
  // Standard Step 07, owner's call 19 September 2026: this reader hasn't
  // picked a service, so the menu comes straight after the case studies and
  // the two rules sit directly above the six-checks table that proves them.
  servicesBeforeGradient: true,
  // White "Explore more Shopify services" band, owner's call 19 September
  // 2026: it follows the cream contact form.
  relatedTone: "white",
  heroImage: {
    cutout: true,
    src: "/images/shopify-agency-california-hero-v6.webp",
    alt: "Shopify stores we built for ChloBo, NEOM Wellbeing and Evie Lou, with results of +34% checkout conversion for NEOM and +134% subscription revenue for Happy Mammoth",
  },

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on the platform" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading: "Wellness, womenswear, supplements, jewelry. Brands selling across the state and well beyond it.",
  },

  assetCtaLabel: "See what 26 stores showed",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  // REWRITTEN 18 September 2026 after the owner read the first version as a
  // compliance lecture and said he would not scroll past it. He was right. The
  // first hook opened on the state and took three paragraphs to reach the
  // reader. This one opens on what he is actually doing, comparing agencies
  // who all sound the same, and answers it with the one thing we have that
  // they don't: evidence. The three rules did not leave the page; they moved
  // to the gradient and the table, where they are proved rather than asserted.
  hook:
    "You've probably got three or four agencies on a list. Words on a homepage are hard to compare, ours included.\n\nSo here's something you can check instead. We opened 26 Shopify stores in this state and ran the same tests on every one. 24 had accessibility errors, and each one carries a $4,000 minimum under state law.\n\nThe full results are below, with what we'd fix first.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is a Shopify agency California brands use to design, build, move and grow a store. We work on Shopify and Shopify Plus. We test your theme for accessibility before it goes live.",

  // ── Block 3: Industries, in place of the place layer ──────────────────
  // Owner's instruction, 19 September 2026. The place layer could only say
  // something about the state by naming its cities, which he ruled out, and
  // it put three exit links straight after the hook. In its slot, the page
  // now answers the CRO question a reader has at that point: have you built
  // a store like mine? Every category maps to a published case study (NEOM
  // and 111Skin, Evie Lou, Happy Mammoth, ChloBo and Ronaldo). The jewelry
  // row ties to the scan: image-alt was the third most common failure.
  segmentsReplacePlace: true,
  segments: {
    heading: "Have we built a store like yours?",
    intro:
      "Probably. These are the six kinds of store we build. Each one changes something real in your build, and each has its own way of going wrong.",
    // Six cards, owner's instruction 19 September 2026: cover every industry
    // in lib/case-studies.ts. Sports & Fitness (Everlast, Capelli, Feetures)
    // folds into the clothing card; Food & Beverages (Candy Kittens, Sneak,
    // VITHIT) and B2B & Wholesale (Mouldings One, Saddleback, Henchman) are
    // the two added. Three per row, so no orphan card.
    items: [
      {
        icon: "beauty",
        name: "Skincare and beauty",
        what: "Your shades, sizes and sets sit on one product page. Choosing stays easy on a phone, and every swatch has a name a screen reader can say.",
        breaks: "Swatches built as unlabeled images, which fail the naming checks and leave shoppers guessing the shade.",
      },
      {
        icon: "apparel",
        name: "Clothing, sportswear and activewear",
        what: "Size and fit carry your sale, so the size chart and fit notes live in your product data, not pasted into the theme.",
        breaks: "A seasonal redesign that drops the size chart, and returns go up the month after.",
      },
      {
        icon: "box",
        name: "Supplements and wellness",
        what: "Your second order is where the profit is, so the quiz, the subscription and the reorder email are built as one path.",
        breaks: "A subscription app bolted on at the end, so the quiz sells a product the checkout can't put on repeat.",
      },
      {
        icon: "jewelry",
        name: "Jewelry and accessories",
        what: "Your products are small, so zoom, gallery order and alt text do the selling a shop counter would.",
        breaks: "Product images with no alt text, the third most common failure across the 26 stores we tested.",
      },
      {
        icon: "consumable",
        name: "Food and drink",
        what: "Your shoppers buy by flavor and by the pack, so bundles and mix-and-match boxes are built into the product page, not added at checkout.",
        breaks: "A bundle app that splits one box into five cart lines, so shoppers can't tell what they're buying.",
      },
      {
        icon: "wholesale",
        name: "B2B and wholesale",
        what: "Your trade buyers need their own prices, minimum orders and fast reorders. They get them on the same store your shoppers use.",
        breaks: "Wholesale prices showing to retail shoppers, because both run through one theme without the right customer tags.",
      },
    ],
  },

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // CUT FROM THREE RULES TO TWO, 18 September 2026, owner's call. The first
  // version opened on the privacy law's $26,625,000 threshold, which tells a
  // $10-50M reader the page isn't about him before he reaches anything that
  // is. Privacy did not leave the page: it holds a row in the asset table and
  // its own FAQ, where the thresholds can be answered properly. What's left
  // here are the two rules that apply whatever the store's size, price first
  // because it applies to every store with no threshold at all. Each
  // paragraph now opens with the reader's store rather than the statute.
  gradientLayerHeading: "Two rules that end up in your checkout and your theme",
  gradientLayer:
    "**Sell to shoppers in this state and your listed price has to be the whole price.** Since 1 July 2024, [link:https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1770|Civil Code §1770] says it must include every mandatory fee. Government taxes and real shipping can sit outside it. A handling fee can't, so that margin has to come out of the build instead.\n\n**Every accessibility error carries a price too.** [link:https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=52|The Unruh Civil Rights Act] sets it at no less than $4,000, for each one. In 2025, a third of these lawsuits nationally named a store running Shopify, per [link:https://www.ecomback.com/annual-2025-ada-website-accessibility-lawsuit-report|EcomBack's 2025 report].\n\nWe don't give legal advice, and what applies to you is your counsel's call. The build side is what a Shopify agency California brands trust should answer for. Fees live in how your checkout adds things up. Contrast and labels live in your theme.",
  gradientFacts: [
    {
      id: "cppa-ccpa-thresholds-2025",
      claim:
        "California Privacy Protection Agency, 'Does My Business Need To Comply With The CCPA?': a for-profit entity doing business in California that determines the purpose and means of processing personal information must comply if it meets at least one of: gross annual revenue over $26,625,000 for the previous calendar year; buys, sells or shares the personal information of 100,000 or more consumers or households; or derives 50% or more of annual revenue from selling or sharing consumers' personal information. The CPPA's CPI adjustment page states the $26,625,000 figure took effect 1 January 2025 (up from $25,000,000), with administrative fines of not more than $2,663 per violation or $7,988 per intentional violation, and adjustments in odd-numbered years.",
      url: "https://cppa.ca.gov/regulations/cpi_adjustment.html",
      publisher: "California Privacy Protection Agency",
      captured: "2026-09-17",
      reviewAfterDays: 180,
    },
    {
      id: "ca-civil-code-52-unruh-damages",
      claim:
        "California Civil Code §52(a): whoever denies, aids or incites a denial, or makes any discrimination or distinction contrary to Section 51 (the Unruh Civil Rights Act) is liable for each and every offense for actual damages, and any amount determined by a jury or court up to a maximum of three times actual damages 'but in no case less than four thousand dollars ($4,000)', plus attorney's fees.",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=52",
      publisher: "California Legislative Information, Civil Code §52",
      captured: "2026-09-17",
      reviewAfterDays: 365,
    },
    {
      id: "ecomback-2025-ada-website-lawsuits",
      claim:
        "EcomBack, 2025 ADA Website Accessibility Lawsuit Annual Report, covering 1 January to 31 December 2025 and built from PACER, CourtLink and state court case search portals: 3,948 lawsuits, 23.84% more than 2024 (3,188). By state: New York 1,108 (28.06%), Florida 950 (24.06%), California 787 (19.93%). By platform: Shopify 1,318 (33.38%), custom-coded 1,362 (34.50%). Lawsuits against websites with an accessibility widget present: 983 (24.90%). A commercial compliance vendor's count, cited as such.",
      url: "https://www.ecomback.com/annual-2025-ada-website-accessibility-lawsuit-report",
      publisher: "EcomBack, 2025 annual ADA website lawsuit report",
      captured: "2026-09-17",
      reviewAfterDays: 365,
    },
    {
      id: "ftc-accessibe-2025",
      claim:
        "Federal Trade Commission press release, 3 January 2025: accessiBe to pay $1 million to settle allegations that it misrepresented the ability of its AI-powered accessWidget to make any website compliant with the Web Content Accessibility Guidelines; the FTC alleged accessWidget did not make all user websites WCAG-compliant and the claims were false, misleading or unsubstantiated. The Commission approved the final order in April 2025.",
      url: "https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-order-requires-online-marketer-pay-1-million-deceptive-claims-its-ai-product-could-make-websites",
      publisher: "Federal Trade Commission",
      captured: "2026-09-17",
      reviewAfterDays: 365,
    },
    {
      id: "ca-civil-code-1770-a29-mandatory-fees",
      claim:
        "California Civil Code §1770(a)(29)(A): an unlawful practice includes 'Advertising, displaying, or offering a price for a good or service that does not include all mandatory fees or charges other than either of the following: (i) Taxes or fees imposed by a government on the transaction. (ii) Postage or carriage charges that will be reasonably and actually incurred to ship the physical good to the consumer.' Operative 1 July 2024 per subdivision (d). Handling charges are not among the exclusions. The Attorney General's SB 478 FAQ (oag.ca.gov/hiddenfees) refused connections from our network at capture, so the statute is cited directly.",
      url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=1770",
      publisher: "California Legislative Information, Civil Code §1770",
      captured: "2026-09-17",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-california-storefronts-2026",
      claim:
        "Original observation, 17 September 2026. Homepages of 26 direct-to-consumer brands headquartered in California, each rendered in Microsoft Edge with a fresh browser context and content security policy bypassed so axe-core 4.13 could run WCAG 2 A and AA rules; all 26 run Shopify. 24 of 26 had at least one serious or critical violation and 14 at least one critical. Most frequent rules by number of sites: color-contrast 15, link-name 12, image-alt 8, button-name 4. Accessibility widget detected by network request on 10 of 26 (accessiBe 5, UserWay 4, EqualWeb 1); 9 of those 10 still had automated violations after load. Third-party consent platform detected on 20 of 26 (OneTrust 8, Osano 4, Consentmo 3, Pandectes 3, Termly 1, Ketch 1, Cookiebot 1); Shopify's default customer-privacy script was excluded from that count. Privacy opt-out wording visible on the rendered homepage on 15 of 26. Limits: homepage only; automated tools detect only a portion of barriers; the collecting machine is outside the United States, so region-targeted consent banners and links may differ for a California visitor; checkout fees were not observed. Brands are counted, not named.",
      url: "https://www.ecommwizards.com/services/shopify-development-agency/california",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-09-17",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    // REBUILT 18 September 2026, owner's call, after he read the four-column
    // version and could not tell what it was saying. It was a research matrix:
    // what we checked, the rule, where it lands, what we found. Four columns to
    // hold before a row paid out, and the rule column went orphaned the moment
    // privacy left the gradient. Now every row is a question he can ask about
    // his own store, our numbers are the benchmark beside it, and the law is
    // gone from the grid. The old "What failed most often" block folded into
    // these rows, so the section is shorter and says more.
    title: "Six checks we ran on 26 of this state's Shopify stores",
    intro:
      "Every one of these you can run on your own store. We ran them on 26 California direct-to-consumer brands in September 2026, so you have something to measure against. Brands are counted, not named.",
    renderer: "checklist",
    // White band. It was cream while it followed the white services rows;
    // since servicesBeforeGradient it follows the cream two-rules section,
    // so white keeps the owner's white/cream alternation (19 September 2026).
    method: {
      sampleSize: 26,
      window: "one rendered homepage visit per brand, 17 September 2026",
      captured: "2026-09-17",
      howGathered:
        "Each homepage was opened in a fresh browser session. The accessibility errors come from axe-core, a free automated checker, running the WCAG 2 A and AA rules. Widgets and cookie banners were identified from the scripts each page loaded. Opt-out links were read off the page as you'd see it. Automated checks find only part of what a disabled shopper runs into, so these counts are a floor. Our browser sits outside the US, so some banners may look different to a shopper there. We didn't place orders, so checkout fees weren't checked.",
    },
    columns: ["The check", "What we found on 26 stores", "What it means for you"],
    rows: [
      {
        label: "Can shoppers read your text?",
        cells: ["15 of 26 had text too faint to read", "Contrast lives in your theme, not in a plugin"],
        note: "The most common failure by a distance, and one of the cheapest to put right.",
      },
      {
        label: "Do your links and buttons have names?",
        cells: ["12 had unnamed links, 4 unnamed buttons", "A screen reader announces them as nothing"],
        note: "Usually the icons: cart, search, the social row in your footer. They work with a mouse and vanish without one.",
      },
      {
        label: "Can your images be described?",
        cells: ["8 were missing alt text on images", "A shopper who can't see them hears nothing"],
        note: "On a product page that's the part doing the selling.",
      },
      {
        label: "Is a widget doing the work for you?",
        cells: ["10 ran one, and 9 still had errors", "The errors sit in the theme underneath it"],
        note: "The FTC fined accessiBe $1 million in 2025 over claims its widget could make any site compliant.",
      },
      {
        label: "Does your banner actually stop the tags?",
        cells: ["20 ran a cookie banner, 15 showed an opt-out", "If your pixels fire anyway, the banner is decoration"],
        note: "Some banners only show to US visitors and our browser sits outside the US, so treat this row as a prompt to check your own.",
      },
      {
        label: "Does your checkout add a fee?",
        cells: ["Can't be seen without placing an order", "Two minutes to check, and the cheapest thing on this list"],
        note: "Since 1 July 2024 the price you list has to include every mandatory fee except tax and real shipping.",
      },
    ],
    disclaimer:
      "This is a build checklist, not legal advice, and we aren't lawyers. Whether a rule reaches your business, and how, is a question for your counsel.",
    derived:
      "24 of the 26 failed at least one of these, so if your store does too, it's in ordinary company. The useful part is that almost none of it is legal work. It's theme work: contrast, names on links, descriptions on images.\n\nThe widget row is the one to act on first, because it's the fix most stores buy and 9 of the 10 running one still had errors underneath. Run these on your own homepage before anyone on your Shopify agency California shortlist starts talking to you about a redesign.",
    derivedList: {
      title: "Three checks to run on your own store this week",
      items: [
        "Run a free automated accessibility checker on your homepage and your best-selling product page. Start with contrast and unnamed links.",
        "Open your checkout and list every charge that isn't the product, tax or shipping.",
        "Check whether your ad pixels still load for a visitor who has opted out.",
      ],
    },
    // "What failed most often" used to sit here, listing contrast 15, links 12,
    // images 8, buttons 4. Those numbers now lead the table's own rows, so the
    // block was saying the same thing twice. One supporting block left.
    supportingBlocks: [
      {
        heading: "Why a widget isn't the fix",
        body:
          "**It sits on top of your theme.** The code underneath stays as it was, so the errors do too. In our sample, 9 of 10 stores running one still had them.\n\n**It doesn't stop lawsuits.** In 2025, 983 accessibility lawsuits were filed against websites that had a widget installed, about a quarter of all filings, per [link:https://www.ecomback.com/annual-2025-ada-website-accessibility-lawsuit-report|EcomBack].\n\n**The regulator has said as much.** [link:https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-order-requires-online-marketer-pay-1-million-deceptive-claims-its-ai-product-could-make-websites|The FTC's 2025 order] bars accessiBe from claiming its tool makes any site compliant without evidence to back it.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Disciplines ───────────────────────────────────────────────────────
  disciplines: {
    label: "What we do",
    heading: "Build, migrate, convert and retain, from one Shopify team",
    intro:
      "Take one of these or all four. A Shopify agency California brands hire should let you start with any one of them. Each row below links to the store it was done for.",
    items: [
      {
        label: "Design and build",
        heading: "We design and build themes that pass their accessibility checks before launch",
        covers: ["Theme development", "Custom development", "Accessibility checks", "Checkout", "Shopify POS"],
        imageAlt: "A Shopify upgrade with a reworked checkout for the wellness brand NEOM Wellbeing",
        caseSlug: "neom-wellbeing-shopify-upgrade",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration",
        heading: "We move your store to Shopify and keep what already ranks and sells",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Shopify Plus"],
        imageAlt: "A jewelry store we migrated to Shopify Plus for ChloBo",
        caseSlug: "chlobo-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "CRO",
        heading: "We find where shoppers drop off and test the fix before rolling it out",
        covers: ["A/B testing", "Product pages", "Collection pages", "Analytics"],
        imageAlt: "Conversion work on product and collection pages for the womenswear brand Evie Lou",
        caseSlug: "evie-lou-shopify-fashion-cro",
        cta: { label: "Explore CRO", href: "/services/shopify-cro-agency" },
      },
      {
        label: "Subscriptions and retention",
        heading: "We build repeat buying into the store, from the quiz to the second order",
        covers: ["Subscriptions", "Product quizzes", "Retention flows", "Lifetime value"],
        imageAlt: "A subscription experience rebuilt for the supplement brand Happy Mammoth",
        caseSlug: "happy-mammoth-shopify-subscriptions-cro",
        cta: { label: "Explore retention work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  // REWRITTEN 18 September 2026 after the owner's review. The first version
  // opened on "We're remote", which raised the comparison we lose; the office
  // FAQ already answers that honestly. The strongest promise, fix without a
  // redesign, moved from third to first, and the release checks now point at
  // the six checks in the table instead of saying what every agency says.
  howWeWork: {
    heading: "What you get whatever you hire us for",
    // White, owner's call 19 September 2026: it follows the cream table.
    tone: "white",
    intro: "Four things that hold for a small fix or a full build.",
    items: [
      {
        title: "You can buy the fix without the redesign",
        body: "If the checks find errors, you can have just those fixed. If you don't need a redesign, we'll tell you.",
      },
      {
        // Standard Step 04 #3: only what the published Shopify development
        // page already promises ("Accessibility checks" in build QA). The
        // earlier "six checks on every release" was never confirmed.
        title: "Every build is checked before it goes live",
        body: "Accessibility checks are part of every build we hand over, so your customers don't find the problem first.",
      },
      {
        title: "Your store, code and logins stay yours",
        body: "Your repository, your theme and your app accounts. Nothing sits with us that you'd have to ask for back.",
      },
      {
        title: "The scope is agreed before the work starts",
        body: "If it needs to change, you see the change and agree to it before anyone carries on.",
      },
    ],
  },

  // ── Block 6: How a project starts ─────────────────────────────────────
  // NO PRICES ON THIS PAGE, owner's instruction, 19 September 2026. Not in
  // this block, the FAQ or anywhere else: no rate, no band, no "quoted
  // separately". This block was "What a build or a fix costs" and led with
  // $5,000-$50,000; it now describes how an engagement starts instead. The
  // legal price rule (listed price must include every fee) is about the
  // READER's product prices, not ours, and stays. "Free" on the audit offer
  // stays too: it describes the offer, not a rate. Do not reintroduce a price.
  whatWeDoAboutItHeading: "How a project starts",
  whatWeDoAboutIt:
    "It starts with the six checks, run on your homepage and top product page. You get the list of what fails and where it sits in your theme.\n\nThen you choose. Fix just what failed on the store you have, or fold it into a redesign or a migration. Either way, the scope is agreed in writing before any work starts.\n\nWhoever you hire, ask to see that list before any design. Make it the first question in every Shopify agency California pitch you sit through.",

  // Straight after the six-checks table, owner's instruction 19 September
  // 2026. The table ends on a do-it-yourself list; this offers to do it.
  midCta: {
    text: "Rather not run them yourself? Send us your homepage and we'll run all six.",
    label: "Get in touch with us",
  },

  // Straight after "How a project starts", owner's instruction 19 September
  // 2026. That block ends on the first step, so this offers it.
  processCta: {
    text: "The first step is the list of what your store fails. It's free, and it's yours either way.",
    label: "Get in touch with us",
  },

  // ── Block 7: Proof ────────────────────────────────────────────────────
  proofHeading: "Three stores we built, fixed or grew on Shopify",
  proof: [
    {
      slug: "neom-wellbeing-shopify-upgrade",
      vertical: "Wellness",
      whatWasBuilt: "A Shopify upgrade with a reworked checkout and Shopify POS across four retail hubs",
      outcome: "+34% checkout conversion, +10% order volume",
      verified: true,
    },
    {
      slug: "evie-lou-shopify-fashion-cro",
      vertical: "Womenswear",
      whatWasBuilt: "Conversion work across product and collection pages",
      outcome: "+82% conversion rate, +31% average order value",
      verified: true,
    },
    {
      slug: "happy-mammoth-shopify-subscriptions-cro",
      vertical: "Supplements",
      whatWasBuilt: "A subscription experience rebuilt around the product quiz and repeat orders",
      outcome: "+134% subscription revenue, +61% conversion rate",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What you're probably thinking",
  // REPLACED 18 September 2026, owner's pick (Set 1 of three offered). Two of
  // the first three were legal questions rather than hiring objections, and
  // pulled the page back into compliance talk. These are the three things an
  // owner weighs before hiring: can we afford it, will it hurt what works,
  // and can it wait. Privacy applicability still has its own FAQ; the widget
  // point still lives in the table and the widget FAQ.
  objections: [
    {
      objection: "We can't afford a rebuild right now.",
      answer:
        "Then start with the fixes. The checks are free, and you can have just what they find fixed.\n\nMost of it comes out of the theme, and the rebuild can wait until you're ready.",
    },
    {
      objection: "Our last redesign dropped our conversion rate.",
      answer:
        "That happens when a redesign replaces what was working. We test changes before they roll out, and we'll tell you which parts of your store to leave alone.\n\nAny Shopify agency California brands work with should be able to show you that list.",
    },
    {
      objection: "We can't touch the store before the holidays.",
      answer:
        "Then don't. Get the list now and fix after your peak.\n\nContrast and link fixes are usually small, so they fit around your calendar.",
    },
  ],

  // ── Client quotes ─────────────────────────────────────────────────────
  // Added 19 September 2026 for Standard Step 08: "What you get", the
  // objections and "How a project starts" were three copy sections in a row.
  // This renders between the objections and the process block. Three brands
  // not used anywhere else on the page, one per industry card (beauty,
  // jewelry, food), each with a signed-off quote in lib/case-studies.ts.
  // Headline numbers are each study's own published results.
  results: {
    heading: "Three more stores, in the owners' own words",
    intro:
      "Before you pick a Shopify agency California brands vouch for, hear from three more owners. Each number links to its case study, so you can check it.",
    slugs: [
      "111skin-shopify-cro-redesign",
      "ronaldo-jewelry-shopify-plus-redesign",
      "candy-kittens-shopify-food-beverage-cro",
    ],
    headlines: {
      "111skin-shopify-cro-redesign": "{brand} lifted conversion 46% and repeat purchases 41%",
      "ronaldo-jewelry-shopify-plus-redesign": "{brand} grew total sales 250% after a Shopify Plus redesign",
      "candy-kittens-shopify-food-beverage-cro": "{brand} took conversion up 182% and added $8.1M in a year",
    },
  },

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // REORDERED 19 September 2026 after the owner's review: the owner's own
  // questions first (how long, do we need a redesign, remote or local), the
  // rules after. The price question is gone under the no-prices rule above.
  // The separate office question merged into the remote-team answer, which
  // still says plainly there is no office; three location questions in a row
  // were each answering "we're remote". The 6-10 week figure is the one
  // already published on /services/shopify-store-development.
  faqs: [
    {
      question: "How long does a Shopify build take?",
      answer:
        "Most stores launch in 6 to 10 weeks, and a simple direct-to-consumer build takes around 6. Fixes from the checks on your store are usually quicker.",
      unique: true,
    },
    {
      question: "Do we need a redesign, or can you fix the theme we have?",
      answer:
        "It depends on what the checks find. Many fixes happen inside the theme you have, and some stores need a new one. Either way, you see the list and the reasons before you commit.",
      unique: true,
    },
    // Keyword home, Standard Step 09 ("questions at the bottom are a good
    // home"). Added 19 September 2026 when the count fell to 6 (0.26%).
    {
      question: "What should a Shopify agency California proposal include?",
      answer:
        "The list of what your store fails, and where each fix sits in your theme. Then a written scope for the work you choose. Ours starts with the six checks, and they're free.",
      unique: true,
    },
    {
      question: "Should we hire a Shopify development company in California, or can a remote team do this?",
      answer:
        "A remote team can, because none of this work needs a meeting room. We're remote, with no office in the state to visit. What matters is whether your agency tests your store before launch, and accessibility checks are part of every build we hand over.",
      unique: true,
    },
    // Entity-shaped, carrying the second secondary keyword.
    {
      question: "Do you have expert Shopify developers in California?",
      answer:
        "We have skilled Shopify developers, and they work remotely rather than from the state. Your project runs the same way wherever you are: we scope it, test it, then release it.",
      unique: true,
    },
    {
      question: "Does an accessibility widget make our store compliant?",
      answer:
        // No links inside FAQ answers: FAQPage JSON-LD carries the answer text
        // raw and check-schema requires it to match, so a link marker would
        // reach Google verbatim. The sources are named here and linked in the
        // two-rules section and the widget block above.
        "No widget can promise that for your store. The FTC fined accessiBe $1 million in 2025 over that exact claim. And EcomBack's 2025 lawsuit report counted 983 lawsuits against sites with a widget installed.",
      unique: true,
    },
    {
      question: "Does our store need to follow the state's privacy law?",
      answer:
        "Yes, if your business passes one of the state privacy agency's tests: over $26,625,000 in yearly revenue, or sharing data on 100,000 or more people. Your counsel can confirm it. In your store, it comes down to whether your cookie banner actually stops your pixels.",
      unique: true,
    },
    {
      question: "Can we add a handling fee at checkout?",
      answer:
        "Not as a separate charge, if you sell to shoppers in the state. Since 1 July 2024 your listed price must include every mandatory fee except tax and real shipping. Build the fee into your product price, and check your case with counsel.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Step 09: zero keywords here, and no place name either.
  conversion: {
    heading: "Send us your homepage",
    whatYouGet:
      "Send the link to your store. We'll run the same checks and send back what fails and where it sits in your theme.",
    whatWeWillTellYouNotToDo:
      "If you're about to buy an accessibility widget, hold off until the theme errors underneath are fixed. A widget on top leaves them where they are.",
    responseExpectation: "You'll hear back from a developer within a working day.",
    // FIXED 19 September 2026 after the CRO review. The copy asked for two
    // pages ("that page and your homepage") but the form has one URL field,
    // and it promised to find checkout fees, which the table itself says
    // can't be seen without placing an order. It now asks for what the form
    // takes and promises only what the checks can deliver.
    audit: {
      transition: "The same six checks from the table, run on your store.",
      offer: "Put your homepage in the form. We'll run the checks and hand you the findings:",
      parts: [
        "Every automated accessibility error, grouped by what causes it.",
        "Whether your ad pixels load before or after a visitor's privacy choice.",
        "What to fix first, and what you can leave alone.",
      ],
      limit: "It stops at the findings, and you can take the list to any developer.",
      noObligation: "No charge, and the report is yours either way.",
    },
  },

  sources: [],

  // Owner's standing instruction for these pages: below 2,500 words.
  wordCountTarget: [2000, 2500],
};
