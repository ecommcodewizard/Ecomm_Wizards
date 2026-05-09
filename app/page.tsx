import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import KnifeAccordion from "@/components/sections/KnifeAccordion";
import StatsCard from "@/components/sections/StatsCard";
import GrowthChart from "@/components/sections/GrowthChart";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ShopifyDesignSection, { MIGRATION_SERVICES, CUSTOM_DEV_SERVICES, UX_SERVICES, CRO_SERVICES, SEO_SERVICES, BRAND_SERVICES, B2B_SERVICES, COPYWRITING_SERVICES, PERSONALIZATION_SERVICES, SEO_AI_SERVICES, RETENTION_SERVICES, WHY_B2B_SERVICES, POS_SERVICES, AI_AUTOMATION_SERVICES } from "@/components/sections/ShopifyDesignSection";
import AiAppsSlider from "@/components/sections/AiAppsSlider";
import MobileAppSection from "@/components/sections/MobileAppSection";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";
import WhyPartnerSection from "@/components/sections/WhyPartnerSection";

export const metadata: Metadata = {
  title: "Shopify Agency | Design, CRO, Development & Growth Experts | Ecomm Wizards",
  description:
    "Award-winning Shopify agency helping brands scale with high-converting design, CRO, SEO, and development. 700+ stores built. $900M+ revenue generated. Get your free audit.",
  alternates: { canonical: "https://ecommwizards.com" },
};

// â"€â"€â"€ Data â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

const CASE_STUDY_SLIDES: CaseStudySlide[] = [
  {
    key: "eby",
    image: "/images/Frame_1000004320.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/klaviyo.svg", "/images/yotpo.svg"],
    headline: (<>An elegant <strong>Shopify Store</strong> designed and built for <strong>EBY</strong> by <strong>Sofia Vergara</strong></>),
    quote: (<>&ldquo;Working with EW was a truly <strong>top-notch experience</strong>. From start to finish, they made sure everything ran smoothly and professionally — we couldn&apos;t be happier!&rdquo;</>),
    avatar: "/images/eby_dce31a54-eb36-409c-a8d7-e22fd8297de3_medium.webp",
    name: "EBY by Sofia Vergara",
    role: "Marketing Manager",
  },
  {
    key: "harvard",
    image: "/images/harvard-2_b0d9924a-412f-449b-94c3-0806b1d672ba.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/gorgias.svg"],
    headline: (<>A sophisticated <strong>Shopify Store</strong> designed and built for a <strong>Harvard University</strong></>),
    quote: (<>&ldquo;Our experience with EW was excellent, characterized by an <strong>efficient workflow</strong> and <strong>professional execution</strong>; we couldn&apos;t be more delighted&rdquo;</>),
    avatar: "/images/harvardperson_medium.webp",
    name: "Daniyal S.",
    role: "Harvard University",
  },
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
];

const GRADIENT = "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";
const GRADIENT_TEXT = { background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as const;

const STATS = [
  { value: "700+",   label: "Stores Built" },
  { value: "$900M+", label: "Client Revenue" },
  { value: "28.5%",  label: "Avg Conversion Lift" },
  { value: "9.8/10", label: "Client Satisfaction" },
];

const SERVICES = [
  {
    title: "Shopify Store Development",
    desc: "Custom themes, Shopify Plus, headless storefronts — built from strategy to launch.",
    href: "/shopify-store-development",
  },
  {
    title: "Store Migration",
    desc: "Zero data loss migrations from WooCommerce, Magento, BigCommerce, and more.",
    href: "/migration",
  },
  {
    title: "CRO & Optimisation",
    desc: "A/B testing, speed optimisation, and store audits that turn visitors into buyers.",
    href: "/shopify-conversion-rate-optimization-cro-agency",
  },
  {
    title: "Custom App Development",
    desc: "Private and public Shopify apps, ERP/CRM integrations, and mobile apps.",
    href: "/shopify-app-development",
  },
  {
    title: "Shopify SEO Agency",
    desc: "Technical SEO, content strategy, and organic growth built for Shopify stores.",
    href: "/shopify-seo-agency",
  },
  {
    title: "B2B & POS Setup",
    desc: "Wholesale portals, net terms, Shopify POS, and omnichannel selling — all in one.",
    href: "/shopify-b2b-store-setup",
  },
];

const METRICS = [
  { value: "700+",   label: "Stores Launched",      icon: "ðŸª" },
  { value: "$900M+", label: "Revenue Generated",     icon: "ðŸ'°" },
  { value: "12+",    label: "Years of Experience",   icon: "ðŸ†" },
  { value: "98%",    label: "Client Retention Rate", icon: "ðŸ¤" },
];

const BAR_DATA = [
  { year: "2021", stores: 80 },
  { year: "2022", stores: 130 },
  { year: "2023", stores: 190 },
  { year: "2024", stores: 280 },
  { year: "2025", stores: 400 },
  { year: "2026", stores: 700 },
];

const PROCESS = [
  { step: "01", title: "Discovery & Strategy",  desc: "We audit your brand, market, and goals to define the perfect Shopify roadmap." },
  { step: "02", title: "Design & UX",           desc: "High-fidelity wireframes and mockups built to convert — reviewed and approved by you." },
  { step: "03", title: "Build & Integrate",     desc: "Clean, optimised code. Mobile-first. Every app, integration, and feature tested." },
  { step: "04", title: "Launch & Scale",        desc: "Zero-downtime go-live, full training, and ongoing optimisation to keep growing." },
];

const TESTIMONIALS = [
  {
    initials: "JM",
    name: "James M.",
    company: "Fashion Brand",
    quote: "Ecomm Wizards completely transformed our Shopify store. Revenue jumped 43% within 90 days of launch.",
  },
  {
    initials: "SR",
    name: "Sarah R.",
    company: "Health & Beauty",
    quote: "The migration from WooCommerce was seamless. Zero downtime, zero data loss, and our store is faster than ever.",
  },
  {
    initials: "DK",
    name: "David K.",
    company: "Electronics",
    quote: "Their CRO work is exceptional. We went from 1.8% to 3.4% conversion rate in just three months.",
  },
];

const PLANS = [
  "Free store audit & growth roadmap",
  "Fixed-price quotes — no surprise invoices",
  "Dedicated project manager",
  "Shopify Plus Certified Partner",
  "Post-launch support included",
  "Results tied to your revenue goals",
];

const PARTNERS = [
  { src: "/images/shopify-partner.png",       alt: "Shopify Partner" },
  { src: "/images/shopify-plus-partner.png",  alt: "Shopify Plus Partner" },
  { src: "/images/google-partner.png",        alt: "Google Partner" },
  { src: "/images/klaviyo-partner.png",       alt: "Klaviyo Partner" },
];

// â"€â"€â"€ Badge helper â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

function Badge({ text }: { text: string }) {
  return (
    <span className="mb-4 inline-block rounded-full p-[1px]" style={{ background: GRADIENT }}>
      <span className="block rounded-full bg-[#0a0a0a] px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={GRADIENT_TEXT}>
        {text}
      </span>
    </span>
  );
}

// â"€â"€â"€ Page â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

export default function HomePage() {
  const maxStores = Math.max(...BAR_DATA.map((d) => d.stores));

  return (
    <>
      {/* â"€â"€ Hero â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="relative overflow-hidden w-full flex items-center" style={{ minHeight: "539.78px", background: "#000000" }}>
        {/* Background image */}
        <Image
          src="/images/main-hero-f-desktop.webp"
          alt="Hero background"
          fill
          className="absolute inset-0 object-cover"
          style={{ opacity: 0.6 }}
          priority
        />

        {/* Dark overlay so text stays readable */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.75) 100%)" }} />

        <div className="relative mx-auto flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-between pt-[30px] pb-[30px] px-[20px] lg:pt-[40px] lg:pb-[40px]" style={{ maxWidth: "1320px" }}>

          {/* â"€â"€ Left: text â"€â"€ */}
          <div className="w-full lg:w-[460px] min-[1440px]:w-[560px] lg:shrink-0" style={{ color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}>
            <h1 className="leading-tight text-white text-[32px] sm:text-[40px] lg:text-[44px] min-[1440px]:text-[52px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
              We are the Shopify<br />
              Agency that{" "}
              <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Design.<br />
              Develop. Dominate.</span>
            </h1>

            <p className="mt-4 lg:mt-[20px] text-[15px] lg:text-[18px]" style={{ fontFamily: "'Nunito', sans-serif", color: "#FFFFFF" }}>
              <span className="font-semibold" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Award-Winning</span> Shopify Plus Agency.<br />
              Top Rated Talent{" "}
              <span style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>working on your brand.</span>
            </p>

            <div className="mt-[20px] flex items-center gap-5 lg:gap-10" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}>
              <span className="group inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
                <Link
                  href="/book-shopify-consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px] h-[52px] sm:px-[45px] sm:py-[20px] sm:h-[60px] text-[15px] sm:text-[16px]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">Book a Call</span>
                  <Image src="/images/arrow vector.png" alt="arrow" width={16} height={16} className="transition-all duration-300 group-hover:brightness-0" />
                </Link>
              </span>
              <Image
                src="/images/shopifypartners-1.png"
                alt="Shopify Platinum Partner"
                width={170}
                height={58}
                className="object-contain w-[151px] h-[52px] sm:w-[170px] sm:h-[58px]"
              />
            </div>
          </div>

          {/* â"€â"€ Right: two cards â"€â"€ */}
          <div className="flex flex-row gap-4 lg:flex-shrink-0" style={{ width: "100%", maxWidth: "645px", fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#334155" }}>

            {/* Card 1 */}
            <div className="rounded-2xl bg-[#111111]/90 backdrop-blur-sm transition-all duration-300 border-2 border-white/10 hover:border-[#A8F0B4] flex-1 lg:flex-none lg:w-[220px] flex flex-col min-h-[360px] sm:min-h-0 lg:min-h-[206px] py-[20px] px-[16px] sm:py-[30px] sm:px-[20px] lg:py-[20px] lg:px-[16px] min-[1440px]:w-[302px] min-[1440px]:min-h-0 min-[1440px]:py-[30px] min-[1440px]:px-[20px]" style={{ minWidth: "0", fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#334155" }}>
              {/* Icon */}
              <svg className="mb-5" width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Monitor outer frame */}
                <rect x="4" y="6" width="40" height="28" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                {/* Screen inner area */}
                <rect x="7" y="9" width="34" height="20" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
                {/* Triangle icon top-left */}
                <path d="M10 13 L13 18 L7 18 Z" stroke="white" strokeWidth="1.5" fill="none"/>
                {/* Header text lines */}
                <line x1="15" y1="13" x2="26" y2="13" stroke="white" strokeWidth="1.5"/>
                <line x1="15" y1="16" x2="22" y2="16" stroke="white" strokeWidth="1.5"/>
                {/* Image placeholder */}
                <rect x="9" y="20" width="14" height="7" rx="0.5" stroke="white" strokeWidth="1.5" fill="none"/>
                {/* Circle in image */}
                <circle cx="16" cy="23.5" r="2.5" stroke="white" strokeWidth="1.5" fill="none"/>
                {/* Right text lines */}
                <line x1="25" y1="20" x2="38" y2="20" stroke="white" strokeWidth="1.5"/>
                <line x1="25" y1="23" x2="38" y2="23" stroke="white" strokeWidth="1.5"/>
                <line x1="25" y1="26" x2="33" y2="26" stroke="white" strokeWidth="1.5"/>
                {/* Bottom full-width line */}
                <line x1="9" y1="29" x2="39" y2="29" stroke="white" strokeWidth="1.5"/>
                {/* Stand neck */}
                <line x1="24" y1="34" x2="24" y2="38" stroke="white" strokeWidth="2"/>
                {/* Stand base */}
                <line x1="18" y1="38" x2="30" y2="38" stroke="white" strokeWidth="2"/>
              </svg>

              <h2 className="text-[16px] sm:text-[20px] mb-[8px] sm:mb-0 min-h-[72px] sm:min-h-0 lg:min-h-[90px] min-[1440px]:min-h-0" style={{ width: "258.5px", maxWidth: "100%", fontFamily: "'Poppins', sans-serif", lineHeight: "1.5", background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                I Need High-Converting<br />Shopify Store
              </h2>
              <p className="mt-[10px] sm:mt-[16px] grow sm:grow-0 text-[13px] sm:text-[15px] lg:text-[13px]" style={{ width: "258.5px", maxWidth: "100%", fontFamily: "'Poppins', sans-serif", color: "#FFFFFF" }}>
                Stunning UI/UX, custom builds, and pixel-perfect execution that converts.
              </p>

              <span className="mt-[10px] sm:mt-[16px] flex p-[2px] rounded-lg" style={{ width: "258.5px", maxWidth: "100%", background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
                <Link
                  href="/free-shopify-store-audit"
                  className="flex items-center justify-center gap-2 rounded-lg text-white transition-all hover:text-[#3DC77A] text-[15px] sm:text-[15px] lg:text-[13px] h-[43px] sm:h-[51px] lg:h-[43px] py-[12px] px-[6px] sm:py-[16px] sm:px-[25px] lg:py-[12px] lg:px-[10px] w-full"
                  style={{ fontFamily: "'Poppins', sans-serif", background: "#121212" }}
                >
                  <span className="sm:hidden text-[13px] whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>Free Quote</span>
                  <span className="hidden sm:inline text-[15px] lg:text-[13px]" style={{ width: "126.25px", height: "15px", fontFamily: "'Poppins', sans-serif", lineHeight: "15px" }}>Get a Free Quote</span>
                  <svg width="15" height="10.55" viewBox="0 0 15 10.55" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", verticalAlign: "middle" }}><path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </span>

              <p className="mt-[10px] sm:mt-[16px] text-center text-[13px] sm:text-[15px] lg:text-[13px] lg:whitespace-nowrap" style={{ width: "258.5px", maxWidth: "100%", fontFamily: "'Poppins', sans-serif", color: "#FFFFFF", lineHeight: "25px" }}>
                Not sure? Start here.<br />
                <Link href="/free-shopify-store-audit" className="hover:opacity-80 inline-flex items-center gap-1 text-[13px] sm:text-[15px] lg:text-[13px]" style={{ fontFamily: "'Poppins', sans-serif", background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", borderBottom: "1px solid #3DC77A", paddingBottom: "0px", marginBottom: "-1px" }}>
                  Get a Free Audit <svg width="15" height="10.55" viewBox="0 0 15 10.55" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", verticalAlign: "middle" }}><path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="#3DC77A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-[#111111]/90 backdrop-blur-sm transition-all duration-300 border-2 border-white/10 hover:border-[#A8F0B4] flex-1 lg:flex-none lg:w-[220px] flex flex-col min-h-[360px] sm:min-h-0 lg:min-h-[206px] py-[20px] px-[16px] sm:py-[30px] sm:px-[20px] lg:py-[20px] lg:px-[16px] min-[1440px]:w-[302px] min-[1440px]:min-h-0 min-[1440px]:py-[30px] min-[1440px]:px-[20px]" style={{ minWidth: "0", fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#334155" }}>
              {/* Icon */}
              <svg className="mb-5" width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bar 1 - shortest */}
                <rect x="1" y="32" width="9" height="14" stroke="white" strokeWidth="2" fill="none"/>
                {/* Bar 2 - medium */}
                <rect x="15" y="24" width="9" height="22" stroke="white" strokeWidth="2" fill="none"/>
                {/* Arrow shape (shaft + wide arrowhead) */}
                <path d="M35,10 L27,22 L31,22 L31,46 L39,46 L39,22 L43,22 Z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none"/>
              </svg>

              <h2 className="text-[16px] sm:text-[20px] mb-[8px] sm:mb-0 min-h-[72px] sm:min-h-0 lg:min-h-[90px] min-[1440px]:min-h-0" style={{ width: "258.5px", maxWidth: "100%", fontFamily: "'Poppins', sans-serif", lineHeight: "1.5", background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                I Need to Scale My<br />Shopify Revenue
              </h2>
              <p className="mt-[10px] sm:mt-[16px] grow sm:grow-0 text-[13px] sm:text-[15px] lg:text-[13px]" style={{ width: "258.5px", maxWidth: "100%", fontFamily: "'Poppins', sans-serif", color: "#FFFFFF" }}>
                Data-driven CRO, email, and paid ads to grow faster and profitably.
              </p>

              <span className="mt-[10px] sm:mt-[16px] flex p-[2px] rounded-lg" style={{ width: "258.5px", maxWidth: "100%", background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
                <Link
                  href="/shopify-conversion-rate-optimization-cro-agency"
                  className="flex items-center justify-center gap-2 rounded-lg text-white transition-all hover:text-[#3DC77A] text-[15px] sm:text-[15px] lg:text-[13px] h-[43px] sm:h-[51px] lg:h-[43px] py-[12px] px-[6px] sm:py-[16px] sm:px-[25px] lg:py-[12px] lg:px-[10px] w-full"
                  style={{ fontFamily: "'Poppins', sans-serif", background: "#121212" }}
                >
                  <span className="sm:hidden text-[13px] whitespace-nowrap" style={{ fontFamily: "'Poppins', sans-serif" }}>Free Strategy</span>
                  <span className="hidden sm:inline text-[15px] lg:text-[13px]" style={{ width: "144.61px", height: "15px", fontFamily: "'Poppins', sans-serif", lineHeight: "15px" }}>Get a Free Strategy</span>
                  <svg width="15" height="10.55" viewBox="0 0 15 10.55" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", verticalAlign: "middle" }}><path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </span>

              <p className="mt-[10px] sm:mt-[16px] text-center text-[13px] sm:text-[15px] lg:text-[13px] lg:whitespace-nowrap" style={{ width: "258.5px", maxWidth: "100%", fontFamily: "'Poppins', sans-serif", color: "#FFFFFF", lineHeight: "25px" }}>
                Want to see results?<br />
                <Link href="/reviews" className="hover:opacity-80 inline-flex items-center gap-1 text-[13px] sm:text-[15px] lg:text-[13px]" style={{ fontFamily: "'Poppins', sans-serif", background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", borderBottom: "1px solid #3DC77A", paddingBottom: "0px", marginBottom: "-1px" }}>
                  See Case Studies <svg width="15" height="10.55" viewBox="0 0 15 10.55" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", verticalAlign: "middle" }}><path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="#3DC77A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* â"€â"€ Ticker â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <div className="overflow-hidden border-y border-white/10 bg-[#0a0a0a]" style={{ height: "66.39px", color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}>
        <div
          className="ticker-strip flex whitespace-nowrap h-full items-center"
          style={{ willChange: "transform" }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 px-4 font-medium text-white" style={{ fontSize: "16px", fontFamily: "'Poppins', sans-serif" }}>
              <span>700+ Stores Built</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
              <span>$900M+ Revenue Generated</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
              <span>8+ Years of Experience</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
              <span>Full-Stack Ecommerce Partner</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
              <span>Shopify Plus Certified</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
              <span>28.5% Avg Conversion Lift</span>
              <span className="shrink-0 rounded-full" style={{ width: "7px", height: "7px", display: "inline-block", background: GRADIENT }} />
            </div>
          ))}
        </div>
      </div>

      {/* â"€â"€ Logos Section â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section style={{ background: "#000000", paddingBottom: "30px" }}>

        {/* Stats row */}
        <div
          className="mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 px-5 lg:px-0"
          style={{ maxWidth: "1320px", padding: "30px 0px", margin: "0px auto", color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}
        >
          {[
            { label: "Average Conversion Rate", value: "28.5%", suffix: "improvement" },
            { label: "Average Order Value",      value: "22%",   suffix: "improvement" },
            { label: "Total Revenue",            value: "28.8%", suffix: "improvement" },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#111111] w-full" style={{ minHeight: "117px", padding: "15px", fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#334155" }}>
              <div style={{ flex: 1, minWidth: 0, padding: "10px", fontFamily: "'Poppins', sans-serif", fontSize: "16px", color: "#334155" }}>
                <p style={{ width: "240.42px", height: "26px", fontSize: "16px", fontFamily: "'Poppins', sans-serif", color: "#FFFFFF", fontWeight: 700, lineHeight: "26px" }}>{s.label}</p>
                <p className="mt-2" style={{ width: "240.42px", height: "27px", fontSize: "17px", fontFamily: "'Lato', sans-serif", fontWeight: 600, lineHeight: "27px", background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {s.value} <span style={{ fontWeight: 400 }}>{s.suffix}</span>
                </p>
              </div>
              <div style={{ padding: "12px", flexShrink: 0 }}>
              <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id={"stat-grad-" + i} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A8F0B4"/>
                    <stop offset="29.33%" stopColor="#3DC77A"/>
                    <stop offset="52.4%" stopColor="#A8F0B4"/>
                    <stop offset="100%" stopColor="#4EB771"/>
                  </linearGradient>
                </defs>
                <rect x="2" y="38" width="8" height="10" stroke={"url(#stat-grad-" + i + ")"} strokeWidth="2.2" fill="none"/>
                <rect x="14" y="30" width="8" height="18" stroke={"url(#stat-grad-" + i + ")"} strokeWidth="2.2" fill="none"/>
                <rect x="26" y="21" width="8" height="27" stroke={"url(#stat-grad-" + i + ")"} strokeWidth="2.2" fill="none"/>
                <rect x="38" y="12" width="8" height="36" stroke={"url(#stat-grad-" + i + ")"} strokeWidth="2.2" fill="none"/>
                <path d="M6,23 Q24,15 42,0" stroke={"url(#stat-grad-" + i + ")"} strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                <path d="M42,0 L39,6 M42,0 L36,3" stroke={"url(#stat-grad-" + i + ")"} strokeWidth="2.8" strokeLinecap="round"/>
              </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Logos slider */}
        <div className="mx-auto overflow-hidden h-[70px] sm:h-[95px]" style={{ maxWidth: "1320px", margin: "0px auto" }}>
          <div
            className="logo-strip flex items-center h-[70px] sm:h-[95px]"
            style={{ willChange: "transform" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center">
                {[
                  { src: "/images/main-hero-logo-1.webp", alt: "Google Reviews" },
                  { src: "/images/main-hero-logo-2.webp", alt: "Clutch Reviews" },
                  { src: "/images/main-hero-logo-3.webp", alt: "Trustpilot Reviews" },
                  { src: "/images/main-hero-logo-4.webp", alt: "Shopify Platinum Partner" },
                  { src: "/images/main-hero-logo-5.webp", alt: "Shopify" },
                ].map((logo) => (
                  <div key={logo.alt} className="flex items-center justify-center shrink-0 w-[160px] sm:w-[260px]">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={62}
                      className="object-contain w-[120px] h-[42px] sm:w-[180px] sm:h-[62px]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Intro -- */}
      <section style={{ background: "#FBF7ED", padding: "0px 20px" }}>
        <div
          className="py-[40px] lg:py-[50px] min-[1440px]:py-[60px]"
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "16px",
            color: "#334155",
          }}
        >
          <h2
            className="text-[32px] sm:text-[36px] lg:text-[42px]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              color: "#000000",
              lineHeight: "1.2",
              textAlign: "center",
              maxWidth: "792px",
              margin: "0 auto",
            }}
          >
            Your Shopify Store is only as good as the Agency working on it.
          </h2>
          <p
            className="text-[16px] lg:text-[18px]"
            style={{
              marginTop: "20px",
              fontFamily: "'Poppins', sans-serif",
              color: "rgba(0,0,0,0.8)",
              lineHeight: "28px",
              textAlign: "center",
            }}
          >
            We started EcommWizards because we were tired of watching brands get burned by agencies that overpromise and underdeliver. As a full-service Shopify Plus agency, we combine design, development, CRO, SEO, and retention marketing to help brands scale faster and more profitably. Whether you need a new Shopify store, migration, custom development, UX optimization, or full-funnel marketing &mdash; we build strategies focused on{" "}
            <strong style={{ fontWeight: 700 }}>revenue growth, not just aesthetics.</strong> Every project gets a dedicated strategist, not a project manager. Whether it&apos;s design, development, or marketing, we do it strategically to hit your sales targets.
          </p>
        </div>
      </section>

      {/* -- Gun to Knife Fight -- */}
      <section className="px-[15px] sm:px-[20px] md:pb-[20px] lg:pb-0" style={{ background: "#FBF7ED" }}>
        <div
          className="pb-[30px] lg:pb-[60px]"
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
            flexWrap: "wrap",
            fontFamily: "'Poppins', sans-serif",
            color: "#334155",
          }}
        >
          {/* Left column */}
          <div className="w-full md:w-[calc(50%-10px)] min-[1440px]:w-[650px] h-[881px] sm:h-auto md:h-[780px] lg:h-[879px] min-[1440px]:h-[801px] px-[20px] py-[30px] sm:pt-[40px] sm:px-[30px] sm:pb-[30px] md:pt-[24px]" style={{ background: "#FFFFFF", borderRadius: "20px", overflow: "hidden", color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px" }}>
            <h2
              className="text-[32px] md:text-[30px] lg:text-[40px] mb-[16px] sm:mb-[20px]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: "#000000",
                lineHeight: "1.25",
              }}
            >
              Working with Ecomm Wizards is like bringing a Gun to a Knife Fight
            </h2>
            <p
              className="text-[16px] md:text-[14px] lg:text-[16px]"
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "rgba(0,0,0,0.8)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              Most agencies do one thing well. But thanks to our talent hunt program where we only hire top talent from around the globe, we do it all: design, development, and growth marketing under one roof. No more juggling five vendors who don&apos;t talk to each other. One team. One strategy. One goal: scale your revenue.
            </p>

            {/* Accordion */}
            <KnifeAccordion />
          </div>

          {/* Right column */}
          <div className="w-full md:w-[calc(50%-10px)] min-[1440px]:w-[650px] h-[320px] sm:h-auto md:h-[780px] lg:h-[879px] min-[1440px]:h-[801px]" style={{ borderRadius: "20px", overflow: "hidden", position: "relative" }}>
            <Image
              src="/images/image-4.png"
              alt="Ecomm Wizards office"
              fill
              className="object-cover"
            />
            {/* Stats card overlay */}
            <StatsCard />
          </div>
        </div>

      </section>

      {/* ── Growth Chart ── */}
      <GrowthChart />

      {/* ── Social Proof ── */}
      <SocialProofSection />

      {/* ── Process ── */}
      <ProcessSection />

      {/* ── Shopify Design & Development ── */}
      <ShopifyDesignSection mobileYPadding="max-sm:!pt-[40px] max-sm:!pb-[10px]" />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Shopify <strong style={{ fontWeight: 600 }}>Migration</strong> Services</>}
        description="Moving from Magento, WooCommerce, BigCommerce or any other platform to Shopify? Don't lose your SEO rankings or customer data. Our Shopify Migration Experts handle the transition seamlessly."
        services={MIGRATION_SERVICES}
        buttonText="Get a Free Migration Consultation"
        buttonHref="/migration"
        imageSrc="/images/video_cover_2048x.webp"
        paddingTop="5px"
        reverseLayout
        mobileYPadding="max-sm:!py-[10px]"
      />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<><span style={GRADIENT_TEXT}>Custom</span> <strong style={{ fontWeight: 600, ...GRADIENT_TEXT }}>Shopify Development</strong> Services</>}
        description="Off-the-shelf won't cut it for ya? We build custom themes, private apps, and bespoke functionality tailored to how your business actually operates."
        services={CUSTOM_DEV_SERVICES}
        buttonText="Request a Custom Quote"
        buttonHref="/book-shopify-consultation"
        imageSrc="/images/ecommwizards_1.jpg"
        paddingTop="5px"
        mobileYPadding="max-sm:!py-[10px]"
        bgImage="/images/Group_1000004265.svg"
        bgImageOpacity={0.45}
        dark
      />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Shopify <strong style={{ fontWeight: 600 }}>UI/UX Optimization</strong> Services</>}
        description="Is your checkout flow leaking money? We perform deep-dive audits of your UX to reduce friction. We redesign your store with one goal: make it easier to buy. Better flow, fewer drop-offs, more conversions."
        services={UX_SERVICES}
        buttonText="Get a Free UX Audit"
        buttonHref="/free-shopify-store-audit"
        imageSrc="/images/concept_image_1024x1024.webp"
        paddingTop="5px"
        reverseLayout
        mobileYPadding="max-sm:!py-[10px]"
      />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Shopify <strong style={{ fontWeight: 600 }}>Conversion Rate Optimization</strong> Agency</>}
        description="Gut feelings don't scale. We dig into your data, run A/B tests, and fix what's leaking revenue. Every tweak is backed by numbers, buyer behavior, and psychology."
        services={CRO_SERVICES}
        buttonText="Optimize Your Conversions"
        buttonHref="/shopify-conversion-rate-optimization-cro-agency"
        paddingTop="5px"
        wrapHeading
        mobileYPadding="max-sm:!py-[10px]"
        imagePanel={
          <div style={{ background: "#0d0d0d", borderRadius: "20px", overflow: "hidden", width: "100%" }}>
            {/* 2×2 stats grid */}
            <div className="grid grid-cols-2 relative overflow-hidden" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 55% 80% at 50% 50%, rgba(61,199,122,0.20) 0%, rgba(61,199,122,0.08) 40%, rgba(61,199,122,0.03) 65%, transparent 80%)" }} />
              {[
                { icon: <svg width="22" height="22" viewBox="0 0 28 28" fill="none"><rect x="1" y="8" width="10" height="19" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="14" y="1" width="13" height="26" rx="1.5" stroke="currentColor" strokeWidth="1.6"/></svg>, value: "700+", label: "Shopify Stores Built" },
                { icon: <svg width="22" height="22" viewBox="0 0 28 28" fill="none"><path d="M3 22L9 15L15 19L23 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 9h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>, value: "$900M+", label: "Revenue Generated" },
                { icon: <svg width="22" height="22" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="6" stroke="currentColor" strokeWidth="1.6"/><path d="M4 26c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>, value: "8+", label: "Years of Experience" },
                { icon: <svg width="22" height="22" viewBox="0 0 28 28" fill="none"><path d="M9 4H5a1 1 0 00-1 1v4c0 6.627 4.477 12.246 10.666 13.773M19 4h4a1 1 0 011 1v4c0 6.627-4.477 12.246-10.666 13.773" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 4h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>, value: "10+", label: "Awards For Ecomm Wizards" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col justify-start gap-[4px] relative z-10 h-[110px] md:max-lg:h-[90px] overflow-hidden ${i % 2 === 0 ? "pl-[40px] md:max-lg:pl-[20px] lg:max-xl:pl-[60px] xl:pl-[130px]" : "pl-[16px]"} pr-[12px] pt-[14px] ${i < 2 ? "lg:max-xl:pt-[24px]" : ""} pb-[14px]`}
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}
                >
                  <span className="md:max-lg:scale-75 md:max-lg:origin-left" style={{ color: "#A8F0B4" }}>{s.icon}</span>
                  <span className="text-[24px] md:max-lg:text-[18px] lg:max-xl:text-[24px] xl:text-[30px] font-bold" style={{ fontFamily: "'Poppins', sans-serif", background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>{s.value}</span>
                  <span className="text-[11px] md:max-lg:text-[12px] lg:max-xl:text-[12px] xl:text-[13px]" style={{ fontFamily: "'Poppins', sans-serif", color: "#FFFFFF", lineHeight: 1.3 }}>{s.label}</span>
                </div>
              ))}
            </div>
            {/* Counter image */}
            <Image
              src="/images/ai-counter-image-1.webp"
              alt="Shopify results dashboard"
              width={640}
              height={360}
              className="w-full h-auto"
              style={{ display: "block", objectFit: "contain" }}
            />
          </div>
        }
      />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Sell <strong style={{ fontWeight: 600, ...GRADIENT_TEXT }}>Wholesale & Retail</strong> from One Shopify Store</>}
        description="Most brands bleed profit running two separate stores. We build unified Shopify Plus storefronts that serve both B2B and D2C customers with custom catalogs, volume pricing, net payment terms, and automated workflows. One store. Two revenue streams. Zero duplication."
        services={B2B_SERVICES}
        buttonText="Explore B2B Solutions"
        buttonHref="/book-shopify-consultation"
        imageSrc="/images/b2b-d2c.webp"
        wrapHeading
        paddingTop="5px"
        reverseLayout
        mobileYPadding="max-sm:!py-[10px]"
        bgImage="/images/Group_1000004265.svg"
        bgImageOpacity={0.35}
        bgImageTransform="rotate(180deg)"
        mdAutoHeight
        dark
      />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Shopify <strong style={{ fontWeight: 600 }}>Copywriting</strong> That Converts Visitors Into Customers</>}
        description="Words drive sales. Our Shopify copywriters know how to write persuasion-based product descriptions that bypass skepticism. We optimize your PDPs (Product Detail Pages) to answer every objection your customer might have before they even ask."
        services={COPYWRITING_SERVICES}
        buttonText="Get Copy That Converts"
        buttonHref="/book-shopify-consultation"
        imageSrc="/images/view-messy-office-workspace-with-laptop-device.webp"
        paddingTop="5px"
        wrapHeading
        mdAutoHeight
        mobileYPadding="max-sm:!py-[10px]"
      />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<><strong style={{ fontWeight: 600 }}>Dynamically</strong> Personalized Shopify Store</>}
        description="One-size-fits-all is dead. We build stores that adapt in real-time – showing the right products, offers, and content based on who's browsing. Every visitor gets a tailored experience."
        services={PERSONALIZATION_SERVICES}
        buttonText="Personalize Your Store"
        buttonHref="/book-shopify-consultation"
        imageSrc="/images/ai-personalised.webp"
        paddingTop="5px"
        reverseLayout
        wrapHeading
        mdAutoHeight
        mobileYPadding="max-sm:!py-[10px]"
      />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Shopify <strong style={{ fontWeight: 600, ...GRADIENT_TEXT }}>SEO & AI</strong> Search Optimization</>}
        description="Google is just the start. We optimize your Shopify store for traditional search AND AI engines like ChatGPT and Gemini — so you show up wherever your customers are looking."
        services={SEO_AI_SERVICES}
        buttonText="Get Found Everywhere"
        buttonHref="/shopify-seo-agency"
        imageSrc="/images/ai-agent-main.webp"
        paddingTop="5px"
        wrapHeading
        mobileYPadding="max-sm:!py-[10px]"
        bgImage="/images/Group_1000004265.svg"
        bgImageOpacity={0.45}
        dark
      />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Retention <strong style={{ fontWeight: 600 }}>Marketing</strong> Agency</>}
        description="Acquiring customers is expensive. Keeping them is profitable. We build email flows, loyalty loops, and lead systems that turn one-time buyers into repeat customers."
        services={RETENTION_SERVICES}
        buttonText="Boost Your Retention"
        buttonHref="/book-shopify-consultation"
        imageSrc="/images/pexels-kindelmedia-7688116.jpg"
        paddingTop="5px"
        reverseLayout
        mdAutoHeight
        mobileYPadding="max-sm:!py-[10px]"
      />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Why <strong style={{ fontWeight: 600 }}>Shopify Plus</strong> Wins for B2B Commerce</>}
        description="Shopify Plus is the only platform built to handle wholesale and DTC from a single store — native B2B features, no costly middleware, no workarounds. Give wholesale buyers a dedicated portal while running your retail store from the same dashboard."
        services={WHY_B2B_SERVICES}
        buttonText="Build Your B2B Store"
        buttonHref="/book-shopify-consultation"
        imageSrc="/images/Image_7c2e1efa-3310-4bd5-815f-a21c1097455a-scaled.webp"
        paddingTop="5px"
        wrapHeading
        mdAutoHeight
        imageAspectRatio="4/3"
        mobileYPadding="max-sm:!py-[10px]"
      />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Shopify <strong style={{ fontWeight: 600, ...GRADIENT_TEXT }}>POS Setup</strong> & Configuration</>}
        description="Unify your online and offline sales. We set up Shopify POS so your inventory, orders, and customer data stay synced – whether you're selling in-store, at pop-ups, or on the go."
        services={POS_SERVICES}
        buttonText="Get Your POS Running"
        buttonHref="/book-shopify-consultation"
        imageSrc="/images/seeamleass-right.webp"
        wrapHeading
        paddingTop="5px"
        reverseLayout
        mobileYPadding="max-sm:!py-[10px]"
        bgImage="/images/Group_1000004265.svg"
        bgImageOpacity={0.35}
        bgImageTransform="rotate(180deg)"
        mdAutoHeight
        dark
      />
      <ShopifyDesignSection
        showHeading={false}
        h3Content={<>Shopify <strong style={{ fontWeight: 700, color: "#000000" }}>AI Automation</strong> Services</>}
        description="From inventory updates to customer support – we set up AI agents that handle the repetitive stuff so you can focus on growth. Your store runs itself."
        services={AI_AUTOMATION_SERVICES}
        buttonText="Automate Your Store"
        buttonHref="/book-shopify-consultation"
        imageSrc="/images/ai-shopify-apps.webp"
        paddingTop="5px"
        wrapHeading
        mdAutoHeight
        imageFit="contain"
        imageAspectRatio="4/3"
        paddingBottom="30px"
        mobileYPadding="max-sm:!py-[10px]"
      />
      <AiAppsSlider />
      <MobileAppSection />

      {/* Proven Results from Brands We've Built */}
      <section
        className="ssd-results-section"
        style={{ background: "#FFFFFF", color: "#334155", fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "30px 20px" }}
      >
        <div className="ssd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="ssd-results-heading">Proven Results from Brands We&apos;ve Built</h2>
          <p className="ssd-results-desc">
            Our Shopify store development services have helped brands increase conversion rates by up to 35%, reduce page load time by 50%, and scale to Shopify Plus with confidence.
          </p>
          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} showDots={false} />
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          .ssd-results-heading { color:#000;font-family:'Poppins',sans-serif;font-size:42px;font-weight:700;line-height:52px;text-align:center;margin:0 auto 24px;max-width:920px; }
          .ssd-results-desc { color:rgba(0,0,0,.8);font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;text-align:center;margin:0 auto 24px;max-width:1056px; }
          .ssd-results-cards { display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:48px; }
          .ssd-results-card { background:#FBF7ED;padding:30px;min-height:257.28px;border-radius:14px;display:flex;flex-direction:column;align-items:center;text-align:center;color:#334155;font-family:'Poppins',sans-serif;font-size:16px; }
          .ssd-results-card-quote { color:#000;font-family:'Poppins',sans-serif;font-size:18px;line-height:28px;margin:0 0 24px;max-width:366.67px; }
          .ssd-results-card-logo { display:flex;align-items:center;justify-content:center;min-height:64px;margin-bottom:18px; }
          .ssd-results-card-logo img { width:150px;height:64.05px;object-fit:contain;display:block; }
          .ssd-results-card-person { color:rgba(0,0,0,.7);font-family:'Poppins',sans-serif;font-size:14px;line-height:22px;margin:0; }
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
            .ssd-results-cards { grid-template-columns:1fr !important;gap:16px !important;margin-bottom:32px !important; }
            .ssd-results-card { min-height:0 !important;padding:26px 22px !important; }
            .ssd-results-card-quote { font-size:16px !important;line-height:26px !important;margin-bottom:18px !important; }
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

      <WhyPartnerSection />




      
    </>
  );
}
