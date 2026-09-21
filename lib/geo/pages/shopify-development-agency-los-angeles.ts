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
    "For brands in the most design-heavy market in the country. We design and build stores that look like the premium option, then prove they are quick. You get the numbers before you pay us.",

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
      "Every decision starts with your customer. Who they are, what brought them, what makes them hesitate, and what they need to see before they spend.\n\nThose answers decide the order of your homepage and what a buyer sees the week after they order.\n\nThat is the difference between a store that only looks pretty and one that sells. Ask everyone on your Shopify agency Los Angeles shortlist how they decide those things.",
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
    "You have looked at a competitor's store recently and come away knowing yours is behind. Maybe it was what their design said before you read a word. Maybe it was the care in it. Maybe it was the speed.\n\nThat instinct is usually right, and it is rarely one problem. A store that feels expensive does two jobs, and most rebuilds manage one. They give you the experience and it crawls, or they give you speed and it looks like everyone else.\n\nIf what you need is retention or traffic, that is our [link:/services/ecommerce-marketing-agency|ecommerce marketing] work and a different conversation.",

  // ── Quick answer ──────────────────────────────────────────────────────
  // The passage an AI Overview lifts. Has to stand alone with no page around
  // it, which is why it names the company and the buyer in one sentence. 53
  // words, inside the 40-60 the standard allows.
  quickAnswer:
    "Ecomm Wizards designs and builds on Shopify and Shopify Plus. We are the Shopify agency Los Angeles founders call when a store has to look good and stay quick. Every visual choice is priced in milliseconds. You see the numbers before you pay us.",

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
    "Los Angeles has more creative workers per head than any metro in the country: 8.6% of the workforce, against 6.4% for New York Metro. That number explains most of what you are up against.\n\nYour customer's eye is trained by everything else they scroll past here, so a merely competent store reads as a cheap one. And your competitors can hire that talent without trying.\n\nSo the visual bar is the price of being taken seriously, whether you sell candles, supplements, cold brew or denim. The trouble is what it is made of: hero video, full-bleed photography, custom type, motion that answers your scroll. All of it is weight, and weight is what your store pays for on a phone.\n\nThat tension is what a Shopify agency Los Angeles brands trust gets judged on.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  // Service x place. The block that could not move to another page.
  // Minimum two sourced facts, recorded in gradientFacts below.
  // Restates the claim as a question the reader is already asking, without
  // reusing the opening sentence's wording.
  gradientLayerHeading: "The platform is not what is slowing you down",
  gradientLayer:
    "Shopify passes all three Core Web Vitals on 76% of stores, mobile and desktop. WooCommerce manages 35%. So a slow Shopify store is almost never Shopify's fault.\n\nIt is what got added. The video above the fold, the six fonts, the eleven apps on every page. Each was a fair decision and nobody added up the bill.\n\nShopify puts that bill at roughly 3.5% of your conversion for every extra 100 milliseconds, with a 2.5-second store converting about 30% below a 1.5-second one. Same catalog, same ad spend.\n\nSo one question decides a Shopify agency Los Angeles proposal: what will this design weigh?",
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

  // ── Disciplines ───────────────────────────────────────────────────────
  // Sits AFTER the asset in the template, so the page gives before it sells.
  //
  // Replaced a ten-item services accordion on 2026-09-07. GeoPageTemplate
  // renders one or the other, never both. The accordion sliced development into
  // ten tasks, which is the right shape for a reader who has already chosen the
  // service; this page's keyword is the broad agency term, so the reader has
  // not chosen and the honest question is which discipline they need.
  //
  // Every panel is derived: give a caseSlug and the brand, video and headline
  // metric are read from lib/case-studies.ts at render. None of these six slugs
  // appears elsewhere on this page.
  //
  // COST OF THE SWAP, recorded so it is a decision rather than a regression:
  // the accordion carried ten outbound links to service pages and this carries
  // six. Speed optimization, Shopify Plus, migrations, headless, B2B, ERP,
  // integrations, app development and theme development lost their contextual
  // link from this block. RelatedServices at the foot of the page still links
  // them, but from a generic slot rather than from copy that argues for them.
  disciplines: {
    label: "What we do",
    heading: "So which of these do you need?",
    intro:
      "Might be one, might be three. A Shopify agency Los Angeles quote should price each on its own, and we tell you which you need.",
    items: [
      {
        label: "Design and UX",
        heading: "Looking expensive and loading fast are the same design decision",
        body:
          "Every Shopify website design Los Angeles build gets a weight budget before the first mockup. Hero video, photography and custom type all have to fit inside it.",
        covers: ["UX and UI design", "Art direction", "Product page design", "Design systems"],
        imageAlt: "A beauty storefront we designed and rebuilt for 111SKIN",
        caseSlug: "111skin-shopify-cro-redesign",
        cta: { label: "Explore design and UX", href: "/services/shopify-ux-and-ui-design" },
      },
      {
        label: "Build and development",
        heading: "The build is where the look stops costing you speed",
        body:
          "Those 23 photos loading before anyone scrolls were never a design decision. We are a Los Angeles Shopify development company, so we fix that in the theme before your store ships.",
        covers: ["Theme development", "Shopify Plus", "Migrations", "Integrations", "Speed"],
        imageAlt: "A jewelry storefront we replatformed onto Shopify Plus for John Hardy",
        caseSlug: "john-hardy-shopify-plus-migration",
        cta: { label: "Explore development", href: "/services/shopify-development-agency" },
      },
      {
        label: "Ecommerce SEO",
        heading: "Your rankings are paying for the hero video too",
        body:
          "Google measures the same load your customer sits through, and it crawls a heavy store less often. We cut the script and image weight first, because nothing else in the plan works until the store loads.",
        covers: ["Core Web Vitals", "Technical SEO", "Product page SEO", "Schema markup"],
        imageAlt: "A sportswear storefront we moved onto Shopify for Capelli Sports",
        caseSlug: "capelli-sports-shopify-migration",
        cta: { label: "Explore ecommerce SEO", href: "/services/ecommerce-seo-agency" },
      },
      {
        label: "Creative strategy",
        heading: "Your most expensive traffic hits your heaviest page",
        body:
          "We make the video and the motion in house, and we size every file to what the landing page can carry. Your paid visitors are the last people who should be waiting on a hero video.",
        covers: ["Ad creative", "Motion and video", "Paid social", "Creative testing"],
        imageAlt: "Creative work we produced for the haircare brand Prose",
        caseSlug: "prose-creative-strategy",
        cta: { label: "Explore creative strategy", href: "/services/creative-strategy" },
      },
      {
        label: "Email and retention",
        heading: "Every repeat order is one your homepage does not have to win",
        body:
          "Your storefront has to load all that weight before it can sell. An email does not, which is why the fifth order costs a fraction of the first.",
        covers: ["Klaviyo email and SMS", "Automated flows", "Subscriptions", "Loyalty programs"],
        // Was wild-shopify-plus-subscriptions, which did not evidence this row.
        // Wild's serviceType is "Shopify Plus | Subscriptions | Integration
        // Services" and its own challenge text says the work "was not CRO or a
        // platform migration. It was building a subscription-first commerce
        // infrastructure from the ground up." Klaviyo appears only in its tech
        // stack. The panel would have shown "80K+ Monthly Subscribers", a build
        // number standing in for an email claim, which is exactly the borrowed
        // proof this block's derived panel exists to make impossible.
        //
        // Living in Sunshine is a real Klaviyo engagement: "Klaviyo Email |
        // Flow Strategy | BFCM", headline +219.8% Flows Revenue Growth, which
        // is the claim this row actually makes. It is also a Southern
        // California category, so it signals the market without narrowing the
        // copy, which the vertical rule at the top of this file requires.
        imageAlt: "Email and retention work we ran for Living in Sunshine",
        caseSlug: "living-in-sunshine-klaviyo-email",
        cta: { label: "Explore marketing and retention", href: "/services/ecommerce-marketing-agency" },
      },
      {
        label: "CRO and support",
        heading: "Six months in, the look has grown and the store has slowed",
        body:
          "It happens one hero video at a time, so nobody catches it in a design review. A Los Angeles Shopify expert tests on your real traffic and measures what each addition costs in orders before you ship it.",
        covers: ["Conversion rate optimization", "A/B testing", "Maintenance and support", "Analytics"],
        imageAlt: "A confectionery storefront we rebuilt and tested for Candy Kittens",
        caseSlug: "candy-kittens-shopify-food-beverage-cro",
        cta: { label: "Explore CRO and support", href: "/services/shopify-cro-agency" },
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
        "Ten Shopify storefronts, every one a Los Angeles County brand. We opened each the way your customer's phone would, and counted what the homepage sends before anything appears. Brands counted, never named. Two limits: we measured what each page sends, not how fast it felt. And we chose brands that present themselves well, so read this as what the top of the market ships.",
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
        note: "The exception was still on Dawn, the free theme Shopify gives everybody.",
      },
      {
        label: "Colors, type and spacing set up as one system",
        cells: ["113 typical", "One store had 241"],
        note: "The rules a designer writes once so every page agrees with the next. A high number means somebody really designed it.",
      },
      {
        label: "Separate font files the page has to download",
        cells: ["5 typical", "One store was pulling 23"],
        note: "Your text stays invisible until its font arrives. Two weights of one family is enough.",
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
        note: "One store loaded all 71 straight away, so the phone fetches footer pictures while your customer is still at the top.",
      },
      {
        label: "Photos on the homepage in total",
        cells: ["71 typical", "The heaviest had 325"],
      },
      {
        label: "Pieces of code, and outside services, loading in",
        cells: ["87 and 19", "Most run before anything is on screen"],
        note: "Your apps and trackers. Each is a separate trip to somebody else's server before your page can finish.",
      },
    ],
    derived:
      "Read the top half and the bottom half together, because they are the same decision. Nine of these ten paid for real design work, and it shows. The cost turns up lower down, in the photos nobody told to wait and the code that runs first. None of it shows on your own laptop, which is why it survives. Run these checks before any Shopify agency Los Angeles pitch.",
    derivedList: {
      // Three design checks, then three build checks, in that order. The list
      // used to be seven build items, which quietly said we are an engineering
      // shop that tolerates design. Half the readers of this page are unhappy
      // with how their store LOOKS, and had nothing here to act on.
      //
      // Every one is something an owner can do alone, on their own phone, in a
      // few minutes. Nothing here needs a developer or a tool login, which is
      // what makes the block worth reading rather than worth skipping.
      title: "What to check before a Shopify agency Los Angeles quote",
      items: [
        "Look at your homepage on a phone for three seconds, then look away. If nothing stayed with you, nothing stayed with your customer.",
        "Put your product page beside your best competitor's, both on a phone. The gap is usually obvious, and usually not the product.",
        "Count the photos you can see before scrolling. Everything further down should wait until you reach it.",
        "Count your fonts, then list the apps running on every page.",
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
      "Three stores, in the owners' own words. Every number opens into its case study, so you can check any Shopify agency Los Angeles claim the same way.",
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
      // TRIMMED 22 September 2026, owner's instruction to cut this page to
      // 2,500 words. The "Saturday" item went with it, which also removed a
      // claim about other agencies going quiet on Fridays (Standard Step 04
      // #5) and a weekend promise the Standard itself says we don't make.
      // "Written into the contract" came out of the Pacific hours item for the
      // same reason: it was never checked.
      "At your size, what matters is not where an agency sits. It is whether they pick up. These are what a Shopify agency Los Angeles brands keep should hold to.",
    items: [
      {
        title: "One developer you can name, in your channel",
        body:
          "Not a ticket queue, and not an account manager relaying questions. The person who wrote your checkout logic answers in your channel.",
      },
      {
        title: "We are on Pacific hours when it counts",
        body:
          "Launches here mostly go live mid-morning Pacific, so we staff that window for your launch. Go live at eleven and someone senior is watching from ten.",
      },
      {
        title: "You own the code, and you keep it",
        body:
          "The repository, the theme and the design files are yours from day one. If we part ways, a new developer can pick it up.",
      },
      {
        title: "We will tell you when the answer is no",
        body:
          "If the measurement says your store is already fine, we say so and stop there. A rebuild you did not need is the most expensive thing we could sell you.",
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
    // Price band removed 22 September 2026 under the owner's no-prices rule,
    // the same rule applied to both California pages.
    "We design it and we build it, and the same team does both. The trade between the look and the speed gets made a hundred times during a build, and it cannot be made by people in separate rooms.\n\nIn practice the work is the unglamorous half. Budgeting page weight before the design is signed off. Serving the hero so it does not block first paint. Cutting apps needed in one place that load everywhere.\n\nYou get the measurements first, then a scope and a date in writing. Ask for that order in any Shopify agency Los Angeles engagement. If your store is already quick, we will say so and quote you nothing.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  // Matched to the vertical, never framed as a local client.
  proofHeading: "Stores we've built, and what changed",
  proof: [
    {
      slug: "dryrobe-shopify-plus-redesign",
      vertical: "Apparel and outdoor",
      whatWasBuilt: "Three fragmented stores consolidated into one Shopify Plus build, with an activity and size finder",
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
      whatWasBuilt: "A theme rebuilt from scratch, with variant-aware product pages and metafield automation",
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
        "That is your call. If your design already converts, send us what you have and we build it.\n\nIf the store works but leaves people cold, that is the other job. We design the experience first, then build it so none of it costs you load time.\n\nAsk any Shopify agency Los Angeles brands recommend to price the two separately.",
    },
    {
      objection: "We already have a designer we like. Why do we need you?",
      answer:
        "Keep them. We would rather build a design you believe in than sell you a replacement.\n\nWhat we add is the half that decides whether their work survives a phone: how the hero is served, what the type costs, which apps load where. Any Shopify agency Los Angeles shortlist should tell you what a design weighs before anyone commits.",
    },
    {
      objection: "Every agency says they build fast stores. Why would yours be different?",
      answer:
        "The honest part is that speed decays. Every app installed and every hero swapped takes a little back, so a launch number means little.\n\nWe measure before the design is signed off, at handover, and on your traffic after. If your store already sits inside the Core Web Vitals thresholds, a rebuild for speed is us taking your money.",
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
        "Usually. Most stores need two or three things fixed rather than a fresh build, and we will tell you which after we measure.",
      unique: true,
    },
    {
      question: "What happens in the first two weeks?",
      answer:
        "Week one we measure: your store on a real phone, what it weighs, where the time goes. You get that back either way. Week two we scope it and give you a date in writing.",
      unique: true,
    },
    {
      question: "What happens after the store goes live?",
      answer:
        "Speed decays, so a store handed over fast does not stay fast. We stay on a retainer where that matters, measuring real traffic and fixing what drifts. Or we hand over everything you need.",
      unique: true,
    },
    {
      question: "How long does a Shopify build take?",
      answer:
        "Most go live in about six weeks, plus a week for load testing and your release runbook.",
      unique: false,
    },
    {
      // The two cost FAQs (this one and "How much does Shopify development
      // cost for a Los Angeles brand?") were merged here on 22 September 2026
      // and the price band removed under the owner's no-prices rule. The
      // merged answer also drops "local agency rates run above the national
      // average", an unprovable claim about competitors (Step 04 #5).
      question: "What should a Shopify agency Los Angeles proposal include?",
      answer:
        "The measurements first, then a scope and a date in writing, with design and build priced separately.",
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
        "Yes, and your project runs remotely. We are the Shopify agency Los Angeles brands work with across the metro and wider California.",
      unique: true,
    },
    {
      // The streetwear FAQ folded into this one, 22 September 2026.
      question: "Do you work with Los Angeles streetwear brands?",
      answer:
        "Yes, and it is a trade we know well. We build just as often for food, beverage, beauty and outdoor brands here. The problem barely changes by category: your store has to look like your brand and load fast.",
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
      "Most stores we look at need two or three fixes, not a rebuild. That is then what we quote.",
    responseExpectation:
      "A senior developer replies within one working day, not a salesperson.",
    audit: {
      transition:
        "You already know which part is letting you down.",
      offer:
        "Tell us that part. We audit it and hand you the findings:",
      parts: [
        "What is happening, measured rather than guessed at.",
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
        "It is a diagnosis, not the work. Fixing it is quoted separately and you are free to decline.",
      noObligation:
        "The audit is free and the findings are yours either way.",
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
