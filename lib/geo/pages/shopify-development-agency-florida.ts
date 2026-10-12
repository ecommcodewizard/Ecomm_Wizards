// Batch 1, Florida #19: /services/shopify-development-agency/florida
// Inventory: Geo Inventory & Batch Plan, Florida state row ("shopify agency
// florida", 10/mo, KD 1, no secondaries assigned). Two more Florida state pages
// are still to come (ecommerce-agency/florida, ecommerce-seo-agency/florida), so
// this page leaves platforms and search to them.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// ── STEP 01, THE INTENT ─────────────────────────────────────────────────────
// "He typed this because he already decided he's on Shopify and wants an
// agency, and still needs to work out which job to give it and who to trust."
// So the menu comes early, the H1 stays broad, and nothing guesses which part
// of his store is the problem.
//
// ── ROIA (Step 03) ──────────────────────────────────────────────────────────
// ONE IDEA (15 words), set by the owner on 12 October 2026: hire the agency
// that builds it right and launches on the date it gave you. Reliable and
// technically solid is the premium position. Every section serves it:
//   hook / quick answer   the claim, and how we'll prove it
//   segments              where a weak build gives way, by kind of store
//   proof + disciplines   the work, seven jobs, one standard
//   gradient + asset      what a solid build is, and seven questions to check it
//   how we work           the promises that make it reliable, all published
//   objections / results  doubts answered, then owners vouching
//   how a job starts      the read, then a date in writing
// ONE OFFER, ONE ACTION: the free read of his store; every button says
// "Get in touch with us" and goes to #contact.
//
// HURRICANE SEASON appears ONCE, in the hook, as a sign we know the market.
// Owner's ruling 12 October 2026: it is not the argument and must not spread.
// The first draft built the page on it and was rejected as weak positioning.
//
// ARCHETYPE: ["D"], recorded as on California, the nearest defined letter.
//
// ── COMMITMENTS (Step 04 #3) ────────────────────────────────────────────────
// Every promise traces to copy already live on ecommwizards.com:
//   go-live date confirmed before any code   /services/shopify-development-agency
//   scope and timeline in writing in 48 hours   same page
//   version control, end-to-end QA, cross-device testing   same page
//   accessibility checks before handover   /services/shopify-store-development
//   6 to 10 week builds   /services/shopify-store-development
// NO PRICES, following the owner's California ruling of 19 September 2026.
// The most-asked buyer question ("how much does a Shopify agency cost") is
// therefore deliberately absent from the FAQ.
//
// ── FAQ (AEO) ───────────────────────────────────────────────────────────────
// Built from what buyer guides ranking for "how to choose a Shopify agency"
// keep asking (searched 12 October 2026): how to choose, who owns the code,
// how long, whether Plus is needed, migration without losing rankings, support
// after launch. Each answer opens with the direct answer so it can be lifted
// whole. searchIntent and quickAnswer are the GEO passages.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
//   hero        Twillory, Dryrobe, NEOM, with two results
//   proof       NEOM, Henchman, Dryrobe
//   disciplines Dryrobe, Henchman, John Hardy, Twillory, Prose (creative,
//               first use on any geo page), Evie Lou (SEO, AEO and GEO as one
//               row, owner's call 13 October 2026), Loop
//
// LOCATION, owner's ruling 13 October 2026: never claim to be in Florida and
// never say outright that we aren't. No office FAQ, no "we work remotely",
// no objection about hiring locally. validate-content's optional office-FAQ
// WARN is expected on this page for that reason.
//   results     John Hardy, Candy Kittens, 111Skin (disjoint from proof)
//
// PRESENCE: none claimed. REVIEW: 180 days; Shopify's checkout dates are fixed
// history but its docs move.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const SHOPIFY_DEV_FLORIDA: GeoPage = {
  type: "geo",
  slug: "florida",
  path: "/services/shopify-development-agency/florida",
  hub: "/services/shopify-development-agency",

  geo: {
    name: "Florida",
    type: "state",
    areaServed: "Florida",
  },
  archetype: ["D"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "shopify agency florida",
  secondaryKeywords: [],
  faqKeywords: [
    "how do i choose a shopify agency",
    "how long does it take to build a shopify store",
    "who owns the code after a shopify build",
    "do i need shopify plus",
    "can you migrate to shopify without losing seo",
    "what happens after a shopify store launches",
  ],


  metaTitle: "Shopify Agency Florida | Built Right and Launched on Time",
  metaDescription:
    "A Shopify agency Florida brands hire to design, build, migrate and grow. Launch dates in writing before any code, plus version control and testing on every build.",
  shortTitle: "Shopify agency Florida",
  serviceType: "Shopify agency",

  // ── Hero ──────────────────────────────────────────────────────────────
  h1: "Shopify agency Florida brands hire for stores built right and launched on time",
  qualifier:
    "Design, build, migration, SEO, testing, creative and retention on Shopify and Shopify Plus. You can take one of them or all seven. The scope and the launch date are in writing before any code is written.",

  // Built by scratchpad fl-hero.html, rendered in headless Edge at 2x on a
  // transparent background and exported at 1400px. New filename for every
  // revision, never an overwrite: next/image caches per path.
  heroImage: {
    cutout: true,
    src: "/images/shopify-agency-florida-hero-v1.webp",
    alt: "Shopify stores we built and grew for Twillory, Dryrobe and NEOM Wellbeing, with results of +89% online revenue for Dryrobe and $5.4M in new annual revenue for Twillory",
  },
  heroGlow: true,
  heroCtaLabel: "Get in touch with us",
  assetCtaLabel: "See the seven questions",
  segmentsReplacePlace: true,
  servicesBeforeGradient: true,
  relatedTone: "white",

  heroStats: [
    { value: BRAND_STATS.storesBuilt, label: "Stores built" },
    { value: BRAND_STATS.revenue, label: "Revenue generated" },
    { value: BRAND_STATS.years, label: "Years on Shopify" },
    { value: BRAND_STATS.rating, label: "Average client rating" },
  ],

  trust: {
    heading: "{storesBuilt} stores built, each with a go-live date set before the first line of code.",
    subheading: "Outdoor gear, menswear, wellness, food, tools. Pick the one closest to yours.",
  },

  // ── Hook ──────────────────────────────────────────────────────────────
  // The page's one mention of hurricane season (owner's ruling). It shows we
  // know the market, then turns straight to the argument.
  hook:
    "Running a brand from Florida means planning around a lot. Six months of hurricane season, for a start. Your store shouldn't be one more thing you have to watch.\n\nThat comes down to two things. How well the store was built, and whether it launched when you were told it would. Both are easy to promise and easy to check, so we'd rather show you.\n\nBelow are the stores we've built, the jobs we take on, and seven questions to ask any agency on your list, us included.",

  // ── GEO passage ───────────────────────────────────────────────────────
  // Written to be lifted whole by AI answers. Plain and declarative on purpose.
  // The separate "This page is for..." searchIntent block was cut on the
  // owner's call, 13 October 2026.
  quickAnswer:
    "Ecomm Wizards is a Shopify agency Florida brands hire to design, build, migrate and grow their stores on Shopify and Shopify Plus. We've built more than 150 stores. Every project gets its scope and launch date in writing before any code is written. Every theme is in version control and tested across devices before it goes live on your store.",

  // ── Segments, in the place slot (as on California) ──────────────────
  // A state page can only say something about the place by naming cities,
  // which the owner ruled out on California. This slot instead shows the
  // technical depth the argument rests on: where each kind of store gives way.
  segments: {
    heading: "Every kind of store breaks somewhere different. We build for where yours would.",
    intro:
      "Six kinds of store we've built. Find yours, then see what a solid build gets right and where a weak one gives way.",
    items: [
      {
        icon: "apparel",
        name: "Clothing and swimwear",
        what: "Size, color and fit live in your product options, so filters, search and shopping feeds can all read them.",
        breaks: "New colors added as separate products, so shoppers can't filter to the one they want.",
      },
      {
        icon: "beauty",
        name: "Beauty and skincare",
        what: "Your shades and sets sit on one product page, with images sized to load fast on a phone.",
        breaks: "Three swatch and review apps stacked up, each loading its own code on every page.",
      },
      {
        icon: "consumable",
        name: "Food, drink and supplements",
        what: "Your bundles, subscriptions and reorders run as one path, from the product page through checkout to the emails.",
        breaks: "A subscription app added late, so the checkout and the reorder email disagree on the price.",
      },
      {
        icon: "outdoor",
        name: "Outdoor, marine and sporting goods",
        what: "The specs your shoppers compare, like weight, length and rating, are kept as structured product data.",
        breaks: "Specs typed into descriptions, where filters, search and Google can't use them.",
      },
      {
        icon: "jewelry",
        name: "Jewelry and accessories",
        what: "Zoom and engraving are built so each order arrives just as your shopper saw it.",
        breaks: "Engraving text saved in an order note your warehouse never sees.",
      },
      {
        icon: "wholesale",
        name: "B2B and wholesale",
        what: "Trade prices, minimums and fast reorders run on the same store, synced with your ERP.",
        breaks: "Wholesale orders retyped by hand because the store and the ERP don't talk.",
      },
    ],
  },

  // ── Proof ─────────────────────────────────────────────────────────────
  proofHeading: "Built properly, the numbers follow. Three stores that show it.",
  proof: [
    {
      slug: "neom-wellbeing-shopify-upgrade",
      vertical: "Wellness",
      whatWasBuilt: "A Shopify upgrade running the online store and four retail hubs on one setup",
      outcome: "+34% checkout conversion, +10% order volume",
      verified: true,
    },
    {
      slug: "henchman-shopify-plus-b2b",
      vertical: "Tools and B2B",
      whatWasBuilt: "A Shopify Plus store wired to the ERP, so wholesale orders stopped needing manual entry",
      outcome: "+58% online revenue, 70% less time spent processing wholesale orders",
      verified: true,
    },
    {
      slug: "dryrobe-shopify-plus-redesign",
      vertical: "Outdoor apparel",
      whatWasBuilt: "Three separate stores pulled into one Shopify Plus build",
      outcome: "+89% online revenue, +23% checkout completion, 31% fewer returns",
      verified: true,
    },
  ],
  proofCta: {
    text: "Want a build like these on your own store?",
    label: "Get in touch with us",
  },

  // ── Service menu (he hasn't picked a job) ─────────────────────────────
  // No body lines: this row has no secondaries to house (owner's 2026-09-05
  // ruling). Each heading says what the job is and why us.
  disciplines: {
    label: "What we do",
    heading: "Seven jobs we take on, all held to the same standard of build",
    intro:
      "Each row opens the store the work was done for. Any Shopify agency Florida brands shortlist should let you start with one job and add the rest later.",
    items: [
      {
        label: "Design and build",
        heading: "We build storefronts your team can run without calling a developer",
        covers: ["Theme development", "Product pages", "Checkout", "Store consolidation", "Accessibility checks"],
        imageAlt: "One Shopify Plus store we built for the outdoor brand Dryrobe out of three separate ones",
        caseSlug: "dryrobe-shopify-plus-redesign",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Custom development",
        heading: "We connect your store to your ERP and warehouse, so orders move without retyping",
        covers: ["Integrations", "ERP and inventory", "Custom features", "Shopify Plus", "Checkout extensions"],
        imageAlt: "A Shopify Plus store connected to its ERP for the tools brand Henchman",
        caseSlug: "henchman-shopify-plus-b2b",
        cta: { label: "Explore custom development", href: "/services/shopify-store-development" },
      },
      {
        label: "Migration",
        heading: "We move you to Shopify on the date we agreed, with every old URL redirected",
        covers: ["Platform migration", "Redirect mapping", "Customer and order data", "Shopify Plus"],
        imageAlt: "A replatform onto Shopify Plus delivered before Black Friday for the jewelry brand John Hardy",
        caseSlug: "john-hardy-shopify-plus-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "CRO",
        heading: "We test changes on real shoppers and keep only the ones that sell more",
        covers: ["A/B testing", "Product pages", "Bundles and upsells", "Analytics"],
        imageAlt: "A testing program on product pages and bundles for the menswear brand Twillory",
        caseSlug: "twillory-shopify-cro",
        cta: { label: "Explore CRO", href: "/services/shopify-cro-agency" },
      },
      {
        label: "Creative strategy",
        heading: "We make the ads, test them against each other, and put your budget behind the winners",
        covers: ["Ad creative", "Paid social", "Creative testing", "Creator content"],
        imageAlt: "Ad creative we made and tested for the haircare brand Prose",
        caseSlug: "prose-creative-strategy",
        cta: { label: "Explore creative strategy", href: "/services/creative-strategy" },
      },
      {
        label: "SEO, AEO and GEO",
        heading: "We get your products found on Google, in its AI answers and in ChatGPT",
        covers: ["Technical SEO", "Collection pages", "Product page SEO", "AI answers (AEO)", "AI search (GEO)"],
        imageAlt: "Product and collection pages we optimized for search for the womenswear brand Evie Lou",
        caseSlug: "evie-lou-shopify-fashion-cro",
        cta: { label: "Explore Shopify SEO", href: "/services/shopify-seo-agency" },
      },
      {
        label: "Email and retention",
        heading: "We build the emails and quizzes that bring a customer back for the second order",
        covers: ["Klaviyo", "Product quizzes", "Email flows", "Repeat orders"],
        imageAlt: "A product quiz and personalized email built for the earplug brand Loop",
        caseSlug: "loop-earplugs-shopify-landing-page-cro",
        cta: { label: "Explore retention work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },
  servicesCta: {
    text: "Need just one of these? That's fine. Tell us what's on your list and we'll say where we'd begin.",
    label: "Get in touch with us",
  },

  // ── Gradient: what a solid build is ───────────────────────────────────
  gradientLayerHeading: "A weak build and a solid one look the same on launch day. The difference shows up later.",
  gradientLayer:
    "**It's in where things live.** Apps built as theme app extensions [link:https://shopify.dev/docs/apps/build/online-store/theme-app-extensions|don't edit theme code], per Shopify's own docs. Older apps, and a lot of custom work, write straight into your theme files. That code is part of your theme now, and it stays until somebody takes it out.\n\n**And in what it's built on.** Shopify [link:https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid|retired checkout.liquid] on the thank-you and order status pages on August 28, 2025. Script tags on those pages ended for non-Plus stores on August 26, 2026. Anything built the old way there stopped working.\n\n**So ask before you hire.** Any Shopify agency Florida brands trust with a build should tell you where each feature will live and what it's built on. If they can't, you'll find out when it breaks.",
  gradientFacts: [
    {
      id: "nhc-season-dates",
      claim:
        "National Hurricane Center, Tropical Cyclone Climatology (nhc.noaa.gov/climo), read 12 October 2026: the Atlantic hurricane season officially runs 'from June 1 to November 30'. Supports 'six months of hurricane season' in the hook, the page's only mention of it.",
      url: "https://www.nhc.noaa.gov/climo/",
      publisher: "NOAA National Hurricane Center",
      captured: "2026-10-12",
      reviewAfterDays: 365,
    },
    {
      id: "shopify-theme-app-extensions",
      claim:
        "Shopify developer docs, 'Theme app extensions', read 12 October 2026: 'Apps built in the theme app extension framework don't edit theme code', and merchants 'won't need to manually edit their theme code'; app blocks are added to sections in the theme editor. The page draws only the contrast: code an app or developer writes into theme files is part of the theme until removed. Community reports that uninstalling older apps leaves code behind (community.shopify.com/t/5013) were read but are not cited on the page.",
      url: "https://shopify.dev/docs/apps/build/online-store/theme-app-extensions",
      publisher: "Shopify developer documentation",
      captured: "2026-10-12",
      reviewAfterDays: 180,
    },
    {
      id: "shopify-checkout-liquid-sunset",
      claim:
        "Shopify developer docs, 'checkout.liquid', read 12 October 2026: 'checkout.liquid and additional scripts were sunset for the Thank you and Order status pages on August 28, 2025.' 'Script tags were sunset on those pages on August 28, 2025 for Plus stores, and are sunset for non-Plus stores on August 26, 2026.'",
      url: "https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid",
      publisher: "Shopify developer documentation",
      captured: "2026-10-12",
      reviewAfterDays: 365,
    },
    {
      id: "shopify-github-integration",
      claim:
        "Shopify developer docs, 'Shopify GitHub integration for themes', read 12 October 2026: connecting a GitHub branch to a theme syncs code both ways, so changes made in the Shopify admin are committed back to the branch and the branch and theme always match.",
      url: "https://shopify.dev/docs/storefronts/themes/tools/github",
      publisher: "Shopify developer documentation",
      captured: "2026-10-12",
      reviewAfterDays: 180,
    },
    {
      id: "shopify-url-redirects",
      claim:
        "Shopify Help Center, 'URL redirects', read 12 October 2026: 'URL redirects can be used to redirect traffic from one web page to another'; 'You can redirect only from broken URLs'; '301 redirects are cached by browsers and search engines.'",
      url: "https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect",
      publisher: "Shopify Help Center",
      captured: "2026-10-12",
      reviewAfterDays: 180,
    },
  ],

  // ── Only-Here Asset: seven questions ──────────────────────────────────
  asset: {
    title: "Seven questions that tell you whether a Shopify build will hold up",
    intro:
      "Ask these of any agency on your list, us included. The middle column is what a solid answer sounds like. Each one is an answer we'll put in writing.",
    renderer: "checklist",
    tone: "white",
    method: {
      captured: "2026-10-12",
      howGathered:
        "We wrote these from Shopify's own help and developer pages, read on 12 October 2026, and from the promises already on our own site. Nothing here is a ranking of other agencies. It's a list of questions, and what a careful answer looks like, so you can judge the ones you get.",
    },
    columns: ["Ask any agency", "A solid answer", "Why it matters"],
    rows: [
      {
        label: "When will it go live?",
        cells: ["A date in writing, set before any code is written", "A date picked after the work starts tends to move with it"],
      },
      {
        label: "Where will each feature live?",
        cells: ["In app blocks or theme sections you can switch off", "Code written into theme files stays there until someone removes it"],
      },
      {
        label: "Is the theme in version control?",
        cells: ["Yes, linked to GitHub, so every change can be traced and undone", "Shopify's GitHub link keeps the code and the live theme in step"],
      },
      {
        label: "Can our team edit pages without you?",
        cells: ["Yes, with sections and blocks in the theme editor", "If every small change needs a developer, you'll pay for each one"],
      },
      {
        label: "What happens to our old URLs?",
        cells: ["Every one mapped to a new page, with redirects set before launch", "Shopify only redirects a URL once it breaks, so the map must be ready on day one"],
      },
      {
        label: "Is anything built on code Shopify retired?",
        cells: ["No. Checkout work uses checkout extensions", "checkout.liquid and script tags on the thank-you page are gone"],
      },
      {
        label: "How is it tested before launch?",
        cells: ["On phones and desktop browsers, with accessibility checks", "Your customers shouldn't be the ones who find the bug"],
      },
    ],
    derived:
      "Every answer in the middle column is one we'll give you in writing before a project starts.\n\nNone of them is hard to say. What matters is whether the agency means it, and the first two rows show that fastest. A Shopify agency Florida brands can rely on should be glad you asked.",
    reviewAfterDays: 180,
  },
  midCta: {
    text: "Want these seven answered for your own store? Send the address and we'll go through each one.",
    label: "Get in touch with us",
  },

  // ── How we work: the reliability promises ────────────────────────────
  // Every item is already published on ecommwizards.com (see header).
  howWeWork: {
    heading: "Four promises that make a launch date mean something",
    tone: "white",
    intro: "They hold on a one-day fix and on a full build.",
    items: [
      {
        title: "The date comes before the code",
        body: "After the first call you get the scope and timeline in writing within 48 hours. The go-live date is set before anyone writes a line of code.",
      },
      {
        title: "Every change is tracked",
        body: "Your theme sits in version control, so every change has a record and can be undone. Nothing goes live by accident.",
      },
      {
        title: "It's tested before you see it live",
        body: "Every build goes through QA on phones and desktop browsers, with accessibility checks, before it's handed over.",
      },
      {
        title: "Your store stays in your name",
        body: "The theme, the code, the app accounts and the customer data are yours. Nothing sits with us that you'd have to ask for back.",
      },
    ],
  },

  // ── Objections (three) ────────────────────────────────────────────────
  objectionsHeading: "What you'd want answered before you sign",
  objections: [
    {
      objection: "Our last agency went quiet after launch.",
      answer:
        "That's the risk with any agency, so we build for it. Your theme is in version control, the work is documented, and everything is in your name.\n\nKeep us on for support, or hand the store to someone else. Ask every Shopify agency Florida search turns up whether they'd say the same.",
    },
    {
      objection: "Our last agency missed its launch date.",
      answer:
        "Then ask us for ours first. You'll have it in writing before any code is written.\n\nJohn Hardy came to us with a Black Friday deadline and a move to Shopify Plus. It went live in under three months, on time.",
    },
    {
      objection: "We only need a small fix, not a rebuild.",
      answer:
        "Then that's the job. A small fix gets the same written scope, the same version control and the same checks before release.\n\nIf the rest of your store is solid, we'll tell you to leave it alone.",
    },
  ],

  // ── Client quotes ─────────────────────────────────────────────────────
  // Disjoint from the proof grid. Headlines use each study's published numbers.
  results: {
    heading: "Three more owners on what changed after we shipped",
    intro:
      "Before you choose a Shopify agency Florida brands vouch for, hear from three more clients. Each number links to its case study, so you can check it.",
    slugs: ["john-hardy-shopify-plus-migration", "candy-kittens-shopify-food-beverage-cro", "111skin-shopify-cro-redesign"],
    headlines: {
      "john-hardy-shopify-plus-migration": "{brand} moved to Shopify Plus in under three months and launched before Black Friday",
      "candy-kittens-shopify-food-beverage-cro": "{brand} added $8.1M in new annual revenue, with conversion up 182%",
      "111skin-shopify-cro-redesign": "{brand} grew repeat purchases 41% and conversion 46%",
    },
  },

  // ── How a job starts ──────────────────────────────────────────────────
  whatWeDoAboutItHeading: "Every job starts the same way. We read your store, then give you a date.",
  whatWeDoAboutIt:
    "We start with your store as it is. The theme, the apps, the checkout, and any code left behind by apps you've since removed.\n\nYou get that back as a list: what's solid, what's fragile, and the first change we'd make. If you hire us, the scope and timeline arrive in writing within 48 hours of the call, and the go-live date is set before any code is written.\n\nAsk every Shopify agency Florida brands shortlist for the same. It's the quickest way to see who's careful.",
  processCta: {
    text: "The read of your store is free, and you keep the list whether you hire us or not.",
    label: "Get in touch with us",
  },

  // ── FAQ (AEO) ─────────────────────────────────────────────────────────
  // Each answer opens with the direct answer. No links: FAQPage JSON-LD
  // carries answer text raw.
  faqHeading: "Questions brands ask before hiring a Shopify agency",
  faqs: [
    {
      question: "How do I choose a Shopify agency?",
      answer:
        "Ask each one for a launch date in writing, where custom features will live in your theme, and who owns the code. Then open stores they built that are still live. Those answers tell you more than a portfolio page.",
      unique: true,
    },
    {
      question: "How long does it take to build a Shopify store?",
      answer:
        "Most new Shopify stores launch in 6 to 10 weeks. A migration or a large custom build can take longer. Either way, you get the date in writing before any code is written.",
      unique: true,
    },
    {
      question: "Who owns the code and the store after launch?",
      answer:
        "You do. The theme, the code, the app accounts and the customer data are all in your name. If you move on, nothing stays with us.",
      unique: true,
    },
    {
      question: "Do we need Shopify Plus?",
      answer:
        "Most brands don't. Plus earns its place for checkout changes, B2B, several storefronts and very high order volume. We'll tell you whether your plans need it before you pay for it.",
      unique: true,
    },
    {
      question: "Can you move us to Shopify without losing our Google rankings?",
      answer:
        "That's what the redirect map is for. We match every old URL to its new page and set the redirects before launch, so your shoppers and search engines land in the right place.",
      unique: true,
    },
    {
      question: "Can you work on our existing Shopify theme?",
      answer:
        "Yes. We copy your theme first, so your live store is never where we test. Most of our work is on stores that are already running.",
      unique: true,
    },
    {
      question: "What happens after the store launches?",
      answer:
        "You can keep us on for support or take the store in-house. Either way, the code is in version control and documented, so anyone you hire can pick it up.",
      unique: true,
    },
    {
      question: "What should a Shopify agency Florida brands hire put in writing?",
      answer:
        "The scope, the timeline and the go-live date, all before any code is written. Ask who owns the code as well. If any of it is only said on a call, ask for it in writing before you sign.",
      unique: true,
    },
    {
      question: "Are you a Shopify agency Florida brands can hire for one job?",
      answer:
        "Yes. You can hire us for one fix, one feature or a whole build. Each one gets its scope written down before we start, whatever the size.",
      unique: true,
    },
    {
      question: "Do you do SEO, creative and email as well as builds?",
      answer:
        "Yes. SEO for Google and AI answers, creative strategy, email and retention, and conversion testing are all on the menu. You can take them with a build or on their own.",
      unique: true,
    },
  ],

  // ── Conversion ────────────────────────────────────────────────────────
  // Step 09: zero keywords and no place name in this block.
  conversion: {
    heading: "Send us your store address. We'll tell you what's solid and what isn't.",
    whatYouGet:
      "We read your theme, apps and checkout, then send back what's solid, what's fragile and what to change first.",
    whatWeWillTellYouNotToDo:
      "If part of your store is working, we'll tell you to leave it alone, even if it isn't how we'd have built it.",
    responseExpectation: "A developer replies within one working day.",
    audit: {
      transition: "The seven questions from the table, answered for your store.",
      offer: "Put your store address in the form, and you'll get back:",
      parts: [
        "What's solid in your build, and what's fragile.",
        "Any leftover code from apps you've removed, and anything built on code Shopify has retired.",
        "The first change we'd make, and what we'd leave alone.",
      ],
      limit: "You get the findings, with nothing else attached.",
      noObligation: "It's free, and nobody follows up to push a sale.",
    },
  },

  sources: [],
  wordCountTarget: [2000, 2500],
};
