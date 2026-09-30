// Batch 1b, page 26: /services/shopify-development-agency/minneapolis
// Inventory: Geo Inventory & Batch Plan v4.0, row #26. PRIMARY ONLY.
// Copy: docs/ecomm-wizards-page-standard.md, the governing copy document.
//
// Primary keyword: "shopify agency minneapolis". The inventory says 10/mo;
// SEMrush says 90/mo at KD 1%, which makes this the highest-volume and easiest
// keyword in the programme so far. GKP remains the figure of record, but the
// gap is recorded because it argues for spending effort here.
//
// ── ARCHETYPE: DERIVED, NOT ASSIGNED ────────────────────────────────────────
// Master §5.10 assigns Minneapolis NO archetype. It appears in none of A to G
// and in none of the primary/secondary examples. Master §5.9 gives it retail
// heritage, medical device and apparel.
// Derived here as A, vertical-led on apparel, which Master describes as "what
// [vertical] brands here get wrong on Shopify, configuration-level, not
// generic". That is exactly the spine below. Row #27 (ecommerce agency
// minneapolis) must therefore take a DIFFERENT emphasis per the same section's
// rule; medical device and retail heritage are both still free for it.
//
// ── STEP 01 DECIDES THE SHAPE ───────────────────────────────────────────────
// "shopify agency <city>": he IS on Shopify, and has NOT picked a service. So
// unlike Raleigh #25 this page may speak Shopify freely, and like it, the
// service menu comes early because he has not said which service he wants.
//
// ── ONE IDEA (17 words) ─────────────────────────────────────────────────────
// Minnesota does not tax clothing. It taxes the accessories tab, and that is a
// per-product setting.
//
// ONE OFFER, TWO DOORS, ONE ACTION: every inline button says "Get in touch with
// us" and resolves to #contact.
//
// ── WHAT IS ALREADY TAKEN ───────────────────────────────────────────────────
// Austin owns the four kinds of company sharing one job title. Boston owns
// product-page data. California owns knowing what your store fails. Los Angeles
// owns the look that makes the store slow. New York owns agencies that stop
// delivering after the pitch. Orange County owns dealers who came first. San
// Diego owns subscription lock-in AND auto-renewal law. Raleigh #24 owns the two
// kinds of app; Raleigh #25 owns the category page and load order.
// NOTE ON SHAPE: San Diego is the other law-led page in the set. Different
// state, different statute, different vertical and a different failure, and
// Master §5.11 says shared structure is intended while shared content is not.
// Flagged to the owner before the build and approved.
//
// ══ THE RESEARCH ════════════════════════════════════════════════════════════
//
// ── SERP, 30 September 2026 ─────────────────────────────────────────────────
// PASS 1, a live search, again returned the wrong set: only 2 of 9 URLs
// overlapped the real one. Recorded so it is not trusted again.
// PASS 2, the owner's SEMrush export. Volume 90/mo, KD 1%, SERP features
// reviews and PEOPLE ALSO ASK.
//
// Almost no authority in the set. Page Authority Score reads 0, 8, 5, 44, 0, 0,
// 0, 7, 0 across the nine; only Clutch, a directory, carries 44. Referring
// domains are 0 for six of them.
//
// Seven readable. Section frequency: pricing 6/7, case studies 6/7, local claim
// 2/7, certifications 2/7, industries 2/7, team 2/7, process 1/7.
// MEASUREMENT PUBLISHED: 0 of 7. One page flagged and was checked by hand; the
// hit was Clutch saying "our research team curates rankings by weighing
// verified reviews", which is a directory describing its own ranking method,
// not original research.
//
// TWO FINDINGS THAT SHAPED THIS PAGE:
//   LOCAL IS NOT THE MOAT HERE. Only 2 of 7 claim a Minneapolis presence,
//   against 5 of 5 on Raleigh. The problem that dominated that page barely
//   exists on this one.
//   SIX OF SEVEN ARE MULTI-PLATFORM GENERALISTS ON A SHOPIFY KEYWORD. Seven
//   name Shopify, six also name WooCommerce, six Magento, four BigCommerce.
//   Only one is Shopify-only. Being a specialist is the differentiator, and
//   this is the one keyword where saying so answers the reader.
// AND: 0 of 7 mention sales tax, taxable, tax-exempt or nexus. Checked page by
// page. The lane is completely open.
//
// ── SOURCED FACT ────────────────────────────────────────────────────────────
// Minnesota Department of Revenue: clothing is exempt, with four taxable
// exception classes. Verified before the spine was chosen, not after.
//
// ── ORIGINAL OBSERVATION, 30 September 2026 ─────────────────────────────────
// If taxability is per-product, the question is how many catalogs hold both
// kinds. 34 apparel and outdoor stores attempted, 26 read, from each store's
// own public product feed as JSON. No markup parsing and no per-site tuning,
// which is why this held up where the Raleigh filter scan did not.
//
//   Sell BOTH exempt and taxable in one catalog   21 of 26
//   Median taxable share of catalog                2%
//   Highest taxable share                         32%
//   Taxable items that were accessories          480 of 516
//   Sports equipment / protective / fur           17 / 17 / 2
//   Stores with no taxable items at all            5 of 26
//
// THE SHAPE IS THE POINT: the median is small enough to miss and wrong on every
// Minnesota order, and 93% of it is the accessories tab rather than exotic kit.
//
// LIMITS, stated on the page: a title-and-type classifier cannot settle every
// borderline item, and the clearest example is in Minnesota's own rules, where
// a belt sold with trousers is exempt and the same belt sold alone is not. A
// product feed does not say which. Stores whose feed is closed are absent.
// One capture date. This counts CATALOG COMPOSITION, not what any store
// actually charges at checkout, which was not tested.
//
// ── CASE STUDIES ────────────────────────────────────────────────────────────
// Apparel and sport, and deliberately spread across build, growth and migration
// because this reader has not picked a service:
//   Everlast  apparel AND protective equipment in one catalog, which is the
//             page's own subject
//   Dryrobe   outdoor apparel, +89% revenue and a 31% lower return rate
//   Capelli   a migration that kept 95% of search equity
//
// PRESENCE (Master §4): none claimed. REVIEW: 180 days; tax rules change and
// the scan is a dated observation.

import { BRAND_STATS } from "@/lib/brand-stats";
import type { GeoPage } from "../types";

export const SHOPIFY_DEV_MINNEAPOLIS: GeoPage = {
  type: "geo",
  slug: "minneapolis",
  path: "/services/shopify-development-agency/minneapolis",
  hub: "/services/shopify-development-agency",
  status: "published",

  geo: {
    name: "Minneapolis",
    type: "metro",
    areaServed: "Minneapolis",
  },
  archetype: ["A"],

  // ── SEO ────────────────────────────────────────────────────────────────
  targetKeyword: "shopify agency minneapolis",
  secondaryKeywords: [],
  faqKeywords: [
    "is clothing taxable in minnesota",
    "how do i set up sales tax on shopify",
    "what is a shopify tax override",
    "do i charge tax on accessories in minnesota",
    "does shopify handle sales tax automatically",
    "what does a shopify agency do",
  ],
  reviewedPhrases: ["in Minneapolis"],

  metaTitle: "Shopify Agency Minneapolis | Design, Build, Migrate, Grow",
  metaDescription:
    "A Shopify agency Minneapolis brands hire to design, build and grow stores. See what 26 apparel catalogs showed us about the Minnesota clothing tax rule.",
  shortTitle: "Shopify agency Minneapolis",
  serviceType: "Shopify agency",

  // ── Block 1: Hero ─────────────────────────────────────────────────────
  // "when the details start costing money" said nothing checkable: which
  // details, costing how. This names the difference between a store that is
  // launched and one that is actually configured, which is what the page sells,
  // without narrowing to the tax wedge and shutting out everyone else.
  h1: "Shopify agency Minneapolis brands hire to get it right, not just live",
  qualifier:
    "Design, build, migration and growth, all of it on Shopify and nothing else. Tell us what is going wrong and we will tell you what we would fix first.",

  // Both windows show where Minnesota stops calling something clothing.
  // Everlast: gloves, a groin guard and a head guard, all sports or protective
  // equipment the state taxes, on a brand whose nav also sells clothing it does
  // not. Dryrobe: exempt outerwear with the ACCESSORIES tab visible, which is
  // where 93% of the taxable items in our scan were.
  // Built by scratchpad/mpls-hero.mjs. v2: v1 put a card over the filter rail.
  heroImage: {
    src: "/images/shopify-development-agency-minneapolis-hero-v2.webp",
    alt: "An equipment collection page we rebuilt for Everlast showing gloves and a head guard, and a best-sellers page we built for Dryrobe showing outerwear beside an accessories tab, with a 152% conversion lift and 89% revenue growth",
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
    heading: "{storesBuilt} stores built, and only ever on one platform.",
    subheading: "Only ever Shopify, never WordPress or Magento. That is what a Shopify agency Minneapolis brands keep should mean.",
  },

  assetCtaLabel: "See what 26 catalogs showed",

  // ── Block 2: Hook ─────────────────────────────────────────────────────
  hook:
    "Minnesota does not charge sales tax on clothing. Most people here know that. Far fewer know where the state stops calling something clothing.\n\nA hat is exempt. A helmet is not. A belt sold with the trousers is exempt. The same belt sold on its own is not. Sunglasses, watches, handbags and cleated shoes are all taxable, and they sit in the same catalog as the shirts.\n\nSo we counted. Across 26 apparel and outdoor catalogs, 21 sold both kinds at once. The middle store had 2% of its products on the wrong side of a store-wide setting. It is the first thing a Shopify agency Minneapolis brands hire should check on yours.",

  // ── Quick answer ──────────────────────────────────────────────────────
  quickAnswer:
    "Ecomm Wizards is a Shopify agency Minneapolis brands hire to design, build, move and grow stores. We work on Shopify and nothing else. We get your settings right, including the tax ones most stores never check.",

  // ── Block 3: Place layer ──────────────────────────────────────────────
  // Archetype A, derived. Vertical-led on apparel, tied to the state rule
  // rather than to a tour of the city.
  placeLayerHeading: "A rule most stores only half know",
  placeLayer:
    "Minnesota is one of a handful of states that does not tax clothing, and it is the kind of fact everyone repeats and nobody finishes. The exceptions are where the money is.\n\nThe state draws the line at general use. Something you wear every day is clothing. Something you wear to play a sport, to protect yourself at work, or to carry your things is not.\n\nThat line runs straight through an ordinary apparel catalog. It is why a Shopify agency Minneapolis brands hire often gets called after the accountant has asked a question.",

  // ── Block 4: Gradient layer ───────────────────────────────────────────
  gradientLayerHeading: "Four things the state does not count as clothing",
  gradientLayer:
    "**Accessories are taxable.** Handbags, wallets, belts sold on their own, jewelry, sunglasses, watches and umbrellas. The state's test is whether the item is worn on the person or alongside clothing rather than being clothing itself.\n\n**Sports and protective gear are taxable.** Anything worn for an activity that is not suitable for general use: cleated shoes, ski boots, helmets, life vests. Work protection counts too, including hard hats, safety glasses and welding gloves.\n\n**Fur is taxable** where the fur is worth more than three times the next most valuable part of the garment.\n\nNone of that is set at the store level. It is a decision per product. Shopify does exactly what your product settings tell it to, which is why a Shopify agency Minneapolis brands hire should check them in week one.",
  gradientFacts: [
    {
      id: "mn-revenue-clothing-2026",
      claim:
        "Minnesota Department of Revenue, 'Clothing' (revenue.state.mn.us/clothing), read 30 September 2026. 'Clothing means all human wearing apparel suitable for general use' and is exempt from Minnesota sales tax. Four classes are taxable: clothing accessories or equipment, defined as 'items worn on the person or in combination with clothing' and including handbags, belts sold separately, jewelry, sunglasses, umbrellas and watches; sports or recreational equipment, 'items for human use that are worn during an athletic or recreational activity that are not suitable for general use', including cleated athletic shoes, ski boots, helmets and life vests; protective equipment, 'items for human wear and designed either for protection of the wearer against injury or disease', including hard hats, welding gloves, safety glasses and respirators; and fur clothing, where the item must be labeled a fur product and 'the value of the fur is more than three times the value of the next most valuable component'. Supports the hook, the place layer, the gradient block and the asset table.",
      url: "https://www.revenue.state.mn.us/clothing",
      publisher: "Minnesota Department of Revenue",
      captured: "2026-09-30",
      reviewAfterDays: 180,
    },
    {
      id: "ecw-mn-catalog-scan-2026",
      claim:
        "Original observation, 30 September 2026. 34 apparel and outdoor stores were attempted and 26 read, each from its own public product feed as JSON, up to 500 products per store. Products were classified by title, the store's own product_type and tags, against the Minnesota Department of Revenue's published examples. Results: 21 of 26 stores sold both exempt clothing and at least one item in a taxable class; median taxable share of catalog 2%; highest 32%; 5 of 26 had no taxable items at all. Of 516 taxable items found, 480 were accessories, 17 sports or recreational equipment, 17 protective equipment and 2 fur. LIMITS: a title-and-type classifier cannot settle borderline items, and Minnesota's own belt rule is the clearest case, since a belt sold with trousers is exempt while the same belt sold alone is taxable and a product feed does not record which; stores whose product feed is closed are absent, which skews the sample toward stores that expose one; one capture date; and this counts catalog composition, not what any store actually charges at checkout, which was not tested.",
      url: "https://www.ecommwizards.com/services/shopify-development-agency/minneapolis",
      publisher: "Ecomm Wizards, original observation",
      captured: "2026-09-30",
      reviewAfterDays: 180,
    },
  ],

  // ── Block 5: Only-Here Asset ──────────────────────────────────────────
  asset: {
    title: "Where the line falls, and what we found on the other side of it",
    intro:
      "Nobody ranking for this work mentions tax at all, so here is the rule and our own count against it. We read 26 apparel and outdoor catalogs and sorted every product against the state's published examples. Any Shopify agency Minneapolis brands trust should be able to do the same for one store.",
    renderer: "comparison",
    tone: "cream",
    method: {
      sampleSize: 26,
      window: "34 stores attempted, 26 read, 30 September 2026",
      captured: "2026-09-30",
      howGathered:
        "We read each store's own public product list and sorted it against the state's published examples. Four limits you should know. Some items cannot be settled from a product list, and the state's own belt rule is the clearest case. Stores that do not publish a product list are missing. This is one day's capture. And it counts what is in the catalog, not what any store actually charges at the till.",
    },
    columns: ["Item", "Taxed by Minnesota", "In the 26 catalogs"],
    rows: [
      { label: "Shirts, trousers, coats, shoes, hats", cells: ["No", "Every store"] },
      { label: "Handbags, wallets, backpacks", cells: ["Yes", "The largest group by far"], note: "480 of the 516 taxable items we found were accessories." },
      { label: "A belt sold on its own", cells: ["Yes", "Common"], note: "The same belt sold with the trousers is exempt. A product list cannot tell you which it is." },
      { label: "Sunglasses, watches, jewelry", cells: ["Yes", "Common"] },
      { label: "Cleated shoes, ski boots, helmets", cells: ["Yes", "17 items"] },
      { label: "Hard hats, safety glasses, welding gloves", cells: ["Yes", "17 items"] },
      { label: "Fur, where the fur is most of the value", cells: ["Yes", "2 items"] },
      { label: "Stores selling both kinds at once", cells: ["", "21 of 26"], note: "The middle store had 2% of its catalog on the taxable side. The highest had 32%." },
    ],
    derived:
      "Two percent is the number worth sitting with. It is small enough that nobody notices it, and it is wrong on every Minnesota order the store takes.\n\nIt is also not the exotic stuff. Ski boots and welding gloves barely showed up. 93% of what we found was the accessories tab: bags, belts, sunglasses, watches. They sit in the same catalog as the shirts and inherit whatever the shirts were set to.\n\nFive of the 26 sold nothing taxable at all, and for them one setting is fine. Knowing which of the two you are is the point. Ask any Shopify agency Minneapolis brands shortlist to tell you.",
    derivedList: {
      title: "Three things to check in your own admin",
      items: [
        "Open your accessories collection and look at what tax setting those products carry. That is where almost all of this lives.",
        "Check whether anything is set at the store level rather than the product level. A single switch cannot be right for a mixed catalog.",
        "Ask what happens when somebody adds a product next month. If the answer is that it inherits a default, you will be back here.",
      ],
    },
    disclaimer:
      "This is a plain reading of the state's published guidance, not tax advice, and we are not accountants. Take the specifics to yours. What we can do is make your store behave the way the two of you decide it should.",
    supportingBlocks: [
      {
        heading: "Why this is a build problem and not a paperwork problem",
        body:
          "**Shopify will do what the product says.** Tax behavior is carried on the product, so the answer has to be right at the point each one is created, not corrected later in a spreadsheet.\n\n**Which makes it a process question.** Somebody adds forty products before a season. If the right setting is not part of how they get added, the catalog drifts back within a month.\n\n**And it is checkable.** A Shopify agency Minneapolis brands keep should show you the state of it in an afternoon. Then say whether it needs fixing once or fixing properly.",
      },
    ],
    reviewAfterDays: 180,
  },

  // ── Block 6: Service menu (he has not picked a service) ────────────────
  disciplines: {
    label: "What we do",
    heading: "Design it, build it, move it, or grow what is already there",
    intro:
      "Take one or take all four. Every row links to the store it was done for, and all of it is Shopify. That is the range a Shopify agency Minneapolis brands hire should cover.",
    items: [
      {
        label: "Design and build",
        heading: "We build the store around how people actually shop it",
        covers: ["Storefront build", "Theme development", "Product data", "Checkout", "Design systems"],
        imageAlt: "An outdoor apparel store we rebuilt for Dryrobe",
        caseSlug: "dryrobe-shopify-plus-redesign",
        cta: { label: "Explore store builds", href: "/services/shopify-store-development" },
      },
      {
        label: "Configuration",
        heading: "We get the settings right, including the ones nobody checks",
        covers: ["Tax and product setup", "Markets and shipping", "Integrations", "Apps and cleanup"],
        imageAlt: "A catalog of apparel and protective equipment we rebuilt for Everlast",
        caseSlug: "everlast-shopify-plus-sports-redesign",
        cta: { label: "Explore Shopify setup", href: "/services/shopify-store-setup" },
      },
      {
        label: "Migration",
        heading: "We move the store and bring the rankings with it",
        covers: ["Platform migration", "Redirect mapping", "Data migration", "Search equity"],
        imageAlt: "A replatforming project for the sportswear brand Capelli Sports",
        caseSlug: "capelli-sports-shopify-migration",
        cta: { label: "Explore migration", href: "/services/migration" },
      },
      {
        label: "Growth",
        heading: "We find where people give up, then test the fix",
        covers: ["A/B testing", "Product and collection pages", "Email and retention", "Paid landing pages"],
        imageAlt: "Conversion work for the fashion brand Evie Lou",
        caseSlug: "evie-lou-shopify-fashion-cro",
        cta: { label: "Explore growth work", href: "/services/ecommerce-marketing-agency" },
      },
    ],
  },

  // ── How we work ───────────────────────────────────────────────────────
  howWeWork: {
    heading: "What you get whichever one you buy",
    tone: "white",
    intro: "Four things that hold whatever you buy. Hold every Shopify agency Minneapolis brands talk to against the same four.",
    items: [
      {
        title: "We only do this one platform",
        body: "No WordPress, no Magento, no hedging. It is the reason we know where the settings hide.",
      },
      {
        title: "We check before we scope work",
        body: "You get told what is actually wrong first, and sometimes the answer is less than you expected.",
      },
      {
        title: "Nothing is locked to us",
        body: "The code, the accounts and the app subscriptions are in your name. If you leave there is nothing to ask us for.",
      },
      {
        title: "Scope is agreed before work starts",
        body: "If it has to change, you see it and agree first.",
      },
    ],
  },

  // ── Block 7: Where we would start ─────────────────────────────────────
  whatWeDoAboutItHeading: "Where we would start on your store",
  whatWeDoAboutIt:
    "With a list of every product carrying a tax setting that disagrees with the rest of its collection. That single list usually explains the problem, and it takes an afternoon.\n\nThen the question is whether it needs fixing once or fixing properly. Once is cheaper and it comes back. Properly means the right setting is part of how a product gets created, so next season does not undo it.\n\nYou get both answers and the difference between them. Any Shopify agency Minneapolis brands hire should be willing to start with the smaller one.",

  midCta: {
    text: "Want the same count run on your own catalog? Tell us the store and we will send what we find.",
    label: "Get in touch with us",
  },

  servicesCta: {
    text: "Not sure which of the four you need? Describe the store and we will say where we would start.",
    label: "Get in touch with us",
  },

  processCta: {
    text: "The first conversation is about what is actually wrong. It costs you nothing, including when the answer is that we would change very little.",
    label: "Get in touch with us",
  },

  // ── Block 8: Proof ────────────────────────────────────────────────────
  proofHeading: "Stores we built, and what changed after",
  proof: [
    {
      slug: "everlast-shopify-plus-sports-redesign",
      vertical: "Sport and equipment",
      whatWasBuilt: "A catalog holding both apparel and protective equipment, restructured and rebuilt to load fast",
      outcome: "Conversion +152%, catalog abandonment down 38%, page load cut from 6.1s to 1.9s",
      verified: true,
    },
    {
      slug: "dryrobe-shopify-plus-redesign",
      vertical: "Outdoor apparel",
      whatWasBuilt: "A rebuilt storefront with sizing and product data sorted out before launch",
      outcome: "Online revenue +89%, return rate down 31%, checkout completion +23%",
      verified: true,
    },
    {
      slug: "capelli-sports-shopify-migration",
      vertical: "Sports apparel",
      whatWasBuilt: "A migration onto Shopify with redirects and product data mapped first",
      outcome: "95% of search equity retained, conversion +24%, site speed +38%",
      verified: true,
    },
  ],

  // ── Block 9: Objections ───────────────────────────────────────────────
  objectionsHeading: "What usually gives people pause",
  objections: [
    {
      objection: "Our accountant handles tax.",
      answer:
        "They should, and we are not trying to take that off them. The split is simple enough.\n\nThey decide what the treatment should be. We make your store actually do it, on the right products, in a way that survives the next person adding forty more.",
    },
    {
      objection: "Doesn't Shopify work this out automatically?",
      answer:
        "It calculates rates automatically, which is not the same as knowing what your product is.\n\nIt applies whatever category and tax setting each product carries. Get the product wrong and the maths is perfect on the wrong answer.",
    },
    {
      objection: "Two percent of the catalog is not worth a project.",
      answer:
        "Often it is not, and we will say so. Five of the 26 stores we read needed nothing at all.\n\nBut it is worth an afternoon to find out which of those two you are, because the version where it does matter has been wrong on every order since launch.",
    },
    {
      objection: "We would rather use somebody local.",
      answer:
        "Fair, and unlike most markets there are good people here to choose from. Someone in the room for a workshop is worth having.\n\nJust ask both of us the same thing first. Ask what a store-level tax setting does to your accessories collection. Any Shopify agency Minneapolis brands shortlist should answer that without looking it up.",
    },
  ],

  // ── Block 10: FAQ ─────────────────────────────────────────────────────
  // The SERP carries People Also Ask, which the Raleigh ones did not, so
  // question-shaped content has a surface here worth filling properly.
  faqHeading: "What brands ask before they pick anyone",
  faqs: [
    {
      question: "Is clothing taxable in Minnesota?",
      answer:
        "Generally no. The state exempts clothing meant for general use: shirts, trousers, coats, shoes, hats. What it does tax is the accessories, sports gear, protective gear and fur sitting beside them in your catalog.",
      unique: true,
    },
    {
      question: "Do I charge tax on accessories in Minnesota?",
      answer:
        "Yes. Handbags, wallets, belts sold alone, jewelry, sunglasses, watches and umbrellas are all taxed. The clothing beside them is not. This is where nearly all of it lives, and probably where most of yours does: 480 of the 516 taxable items we found were accessories.",
      unique: true,
    },
    {
      question: "Does Shopify handle sales tax automatically?",
      answer:
        "It works out rates automatically. It does not decide what your product is. Shopify uses the tax setting each product carries, so a correct sum on the wrong product is still the wrong amount.",
      unique: true,
    },
    {
      question: "What is a Shopify tax override?",
      answer:
        "A rule that tells Shopify to treat one collection or product differently from the default. It is the usual way to handle a mixed catalog. It is only as good as the collection you point it at.",
      unique: true,
    },
    {
      question: "How do I set up sales tax on Shopify?",
      answer:
        "Register where you need to, turn on tax collection for those regions, then decide product by product what is taxable. The first two take an afternoon. The third is the part that gets skipped.",
      unique: true,
    },
    {
      question: "What does a Shopify agency do?",
      answer:
        "Four things, usually. Design how your store looks and how people move through it. Build what a theme will not cover. Move you onto Shopify when you have outgrown something else. And keep testing what makes people buy.",
      unique: true,
    },
    {
      question: "Do you work on WooCommerce or Magento?",
      answer:
        "No, and that is deliberate. Ask everyone else on your list how many platforms they sell. We only do Shopify, which is why we know where your settings hide.",
      unique: true,
    },
    {
      question: "Are you a Shopify agency Minneapolis brands can work with remotely?",
      answer:
        "Yes, and remotely is how it runs. There is no office in the city to visit. Where you sit does not change how the work is scoped, built or handed over.",
      unique: true,
    },
    {
      question: "Can you work with our existing developer?",
      answer:
        "Usually, and often it is the quickest route. We can scope and hand over, or take the parts nobody on your team has time for. We will not quietly replace somebody doing a decent job.",
      unique: true,
    },
    {
      question: "How long does a fix like this take?",
      answer:
        "Finding it is an afternoon, and any Shopify agency Minneapolis brands hire should do that part before proposing anything. Fixing it once is days. Fixing it so it stays fixed means changing how your products get created, which is a week or two.",
      unique: true,
    },
  ],

  // ── Block 11: Conversion ──────────────────────────────────────────────
  conversion: {
    heading: "Send us your store and we will count it",
    whatYouGet:
      "The store address is enough. We will sort your catalog the way we sorted the 26, and tell you how much of it is on the wrong side of the line.",
    whatWeWillTellYouNotToDo:
      "If the answer is none of it, we will say so rather than finding you something to buy. Five of the 26 we read needed nothing.",
    responseExpectation: "A developer replies within one working day. Not a salesperson.",
    audit: {
      transition: "The same count we ran on 26 catalogs, run on yours.",
      offer: "Send the store address and we will come back with:",
      parts: [
        "How many of your products fall on the taxable side of the state's line.",
        "Which of them are set at the store level rather than the product level.",
        "Whether this is a one-afternoon fix or a process change.",
      ],
      limit: "It stops at the findings, and you can hand them to your accountant or anyone else.",
      noObligation: "No charge, and no follow-up sequence.",
    },
  },

  sources: [],

  // Owner's standing instruction for these pages: below 2,500 words.
  wordCountTarget: [2000, 2500],
};
