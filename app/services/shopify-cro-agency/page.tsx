import type { Metadata } from "next";
import { ogImage } from "@/lib/og";
import Image from "next/image";
import Link from "next/link";
import CroAccordion from "./CroAccordion";
import CroFaqAccordion from "./CroFaqAccordion";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import ServiceSchema from "@/components/seo/ServiceSchema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import RelatedServices from "@/components/sections/RelatedServices";

const META_DESCRIPTION =
  "Shopify CRO agency specializing in conversion rate optimization, A/B testing, and CRO audits for Shopify Plus. 100+ stores optimized. Book a free audit.";
const CANONICAL_URL = "https://ecommwizards.com/services/shopify-cro-agency";

export const metadata: Metadata = {
  title: { absolute: "Best Shopify CRO Agency | Conversion Rate Optimization" },
  description: META_DESCRIPTION,
  keywords: [
    "shopify cro agency",
    "shopify conversion rate optimization",
    "shopify a/b testing",
    "shopify cro audit",
    "shopify plus cro",
    "ecommerce conversion optimization",
    "shopify cro services",
    "conversion rate optimization shopify",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Best Shopify CRO Agency | Conversion Rate Optimization",
    description: META_DESCRIPTION,
    images: [{ url: ogImage("Shopify CRO Agency"), width: 1200, height: 630, alt: "Shopify CRO Agency — Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Shopify CRO Agency | Conversion Rate Optimization",
    description: META_DESCRIPTION,
    images: [ogImage("Shopify CRO Agency")],
  },
};

const C_DARK  = "#000000";
const C_TEXT  = "#334155";
const C_WHITE = "#FFFFFF";
const C_CREAM = "#FBF7ED";

/* ── Case study slider slides ── */
const SCRO_SLIDES: CaseStudySlide[] = [
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A Shopify Plus store <strong>optimized for conversion</strong> and scaled for <strong>BARK</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong>, made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
  {
    key: "everlast",
    image: "/images/Case%20studies/Everlast-banner.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A Shopify Plus rebuild that delivered <strong>+152% conversion rate</strong> for <strong>Everlast</strong></>),
    quote: (<>&ldquo;We needed a store that could handle serious athletes, casual fitness buyers, and trade accounts in one place. Ecomm Wizards built exactly that. The <strong>conversion numbers and trade portal revenue</strong> both exceeded what we projected.&rdquo;</>),
    avatar: "/images/Case%20studies/Daniel%20Summerson.jpg",
    name: "Daniel Summerson",
    role: "Managing Director, Everlast Gyms",
  },
  {
    key: "dryrobe",
    image: "/images/Case%20studies/Dryrobe%20hero%20section.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg"],
    headline: (<>A CRO-led redesign that delivered <strong>+89% online revenue</strong> for <strong>Dryrobe</strong></>),
    quote: (<>&ldquo;The new store finally communicates who we are. The Size Finder fixed the returns problem we had been struggling with for years. <strong>Revenue growth followed</strong> from getting those fundamentals right.&rdquo;</>),
    avatar: "/images/Case%20studies/gideon%20bright.jfif",
    name: "Gideon Bright",
    role: "Head of Ecommerce, Dryrobe",
  },
];

/* ── Case study cards ── */
const SCRO_CASE_STUDIES = [
  {
    brand: "111SKIN",
    metric: "+46%",
    metricLabel: "Conversion Rate",
    tags: ["CRO", "Shopify Plus", "UX Redesign"],
    industry: "Beauty & Skincare",
    image: "/images/Case%20studies/111skin-hero.jpg",
    video: "/images/Case%20studies/111skin%20video.mp4",
    href: "/case-studies/111skin-shopify-cro-redesign",
    description: "A luxury skincare brand rebuilt their Shopify theme from the ground up, adding a quiz-driven product finder, clinical proof content blocks, and a streamlined checkout. Conversion rate grew 46% within the first quarter post-launch.",
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
    description: "The confectionery brand restructured their entire store around how customers actually shop: gifts, occasions, and flavours. Mobile bounce rate dropped 41% and conversion rate grew 182% in the first month after relaunch.",
  },
  {
    brand: "Everlast",
    metric: "+152%",
    metricLabel: "Conversion Rate",
    tags: ["CRO", "Shopify Plus", "Redesign"],
    industry: "Sports & Fitness",
    image: "/images/Case%20studies/Everlast-banner.webp",
    video: "/images/Case%20studies/Everlast%20video.mp4",
    href: "/case-studies/everlast-shopify-plus-sports-redesign",
    description: "A full Shopify Plus rebuild for one of the world's most recognized sportswear brands. Custom PLPs, a trade portal, and loyalty integration. Conversion rate grew 152% and trade portal revenue exceeded projections by 40%.",
  },
  {
    brand: "Evie Lou",
    metric: "+82%",
    metricLabel: "Conversion Rate",
    tags: ["CRO", "Fashion", "A/B Testing"],
    industry: "Fashion & Apparel",
    image: "/images/Case%20studies/evie-lou.webp",
    video: "/images/Case%20studies/evie-lou%20video.mp4",
    href: "/case-studies/evie-lou-shopify-fashion-cro",
    description: "We audited a fashion brand for funnel drop-off across collection pages, product imagery, and mobile checkout, then prioritized every fix by revenue impact. Conversion rate grew 82% and average order value increased 24%.",
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
const SCRO_PAINS = [
  {
    name: "Product Pages Getting Views but No Add-to-Carts",
    desc: "Visitors land on your PDPs and leave without adding to cart. Unclear value props, weak imagery hierarchy, buried reviews, and no urgency mechanics are the most common causes. This is the highest-impact fix on most Shopify stores.",
    cost: "At $200k/month revenue, a 5% improvement in PDP add-to-cart rate adds $10k/month. Most stores have never tested their PDP layout against a single alternative.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="3" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 25h10M14 19v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 11l3 3 7-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Checkout Drop-Off Bleeding Revenue Before Payment",
    desc: "Unexpected shipping fees, a long form, no visible trust signals, and limited payment options cause visitors to abandon at the final step. Every checkout friction point has a measurable revenue cost.",
    cost: "The average ecommerce checkout abandonment rate is 70%. Fixing one friction point in checkout typically lifts completed purchase rate 8-15%. That compounds every month.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 6h2.5l3 12h12l2-8H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="22" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="22" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 11l2 2-2 2M22 13h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Mobile CVR Half of Desktop, and Nobody Is Fixing It",
    desc: "Mobile drives 65%+ of Shopify traffic but most stores have mobile CVRs half their desktop rate. Tap targets too small, images slow to load, CTAs buried below the fold, sticky headers eating screen space.",
    cost: "If your mobile CVR is 1% and desktop is 2%, you are converting at half the rate on the majority of your visitors. A 0.5% mobile CVR improvement on a $300k/month store adds $18k/month.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="8" y="2" width="12" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 21h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 8l2 2-2 2M17 10h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Decisions Made on Gut Feel, Not Data",
    desc: "Store changes get shipped without a hypothesis, without a baseline, and without a way to measure impact. When a change makes revenue go up or down, nobody knows why. The same mistakes repeat.",
    cost: "Stores without a structured CRO testing framework spend an average of 3x more on store changes that produce no measurable revenue lift. Every untracked change is money with no receipt.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 6L6 3M18 6l4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "App Bloat Slowing Page Speed and Killing Conversion",
    desc: "Every installed app adds JavaScript to every page load. The average Shopify store has 6-12 apps, most never audited for performance impact. Slow LCP means visitors bounce before they see your first product image.",
    cost: "A 1-second delay in load time reduces conversions by 7%. Most Shopify stores have never measured how much revenue their installed app stack is costing them in page speed.",
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
    name: "Missing Trust Signals That Stop Visitors Buying",
    desc: "No social proof above the fold, a returns policy buried in the footer, no security badges at checkout, and reviews that are hard to find. Visitors who do not trust a store do not buy from it.",
    cost: "84% of online shoppers say they will not buy from a store they do not trust. Trust signals are the fastest, lowest-cost conversion lift most Shopify stores never implement.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 3L5 7v8c0 5.5 4 10 9 11.5C19 25 23 20.5 23 15V7L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 14l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

/* ── Services accordion ── */
const SCRO_ITEMS = [
  {
    title: "Shopify CRO Audit & Revenue Leak Report",
    body: "Every Shopify CRO engagement starts with an audit. We review your store end-to-end: GA4 funnel analysis, heatmaps, session recordings, checkout flow, page speed, and trust signals. We prioritize every finding by revenue impact, not severity. You receive a written Revenue Leak Report within 5 working days. It tells you exactly where your store loses money and what to fix first. This Shopify CRO audit is the foundation every test builds on.",
  },
  {
    title: "A/B Testing & Experimentation",
    body: "We run hypothesis-driven A/B tests on Shoplift, a Shopify-native testing platform that does not slow your store or sample your traffic. Every month we ship 2 to 4 tests, and each one needs statistical significance at 95% confidence before we call a winner. We report revenue impact alongside conversion metrics, and we build winning variants permanently into your theme. You own the result. It does not vanish when a subscription lapses.",
  },
  {
    title: "Product Page (PDP) Optimization",
    body: "Product pages are where most Shopify stores lose the most revenue. We test imagery hierarchy, social proof placement, urgency mechanics, variant selector UX, mobile PDP layout, and above-fold messaging. Every test answers a specific question about why visitors are not adding to cart. No generic best-practice checklist, just the changes your data says will move the number.",
  },
  {
    title: "Checkout & Post-Purchase Optimization",
    body: "On Shopify Plus we use Checkout Extensibility to cut form friction, add trust badges at the payment step, surface free-shipping thresholds, and test one-page versus multi-step flows. Post-purchase flows cover upsell mechanics, confirmation page engagement, and email sequence performance. This is where the highest-revenue Shopify CRO wins usually live.",
  },
  {
    title: "Homepage & Navigation Optimization",
    body: "We test above-fold messaging, primary CTA placement and copy, navigation structure, category hierarchy, search, and hero content. Most visitors decide to buy or leave in the first 5 seconds on your homepage. We test what happens in those 5 seconds until the data tells us what to keep.",
  },
  {
    title: "Mobile Conversion Optimization",
    body: "We run a mobile-first UX audit covering tap target sizing, sticky CTA placement, image load performance, mobile checkout friction, scroll depth, and font legibility. Mobile is where most Shopify stores have the biggest gap between traffic and revenue. Closing that gap does not need a rebuild. It needs to know exactly where mobile visitors drop off.",
  },
  {
    title: "Shopify Plus Checkout Extensibility",
    body: "Shopify Plus gives you full control over checkout through Checkout Extensibility: custom UI extensions, loyalty program integration, one-page checkout, payment method display, and upsell mechanics at the payment step. This is where CRO for Shopify Plus goes past what standard Shopify allows, and where the highest-value CRO wins sit for stores above $1M a year. Our Shopify Plus CRO services are built around it.",
  },
  {
    title: "Page Speed & Core Web Vitals Optimization",
    body: "LCP under 2.5 seconds, CLS at zero, FID under 100ms. We audit every app script, lazy-load setting, image format, render-blocking resource, and CDN configuration. Page speed feeds conversion rate directly. Google's own data shows a 1-second improvement in mobile load time lifts conversion 27%. Most Shopify stores have never run a proper speed audit.",
  },
];

/* ── Industries ── */
const SCRO_INDUSTRIES = [
  {
    name: "Fashion & Apparel",
    desc: "Size guide friction, return rate reduction, lookbook-to-PDP flow optimization.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M10 4L7 8H4v16h20V8h-3l-3-4h-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 4c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Beauty & Skincare",
    desc: "Shade finder UX, subscription upgrade paths, loyalty opt-in rate improvement.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4l2 5h5l-4 3 1.5 5L14 14l-4.5 3 1.5-5-4-3h5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 18v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Health & Wellness",
    desc: "Compliance copy that still converts, subscription churn reduction, trust signal placement.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 24s-9-5.5-9-12a6 6 0 0 1 9-5.2A6 6 0 0 1 23 12c0 6.5-9 12-9 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Food & Beverage",
    desc: "Bundle builder CVR, gifting flow optimization, subscription AOV improvement.",
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
    desc: "Net-terms checkout friction, rep portal conversion, trade account onboarding flow.",
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
    desc: "Variant matrix UX, comparison tool conversion, warranty trust signal placement.",
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
    desc: "Equipment configurator CVR, club ordering flows, team bulk order UX.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4l2 7h7l-5.7 4.1 2.2 6.9L14 18l-5.5 4 2.2-6.9L5 11h7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Home & Lifestyle",
    desc: "AR and swatch tool optimization, interior trade account conversion, room visualizer flows.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 14L14 5l10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12v11h6v-6h4v6h6V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

/* ── Compare pros/cons ── */
const SCRO_PROS = [
  "Every test starts with a documented hypothesis and a data audit before we build anything.",
  "Shopify-native implementation. Winning variants live permanently in your theme.",
  "We require statistical significance at 95% confidence before we call any test a winner.",
  "You see the revenue impact of every test, not just conversion rate metrics.",
  "2 to 4 tests a month. Test velocity that compounds results over time.",
  "60 days post-engagement support included. We watch performance after we leave.",
];

const SCRO_CONS = [
  { text: "Random store changes with no hypothesis produce noise, not insight. You cannot learn from them.", warn: true },
  { text: "Tools show you what happened. They do not tell you what to do about it or what to test first.", warn: true },
  { text: "Without statistical rigor, you call test winners on insufficient data and ship losing variants.", warn: true },
  { text: "Winning variants disappear when the tool subscription lapses. You do not own the results.", warn: false },
  { text: "No one owns implementation. Tests are designed but never permanently shipped to the theme.", warn: false },
  { text: "No documentation. Every new team member or agency starts blind with no testing history.", warn: false },
];

/* ── FAQs ── */
const SCRO_FAQS = [
  {
    q: "How much do Shopify CRO services cost?",
    a: "A Shopify CRO audit starts from $2,500 to $5,000 depending on store size and complexity. It covers a full GA4 funnel review, heatmap and session recording analysis, checkout audit, page speed review, and a written Revenue Leak Report with prioritized recommendations. Ongoing Shopify CRO services that cover active A/B testing, implementation, and monthly reporting typically run $3,000 to $8,000 per month. Every engagement is fixed price before we start. No hourly billing. No invoices you did not see coming.",
  },
  {
    q: "How long does it take to see results from CRO?",
    a: "We deliver the first Revenue Leak Report within 5 working days of starting a Shopify CRO audit. The first live A/B test is usually running within 4 weeks of an ongoing engagement starting. Individual tests take a minimum of 2 weeks to reach statistical significance, longer for lower-traffic stores. Most clients see a measurable improvement in conversion rate within 60 days of the first test deploying.",
  },
  {
    q: "What is a good conversion rate for a Shopify store?",
    a: "The average Shopify store converts at 1.3%. Stores in the top quartile convert at 3% or above. Shopify Plus stores running a structured CRO program typically sit at 3 to 5%. The number that matters most is not the industry average but the gap between your current rate and what your traffic quality and product margins support. A Shopify CRO audit tells you your store's realistic conversion ceiling.",
  },
  {
    q: "Do you need Shopify Plus for CRO?",
    a: "No. Shopify CRO works on standard Shopify for any store with 10,000+ monthly sessions. Shopify Plus adds Checkout Extensibility, which lets us test and optimize checkout at a deeper level than standard Shopify allows. Our Shopify Plus CRO services build on that. For stores on standard Shopify, we focus on PDP, homepage, navigation, mobile UX, and pre-checkout pages, all of which move conversion regardless of plan. CRO for Shopify Plus simply has more surface area to test.",
  },
  {
    q: "What is the difference between a CRO audit and an ongoing CRO program?",
    a: "A Shopify CRO audit is a one-time diagnostic. We analyze your store, find where it loses revenue, and deliver a prioritized report of what to fix. You can implement the recommendations yourself or with another team. An ongoing CRO program takes those findings and runs structured A/B tests to prove which fixes work, then ships the winners permanently into your theme. The audit tells you what to do. The program does it and proves it worked.",
  },
  {
    q: "How do you measure the ROI of CRO?",
    a: "We track revenue per session before and after each winning variant deploys. That gives you a direct dollar figure for every test, not just a percentage lift but an annualized revenue impact. A test that lifts conversion rate 0.4% on a store doing $400k/month is worth $19k a year in incremental revenue. We report these numbers in monthly updates so the ROI of your Shopify CRO services is always visible.",
  },
  {
    q: "Can you run CRO on a store with low traffic?",
    a: "CRO testing needs enough traffic to reach statistical significance within a reasonable timeframe. As a rule, stores with fewer than 5,000 monthly sessions struggle to run reliable A/B tests. Tests either take too long or produce unreliable results. For lower-traffic stores, a Shopify CRO audit with expert recommendations is the better fit. We tell you this before you spend money on a program that would not produce reliable data.",
  },
  {
    q: "How does CRO work alongside paid media and SEO?",
    a: "Shopify CRO and paid media compound directly. If you spend $20k a month on Meta ads at a 1.8% conversion rate, improving to 2.4% produces 33% more revenue from the same ad spend, with no budget increase. CRO and SEO compound too. Better engagement signals from higher-converting pages help organic rankings. The two do not compete. The same traffic that CRO converts better also signals quality to Google.",
  },
  {
    q: "What should you look for in a Shopify CRO agency?",
    a: "The best Shopify CRO agencies specialize in improving Shopify store conversion rates, not generic websites. Look for a team that works on Shopify and Shopify Plus full-time, runs statistically significant A/B tests instead of opinion-led redesigns, ships winning variants permanently into your theme so you own them, and reports revenue impact rather than vanity metrics. A top Shopify CRO agency shows you real case studies with conversion numbers, gives you a fixed price before starting, and tells you honestly when CRO is not the right next step.",
  },
  {
    q: "How do we get started?",
    a: "The first step is a free Discovery Call. We spend 30 minutes on your store's current conversion rate, your traffic sources, and what you want to improve. From there we scope either a standalone Shopify CRO audit or an ongoing program, with a fixed price and timeline agreed in writing before we start. Most clients move from the Discovery Call to a signed project within one week.",
  },
];

const BREADCRUMB_SCHEMA_SCRO = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Shopify CRO Agency", item: "https://ecommwizards.com/services/shopify-cro-agency" },
  ],
};

/* ── Phone slider images ── */
const PHONE_COL1 = [
  "/images/partner-images-1-1.webp",
  "/images/partner-images-1-2.webp",
  "/images/partner-images-1-3.webp",
  "/images/partner-images-1-4.webp",
];
const PHONE_COL2 = ["/images/partner-images-2-1.webp", "/images/partner-images-2-3.webp"];
const PHONE_COL3 = ["/images/partner-images-3-1.webp", "/images/partner-images-3-2.webp"];

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
    mainEntity: SCRO_FAQS.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA_SCRO) }}
      />
      <ServiceSchema url={CANONICAL_URL} name="Shopify CRO Agency" serviceType="Conversion rate optimization" description={META_DESCRIPTION} />
      <Breadcrumbs current="/services/shopify-cro-agency" />

      {/* ── §1 Hero (DARK) ── */}
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Shopify CRO agency hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Shopify CRO Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Shopify CRO Agency That Turns{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                More Traffic Into Revenue
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              Most Shopify stores have a conversion problem, not a traffic problem. We find where your store leaks revenue, run <Link href="/services/a-b-testing" style={{ color: "#61ce70", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>structured A/B tests</Link> to fix it, and build the winning variants directly into your theme. Our Shopify CRO services cover conversion audits, A/B testing, and checkout work for Shopify and Shopify Plus.
            </p>

            <div className="std-hero-stats">
              {[
                { number: "100+",    label: "Stores Optimized" },
                { number: "28%+",   label: "Avg. CR Lift" },
                { number: "22%+",   label: "Avg. AOV Lift" },
                { number: "$50M+",  label: "Revenue Recovered" },
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
                  <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free CRO Audit</span>
                  <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
                </Link>
              </span>
              <Link
                href="/case-studies"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.7)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", padding: "14px 0", transition: "color 0.2s ease" }}
                className="scro-hero-secondary-cta"
              >
                See Our Work
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "24px" }}>
              <Image src="/images/shopify-icon.svg" alt="Shopify Partner" width={22} height={22} style={{ opacity: 0.8 }} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Shopify Partner. 100+ stores optimized exclusively on Shopify.</span>
            </div>
          </div>

          <div className="s20-phones-wrap" aria-hidden="true">
            <div className="s20-phones">
              <div className="s20-phones-col s20-phones-col--up1">
                {[...PHONE_COL1, ...PHONE_COL1].map((src, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <div key={i} className="s20-phone-frame">
                    <img src={src} alt="" width={130} height={274} loading={i < PHONE_COL1.length ? "eager" : "lazy"} />
                  </div>
                ))}
              </div>
              <div className="s20-phones-col s20-phones-col--down">
                {[...PHONE_COL2, ...PHONE_COL2].map((src, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <div key={i} className="s20-phone-frame">
                    <img src={src} alt="" width={130} height={274} loading={i < PHONE_COL2.length ? "eager" : "lazy"} />
                  </div>
                ))}
              </div>
              <div className="s20-phones-col s20-phones-col--up2">
                {[...PHONE_COL3, ...PHONE_COL3].map((src, i) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <div key={i} className="s20-phone-frame">
                    <img src={src} alt="" width={130} height={274} loading={i < PHONE_COL3.length ? "eager" : "lazy"} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── §2 Trust Bar + Pull-Quote (WHITE) ── */}
      <section className="std-trust" style={{ background: C_WHITE }} aria-label="Brands that trust Ecomm Wizards for Shopify CRO">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: C_DARK, fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            100+ Shopify Stores Optimized. Here&apos;s Who Trusts Us.
          </h2>
          <p className="text-center" style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", margin: "10px 0 0", textAlign: "center" }}>
            We optimize exclusively on Shopify. Every CRO engagement runs in-house with Shopify CRO experts who work on the platform full-time.
          </p>
          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="scro-trust-track">
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

          {/* Featured pull-quote */}
          <div style={{ maxWidth: "780px", margin: "36px auto 0", padding: "28px 32px", borderLeft: "4px solid #3DC77A", background: "rgba(61,199,122,0.05)", borderRadius: "0 12px 12px 0" }}>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 500, color: C_DARK, lineHeight: 1.6, margin: "0 0 16px", fontStyle: "italic" }}>
              &ldquo;We needed a store that could handle serious athletes, casual fitness buyers, and trade accounts in one place. Ecomm Wizards built exactly that. The conversion numbers and trade portal revenue both exceeded what we projected.&rdquo;
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
          @keyframes scroTrustScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .scro-trust-track { display: flex; gap: 48px; width: max-content; animation: scroTrustScroll 28s linear infinite; }
          .scro-trust-track:hover { animation-play-state: paused; }
        ` }} />
      </section>

      {/* ── §3 What Is Shopify CRO (WHITE) ── */}
      <section style={{ background: C_WHITE, padding: "60px 20px" }} aria-label="What is Shopify CRO">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="scro-edu-grid">
            <div className="scro-edu-left">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span style={{ display: "block", width: "28px", height: "3px", background: "linear-gradient(90deg, #3DC77A, #A8F0B4)", borderRadius: "2px", flexShrink: 0 }} />
                <span className="std-label" style={{ color: C_TEXT }}>Understanding the Service</span>
              </div>
              <h2 style={{ color: C_DARK, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.2, margin: "0 0 16px" }}>
                What Is Shopify Conversion Rate Optimization and Who Needs It?
              </h2>
              <p style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px", margin: "0 0 10px" }}>
                Shopify CRO is the process of finding and fixing the specific reasons your visitors do not buy. A Shopify CRO agency specializes in improving Shopify store conversion rates using your store&apos;s own data: <Link href="/services/shopify-analytics-and-tracking-setup" style={{ color: "#1F7A45", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>funnel analytics</Link>, heatmaps, session recordings, and A/B tests. We identify exactly where revenue leaks out, then test the fixes until the numbers confirm what works. Shopify CRO services replace guesswork with evidence.
              </p>
              <p style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px", margin: "0 0 10px" }}>
                The revenue math is straightforward. A store converting at 1.5% that improves to 2.5% grows revenue by 67% without spending a penny more on traffic. On a $300k/month store, that is an extra $200k/year from the same visitors you already pay to acquire. CRO is not a marketing channel. It multiplies every channel you already run.
              </p>
              <p style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px", margin: 0 }}>
                You need a Shopify CRO agency if your store gets traffic but your revenue does not reflect it. If your paid media spend keeps climbing but <Link href="/services/creative-strategy" style={{ color: "#1F7A45", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>your ROAS stays flat</Link>. If your mobile CVR is half your desktop rate. If you change the store on gut feel instead of data. A Shopify conversion rate optimization agency solves all of these with structured testing built for Shopify and Shopify Plus.
              </p>
            </div>
            <div className="scro-edu-right">
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
                  <p className="scro-edu-right-heading" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, fontWeight: 700, color: C_DARK, margin: "0 0 22px", lineHeight: 1.3 }}>
                    You need a Shopify CRO agency if:
                  </p>
                  {[
                    "You get traffic but your revenue does not reflect it. The conversion rate is the gap.",
                    "Your paid media ROAS is declining and adding more budget produces diminishing returns",
                    "Your mobile CVR is half of desktop and nobody on your team has a plan to fix it",
                    "You make store changes based on gut feel with no way to measure whether they worked",
                    "Your checkout drop-off is above 65% and you do not know which step causes it",
                    "You have no structured A/B testing program. Changes go live without a hypothesis.",
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
          .scro-edu-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 60px; align-items: start; }
          @media (max-width: 1024px) { .scro-edu-grid { gap: 40px; } }
          @media (max-width: 768px) { .scro-edu-grid { grid-template-columns: 1fr; gap: 32px; } }
          @media (max-width: 640px) { .scro-edu-left p { font-size: 14px !important; line-height: 24px !important; } .scro-edu-right p { font-size: 14px !important; line-height: 22px !important; } .scro-edu-right p.scro-edu-right-heading { font-size: 16px !important; margin-bottom: 16px !important; } }
        ` }} />
      </section>

      {/* ── §4 Pain Points (CREAM) ── */}
      <section className="scro-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Shopify CRO pain points">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="si-feat-title-block">
            <h2 className="si-feat-heading">
              6 Conversion Problems We Find on Almost Every Store We Audit
            </h2>
            <p className="si-feat-desc">
              If your store has never had a structured CRO audit, it almost certainly has several of these. We find at least three on every store we review.
            </p>
          </div>
          <div className="si-feat-grid">
            {SCRO_PAINS.map((pain) => (
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
          @media (max-width: 640px) { .scro-feat { padding: 40px 16px !important; } .si-feat-heading { font-size: 26px !important; } .si-feat-desc { font-size: 15px !important; } .si-feat-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── §5 CRO Services Accordion (WHITE) ── */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label="Shopify CRO services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>CRO Services</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              Every Shopify CRO Service Your Store Needs
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              Our Shopify CRO services cover everything from CRO audits and A/B testing to checkout optimization and <Link href="/services/shopify-ux-and-ui-design" style={{ color: "#1F7A45", textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>mobile UX</Link>. Every conversion rate optimization service your store needs, for Shopify and Shopify Plus, in-house and fixed price.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Free CRO Audit
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <CroAccordion items={SCRO_ITEMS} />
        </div>
      </section>

      {/* ── §6 Case Studies (CREAM) ── */}
      <section style={{ background: C_CREAM, padding: "40px 20px" }} aria-label="Shopify CRO case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Shopify CRO Projects We Have Delivered
          </h2>
          <div className="scro-cs-grid">
            {SCRO_CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`scro-cs-card${i === 3 ? " scro-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} alt={`${cs.brand} Shopify CRO case study`} fill className="scro-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
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
          .scro-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .scro-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .scro-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .scro-cs-card-img { transition: transform 0.4s ease; }
          .scro-cs-card:hover .scro-cs-card-img { transform: scale(1.03); }
          .scro-cs-card-4th { display: none !important; }
          @media (max-width: 768px) { .scro-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .scro-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .scro-cs-grid { grid-template-columns: 1fr; } .scro-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── §7 Is CRO Right for You? (DARK) ── */}
      <section style={{ background: C_DARK, padding: "60px 20px" }} aria-label="Is Shopify CRO right for your store">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", color: C_WHITE, margin: "0 0 12px" }}>
            Is a Shopify CRO Agency{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Right for Your Store?
            </span>
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.75)", textAlign: "center", margin: "0 auto 40px", maxWidth: "640px", lineHeight: "26px" }}>
            CRO produces the highest ROI for stores that meet a specific profile. Here is how to know if yours does.
          </p>

          <div className="scro-qual-grid">
            {/* CRO works best if */}
            <div style={{ background: "#0a0a0a", borderRadius: "16px", padding: "32px", border: "1px solid rgba(61,199,122,0.3)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #3DC77A 0%, #A8F0B4 50%, #2A9555 100%)" }} />
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: C_WHITE, margin: "0 0 24px", lineHeight: 1.3 }}>
                CRO works best for your store if:
              </p>
              {[
                "Your store gets 10,000+ monthly sessions, enough data for reliable A/B tests",
                "You are spending on paid media or SEO and want more revenue from the same traffic",
                "You run Shopify or Shopify Plus and are not planning to rebuild in the next 6 months",
                "You prefer data-backed decisions over gut feel when making store changes",
                "You want sustainable revenue growth, not a one-time fix but a compounding program",
              ].map((item, i, arr) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingBottom: i < arr.length - 1 ? "16px" : 0, marginBottom: i < arr.length - 1 ? "16px" : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <span style={{ flexShrink: 0, marginTop: "2px" }}><CheckIcon /></span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: "24px", margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>

            {/* CRO is not right if */}
            <div style={{ background: "#0a0a0a", borderRadius: "16px", padding: "32px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, color: C_WHITE, margin: "0 0 24px", lineHeight: 1.3 }}>
                CRO is not the right next step if:
              </p>
              {[
                "Your store gets fewer than 5,000 sessions per month, so there is not enough data for statistically reliable tests",
                "You have no consistent traffic source yet. CRO optimizes existing traffic, it does not create it.",
                "Your store is mid-rebuild. Finish the build first, then bring us in to optimize the live version.",
              ].map((item, i, arr) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingBottom: i < arr.length - 1 ? "16px" : 0, marginBottom: i < arr.length - 1 ? "16px" : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <span style={{ flexShrink: 0, marginTop: "2px" }}><WarnIcon /></span>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.85)", lineHeight: "24px", margin: 0 }}>{item}</p>
                </div>
              ))}
              <div style={{ marginTop: "28px", padding: "20px", background: "rgba(61,199,122,0.08)", borderRadius: "12px", border: "1px solid rgba(61,199,122,0.2)" }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", margin: "0 0 12px", lineHeight: 1.6 }}>
                  Not sure whether you qualify? Book a 20-minute call. We will tell you honestly, including if we think you should focus on something else first.
                </p>
                <Link href="/book-shopify-consultation" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 600, color: "#3DC77A", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  Book a free 20-minute call
                  <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden>
                    <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .scro-qual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          @media (max-width: 768px) { .scro-qual-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── §8 Process (WHITE outer / CREAM inner) ── */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our Shopify CRO process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            From Audit to Live Optimization in 4 Weeks
          </h2>
          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            Five phases. One defined scope.
            <br className="hidden sm:block lg:hidden" />{" "}
            Most Shopify CRO engagements have the first live test running within four weeks of kickoff.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Discovery & Audit",        desc: "GA4 funnel analysis, heatmaps, session recordings, page speed audit, and checkout flow review. Every finding ranked by revenue impact. Written Revenue Leak Report delivered within 5 working days." },
              { step: "02.", title: "Hypothesis Development",   desc: "We build the test backlog from audit findings and rank it by impact, confidence, and effort. You review and approve the roadmap before we build anything. No surprises." },
              { step: "03.", title: "Test Design & Build",      desc: "UX design and Shopify-native build on Shoplift. No third-party dependencies. The test goes live in staging first, then runs on your real store traffic." },
              { step: "04.", title: "A/B Testing & Analysis",   desc: "Minimum 2-week test window. Statistical significance at 95% confidence. We report revenue impact per session, not just conversion percentage changes." },
              { step: "05.", title: "Deploy & Iterate",         desc: "We ship the winning variant permanently into your theme. No subscription needed to keep it. We document losing tests, queue the next hypothesis, and send a monthly report." },
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

      {/* ── §9 Tools & Tech Stack (CREAM) ── */}
      <section style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="CRO tools and tech stack">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 style={{ color: C_DARK, fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", margin: "0 0 12px" }}>
            The Tools We Use to Find and Fix Conversion Leaks
          </h2>
          <p style={{ color: "#000000", fontFamily: "'Poppins', sans-serif", fontSize: 16, lineHeight: "26px", textAlign: "center", margin: "0 auto 40px", maxWidth: "640px" }}>
            We back every optimization decision with quantitative and qualitative data. No guesswork. No generic checklists.
          </p>
          <div className="scro-tools-grid">
            {[
              {
                name: "Google Analytics 4",
                abbr: "GA4",
                desc: "Funnel drop-off analysis, revenue per session, device and segment breakdowns.",
                icon: (<Image src="/images/google_analytics_image_logo_icon.webp" alt="Google Analytics 4" width={28} height={28} style={{ objectFit: "contain" }} />),
              },
              {
                name: "Hotjar",
                abbr: "Heatmaps",
                desc: "Heatmaps, scroll maps, and click maps on your highest-value conversion pages.",
                icon: (<Image src="/images/hotjar logo icon svg.png" alt="Hotjar" width={28} height={28} style={{ objectFit: "contain" }} />),
              },
              {
                name: "Microsoft Clarity",
                abbr: "Session Rec.",
                desc: "Session recordings, rage clicks, and dead click detection across all pages.",
                icon: (<Image src="/images/Microsoft clarity logo Icon svg.png" alt="Microsoft Clarity" width={28} height={28} style={{ objectFit: "contain" }} />),
              },
              {
                name: "Shoplift",
                abbr: "A/B Testing",
                desc: "Shopify-native A/B testing. No performance impact, no traffic sampling.",
                icon: (<Image src="/images/Shoplift logo icon png.png" alt="Shoplift" width={28} height={28} style={{ objectFit: "contain" }} />),
              },
              {
                name: "Shopify Analytics",
                abbr: "Native Data",
                desc: "Native CVR benchmarks, checkout funnel, and product performance data.",
                icon: (<Image src="/images/shopify-icon.svg" alt="Shopify Analytics" width={28} height={28} style={{ objectFit: "contain" }} />),
              },
              {
                name: "VWO",
                abbr: "Multivariate",
                desc: "Multivariate testing for higher-traffic stores needing more complex experiments.",
                icon: (<Image src="/images/vwo logo icon svg.svg" alt="VWO" width={28} height={28} style={{ objectFit: "contain" }} />),
              },
              {
                name: "Triple Whale",
                abbr: "Attribution",
                desc: "Revenue attribution to identify which traffic actually converts, not just clicks.",
                icon: (<Image src="/images/Triple whale logo icon svg.png" alt="Triple Whale" width={28} height={28} style={{ objectFit: "contain" }} />),
              },
              {
                name: "Klaviyo",
                abbr: "Email/SMS",
                desc: "Email and SMS flow performance to identify post-click drop-off in owned channels.",
                icon: (<Image src="/images/Klaviyo logo icon svg.webp" alt="Klaviyo" width={28} height={28} style={{ objectFit: "contain" }} />),
              },
            ].map((tool) => (
              <div key={tool.name} className="scro-tool-card">
                <div className="scro-tool-icon" aria-hidden="true">{tool.icon}</div>
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
          .scro-tools-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
          .scro-tool-card { background: #fff; border-radius: 14px; padding: 20px; border: 1px solid rgba(0,0,0,0.07); display: flex; gap: 14px; align-items: flex-start; }
          .scro-tool-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          @media (max-width: 1024px) { .scro-tools-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 480px) { .scro-tools-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── §10 Compare (DARK) ── */}
      <section className="scro-compare" style={{ background: C_DARK, padding: "0 20px" }} aria-label="Why a Shopify CRO agency outperforms DIY testing tools">
        <div className="mx-auto" style={{ maxWidth: 1320, padding: "60px 0" }}>
          <h2 className="scro-compare-h2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4.1vw, 42px)", fontWeight: 700, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Why a Shopify CRO Agency{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Outperforms DIY Testing Tools
            </span>
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.7)", textAlign: "center", margin: "0 auto 32px", maxWidth: 640 }}>
Most brands try to run CRO themselves with a cheap tool and no strategy. A Shopify CRO agency runs it as a system. Here is what the difference costs over time.
          </p>

          <div className="scro-compare-grid">
            <div className="scro-compare-card" style={{ background: "#121212", borderRadius: 16, padding: 30, marginTop: 10 }}>
              <span className="scro-compare-pill" style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#3DC77A", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(61,199,122,0.3)" }}>
                ✓ Professional CRO by Ecomm Wizards
              </span>
              <ul className="scro-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {SCRO_PROS.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2 }}><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="scro-compare-card" style={{ background: "#121212", borderRadius: 16, padding: 30, marginTop: 10 }}>
              <span className="scro-compare-pill" style={{ display: "inline-block", background: "rgba(239,68,68,0.12)", color: "#f87171", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(239,68,68,0.25)" }}>
                ✕ DIY Tools &amp; No CRO Strategy
              </span>
              <ul className="scro-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {SCRO_CONS.map((item) => (
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
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Discovery Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .scro-compare-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
          @media (max-width: 1024px) { .scro-compare-pill { font-size: 17px !important; } }
          @media (max-width: 768px) { .scro-compare-grid { gap: 12px !important; } .scro-compare-card { padding: 20px !important; } .scro-compare-pill { font-size: 15px !important; } .scro-compare-list li { font-size: 13px !important; } }
          @media (max-width: 640px) { .scro-compare-h2 { line-height: 1.25 !important; } }
        ` }} />
      </section>

      {/* ── §11 Industries (WHITE) ── */}
      <section style={{ background: C_WHITE, padding: "60px 20px" }} aria-label="Industries Ecomm Wizards optimizes Shopify stores for">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 style={{ color: C_DARK, fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", margin: "0 0 12px" }}>
            Shopify Stores We Optimize Across Every Sector
          </h2>
          <p style={{ color: "#000000", fontFamily: "'Poppins', sans-serif", fontSize: 16, lineHeight: "26px", textAlign: "center", margin: "0 auto 40px", maxWidth: "620px" }}>
            Every sector has different conversion friction points. Here are the industries we optimize for most, and what we focus on in each.
          </p>
          <div className="scro-ind-grid">
            {SCRO_INDUSTRIES.map((ind) => (
              <div key={ind.name} className="scro-ind-card">
                <span className="scro-ind-icon" aria-hidden="true">{ind.icon}</span>
                <h3 className="scro-ind-name">{ind.name}</h3>
                <p className="scro-ind-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#000000", textAlign: "center", margin: "32px 0 0" }}>
            Not on this list? We optimize stores across all sectors. The platform is always Shopify.
          </p>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .scro-ind-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
          .scro-ind-card { background: #FBF7ED; border-radius: 16px; padding: 24px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 10px; }
          .scro-ind-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .scro-ind-name { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
          .scro-ind-desc { font-family: 'Poppins', sans-serif; font-size: 13px; color: #334155; line-height: 1.65; margin: 0; }
          @media (max-width: 1024px) { .scro-ind-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 12px !important; } .scro-ind-card { padding: 18px !important; } }
          @media (max-width: 768px) { .scro-ind-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 480px) { .scro-ind-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; } .scro-ind-card { padding: 16px !important; } }
        ` }} />
      </section>

      {/* ── §12 Why Us (DARK) ── */}
      <section
        className="std-why scro-why-section"
        style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards as their Shopify CRO agency"
      >
        <div className="scro-why-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="scro-why-heading">
            Why Brands Choose Ecomm Wizards as Their{" "}<br className="scro-why-br-lg" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify CRO Agency
            </span>
          </h2>
          <p className="scro-why-desc">
            We have optimized 100+ live Shopify stores with a team of Shopify CRO experts. Here is what separates a structured CRO program from one-off guesswork:
          </p>

          <div className="scro-why-grid">
            {[
              {
                title: "Shopify-Only CRO Experts",
                desc: "Shopify CRO experts design and build every test. We do not apply generic CRO methodology to Shopify without knowing how the platform actually works. Every test is built Shopify-native, by people who work on Shopify full-time.",
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4l-2 2-4-2-2 4-4 2 2 4-2 4 4 2 2 4 4-2 4 2 2-4 4-2-2-4 2-4-4-2z"/><circle cx="16" cy="16" r="3"/></svg>),
              },
              {
                title: "Fixed-Price Audits, Confirmed on Day 1",
                desc: (<>Your audit cost is agreed before we open GA4. No hourly billing. No surprise invoices. You know the full number before we start. <span className="scro-why-hl">Every engagement is scoped and priced in writing before work begins.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="24" height="24" rx="3"/><path d="M22 3v4M10 3v4M4 13h24"/><path d="M10 19l3 3 6-6"/></svg>),
              },
              {
                title: "You Own Every Winning Variant",
                desc: "Every change we test and win gets built permanently into your theme. No subscription needed to keep the results. No vendor lock-in. The code is yours. If you stop working with us, the conversion improvements stay.",
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 10l-4 6 4 6"/><path d="M26 10l4 6-4 6"/><path d="M19 6l-6 20"/></svg>),
              },
              {
                title: "100+ Shopify Stores Optimized",
                desc: "DTC brands, Shopify Plus merchants, B2B distributors, and global retailers. Every project adds to a pattern library of what works across verticals. Most agencies never build that up because they do not work on Shopify exclusively.",
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22L10 12l5 6 4-8 5 8"/><circle cx="23" cy="6" r="3"/><path d="M20.5 6H6" strokeDasharray="2 2"/></svg>),
              },
              {
                title: "60 Days Post-Engagement Support",
                desc: (<>The engagement ends. The monitoring does not. We watch performance for 60 days after final deployment and respond to any regressions. <span className="scro-why-hl">You are not on your own the day the engagement closes.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3L5 8v9c0 6.1 4.7 11.8 11 13 6.3-1.2 11-6.9 11-13V8L16 3z"/><path d="M11 16l3 3 7-7"/></svg>),
              },
              {
                title: "Shopify Plus Certified Partners",
                desc: "Hands-on experience with Checkout Extensibility, Shopify Functions, Shopify Flow, and the full enterprise feature set. Every Shopify platform update that could affect your store, we test it and document it before it goes live.",
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="scro-why-card">
                <span className="scro-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="scro-why-card-title">{card.title}</h3>
                <p className="scro-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="scro-why-closing">
            We document every CRO engagement, test it, and hand it over in full. A Shopify CRO agency that knows the platform deeply catches conversion issues before they cost you revenue, not after. We know the checkout architecture, the theme render layer, and the analytics data model well enough to know exactly where stores break. It is what makes us one of the top Shopify CRO agencies for brands that want measurable conversion growth, and why clients rank us among the best Shopify CRO agencies they have worked with.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/book-shopify-consultation"
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
          .scro-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .scro-why-br-lg { display: inline; }
          .scro-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .scro-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .scro-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; font-size: 16px; }
          .scro-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .scro-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .scro-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .scro-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .scro-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .scro-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1100px; }
          @media (max-width: 1024px) { .std-why.scro-why-section { padding: 53px 20px !important; } .scro-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .scro-why-br-lg { display: none !important; } .scro-why-desc { font-size: 16px !important; margin-bottom: 16px !important; } .scro-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .scro-why-card { padding: 24px !important; } .scro-why-card-title { font-size: 19px !important; } .scro-why-card-desc { font-size: 14px !important; } .scro-why-closing { font-size: 16px !important; margin-bottom: 24px !important; } }
          @media (max-width: 640px) { .std-why.scro-why-section { padding: 20px 18px !important; } .scro-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .scro-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .scro-why-card { padding: 22px 20px !important; } .scro-why-closing { margin-bottom: 10px !important; } }
        ` }} />
      </section>

      {/* ── §13 Results Slider (CREAM) ── */}
      <section
        className="scro-results-section"
        style={{ background: C_CREAM, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "40px 20px" }}
        aria-label="Shopify CRO case study results"
      >
        <div className="scro-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="scro-results-heading">Real Shopify CRO Projects. Measurable Results.</h2>
          <p className="scro-results-desc">
            Not projections. Real numbers from stores where structured Shopify conversion rate optimization produced documented, measurable improvements in conversion and revenue.
          </p>
          <CaseStudySlider slides={SCRO_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .scro-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:1100px; }
          .scro-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          @media (max-width:1023px) { .scro-results-section { padding:44px 20px !important; } .scro-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; } .scro-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; } }
          @media (max-width:768px) { .scro-results-desc { margin-bottom:18px !important; } }
          @media (max-width:640px) { .scro-results-section { padding:20px 16px !important; } .scro-results-heading { font-size:26px !important;line-height:34px !important; } .scro-results-desc { font-size:15px !important;line-height:24px !important; } }
        ` }} />
      </section>

      {/* ── §14 FAQ (WHITE) ── */}
      <section
        className="scro-faq-section"
        style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions about Shopify CRO"
      >
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "60px 20px" }}>
          <h2 style={{ color: C_DARK, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", margin: "0 auto 40px", maxWidth: "800px" }}>
            Shopify CRO Agency FAQs
          </h2>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <CroFaqAccordion faqs={SCRO_FAQS} />
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .scro-faq__list { list-style: none; margin: 0; padding: 0; }
          .scro-faq__item { border-bottom: 1px solid rgba(0,0,0,0.10); }
          .scro-faq__q { font-family: 'Poppins', sans-serif; font-size: 17px; font-weight: 600; color: #000000; line-height: 1.4; flex: 1; }
          .scro-faq__chev { color: #000000; flex-shrink: 0; }
          .scro-faq__a-text { font-family: 'Poppins', sans-serif; font-size: 15px; color: #334155; line-height: 1.75; margin: 0 0 20px; }
          @media (max-width: 640px) { .scro-faq__q { font-size: 15px !important; } .scro-faq__a-text { font-size: 14px !important; } }
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

        .scro-hero-secondary-cta:hover { color: rgba(255,255,255,1) !important; }

        @keyframes scroTrustScroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
        .scro-trust-track { display: flex; align-items: center; gap: 80px; width: max-content; animation: scroTrustScroll 32s linear infinite; }
        .std-trust-carousel:hover .scro-trust-track { animation-play-state: paused; }
        @media (max-width: 640px) { .scro-trust-track { gap: 48px !important; } }

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

      <RelatedServices current="/services/shopify-cro-agency" />
    </>
  );
}
