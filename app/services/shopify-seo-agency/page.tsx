import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SseAccordion from "./SseAccordion";
import SseFaqAccordion from "./SseFaqAccordion";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";

export const metadata: Metadata = {
  title: "Shopify SEO Agency | Expert SEO Services for Shopify | Ecomm Wizards",
  description:
    "Shopify SEO agency for 150+ stores. Expert SEO services for Shopify that fix technical issues, build the keyword strategy, and grow organic revenue month over month.",
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
    brand: "Everlast",
    metric: "+152%",
    metricLabel: "Conversion Rate",
    tags: ["Shopify Plus", "Shopify SEO", "Theme Redesign"],
    industry: "Sports & Fitness",
    image: "/images/Case studies/Everlast-banner.webp",
    video: "/images/Case%20studies/Everlast%20video.mp4",
    href: "/case-studies/everlast-shopify-plus-sports-redesign",
    description: "A Shopify Plus rebuild for Everlast: dual B2C and trade checkout architecture, product comparison tooling, and 152% conversion rate lift for the world's most iconic boxing brand.",
  },
  {
    brand: "Dryrobe",
    metric: "+89%",
    metricLabel: "Online Revenue",
    tags: ["Shopify Plus", "International SEO", "UX Design"],
    industry: "Fashion & Apparel",
    image: "/images/Case studies/Dryrobe hero section.webp",
    video: "/images/Case%20studies/dryrobe%20video%20test.mp4",
    href: "/case-studies/dryrobe-shopify-plus-redesign",
    description: "Three fragmented Shopify stores unified into one international Shopify Plus architecture, with a custom Size Finder that cut returns by 31% and grew online revenue 89%.",
  },
  {
    brand: "Wild",
    metric: "80K+",
    metricLabel: "Monthly Subscribers",
    tags: ["Shopify Plus", "Shopify SEO", "Subscriptions"],
    industry: "Cosmetics & Beauty",
    image: "/images/Case studies/WeareWild.webp",
    video: "/images/Case%20studies/WeareWild%20video.mp4",
    href: "/case-studies/wild-shopify-plus-subscriptions",
    description: "A subscription-first Shopify Plus store built from zero for Wild, scaling to 80,000+ active monthly subscribers within twelve months and expanding into Germany.",
  },
  {
    brand: "Candy Kittens",
    metric: "+182%",
    metricLabel: "Conversion Rate",
    tags: ["Theme Development", "Shopify CRO"],
    industry: "Food & Beverages",
    image: "/images/Case studies/Candy Kittens hero section.webp",
    video: "/images/Case%20studies/Candy%20Kittens%20video.mp4",
    href: "/case-studies/candy-kittens-shopify-food-beverage-cro",
    description: "A full Shopify theme redesign for Candy Kittens, the UK's leading better-for-you confectionery brand.",
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

/* ── SEO pain points ── */
const SEO_PAINS = [
  {
    name: "Shopify Creates Duplicate URLs by Default",
    desc: "Shopify generates two URLs for every product — /products/x and /collections/name/products/x. Without correct canonical tags, Google splits your ranking signals between both pages. You rank half as well as you should on every product.",
    cost: "Duplicate URL structure from Shopify defaults dilutes your authority before you've written a single word of content.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="9" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Variant Pages Cannibalize Each Other",
    desc: "A red t-shirt and a blue t-shirt with identical descriptions tell Google you have two thin pages instead of one authoritative one. Every product with size or colour variants compounds this problem.",
    cost: "Thin variant pages with identical copy are one of the most common reasons Shopify stores fail to rank for product queries.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="4" width="22" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="13" width="22" height="6" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 22h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Collection Pages Are Your Best Ranking Asset — And They're Empty",
    desc: "Collection pages rank for high-volume, high-intent queries: 'men's running shoes', not 'Nike Air Max 270 size 10'. Most stores leave collection pages as blank product grids with no copy.",
    cost: "Under-optimized collection pages are the single biggest missed organic revenue opportunity in a Shopify store.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="15" y="3" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="15" y="15" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    name: "App Scripts Destroy Core Web Vitals",
    desc: "Google uses Core Web Vitals as a direct ranking signal. Every app you install adds JavaScript that delays LCP and hurts CLS. A slow store ranks lower regardless of how good your content is.",
    cost: "A 1-second delay in LCP can drop organic rankings 5–10 positions and cut conversions by 7%.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4a10 10 0 1 0 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 4h4M24 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "No Schema Means No Rich Results",
    desc: "Without Product, Review, and BreadcrumbList schema, your search listings show plain links. Competitors with schema get star ratings, prices, and availability in their results. Rich results get 58% more clicks.",
    cost: "Missing structured data hands rich snippet visibility to any competitor who has schema correctly configured.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M10 8l-4 6 4 6M18 8l4 6-4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 6l-2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Your Keyword Strategy Targets Features, Not Buyers",
    desc: "Most stores optimize for brand names and product specs. Real buyers search 'best running shoes for flat feet' or 'gifts for men under £50'. Buyer-intent keyword mapping puts you in front of shoppers before your competitors do.",
    cost: "A feature-focused keyword strategy misses the highest-converting traffic — buyers who search before they decide.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
];

/* ── Services accordion items ── */
const SSE_ITEMS = [
  {
    title: "Shopify SEO Audit",
    body: "We audit your full store: URL structure, canonical tags, duplicate content, Core Web Vitals, schema markup, crawl coverage, internal linking, and keyword-to-page mapping. You get a prioritized fix list ranked by traffic impact before we change anything.",
  },
  {
    title: "Keyword Research & Mapping",
    body: "We map keywords to every page type: collection pages get category intent, product pages get transactional intent, blog posts get informational and comparison intent. No keyword gets assigned to the wrong page type.",
  },
  {
    title: "Technical SEO",
    body: "We fix Shopify-specific issues: duplicate URLs, canonical configuration, pagination, faceted navigation, crawl budget waste, and Core Web Vitals hurt by app scripts. Technical foundations determine how fast everything else compounds.",
  },
  {
    title: "On-Page Optimization",
    body: "We write and optimize title tags, meta descriptions, H1s, and collection page copy for the queries your buyers use. Every element earns its place — no filler copy written to hit a word count.",
  },
  {
    title: "Content Strategy & Blog SEO",
    body: "We build a content plan based on what your buyers search at every stage: research, comparison, and purchase. Content that ranks for informational queries captures buyers before they reach a competitor's product page.",
  },
  {
    title: "Link Building & Digital PR",
    body: "We build links that move rankings: editorial coverage in relevant publications, brand and supplier mention acquisition, and digital PR that earns links from authoritative domains. No directory submissions, no private blog networks.",
  },
  {
    title: "Schema & Structured Data",
    body: "We implement Product, Review, BreadcrumbList, Organization, and FAQ schema. Correct schema gets your listings rich results — star ratings, prices, and availability in search — increasing click-through rate before a visitor lands on your page.",
  },
  {
    title: "SEO Reporting & Monitoring",
    body: "Monthly reports covering keyword rankings, organic traffic, revenue attribution from GA4, and technical health. You see what changed, why it changed, and what we're doing next. No vanity metrics — just numbers that connect to revenue.",
  },
  {
    title: "AI Search Optimization",
    body: "Google AI Overviews now appear above traditional results for a large share of commercial queries. We optimize your content structure, FAQ markup, and entity signals so Google's AI pulls from your pages when answering relevant buyer queries. This includes structuring collection and blog content for AI extraction, implementing FAQ schema that feeds AI-generated answers, and building the brand signals that make AI systems recognize your store as an authority in your category.",
  },
];

/* ── Compare section data ── */
const NATIVE_PROS = [
  "Knows Shopify's duplicate URL and canonical structure by default.",
  "Keyword maps built for Shopify collection and product page hierarchy.",
  "Core Web Vitals fixes target app script conflicts, not generic issues.",
  "Schema covers Product, Review, and BreadcrumbList — Shopify-specific patterns.",
  "Content strategy built around buyer intent across all three search stages.",
  "Link building targets ecommerce-relevant domains and collection pages, not just the homepage.",
  "Optimizes content and schema for Google AI Overviews and AI search citations.",
];
const BUILDER_CONS = [
  { text: "Applies the same SEO playbook across WordPress, WooCommerce, and Shopify.", warn: false },
  { text: "Keyword research not mapped to Shopify's collection and product hierarchy.",  warn: false },
  { text: "Speed fixes miss Shopify app script conflicts entirely.",                     warn: false },
  { text: "Generic schema implementation missing Shopify-specific structured data.",     warn: false },
  { text: "Content briefs written without understanding ecommerce buying stages.",       warn: true  },
  { text: "Backlinks built to the homepage, not to the collection pages that rank.",     warn: true  },
  { text: "No strategy for AI search visibility — traditional SEO playbook only.",       warn: true  },
];

/* ── FAQs ── */
const FAQS = [
  {
    q: "How long does Shopify SEO take to show results?",
    a: "Most stores using our Shopify SEO services see meaningful keyword movement within 60–90 days of technical and on-page work going live. Significant organic revenue impact typically comes in months 4–6 as content builds authority and links accumulate. SEO is a compounding channel — the gains in month 6 are larger than month 3, and month 12 larger than month 6. We share realistic expectations in the discovery call based on your current rankings and competition level.",
  },
  {
    q: "What makes Shopify SEO different from standard SEO?",
    a: "Shopify has platform-specific issues most generic agencies miss: duplicate product URLs from collection hierarchies, thin variant pages with identical content, limited URL structure control, and Core Web Vitals scores damaged by third-party apps. Any Shopify SEO company that works across platforms applies a generic checklist. Fixing Shopify correctly means knowing how it generates URLs and handles canonical tags from the inside, not applying the same playbook they use for WordPress clients.",
  },
  {
    q: "What does your Shopify SEO audit cover?",
    a: "We audit URL structure and canonical configuration, duplicate content across product and collection pages, Core Web Vitals and page speed, schema markup and structured data, crawl coverage and index status, internal linking structure, and keyword-to-page mapping. You get a prioritized fix list ranked by traffic impact, not a 200-point checklist with no clear order of operations.",
  },
  {
    q: "Do you write the SEO content or just advise?",
    a: "We write it. Blog posts, collection page copy, product meta descriptions, and title tags are all part of the service. Every piece is written for the specific buyer intent of the query it targets — not generic content created to hit a word count.",
  },
  {
    q: "Can you run SEO on a Shopify store you did not build?",
    a: "Yes. Most clients hire us as their Shopify SEO consultant after building their store themselves or with another developer. We audit what is there, fix what is broken, and build the organic strategy on a corrected foundation. We do not require you to have used us for development.",
  },
  {
    q: "How do you build links for Shopify stores?",
    a: "We focus on three sources: editorial coverage in relevant trade and consumer publications, brand and supplier mention acquisition, and digital PR content that earns links from high-authority domains. We do not use directory submissions, private blog networks, or any tactic that violates Google's link spam guidelines.",
  },
  {
    q: "What keywords does your Shopify SEO service target?",
    a: "We build a keyword map across three intent types: transactional queries for product and collection pages, commercial investigation queries for comparison and best-of content, and informational queries for buyers in the research stage. Most agencies only target transactional keywords — missing buyers who research before they purchase, which is the majority of high-ticket ecommerce traffic.",
  },
  {
    q: "Do you handle SEO for Shopify Plus stores?",
    a: "Yes. Shopify Plus adds complexity: multi-currency and multi-market stores, international SEO with hreflang, custom checkout pages, and enterprise-scale content requirements. We have direct experience with Shopify Markets and the technical configuration multi-region stores require to rank in each market correctly.",
  },
  {
    q: "How do you measure the results of your Shopify SEO services?",
    a: "Primary metrics are organic revenue and transactions from Google Analytics 4. Secondary metrics are keyword rankings for target queries, organic clicks and impressions from Google Search Console, and Core Web Vitals scores. We report all of this monthly with commentary on what changed and why — not a dashboard dump without explanation.",
  },
  {
    q: "Do you optimize for Google AI Overviews and AI-powered search?",
    a: "Yes. Google AI Overviews now appear above organic results for a significant share of commercial queries — and getting cited in an AI-generated answer drives clicks that never reach traditional rankings. We optimize your content structure, FAQ schema, and entity signals to earn citations in AI Overviews for the queries your buyers actually use. For stores where it's relevant, we also monitor brand visibility in ChatGPT and Perplexity.",
  },
  {
    q: "What does AI search optimization actually involve?",
    a: "Three things: structured content, schema, and entity recognition. AI systems extract answers from pages with clear question-and-answer-formatted content and correctly implemented FAQ and HowTo schema. Entity optimization means building enough brand signals — mentions, links, and structured data — that AI systems identify your store as an authority in your category. For Shopify specifically, this means optimizing collection and blog pages to answer the buyer questions AI Overviews pull content for.",
  },
  {
    q: "What is included in the monthly retainer?",
    a: "Every Shopify SEO service retainer covers technical monitoring and fixes, keyword rank tracking and reporting, content production, link building, and a monthly strategy call. Scope scales with retainer size. We scope each engagement after the discovery call. No fixed packages that do not fit your store's actual needs.",
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
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Shopify SEO agency hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Shopify SEO Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Shopify SEO Agency That Builds{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Organic Revenue
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              Most Shopify stores rely entirely on paid ads and ignore organic. Our Shopify SEO experts build the channel: technical foundations, keyword strategies, and content that ranks for buyers, not browsers.
            </p>
            <div className="std-hero-stats">
              {[
                { number: "320%", label: "Avg Organic Traffic Lift" },
                { number: "47%",  label: "Avg Revenue Increase" },
                { number: "150+", label: "Stores Ranked" },
                { number: "4.9★", label: "Client Rating" },
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
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Free Strategy Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>

          <div className="sse-hero-img-wrap">
            <Image
              src="/images/performance-1.webp"
              alt="Shopify SEO performance results dashboard"
              width={640}
              height={480}
              priority
              className="sse-hero-img"
              style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. Trust Logo Bar (WHITE) ── */}
      <section className="std-trust" style={{ background: C_WHITE }} aria-label="Brands that trust Ecomm Wizards for Shopify SEO">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 style={{ color: C_DARK, fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0, textAlign: "center", fontFamily: "'Poppins', sans-serif" }}>
            150+ Stores Ranked With Our Shopify SEO Services. Here&apos;s Who Trusts Us.
          </h2>
          <p style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", margin: "10px 0 0", textAlign: "center", fontFamily: "'Poppins', sans-serif" }}>
            From DTC startups to global brands. Every store we work with runs on Shopify. No WordPress, no WooCommerce.
          </p>

          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="std-trust-track">
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
      <section className="sse-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Shopify SEO problems costing you revenue">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <div className="sse-feat-title-block">
            <h2 className="sse-feat-heading">
              6 Shopify SEO Problems Costing You Organic Revenue Right Now
            </h2>
            <p className="sse-feat-desc">
              Shopify&apos;s default setup creates SEO problems most store owners never know exist. These are the issues our Shopify SEO services fix before anything else.
            </p>
          </div>

          <div className="sse-feat-grid">
            {SEO_PAINS.map((pain) => (
              <div key={pain.name} className="sse-feat-card">
                <span className="sse-feat-icon" aria-hidden="true">{pain.icon}</span>
                <h3 className="sse-feat-name">{pain.name}</h3>
                <p className="sse-feat-desc-text">{pain.desc}</p>
                <div className="sse-feat-roi">
                  <span className="sse-feat-roi-label">What this costs you:</span> {pain.cost}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sse-feat-heading { color: #000; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 auto 16px; max-width: 900px; }
          .sse-feat-desc { color: rgba(0,0,0,.75); font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 760px; }
          .sse-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .sse-feat-card { background: #fff; border-radius: 16px; padding: 28px; border: 1px solid rgba(0,0,0,0.07); display: flex; flex-direction: column; gap: 12px; }
          .sse-feat-icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; background: rgba(61,199,122,0.1); border-radius: 12px; color: #2A9555; flex-shrink: 0; }
          .sse-feat-name { font-family: 'Poppins', sans-serif; font-size: 18px; font-weight: 700; color: #000; margin: 0; line-height: 1.3; }
          .sse-feat-desc-text { font-family: 'Poppins', sans-serif; font-size: 14px; color: #334155; line-height: 1.7; margin: 0; flex-grow: 1; }
          .sse-feat-roi { font-family: 'Poppins', sans-serif; font-size: 13px; color: #2A9555; line-height: 1.5; background: rgba(61,199,122,0.08); border-radius: 8px; padding: 10px 14px; border-left: 3px solid #3DC77A; margin-top: auto; }
          .sse-feat-roi-label { font-weight: 700; }
          @media (max-width: 1024px) { .sse-feat-heading { font-size: 32px !important; } .sse-feat-desc { font-size: 16px !important; margin-bottom: 24px !important; } .sse-feat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 768px) { .sse-feat-desc { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .sse-feat { padding: 40px 16px !important; } .sse-feat-heading { font-size: 26px !important; } .sse-feat-desc { font-size: 15px !important; } .sse-feat-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </section>

      {/* ── 4. Services Accordion (WHITE) ── */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label="Shopify SEO services included">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>What&apos;s Included</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              What&apos;s Included in Our Shopify SEO Services
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              Every Shopify SEO services retainer covers a full technical audit, keyword mapping, on-page optimization, content, link building, and monthly reporting. Scope scales with retainer size. No hidden add-ons.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Free Strategy Call
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <SseAccordion items={SSE_ITEMS} />
        </div>
      </section>

      {/* ── 5. Process (WHITE) ── */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our Shopify SEO process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            How Our Shopify SEO Process Works
          </h2>

          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            Five steps from audit to compounding organic growth.
            <br className="hidden sm:block lg:hidden" />{" "}
            Most stores see ranking movement within 60 to 90 days.
          </p>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Audit", desc: "We crawl your full store, audit every page type, and identify the technical, content, and link gaps holding your organic rankings back. You get a prioritized report before we change anything." },
              { step: "02.", title: "Strategy", desc: "We build a 90-day keyword map, content plan, and technical fix roadmap. You see exactly what we're targeting, why, and what impact each initiative should deliver." },
              { step: "03.", title: "Foundation", desc: "We fix Shopify-specific issues first: duplicate URLs, canonical tags, schema, site speed, and internal linking. Rankings compound faster when the technical foundation is correct from the start." },
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
              { step: "04.", title: "Content & Links", desc: "We publish buyer-intent content and build links to your highest-value pages. Both run in parallel from month one — not sequentially, which is how most agencies slow their own results." },
              { step: "05.", title: "Monitor & Iterate", desc: "We track rankings, clicks, and revenue attribution monthly. We adjust strategy based on what's working — not a static plan written in month one and never revisited." },
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
      <section className="sse-compare" style={{ background: C_DARK, padding: "0 20px" }} aria-label="Shopify SEO specialist vs generic SEO agency">
        <div className="mx-auto" style={{ maxWidth: 1320, padding: "60px 0" }}>

          <h2 className="sse-compare-h2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4.1vw, 42px)", fontWeight: 700, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Shopify SEO Expert vs.{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Generic SEO Agency
            </span>
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            A generic agency applies the same playbook to Shopify, WordPress, and WooCommerce. Here&apos;s what that costs your Shopify SEO rankings.
          </p>

          <div className="sse-compare-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20, marginTop: 10 }}>

            <div className="sse-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="sse-compare-badge" style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#3DC77A", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(61,199,122,0.3)" }}>
                ✓ Shopify SEO Expert
              </span>
              <ul className="sse-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {NATIVE_PROS.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2, color: "#3DC77A" }}><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sse-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="sse-compare-badge" style={{ display: "inline-block", background: "rgba(239,68,68,0.12)", color: "#f87171", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(239,68,68,0.25)" }}>
                ✕ Generic SEO Agency
              </span>
              <ul className="sse-compare-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
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
          @media (max-width: 1024px) { .sse-compare-h2 { font-size: 38px !important; } }
          @media (max-width: 768px) { .sse-compare-grid { gap: 12px !important; } .sse-compare-card { padding: 20px !important; } .sse-compare-badge { font-size: 16px !important; padding: 5px 10px !important; white-space: nowrap; margin-bottom: 14px !important; } .sse-compare-list { gap: 10px !important; } .sse-compare-card li { font-size: 14px !important; } }
        ` }} />
      </section>

      {/* ── 7. Results / Testimonial Slider (CREAM) ── */}
      <section
        className="sse-results-section"
        style={{ background: C_CREAM, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "40px 20px" }}
      >
        <div className="sse-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="sse-results-heading">Shopify SEO Results From the Stores We&apos;ve Grown</h2>
          <p className="sse-results-desc">
            Not projections. Real outcomes from Shopify stores we&apos;ve audited, rebuilt, and ranked — more traffic, better attribution, and more revenue.
          </p>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .sse-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:1100px; }
          .sse-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          @media (max-width:1023px) { .sse-results-section { padding:44px 20px !important; } .sse-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; } .sse-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; } }
          @media (min-width:768px) and (max-width:1023px) { .sse-results-section { padding:30px 20px !important; } .sse-results-desc { margin-bottom:18px !important; } }
          @media (max-width:640px) { .sse-results-section { padding:20px 16px !important; } .sse-results-heading { font-size:26px !important;line-height:34px !important; } .sse-results-desc { font-size:15px !important;line-height:24px !important; } }
        ` }} />
      </section>

      {/* ── 8. Why Us (DARK) ── */}
      <section
        className="std-why sse-why-section"
        style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards for Shopify SEO"
      >
        <div className="sse-why-inner mx-auto" style={{ maxWidth: "1320px" }}>

          <h2 className="sse-why-heading">
            Why Brands Choose Ecomm Wizards for{" "}<br className="sse-why-br-lg" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify SEO
            </span>
          </h2>

          <p className="sse-why-desc">
            We have built the organic channel for 150+ Shopify stores. Here is what separates our SEO service from every other agency:
          </p>

          <div className="sse-why-grid">
            {[
              {
                title: "Shopify-Only Focus",
                desc: (<>Every store we work on runs on Shopify. We know every platform constraint, every URL structure quirk, and every ranking opportunity other agencies miss because they split attention across platforms.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
              {
                title: "Revenue-Attributed Reporting",
                desc: (<>We tie organic traffic to revenue in every report. Not rankings, not sessions — actual revenue from Google Analytics 4. You always know the return on your SEO spend.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 24l6-8 6 4 8-12"/><circle cx="26" cy="6" r="3"/></svg>),
              },
              {
                title: "Technical and Commercial in One Team",
                desc: (<>Technical SEO, content strategy, and link building are covered in one engagement. You do not need three separate agencies or a developer to action our recommendations.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="10" r="5"/><circle cx="21" cy="10" r="5"/><path d="M3 28c0-5 3.6-8 8-8M29 28c0-5-3.6-8-8-8M16 28c0-5.5-2.5-8-5-8"/></svg>),
              },
              {
                title: "No Generic Playbooks",
                desc: (<>Every keyword map, content plan, and link strategy starts from your store&apos;s specific data: current rankings, competitor gaps, and where your buyers are in the search funnel.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="3" width="20" height="26" rx="2"/><path d="M11 10h10M11 15h10M11 20h6"/></svg>),
              },
              {
                title: "You Own Everything We Build",
                desc: (<>Every piece of content we write, every technical fix we implement, every link we earn stays on your store. If we stop working together, you keep the full SEO equity we built.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14V10a6 6 0 0 1 12 0v4"/><rect x="6" y="14" width="20" height="14" rx="3"/><circle cx="16" cy="21" r="2" fill="currentColor" stroke="none"/></svg>),
              },
              {
                title: "Flat-Rate Monthly Retainers",
                desc: (<>Monthly retainers with no hidden fees, no lock-in, and a 30-day notice period. You know exactly what you pay and what we deliver. <span className="sse-why-hl">No surprises, no inflated invoices.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="24" height="22" rx="3"/><path d="M4 12h24"/><path d="M10 3v6M22 3v6"/><path d="M11 20h10M16 17v6" strokeWidth="1.4"/></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="sse-why-card">
                <span className="sse-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="sse-why-card-title">{card.title}</h3>
                <p className="sse-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="sse-why-closing">
            Every Shopify SEO engagement starts with a full technical audit. We fix what&apos;s broken first, then build the organic strategy on a clean foundation.
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
          .sse-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .sse-why-br-lg { display: inline; } .sse-why-br-md { display: none; }
          .sse-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .sse-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .sse-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; font-family: 'Poppins', sans-serif; font-size: 16px; transition: border-color 0.25s ease, transform 0.25s ease; }
          .sse-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .sse-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .sse-why-icon svg { stroke: url(#sseWhyGradient); color: #C8F57A; }
          .sse-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .sse-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .sse-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .sse-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1202px; }
          @media (max-width: 1024px) { .std-why.sse-why-section { padding: 53px 20px !important; } .sse-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .sse-why-br-lg { display: none !important; } .sse-why-br-md { display: inline !important; } .sse-why-desc { font-size: 16px !important; line-height: 26px !important; margin-bottom: 16px !important; max-width: 100% !important; } .sse-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .sse-why-card { padding: 24px !important; } .sse-why-icon { margin-bottom: 6px !important; } .sse-why-card-title { font-size: 19px !important; line-height: 26px !important; } .sse-why-card-desc { font-size: 14px !important; line-height: 22px !important; } .sse-why-closing { font-size: 16px !important; line-height: 26px !important; margin-bottom: 24px !important; } }
          @media (max-width: 768px) { .sse-why-grid { margin-bottom: 16px !important; } .sse-why-closing { margin-bottom: 16px !important; } }
          @media (max-width: 640px) { .std-why.sse-why-section { padding: 20px 18px !important; } .sse-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .sse-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .sse-why-desc { font-size: 15px !important; line-height: 24px !important; margin-bottom: 10px !important; } .sse-why-br-md { display: none !important; } .sse-why-card { padding: 22px 20px !important; } .sse-why-icon { width: 48px; height: 48px; margin-bottom: 10px !important; } .sse-why-card-title { margin-bottom: 10px !important; } .sse-why-closing { margin-bottom: 10px !important; } }
        ` }} />

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="sseWhyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
      <section style={{ background: C_CREAM, padding: "40px 20px" }} aria-label="Shopify SEO case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Our Work
          </h2>

          <div className="sse-cs-grid">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`sse-cs-card${i === 3 ? " sse-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} alt={`${cs.brand} Shopify SEO case study`} fill className="sse-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
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
          .sse-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .sse-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .sse-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .sse-cs-card-img { transition: transform 0.4s ease; }
          .sse-cs-card:hover .sse-cs-card-img { transform: scale(1.03); }
          .sse-cs-card-4th { display: none !important; }
          @media (max-width: 768px) { .sse-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .sse-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .sse-cs-grid { grid-template-columns: 1fr; } .sse-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── 10. FAQ (WHITE) ── */}
      <section
        className="sse-faq-section"
        style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions about Shopify SEO"
      >
        <div className="sse-faq__inner mx-auto" style={{ maxWidth: "1100px" }}>
          <h2 className="sse-faq__title">Shopify SEO Agency FAQs</h2>

          <SseFaqAccordion faqs={FAQS} />
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

        <style dangerouslySetInnerHTML={{ __html: `
          .sse-faq__inner { padding: 40px 15px; }
          .sse-faq__title { color: #000000; font-family: 'Poppins', sans-serif; font-size: 32px; font-weight: 700; line-height: 1.2; text-align: center; margin: 0 0 32px; }
          .sse-faq__list { list-style: none; margin: 0; padding: 0; border-top: 1px solid #E5E7EB; }
          .sse-faq__item { border-bottom: 1px solid #E5E7EB; }
          .sse-faq__q { color: #000000; font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px; line-height: 1.4; flex: 1; }
          .sse-faq__chev { display: inline-flex; align-items: center; justify-content: center; color: #000000; flex-shrink: 0; }
          .sse-faq__a-text { margin: 0 0 22px; color: #334155; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 1.7; }
          @media (min-width: 1024px) { .sse-faq__inner { padding: 72px 20px; } .sse-faq__title { font-size: 44px; margin-bottom: 40px; } .sse-faq__q { font-size: 17px; } .sse-faq__a-text { font-size: 16px; } }
        ` }} />
      </section>

      {/* ── Page CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Hero image ── */
        .sse-hero-img-wrap { display: flex; align-items: center; justify-content: center; }
        .sse-hero-img { width: 100%; height: auto; border-radius: 16px; display: block; box-shadow: 0 24px 64px rgba(0,0,0,0.45); }
        @media (max-width: 1023px) { .sse-hero-img-wrap { margin-top: 8px; } }
        @media (max-width: 640px) { .sse-hero-img { border-radius: 10px; } }

        /* ── Trust bar ── */
        .std-trust-track { display: flex; align-items: center; gap: 80px; width: max-content; animation: sseTrustScroll 32s linear infinite; }
        .std-trust-carousel:hover .std-trust-track { animation-play-state: paused; }
        .std-trust-slide { flex: 0 0 auto; display: flex; align-items: center; height: 80px; }
        .std-trust-logo { height: 56px; width: auto; max-width: 180px; object-fit: contain; opacity: .7; filter: grayscale(1); transition: opacity .25s ease, filter .25s ease; }
        .std-trust-slide:hover .std-trust-logo { opacity: 1; filter: grayscale(0); }
        @keyframes sseTrustScroll { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }

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
