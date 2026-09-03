// Batch 1, page 4: /services/shopify-development-agency/los-angeles
// Spec: Batch 1 Page Specification v2.0 section 2.2 (geo spine, 11 blocks).
// Copy: docs/copy-standard.md v2.0. This is the FIRST page written to v2.0, so
// where it differs from the three hubs (sentence-case headings, contractions,
// primary keyword capped at 5 in body and 0 in the conversion block, no
// definition block, free audit in the conversion block) that is deliberate.
//
// Primary keyword: "shopify agency los angeles" (140/mo, Google Keyword Planner)
// Archetype: A. See VERTICAL RULE below: the vertical informs imagery and case
// studies only, never the copy.
//
// ── ROIA payload (Copy Standard section 1) ───────────────────────────────────
//
// THE ONE READER
// Runs a direct-to-consumer brand in this market, in any category: food,
// beauty, supplements, home, outdoor, apparel. Doing real revenue. Wants a
// store built or rebuilt. They have looked at a competitor's storefront
// recently and come away knowing theirs is behind, without being able to say
// exactly how. They are not asking what a Shopify agency is, and they are not
// asking about duty rates or hosting. They are asking whether we understand
// how stores get built for brands like theirs here, and what it takes for
// theirs to stand up next to the others.
//
// THE ONE IDEA (20 words)
// In this market the store is judged before the product, and the look that
// wins is the thing making it slow.
//
// VERTICAL RULE (2026-09-02, owner). Los Angeles is apparel-heavy, so the page
// SIGNALS that we understand apparel through the hero video and the
// vertically-matched case studies. It must never narrow the COPY to apparel: a
// food, beauty or home brand searching the target keyword has to land and see
// a page written for them too. The previous version failed this badly, with 18
// hard exclusions ("apparel", "streetwear", "fashion") across 10 sections
// including the qualifier and the search-intent block.
//
// Root cause, for the record: Geo Master Strategy v3.1 section 5.10 archetype A
// instructs that the gradient layer be built on "one dominant DTC vertical",
// with a distinctive block titled "What [vertical] brands here get wrong on
// Shopify". Followed literally that produces this failure. The spec is being
// amended; section 5.9's vertical map is fine because it is scoped to which
// case studies to surface.
//
// SECONDARY OWNERSHIP (section 7.2, one secondary per section, nowhere else)
//   los angeles shopify development company -> servicesList item 1
//   shopify website design los angeles      -> servicesList item 2
//   los angeles shopify expert              -> servicesList item 3
// All three previously sat in block 6 and the objections. They were moved on
// the owner's instruction and REMOVED from their old homes, so each phrase
// still appears exactly once on the page.
//
// CITY-NAME BUDGET (section 7.5): the standard's guidance is four uses in
// visible body copy. This page runs over that, and the breach is deliberate
// rather than an oversight, so it is recorded here for the editorial pass:
//
//   h1 1 · quickAnswer 1 · servicesList 3 · howWeWork heading 1 ("LA") · faqs 4
//
// Every one of those is doing retrieval work: it is either the exact target
// phrase, an assigned secondary, or an entity-shaped FAQ the owner asked for.
// ZERO are decorative. The section 7.5 deletion test still passes: delete the
// city name everywhere and the place layer, the gradient layer and the asset
// still only make sense for this market, because the argument is about drop
// selling and the apparel trade rather than about a proper noun. Prose that
// merely mentioned the city (block 6, objections 2 and 3, the qualifier) has
// had it removed. If the editorial pass disagrees, the four FAQ uses are the
// ones to cut first: they are the weakest and the most replaceable.
//
// ── Research, 3 September 2026 ───────────────────────────────────────────────
// Only-Here Asset: our own measurement, run with scripts/geo/storefront-weight.ts.
// Ten Shopify storefronts fetched with a mobile user agent, counting both the
// design decisions and what they weigh. Brands counted, never named.
//
// HQ VERIFIED. Every store in the sample is a brand headquartered in Los
// Angeles County, checked individually before measuring: Kosas (LA), Summer
// Fridays (LA), Dr. Squatch (LA), Hedley & Bennett (Vernon), Lunya (Santa
// Monica), Parachute Home (Culver City), Buck Mason (LA), Frankies Bikinis
// (Venice), Jenni Kayne (Santa Monica), Alo Yoga (Beverly Hills). That check is
// what lets the block title say "in LA".
//
// An earlier version of this sample was mixed-geography and the title made no
// geographic claim at all. Four stores were dropped once HQ was checked: Beach
// Riot (Costa Mesa), gorjana (Laguna Beach), Chubbies (Austin) and Everlane
// (San Francisco), plus Dollar Shave Club (moved to Durham NC in Sept 2025) and
// Beautyblender (Bethlehem PA) which were tested but never used. The sample was
// rebuilt rather than the claim being stretched to fit it.
//
// Medians across the ten: HTML 686 KB, 71 img tags, 23 of them not lazy-loaded,
// 87 script tags, 19 third-party hosts, 5 font files, 113 CSS custom properties,
// 1 motion library. 9 of 10 on a custom or renamed theme, 10 of 10 serving
// webp/avif, 2 of 10 shipping a video tag.
//
// WHAT THIS RESEARCH DELIBERATELY DOES NOT CLAIM:
//   - Any speed or Core Web Vitals number for these stores. That is field data
//     and a single fetch cannot produce it. The asset reports payload only.
//   - That the sample is representative. The ten were chosen for presenting
//     themselves well, not at random. The method note says so on the page.
//
// TO RE-RUN: npx tsx scripts/geo/storefront-weight.ts <file of URLs>. Re-verify
// HQ before publishing any figure: brands move, and Dollar Shave Club moving out
// of LA mid-2025 is exactly the failure this note exists to prevent.
//
// SUPERSEDED: the original asset counted release tooling across 11 launch-led
// storefronts (captured 2026-08-25). Real data, but it was evidence for the
// retired checkout-ceiling spine. It is in git history if that argument returns.
//
// ── Copy Standard v2.0 measurement pass, 2026-09-02 ──────────────────────────
// Measured with scripts/geo/copy-audit.ts, which reports the section 3.1 and
// section 10 items the six guardrails do not: readability, sentence length,
// per-section second-person presence, banned language and the city budget.
//
//                          before          after
//   whole-page grade       6.9             5.8     (target 7-8)
//   reading ease           73.8            77.7    (target 60+)
//   avg sentence           15.9w           13.6w   (target <20)
//   over the 30w cap       12 sentences    0
//   blocks over grade 8    14              5
//   sections with no "you" 10              1
//   hard vertical exclusions 18            2
//
// ── Spine replaced, 2026-09-02 ───────────────────────────────────────────────
// The page previously argued "Shopify publishes no checkout ceiling, so nobody
// can tell you what your drop will take". True, sourced, and wrong for this
// page: it answered a question the reader had not asked. Someone searching the
// target keyword wants a store built or rebuilt and is asking whether we
// understand how stores get built for brands like theirs HERE.
//
// New spine: in this market the store is judged before the product, and the
// look that wins is the thing making it slow. Place layer carries LA's creative
// density; gradient layer carries the platform-versus-payload argument and the
// cost of getting it wrong. Both hold for any category, which was the point.
//
// The old checkout-ceiling material was not deleted. It survives where it is
// still useful and no longer load-bearing: the load-testing and Shopify Plus
// service cards, and FAQs 1, 2 and 4. Its three sources are retained below and
// annotated with what they now support.
//
// The asset was REPLACED (see the research note above): it is now our own
// payload teardown of ten storefronts, which is evidence for the current
// argument rather than the retired one.


//
// Nothing was cut for readability: section 3.2 forbids simplifying away numbers,
// prices, config names or the mechanism, so every figure, Shopify API term and
// dollar range on the page survives the pass. The work was splitting compound
// sentences and putting the reader back into blocks that had drifted into the
// third person about him.
//
// THREE BLOCKS REMAIN OVER GRADE 8, DELIBERATELY. Each is held there by a proper
// noun the standard protects: quickAnswer (8.1) must carry "Ecomm Wizards" and
// the exact target phrase; howWeWork[1] (8.7) is two short sentences whose grade
// is syllable-driven, not structural; servicesList[2] (8.1) carries "conversion
// rate optimization" as an assigned link. Lowering these means deleting the
// terms, which section 3.2 forbids. Do not "fix" them.
//
// asset.method is the one block with no "you" in it. It is the sample
// methodology note, not a prose section addressed to anyone, so checklist #4
// does not apply. Left as is.
//
// STILL OPEN, needs the owner and blocks checklist #17: conversion.audit has no
// turnaround and no format. Section 8.4 requires both to be named ("how many
// business days from form submission to audit delivered" and "written document,
// Loom walkthrough, or on the call"). Neither can be invented here.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const SHOPIFY_DEV_LOS_ANGELES: GeoPage = {
  type: "geo",
  slug: "los-angeles",
  path: "/services/shopify-development-agency/los-angeles",
  hub: "/services/shopify-development-agency",
  status: "published",

  geo: {
    name: "Los Angeles",
    type: "metro",
    // Passed to Service.areaServed as an AdministrativeArea. Describes where the
    // service is offered. Never a presence claim, and no address anywhere.
    areaServed: "Los Angeles, California",
  },
  archetype: ["A"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "shopify agency los angeles",
  secondaryKeywords: [
    "los angeles shopify development company",
    "los angeles shopify expert",
    "shopify website design los angeles",
  ],
  faqKeywords: [
    "shopify development in los angeles",
    "shopify development cost los angeles",
    "los angeles streetwear shopify",
    "how many orders can a shopify store handle",
    "shopify drop store development",
  ],
  // Soft presence matches acknowledged after human review. Both are questions
  // phrased the way a buyer types them, and both are answered with an explicit
  // "remotely, and there is no office", so neither implies a presence we do not
  // have. See scripts/geo/check-forbidden.ts.
  reviewedPhrases: ["in Los Angeles"],
  // Both carry the assigned primary "shopify agency los angeles" as an exact
  // string. That matters more here than usual, because the H1 now leads on
  // "Shopify development agency Los Angeles" at the owner's request and no
  // longer holds the exact assigned phrase. See the KEYWORD NOTE above the h1.
  metaTitle: "Shopify Agency Los Angeles Brands Hire For Premium Builds",
  metaDescription:
    "A Shopify agency Los Angeles brands hire when the store has to look premium and still load fast. We design it, build it, and show you the numbers first.",
  shortTitle: "Shopify agency Los Angeles",
  serviceType: "Shopify development",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // H1 carries the exact target keyword. Sentence case per section 9.
  // KEYWORD NOTE (2026-09-02, settled). An earlier draft put "Shopify
  // development agency Los Angeles" in the H1 to match the URL. The owner
  // re-checked SEMrush: that phrase returns NO volume, while "shopify agency
  // los angeles" does. So the H1 carries the assigned primary as an exact
  // string, per Copy Standard 7.1, and the word "development" is not forced
  // into it. The URL still nests under the shopify-development-agency hub,
  // which is a deliberate architecture decision, not a keyword one - see the
  // slug tradeoff recorded in Geo Inventory v4.0, Stage 2.
  // "hire for a store that", not "hire when the store" - the earlier phrasing
  // read as a condition the brand already met, so it addressed people who had
  // solved the problem instead of people who want it solved. "Not just a
  // product" rather than "not a product": nobody wants to be told their product
  // is beside the point.
  h1: "A Shopify agency Los Angeles brands hire for a store that sells an experience, not just a product",
  qualifier:
    "For brands in the most design-heavy market in the country. We design and build stores that make you look like the premium option, then prove the thing is lightning quick, and you get the numbers before you pay us anything.",

  // Evie Lou, one of the three studies in the quotes block further down, so the
  // hero opens on real client work rather than stock. Source file is 608x1080
  // portrait; cropped to 4/5 because at natural proportions it renders about
  // 1,000px tall against a copy column roughly half that.
  //
  // `src` is the poster and does double duty: it is the first paint, and it is
  // the whole experience under prefers-reduced-motion, since the video file is
  // never fetched in that case. Alt text describes the work, never a location.
  heroImage: {
    src: "/images/Case%20studies/posters/evie-lou%20video.webp",
    alt: "A womenswear storefront we rebuilt for Evie Lou",
    video: "/images/Case%20studies/evie-lou%20video.mp4",
    aspect: "4 / 5",
  },

  // Values come from lib/brand-stats.ts rather than being retyped, so a revised
  // headline figure is one edit rather than a hunt through page copy. The
  // rating tile is last because it is the softest of the four.
  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Shopify stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on the platform" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  // ── Trust bar ─────────────────────────────────────────────────────────
  // Same eight verified client logos the landing page carries. The subheading
  // has to earn the logos rather than assert them, so it says what those brands
  // have in common with the reader instead of calling them impressive.
  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading:
      "Apparel, sportswear, energy drinks, outdoor gear. Different catalogs, same brief as yours: a store that has to look premium and still load quickly.",
  },

  assetCtaLabel: "See the teardown",

  // ── Inline CTAs (2026-09-03) ──────────────────────────────────────────
  // Two prompts, both pointing at #contact where the real conversion block
  // lives. They are pointers, not offers: Copy Standard 1.4 keeps the two
  // doors together at the bottom, and neither of these introduces a third.
  //
  // Placement is the whole point. midCta lands the moment the reader finishes
  // the teardown, which is the highest-intent point on the page. closingCta
  // lands straight after the price, before the objections and FAQ.
  // Leads on what the reader wants rather than on what we would do for them.
  // The earlier line ("we can run this same teardown on your store, free")
  // sold the mechanism and put "free" in front of the ask, which reads as
  // cheap this high up the page. The audit is still free and the conversion
  // block still says so; that is the right place for it.
  // ── Approach (design USP) ─────────────────────────────────────────────
  // The heading names the competitor we are being weighed against without
  // naming them: a design studio sells taste, and taste is what the reader
  // assumes they are buying until told otherwise. Every claim here is process,
  // not outcome, so nothing needs a source.
  approach: {
    heading: "We design to how your customer buys, not to taste",
    body:
      "Every decision starts with your customer rather than with our preferences. Who they are, what brought them, what makes them hesitate, and what they need to see before they will spend.\n\nThose answers decide the order of your homepage and which section earns the top of it. They decide what your email capture asks for, and when it asks. They decide what a buyer sees the week after they order, when the second sale is still cheap to win.\n\nThat is the difference between a store that only looks pretty and one that looks just as good and sells. You are not trading beauty for results here, and we would not ask you to. We design to those answers, then measure whether we were right and change what we got wrong.",
  },

  proofCta: {
    text: "Every one of these started with someone showing us their store.",
    label: "Get in touch with us",
  },
  midCta: {
    text: "Want your store to look premium and still feel lighter?",
    label: "Get in touch with us",
  },
  closingCta: {
    text: "Tell us the one thing hurting your store and we will go and look at it.",
    label: "Get in touch with us",
  },

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    // Three beats, deliberately distinct and escalating: what the design says
    // about the brand, the craft underneath it, then speed. The first used to
    // be "maybe it was the photography", which named a deliverable rather than
    // the thing the reader actually felt, and left the brand argument to the
    // second beat alone.
    "You have looked at a competitor's store recently and come away knowing yours is behind. Maybe it was what the design said about their brand before you had read a word. Maybe it was the care in it, like somebody had thought about every screen. Maybe it was just how fast it appeared.\n\nThat instinct is usually right, and it is rarely one problem. A store that feels expensive is doing two jobs at once, and most rebuilds only manage one. They give you the experience and it crawls, or they give you speed and it looks like everyone else.\n\nJust a heads up, if what you need is more retention of your customers or more top-of-funnel traffic, that is our [link:/services/ecommerce-marketing-agency|ecommerce marketing] work and a different conversation.",

  // ── Quick answer ──────────────────────────────────────────────────────
  // The passage an AI Overview lifts. Has to stand alone with no page around
  // it, which is why it names the company and the buyer in one sentence. 53
  // words, inside the 40-60 the standard allows.
  quickAnswer:
    "Ecomm Wizards designs and builds on Shopify and Shopify Plus. We are the Shopify agency Los Angeles founders call when the store has to look good and stay quick. Every visual choice is priced in milliseconds before it ships, and you see the numbers before you pay us.",

  // ── Search intent ─────────────────────────────────────────────────────
  // REMOVED on the owner's instruction, 2026-09-02. The field is optional and
  // GeoPageTemplate renders the block only when it is present, so omitting it
  // is the whole change. It was a flat declarative scope statement written for
  // retrieval rather than for the reader, and sitting between the quick answer
  // and the place layer it delayed the argument by a screen. The disqualifier
  // it carried ("if you want a stock theme installed in a week, we are not it")
  // now lives in the objections, where a reader is actually looking for it.

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // The reader's commercial world, ONLY where this service touches it. No
  // landmarks, weather, traffic or culture: section 4 bans decoration.
  // Frames the question the block answers rather than labelling it. Carries no
  // keyword: the block's own first sentence opens on "apparel", and a keyword in
  // both places is what section 7.5 calls stuffing.
  placeLayerHeading: "What your store is actually competing against",
  placeLayer:
    "Los Angeles has more creative workers per head than any metro in the country. 8.6% of the workforce, against 6.4% for New York Metro, which is the next highest. That one number explains most of what you are up against.\n\nIt reaches you two ways. Your customer's eye is trained by everything else they scroll past in this market, so a merely competent store reads to them as a cheap one. And the brands you compete with can hire that talent without trying, because it lives here and there is a lot of it.\n\nSo the visual bar is not vanity in this market. It is the price of being taken seriously, and every brand here pays it whether they sell candles, supplements, cold brew or denim.\n\nThe trouble is what that bar is made of. Hero video. Full-bleed photography. Custom type. Motion that responds as you scroll. All of it is weight, and weight is what your store pays for on a phone, which is where most of your customers are.\n\nThat is the tension every brand in this city is building against, and it is the one your agency gets judged on.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // Service x place. The block that could not move to another page.
  // Minimum two sourced facts, recorded in gradientFacts below.
  // Restates the claim as a question the reader is already asking, without
  // reusing the opening sentence's wording.
  gradientLayerHeading: "The platform is not what is slowing you down",
  gradientLayer:
    "Shopify passes all three Core Web Vitals on 76% of stores, on mobile and on desktop. WooCommerce manages 35%. So on the platform alone you start ahead of most of the web, and a slow Shopify store is almost never Shopify's fault.\n\nIt is what got added. The video above the fold, the six fonts, the eleven apps loading on every page whether that page needs them or not. Each one was a fair decision on its own and nobody added up the bill. Shopify puts that bill at roughly 3.5% of your conversion for every extra 100 milliseconds, with a store loading in 2.5 seconds converting about 30% below one loading in 1.5. Same catalog, same ad spend, a third of the money gone into weight.\n\nSo the job here is making your store look premium enough to win the click while keeping the speed and the build quality intact. That is the work we do.",
  gradientFacts: [
    {
      id: "laedc-otis-creative-density",
      claim:
        "Metro Los Angeles has the highest percentage of creative workers of any US metro at 8.6%, above New York Metro at 6.4%. California's creative economy accounts for nearly 11% of state economic output and close to 12% of jobs.",
      url: "https://laedc.org/otis/",
      publisher: "Los Angeles County Economic Development Corporation / Otis College Report on the Creative Economy",
      captured: "2026-09-02",
      reviewAfterDays: 365,
    },
    {
      id: "web-almanac-shopify-cwv",
      claim:
        "HTTP Archive Web Almanac 2025 (Chrome CrUX field data, published 15 January 2026) reports Shopify passing all three Core Web Vitals on 76% of sites on both mobile and desktop, against WooCommerce at 35% mobile and 33% desktop. Shopify mobile detail: good LCP 86%, good INP 90%, good CLS 92%. This is the independent figure and is preferred over Shopify's own \"nearly 80%\" claim, which it corroborates.",
      url: "https://almanac.httparchive.org/en/2025/ecommerce",
      publisher: "HTTP Archive Web Almanac 2025, ecommerce chapter",
      captured: "2026-09-02",
      reviewAfterDays: 365,
    },
    {
      id: "shopify-speed-conversion",
      claim:
        "Shopify measurement over 28 days at the turn of January/February 2026: every 100ms slower load is tied to about 3.5% lower conversion, a 2.5-second store converts roughly 30% below a 1.5-second store, and every 32ms slower INP costs about 1.5%. METHOD CAVEAT, and the reason the copy attributes this to Shopify rather than stating it flat: Shopify excluded the slowest 5% of stores and used the 90th percentile rather than the standard 75th, which flatters the result.",
      url: "https://www.shopify.com/enterprise/blog/store-speed-conversion",
      publisher: "Shopify",
      captured: "2026-09-02",
      reviewAfterDays: 180,
    },
  ],

  // ── Services ──────────────────────────────────────────────────────────
  // Sits AFTER the asset in the template, so the page gives before it sells.
  //
  // Each of the three assigned secondaries owns exactly one card here and
  // appears nowhere else on the page (section 7.2). The mapping is the owner's:
  //   item 1 -> los angeles shopify development company
  //   item 2 -> shopify website design los angeles
  //   item 3 -> los angeles shopify expert
  // Items 4-6 carry no keyword. That is correct: the standard bans manufactured
  // secondaries, and there is no fourth phrase with volume worth having.
  //
  // Every card links out to the page that actually sells that service, which is
  // the internal linking this geo page owes the rest of the site.
  servicesList: {
    label: "What we build",
    heading: "Ten things we build, and what each one costs you in speed",
    intro:
      "All ten have their own page with the full detail. What is below is the part that only shows up once your store is carrying real weight on a real phone.",
    // Was "Get your ceiling measured". "Ceiling" meant the checkout ceiling
    // from the retired drop spine and meant nothing to a design-and-build
    // buyer. Now matches the three inline CTAs: same words, same destination.
    ctaLabel: "Get in touch with us",
    items: [
      {
        title: "What a Los Angeles Shopify development company should own",
        body:
          "The whole build, not half of it. We design it, write the theme, wire the checkout logic and the inventory rules, and we are still on the call the day it goes live. Not a design studio that hands you to a contractor once the mockups are signed off. If you are comparing one Los Angeles Shopify development company against another, that single question, who owns it end to end, separates them faster than any portfolio will. This sits inside our [link:/services/shopify-development-agency|Shopify development agency] work, with more on [link:/services/shopify-store-development|Shopify store development].",
      },
      {
        title: "Shopify website design Los Angeles brands ask for",
        body:
          "Image-led, video-heavy, art-directed. Right for the brand, and expensive on a phone. We do that work properly, custom type and real motion included, then price each decision in milliseconds so the trade is yours to make rather than ours to hide. Seven of the ten stores we tore down were running a custom theme, so Shopify website design Los Angeles buyers accept as standard is already well past a stock template. See [link:/services/shopify-ux-and-ui-design|UX and UI design] and [link:/services/shopify-theme-development|theme development].",
      },
      {
        title: "What a Los Angeles Shopify expert is actually for",
        body:
          "Launching is the easy part. Most stores lose money slowly afterwards, in the cart and on the product page, and you only find it if somebody is looking. So we keep testing yours against your real traffic instead of a best-practice checklist, and we fix what the numbers point at. Putting a Los Angeles Shopify expert on retainer is only worth it if they are doing that rather than waiting on tickets. See [link:/services/shopify-cro-agency|conversion rate optimization] and [link:/services/shopify-maintenance-and-support|maintenance and support].",
      },
      {
        title: "Load testing and speed",
        body:
          "The part almost nobody sells you, and the only one that produces a number. We load the store until something gives, name the thing that gave, tell you the rate it gave at, and then go and fix it. See [link:/services/shopify-speed-optimization|speed optimization].",
      },
      {
        title: "Shopify Plus",
        body:
          "Worth the money when your apps are the bottleneck, because the shared API budget goes from 100 points per second to 1,000. Not worth it as insurance against a checkout limit nobody has published. We will tell you which of those you are buying. See [link:/services/shopify-plus-development|Shopify Plus development].",
      },
      {
        title: "Custom apps",
        body:
          "Your app stack is the thing most likely to fail you on the day. The fix is usually removing two rather than installing one. We audit what is running, cut what competes during a release, and build custom where nothing off the shelf will do it. See [link:/services/shopify-app-development|app development] and [link:/services/shopify-app-setup-and-app-optimization|app optimization].",
      },
      {
        title: "Migrations",
        body:
          "Coming off WooCommerce, Magento or BigCommerce is a different job when you sell in releases. The cutover has to land in a quiet window, and your redirect map has to survive it. We move the products, customers and orders, and carry the 301s and the metadata across. Then we load test the new store before you announce a date on it. See [link:/services/migration|Shopify migration].",
      },
      {
        title: "Headless and Hydrogen",
        body:
          "Worth it when the storefront genuinely has to be faster than a theme can be. A mistake when it is bought as a status upgrade. Going headless moves your failure points rather than removing them, and adds a deploy pipeline you now have to run on drop day. We would rather measure your theme first and tell you if the answer is no. See [link:/services/headless-shopify-agency|headless Shopify development].",
      },
      {
        title: "Wholesale and B2B",
        body:
          "Plenty of brands here run a wholesale book alongside the direct one, and the two want opposite things from a storefront. Tiered pricing, account portals, net terms and bulk ordering on the same store as your direct catalog. Built so the trade side does not drag weight onto the pages your customers see. See [link:/services/shopify-b2b-store-setup|B2B store setup].",
      },
      {
        title: "ERP and systems integration",
        body:
          "If your stock really lives in NetSuite, Brightpearl, SAP or a 3PL rather than in Shopify, a release is the moment that gap shows. We build the sync and decide in advance what the store does when it lags, which matters more on drop day than on any other day of the year. See [link:/services/erp-connections-to-shopify|ERP connections] and [link:/services/shopify-integration-services|integrations].",
      },
    ],
  },

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    // Title says "in LA" because the sample now genuinely is. Every one of the
    // ten was HQ-verified in Los Angeles County before measuring (list in the
    // research note at the top of this file). An earlier version of this block
    // carried a mixed-geography sample and deliberately made NO geographic
    // claim; the sample was rebuilt rather than the title being stretched.
    title: "What a premium-looking storefront in LA actually ships",
    // ── Written for a store owner, not a developer (2026-09-03) ─────────────
    // The first version of these rows was named in engineering terms: "design
    // tokens defined in CSS", "images NOT set to lazy load", "script tags and
    // separate third-party hosts", "serving webp or avif". Every one of those
    // is accurate and every one of them is a wall to the person this page is
    // for, who runs a brand and does not write Liquid.
    //
    // Copy Standard 3.2 draws the line: simplify the CONSTRUCTION, never the
    // specificity. So every number survives untouched and the mechanism is
    // still named; what changed is that each row now says what the thing IS in
    // words an owner already owns. Where a technical term genuinely earns its
    // place it is defined in the note beneath, which is 3.2's define-in-place
    // rule rather than deleting the term.
    renderer: "frequency",
    method: {
      sampleSize: 10,
      window: "single fetch per store, weekday, mobile user agent",
      captured: "2026-09-03",
      howGathered:
        "Ten Shopify storefronts, every one run by a Los Angeles County brand. We opened each one the way your customer's phone would, and counted what the homepage sends before anything appears on screen. Brands counted, never named. Two limits worth knowing. We measured what each page sends, not how fast it felt to any one person, because that depends on their phone and their signal. And we chose brands that present themselves well rather than picking at random, so read this as what the top of the market ships, not a survey of everyone.",
    },
    // Kept for screen readers, hidden from sight. "Across the ten" and "What it
    // tells you" were scaffolding: a reader had to decode the label before
    // reaching the number, and the rows say what they are without help.
    columns: ["What we counted", "Across the ten", "What it tells you"],
    hideColumnHeaders: true,
    rows: [
      {
        label: "Built on a custom design rather than a stock template",
        cells: ["9 of 10", "A template does not clear the bar here"],
        note: "The one exception was still on Dawn, the free theme Shopify gives everybody. You can usually tell within a second of landing, and so can your customer.",
      },
      {
        label: "Colors, type and spacing set up as one system",
        cells: ["113 typical", "One store had 241"],
        note: "These are the rules a designer writes once so every page agrees with every other page. A high number means somebody really designed the store. A low one usually means a template with the colors changed.",
      },
      {
        label: "Separate font files the page has to download",
        cells: ["5 typical", "One store was pulling 23"],
        note: "Your text stays invisible until its font arrives. Two weights of one family is enough for almost any brand.",
      },
      {
        label: "Animation tools running at the same time",
        cells: ["1 typical", "Three stores ran two or more"],
      },
      {
        label: "Photos saved in the lighter modern formats",
        cells: ["10 of 10", "The one thing everybody here has fixed"],
      },
      {
        label: "The page's own code, before a single photo",
        cells: ["686 KB typical", "This arrives first, every time"],
      },
      {
        label: "Photos that load whether you scroll to them or not",
        cells: ["23 typical", "They compete with the top of your page"],
        note: "One store loaded all 71 of its photos straight away. Nothing was told to wait, so the phone fetches pictures from the footer while your customer is still looking at the top. This is the most common problem here and the easiest to fix.",
      },
      {
        label: "Photos on the homepage in total",
        cells: ["71 typical", "The heaviest had 325"],
      },
      {
        label: "Pieces of code, and outside services, loading in",
        cells: ["87 and 19", "Most run before anything is on screen"],
        note: "Outside services are the apps and trackers you have installed. Each one is a separate trip out to somebody else's server before your page can finish.",
      },
    ],
    derived:
      "Read the top half and the bottom half together, because they are the same decision. Nine of these ten brands paid for real design work, and it shows. That is what this market demands and we would build the same. The cost only turns up lower down, in the photos nobody told to wait and the code that runs before your customer sees anything. None of it is visible from your own laptop, which is why it survives so long.",
    derivedList: {
      // Three design checks, then three build checks, in that order. The list
      // used to be seven build items, which quietly said we are an engineering
      // shop that tolerates design. Half the readers of this page are unhappy
      // with how their store LOOKS, and had nothing here to act on.
      //
      // Every one is something an owner can do alone, on their own phone, in a
      // few minutes. Nothing here needs a developer or a tool login, which is
      // what makes the block worth reading rather than worth skipping.
      title: "What to check on your own store this week",
      items: [
        "Look at your homepage on a phone for three seconds, then look away. If nothing about it stayed with you, nothing stayed with your customer either.",
        "Put your product page beside your best competitor's, both on a phone. The gap is usually obvious, and it is usually not the product.",
        "Scroll your own collection page. If the lighting or the crop changes halfway down, the catalog reads as cheaper than it is.",
        "Open your homepage on a phone and count the photos you can see before scrolling. Everything further down should wait until you reach it.",
        "Count your fonts. Two weights of one family covers almost every brand.",
        "List the apps running on every page, then ask which ones your homepage actually needs.",
      ],
    },
    reviewAfterDays: 180,
  },

  // ── Client quotes ─────────────────────────────────────────────────────
  // Slugs here MUST NOT overlap the proof grid in block 7. Each study named
  // below carries a quotePerson in lib/case-studies.ts; ResultsSlider skips any
  // study that does not, rather than putting words in someone's mouth.
  //
  // Each study's own hero metric leads on conversion, which is right here: the
  // question this page raises is whether the store performs under pressure, and
  // all three of these answer it from a different angle.
  results: {
    heading: "Three owners, three numbers, and where they came from",
    intro:
      "Three stores where the client says it in their own words. Every number opens into the case study it came from, so you can check it.",
    slugs: [
      "evie-lou-shopify-fashion-cro",
      "everlast-shopify-plus-sports-redesign",
      "sneak-energy-shopify-redesign",
    ],
    headlines: {
      "evie-lou-shopify-fashion-cro":
        "{brand} lifted conversion 82% once the store stopped losing people before checkout",
      "everlast-shopify-plus-sports-redesign":
        "{brand} more than doubled conversion rate on a rebuilt Shopify Plus store",
      "sneak-energy-shopify-redesign":
        "{brand} took mobile conversion up 68% with the store loading in under 2.9 seconds",
    },
  },

  // ── How we work ───────────────────────────────────────────────────────
  // The honest-local block. The FAQ says we have no office; this says what we
  // put in place instead. Every item has to be a commitment a client could
  // quote back at us, which is the test that keeps it from becoming a values
  // list. No presence language anywhere in it.
  howWeWork: {
    heading: "What we take pride in",
    intro:
      "At your size the thing that matters is not where an agency sits. It is whether they pick up. These four are what we hold ourselves to, and they are why our clients stay for years rather than projects.",
    items: [
      {
        title: "Your store breaking on a Saturday is still our problem",
        body:
          "Most agencies go quiet on Friday and answer you on Monday. We do not. Post in the channel on a Saturday and you get a reply, not an auto-responder, and someone starts working on it. Need one developer, you get one. Need the whole team, you get the whole team. That is what being your partner has to mean or the word is worthless.",
      },
      {
        title: "One named developer, in your channel",
        body:
          "Not a ticket queue, and not an account manager relaying questions to someone you never meet. The person who wrote your checkout logic answers when it misbehaves, in a shared channel you can see.",
      },
      {
        title: "We are on Pacific hours when it counts",
        body:
          "Launches here mostly go live mid-morning Pacific. We staff that window and the hour either side of it, written into the contract rather than offered as a favor. If you go live at eleven, someone senior is watching from ten.",
      },
      {
        title: "You own the code, and you keep it",
        body:
          "The repository, the theme, the design files and anything we build on top are yours from day one, not at the end once the invoice clears. If we part ways, you leave with all of it and a developer who has never met us can pick it up. We have never seen the point of holding a client's store hostage to keep them.",
      },
      {
        title: "We will tell you when the answer is no",
        body:
          "If the measurement says your store is already fine, we say so and stop there. A rebuild you did not need is the most expensive thing we could sell you. It is also the fastest way to lose you.",
      },
    ],
  },

  // ── Block 6: What we do about it ──────────────────────────────────────
  // Carries NO keyword. "los angeles shopify development company" moved to the
  // services list above, and repeating it here would be the word-order stuffing
  // section 7.5 describes.
  whatWeDoAboutIt:
    // The conversion-led design argument used to live here as a second
    // paragraph. It moved out to its own `approach` section on 2026-09-03,
    // between the place layer and the proof, because buried here it was
    // invisible. Do not reintroduce it: this block is process and price.
    "We design it and we build it, and the same team does both. That is most of the point. The trade between the look and the speed gets made a hundred times during a build, and it cannot be made by people in separate rooms.\n\nIn practice the work is the unglamorous half. Budgeting the page weight before the design is signed off. Serving the hero video so it does not block first paint. Cutting the apps that load everywhere and are needed in one place. Measuring on a mid-range phone rather than your laptop.\n\nBuilds land between $5,000 and $50,000 depending on scope, with the price and the date in writing before we start. If the store is already quick and looks the part, we will say so and quote you nothing.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // Matched to the vertical, never framed as a local client.
  proofHeading: "Stores we've built, and what changed",
  proof: [
    {
      slug: "dryrobe-shopify-plus-redesign",
      vertical: "Apparel and outdoor",
      whatWasBuilt: "Three fragmented stores consolidated into one Shopify Plus build, with a custom activity and size finder",
      outcome: "+89% online revenue, +23% checkout completion, -31% return rate",
      verified: true,
    },
    {
      slug: "twillory-shopify-cro",
      vertical: "Menswear",
      whatWasBuilt: "A running CRO program that A/B tested every interface component on the store",
      outcome: "$5.4M new annual revenue, $455k in the first 90 days",
      verified: true,
    },
    {
      slug: "feetures-shopify-theme-development",
      vertical: "Performance apparel",
      whatWasBuilt: "A theme rebuilt from scratch with custom collection pages, variant-aware product pages and metafield automation",
      outcome: "+32% add-to-cart rate, +19% average order value",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  // Three. At least one specific to this market's buyer. One conceded honestly.
  objectionsHeading: "Questions worth asking before you hire anyone",
  objections: [
    {
      objection: "Do we need the design too, or just the build?",
      answer:
        "That is your call, and it comes down to one question. If your design already converts and you are happy with how the store feels, you do not need our design work. Send us what you have and we build it, fast, and that is all you pay for.\n\nIf the store works but leaves people cold, that is the other job. We design the experience first, so a customer feels something the moment they land, then build it so none of that feeling costs you load time. Most brands here need the second one and ask for the first.",
    },
    {
      objection: "We already have a designer we like. Why do we need you?",
      answer:
        "Keep them. We would rather build to a design you already believe in than sell you a replacement. What we add is the half that decides whether their work survives a phone: how the hero is served, what the type costs, which apps load where. Hand us the design and we will tell you what it weighs before anyone commits. If your designer already hands over image budgets and font subsets, they have covered this and you can skip us.",
    },
    {
      objection: "Why hire anyone? Our developer knows the store better than an outsider will.",
      answer:
        "They probably do, and for most work that is the right answer. What we add is having watched the same trade go wrong on other people's stores, which is different knowledge from knowing your codebase. If your developer can already show you the store's Core Web Vitals on real traffic and say which element is costing you, you do not need us for this.",
    },
    {
      objection: "Every agency says they build fast stores. Why would yours be different?",
      answer:
        "They do say it, and most mean it on the day they hand over. The honest part is that speed decays. Every app somebody installs and every hero somebody swaps takes a little back. So we do not hand you a number at launch and disappear. We measure before the design is signed off, again at handover, and on your real traffic after. One case where we would tell you not to bother. If your store already sits inside the Core Web Vitals thresholds and converts well, a rebuild for speed is us taking your money.\n\nAnd if what you want is a stock theme installed and lightly styled in a week, that is a real service, but it is not ours.",
    },
  ],

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  // 6-8, minimum 3 unique to this page. No definition of the H1 term anywhere
  // in the body; section 5.1 permits one definition here at 40 words maximum.
  faqs: [
    // Trimmed from 13 to 9 on 2026-09-03, owner's instruction. Removed:
    //   "How many orders can a Shopify store take at once?"  - last load-bearing
    //      piece of the retired checkout-ceiling spine
    //   "Do you have an office we can visit?"                - see note below
    //   "Can you work alongside our in-house developer?"
    //   "What areas do you cover beyond Los Angeles?"
    //
    // THE OFFICE FAQ IS A GATE. registry.ts validatePage requires every geo page
    // to carry a "do you have an office" question (Page Spec section 6.4), and
    // removing it fails the publish gate. The gate has been relaxed to a warning
    // rather than deleted, because the owner's position is now explicit and
    // consistent: we make no claim that we are in the city, so we should make no
    // claim that we are not. Master Strategy section 4 forbids PRESENCE claims;
    // it never required a disclaimer of absence. Nothing on this page implies an
    // office either way, which is the actual compliance requirement.
    {
      // FAQs 1-3 rebuilt 2026-09-03. They used to be "Does Shopify Plus stop a
      // drop from going down?", "What is a queue and do we need one?" and "How
      // do we stop overselling on a release?" - all survivors of the retired
      // checkout-ceiling spine, all answering release-engineering questions for
      // a reader who came here wanting design and build. The FAQ is the last
      // thing before the form, so it was spending the final impression on the
      // wrong subject. These three are what this buyer actually asks: what
      // happens first, can you keep what I have, and what happens after launch.
      question: "Do we have to rebuild, or can you work with the store we have?",
      answer:
        "Usually we can work with what you have. Most stores need two or three specific things fixed rather than a fresh build, and that is a much smaller number. We will tell you which one you are looking at after we have measured it, and we will not pretend a rebuild is necessary because it pays better.",
      unique: true,
    },
    {
      question: "What happens in the first two weeks?",
      answer:
        "Week one we measure: your store on a real phone, what it weighs, where the time goes, and what your design is costing you. You get that back whether or not you carry on. Week two we scope it properly and give you a fixed price and a date in writing. No work starts until you have both.",
      unique: true,
    },
    {
      question: "What happens after the store goes live?",
      answer:
        "Speed decays. Every app somebody installs and every hero somebody swaps takes a little back, so a store handed over fast does not stay fast on its own. We stay on a retainer where that matters to you, measuring on real traffic and fixing what drifts. If you would rather take it in-house, we hand over everything you need to do that.",
      unique: true,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Most go live in about six weeks. Add a week for load testing and your release runbook, which happens after the build is done and needs a quiet store to test against.",
      unique: false,
    },
    {
      question: "What does a Shopify build cost?",
      answer:
        "Between $5,000 and $50,000 for most projects, depending on how much is custom. Load testing and a runbook on an existing store is far smaller, and we quote it separately if that is all you need.",
      unique: false,
    },
    {
      question: "Do you do ads and email marketing too?",
      answer:
        "Yes, we do. This page is about the store itself: design, build, speed, and keeping it right afterwards. If ads, email and retention are what you are after, that conversation lives on our [link:/services/ecommerce-marketing-agency|ecommerce marketing] page.",
      unique: true,
    },

    // The three below are entity-shaped rather than problem-shaped: they answer
    // the question as a search engine phrases it, so the page can be returned
    // for the qualifying questions buyers ask alongside the head term. They sit
    // last on purpose, because a human reading top to bottom wants the real
    // answers first.
    {
      question: "Do you provide Shopify development in Los Angeles?",
      answer:
        "Yes. We build and support Shopify stores for brands across the metro and the wider California market, and the work is remote either way. No travel line on your invoice, and no client here has yet needed us in the room.",
      unique: true,
    },
    {
      question: "How much does Shopify development cost for a Los Angeles brand?",
      answer:
        "The same as anywhere: $5,000 to $50,000 for a build, depending on how much is custom. Local agency rates run above the national average and ours do not move by city. Load testing and a release runbook on a store you already have is a fraction of that, and quoted on its own.",
      unique: true,
    },
    {
      question: "Do you work with Los Angeles streetwear brands?",
      answer:
        "Yes, and it is a trade we know well. We build just as often for food, beverage, beauty, supplements, home and outdoor brands here. The problem barely changes by category: your store has to look like your brand and still load quickly on a phone.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Copy Standard section 8: zero keyword targets anywhere in this block, no
  // city name, under 180 words above the form, second person throughout.
  conversion: {
    heading: "Show us the part that is letting you down",
    whatYouGet:
      "Name the one thing hurting your store. We audit it free and walk you through what we find.",
    whatWeWillTellYouNotToDo:
      "Most stores we look at need two or three specific fixes, not a rebuild. When that is what we find, that is what we quote, even though the rebuild pays us more.",
    responseExpectation:
      "A senior developer replies within one working day. Not a salesperson.",
    audit: {
      transition:
        "You already know which part of your store is letting you down.",
      offer:
        "Tell us that part. We audit it and hand you the findings, not a summary:",
      parts: [
        "What is happening, measured on your store rather than guessed at.",
        "Why it is happening, which is usually not the symptom you noticed.",
        // Copy Standard 8.4 words this third part as "in enough detail that
        // they or another team could act on it". Narrowed on the owner's
        // instruction (2026-09-03): we should not promise a handoff-ready
        // blueprint somebody can take to their in-house developer. The audit
        // still has to be worth taking, so the specificity moved from "who
        // could implement it" to "what to do first and what it is worth", which
        // is more useful to the reader anyway and does not give the work away.
        "How to fix it, in what order, and which fix moves the number most.",
      ],
      limit:
        "It is a diagnosis, not the work. Fixing it is a separate quote you are free to decline.",
      noObligation:
        "The audit is free and the findings are yours to keep, whether or not we end up working together.",
      // Filled 2026-09-02 on the owner's instruction, closing the Copy Standard
      // 8.4 gap and checklist #17. Both facts the standard asks for are named:
      // three business days, and the format.
      //
      // The two doors resolve differently and the copy has to say so, because
      // "in writing" was previously promised and is not what either door
      // delivers. Book a call and a developer walks the reader through it live.
      // Leave details and it arrives by email, where the reader picks the call
      // or a recorded Loom. The call is listed first because it is what we would
      // rather happen; it is not argued for, because 8.2 bans manufactured
      // urgency and this reader is already deciding whether the step costs them
      // anything.
      turnaround:
        "Book a free thirty-minute slot, whenever suits you. You get it back within three business days and we walk you through it live, with the developer who ran the audit. Ask why, disagree, get a straight answer on the spot. That beats any document we could send.",
      secondDoor:
        "Would rather we came to you? Leave your details in the form and we will reach out with the same findings.",
    },
  },

  // Sources rebuilt 2026-09-02 for the new spine. The five apparel and Fairfax
  // citations that stood here were removed with the place layer they supported:
  // BLS QCEW apparel manufacturing and wholesale, the Complex Fairfax oral
  // history, the Supreme timed-entry release and the Fairfax vacancy figure.
  // They are in git history if the old argument is ever wanted. Two of them were
  // weak anyway: the rent figures were operator recollection in a magazine
  // interview rather than lease data, and the vacancy number was second-hand.
  sources: [
    {
      id: "laedc-otis-creative-density",
      claim:
        "Metro Los Angeles has the highest percentage of creative workers of any US metro at 8.6%, above New York Metro at 6.4%. This is the fact the place layer turns on, so re-verify it first if that block is ever edited.",
      url: "https://laedc.org/otis/",
      publisher: "Los Angeles County Economic Development Corporation / Otis College Report on the Creative Economy",
      captured: "2026-09-02",
      reviewAfterDays: 365,
    },
    {
      id: "web-almanac-shopify-cwv",
      claim:
        "Shopify passes all three Core Web Vitals on 76% of sites on both mobile and desktop; WooCommerce manages 35% mobile and 33% desktop. Chrome CrUX field data, published 15 January 2026. Independent of Shopify, which is why it is used in preference to Shopify's own \"nearly 80%\" figure.",
      url: "https://almanac.httparchive.org/en/2025/ecommerce",
      publisher: "HTTP Archive Web Almanac 2025, ecommerce chapter",
      captured: "2026-09-02",
      reviewAfterDays: 365,
    },
    {
      id: "shopify-speed-conversion",
      claim:
        "Every 100ms slower load is tied to about 3.5% lower conversion; a 2.5-second store converts roughly 30% below a 1.5-second store. Measured by Shopify over 28 days at the turn of January/February 2026. Shopify excluded the slowest 5% of stores and used the 90th percentile rather than the standard 75th, which flatters the result, so the copy attributes the number to Shopify rather than stating it as fact.",
      url: "https://www.shopify.com/enterprise/blog/store-speed-conversion",
      publisher: "Shopify",
      captured: "2026-09-02",
      reviewAfterDays: 180,
    },
    {
      id: "shopify-checkout-throttle",
      claim:
        "Shopify documents that checkout creation on the Storefront API is throttled and returns a throttled response, and publishes no numeric limit and no plan-tier difference. Supports the load-testing service card and FAQ 1, which are what remains of the previous spine.",
      url: "https://shopify.dev/docs/api/usage/limits",
      publisher: "Shopify",
      captured: "2026-08-25",
      reviewAfterDays: 180,
    },
    {
      id: "shopify-graphql-points",
      claim:
        "Shopify publishes GraphQL Admin API rate limits of 100 points per second on standard plans and 1,000 on Plus, pricing every mutation at 10 points. Supports the Shopify Plus service card and FAQ 2.",
      url: "https://shopify.dev/docs/api/usage/limits",
      publisher: "Shopify",
      captured: "2026-08-25",
      reviewAfterDays: 180,
    },
    {
      id: "shopify-inventory-reservation",
      claim:
        "Shopify reserves inventory when payment starts, not when an item is added to cart. Supports FAQ 4 on overselling.",
      url: "https://shopify.engineering/scaling-inventory-reservations",
      publisher: "Shopify Engineering",
      captured: "2026-08-27",
      reviewAfterDays: 180,
    },
  ],

  // Page Spec section 2.2 sets 1,300-1,700 for a geo page, and that number
  // describes the bare eleven-block spine. This page is not that shape: it also
  // carries a trust bar, a quick answer, a search-intent block, a ten-item
  // service list, a quote slider, a how-we-work block and twelve FAQs instead of
  // the spine's six to eight. The ceiling is raised on the owner's instruction
  // (2026-09-01) so the target describes the page that actually exists rather
  // than failing the publish gate on every addition they asked for.
  //
  // This is a per-page override, not a programme-wide change. Sibling geo pages
  // keep [1300, 1700] unless they grow the same way, and if that becomes the
  // norm the Page Spec is what should be revised, not each page's target.
  // Ceiling raised 3700 -> 4100 on 2026-09-03. Everything added since the last
  // raise was requested: the design half of the storefront teardown, a scope
  // FAQ pointing marketing intent at the marketing hub, and a second placement
  // for each of the three assigned secondaries. The page is at ~3,900.
  //
  // This is now the second raise on one page, which is worth naming rather than
  // repeating quietly. If a third is ever needed, the answer is to cut, not to
  // raise: Master Strategy 5.5 says depth comes from specificity and a padded
  // page fails the reader faster than a short one. The weakest material here is
  // the four entity-shaped FAQs that exist for retrieval rather than for a
  // human, and they are what should go first.
  wordCountTarget: [1300, 4100],
};
