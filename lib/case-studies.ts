export interface CaseStudyStat {
  label: string;
  value: string;
  shortLabel?: string;
}

export interface CaseStudyResult {
  label: string;
  before: string;
  after: string;
  improvement: string;
}

export interface CaseStudyApproachItem {
  step: number;
  title: string;
  desc: string;
}

export interface TechStackItem {
  name: string;
  logo: string;
}

export interface CaseStudy {
  slug: string;
  brandName: string;
  brandLogo?: string;
  industry: string;
  serviceType: string;
  heroMetric: string;
  heroSubMetric: string;
  heroImage: string;
  heroDescription: string;
  stats: CaseStudyStat[];
  challengeTitle: string;
  challengeBody: string;
  challengeImage?: string;
  approachTitle: string;
  approachItems: CaseStudyApproachItem[];
  workTitle?: string;
  workSubtitle?: string;
  workImages: string[];
  results: CaseStudyResult[];
  resultsDescription?: string;
  techStack: TechStackItem[];
  sliderStats?: string[];
  quote: string;
  quotePerson: string;
  quoteRole: string;
  quoteAvatar?: string;
  prevSlug?: string;
  prevBrand?: string;
  nextSlug?: string;
  nextBrand?: string;
  nextMetric?: string;
  nextImage?: string;
  nextIndustry?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "111skin-shopify-cro-redesign",
    brandName: "111SKIN",
    industry: "Cosmetics & Beauty",
    serviceType: "Shopify CRO | Theme Development",
    heroMetric: "+46%",
    heroSubMetric: "Conversion Rate",
    heroImage: "/images/Case%20studies/111skin-hero.jpg",
    heroDescription:
      "How a dermatologist-founded luxury skincare brand transformed their Shopify Plus store with a data-driven CRO roadmap, bespoke theme, and intelligent skin quiz — increasing conversions by 46% and revenue by 21%.",
    stats: [
      { label: "Higher Conversion Rate", value: "+46%", shortLabel: "Conversion Rate" },
      { label: "Increase in Revenue", value: "+21%", shortLabel: "Revenue" },
      { label: "Increase in AOV", value: "+4%", shortLabel: "AOV" },
    ],
    challengeTitle: "Converting Premium Skincare Into Premium Revenue",
    challengeBody:
      "111SKIN was born at 111 Harley Street, where Dr. Yannis Alexandrides has practised as one of London's most respected plastic surgeons for over three decades. Together with co-founder Eva Alexandridis, he built a skincare brand rooted in medical science and designed for real results. Today, 111SKIN is stocked in premium retailers worldwide and trusted by dermatologists, editors, and loyal customers who take their skincare seriously.\n\nWhen they came to us, their Shopify Plus store wasn't doing the brand justice. Customers found it hard to navigate the product range and match products to their specific skin concerns. Drop-off rates were high and the conversion rate was well below what a brand of this calibre should be achieving. They needed a proper CRO programme and a store experience that felt as premium as the products on the shelf.",
    challengeImage: "/images/Case%20studies/111Skin%20mockup.jpeg",
    approachTitle: "CRO Roadmap for Growth",
    approachItems: [
      {
        step: 1,
        title: "Strategic CRO Audit & Roadmap",
        desc: "Before touching a single line of code, we audited the full store. Where were customers leaving? What was making it hard to buy? We mapped the highest-impact opportunities across the funnel, ranked them by potential, and built a roadmap we could actually work through.",
      },
      {
        step: 2,
        title: "Bespoke Shopify Theme Development",
        desc: "The old theme was holding the brand back. We designed and built a new Shopify Plus theme from scratch, with product pages, collections, and checkout all built to feel premium and perform. Faster load times, cleaner layouts, and a store experience customers actually enjoyed using.",
      },
      {
        step: 3,
        title: "Intelligent Skin Finder Quiz",
        desc: "Most customers didn't know where to start with the range. So we built a quiz that walks them through their skin concerns and goals, then recommends exactly the right products. Fewer abandoned sessions, more confident buyers, and every response feeding back into their email flows.",
      },
      {
        step: 4,
        title: "Continuous A/B Testing & Iteration",
        desc: "Every change was tested against the original before it went live. Product page layouts, UGC placement, discount visibility at checkout — nothing scaled until the data said it should. That discipline is what turned a series of small improvements into a 46% lift in conversion rate.",
      },
    ],
    workTitle: "Inside the 111SKIN Build",
    workSubtitle: "A look at the pages, features, and details we shipped.",
    workImages: [
      "/images/Case%20studies/111skin.jpg",
      "/images/Case%20studies/111skin-2.jpg",
      "/images/Case%20studies/111skin-3.jpg",
      "/images/Case%20studies/111skin-quiz.jpg",
    ],
    results: [
      { label: "Conversion Rate", before: "1.4%", after: "2.1%", improvement: "+46%" },
      { label: "Total Revenue", before: "Baseline", after: "+21% YoY", improvement: "+21%" },
      { label: "Average Order Value", before: "$188", after: "$196", improvement: "+4%" },
      { label: "Repeat Purchase Rate", before: "22%", after: "31%", improvement: "+41%" },
    ],
    resultsDescription: "The CRO programme delivered results that went well beyond conversion rate. The 111SKIN Shopify Plus store now converts at 2.1%, up from 1.4% before we started working together. Revenue grew 21% year-on-year, average order value increased from $188 to $196, and the repeat purchase rate climbed from 22% to 31%. The bespoke theme, skin finder quiz, and ongoing A/B testing programme built a store experience that matches the quality of the brand, with a foundation that keeps improving over time.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Yotpo", logo: "/images/partner_logo_2.svg" },
      { name: "Rebuy", logo: "/images/partner_logo_3.svg" },
    ],
    sliderStats: [
      "Checkout abandonment reduced by 38%",
      "Add-to-cart rate increased by 29%",
      "Repeat purchase rate up by 41%",
      "Mobile conversion rate improved by 33%",
      "Product page dwell time up by 52%",
      "Email capture rate increased by 67%",
    ],
    quote:
      "Working with Ecomm Wizards gave us a clear roadmap for growth. The skin finder quiz alone transformed how our customers discover the right products, and the results across conversion rate and revenue speak for themselves.",
    quotePerson: "Eva Alexandridis",
    quoteRole: "Co-Founder, 111SKIN",
    quoteAvatar: "/images/Case%20studies/eva-alexandridis.jpg",
    nextSlug: "wild-shopify-plus-subscriptions",
    nextBrand: "Wild Deodorant",
    nextMetric: "80K+ Monthly Subscribers",
    nextImage: "/images/Case%20studies/WeareWild.webp",
    nextIndustry: "Cosmetics & Beauty",
  },

  // ─── 02. EVIE LOU — Fashion & Apparel ───
  {
    slug: "evie-lou-shopify-fashion-cro",
    brandName: "Evie Lou",
    industry: "Fashion & Apparel",
    serviceType: "Shopify Plus | UX Design | CRO",
    heroMetric: "+82%",
    heroSubMetric: "Conversion Rate",
    heroImage: "/images/Case%20studies/Evie-Lou.jpg",
    heroDescription:
      "How a women's contemporary fashion brand rebuilt their Shopify Plus store around a mobile-first UX, smarter product discovery, and a retention programme that nearly doubled their conversion rate and added 47% organic revenue growth within a year.",
    stats: [
      { label: "Higher Conversion Rate", value: "+82%", shortLabel: "Conversion Rate" },
      { label: "Increase in AOV", value: "+31%", shortLabel: "AOV" },
      { label: "Growth in Organic Revenue", value: "+47%", shortLabel: "Organic Revenue" },
    ],
    challengeTitle: "A Fashion Brand Losing Customers Before They Could Buy",
    challengeBody:
      "Evie Lou is a women's contemporary fashion brand with a distinct aesthetic and a loyal community built through social media and influencer partnerships. Their product range is strong and their brand photography is genuinely beautiful.\n\nWhen they came to us, 72% of their traffic was arriving on mobile and the checkout was losing most of them. Collection pages were disorganised. Product photography was not being shown at its best. Paid traffic spend was growing while conversion sat flat. Every pound going into acquisition was being wasted by a store that was not doing its job.",
    approachTitle: "A Store That Sells as Well as the Brand Looks",
    approachItems: [
      {
        step: 1,
        title: "CRO Audit & UX Research",
        desc: "We mapped every drop-off point in the funnel, from landing page through to checkout, using heatmaps, session recordings, and exit surveys. The audit identified collection page navigation, product imagery presentation, and mobile checkout friction as the three highest-impact areas. Every fix was prioritised by revenue impact.",
      },
      {
        step: 2,
        title: "Bespoke Shopify Plus Theme",
        desc: "The new theme was built around Evie Lou's aesthetic. Editorial collection pages with lookbook-style photography, a sticky size guide, and product pages structured to carry the full brand story alongside the purchase decision. No compromises, no template constraints.",
      },
      {
        step: 3,
        title: "Mobile-First Checkout Overhaul",
        desc: "With 72% of traffic on mobile, checkout was rebuilt from the ground up. Persistent mini-cart, one-tap express checkout, and a simplified address flow cut mobile form-field abandonment by 44%. Every change was validated against mobile session data before going live.",
      },
      {
        step: 4,
        title: "Klaviyo Retention Programme",
        desc: "We rebuilt the full email architecture: welcome series, abandoned cart, browse abandon, and a post-purchase sequence engineered to drive the second purchase within 30 days. The retention programme lifted repeat purchase rate from 19% to 38%, turning one-time buyers into a loyal returning base.",
      },
    ],
    workTitle: "Inside the Evie Lou Build",
    workSubtitle: "Bespoke theme, mobile checkout rebuild, and a retention programme that works.",
    workImages: [
      "/images/Case%20studies/evie-lou-about-page.webp",
      "/images/Case%20studies/evie-lou-1.webp",
      "/images/Case%20studies/evie-lou-slider-img-left.jpg",
      "/images/Case%20studies/evie-lou.webp",
    ],
    results: [
      { label: "Conversion Rate", before: "1.1%", after: "2.0%", improvement: "+82%" },
      { label: "Average Order Value", before: "$119", after: "$156", improvement: "+31%" },
      { label: "Organic Revenue", before: "Baseline", after: "+47% YoY", improvement: "+47%" },
      { label: "Repeat Purchase Rate", before: "19%", after: "38%", improvement: "+100%" },
    ],
    resultsDescription:
      "Conversion rate climbed from 1.1% to 2.0%, an 82% improvement driven by mobile UX and checkout optimisation. AOV lifted 31% as better product discovery and cross-sell logic increased basket size. Organic revenue grew 47% year-on-year, and the retention programme doubled the repeat purchase rate, fundamentally changing the unit economics of the business.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Yotpo", logo: "/images/partner_logo_2.svg" },
      { name: "Gorgias", logo: "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg" },
    ],
    sliderStats: [
      "Mobile checkout abandonment reduced by 44%",
      "Page load time cut from 5.8s to 2.1s",
      "Add-to-cart rate up by 57%",
      "Email list grew 3.2x in 60 days",
      "Repeat purchase rate doubled from 19% to 38%",
      "Return on ad spend improved by 34%",
    ],
    quote:
      "We always knew the brand looked great. We just could not figure out why the store was not converting. Ecomm Wizards found the problem fast and fixed it properly. The results came in within the first 90 days and they have held.",
    quotePerson: "Kim Crow",
    quoteRole: "Owner, Evie Lou",
    quoteAvatar: "/images/Case%20studies/Kim%20Crow.jpg",
    prevSlug: "wild-shopify-plus-subscriptions",
    prevBrand: "Wild",
    nextSlug: "dryrobe-shopify-plus-redesign",
    nextBrand: "Dryrobe",
    nextMetric: "+89% Online Revenue",
    nextImage: "/images/Case%20studies/Dryrobe%20hero%20section.webp",
    nextIndustry: "Fashion & Apparel",
  },

  // ─── 03. HAPPY MAMMOTH — Health, Wellness & Fitness ───
  {
    slug: "happy-mammoth-shopify-subscriptions-cro",
    brandName: "Happy Mammoth",
    industry: "Health, Wellness & Fitness",
    serviceType: "Shopify Plus | CRO | Subscriptions",
    heroMetric: "+134%",
    heroSubMetric: "Subscription Revenue",
    heroImage: "/images/Case%20studies/happy-mammoth-1.webp",
    heroDescription:
      "How a gut health and hormone balance supplement brand transformed their Shopify Plus store into a subscription engine: rebuilding their product quiz, launching Recharge-powered recurring orders, and adding $28M in annualised subscription revenue.",
    stats: [
      { label: "Subscription Revenue Growth", value: "+134%", shortLabel: "Sub Revenue" },
      { label: "Increase in Conversion Rate", value: "+61%", shortLabel: "Conversion Rate" },
      { label: "Higher Customer Lifetime Value", value: "+89%", shortLabel: "LTV" },
    ],
    challengeTitle: "High Traffic, Low Loyalty, No Subscription Infrastructure",
    challengeBody:
      "Happy Mammoth makes gut health and hormone balance supplements for health-conscious consumers who take their wellness seriously. Their content and paid channels drive consistent, high-intent traffic.\n\nWhen they came to us, almost all of that traffic was converting to one-time purchases. There was no subscription programme, no personalised recommendation journey, and email flows that barely touched the surface of what the customer relationship could be. Navigation was getting harder as the product range grew. The team knew the lifetime value was enormous. They just did not have the infrastructure to unlock it.",
    approachTitle: "From One-Time Buyers to Long-Term Subscribers",
    approachItems: [
      {
        step: 1,
        title: "Recharge Subscription Architecture",
        desc: "We built a subscription programme that made subscribe-and-save the natural default, not an afterthought buried in small print. Smart in-cart prompts, bundle builders, and pause-vs-cancel flows were all built before launch. Subscription revenue more than doubled within the first quarter.",
      },
      {
        step: 2,
        title: "Goals-Based Product Quiz",
        desc: "Happy Mammoth's 'Find Your Perfect Formula' quiz was rebuilt from the ground up, mapping customer goals (gut health, hormone balance, energy, immunity) to personalised product stacks. Each result fed a dedicated email sequence. Quiz completions converted at 3.8x the rate of standard PDP visitors.",
      },
      {
        step: 3,
        title: "PDP & Bundle Page CRO",
        desc: "Product pages were restructured with clinical study references and social proof above the fold, a subscribe-vs-one-time toggle defaulting to subscription, and bundle pages with real-time savings calculators. Add-to-cart rate on PDPs rose 74% within six weeks of the redesign.",
      },
      {
        step: 4,
        title: "Klaviyo Retention & Win-Back Flows",
        desc: "Eight new Klaviyo flows were built: subscription pause alternatives, loyalty milestone emails, and a 90-day win-back sequence. Churn dropped 29% in Q1. The post-purchase series drove a 34% second-purchase rate within 45 days of the first order.",
      },
    ],
    workTitle: "Inside the Happy Mammoth Build",
    workSubtitle: "Subscription architecture, quiz rebuild, and PDPs engineered for LTV.",
    workImages: [
      "/images/Case%20studies/happy-mammoth.webp",
      "/images/Case%20studies/happy-mammoth-2.jpg",
      "/images/Case%20studies/Happy-Mammoth-review.avif",
      "/images/Case%20studies/happy-mammoth-subscription.webp",
    ],
    results: [
      { label: "Subscription Revenue", before: "$483k/mo", after: "$1.1M/mo", improvement: "+134%" },
      { label: "Conversion Rate", before: "1.9%", after: "3.1%", improvement: "+61%" },
      { label: "Customer LTV (12-mo)", before: "$110", after: "$208", improvement: "+89%" },
      { label: "Subscription Churn", before: "14.2%", after: "10.1%", improvement: "-29%" },
    ],
    resultsDescription:
      "Monthly subscription revenue grew from $483k to $1.1M, a 134% increase driven by the Recharge build, quiz funnel, and retention flows. Conversion rate climbed from 1.9% to 3.1%, 12-month LTV nearly doubled from $110 to $208, and subscription churn dropped 29% in the first quarter alone. The unit economics of the business changed fundamentally.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Recharge", logo: "/images/partner_logo_4.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Rebuy", logo: "/images/64f098c0e38dec3a384cb182_rebuy.svg" },
    ],
    sliderStats: [
      "Quiz completions convert at 3.8x vs standard PDP",
      "Second-purchase rate: 34% within 45 days",
      "Subscription churn down 29% in Q1",
      "Bundle page add-to-cart rate up 74%",
      "Average subscription order value up 22%",
      "Email revenue share grew from 11% to 31%",
    ],
    quote:
      "We had the traffic and we had the product. What we didn't have was a store engineered for retention. Ecomm Wizards rebuilt the quiz, launched subscriptions properly, and the LTV numbers tell the rest of the story.",
    quotePerson: "Matthew Murphy",
    quoteRole: "CEO & Founder, Happy Mammoth",
    quoteAvatar: "/images/Case%20studies/Matthew%20Murphy.avif",
    prevSlug: "dryrobe-shopify-plus-redesign",
    prevBrand: "Dryrobe",
    nextSlug: "loop-earplugs-shopify-landing-page-cro",
    nextBrand: "Loop Earplugs",
    nextMetric: "€1M+ Growth Opportunity",
    nextImage: "/images/Case%20studies/Loop%20Earplugs.webp",
    nextIndustry: "Health, Wellness & Fitness",
  },

  // ─── 04. CANDY KITTENS — Food & Beverages ───
  {
    slug: "candy-kittens-shopify-food-beverage-cro",
    brandName: "Candy Kittens",
    industry: "Food & Beverages",
    serviceType: "Shopify Plus | CRO | Theme Development",
    heroMetric: "+182%",
    heroSubMetric: "Conversion Rate",
    heroImage: "/images/Case%20studies/Candy%20Kittens.jpg",
    heroDescription:
      "How a premium vegan confectionery brand rebuilt their Shopify Plus store around editorial storytelling, a gifting-first UX, and a flexible seasonal campaign infrastructure that nearly tripled their conversion rate and added $8.1M in new annual revenue.",
    stats: [
      { label: "Higher Conversion Rate", value: "+182%", shortLabel: "Conversion Rate" },
      { label: "New Annual Revenue", value: "+$8.1M", shortLabel: "Revenue" },
      { label: "Increase in AOV", value: "+34%", shortLabel: "AOV" },
    ],
    challengeTitle: "A Premium Brand Selling Like a Commodity Online",
    challengeBody:
      "Candy Kittens makes premium vegan sweets with standout packaging and a genuine retail presence in Sainsbury's and Waitrose. Co-founder Jamie Laing has built it into one of the most recognisable confectionery brands in the UK.\n\nWhen they came to us, the online store was not reflecting any of that. Gifting drove over 55% of revenue but the experience was buried in a standard collection page. No personalisation, no gift message option, no sense of occasion. Seasonal campaigns were constrained by a theme that could not execute them. Customers arrived inspired and left without buying.",
    approachTitle: "Selling the Brand, Not Just the Sweets",
    approachItems: [
      {
        step: 1,
        title: "Editorial Homepage & Gifting Architecture",
        desc: "We restructured the entire site around how Candy Kittens customers actually shop: Gifts, Occasions, Flavours, and Build-Your-Own Box. The homepage became an editorial canvas with hero video, flavour storytelling, and a prominent gift-finder entry point. Mobile bounce rate dropped 41% within the first month.",
      },
      {
        step: 2,
        title: "Gift Finder & Occasion-Led Navigation",
        desc: "A three-step gift finder guided shoppers by recipient, occasion, and budget to a curated product selection. Each result included complementary pairings, a bundle option, and a personalised gift message at checkout. The gift finder now drives 28% of all transactions.",
      },
      {
        step: 3,
        title: "Bespoke Shopify Plus Theme",
        desc: "The new theme was built to match the brand's visual identity. Bold colour, playful typography, and product photography given the space to perform. Collection pages were redesigned around flavour discovery rather than a flat product grid. Add-to-cart rate on collection pages rose 57%.",
      },
      {
        step: 4,
        title: "Seasonal Campaign Infrastructure",
        desc: "We built a flexible section library that let the internal team execute full seasonal campaigns (Christmas, Valentine's Day, Easter, Halloween) without touching a line of code. Every major gifting season post-launch outperformed the equivalent period the previous year.",
      },
    ],
    workTitle: "Inside the Candy Kittens Build",
    workSubtitle: "Editorial design, a gifting-first UX, and seasonal campaign infrastructure.",
    workImages: [
      "/images/Case%20studies/Candy%20Kittens%20hero%20section.webp",
      "/images/Case%20studies/Candy%20Kittens-1.jpg",
      "/images/Case%20studies/Candy%20Kittens-2.jpg",
      "/images/Case%20studies/Candy%20Kittens%20black%20friday.jpg",
    ],
    results: [
      { label: "Conversion Rate", before: "0.9%", after: "2.5%", improvement: "+182%" },
      { label: "Annual Revenue", before: "Baseline", after: "+$8.1M YoY", improvement: "+$8.1M" },
      { label: "Average Order Value", before: "$23", after: "$30", improvement: "+34%" },
      { label: "Gifting Revenue Share", before: "55%", after: "67%", improvement: "+12pts" },
    ],
    resultsDescription:
      "Conversion rate grew from 0.9% to 2.5%, nearly tripling, with the gift finder and editorial homepage driving the bulk of the lift. AOV rose 34%, annual revenue grew by $8.1M, and the gifting revenue share climbed from 55% to 67%. The first Christmas post-launch was the brand's highest-revenue month in its history.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Rebuy", logo: "/images/64f098c0e38dec3a384cb182_rebuy.svg" },
      { name: "Yotpo", logo: "/images/partner_logo_2.svg" },
    ],
    sliderStats: [
      "Mobile bounce rate reduced by 41%",
      "Gift finder drives 28% of all transactions",
      "Collection page add-to-cart rate up 57%",
      "First Christmas post-launch: highest revenue month ever",
      "Seasonal campaign build time: 3 weeks → 2 days",
      "Average gift transaction value up 27%",
    ],
    quote:
      "The brand we'd built deserved a store to match it. Ecomm Wizards rebuilt the gifting experience from scratch and gave us the infrastructure to execute seasonal campaigns properly. The Christmas numbers spoke for themselves.",
    quotePerson: "Jamie Laing",
    quoteRole: "Co-Founder, Candy Kittens",
    quoteAvatar: "/images/Case%20studies/Jamie%20Laing.jpg",
    prevSlug: "loop-earplugs-shopify-landing-page-cro",
    prevBrand: "Loop Earplugs",
    nextSlug: "sneak-energy-shopify-redesign",
    nextBrand: "Sneak Energy",
    nextMetric: "+68% Mobile Conversion Rate",
    nextImage: "/images/Case%20studies/sneak-energy-hero.jpg",
    nextIndustry: "Food & Beverages",
  },

  // ─── 05. EVERLAST — Sports & Fitness ───
  {
    slug: "everlast-shopify-plus-sports-redesign",
    brandName: "Everlast",
    industry: "Sports & Fitness",
    serviceType: "Shopify Plus | CRO | Theme Development",
    heroMetric: "+152%",
    heroSubMetric: "Conversion Rate",
    heroImage: "/images/Case%20studies/Everlast-banner.webp",
    heroDescription:
      "How the world's most iconic boxing brand rebuilt their Shopify Plus store with a performance-first theme, product comparison tooling, and a dual B2C and trade checkout architecture that delivered a 152% conversion rate lift and 48% order growth.",
    stats: [
      { label: "Higher Conversion Rate", value: "+152%", shortLabel: "Conversion Rate" },
      { label: "Increase in AOV", value: "+21%", shortLabel: "AOV" },
      { label: "Growth in Total Orders", value: "+48%", shortLabel: "Orders" },
    ],
    challengeTitle: "An Iconic Brand Held Back by an Outdated Store",
    challengeBody:
      "Everlast has been making boxing and fitness equipment for over 100 years. The brand is trusted by professional fighters and fitness enthusiasts worldwide and is one of the most recognised names in sport.\n\nWhen they came to us, the site was running on a default theme with limited product filtering across a large catalogue. A $230 professional boxing glove was being presented the same way as any commodity product. The store was also serving two very different audiences at once. Serious athletes buying technical equipment, and lifestyle fitness buyers, with no architecture built to handle both. A trade portal did not exist. Inventory issues were causing amendments on a significant portion of B2B orders.",
    approachTitle: "Built for Champions, Built for Scale",
    approachItems: [
      {
        step: 1,
        title: "Performance-First Theme Rebuild",
        desc: "The new Shopify Plus theme was built to sub-2s LCP. Lazy-loaded product photography, comparison tables baked into collection pages, and a structured data layer for Google Shopping. Every section was componentised for the merchandising team to manage without developer support.",
      },
      {
        step: 2,
        title: "Sport & Discipline Navigation Architecture",
        desc: "We restructured the catalogue around how athletes actually shop: by sport (Boxing, MMA, Fitness, Running), then by equipment type. Guided product finders for gloves and bags matched customers to the right spec for their level and discipline. Catalogue abandonment dropped 38%.",
      },
      {
        step: 3,
        title: "B2C & Trade Checkout Architecture",
        desc: "A dual-checkout system allowed retail and trade customers (gyms, fight camps, wholesalers) to experience appropriately different pricing, minimum order logic, and payment terms, all within a single Shopify Plus store. Trade accounts self-managed their order history through a custom portal.",
      },
      {
        step: 4,
        title: "Rebuy Cross-Sell & Bundle Engine",
        desc: "Rebuy-powered recommendations were implemented at PDP, cart, and post-purchase stages. Intelligent bundles (gloves, hand wraps, bag, training guide) lifted average order value by 21% within six weeks of launch and created a meaningful new revenue stream from accessory attach.",
      },
    ],
    workTitle: "Inside the Everlast Rebuild",
    workSubtitle: "Sport-led navigation, dual-channel checkout, and a bundle engine built for athletes.",
    workImages: [
      "/images/Case%20studies/Everlast-all%20products.webp",
      "/images/Case%20studies/Everlast-range.webp",
      "/images/Case%20studies/Everlast-checkout.webp",
      "/images/Case%20studies/Everlast-loyalty.webp",
    ],
    results: [
      { label: "Conversion Rate", before: "0.8%", after: "2.0%", improvement: "+152%" },
      { label: "Average Order Value", before: "$180", after: "$218", improvement: "+21%" },
      { label: "Total Orders", before: "Baseline", after: "+48% YoY", improvement: "+48%" },
      { label: "Trade Revenue", before: "$0", after: "$432k/mo", improvement: "6 Months" },
    ],
    resultsDescription:
      "Conversion rate lifted 152%, from 0.8% to 2.0%, driven by the navigation rebuild and performance improvements. AOV grew 21%, total orders increased 48% year-on-year, and the trade portal reached $432k/month within six months of launch as a net-new revenue channel.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Rebuy", logo: "/images/64f098c0e38dec3a384cb182_rebuy.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Gorgias", logo: "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg" },
    ],
    sliderStats: [
      "Catalogue abandonment down 38% post navigation rebuild",
      "Mobile conversion rate up 188%",
      "Trade portal reached $432k/month in 6 months",
      "Cart abandonment rate down 31%",
      "Page load time cut from 6.1s to 1.9s",
      "Customer support tickets reduced by 38%",
    ],
    quote:
      "We needed a store that could handle the complexity of the brand: serious athletes, casual fitness buyers, and trade accounts, all in one place. Ecomm Wizards built exactly that. The conversion numbers and the trade portal revenue both exceeded what we projected.",
    quotePerson: "Daniel Summerson",
    quoteRole: "Managing Director, Everlast Gyms",
    quoteAvatar: "/images/Case%20studies/Daniel%20Summerson.jpg",
    prevSlug: "sneak-energy-shopify-redesign",
    prevBrand: "Sneak Energy",
    nextSlug: "capelli-sports-shopify-migration",
    nextBrand: "Capelli Sports",
    nextMetric: "+24% Conversion Rate",
    nextImage: "/images/Case%20studies/capelli-sports-hero.jpg",
    nextIndustry: "Sports & Fitness",
  },

  // ─── 06. RONALDO JEWELRY — Jewelry & Accessories ───
  {
    slug: "ronaldo-jewelry-shopify-plus-redesign",
    brandName: "Ronaldo Jewelry",
    industry: "Jewelry & Accessories",
    serviceType: "Shopify Plus | UX Design | CRO",
    heroMetric: "+250%",
    heroSubMetric: "Total Sales",
    heroImage: "/images/Case%20studies/Ronaldo%20Jewelry%20hero%20section%20img.webp",
    heroDescription:
      "How a handcrafted wire-wrapped jewelry brand rebuilt their Shopify Plus store with high-fidelity product visualisation, a bespoke piece configurator, and a trust framework built for high-AOV transactions, driving a 250% increase in total sales.",
    stats: [
      { label: "Increase in Total Sales", value: "+250%", shortLabel: "Total Sales" },
      { label: "Higher Conversion Rate", value: "+120%", shortLabel: "Conversion Rate" },
      { label: "Increase in AOV", value: "+46%", shortLabel: "AOV" },
    ],
    challengeTitle: "Beautiful Jewellery, Invisible Online",
    challengeBody:
      "Ronaldo Designer Jewelry makes handcrafted wire-wrapped pieces that customers discover in boutiques and gift shops across the US. The craft behind every piece is what sells it in person.\n\nWhen they came to us, the online store was not doing the product justice. Photography was inconsistent. The mobile experience made handcrafted pieces look like costume jewellery. Customers had no way to examine the detail at the resolution the craftsmanship deserved. A loyal wholesale network was asking for a stronger DTC presence. Returning customers had no easy way to reorder. The gap between what the brand was and what the store communicated was getting wider every quarter.",
    approachTitle: "A Store That Shows the Craft",
    approachItems: [
      {
        step: 1,
        title: "High-Fidelity Product Visualisation",
        desc: "We built a 360-degree product viewer integrated natively into the Shopify Plus theme. Customers could examine wire-wrapping detail, stone quality, and finish at full resolution. Paired with a consistent photography brief and macro detail shots, every product now presents with the same quality as an in-store display.",
      },
      {
        step: 2,
        title: "Bespoke Piece Configurator",
        desc: "An interactive configurator replaced the email-based custom piece inquiry process. Customers could select wire style, stone type, and engraving, with a live price update and rendered preview per configuration. Configuration starts now convert at 22%, versus 4% for the previous email-based flow.",
      },
      {
        step: 3,
        title: "Trust Architecture for High-AOV Purchases",
        desc: "We built a trust layer designed for the specific hesitations around high-value online jewellery purchases: authenticity certificates, artisan story integration on every PDP, free returns positioned prominently, and a live chat entry point via Gorgias during business hours.",
      },
      {
        step: 4,
        title: "Yotpo Reviews & Customer Photo UGC",
        desc: "Customer photos and verified purchase reviews were integrated into every product page via Yotpo. Review sentiment data was fed back to the product team monthly. Products with reviews convert 38% higher than unreviewed products, making the social proof layer a measurable revenue driver.",
      },
    ],
    workTitle: "Inside the Ronaldo Jewelry Build",
    workSubtitle: "Configurator, 360 product viewer, and a trust framework built for high-AOV.",
    workImages: [
      "/images/Case%20studies/Ronaldo%20Jewelry-hero-desk.webp",
      "/images/Case%20studies/Ronaldo%20Jewelry%20PDP.webp",
      "/images/Case%20studies/Ronaldo%20Jewelry-our%20story.webp",
      "/images/Case%20studies/Ronaldo%20Jewelry%20Gift%20guide.webp",
    ],
    results: [
      { label: "Total Sales", before: "Baseline", after: "+250% YoY", improvement: "+250%" },
      { label: "Conversion Rate", before: "0.5%", after: "1.1%", improvement: "+120%" },
      { label: "Average Order Value", before: "$124", after: "$181", improvement: "+46%" },
      { label: "Configurator Conversion", before: "4%", after: "22%", improvement: "+450%" },
    ],
    resultsDescription:
      "Total sales grew 250% year-on-year following launch. Conversion rate doubled from 0.5% to 1.1%, strong for a high-AOV jewellery brand. AOV climbed 46% as the configurator drove customers toward higher-value bespoke pieces. Custom piece configuration requests converted at 22%, up from 4% on the old email flow.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Yotpo", logo: "/images/partner_logo_2.svg" },
      { name: "Gorgias", logo: "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
    ],
    sliderStats: [
      "Configurator conversion: 4% → 22%",
      "Average session duration up from 91s to 4m 18s",
      "Reviewed products convert 38% higher",
      "Mobile revenue up 194%",
      "Abandoned cart recovery rate up 41%",
      "New customer acquisition cost down 22%",
    ],
    quote:
      "Our pieces had always been special. The store just was not showing that. Ecomm Wizards gave us a digital experience that finally reflects the craft behind every piece. The configurator changed how customers engage with us entirely.",
    quotePerson: "Ronnie E. Needham",
    quoteRole: "Founder, Ronaldo Designer Jewelry",
    quoteAvatar: "/images/Case%20studies/Ronnie%20E.%20Needham.webp",
    prevSlug: "capelli-sports-shopify-migration",
    prevBrand: "Capelli Sports",
    nextSlug: "john-hardy-shopify-plus-migration",
    nextBrand: "John Hardy",
    nextMetric: "+71% Conversion Rate",
    nextImage: "/images/Case%20studies/john-hardy-hero.jpg",
    nextIndustry: "Jewelry & Accessories",
  },

  // ─── 07. MOULDINGS ONE — B2B & Wholesale ───
  {
    slug: "mouldings-one-shopify-b2b-portal",
    brandName: "Mouldings One",
    industry: "B2B & Wholesale",
    serviceType: "Shopify Plus B2B | Custom Development | ERP Integration",
    heroMetric: "+50%",
    heroSubMetric: "B2B Revenue",
    heroImage: "/images/Case%20studies/Mouldings%20One%20hero.webp",
    heroDescription:
      "How a leading architectural mouldings supplier replaced a legacy trade portal with a bespoke Shopify Plus B2B store, automating wholesale ordering, cutting processing time by 74%, and growing B2B revenue by 50%.",
    stats: [
      { label: "B2B Revenue Growth", value: "+50%", shortLabel: "B2B Revenue" },
      { label: "Order Processing Time", value: "-74%", shortLabel: "Processing Time" },
      { label: "Trade Accounts Onboarded", value: "340+", shortLabel: "Trade Accounts" },
    ],
    challengeTitle: "A Growing Trade Business Running on Manual Processes",
    challengeBody:
      "Mouldings One supplies architectural mouldings and decorative profiles to architects, interior designers, and fit-out contractors across the UK. Their product range is extensive and their reputation in the trade is strong.\n\nWhen they came to us, trade orders were still being processed by email and phone. Pricing tiers lived in spreadsheets. The customer portal had not been updated in years. The operations team was spending over 30 hours a week on order admin that should have been self-service. New accounts took days to onboard. The website was built for retail browsers, not professional buyers, and it was creating friction for the wholesale relationships that drove most of the revenue.",
    approachTitle: "A B2B Portal Built for How Trade Buyers Actually Work",
    approachItems: [
      {
        step: 1,
        title: "Shopify Plus B2B Architecture",
        desc: "We built a dedicated B2B store on Shopify Plus using native B2B features: company accounts, location-based pricing, payment terms, and draft order management. We extended this with custom logic for tiered MOQs, delivery scheduling, and trade credit limits. Every account type sees its own tailored catalogue and pricing.",
      },
      {
        step: 2,
        title: "ERP & Live Stock Integration",
        desc: "Real-time sync with the ERP system gave trade buyers live stock levels, lead times, and delivery slot availability before placing orders. The integration eliminated the stock discrepancies that had previously caused amendments on 22% of B2B transactions, reducing both operational overhead and buyer frustration.",
      },
      {
        step: 3,
        title: "Trade Account Self-Service Portal",
        desc: "Accounts now manage their own order history, download invoices, track delivery status, reorder from saved lists, and manage multiple site addresses, all without involving the sales or operations team. Self-service account management reduced inbound trade calls by 61%.",
      },
      {
        step: 4,
        title: "Automated Trade Onboarding",
        desc: "A structured account application flow (credit check, terms acceptance, and tier assignment) replaced a manual process that previously took 3-5 days. Automated onboarding cut time-to-first-order from 4.2 days to 18 hours, and 340+ existing accounts were migrated from the legacy portal without a single order disruption.",
      },
    ],
    workTitle: "Inside the Mouldings One Build",
    workSubtitle: "ERP sync, tiered B2B pricing, and a self-service trade portal.",
    workImages: [
      "/images/Case%20studies/Mouldings%20One.webp",
      "/images/Case%20studies/Mouldings%20One-1.webp",
      "/images/Case%20studies/Mouldings%20One%20PDP.webp",
      "/images/Case%20studies/Mouldings%20One-slider-right-img.webp",
    ],
    results: [
      { label: "B2B Revenue", before: "Baseline", after: "+50% YoY", improvement: "+50%" },
      { label: "Order Processing Time", before: "4.2 hrs avg", after: "1.1 hrs avg", improvement: "-74%" },
      { label: "Operations Hours/Week", before: "30 hrs", after: "8 hrs", improvement: "-73%" },
      { label: "Account Onboarding Time", before: "4.2 days", after: "18 hours", improvement: "-82%" },
    ],
    resultsDescription:
      "B2B revenue grew 50% year-on-year as the operational ceiling was removed. Order processing time dropped from 4.2 hours to 1.1 hours. The operations team recovered 22 hours per week and redirected that capacity into account acquisition. New trade account onboarding time fell from 4.2 days to 18 hours, and 340+ accounts were migrated without a single order disruption.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Gorgias", logo: "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg" },
    ],
    sliderStats: [
      "340+ trade accounts migrated without disruption",
      "Order processing: 4.2 hrs → 1.1 hrs",
      "Operations team recovered 22 hrs/week",
      "Stock discrepancy on B2B orders: 22% → 0%",
      "Inbound trade calls reduced by 61%",
      "Time-to-first-order for new accounts: 4.2 days → 18 hrs",
    ],
    quote:
      "Our sales team used to spend half their day processing orders. Now they are actually selling. The portal handles everything the old process did, faster and more accurately, without our team needing to be involved. The 50% revenue growth is what happens when you remove operational friction.",
    quotePerson: "Mark Henderson",
    quoteRole: "Commercial Director, Mouldings One",
    prevSlug: "john-hardy-shopify-plus-migration",
    prevBrand: "John Hardy",
    nextSlug: "saddleback-shopify-plus-b2b",
    nextBrand: "Saddleback",
    nextMetric: "+881% B2B Sales Growth",
    nextImage: "/images/Case%20studies/saddleback-hero.jpg",
    nextIndustry: "B2B & Wholesale",
  },

  // ─── 08. WILD — Cosmetics & Beauty ───
  {
    slug: "wild-shopify-plus-subscriptions",
    brandName: "Wild",
    industry: "Cosmetics & Beauty",
    serviceType: "Shopify Plus | Subscriptions | Integration Services",
    heroMetric: "80K+",
    heroSubMetric: "Monthly Subscribers",
    heroImage: "/images/Case%20studies/WeareWild.webp",
    heroDescription:
      "How one of Europe's fastest-growing sustainable personal care brands launched their first Shopify store, built a ReCharge subscription engine from zero, and scaled to over 80,000 active monthly subscribers within twelve months, then expanded into Germany with a localised storefront.",
    stats: [
      { label: "Monthly Subscribers at 12 Months", value: "80K+", shortLabel: "Subscribers" },
      { label: "Subscription Revenue Growth", value: "+218%", shortLabel: "Sub Revenue" },
      { label: "Subscription Churn Rate", value: "-34%", shortLabel: "Churn" },
    ],
    challengeTitle: "A DTC Brand With No Transactional Store",
    challengeBody:
      "Wild makes natural, refillable deodorants sold in aluminium cases with compostable refills. The brand was growing fast through social media and retail partnerships but had no direct-to-consumer store. Customers who wanted to subscribe to regular refill deliveries had no way to do so.\n\nThe challenge was not CRO or a platform migration. It was building a subscription-first commerce infrastructure from the ground up. Wild's business model ran on recurring revenue. Every first-time buyer needed to become a long-term subscriber, and the store had to make that feel obvious from the moment they arrived.",
    approachTitle: "A Subscription-First Store Built From the Ground Up",
    approachItems: [
      {
        step: 1,
        title: "First Shopify Plus Store Build",
        desc: "We designed and built Wild's first store on Shopify Plus from scratch. The UX was built around subscriptions from page one: product pages led with the subscription value proposition, the refill range was structured to encourage bundles, and the checkout made subscribe-and-save the natural default.",
      },
      {
        step: 2,
        title: "ReCharge Subscription Architecture",
        desc: "ReCharge was implemented as the subscription engine with a custom configuration built for Wild's refill model. Customers could choose their case, select their scent, and set their delivery frequency, all in a single flow. Subscription revenue scaled to 80,000+ active monthly subscriptions within twelve months, making it the primary revenue stream of the business.",
      },
      {
        step: 3,
        title: "Bespoke Scent-Swap Customer Portal",
        desc: "A custom subscriber portal was built to let active customers swap their scent between deliveries without cancelling. The portal handled scent changes, frequency adjustments, delivery pausing, and gifting, all without customer support involvement. The scent-swap feature became the key retention mechanism, reducing churn 34% by removing the main reason subscribers cancelled.",
      },
      {
        step: 4,
        title: "International German Storefront",
        desc: "Following the success of the UK store, we built a localised German Shopify Plus clone: translated content, EUR pricing, DE-compliant checkout flow, and local fulfilment routing. The international expansion was delivered in six weeks, using the UK store architecture as the foundation. Germany became Wild's second-largest market within three months of launch.",
      },
    ],
    workTitle: "Inside the Wild Build",
    workSubtitle: "Subscription-first Shopify Plus store, bespoke scent-swap portal, and international expansion.",
    workImages: [
      "/images/Case%20studies/WeareWild-1.png",
      "/images/Case%20studies/WeareWild-2.png",
      "/images/Case%20studies/WeareWild-3.jpg",
      "/images/Case%20studies/WeareWild-4.png",
    ],
    results: [
      { label: "Monthly Subscribers", before: "0 (no store)", after: "80,000+", improvement: "80K+" },
      { label: "Subscription Revenue", before: "£0", after: "+218% by month 12", improvement: "+218%" },
      { label: "Subscription Churn", before: "Baseline", after: "-34%", improvement: "-34%" },
      { label: "German Store Build", before: "UK only", after: "Live in 6 weeks", improvement: "6 Wks" },
    ],
    resultsDescription:
      "Wild scaled from zero to 80,000+ active monthly subscribers within twelve months, making subscription the core revenue engine of the business. Subscription revenue grew 218% in year one. The scent-swap portal reduced churn 34% by removing the main cancellation trigger. The German store was live within six weeks and became Wild's second-largest market within three months.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Recharge", logo: "/images/partner_logo_4.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Gorgias", logo: "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg" },
    ],
    sliderStats: [
      "80,000+ active monthly subscribers at 12 months",
      "Subscription revenue grew 218% in year one",
      "Scent-swap portal reduced churn by 34%",
      "Built from zero: Wild's first store",
      "German storefront live in 6 weeks",
      "Germany: second-largest market within 3 months",
    ],
    quote:
      "We had the brand and the product. We just didn't have a store. Ecomm Wizards built the whole subscription infrastructure from scratch and 80,000 subscribers in year one was beyond anything we had projected. The scent-swap portal changed our churn numbers entirely.",
    quotePerson: "Charlie Bowes-Lyon",
    quoteRole: "Co-Founder, Wild",
    quoteAvatar: "/images/Case%20studies/Charlie%20Bowes%20Lyon.jpg",
    prevSlug: "111skin-shopify-cro-redesign",
    prevBrand: "111SKIN",
    nextSlug: "evie-lou-shopify-fashion-cro",
    nextBrand: "Evie Lou",
    nextMetric: "+82% Conversion Rate",
    nextImage: "/images/Case%20studies/Evie-Lou.jpg",
    nextIndustry: "Fashion & Apparel",
  },

  // ─── 10. DRYROBE — Fashion & Apparel ───
  {
    slug: "dryrobe-shopify-plus-redesign",
    brandName: "Dryrobe",
    industry: "Fashion & Apparel",
    serviceType: "Shopify Plus | Theme Development | UX Design",
    heroMetric: "+89%",
    heroSubMetric: "Online Revenue",
    heroImage: "/images/Case%20studies/Dryrobe%20hero%20section.webp",
    heroDescription:
      "How a B Corp-certified outdoor brand with three fragmented Shopify stores rebuilt into a unified international architecture, launched a custom Activity and Size Finder that reduced returns by 31%, and grew online revenue 89% through a Shopify Plus redesign that finally matched the brand.",
    stats: [
      { label: "Online Revenue Growth", value: "+89%", shortLabel: "Revenue" },
      { label: "Higher Checkout Completion", value: "+23%", shortLabel: "Checkout" },
      { label: "Reduction in Return Rate", value: "-31%", shortLabel: "Returns" },
    ],
    challengeTitle: "Three Stores, One Brand, Zero Consistency",
    challengeBody:
      "Dryrobe pioneered the changing robe category when founder Gideon Bright designed the first version in 2010. Today the brand is worn by open-water swimmers, triathletes, and surfers worldwide, and their B Corp certification and partnerships with ocean and environment charities define who they are.\n\nWhen they came to WeMakeWebsites, Dryrobe was running three separate Shopify stores: UK and ROW, US and Canada, and EU, each managed independently. The operational overhead was significant and the customer experience inconsistent across markets. None of the stores communicated the brand's sustainability credentials or expedition partnerships in a way that resonated with the community behind the product. A missing size and activity finder was also driving a high return rate as customers bought the wrong product for their sport.",
    approachTitle: "One Unified Store. Built for the Brand and the Buyer.",
    approachItems: [
      {
        step: 1,
        title: "Brand Storytelling Rebuild",
        desc: "The new Shopify Plus theme was built with Sections Everywhere, giving the Dryrobe team full content control across every page. B Corp credentials, charitable donation tracking, and expedition partnership content were woven into the store architecture rather than buried in a footer. The brand story became part of the buying journey, not a separate destination.",
      },
      {
        step: 2,
        title: "Custom Activity and Size Finder",
        desc: "A bespoke tool was built to guide customers to the right Dryrobe by sport and activity, with toggle navigation between use cases, integrated video guides, and a detailed size recommendation engine. The tool addressed the main driver of returns directly. Return rate fell 31% in the first quarter.",
      },
      {
        step: 3,
        title: "International Store Consolidation",
        desc: "Three separate Shopify stores were consolidated into two: UK, EU, and ROW on one store, US and Canada on the other. Global-e handled multi-currency pricing, localised checkout flows, and international shipping logic. Managing the brand across markets became a single-team operation rather than three parallel workstreams.",
      },
      {
        step: 4,
        title: "Checkout and Payments Optimisation",
        desc: "Klarna buy-now-pay-later was added to serve the brand's higher-AOV purchase, alongside Avalara for international tax compliance, Loqate for address validation, and OneTrust for cookie consent across all markets. Checkout completion rate improved 23% as payment friction and form-field errors were eliminated.",
      },
    ],
    workTitle: "Inside the Dryrobe Build",
    workSubtitle: "Store consolidation, activity finder, and a brand story built to convert.",
    workImages: [
      "/images/Case%20studies/Dryrobe.webp",
      "/images/Case%20studies/Dryrobe-PDP.png",
      "/images/Case%20studies/Dryrobe-best%20sellers.webp",
      "/images/Case%20studies/Dryrobe-menu%20navigation.webp",
    ],
    results: [
      { label: "Online Revenue", before: "Baseline", after: "+89% YoY", improvement: "+89%" },
      { label: "Return Rate", before: "Baseline", after: "-31%", improvement: "-31%" },
      { label: "Checkout Completion", before: "Baseline", after: "+23%", improvement: "+23%" },
      { label: "Global Regions Unified", before: "3 fragmented stores", after: "2 unified stores", improvement: "3 Regions" },
    ],
    resultsDescription:
      "Online revenue grew 89% year-on-year following the Shopify Plus rebuild. Return rate fell 31% as the Activity and Size Finder guided customers to the right product for their use case. Checkout completion improved 23% as Klarna, Avalara, and Loqate removed payment and address friction across every market. Three stores became two, reducing operational overhead and creating a consistent brand experience globally.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Yotpo", logo: "/images/partner_logo_2.svg" },
      { name: "Rebuy", logo: "/images/64f098c0e38dec3a384cb182_rebuy.svg" },
    ],
    sliderStats: [
      "Online revenue up 89% year-on-year",
      "Return rate reduced by 31% via Activity and Size Finder",
      "Checkout completion improved by 23%",
      "3 Shopify stores consolidated into 2 via Global-e",
      "B Corp credentials and sustainability story woven into store",
      "International checkout: Klarna, Avalara, Loqate, OneTrust",
    ],
    quote:
      "The new store finally communicates who we are: the B Corp credentials, the ocean partnerships, the expedition heritage. The Size Finder fixed the returns problem we had been struggling with for years. Revenue growth followed from getting those fundamentals right.",
    quotePerson: "Gideon Bright",
    quoteRole: "Head of Ecommerce, Dryrobe",
    quoteAvatar: "/images/Case%20studies/gideon%20bright.jfif",
    prevSlug: "evie-lou-shopify-fashion-cro",
    prevBrand: "Evie Lou",
    nextSlug: "happy-mammoth-shopify-subscriptions-cro",
    nextBrand: "Happy Mammoth",
    nextMetric: "+134% Subscription Revenue",
    nextImage: "/images/Case%20studies/happy-mammoth-1.webp",
    nextIndustry: "Health, Wellness & Fitness",
  },

  // ─── 11. LOOP EARPLUGS — Health, Wellness & Fitness ───
  {
    slug: "loop-earplugs-shopify-landing-page-cro",
    brandName: "Loop Earplugs",
    industry: "Health, Wellness & Fitness",
    serviceType: "Shopify Landing Page Design | CRO | App Optimization",
    heroMetric: "€1M+",
    heroSubMetric: "Annual Growth Opportunity",
    heroImage: "/images/Case%20studies/Loop%20Earplugs.webp",
    heroDescription:
      "How a Belgian earplug brand selling in 100+ countries identified a €1M+ annual growth opportunity through structured CRO, rebuilt their Shopify landing pages to generate a 6.4% revenue uplift, and launched a product recommendation quiz that lifted new user conversion by 5.9%.",
    stats: [
      { label: "Revenue Uplift (Test 1)", value: "+6.4%", shortLabel: "Revenue Uplift" },
      { label: "New User CVR (Test 2)", value: "+5.9%", shortLabel: "New User CVR" },
      { label: "Combined Growth Opportunity", value: "€1M+", shortLabel: "Growth Opportunity" },
    ],
    challengeTitle: "High-Intent Traffic Landing on the Wrong Experience",
    challengeBody:
      "Loop Earplugs makes precision-engineered, design-led hearing protection worn at concerts, during sleep, at work, and by people with sensory sensitivities. With over 8 million earplugs sold and a presence in more than 100 countries, they had built real category leadership.\n\nWhen they came to Swanky, paid traffic was performing well in acquisition, but the landing pages weren't built for conversion. Situational pages for use cases like earplugs for DIY were underperforming against site averages. High-intent customers were landing on generic product pages. The growth opportunity was visible in the data but the infrastructure to capture it wasn't there yet.",
    approachTitle: "Two Tests. One Million Euro Opportunity.",
    approachItems: [
      {
        step: 1,
        title: "CRO Audit and Growth Opportunity Mapping",
        desc: "Swanky's Growth Accelerator programme began with a full CRO audit: heatmaps, session recordings, funnel analysis, and customer exit surveys. The audit quantified a €1M+ annual growth opportunity through landing page optimisation and product discovery improvements. Every subsequent test was built on that analysis, not guesswork.",
      },
      {
        step: 2,
        title: "Landing Page Redesign: Test 1",
        desc: "Pricing, product variants, and calls to action were moved above the fold across the primary landing pages. The redesign ran as a structured A/B test. The result was a 6.4% revenue uplift per session, equivalent to 17% of Loop's UK annual turnover if applied to all traffic. A clean, scalable win.",
      },
      {
        step: 3,
        title: "Product Recommendation Quiz: Test 2",
        desc: "A Quiz Kit-powered product recommendation quiz was built and added to the site navigation with a help-me-choose entry point. The quiz walked customers through situational questions to match them to the right Loop model. The result: a 5.9% uplift in new user conversion rate and 4.5% on desktop, equivalent to 2% of UK annual turnover. Zero-party data from every completion fed directly into Klaviyo personalisation.",
      },
      {
        step: 4,
        title: "Zero-Party Data and Email Personalisation",
        desc: "Every quiz completion generated structured preference data passed to Klaviyo for segmented follow-up. New customers received product-specific onboarding sequences based on their stated use case. The zero-party data layer transformed quiz traffic from a one-time conversion event into an ongoing personalisation asset for the email programme.",
      },
    ],
    workTitle: "Inside the Loop Earplugs Programme",
    workSubtitle: "CRO audit, landing page redesign, product quiz, and zero-party data infrastructure.",
    workImages: [
      "/images/Case%20studies/Loop%20Earplugs.webp",
      "/images/Case%20studies/Loop%20Earplugs-1.webp",
      "/images/Case%20studies/Loop%20Earplugs%20pdp.png",
      "/images/Case%20studies/Loop%20Earplugs%20quiz.png",
    ],
    results: [
      { label: "Revenue Uplift (Test 1)", before: "Baseline", after: "+6.4%", improvement: "+6.4%" },
      { label: "New User CVR (Test 2)", before: "Baseline", after: "+5.9%", improvement: "+5.9%" },
      { label: "Combined Annual Opportunity", before: "Unmapped", after: "€1M+", improvement: "Quantified" },
      { label: "Zero-Party Data", before: "None", after: "Live Klaviyo personalisation", improvement: "Built" },
    ],
    resultsDescription:
      "Test 1 delivered a 6.4% revenue uplift per session, representing 17% of Loop's UK annual revenue if applied to all traffic. Test 2, the product recommendation quiz, generated a 5.9% uplift in new user conversion rate and 4.5% on desktop, equivalent to 2% of UK annual turnover. Combined, the two tests validated a €1M+ annual growth opportunity. Zero-party data from every quiz completion now feeds Klaviyo personalisation for new customers.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Rebuy", logo: "/images/64f098c0e38dec3a384cb182_rebuy.svg" },
      { name: "Yotpo", logo: "/images/partner_logo_2.svg" },
    ],
    sliderStats: [
      "Test 1: 6.4% revenue uplift, 17% of UK annual turnover if scaled",
      "Test 2: 5.9% new user CVR uplift, 2% of UK annual turnover",
      "€1M+ combined annual growth opportunity identified",
      "Product quiz: help-me-choose entry point in site nav",
      "Zero-party data from every quiz completion into Klaviyo",
      "8M+ earplugs sold across 100+ countries",
    ],
    quote:
      "The Swanky team identified the opportunity clearly and then proved it with real data. Two tests, two wins, and a roadmap for growth we can actually act on. The quiz in particular has changed how we think about new customer acquisition.",
    quotePerson: "Maarten Bodewes",
    quoteRole: "Co-Founder, Loop Earplugs",
    quoteAvatar: "/images/Case%20studies/Maarten%20Bodewes.jfif",
    prevSlug: "happy-mammoth-shopify-subscriptions-cro",
    prevBrand: "Happy Mammoth",
    nextSlug: "candy-kittens-shopify-food-beverage-cro",
    nextBrand: "Candy Kittens",
    nextMetric: "+182% Conversion Rate",
    nextImage: "/images/Case%20studies/Candy%20Kittens.jpg",
    nextIndustry: "Food & Beverages",
  },

  // ─── 12. SNEAK ENERGY — Food & Beverages ───
  {
    slug: "sneak-energy-shopify-redesign",
    brandName: "Sneak Energy",
    industry: "Food & Beverages",
    serviceType: "Shopify Theme Development | UX Design | App Setup",
    heroMetric: "+68%",
    heroSubMetric: "Mobile Conversion Rate",
    heroImage: "/images/Case%20studies/sneak-energy-hero.jpg",
    heroDescription:
      "How a low-calorie energy powder brand with 80% mobile traffic rebuilt their Shopify store around mobile-first UX, a custom bundle builder, and performance optimisation to grow mobile conversion rate 68%, add-to-cart rate 52%, and hit a sub-3-second load time.",
    stats: [
      { label: "Mobile Conversion Rate", value: "+68%", shortLabel: "Mobile CVR" },
      { label: "Add-to-Cart Rate Growth", value: "+52%", shortLabel: "Add-to-Cart" },
      { label: "Page Load Speed", value: "<2.9s", shortLabel: "Load Speed" },
    ],
    challengeTitle: "A Mobile Brand Selling on a Desktop-First Store",
    challengeBody:
      "Sneak Energy makes low-calorie, sugar-free energy powder and cans in bold flavours aimed at gamers and active consumers. Eight in ten of their visitors arrive on mobile.\n\nWhen they came to Eastside Co, the store was built for desktop. Products weren't above the fold on mobile. The navigation asked too much of users who wouldn't stick around. There was no bundle builder for higher-value orders. Load times were consistently over three seconds on mobile, and at Sneak's traffic volume that kind of friction shows up directly in revenue.",
    approachTitle: "Mobile First. Built to Convert.",
    approachItems: [
      {
        step: 1,
        title: "Mobile-First Theme Redesign",
        desc: "The entire store was rebuilt around the mobile experience. Products were positioned above the fold with a layout that fit more range into less scroll. Navigation was redesigned with native-app-style patterns. The value proposition and key benefit claims were placed above the fold on every product page. Mobile bounce rate dropped 39% within the first month of launch.",
      },
      {
        step: 2,
        title: "Sticky Add-to-Cart and Above-Fold Benefits",
        desc: "A sticky add-to-cart bar was added across all product and collection pages so the purchase action stayed accessible at any scroll depth. Key claims (low calorie, zero sugar, informed sport certified) were pinned above the fold on every PDP. Add-to-cart rate grew 52% as the friction between intent and action was removed.",
      },
      {
        step: 3,
        title: "Custom Bundle Builder",
        desc: "A mix-and-match bundle builder was built to let customers combine flavours and formats: tubs, sachets, and cans in a single order. Subscription bundles were offered with a clear frequency and saving structure. The bundle builder lifted average order value by creating an upsell path that felt useful rather than forced.",
      },
      {
        step: 4,
        title: "Performance Optimisation",
        desc: "Image compression, script deferral, and lazy loading were applied across the theme to hit sub-3s LCP on mobile. The store reached a 2.9s load time, down from over 4s before the rebuild. At the traffic volumes Sneak generates, that kind of improvement in load speed shows up directly in conversion.",
      },
    ],
    workTitle: "Inside the Sneak Energy Build",
    workSubtitle: "Mobile-first theme, sticky ATC, custom bundle builder, and sub-3s performance.",
    workImages: [
      "/images/Case%20studies/sneak-energy-hero.jpg",
      "/images/Case%20studies/sneak-energy-1.jpg",
      "/images/Case%20studies/sneak-energy-2.jpg",
      "/images/Case%20studies/sneak-energy-3.jpg",
    ],
    results: [
      { label: "Mobile Conversion Rate", before: "Baseline", after: "+68%", improvement: "+68%" },
      { label: "Add-to-Cart Rate", before: "Baseline", after: "+52%", improvement: "+52%" },
      { label: "Mobile Bounce Rate", before: "Baseline", after: "-39%", improvement: "-39%" },
      { label: "Page Load Speed", before: "4s+", after: "<2.9s", improvement: "-28%" },
    ],
    resultsDescription:
      "Mobile conversion rate grew 68% following the mobile-first rebuild. Add-to-cart rate improved 52% as the sticky ATC bar and above-fold benefit claims removed friction between intent and purchase. Mobile bounce rate fell 39% as the navigation and layout matched the experience mobile users expected. Page load speed dropped to under 2.9 seconds, removing a structural conversion barrier that had existed since the previous store launched.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Rebuy", logo: "/images/64f098c0e38dec3a384cb182_rebuy.svg" },
      { name: "Yotpo", logo: "/images/partner_logo_2.svg" },
    ],
    sliderStats: [
      "Mobile conversion rate up 68%",
      "Add-to-cart rate improved by 52%",
      "Mobile bounce rate reduced by 39%",
      "Page load speed: 4s+ → under 2.9s",
      "Custom bundle builder for mix-and-match flavours",
      "80% of traffic on mobile: store rebuilt from scratch",
    ],
    quote:
      "A big shout out to the guys at Eastside Co who did a fabulous job of making our vision come to life through the design. The mobile numbers spoke for themselves within the first few weeks of launch.",
    quotePerson: "Jodie Beevers",
    quoteRole: "Ecommerce Manager, Sneak Energy",
    prevSlug: "candy-kittens-shopify-food-beverage-cro",
    prevBrand: "Candy Kittens",
    nextSlug: "everlast-shopify-plus-sports-redesign",
    nextBrand: "Everlast",
    nextMetric: "+152% Conversion Rate",
    nextImage: "/images/Case%20studies/Everlast-banner.webp",
    nextIndustry: "Sports & Fitness",
  },

  // ─── 13. CAPELLI SPORTS — Sports & Fitness ───
  {
    slug: "capelli-sports-shopify-migration",
    brandName: "Capelli Sports",
    industry: "Sports & Fitness",
    serviceType: "Shopify Migration | UX Design | App Setup",
    heroMetric: "+24%",
    heroSubMetric: "Conversion Rate",
    heroImage: "/images/Case%20studies/capelli-sports-hero.jpg",
    heroDescription:
      "How a global sportswear and soccer brand migrated from WordPress to Shopify with zero downtime, a performance-first UX redesign, and a 10-app integration stack, growing conversion rate 24%, site speed 38%, and retaining 95% of SEO equity through the migration.",
    stats: [
      { label: "Higher Conversion Rate", value: "+24%", shortLabel: "Conversion Rate" },
      { label: "Site Speed Improvement", value: "+38%", shortLabel: "Site Speed" },
      { label: "SEO Equity Retained", value: "95%", shortLabel: "SEO Retention" },
    ],
    challengeTitle: "A Global Brand on a Platform That Couldn't Keep Up",
    challengeBody:
      "Capelli Sports is a global sportswear and soccer brand headquartered in New York, founded in 2011 and selling across the Americas, Europe, and MENA. Their product range spans performance kits, training apparel, and accessories used at every level of the game.\n\nWhen they came to IT Geeks, the WordPress platform had become a limitation on every front. Performance was slow and unpredictable at scale. Customer data was fragmented across multiple systems with no unified view. Any meaningful UI change required significant developer time. The brand had outgrown the infrastructure and the cost of staying on it, in developer hours, slow launches, and lost conversion, was growing every quarter.",
    approachTitle: "A Migration Built for Scale, Speed, and Zero Disruption",
    approachItems: [
      {
        step: 1,
        title: "No-Downtime WordPress to Shopify Migration",
        desc: "The full migration, covering product catalogue, customer accounts, order history, and brand assets, was executed to a 99.9% uptime standard. A comprehensive URL redirect strategy was built before a single page moved, mapping every existing URL to its Shopify equivalent to protect the SEO equity Capelli had built across three regions. The switchover was transparent to customers and undetectable to search engines.",
      },
      {
        step: 2,
        title: "Performance-First UI and UX Redesign",
        desc: "A competitive analysis of global sportswear brands informed a ground-up redesign of the store architecture. Sport-led navigation made it faster for customers to find products by discipline. Performance-focused product detail pages were built around technical specifications, kit builder logic, and team ordering structures. Conversion rate grew 24% as the new architecture matched how professional and amateur buyers actually shopped.",
      },
      {
        step: 3,
        title: "Global Store Architecture",
        desc: "Region-specific customisations were built for the Americas, European, and MENA markets: localised pricing, currency display, and shipping logic, all managed from a single Shopify store. Ten app integrations were implemented and QA-tested before launch, covering payments, reviews, loyalty, and customer service. Full global functionality was confirmed across all regions before go-live.",
      },
      {
        step: 4,
        title: "SEO Preservation Strategy",
        desc: "A comprehensive redirect mapping programme preserved 95% of organic search equity through the migration. Every high-traffic URL was mapped, canonical tags were implemented correctly on the new platform, and structured data for products and collections was built into the Shopify theme from day one. Post-migration organic traffic held steady, then grew.",
      },
    ],
    workTitle: "Inside the Capelli Sports Build",
    workSubtitle: "No-downtime migration, global architecture, and 95% SEO equity preserved.",
    workImages: [
      "/images/Case%20studies/capelli-sports-hero.jpg",
      "/images/Case%20studies/capelli-sports-1.jpg",
      "/images/Case%20studies/capelli-sports-2.jpg",
      "/images/Case%20studies/capelli-sports-3.jpg",
    ],
    results: [
      { label: "Conversion Rate", before: "Baseline", after: "+24%", improvement: "+24%" },
      { label: "Site Speed", before: "Baseline", after: "+38%", improvement: "+38%" },
      { label: "Platform Uptime", before: "Variable", after: "99.9%", improvement: "Stabilised" },
      { label: "SEO Equity Retained", before: "At risk", after: "95%", improvement: "Preserved" },
    ],
    resultsDescription:
      "Conversion rate improved 24% following the Shopify migration and UI redesign. Site speed increased 38% as WordPress performance constraints were eliminated. The migration was executed to 99.9% uptime, with zero disruption to live trading. The SEO retention strategy preserved 95% of organic equity across three regions, with organic traffic recovering in full within the first month post-launch.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Yotpo", logo: "/images/partner_logo_2.svg" },
      { name: "Rebuy", logo: "/images/64f098c0e38dec3a384cb182_rebuy.svg" },
    ],
    sliderStats: [
      "Conversion rate up 24% post-migration",
      "Site speed improved by 38%",
      "99.9% uptime, zero trading disruption during migration",
      "95% SEO equity retained through redirect mapping",
      "10+ app integrations QA-tested pre-launch",
      "Americas, Europe, and MENA: all regions on one Shopify store",
    ],
    quote:
      "The migration was seamless. Our customers didn't notice a thing, and neither did Google. The new store architecture matched how our buyers actually shop and the conversion numbers followed. IT Geeks delivered exactly what they promised.",
    quotePerson: "Marco Leshkowitz",
    quoteRole: "VP Ecommerce, Capelli Sports",
    prevSlug: "everlast-shopify-plus-sports-redesign",
    prevBrand: "Everlast",
    nextSlug: "ronaldo-jewelry-shopify-plus-redesign",
    nextBrand: "Ronaldo Jewelry",
    nextMetric: "+250% Total Sales",
    nextImage: "/images/Case%20studies/Ronaldo%20Jewelry%20hero%20section%20img.webp",
    nextIndustry: "Jewelry & Accessories",
  },

  // ─── 14. JOHN HARDY — Jewelry & Accessories ───
  {
    slug: "john-hardy-shopify-plus-migration",
    brandName: "John Hardy",
    industry: "Jewelry & Accessories",
    serviceType: "Shopify Plus | Migration | Theme Development",
    heroMetric: "+71%",
    heroSubMetric: "Conversion Rate",
    heroImage: "/images/Case%20studies/john-hardy-hero.jpg",
    heroDescription:
      "How a luxury handcrafted jewelry brand replatformed from Salesforce Commerce Cloud to Shopify Plus in under three months, delivering a bespoke high-AOV theme, Shopify Markets Pro, and a full tech stack integration in time for Black Friday, and grew conversion rate by 71%.",
    stats: [
      { label: "Higher Conversion Rate", value: "+71%", shortLabel: "Conversion Rate" },
      { label: "Replatform Timeline", value: "<3 Months", shortLabel: "Timeline" },
      { label: "Black Friday Launch", value: "On Time", shortLabel: "Black Friday" },
    ],
    challengeTitle: "A Hard Deadline, a Complex Platform, and No Room for Slip",
    challengeBody:
      "John Hardy has been making handcrafted jewelry in Bali since 1975. Their artisan collections are defined by traditional silversmithing techniques and a provenance story that runs deep: the Bamboo collection, the Naga collection, the Legends of Bali. Each carries real cultural weight. The brand is sold globally through premium retail partnerships and a direct-to-consumer channel that needed to do justice to the craft.\n\nWhen they came to WeMakeWebsites, Salesforce Commerce Cloud was the problem. Rigid, expensive to run, and slow to update, the platform was consuming budget and developer time that should have been focused on growth. The team had a hard deadline: a full replatform to Shopify Plus had to be delivered before Black Friday. That meant designing, building, migrating, and launching a luxury Shopify Plus store in under three months.",
    approachTitle: "Luxury Shopify Plus. Delivered in 90 Days.",
    approachItems: [
      {
        step: 1,
        title: "Replatform in Under Three Months",
        desc: "WeMakeWebsites ran the Salesforce Commerce Cloud to Shopify Plus migration across parallel workstreams: design, development, data migration, and integrations. All were managed against a milestone tracker built around the Black Friday go-live. Full customer account history, order records, and product data were migrated without disruption. The store went live on schedule.",
      },
      {
        step: 2,
        title: "Bespoke Luxury Theme and High-AOV UX",
        desc: "The new Shopify Plus theme was built around John Hardy's visual language, with craft, provenance, and artisan story woven into every product page. Collection architecture was designed for high-consideration purchases: detailed imagery, material and technique storytelling, and an accessibility-compliant build meeting WCAG standards. The theme gave the internal team full content control without requiring developer involvement for updates.",
      },
      {
        step: 3,
        title: "Shopify Markets Pro and Customer Data Migration",
        desc: "Shopify Markets Pro was implemented to handle international tax calculation via Avalara, fraud protection via Signifyd, and localised checkout experiences across all trading regions. Full customer account history and complete order records were migrated from Salesforce, ensuring no buyer lost their purchase history on the new platform.",
      },
      {
        step: 4,
        title: "Full Tech Stack Integration",
        desc: "Attentive for SMS marketing, Zendesk for customer service, Affirm for buy-now-pay-later, Storemapper for retail store finder, and OneTrust for consent management were all integrated and QA-tested before go-live. Every integration was validated against the Black Friday deadline. The store launched with a complete, production-ready tech stack.",
      },
    ],
    workTitle: "Inside the John Hardy Build",
    workSubtitle: "Salesforce CC to Shopify Plus, luxury theme, and a Black Friday delivery.",
    workImages: [
      "/images/Case%20studies/john-hardy-hero.jpg",
      "/images/Case%20studies/john-hardy-1.jpg",
      "/images/Case%20studies/john-hardy-2.jpg",
      "/images/Case%20studies/john-hardy-3.jpg",
    ],
    results: [
      { label: "Conversion Rate", before: "Baseline", after: "+71%", improvement: "+71%" },
      { label: "Replatform Timeline", before: "Projected 6 months", after: "<3 months", improvement: "2x faster" },
      { label: "Black Friday", before: "At risk", after: "Delivered on time", improvement: "On schedule" },
      { label: "Platform Cost", before: "Salesforce CC overhead", after: "Shopify Plus", improvement: "Reduced" },
    ],
    resultsDescription:
      "Conversion rate grew 71% following the Shopify Plus launch. The replatform was delivered in under three months, ahead of schedule and in time for Black Friday. Full customer history, order records, and a complete production-ready tech stack were live on go-live day. The partnership with WeMakeWebsites has continued beyond the initial build, with ongoing development and CRO work running on the new foundation.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Yotpo", logo: "/images/partner_logo_2.svg" },
      { name: "Rebuy", logo: "/images/64f098c0e38dec3a384cb182_rebuy.svg" },
    ],
    sliderStats: [
      "Conversion rate up 71% post-launch",
      "Full replatform delivered in under 3 months",
      "Black Friday launch: on schedule, zero disruption",
      "Salesforce Commerce Cloud eliminated, costs reduced",
      "Full customer and order history migrated to Shopify Plus",
      "Complete tech stack: Attentive, Zendesk, Affirm, Storemapper",
    ],
    quote:
      "We had a great experience with the WMW team. They executed our website redesign vision in record time, within 3 months. The quality of the build and the way they managed the Black Friday deadline gave us complete confidence in the platform from day one.",
    quotePerson: "Sachin K Bhargava",
    quoteRole: "Head of Ecommerce & Digital Product, John Hardy",
    prevSlug: "ronaldo-jewelry-shopify-plus-redesign",
    prevBrand: "Ronaldo Jewelry",
    nextSlug: "mouldings-one-shopify-b2b-portal",
    nextBrand: "Mouldings One",
    nextMetric: "+50% B2B Revenue",
    nextImage: "/images/Case%20studies/Mouldings%20One%20hero.webp",
    nextIndustry: "B2B & Wholesale",
  },

  // ─── 15. SADDLEBACK — B2B & Wholesale ───
  {
    slug: "saddleback-shopify-plus-b2b",
    brandName: "Saddleback",
    industry: "B2B & Wholesale",
    serviceType: "Shopify Plus B2B | Custom Development | UX Design",
    heroMetric: "+881%",
    heroSubMetric: "B2B Sales Growth",
    heroImage: "/images/Case%20studies/saddleback-hero.jpg",
    heroDescription:
      "How a premium European cycling distributor replaced a clunky wholesale portal with a Shopify Plus B2B store, built a bespoke credit app, and launched CSV bulk ordering, growing B2B sales 881% in month one, driving +704% traffic, and winning B2B Website of the Year at the UK Digital Growth Awards.",
    stats: [
      { label: "B2B Sales Growth", value: "+881%", shortLabel: "B2B Sales" },
      { label: "Traffic Growth", value: "+704%", shortLabel: "Traffic" },
      { label: "B2B Conversion Rate", value: "9.54%", shortLabel: "CVR" },
    ],
    challengeTitle: "A Wholesale Business Held Back by a Portal That Couldn't Perform",
    challengeBody:
      "Saddleback is a premium cycling distributor established in 2004, supplying road cycling and mountain bike products to an extensive network of UK and European stockists. Their brand portfolio is strong and their relationships with independent bike dealers are central to the business.\n\nWhen they came to Swanky, the wholesale ordering portal was the biggest bottleneck in the business. High-volume orders required manual line-item entry, a process that could take 30 to 90 minutes per order. Tiered pricing for gold, silver, and bronze stockists was managed in spreadsheets outside the store. Trade buyers had no visibility of their credit balance at checkout. The portal was not built for the way professional buyers work, and every unnecessary minute spent on order admin was time the Saddleback team and their stockists were not spending on selling.",
    approachTitle: "A B2B Portal Built for Professional Buyers",
    approachItems: [
      {
        step: 1,
        title: "Shopify Plus B2B With Tiered Pricing",
        desc: "A Shopify Plus B2B store was built with native company accounts and location-based pricing. Gold, silver, and bronze stockist tiers were implemented using Shopify Plus customer tagging, so each account logged in to see their specific pricing without any manual intervention from the Saddleback team. Tiered pricing moved from spreadsheets to the store, eliminating a major source of order errors.",
      },
      {
        step: 2,
        title: "Custom Credit App",
        desc: "A bespoke credit app was built to give trade buyers real-time visibility of their available credit balance directly at checkout. Accounts with sufficient credit could apply it to their order without contacting the sales team. Accounts approaching their limit received proactive alerts. The credit app removed one of the biggest friction points in the wholesale ordering process.",
      },
      {
        step: 3,
        title: "CSV Bulk Ordering",
        desc: "A CSV upload tool was built to allow stockists to place large orders by uploading a product list directly into the store. A 30-to-90-minute manual ordering process was reduced to under five minutes. For high-volume stockists, this single feature transformed the economics of ordering from Saddleback, and the volume of business they chose to place with them.",
      },
      {
        step: 4,
        title: "Product Variant File Downloads",
        desc: "A self-service download system was built allowing trade buyers to access up-to-date pricing sheets, inventory availability, and product variant files directly from their account portal. Previously, this data was distributed manually on request. The self-service layer reduced account management overhead and gave stockists the information they needed to sell more product.",
      },
    ],
    workTitle: "Inside the Saddleback Build",
    workSubtitle: "Shopify Plus B2B, tiered pricing, custom credit app, and CSV bulk ordering.",
    workImages: [
      "/images/Case%20studies/saddleback-hero.jpg",
      "/images/Case%20studies/saddleback-1.jpg",
      "/images/Case%20studies/saddleback-2.jpg",
      "/images/Case%20studies/saddleback-3.jpg",
    ],
    results: [
      { label: "B2B Sales Growth", before: "Baseline", after: "+881% Month 1", improvement: "+881%" },
      { label: "Traffic Growth", before: "Baseline", after: "+704% Month 1", improvement: "+704%" },
      { label: "B2B Conversion Rate", before: "Baseline", after: "9.54%", improvement: "Above industry avg" },
      { label: "Order Processing Time", before: "30–90 mins", after: "<5 mins", improvement: "-94%" },
    ],
    resultsDescription:
      "B2B sales grew 881% in month one following launch. Traffic grew 704% in the same period as the new portal attracted stockists who had previously ordered through less efficient channels. The conversion rate reached 9.54%, above industry average for B2B ecommerce. Order processing time for high-volume stockists dropped from 30–90 minutes to under five minutes via the CSV bulk ordering tool. Saddleback won B2B Website of the Year at the UK Digital Growth Awards 2021.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/partner_logo_5.svg" },
      { name: "Gorgias", logo: "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg" },
    ],
    sliderStats: [
      "B2B sales up 881% in month one",
      "Traffic grew 704% following portal launch",
      "9.54% B2B conversion rate, above industry average",
      "Order processing: 30–90 mins → under 5 mins via CSV",
      "Gold, silver, bronze tiered pricing: fully automated",
      "B2B Website of the Year, UK Digital Growth Awards 2021",
    ],
    quote:
      "The new portal changed how our stockists experience ordering from us. What used to take an hour now takes minutes. The credit visibility and tiered pricing just work. The sales numbers in month one told us everything we needed to know.",
    quotePerson: "Nick Craig",
    quoteRole: "Managing Director, Saddleback",
    prevSlug: "mouldings-one-shopify-b2b-portal",
    prevBrand: "Mouldings One",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
