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
    serviceType: "Shopify CRO | Design & Development",
    heroMetric: "+46%",
    heroSubMetric: "Conversion Rate",
    heroImage: "/images/Case studies/111skin-hero.jpg",
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
    challengeImage: "/images/Case studies/111Skin mockup.jpeg",
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
      "/images/Case studies/111skin.jpg",
      "/images/Case studies/111skin-2.jpg",
      "/images/Case studies/111skin-3.jpg",
      "/images/Case studies/111skin-quiz.jpg",
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
    quoteAvatar: "/images/Case studies/eva-alexandridis.jpg",
    nextSlug: "111skin-shopify-cro-redesign",
    nextBrand: "111SKIN",
    nextMetric: "+46% Conversion Rate",
    nextImage: "/images/Case studies/111skin-hero.jpg",
    nextIndustry: "Cosmetics & Beauty",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
