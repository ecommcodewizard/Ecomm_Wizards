import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SatAccordion from "./SatAccordion";
import SatFaqAccordion from "./SatFaqAccordion";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";

const META_DESCRIPTION =
  "Shopify analytics and tracking setup for 150+ stores. We configure GA4, GTM, and conversion pixels correctly, validate every event, and give you data you can trust to make ad decisions.";
const CANONICAL_URL = "https://ecommwizards.com/services/shopify-analytics-and-tracking-setup";

export const metadata: Metadata = {
  title: { absolute: "Shopify Analytics and Tracking Setup | GA4, GTM, Pixels" },
  description: META_DESCRIPTION,
  keywords: [
    "shopify analytics and tracking setup",
    "shopify ga4 setup",
    "shopify google analytics setup",
    "shopify gtm setup",
    "shopify conversion tracking",
    "shopify pixel setup",
    "server-side tracking shopify",
    "shopify tracking audit",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Shopify Analytics and Tracking Setup | GA4, GTM, Pixels",
    description: META_DESCRIPTION,
    images: [{ url: "/images/migration-shopify-right-image.webp", alt: "shopify analytics and tracking setup by Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Analytics and Tracking Setup | GA4, GTM, Pixels",
    description: META_DESCRIPTION,
    images: ["/images/migration-shopify-right-image.webp"],
  },
};

const C_DARK  = "#000000";
const C_TEXT  = "#334155";
const C_WHITE = "#FFFFFF";
const C_CREAM = "#FBF7ED";

/* ── Case study slides (testimonial slider) ── */
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
  {
    key: "dryrobe",
    image: "/images/Case%20studies/Dryrobe%20hero%20section.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg"],
    headline: (<>A <strong>Shopify Plus</strong> redesign that delivered <strong>+89% online revenue</strong> for <strong>Dryrobe</strong></>),
    quote: (<>&ldquo;The new store finally communicates who we are. The Size Finder fixed the returns problem we had been struggling with for years. <strong>Revenue growth followed</strong> from getting those fundamentals right.&rdquo;</>),
    avatar: "/images/Case%20studies/gideon%20bright.jfif",
    name: "Gideon Bright",
    role: "Head of Ecommerce, Dryrobe",
  },
];

/* ── Case study cards (Our Work grid) ── */
const CASE_STUDIES = [
  {
    brand: "VITHIT",
    metric: "+115%",
    metricLabel: "Revenue Growth YoY",
    tags: ["Shopify Plus", "Paid Media", "Full-Funnel CRO"],
    industry: "Food & Beverages",
    image: "/images/Case%20studies/VITHIT.webp",
    video: "/images/Case%20studies/VITHIT%20video.mp4",
    href: "/case-studies/vithit-shopify-plus-d2c",
    description: "A global functional drinks brand in 15 countries grew D2C revenue 115% year on year and lifted conversion rate 170% through a full-funnel paid media programme built on accurate conversion tracking and attribution.",
  },
  {
    brand: "Twillory",
    metric: "$5.4M",
    metricLabel: "New Annual Revenue",
    tags: ["Shopify Plus", "CRO", "A/B Testing"],
    industry: "Fashion & Apparel",
    image: "/images/Case%20studies/Twillory%20hero%20section.png",
    video: "/images/Case%20studies/Twillory%20video.mp4",
    href: "/case-studies/twillory-shopify-cro",
    description: "A men's performance shirt brand added $5.4M in new annual revenue and $455k in the first 90 days through a systematic CRO programme, A/B testing every interface component against clean analytics data.",
  },
  {
    brand: "111SKIN",
    metric: "+46%",
    metricLabel: "Conversion Rate",
    tags: ["Shopify Plus", "CRO", "Data-Driven"],
    industry: "Cosmetics & Beauty",
    image: "/images/Case%20studies/111skin-hero.jpg",
    video: "/images/Case%20studies/111skin%20video.mp4",
    href: "/case-studies/111skin-shopify-cro-redesign",
    description: "A dermatologist-founded luxury skincare brand ran a data-driven CRO roadmap that grew conversion rate 46% and revenue 21%, with every decision traced back to accurate event data from a properly configured GA4 and GTM setup.",
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

/* ── Pain point cards ── */
const SAT_PAINS = [
  {
    name: "GA4 and Shopify Show Different Numbers for Every Order",
    desc: "GA4 records 10-20% fewer transactions than Shopify by default because client-side tracking fires too late, gets blocked by iOS, or fires twice on the same order. Your ad campaigns look less profitable than they actually are.",
    cost: "You cut budget from campaigns that are working because the data makes them look like they're not.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="14" width="4" height="11" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="9" width="4" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="15" y="5" width="4" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="21" y="11" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 3l5 5M26 3l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Your Ad Pixels Are Firing Wrong and You Don't Know It",
    desc: "A Meta or TikTok pixel that fires on every page instead of only on confirmed purchases inflates your conversion data. ROAS looks strong, campaigns get more budget, and actual results never match the reports.",
    cost: "Inflated conversion data sends more budget to underperforming campaigns and less to the ones actually driving revenue.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
        <path d="M14 4V2M14 26v-2M4 14H2M26 14h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Checkout Events Are Missing From Your Funnel",
    desc: "Add-to-cart, begin-checkout, and purchase events track the full buyer journey in Google Analytics 4. Most stores only capture the purchase at best. Without the full funnel, you can't see where buyers drop off or which products get considered but not bought.",
    cost: "Missing funnel data hides the exact step where you lose customers, so you fix the wrong things.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 5h20l-2 8H6L4 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 13l-1.5 6h19l-1.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 19v4M18 19v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "iOS Privacy Has Already Cut Your Conversion Data",
    desc: "Apple's tracking prevention blocks Google Analytics and Meta pixel data for a large share of iPhone users. For stores where 60%+ of traffic is mobile, a significant portion of real conversions never register in your ad accounts.",
    cost: "You're making budget decisions on data that's already missing 20-40% of your actual mobile conversions.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="8" y="3" width="12" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 21v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M19 10l3-3M22 10l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Cookie Consent Blocks Your EU Tracking by Default",
    desc: "A cookie banner with no Consent Mode v2 configured blocks all tracking for every visitor who clicks Decline. If you sell to Europe, you lose the analytics data for a significant chunk of visitors entirely.",
    cost: "Without Consent Mode, any visitor who declines a cookie banner becomes completely invisible, removed from all attribution and remarketing audiences.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="11" r="1.5" fill="currentColor"/>
        <circle cx="17" cy="9" r="1.5" fill="currentColor"/>
        <circle cx="10" cy="17" r="1.5" fill="currentColor"/>
        <path d="M20 20l-4-4M20 16l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "One Theme Update Silently Breaks Everything",
    desc: "Tracking code injected directly into Liquid theme files gets overwritten when you install a theme update or switch themes. There is no warning. Your tracking stops working and you only discover it weeks later when conversions drop.",
    cost: "Every week of broken tracking is a week of decisions made on incomplete data and ad budgets pointed in the wrong direction.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4L2 24h24L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 12v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="20" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

/* ── Services accordion items ── */
const SAT_ITEMS = [
  {
    title: "GA4 Setup & Ecommerce Tracking",
    body: "We configure Google Analytics 4 (GA4) from scratch or fix an existing broken implementation. This covers the full ecommerce event suite: product views, add-to-cart, begin-checkout, purchase, and refund events. Every property is set up with the right data streams, conversion events, and attribution settings for your Shopify store.",
  },
  {
    title: "Google Tag Manager Configuration",
    body: "We build a clean GTM container for your store to house your Google Analytics, conversion, and remarketing tags, structured so future tracking changes don't require a developer. Every tag is documented and the container is handed over to your team with a written record of what each tag does.",
  },
  {
    title: "Meta & TikTok Conversion Pixel Setup",
    body: "We implement Meta and TikTok pixels with the standard ecommerce events your campaigns need: ViewContent, AddToCart, InitiateCheckout, and Purchase. For Meta, we configure the Conversions API connection so your campaigns get server-side purchase signals rather than relying on browser-only pixel fires.",
  },
  {
    title: "Server-Side Tracking",
    body: "Client-side pixels lose 20-40% of conversion events to iOS privacy controls and ad blockers. Server-side tracking sends conversion data directly from your server to Google Analytics, Meta, and TikTok, bypassing browser restrictions. We implement server-side tracking where the attribution gap justifies it.",
  },
  {
    title: "Consent Mode v2 & GDPR Compliance",
    body: "We configure Google Consent Mode v2 so GA4 and Google Ads retain modeled conversion data even when visitors decline cookies. Your tracking stays GDPR-compliant without going completely blind on EU traffic. We connect your consent banner to the right tracking triggers so events fire only when permitted.",
  },
  {
    title: "Custom Event & Data Layer Setup",
    body: "Standard Google Analytics ecommerce events don't track everything. We set up custom events for the actions specific to your store: wishlist adds, subscription sign-ups, loyalty program interactions, or any other buyer behavior worth measuring. All pushed through the data layer for reliability.",
  },
  {
    title: "Tracking Audit & Validation",
    body: "Before we close any project, we verify every Google Analytics event and pixel conversion with real user journeys: product page loads, add-to-cart, checkout steps, and a completed test purchase. We use GA4 DebugView and Meta Pixel Helper to confirm every event fires once, correctly, with the right parameters attached.",
  },
  {
    title: "Cross-Domain & UTM Tracking",
    body: "If your store uses a separate checkout domain, a blog subdomain, or depends on UTM parameters from campaigns, we configure cross-domain linking and UTM preservation so sessions don't break mid-funnel and source attribution survives the full purchase path and lands correctly in Google Analytics.",
  },
  {
    title: "Dashboard & Reporting Setup",
    body: "We build a Looker Studio dashboard covering the metrics your team actually looks at: revenue by channel, conversion funnel, top-performing products, and campaign attribution. You get a reporting setup that answers real business questions instead of raw Google Analytics tables you have to decode yourself.",
  },
];

/* ── Compare section data ── */
const NATIVE_PROS = [
  "Server-side tracking captures conversions iOS and ad blockers would otherwise miss.",
  "Every event verified with real purchases before the project closes.",
  "Consent Mode v2 keeps modeled data for visitors who decline cookies.",
  "Custom data layer events for store-specific behaviors no app tracks out of the box.",
  "Full documentation of every tag, trigger, and event delivered on handover.",
  "Existing errors audited and fixed before new tracking layers are added on top.",
];
const BUILDER_CONS = [
  { text: "Client-side only: loses 20-40% of conversions to iOS privacy and ad blockers.", warn: true  },
  { text: "No pre-launch validation: broken events surface after ad budget is already spent.", warn: true  },
  { text: "Duplicate events inflate conversion counts and mislead campaign optimization.",      warn: true  },
  { text: "Theme updates silently break pixel code with no warning or fallback.",              warn: false },
  { text: "GDPR Consent Mode rarely configured: EU traffic goes dark by default.",           warn: false },
  { text: "Support tied to the app roadmap, not your store's specific tracking setup.",       warn: false },
];

/* ── Breadcrumb schema ── */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Analytics and Tracking Setup", item: "https://ecommwizards.com/services/shopify-analytics-and-tracking-setup" },
  ],
};

/* ── FAQs ── */
const FAQS = [
  {
    q: "Why do GA4 and Shopify show different order numbers?",
    a: "They count differently. Shopify records an order the moment payment is confirmed on its server. GA4 records it when the purchase event fires in the buyer's browser. iOS privacy controls, ad blockers, and slow connections prevent that browser event from firing every time, so GA4 always records fewer orders. A 10-15% gap is normal. A 30%+ gap means your tracking has a specific problem. Server-side tracking closes most of this gap by sending the purchase event from your server instead of relying on the buyer's browser.",
  },
  {
    q: "What Google Analytics 4 ecommerce events do you configure for Shopify?",
    a: "We configure the full standard GA4 ecommerce event set for your Shopify store: view_item, add_to_cart, begin_checkout, add_payment_info, and purchase. We also set up remove_from_cart and view_item_list for stores that need funnel visibility at the collection level. If your store has specific behaviors worth measuring, such as subscription sign-ups, wishlist adds, or quiz completions. Those go in as custom events.",
  },
  {
    q: "Do we need server-side tracking?",
    a: "It depends on your traffic and channel mix. If more than 50% of your visitors are on iPhone, server-side tracking closes a real attribution gap because Safari blocks a significant share of client-side Google Analytics and pixel events from registering. If you run paid social campaigns on Meta or TikTok, server-side Conversions API also improves the quality of purchase signals those platforms use to optimize delivery. We assess this during the audit and recommend it when the data gap is large enough to justify it.",
  },
  {
    q: "How long does the full setup take?",
    a: "A clean Google Analytics and tracking setup from scratch takes 5-10 business days depending on your store's complexity and which platforms we're configuring. An audit and repair of existing broken tracking can take longer if there are significant data layer issues to fix. We give you a specific timeline after the initial audit, not an estimate based on the average.",
  },
  {
    q: "What happens to our tracking when we update our Shopify theme?",
    a: "If your Google Analytics tracking is implemented through GTM with no code injected directly into theme files, a theme update won't break it. The GTM container snippet lives in your theme layout file and needs to stay there, but it's a single line that theme updates preserve. We document exactly what to verify after any theme change and give your team a short checklist they can run in under 10 minutes.",
  },
  {
    q: "Do you set up Meta and TikTok pixels as well?",
    a: "Yes. Meta and TikTok are included in our standard tracking setup. We implement the base pixel plus the standard ecommerce events both platforms need to optimize campaigns: ViewContent, AddToCart, InitiateCheckout, and Purchase. For Meta, we also configure the Conversions API for server-side event matching.",
  },
  {
    q: "How do you handle GDPR and cookie consent?",
    a: "We configure Google Consent Mode v2 so GA4 and Google Ads keep modeled conversion data even for visitors who decline cookies, rather than dropping them entirely. We connect your existing consent banner to the right consent signals. For Meta and TikTok, we configure the pixels to respect consent status. You stay compliant without going completely blind on EU traffic.",
  },
  {
    q: "Can you fix broken tracking on a store that already has GA4 installed?",
    a: "Yes, and this is one of the most common projects we take on. Most stores have Google Analytics 4 running but misconfigured: duplicate events, missing ecommerce data, wrong conversion event settings, or pixels firing on incorrect triggers. We audit the existing setup, document every issue we find, fix it, and verify the fix with real test events before closing.",
  },
  {
    q: "Does Shopify support Google Analytics 4?",
    a: "Yes. Shopify has a native Google Analytics 4 integration through the Google channel app. The problem is what it doesn't do. The native integration only fires a basic purchase event and misses add-to-cart, begin-checkout, and product view events entirely. It also duplicates the purchase event if a buyer reloads the thank-you page, which inflates transaction counts in GA4. A proper Shopify Google Analytics 4 setup goes through Google Tag Manager with the full ecommerce event suite configured, attribution settings validated, and a server-side Conversions API connection for purchases that client-side tracking misses. That's the gap between having GA4 on your store and having GA4 working.",
  },
  {
    q: "What does the project include?",
    a: "Every project covers an audit of your existing Google Analytics, GTM, and pixel setup, full implementation of agreed tracking events, validation with real test purchases, a Looker Studio reporting dashboard, and written documentation of every tag and event. We do not hand over a setup we haven't tested. The project closes with a walkthrough session so your team knows exactly what was built and how to maintain it.",
  },
];

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
      {/* ── 1. Hero (DARK) ── */}
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Shopify analytics and tracking setup hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Shopify Analytics &amp; Tracking Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Shopify Google Analytics Setup and Conversion Tracking{" "}
              That{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Gets Your Numbers Right
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              9 out of 10 Shopify stores have Google Analytics or pixel tracking errors they don&apos;t know about. Wrong data means wrong ad decisions and wasted budget. We configure GA4, GTM, and conversion pixels correctly, validate every event, and give you a store where the numbers can be trusted.
            </p>
            <div className="std-hero-stats">
              {[
                { number: "150+",   label: "Stores Tracked" },
                { number: "10–40%", label: "Conversions Recovered" },
                { number: "100%",   label: "Events Validated" },
                { number: "4.9★",  label: "Client Rating" },
              ].map((s) => (
                <div key={s.label} className="std-hero-stat-item">
                  <span className="std-hero-stat-num">{s.number}</span>
                  <span className="std-hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <span className="group inline-flex p-[2px] rounded-full mt-8" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Tracking Audit</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>

          <div className="sat-hero-img-wrap">
            <Image
              src="/images/migration-shopify-right-image.webp"
              alt="Shopify analytics and tracking setup dashboard showing GA4 and pixel configuration"
              width={640}
              height={480}
              priority
              className="sat-hero-img"
              style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. Trust Bar (WHITE) ── */}
      <section className="std-trust" style={{ background: C_WHITE }} aria-label="Brands that trust Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: C_DARK, fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            150+ Shopify Stores Tracked. Here&apos;s Who Trusts Us.
          </h2>
          <p className="text-center" style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", margin: "10px 0 0", textAlign: "center" }}>
            From DTC startups to global brands. Every store we track and configure analytics for runs on Shopify. No WordPress, no WooCommerce.
          </p>

          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="sat-trust-track">
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

      {/* ── 3. Pain Points (CREAM) ── */}
      <section className="sat-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Shopify tracking problems">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="sat-feat-title-block">
            <h2 className="sat-feat-heading">
              6 Shopify Tracking Problems That Are Costing You Money Right Now
            </h2>
            <p className="sat-feat-desc">
              Most stores assume their Google Analytics and pixel tracking works because orders are coming in. These are the errors we find on almost every Shopify store we audit.
            </p>
          </div>

          <div className="sat-feat-grid">
            {SAT_PAINS.map((pain) => (
              <div key={pain.name} className="sat-feat-card">
                <span className="sat-feat-icon" aria-hidden="true">{pain.icon}</span>
                <h3 className="sat-feat-name">{pain.name}</h3>
                <p className="sat-feat-desc-text">{pain.desc}</p>
                <div className="sat-feat-roi">
                  <span className="sat-feat-roi-label">What this costs you:</span> {pain.cost}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sat-feat-heading { color: #000; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 auto 16px; max-width: 1000px; }
          .sat-feat-desc { color: rgba(0,0,0,.75); font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 1000px; }
          .sat-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .sat-feat-card { background: #fff; border-radius: 16px; padding: 28px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 12px; }
          .sat-feat-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .sat-feat-name { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
          .sat-feat-desc-text { font-family: 'Poppins', sans-serif; font-size: 14px; color: #334155; line-height: 1.7; margin: 0; flex-grow: 1; }
          .sat-feat-roi { font-family: 'Poppins', sans-serif; font-size: 13px; color: #2A9555; line-height: 1.5; background: rgba(61,199,122,0.08); border-radius: 8px; padding: 10px 14px; border-left: 3px solid #3DC77A; margin-top: auto; }
          .sat-feat-roi-label { font-weight: 700; }
          @media (max-width: 1024px) { .sat-feat-heading { font-size: 32px !important; } .sat-feat-desc { font-size: 16px !important; margin-bottom: 24px !important; } .sat-feat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 768px) { .sat-feat-desc { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .sat-feat { padding: 40px 16px !important; } .sat-feat-heading { font-size: 26px !important; } .sat-feat-desc { font-size: 15px !important; } .sat-feat-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── 4. Services Accordion (WHITE) ── */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label="Shopify analytics and tracking setup services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>What&apos;s Included</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              What&apos;s Included in Our Shopify Google Analytics and Tracking Setup
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              Every engagement covers an audit of your Google Analytics, GTM, and pixel setup, full implementation, event validation, and a reporting dashboard. We do not hand over tracking we haven&apos;t tested.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Free Strategy Call
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <SatAccordion items={SAT_ITEMS} />
        </div>
      </section>

      {/* ── 5. Process (WHITE) ── */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our Shopify analytics and tracking setup process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            How Our Shopify Google Analytics Setup and Tracking Process Works
          </h2>

          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            Five steps from a broken setup to numbers you can trust.
            <br className="hidden sm:block lg:hidden" />{" "}
            Most projects complete in 5 to 10 days.
          </p>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Audit", desc: "We review your existing GA4, GTM, and pixel setup to find what's missing, double-firing, or misconfigured. You get a written audit report before we change anything." },
              { step: "02.", title: "Plan", desc: "We map every event your store needs to track, the tools we'll use, and the implementation order. You sign off before work starts." },
              { step: "03.", title: "Implement", desc: "We configure GA4, GTM, pixels, and server-side tracking. Changes are tested in a staging environment before touching your live store." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]" style={{ background: "#FFFFFF", borderRadius: "16px", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 2 cards centred */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[20px] max-sm:!max-w-full md:max-lg:mt-[16px] md:max-lg:!max-w-[428px]"
            style={{ maxWidth: "calc(66.667% - 7px)", marginLeft: "auto", marginRight: "auto", width: "100%" }}
          >
            {[
              { step: "04.", title: "Test & Verify", desc: "We run every tracked event through real user journeys: add-to-cart, checkout, purchase, all verified in DebugView and documented." },
              { step: "05.", title: "Hand Over", desc: "We deliver a clean dashboard, a written record of every tag and event, and a walkthrough so your team knows what's tracked and how to use it." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]" style={{ background: "#FFFFFF", borderRadius: "16px", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Compare (DARK) ── */}
      <section className="sat-compare" style={{ background: C_DARK, padding: "0 20px" }} aria-label="Specialist tracking setup vs DIY app install">
        <div className="mx-auto" style={{ maxWidth: 1320, padding: "60px 0" }}>

          <h2 className="sat-compare-h2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4.1vw, 42px)", fontWeight: 700, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Specialist Tracking Setup vs.{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Installing a Tracking App
            </span>
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Most store owners try to solve Google Analytics and conversion tracking with a plugin install. Here&apos;s what that misses.
          </p>

          <div className="sat-compare-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20, marginTop: 10 }}>

            <div className="sat-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="sat-compare-badge" style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#3DC77A", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(61,199,122,0.3)" }}>
                ✓ Specialist Tracking Setup
              </span>
              <ul className="sat-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {NATIVE_PROS.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2, color: "#3DC77A" }}><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sat-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="sat-compare-badge" style={{ display: "inline-block", background: "rgba(239,68,68,0.12)", color: "#f87171", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(239,68,68,0.25)" }}>
                ✕ DIY App Install
              </span>
              <ul className="sat-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {BUILDER_CONS.map((item) => (
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
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Strategy Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1024px) { .sat-compare-h2 { font-size: 38px !important; } }
          @media (max-width: 768px) { .sat-compare-grid { gap: 12px !important; } .sat-compare-card { padding: 20px !important; } .sat-compare-badge { font-size: 16px !important; padding: 5px 10px !important; white-space: nowrap; margin-bottom: 14px !important; } .sat-compare-list { gap: 10px !important; } .sat-compare-card li { font-size: 14px !important; } }
        ` }} />
      </section>

      {/* ── 7. Results / Testimonial Slider (CREAM) ── */}
      <section
        className="sat-results-section"
        style={{ background: C_CREAM, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "40px 20px" }}
      >
        <div className="sat-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="sat-results-heading">Results From the Stores We&apos;ve Tracked</h2>
          <p className="sat-results-desc">
            Not projections. Real outcomes from Shopify stores where accurate tracking led to better decisions and better returns.
          </p>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .sat-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:1100px; }
          .sat-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          @media (max-width:1023px) { .sat-results-section { padding:44px 20px !important; } .sat-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; } .sat-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; } }
          @media (min-width:768px) and (max-width:1023px) { .sat-results-section { padding:30px 20px !important; } .sat-results-desc { margin-bottom:18px !important; } }
          @media (max-width:640px) { .sat-results-section { padding:20px 16px !important; } .sat-results-heading { font-size:26px !important;line-height:34px !important; } .sat-results-desc { font-size:15px !important;line-height:24px !important; } }
        ` }} />
      </section>

      {/* ── 8. Why Us (DARK) ── */}
      <section
        className="std-why sat-why-section"
        style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards for Shopify analytics and tracking"
      >
        <div className="sat-why-inner mx-auto" style={{ maxWidth: "1320px" }}>

          <h2 className="sat-why-heading">
            Why Brands Choose Ecomm Wizards for{" "}<br className="sat-why-br-lg" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify Google Analytics Setup and Conversion Tracking
            </span>
          </h2>

          <p className="sat-why-desc">
            We&apos;ve audited Google Analytics and tracking setups on 150+ Shopify stores. Here&apos;s what separates our GA4 configuration from an app install or a generic developer:
          </p>

          <div className="sat-why-grid">
            {[
              {
                title: "Shopify-Only Focus",
                desc: (<>Every store we track runs on Shopify. We know the checkout flow, the app ecosystem, and the exact points where Shopify&apos;s architecture breaks Google Analytics and pixel tracking implementations.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
              {
                title: "We Validate Before We Hand Over",
                desc: (<>We don&apos;t close a project until every Google Analytics event and pixel conversion has been tested with real user journeys. You get a verified setup, not a &ldquo;should be working&rdquo; setup.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="12"/><path d="M10 16l4 4 8-8"/></svg>),
              },
              {
                title: "Server-Side by Default Where It Counts",
                desc: (<>For stores with significant mobile traffic or heavy paid social spend, we implement server-side event matching as part of the standard setup. It&apos;s not an upgrade. It&apos;s what accurate tracking requires in 2025.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="24" height="8" rx="2"/><rect x="4" y="18" width="24" height="8" rx="2"/><circle cx="8" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="8" cy="22" r="1" fill="currentColor" stroke="none"/></svg>),
              },
              {
                title: "No Black Box",
                desc: (<>Every tag, trigger, and custom event is documented in plain language. Your team can see exactly what is tracked, where it fires, and why. Nothing is locked to a proprietary platform we manage.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="18" height="24" rx="2"/><path d="M10 10h12M10 15h12M10 20h7"/></svg>),
              },
              {
                title: "You Own Everything",
                desc: (<>The GTM container, the GA4 property, the pixel accounts, all set up under your own accounts. If we stop working together, nothing breaks and nothing needs to be migrated.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4l-2 2-4-2-2 4-4 2 2 4-2 4 4 2 2 4 4-2 4 2 2-4 4-2-2-4 2-4-4-2z"/><circle cx="16" cy="16" r="3"/></svg>),
              },
              {
                title: "GDPR-Compliant From Day One",
                desc: (<>Consent Mode v2 and correct consent banner wiring are part of every setup, not an optional add-on. You get compliant tracking that retains modeled data rather than going completely dark on EU visitors. <span className="sat-why-hl">We stay until it&apos;s right.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3L5 8v9c0 6.1 4.7 11.8 11 13 6.3-1.2 11-6.9 11-13V8L16 3z"/><path d="M11 16l3 3 7-7"/></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="sat-why-card">
                <span className="sat-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="sat-why-card-title">{card.title}</h3>
                <p className="sat-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="sat-why-closing">
            Every tracking setup passes full event validation before we call it done. We test on real user journeys, wire server-side tracking where it matters, and document everything your team needs to maintain it.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Strategy Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sat-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .sat-why-br-lg { display: inline; } .sat-why-br-md { display: none; }
          .sat-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .sat-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .sat-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; font-size: 16px; transition: border-color 0.25s ease, transform 0.25s ease; }
          .sat-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .sat-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .sat-why-icon svg { stroke: url(#satWhyGradient); color: #C8F57A; }
          .sat-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .sat-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .sat-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .sat-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1202px; }
          @media (max-width: 1024px) { .std-why.sat-why-section { padding: 53px 20px !important; } .sat-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .sat-why-br-lg { display: none !important; } .sat-why-br-md { display: inline !important; } .sat-why-desc { font-size: 16px !important; line-height: 26px !important; margin-bottom: 16px !important; max-width: 100% !important; } .sat-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .sat-why-card { padding: 24px !important; } .sat-why-icon { margin-bottom: 6px !important; } .sat-why-card-title { font-size: 19px !important; line-height: 26px !important; } .sat-why-card-desc { font-size: 14px !important; line-height: 22px !important; } .sat-why-closing { font-size: 16px !important; line-height: 26px !important; margin-bottom: 24px !important; } }
          @media (max-width: 768px) { .sat-why-grid { margin-bottom: 16px !important; } .sat-why-closing { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .std-why.sat-why-section { padding: 20px 18px !important; } .sat-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .sat-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .sat-why-desc { font-size: 15px !important; line-height: 24px !important; margin-bottom: 10px !important; } .sat-why-br-md { display: none !important; } .sat-why-card { padding: 22px 20px !important; } .sat-why-icon { width: 48px; height: 48px; margin-bottom: 10px !important; } .sat-why-card-title { margin-bottom: 10px !important; } .sat-why-closing { margin-bottom: 10px !important; } }
        ` }} />

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="satWhyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"     stopColor="#A8F0B4" />
              <stop offset="16.83%" stopColor="#C8F57A" />
              <stop offset="29.33%" stopColor="#3DC77A" />
              <stop offset="41.83%" stopColor="#5FDB7E" />
              <stop offset="52.4%"  stopColor="#A8F0B4" />
              <stop offset="66.83%" stopColor="#2A9555" />
              <stop offset="83.41%" stopColor="#4FB872" />
              <stop offset="100%"   stopColor="#4EB771" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      {/* ── 9. Our Work (CREAM) ── */}
      <section style={{ background: C_CREAM, padding: "40px 20px" }} aria-label="Shopify analytics and tracking case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Our Work
          </h2>

          <div className="sat-cs-grid">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`sat-cs-card${i === 3 ? " sat-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} alt={`${cs.brand} Shopify analytics tracking case study`} fill className="sat-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
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
          .sat-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .sat-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .sat-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .sat-cs-card-img { transition: transform 0.4s ease; }
          .sat-cs-card:hover .sat-cs-card-img { transform: scale(1.03); }
          .sat-cs-card-4th { display: none !important; }
          @media (max-width: 768px) { .sat-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .sat-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .sat-cs-grid { grid-template-columns: 1fr; } .sat-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── 10. FAQ (WHITE) ── */}
      <section
        className="sat-faq-section"
        style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions about Shopify analytics and tracking setup"
      >
        <div className="sat-faq__inner mx-auto" style={{ maxWidth: "1100px" }}>
          <h2 className="sat-faq__title">Shopify Google Analytics &amp; Tracking Setup FAQs</h2>

          <SatFaqAccordion faqs={FAQS} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
        />

        <style dangerouslySetInnerHTML={{ __html: `
          .sat-faq__inner { padding: 40px 15px; }
          .sat-faq__title { color: #000000; font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 0 32px; }
          .sat-faq__list { list-style: none; margin: 0; padding: 0; border-top: 1px solid #E5E7EB; }
          .sat-faq__item { border-bottom: 1px solid #E5E7EB; }
          .sat-faq__q { color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; line-height: 1.4; flex: 1; }
          .sat-faq__chev { display: inline-flex; align-items: center; justify-content: center; color: #000000; flex-shrink: 0; }
          .sat-faq__a-text { margin: 0 0 22px; color: #334155; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 1.7; }
          @media (min-width: 1024px) { .sat-faq__inner { padding: 72px 20px; } .sat-faq__title { font-size: 44px; margin-bottom: 40px; } .sat-faq__q { font-size: 17px; } .sat-faq__a-text { font-size: 16px; } }
        ` }} />
      </section>

      {/* ── Page CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Hero image ── */
        .sat-hero-img-wrap { display: flex; align-items: center; justify-content: center; }
        .sat-hero-img { width: 100%; height: auto; border-radius: 16px; display: block; box-shadow: 0 24px 64px rgba(0,0,0,0.45); }
        @media (max-width: 1023px) { .sat-hero-img-wrap { margin-top: 8px; } }
        @media (max-width: 640px) { .sat-hero-img { border-radius: 10px; } }

        /* ── Trust bar animation (page-scoped) ── */
        .sat-trust-track { display: flex; align-items: center; gap: 80px; width: max-content; animation: satTrustScroll 32s linear infinite; }
        .std-trust-carousel:hover .sat-trust-track { animation-play-state: paused; }
        @keyframes satTrustScroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
        @media (max-width: 640px) { .sat-trust-track { gap: 48px !important; } }

        .std-badge {
          display: inline-block; padding: 6px 16px;
          background: rgba(97,206,112,0.12); border: 1px solid rgba(97,206,112,0.3);
          border-radius: 999px; color: #61ce70;
          font-size: 13px; font-weight: 600; letter-spacing: .04em; text-transform: uppercase;
        }
        .std-label { font-size: 13px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #334155; }

        .std-hero-stats { display: flex; flex-wrap: wrap; gap: 0; margin-top: 32px; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 24px; }
        .std-hero-stat-item { display: flex; flex-direction: column; gap: 4px; padding: 0 28px 0 0; margin-right: 28px; border-right: 1px solid rgba(255,255,255,0.12); }
        .std-hero-stat-item:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .std-hero-stat-num { font-size: 28px; font-weight: 800; line-height: 1; background: var(--brand-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .std-hero-stat-label { font-size: 13px; font-weight: 500; color: #ffffff; letter-spacing: .02em; }

        @media (min-width: 1025px) and (max-width: 1307px) {
          .std-hero-stats { flex-wrap: nowrap !important; }
          .std-hero-stat-item { padding-right: 18px !important; margin-right: 18px !important; }
          .std-hero-stat-num { font-size: 24px !important; }
          .std-hero-stat-label { font-size: 12px !important; }
        }

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
          .std-solutions h2 { font-size: 32px !important; }
          .std-cta-sol { margin-top: 16px !important; }

          .std-hero-h1 { font-size: 28px !important; line-height: 1.22 !important; }
          .std-hero-p { font-size: 14px !important; line-height: 24px !important; }
          .std-hero-stats { gap: 0; margin-top: 24px; padding-top: 18px; }
          .std-hero-stat-item { padding-right: 16px; margin-right: 16px; }
          .std-hero-stat-num { font-size: 22px !important; }
          .std-hero-stat-label { font-size: 11px !important; }

          .std-solutions h2 { font-size: 26px !important; line-height: 1.28 !important; }
        }
      `}} />
    </>
  );
}
