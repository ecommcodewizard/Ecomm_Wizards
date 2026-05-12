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
      { label: "Average Order Value", before: "£148", after: "£154", improvement: "+4%" },
      { label: "Repeat Purchase Rate", before: "22%", after: "31%", improvement: "+41%" },
    ],
    resultsDescription: "The CRO programme delivered results that went well beyond conversion rate. The 111SKIN Shopify Plus store now converts at 2.1%, up from 1.4% before we started working together. Revenue grew 21% year-on-year, average order value increased from £148 to £154, and the repeat purchase rate climbed from 22% to 31%. The bespoke theme, skin finder quiz, and ongoing A/B testing programme built a store experience that matches the quality of the brand, with a foundation that keeps improving over time.",
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
    nextSlug: "evie-lou-shopify-fashion-cro",
    nextBrand: "Evie Lou",
    nextMetric: "+82% Conversion Rate",
    nextImage: "/images/Case%20studies/111skin-hero.jpg",
    nextIndustry: "Fashion & Apparel",
  },

  // ─── 02. EVIE LOU — Fashion & Apparel ───
  {
    slug: "evie-lou-shopify-fashion-cro",
    brandName: "Evie Lou",
    industry: "Fashion & Apparel",
    serviceType: "Shopify Plus | UX Design | CRO",
    heroMetric: "+82%",
    heroSubMetric: "Conversion Rate",
    heroImage: "/images/Case%20studies/111skin-hero.jpg",
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
    workImages: [],
    results: [
      { label: "Conversion Rate", before: "1.1%", after: "2.0%", improvement: "+82%" },
      { label: "Average Order Value", before: "£94", after: "£123", improvement: "+31%" },
      { label: "Organic Revenue", before: "Baseline", after: "+47% YoY", improvement: "+47%" },
      { label: "Repeat Purchase Rate", before: "19%", after: "38%", improvement: "+100%" },
    ],
    resultsDescription:
      "Conversion rate climbed from 1.1% to 2.0%, an 82% improvement driven by mobile UX and checkout optimisation. AOV lifted 31% as better product discovery and cross-sell logic increased basket size. Organic revenue grew 47% year-on-year, and the retention programme doubled the repeat purchase rate, fundamentally changing the unit economics of the business.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/klaviyo.svg" },
      { name: "Yotpo", logo: "/images/yotpo.svg" },
      { name: "Gorgias", logo: "/images/gorgias.svg" },
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
    quotePerson: "Sarah Mitchell",
    quoteRole: "Head of Ecommerce, Evie Lou",
  },

  // ─── 03. HAPPY MAMMOTH — Health, Wellness & Fitness ───
  {
    slug: "happy-mammoth-shopify-subscriptions-cro",
    brandName: "Happy Mammoth",
    industry: "Health, Wellness & Fitness",
    serviceType: "Shopify Plus | CRO | Subscriptions",
    heroMetric: "+134%",
    heroSubMetric: "Subscription Revenue",
    heroImage: "/images/Case%20studies/111skin-2.jpg",
    heroDescription:
      "How a gut health and hormone balance supplement brand transformed their Shopify Plus store into a subscription engine: rebuilding their product quiz, launching Recharge-powered recurring orders, and adding £22M in annualised subscription revenue.",
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
    workImages: [],
    results: [
      { label: "Subscription Revenue", before: "£380k/mo", after: "£889k/mo", improvement: "+134%" },
      { label: "Conversion Rate", before: "1.9%", after: "3.1%", improvement: "+61%" },
      { label: "Customer LTV (12-mo)", before: "£87", after: "£164", improvement: "+89%" },
      { label: "Subscription Churn", before: "14.2%", after: "10.1%", improvement: "-29%" },
    ],
    resultsDescription:
      "Monthly subscription revenue grew from £380k to £889k, a 134% increase driven by the Recharge build, quiz funnel, and retention flows. Conversion rate climbed from 1.9% to 3.1%, 12-month LTV nearly doubled from £87 to £164, and subscription churn dropped 29% in the first quarter alone. The unit economics of the business changed fundamentally.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Recharge", logo: "/images/recharge.svg" },
      { name: "Klaviyo", logo: "/images/klaviyo.svg" },
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
    quotePerson: "Alex Turner",
    quoteRole: "Head of Growth, Happy Mammoth",
  },

  // ─── 04. CANDY KITTENS — Food & Beverages ───
  {
    slug: "candy-kittens-shopify-food-beverage-cro",
    brandName: "Candy Kittens",
    industry: "Food & Beverages",
    serviceType: "Shopify Plus | CRO | Theme Development",
    heroMetric: "+182%",
    heroSubMetric: "Conversion Rate",
    heroImage: "/images/Case%20studies/111skin-3.jpg",
    heroDescription:
      "How a premium vegan confectionery brand rebuilt their Shopify Plus store around editorial storytelling, a gifting-first UX, and a flexible seasonal campaign infrastructure that nearly tripled their conversion rate and added £6.4M in new annual revenue.",
    stats: [
      { label: "Higher Conversion Rate", value: "+182%", shortLabel: "Conversion Rate" },
      { label: "New Annual Revenue", value: "+£6.4M", shortLabel: "Revenue" },
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
    workImages: [],
    results: [
      { label: "Conversion Rate", before: "0.9%", after: "2.5%", improvement: "+182%" },
      { label: "Annual Revenue", before: "Baseline", after: "+£6.4M YoY", improvement: "+£6.4M" },
      { label: "Average Order Value", before: "£18", after: "£24", improvement: "+34%" },
      { label: "Gifting Revenue Share", before: "55%", after: "67%", improvement: "+12pts" },
    ],
    resultsDescription:
      "Conversion rate grew from 0.9% to 2.5%, nearly tripling, with the gift finder and editorial homepage driving the bulk of the lift. AOV rose 34%, annual revenue grew by £6.4M, and the gifting revenue share climbed from 55% to 67%. The first Christmas post-launch was the brand's highest-revenue month in its history.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Klaviyo", logo: "/images/klaviyo.svg" },
      { name: "Rebuy", logo: "/images/64f098c0e38dec3a384cb182_rebuy.svg" },
      { name: "Yotpo", logo: "/images/yotpo.svg" },
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
  },

  // ─── 05. EVERLAST — Sports & Fitness ───
  {
    slug: "everlast-shopify-plus-sports-redesign",
    brandName: "Everlast",
    industry: "Sports & Fitness",
    serviceType: "Shopify Plus | CRO | Theme Development",
    heroMetric: "+152%",
    heroSubMetric: "Conversion Rate",
    heroImage: "/images/Case%20studies/111skin-hero section.png",
    heroDescription:
      "How the world's most iconic boxing brand rebuilt their Shopify Plus store with a performance-first theme, product comparison tooling, and a dual B2C and trade checkout architecture that delivered a 152% conversion rate lift and 48% order growth.",
    stats: [
      { label: "Higher Conversion Rate", value: "+152%", shortLabel: "Conversion Rate" },
      { label: "Increase in AOV", value: "+21%", shortLabel: "AOV" },
      { label: "Growth in Total Orders", value: "+48%", shortLabel: "Orders" },
    ],
    challengeTitle: "An Iconic Brand Held Back by an Outdated Store",
    challengeBody:
      "Everlast has been making boxing and fitness equipment for over 100 years. The brand is trusted by professional fighters and fitness enthusiasts worldwide and is one of the most recognised names in sport.\n\nWhen they came to us, the site was running on a default theme with limited product filtering across a large catalogue. A £180 professional boxing glove was being presented the same way as any commodity product. The store was also serving two very different audiences at once. Serious athletes buying technical equipment, and lifestyle fitness buyers, with no architecture built to handle both. A trade portal did not exist. Inventory issues were causing amendments on a significant portion of B2B orders.",
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
    workImages: [],
    results: [
      { label: "Conversion Rate", before: "0.8%", after: "2.0%", improvement: "+152%" },
      { label: "Average Order Value", before: "£142", after: "£172", improvement: "+21%" },
      { label: "Total Orders", before: "Baseline", after: "+48% YoY", improvement: "+48%" },
      { label: "Trade Revenue", before: "£0", after: "£340k/mo", improvement: "New Channel" },
    ],
    resultsDescription:
      "Conversion rate lifted 152%, from 0.8% to 2.0%, driven by the navigation rebuild and performance improvements. AOV grew 21%, total orders increased 48% year-on-year, and the trade portal reached £340k/month within six months of launch as a net-new revenue channel.",
    techStack: [
      { name: "Shopify Plus", logo: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg" },
      { name: "Rebuy", logo: "/images/64f098c0e38dec3a384cb182_rebuy.svg" },
      { name: "Klaviyo", logo: "/images/klaviyo.svg" },
      { name: "Gorgias", logo: "/images/gorgias.svg" },
    ],
    sliderStats: [
      "Catalogue abandonment down 38% post navigation rebuild",
      "Mobile conversion rate up 188%",
      "Trade portal reached £340k/month in 6 months",
      "Cart abandonment rate down 31%",
      "Page load time cut from 6.1s to 1.9s",
      "Customer support tickets reduced by 38%",
    ],
    quote:
      "We needed a store that could handle the complexity of the brand: serious athletes, casual fitness buyers, and trade accounts, all in one place. Ecomm Wizards built exactly that. The conversion numbers and the trade portal revenue both exceeded what we projected.",
    quotePerson: "David Clarke",
    quoteRole: "Head of Digital, Everlast",
  },

  // ─── 06. RONALDO JEWELRY — Jewelry & Accessories ───
  {
    slug: "ronaldo-jewelry-shopify-plus-redesign",
    brandName: "Ronaldo Jewelry",
    industry: "Jewelry & Accessories",
    serviceType: "Shopify Plus | UX Design | CRO",
    heroMetric: "+250%",
    heroSubMetric: "Total Sales",
    heroImage: "/images/Case%20studies/111skin.jpg",
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
    workImages: [],
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
      { name: "Yotpo", logo: "/images/yotpo.svg" },
      { name: "Gorgias", logo: "/images/gorgias.svg" },
      { name: "Klaviyo", logo: "/images/klaviyo.svg" },
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
    quotePerson: "Ron Laughter",
    quoteRole: "Founder, Ronaldo Designer Jewelry",
  },

  // ─── 07. MOULDINGS ONE — B2B & Wholesale ───
  {
    slug: "mouldings-one-shopify-b2b-portal",
    brandName: "Mouldings One",
    industry: "B2B & Wholesale",
    serviceType: "Shopify Plus B2B | Custom Development | ERP Integration",
    heroMetric: "+50%",
    heroSubMetric: "B2B Revenue",
    heroImage: "/images/Case%20studies/111skin-quiz.jpg",
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
    workImages: [],
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
      { name: "Klaviyo", logo: "/images/klaviyo.svg" },
      { name: "Gorgias", logo: "/images/gorgias.svg" },
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
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
