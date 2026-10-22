// Blog topics map 1:1 to the services we sell, so every post points a reader
// at something they can buy.
export const TOPICS = [
  { slug: "development", label: "Shopify Development", specialist: "Shopify Development Specialist", service: { label: "Shopify Development", href: "/services/shopify-development-agency" } },
  { slug: "design", label: "Design & UX", specialist: "Design & UX Specialist", service: { label: "Shopify UX & UI Design", href: "/services/shopify-ux-and-ui-design" } },
  { slug: "seo", label: "SEO", specialist: "SEO Specialist", service: { label: "Shopify SEO", href: "/services/shopify-seo-agency" } },
  { slug: "aeo-geo", label: "AEO & GEO", specialist: "AEO & GEO Specialist", service: { label: "Ecommerce SEO, AEO & GEO", href: "/services/ecommerce-seo-agency" } },
  { slug: "email", label: "Email & SMS", specialist: "Email Marketing Specialist", service: { label: "Klaviyo Audit", href: "/services/klaviyo-audit" } },
  { slug: "agentic-commerce", label: "Agentic Commerce", specialist: "Agentic Commerce Specialist", service: { label: "Agentic Commerce", href: "/services/shopify-agentic-commerce" } },
  { slug: "cro", label: "CRO", specialist: "CRO Specialist", service: { label: "Shopify CRO", href: "/services/shopify-cro-agency" } },
  { slug: "migration", label: "Migration", specialist: "Migration Specialist", service: { label: "Shopify Migration", href: "/services/migration" } },
] as const;

export type TopicSlug = (typeof TOPICS)[number]["slug"];

export const topicOf = (slug: TopicSlug) => TOPICS.find((t) => t.slug === slug)!;

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  topic: TopicSlug;
  date: string; // ISO yyyy-mm-dd
  readMins: number;
  author: string;
  image?: string; // cover photo; the card shows a plain dark panel without one
};

export const topicLabel = (slug: TopicSlug) =>
  TOPICS.find((t) => t.slug === slug)!.label;

const IMG = "/images/Case%20studies/";

// SAMPLE POSTS: placeholders for the layout, with case-study photos
// standing in for real covers. Replace them with real articles before this
// page is merged, because merging publishes it.
export const POSTS: Post[] = [
  {
    slug: "sell-inside-chatgpt-shopify-agentic-commerce",
    title: "Your next customer might never see your store",
    excerpt:
      "AI assistants can now find, compare and buy products for shoppers. Here's what your Shopify catalog needs so they pick you.",
    topic: "agentic-commerce",
    date: "2026-10-16",
    readMins: 8,
    author: "Ecomm Wizards Team",
    image: `${IMG}Andrea%20Maack%20Klaviyo%20hero.webp`,
  },
  {
    slug: "get-cited-by-ai-search",
    title: "How to get your products cited in AI answers",
    excerpt:
      "Ranking on Google isn't the whole game now. The pages AI tools quote share a few traits, and you can build every one of them.",
    topic: "aeo-geo",
    date: "2026-10-09",
    readMins: 7,
    author: "Ecomm Wizards Team",
    image: `${IMG}Capelli%20Sports%20hero%20image.webp`,
  },
  {
    slug: "klaviyo-flows-that-pay-for-themselves",
    title: "Five Klaviyo flows that pay for themselves",
    excerpt:
      "Most stores send campaigns and skip the flows. These five run on autopilot and bring in revenue every day.",
    topic: "email",
    date: "2026-10-02",
    readMins: 6,
    author: "Ecomm Wizards Team",
    image: `${IMG}Living%20in%20Sunshine%20Klaviyo%20hero%20section.webp`,
  },
  {
    slug: "shopify-collection-page-seo",
    title: "Collection pages are your best SEO asset",
    excerpt:
      "Product pages get the attention, but collections win the big searches. A simple setup that gets them ranking.",
    topic: "seo",
    date: "2026-09-25",
    readMins: 9,
    author: "Ecomm Wizards Team",
    image: `${IMG}Candy%20Kittens.jpg`,
  },
  {
    slug: "premium-product-page-design",
    title: "What makes a product page feel premium",
    excerpt:
      "It's rarely the fonts. Spacing, image order and fewer words do most of the work. We break down what we change first.",
    topic: "design",
    date: "2026-09-18",
    readMins: 5,
    author: "Ecomm Wizards Team",
    image: `${IMG}NEOM%20Wellbeing.jpg`,
  },
  {
    slug: "woocommerce-to-shopify-checklist",
    title: "Moving to Shopify without losing your rankings",
    excerpt:
      "Redirects, data and the details people miss. The checklist we run on every migration, step by step.",
    topic: "migration",
    date: "2026-09-11",
    readMins: 10,
    author: "Ecomm Wizards Team",
    image: `${IMG}what3words.jpg`,
  },
  {
    slug: "ab-tests-worth-running",
    title: "The A/B tests worth running on a small store",
    excerpt:
      "Low traffic doesn't mean you can't test. You just have to test bigger things. Here's where to start.",
    topic: "cro",
    date: "2026-09-04",
    readMins: 6,
    author: "Ecomm Wizards Team",
    image: `${IMG}happy-mammoth.webp`,
  },
  {
    slug: "shopify-theme-speed",
    title: "Why your Shopify theme is slow, and how to fix it",
    excerpt:
      "Apps, scripts and huge images add up fast. We show you how to find what's slowing you down and cut it.",
    topic: "development",
    date: "2026-08-28",
    readMins: 7,
    author: "Ecomm Wizards Team",
    image: `${IMG}Saddleback.webp`,
  },
  {
    slug: "sms-without-annoying-customers",
    title: "SMS that customers don't unsubscribe from",
    excerpt:
      "Text is the most personal channel you have. Send less, time it better and keep every message useful.",
    topic: "email",
    date: "2026-08-21",
    readMins: 5,
    author: "Ecomm Wizards Team",
    image: `${IMG}Cande%20Klaviyo%20hero%20image.webp`,
  },
  {
    slug: "structured-data-for-shopify",
    title: "The structured data every Shopify store should have",
    excerpt:
      "Search engines and AI tools both read it. A short guide to the markup that matters and the bits you can skip.",
    topic: "seo",
    date: "2026-08-14",
    readMins: 8,
    author: "Ecomm Wizards Team",
    image: `${IMG}VITHIT.webp`,
  },
  {
    slug: "custom-shopify-sections",
    title: "When a custom section beats another app",
    excerpt:
      "Every app adds weight to your store. Sometimes a few lines of Liquid do the same job, faster and for free.",
    topic: "development",
    date: "2026-08-07",
    readMins: 6,
    author: "Ecomm Wizards Team",
    image: `${IMG}John%20Hardy-hero-update.jpg`,
  },
  {
    slug: "mobile-checkout-friction",
    title: "Small fixes that lift mobile checkout",
    excerpt:
      "Most of your traffic is on a phone. These are the little snags we find again and again, and how to remove them.",
    topic: "cro",
    date: "2026-07-31",
    readMins: 5,
    author: "Ecomm Wizards Team",
    image: `${IMG}Feetures.jpg`,
  },
  {
    slug: "brand-story-on-shopify",
    title: "Your brand story belongs on the homepage",
    excerpt:
      "Shoppers decide fast. Strong images and a few honest lines tell them who you are before they scroll.",
    topic: "design",
    date: "2026-07-24",
    readMins: 5,
    author: "Ecomm Wizards Team",
    image: `${IMG}WeareWild.webp`,
  },
  {
    slug: "bundles-that-lift-order-value",
    title: "Bundles that lift order value without discounts",
    excerpt:
      "A good bundle feels like a better deal without cutting your margin. How we build them on Shopify.",
    topic: "cro",
    date: "2026-07-17",
    readMins: 6,
    author: "Ecomm Wizards Team",
    image: `${IMG}Dryrobe%20hero%20section.webp`,
  },
  {
    slug: "back-in-stock-emails",
    title: "Back-in-stock emails are free money",
    excerpt:
      "People already told you they want it. Set this flow up once and catch every sale you'd have missed.",
    topic: "email",
    date: "2026-07-10",
    readMins: 4,
    author: "Ecomm Wizards Team",
    image: `${IMG}ChloBo%20hero%20image.webp`,
  },
  {
    slug: "when-to-move-to-shopify-plus",
    title: "When it's time to move to Shopify Plus",
    excerpt:
      "Plus costs more, so it has to earn its keep. The signs that you've outgrown standard Shopify.",
    topic: "development",
    date: "2026-07-03",
    readMins: 7,
    author: "Ecomm Wizards Team",
    image: `${IMG}Henchman.webp`,
  },
];

// Newest first, everywhere.
POSTS.sort((a, b) => b.date.localeCompare(a.date));
