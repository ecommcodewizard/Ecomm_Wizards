// Data for the /services hub. Single source of truth for the categorized service
// grid, the trust-strip stats, and the "Our Work" case studies. Copy rules: US
// spelling, no em dashes, no filler. Every href points to a real route.

export type ServiceIcon = "build" | "migrate" | "optimize" | "apps" | "b2b";

export type ServiceItem = { name: string; blurb: string; href: string };

export type ServiceCategory = {
  id: string;
  label: string;
  icon: ServiceIcon;
  tagline: string;
  cta: { label: string; href: string };
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "build",
    label: "Design & Build",
    icon: "build",
    tagline: "Fast, custom Shopify builds that convert, from new stores to Shopify Plus.",
    cta: { label: "Talk to a Shopify expert", href: "/contact-shopify-agency" },
    items: [
      { name: "UX & UI Design", blurb: "Conversion-focused store design that turns more visitors into buyers.", href: "/services/shopify-ux-and-ui-design" },
      { name: "Figma to Shopify", blurb: "Pixel-perfect conversion of your Figma designs into a live Shopify theme.", href: "/services/figma-to-shopify-conversion" },
      { name: "Landing Page Design", blurb: "High-converting campaign and product landing pages, built to ship fast.", href: "/services/shopify-landing-page-design" },
      { name: "New Store Development", blurb: "A complete custom Shopify store built around your brand and your customers.", href: "/services/shopify-store-development" },
      { name: "Custom Theme Development", blurb: "Bespoke Liquid themes coded for speed, conversion, and easy editing.", href: "/services/shopify-theme-development" },
      { name: "Ecommerce Agency", blurb: "Builds, replatforms, and rescues for brands doing $1M to $50M a year.", href: "/services/ecommerce-agency" },
      { name: "Shopify Development Agency", blurb: "A full-stack dev team for custom builds, features, and Shopify Plus.", href: "/services/shopify-development-agency" },
      { name: "Shopify 2.0 Development", blurb: "Modern Online Store 2.0 architecture with flexible, editable sections.", href: "/services/shopify-2-0-development" },
      { name: "Shopify Plus Development", blurb: "Enterprise builds with checkout extensibility, B2B, and Shopify Functions.", href: "/services/shopify-plus-development" },
      { name: "Headless & Hydrogen", blurb: "Custom headless storefronts on Hydrogen for speed and full control.", href: "/services/headless-shopify-agency" },
    ],
  },
  {
    id: "optimize",
    label: "Optimize & Grow",
    icon: "optimize",
    tagline: "Turn the traffic you already have into more revenue with data-led optimization.",
    cta: { label: "Get a free store audit", href: "/free-shopify-store-audit" },
    items: [
      { name: "Store Audit", blurb: "A full review of speed, UX, SEO, and conversion, with a prioritized plan.", href: "/services/shopify-store-audit" },
      { name: "CRO Agency", blurb: "Conversion rate optimization that lifts revenue from the traffic you have.", href: "/services/shopify-cro-agency" },
      { name: "A/B Testing", blurb: "Structured experiments that prove what actually moves your numbers.", href: "/services/a-b-testing" },
      { name: "Speed Optimization", blurb: "Faster load times and better Core Web Vitals for rankings and conversion.", href: "/services/shopify-speed-optimization" },
      { name: "Shopify SEO", blurb: "Technical and content SEO that grows organic traffic and rankings.", href: "/services/shopify-seo-agency" },
      { name: "Ecommerce SEO Agency", blurb: "We find what is costing you rankings on any platform, then fix it on Shopify.", href: "/services/ecommerce-seo-agency" },
      { name: "Ecommerce Marketing Agency", blurb: "One team across search, ads, email and CRO. We tell you which channel to fix first.", href: "/services/ecommerce-marketing-agency" },
      { name: "Agentic Commerce", blurb: "Get your products found and bought by AI assistants like ChatGPT and Gemini.", href: "/services/shopify-agentic-commerce" },
      { name: "Creative Strategy", blurb: "Performance ad creative for Meta and Google that lowers CPA and scales ROAS.", href: "/services/creative-strategy" },
      { name: "Cart Gamification", blurb: "Free-shipping bars, tiered rewards, and gift-with-purchase that lift average order value.", href: "/services/shopify-cart-gamification" },
      { name: "Analytics & Tracking", blurb: "Clean GA4, GTM, and pixel setup so you can trust your data.", href: "/services/shopify-analytics-and-tracking-setup" },
      { name: "Klaviyo Audit", blurb: "A deep review of your Klaviyo flows, list health, and deliverability with a prioritized fix list.", href: "/services/klaviyo-audit" },
      { name: "Maintenance & Support", blurb: "Ongoing care, updates, and on-demand development after launch.", href: "/services/shopify-maintenance-and-support" },
    ],
  },
  {
    id: "migrate",
    label: "Migrate to Shopify",
    icon: "migrate",
    tagline: "Zero-downtime moves from any platform, with your data and SEO intact.",
    cta: { label: "Plan your migration", href: "/services/migration" },
    items: [
      { name: "Migration Overview", blurb: "Our full migration process, from audit to launch, with no data loss.", href: "/services/migration" },
      { name: "WooCommerce to Shopify", blurb: "Move off WordPress and WooCommerce onto a faster, cleaner Shopify store.", href: "/services/migration/woocommerce-to-shopify" },
      { name: "Magento to Shopify", blurb: "Replatform from Magento without losing rankings, data, or revenue.", href: "/services/migration/magento-to-shopify" },
      { name: "BigCommerce to Shopify", blurb: "Migrate from BigCommerce with full product and SEO transfer.", href: "/services/migration/bigcommerce-to-shopify" },
      { name: "PrestaShop to Shopify", blurb: "Leave PrestaShop for a simpler, better-converting Shopify store.", href: "/services/migration/prestashop-to-shopify" },
      { name: "Salesforce to Shopify", blurb: "Replatform from Salesforce Commerce to Shopify Plus, simply.", href: "/services/migration/salesforce-to-shopify" },
      { name: "Amazon to Shopify", blurb: "Build your own branded store and own the customer relationship.", href: "/services/migration/amazon-to-shopify" },
      { name: "Liquid to Hydrogen", blurb: "Re-architect a Liquid theme into a headless Hydrogen storefront.", href: "/services/migration/liquid-to-shopify-hydrogen" },
    ],
  },
  {
    id: "apps",
    label: "Apps & Integrations",
    icon: "apps",
    tagline: "Custom apps and integrations that connect Shopify to the rest of your stack.",
    cta: { label: "Discuss your integration", href: "/contact-shopify-agency" },
    items: [
      { name: "Custom App Development", blurb: "Private and public Shopify apps for functionality no plugin offers.", href: "/services/shopify-app-development" },
      { name: "App Setup & Optimization", blurb: "The right app stack, configured to perform without slowing your store.", href: "/services/shopify-app-setup-and-app-optimization" },
      { name: "Shopify Integrations", blurb: "Connect Shopify to your ERP, CRM, 3PL, and marketing tools.", href: "/services/shopify-integration-services" },
      { name: "ERP Integrations", blurb: "Sync Shopify with NetSuite, SAP, and other ERPs for real-time data.", href: "/services/erp-connections-to-shopify" },
    ],
  },
  {
    id: "b2b-pos",
    label: "B2B & POS",
    icon: "b2b",
    tagline: "Sell wholesale and in-store on Shopify Plus, from one connected system.",
    cta: { label: "Talk to a B2B expert", href: "/services/shopify-b2b-store-setup" },
    items: [
      { name: "B2B & Wholesale Setup", blurb: "Company accounts, custom pricing, and net terms on Shopify Plus.", href: "/services/shopify-b2b-store-setup" },
      { name: "POS Setup", blurb: "Shopify POS configured so online and in-store stay in perfect sync.", href: "/services/shopify-pos-setup" },
    ],
  },
];

export const SERVICE_STATS = [
  { value: "150+", label: "Stores Built" },
  { value: "$400M+", label: "Revenue Generated" },
  { value: "8+", label: "Years of Experience" },
  { value: "9+", label: "Industry Awards" },
];

export type CaseStudyCard = {
  brand: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  industry: string;
  image: string;
  video: string;
  href: string;
  description: string;
};

// Curated to span services (2.0/POS, migration, theme, CRO, Plus). Videos, images,
// and hrefs reuse existing case-study assets and routes.
export const OUR_WORK: CaseStudyCard[] = [
  {
    brand: "NEOM Wellbeing",
    metric: "+34%",
    metricLabel: "Checkout Conversion",
    tags: ["Shopify 2.0", "Custom Theme", "Shopify POS"],
    industry: "Health & Wellness",
    image: "/images/Case%20studies/NEOM%20Wellbeing-2.webp",
    video: "/images/Case%20studies/NEOM%20Wellbeing%20video.mp4",
    href: "/case-studies/neom-wellbeing-shopify-upgrade",
    description: "A luxury wellbeing brand upgraded from a legacy Shopify setup to Shopify 2.0, unified retail under Shopify POS, and expanded to three markets. Checkout conversion grew 34% and order volume 10%.",
  },
  {
    brand: "Capelli Sports",
    metric: "+24%",
    metricLabel: "Conversion Rate",
    tags: ["Platform Migration", "Custom Theme", "SEO"],
    industry: "Sports & Fitness",
    image: "/images/Case%20studies/Capelli%20Sports%20hero%20image.webp",
    video: "/images/Case%20studies/Capelli%20Sports%20video.mp4",
    href: "/case-studies/capelli-sports-shopify-migration",
    description: "A global sportswear brand migrated from WordPress to Shopify with zero downtime and a performance-first redesign. Conversion rate grew 24%, site speed 38%, and 95% of SEO equity was preserved.",
  },
  {
    brand: "Feetures",
    metric: "+32%",
    metricLabel: "Add-to-Cart Rate",
    tags: ["Custom Theme Dev", "Performance", "Automation"],
    industry: "Sports & Fitness",
    image: "/images/Case%20studies/Feetures.jpg",
    video: "/images/Case%20studies/Feetures%20video.mp4",
    href: "/case-studies/feetures-shopify-theme-development",
    description: "America's top-rated performance sock brand rebuilt their Shopify theme from scratch with custom PLPs, dynamic PDPs, and metafield-driven automation that grew add-to-cart rate 32%.",
  },
  {
    brand: "111SKIN",
    metric: "+46%",
    metricLabel: "Conversion Rate",
    tags: ["CRO", "Shopify Plus", "UX Redesign"],
    industry: "Beauty & Skincare",
    image: "/images/Case%20studies/111skin-hero.jpg",
    video: "/images/Case%20studies/111skin%20video.mp4",
    href: "/case-studies/111skin-shopify-cro-redesign",
    description: "A luxury skincare brand rebuilt their Shopify theme with a quiz-driven product finder, clinical proof blocks, and a streamlined checkout. Conversion rate grew 46% within the first quarter.",
  },
  {
    brand: "Candy Kittens",
    metric: "+182%",
    metricLabel: "Conversion Rate",
    tags: ["CRO", "Shopify Plus", "Mobile"],
    industry: "Food & Beverage",
    image: "/images/Case%20studies/Candy%20Kittens%20hero%20section.webp",
    video: "/images/Case%20studies/Candy%20Kittens%20video.mp4",
    href: "/case-studies/candy-kittens-shopify-food-beverage-cro",
    description: "The confectionery brand restructured their store around how customers actually shop: gifts, occasions, and flavors. Mobile bounce rate dropped 41% and conversion rate grew 182% in the first month.",
  },
  {
    brand: "Dryrobe",
    metric: "+89%",
    metricLabel: "Online Revenue",
    tags: ["Shopify Plus", "Custom Theme", "Internationalization"],
    industry: "Outdoor & Sports",
    image: "/images/Case%20studies/Dryrobe%20hero%20section.webp",
    video: "/images/Case%20studies/dryrobe%20video.mp4",
    href: "/case-studies/dryrobe-shopify-plus-redesign",
    description: "The outdoor apparel brand consolidated three Shopify stores into a single Shopify Plus build with full internationalization and a custom product finder. Online revenue grew 89% in the first year.",
  },
];
