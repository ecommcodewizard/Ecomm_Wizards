import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import KnifeAccordion from "@/components/sections/KnifeAccordion";
import StatsCard from "@/components/sections/StatsCard";
import GrowthChart from "@/components/sections/GrowthChart";

export const metadata: Metadata = {
  title: "Shopify Agency | Design, CRO, Development & Growth Experts | Ecomm Wizards",
  description:
    "Award-winning Shopify agency helping brands scale with high-converting design, CRO, SEO, and development. 700+ stores built. $900M+ revenue generated. Get your free audit.",
  alternates: { canonical: "https://ecommwizards.com" },
};

// â"€â"€â"€ Data â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€

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
    <span className="mb-4 inline-block rounded-full border border-[#4a7c59]/30 bg-[#4a7c59]/10
      px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#4a7c59]">
      {text}
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
              <span className="inline-flex p-[2px] rounded-full" style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>
                <Link
                  href="/book-shopify-consultation"
                  className="group inline-flex items-center gap-2 rounded-full bg-black transition-all px-[32px] py-[14px] h-[52px] sm:px-[45px] sm:py-[20px] sm:h-[60px] text-[15px] sm:text-[16px]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span className="text-white group-hover:text-transparent bg-clip-text whitespace-nowrap" style={{ backgroundImage: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>Book a Call</span>
                  <Image src="/images/arrow vector.png" alt="arrow" width={16} height={16} />
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
              <span className="shrink-0 rounded-full bg-[#4a7c59]" style={{ width: "7px", height: "7px", display: "inline-block" }} />
              <span>$900M+ Revenue Generated</span>
              <span className="shrink-0 rounded-full bg-[#4a7c59]" style={{ width: "7px", height: "7px", display: "inline-block" }} />
              <span>8+ Years of Experience</span>
              <span className="shrink-0 rounded-full bg-[#4a7c59]" style={{ width: "7px", height: "7px", display: "inline-block" }} />
              <span>Full-Stack Ecommerce Partner</span>
              <span className="shrink-0 rounded-full bg-[#4a7c59]" style={{ width: "7px", height: "7px", display: "inline-block" }} />
              <span>Shopify Plus Certified</span>
              <span className="shrink-0 rounded-full bg-[#4a7c59]" style={{ width: "7px", height: "7px", display: "inline-block" }} />
              <span>28.5% Avg Conversion Lift</span>
              <span className="shrink-0 rounded-full bg-[#4a7c59]" style={{ width: "7px", height: "7px", display: "inline-block" }} />
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

      {/* â"€â"€ Services â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge text="What We Do" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Everything Your Shopify Store Needs
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed text-white/50">
              From launch to scale — we cover every discipline that drives ecommerce growth.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:border-[#4a7c59]/30 hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-[#4a7c59] transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#4a7c59] group-hover:gap-2 transition-all">
                  Learn more â†'
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ Metrics â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge text="Our Track Record" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Numbers That Speak for Themselves
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-4xl">{m.icon}</div>
                <span className="mt-4 block text-4xl font-extrabold text-[#4a7c59]">{m.value}</span>
                <p className="mt-2 text-sm text-white/50">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ Growth Chart â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge text="Growth Story" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Stores Built Year on Year
            </h2>
            <p className="mt-4 text-sm text-white/50">
              Consistent growth since our founding — 700+ stores and counting.
            </p>
          </div>

          <div className="mt-14 flex items-end justify-center gap-4 sm:gap-6">
            {BAR_DATA.map((j) => (
              <div key={j.year} className="flex flex-col items-center gap-2">
                <span className="text-xs font-bold text-[#4a7c59]">{j.stores}+</span>
                <div
                  className="w-10 sm:w-14 rounded-t-lg bg-gradient-to-t from-[#4a7c59]/40 to-[#4a7c59] transition-all"
                  style={{ height: `${(j.stores / maxStores) * 200}px` }}
                />
                <span className="text-xs text-white/40">{j.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ Process â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge text="How We Work" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              A Proven Process. Predictable Results.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="flex flex-col">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#4a7c59] text-xs font-bold text-[#0a0a0a]">
                  {p.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{p.desc}</p>
                <Link
                  href="/free-shopify-store-audit"
                  className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[#4a7c59] hover:gap-3 transition-all"
                >
                  Get started â†'
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ Testimonials â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge text="Client Results" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:border-[#4a7c59]/30"
              >
                <p className="text-sm leading-relaxed text-white/70">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4a7c59] text-sm font-extrabold text-[#0a0a0a] ring-4 ring-[#111111]">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a7c59] hover:gap-3 transition-all"
            >
              Read all reviews â†'
            </Link>
          </div>
        </div>
      </section>

      {/* â"€â"€ Why Us / Plans â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:gap-20">
          <div className="lg:w-1/2">
            <Badge text="Why Ecomm Wizards" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Everything You Need to Scale. Nothing You Don't.
            </h2>
            <ul className="mt-8 space-y-4">
              {PLANS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#4a7c59] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/free-shopify-store-audit"
                className="inline-flex items-center justify-center rounded-lg bg-[#4a7c59]
                  px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-[#9a7538]"
              >
                Get a Free Audit
              </Link>
              <Link
                href="/book-shopify-consultation"
                className="inline-flex items-center justify-center rounded-lg border border-white/20
                  px-6 py-3 text-[12px] font-semibold text-white transition-all hover:border-[#4a7c59] hover:text-[#4a7c59]"
              >
                Book a Call
              </Link>
            </div>
          </div>

          <div className="mt-14 lg:mt-0 lg:w-1/2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="text-3xl font-extrabold text-[#4a7c59]">700+</div>
              <p className="mt-1 text-sm text-white/50">Shopify stores launched globally</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { v: "$900M+", l: "Revenue Generated" },
                  { v: "28.5%",  l: "Avg Conversion Lift" },
                  { v: "12+",    l: "Years Experience" },
                  { v: "98%",    l: "Client Retention" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xl font-extrabold text-[#4a7c59]">{s.v}</div>
                    <div className="mt-1 text-xs text-white/40">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* â"€â"€ Partners â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="bg-[#0d0d0d] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge text="Trusted Partners" />
            <h2 className="text-2xl font-extrabold text-white">
              Certified & Partnered with the Best
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {PARTNERS.map((p) => (
              <div
                key={p.alt}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:border-[#4a7c59]/30"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain brightness-0 invert opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â"€â"€ Final CTA â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€â"€ */}
      <section className="bg-[#4a7c59] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#0a0a0a] sm:text-4xl">
            Ready to Grow Your Shopify Store?
          </h2>
          <p className="mt-4 text-base text-[#0a0a0a]/70">
            Book a free consultation with our Shopify experts. No pressure, no commitment —
            just a conversation about your goals.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/free-shopify-store-audit"
              className="inline-flex items-center justify-center rounded-lg bg-[#0a0a0a]
                px-8 py-3.5 text-sm font-semibold text-[#4a7c59] transition-all hover:bg-[#111]"
            >
              Get a Free Audit
            </Link>
            <Link
              href="/book-shopify-consultation"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#0a0a0a]
                px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-all hover:bg-[#0a0a0a] hover:text-[#4a7c59]"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

