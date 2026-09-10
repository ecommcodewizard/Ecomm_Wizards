// Batch 1, page 5: /services/ecommerce-agency/los-angeles
// Spec: Batch 1 Page Specification v2.0 — spine §2.2, gradient §3, asset §4.5,
// case studies §5, FAQ §6.3 and §6.4. Build Manual card 5.
// Copy: docs/ecomm-wizards-page-standard.md (see the note below on which
// standard governs), with docs/copy-standard.md v2.0 still binding wherever
// the newer guide is silent.
//
// Primary keyword: "ecommerce agency los angeles" (50/mo, Google Keyword
// Planner — GKP is the figure of record; Semrush's 140 is a tool difference,
// not a correction).
// Inventory: Geo Inventory & Batch Plan v4.0, California row 2.
// Hub: /services/ecommerce-agency, which already lists this path in `children`.
//
// ══ REWRITTEN 2026-09-10 TO THE PAGE STANDARD. READ BEFORE EDITING. ═════════
//
// The owner supplied docs/ecomm-wizards-page-standard.md, which closes with
// "Where this guide and an older document disagree, this one wins." Three of
// its rules changed this page, and the previous version is preserved in git if
// any of it needs to come back.
//
// 1. STEP 01 / STEP 04.2 — THE READER HAS NOT PICKED A PLATFORM, AND MAY NOT
//    IMPORT. The keyword "ecommerce agency los angeles" tells you he wants an
//    agency and has decided nothing else. The previous version assumed he
//    imports by sea: the H1, qualifier, hook, quick answer, place layer, proof
//    heading, every discipline and most of the FAQ were written for an
//    importer. That is the standard's own example of shutting a buyer out.
//
//    THE FIX IS NOT TO DELETE THE IMPORT ARGUMENT. Page Spec §3 assigns this
//    page the import-variance gradient, and it is the only thing here a
//    competitor cannot copy. It now lives where the spec puts it: the gradient
//    layer and the asset. Everything else is written for any brand whose stock
//    arrives later than it sells, which includes domestic cut-and-sew, made to
//    order, drops and restocks. A reader who does not import skims one section
//    and a table. He is never told to leave.
//
// 2. STEP 04.1 — NEVER ARGUE AGAINST WHAT WE SELL. Four passages did:
//    discipline 1 ("if your platform isn't what's wrong, we'd rather say so"),
//    howWeWork 4 ("we'll tell you when the answer is no"), whatWeDoAboutIt
//    ("we'll quote three settings"), and conversion.whatWeWillTellYouNotToDo
//    ("most stores need two or three settings, not a rebuild"). The last is a
//    REQUIRED schema field, so it was reframed rather than removed: it now
//    names a purchase to avoid (a preorder app bought before the range is
//    measured) instead of talking the reader out of hiring us.
//
// 3. STEP 04.3 — NEVER PROMISE SOMETHING WE DO NOT DO. "One named developer,
//    in a channel you can see" is contradicted by the standard in as many
//    words: "We do not name people in our contracts." The Pacific-hours item
//    also claimed a contract term. Both now promise the channel and the
//    scheduling, which are real, and neither claims a clause.
//
// ── WHAT COULD NOT BE FIXED IN THIS FILE ────────────────────────────────────
//
// STEP 07 asks for the service menu EARLY, because this reader has picked
// neither platform nor service. The running order is hardcoded in
// GeoPageTemplate and shared with four PUBLISHED pages, so DisciplineBlocks
// still renders eighth. Moving it is a template change with four live pages
// downstream and is the owner's call, not this file's.
//
// STEP 08 asks for no run of three copy blocks. Two runs survive:
//   hook -> quickAnswer -> placeLayer. QuickAnswer renders with padding-top 0
//     specifically so it reads as the hook's answer rather than a new section,
//     so on screen this is two blocks, not three. All three are kept short.
//   objections -> whatWeDoAboutIt -> FAQ. Step 07 itself puts price and
//     process "just before the questions", so this order is what the standard
//     asks for. The only template slot between them is `results`, and
//     ResultsSlider silently drops any study with no quotePerson: of the six
//     brands assigned to this page only Ronaldo Jewelry carries one, so that
//     block would render a single slide of a brand already used twice.
//
// ── THE SEPARATION THAT MAKES THIS PAGE, spec §3 ────────────────────────────
//
//   PAGE 4  /services/shopify-development-agency/los-angeles  is LAUNCH DAY.
//   PAGE 5  this page                                          is ARRIVAL.
//
// Page 4 argues that the look that wins is the thing making the store slow, and
// runs on creative density, Core Web Vitals and a payload teardown. NOTHING
// from it appears here: no page speed, no Core Web Vitals, no load time, no
// milliseconds, no script or image counts, no hero video weight. Build Manual
// §4 also forbids cross-linking pages 4 and 5; check-links enforces it.
//
// The labour-supply argument built in the very first version of this page is
// dead and must not come back.
//
// ── ARCHETYPE F+A, from Build Manual card 5 ─────────────────────────────────
// F is port-led, "importing through here — preorder and buffer configuration".
// A is vertical-led. Master §5.10 gives Los Angeles D+A+F overall; page 4 took
// D+A+F, this page takes F+A, satisfying §5.10's rule that two pages for one
// metro use different archetype emphasis. The place layer now leads on A (the
// verticals, and where their product is actually made) and the gradient leads
// on F, which is what widened the page without losing either archetype.
//
// ── ROIA (Step 03) ──────────────────────────────────────────────────────────
//
// ONE READER. Step 01: he wants an ecommerce agency and has decided nothing
// else. He may be on Shopify, on something else, or on nothing yet. Step 02:
// he owns the store, he is 28 to 45, the store does $10-50M, and he has
// already decided to hire an agency. Never explain what an agency is.
//
// ONE IDEA (15 words)
// Your store was built to sell what is on the shelf. Growth means selling what
// is not.
//
// ONE OFFER, TWO DOORS. Book a call, or leave details. Both end in the free
// audit. ONE ACTION: every button says "Get in touch with us" → #contact.
//
// VOICE. Contractions throughout, matching this page's hub and the New York
// sibling. Page 4 runs expanded forms; the two Los Angeles pages are
// deliberately not matched on register.
//
// NUMBERS STAY OUT OF THE PITCH. The New York page's header records the rule:
// nobody wants to read somebody else's survey mid-pitch, and the point lands
// harder as a plain statement because the reader has lived it. So the figures
// live in gradientFacts and in the ASSET, where a table is the right container
// for them, and the prose carries at most one anchoring number.
//
// NO UNIT VOLUMES ANYWHERE. Step 02 puts this reader at $10-50M. The previous
// asset priced its worked example at 40 units a week, which is a business doing
// low six figures, and "if you cannot fund 120 units" read as a warning aimed
// at somebody else entirely. Every figure in the model is now WEEKS OF COVER,
// and the reader multiplies by his own rate. That serves Step 02 and Step 04.2
// at once: weeks of cover shut nobody out on size.
//
// ── KEYWORD PLACEMENT (Step 09) ─────────────────────────────────────────────
// Target ~0.5% of body words, which the standard prefers to 0.6% stuffed.
// Every use below was checked against the delete test: remove the keyword and
// the sentence has to break.
//   h1 · metaTitle · metaDescription · hook · quickAnswer · gradientLayer
//   howWeWork.intro · asset.derived · objection 4 · whatWeDoAboutIt · faq[6]
//   (question and answer), plus the FAQ block's own H2, which the template
//   generates from shortTitle and proseStrings therefore does not count.
// SHAPE VARIETY matters more than the count here, and it is the part the first
// draft got wrong: seven of eleven uses were the same "...shortlist..."
// construction. Now shortlist x4, "brands hire" x2, quote, engagement, rates.
// ZERO keywords in the conversion block, which the standard calls the one place
// it is always wrong. That includes the city name: the block does not say
// "Los Angeles" at all.
//
// NOTE FOR copy-audit.ts: it reports city-name uses against Copy Standard 7.5's
// guidance of four in visible body. This page runs past that BY DESIGN, because
// Step 09 supersedes 7.5 and every keyword use carries the city inside it. None
// of them is a presence claim, which is the rule that still binds.
//
// ── RESEARCH, 8-9 September 2026 ────────────────────────────────────────────
//
// PORT DWELL. What the Port of Los Angeles actually publishes is better for
// this argument than what everyone quotes. Its Operations Report prints local
// truck-bound on-terminal dwell of 2.9 days beside an all-time peak of 11 days,
// and on-dock rail of 4.1 days beside a peak of 13.4 — average and tail in the
// same table. PMSA's San Pedro Bay series adds history: truck-destined peaked
// at 8.37 days in 2021, rail at 16.51 days in August 2022, against 3.03 and
// 6.34 in July 2026.
//
// TRANSIT RANGE. Carrier-published transits to Los Angeles run 13 days (ZIM
// Central China Xpress, Ningbo direct) to 31 days (CMA CGM MTE from Port Klang,
// four calls out). Same ocean, same destination, more than double.
//
// RELIABILITY. The number that turns a published transit into a fiction. On
// Xeneta's promised-at-booking measure, Far East to North America ran 19% to
// 53% on time across 2026. Sea-Intelligence's one-day-tolerance measure puts
// global reliability at 56.4% in July 2026 with an average delay of 6.06 days
// when a vessel is late.
//
// WHAT DID NOT SURVIVE. 37 figures were rejected across three agents. Two worth
// recording so nobody reintroduces them:
//   - There is NO Port of Los Angeles "average container dwell time" measured
//     discharge-to-gate-out. The metric everyone cites does not exist in the
//     form it is quoted.
//   - The port publishes no truck turn times. It publishes gate appointment
//     success rates, which are a different thing. Any page quoting an LA truck
//     turn time in minutes is citing a 2010 GPS study or 2018 trade press.
//
// TWO MEASUREMENT TRAPS, both disclosed in the asset's method note:
//   - PMSA measures San Pedro Bay, Los Angeles AND Long Beach together. It must
//     never be described as a Port of LA figure. polb.com returns HTTP 403 to
//     every automated client, so Long Beach is only reachable through PMSA.
//   - The port's daily PDFs sit at fixed URLs overwritten each business day with
//     no archive. A figure is unreproducible tomorrow without its pull date,
//     which is why the asset states one and the review flag is 180 days.
//
// SERP, carried from the 8 September round and unaffected by the rewrite: local
// pack above position 1 and legitimately closed to us; PAA between 4 and 5;
// KD 6; CPC $0.00; five of ten results are directories; highest page authority
// in the top 10 is 11; NOBODY in the top 10 states a price, one has an FAQ,
// none has original research of any kind. Realistic ceiling 25-60 organic
// visits a month. Judge this page on qualified enquiries and citation, not
// sessions.
//
// ── SECONDARY OWNERSHIP (§7.2, one per section, nowhere else) ───────────────
//   ecommerce web design los angeles   -> discipline 2
//   ecommerce development los angeles  -> discipline 3
//   e-commerce management los angeles  -> discipline 4 (assigned hyphenated
//                                        form, used exactly once on the page)
//   ecommerce consulting los angeles   -> objection 3
//
// ── CASE STUDIES: six brands, none shared with page 4 ───────────────────────
// Owner-selected 2026-09-09. §5 asks for apparel, accessories and home goods,
// import-heavy physical goods. Every study tagged Fashion & Apparel is spent on
// page 4, so Saddleback (a premium European cycling distributor) and UntuckIt
// (menswear) carry the apparel slot on what they actually are rather than on
// their tag, which is closer to what §5 asks for than the tag is.
//
//   hero         ChloBo
//   disciplines  ChloBo, Ronaldo Jewelry, Saddleback, C&E Craft Co
//   proof        Saddleback, UntuckIt, Ronaldo Jewelry
//
// ChloBo, Ronaldo and Saddleback each appear twice in different framings. That
// is a consequence of the six-brand set and is recorded rather than hidden.
// Chilly's is registered in CASE_STUDY_VIDEOS by this change but is not placed
// on the page: creative strategy has no honest slot in this argument, and
// forcing it in would be the padding this programme exists to avoid.
//
// NO `results` BLOCK. See the Step 08 note above: it renders named client
// quotes, and only Ronaldo of the six carries one.
//
// PRESENCE (Master §4): no claim anywhere.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const ECOMMERCE_AGENCY_LOS_ANGELES: GeoPage = {
  type: "geo",
  slug: "los-angeles",
  path: "/services/ecommerce-agency/los-angeles",
  hub: "/services/ecommerce-agency",
  status: "published",

  geo: {
    name: "Los Angeles",
    type: "metro",
    areaServed: "Los Angeles, California",
  },
  archetype: ["F", "A"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "ecommerce agency los angeles",
  secondaryKeywords: [
    "ecommerce web design los angeles",
    "ecommerce development los angeles",
    "e-commerce management los angeles",
    "ecommerce consulting los angeles",
  ],
  faqKeywords: [
    "what to promise when ship date is uncertain",
    "charge preorder upfront or on fulfillment",
    "shopify split shipment",
    "ecommerce agency cost los angeles",
  ],
  reviewedPhrases: ["in Los Angeles"],

  // 55 characters. Step 10 wants 55-60 with the keyword in it, and nothing that
  // sounds like we live here.
  metaTitle: "Ecommerce Agency Los Angeles | Design, Build and Growth",
  // 157 characters, inside Step 10's 150-160.
  metaDescription:
    "An ecommerce agency Los Angeles brands use for design, build, marketing and ongoing support. You get the price and the start date in writing before we begin.",
  shortTitle: "Ecommerce agency Los Angeles",
  serviceType: "Ecommerce agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // The owner picked "closing the gap between the container and the checkout"
  // on 2026-09-09, before the page standard arrived. It was replaced because it
  // is the page's single largest shut-out: a reader who does not import reads
  // the first line and leaves (Step 04.2). What it was chosen FOR is kept. It
  // is concrete, and it is not the "[keyword] brands hire when X" frame that
  // four of the five geo pages share. Master 5.11 names that frame as the
  // failure mode, so do not reintroduce it here.
  h1: "Ecommerce agency Los Angeles, we build stores that keep selling when the stock is late",
  qualifier:
    "The design, the build, the marketing, the day-to-day running of it. You get the price and the start date in writing before anyone starts.",

  heroImage: {
    src: "/images/Case%20studies/posters/ChloBo%20video.webp",
    alt: "A jewelry storefront we rebuilt and replatformed for ChloBo",
    video: "/images/Case%20studies/ChloBo%20video.mp4",
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
      "Jewelry, homeware, menswear, wholesale. Different catalogs, same job: build the store, then keep it selling.",
  },

  assetCtaLabel: "See the buffer model",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Every store sells something it doesn't have yet. A restock running late, a drop that isn't cut, a container still at sea.\n\nThe website almost never knows. It says In stock right up until it says Sold out, and everything between those two words is a decision nobody made.\n\nSo tell us what you sell and where it comes from. It's the first thing any ecommerce agency Los Angeles shortlist should ask you.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is an ecommerce agency Los Angeles brands hire for design, build, marketing and support. We work on Shopify and Shopify Plus. We also build the part that decides what your store says on the days your stock is late.",

  // ── Block 3: Place layer, refracted through the service ───────────────
  placeLayerHeading: "In Los Angeles the product is almost never made where it's sold",
  placeLayer:
    "Apparel cut downtown. Beauty filled in the valley. Jewelry, furniture, supplements, most of it landing from somewhere else first.\n\nWhichever one you are, there's a gap between the day a thing is finished and the day it's yours to sell. Part of it is a factory. Part of it is a box on a dock a few miles from here. None of it is on your product page.\n\nThat gap isn't something you got wrong. Your supplier quotes production, your freight company quotes transit, and nobody quotes the part in between. It lands on you anyway, because you're the one with a page that has to say a date.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "You can't plan around an average you'll never get",
  gradientLayer:
    "The gap is widest when the goods cross an ocean, so that's the version worth the arithmetic. Everything upstream gets quoted as one number. Production takes this long, the crossing takes that long, so the stock lands then.\n\nNone of them is one number.\n\n**Carriers publish transits into this port from 13 days to 31.** Same ocean, same destination. Which one you get was decided by the service your freight company booked, before anyone asked you.\n\n**Fewer than a third of sailings on this lane arrive when the carrier first said they would.** That figure moved thirty points between two consecutive months this year.\n\n**And that's before the dock.** A normal week on terminal runs under three days. The port publishes its own all-time peak in the same table, and it's nearly four times that.\n\nSo you're not planning against a lead time. You're planning against a spread, and it has to go somewhere. You hold more stock, which costs cash. Or you sell it as a promise, which costs a preorder window and a date you have to hit. Pick neither and you get the third thing: running out, and finding out when your customer does.\n\nWhich one to buy, and how much, is arithmetic on four numbers you already have. Put it in front of every ecommerce agency Los Angeles shortlist before anyone quotes you. The model is below.",
  gradientFacts: [
    {
      id: "pola-dwell-and-peak",
      claim:
        "The Port of Los Angeles Operations Report prints average on-terminal dwell for local truck-bound import cargo at 2.9 days (8 September 2026) alongside an all-time peak of 11 days, and on-dock rail at 4.1 days alongside a peak of 13.4 days. The peaks are published as undated footnotes, so they may be cited as the port's own published peak but never assigned to a year. Basis is time on terminal from discharge until the container leaves; it is NOT a discharge-to-gate-out average, and no such POLA metric exists despite being widely quoted.",
      url: "https://www.portoflosangeles.org/getmedia/f30c3f45-2df9-4830-90ca-2364bfa0484f/operations-report",
      publisher: "Port of Los Angeles, Operations Report",
      captured: "2026-09-08",
      reviewAfterDays: 180,
    },
    {
      id: "pmsa-sanpedro-dwell-history",
      claim:
        "PMSA's monthly container dwell series for San Pedro Bay records truck-destined dwell of 3.03 days and rail-destined 6.34 days in July 2026, against published historical peaks of 8.37 days (truck, 2021) and 16.51 days (rail, August 2022). CRITICAL: this series covers Los Angeles AND Long Beach combined and must never be described as a Port of Los Angeles figure. It is used because polb.com returns HTTP 403 to every automated client, making Long Beach's own publications unreachable.",
      url: "https://www.pmsaship.com/dwell-times-main",
      publisher: "Pacific Merchant Shipping Association",
      captured: "2026-09-09",
      reviewAfterDays: 180,
    },
    {
      id: "carrier-published-transit-range",
      claim:
        "Carrier-published transits to Los Angeles span 13 days (ZIM Central China Xpress, Ningbo direct) to 31 days (CMA CGM MTE from Port Klang, four calls before Los Angeles). The spread is structural rather than seasonal: Ocean Network Express's own network document shows Yantian sitting as the last call before Los Angeles on one string and four calls out on another, within the same network.",
      url: "https://www.zim.com/news/press-releases",
      publisher: "ZIM Integrated Shipping Services; CMA CGM service announcements; Ocean Network Express network document",
      captured: "2026-09-09",
      reviewAfterDays: 180,
    },
    {
      id: "schedule-reliability-2026",
      claim:
        "On Xeneta's promised-at-booking measure, Far East to North America on-time performance ran between 19% (end July 2026) and 53% (March 2026) during 2026, swinging 30 points between two consecutive months early in the year. Sea-Intelligence's more forgiving one-day-tolerance measure puts global reliability at 56.4% in July 2026, with an average delay of 6.06 days for vessels arriving late. The two measures differ by definition rather than disagreement and must never be quoted as interchangeable.",
      url: "https://www.xeneta.com/schedule-reliability",
      publisher: "Xeneta Schedule Reliability Scorecard; Sea-Intelligence Global Liner Performance",
      captured: "2026-09-09",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  // Spec §4.5, renderer `model`. Block C is the table; Blocks A, B, D and E are
  // supportingBlocks, the same way the marketing hub handles its multi-block
  // asset. The hub's own asset is a platform COST table, so nothing here
  // restates it: this one is about time.
  //
  // Every quantity is weeks of cover. See the NO UNIT VOLUMES note in the
  // header: naming a weekly unit rate both contradicted Step 02's reader and
  // shut out every brand running at a different one.
  asset: {
    title: "How much buffer does your lead time actually need?",
    intro:
      "Four numbers you already have, and the arithmetic that turns them into a preorder window and a safety stock figure. Run it on your own.",
    renderer: "model",
    method: {
      captured: "2026-09-09",
      howGathered:
        "Port figures come from the Port of Los Angeles' own daily Operations Report, pulled on 8 September 2026, and from PMSA's monthly dwell series. Transits come from carrier service announcements, reliability from Xeneta and Sea-Intelligence.\n\nThree things to know. PMSA measures San Pedro Bay, so both ports together rather than one, because Long Beach's own site blocks automated access. The port's daily reports sit at fixed web addresses with no archive, so we state the pull date and re-check every 180 days. And the scenarios are a planning heuristic on four inputs. It'll get you a defensible buffer, not a demand forecast.",
    },
    columns: ["What you're deciding", "Low variance", "Typical", "High variance"],
    rows: [
      {
        label: "Transit range you're assuming",
        cells: ["5 to 6 weeks", "5 to 8 weeks", "5 to 11 weeks"],
        note: "Door to door, factory gate to the day your warehouse marks it received. Not the carrier's port-to-port number, which leaves out both moving legs.",
      },
      {
        label: "Late-arrival exposure this creates",
        cells: ["1 week", "3 weeks", "6 weeks"],
        note: "The only number that matters, and it's just your worst arrival minus your average. Everything below is arithmetic on this one.",
      },
      {
        label: "Safety stock, in weeks of cover",
        cells: ["1 week", "2 weeks", "3 weeks"],
        note: "Weeks rather than units, so it reads the same at any size. Multiply by your own weekly rate for that variant.",
      },
      {
        label: "Preorder window to open",
        cells: ["None needed", "1 week", "3 weeks"],
      },
      {
        label: "Ship date to promise",
        cells: ["Your normal date", "Your worst observed date", "Worst observed, plus a week"],
        note: "Promise the bad case, not the average one. You can always ship early. Shipping late costs you the customer.",
      },
      {
        label: "When to switch the messaging",
        cells: ["Under 1 week of cover", "Under 2 weeks of cover", "Under 3 weeks of cover"],
        note: "An alert on the variant, not a note in somebody's calendar. It has to fire while there's still time to change the page.",
      },
    ],
    derived:
      "Everything in the high-variance column is a decision somebody has to make before the stock runs out.\n\nYour average is already in a quote somewhere. Your range is sitting in your last six arrivals, and almost nobody works it out. It takes ten minutes, and it changes what you order, what you promise and when you say something. Anyone on your ecommerce agency Los Angeles shortlist should tell you where you sit on this table before they quote you.",
    derivedList: {
      title: "What to work out before your next order",
      items: [
        "Your worst arrival out of the last six, not your average. That one number sizes everything else.",
        "Whether your worst case has got worse, because last year's buffer was sized on last year's range.",
      ],
    },
    supportingBlocks: [
      {
        heading: "The four numbers, and where yours are",
        body:
          "**Average transit, door to door.** Your last six arrivals, cargo-ready date to received date. Six is the minimum that shows a shape.\n\n**Your worst one.** Same six, the latest of them. Not the quoted transit, which is an average with no range attached.\n\n**Reorder lead time.** Your supplier's last three orders, deposit paid to cargo ready. Suppliers quote production and leave out sampling.\n\n**Weekly sales velocity.** Sales by product variant, last eight to twelve weeks. Per variant, because stock is held per variant. Drop any week with a promotion.",
      },
      {
        heading: "The arithmetic, so you can check it",
        body:
          "It's one line. Your exposure is your worst arrival minus your average, and it gets absorbed either as stock or as a promise, split however you like.\n\nSo three weeks of exposure is three weeks of cover to find. Hold all three and you need no preorder window. Hold none and the window carries all three.\n\nThere's no option where the exposure costs nothing, and the brands that stock out are the ones that never picked.",
      },
      {
        heading: "What Shopify does natively, and what it doesn't",
        body:
          "**Selling past zero** is native. Turn on continue selling when out of stock and the order goes through. What it won't do is tell the customer anything, hold the order back, or change what the product page promises. That gap is where most preorder problems start.\n\n**A real preorder**, with a stated ship date, its own badge and a separate fulfillment path, needs an app.\n\n**Splitting one order across two shipments** is native. Fulfill part, the customer gets a notification, the rest stays open.\n\n**Charging on fulfillment** needs the most care. It runs into your payment provider's authorization window, not anything in Shopify.",
      },
      {
        heading: "Three things to say when the date isn't certain",
        body:
          "**Ships by [date].** One date, padded to your worst case. Clearest and safest, because the point is that you beat it.\n\n**Ships in 4 to 6 weeks, and we'll email you the day it leaves.** For when the range is genuinely wide. The follow-up promise stops it reading as evasive.\n\n**Arriving [month]. Order now to reserve one.** Best where there's real scarcity. Don't use it where there isn't.\n\n**Avoid \"ships soon\" and \"back in stock shortly.\"** A vague phrase buys you nothing. You're inside the same thirty-day rule with no date to beat.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Disciplines ───────────────────────────────────────────────────────
  // Step 06: every service heading has to name the service AND say why us, and
  // has to work on its own for somebody who only scrolls the headings. All four
  // previously did neither. "The logic that fires while nobody's watching" is a
  // decent line that never says the word development.
  disciplines: {
    label: "What we do",
    heading: "Four things we do, and you can take one or all four",
    intro:
      "Each is sold on its own, and each one below is anchored to a store we actually built. Take all of it or one piece.",
    items: [
      {
        label: "Platform and migration",
        heading: "We move you onto Shopify without losing the orders, the customers or the rankings",
        covers: ["Platform selection", "Shopify migration", "Order and customer data", "Redirect mapping", "Replatform planning"],
        imageAlt: "A jewelry storefront we moved off Magento for ChloBo",
        caseSlug: "chlobo-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Design and UX",
        heading: "We design the product page and every state it ends up in",
        body:
          "Ecommerce web design Los Angeles brands ask us for usually stops at the hero. We design the rest too: low stock, preorder, shipping late, back in stock.",
        covers: ["UX and UI design", "Product page design", "Design systems", "Landing pages", "Art direction"],
        imageAlt: "A jewelry storefront we designed and rebuilt for Ronaldo Jewelry",
        caseSlug: "ronaldo-jewelry-shopify-plus-redesign",
        cta: { label: "Explore design and UX", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        label: "Build and development",
        heading: "We build the storefront and the logic underneath it, so it holds on the bad days",
        body:
          "Ecommerce development Los Angeles brands buy is mostly the half you can see. We build the other half: inventory rules, alerts, fulfillment paths, integrations.",
        covers: ["Custom development", "Shopify Plus", "Inventory logic", "App development", "Integrations"],
        imageAlt: "A wholesale ordering platform we built for Saddleback",
        caseSlug: "saddleback-shopify-plus-b2b",
        cta: { label: "Explore development", href: "/services/shopify-development-agency" },
      },
      {
        label: "Running the store",
        heading: "We run the store after launch, so somebody's watching it every week",
        body:
          "E-commerce management Los Angeles brands hand us is the day-to-day: merchandising, email and SMS, reporting, and telling the customer before they ask.",
        covers: ["Maintenance and support", "Email and SMS", "Merchandising", "Analytics and reporting", "Conversion work"],
        imageAlt: "Email and retention work we ran for C&E Craft Co",
        caseSlug: "cecraft-klaviyo-email",
        cta: { label: "Explore marketing and retention", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  // Step 04.3: the previous item 2 promised "one named developer" and item 3
  // promised Pacific hours "in the contract". The standard says in as many
  // words that we do not name people in our contracts. Both now promise what
  // we actually do.
  howWeWork: {
    heading: "How we work with LA brands",
    intro:
      "We're not in the city, and for this work it genuinely doesn't matter. What matters in an ecommerce agency Los Angeles engagement is who picks up, and what you keep when it ends.",
    items: [
      {
        title: "You own everything from the first commit",
        body:
          "The repository, the theme, the design files, anything we build. Yours on day one, not when the last invoice clears. Leave and you take it.",
      },
      {
        title: "You're in a channel with the people building it",
        body:
          "A shared Slack or Teams channel, not a ticket queue and not an account manager carrying your questions back and forth.",
      },
      {
        title: "Launches get scheduled in your working day",
        body:
          "Cutovers and releases go out on Pacific hours rather than ours, so somebody on your side is awake when the switch flips.",
      },
      {
        title: "The scope is written down before anyone starts",
        body:
          "One price and one date, agreed in advance. If the scope changes we requote it before we build it, not after you've paid.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  whatWeDoAboutItHeading: "What it costs and how it runs",
  whatWeDoAboutIt:
    "Nothing gets quoted before it gets looked at. The first week is measurement: your real arrival range from your own last six, what it's costing you, and what it would take to close.\n\nThen one number and one date, in writing.\n\nThe work itself is the build. Then the preorder path and what the product page says on it. The rules for split orders. The alert that fires while there's still time to act.\n\nBuilds run $5,000 to $50,000 depending on how much is custom. That's what an ecommerce agency Los Angeles quote should show you: one number, one date, and the scope behind both.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  proofHeading: "Three stores we rebuilt, and what changed after",
  proof: [
    {
      slug: "saddleback-shopify-plus-b2b",
      vertical: "Cycling distribution and wholesale",
      whatWasBuilt: "A Shopify Plus B2B store replacing a wholesale portal, with a custom credit app and CSV bulk ordering",
      outcome: "+881% B2B sales growth in month one, +704% traffic",
      verified: true,
    },
    {
      slug: "untuckit-gift-card-api",
      vertical: "Menswear",
      whatWasBuilt: "A custom gift-card app and API on AWS, built to hold when demand spikes",
      outcome: "3x peak traffic handled",
      verified: true,
    },
    {
      slug: "ronaldo-jewelry-shopify-plus-redesign",
      vertical: "Jewelry and accessories",
      whatWasBuilt: "A Shopify Plus rebuild with a custom piece configurator and a trust framework for high-value orders",
      outcome: "+250% total sales, +120% conversion rate",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What you're probably thinking",
  objections: [
    {
      objection: "Isn't this our operations problem rather than a website problem?",
      answer:
        "Half of it is, and whoever runs your stock is probably good at their half. What they can't do is change what your product page says on the morning a delivery slips.\n\nThat's the gap. Two decisions, made by people who don't speak, and your customer only sees the second one. Ask your ops lead who tells the customer. Then ask whoever built your store the same question.",
    },
    {
      objection: "We already run preorder. This isn't news to us.",
      answer:
        "Then you're ahead of most, and the question is where the window came from.\n\nMost we see were picked once, by feel, and never looked at again. Sized on your real arrival range, and rechecked when it moves, the same window does a different job.",
    },
    {
      objection: "We've already got a developer. Do we need an agency or just advice?",
      answer:
        "We sell both, so it's a fair question to put to us.\n\nEcommerce consulting Los Angeles brands buy from us is the version where you have the hands and want the plan. It works when your developer has the time.\n\nWhen the plan lands on somebody already at capacity, it sits. That second case is most of what we're hired for, and the test is whether your developer has a free month.",
    },
    {
      objection: "Every agency says they'll be straight with us. Why would yours be?",
      answer:
        "You can't know it, and no ecommerce agency Los Angeles shortlist can prove it in a paragraph on its own website. Us included.\n\nSo we made it cheap to find out. The first look costs nothing and you keep what it produces. Every figure in the model above cites a source with a date, and one of those notes is a caveat about our own numbers.\n\nIf you've been burned before, give somebody a small piece of work first.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // The three unique questions fixed by spec §6.3 are all here. The office
  // question is §6.4, required on all seven geo pages. The platform question is
  // new and leads the block: Step 01 says this reader has not committed to a
  // platform, and it was the one thing he would want answered that the page
  // never said out loud.
  faqs: [
    {
      question: "We're not on Shopify. Do you work with other platforms?",
      answer:
        "We build on Shopify and Shopify Plus, and most of what we're asked for is a move onto one of them. If you're on something else, we'd look at what it's costing you first. If you haven't picked yet, that's the easiest conversation we have.",
      unique: true,
    },
    {
      question: "What should we promise on the product page when the ship date isn't certain?",
      answer:
        "A single date you've padded to your worst case, not a vague phrase. \"Ships by\" a date you'll beat works better than \"ships soon\" every time. There's a legal reason too: a US seller who takes an order without stating a shipping time is held to thirty days, after which your customer can cancel.",
      unique: true,
    },
    {
      question: "Should we charge for preorders upfront or on fulfillment?",
      answer:
        "Upfront is simpler and it's what most brands should do. Charging later sounds friendlier, but it runs into your payment provider's authorization window. A card that fails weeks after the order is a lost sale. Charge upfront, promise conservatively, refund fast if you slip.",
      unique: true,
    },
    {
      question: "How do we handle split shipments without creating a ticket per order?",
      answer:
        "Shopify fulfills partially out of the box, so your mechanics are fine. The tickets come from surprise: if the product page implied one box and two turn up, people write in. Say at checkout that items may ship separately.",
      unique: true,
    },
    {
      question: "How far ahead should we open a preorder window?",
      answer:
        "As far as the exposure your stock doesn't cover. Your worst arrival minus your average, less whatever you'll hold as stock, is your window.",
      unique: true,
    },
    {
      question: "Do we need Shopify Plus for any of this?",
      answer:
        "No. Preorder, partial fulfillment and low-stock alerts all work on standard Shopify, usually with one app. Plus earns its money on checkout changes and API headroom, and you need neither for this.",
      unique: true,
    },
    {
      question: "How much does an ecommerce agency Los Angeles brands hire usually cost?",
      answer:
        "Ours is $5,000 to $50,000 for a build, depending on how much of it is custom. You agree the number before we start. Ecommerce agency Los Angeles rates run above the national average, and ours don't change by city.",
      unique: true,
    },
    {
      question: "How long does a build take?",
      answer:
        "Most of our builds go live in about six weeks once scope is agreed. A migration carrying real order history runs eight to twelve, and the extra is your data rather than design.",
      unique: false,
    },
    {
      question: "Do you have an office we can visit?",
      answer:
        "No. We're a remote team working with brands across the US, and we'd rather tell you than let you find out. What we do have is the work above: your arrival range, and what to do about it.",
      unique: true,
    },
    {
      question: "Do you do ads and email marketing too?",
      answer:
        "Yes, though not on this page. This one's about the store and the stock behind it. If acquisition and retention are what you're after, that's our ecommerce marketing page.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Step 09: zero keywords here, and no city name either. This is the one place
  // the standard says a keyword is always wrong.
  conversion: {
    heading: "Tell us what you're waiting on",
    whatYouGet:
      "Tell us what you sell and where it comes from. We'll audit it free and tell you what it would take.",
    // Step 04.1 rewrite. The schema requires this field and asks for something
    // we would advise AGAINST spending on. It used to advise against hiring us,
    // which is the mistake the standard opens with. It now names a purchase
    // that genuinely wastes money when it is made in the wrong order.
    whatWeWillTellYouNotToDo:
      "We'll tell you not to buy a preorder app before the arrival range is measured. The app can't size the window, so bought in that order it gets configured twice.",
    responseExpectation:
      "A senior developer replies within one working day. Not a salesperson.",
    audit: {
      transition:
        "You already know which order it was that went wrong.",
      offer:
        "Tell us about that one. We'll audit it and hand you the findings, not a summary:",
      parts: [
        "What your actual arrival range is, from your own last six, not what you were quoted.",
        "What that range costs you, in stock you're holding or sales you're losing.",
        "What to change first, and what that would take.",
      ],
      limit:
        "It's a diagnosis, not the work. Fixing it is a separate quote you can decline.",
      noObligation:
        "The audit is free and the findings are yours to keep either way.",
      // turnaround deliberately unset, matching the published Los Angeles
      // Shopify page. Copy Standard 8.4 asks for days and format to be named;
      // the owner chose to ship without one rather than commit to a number.
    },
  },

  sources: [],

  // Owner's instruction, 2026-09-10: 2,500 to 3,000 words. This replaces both
  // spec §2.2's 1,300-1,700 for a bare geo spine and the 1,300-3,700 override
  // this page carried while the length was open. The page also runs a trust
  // bar, a quick answer, four discipline rows, a four-block asset and ten
  // FAQs, none of which the bare spine contemplated.
  wordCountTarget: [2500, 3000],
};
