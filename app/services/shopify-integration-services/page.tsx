import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiAccordion from "./SiAccordion";
import SiFaqAccordion from "./SiFaqAccordion";
import SiIntegrationsGrid from "./SiIntegrationsGrid";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";

export const metadata: Metadata = {
  title: "Shopify Integration Services | ERP, CRM, 3PL & Custom APIs | Ecomm Wizards",
  description:
    "Shopify integration services for ERP, CRM, 3PL, and custom APIs. Connect Shopify to NetSuite, QuickBooks, Salesforce, and Klaviyo. API-native. Fixed price.",
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
    brand: "NEOM Wellbeing",
    metric: "+34%",
    metricLabel: "Checkout Conversion",
    tags: ["POS Integration", "Shopify Markets", "Shopify 2.0"],
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
    tags: ["App Integration", "Performance", "Automation"],
    industry: "Sports & Fitness",
    image: "/images/Case%20studies/Feetures.jpg",
    video: "/images/Case%20studies/Feetures%20video.mp4",
    href: "/case-studies/feetures-shopify-theme-development",
    description: "America's top-rated performance sock brand rebuilt their Shopify theme from scratch with custom PLPs, dynamic PDPs, and metafield-driven automation that eliminated recurring manual overhead and grew add-to-cart rate 32%.",
  },
  {
    brand: "Capelli Sports",
    metric: "+24%",
    metricLabel: "Conversion Rate",
    tags: ["Integration Stack", "Shopify Migration", "SEO"],
    industry: "Sports & Fitness",
    image: "/images/Case%20studies/Capelli%20Sports%20hero%20image.webp",
    video: "/images/Case%20studies/Capelli%20Sports%20video.mp4",
    href: "/case-studies/capelli-sports-shopify-migration",
    description: "A global sportswear brand migrated from WordPress to Shopify with zero downtime, a performance-first redesign, and a 10-app integration stack. Conversion rate grew 24%, site speed 38%, and 95% of SEO equity was preserved.",
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
const SI_PAINS = [
  {
    name: "Manual Order Syncing Creates Errors on Every Update",
    desc: "Every time an order is manually moved between Shopify and your ERP or warehouse, there is a human error waiting to happen. Mis-picks, wrong addresses, and duplicate entries multiply with volume.",
    cost: "Manual syncing costs 3–5 hours of ops time per 100 orders and creates errors that trigger refunds, chargebacks, and lost customers.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M5 9a9 9 0 0 1 16.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M23 19a9 9 0 0 1-16.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 6l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 22l-3-3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Inventory Blind Spots Cause Oversells and Stockouts",
    desc: "Without real-time sync between Shopify and your warehouse or 3PL, you are selling stock you do not have. The customer buys. You cannot fulfil. The return and refund process costs more than the original order.",
    cost: "Each oversell costs the order revenue plus returns handling, customer service time, and the customer you have lost for good.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="12" width="22" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12V8a6 6 0 0 1 12 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Disconnected 3PLs Delay Every Shipment",
    desc: "If your 3PL or carrier cannot see Shopify orders automatically, someone is manually exporting CSVs and uploading them. That introduces lag, missed cut-off times, and fulfilment errors that customers blame on your brand.",
    cost: "Every day of fulfilment delay increases WISMO tickets, returns, and negative reviews. Customers do not care whose system is at fault.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="2" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 11h3l3 5v4h-6V11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="7" cy="22" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="21" cy="22" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Your CRM Does Not Know What Your Store Knows",
    desc: "If your CRM and ESP are not receiving clean Shopify order and event data, every customer segment is based on stale or incomplete information. Campaigns underperform because the data they run on is wrong.",
    cost: "Poorly segmented email and retention campaigns lose an average of 20–30% of recoverable revenue to brands with proper data flows.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <ellipse cx="14" cy="8" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 8v6c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 14v6c0 2.2 4.5 4 10 4s10-1.8 10-4v-6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Revenue Leaks at Checkout From Poor Payment Integration",
    desc: "Unsupported payment methods, misconfigured tax tools, and broken BNPL providers each silently decline transactions. Most stores only discover the scope of this when they audit declined payment logs.",
    cost: "At 1% checkout failure rate on £2M GMV, that is £20K in permanently lost sales annually. Most of it is invisible without a proper audit.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 11h22" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="7" y="15" width="5" height="3" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Manual Processes That Worked at £1M Break at £5M",
    desc: "The spreadsheets, manual exports, and copy-paste workflows that kept you running at lower volume do not scale. At higher order volumes they consume more staff time, introduce more errors, and become the ceiling on your growth.",
    cost: "Hiring operations staff to patch broken integrations is not a growth strategy. Each manual process you automate directly reduces headcount cost.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 22L10 12l5 6 4-8 5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="23" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20.5 6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
  },
];

/* ── Services accordion items ── */
const SI_ITEMS = [
  {
    title: "Shopify ERP Integration",
    body: "Connect Shopify to NetSuite, SAP, Microsoft Dynamics 365, Odoo, or Oracle. Bi-directional sync of orders, products, inventory levels, customers, and financial data. Real-time or scheduled batch. Custom field mapping to match your ERP's data model exactly. We have built Shopify ERP integrations for brands processing hundreds of thousands of orders monthly.",
  },
  {
    title: "Shopify CRM Integration",
    body: "Salesforce, HubSpot, Zoho, and Pipedrive connected to Shopify so customer and order data flows automatically. Segment by lifetime value, purchase history, and product preferences without manual exports. Marketing and sales teams work from live data, not yesterday's CSV.",
  },
  {
    title: "Shopify Marketing Automation & Email",
    body: "Klaviyo, Mailchimp, ActiveCampaign, and Omnisend receiving clean Shopify event data in real time. Every abandoned cart, post-purchase, and win-back flow triggers correctly. Server-side event tracking for post-iOS 14 accuracy. We audit and rebuild broken tracking as part of every marketing automation integration.",
  },
  {
    title: "Shopify 3PL & Fulfilment Integration",
    body: "ShipStation, ShipBob, Easyship, Shipwire, and custom 3PL APIs connected directly to Shopify. Orders pushed to your fulfilment partner automatically. Tracking numbers pulled back and surfaced to customers. Inventory updated in real time across every warehouse location. No manual export files.",
  },
  {
    title: "Shopify Payment & Checkout Integration",
    body: "Stripe, Adyen, PayPal, Klarna, Clearpay, and Authorize.Net integrated cleanly with Shopify's checkout. Custom payment flows, BNPL providers, B2B net-terms, and multi-currency checkout built on Shopify Plus checkout extensibility. We test every edge case before go-live.",
  },
  {
    title: "Shopify Marketplace & Multi-Channel Integration",
    body: "Amazon, eBay, Walmart, TikTok Shop, and Google Shopping connected to Shopify as your central inventory and order management hub. Single source of truth regardless of where the sale happens. Listing sync, order routing, and inventory allocation handled automatically.",
  },
  {
    title: "Shopify Analytics & Revenue Attribution",
    body: "Google Analytics 4, Triple Whale, Northbeam, Elevar, and Power BI integrated with clean, validated data layers. Server-side tracking, custom event schemas, and revenue attribution models built for post-iOS 14 reality. The integrations most agencies skip, and the ones that make your media buying measurable.",
  },
  {
    title: "Custom API & Middleware for Shopify",
    body: "Custom internal tools, legacy systems, custom databases, GraphQL APIs, and webhook architecture. If it has an API, we can connect it. If it does not, we build one. Every custom integration is fully documented and handed over to you. No proprietary systems, no lock-in.",
  },
];

/* ── Compare section data ── */
const SI_PROS = [
  "API-native builds on Shopify's Admin API, Storefront API, and webhooks. No brittle app connectors.",
  "Structured 6-week process with a defined scope and fixed price before development starts.",
  "Shopify-certified team with 100+ live integrations in production.",
  "Timeline confirmed on Day 1. Go-live date agreed before a single line of code is written.",
  "You own 100% of the code, documentation, and credentials. Zero lock-in.",
  "60 days of post-launch monitoring and incident response included in every project.",
];
const SI_CONS = [
  { text: "App connectors break on every Shopify platform update, and someone has to manually fix them.", warn: true  },
  { text: "Zapier automations hit step limits, fail silently, and charge per task at volume.",              warn: true  },
  { text: "Generic developers who have never worked with Shopify's API surface or data model.",            warn: true  },
  { text: "No defined scope. Timeline is 'it depends'. Invoice grows with every question.",               warn: false },
  { text: "No documentation. The next developer starts from zero. Integration breaks, no one knows why.", warn: false },
  { text: "Support ends at go-live. If something breaks at 2am during a campaign, you are on your own.",  warn: false },
];

/* ── FAQs ── */
const SI_FAQS = [
  {
    q: "How long does a Shopify integration typically take?",
    a: "Most integrations are completed within six weeks from the start of development. The timeline depends on complexity: a straightforward ERP or CRM integration with a well-documented API typically takes three to four weeks. Custom middleware or legacy system connections with undocumented APIs can take six to eight weeks. We agree the exact delivery date before development starts, not after scoping. You will know the go-live date on Day 1.",
  },
  {
    q: "How much does a Shopify integration cost?",
    a: "Integration cost depends on complexity. A standard integration using a well-documented third-party API (connecting Shopify to Klaviyo, ShipStation, or QuickBooks, for example) typically starts from £3,000 to £6,000. Mid-complexity integrations involving ERP systems or custom field mapping typically run £7,000 to £15,000. Complex custom middleware, legacy systems, or multi-system builds start from £15,000. Every project is scoped and fixed-price before development begins. No hourly rates, no scope creep billing.",
  },
  {
    q: "Who owns the integration code after the project is complete?",
    a: "You do. Every line of code, every configuration, and every credential lives in your accounts. We transfer full documentation and source code at project completion. There is no proprietary system on our end, no recurring licence fee, and no lock-in. If you stop working with us, the integration keeps running exactly as we built it.",
  },
  {
    q: "What happens if an integration breaks after go-live?",
    a: "Every project includes a 60-day post-launch support window. Any incident during those 60 days is handled by us at no additional cost. After the 60-day window, we offer ongoing support retainers or can diagnose and fix issues on a project basis. We also monitor for API deprecation notices and Shopify platform changes that could affect live integrations.",
  },
  {
    q: "Can you integrate systems that do not have a public API?",
    a: "Yes. If a system has a private API, we work with your vendor to get access. If it has no API at all, we can build a custom data layer using file-based transfer, database connections, or a custom middleware layer, depending on what the system supports. We have connected Shopify to legacy ERP systems with no modern API documentation. It requires more discovery time but it is solvable in most cases.",
  },
  {
    q: "Do you support Shopify Plus-specific features in integrations?",
    a: "Yes. We build on Shopify Plus features including Shopify Flow for automation, Shopify Functions for custom logic at the checkout level, and Shopify Markets for multi-currency and multi-region implementations. If you are on Shopify Plus and need B2B checkout, custom payment terms, or checkout extensibility as part of an integration, we handle all of it.",
  },
  {
    q: "What is the difference between a Shopify app and a custom integration?",
    a: "A Shopify app is a pre-built product installed from the App Store. It connects to a limited set of Shopify data and works within fixed parameters. A custom integration is built directly on Shopify's APIs and webhooks. It can access any data Shopify exposes, handle custom logic, sync to any external system, and operate exactly the way your business requires. Apps are faster to install. Custom integrations are more reliable, more flexible, and do not break when Shopify or the app vendor ships an update.",
  },
  {
    q: "Can you take over an integration that someone else built?",
    a: "Yes. We regularly audit and rebuild integrations inherited from previous developers or agencies. We start with a full technical audit of the existing integration: architecture, error handling, data mapping, and any known failure points. We document what exists before making any changes. If the integration is salvageable, we improve and stabilise it. If it needs a rebuild, we scope that separately.",
  },
  {
    q: "How do you handle Shopify API version updates?",
    a: "Shopify deprecates API versions on a quarterly basis. We track the Shopify API changelog as part of every live integration we have built. For integrations we maintain, we test and update to the current API version before the deprecated version is sunset. We document which API version each integration uses and flag updates proactively. You are never surprised by an API deprecation breaking a live integration.",
  },
  {
    q: "How do we get started with a Shopify integration project?",
    a: "The first step is a free Integration Audit. We map your current tech stack, document existing data flows, identify gaps and failure points, and present a prioritised integration plan with scope and cost for each item. The audit delivers a written report you keep regardless of whether we work together. Most clients move directly from the audit into a scoped integration project. Getting from audit to go-live typically takes six to eight weeks.",
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
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Shopify integration services hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Shopify Integration Services</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Shopify Integration Services That Make Your{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Entire Business Work as One
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              Manual syncing, disconnected tools, and broken data flows quietly cost you revenue every day. We build API-native Shopify integrations: ERP, CRM, 3PL, payments, analytics, and custom systems. They run automatically, eliminate errors, and scale with you. 100+ live integrations built.
            </p>
            <div className="std-hero-stats">
              {[
                { number: "100+",    label: "Integrations Built" },
                { number: "6 Wks",   label: "Avg. Delivery" },
                { number: "60 Days", label: "Post-Launch Support" },
                { number: "4.9★",    label: "Client Rating" },
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
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Integration Audit</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>

          <div className="si-hero-img-wrap">
            <Image
              src="/images/Store performance.webp"
              alt="Shopify integration services dashboard showing live ERP and CRM connections"
              width={640}
              height={480}
              priority
              className="si-hero-img"
              style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. Trust Bar (WHITE) ── */}
      <section className="std-trust" style={{ background: C_WHITE }} aria-label="Brands that trust Ecomm Wizards for Shopify integrations">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: C_DARK, fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            100+ Shopify Stores Connected. Here&apos;s Who Trusts Us.
          </h2>
          <p className="text-center" style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", margin: "10px 0 0", textAlign: "center" }}>
            From DTC startups to global enterprise brands. Every integration we build runs exclusively on Shopify. No WordPress. No Magento.
          </p>

          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="si-trust-track">
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
      <section className="si-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Shopify integration pain points">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="si-feat-title-block">
            <h2 className="si-feat-heading">
              6 Integration Gaps We Find on Almost Every Store We Audit
            </h2>
            <p className="si-feat-desc">
              If your tools don&apos;t talk to Shopify, your business is leaking money at every step. These are the problems we find on almost every store we audit.
            </p>
          </div>

          <div className="si-feat-grid">
            {SI_PAINS.map((pain) => (
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
          @media (max-width: 640px) { .si-feat { padding: 40px 16px !important; } .si-feat-heading { font-size: 26px !important; } .si-feat-desc { font-size: 15px !important; } .si-feat-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── 4. Services Accordion (WHITE) ── */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label="Shopify integration services">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>Integration Services</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              Every Shopify Integration Your Business Needs, Built Right
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              From off-the-shelf platform connectors to fully custom middleware. We build every Shopify integration your business needs to run automatically. No duct-tape. No brittle app connectors.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Free Integration Audit
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <SiAccordion items={SI_ITEMS} />
        </div>
      </section>

      {/* ── 4b. Who We Integrate With (CREAM) ── */}
      <section style={{ background: "#FBF7ED", padding: "60px 20px" }} aria-label="Platforms Ecomm Wizards integrates with Shopify">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 style={{ color: "#000000", fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", margin: "0 0 12px" }}>
            50+ Platforms We Connect to Shopify
          </h2>
          <p style={{ color: "rgba(0,0,0,0.6)", fontFamily: "'Poppins', sans-serif", fontSize: "16px", lineHeight: "26px", textAlign: "center", margin: "0 0 36px", maxWidth: "680px", marginLeft: "auto", marginRight: "auto" }}>
            The most common systems Shopify and Shopify Plus brands run alongside their store. We have built live integrations with every platform listed here.
          </p>
          <SiIntegrationsGrid />
        </div>
      </section>

      {/* ── 5. Process (WHITE) ── */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our Shopify integration process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            From Discovery to a Live Shopify Integration in 6 Weeks
          </h2>

          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            Five phases. One defined scope.
            <br className="hidden sm:block lg:hidden" />{" "}
            Most Shopify integrations are live within six weeks of kickoff.
          </p>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Discovery & Audit",   desc: "We map every system in your stack, document current data flows, and identify every gap and failure point. You receive a written Integration Spec and System Map before development begins." },
              { step: "02.", title: "Architecture Design", desc: "We design the integration blueprint: API endpoints, data models, sync frequency, error handling logic, and middleware architecture. Nothing is built until the design is approved." },
              { step: "03.", title: "Build & Configure",   desc: "Development, webhook setup, field mapping, authentication, and middleware configuration. You receive weekly progress updates. Working integrations go into staging for your review before QA." },
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
              { step: "04.", title: "Testing & QA",     desc: "End-to-end testing across all edge cases, volume stress tests, and error state validation. We do not go live until every test scenario has passed and you have signed off on staging." },
              { step: "05.", title: "Deploy & Monitor", desc: "Go-live with real-time monitoring. We stay with you for 60 days post-launch. Any incident, we are on it within hours. You receive a monitoring dashboard and 60-day support window as standard." },
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
      <section className="si-compare" style={{ background: C_DARK, padding: "0 20px" }} aria-label="API-native integrations vs app connectors and DIY">
        <div className="mx-auto" style={{ maxWidth: 1320, padding: "60px 0" }}>

          <h2 className="si-compare-h2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4.1vw, 42px)", fontWeight: 700, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Built on Shopify&apos;s API vs.{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Held Together With App Connectors
            </span>
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Most stores try to connect systems with app connectors, Zapier automations, or developers who have never worked with Shopify&apos;s API. Here is what that costs.
          </p>

          <div className="si-compare-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20, marginTop: 10 }}>

            <div className="si-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="si-compare-badge" style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#3DC77A", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(61,199,122,0.3)" }}>
                ✓ API-Native Integration
              </span>
              <ul className="si-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {SI_PROS.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2, color: "#3DC77A" }}><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="si-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="si-compare-badge" style={{ display: "inline-block", background: "rgba(239,68,68,0.12)", color: "#f87171", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(239,68,68,0.25)" }}>
                ✕ App Connectors &amp; Generic Devs
              </span>
              <ul className="si-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {SI_CONS.map((item) => (
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
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Integration Audit</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1024px) { .si-compare-h2 { font-size: 38px !important; } }
          @media (max-width: 768px) { .si-compare-grid { gap: 12px !important; } .si-compare-card { padding: 20px !important; } .si-compare-badge { font-size: 16px !important; padding: 5px 10px !important; white-space: nowrap; margin-bottom: 14px !important; } .si-compare-list { gap: 10px !important; } .si-compare-card li { font-size: 14px !important; } }
        ` }} />
      </section>

      {/* ── 7. Results / Testimonial Slider (CREAM) ── */}
      <section
        className="si-results-section"
        style={{ background: C_CREAM, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "40px 20px" }}
        aria-label="Shopify integration case study results"
      >
        <div className="si-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="si-results-heading">Real Integrations. Measurable Results.</h2>
          <p className="si-results-desc">
            Not projections. Real numbers from stores where proper integration work produced measurable, documented improvements in operations and revenue.
          </p>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .si-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:1100px; }
          .si-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          @media (max-width:1023px) { .si-results-section { padding:44px 20px !important; } .si-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; } .si-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; } }
          @media (min-width:768px) and (max-width:1023px) { .si-results-section { padding:30px 20px !important; } .si-results-desc { margin-bottom:18px !important; } }
          @media (max-width:640px) { .si-results-section { padding:20px 16px !important; } .si-results-heading { font-size:26px !important;line-height:34px !important; } .si-results-desc { font-size:15px !important;line-height:24px !important; } }
        ` }} />
      </section>

      {/* ── 8. Why Us (DARK) ── */}
      <section
        className="std-why si-why-section"
        style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards for Shopify integrations"
      >
        <div className="si-why-inner mx-auto" style={{ maxWidth: "1320px" }}>

          <h2 className="si-why-heading">
            Why Brands Choose Ecomm Wizards for{" "}<br className="si-why-br-lg" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify Integration Services
            </span>
          </h2>

          <p className="si-why-desc">
            We have built 100+ live Shopify integrations. Here is what separates a properly architected integration from an app connector that breaks the next time Shopify ships an update:
          </p>

          <div className="si-why-grid">
            {[
              {
                title: "You Own Every Line of Code",
                desc: (<>Full documentation and code transfer on project completion. Every integration we build lives in your infrastructure, your accounts, and your repositories. No proprietary systems. No recurring licence fees to us. If you stop working with us, the integration keeps running.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4l-2 2-4-2-2 4-4 2 2 4-2 4 4 2 2 4 4-2 4 2 2-4 4-2-2-4 2-4-4-2z"/><circle cx="16" cy="16" r="3"/></svg>),
              },
              {
                title: "6-Week Delivery, Confirmed on Day 1",
                desc: (<>We scope before we build. Your go-live date is agreed before development starts, not estimated after scoping. Most integrations are in production within six weeks. <span className="si-why-hl">We tell you the date on Day 1 and we hold to it.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="24" height="24" rx="3"/><path d="M22 3v4M10 3v4M4 13h24"/><path d="M10 19l3 3 6-6"/></svg>),
              },
              {
                title: "Shopify-Only Expertise",
                desc: (<>Every integration we build is for Shopify. We know Shopify&apos;s Admin API, Storefront API, webhooks, and Shopify Functions in depth. We do not treat Shopify like any other ecommerce platform. It is not.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
              {
                title: "API-Native Architecture",
                desc: (<>We build on Shopify&apos;s APIs and webhooks, not app connectors or Zapier automations. API-native integrations are more reliable, more performant, and do not break when Shopify ships updates to the platform.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 10l-4 6 4 6"/><path d="M26 10l4 6-4 6"/><path d="M19 6l-6 20"/></svg>),
              },
              {
                title: "60 Days Post-Launch Support",
                desc: (<>Go-live is not the finish line. We monitor every integration for 60 days post-launch and respond to any incident within hours. Included in every project. You are not on your own the morning after go-live.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3L5 8v9c0 6.1 4.7 11.8 11 13 6.3-1.2 11-6.9 11-13V8L16 3z"/><path d="M11 16l3 3 7-7"/></svg>),
              },
              {
                title: "Transparent, Fixed-Price Quotes",
                desc: (<>You know the full cost before development starts. We scope, document, and fix-price every integration. No hourly billing that spirals with every question. <span className="si-why-hl">No surprise invoices at the end of the project.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="24" height="8" rx="2"/><rect x="4" y="18" width="24" height="8" rx="2"/><circle cx="8" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="8" cy="22" r="1" fill="currentColor" stroke="none"/></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="si-why-card">
                <span className="si-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="si-why-card-title">{card.title}</h3>
                <p className="si-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="si-why-closing">
            Every integration we build is documented, tested, and handed over to you completely. We know Shopify&apos;s API surface, data model, and webhook architecture. We catch edge cases before go-live, not after.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Integration Audit</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .si-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .si-why-br-lg { display: inline; } .si-why-br-md { display: none; }
          .si-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .si-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .si-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; font-size: 16px; transition: border-color 0.25s ease, transform 0.25s ease; }
          .si-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .si-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .si-why-icon svg { stroke: url(#siWhyGradient); color: #C8F57A; }
          .si-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .si-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .si-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .si-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1202px; }
          @media (max-width: 1024px) { .std-why.si-why-section { padding: 53px 20px !important; } .si-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .si-why-br-lg { display: none !important; } .si-why-br-md { display: inline !important; } .si-why-desc { font-size: 16px !important; line-height: 26px !important; margin-bottom: 16px !important; max-width: 100% !important; } .si-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .si-why-card { padding: 24px !important; } .si-why-icon { margin-bottom: 6px !important; } .si-why-card-title { font-size: 19px !important; line-height: 26px !important; } .si-why-card-desc { font-size: 14px !important; line-height: 22px !important; } .si-why-closing { font-size: 16px !important; line-height: 26px !important; margin-bottom: 24px !important; } }
          @media (max-width: 768px) { .si-why-grid { margin-bottom: 16px !important; } .si-why-closing { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .std-why.si-why-section { padding: 20px 18px !important; } .si-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .si-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .si-why-desc { font-size: 15px !important; line-height: 24px !important; margin-bottom: 10px !important; } .si-why-br-md { display: none !important; } .si-why-card { padding: 22px 20px !important; } .si-why-icon { width: 48px; height: 48px; margin-bottom: 10px !important; } .si-why-card-title { margin-bottom: 10px !important; } .si-why-closing { margin-bottom: 10px !important; } }
        ` }} />

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="siWhyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
      <section style={{ background: C_CREAM, padding: "40px 20px" }} aria-label="Shopify integration case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Shopify Integration Projects We Have Delivered
          </h2>

          <div className="si-cs-grid">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`si-cs-card${i === 3 ? " si-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} alt={`${cs.brand} Shopify integration case study`} fill className="si-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
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
          .si-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .si-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .si-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .si-cs-card-img { transition: transform 0.4s ease; }
          .si-cs-card:hover .si-cs-card-img { transform: scale(1.03); }
          .si-cs-card-4th { display: none !important; }
          @media (max-width: 768px) { .si-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .si-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .si-cs-grid { grid-template-columns: 1fr; } .si-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── 10. FAQ (WHITE) ── */}
      <section
        className="si-faq-section"
        style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions about Shopify integration services"
      >
        <div className="si-faq__inner mx-auto" style={{ maxWidth: "1100px" }}>
          <h2 className="si-faq__title">Shopify Integration Services FAQs</h2>

          <SiFaqAccordion faqs={SI_FAQS} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: SI_FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />

        <style dangerouslySetInnerHTML={{ __html: `
          .si-faq__inner { padding: 40px 15px; }
          .si-faq__title { color: #000000; font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 0 32px; }
          .si-faq__list { list-style: none; margin: 0; padding: 0; border-top: 1px solid #E5E7EB; }
          .si-faq__item { border-bottom: 1px solid #E5E7EB; }
          .si-faq__q { color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; line-height: 1.4; flex: 1; }
          .si-faq__chev { display: inline-flex; align-items: center; justify-content: center; color: #000000; flex-shrink: 0; }
          .si-faq__a-text { margin: 0 0 22px; color: #334155; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 1.7; }
          @media (min-width: 1024px) { .si-faq__inner { padding: 72px 20px; } .si-faq__title { font-size: 44px; margin-bottom: 40px; } .si-faq__q { font-size: 17px; } .si-faq__a-text { font-size: 16px; } }
        ` }} />
      </section>

      {/* ── Page CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Hero image ── */
        .si-hero-img-wrap { display: flex; align-items: center; justify-content: center; }
        .si-hero-img { width: 100%; height: auto; border-radius: 16px; display: block; box-shadow: 0 24px 64px rgba(0,0,0,0.45); }
        @media (max-width: 1023px) { .si-hero-img-wrap { margin-top: 8px; } }
        @media (max-width: 640px) { .si-hero-img { border-radius: 10px; } }

        /* ── Trust bar animation (page-scoped) ── */
        .si-trust-track { display: flex; align-items: center; gap: 80px; width: max-content; animation: siTrustScroll 32s linear infinite; }
        .std-trust-carousel:hover .si-trust-track { animation-play-state: paused; }
        @keyframes siTrustScroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
        @media (max-width: 640px) { .si-trust-track { gap: 48px !important; } }

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
