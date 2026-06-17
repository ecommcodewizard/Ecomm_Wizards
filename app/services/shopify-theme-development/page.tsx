import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SolutionsAccordion from "./SolutionsAccordion";
import SsdFaqAccordion from "./SsdFaqAccordion";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import ShopifyDesignSection from "@/components/sections/ShopifyDesignSection";

const META_DESCRIPTION =
  "Shopify theme development agency building custom Liquid themes on Shopify 2.0. Fast, mobile-first, and built to convert. 500+ themes built.";
const CANONICAL_URL = "https://ecommwizards.com/services/shopify-theme-development";

export const metadata: Metadata = {
  title: { absolute: "Shopify Theme Development Agency | Custom Liquid Themes" },
  description: META_DESCRIPTION,
  keywords: [
    "shopify theme development",
    "custom shopify theme",
    "shopify theme development agency",
    "shopify liquid theme",
    "shopify 2.0 theme development",
    "custom shopify theme development",
    "shopify theme developer",
    "shopify theme redesign",
  ],
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    siteName: "Ecomm Wizards",
    title: "Shopify Theme Development Agency | Custom Liquid Themes",
    description: META_DESCRIPTION,
    images: [{ url: "/images/build-hero-4-1.webp", alt: "shopify theme development by Ecomm Wizards" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Theme Development Agency | Custom Liquid Themes",
    description: META_DESCRIPTION,
    images: ["/images/build-hero-4-1.webp"],
  },
};

/* ── Design tokens ── */
const C_DARK  = "#000000";
const C_TEXT  = "#334155";
const C_CREAM = "#F7F7F7";
const C_WHITE = "#FFFFFF";

/* ── Case study slides ── */
const CASE_STUDY_SLIDES: CaseStudySlide[] = [
  {
    key: "eby",
    image: "/images/Frame_1000004320.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/klaviyo.svg", "/images/yotpo.svg"],
    headline: (<>An elegant <strong>custom Shopify theme</strong> designed and built for <strong>EBY</strong> by <strong>Sofia Vergara</strong></>),
    quote: (<>&ldquo;Working with EW was a truly <strong>top-notch experience</strong>. From start to finish, they made sure everything ran smoothly and professionally. We couldn&apos;t be happier!&rdquo;</>),
    avatar: "/images/eby_dce31a54-eb36-409c-a8d7-e22fd8297de3_medium.webp",
    name: "EBY by Sofia Vergara",
    role: "Marketing Manager",
  },
  {
    key: "harvard",
    image: "/images/harvard-2_b0d9924a-412f-449b-94c3-0806b1d672ba.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/gorgias.svg"],
    headline: (<>A sophisticated <strong>Shopify theme</strong> designed and built for <strong>Harvard University</strong></>),
    quote: (<>&ldquo;Our experience with EW was excellent, characterized by an <strong>efficient workflow</strong> and <strong>professional execution</strong>; we couldn&apos;t be more delighted&rdquo;</>),
    avatar: "/images/harvardperson_medium.webp",
    name: "Daniyal S.",
    role: "Harvard University",
  },
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (<>A high-performance <strong>Shopify theme</strong> developed &amp; maintained for <strong>Bark</strong></>),
    quote: (<>&ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong> made Ecomm Wizards a fantastic partner.&rdquo;</>),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
];

/* ── Stats ── */
const STATS = [
  { number: "500+",  label: "Themes Built" },
  { number: "90+",   label: "Lighthouse Score" },
  { number: "35%",   label: "Avg. Conv. Lift" },
  { number: "4.9★",  label: "Client Rating" },
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

/* ── Solutions accordion ── */
const SOLUTIONS = [
  {
    title: "Purpose-Built for Your Brand",
    body: "A theme shaped around your products and customers, giving your store a clearer path from browsing to purchase.",
    open: true,
  },
  {
    title: "Theme Redesign and Upgrades",
    body: "We rebuild outdated layouts into modern, faster, and cleaner structures. Your store becomes easier to navigate and performs better across all devices.",
  },
  {
    title: "UX and UI Improvements",
    body: "We refine page layouts, information order, and interactive elements so customers move through the store with less friction and more confidence.",
  },
  {
    title: "Performance and Speed Optimization",
    body: "We streamline code, reduce bloat, optimize media, and improve load times to support stronger engagement and higher conversion.",
  },
  {
    title: "Conversion-Focused Page Structures",
    body: "We organize home, collection, and product pages around buyer behavior, helping visitors discover products quickly and complete purchases with fewer barriers.",
  },
  {
    title: "Flexible Sections and Components",
    body: "We create modular sections and reusable blocks, allowing your team to update content easily while keeping the store consistent.",
  },
  {
    title: "App-Free Feature Development",
    body: "We replace unnecessary apps with native theme features when possible, improving speed, stability, and long-term maintainability.",
  },
  {
    title: "Shopify Plus Enhancements",
    body: "For high-volume brands, we prepare themes to support advanced features, scalable merchandising, and a smoother enterprise-level experience.",
  },
];

/* ── Bespoke vs Template ── */
const CUSTOM_PROS = [
  "Built around your exact products and catalog structure",
  "No third-party app bloat. Features built into the theme.",
  "90+ PageSpeed is the target on every build, not a bonus",
  "You own the code. No licensing, no lock-in.",
  "Shopify 2.0 sections your team manages without a developer",
  "Scales cleanly as your catalog, traffic, and team grow",
];
const TEMPLATE_CONS = [
  { text: "Generic layout not designed for your products",             warn: false },
  { text: "Core features depend on third-party apps",                 warn: false },
  { text: "Slow by default. Unused scripts, heavy assets.",           warn: false },
  { text: "You work around the developer's decisions, not your own",  warn: false },
  { text: "Customisation breaks the moment you go off-script",        warn: true  },
  { text: "Most stores need a full rebuild within 12-18 months",      warn: true  },
];

/* ── Process steps ── */
const PROCESS = [
  {
    num: "01",
    title: "Discovery and Planning",
    body: "We review your goals, product range, and customer flow. This helps us define the structure your theme needs and establish a clear project path.",
  },
  {
    num: "02",
    title: "UX Architecture and Layout Design",
    body: "We map out page layouts, section order, and functional elements. The aim is to create a smooth, intuitive experience that supports how customers browse and buy.",
  },
  {
    num: "03",
    title: "Theme Development",
    body: "Using Shopify 2.0 standards, we build a fast, stable theme with clean Liquid, responsive components, and flexible sections your team can manage easily.",
  },
  {
    num: "04",
    title: "Testing and Performance Review",
    body: "We test the theme across major devices and browsers, checking speed, layout behavior, and functional accuracy to ensure everything works as expected.",
  },
  {
    num: "05",
    title: "Launch and Support",
    body: "Once the theme goes live, we monitor performance, resolve feedback, and help your team settle into the new structure with confidence.",
  },
];

/* ── Why choose us ── */
const BENEFITS = [
  {
    title: "Responsive Across All Devices",
    body: "We build themes that adapt smoothly to any screen size, giving customers a consistent shopping experience on desktops, tablets, and mobile devices.",
    stat: "Every screen, every time",
  },
  {
    title: "Mobile-First Structure",
    body: "We design with mobile behavior in mind, ensuring fast loading, clean layouts, and improved conversion for on-the-go shoppers.",
    stat: "68% of Shopify traffic is mobile",
  },
  {
    title: "SEO-Ready Foundation",
    body: "Your theme is developed with structured data, clean code, and search-friendly architecture to support better visibility and stronger organic performance.",
    stat: "Structured data built in from day one",
  },
  {
    title: "Brand-Aligned Design",
    body: "We shape layouts, typography, and interactions around your brand identity, giving your store a more distinctive and recognizable presence.",
    stat: "Unique to your brand. No templates.",
  },
  {
    title: "Fast Loading Experience",
    body: "We optimize assets, reduce unnecessary scripts, and streamline layouts to improve load time and create a smoother browsing flow for your customers.",
    stat: "90+ Lighthouse score target",
  },
  {
    title: "Clear and Simple Navigation",
    body: "We organize menus, categories, and page paths to help customers find what they need quickly, supporting better engagement and easier purchasing.",
    stat: "Fewer clicks from landing to checkout",
  },
];

/* ── Reviews ── */
const REVIEWS = [
  {
    quote:
      "We've Increased Our Revenue By 35-40% By Working With Ecomm Wizards. They can do things with Shopify that even Shopify thinks are impossible.",
    name: "Verified Client",
    role: "Ecommerce Brand",
    metric: "+38% Revenue",
  },
  {
    quote:
      "Ecomm Wizards led a full web refresh for our brand. Honestly, one of the most technically talented teams I've worked with across the board.",
    name: "Andrea Maack",
    role: "Founder, Andrea Maack",
    metric: "+22x Revenue per User",
  },
  {
    quote:
      "After 4 Months, We've Got A 49% Increase In Our Sales. I'd Never Go Back To Not Working with Ecomm Wizards.",
    name: "Jenny Tangjerd",
    role: "Founder, Blue Ruby",
    metric: "+49% Sales",
  },
];

/* ── Case studies ── */
const CASE_STUDIES = [
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
  {
    brand: "Everlast",
    metric: "+152%",
    metricLabel: "Conversion Rate",
    tags: ["Shopify Plus", "Theme Redesign"],
    industry: "Sports & Fitness",
    image: "/images/Case studies/Everlast-banner.webp",
    video: "/images/Case%20studies/Everlast%20video.mp4",
    href: "/case-studies/everlast-shopify-plus-sports-redesign",
    description: "A premium Shopify Plus theme rebuild for Everlast, iconic boxing brand chosen by champions worldwide.",
  },
  {
    brand: "111SKIN",
    metric: "+46%",
    metricLabel: "Conversion Rate",
    tags: ["Theme Development", "Shopify CRO"],
    industry: "Cosmetics & Beauty",
    image: "/images/Case studies/111skin hero section.png",
    video: "/images/Case%20studies/111skin%20video.mp4",
    href: "/case-studies/111skin-shopify-cro-redesign",
    description: "A conversion-focused Shopify theme redesign for 111SKIN, luxury skincare brand trusted by celebrities.",
  },
  {
    brand: "Feetures",
    metric: "+74%",
    metricLabel: "Conversion Rate",
    tags: ["Theme Development", "Shopify"],
    industry: "Sports & Fitness",
    image: "/images/Case studies/Feetures hero section.png",
    video: "/images/Case%20studies/Feetures%20video.mp4",
    href: "/case-studies/feetures-shopify-theme-development",
    description: "A high-performance custom Shopify theme built for Feetures, the premium performance sock brand loved by athletes.",
  },
];

/* ── Post-launch support ── */
const POST_LAUNCH = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Monthly Maintenance",
    items: ["Theme updates & Shopify compatibility", "Speed checks & asset optimisation", "App conflict monitoring & resolution"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Growth & CRO Reviews",
    items: ["Monthly conversion rate analysis", "Heatmap & session recording reviews", "A/B test planning & implementation"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Priority Bug Fixes",
    items: ["24-hour response guarantee", "Same-day critical issue resolution", "Dedicated Slack channel access"],
  },
];

/* ── Breadcrumb schema ── */
const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
    { "@type": "ListItem", position: 3, name: "Shopify Theme Development", item: "https://ecommwizards.com/services/shopify-theme-development" },
  ],
};

/* ── FAQ ── */
const FAQS = [
  {
    q: "How long does custom Shopify theme development take?",
    a: "Most builds complete in 3–6 weeks. Targeted refinements and smaller page projects take 2–3 weeks. Full custom Shopify theme builds with Shopify Plus integrations or complex functionality take 4–8 weeks. Every project starts with a fixed timeline you approve before we begin.",
  },
  {
    q: "How much do Shopify theme development services cost?",
    a: "Cost depends on scope: page count, custom features, and whether it is a new build or a redesign. A targeted theme redesign or performance upgrade starts from £3,000. A fully custom Shopify theme development build starts from £8,000. Complex builds with Shopify Plus integrations or multiple custom templates start from £15,000. We work on fixed-price quotes. Send us your requirements and we will return a detailed estimate within 24 hours.",
  },
  {
    q: "Can you improve my existing Shopify theme instead of rebuilding it?",
    a: "Yes, and often it's the smarter call. We audit your current theme and identify what's holding it back: slow load times, structural issues, UX problems. Then we apply targeted fixes. A full rebuild isn't always necessary to see a real improvement in performance and conversion.",
  },
  {
    q: "Do your Shopify theme developers build on Shopify 2.0?",
    a: "Yes. Every theme we build uses Shopify 2.0 architecture: sections, blocks, and JSON templates. Your team can update content and adjust layouts from the customizer without touching code.",
  },
  {
    q: "Will a new Shopify theme damage my SEO or rankings?",
    a: "No. We carry over your metadata, URL structure, and redirect logic as part of every build. Clean code and faster load times typically push rankings up, not down.",
  },
  {
    q: "What is the difference between a custom Shopify theme and a pre-built theme?",
    a: "A pre-built theme is designed for every store, which means it fits none of them well. A custom Shopify theme is built around your specific products, catalog structure, and how your customers browse and buy. You get sections your team controls, no unused code, and a layout built for your conversion goals, not someone else's design decisions.",
  },
  {
    q: "How do I choose a Shopify theme development agency?",
    a: "Look for an agency with a portfolio of live stores, real client results you can verify, and proven Shopify 2.0 expertise. Ask how they handle QA, what their process looks like from brief to launch, and whether they offer post-launch support. Avoid agencies that show mockups but no live results. Ask for Lighthouse scores and conversion data from previous builds.",
  },
];

/* ── Shared SVGs ── */
const Arrow = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
    <path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDown = () => (
  <svg className="std-acc-icon" viewBox="0 0 32 32" width="18" height="18" aria-hidden>
    <path d="M31.6 8.5c-.6-.6-1.5-.6-2.2-.1L16 21.2 2.6 8.4c-.6-.6-1.6-.5-2.2.1-.6.6-.5 1.6.1 2.2l14.5 13.7c.3.3.7.4 1 .4s.8-.1 1-.4l14.5-13.7c.6-.6.7-1.6.1-2.2z" fill="currentColor" />
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
      {/* ── 1. Hero ── */}
      <section className="std-hero" style={{ background: C_DARK }} aria-label="Shopify Theme Development hero">
        <div
          className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div>
            <span className="std-badge">Shopify Theme Development Agency</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "54px", lineHeight: 1.15, margin: "20px 0 0" }}>
              Shopify Theme Development{" "}
              <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Services That Convert
              </span>
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              We build custom Shopify themes for ecommerce brands that need more than a pre-built template. Every build runs on Shopify 2.0: clean Liquid, modular sections, and mobile-first layouts that load fast and convert. Whether you are launching new or overhauling what you have, the theme is built around your products, your customers, and how they buy.
            </p>
            <div className="std-hero-stats">
              {[
                { number: "8+",     label: "Years Experience" },
                { number: "700+",   label: "Stores Built" },
                { number: "$900M+", label: "Revenue Generated" },
                { number: "28.5%",  label: "Avg Conversion Lift" },
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
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>

          <div className="std-hero-img">
            <Image
              src="/images/build-hero-4-1.webp"
              alt="Shopify theme development: clean, modern storefront built for performance"
              width={700}
              height={500}
              priority
              className="block h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* ── 3. Trusted By ── */}
      <section className="std-trust" style={{ background: C_WHITE }} aria-label="Brands that trust Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "52px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: C_DARK, fontSize: 32, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>
            Trusted by Leading Brands
          </h2>
          <p className="text-center mt-3" style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", margin: "12px 0 0" }}>
            From DTC startups to global names. Our Shopify theme developers have built for the best.
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

      {/* ── 4. Solutions Accordion ── */}
      <section className="std-solutions" style={{ background: "#FBF7ED" }} aria-label="Shopify theme development solutions">
        <div
          className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label" style={{ color: C_TEXT }}>What We Offer</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>
              Shopify Theme Development Services We Offer
            </h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>
              From fully custom Shopify theme development to targeted redesigns and performance upgrades, we cover every aspect of theme work your store needs to stay fast, flexible, and built to sell.
            </p>
            <Link href="/book-shopify-consultation" className="std-cta-sol mt-8">
              Book a Call
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <SolutionsAccordion />
        </div>
      </section>

      {/* ── 5. Bespoke vs Template ── */}
      <section className="std-compare" style={{ background: "#000000", padding: "0 20px" }} aria-label="Custom theme vs pre-built template">
        <div className="mx-auto" style={{ maxWidth: 1320, padding: "60px 0" }}>

          {/* Heading */}
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4.1vw, 42px)", fontWeight: 700, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Custom Shopify Theme vs{" "}
            <span style={{ background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Pre-Built Template
            </span>
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>
            Most stores start with a template and outgrow it faster than expected. Here&apos;s what separates a custom Shopify theme from an off-the-shelf one.
          </p>

          {/* Two cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 20, marginTop: 10 }}>

            {/* Custom Theme card */}
            <div className="std-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="std-compare-badge" style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#3DC77A", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(61,199,122,0.3)" }}>
                ✓ Custom Theme Development
              </span>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {CUSTOM_PROS.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 16, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2, color: "#3DC77A" }}><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pre-Built Template card */}
            <div className="std-compare-card" style={{ background: "#121212", borderRadius: 16, overflow: "hidden", padding: 30, marginTop: 10 }}>
              <span className="std-compare-badge" style={{ display: "inline-block", background: "rgba(239,68,68,0.12)", color: "#f87171", fontFamily: "Poppins, sans-serif", fontSize: 18, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 20, border: "1px solid rgba(239,68,68,0.25)" }}>
                ✕ Pre-Built Template
              </span>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                {TEMPLATE_CONS.map((item) => (
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
        </div>
      </section>

      {/* ── 6. Process ── */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label="Our Shopify theme development process">
        <div
          className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] max-sm:!h-auto md:max-lg:py-[20px] md:max-lg:!h-auto lg:max-xl:py-[30px] lg:max-xl:px-[40px]"
          style={{ maxWidth: "1320px", margin: "0 auto", background: "#FBF7ED", borderRadius: "28px", height: "680px", overflow: "hidden", boxSizing: "border-box" }}
        >
          <h2
            className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}
          >
            How We Handle Your Shopify Theme Development
          </h2>

          <p
            className="text-[16px] max-sm:text-[14px]"
            style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}
          >
            A clear, structured process from brief to launch and beyond.
            <br className="hidden sm:block lg:hidden" />{" "}
            You know exactly what is happening at every stage.
          </p>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-[20px] md:max-lg:mt-[16px]">
            {[
              { step: "01.", title: "Discovery & Brief", desc: "We learn your store, your customers, and your goals. Then we define the exact theme structure that will support them." },
              { step: "02.", title: "UX & Design", desc: "Mobile-first layouts built around buyer behaviour. We design for conversion before writing a single line of Liquid." },
              { step: "03.", title: "Theme Development", desc: "Clean Liquid built to Shopify 2.0 standards. Fast, modular, documented, and ready for your team to manage." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]" style={{ background: "#FFFFFF", borderRadius: "16px", height: "100%", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 2 cards centred */}
          <div
            className="ssd-process-row2 grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[20px]"
            style={{ marginLeft: "auto", marginRight: "auto", width: "100%" }}
          >
            {[
              { step: "04.", title: "QA & Launch", desc: "Full QA across devices, browsers, and real traffic conditions. Then a clean, zero-downtime launch." },
              { step: "05.", title: "Post-Launch Support", desc: "We stay on after launch. We monitor performance, fix issues fast, and refine as your store grows." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]" style={{ background: "#FFFFFF", borderRadius: "16px", height: "100%", boxSizing: "border-box" }}>
                <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{step}</p>
                <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Why Choose Us ── */}
      <section
        className="std-why ssd-why-section"
        style={{ background: "#000000", color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Why brands choose Ecomm Wizards for theme development"
      >
        <div className="ssd-why-inner mx-auto" style={{ maxWidth: "1320px" }}>

          <h2 className="ssd-why-heading">
            Why Brands Hire Ecomm Wizards{" "}<br className="std-why-br-lg" />as Their{" "}<br className="std-why-br-md" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Shopify Theme Development Agency
            </span>
          </h2>

          <p className="ssd-why-desc">
            We have built 500+ custom Shopify themes and helped clients generate over $900M in revenue. Here&apos;s what makes us<br className="std-why-desc-br" /> different from every other Shopify theme development company you will talk to:
          </p>

          <div className="ssd-why-grid">
            {[
              {
                title: "Built for Your Brand, Not a Template",
                desc: (<>We design every layout, section, and interaction for your products and customers. Our custom Shopify theme development consistently delivers <span className="ssd-why-hl">25%+ higher conversion rates</span> than off-the-shelf alternatives.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="9" x2="23" y2="23" /><line x1="23" y1="9" x2="9" y2="23" /><line x1="9" y1="9" x2="23" y2="9" /><line x1="9" y1="23" x2="23" y2="23" /><circle cx="9" cy="9" r="2.4" fill="currentColor" /><circle cx="23" cy="9" r="2.4" fill="currentColor" /><circle cx="9" cy="23" r="2.4" fill="currentColor" /><circle cx="23" cy="23" r="2.4" fill="currentColor" /><circle cx="16" cy="16" r="2.4" fill="currentColor" /></svg>),
              },
              {
                title: "Performance That Earns More",
                desc: (<>We optimise every asset, strip code bloat, and build mobile-first layouts targeting <span className="ssd-why-hl">90+ Lighthouse scores</span>. A faster Shopify theme ranks higher and converts better. That is not a coincidence.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="27" x2="5" y2="22" /><line x1="11" y1="27" x2="11" y2="18" /><line x1="17" y1="27" x2="17" y2="14" /><line x1="23" y1="27" x2="23" y2="9" /><polyline points="5,20 11,15 17,10 23,5" /><polyline points="19,5 23,5 23,9" /></svg>),
              },
              {
                title: "Conversion-Focused Page Structures",
                desc: (<>We structure product pages, collections, and homepages around how buyers actually behave. Our clients average a <span className="ssd-why-hl">35% conversion lift</span> after a custom Shopify theme build.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12 L11 5 H21 L27 12 L16 28 Z" /><line x1="5" y1="12" x2="27" y2="12" /><line x1="11" y1="5" x2="13" y2="12" /><line x1="21" y1="5" x2="19" y2="12" /><line x1="13" y1="12" x2="16" y2="28" /><line x1="19" y1="12" x2="16" y2="28" /></svg>),
              },
              {
                title: "Clean Shopify 2.0 Code You Own",
                desc: (<>We build on Shopify 2.0 with modular sections, no bloated app dependencies, and clean Liquid your team can manage without a developer. It scales as your catalog and traffic grow.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 3 v2.2M11 16.8 v2.2M3 11 h2.2M16.8 11 h2.2M5.4 5.4 l1.6 1.6M15 15 l1.6 1.6M16.6 5.4 l-1.6 1.6M7 15 l-1.6 1.6" /><circle cx="11" cy="11" r="5" /><circle cx="11" cy="11" r="1.8" /><path d="M22 13 v1.8M22 25.2 v1.8M14 20 h1.8M28.2 20 h1.8M16.6 14.6 l1.3 1.3M26 24 l1.3 1.3M27.4 14.6 l-1.3 1.3M18 24 l-1.3 1.3" /><circle cx="22" cy="20" r="4.5" /><circle cx="22" cy="20" r="1.5" /></svg>),
              },
              {
                title: "Support That Goes Beyond Launch",
                desc: (<>Our Shopify theme developers do not disappear after go-live. Speed monitoring, quick bug fixes, and ongoing refinement keep your theme performing. Clients average <span className="ssd-why-hl">52% faster load times</span> post-optimisation.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18v-3a11 11 0 0 1 22 0v3" /><path d="M5 18h4v8H7a2 2 0 0 1-2-2v-6z" /><path d="M27 18h-4v8h2a2 2 0 0 0 2-2v-6z" /><path d="M23 26v1a2 2 0 0 1-2 2h-4" /><circle cx="15" cy="29" r="1.4" /></svg>),
              },
              {
                title: "Proven Across 500+ Builds",
                desc: (<>$900M+ in client revenue. 500+ Shopify themes. From funded DTC startups to enterprise brands. Real results you can verify, not claims you have to take on faith.</>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="ssd-why-card">
                <span className="ssd-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="ssd-why-card-title">{card.title}</h3>
                <p className="ssd-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="ssd-why-closing">
            Every theme passes full QA before a single customer sees it. Shopify 2.0 standards, mobile-first, built to perform for years.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Call</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .ssd-why-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .std-why-br-lg { display: inline; } .std-why-br-md { display: none; } .std-why-desc-br { display: none; }
          .ssd-why-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .ssd-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .ssd-why-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; color: #334155; font-family: 'Poppins', sans-serif; font-size: 16px; transition: border-color 0.25s ease, transform 0.25s ease; }
          .ssd-why-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .ssd-why-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .ssd-why-icon svg { stroke: url(#stdOliveGradient); color: #C8F57A; }
          .ssd-why-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .ssd-why-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .ssd-why-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .ssd-why-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1202px; }
          .ssd-why-cta-wrap { display: flex; justify-content: center; }
          .ssd-why-cta { display: inline-flex; align-items: center; gap: 12px; padding: 16px 38px; background: #000000; color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 16px; line-height: 1; border: 2px solid #FFFFFF; border-radius: 999px; text-decoration: none; transition: background 0.3s ease, border-color 0.3s ease; }
          .ssd-why-cta-label { color: #FFFFFF; transition: color 0.3s ease; }
          .ssd-why-cta-arrow { color: #FFFFFF; transition: color 0.3s ease; }
          .ssd-why-cta:hover, .ssd-why-cta:focus-visible { outline: none; background: #FFFFFF; border-color: #FFFFFF; }
          .ssd-why-cta:hover .ssd-why-cta-label, .ssd-why-cta:focus-visible .ssd-why-cta-label { background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .ssd-why-cta:hover .ssd-why-cta-arrow, .ssd-why-cta:focus-visible .ssd-why-cta-arrow { color: #2A9555; }
          @media (max-width: 1024px) { .std-why.ssd-why-section { padding: 53px 20px !important; } .ssd-why-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .std-why-br-lg { display: none !important; } .std-why-br-md { display: inline !important; } .std-why-desc-br { display: inline !important; } .ssd-why-desc { font-size: 16px !important; line-height: 26px !important; margin-bottom: 16px !important; max-width: 100% !important; text-align: center !important; } .ssd-why-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .ssd-why-card { padding: 24px !important; min-height: 0 !important; } .ssd-why-icon { margin-bottom: 6px !important; } .ssd-why-card-title { font-size: 19px !important; line-height: 26px !important; } .ssd-why-card-desc { font-size: 14px !important; line-height: 22px !important; } .ssd-why-closing { font-size: 16px !important; line-height: 26px !important; margin-bottom: 24px !important; } .ssd-why-cta { padding: 14px 32px !important; font-size: 14px !important; } }
          @media (max-width: 768px) { .ssd-why-grid { margin-bottom: 16px !important; } .ssd-why-closing { margin-bottom: 16px !important; } .std-why-desc-br { display: none !important; } }
          @media (max-width: 640px) { .std-why.ssd-why-section { padding: 40px 0 !important; } .ssd-why-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .ssd-why-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .ssd-why-desc { font-size: 15px !important; line-height: 24px !important; margin-bottom: 10px !important; } .std-why-br-md { display: none !important; } .ssd-why-card { padding: 22px 20px !important; } .ssd-why-icon { width: 48px; height: 48px; margin-bottom: 10px !important; } .ssd-why-card-title { margin-bottom: 10px !important; } .ssd-why-closing { margin-bottom: 10px !important; } .ssd-why-cta { width: 100% !important; max-width: 320px; justify-content: center !important; } }
        ` }} />

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="stdOliveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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

      {/* ── 8. Proven Results ── */}
      <section
        className="ssd-results-section"
        style={{ background: "#FFFFFF", color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "30px 20px" }}
      >
        <div className="ssd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="ssd-results-heading">Real Results from Our Shopify Theme Development Work</h2>
          <p className="ssd-results-desc">
            Our custom Shopify theme development has driven up to 35% higher conversion rates and 52% faster load times, across 500+ builds for brands that needed more than a template could give them.
          </p>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .ssd-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:920px; }
          .ssd-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          .ssd-results-slider { position:relative;background:#FBF7ED;border-radius:18px;padding:0;overflow:hidden; }
          .ssd-results-slider-track { display:flex;will-change:transform; }
          .ssd-results-slide { display:grid;grid-template-columns:691px 1fr;gap:0;align-items:stretch;padding:0;box-sizing:border-box; }
          .ssd-results-slide-image { width:691px;height:573.67px;border-radius:0;overflow:hidden;background:#FBF7ED; }
          .ssd-results-slide-image img { width:100%;height:100%;object-fit:cover;display:block; }
          .ssd-results-slide-text { padding:30px 15px 30px 40px;color:rgba(0,0,0,0.75);font-family:'Poppins',sans-serif;font-size:16px;display:flex;flex-direction:column;justify-content:center; }
          .ssd-results-apps { display:flex;align-items:center;gap:16px;margin-bottom:24px; }
          .ssd-results-apps-label { color:#000;font-family:'Poppins',sans-serif;font-weight:600;font-size:14px; }
          .ssd-results-apps-icons { display:flex;align-items:center;gap:8px; }
          .ssd-results-app-chip { display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:#000; }
          .ssd-results-app-chip img { width:20px;height:20px;object-fit:contain;filter:brightness(0) invert(1); }
          .ssd-results-slide-headline { color:#000;font-family:'Poppins',sans-serif;font-size:27px;font-weight:500;line-height:36px;margin:0 0 28px;max-width:600px; }
          .ssd-results-slide-headline strong { font-weight:800; }
          .ssd-results-slide-link { display:inline-flex;align-items:center;gap:8px;color:#000;font-family:'Poppins',sans-serif;font-size:16px;text-decoration:none;margin:0 0 20px;transition:gap .25s ease; }
          .ssd-results-slide-link:hover { gap:12px; }
          .ssd-results-slide-link span { border-bottom:1px solid #000;padding-bottom:1px; }
          .ssd-results-quote-card { background:#fff;border-radius:12px;padding:20px;max-width:600px;margin-top:40px; }
          .ssd-results-quote-text { color:#000;font-family:'Poppins',sans-serif;font-size:15px;line-height:24px;margin:0 0 18px; }
          .ssd-results-quote-text strong { font-weight:700; }
          .ssd-results-quote-person { display:flex;align-items:center;gap:12px; }
          .ssd-results-quote-avatar { width:44px;height:44px;border-radius:50%;object-fit:cover;flex-shrink:0;background:#ddd; }
          .ssd-results-quote-name { color:#000;font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;line-height:22px; }
          .ssd-results-quote-role { color:rgba(0,0,0,.65);font-family:'Poppins',sans-serif;font-size:13px;line-height:20px; }
          .ssd-results-arrow { position:absolute;top:50%;transform:translateY(-50%);width:50px;height:50px;border-radius:50%;background:#1A1A1A;color:rgba(0,0,0,0.75);border:0;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:5;transition:transform .2s ease,background .2s ease; }
          .ssd-results-arrow:hover { background:#2A9555;transform:translateY(-50%) scale(1.05); }
          .ssd-results-arrow-prev { left:8px; }
          .ssd-results-arrow-next { right:8px; }
          .ssd-results-dots { position:absolute;left:0;right:0;bottom:14px;display:flex;justify-content:center;gap:8px;z-index:4; }
          .ssd-results-dot { width:8px;height:8px;border-radius:50%;background:rgba(0,0,0,.25);border:0;padding:0;cursor:pointer;transition:background .2s ease,transform .2s ease; }
          .ssd-results-dot.is-active { background:#000;transform:scale(1.2); }
          @media (min-width:1024px) and (max-width:1279px) {
            .ssd-results-slide { grid-template-columns:520px 1fr !important; }
            .ssd-results-slide-image { width:520px !important;height:432px !important; }
            .ssd-results-slide-text { padding:20px !important; }
            .ssd-results-heading { margin-bottom:12px !important; }
            .ssd-results-desc { margin-bottom:12px !important; }
            .ssd-results-apps { margin-bottom:12px !important; }
            .ssd-results-slide-headline { margin-bottom:12px !important; }
            .ssd-results-slide-link { margin-bottom:12px !important; }
            .ssd-results-quote-card { margin-top:12px !important; }
            .ssd-results-arrow { width:40px !important;height:40px !important;top:42% !important; }
            .ssd-results-arrow svg { width:14px !important;height:10px !important; }
          }
          @media (max-width:1023px) {
            .ssd-results-section { padding:44px 20px !important; }
            .ssd-results-heading { font-size:30px !important;line-height:40px !important;margin-bottom:18px !important; }
            .ssd-results-desc { font-size:16px !important;line-height:26px !important;margin-bottom:32px !important; }
            .ssd-results-slide { grid-template-columns:1fr !important;padding:24px 16px !important;gap:20px !important; }
            .ssd-results-slide-image { width:100% !important;height:auto !important;aspect-ratio:600/423.42 !important; }
            .ssd-results-slide-text { padding:0 !important; }
            .ssd-results-slide-headline { font-size:22px !important;line-height:30px !important; }
            .ssd-results-slide-link { font-size:16px !important; }
            .ssd-results-quote-text { font-size:14px !important;line-height:22px !important; }
            .ssd-results-arrow { width:36px !important;height:36px !important; }
          }
          @media (min-width:768px) and (max-width:1023px) {
            .ssd-results-section { padding:30px 20px !important; }
            .ssd-results-desc { margin-bottom:18px !important; }
            .ssd-results-slide { grid-template-columns:382px 1fr !important;padding:0 !important;gap:0 !important; }
            .ssd-results-slide-image { width:382px !important;height:317px !important; }
            .ssd-results-slide-text { padding:20px 20px 20px 24px !important;display:flex !important;flex-direction:column !important;justify-content:center !important; }
            .ssd-results-apps { margin-bottom:12px !important; }
            .ssd-results-slide-headline { font-size:22px !important;line-height:30px !important;margin-bottom:12px !important; }
            .ssd-results-slide-link { font-size:14px !important;margin-bottom:12px !important; }
            .ssd-results-quote-card { margin-top:12px !important;padding:14px !important; }
            .ssd-results-quote-text { font-size:13px !important;line-height:20px !important; }
            .ssd-results-arrow { width:36px !important;height:36px !important;top:43% !important; }
            .ssd-results-arrow svg { width:13px !important;height:9px !important; }
          }
          @media (max-width:640px) {
            .ssd-results-section { padding:20px 16px !important; }
            .ssd-results-heading { font-size:26px !important;line-height:34px !important; }
            .ssd-results-desc { font-size:15px !important;line-height:24px !important; }
            .ssd-results-slider { padding:0 !important; }
            .ssd-results-slide { grid-template-columns:1fr !important;padding:22px 14px !important;gap:24px !important; }
            .ssd-results-slide-image { width:100% !important;height:auto !important;aspect-ratio:600/423.42 !important; }
            .ssd-results-slide-text { padding:0 !important;display:flex !important;flex-direction:column !important;justify-content:flex-start !important; }
            .ssd-results-apps { margin-bottom:16px !important; }
            .ssd-results-slide-headline { font-size:19px !important;line-height:26px !important;margin-bottom:16px !important; }
            .ssd-results-slide-link { margin-bottom:16px !important; }
            .ssd-results-quote-card { padding:16px !important;margin-top:0 !important; }
            .ssd-results-arrow { display:none !important; }
            .ssd-results-app-chip { width:28px;height:28px; }
            .ssd-results-app-chip img { width:16px;height:16px; }
          }
        ` }} />
      </section>

      {/* ── 9. Theme Development Services ── */}
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Shopify Theme <strong style={{ fontWeight: 600 }}>Testing, Launch,</strong><br className="max-sm:hidden" />and Ongoing Optimization</>}
        wrapHeading={true}
        description="Before any custom Shopify theme goes live, we run full QA across devices, browsers, and real connection speeds. We check load behaviour, layout integrity, and the checkout flow until everything works as it should. Launch is zero-downtime. After go-live, we stay active: tracking performance, resolving issues fast, and refining the theme as your traffic and catalog grow."
        shortDescription="Full QA before launch, zero-downtime go-live, and active support after. Your Shopify theme performs on day one and improves from there."
        services={[
          {
            title: "Cross-Device & Browser QA",
            icon: (
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8L3 15L9 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 8L27 15L21 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 5L12.5 25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            ),
          },
          {
            title: "Zero-Downtime Launch",
            icon: (
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="26" height="17" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                <rect x="5" y="7" width="20" height="11" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M5 11H25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M7 9.5H13M7 13H17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M11 21H19M15 21V25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M9 25H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            ),
          },
          {
            title: "Post-Launch Performance Monitoring",
            icon: (
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="11" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M15 8v7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 4l2 3M22 4l-2 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            ),
          },
        ]}
        showCta={false}
        imageSrc="/images/build-hero-4-2.webp"
        imageAspectRatio="4/3"
        mdAutoHeight={true}
        paddingTop="20px"
        mobileYPadding="max-sm:!pt-[40px] max-sm:!pb-[10px]"
      />

      {/* ── 10. Modern Layouts + UX ── */}
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Modern Layouts and{" "}<strong style={{ fontWeight: 600 }}>UX Improvements</strong></>}
        wrapHeading={true}
        description="A well-built Shopify theme moves customers from landing to checkout without obstacles. We redesign page layouts, sharpen visual hierarchy, and improve navigation on both mobile and desktop. Every element is positioned to support product discovery, reduce friction, and make the path to purchase shorter. Fewer barriers at each step means more orders."
        shortDescription="We rebuild layouts and navigation so customers move from discovery to checkout with less friction and more confidence, on every screen."
        services={[
          {
            title: "Conversion-Focused Page Redesign",
            icon: (
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                <rect x="5" y="7" width="9" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M17 8h7M17 11h5M17 14h7M17 17h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M11 22H19M15 22V26" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                <path d="M9 26H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            ),
          },
          {
            title: "Mobile-First UX Optimisation",
            icon: (
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="2" width="14" height="26" rx="2.5" stroke="currentColor" strokeWidth="1.6"/>
                <line x1="13" y1="5.5" x2="17" y2="5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                <circle cx="15" cy="24.5" r="1.2" fill="currentColor"/>
                <rect x="11" y="9" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M11 16h8M11 19h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            ),
          },
          {
            title: "Navigation & Category Flow",
            icon: (
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="26" height="4" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                <rect x="2" y="13" width="12" height="13" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                <rect x="16" y="13" width="12" height="6" rx="1" stroke="currentColor" strokeWidth="1.4"/>
                <rect x="16" y="21" width="12" height="5" rx="1" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
            ),
          },
        ]}
        showCta={false}
        reverseLayout={true}
        imageSrc="/images/build-hero-4-3.webp"
        imageAspectRatio="4/3"
        mdAutoHeight={true}
        paddingTop="20px"
        mobileYPadding="max-sm:!pt-[10px] max-sm:!pb-[40px]"
      />

      {/* ── 11. Our Work ── */}
      <section style={{ background: C_WHITE, padding: "40px 20px" }} aria-label="Our work: case studies">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
            Our Work
          </h2>

          <div className="ssd-cs-grid">
            {CASE_STUDIES.map((cs, i) => (
              <Link key={cs.brand} href={cs.href} className={`ssd-cs-card${i === 3 ? " ssd-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: "#FBF7ED", borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                {/* Image */}
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {cs.video ? (
                    <video src={cs.video} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.image} alt={`${cs.brand} Shopify theme development case study`} fill className="ssd-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" priority={i === 0} />
                  )}
                  {/* Stat badge */}
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(255,255,255,0.97)", borderRadius: "9999px", padding: "5px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000", display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 400, color: "#000", whiteSpace: "nowrap" }}>{cs.metricLabel}</span>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", fontWeight: 700, color: "#000", whiteSpace: "nowrap" }}>{cs.metric}</span>
                  </div>
                  {/* Industry pill */}
                  <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.72)", borderRadius: "9999px", padding: "4px 12px" }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 500, color: "#fff", whiteSpace: "nowrap" }}>{cs.industry}</span>
                  </div>
                </div>
                {/* Body */}
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
          .ssd-cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .ssd-cs-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
          .ssd-cs-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.10); }
          .ssd-cs-card-img { transition: transform 0.4s ease; }
          .ssd-cs-card:hover .ssd-cs-card-img { transform: scale(1.03); }
          .ssd-cs-card-4th { display: none !important; }
          @media (max-width: 768px) { .ssd-cs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } .ssd-cs-card-4th { display: flex !important; } }
          @media (max-width: 540px) { .ssd-cs-grid { grid-template-columns: 1fr; } .ssd-cs-card-4th { display: none !important; } }
        ` }} />
      </section>

      {/* ── 12. Post-Launch Support ── */}
      <section
        className="ssd-pl-section"
        style={{ background: "#000000", color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }}
        aria-label="Post-launch support and ongoing optimisation"
      >
        <div className="ssd-pl-inner mx-auto" style={{ maxWidth: "1320px" }}>

          <h2 className="ssd-pl-heading">
            What&apos;s Included in Our{" "}<br className="ssd-pl-br-lg" />Post-Launch{" "}<br className="ssd-pl-br-md" />
            <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Theme Support
            </span>
          </h2>

          <p className="ssd-pl-desc">
            Your Shopify theme needs work after launch, not just before it. We monitor, maintain,<br className="ssd-pl-desc-br" /> and improve it month after month so it stays fast, stable, and ahead of problems.
          </p>

          <div className="ssd-pl-grid">
            {[
              {
                title: "Priority Bug Fixes",
                desc: (<>Any layout break, checkout error, or display bug that shows up after launch gets fixed fast. You get direct access to the Shopify theme developers who built your store. <span className="ssd-pl-hl">No ticket queues, no delays.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 8a4 4 0 0 0-8 0v1H8l-2 4h20l-2-4h-4V8z" /><rect x="10" y="13" width="12" height="12" rx="2" /><line x1="13" y1="18" x2="19" y2="18" /><line x1="16" y1="15" x2="16" y2="21" /></svg>),
              },
              {
                title: "Speed & Performance Monitoring",
                desc: (<>We monitor your Lighthouse scores and Core Web Vitals after every Shopify update and theme change. We catch performance drops before they hit <span className="ssd-pl-hl">your rankings or your revenue.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="18" r="10" /><path d="M16 18 L22 10" /><path d="M8 18 h2M22 18 h2M16 8 v2" /><circle cx="16" cy="18" r="1.5" fill="currentColor" /></svg>),
              },
              {
                title: "Monthly Maintenance & Updates",
                desc: (<>Shopify platform updates, app compatibility checks, theme patches, and code health reviews. Handled monthly so your store stays <span className="ssd-pl-hl">compatible, secure, and clean.</span></>),
                icon: (<svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="6" width="24" height="22" rx="3" /><line x1="4" y1="13" x2="28" y2="13" /><line x1="11" y1="3" x2="11" y2="9" /><line x1="21" y1="3" x2="21" y2="9" /><line x1="9" y1="19" x2="14" y2="19" /><line x1="9" y1="23" x2="20" y2="23" /></svg>),
              },
            ].map((card) => (
              <div key={card.title} className="ssd-pl-card">
                <span className="ssd-pl-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="ssd-pl-card-title">{card.title}</h3>
                <p className="ssd-pl-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="ssd-pl-closing">
            From launch day forward, we&apos;re watching, maintaining, and improving. Your Shopify theme keeps performing as your business scales.
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
              <Link
                href="/services/shopify-maintenance-and-support"
                className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]"
                style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}
              >
                <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Explore Ongoing Support</span>
                <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
              </Link>
            </span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .ssd-pl-heading { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 42px; font-weight: 700; line-height: 52px; text-align: center; margin: 0 auto 24px; max-width: 1320px; }
          .ssd-pl-br-lg { display: inline; } .ssd-pl-br-md { display: none; } .ssd-pl-desc-br { display: none; }
          .ssd-pl-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 0 auto 24px; max-width: 980px; }
          .ssd-pl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 0 0 30px; }
          .ssd-pl-card { position: relative; background: #0a0a0a; padding: 30px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; text-align: center; color: #334155; font-family: 'Poppins', sans-serif; font-size: 16px; transition: border-color 0.25s ease, transform 0.25s ease; }
          .ssd-pl-card::before { content: ""; position: absolute; inset: 0; border-radius: 16px; padding: 1px; background: linear-gradient(140deg, rgba(168,240,180,0.45) 0%, rgba(74,184,114,0.0) 35%, rgba(74,184,114,0.0) 65%, rgba(78,183,113,0.45) 100%); -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
          .ssd-pl-icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; margin-bottom: 10px; color: #4FB872; }
          .ssd-pl-icon svg { stroke: url(#ssdPlGradient); color: #C8F57A; }
          .ssd-pl-card-title { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 700; line-height: 30px; margin: 0 0 14px; }
          .ssd-pl-card-desc { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 24px; margin: 0; }
          .ssd-pl-hl { font-weight: 700; background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
          .ssd-pl-closing { color: #FFFFFF; font-family: 'Poppins', sans-serif; font-size: 18px; line-height: 28px; text-align: center; margin: 20px auto 20px; max-width: 1202px; }
          @media (max-width: 1024px) { .ssd-pl-section { padding: 53px 20px !important; } .ssd-pl-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 16px !important; } .ssd-pl-br-lg { display: none !important; } .ssd-pl-br-md { display: inline !important; } .ssd-pl-desc-br { display: inline !important; } .ssd-pl-desc { font-size: 16px !important; line-height: 26px !important; margin-bottom: 16px !important; max-width: 100% !important; text-align: center !important; } .ssd-pl-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; margin-bottom: 20px !important; } .ssd-pl-grid > *:nth-child(3) { grid-column: 1 / -1; max-width: calc(50% - 8px); margin-left: auto; margin-right: auto; width: 100%; } .ssd-pl-card { padding: 24px !important; min-height: 0 !important; } .ssd-pl-icon { margin-bottom: 6px !important; } .ssd-pl-card-title { font-size: 19px !important; line-height: 26px !important; } .ssd-pl-card-desc { font-size: 14px !important; line-height: 22px !important; } .ssd-pl-closing { font-size: 16px !important; line-height: 26px !important; margin-bottom: 24px !important; } }
          @media (max-width: 768px) { .ssd-pl-grid { margin-bottom: 16px !important; } .ssd-pl-closing { margin-bottom: 16px !important; } .ssd-pl-desc-br { display: none !important; } }
          @media (max-width: 640px) { .ssd-pl-section { padding: 40px 20px !important; } .ssd-pl-grid { grid-template-columns: 1fr !important; margin-bottom: 10px !important; } .ssd-pl-grid > *:nth-child(3) { grid-column: auto !important; max-width: 100% !important; margin-left: 0 !important; margin-right: 0 !important; } .ssd-pl-heading { font-size: 26px !important; line-height: 34px !important; margin-bottom: 10px !important; } .ssd-pl-desc { font-size: 15px !important; line-height: 24px !important; margin-bottom: 10px !important; } .ssd-pl-br-md { display: none !important; } .ssd-pl-card { padding: 22px 20px !important; } .ssd-pl-icon { width: 48px; height: 48px; margin-bottom: 10px !important; } .ssd-pl-card-title { margin-bottom: 10px !important; } .ssd-pl-closing { margin-bottom: 10px !important; } }
        ` }} />

        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <linearGradient id="ssdPlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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

      {/* ── 13. FAQ ── */}
      <section
        className="ssd-faq"
        style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
        aria-label="Frequently asked questions"
      >
        <div className="ssd-faq__inner mx-auto" style={{ maxWidth: "1100px" }}>
          <h2 className="ssd-faq__title">Frequently Asked Questions</h2>

          <SsdFaqAccordion faqs={FAQS} />
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
          .ssd-faq__inner { padding: 40px 15px; }
          .ssd-faq__title {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 32px;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
            margin: 0 0 32px;
          }
          .ssd-faq__list {
            list-style: none;
            margin: 0;
            padding: 0;
            border-top: 1px solid #E5E7EB;
          }
          .ssd-faq__item { border-bottom: 1px solid #E5E7EB; }
          .ssd-faq__q {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 1.4;
            flex: 1;
          }
          .ssd-faq__chev {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #000000;
            flex-shrink: 0;
          }
          .ssd-faq__a-text {
            margin: 0 0 22px;
            color: #334155;
            font-family: 'Poppins', sans-serif;
            font-size: 15px;
            line-height: 1.7;
          }
          @media (min-width: 1024px) {
            .ssd-faq__inner { padding: 72px 20px; }
            .ssd-faq__title { font-size: 44px; margin-bottom: 40px; }
            .ssd-faq__q { font-size: 17px; }
            .ssd-faq__a-text { font-size: 16px; }
          }
        ` }} />
      </section>


{/* ── Page CSS ── */}
      <style dangerouslySetInnerHTML={{ __html: `

        /* Badge */
        .std-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(97,206,112,0.12);
          border: 1px solid rgba(97,206,112,0.3);
          border-radius: 999px;
          color: #61ce70;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .04em;
          text-transform: uppercase;
        }

        /* Section label */
        .std-label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .06em;
          text-transform: uppercase;
          color: ${C_TEXT};
        }

        /* Hero inline stats */
        .std-hero-stats {
          display: flex; flex-wrap: wrap; gap: 0;
          margin-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.12);
          padding-top: 24px;
        }
        .std-hero-stat-item {
          display: flex; flex-direction: column; gap: 4px;
          padding: 0 28px 0 0;
          margin-right: 28px;
          border-right: 1px solid rgba(255,255,255,0.12);
        }
        .std-hero-stat-item:last-child { border-right: none; padding-right: 0; margin-right: 0; }
        .std-hero-stat-num {
          font-size: 28px; font-weight: 800; line-height: 1;
          background: var(--brand-gradient);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .std-hero-stat-label {
          font-size: 13px; font-weight: 500; color: #ffffff;
          letter-spacing: .02em;
        }

        @media (min-width: 1025px) and (max-width: 1307px) {
          .std-hero-stats { flex-wrap: nowrap !important; }
          .std-hero-stat-item { padding-right: 18px !important; margin-right: 18px !important; }
          .std-hero-stat-num { font-size: 24px !important; }
          .std-hero-stat-label { font-size: 12px !important; }
        }

        /* Hero CTA */
        .std-cta-hero {
          color: ${C_WHITE};
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 15px 30px;
          font-size: 15px;
          font-weight: 600;
          background:
            linear-gradient(#000, #000) padding-box,
            var(--brand-gradient) border-box;
          transition: background .3s ease, color .3s ease, transform .25s ease, box-shadow .25s ease;
          text-decoration: none;
        }
        .std-cta-hero:hover {
          color: #000;
          background:
            linear-gradient(${C_WHITE}, ${C_WHITE}) padding-box,
            var(--brand-gradient) border-box;
          transform: translateY(-1px);
          box-shadow: 0 10px 30px -10px rgba(97,206,112,.4);
        }
        .std-cta-hero:visited, .std-cta-hero:focus, .std-cta-hero:active { color: ${C_WHITE}; text-decoration: none; }
        .std-cta-hero:hover:focus, .std-cta-hero:hover:active { color: #000; }

        /* Solutions CTA — gradient border fades in on hover (matches homepage services section) */
        .std-cta-sol {
          position: relative;
          display: inline-flex; align-items: center; gap: 12px;
          background: #000000; color: #ffffff;
          font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 16px;
          border-radius: 50px; padding: 20px 45px;
          text-decoration: none; line-height: 1;
          transition: color .25s ease;
        }
        .std-cta-sol::before {
          content: '';
          position: absolute; inset: 0;
          border-radius: 50px; padding: 2px;
          background: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          opacity: 0; transition: opacity .25s ease;
          pointer-events: none;
        }
        .std-cta-sol:hover::before { opacity: 1; }
        .std-cta-sol:visited, .std-cta-sol:focus, .std-cta-sol:active { color: #ffffff; text-decoration: none; }

        /* Dark CTA */
        .std-cta-dark {
          color: ${C_WHITE};
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 15px 30px;
          font-size: 15px;
          font-weight: 600;
          background:
            linear-gradient(${C_DARK}, ${C_DARK}) padding-box,
            ${C_DARK} border-box;
          transition: background .3s ease, transform .25s ease, box-shadow .25s ease;
          text-decoration: none;
        }
        .std-cta-dark:hover {
          color: ${C_WHITE};
          background:
            linear-gradient(${C_DARK}, ${C_DARK}) padding-box,
            var(--brand-gradient) border-box;
          transform: translateY(-1px);
          box-shadow: 0 10px 28px -10px rgba(0,0,0,.45);
        }
        .std-cta-dark:visited, .std-cta-dark:focus, .std-cta-dark:active { color: ${C_WHITE}; text-decoration: none; }

        /* ── Stats strip ── */
        .std-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-left: 1px solid rgba(255,255,255,0.06);
        }
        .std-stat-item {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 36px 20px;
          border-right: 1px solid rgba(255,255,255,0.06);
          gap: 6px;
        }
        .std-stat-num {
          font-size: 40px; font-weight: 800; line-height: 1;
          background: var(--brand-gradient);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .std-stat-label {
          font-size: 13px; font-weight: 500; color: #ffffff;
          letter-spacing: .04em; text-align: center;
        }

        /* Trust logo carousel */
        .std-trust-track {
          display: flex; align-items: center; gap: 80px; width: max-content;
          animation: stdTrustScroll 32s linear infinite;
        }
        .std-trust-carousel:hover .std-trust-track { animation-play-state: paused; }
        .std-trust-slide { flex: 0 0 auto; display: flex; align-items: center; height: 80px; }
        .std-trust-logo {
          height: 56px; width: auto; max-width: 180px; object-fit: contain;
          opacity: .7; filter: grayscale(1); transition: opacity .25s ease, filter .25s ease;
        }
        .std-trust-slide:hover .std-trust-logo { opacity: 1; filter: grayscale(0); }
        @keyframes stdTrustScroll {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(-50%,0,0); }
        }

        /* Accordion (shared: solutions + FAQ) */
        .std-acc-item { border-top: 1px solid rgba(17,17,17,.14); }
        .std-acc-item:last-child { border-bottom: 1px solid rgba(17,17,17,.14); }
        .std-acc-item > summary {
          list-style: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          color: ${C_DARK}; font-size: 18px; font-weight: 700; line-height: 1.4;
          padding: 20px 0;
        }
        .std-acc-item > summary::-webkit-details-marker { display: none; }
        .std-acc-item > summary > span { flex: 1; }
        .std-acc-icon { flex: 0 0 18px; color: ${C_DARK}; transition: transform .3s ease; }
        .std-acc-item[open] > summary .std-acc-icon { transform: rotate(180deg); }
        .std-acc-icon--open { transform: rotate(180deg); }
        .std-acc-item > p { margin: 14px 0 6px; color: ${C_TEXT}; font-size: 16px; line-height: 28px; }

        /* ── Bespoke vs Template ── */
        .std-compare-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .std-compare-col {
          border-radius: 20px;
          overflow: hidden;
        }
        .std-compare-col--good { border: 1.5px solid rgba(97,206,112,.3); }
        .std-compare-col--bad  { border: 1.5px solid rgba(239,68,68,.18); }
        .std-compare-header {
          padding: 18px 28px;
        }
        .std-compare-col--good .std-compare-header { background: rgba(97,206,112,.07); }
        .std-compare-col--bad  .std-compare-header { background: rgba(239,68,68,.05); }
        .std-compare-tag {
          font-size: 14px; font-weight: 700; letter-spacing: .03em;
        }
        .std-compare-tag--good { color: #2a9555; }
        .std-compare-tag--bad  { color: #dc2626; }
        .std-compare-list {
          list-style: none; padding: 20px 28px 28px; margin: 0;
          display: flex; flex-direction: column; gap: 14px;
          background: ${C_WHITE};
        }
        .std-compare-list li {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 15px; line-height: 1.5; color: ${C_TEXT};
        }
        .std-compare-list li svg { flex-shrink: 0; margin-top: 2px; }

        /* Process Row 2 — centred on desktop, full-width at ≤1024px */
        .ssd-process-row2 { max-width: calc(66.667% - 7px); }
        @media (max-width: 1024px) { .ssd-process-row2 { max-width: 100% !important; } }

        /* Process grid — 3 cols → 2 → 1 */
        .std-process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .std-process-card {
          background: ${C_WHITE};
          border: 1px solid rgba(17,17,17,.08);
          border-radius: 16px;
          padding: 32px 28px;
          box-shadow: 0 2px 16px -8px rgba(0,0,0,.12);
          transition: box-shadow .25s ease, transform .25s ease;
        }
        .std-process-card:hover { box-shadow: 0 8px 32px -10px rgba(0,0,0,.2); transform: translateY(-2px); }
        .std-process-num {
          display: inline-block;
          font-size: 13px; font-weight: 700; letter-spacing: .08em;
          color: ${C_WHITE};
          background: var(--brand-gradient);
          border-radius: 999px;
          padding: 4px 14px;
        }

        /* Benefits grid — 3 cols → 2 → 1 */
        .std-benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .std-benefit-card {
          background: ${C_WHITE};
          border: 1px solid rgba(17,17,17,.08);
          border-radius: 16px;
          padding: 28px 24px;
          display: flex; flex-direction: column;
        }
        .std-benefit-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--brand-gradient);
        }
        .std-benefit-stat {
          display: inline-block;
          margin-top: auto;
          padding: 5px 12px;
          background: rgba(97,206,112,0.1);
          border: 1px solid rgba(97,206,112,0.2);
          border-radius: 999px;
          font-size: 12px; font-weight: 600; color: #2a9555;
          align-self: flex-start;
        }

        /* Guarantee bar */
        .std-guarantee {
          display: flex; align-items: center; gap: 16px; justify-content: center;
          background: ${C_WHITE};
          border: 1px solid rgba(97,206,112,.25);
          border-radius: 12px;
          padding: 20px 32px;
          max-width: 640px;
          margin: 0 auto;
        }

        /* Reviews grid */
        .std-reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .std-review-card {
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 16px;
          padding: 28px;
          display: flex; flex-direction: column;
        }
        .std-review-metric {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(97,206,112,0.12);
          border: 1px solid rgba(97,206,112,0.25);
          border-radius: 999px;
          font-size: 13px; font-weight: 700; color: #61ce70;
          align-self: flex-start;
        }
        .std-review-quote {
          color: rgba(255,255,255,.82);
          font-size: 15px;
          line-height: 26px;
          margin: 0 0 20px;
          flex: 1;
        }
        .std-review-meta { display: flex; flex-direction: column; gap: 3px; }
        .std-review-name { color: ${C_WHITE}; font-size: 15px; font-weight: 700; }
        .std-review-role { color: rgba(255,255,255,.45); font-size: 13px; }

        /* Split sections */
        .std-split-img, .std-split2-img { order: 0; }

        /* Case studies grid */
        .std-work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .std-work-card {
          display: flex; flex-direction: column;
          border: 1px solid rgba(17,17,17,.09);
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          transition: box-shadow .25s ease, transform .25s ease;
        }
        .std-work-card:hover { box-shadow: 0 12px 40px -12px rgba(0,0,0,.22); transform: translateY(-3px); }
        .std-work-img-wrap { overflow: hidden; aspect-ratio: 3/2; }
        .std-work-img { transition: transform .4s ease; height: 100% !important; object-fit: cover; }
        .std-work-card:hover .std-work-img { transform: scale(1.04); }
        .std-work-info { padding: 24px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
        .std-work-service { font-size: 12px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: ${C_TEXT}; }
        .std-work-brand { font-size: 20px; font-weight: 700; color: ${C_DARK}; margin: 4px 0; }
        .std-work-metric { display: flex; align-items: baseline; gap: 8px; margin: 4px 0; }
        .std-work-num { font-size: 28px; font-weight: 800; color: #61ce70; line-height: 1; }
        .std-work-sub { font-size: 14px; color: ${C_TEXT}; }
        .std-work-link {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 14px; font-weight: 600; color: ${C_DARK};
          margin-top: auto; padding-top: 12px;
        }

        /* ── Post-launch support ── */
        .std-postlaunch-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .std-postlaunch-card {
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 16px;
          padding: 32px 28px;
          transition: background .25s ease, border-color .25s ease;
        }
        .std-postlaunch-card:hover {
          background: rgba(255,255,255,.07);
          border-color: rgba(97,206,112,.25);
        }
        .std-postlaunch-icon {
          display: flex; align-items: center; justify-content: center;
          width: 52px; height: 52px; border-radius: 14px;
          background: rgba(97,206,112,0.1);
          color: #61ce70;
        }
        .std-postlaunch-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 10px;
        }
        .std-postlaunch-list li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 14px; line-height: 1.5; color: rgba(255,255,255,.65);
        }
        .std-postlaunch-list li svg { flex-shrink: 0; margin-top: 2px; }

        /* ── Final CTA checklist ── */
        .std-cta-checklist {
          list-style: none; padding: 0; margin: 28px auto 0;
          display: inline-flex; flex-direction: column; gap: 12px;
          text-align: left;
        }
        .std-cta-checklist li {
          display: flex; align-items: center; gap: 12px;
          font-size: 16px; font-weight: 500; color: rgba(255,255,255,.85);
        }
        .std-cta-checklist li svg { flex-shrink: 0; }

        /* Scarcity line */
        .std-scarcity {
          margin-top: 20px;
          font-size: 13px; font-weight: 600;
          color: #f59e0b;
          letter-spacing: .02em;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .std-hero-h1        { font-size: 40px !important; }
          .std-solutions h2   { font-size: 38px !important; }
          .std-solutions-grid { grid-template-columns: 1fr 1.1fr !important; gap: 40px !important; }
          .std-compare h2     { font-size: 42px !important; }
          .std-compare li     { font-size: 15px !important; gap: 8px !important; }
          .std-hero-inner     { padding: 60px 20px !important; }
          .std-hero-p         { margin-top: 16px !important; }
          .std-hero-stats     { flex-wrap: nowrap !important; margin-top: 16px !important; padding-top: 16px !important; }
          .std-trust          > div { padding: 40px 20px !important; }
          .std-hero-stat-item { padding-right: 16px !important; margin-right: 16px !important; }
          .std-hero-stat-num  { font-size: 22px !important; }
          .std-hero-stat-label { font-size: 12px !important; }
          .std-stats-grid     { grid-template-columns: repeat(2, 1fr) !important; }
          .std-process-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .std-benefits-grid  { grid-template-columns: repeat(2, 1fr) !important; }
          .std-reviews-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .std-work-grid      { grid-template-columns: repeat(2, 1fr) !important; }
          .std-postlaunch-grid{ grid-template-columns: repeat(2, 1fr) !important; }
          .std-compare-grid   { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 768px) {
          .std-solutions h2 { font-size: 36px !important; }
          .std-solutions-grid { gap: 24px !important; }
          .std-acc-item button { padding: 16px 0 !important; }
          .std-acc-item p { margin-bottom: 16px !important; }
          .std-compare h2         { font-size: 38px !important; }
          .std-compare p          { max-width: 480px !important; margin-left: auto !important; margin-right: auto !important; }
          .std-compare-badge      { font-size: 16px !important; }
          .std-compare li         { font-size: 14px !important; }
        }

        @media (max-width: 640px) {
          .std-hero        > div { padding: 56px 18px !important; }
          .std-stats       > div { padding: 0 0 !important; }
          .std-trust       > div { padding: 32px 18px 38px !important; }
          .std-solutions   > div { padding: 40px 18px !important; gap: 36px !important; }
          .std-solutions-grid { grid-template-columns: 1fr !important; }
          .std-solutions-left { position: static !important; }
          .std-solutions h2   { font-size: 32px !important; }
          .std-cta-sol        { margin-top: 16px !important; }
          .std-acc-item button span:first-child { font-size: 16px !important; }
          .std-acc-item p     { font-size: 15px !important; }
          .std-compare          { padding: 0 !important; }
          .std-compare     > div { padding: 40px 18px !important; }
          .std-compare-badge    { font-size: 13px !important; margin-bottom: 16px !important; }
          .std-compare li       { font-size: 14px !important; }
          .std-compare-card     { margin-top: 0 !important; }
          .std-process     > div { padding: 60px 18px !important; }
          .std-why         > div { padding: 20px 18px !important; }
          .std-reviews     > div { padding: 60px 18px !important; }
          .std-split       > div { padding: 60px 18px !important; gap: 36px !important; }
          .std-split2      > div { padding: 60px 18px !important; gap: 36px !important; }
          .std-work        > div { padding: 60px 18px !important; }
          .std-postlaunch  > div { padding: 60px 18px !important; }
          .std-faq         > div { padding: 60px 18px !important; }
          .std-final-cta   > div { padding: 70px 18px !important; }

          .std-hero-h1  { font-size: 28px !important; line-height: 1.22 !important; }
          .std-hero-p   { font-size: 14px !important; line-height: 24px !important; }
          .std-cta-hero, .std-cta-dark { padding: 13px 22px !important; font-size: 14px !important; }
          .std-hero-stats { gap: 0; margin-top: 24px; padding-top: 18px; }
          .std-hero-stat-item { padding-right: 16px; margin-right: 16px; }
          .std-hero-stat-num  { font-size: 22px !important; }
          .std-hero-stat-label { font-size: 11px !important; }

          .std-stat-num   { font-size: 30px !important; }
          .std-stat-item  { padding: 28px 16px !important; }

          .std-trust-h2 { font-size: 22px !important; }
          .std-trust-track { gap: 48px !important; }
          .std-trust-slide { height: 60px !important; }
          .std-trust-logo  { height: 44px !important; max-width: 140px !important; }

          .std-solutions h2, .std-split h2, .std-split2 h2,
          .std-final-cta h2  { font-size: 26px !important; line-height: 1.28 !important; }
          .std-compare h2, .std-process h2, .std-why h2,
          .std-work h2, .std-postlaunch h2, .std-faq h2 { font-size: 26px !important; }

          .std-acc-item > summary { font-size: 15px !important; }
          .std-acc-item > p       { font-size: 14px !important; line-height: 24px !important; }

          .std-stats-grid     { grid-template-columns: repeat(2, 1fr) !important; }
          .std-process-grid   { grid-template-columns: 1fr !important; }
          .std-benefits-grid  { grid-template-columns: 1fr !important; }
          .std-reviews-grid   { grid-template-columns: 1fr !important; }
          .std-work-grid      { grid-template-columns: 1fr !important; }
          .std-postlaunch-grid{ grid-template-columns: 1fr !important; }

          .std-process-card   { padding: 24px 20px !important; }
          .std-benefit-card   { padding: 22px 18px !important; }
          .std-review-card    { padding: 22px 18px !important; }
          .std-postlaunch-card{ padding: 24px 20px !important; }

          .std-guarantee { padding: 16px 20px !important; flex-direction: column; text-align: center; gap: 10px; }

          .std-cta-checklist { gap: 10px !important; }
          .std-cta-checklist li { font-size: 14px !important; }
          .std-final-cta h2   { font-size: 28px !important; line-height: 1.25 !important; }
        }
      `}} />
    </>
  );
}
