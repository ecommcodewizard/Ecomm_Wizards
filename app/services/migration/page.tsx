import type { Metadata } from "next";
import Link from "next/link";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RelatedServices from "@/components/sections/RelatedServices";

const META_DESCRIPTION =
  "Shopify migration agency for brands that can't afford downtime. We move your store, products, customers, orders, and SEO with zero data loss.";
const CANONICAL_URL = "https://ecommwizards.com/services/migration";

export const metadata: Metadata = {
  // `absolute` renders the title exactly; the root layout's "%s | Ecomm Wizards"
  // template would otherwise append the brand to this custom title.
  title: { absolute: "Shopify Migration Agency | Migrate to Shopify, Zero Downtime" },
  description: META_DESCRIPTION,
  keywords: [
    "shopify migration",
    "migration to shopify",
    "migrate to shopify",
    "shopify migration agency",
    "shopify migration services",
    "shopify plus migration",
    "ecommerce migration to shopify",
    "shopify replatforming",
    "shopify migration company",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Shopify Migration Agency | Migrate to Shopify, Zero Downtime",
    description: META_DESCRIPTION,
    images: [
      {
        url: "/images/migration-shopify-right-image.webp",
        alt: "Shopify migration: store and admin moved to Shopify by Ecomm Wizards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Migration Agency | Migrate to Shopify, Zero Downtime",
    description: META_DESCRIPTION,
    images: ["/images/migration-shopify-right-image.webp"],
  },
};

const CONSULT_URL = "/book-shopify-consultation";
const AUDIT_URL = "/free-shopify-store-audit";

const GRADIENT_TEXT = {
  background: "var(--brand-gradient)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

const SCROLL_IMAGES = [
  "/images/audit-2_1024x1024-1.webp",
  "/images/audit-1_1024x1024.webp",
  "/images/audit-9_1024x1024-1.webp",
  "/images/audit-7_1024x1024-1.webp",
  "/images/audit-8_1024x1024-1.webp",
];

const IconDoc = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
    <path d="M4.369 1.087v30.625h15.963l7.3-7.231v-23.394h-23.262zM5.606 2.394h20.719v21.175h-6.256c-0.394 0-0.65 0.325-0.65 0.65v6.188h-13.813v-28.012zM20.725 29.5v-4.694h4.694l-4.694 4.694zM9.056 6.819h13.75v1.306h-13.75v-1.306zM9.056 12.363h13.75v1.306h-13.75v-1.306zM9.056 17.9h13.75v1.306h-13.75v-1.306z" />
  </svg>
);
const IconNodes = () => (
  <svg width="22" height="22" viewBox="0 0 640 512" fill="currentColor" aria-hidden>
    <path d="M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48 28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44 34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40 35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" />
  </svg>
);
const IconGear = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
    <path d="M30.353 12.844h-2.994c-0.481 0-0.878-0.265-1.062-0.709s-0.091-0.913 0.249-1.253l2.117-2.116c0.311-0.311 0.482-0.725 0.482-1.165s-0.171-0.854-0.482-1.166l-2.698-2.698c-0.622-0.622-1.707-0.623-2.331 0l-2.116 2.116c-0.34 0.34-0.809 0.434-1.253 0.249-0.444-0.184-0.709-0.581-0.709-1.062v-2.994c0-0.908-0.739-1.647-1.647-1.647h-3.816c-0.908 0-1.647 0.739-1.647 1.647v2.994c0 0.481-0.265 0.878-0.709 1.062-0.443 0.185-0.913 0.090-1.253-0.249l-2.116-2.116c-0.623-0.623-1.708-0.622-2.331 0l-2.698 2.698c-0.311 0.311-0.482 0.725-0.482 1.166s0.171 0.853 0.482 1.165l2.117 2.116c0.34 0.34 0.433 0.808 0.249 1.253s-0.581 0.709-1.062 0.709h-2.994c-0.908 0-1.647 0.739-1.647 1.647v3.816c0 0.909 0.739 1.648 1.647 1.648h2.994c0.481 0 0.878 0.265 1.062 0.709s0.091 0.913-0.249 1.253l-2.117 2.116c-0.311 0.311-0.482 0.725-0.482 1.165s0.171 0.854 0.482 1.166l2.698 2.698c0.623 0.623 1.707 0.624 2.331 0l2.116-2.117c0.34-0.34 0.808-0.433 1.253-0.249s0.709 0.581 0.709 1.062v2.994c0 0.908 0.739 1.647 1.647 1.647h3.816c0.908 0 1.647-0.739 1.647-1.647v-2.994c0-0.481 0.265-0.878 0.709-1.062s0.913-0.091 1.253 0.249l2.116 2.117c0.623 0.623 1.708 0.622 2.331 0l2.698-2.698c0.311-0.311 0.482-0.725 0.482-1.166s-0.171-0.853-0.482-1.165l-2.117-2.116c-0.34-0.34-0.433-0.808-0.249-1.253s0.581-0.709 1.063-0.709h2.994c0.908 0 1.647-0.739 1.647-1.647v-3.816c0-0.908-0.739-1.647-1.647-1.647zM16 11.067c-2.941 0-5.333 2.392-5.333 5.333s2.392 5.333 5.333 5.333 5.333-2.392 5.333-5.333-2.392-5.333-5.333-5.333zM16 20.548c-2.287 0-4.148-1.861-4.148-4.148s1.861-4.148 4.148-4.148 4.148 1.861 4.148 4.148-1.861 4.148-4.148 4.148z" />
  </svg>
);
const IconCode = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
    <path d="M8 24c-0.205 0-0.409-0.078-0.566-0.234l-6.4-6.4c-0.312-0.312-0.312-0.819 0-1.131l6.4-6.4c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-5.834 5.834 5.834 5.834c0.312 0.312 0.312 0.819 0 1.131-0.156 0.156-0.361 0.234-0.566 0.234zM24 24c-0.205 0-0.409-0.078-0.566-0.234-0.312-0.312-0.312-0.819 0-1.131l5.834-5.834-5.834-5.834c-0.312-0.312-0.312-0.819 0-1.131s0.819-0.312 1.131 0l6.4 6.4c0.312 0.312 0.312 0.819 0 1.131l-6.4 6.4c-0.156 0.156-0.361 0.234-0.566 0.234zM11.999 24c-0.145 0-0.291-0.039-0.423-0.122-0.375-0.234-0.489-0.728-0.254-1.102l8-12.8c0.234-0.374 0.728-0.489 1.102-0.254s0.489 0.728 0.254 1.102l-8 12.8c-0.152 0.243-0.413 0.376-0.679 0.376z" />
  </svg>
);
const IconUser = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
    <path d="M32 6.009c0-3.093-2.516-5.609-5.609-5.609-1.631 0-3.1 0.7-4.126 1.814-2.038-0.92-4.214-1.388-6.478-1.388-8.705 0-15.787 7.082-15.787 15.787s7.082 15.787 15.787 15.787 15.787-7.082 15.787-15.787c0-2.264-0.468-4.44-1.388-6.478 1.115-1.026 1.814-2.496 1.814-4.126zM26.391 1.979c2.222 0 4.030 1.808 4.030 4.030s-1.808 4.030-4.030 4.030-4.030-1.808-4.030-4.030c0-2.222 1.808-4.030 4.030-4.030zM15.787 30.821c-7.834 0-14.208-6.374-14.208-14.208s6.374-14.208 14.208-14.208c1.942 0 3.812 0.381 5.57 1.133-0.368 0.746-0.575 1.584-0.575 2.471 0 3.093 2.516 5.609 5.609 5.609 0.886 0 1.725-0.207 2.471-0.575 0.752 1.758 1.133 3.628 1.133 5.57 0 7.834-6.374 14.208-14.208 14.208zM28.486 5.22h-4.19c-0.436 0-0.789 0.353-0.789 0.789s0.353 0.789 0.789 0.789h4.19c0.436 0 0.789-0.353 0.789-0.789s-0.353-0.789-0.789-0.789zM20.637 19.438c-0.018-0.001-1.838 0.102-2.499-1.956 0.36-0.275 0.695-0.615 0.992-1.018 0.639-0.865 1.056-1.943 1.214-3.109 0.045-0.054 0.083-0.115 0.112-0.183 0.274-0.652 0.413-1.348 0.413-2.068 0-2.774-2.101-5.031-4.683-5.031-0.663 0-1.306 0.149-1.914 0.444-0.224 0.020-0.444 0.061-0.656 0.122-2.164 0.625-3.388 3.233-2.73 5.814 0.066 0.259 0.15 0.514 0.25 0.757 0.027 0.066 0.063 0.125 0.106 0.178 0.246 1.757 1.069 3.225 2.197 4.087-0.546 2.043-2.483 1.962-2.5 1.963-1.865 0.060-3.364 1.595-3.364 3.474v2.27c0 0.853 0.694 1.546 1.546 1.546h13.333c0.853 0 1.546-0.694 1.546-1.546v-2.27c0-1.879-1.498-3.413-3.363-3.474zM14.009 8.003c0.154-0.045 0.317-0.071 0.485-0.079 0.104-0.005 0.206-0.032 0.298-0.081 0.443-0.233 0.911-0.351 1.392-0.351 1.703 0 3.105 1.453 3.249 3.298-0.354-0.223-0.773-0.352-1.222-0.352h-3.215c-0.139 0-0.272-0.044-0.382-0.126-0.095-0.071-0.168-0.166-0.212-0.275-0.132-0.327-0.457-0.533-0.808-0.51-0.354 0.023-0.651 0.268-0.74 0.611-0.135 0.519-0.373 1.006-0.694 1.433-0.213-1.655 0.552-3.194 1.849-3.569zM12.642 13.152c0.501-0.468 0.913-1.024 1.211-1.638 0.339 0.227 0.732 0.346 1.143 0.346h3.215c0.34 0 0.635 0.194 0.782 0.477-0.012 1.864-0.803 3.465-1.928 4.167-0.036 0.017-0.556 0.38-1.276 0.38-1.522 0-2.861-1.615-3.147-3.733zM17.887 19.781c-0.604 0.439-1.337 0.683-2.097 0.683-0.761 0-1.495-0.244-2.1-0.685 0.469-0.444 0.83-1.003 1.036-1.633 0.342 0.104 0.698 0.159 1.064 0.159 0.362 0 0.717-0.054 1.060-0.157 0.206 0.63 0.568 1.188 1.038 1.632zM22.578 25.183h-0c0 0.069-0.056 0.125-0.125 0.125h-13.333c-0.069 0-0.126-0.056-0.126-0.125v-2.27c0-1.134 0.922-2.056 2.056-2.056 0.016 0 0.871-0.049 1.379-0.274 0.913 0.833 2.111 1.302 3.36 1.302s2.445-0.469 3.358-1.301c0.557 0.252 1.358 0.273 1.375 0.273 1.134 0 2.056 0.922 2.056 2.056v2.27z" />
  </svg>
);

const IconGrid4 = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);
const IconMonitor = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M7 8h.01M11 8h6" />
  </svg>
);
const IconLaunch = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 9h6v6H9z" />
  </svg>
);

const PHASES = [
  {
    Icon: IconGrid4,
    title: "Audit and Roadmap",
    body: "We start by pulling apart your current platform, every integration, every customization, every data dependency, and building a migration roadmap that accounts for everything. Our Shopify Plus migration experts identify risks before they become problems so the entire project stays on schedule and on budget.",
  },
  {
    Icon: IconMonitor,
    title: "Secure Data Transfer and Build",
    body: "Products, customers, orders, content, SEO, all of it gets mapped and migrated with automated validation at every step. While your data moves, our team simultaneously builds your new Shopify storefront with custom design, optimized UX, and every integration configured and tested.",
  },
  {
    Icon: IconLaunch,
    title: "Launch, Verify, and Support",
    body: "We do not flip the switch and disappear. After go live, the best Shopify migration agency team runs a full post launch audit to verify data integrity, SEO preservation, checkout functionality, and third party integrations. Then we stick around for ongoing support to make sure everything runs smoothly as your store scales.",
    boldPhrase: "best Shopify migration agency",
  },
];

const MIGRATION_CASE_CARDS = [
  {
    quote: "Working with EW was a truly top-notch experience. From start to finish, they made sure everything ran smoothly and professionally",
    logo: "/images/Frame_1000007615.webp",
    logoAlt: "EBY",
  },
  {
    quote: "Ecomm Wizards has done a great job of creating exactly what we visioned while constantly refining and improving every detail.",
    logo: "/images/cashmere-sale-logo.avif",
    logoAlt: "The Cashmere Sale",
  },
  {
    quote: "Their immense knowledge of Shopify Plus and exceptional communication skills made Ecomm Wizards a fantastic partner.",
    logo: "/images/Frame_1000007615-2.avif",
    logoAlt: "BARK",
  },
];

const MIGRATION_SLIDES: CaseStudySlide[] = [
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A dynamically personalized <strong>Shopify Store</strong> developed &amp; maintained for <strong>Bark</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong> made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
  {
    key: "eby",
    image: "/images/Frame_1000004320.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>An elegant <strong>Shopify Store</strong> designed and built for EBY by <strong>Sofia Vergara</strong></>),
    quote: (<>&ldquo;Working with EW was a truly <strong>top-notch experience</strong>. From start to finish, they made sure everything ran smoothly and professionally. We couldn&rsquo;t be happier!&rdquo;</>),
    avatar: "/images/eby_dce31a54-eb36-409c-a8d7-e22fd8297de3_medium.webp",
    name: "EBY by Sofia Vergara",
    role: "Shapewear Brand",
  },
];

const WHY_WORK_ITEMS = [
  "Transparent Communication",
  "Zero Cutting Corners",
  "World-Class Support",
  "Revenue-Driven Approach",
  "Proven Track Record",
  "Growth-Obsessed Team",
  "100% Client Satisfaction",
];

const FAQS = [
  {
    q: "Will I lose my SEO rankings when I migrate to Shopify?",
    a: "No. We protect your SEO during the migration by mapping every URL, setting up 301 redirects, and carrying over metadata, structured data, and content. Google sees a clean handoff, so your rankings and traffic stay intact.",
  },
  {
    q: "How long does a Shopify migration take?",
    a: "Most migrations run two to six weeks depending on catalog size, custom features, and integrations. We scope the exact timeline on your discovery call and give you a clear plan before any work begins.",
  },
  {
    q: "Will my store go down during the migration?",
    a: "No. We build and test your new Shopify store in parallel while your current store keeps selling. We only point the domain over once everything is verified, so your customers never see downtime.",
  },
  {
    q: "What data can you migrate to Shopify?",
    a: "Products, variants, customers, full order history, content, blogs, reviews, and SEO assets. If it lives on your current platform, we map it to Shopify so nothing breaks and nothing duplicates.",
  },
  {
    q: "How much does a Shopify migration cost?",
    a: "Cost depends on your catalog size, custom functionality, and the integrations you need rebuilt. We give fixed-price quotes with no hourly surprises. Book a call and we will send a detailed breakdown.",
  },
  {
    q: "What happens to my apps and integrations?",
    a: "We audit every integration you rely on, from ERP and 3PL to email and reviews, then rebuild or replace each one on Shopify so your operations keep running the day you go live.",
  },
  {
    q: "Do you migrate to Shopify or Shopify Plus?",
    a: "Both. We help you choose the right plan for your volume, then handle the full build. If you are scaling fast, our Shopify Plus migration experts set you up for high-traffic sales and B2B from day one.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Shopify Migration", item: "https://ecommwizards.com/services/migration" },
  ],
};

const FIX_CARDS = [
  {
    title: "See It Before You Sign",
    body: "Still weighing your options? Book a free migration test drive and watch us move a sample of your data to Shopify with zero risk. You will see the quality of our Shopify migration services firsthand before you commit a single dollar.",
    cta: { label: "Start My Free Test Drive", href: "/free-shopify-store-audit" },
    img: "/images/call-image_1024x1024.webp",
  },
  {
    title: "Talk to a Migration Specialist",
    body: "Have questions about timelines, costs, or what happens to your SEO? Our Shopify Plus migration experts are ready to map out your entire migration and give you a clear plan with no obligations and no generic sales pitch.",
    cta: { label: "Book a Strategy Call", href: "/book-shopify-consultation" },
    img: "/images/contact_1024x1024.webp",
  },
];

const TRUST_LOGOS = [
  { src: "/images/Case%20studies/logos/111skin%20logo.png", alt: "111SKIN" },
  { src: "/images/Case%20studies/logos/Candy%20Kittens.webp", alt: "Candy Kittens" },
  { src: "/images/everlast-icon.svg", alt: "Everlast" },
  { src: "/images/Case%20studies/logos/NEOM%20Wellbeing.png", alt: "NEOM Wellbeing" },
  { src: "/images/Case%20studies/logos/Ronaldo%20Jewelry.avif", alt: "Ronaldo Jewelry" },
  { src: "/images/Case%20studies/logos/Wild.svg", alt: "Wild" },
  { src: "/images/Case%20studies/logos/Saddleback.svg", alt: "Saddleback" },
];

const WHAT_YOU_GET = [
  {
    highlight: "300+",
    title: "Migrations Delivered",
    body: "Every single one completed with zero data loss. Products, customers, orders, SEO, content, all accounted for, all verified, all intact.",
  },
  {
    highlight: "100%",
    title: "Client Satisfaction",
    body: "Backed by a team of <b>Shopify Plus migration experts</b> who treat your migration like their own store depends on it. Because our reputation does.",
  },
  {
    highlight: "24/7",
    title: "Dedicated Support",
    body: "Before, during, and after your migration. Dedicated Slack channels, real time updates, and a team that responds when you need them, not when it is convenient. That is the standard when you hire the <b>top agency</b> for <b>Magento to Shopify Plus migration.</b>",
  },
];

const WHY_SHOPIFY = [
  {
    title: "Built for Volume, Built for Speed",
    body: "Shopify Plus handles flash sales, product drops, and high traffic surges with 99.99% uptime and page loads that keep your customers engaged instead of waiting. When your Shopify migration services are complete, your store will be faster than anything your old platform could deliver",
  },
  {
    title: "Checkout That Actually Converts",
    body: "Shop Pay converts up to 36% better than standard checkouts. That is not a marketing claim. That is what happens when your checkout is built for speed, trust, and one click convenience. Every brand that works with a top Shopify migration agency sees checkout performance improve almost immediately.",
  },
  {
    title: "Lower Cost, Higher Ceiling",
    body: "Magento, Salesforce Commerce Cloud, and custom platforms come with hosting fees, security patches, server management, and developer dependency that quietly drain your budget. Shopify eliminates all of it. Lower total cost of ownership means more money for growth, not maintenance.",
  },
  {
    title: "10,000+ Apps, Zero Developer Dependency",
    body: "Loyalty programs, subscriptions, reviews, ERP integrations, email marketing, whatever your store needs, there is an app for it. And with Shopify's drag and drop editor, APIs, and Liquid templating, you can customize without waiting on a developer for every small change.",
  },
];

const MOVES = [
  {
    label: "Products",
    body: "Every variant, every description, every image, and every inventory count transfers exactly as it exists today. Our Shopify migration services map your entire product catalog to Shopify’s architecture so nothing breaks, nothing duplicates, and your store goes live with the same depth your customers already expect.",
  },
  {
    label: "Orders",
    body: "Your complete purchase history comes with you. Every transaction, every fulfillment record, every customer touchpoint preserved so your reporting stays accurate and your team never loses visibility into past performance.",
  },
  {
    label: "Content",
    body: "CMS pages, blog posts, and customer reviews all migrate intact. The content you spent years building does not get abandoned on your old platform. It moves to Shopify ready to rank, ready to convert, and ready to grow.",
  },
  {
    label: "SEO",
    body: "This is where most migrations fail and where we refuse to. Our top agency for Magento to Shopify Plus migration team maps every redirect, transfers every meta title and description, and preserves the ranking authority you have earned so Google never sees a gap between your old site and the new one.",
  },
];

const WHY_REASONS = [
  {
    Icon: IconDoc,
    title: "Risk-Free Trial Migration",
    body:
      "Test Drive Your Migration for Free Not ready to commit? We run a free trial migration so you can see exactly how our Shopify migration services handle your data before you sign anything. No cost, no pressure, no surprises. Just proof that your store is in the right hands.",
  },
  {
    Icon: IconNodes,
    title: "Zero Downtime Guarantee",
    body:
      "Your Store Never Goes Dark Most agencies take your store offline during migration. We do not. Our zero downtime guarantee means your customers keep shopping, your orders keep flowing, and your revenue never takes a hit while our Shopify Plus migration experts handle the transition behind the scenes.",
  },
  {
    Icon: IconGear,
    title: "Built for Every Business",
    body:
      "Built Around Your Business Model D2C, B2B, wholesale, POS, hybrid, subscription. It does not matter how complex your operation is. As a top Shopify migration agency, we customize every migration to fit your specific channels, workflows, and integrations instead of forcing you into a one size fits all template.",
  },
  {
    Icon: IconCode,
    title: "Industry-Leading Expertise",
    body:
      "300+ Migrations. Zero Data Lost. We have migrated stores for Harvard University, BarkBox, Olaplex, and hundreds more. That kind of track record does not happen by accident. It happens because the best Shopify migration agency treats every product, every customer record, and every redirect like it matters, because it does.",
  },
  {
    Icon: IconUser,
    title: "Secure and Accurate Data Transfer",
    body:
      "Every Byte Accounted For Products, variants, customer profiles, order history, blog content, reviews, SEO metadata, and 301 redirects. Our Shopify migration services transfer everything with surgical precision so nothing gets lost, broken, or left behind on your old platform.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <ServiceSchema url={CANONICAL_URL} name="Shopify Migration Agency" serviceType="Shopify migration" description={META_DESCRIPTION} />
      <Breadcrumbs current="/services/migration" />
      {/* 1 — Hero */}
      <section className="mig-hero">
        <div className="mig-hero-inner">
          <div className="mig-hero-copy">
            <h1 className="mig-hero-h1">
              Your <span style={GRADIENT_TEXT}>Store</span> Deserves{" "}
              <span style={GRADIENT_TEXT}>Shopify.</span> We Make the Switch Painless.
            </h1>
            <p className="mig-hero-lead">
              The Best Shopify Migration Agency for Brands That Can&rsquo;t Afford Downtime.
            </p>
            <p className="mig-hero-body">
              Ecomm Wizards delivers end to end <strong>Shopify migration services</strong> that
              move your entire store, products, customers, order history, SEO equity, and
              integrations, to Shopify or Shopify Plus without losing a single day of revenue. As
              a <strong>top Shopify migration agency</strong> trusted by 1,000+ brands, we handle
              the complexity so you never have to choose between upgrading your platform and
              running your business.
            </p>
            <p className="mig-hero-body">
              Whether you are a growing DTC brand or an enterprise operation ready for Shopify
              Plus, our <strong>Shopify Plus migration experts</strong> build a migration plan
              around your business, not a generic checklist.
            </p>

            <div className="mig-hero-ctas">
              <Link href={CONSULT_URL} className="mig-cta-outline">
                <span>Book a Free Consultation</span>
                <Arrow />
              </Link>
              <Link href={AUDIT_URL} className="mig-hero-text-link">
                <span>See How Migration Works</span>
                <Arrow />
              </Link>
            </div>
          </div>

          <div className="mig-hero-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/migration-shopify-right-image.webp"
              alt="Shopify migration result: store and admin after moving to Shopify"
              width={1024}
              height={838}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* 2 — Brands That Trusted Us With Their Migration (trust bar) */}
      <section className="mig-trust">
        <div className="mig-trust-inner">
          <h2 className="mig-trust-h2">Brands That Trusted Us With Their Migration</h2>
          <p className="mig-trust-lede">
            We have helped some of the most recognized brands in the world move to Shopify, and we will do the same for you.
          </p>
          <div className="mig-trust-carousel" aria-label="Brand logos">
            <div className="mig-trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div key={i} className="mig-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src} alt={i < TRUST_LOGOS.length ? l.alt : ""} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Why 300+ Brands Chose Ecomm Wizards */}
      <section className="mig-why">
        <div className="mig-why-inner">
          <div className="mig-why-copy">
            <h2 className="mig-why-h2">
              Why 300+ Brands Chose Ecomm Wizards for Their Migration
            </h2>
            <ul className="mig-why-list">
              {WHY_REASONS.map(({ Icon, title, body }) => (
                <li key={title} className="mig-why-item">
                  <div className="mig-why-icon" aria-hidden><Icon /></div>
                  <div className="mig-why-text">
                    <h3 className="mig-why-title">{title}</h3>
                    <p className="mig-why-body">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mig-why-visual" aria-hidden>
            {[SCROLL_IMAGES, [...SCROLL_IMAGES].reverse()].map((images, col) => (
              <div key={col} className="mig-why-scroll">
                <div className="mig-why-track" style={{ animationDuration: col === 0 ? "32s" : "40s" }}>
                  {[...images, ...images].map((src, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={i} src={src} alt="" loading="lazy" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Everything Moves */}
      <section className="mig-moves">
        <div className="mig-moves-inner">
          <h2 className="mig-moves-h2">Everything Moves. Nothing Gets Left Behind.</h2>

          <div className="mig-moves-grid">
            <ul className="mig-moves-list">
              {MOVES.map((m) => (
                <li key={m.label} className="mig-moves-row">
                  <span className="mig-moves-pill">{m.label}</span>
                  <p className="mig-moves-body">{m.body}</p>
                </li>
              ))}
            </ul>

            <div className="mig-moves-visual" aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="mig-moves-img-back" src="/images/image_404.webp" alt="" width={1024} height={946} loading="lazy" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="mig-moves-img-front" src="/images/image_403.webp" alt="" width={383} height={1024} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 4 — From Old Platform to Shopify in Three Phases */}
      <section className="mig-phases">
        <div className="mig-phases-inner">
          <h2 className="mig-phases-h2">From Old Platform to Shopify in Three Phases</h2>
          <ol className="mig-phases-list">
            {PHASES.map(({ Icon, title, body, boldPhrase }) => (
              <li key={title} className="mig-phase">
                <div className="mig-phase-icon-wrap">
                  <div className="mig-phase-icon-box">
                    <span className="mig-phase-icon-accent" aria-hidden />
                    <Icon />
                  </div>
                </div>
                <h3 className="mig-phase-title">{title}</h3>
                <p className="mig-phase-body">
                  {boldPhrase
                    ? (() => {
                        const idx = body.indexOf(boldPhrase);
                        return (
                          <>
                            {body.slice(0, idx)}
                            <strong>{boldPhrase}</strong>
                            {body.slice(idx + boldPhrase.length)}
                          </>
                        );
                      })()
                    : body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 — Why Shopify Is Where Growing Brands End Up */}
      <section className="mig-whyshopify">
        <div className="mig-whyshopify-inner">
          <div className="mig-whyshopify-copy">
            <h2 className="mig-whyshopify-h2">Why Shopify Is Where Growing Brands End Up</h2>
            <ul className="mig-whyshopify-list">
              {WHY_SHOPIFY.map((item) => (
                <li key={item.title} className="mig-whyshopify-item">
                  <h3 className="mig-whyshopify-title">{item.title}</h3>
                  <p className="mig-whyshopify-body">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mig-whyshopify-visual" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mig-why-shopify-diagram.webp" alt="Migrating from Magento, BigCommerce, and WooCommerce to Shopify with Ecomm Wizards" width={1000} height={1030} loading="lazy" />
          </div>
        </div>
      </section>

      {/* 7 — What You Get When You Work With the Best Shopify Migration Agency */}
      <section className="mig-getwhat">
        <div className="mig-getwhat-inner">
          <div className="mig-getwhat-visual" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/image_150_fc94ab98-27d4-4d56-82da-bd7d8e54fb4c_grande.webp" alt="" loading="lazy" />
          </div>
          <div className="mig-getwhat-copy">
            <h2 className="mig-getwhat-h2">What You Get When You Work With the Best Shopify Migration Agency</h2>
            <ul className="mig-getwhat-list">
              {WHAT_YOU_GET.map((c) => (
                <li key={c.title} className="mig-getwhat-card">
                  <h3 className="mig-getwhat-title">
                    <span className="mig-getwhat-highlight" style={GRADIENT_TEXT}>{c.highlight}</span>{" "}
                    {c.title}
                  </h3>
                  <p className="mig-getwhat-body" dangerouslySetInnerHTML={{ __html: c.body }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9 — Migration Case Studies */}
      <section className="ssd-results-section" style={{ background: "#FFFFFF", color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}>
        <div className="ssd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="ssd-results-heading">Migration Case Studies</h2>
          <div className="ssd-results-cards">
            {MIGRATION_CASE_CARDS.map((c) => (
              <div key={c.logoAlt} className="ssd-results-card">
                <p className="ssd-results-card-quote">{c.quote}</p>
                <div className="ssd-results-card-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo} alt={c.logoAlt} />
                </div>
              </div>
            ))}
          </div>
          <CaseStudySlider slides={MIGRATION_SLIDES} intervalMs={6000} />
        </div>
      </section>

      {/* 10 — Why Work with Ecomm Wizards */}
      <section className="mig-whywork" aria-label="Why Work with Ecomm Wizards">
        <div className="mig-whywork-inner">
          <h2 className="mig-whywork-heading">Why Work with <br className="mig-whywork-br" />Ecomm Wizards</h2>
          <div className="mig-whywork-marquee">
            <ul className="mig-whywork-track">
              {[...WHY_WORK_ITEMS, ...WHY_WORK_ITEMS].map((item, i) => (
                <li key={`${item}-${i}`} className="mig-whywork-item" aria-hidden={i >= WHY_WORK_ITEMS.length ? true : undefined}>
                  <span className="mig-whywork-text">{item}</span>
                  <span className="mig-whywork-dot" aria-hidden="true" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11 — Your Old Platform Has Cost You Enough (final CTA, moved here) */}
      <section className="mig-fix">
        <div className="mig-fix-inner">
          <h2 className="mig-fix-h2">Your Old Platform Has Cost You Enough. Let&rsquo;s Fix That.</h2>
          <div className="mig-fix-cards">
            {FIX_CARDS.map((c) => (
              <article key={c.title} className="mig-fix-card">
                <div className="mig-fix-card-copy">
                  <h3 className="mig-fix-card-title">{c.title}</h3>
                  <p className="mig-fix-card-body">{c.body}</p>
                  <Link href={c.cta.href} className="mig-fix-card-cta">
                    <span>{c.cta.label}</span>
                    <Arrow />
                  </Link>
                </div>
                <div className="mig-fix-card-visual" aria-hidden>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt="" loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — FAQ (final section) */}
      <section className="mig-faq">
        <div className="mig-faq-inner">
          <h2 className="mig-faq-h2">Migration Questions, Answered</h2>
          <div className="mig-faq-acc">
            {FAQS.map((_, i) => (
              <input key={i} className="mig-faq-rad" type="radio" id={`mig-faq-${i}`} name="mig-faq-acc" defaultChecked={i === 0} />
            ))}
            <div className="mig-faq-list">
              {FAQS.map((f, i) => (
                <div key={i} className="mig-faq-item" data-faq={`mig-faq-${i}`}>
                  <label htmlFor={`mig-faq-${i}`} className="mig-faq-head">
                    <span className="mig-faq-q">{f.q}</span>
                    <span className="mig-faq-ico" aria-hidden>
                      <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.6 8.5c-.6-.6-1.5-.6-2.2-.1L16 21.2 2.6 8.4c-.6-.6-1.6-.5-2.2.1-.6.6-.5 1.6.1 2.2l14.5 13.7c.3.3.7.4 1 .4s.8-.1 1-.4l14.5-13.7c.6-.6.7-1.6.1-2.2z" /></svg>
                    </span>
                  </label>
                  <div className="mig-faq-bodyc"><div className="mig-faq-in"><p>{f.a}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ──────────────────────────────────────────────
           Migration page — scoped styles (mig-*)
           Page base: black bg, Poppins 16/26.4 (inherited from globals)
           ────────────────────────────────────────────── */

        /* 1 — Hero */
        .mig-hero { background: #000000; padding: 60px 40px; overflow: hidden; }
        .mig-hero-inner { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: 1.05fr 1fr; gap: 60px; align-items: center; }
        .mig-hero-copy { color: #FFFFFF; }
        .mig-hero-h1 { color: #FFFFFF; font-size: 48px; font-weight: 700; line-height: 1.16; margin: 0 0 28px; letter-spacing: -0.6px; }
        .mig-hero-lead { color: #FFFFFF; font-size: 16px; font-weight: 600; line-height: 1.6; margin: 0 0 24px; }
        .mig-hero-body { color: #FFFFFF; font-size: 16px; line-height: 1.75; margin: 0 0 22px; }
        .mig-hero-body strong { color: #FFFFFF; font-weight: 700; }
        .mig-hero-ctas { display: flex; flex-direction: column; align-items: flex-start; gap: 28px; margin-top: 14px; }

        .mig-cta-outline,
        .mig-cta-outline:link,
        .mig-cta-outline:visited,
        .mig-cta-outline:focus,
        .mig-cta-outline:active { display: inline-flex; align-items: center; gap: 12px; padding: 18px 36px; border-radius: 999px; color: #FFFFFF; font-size: 16px; font-weight: 600; text-decoration: none; position: relative; border: 2px solid transparent; background-image: linear-gradient(#000, #000), var(--brand-gradient); background-origin: border-box; background-clip: padding-box, border-box; transition: background-image .25s ease, color .25s ease, transform .2s ease; }
        .mig-cta-outline:hover { color: #111111; background-image: linear-gradient(#FFFFFF, #FFFFFF), var(--brand-gradient); transform: translateY(-1px); }

        .mig-hero-text-link,
        .mig-hero-text-link:link,
        .mig-hero-text-link:visited,
        .mig-hero-text-link:hover,
        .mig-hero-text-link:focus,
        .mig-hero-text-link:active { display: inline-flex; align-items: center; gap: 10px; color: #FFFFFF; font-size: 16px; font-weight: 500; text-decoration: none; }
        .mig-hero-text-link span { border-bottom: 1px solid #FFFFFF; padding-bottom: 2px; transition: border-color .2s ease; }
        .mig-hero-text-link:hover span { border-bottom-color: #4FB872; }

        .mig-hero-visual { display: flex; justify-content: center; align-items: center; }
        .mig-hero-visual img { width: 100%; height: auto; max-width: 640px; display: block; }

        /* ── Laptop (1024) ── */
        @media (max-width: 1024px) {
          .mig-hero-h1 { font-size: 44px; margin-bottom: 24px; }
          .mig-hero-lead { margin-bottom: 20px; }
          .mig-hero-body { font-size: 15px; margin-bottom: 20px; }
        }

        /* ── Tablet ── */
        @media (max-width: 1023px) {
          .mig-hero { padding: 60px 24px 80px; }
          .mig-hero-inner { grid-template-columns: 1fr; gap: 44px; }
          .mig-hero-h1 { font-size: 40px; letter-spacing: -0.3px; margin-bottom: 16px; }
          .mig-hero-lead { margin-bottom: 16px; }
          .mig-hero-body { font-size: 15px; line-height: 1.7; margin-bottom: 16px; }
          .mig-hero-visual img { max-width: 560px; margin: 0 auto; }
        }

        /* ── Mobile ── */
        @media (max-width: 639px) {
          .mig-hero { padding: 44px 15px 60px; }
          .mig-hero-h1 { font-size: 28px; line-height: 1.2; margin-bottom: 14px; letter-spacing: -0.2px; }
          .mig-hero-lead { font-size: 14px; margin-bottom: 16px; }
          .mig-hero-body { font-size: 14px; margin-bottom: 16px; line-height: 1.65; }
          .mig-hero-ctas { width: 100%; gap: 20px; margin-top: 8px; }
          .mig-cta-outline { width: 100%; max-width: 100%; justify-content: center; padding: 14px 20px; font-size: 15px; }
          .mig-hero-text-link { font-size: 15px; }
          .mig-hero-visual img { max-width: 100%; }
        }

        /* 2 — Why 300+ Brands */
        .mig-why { background: #FFFFFF; padding: 60px 40px; }
        .mig-why-inner { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .mig-why-h2 { color: #111111; font-size: 42px; font-weight: 700; line-height: 1.18; margin: 0 0 24px; letter-spacing: -0.4px; }
        .mig-why-list { list-style: none; padding: 0; margin: 0; }
        .mig-why-item { display: grid; grid-template-columns: 28px 1fr; column-gap: 14px; align-items: start; padding: 16px 0; border-bottom: 1px solid #E5E7EB; }
        .mig-why-item:first-child { padding-top: 0; }
        .mig-why-item:last-child { border-bottom: 0; padding-bottom: 0; }
        .mig-why-icon { color: #111111; line-height: 0; padding-top: 4px; }
        .mig-why-title { color: #111111; font-size: 18px; font-weight: 700; line-height: 1.35; margin: 0 0 8px; }
        .mig-why-body { color: #334155; font-size: 15px; line-height: 1.7; margin: 0; }

        .mig-why-visual { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .mig-why-scroll { position: relative; height: 950px; overflow: hidden; border-radius: 12px; border: 1px solid rgba(0,0,0,0.08); background: #F8F8F8; }
        .mig-why-track { display: flex; flex-direction: column; gap: 15px; animation-name: mig-scroll-up; animation-timing-function: linear; animation-iteration-count: infinite; will-change: transform; }
        .mig-why-scroll:hover .mig-why-track { animation-play-state: paused; }
        .mig-why-track img { width: 100%; height: auto; display: block; }
        @keyframes mig-scroll-up { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @media (prefers-reduced-motion: reduce) { .mig-why-track { animation: none; } }

        @media (max-width: 1024px) {
          .mig-why-item { padding: 10px 0; }
          .mig-why-body { font-size: 14px; }
        }

        @media (max-width: 1023px) {
          .mig-why { padding: 60px 20px; }
          .mig-why-inner { grid-template-columns: 1fr; gap: 40px; }
          .mig-why-h2 { font-size: 30px; margin-bottom: 24px; }
          .mig-why-scroll { height: 520px; }
        }
        @media (max-width: 639px) {
          .mig-why { padding: 44px 15px; }
          .mig-why-h2 { font-size: 24px; line-height: 1.2; margin-bottom: 18px; letter-spacing: -0.2px; }
          .mig-why-item { padding: 10px 0; grid-template-columns: 22px 1fr; column-gap: 12px; }
          .mig-why-icon svg { width: 18px; height: 18px; }
          .mig-why-title { font-size: 15px; margin-bottom: 6px; }
          .mig-why-body { font-size: 13.5px; line-height: 1.65; }
          .mig-why-visual { gap: 14px; }
          .mig-why-scroll { height: 380px; border-radius: 10px; }
          .mig-why-track { gap: 12px; }
        }

        /* 3 — Everything Moves */
        .mig-moves { background: #F0F5FA; padding: 60px 40px; }
        .mig-moves-inner { max-width: 1320px; margin: 0 auto; }
        .mig-moves-h2 { color: #111111; font-size: 42px; font-weight: 700; line-height: 1.2; letter-spacing: -0.4px; text-align: center; margin: 0 0 30px; }
        .mig-moves-grid { display: grid; grid-template-columns: 1.15fr 1fr; gap: 60px; align-items: start; }
        .mig-moves-list { list-style: none; padding: 0; margin: 0; }
        .mig-moves-row { display: grid; grid-template-columns: 190px 1fr; gap: 32px; padding: 16px 0; border-bottom: 1px dashed #B6C2D2; align-items: start; }
        .mig-moves-row:first-child { padding-top: 0; }
        .mig-moves-row:last-child { border-bottom: 0; }
        .mig-moves-pill { display: inline-flex; align-items: center; justify-content: center; background: #FFFFFF; color: #111111; font-size: 22px; font-weight: 700; padding: 22px 26px; border-radius: 14px; min-height: 64px; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
        .mig-moves-body { color: #334155; font-size: 15px; line-height: 1.75; margin: 0; }

        .mig-moves-visual { position: relative; width: 100%; aspect-ratio: 1024 / 946; margin-top: 48px; }
        .mig-moves-img-back { width: 100%; height: 100%; object-fit: contain; display: block; border-radius: 12px; box-shadow: 0 16px 48px rgba(15, 23, 42, 0.10); }
        .mig-moves-img-front { position: absolute; right: -6%; bottom: -12%; width: 42%; height: auto; display: block; border-radius: 18px; box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18); }

        @media (max-width: 1024px) {
          .mig-moves-grid { grid-template-columns: 1.35fr 1fr; gap: 40px; }
          .mig-moves-row { padding: 10px 0; grid-template-columns: 150px 1fr; gap: 24px; }
          .mig-moves-body { font-size: 14px; }
        }

        @media (max-width: 1023px) {
          .mig-moves { padding: 60px 20px; }
          .mig-moves-h2 { font-size: 30px; margin-bottom: 36px; }
          .mig-moves-grid { grid-template-columns: 1fr; gap: 44px; }
          .mig-moves-row { grid-template-columns: 160px 1fr; gap: 24px; padding: 10px 0; }
          .mig-moves-pill { font-size: 18px; padding: 18px 22px; min-height: 56px; }
          .mig-moves-visual { max-width: 460px; margin: 32px auto 0; }
          .mig-moves-img-front { right: 0; bottom: -8%; width: 38%; }
        }
        @media (max-width: 639px) {
          .mig-moves { padding: 44px 15px; }
          .mig-moves-h2 { font-size: 22px; line-height: 1.25; margin-bottom: 24px; letter-spacing: -0.2px; }
          .mig-moves-row { grid-template-columns: 1fr; gap: 12px; padding: 18px 0; }
          .mig-moves-pill { justify-self: start; font-size: 15px; padding: 10px 18px; min-height: 0; border-radius: 10px; }
          .mig-moves-body { font-size: 13.5px; line-height: 1.65; }
          .mig-moves-img-front { width: 21%; height: auto; max-width: none; right: 0; bottom: -10%; }
        }

        /* 4 — Three Phases */
        .mig-phases { background: #FFFFFF; padding: 60px 40px; }
        .mig-phases-inner { max-width: 1320px; margin: 0 auto; }
        .mig-phases-h2 { color: #111111; font-size: 42px; font-weight: 700; line-height: 1.2; letter-spacing: -0.4px; text-align: center; margin: 0 0 30px; }
        .mig-phases-list { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
        .mig-phase { position: relative; padding: 0 40px; }
        .mig-phase:first-child { padding-right: 0; }
        .mig-phase:last-child { padding-right: 0; }
        .mig-phase:not(:last-child)::after { content: ''; position: absolute; top: 40px; right: 0; width: 60px; height: 2px; background-image: repeating-linear-gradient(to right, #CBD5E1 0 8px, transparent 8px 16px); transform: translateX(50%); }
        .mig-phase-icon-wrap { width: 80px; height: 80px; margin-bottom: 32px; }
        .mig-phase-icon-box { width: 80px; height: 80px; border: 2px solid #111111; border-radius: 8px; background: #FFFFFF; display: flex; align-items: center; justify-content: center; position: relative; color: #111111; }
        .mig-phase-icon-accent { position: absolute; top: 10px; left: 10px; width: 30px; height: 30px; border-radius: 50%; background: var(--brand-gradient); z-index: 1; }
        .mig-phase-icon-box svg { position: relative; z-index: 2; }
        .mig-phase-title { color: #111111; font-size: 22px; font-weight: 600; line-height: 1.3; margin: 0 0 16px; }
        .mig-phase-body { color: rgba(0,0,0,0.8); font-size: 15px; line-height: 1.7; margin: 0; max-width: 360px; }
        .mig-phase-body strong { color: #111111; font-weight: 700; }

        @media (max-width: 1024px) {
          .mig-phase-body { font-size: 14px; }
        }

        @media (max-width: 1023px) {
          .mig-phases { padding: 60px 20px; }
          .mig-phases-h2 { font-size: 30px; margin-bottom: 20px; }
          .mig-phases-list { grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .mig-phase { padding: 0; }
          .mig-phase:not(:last-child)::after { display: none; }
        }
        @media (max-width: 639px) {
          .mig-phases { padding: 44px 15px; }
          .mig-phases-h2 { font-size: 22px; margin-bottom: 24px; letter-spacing: -0.2px; }
          .mig-phases-list { grid-template-columns: 1fr; gap: 28px; }
          .mig-phase-icon-wrap { width: 64px; height: 64px; margin-bottom: 22px; }
          .mig-phase-icon-box { width: 64px; height: 64px; }
          .mig-phase-icon-box svg { width: 36px; height: 36px; }
          .mig-phase-icon-accent { top: 8px; left: 8px; width: 22px; height: 22px; }
          .mig-phase-title { font-size: 18px; margin-bottom: 12px; }
          .mig-phase-body { font-size: 13.5px; line-height: 1.65; max-width: none; }
        }

        /* 5 — Why Shopify Is Where Growing Brands End Up */
        .mig-whyshopify { background: #FBF7ED; padding: 60px 40px; }
        .mig-whyshopify-inner { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .mig-whyshopify-h2 { color: #111111; font-size: 38px; font-weight: 700; line-height: 1.2; letter-spacing: -0.3px; margin: 0 0 36px; max-width: 460px; }
        .mig-whyshopify-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 22px; }
        .mig-whyshopify-item { border-left: 3px solid #2A5538; padding: 6px 0 6px 18px; }
        .mig-whyshopify-title { color: #111111; font-size: 17px; font-weight: 700; line-height: 1.35; margin: 0 0 8px; }
        .mig-whyshopify-body { color: #334155; font-size: 14px; line-height: 1.7; margin: 0; }
        .mig-whyshopify-visual { display: flex; justify-content: center; align-items: center; }
        .mig-whyshopify-visual img { width: 100%; height: auto; max-width: 620px; display: block; }

        @media (max-width: 1023px) {
          .mig-whyshopify { padding: 60px 20px; }
          .mig-whyshopify-inner { grid-template-columns: 1fr; gap: 44px; }
          .mig-whyshopify-h2 { font-size: 28px; max-width: none; margin-bottom: 28px; }
          .mig-whyshopify-visual img { max-width: 420px; margin: 0 auto; }
        }
        @media (max-width: 639px) {
          .mig-whyshopify { padding: 44px 15px; }
          .mig-whyshopify-h2 { font-size: 22px; margin-bottom: 22px; letter-spacing: -0.2px; }
          .mig-whyshopify-list { gap: 18px; }
          .mig-whyshopify-item { padding: 4px 0 4px 14px; border-left-width: 2px; }
          .mig-whyshopify-title { font-size: 15px; margin-bottom: 6px; }
          .mig-whyshopify-body { font-size: 13px; line-height: 1.65; }
          .mig-whyshopify-visual img { max-width: 100%; }
        }

        /* 6 — Brands That Trusted Us */
        .mig-trust { background: #FFFFFF; padding: 60px 40px; }
        .mig-trust-inner { max-width: 1320px; margin: 0 auto; }
        .mig-trust-h2 { color: #111111; font-size: 26px; font-weight: 700; line-height: 1.3; text-align: center; margin: 0 0 14px; }
        .mig-trust-lede { color: #334155; font-size: 15px; line-height: 1.6; text-align: center; margin: 0 auto 44px; max-width: 760px; }
        .mig-trust-carousel { width: 100%; overflow: hidden; mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%); }
        .mig-trust-track { display: flex; width: max-content; align-items: center; animation: mig-trust-scroll 30s linear infinite; }
        .mig-trust-carousel:hover .mig-trust-track { animation-play-state: paused; }
        .mig-trust-slide { flex: 0 0 auto; display: flex; align-items: center; justify-content: center; padding: 0 44px; }
        .mig-trust-slide img { display: block; height: 72px; width: auto; max-width: 220px; object-fit: contain; }
        @keyframes mig-trust-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .mig-trust-track { animation: none; } }

        @media (max-width: 1023px) {
          .mig-trust { padding: 60px 20px; }
          .mig-trust-slide { padding: 0 32px; }
          .mig-trust-slide img { height: 56px; }
        }
        @media (max-width: 639px) {
          .mig-trust { padding: 40px 15px; }
          .mig-trust-h2 { font-size: 20px; line-height: 1.3; }
          .mig-trust-lede { font-size: 13.5px; margin-bottom: 26px; }
          .mig-trust-slide { padding: 0 26px; }
          .mig-trust-slide img { height: 64px; max-width: 180px; }
          .mig-trust-track { animation-duration: 22s; }
        }

        /* 7 — What You Get */
        .mig-getwhat { background: #FFFFFF; padding: 60px 40px; }
        .mig-getwhat-inner { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .mig-getwhat-visual { width: 100%; aspect-ratio: 4 / 5; background: #EDE6DA; border-radius: 6px; overflow: hidden; }
        .mig-getwhat-visual img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .mig-getwhat-h2 { color: #111111; font-size: 34px; font-weight: 700; line-height: 1.25; letter-spacing: -0.3px; margin: 0 0 28px; }
        .mig-getwhat-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 18px; }
        .mig-getwhat-card { background: #FBF1D8; border-radius: 12px; padding: 22px 24px; }
        .mig-getwhat-title { font-size: 18px; font-weight: 700; line-height: 1.35; color: #111111; margin: 0 0 8px; }
        .mig-getwhat-highlight { font-weight: 700; }
        .mig-getwhat-body { color: #334155; font-size: 14px; line-height: 1.7; margin: 0; }
        .mig-getwhat-body b { color: #111111; font-weight: 700; }

        @media (max-width: 1023px) {
          .mig-getwhat { padding: 60px 20px; }
          .mig-getwhat-inner { grid-template-columns: 1fr; gap: 36px; }
          .mig-getwhat-h2 { font-size: 26px; }
          .mig-getwhat-visual { max-width: 420px; margin: 0 auto; aspect-ratio: 4 / 5; }
        }
        @media (max-width: 639px) {
          .mig-getwhat { padding: 40px 15px; }
          .mig-getwhat-inner { gap: 28px; }
          .mig-getwhat-visual { max-width: 100%; aspect-ratio: 3 / 4; }
          .mig-getwhat-h2 { font-size: 22px; line-height: 1.25; margin-bottom: 18px; letter-spacing: -0.2px; }
          .mig-getwhat-list { gap: 14px; }
          .mig-getwhat-card { padding: 18px 16px; border-radius: 10px; }
          .mig-getwhat-title { font-size: 15px; margin-bottom: 6px; }
          .mig-getwhat-body { font-size: 13px; line-height: 1.65; }
        }

        /* 8 — Your Old Platform Has Cost You Enough */
        .mig-fix { background: #FBF7ED; padding: 60px 40px; }
        .mig-fix-inner { max-width: 1320px; margin: 0 auto; }
        .mig-fix-h2 { color: #111111; font-size: 38px; font-weight: 700; line-height: 1.25; letter-spacing: -0.3px; text-align: center; margin: 0 auto 30px; max-width: 1080px; }
        .mig-fix-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .mig-fix-card { background: #FFFFFF; border-radius: 16px; padding: 36px; display: grid; grid-template-columns: 1fr 220px; gap: 28px; align-items: center; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
        .mig-fix-card-copy { display: flex; flex-direction: column; }
        .mig-fix-card-title { color: #111111; font-size: 22px; font-weight: 700; line-height: 1.3; margin: 0 0 14px; }
        .mig-fix-card-body { color: #334155; font-size: 14px; line-height: 1.7; margin: 0 0 22px; }
        .mig-fix-card-cta,
        .mig-fix-card-cta:link,
        .mig-fix-card-cta:visited,
        .mig-fix-card-cta:hover,
        .mig-fix-card-cta:focus,
        .mig-fix-card-cta:active { display: inline-flex; align-items: center; gap: 8px; color: #111111; font-size: 15px; font-weight: 600; text-decoration: none; align-self: flex-start; }
        .mig-fix-card-cta span { border-bottom: 1px solid transparent; padding-bottom: 2px; transition: border-color .2s ease; }
        .mig-fix-card-cta:hover span { border-bottom-color: #4FB872; }
        .mig-fix-card-visual { width: 100%; }
        .mig-fix-card-visual img { width: 100%; height: auto; display: block; border-radius: 8px; }

        @media (max-width: 1024px) {
          .mig-fix-cards { grid-template-columns: 1fr; }
        }

        @media (max-width: 1023px) {
          .mig-fix { padding: 60px 20px; }
          .mig-fix-h2 { font-size: 28px; margin-bottom: 32px; }
          .mig-fix-cards { grid-template-columns: 1fr; gap: 22px; }
          .mig-fix-card { padding: 28px; grid-template-columns: 1fr 180px; gap: 22px; }
          .mig-fix-card-title { font-size: 20px; }
        }
        @media (max-width: 639px) {
          .mig-fix { padding: 40px 15px 56px; }
          .mig-fix-h2 { font-size: 22px; line-height: 1.25; margin-bottom: 22px; letter-spacing: -0.2px; }
          .mig-fix-cards { gap: 18px; }
          .mig-fix-card { padding: 20px; grid-template-columns: 1fr; gap: 16px; border-radius: 12px; }
          .mig-fix-card-title { font-size: 17px; margin-bottom: 10px; }
          .mig-fix-card-body { font-size: 13px; line-height: 1.65; margin-bottom: 18px; }
          .mig-fix-card-cta { font-size: 14px; }
          .mig-fix-card-visual { max-width: 200px; margin: 0 auto; }
        }

        /* 9 — Migration Case Studies — uses shared .ssd-results-* styles from globals.css */
        /* Quote-only variant for the 3 top cards on this page */
        .mig-whywork ~ section .ssd-results-card-quote { margin-bottom: 0; }

        /* 10 — Why Work with Ecomm Wizards (light theme marquee) */
        .mig-whywork { background: #F0F5FA; padding: 0 20px; min-height: 96px; overflow: hidden; display: flex; align-items: center; font-family: 'Poppins', sans-serif; }
        .mig-whywork-inner { display: flex; align-items: center; gap: 32px; max-width: 1320px; margin: 0 auto; padding: 0; width: 100%; }
        .mig-whywork-heading { flex-shrink: 0; width: 220px; font-size: 18px; font-weight: 700; color: #000000; line-height: 26px; margin: 0; padding-right: 24px; border-right: 1px solid rgba(0,0,0,0.12); }
        .mig-whywork-br { display: inline; }
        .mig-whywork-marquee { flex: 1 1 auto; min-width: 0; overflow: hidden; }
        .mig-whywork-track { display: flex; align-items: center; width: max-content; margin: 0; padding: 0; list-style: none; animation: mig-whywork-scroll 30s linear infinite; }
        .mig-whywork-marquee:hover .mig-whywork-track { animation-play-state: paused; }
        .mig-whywork-item { display: inline-flex; align-items: center; gap: 60px; padding-right: 60px; font-size: 16px; font-weight: 400; color: #000000; white-space: nowrap; letter-spacing: 0.5px; }
        .mig-whywork-text { color: #000000; font-size: 16px; }
        .mig-whywork-dot { width: 7px; height: 7px; background: #000000; border-radius: 50%; flex-shrink: 0; }
        @keyframes mig-whywork-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .mig-whywork-track { animation: none; } }

        @media (max-width: 1023px) {
          .mig-whywork { padding: 28px 20px; }
          .mig-whywork-inner { flex-direction: column; align-items: flex-start; gap: 18px; }
          .mig-whywork-heading { width: 100%; padding-right: 0; border-right: none; }
          .mig-whywork-marquee { width: 100%; }
        }
        @media (max-width: 639px) {
          .mig-whywork { padding: 20px 15px; }
          .mig-whywork-inner { gap: 14px; }
          .mig-whywork-heading { font-size: 15px; line-height: 22px; }
          .mig-whywork-br { display: none; }
          .mig-whywork-item { gap: 30px; padding-right: 30px; font-size: 14px; }
          .mig-whywork-text { font-size: 14px; }
          .mig-whywork-dot { width: 6px; height: 6px; }
          .mig-whywork-track { animation-duration: 24s; }
        }

        /* 12 — FAQ (smooth accordion) */
        .mig-faq { background: #FFFFFF; padding: 60px 40px; }
        .mig-faq-inner { max-width: 900px; margin: 0 auto; }
        .mig-faq-h2 { color: #111111; font-size: 42px; font-weight: 700; line-height: 1.2; letter-spacing: -0.4px; text-align: center; margin: 0 0 40px; }
        .mig-faq-acc { position: relative; }
        .mig-faq-rad { position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; }
        .mig-faq-list { display: flex; flex-direction: column; }
        .mig-faq-item { border-top: 1px solid rgba(0,0,0,0.10); }
        .mig-faq-item:last-child { border-bottom: 1px solid rgba(0,0,0,0.10); }
        .mig-faq-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 22px 0; cursor: pointer; }
        .mig-faq-q { color: #111111; font-size: 17px; font-weight: 600; line-height: 1.4; }
        .mig-faq-ico { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; color: #111111; flex: 0 0 auto; transition: transform .3s ease; }
        .mig-faq-bodyc { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows .3s ease, opacity .25s ease; }
        .mig-faq-in { overflow: hidden; min-height: 0; }
        .mig-faq-bodyc p { color: #334155; font-size: 15px; line-height: 1.75; margin: 0; padding: 0 40px 22px 0; }
        ${FAQS.map((_, i) => `#mig-faq-${i}:checked ~ .mig-faq-list [data-faq="mig-faq-${i}"] .mig-faq-bodyc`).join(",\n        ")} {
          grid-template-rows: 1fr; opacity: 1;
        }
        ${FAQS.map((_, i) => `#mig-faq-${i}:checked ~ .mig-faq-list [data-faq="mig-faq-${i}"] .mig-faq-ico`).join(",\n        ")} {
          transform: rotate(180deg);
        }
        @media (max-width: 1023px) {
          .mig-faq { padding: 60px 20px; }
          .mig-faq-h2 { font-size: 30px; margin-bottom: 32px; }
        }
        @media (max-width: 639px) {
          .mig-faq { padding: 44px 15px; }
          .mig-faq-h2 { font-size: 22px; margin-bottom: 24px; letter-spacing: -0.2px; }
          .mig-faq-q { font-size: 15px; }
          .mig-faq-bodyc p { font-size: 14px; padding-right: 0; }
        }
      ` }} />

      <RelatedServices current="/services/migration" max={7} heading="Migrate to Shopify from any platform" />
    </>
  );
}
