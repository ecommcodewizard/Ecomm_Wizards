import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SdaAccordion from "./SdaAccordion";
import SdaFaqAccordion from "./SdaFaqAccordion";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RelatedServices from "@/components/sections/RelatedServices";
import CalEmbed from "@/app/book-shopify-consultation/CalEmbed";

const META_DESCRIPTION =
  "Shopify development agency specializing in custom builds, theme development, Shopify Plus, and migrations. 150+ stores built. Fixed price. Most projects live in 6 weeks.";
const CANONICAL_URL = "https://ecommwizards.com/services/shopify-development-agency";

export const metadata: Metadata = {
  title: { absolute: "Shopify Development Agency | Custom Builds and Shopify Plus" },
  description: META_DESCRIPTION,
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Shopify Development Agency | Custom Builds and Shopify Plus",
    description: META_DESCRIPTION,
    images: [{ url: "/images/Group_1000003974_d0eba414-7aec-4930-b534-a4dcc91d004e_1024x1024.png", alt: "shopify development agency by Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency | Custom Builds and Shopify Plus",
    description: META_DESCRIPTION,
    images: ["/images/Group_1000003974_d0eba414-7aec-4930-b534-a4dcc91d004e_1024x1024.png"],
  },
};

const C_DARK  = "#000000";
const C_TEXT  = "#334155";
const C_WHITE = "#FFFFFF";
const C_CREAM = "#FBF7ED";

/* ── Case study slider slides ── */
const CASE_STUDY_SLIDES: CaseStudySlide[] = [
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A high-performance <strong>Shopify Plus</strong> store developed and scaled for <strong>BARK</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong>, made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
  {
    key: "everlast",
    image: "/images/Case%20studies/Everlast-banner.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A <strong>Shopify Plus</strong> rebuild that delivered <strong>+152% conversion rate</strong> for <strong>Everlast</strong></>),
    quote: (<>&ldquo;We needed a store that could handle serious athletes, casual fitness buyers, and trade accounts in one place. Ecomm Wizards built exactly that. The <strong>conversion numbers and trade portal revenue</strong> both exceeded what we projected.&rdquo;</>),
    avatar: "/images/Case%20studies/Daniel%20Summerson.jpg",
    name: "Daniel Summerson",
    role: "Managing Director, Everlast Gyms",
  },
];

/* ── Case study cards ── */
const CASE_STUDIES = [
  {
    brand: "NEOM Wellbeing",
    metric: "+34%",
    metricLabel: "Checkout Conversion",
    tags: ["Shopify 2.0", "Custom Theme", "Shopify Plus"],
    industry: "Health & Wellness",
    image: "/images/Case%20studies/NEOM%20Wellbeing-2.webp",
    video: "/images/Case%20studies/NEOM%20Wellbeing%20video.mp4",
    href: "/case-studies/neom-wellbeing-shopify-upgrade",
    description: "A multi-award-winning luxury wellbeing brand upgraded from a legacy Shopify setup to Shopify 2.0, unified physical retail under Shopify POS, expanded to three markets, and grew checkout conversion 34% and order volume 10%.",
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
    description: "America's top-rated performance sock brand rebuilt their Shopify theme from scratch with custom PLPs, dynamic PDPs, and metafield-driven automation that eliminated recurring manual overhead and grew add-to-cart rate 32%.",
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
    description: "The outdoor apparel brand consolidated three separate Shopify stores into a single Shopify Plus build with full internationalization, a custom product finder, and brand storytelling woven into the store architecture. Online revenue grew 89% in the first year.",
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
    description: "A global sportswear brand migrated from WordPress to Shopify with zero downtime, a performance-first redesign, and a 10-app integration stack. Conversion rate grew 24%, site speed 38%, and 95% of SEO equity was preserved.",
  },
];

/* ── Trust logos ── */
const TRUST_LOGOS = [
  { src: "/images/Case%20studies/logos/111skin%20logo.png",     alt: "111SKIN" },
  { src: "/images/Case%20studies/logos/Candy%20Kittens.webp",   alt: "Candy Kittens" },
  { src: "/images/Case%20studies/logos/NEOM%20Wellbeing.png",   alt: "NEOM Wellbeing" },
  { src: "/images/Case%20studies/logos/Ronaldo%20Jewelry.avif", alt: "Ronaldo Jewelry" },
  { src: "/images/Case%20studies/logos/Wild.svg",               alt: "Wild" },
  { src: "/images/Case%20studies/logos/Everlast.png",                           alt: "Everlast" },
  { src: "/images/Case%20studies/logos/Saddleback.svg",         alt: "Saddleback" },
  { src: "/images/Case%20studies/logos/Twillory.png",           alt: "Twillory" },
];

/* ── Pain point cards ── */
const SDA_PAINS = [
  {
    name: "Slow Theme Dragging Down Your Conversion Rate",
    desc: "Your theme carries unused app scripts and unoptimized assets that slow every page load. Every extra second costs you conversion. An LCP above 2.5 seconds means buyers leave before they see your first product image.",
    cost: "At $2M GMV, a 0.5% conversion lift from speed work alone is worth $50,000 in annual revenue. Most stores leave it on the table.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "A Template That Makes Your Store Look Like Every Competitor",
    desc: "If your store runs a theme from the Shopify theme store, thousands of other stores share the same layout, sections, and structure. Brand differentiation is impossible when your foundation is shared.",
    cost: "Visitors form brand trust in the first 50ms. A generic template signals a generic brand. Premium perception requires a custom-built storefront.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="15" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Features Your Business Needs That No Shopify App Covers",
    desc: "Custom product configurators, trade pricing, bundle builders, custom checkout flows: these cannot be delivered by installing an app. If your product or business model has any complexity, you need custom Shopify development.",
    cost: "Every workaround app adds to your monthly SaaS bill, slows your store, and introduces a dependency on a vendor you do not control.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4l2.5 5 5.5.8-4 3.9.9 5.5L14 16.5 9.6 19.2l.9-5.5-4-3.9 5.5-.8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Migration Risk: Downtime, SEO Loss, and Broken Data",
    desc: "Moving from WooCommerce, Magento, or BigCommerce without a structured plan means downtime, lost search rankings, broken redirects, and corrupted order history. Most agencies underestimate the complexity.",
    cost: "A poorly executed migration can cost more in lost organic traffic than the entire migration project cost. Stores lose 40-60% of organic rankings from broken redirects alone.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 3L25 21H3L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 11v5M14 18v1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "App Bloat Killing Load Time and Monthly Cost",
    desc: "The average Shopify store installs 6-12 apps over its lifetime. Each one adds scripts to every page load. Overlapping and unused apps are one of the leading causes of Core Web Vitals failures.",
    cost: "Each installed app averages $30-$60 per month. Ten apps costs $3,600-$7,200 annually. Most stores run several that deliver no measurable impact.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="4" y="16" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 20h8M20 16v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "No Reliable Development Partner for Post-Launch Work",
    desc: "Your store launched, the agency moved on, and now every change requires finding a freelancer, briefing them from scratch, and hoping they understand your Shopify setup. The cost accumulates quietly.",
    cost: "Merchants without a retained development partner spend an average of 3x more on ad hoc fixes than those with an ongoing Shopify development agency relationship, and see less improvement per dollar spent.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 24c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 16l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

/* ── Services accordion items ── */
const SDA_ITEMS = [
  {
    title: "Custom Shopify Theme Development",
    body: "Every page of your store designed and built from scratch to your brand guidelines. Custom Liquid components, section schema, metafield architecture, and mobile-first build. This is what custom Shopify development actually means: no template constraints, no workaround CSS, no design decisions inherited from a theme vendor. Your store will not look like any other store.",
  },
  {
    title: "Shopify Plus Development",
    body: "Shopify Plus gives you checkout extensibility, Shopify Functions, multi-store management via the Organization Admin, and automation through Shopify Flow. As a Shopify Plus development agency, we build on every Plus-exclusive feature: custom checkout UI extensions, B2B wholesale channels, Markets for multi-currency and multi-region, and Launchpad for campaign automation. The right build for stores doing serious volume.",
  },
  {
    title: "Shopify Store Migration & Replatforming",
    body: "Migrate from WooCommerce, Magento, BigCommerce, Salesforce Commerce Cloud, or any custom platform to Shopify. Full product, customer, and order history migration. 301 redirect mapping for every URL. SEO preservation is treated as the primary goal throughout the project, not an afterthought. Zero downtime cut-over. We have migrated stores with 500,000+ SKUs and retained 95%+ of organic search rankings through the transition.",
  },
  {
    title: "Custom App & Feature Development",
    body: "Custom Shopify apps, private apps, and Shopify Functions-powered features built to your exact specification. Product configurators, bundle builders, loyalty mechanics, subscription flows, B2B quote tools, and custom admin panels. If it can be built on Shopify, we can build it. If it cannot, we use Shopify's API and webhooks to make it happen.",
  },
  {
    title: "Shopify 2.0 Upgrade & Modernization",
    body: "Upgrade from legacy Shopify themes to Online Store 2.0 architecture. Sections everywhere, app blocks, metafield-driven content, and JSON templates that give your team full editorial control without developer involvement. We migrate existing content, rebuild custom sections as native 2.0 blocks, and preserve every customization during the transition.",
  },
  {
    title: "B2B & Wholesale Store Development",
    body: "Dedicated B2B storefronts on Shopify Plus with trade-only pricing, company account management, net payment terms, purchase order checkout, and rep portal access. Custom wholesale catalogs, tiered pricing by account tier, and quantity break pricing. Built on Shopify's native B2B features or custom middleware depending on your complexity.",
  },
  {
    title: "Headless Shopify Development",
    body: "Decouple your Shopify storefront from the Liquid layer using Next.js or Shopify Hydrogen. Full creative freedom over the frontend while keeping Shopify as your commerce engine. Server-side rendering, sub-100ms TTFB, and complete control over the user experience. This is advanced Shopify web development for brands where performance and design precision are non-negotiable.",
  },
  {
    title: "Performance & Speed Optimization",
    body: "LCP under 2.5 seconds, CLS zero, INP under 200ms. We audit, diagnose, and fix Core Web Vitals failures: image optimization, lazy loading, script deferral, app script consolidation, CDN configuration, and Liquid render performance. Speed audits delivered as a written report with prioritized fixes. Most stores see measurable Core Web Vitals improvement within two weeks.",
  },
];

/* ── Industries ── */
const SDA_INDUSTRIES = [
  {
    name: "Fashion & Apparel",
    desc: "Custom size guides, lookbooks, visual PDPs, and wholesale trade channels.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M10 4L7 8H4v16h20V8h-3l-3-4h-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 4c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Beauty & Skincare",
    desc: "Shade finders, product bundling, subscriptions, and loyalty program builds.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4l2 5h5l-4 3 1.5 5L14 14l-4.5 3 1.5-5-4-3h5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 18v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Health & Wellness",
    desc: "Subscription models, compliance-aware copy blocks, B2B pharmacy portals.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 24s-9-5.5-9-12a6 6 0 0 1 9-5.2A6 6 0 0 1 23 12c0 6.5-9 12-9 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Food & Beverage",
    desc: "Subscription boxes, delivery scheduling logic, perishables and gifting flows.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M9 4v8a5 5 0 0 0 10 0V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 16v8M10 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19 4v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "B2B & Wholesale",
    desc: "Trade portals, net-terms checkout, tiered pricing, and rep account logins.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="10" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 10V7a6 6 0 0 1 12 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="17" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Electronics & Tech",
    desc: "Complex variant matrices, comparison tools, and warranty management workflows.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="4" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 24h8M14 20v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="13" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Sports & Fitness",
    desc: "Equipment configurators, club and team bulk ordering, and B2B sports trade.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4l2 7h7l-5.7 4.1 2.2 6.9L14 18l-5.5 4 2.2-6.9L5 11h7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Home & Lifestyle",
    desc: "Swatch selectors, AR product tools, interior design integrations, and trade accounts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 14L14 5l10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12v11h6v-6h4v6h6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

/* ── Compare section ── */
const SDA_PROS = [
  "Pixel-perfect brand execution. Built to your design, not a template's constraints.",
  "You own 100% of the code. No vendor lock-in. No recurring license fees.",
  "Built directly on Shopify APIs. No fragile app dependencies.",
  "Architecture designed to scale with your GMV, not against it.",
  "Full documentation and code handover at project completion.",
  "60 days post-launch support and monitoring included in every project.",
];

const SDA_CONS = [
  { text: "Hourly billing that balloons mid-project. The quote you signed is not the invoice you get.", warn: true },
  { text: "A senior developer runs the sales call. The build is handed to outsourced juniors you never meet.", warn: true },
  { text: "Your code lives in the agency's accounts. Leaving them means starting from scratch.", warn: true },
  { text: "No confirmed go-live date. Timelines drift and nobody is accountable.", warn: false },
  { text: "Builds go live without cross-device testing or a QA process.", warn: false },
  { text: "Support ends at handover. No monitoring, no post-launch incident response.", warn: false },
];

/* ── FAQs ── */
const SDA_FAQS = [
  {
    q: "How much does Shopify development cost?",
    a: "Custom Shopify development cost depends on what you need built. A custom theme build typically starts from $10,000 to $20,000. Shopify Plus builds with custom features, B2B functionality, or complex integrations typically run $20,000 to $50,000. Platform migrations from WooCommerce or Magento with full data migration and SEO preservation start from $15,000. Every project is fixed price before development begins. No hourly billing. No invoices you did not see coming.",
  },
  {
    q: "How long does a Shopify development project take?",
    a: "Most Shopify store development projects are live within six weeks of kickoff. A custom theme build typically takes four to six weeks. Shopify Plus projects with custom app development or complex integrations run six to ten weeks. Platform migrations with large product catalogs typically take six to eight weeks. We set the exact go-live date before development starts. You know the launch date on Day 1. There are no timeline surprises.",
  },
  {
    q: "Do you build on Shopify Plus?",
    a: "Yes. Our Shopify Plus development work covers checkout extensibility, Shopify Functions, multi-store management, B2B wholesale channels, and Shopify Markets for multi-currency and multi-region. We advise on whether Plus is right for your business at the outset. We do not recommend it unless the feature set genuinely applies to your volume and operational requirements.",
  },
  {
    q: "Can you migrate our store from WooCommerce, Magento, or BigCommerce?",
    a: "Yes. As a Shopify development agency that has handled large-scale migrations, we move stores from WooCommerce, Magento, BigCommerce, Salesforce Commerce Cloud, Prestashop, and custom-built platforms. Full product, customer, and order history migration. 301 redirect mapping for every URL. SEO preservation is treated as the primary goal throughout. Zero downtime cut-over. When the redirect mapping is done properly, 95%+ of organic search rankings come through the migration intact.",
  },
  {
    q: "What is the difference between a Shopify theme and custom development?",
    a: "A Shopify theme is a pre-built template from the Shopify Theme Store or a third-party marketplace. Thousands of stores run the same theme with minor CSS tweaks. Custom Shopify development means your storefront is built from scratch with every component designed and coded to your brand and business requirements. Custom development gives you code you own, features that do not exist in any theme, and a store that does not look like your competitors. The difference is not cosmetic. It affects conversion, performance, and how well your store scales as your business grows.",
  },
  {
    q: "Do we own the code after the project is complete?",
    a: "Yes. Every line of code, every Liquid component, every metafield schema, and every configuration is yours at project completion. We deliver full documentation alongside the code. There is no proprietary system. Any Shopify development company or in-house developer can take the codebase and maintain it. If you stop working with us, your store runs exactly as we built it.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Every project includes a 60-day post-launch support window as standard. Any incident during those 60 days is handled by us at no additional cost. After the 60-day window, we offer ongoing support retainers for stores that want a retained Shopify development agency rather than relying on ad hoc freelancers. We also take on support and maintenance work on a project basis.",
  },
  {
    q: "Can you build features that do not exist in the Shopify App Store?",
    a: "Yes. Custom Shopify development built on the Admin API, Storefront API, Shopify Functions, and webhooks can replicate almost any functionality. Custom product configurators, trade pricing engines, loyalty mechanics, subscription flows, B2B quote tools, and custom admin panels are all features we have built from scratch. If a feature can be described clearly, it can be built.",
  },
  {
    q: "How do you protect SEO rankings during a migration?",
    a: "SEO preservation starts with a full URL audit before a single redirect is written. We map every existing URL to its Shopify equivalent, generate the full 301 redirect file, and test every redirect in staging before go-live. We preserve canonical tags, structured data, meta descriptions, and heading structure through the migration. Google Search Console is monitored for crawl errors in the 30 days post-launch and any issues are fixed immediately. Most migrations handled by our Shopify development agency retain 90-95%+ of organic search rankings.",
  },
  {
    q: "How do we get started?",
    a: "The first step is a free Discovery Call. We spend 30 minutes on your current store, your goals, and what you need built. From there we produce a written Scope of Work with the full cost and timeline, usually within 48 hours. Most clients move from the Discovery Call to a signed project within one week. From sign-off to go-live, most Shopify development projects complete within six weeks.",
  },
];

const BREADCRUMB_SCHEMA_SDA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Shopify Development Agency", item: "https://ecommwizards.com/services/shopify-development-agency" },
  ],
};

/* ── Shared SVGs ── */
const Arrow = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
    <path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <circle cx="9" cy="9" r="9" fill="rgba(97,206,112,0.15)" />
    <path d="M5 9l3 3 5-5" stroke="#61ce70" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrossIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <circle cx="9" cy="9" r="9" fill="rgba(239,68,68,0.12)" />
    <path d="M6 6l6 6M12 6l-6 6" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const WarnIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
    <circle cx="9" cy="9" r="9" fill="rgba(245,158,11,0.12)" />
    <path d="M9 6v4M9 12v.5" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Page() {
  return (
    <>
      <Breadcrumbs current="/services/shopify-development-agency" />
      {/* ── §1 Hero (DARK) ── */}
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Shopify development agency hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Shopify Development Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Shopify Development Agency That Builds Stores{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Designed to Convert
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              Your store is the most important sales channel your business has. We build it right. <Link href="/services/shopify-theme-development" style={{ color: "#61ce70", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>Custom Shopify theme development</Link>, Shopify Plus builds, <Link href="/services/migration" style={{ color: "#61ce70", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>platform migrations</Link>, and every piece of Shopify web development your business actually needs. We have delivered 150+ stores, all on a fixed price, with a go-live date confirmed before we write a single line of code.
            </p>

            <div className="std-hero-stats">
              {[
                { number: "150+",    label: "Stores Built" },
                { number: "$400M+",  label: "Client Revenue" },
                { number: "95%+",    label: "Rankings Retained" },
                { number: "60 Days", label: "Support Included" },
              ].map((s) => (
                <div key={s.label} className="std-hero-stat-item">
                  <span className="std-hero-stat-num">{s.number}</span>
                  <span className="std-hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginTop: "32px" }}>
              <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
                <Link
                  href="#book-a-call"
                  className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Discovery Call</span>
                  <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
                </Link>
              </span>
              <Link
                href="#case-studies"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.7)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", padding: "14px 0", transition: "color 0.2s ease" }}
                className="sda-hero-secondary-cta"
              >
                See Our Work
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Partner badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "24px" }}>
              <Image src="/images/shopify-icon.svg" unoptimized alt="Shopify Plus Partner" width={22} height={22} style={{ opacity: 0.8 }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Shopify Plus Partner. 150+ stores built exclusively on Shopify.</span>
            </div>
          </div>

          <div className="si-hero-img-wrap">
            <Image
              src="/images/Group_1000003974_d0eba414-7aec-4930-b534-a4dcc91d004e_1024x1024.png"
              overrideSrc="/images/Group_1000003974_d0eba414-7aec-4930-b534-a4dcc91d004e_1024x1024.png"
              alt="Shopify development agency building a custom Shopify store"
              width={640}
              height={480}
              priority
              className="si-hero-img"
              style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── §2 Trust Bar (WHITE) ── */}
      <section className="std-trust" style={{ background: C_WHITE }} aria-label="Brands that trust Ecomm Wizards for Shopify development">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: C_DARK, fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            150+ Shopify Stores Built. Here&apos;s Who Trusts Us.
          </h2>
          <p className="text-center" style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", margin: "10px 0 0", textAlign: "center" }}>
            We build exclusively on Shopify. Every project is built and launched in-house by developers who work on Shopify full-time and nothing else.
          </p>
          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="sda-trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div key={i} className="std-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={i < TRUST_LOGOS.length ? l.alt : ""}
                    className="std-trust-logo"
                    width={200}
                    height={80}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── §4 Pain Points (CREAM) ── */}
      <section className="sda-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Shopify development pain points">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="si-feat-title-block">
            <h2 className="si-feat-heading">
              6 Development Problems We Find on Almost Every Store We Audit
            </h2>
            <p className="si-feat-desc">
              If your store was not built properly, it is costing you revenue every day. We find at least three of these on every store we audit.
            </p>
          </div>
          <div className="si-feat-grid">
            {SDA_PAINS.map((pain) => (
              <div key={pain.name} className="si-feat-card">
                <span className="si-feat-icon" aria-hidden="true">{pain.icon}</span>
                <h3 className="si-feat-name">{pain.name}</h3>
                <p className="si-feat-desc-text">{pain.desc}</p>
                <div className="si-feat-roi">
                  <span className="si-feat-roi-label">What this costs you:</span> {pain.cost}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .si-feat-heading { color: #000; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 auto 16px; max-width: 1000px; }
          .si-feat-desc { color: rgba(0,0,0,.75); font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 1000px; }
          .si-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .si-feat-card { background: #fff; border-radius: 16px; padding: 28px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 12px; }
          .si-feat-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .si-feat-name { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
          .si-feat-desc-text { font-family: 'Poppins', sans-serif; font-size: 14px; color: #334155; line-height: 1.7; margin: 0; flex-grow: 1; }
          .si-feat-roi { font-family: 'Poppins', sans-serif; font-size: 13px; color: #2A9555; line-height: 1.5; background: rgba(61,199,122,0.08); border-radius: 8px; padding: 10px 14px; border-left: 3px solid #3DC77A; margin-top: auto; }
          .si-feat-roi-label { font-weight: 700; }
          @media (max-width: 1024px) { .si-feat-heading { font-size: 32px !important; } .si-feat-desc { font-size: 16px !important; margin-bottom: 24px !important; } .si-feat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 768px) { .si-feat-desc { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .sda-feat { padding: 40px 16px !important; } .si-feat-heading { font-size: 26px !important; margin-bottom: 12px !important; } .si-feat-desc { font-size: 15px !important; margin-bottom: 12px !important; } .si-feat-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── §5 Services Accordion (WHITE) ── */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label="Shopify development services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>Development Services</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              Every Shopify Development Service Your Store Needs
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              From custom Shopify theme development and Shopify Plus builds to platform migrations and <Link href="/services/shopify-speed-optimization" style={{ color: "#1F7A45", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>performance work</Link>. We cover every Shopify web development need your store has. All in-house. All fixed price.
            </p>
            <Link href="#book-a-call" className="std-cta-sol mt-8">
              Book a Free Discovery Call
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <SdaAccordion items={SDA_ITEMS} />
        </div>
      </section>

      {/* ── §12 Case Studies (CREAM) ── */}
      <section id="case-studies" style={{ background: C_CREAM, padding: "40px 20px", scrollMarginTop: "90px" }} aria-label="Shopify development case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center sda-cs-heading" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Shopify Development Projects We Have Delivered
          </h2>
          <div className="sda-cs-grid">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`sda-cs-card${i === 3 ? " sda-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} overrideSrc={cs.image} alt={`${cs.brand} Shopify development case study`} fill className="sda-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
                  )}
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(255,255,255,0.97)", borderRadius: "9999px", padding: "5px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000", display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 400, color: "#000", whiteSpace: "nowrap" }}>{cs.metricLabel}</span>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", fontWeight: 700, color: "#000", whiteSpace: "nowrap" }}>{cs.metric}</span>
                  </div>
                  <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.72)", borderRadius: "9999px", padding: "4px 12px" }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 500, color: "#fff", whiteSpace: "nowrap" }}>{cs.industry}</span>
                  </div>
                </div>
                <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flexGrow: 1, gap: "12px" }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px", fontWeight: 700, color: "#000", margin: 0, lineHeight: 1.2 }}>{cs.brand}</p>
                  <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {cs.tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 500, color: "#444", border: "1px solid rgba(0,0,0,0.22)", borderRadius: "9999px", padding: "3px 10px", whiteSpace: "nowrap" }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "14px", color: "rgba(0,0,0,0.55)", margin: 0, lineHeight: 1.6, flexGrow: 1 }}>{cs.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 24 }}>
            <Link href="/case-studies" className="std-cta-dark inline-flex items-center gap-3">
              <span>See All Case Studies</span>
              <Arrow />
            </Link>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .sda-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .sda-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .sda-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .sda-cs-card-img { transition: transform 0.4s ease; }
          .sda-cs-card:hover .sda-cs-card-img { transform: scale(1.03); }
          .sda-cs-card-4th { display: none !important; }
          @media (max-width: 640px) { .sda-cs-heading { font-size: 26px !important; } }
          @media (max-width: 768px) { .sda-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .sda-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .sda-cs-grid { grid-template-columns: 1fr; } .sda-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── §7 Process (WHITE with CREAM inner) ── */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our Shopify development process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            From Brief to a Live Shopify Store in 6 Weeks
          </h2>
          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            Five phases. One defined scope.
            <br className="hidden sm:block lg:hidden" />{" "}
            Most Shopify development projects are live within six weeks of kickoff.
          </p>

          {/* All 5 cards — unified grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Discovery & Scope",    desc: "We map your requirements, document your existing stack, and define the full scope in writing. You receive a Scope of Work document before a single line of code is written. No ambiguity. No scope creep." },
              { step: "02.", title: "Design & Wireframes",  desc: "Wireframes and high-fidelity designs built against your brand guidelines in Figma. Every page, every state, every responsive breakpoint. You approve the design before development begins." },
              { step: "03.", title: "Development & Build",  desc: "Custom Liquid development, component architecture, metafield configuration, and third-party integrations. Weekly progress updates. Builds go into a staging environment for your review at each milestone." },
              { step: "04.", title: "QA & Testing",        desc: "End-to-end testing across devices, browsers, and edge cases. Performance testing against Core Web Vitals benchmarks. Accessibility checks. We do not hand over a build that has not been stress-tested." },
              { step: "05.", title: "Launch & Handover",   desc: "Controlled go-live with rollback plan in place. Full documentation of every custom component, metafield schema, and integration. Code transferred to your repository. 60-day support window begins from launch day." },
            ].map(({ step, title, desc }, i, arr) => {
              const lgClass =
                i < 3 ? " lg:col-span-2" :
                i === 3 ? " lg:[grid-column:2/4]" :
                " lg:[grid-column:4/6]";
              const smLastClass = i === arr.length - 1 ? " sm:col-span-2 sm:max-w-[360px] sm:mx-auto lg:max-w-none lg:mx-0" : "";
              return (
              <div key={step} className={`p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]${lgClass}${smLastClass}`} style={{ background: "#FFFFFF", borderRadius: "16px", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* ── §9 Compare (DARK) ── */}
      <section className="sda-compare" style={{ background: C_DARK, padding: "0 20px" }} aria-label="What sets our Shopify development agency apart from typical agencies">
        <div className="mx-auto" style={{ maxWidth: 1320, padding: "60px 0" }}>
          <h2 className="sda-compare-h2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4.1vw, 42px)", fontWeight: 700, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            What Sets Our{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify Development Agency
            </span>{" "}
            Apart
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            The proposals from most agencies look the same. The contracts are where they differ. Here is what to compare before you sign.
          </p>

          <div className="sda-compare-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20, marginTop: 10 }}>

            <div className="sda-compare-card" style={{ background: "#121212", borderRadius: 16, padding: 30, marginTop: 10 }}>
              <span className="sda-compare-pill" style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#3DC77A", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(61,199,122,0.3)" }}>
                ✓ Custom Development by Ecomm Wizards
              </span>
              <ul className="sda-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {SDA_PROS.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sda-compare-card" style={{ background: "#121212", borderRadius: 16, padding: 30, marginTop: 10 }}>
              <span className="sda-compare-pill" style={{ display: "inline-block", background: "rgba(239,68,68,0.12)", color: "#f87171", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(239,68,68,0.25)" }}>
                ✕ Typical Dev Agencies
              </span>
              <ul className="sda-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {SDA_CONS.map((item) => (
                  <li key={item.text} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2, color: item.warn ? "#fbbf24" : "#f87171" }}>
                      {item.warn ? <WarnIcon /> : <CrossIcon />}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="#book-a-call"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Discovery Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1024px) { .sda-compare-pill { font-size: 17px !important; } }
          @media (max-width: 768px) { .sda-compare-grid { gap: 12px !important; } .sda-compare-card { padding: 20px !important; } .sda-compare-pill { font-size: 15px !important; } .sda-compare-list li { font-size: 13px !important; } }
          @media (max-width: 640px) { .sda-compare-h2 { line-height: 1.25 !important; font-size: 26px !important; } .sda-compare > div { padding: 46px 0 !important; } }
        ` }} />
      </section>

      {/* ── §6 Industries We Serve (CREAM) ── */}
      <section className="sda-industries" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Industries Ecomm Wizards builds Shopify stores for">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 style={{ color: C_DARK, fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", margin: "0 0 12px" }}>
            Industries We Build Shopify Stores For
          </h2>
          <p style={{ color: "#000000", fontFamily: "'Poppins', sans-serif", fontSize: 16, lineHeight: "26px", textAlign: "center", margin: "0 auto 40px", maxWidth: "620px" }}>
            Every sector has different development requirements. Here are the industries we build for most, and what we specialize in for each.
          </p>
          <div className="sda-ind-grid">
            {SDA_INDUSTRIES.map((ind) => (
              <div key={ind.name} className="sda-ind-card">
                <span className="sda-ind-icon" aria-hidden="true">{ind.icon}</span>
                <h3 className="sda-ind-name">{ind.name}</h3>
                <p className="sda-ind-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#000000", textAlign: "center", margin: "32px 0 0" }}>
            Not on this list? We build for all sectors. The platform is always Shopify.
          </p>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .sda-ind-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
          .sda-ind-card { background: #fff; border-radius: 16px; padding: 24px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 10px; }
          .sda-ind-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .sda-ind-name { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
          .sda-ind-desc { font-family: 'Poppins', sans-serif; font-size: 13px; color: #334155; line-height: 1.65; margin: 0; }
          @media (max-width: 1024px) { .sda-ind-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 12px !important; } .sda-ind-card { padding: 18px !important; } }
          @media (max-width: 768px) { .sda-ind-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 480px) { .sda-ind-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; } .sda-ind-card { padding: 16px !important; } }
        ` }} />
      </section>

      {/* ── §8 Platform Comparison (WHITE) ── */}
      <section className="sda-platforms" style={{ background: C_WHITE, padding: "60px 20px" }} aria-label="Shopify vs WooCommerce vs BigCommerce comparison">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 style={{ color: C_DARK, fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", margin: "0 0 12px" }}>
            Shopify vs WooCommerce vs BigCommerce
          </h2>
          <p style={{ color: "#000000", fontFamily: "'Poppins', sans-serif", fontSize: 16, lineHeight: "26px", textAlign: "center", margin: "0 auto 20px", maxWidth: "640px" }}>
            We build exclusively on Shopify. Here is why, and where Shopify genuinely wins over the alternatives.
          </p>

          <div className="sda-plat-grid">
            {/* Shopify — featured */}
            <div className="sda-plat-card sda-plat-card--featured">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <Image src="/images/shopify-icon.svg" unoptimized alt="" width={24} height={24} aria-hidden />
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, color: "#000", margin: 0 }}>Shopify</h3>
              </div>
              <span style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#2A9555", fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, borderRadius: "999px", padding: "3px 12px", marginBottom: "20px", border: "1px solid rgba(61,199,122,0.3)" }}>Our Platform</span>
              {[
                { label: "Hosting & Security", verdict: "Fully managed. Shopify handles uptime, SSL, and PCI compliance." },
                { label: "Checkout Flexibility", verdict: "Full checkout extensibility via Shopify Functions on Plus." },
                { label: "App Ecosystem", verdict: "13,000+ vetted apps. Quality controlled by Shopify review process." },
                { label: "Cost of Ownership", verdict: "Predictable monthly fee. Transaction fees waived on Shopify Payments." },
                { label: "Scalability", verdict: "Black Friday-tested infrastructure. No server management required." },
                { label: "Support", verdict: "24/7 Shopify support plus a global developer community." },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "14px" }}>
                  <span style={{ flexShrink: 0, marginTop: "2px" }}><CheckIcon /></span>
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: "#000000", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{row.label}</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "#000", margin: 0, lineHeight: 1.5 }}>{row.verdict}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WooCommerce */}
            <div className="sda-plat-card">
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, color: "#000", margin: "0 0 8px" }}>WooCommerce</h3>
              <span style={{ display: "inline-block", background: "rgba(239,68,68,0.08)", color: "#ef4444", fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, borderRadius: "999px", padding: "3px 12px", marginBottom: "20px", border: "1px solid rgba(239,68,68,0.2)" }}>Self-Hosted</span>
              {[
                { label: "Hosting & Security", verdict: "Self-hosted. You manage servers, security patches, and SSL renewals." },
                { label: "Checkout Flexibility", verdict: "Plugin-dependent. Every customization adds technical debt and risk." },
                { label: "App Ecosystem", verdict: "59,000+ plugins. Quality varies wildly. Many are abandoned or unmaintained." },
                { label: "Cost of Ownership", verdict: "Free platform. Hosting, plugins, security, and dev time accumulate fast." },
                { label: "Scalability", verdict: "Requires expensive server upgrades as traffic grows. Frequent downtime." },
                { label: "Support", verdict: "Community forums only. No official support channel or SLA." },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "14px" }}>
                  <span style={{ flexShrink: 0, marginTop: "2px" }}><CrossIcon /></span>
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: "#000000", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{row.label}</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "#334155", margin: 0, lineHeight: 1.5 }}>{row.verdict}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* BigCommerce */}
            <div className="sda-plat-card">
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, color: "#000", margin: "0 0 8px" }}>BigCommerce</h3>
              <span style={{ display: "inline-block", background: "rgba(245,158,11,0.1)", color: "#b45309", fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 600, borderRadius: "999px", padding: "3px 12px", marginBottom: "20px", border: "1px solid rgba(245,158,11,0.25)" }}>Hosted</span>
              {[
                { label: "Hosting & Security", verdict: "Hosted with SSL included. Less mature than Shopify infrastructure." },
                { label: "Checkout Flexibility", verdict: "Limited customization. No equivalent to Shopify Functions." },
                { label: "App Ecosystem", verdict: "Smaller marketplace. Fewer specialist tools for DTC and Plus brands." },
                { label: "Cost of Ownership", verdict: "Similar to Shopify but transaction fees apply with most payment providers." },
                { label: "Scalability", verdict: "Handles growth but lacks Shopify Plus enterprise features at scale." },
                { label: "Support", verdict: "Business hours support. Smaller developer network and community." },
              ].map((row) => (
                <div key={row.label} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "14px" }}>
                  <span style={{ flexShrink: 0, marginTop: "2px" }}><WarnIcon /></span>
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 12, fontWeight: 700, color: "#000000", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{row.label}</p>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "#334155", margin: 0, lineHeight: 1.5 }}>{row.verdict}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#000000", textAlign: "center", margin: "32px 0 0" }}>
            We build exclusively on Shopify because it outperforms on the metrics that grow revenue.
          </p>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .sda-plat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: start; }
          .sda-plat-card { background: #FBF7ED; border-radius: 16px; padding: 28px; border: 1px solid rgba(0,0,0,0.08); }
          .sda-plat-card--featured { border: 2px solid rgba(61,199,122,0.4); box-shadow: 0 4px 24px rgba(61,199,122,0.12); }
          @media (max-width: 1024px) { .sda-plat-grid { gap: 14px !important; } .sda-plat-card { padding: 20px !important; } }
          @media (max-width: 768px) { .sda-plat-grid { grid-template-columns: repeat(2, 1fr) !important; max-width: none; margin: 0; } .sda-plat-card:first-child { grid-column: 1 / -1; max-width: 88%; margin-left: auto; margin-right: auto; } .sda-plat-card { padding: 16px !important; } }
          @media (max-width: 480px) { .sda-plat-grid { grid-template-columns: 1fr !important; max-width: 520px; margin-left: auto !important; margin-right: auto !important; } .sda-plat-card:first-child { grid-column: auto; } }
        ` }} />
      </section>

      {/* ── §11 Why Us (DARK) ── */}
      <section
        className="std-why sda-why-section"
        style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards as their Shopify development agency"
      >
        <div className="sda-why-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="sda-why-heading">
            Why Brands Choose Ecomm Wizards as Their{" "}<br className="sda-why-br-lg" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify Development Agency
            </span>
          </h2>
          <p className="sda-why-desc">
            We have built 150+ live Shopify stores. Here is what separates a properly built Shopify store from one that was pieced together with themes and workarounds:
          </p>

          <div className="sda-why-grid">
            {[
              {
                title: "Shopify-Only Developers",
                desc: (<>We work exclusively on Shopify. Not Shopify alongside WooCommerce or Magento. Every developer knows Shopify&apos;s API surface, Liquid, Shopify Functions, and the Storefront API in depth. When you hire a Shopify developer through us, you get someone who works on Shopify full-time and nothing else.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4l-2 2-4-2-2 4-4 2 2 4-2 4 4 2 2 4 4-2 4 2 2-4 4-2-2-4 2-4-4-2z"/><circle cx="16" cy="16" r="3"/></svg>),
              },
              {
                title: "Fixed Price, Confirmed on Day 1",
                desc: (<>We define the full project before development starts. Your cost is agreed in writing before a line of code is written. No hourly billing. No surprise invoices. No extra charges at final delivery. <span className="sda-why-hl">You know the full number on Day 1 and it does not change.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="24" height="24" rx="3"/><path d="M22 3v4M10 3v4M4 13h24"/><path d="M10 19l3 3 6-6"/></svg>),
              },
              {
                title: "You Own Every Line of Code",
                desc: (<>Full code transfer and documentation at project completion. Every component, every metafield schema, and every integration lives in your repositories and accounts. No proprietary systems. No recurring license fees. If you stop working with us, your store keeps running exactly as we built it.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 10l-4 6 4 6"/><path d="M26 10l4 6-4 6"/><path d="M19 6l-6 20"/></svg>),
              },
              {
                title: "150+ Live Shopify Stores Built",
                desc: (<>We have built, migrated, and launched 150+ Shopify stores. DTC brands, Shopify Plus merchants, B2B distributors, and global retailers. Every project adds to a body of pattern knowledge most developers never build up. The edge cases that catch other agencies are ones we solved years ago.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22L10 12l5 6 4-8 5 8"/><circle cx="23" cy="6" r="3"/><path d="M20.5 6H6" strokeDasharray="2 2"/></svg>),
              },
              {
                title: "60 Days Post-Launch Support",
                desc: (<>Go-live is not the finish line. We monitor every build for 60 days post-launch and respond to any incident within hours. If a bug, a performance issue, or a broken integration comes up after launch, we fix it. <span className="sda-why-hl">You are not on your own the morning after launch.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3L5 8v9c0 6.1 4.7 11.8 11 13 6.3-1.2 11-6.9 11-13V8L16 3z"/><path d="M11 16l3 3 7-7"/></svg>),
              },
              {
                title: "Shopify Plus Partners Since 2021",
                desc: (<>We are Shopify Plus Partners (since 2021) with hands-on experience across Shopify Functions, Shopify Flow, and the full enterprise feature set. Every Shopify platform update that could affect your store, we test it and document it before your next project goes live. Your store is never caught off guard.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="sda-why-card">
                <span className="sda-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="sda-why-card-title">{card.title}</h3>
                <p className="sda-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="sda-why-closing">
            Every store we build is documented, tested, and handed over completely. A Shopify development company that knows the platform deeply catches edge cases before go-live, not after. We know the API surface, the data model, and the architecture well enough to know exactly where things break.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="#book-a-call"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Discovery Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sda-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .sda-why-br-lg { display: inline; }
          .sda-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .sda-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .sda-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; font-size: 16px; }
          .sda-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .sda-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .sda-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .sda-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .sda-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .sda-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1100px; }
          @media (max-width: 1024px) { .std-why.sda-why-section { padding: 53px 20px !important; } .sda-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .sda-why-br-lg { display: none !important; } .sda-why-desc { font-size: 16px !important; margin-bottom: 16px !important; } .sda-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .sda-why-card { padding: 24px !important; } .sda-why-card-title { font-size: 19px !important; } .sda-why-card-desc { font-size: 14px !important; } .sda-why-closing { font-size: 16px !important; margin-bottom: 24px !important; } }
          @media (max-width: 640px) { .std-why.sda-why-section { padding: 40px 18px !important; } .sda-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .sda-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .sda-why-card { padding: 22px 20px !important; } .sda-why-closing { margin-bottom: 10px !important; } }
        ` }} />
      </section>

      {/* ── §10 Results / Testimonial Slider (CREAM) ── */}
      <section
        className="sda-results-section"
        style={{ background: C_CREAM, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "40px 20px" }}
        aria-label="Shopify development case study results"
      >
        <div className="sda-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="sda-results-heading">Real Shopify Development Projects. Measurable Results.</h2>
          <p className="sda-results-desc">
            Not projections. Real numbers from stores where proper development work produced documented, measurable improvements in conversion and revenue.
          </p>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .sda-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:1100px; }
          .sda-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          @media (max-width:1023px) { .sda-results-section { padding:44px 20px !important; } .sda-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; } .sda-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; } }
          @media (max-width:768px) { .sda-results-desc { margin-bottom:18px !important; } }
          @media (max-width:640px) { .sda-results-section { padding:20px 16px !important; } .sda-results-heading { font-size:26px !important;line-height:34px !important; } .sda-results-desc { font-size:15px !important;line-height:24px !important; } }
        ` }} />
      </section>

      {/* ── §13 FAQ (WHITE) ── */}
      <section
        className="sda-faq-section"
        style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions about Shopify development"
      >
        <div className="sda-faq__inner mx-auto" style={{ maxWidth: "1100px" }}>
          <h2 className="sda-faq__title">Shopify Development Agency FAQs</h2>
          <SdaFaqAccordion faqs={SDA_FAQS} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: SDA_FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA_SDA) }}
        />
        <ServiceSchema url={CANONICAL_URL} name="Shopify Development Agency" serviceType="Shopify development" description={META_DESCRIPTION} />

        <style dangerouslySetInnerHTML={{ __html: `
          .sda-faq__inner { padding: 40px 15px; }
          .sda-faq__title { color: #000000; font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 0 32px; }
          .sda-faq__list { list-style: none; margin: 0; padding: 0; border-top: 1px solid #E5E7EB; }
          .sda-faq__item { border-bottom: 1px solid #E5E7EB; }
          .sda-faq__q { color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; line-height: 1.4; flex: 1; }
          .sda-faq__chev { display: inline-flex; align-items: center; justify-content: center; color: #000000; flex-shrink: 0; }
          .sda-faq__a-text { margin: 0 0 22px; color: #334155; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 1.7; }
          @media (min-width: 1024px) { .sda-faq__inner { padding: 72px 20px; } .sda-faq__title { font-size: 44px; margin-bottom: 40px; } .sda-faq__q { font-size: 17px; } .sda-faq__a-text { font-size: 16px; } }
        ` }} />
      </section>

      {/* ── §14 Book a Call (CREAM) — on-page conversion, every LP CTA lands here ── */}
      <section id="book-a-call" style={{ background: C_CREAM, padding: "60px 20px 64px", scrollMarginTop: "90px" }} aria-label="Book your free Shopify development discovery call">
        <div className="mx-auto sda-book-grid" style={{ maxWidth: "1220px" }}>
          <div>
            <p className="sda-book-label">Free Discovery Call</p>
            <h2 className="sda-book-h2" style={{ color: C_DARK }}>Book Your Free Shopify Development Discovery Call</h2>
            <p className="sda-book-sub" style={{ color: "rgba(0,0,0,0.72)", maxWidth: 500 }}>
              Pick a time below and talk through your build with a senior Shopify developer. On the call we scope your project, then send a fixed price and timeline in writing within 48 hours.
            </p>
            <div className="sda-book-wyg">
              {[
                "Walk through your build: custom theme, features, Shopify Plus, or migration",
                "Get a fixed-price quote and a confirmed go-live date within 48 hours",
                "Find out what needs custom code and what Shopify handles natively",
                "Leave with a clear scope you can compare against any other agency",
              ].map((w) => (
                <div key={w} className="sda-book-wyg-row"><CheckIcon /><span>{w}</span></div>
              ))}
            </div>
            <div className="sda-book-who">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" /><path d="M4.5 20c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <p>You talk to Shopify developers who have shipped 150+ stores, not a sales rep.</p>
            </div>
            <div className="sda-book-chips">
              {["Free", "No obligation", "Fixed quote in 48 hours"].map((chip) => (
                <span key={chip} className="sda-book-chip">
                  <svg width="13" height="11" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7l5 5L17 1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="sda-book-cal">
            <CalEmbed />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .sda-book-grid { display:grid; grid-template-columns:0.9fr 1.1fr; gap:44px; align-items:start; }
          .sda-book-label { font-family:'Poppins',sans-serif; font-size:13px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:#2A9555; margin:0 0 12px; }
          .sda-book-h2 { font-family:'Poppins',sans-serif; font-size:clamp(26px,3.2vw,38px); font-weight:700; line-height:1.2; margin:0; }
          .sda-book-sub { font-family:'Poppins',sans-serif; font-size:16px; line-height:26px; margin:12px 0 0; }
          .sda-book-wyg { display:flex; flex-direction:column; gap:13px; margin:22px 0 0; }
          .sda-book-wyg-row { display:flex; align-items:flex-start; gap:11px; font-family:'Poppins',sans-serif; font-size:15px; font-weight:500; color:#1f3d2b; line-height:1.5; }
          .sda-book-wyg-row svg { flex-shrink:0; margin-top:2px; }
          .sda-book-who { display:flex; gap:12px; align-items:flex-start; margin:24px 0 0; padding:16px 18px; background:#fff; border:1px solid rgba(0,0,0,0.07); border-radius:14px; }
          .sda-book-who svg { flex-shrink:0; color:#2A9555; margin-top:1px; }
          .sda-book-who p { font-family:'Poppins',sans-serif; font-size:13.5px; color:#334155; line-height:1.55; margin:0; }
          .sda-book-chips { display:flex; flex-wrap:wrap; gap:8px; margin:22px 0 0; }
          .sda-book-chip { display:inline-flex; align-items:center; gap:6px; font-family:'Poppins',sans-serif; font-size:12.5px; font-weight:500; color:#1f3d2b; background:#fff; border:1px solid rgba(61,199,122,0.30); border-radius:999px; padding:6px 12px; }
          .sda-book-chip svg { color:#2A9555; flex-shrink:0; }
          .sda-book-cal { background:#fff; border-radius:20px; padding:14px; box-shadow:0 24px 70px rgba(0,0,0,.14); border:1px solid rgba(0,0,0,.06); }
          .bkc-cal-wrap { position:relative; min-height:600px; border-radius:12px; overflow:hidden; }
          .bkc-cal-loading { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:#94a3b8; font-family:'Poppins',sans-serif; font-size:14px; }
          .bkc-cal-inline { position:relative; width:100%; min-height:600px; }
          .bkc-cal-inline iframe { width:100% !important; }
          @media (max-width:900px){ .sda-book-grid { grid-template-columns:1fr; gap:30px; } }
          @media (max-width:640px){ #book-a-call { padding-top:40px !important; padding-bottom:40px !important; } .sda-book-chips { display:none; } }
        ` }} />
      </section>

      {/* ── Page-level CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hero image */
        .si-hero-img-wrap { display: flex; align-items: center; justify-content: center; }
        .si-hero-img { width: 100%; height: auto; border-radius: 16px; display: block; box-shadow: 0 24px 64px rgba(0,0,0,0.45); }
        @media (max-width: 1023px) { .si-hero-img-wrap { margin-top: 8px; } }
        @media (max-width: 640px) { .si-hero-img { border-radius: 10px; } }

        /* Secondary CTA hover */
        .sda-hero-secondary-cta:hover { color: rgba(255,255,255,1) !important; }

        /* Trust carousel */
        .sda-trust-track { display: flex; align-items: center; gap: 40px; width: max-content; animation: sdaTrustScroll 32s linear infinite; }
        .std-trust-carousel:hover .sda-trust-track { animation-play-state: paused; }
        @keyframes sdaTrustScroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
        @media (max-width: 640px) {
          .sda-trust-track { gap: 16px !important; }
          .std-trust-logo { height: 36px; width: auto; max-width: 120px; object-fit: contain; }
        }

        /* Shared badge + label */
        .std-badge { display: inline-block; padding: 6px 16px; background: rgba(97,206,112,0.12); border: 1px solid rgba(97,206,112,0.3); border-radius: 999px; color: #61ce70; font-size: 13px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; }
        .std-label { font-size: 13px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #334155; }

        /* Hero stats */
        .std-hero-stats { display: flex; flex-wrap: wrap; gap: 0; margin-top: 32px; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 24px; }
        .std-hero-stat-item { display: flex; flex-direction: column; gap: 4px; padding: 0 28px 0 0; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.12); }
        .std-hero-stat-item:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .std-hero-stat-num { font-size: 28px; font-weight: 800; line-height: 1; background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .std-hero-stat-label { font-size: 13px; font-weight: 500; color: #ffffff; letter-spacing: .02em; }

        /* Solution CTA button */
        .std-cta-sol { position: relative; display: inline-flex; align-items: center; gap: 12px; background: #000000; color: #ffffff; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; border-radius: 50px; padding: 20px 45px; text-decoration: none; line-height: 1; transition: color .25s ease; }
        .std-cta-sol::before { content: ''; position: absolute; inset: 0; border-radius: 50px; padding: 2px; background: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude; opacity: 0; transition: opacity .25s ease; pointer-events: none; }
        .std-cta-sol:hover::before { opacity: 1; }
        .std-cta-sol:visited, .std-cta-sol:focus, .std-cta-sol:active { color: #ffffff; text-decoration: none; }

        /* Dark CTA button */
        .std-cta-dark { color: #FFFFFF; border: 1px solid transparent; border-radius: 999px; padding: 15px 30px; font-size: 15px; font-weight: 600; background: linear-gradient(#000000, #000000) padding-box, #000000 border-box; transition: background .3s ease, transform .25s ease, box-shadow .25s ease; text-decoration: none; }
        .std-cta-dark:hover { color: #FFFFFF; background: linear-gradient(#000000, #000000) padding-box, var(--brand-gradient) border-box; transform: translateY(-1px); box-shadow: 0 10px 28px -10px rgba(0,0,0,.45); }
        .std-cta-dark:visited, .std-cta-dark:focus, .std-cta-dark:active { color: #FFFFFF; text-decoration: none; }

        /* Accordion */
        .std-acc-item { border-top: 1px solid rgba(17,17,17,.14); }
        .std-acc-item:last-child { border-bottom: 1px solid rgba(17,17,17,.14); }
        .std-acc-icon { flex: 0 0 18px; color: #000000; transition: transform .3s ease; }
        .std-acc-icon--open { transform: rotate(180deg); }

        /* Responsive hero */
        @media (max-width: 1280px) {
          .std-hero-stats { flex-wrap: nowrap !important; }
          .std-hero-stat-item { padding-right: 20px !important; margin-right: 20px !important; }
        }
        @media (max-width: 1024px) {
          .std-hero-h1 { font-size: 40px !important; }
          .std-solutions h2 { font-size: 38px !important; }
          .std-solutions-grid { grid-template-columns: 1fr 1.1fr !important; gap: 40px !important; }
          .std-hero-inner { padding: 60px 20px !important; }
          .std-hero-p { margin-top: 16px !important; }
          .std-hero-stats { flex-wrap: nowrap !important; margin-top: 16px !important; padding-top: 16px !important; }
          .std-hero-stat-item { padding-right: 16px !important; margin-right: 16px !important; }
          .std-hero-stat-num { font-size: 22px !important; }
          .std-hero-stat-label { font-size: 12px !important; }
        }
        @media (max-width: 768px) {
          .std-solutions h2 { font-size: 36px !important; }
          .std-solutions-grid { gap: 24px !important; }
        }
        @media (max-width: 640px) {
          .std-hero > div { padding: 46px 18px !important; }
          .std-trust > div { padding: 40px 20px !important; }
          .si-feat-card { padding: 24px !important; }
          .sda-industries { padding: 46px 20px !important; }
          .sda-platforms { padding: 46px 20px !important; }
          .std-solutions > div { padding: 40px 18px !important; gap: 36px !important; }
          .std-solutions-grid { grid-template-columns: 1fr !important; }
          .std-solutions-left { position: static !important; }
          .std-solutions h2 { font-size: 26px !important; }
          .std-cta-sol { margin-top: 16px !important; }
          .std-hero-h1 { font-size: 28px !important; line-height: 1.22 !important; }
          .std-hero-p { font-size: 14px !important; line-height: 24px !important; }
          .std-hero-stats { gap: 0; margin-top: 24px; padding-top: 18px; }
          .std-hero-stat-num { font-size: 22px !important; }
          .std-hero-stat-label { font-size: 11px !important; }
        }
      `}} />

      <RelatedServices current="/services/shopify-development-agency" />

      {/* ── Mobile sticky rotating CTA (Charle-style badge, <768px only) ──
          Black disc + brand-gradient ring reads on all three section
          backgrounds (dark, white, cream). Links to the on-page booking
          section; rotation pauses for prefers-reduced-motion. */}
      <a href="#book-a-call" className="sda-spin-cta" aria-label="Book a free discovery call">
        <span className="sda-spin-cta-disc">
          <svg className="sda-spin-cta-text" viewBox="0 0 100 100" aria-hidden>
            <defs>
              <path id="sdaSpinPath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
            </defs>
            <text textLength="225" lengthAdjust="spacingAndGlyphs">
              <textPath href="#sdaSpinPath" startOffset="0%">BOOK A CALL &#8226; BOOK A CALL &#8226;&#160;</textPath>
            </text>
          </svg>
          <svg className="sda-spin-cta-arrow" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M7 17L17 7M17 7H9M17 7v8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <style dangerouslySetInnerHTML={{ __html: `
          .sda-spin-cta { position: fixed; right: 16px; bottom: 18px; z-index: 60; width: 92px; height: 92px; display: none; }
          @media (max-width: 767px) { .sda-spin-cta { display: block; } }
          .sda-spin-cta-disc { position: relative; display: block; width: 100%; height: 100%; border-radius: 50%; border: 2px solid transparent; background: linear-gradient(#000000, #000000) padding-box, linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%) border-box; box-shadow: 0 10px 28px rgba(0,0,0,0.35); }
          .sda-spin-cta-text { position: absolute; inset: 4px; width: calc(100% - 8px); height: calc(100% - 8px); animation: sdaSpin 12s linear infinite; transform-origin: 50% 50%; }
          .sda-spin-cta-text text { fill: #ffffff; font-family: 'Poppins', sans-serif; font-size: 10.5px; font-weight: 600; letter-spacing: 1.5px; }
          .sda-spin-cta-arrow { position: absolute; top: 50%; left: 50%; width: 24px; height: 24px; transform: translate(-50%, -50%); }
          @keyframes sdaSpin { to { transform: rotate(360deg); } }
          @media (prefers-reduced-motion: reduce) { .sda-spin-cta-text { animation: none; } }
        ` }} />
      </a>
    </>
  );
}
