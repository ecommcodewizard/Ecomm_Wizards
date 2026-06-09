import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HlAccordion from "./HlAccordion";
import HlFaqAccordion from "./HlFaqAccordion";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";

const META_DESCRIPTION =
  "Headless Shopify agency for Hydrogen and Next.js. Commerce storefronts with sub-second load times and total design freedom. Book a free architecture call.";
const CANONICAL_URL = "https://ecommwizards.com/services/headless-shopify-agency";

export const metadata: Metadata = {
  title: { absolute: "Headless Shopify Agency | Hydrogen and Custom Storefronts" },
  description: META_DESCRIPTION,
  keywords: [
    "headless shopify agency",
    "headless shopify development",
    "shopify hydrogen development",
    "next.js shopify storefront",
    "headless commerce shopify",
    "shopify storefront api",
    "headless shopify store",
    "custom shopify storefront",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Headless Shopify Agency | Hydrogen and Custom Storefronts",
    description: META_DESCRIPTION,
    images: [{ url: "/images/seeamleass-right.webp", alt: "headless shopify agency by Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Headless Shopify Agency | Hydrogen and Custom Storefronts",
    description: META_DESCRIPTION,
    images: ["/images/seeamleass-right.webp"],
  },
};

const C_DARK  = "#000000";
const C_TEXT  = "#334155";
const C_WHITE = "#FFFFFF";
const C_CREAM = "#FBF7ED";

/* ── Case study slider slides ── */
const SHL_SLIDES: CaseStudySlide[] = [
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A high-performance <strong>Shopify Plus</strong> storefront engineered and scaled for <strong>BARK</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong>, made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
  {
    key: "everlast",
    image: "/images/Case%20studies/Everlast-banner.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A performance-first <strong>Shopify Plus</strong> rebuild that delivered <strong>+152% conversion rate</strong> for <strong>Everlast</strong></>),
    quote: (<>&ldquo;We needed a store that could handle serious athletes, casual fitness buyers, and trade accounts in one place. Ecomm Wizards built exactly that. The <strong>conversion numbers and trade portal revenue</strong> both exceeded what we projected.&rdquo;</>),
    avatar: "/images/Case%20studies/Daniel%20Summerson.jpg",
    name: "Daniel Summerson",
    role: "Managing Director, Everlast Gyms",
  },
  {
    key: "dryrobe",
    image: "/images/Case%20studies/Dryrobe%20hero%20section.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg"],
    headline: (<>A custom storefront rebuild that delivered <strong>+89% online revenue</strong> for <strong>Dryrobe</strong></>),
    quote: (<>&ldquo;The new store finally communicates who we are. The Size Finder fixed the returns problem we had been struggling with for years. <strong>Revenue growth followed</strong> from getting those fundamentals right.&rdquo;</>),
    avatar: "/images/Case%20studies/gideon%20bright.jfif",
    name: "Gideon Bright",
    role: "Head of Ecommerce, Dryrobe",
  },
];

/* ── Case study cards ── */
const SHL_CASE_STUDIES = [
  {
    brand: "Everlast",
    metric: "+152%",
    metricLabel: "Conversion Rate",
    tags: ["Shopify Plus", "Performance", "Custom Build"],
    industry: "Sports & Fitness",
    image: "/images/Case%20studies/Everlast-banner.webp",
    video: "/images/Case%20studies/Everlast%20video.mp4",
    href: "/case-studies/everlast-shopify-plus-sports-redesign",
    description: "A performance-first Shopify Plus rebuild for one of the world's most recognized sportswear brands. Custom PLPs, a trade portal, and sub-2s load times. Conversion rate grew 152% and trade portal revenue beat projections by 40%.",
  },
  {
    brand: "Dryrobe",
    metric: "+89%",
    metricLabel: "Online Revenue",
    tags: ["Custom Storefront", "Internationalization", "Shopify Plus"],
    industry: "Fashion & Apparel",
    image: "/images/Case%20studies/Dryrobe%20hero%20section.webp",
    video: "/images/Case%20studies/dryrobe%20video.mp4",
    href: "/case-studies/dryrobe-shopify-plus-redesign",
    description: "We consolidated three separate stores into one international Shopify Plus build with a custom product finder and brand storytelling woven into the architecture. Online revenue grew 89% in the first year.",
  },
  {
    brand: "Sneak Energy",
    metric: "+68%",
    metricLabel: "Mobile Conversion",
    tags: ["Performance", "Mobile-First", "Custom Build"],
    industry: "Food & Beverage",
    image: "/images/Case%20studies/sneak-header-final.jpg",
    video: "/images/Case%20studies/Sneak%20video.mp4",
    href: "/case-studies/sneak-energy-shopify-redesign",
    description: "A mobile-first rebuild for a high-growth energy drink brand, engineered for sub-3s load times on mobile. Mobile conversion rate grew 68% and the store now handles spiky launch-day traffic without slowing down.",
  },
  {
    brand: "Capelli Sports",
    metric: "+38%",
    metricLabel: "Site Speed",
    tags: ["Migration", "Performance", "Custom Theme"],
    industry: "Sports & Fitness",
    image: "/images/Case%20studies/Capelli%20Sports%20hero%20image.webp",
    video: "/images/Case%20studies/Capelli%20Sports%20video.mp4",
    href: "/case-studies/capelli-sports-shopify-migration",
    description: "A global sportswear brand migrated from WordPress to Shopify with zero downtime and a performance-first frontend. Site speed improved 38%, conversion rate grew 24%, and 95% of SEO equity was preserved.",
  },
];

/* ── Trust logos ── */
const TRUST_LOGOS = [
  { src: "/images/schutz-logo.png-2.png",               alt: "Schutz" },
  { src: "/images/Calvin-Klein-logo.png-1.png",          alt: "Calvin Klein" },
  { src: "/images/Logo-AriZona.png-1.png",               alt: "AriZona" },
  { src: "/images/Logo-Khaite.png-1.png",                alt: "Khaite" },
  { src: "/images/Olaplex-logo-new.avif",                alt: "Olaplex" },
  { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "Lids" },
  { src: "/images/everlast-icon.svg",                    alt: "Everlast" },
  { src: "/images/P448-logo.png-1.png",                  alt: "P448" },
  { src: "/images/LVMH-logo.png-1.png",                  alt: "LVMH" },
  { src: "/images/modelez-logo.png-1-768x361-1.png",     alt: "Mondelez" },
];

/* ── Pain points ── */
const SHL_PAINS = [
  {
    name: "Page Speed Has Plateaued No Matter What You Try",
    desc: "You have compressed images, deferred scripts, and trimmed apps, but the theme still will not get faster. Liquid rendering and the theme layer set a ceiling a headless frontend simply does not have.",
    cost: "Google's data shows a 1-second mobile speed improvement lifts conversion 27%. A theme that has hit its speed ceiling is capping revenue you have already paid to acquire.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Your Design Ambitions Keep Getting Cut to Fit the Theme",
    desc: "Every campaign idea gets watered down to what the theme can render. Custom interactions, complex layouts, and brand moments die in the gap between what your designers want and what the theme allows.",
    cost: "A storefront that looks like every other Shopify store competes on price, not brand. Design freedom is the difference between a premium brand and a template.",
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
    name: "App and Script Bloat Is Dragging Core Web Vitals Down",
    desc: "Every storefront app injects more JavaScript into every page. The stack that solved yesterday's problem is now the thing slowing your store and failing your Core Web Vitals.",
    cost: "Poor Core Web Vitals hurt both conversion and organic rankings. A headless build lets you replace injected app scripts with code you control and measure.",
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
    name: "Content Management Is Fighting the Theme, Not Helping It",
    desc: "Your team wants to ship rich editorial, landing pages, and campaign content without a developer. The theme's content tools were not built for that, so everything becomes a ticket.",
    cost: "A dedicated headless CMS like Sanity or Contentful gives your marketing team real control. Slow content velocity is lost revenue on every campaign.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="4" y="3" width="20" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 9h12M8 13h12M8 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "A Large or Complex Catalog Is Straining the Template",
    desc: "Thousands of SKUs, deep variant matrices, configurable products, or real-time pricing push a theme past what it was designed to render quickly and reliably.",
    cost: "When the catalog outgrows the template, performance and merchandising both suffer. A headless frontend renders complex catalogs without the theme's constraints.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 7l10-4 10 4-10 4-10-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M4 7v10l10 4 10-4V7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 11v10" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Multi-Market or Omnichannel Needs Have Outgrown One Theme",
    desc: "You are selling across regions, languages, and channels, and managing it through a single theme has become a tangle of duplicated work and inconsistent experiences.",
    cost: "One headless frontend can serve every market and channel from the same Shopify backend. Maintaining parallel themes multiplies cost and slows every change.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 14h22M14 3c3 3 4 7 4 11s-1 8-4 11c-3-3-4-7-4-11s1-8 4-11z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

/* ── Services accordion ── */
const SHL_ITEMS = [
  {
    title: "Headless Strategy & Architecture",
    body: "Before we write code, we map the right headless commerce architecture for your store: which pages go headless, how data flows through the Storefront API, where your CMS sits, and how it all stays fast and maintainable. If a theme is the smarter call, we say so here. Every headless Shopify build starts with an architecture you understand and own.",
  },
  {
    title: "Hydrogen Storefront Development",
    body: "Hydrogen is Shopify's official React framework, built on Remix and hosted on Oxygen. We do headless Shopify development on Hydrogen for commerce-first storefronts, when tight Shopify integration and the path of least resistance matter most. You get a fast, Shopify-native frontend with first-class access to the Storefront API.",
  },
  {
    title: "Next.js Storefront Development",
    body: "Next.js gives you a mature ecosystem, a large developer talent pool, and the flexibility content-heavy or multi-market builds need. We build headless Shopify storefronts on Next.js and host them on Vercel when your store needs more than a pure-commerce frontend can offer. Server-side rendering keeps it fast and SEO-friendly.",
  },
  {
    title: "Headless CMS Integration (Sanity, Contentful)",
    body: "We connect a dedicated headless CMS so your marketing team ships editorial, landing pages, and campaigns without a developer. Sanity and Contentful are our usual choices. Your content and your commerce live in the tools each does best, joined in one fast storefront.",
  },
  {
    title: "Theme-to-Headless Migration",
    body: "Moving an existing Shopify store to a headless Shopify store without losing rankings or revenue takes a plan. We map every URL, preserve your SEO, rebuild storefront app functionality as headless-native code, and cut over with zero downtime. Your backend keeps running on Shopify the whole time.",
  },
  {
    title: "Headless Performance & Core Web Vitals",
    body: "Speed is the main reason most brands go headless, so we treat it as a feature, not an afterthought. We engineer for sub-second loads, green Core Web Vitals, and server-side rendering that Google can crawl. Performance budgets are set at the start and held through launch.",
  },
  {
    title: "Custom App & API Integration",
    body: "Headless lets you integrate anything: ERP, PIM, search, personalization, subscriptions, loyalty, and real-time pricing. We build the API layer and custom components that connect your external systems to your storefront, so complex operations run cleanly behind a fast frontend.",
  },
  {
    title: "Ongoing Headless Support & Maintenance",
    body: "A headless storefront does not auto-update like a theme, so it needs a real maintenance partner. As a headless Shopify development company, we monitor performance, ship updates, and extend the build as your business grows. Every project includes a 60-day support window, with ongoing retainers and dedicated Shopify headless developers for teams that want us on call.",
  },
];

/* ── Industries ── */
const SHL_INDUSTRIES = [
  {
    name: "Fashion & Apparel",
    desc: "Large catalogs, editorial lookbooks, and brand-led storefronts that themes cannot render fast enough.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M10 4L7 8H4v16h20V8h-3l-3-4h-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 4c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Beauty & Skincare",
    desc: "Content-heavy storefronts with quizzes, routines, and rich editorial managed in a headless CMS.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4l2 5h5l-4 3 1.5 5L14 14l-4.5 3 1.5-5-4-3h5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 18v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Health & Wellness",
    desc: "Subscription-first storefronts, compliance-aware content, and fast experiences that build trust.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 24s-9-5.5-9-12a6 6 0 0 1 9-5.2A6 6 0 0 1 23 12c0 6.5-9 12-9 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Food & Beverage",
    desc: "Launch-day traffic spikes, bundle builders, and subscription flows that need to stay fast under load.",
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
    desc: "Complex pricing, account-based catalogs, and ERP integration that go beyond what a theme handles.",
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
    desc: "Deep variant matrices, comparison tools, and configurable products rendered without template strain.",
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
    desc: "High-traffic launches, configurators, and team ordering flows engineered for speed at scale.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4l2 7h7l-5.7 4.1 2.2 6.9L14 18l-5.5 4 2.2-6.9L5 11h7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Multi-Market DTC",
    desc: "One headless frontend serving multiple regions, languages, and currencies from a single backend.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 14h22M14 3c3 3 4 7 4 11s-1 8-4 11c-3-3-4-7-4-11s1-8 4-11z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

/* ── Compare: headless vs theme ── */
const SHL_PROS = [
  "Total design freedom. Build any experience your brand needs, with no template constraints.",
  "Sub-second load times from server-side rendering and a frontend you fully control.",
  "Scales cleanly with a large catalog, complex variants, and real-time pricing.",
  "One frontend serves every market and channel from a single Shopify backend.",
  "Replace injected app scripts with code you own, measure, and optimize.",
  "Architecture you own and extend, instead of a template you rent.",
];

const SHL_CONS = [
  { text: "Design ceiling. Every idea gets cut down to what the template can render.", warn: true },
  { text: "App-script weight. Each storefront app adds JavaScript that slows every page.", warn: true },
  { text: "Performance plateaus. The Liquid layer caps how fast the store can get.", warn: true },
  { text: "Complex integrations and configurable catalogs strain the template.", warn: true },
  { text: "Shared-template look. Hard to feel premium when thousands of stores share your theme.", warn: true },
  { text: "Adding a new market or channel often means rebuilding or duplicating the theme.", warn: true },
];

/* ── FAQs ── */
const SHL_FAQS = [
  {
    q: "What is headless Shopify, and what does headless Shopify mean?",
    a: "Headless Shopify means separating your storefront (the head, everything the customer sees) from Shopify's backend (the commerce engine that runs products, checkout, and orders). The two talk to each other through the Storefront API. In Shopify headless commerce you build a fully custom frontend on a framework like Hydrogen or Next.js, while Shopify keeps doing what it does best. The result is total design freedom and far faster load times than a theme can reach.",
  },
  {
    q: "Is headless right for my store, and when is it not?",
    a: "Headless is the right move when a theme genuinely cannot do the job: you need a design a theme cannot render, you have a large or complex catalog with real performance problems, you integrate with external systems like ERP or PIM, or you sell across multiple markets and channels. It is probably overkill if you are early-stage with a small catalog, a premium theme would serve you for far less, or you have no dev capacity and a tight budget. We will tell you honestly which camp you are in. If a theme is the right answer, we will build you a fast one instead.",
  },
  {
    q: "Hydrogen or Next.js, which do you use?",
    a: "We choose per project. Hydrogen is Shopify's official React framework, built on Remix and hosted on Oxygen. It is the path of least resistance for commerce-first builds because it is tightly integrated with Shopify. Next.js is more mature, has a larger developer talent pool, and is more flexible for content-heavy or multi-market builds. It runs on Vercel. We do not force every build into one framework. We pick the one that fits your store and your team.",
  },
  {
    q: "Do I need Shopify Plus for a headless build?",
    a: "Not strictly. You can use the Storefront API to build a headless Shopify store on any Shopify plan. Shopify Plus headless builds add Checkout UI Extensions, Shopify Functions, and B2B features that headless commerce frequently uses, and Oxygen hosting for Hydrogen is included with Plus. Most brands seriously considering headless are on or moving to Plus anyway, but we will tell you whether your build actually needs it.",
  },
  {
    q: "How much does a headless Shopify build cost?",
    a: "It depends entirely on scope: how many pages go headless, your catalog complexity, which systems you integrate, whether you need design from scratch, and your CMS choice. Headless Shopify development is a larger investment than a theme build, which is exactly why we start with an architecture call to scope it properly. We give you a fixed price in writing before any work begins, so you never see a surprise invoice.",
  },
  {
    q: "How long does a headless build take?",
    a: "Most headless Shopify builds go live in 8 to 12 weeks from kickoff, depending on complexity. A focused single-storefront build sits at the lower end. Multi-market builds, heavy integrations, or full custom design push toward the upper end. We agree the timeline before we start and report progress against it every week.",
  },
  {
    q: "Will my existing Shopify apps still work?",
    a: "Your backend apps keep working: inventory, orders, subscriptions, and anything that lives in the Shopify admin runs exactly as before. Storefront apps that inject JavaScript into your theme, like pop-ups, live chat, and upsell widgets, do not carry over automatically. We rebuild that functionality as headless-native code or swap in headless-compatible tools. We audit your full app stack at the start so there are no surprises.",
  },
  {
    q: "Is headless Shopify better for SEO?",
    a: "Done right, headless Shopify is better for SEO. Faster load times and green Core Web Vitals are direct ranking signals, and server-side rendering means Google sees fully rendered pages. Done wrong, with client-side-only rendering, headless can hurt SEO because crawlers do not see your content. We build with server-side rendering, preserve your URL structure and metadata, and treat SEO as a launch requirement, not an afterthought.",
  },
  {
    q: "Do we own the code?",
    a: "Yes. Every line of the storefront, every component, and every integration is yours at project completion, delivered with documentation. There is no proprietary system and no lock-in. Your in-house team or any other agency can pick up the codebase and run with it. If you stop working with us, your store keeps running exactly as we built it.",
  },
  {
    q: "How do we get started?",
    a: "The first step is a free architecture call. We spend 30 minutes on your current store, your goals, and whether headless is genuinely the right move. From there we produce a written scope with a fixed price and timeline, usually within a few days. Most clients move from the architecture call to a signed project within one to two weeks.",
  },
];

const BREADCRUMB_SCHEMA_SHL = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Headless Shopify Agency", item: "https://ecommwizards.com/services/headless-shopify-agency" },
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SHL_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA_SHL) }}
      />

      {/* ── §1 Hero (DARK) ── */}
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Headless Shopify agency hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Headless Shopify Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Headless Shopify Agency That Builds{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Lightning-Fast Custom Storefronts
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              A theme can only take your store so far. We separate your storefront from Shopify&apos;s backend so you get total design freedom and sub-second load times, while Shopify keeps running products, checkout, and orders. We handle the full headless commerce build, from architecture to launch, with headless Shopify development on Hydrogen and Next.js for brands that have outgrown what a theme can do.
            </p>

            <div className="std-hero-stats">
              {[
                { number: "100+",   label: "Stores Built" },
                { number: "0.8s",   label: "Avg. Load Time" },
                { number: "90+",    label: "Lighthouse Score" },
                { number: "$150M+", label: "Client GMV" },
              ].map((s) => (
                <div key={s.label} className="std-hero-stat-item">
                  <span className="std-hero-stat-num">{s.number}</span>
                  <span className="std-hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginTop: "32px" }}>
              <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
                <Link
                  href="/book-shopify-consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Architecture Call</span>
                  <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
                </Link>
              </span>
              <Link
                href="/case-studies"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.7)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", padding: "14px 0", transition: "color 0.2s ease" }}
                className="shl-hero-secondary-cta"
              >
                See Our Work
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "24px" }}>
              <Image src="/images/shopify-icon.svg" alt="Shopify Partner" width={22} height={22} style={{ opacity: 0.8 }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Shopify Plus Partner. Headless builds on Hydrogen and Next.js.</span>
            </div>
          </div>

          <div className="shl-hero-img-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src="/images/seeamleass-right.webp"
              alt="Headless Shopify storefront built on Hydrogen and Next.js"
              width={640}
              height={520}
              priority
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "16px" }}
            />
          </div>
        </div>
      </section>

      {/* ── §2 Trust Bar + Pull-Quote (WHITE) ── */}
      <section className="std-trust" style={{ background: C_WHITE }} aria-label="Brands that trust Ecomm Wizards for headless Shopify">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: C_DARK, fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            100+ Shopify Stores Built. Here&apos;s Who Trusts Us.
          </h2>
          <p className="text-center" style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", margin: "10px 0 0", textAlign: "center" }}>
            We build exclusively on Shopify. Every headless commerce build is engineered in-house by Shopify headless developers who work on the platform and modern frontend frameworks full-time.
          </p>
          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="shl-trust-track">
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

          <div style={{ maxWidth: "780px", margin: "36px auto 0", padding: "28px 32px", borderLeft: "4px solid #3DC77A", background: "rgba(61,199,122,0.05)", borderRadius: "0 12px 12px 0" }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 500, color: C_DARK, lineHeight: 1.6, margin: "0 0 16px", fontStyle: "italic" }}>
              &ldquo;We had pushed our theme as far as it could go. Ecomm Wizards rebuilt the storefront as a fully custom headless build, and the speed jump was instant. We finally have the design freedom we wanted, with none of the template limits we were fighting before.&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Image src="/images/Case%20studies/Daniel%20Summerson.jpg" alt="Daniel Summerson" width={44} height={44} style={{ borderRadius: "50%", objectFit: "cover", objectPosition: "center 20%", flexShrink: 0, width: "44px", height: "44px" }} />
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: C_DARK, margin: 0 }}>Daniel Summerson</p>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: C_TEXT, margin: 0 }}>Managing Director, Everlast Gyms. <strong style={{ color: "#2A9555" }}>+152% Conversion Rate</strong></p>
              </div>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes shlTrustScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .shl-trust-track { display: flex; gap: 48px; width: max-content; animation: shlTrustScroll 28s linear infinite; }
          .shl-trust-track:hover { animation-play-state: paused; }
        ` }} />
      </section>

      {/* ── §3 What Is Headless Shopify (WHITE) ── */}
      <section style={{ background: C_WHITE, padding: "60px 20px" }} aria-label="What is headless Shopify">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="shl-edu-grid">
            <div className="shl-edu-left">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span style={{ display: "block", width: "28px", height: "3px", background: "linear-gradient(90deg, #3DC77A, #A8F0B4)", borderRadius: "2px", flexShrink: 0 }} />
                <span className="std-label" style={{ color: C_TEXT }}>Understanding the Service</span>
              </div>
              <h2 style={{ color: C_DARK, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 16px" }}>
                What Is Headless Shopify and Who Actually Needs It?
              </h2>
              <p style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px", margin: "0 0 10px" }}>
                Headless Shopify means splitting the head, everything your customer sees and interacts with, from the body, the Shopify backend that runs products, checkout, and orders. The two connect through the Storefront API. In Shopify headless commerce you build a fully custom frontend on a framework like Hydrogen or Next.js, and Shopify keeps doing the commerce heavy lifting underneath.
              </p>
              <p style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px", margin: "0 0 10px" }}>
                The advantages of a headless Shopify store come down to four things: raw speed, total design freedom, the ability to integrate complex external systems, and serving multiple markets and channels from one backend. A theme caps all four. A headless ecommerce build removes the ceiling.
              </p>
              <p style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px", margin: 0 }}>
                Here is the honest part. Headless Shopify development adds cost and complexity. It is the right call only when a theme genuinely cannot do the job. If a fast premium theme would serve you better, we will tell you that on the first call. We only build headless when there is a clear reason to.
              </p>
            </div>
            <div className="shl-edu-right">
              <div style={{
                background: C_WHITE,
                borderRadius: "20px",
                padding: "0",
                height: "100%",
                border: "1px solid rgba(61,199,122,0.22)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
                overflow: "hidden",
                boxSizing: "border-box",
              }}>
                <div style={{ height: "4px", background: "linear-gradient(90deg, #3DC77A 0%, #A8F0B4 50%, #2A9555 100%)" }} />
                <div style={{ padding: "28px 32px 32px" }}>
                  <p className="shl-edu-right-heading" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, fontWeight: 700, color: C_DARK, margin: "0 0 22px", lineHeight: 1.3 }}>
                    Headless is worth a serious look if:
                  </p>
                  {[
                    "Your design ambitions keep dying in the gap between what you want and what the theme allows",
                    "You have a large or complex catalog and page speed has hit a wall",
                    "You integrate with external systems: ERP, PIM, search, personalization, or real-time pricing",
                    "You sell across multiple markets, languages, or channels from one Shopify backend",
                    "You have in-house dev capacity, or you will retain a partner to maintain the build",
                  ].map((item, i, arr) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingBottom: "14px", marginBottom: i < arr.length - 1 ? "14px" : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
                      <span style={{ flexShrink: 0, marginTop: "2px" }}><CheckIcon /></span>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: C_TEXT, lineHeight: "24px", margin: 0 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .shl-edu-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 60px; align-items: start; }
          @media (max-width: 1024px) { .shl-edu-grid { gap: 40px; } }
          @media (max-width: 768px) { .shl-edu-grid { grid-template-columns: 1fr; gap: 32px; } }
          @media (max-width: 640px) { .shl-edu-left p { font-size: 14px !important; line-height: 24px !important; } .shl-edu-right p { font-size: 14px !important; line-height: 22px !important; } .shl-edu-right p.shl-edu-right-heading { font-size: 16px !important; margin-bottom: 16px !important; } }
        ` }} />
      </section>

      {/* ── §4 Pain Points (CREAM) ── */}
      <section className="shl-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Signs your Shopify theme has hit its ceiling">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="si-feat-title-block">
            <h2 className="si-feat-heading">
              6 Signs Your Shopify Theme Has Hit Its Ceiling
            </h2>
            <p className="si-feat-desc">
              Headless is not for every store. But if you recognize several of these, a theme is now the thing holding you back.
            </p>
          </div>
          <div className="si-feat-grid">
            {SHL_PAINS.map((pain) => (
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
          @media (max-width: 640px) { .shl-feat { padding: 40px 16px !important; } .si-feat-heading { font-size: 26px !important; } .si-feat-desc { font-size: 15px !important; } .si-feat-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── §5 Is Headless Right for You? (DARK) ── */}
      <section style={{ background: C_DARK, padding: "60px 20px" }} aria-label="Is headless Shopify right for your store">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", color: C_WHITE, margin: "0 0 12px" }}>
            Is Headless Shopify{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              the Right Move for Your Store?
            </span>
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.75)", textAlign: "center", margin: "0 auto 40px", maxWidth: "680px", lineHeight: "26px" }}>
            Headless commerce is powerful and expensive. It pays off for the right store and wastes money for the wrong one. Here is how to know which you are before you spend a penny.
          </p>

          <div className="shl-qual-grid">
            <div style={{ background: "#0a0a0a", borderRadius: "16px", padding: "32px", border: "1px solid rgba(61,199,122,0.3)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #3DC77A 0%, #A8F0B4 50%, #2A9555 100%)" }} />
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: C_WHITE, margin: "0 0 24px", lineHeight: 1.3 }}>
                Headless is the right move if:
              </p>
              {[
                "You need a design and experience a Shopify theme genuinely cannot render",
                "You have a large or complex catalog and real, measured performance problems",
                "You integrate with external systems: ERP, PIM, search, personalization, or subscriptions",
                "You sell across multiple markets, languages, or channels from one backend",
                "You have in-house dev capacity, or you will retain a partner to maintain it",
              ].map((item, i, arr) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingBottom: i < arr.length - 1 ? "16px" : 0, marginBottom: i < arr.length - 1 ? "16px" : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <span style={{ flexShrink: 0, marginTop: "2px" }}><CheckIcon /></span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: "24px", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>

            <div style={{ background: "#0a0a0a", borderRadius: "16px", padding: "32px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: C_WHITE, margin: "0 0 24px", lineHeight: 1.3 }}>
                Headless is probably overkill if:
              </p>
              {[
                "You are early-stage with a small catalog and a simple set of needs",
                "A fast, well-built premium theme would do the job for a fraction of the cost",
                "You have no in-house dev capacity and a tight budget to maintain a custom build",
              ].map((item, i, arr) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingBottom: i < arr.length - 1 ? "16px" : 0, marginBottom: i < arr.length - 1 ? "16px" : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <span style={{ flexShrink: 0, marginTop: "2px" }}><WarnIcon /></span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: "24px", margin: 0 }}>{item}</p>
                </div>
              ))}
              <div style={{ marginTop: "28px", padding: "20px", background: "rgba(61,199,122,0.08)", borderRadius: "12px", border: "1px solid rgba(61,199,122,0.2)" }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", margin: "0 0 12px", lineHeight: 1.6 }}>
                  If a theme is the right answer, we will tell you, and we will build you a fast one instead. Book a call and we will give you a straight recommendation.
                </p>
                <Link href="/book-shopify-consultation" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600, color: "#3DC77A", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Book a free architecture call
                  <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden>
                    <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .shl-qual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          @media (max-width: 768px) { .shl-qual-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── §6 Services Accordion (WHITE) ── */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label="Headless Shopify services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>Headless Services</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              Every Headless Shopify Service Your Build Needs
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              Our headless Shopify development services cover the full headless commerce build: architecture, Hydrogen or Next.js development, CMS integration, migration, and ongoing support. Every service your build needs, in-house and fixed price.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Free Architecture Call
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <HlAccordion items={SHL_ITEMS} />
        </div>
      </section>

      {/* ── §7 Tech Stack + Framework Choice (CREAM) ── */}
      <section style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Headless tech stack and framework choice">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 style={{ color: C_DARK, fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", margin: "0 0 12px" }}>
            The Headless Stack We Build On
          </h2>
          <p style={{ color: "#000000", fontFamily: "'Poppins', sans-serif", fontSize: 16, lineHeight: "26px", textAlign: "center", margin: "0 auto 40px", maxWidth: "660px" }}>
            The first question every brand asks after &ldquo;what is headless?&rdquo; is &ldquo;Hydrogen or Next.js?&rdquo; Here is how we choose, and the stack we build with.
          </p>

          {/* Framework choice */}
          <div className="shl-fw-grid">
            <div className="shl-fw-card">
              <div className="shl-fw-head">
                <span className="shl-fw-icon" aria-hidden="true">
                  <Image src="/images/Hydrogen logo icon svg.webp" alt="Hydrogen" width={28} height={28} style={{ objectFit: "contain", width: "28px", height: "28px" }} />
                </span>
                <div>
                  <p className="shl-fw-name">Hydrogen + Oxygen</p>
                  <p className="shl-fw-tag">Shopify-native, commerce-first</p>
                </div>
              </div>
              <p className="shl-fw-desc">
                Hydrogen is Shopify&apos;s official React framework, built on Remix and hosted free on Oxygen for Plus merchants. It is the path of least resistance for commerce-first builds, with first-class access to the Storefront API and Shopify&apos;s component library.
              </p>
              <p className="shl-fw-best"><strong>Best when:</strong> your build is pure commerce, you want tight Shopify integration, and you are on Shopify Plus.</p>
            </div>
            <div className="shl-fw-card">
              <div className="shl-fw-head">
                <span className="shl-fw-icon" aria-hidden="true">
                  <Image src="/images/next-js logo icon svg.svg" alt="Next.js" width={28} height={28} style={{ objectFit: "contain", width: "28px", height: "28px" }} />
                </span>
                <div>
                  <p className="shl-fw-name">Next.js + Vercel</p>
                  <p className="shl-fw-tag">Mature, flexible, content-ready</p>
                </div>
              </div>
              <p className="shl-fw-desc">
                Next.js is the most mature React framework, with the largest developer talent pool and the flexibility content-heavy or multi-market builds need. Hosted on Vercel, with server-side rendering that keeps the store fast and fully crawlable.
              </p>
              <p className="shl-fw-best"><strong>Best when:</strong> your build is content-heavy, multi-market, or needs architecture beyond pure commerce.</p>
            </div>
          </div>
          <p className="shl-fw-note">We pick the right headless framework per project. We do not force every headless Shopify development build into one stack, and we will explain the trade-off in plain terms on the architecture call.</p>

          {/* Tools grid */}
          <div className="shl-tools-grid">
            {[
              { name: "Hydrogen", abbr: "Framework", desc: "Shopify's official React framework for commerce-first headless builds.", logo: "/images/Hydrogen logo icon svg.webp" },
              { name: "Next.js", abbr: "Framework", desc: "Mature React framework for content-heavy and multi-market storefronts.", logo: "/images/next-js logo icon svg.svg" },
              { name: "Remix", abbr: "Framework", desc: "The web framework Hydrogen is built on, tuned for fast data loading.", logo: "/images/remix logo icon.png" },
              { name: "Oxygen", abbr: "Hosting", desc: "Shopify's global hosting for Hydrogen, free on Shopify Plus.", logo: "/images/shopify-icon.svg" },
              { name: "Vercel", abbr: "Hosting", desc: "Edge hosting for Next.js with instant global delivery and previews.", logo: "/images/vercel logo icon svg.svg" },
              { name: "Sanity", abbr: "Headless CMS", desc: "Real-time, developer-friendly CMS for editorial and landing pages.", logo: "/images/Sanity logo icon.png" },
              { name: "Contentful", abbr: "Headless CMS", desc: "Enterprise headless CMS for structured, multi-channel content.", logo: "/images/Contentful logo icon.webp" },
              { name: "Storefront API", abbr: "GraphQL", desc: "Shopify's GraphQL API that connects your frontend to the backend.", logo: "/images/GraphQL logo icon.png" },
            ].map((tool) => (
              <div key={tool.name} className="shl-tool-card">
                <div className="shl-tool-icon" aria-hidden="true">
                  <Image src={tool.logo} alt={tool.name} width={26} height={26} style={{ objectFit: "contain", width: "26px", height: "26px" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 700, color: C_DARK, margin: "0 0 2px", lineHeight: 1.3 }}>{tool.name}</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, color: "#2A9555", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{tool.abbr}</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: C_TEXT, margin: 0, lineHeight: 1.6 }}>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .shl-fw-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 18px; }
          .shl-fw-card { background: #fff; border-radius: 16px; padding: 28px; border: 1px solid rgba(0,0,0,0.08); }
          .shl-fw-head { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
          .shl-fw-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .shl-fw-name { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 700; color: #000; margin: 0; line-height: 1.2; }
          .shl-fw-tag { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 600; color: #2A9555; margin: 2px 0 0; text-transform: uppercase; letter-spacing: 0.04em; }
          .shl-fw-desc { font-family: 'Poppins', sans-serif; font-size: 14px; color: #334155; line-height: 1.7; margin: 0 0 14px; }
          .shl-fw-best { font-family: 'Poppins', sans-serif; font-size: 14px; color: #000; line-height: 1.6; margin: 0; }
          .shl-fw-note { font-family: 'Poppins', sans-serif; font-size: 15px; color: #000; text-align: center; margin: 0 auto 40px; max-width: 760px; }
          .shl-tools-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
          .shl-tool-card { background: #fff; border-radius: 14px; padding: 20px; border: 1px solid rgba(0,0,0,0.07); display: flex; gap: 14px; align-items: flex-start; }
          .shl-tool-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          @media (max-width: 1024px) { .shl-tools-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 768px) { .shl-fw-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 480px) { .shl-tools-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── §8 Process (WHITE outer / CREAM inner) ── */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our headless Shopify process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            From Architecture to a Live Headless Store
          </h2>
          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            Five phases. One defined scope.
            <br className="hidden sm:block lg:hidden" />{" "}
            Most headless Shopify development builds go live within 8 to 12 weeks of kickoff.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Discovery & Architecture", desc: "We map the right headless commerce architecture: which pages go headless, how data flows through the Storefront API, where your CMS sits, and which framework fits. You get a written technical plan before any code." },
              { step: "02.", title: "Design & Frontend Build",  desc: "We design and build the custom storefront on Hydrogen or Next.js, component by component, against your brand. You review work in a live staging environment at every milestone." },
              { step: "03.", title: "Backend & API Integration", desc: "We wire the storefront to Shopify and your external systems: CMS, search, personalization, ERP, and subscriptions. Everything complex runs cleanly behind a fast frontend." },
              { step: "04.", title: "QA & Performance Hardening", desc: "End-to-end testing across devices and browsers, plus performance hardening against Core Web Vitals and server-side rendering checks. We do not ship a build that has not hit its speed budget." },
              { step: "05.", title: "Launch & Handover",        desc: "Controlled go-live with a rollback plan and zero checkout downtime. Full code handover with documentation, plus a 60-day support window from launch day." },
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

      {/* ── §9 Case Studies (CREAM) ── */}
      <section style={{ background: C_CREAM, padding: "40px 20px" }} aria-label="Headless and performance case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Headless &amp; Performance Projects We Have Delivered
          </h2>
          <div className="shl-cs-grid">
            {SHL_CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`shl-cs-card${i === 3 ? " shl-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} alt={`${cs.brand} headless Shopify case study`} fill className="shl-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
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
          .shl-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .shl-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .shl-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .shl-cs-card-img { transition: transform 0.4s ease; }
          .shl-cs-card:hover .shl-cs-card-img { transform: scale(1.03); }
          .shl-cs-card-4th { display: none !important; }
          @media (max-width: 768px) { .shl-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .shl-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .shl-cs-grid { grid-template-columns: 1fr; } .shl-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── §10 Headless vs Theme (DARK) ── */}
      <section className="shl-compare" style={{ background: C_DARK, padding: "0 20px" }} aria-label="Headless Shopify versus a traditional theme build">
        <div className="mx-auto" style={{ maxWidth: 1320, padding: "60px 0" }}>
          <h2 className="shl-compare-h2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4.1vw, 42px)", fontWeight: 700, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Headless Shopify vs{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              a Traditional Theme Build
            </span>
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.7)", textAlign: "center", margin: "0 auto 32px", maxWidth: 680 }}>
            A theme is the right call for most stores, and we build fast ones. But once you have outgrown one, here is what a headless commerce storefront gives you that a theme cannot.
          </p>

          <div className="shl-compare-grid">
            <div className="shl-compare-card" style={{ background: "#121212", borderRadius: 16, padding: 30, marginTop: 10 }}>
              <span className="shl-compare-pill" style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#3DC77A", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(61,199,122,0.3)" }}>
                ✓ Headless Storefront
              </span>
              <ul className="shl-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {SHL_PROS.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shl-compare-card" style={{ background: "#121212", borderRadius: 16, padding: 30, marginTop: 10 }}>
              <span className="shl-compare-pill" style={{ display: "inline-block", background: "rgba(245,158,11,0.12)", color: "#fbbf24", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(245,158,11,0.25)" }}>
                ! Traditional Theme at Scale
              </span>
              <ul className="shl-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {SHL_CONS.map((item) => (
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

          <div style={{ display: "flex", justifyContent: "center", marginTop: "36px" }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Architecture Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .shl-compare-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
          @media (max-width: 1024px) { .shl-compare-pill { font-size: 17px !important; } }
          @media (max-width: 768px) { .shl-compare-grid { gap: 12px !important; } .shl-compare-card { padding: 20px !important; } .shl-compare-pill { font-size: 15px !important; } .shl-compare-list li { font-size: 13px !important; } }
          @media (max-width: 640px) { .shl-compare-h2 { line-height: 1.25 !important; } }
        ` }} />
      </section>

      {/* ── §11 Industries (WHITE) ── */}
      <section style={{ background: C_WHITE, padding: "60px 20px" }} aria-label="Industries Ecomm Wizards builds headless Shopify stores for">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 style={{ color: C_DARK, fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", margin: "0 0 12px" }}>
            Headless Shopify Stores We Build Across Every Sector
          </h2>
          <p style={{ color: "#000000", fontFamily: "'Poppins', sans-serif", fontSize: 16, lineHeight: "26px", textAlign: "center", margin: "0 auto 40px", maxWidth: "640px" }}>
            Headless ecommerce pays off most for brands with complexity a theme cannot handle. Here are the sectors we build headless Shopify stores for, and what we focus on in each.
          </p>
          <div className="shl-ind-grid">
            {SHL_INDUSTRIES.map((ind) => (
              <div key={ind.name} className="shl-ind-card">
                <span className="shl-ind-icon" aria-hidden="true">{ind.icon}</span>
                <h3 className="shl-ind-name">{ind.name}</h3>
                <p className="shl-ind-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#000000", textAlign: "center", margin: "32px 0 0" }}>
            Not on this list? We build headless storefronts across all sectors. The backend is always Shopify.
          </p>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .shl-ind-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
          .shl-ind-card { background: #FBF7ED; border-radius: 16px; padding: 24px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 10px; }
          .shl-ind-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .shl-ind-name { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
          .shl-ind-desc { font-family: 'Poppins', sans-serif; font-size: 13px; color: #334155; line-height: 1.65; margin: 0; }
          @media (max-width: 1024px) { .shl-ind-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 12px !important; } .shl-ind-card { padding: 18px !important; } }
          @media (max-width: 768px) { .shl-ind-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 480px) { .shl-ind-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; } .shl-ind-card { padding: 16px !important; } }
        ` }} />
      </section>

      {/* ── §12 Why Us (DARK) ── */}
      <section
        className="std-why shl-why-section"
        style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards as their headless Shopify agency"
      >
        <div className="shl-why-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="shl-why-heading">
            Why Brands Choose Ecomm Wizards as Their{" "}<br className="shl-why-br-lg" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Headless Shopify Agency
            </span>
          </h2>
          <p className="shl-why-desc">
            We are a headless commerce agency that works only on Shopify, with 100+ live stores built. Here is what separates a headless build that pays off from one that becomes an expensive maintenance problem:
          </p>

          <div className="shl-why-grid">
            {[
              {
                title: "Hydrogen + Next.js Experts",
                desc: "We build on both Shopify's official Hydrogen framework and Next.js, and we choose per project. You get dedicated Shopify headless developers who know the Storefront API, server-side rendering, and modern frontend architecture in depth, not a theme shop guessing at headless.",
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 9l-6 7 6 7M21 9l6 7-6 7"/></svg>),
              },
              {
                title: "Honest Architecture Advice",
                desc: (<>We only recommend headless when there is clear technical justification. If a fast theme would serve you better, we say so on the first call. <span className="shl-why-hl">We will not sell you a six-figure build you do not need.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3L5 8v9c0 6.1 4.7 11.8 11 13 6.3-1.2 11-6.9 11-13V8L16 3z"/><path d="M11 16l3 3 7-7"/></svg>),
              },
              {
                title: "You Own the Entire Codebase",
                desc: "Every line of the storefront, every component, and every integration is yours at completion, with documentation. No proprietary system, no lock-in. Your team or any other agency can pick it up and run.",
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 10l-4 6 4 6"/><path d="M26 10l4 6-4 6"/><path d="M19 6l-6 20"/></svg>),
              },
              {
                title: "100+ Shopify Stores Built",
                desc: "DTC brands, Shopify Plus merchants, B2B distributors, and global retailers. Every build adds to a pattern library of what works in production, so the edge cases that catch other teams are ones we solved years ago.",
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22L10 12l5 6 4-8 5 8"/><circle cx="23" cy="6" r="3"/><path d="M20.5 6H6" strokeDasharray="2 2"/></svg>),
              },
              {
                title: "Performance-Obsessed",
                desc: (<>Speed is the reason most brands go headless, so we treat it as a feature. We set performance budgets at kickoff and hold green Core Web Vitals through launch. <span className="shl-why-hl">Sub-second loads are the target, not a nice-to-have.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="17" r="11"/><path d="M16 17l5-5M16 6V3M13 3h6"/></svg>),
              },
              {
                title: "Shopify Plus Certified Partners",
                desc: "Hands-on experience with Checkout UI Extensions, Shopify Functions, Oxygen, and the full Plus feature set. We build headless on the parts of Shopify that make headless worth doing.",
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="shl-why-card">
                <span className="shl-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="shl-why-card-title">{card.title}</h3>
                <p className="shl-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="shl-why-closing">
            We document every headless build, test it, and hand it over in full. A headless Shopify agency that knows the platform deeply protects your speed, your SEO, and your roadmap, before they become problems. It is what makes us one of the top headless Shopify agencies for brands that have outgrown a theme, and why clients rank us among the best headless Shopify agencies they have worked with.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Architecture Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .shl-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .shl-why-br-lg { display: inline; }
          .shl-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .shl-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .shl-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; font-size: 16px; }
          .shl-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .shl-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .shl-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .shl-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .shl-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .shl-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1100px; }
          @media (max-width: 1024px) { .std-why.shl-why-section { padding: 53px 20px !important; } .shl-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .shl-why-br-lg { display: none !important; } .shl-why-desc { font-size: 16px !important; margin-bottom: 16px !important; } .shl-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .shl-why-card { padding: 24px !important; } .shl-why-card-title { font-size: 19px !important; } .shl-why-card-desc { font-size: 14px !important; } .shl-why-closing { font-size: 16px !important; margin-bottom: 24px !important; } }
          @media (max-width: 640px) { .std-why.shl-why-section { padding: 20px 18px !important; } .shl-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .shl-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .shl-why-card { padding: 22px 20px !important; } .shl-why-closing { margin-bottom: 10px !important; } }
        ` }} />
      </section>

      {/* ── §13 Results Slider (CREAM) ── */}
      <section
        className="shl-results-section"
        style={{ background: C_CREAM, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "40px 20px" }}
        aria-label="Headless Shopify case study results"
      >
        <div className="shl-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="shl-results-heading">Real Headless &amp; Performance Projects. Measurable Results.</h2>
          <p className="shl-results-desc">
            Not projections. Real numbers from stores where a custom, performance-first frontend produced documented, measurable improvements in speed, conversion, and revenue.
          </p>
          <CaseStudySlider slides={SHL_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .shl-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:1100px; }
          .shl-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          @media (max-width:1023px) { .shl-results-section { padding:44px 20px !important; } .shl-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; } .shl-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; } }
          @media (max-width:768px) { .shl-results-desc { margin-bottom:18px !important; } }
          @media (max-width:640px) { .shl-results-section { padding:20px 16px !important; } .shl-results-heading { font-size:26px !important;line-height:34px !important; } .shl-results-desc { font-size:15px !important;line-height:24px !important; } }
        ` }} />
      </section>

      {/* ── §14 FAQ (WHITE) ── */}
      <section
        className="shl-faq-section"
        style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions about headless Shopify"
      >
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "60px 20px" }}>
          <h2 style={{ color: C_DARK, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", margin: "0 auto 40px", maxWidth: "800px" }}>
            Headless Shopify Agency FAQs
          </h2>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <HlFaqAccordion faqs={SHL_FAQS} />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .shl-faq__list { list-style: none; margin: 0; padding: 0; }
          .shl-faq__item { border-bottom: 1px solid rgba(0,0,0,0.10); }
          .shl-faq__q { font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 600; color: #000000; line-height: 1.4; flex: 1; }
          .shl-faq__chev { color: #000000; flex-shrink: 0; }
          .shl-faq__a-text { font-family: 'Poppins', sans-serif; font-size: 15px; color: #334155; line-height: 1.75; margin: 0 0 20px; }
          @media (max-width: 640px) { .shl-faq__q { font-size: 15px !important; } .shl-faq__a-text { font-size: 14px !important; } }
        ` }} />
      </section>

      {/* ── Page-level CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Phone slider */
        .s20-phones-wrap { position: relative; height: 520px; overflow: hidden; border-radius: 16px; }
        .s20-phones-wrap::before, .s20-phones-wrap::after { content: ''; position: absolute; left: 0; right: 0; height: 100px; z-index: 2; pointer-events: none; }
        .s20-phones-wrap::before { top: 0; background: linear-gradient(to bottom, #000000 0%, transparent 100%); }
        .s20-phones-wrap::after  { bottom: 0; background: linear-gradient(to top, #000000 0%, transparent 100%); }
        .s20-phones { display: flex; gap: 10px; height: 100%; justify-content: center; }
        .s20-phones-col { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; }
        .s20-phone-frame { width: 130px; height: 274px; border-radius: 22px; overflow: hidden; flex-shrink: 0; background: #111; border: 2px solid rgba(255,255,255,0.10); box-shadow: 0 4px 24px rgba(0,0,0,0.55); }
        .s20-phone-frame img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .s20-phones-col--up1  { animation: s20Up1 22s linear infinite; }
        .s20-phones-col--down { margin-top: -120px; animation: s20Down 16s linear infinite; }
        .s20-phones-col--up2  { margin-top: -60px;  animation: s20Up2 19s linear infinite; }
        @keyframes s20Up1  { 0% { transform: translateY(0);      } 100% { transform: translateY(-1136px); } }
        @keyframes s20Down { 0% { transform: translateY(-568px); } 100% { transform: translateY(0);       } }
        @keyframes s20Up2  { 0% { transform: translateY(0);      } 100% { transform: translateY(-568px);  } }
        @media (max-width: 1023px) {
          .s20-phones-wrap { height: 380px; border-radius: 12px; }
          .s20-phone-frame { width: 115px; height: 242px; border-radius: 20px; }
          .s20-phones-col--down { margin-top: -106px; } .s20-phones-col--up2 { margin-top: -53px; }
          @keyframes s20Up1  { 0% { transform: translateY(0);      } 100% { transform: translateY(-1008px); } }
          @keyframes s20Down { 0% { transform: translateY(-504px); } 100% { transform: translateY(0);       } }
          @keyframes s20Up2  { 0% { transform: translateY(0);      } 100% { transform: translateY(-504px);  } }
        }
        @media (max-width: 767px) {
          .s20-phones-wrap { height: 260px; border-radius: 10px; margin-top: 4px; }
          .s20-phones-wrap::before, .s20-phones-wrap::after { height: 70px; }
          .s20-phone-frame { width: 110px; height: 232px; border-radius: 18px; }
          .s20-phones-col--down { margin-top: -100px; } .s20-phones-col--up2 { display: none; }
          @keyframes s20Up1  { 0% { transform: translateY(0);      } 100% { transform: translateY(-968px); } }
          @keyframes s20Down { 0% { transform: translateY(-484px); } 100% { transform: translateY(0);      } }
        }
        @media (min-width: 1440px) {
          .s20-phones-wrap { height: 620px; }
          .s20-phone-frame { width: 160px; height: 337px; border-radius: 26px; }
          .s20-phones-col--down { margin-top: -148px; } .s20-phones-col--up2 { margin-top: -74px; }
          @keyframes s20Up1  { 0% { transform: translateY(0);       } 100% { transform: translateY(-1388px); } }
          @keyframes s20Down { 0% { transform: translateY(-694px);  } 100% { transform: translateY(0);       } }
          @keyframes s20Up2  { 0% { transform: translateY(0);       } 100% { transform: translateY(-694px);  } }
        }

        .shl-hero-secondary-cta:hover { color: rgba(255,255,255,1) !important; }

        .std-badge { display: inline-block; padding: 6px 16px; background: rgba(97,206,112,0.12); border: 1px solid rgba(97,206,112,0.3); border-radius: 999px; color: #61ce70; font-size: 13px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase; }
        .std-label { font-size: 13px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #334155; }

        .std-hero-stats { display: flex; flex-wrap: wrap; gap: 0; margin-top: 32px; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 24px; }
        .std-hero-stat-item { display: flex; flex-direction: column; gap: 4px; padding: 0 28px 0 0; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.12); }
        .std-hero-stat-item:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .std-hero-stat-num { font-size: 28px; font-weight: 800; line-height: 1; background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .std-hero-stat-label { font-size: 13px; font-weight: 500; color: #ffffff; letter-spacing: .02em; }

        .std-cta-sol { position: relative; display: inline-flex; align-items: center; gap: 12px; background: #000000; color: #ffffff; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; border-radius: 50px; padding: 20px 45px; text-decoration: none; line-height: 1; transition: color .25s ease; }
        .std-cta-sol::before { content: ''; position: absolute; inset: 0; border-radius: 50px; padding: 2px; background: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude; opacity: 0; transition: opacity .25s ease; pointer-events: none; }
        .std-cta-sol:hover::before { opacity: 1; }
        .std-cta-sol:visited, .std-cta-sol:focus, .std-cta-sol:active { color: #ffffff; text-decoration: none; }

        .std-cta-dark { color: #FFFFFF; border: 1px solid transparent; border-radius: 999px; padding: 15px 30px; font-size: 15px; font-weight: 600; background: linear-gradient(#000000, #000000) padding-box, #000000 border-box; transition: background .3s ease, transform .25s ease, box-shadow .25s ease; text-decoration: none; }
        .std-cta-dark:hover { color: #FFFFFF; background: linear-gradient(#000000, #000000) padding-box, var(--brand-gradient) border-box; transform: translateY(-1px); box-shadow: 0 10px 28px -10px rgba(0,0,0,.45); }
        .std-cta-dark:visited, .std-cta-dark:focus, .std-cta-dark:active { color: #FFFFFF; text-decoration: none; }

        .std-acc-item { border-top: 1px solid rgba(17,17,17,.14); }
        .std-acc-item:last-child { border-bottom: 1px solid rgba(17,17,17,.14); }
        .std-acc-icon { flex: 0 0 18px; color: #000000; transition: transform .3s ease; }
        .std-acc-icon--open { transform: rotate(180deg); }

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
          .std-hero > div { padding: 56px 18px !important; }
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
    </>
  );
}
