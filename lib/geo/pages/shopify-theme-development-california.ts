// Group A, California #9: /services/shopify-theme-development/california
// Inventory: Geo Inventory & Batch Plan v4.0, California row 9 (Batch 1b).
// Primary keyword: "shopify web design agency california" (10/mo, Google
// Keyword Planner, the figure of record). Secondary: "shopify website design
// services california" and "shopify theme experts california".
// Hub: /services/shopify-theme-development (exists; hand-built page, so the
// city links block has to be added to it by hand when this page publishes).
// Copy: docs/ecomm-wizards-page-standard.md.
//
// ── STEP 01, THE INTENT ─────────────────────────────────────────────────────
// `shopify web design agency <place>` narrows TWICE: he is on Shopify (or has
// chosen it) and he wants design. The Standard's own table says that reader
// gets depth and proof of builds early, and must NOT be handed a six-service
// menu, which "reads like we did not listen". So this page carries four
// design disciplines rather than the agency-wide menu on California #8, and
// the case studies sit high.
//
// "He typed this because he already decided he wants a Shopify store designed,
// and still needs to work out who can design one that performs."
//
// ⚠️ Step 01's warning: nothing here may argue against design. The page sells
// design and theme work, so the speed argument is framed as PART of design
// (our live theme page already sells "Performance and Speed Optimization" and
// "App-Free Feature Development"), never as a reason to skip a redesign.
//
// NO OVERLAP WITH CALIFORNIA #8 (/services/shopify-development-agency/
// california), which owns the accessibility, privacy and pricing rules and
// the axe-core scan of the same 26 brands. This page owns theme choice,
// weight and speed. Same sample, different measurements, no shared sentences.
//
// ══ THE RESEARCH, 19-20 September 2026 ═════════════════════════════════════
//
// ── SERP (own teardown, 12 ranking pages across the three keywords) ─────────
//   Digital Silk (CA)      ~1,940 words, case studies, 6 FAQs
//   Digital Silk (Shopify) ~1,723 words, 7 FAQs, one price mention ($205)
//   Bigfolio listicle      ~1,268 words, the only page with a price band
//                          ($8,000 to $60,000+), "off-the-shelf themes work
//                          for hobby stores", claims LA presence
//   Netlynx                ~1,143 words, 6 FAQs, no price
//   Beetechy               ~713 words; Sleepless ~630; Exhibea ~361;
//                          Ecommerce Pro ~276; Realm ~195
//   mgroup blog            ~2,791 words, a directory-style listicle
//   Bitcot, Mad Mind       Cloudflare / 403 to automated rendering
//   Upwork ranks for "shopify theme experts california" (freelancer intent,
//   the Inventory's known pattern for "experts" phrasings).
// THE GAP: no ranking page publishes a single measurement. Two argue that
// stock themes are for hobbyists with nothing behind it. Nobody says what the
// state's own well-known brands actually run, or what their stores weigh.
//
// ── THE SCAN: ORIGINAL OBSERVATION, 19-20 September 2026 ────────────────────
// The same 26 California-headquartered DTC brands as California #8, all on
// Shopify. Two passes:
//   (a) Homepage on an emulated iPhone viewport, Edge, fresh context, bytes
//       counted over the Chrome DevTools Protocol.
//       total transferred: median 7.8 MB, max 33.2 MB, 7 of 26 over 10 MB
//       JavaScript: median 3.4 MB, 16 of 26 over 3 MB
//       requests: median 402
//       third-party script hosts: median 27, max 48
//       hero video above the fold: 6 of 26
//   (b) Lighthouse 12.8.2, mobile form factor, one run each, default
//       simulated throttling:
//       performance score: median 28 of 100; 24 of 26 under 50; 15 under 30;
//         only 2 at 50 or above
//       LCP: median 9.6 s; 25 of 26 over Google's 2.5 s; 12 over 10 s
//       TBT: median 6,556 ms; CLS over 0.1 on 5 of 26
//   (c) Theme, from window.Shopify.theme:
//       20 of 26 expose a Shopify theme; 6 do not (storefront moved off the
//         theme layer)
//       of those 20: 1 still reports a Theme Store id (Shapes); 6 carry a
//         custom name but a Shopify/Theme Store schema underneath (Dawn x4,
//         Sleek, Impact); 13 report their own theme name
//       so 7 of 20 visibly start from a stock theme, 4 of them from Dawn
// LIMITS, stated on the page: homepage only; ONE Lighthouse run per site in a
// lab, not field data, and the collecting machine sits outside the US, so
// treat the seconds as comparable between stores rather than as what a
// shopper in the state gets; a theme name can be renamed, so the theme counts
// are a floor for "started from stock", not a census.
// BRANDS ARE NOT NAMED, same rule as #8.
//
// ── SOURCED FACTS ───────────────────────────────────────────────────────────
// web.dev Core Web Vitals: good LCP within 2.5 s, INP 200 ms, CLS 0.1, at the
//   75th percentile, segmented mobile and desktop.
// HTTP Archive Web Almanac 2025 (CrUX field data): Shopify passes all three
//   CWV on 76% of sites, mobile and desktop. Already cited on the Los Angeles
//   page; reused here because it is the line that stops this page reading as
//   an attack on the platform we build on.
// Google + Deloitte / 55, "Milliseconds make millions": 37 brand sites, 30M+
//   sessions, monitored for 30 days at the end of 2019; a 0.1 s mobile speed
//   improvement moved retail conversion +8.4% and spend +9.2%.
// Shopify's own Dawn repository: "Shopify's first source available reference
//   theme, with Online Store 2.0 features and performance built-in."
//
// ── WHAT WE ACTUALLY OFFER (Step 04 #3) ─────────────────────────────────────
// The live theme page promises: purpose-built themes, theme redesign and
// upgrades, UX/UI improvements, performance and speed optimization ("reduce
// bloat, optimize media"), conversion-focused page structures, flexible
// sections, app-free feature development, Plus enhancements, and a five-step
// process ending in testing across devices and browsers. Everything claimed
// here maps to one of those. No price anywhere, per the owner's standing rule.
//
// ── ROIA (Step 03) ──────────────────────────────────────────────────────────
// ONE READER: owns a Shopify store selling to Californians, 28 to 45, $10-50M,
// has decided he wants design work and is choosing who does it.
// ONE IDEA (12 words): a design is only as good as it is on a phone.
// ONE OFFER, ONE ACTION: every button says "Get in touch with us" to #contact.
//
// ── KEYWORDS (Step 09) ──────────────────────────────────────────────────────
// Primary shapes: h1, "brands use" (quick answer), "shortlist" (asset),
// "brands hire" (disciplines), "pitch" (process), "brands trust" (objection),
// FAQ heading. Secondary 1 in the services FAQ, secondary 2 in the entity FAQ.
// Zero keywords in the conversion block.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Design-led studies, and the four least spent across the geo set:
//   hero image   Feetures (custom theme development)
//   proof        Feetures, Dryrobe, Everlast
//   disciplines  Feetures, Dryrobe, Everlast, Twillory
//   results      111Skin, Sneak Energy, Capelli Sports (signed-off quotes,
//                disjoint from the proof grid)
// None of these appears on California #8.
//
// PRESENCE (Master §4): no claim anywhere. REVIEW: 180 days; the scan is
// dated and Lighthouse scores drift with every redeploy on those stores.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const SHOPIFY_THEME_CALIFORNIA: GeoPage = {
  type: "geo",
  slug: "california",
  path: "/services/shopify-theme-development/california",
  hub: "/services/shopify-theme-development",
  status: "published",

  geo: {
    name: "California",
    type: "state",
    areaServed: "California",
  },
  archetype: ["D"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "shopify web design agency california",
  secondaryKeywords: ["shopify website design services california", "shopify theme experts california"],
  faqKeywords: [
    "how long does a shopify redesign take",
    "custom shopify theme or theme store theme",
    "why is my shopify store slow on mobile",
    "do we lose seo in a shopify redesign",
  ],
  reviewedPhrases: ["in California"],

  // 59 characters.
  metaTitle: "Shopify Web Design Agency California | Themes That Load",
  // 156 characters.
  metaDescription:
    "A Shopify web design agency California brands use for custom themes, redesigns and speed. See what we measured on 26 of the state's best-known stores.",
  shortTitle: "Shopify web design agency California",
  serviceType: "Shopify theme development",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // Owner's pick, 21 September 2026 (option A2 of nine). Says what he gets
  // and where it matters, assumes nothing about his current store, and the
  // last two words carry the hero's gradient.
  h1: "Shopify web design agency California, stores designed to sell on a phone",
  qualifier:
    "Custom themes, redesigns of the theme you have, and the speed work that keeps them quick. You see the scope in writing before any work begins.",

  heroGlow: true,
  heroCtaLabel: "Get in touch with us",
  relatedTone: "white",
  servicesBeforeGradient: true,

  heroImage: {
    cutout: true,
    src: "/images/shopify-web-design-california-hero.webp",
    alt: "Shopify storefronts we designed for Feetures, Dryrobe and Everlast, with results of +32% add to cart and +152% conversion rate",
  },

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on the platform" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "We've built {storesBuilt} stores. Here are a few.",
    subheading: "Sportswear, skincare, confectionery, jewelry. Different catalogs, all designed to be shopped on a phone.",
  },

  assetCtaLabel: "See what we measured",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "A design is signed off on a big screen, in a quiet room, with the images already loaded.\n\nYour customer meets it on a phone, on a patchy signal, behind whatever scripts your apps put in front of it. So we ran Google's own speed test on 26 California stores you'd recognize. The middle one scored 28 out of 100.\n\nEvery number is below, with what we would change first.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is a Shopify web design agency California brands use for custom themes, redesigns and Shopify Plus builds. We design mobile first, then build your theme ourselves. Speed work is part of the design, not a job for afterwards.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // The theme half of the scan. It answers the question the SERP gets wrong,
  // and it earns the place slot because it is about the state's own stores.
  placeLayerHeading: "What the state's best-known stores actually run",
  placeLayer:
    "**Nineteen of the twenty** stores in our scan that show a Shopify theme run a custom one. No surprise there.\n\n**Seven of those started from a stock theme.** Four are built on Dawn, the free theme Shopify ships with every new store and calls its reference for performance. Custom and stock aren't two different worlds. Most good custom work starts from one and rebuilds the parts that earn it.\n\n**Six run no Shopify theme at all.** Their storefront has moved off the theme layer, which is a far bigger project than a redesign and rarely the one you need.\n\nSo the real question isn't custom or stock. It's which parts of your store deserve custom work, and what that work costs you in weight. That's the question to put to anyone you're considering.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "Speed is a design decision before it is a developer's problem",
  gradientLayer:
    "**Google's bar is 2.5 seconds** for your main image to appear, measured on real visits. In our lab test, 25 of the 26 missed it.\n\n**Shopify isn't the reason.** Field data from 2025 has Shopify passing all three of Google's checks on 76% of sites, ahead of every other big platform.\n\n**What gets added on top is.** The middle store in our scan shipped 3.4 MB of JavaScript and pulled scripts from 27 outside companies. Every one of those arrived as a decision, not a fault.\n\n**And the money follows the milliseconds.** A study of 37 retail brands found that taking 0.1 seconds off a mobile site lifted conversion by 8.4%.",
  gradientFacts: [
    {
      id: "web-dev-core-web-vitals-thresholds",
      claim:
        "web.dev, 'Web Vitals': a good Largest Contentful Paint 'should occur within 2.5 seconds of when the page first starts loading'; pages 'should have a INP of 200 milliseconds or less'; pages 'should maintain a CLS of 0.1. or less'. Google recommends measuring at 'the 75th percentile of page loads, segmented across mobile and desktop devices'.",
      url: "https://web.dev/articles/vitals",
      publisher: "web.dev (Google), Web Vitals",
      captured: "2026-09-20",
      reviewAfterDays: 365,
    },
    {
      id: "web-almanac-shopify-cwv-2025",
      claim:
        "HTTP Archive Web Almanac 2025, ecommerce chapter (Chrome CrUX field data): Shopify passes all three Core Web Vitals on 76% of sites on both mobile and desktop, against WooCommerce at 35% mobile and 33% desktop. Shopify mobile detail: good LCP 86%, good INP 90%, good CLS 92%. Cited on the Los Angeles page since 2026-09-02 and reused here.",
      url: "https://almanac.httparchive.org/en/2025/ecommerce",
      publisher: "HTTP Archive Web Almanac 2025, ecommerce chapter",
      captured: "2026-09-20",
      reviewAfterDays: 365,
    },
    {
      id: "deloitte-milliseconds-make-millions",
      claim:
        "'Milliseconds make millions', published on web.dev (last updated 24 June 2020): the study was commissioned by Google and conducted by 55 and Deloitte; the team studied 37 leading European and American brand sites and collected data on over 30 million user sessions, with mobile load times monitored hour by hour for 30 days at the end of 2019. For a 0.1 second improvement in mobile site speed, retail sites saw conversion rates increase 8.4% and consumers spent 9.2% more.",
      url: "https://web.dev/case-studies/milliseconds-make-millions",
      publisher: "web.dev (Google), case study with Deloitte and 55",
      captured: "2026-09-20",
      reviewAfterDays: 365,
    },
    {
      id: "shopify-dawn-reference-theme",
      claim:
        "Shopify's own Dawn repository describes Dawn as 'Shopify's first source available reference theme, with Online Store 2.0 features and performance built-in', and states it 'acts as a reference for building Shopify themes', taking an HTML-first approach that uses JavaScript sparingly. Dawn is the free theme new Shopify stores start on.",
      url: "https://github.com/Shopify/dawn",
      publisher: "Shopify, Dawn theme repository",
      captured: "2026-09-20",
      reviewAfterDays: 365,
    },
    {
      id: "ecw-california-storefront-speed-2026",
      claim:
        "Original observation, 19-20 September 2026. The 26 California-headquartered direct-to-consumer Shopify brands from the California Shopify agency page, homepage only. Pass (a), emulated iPhone viewport in Microsoft Edge with bytes counted over the Chrome DevTools Protocol: total transferred median 7.8 MB, maximum 33.2 MB, 7 of 26 over 10 MB; JavaScript median 3.4 MB with 16 of 26 over 3 MB; median 402 requests; third-party script hosts median 27, maximum 48; hero video above the fold on 6 of 26. Pass (b), Lighthouse 12.8.2 mobile, one run per site with default simulated throttling: performance score median 28 of 100, 24 of 26 under 50, 15 under 30, only 2 at 50 or above; LCP median 9.6 s with 25 of 26 above 2.5 s and 12 above 10 s; Total Blocking Time median 6,556 ms; CLS above 0.1 on 5 of 26. Pass (c), window.Shopify.theme: 20 of 26 expose a Shopify theme and 6 do not; of those 20, one still reports a Theme Store id and six carry a custom name over a Shopify or Theme Store schema (Dawn four times, Sleek, Impact), so 7 of 20 visibly start from a stock theme. Limits: homepage only; a single lab run per site rather than field data, from a machine outside the United States, so the seconds compare stores with each other rather than describing what a shopper in the state gets; themes can be renamed, so the stock-theme count is a floor.",
      url: "https://www.ecommwizards.com/services/shopify-theme-development/california",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-09-20",
      reviewAfterDays: 180,
    },
  ],

  // ── Disciplines: four design jobs, not a six-service menu ─────────────
  disciplines: {
    label: "What we design",
    heading: "Four jobs, and each one is design work with code behind it",
    intro:
      "A Shopify web design agency California brands hire should let you buy the one you need. Each row links to the store it was built for.",
    items: [
      {
        label: "Custom theme",
        heading: "We design a theme around your catalog, then build it in Liquid",
        covers: ["Theme design", "Liquid development", "Online Store 2.0 sections", "Metafields", "Product pages"],
        imageAlt: "A custom Shopify theme we designed and built for the performance sock brand Feetures",
        caseSlug: "feetures-shopify-theme-development",
        cta: { label: "Explore theme development", href: "/services/shopify-theme-development" },
      },
      {
        label: "Redesign",
        heading: "We redesign the store you have and keep what already sells",
        covers: ["Theme redesign", "Navigation", "Size and fit tools", "International stores"],
        imageAlt: "A Shopify Plus redesign we delivered for the outdoor brand Dryrobe",
        caseSlug: "dryrobe-shopify-plus-redesign",
        cta: { label: "Explore store design", href: "/services/shopify-store-development" },
      },
      {
        label: "Speed and weight",
        heading: "We cut the weight your design picked up, without losing the design",
        covers: ["Performance work", "App cleanup", "Media optimization", "Core Web Vitals"],
        imageAlt: "A performance-first Shopify Plus theme rebuild for the boxing brand Everlast",
        caseSlug: "everlast-shopify-plus-sports-redesign",
        cta: { label: "Explore speed work", href: "/services/shopify-speed-optimization" },
      },
      {
        label: "Test and improve",
        heading: "We test the new design against the old one before it rolls out",
        covers: ["A/B testing", "Landing pages", "Upsell layouts", "Analytics"],
        imageAlt: "Conversion design and testing work for the menswear brand Twillory",
        caseSlug: "twillory-shopify-cro",
        cta: { label: "Explore CRO", href: "/services/shopify-cro-agency" },
      },
    ],
  },

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "What 26 of this state's storefronts look like on a phone",
    intro:
      "We opened each homepage on a phone-sized screen, counted what it downloaded, then ran Google's Lighthouse test on it. Brands are counted, not named.",
    renderer: "checklist",
    method: {
      sampleSize: 26,
      window: "one mobile homepage load and one Lighthouse run per brand, 19-20 September 2026",
      captured: "2026-09-20",
      howGathered:
        "Each homepage was loaded on an emulated iPhone screen in Microsoft Edge, and the bytes were counted as the browser downloaded them. Speed scores come from Lighthouse 12.8.2 on its mobile setting, one run per store. That's a lab test, not real visitor data. Our machine also sits outside the US, so compare these stores with each other rather than with your own. Themes were read from each store's own theme information, which an agency can rename, so the stock-theme count is a floor.",
    },
    columns: ["The check", "What we found on 26 stores", "What it means for your design"],
    rows: [
      {
        label: "How fast does your main image appear?",
        cells: ["Median 9.6 seconds, and 12 stores took over 10", "Google's bar is 2.5 seconds"],
        note: "Usually a hero video, a giant image, or a script that has to run before the picture is allowed to load.",
      },
      {
        label: "What does your homepage weigh?",
        cells: ["Median 7.8 MB, heaviest 33 MB", "A phone on a weak signal pays for every megabyte"],
        note: "Hero media is the biggest single piece, and it's the easiest one to fix without touching the design.",
      },
      {
        label: "How much code does it load?",
        cells: ["Median 3.4 MB, and 16 stores over 3 MB", "This is where your apps land"],
        note: "Phones don't just download it, they have to run it. That's what the delay before the page responds is made of.",
      },
      {
        label: "How many outside companies load code?",
        cells: ["Median 27 per store, most 48", "Each one was somebody's decision"],
        note: "Reviews, chat, quizzes, pixels, popups. Worth listing yours and asking which still earns its place.",
      },
      {
        label: "Does the page jump while it loads?",
        cells: ["5 of 26 moved more than Google allows", "Shoppers tap the wrong thing"],
        note: "Almost always an image or banner with no space reserved for it in the layout.",
      },
      {
        label: "What runs underneath the design?",
        cells: ["19 of 20 custom, but 7 built on a stock theme", "Custom or stock is the wrong question"],
        note: "Four of those seven build on Dawn, the free theme Shopify calls its reference for performance.",
      },
    ],
    derived:
      "Read the middle column. Only 2 of the 26 scored 50 or better out of 100, and these are brands with real design budgets.\n\nThat's the useful part. Your store isn't behind because the design is bad. It's behind because weight arrives quietly, one app and one hero video at a time. Run the same test before anyone on your Shopify web design agency California shortlist shows you a moodboard.",
    derivedList: {
      title: "Three checks to run on your own store this week",
      items: [
        "Run Google's PageSpeed Insights on your homepage and your best-selling product page. Note the mobile score.",
        "List every app that loads on the homepage, then mark the ones you'd miss tomorrow.",
        "Open your store on a phone with one bar of signal and count how long the first image takes.",
      ],
    },
    supportingBlocks: [
      {
        heading: "Where the weight actually comes from",
        body:
          "**Hero media.** An autoplaying video is the single heaviest thing on most homepages, and 6 of the 26 run one above the fold.\n\n**Apps you no longer use.** The scripts stay after the trial ends, and they load on every page for every shopper.\n\n**Fonts and icon sets.** Easy to add during design, rarely subset afterwards.\n\n**Images at desktop size.** A phone downloads the full picture and then shrinks it on screen.",
      },
      {
        heading: "What we would change first",
        body:
          "**Your hero.** Poster image first, video after it loads, or no video at all on a phone.\n\n**Your app list.** Remove what's unused, replace what your theme can do natively, keep what earns its keep.\n\n**Reserved space.** Give every image and banner its size in the layout so nothing jumps.\n\n**Then the design work.** Once your store is light, a new look doesn't have to fight the page for the first three seconds.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "What you get whichever job you hire us for",
    // Cream, owner's call 22 September 2026: it follows the white table.
    intro: "Four things that hold for a single template or a full theme.",
    items: [
      {
        title: "You see it on a phone first",
        body: "Layouts are reviewed at phone size before desktop, because that's where most of your shoppers are.",
      },
      {
        title: "Your team can edit it without us",
        body: "Sections and blocks are built so your marketers can change a page without opening the code or calling a developer.",
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
  whatWeDoAboutItHeading: "How a design project starts",
  // Cream, owner's call 22 September 2026: it follows the white quotes block.
  whatWeDoAboutItTone: "cream",
  whatWeDoAboutIt:
    "It starts with the same tests, run on your homepage and your top product page. You get the numbers, the weight, and the list of what's making it heavy.\n\nThen we design. Phone layouts first, then desktop, then the sections your team will use to build pages later. You see the design on a real device before anyone writes Liquid.\n\nWhoever you hire, ask to see that list before a moodboard. Make it the first question in every Shopify web design agency California pitch you sit through.",

  // ── Block 7: Proof ────────────────────────────────────────────────────
  proofHeading: "Three stores we designed and built on Shopify",
  proof: [
    {
      slug: "feetures-shopify-theme-development",
      vertical: "Performance sportswear",
      whatWasBuilt: "A custom theme with product pages built from metafields, so content updates stopped being manual",
      outcome: "+32% add to cart, +19% average order value",
      verified: true,
    },
    {
      slug: "dryrobe-shopify-plus-redesign",
      vertical: "Outdoor apparel",
      whatWasBuilt: "A redesign with a size and activity finder, and three regional stores consolidated into two",
      outcome: "+89% online revenue, -31% returns",
      verified: true,
    },
    {
      slug: "everlast-shopify-plus-sports-redesign",
      vertical: "Sports and fitness",
      whatWasBuilt: "A performance-first theme rebuild with navigation reorganized by sport",
      outcome: "+152% conversion rate, +48% total orders",
      verified: true,
    },
  ],

  // ── Block 8: Objections ───────────────────────────────────────────────
  objectionsHeading: "What you're probably thinking",
  objections: [
    {
      objection: "We already have a designer.",
      answer:
        "Then keep them. Plenty of brands send us finished designs and we build the theme.\n\nWhat we'd ask for is a look at your design on a phone before it's signed off, so the weight is your choice rather than a surprise.",
    },
    {
      objection: "Our brand needs something custom, not a template.",
      answer:
        "Agreed, and that's rarely all-or-nothing. Four of the stores in our scan run on Dawn and still look nothing like each other.\n\nThe parts worth building from scratch are the ones your customers use to choose: the product page, the finder, the cart.",
    },
    {
      objection: "We can't lose our rankings over a redesign.",
      answer:
        "Fair, and that's a real risk when URLs and page structure change. We keep the structure, the redirects and the headings in the plan from the first week, not the last.\n\nAny Shopify web design agency California brands trust should show you that plan before the design.",
    },
  ],

  // ── Client quotes ─────────────────────────────────────────────────────
  // Three more brands, disjoint from the proof grid, each with a signed-off
  // quote in lib/case-studies.ts. Keeps the run of copy sections apart
  // (Standard Step 08).
  results: {
    heading: "Three more stores, in the owners' own words",
    intro:
      "Different brands from the ones above. Each number links to its case study, so you can check it.",
    slugs: [
      "111skin-shopify-cro-redesign",
      "sneak-energy-shopify-redesign",
      "capelli-sports-shopify-migration",
    ],
    headlines: {
      "111skin-shopify-cro-redesign": "{brand} lifted conversion 46% on a custom theme with a skin finder",
      "sneak-energy-shopify-redesign": "{brand} took mobile conversion up 68% with the store loading in under 2.9 seconds",
      "capelli-sports-shopify-migration": "{brand} came out of a Shopify Plus move 38% faster, keeping 95% of its SEO equity",
    },
  },

  // ── Block 9: FAQ ──────────────────────────────────────────────────────
  faqs: [
    {
      question: "How long does a Shopify redesign take?",
      answer:
        "Most stores launch in 6 to 10 weeks, and a simple direct-to-consumer build takes around 6. A single template on your store, like a product page, is quicker than that.",
      unique: true,
    },
    {
      question: "Should we build a custom theme or start from a Theme Store one?",
      answer:
        "Both are normal. In our scan, 7 of the 20 stores on a Shopify theme were built on a stock one, four of those on Dawn. Start from stock where it already does the job, and build custom where your customers choose.",
      unique: true,
    },
    {
      question: "Why is our store slow on mobile when Shopify is meant to be fast?",
      answer:
        "Because most of the weight isn't Shopify's. The Web Almanac has Shopify passing all three of Google's speed checks on 76% of sites. In our scan the middle store shipped 3.4 MB of JavaScript and pulled scripts from 27 outside companies, and that's what your shoppers wait for.",
      unique: true,
    },
    {
      question: "Will a redesign cost us our search rankings?",
      answer:
        "Not if your URLs, redirects and page structure are planned with the design. That's the part that goes wrong when design and development are split across two suppliers.",
      unique: true,
    },
    {
      question: "Which of your Shopify website design services California brands ask for most?",
      answer:
        "Usually one template rather than the whole store. A product page or a collection page, designed, built and measured, then the rest once you've seen the result.",
      unique: true,
    },
    // Entity-shaped, carrying the second secondary keyword.
    {
      question: "Are you Shopify theme experts California brands can hire remotely, or do we need someone local?",
      answer:
        "Yes, and we're remote, with no office in the state. Theme work is our day job: Liquid, Online Store 2.0 sections and the speed work that follows. Your project runs the same way wherever you are.",
      unique: true,
    },
    {
      question: "What does a Shopify web design agency California project usually include?",
      answer:
        "Design for phone and desktop, the theme build in Liquid, and the speed work that keeps it quick. You see the scope in writing before anything starts.",
      unique: true,
    },
    // Added 21 September 2026 after the owner's Semrush export: two ranking
    // pages answer "what results can I expect" and this page didn't. Answered
    // with published case-study figures rather than a promise (Step 04 #3).
    {
      question: "What results can we expect from a redesign?",
      answer:
        "Nobody can promise you a number, and it's worth being wary of anyone who does. What we can show you is what happened on three stores: add to cart up 32%, online revenue up 89%, conversion rate up 152%. Yours starts with the measurements, so you see the change rather than take our word for it.",
      unique: true,
    },
    {
      question: "Can you work with our existing theme instead of replacing it?",
      answer:
        "Yes, and that's most of what we do. We redesign templates inside the theme you already run, which keeps your settings, your content and your team's habits.",
      unique: true,
    },
  ],

  // ── Block 10: Conversion ──────────────────────────────────────────────
  // Step 09: zero keywords here, and no place name either.
  conversion: {
    heading: "Send us your store and we'll run the same tests",
    whatYouGet:
      "Send the link. We'll run the speed test, weigh your page, and send back what's making it heavy and what we'd change first.",
    whatWeWillTellYouNotToDo:
      "If your store is heavy, don't start with a new look. A redesign on top of the same weight launches slow on day one, and you'll be told it's the design.",
    responseExpectation: "You'll hear back from a developer within a working day.",
    audit: {
      transition: "The same two tests from the table, run on your store.",
      offer: "Put your homepage in the form. We'll test it and hand you the findings:",
      parts: [
        "Your mobile speed score, and the number Google wants instead.",
        "What your homepage weighs, and which pieces are the heaviest.",
        "Every outside script that loads, so you can decide what stays.",
      ],
      limit: "It stops at the findings, and you can take them to any developer.",
      noObligation: "No charge, and the report is yours either way.",
    },
  },

  sources: [],

  // Owner's standing instruction for these pages: below 2,500 words.
  wordCountTarget: [2000, 2500],
};
