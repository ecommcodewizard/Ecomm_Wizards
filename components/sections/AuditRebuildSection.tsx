"use client";

import { useState } from "react";
import Image from "next/image";

const GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";

type TabKey = "home" | "collection" | "product" | "cart";

const TABS: { key: TabKey; label: string }[] = [
  { key: "home", label: "Home Page" },
  { key: "collection", label: "Collection Page" },
  { key: "product", label: "Product Page" },
  { key: "cart", label: "Cart Drawer" },
];

const PANEL_COPY: Record<TabKey, {
  title: string;
  body: string;
  crLabel: string;
  crValue: string;
  aovLabel: string;
  aovValue: string;
  source1: { k: string; v: string };
  source2: { k: string; v: string };
  before: { src: string; alt: string };
  after: { src: string; alt: string };
}> = {
  home: {
    title: "Product Launch Exclusives",
    body: "Offer exclusive access or discounts for new product launches to create buzz and encourage early purchases, driving higher conversion rates and order values",
    crLabel: "Increase CR",
    crValue: "20-30%",
    aovLabel: "Increase AOV",
    aovValue: "10-15%",
    source1: { k: "Launch Strategies:", v: "Exclusive launches can increase CR by 25%" },
    source2: { k: "Shopify Reports:", v: "Early access offers can boost AOV by 12%" },
    before: { src: "/images/Home_Page_old-scaled.webp", alt: "Home page before redesign" },
    after: { src: "/images/Home_Page_-_Desktop-scaled.webp", alt: "Home page after redesign" },
  },
  collection: {
    title: "Smart Filtering & Merchandising",
    body: "Surface the right products faster with curated collections, intelligent filters, and merchandising blocks that turn browsers into buyers.",
    crLabel: "Increase CR",
    crValue: "15-25%",
    aovLabel: "Increase AOV",
    aovValue: "8-12%",
    source1: { k: "Merchandising Studies:", v: "Curated collections can lift CR by 22%" },
    source2: { k: "Shopify Reports:", v: "Smart filters can reduce drop-off by 18%" },
    before: { src: "/images/Collection_old-scaled.webp", alt: "Collection page before redesign" },
    after: { src: "/images/Collection_Page_-_Desktop-scaled.webp", alt: "Collection page after redesign" },
  },
  product: {
    title: "Conversion-Focused PDPs",
    body: "Rebuild product pages around the buyer's decision: hero media, social proof, sticky add-to-cart, smart upsells, and trust signals that reduce hesitation.",
    crLabel: "Increase CR",
    crValue: "25-40%",
    aovLabel: "Increase AOV",
    aovValue: "12-20%",
    source1: { k: "PDP Studies:", v: "Optimised PDPs lift conversions by up to 35%" },
    source2: { k: "Shopify Reports:", v: "Bundles and upsells boost AOV by 18%" },
    before: { src: "/images/PDP_Old-scaled.webp", alt: "Product page before redesign" },
    after: { src: "/images/PDP_-_Version_1_-_Desktop-scaled.webp", alt: "Product page after redesign" },
  },
  cart: {
    title: "Frictionless Cart Drawer",
    body: "A slide-in cart with upsells, free-shipping progress, and one-click checkout — engineered to recover lost revenue and grow basket size.",
    crLabel: "Recover Revenue",
    crValue: "10-20%",
    aovLabel: "Increase AOV",
    aovValue: "15-25%",
    source1: { k: "Cart Studies:", v: "Drawer carts can recover 18% of lost revenue" },
    source2: { k: "Shopify Reports:", v: "Cart upsells lift AOV by 22%" },
    before: { src: "/images/cart-drawer-before.webp", alt: "Cart drawer before redesign" },
    after: { src: "/images/cart-drawer-after.webp", alt: "Cart drawer after redesign" },
  },
};

function EcommLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/ecomm-green-logo-cropped.png"
        alt="Ecomm Wizards"
        width={86}
        height={79}
        className="h-7 w-auto sm:h-8"
      />
      <span className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.08em] text-[#1a1a1a]">
        ECOMM WIZARDS
      </span>
    </div>
  );
}

function UpArrow({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={className} aria-hidden>
      <path d="M7 11.5V2.5M7 2.5L2.5 7M7 2.5L11.5 7" stroke="#16A34A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MockChart() {
  return (
    <svg viewBox="0 0 420 200" className="w-full h-auto" aria-hidden>
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={i} x1={20 + i * 38} y1={10} x2={20 + i * 38} y2={170} stroke="#E5E7EB" strokeWidth="0.8" />
      ))}
      <line x1={20} y1={170} x2={400} y2={170} stroke="#D1D5DB" strokeWidth="1" />
      <path d="M20 150 Q 80 145 130 130 T 240 105 T 360 70 T 400 60" stroke="#7C3AED" strokeOpacity="0.5" strokeWidth="2" fill="none" />
      <path d="M20 155 Q 80 148 130 132 T 240 100 T 360 60 T 400 48" stroke="#16A34A" strokeWidth="2.2" fill="none" />
      <line x1={290} y1={20} x2={290} y2={170} stroke="#9CA3AF" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="290" cy="80" r="4" fill="#FFFFFF" stroke="#16A34A" strokeWidth="2" />
      <circle cx="290" cy="98" r="4" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="2" />
      <g transform="translate(208, 30)">
        <rect x="0" y="0" width="184" height="80" rx="6" fill="#FFFFFF" stroke="#E5E7EB" />
        <text x="12" y="20" fontSize="11" fill="#1a1a1a" fontFamily="Poppins, sans-serif" fontWeight="600">Revenue</text>
        <text x="12" y="44" fontSize="13" fill="#16A34A" fontFamily="Poppins, sans-serif" fontWeight="700">20%</text>
        <text x="44" y="40" fontSize="9" fill="#475569" fontFamily="Poppins, sans-serif">Average Order Value</text>
        <text x="44" y="51" fontSize="9" fill="#475569" fontFamily="Poppins, sans-serif">Increase</text>
        <text x="12" y="68" fontSize="13" fill="#7C3AED" fontFamily="Poppins, sans-serif" fontWeight="700">12.5%</text>
        <text x="44" y="64" fontSize="9" fill="#475569" fontFamily="Poppins, sans-serif">Average Conversion</text>
        <text x="44" y="75" fontSize="9" fill="#475569" fontFamily="Poppins, sans-serif">Rate Increase</text>
      </g>
    </svg>
  );
}

function DataDrivenPanel({ data }: { data: typeof PANEL_COPY[TabKey] }) {
  return (
    <div
      className="flex h-full flex-col rounded-[14px] bg-white p-5 sm:p-6"
      style={{
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
        border: "1px solid rgba(0,0,0,0.06)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <EcommLogo />
        <span className="text-[12px] sm:text-[13px] font-bold text-[#1a1a1a]">Data Driven Design</span>
      </div>

      <div className="mt-5 rounded-[10px] bg-[#F1F1F2] p-4">
        <h4 className="text-[14px] sm:text-[15px] font-bold text-[#1a1a1a]">{data.title}</h4>
        <p className="mt-2 text-[12px] sm:text-[12.5px] leading-[1.55] text-[#475569]">{data.body}</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          { label: data.crLabel, value: data.crValue },
          { label: data.aovLabel, value: data.aovValue },
        ].map((s) => (
          <div key={s.label} className="rounded-[10px] border border-[#E5E7EB] p-3 sm:p-4">
            <p className="text-[11.5px] sm:text-[12px] font-semibold text-[#1a1a1a]">{s.label}</p>
            <div className="mt-1 flex items-center gap-1">
              <span className="text-[22px] sm:text-[26px] font-light text-[#475569]">{s.value}</span>
              <UpArrow />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-[10px] border border-[#E5E7EB] p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-[11px] text-[#475569]">
            Revenue
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 4l3 3 3-3" stroke="#475569" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </div>
        <div className="mt-1 inline-flex items-center gap-1 rounded-[6px] border border-[#16A34A]/30 bg-[#ECFDF5] px-2 py-0.5">
          <UpArrow />
          <span className="text-[12px] font-bold text-[#16A34A]">32.5%</span>
        </div>
        <div className="mt-2">
          <MockChart />
        </div>
      </div>

      <div className="mt-4 rounded-[10px] bg-[#F1F1F2] p-3 sm:p-4">
        <p className="text-[12.5px] sm:text-[13px] font-bold text-[#1a1a1a]">Data Source:</p>
        <p className="mt-1.5 text-[11.5px] sm:text-[12px] text-[#475569]">
          <span className="font-bold text-[#1a1a1a]">{data.source1.k}</span>{" "}
          <span>{data.source1.v}</span>
        </p>
        <p className="mt-1 text-[11.5px] sm:text-[12px] text-[#475569]">
          <span className="font-bold text-[#1a1a1a]">{data.source2.k}</span>{" "}
          <span>{data.source2.v}</span>
        </p>
      </div>
    </div>
  );
}

function ScreenshotCard({ label, src, alt }: { label: string; src: string; alt: string }) {
  return (
    <div
      className="flex h-full flex-col rounded-[14px] bg-white p-4 sm:p-5"
      style={{
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
        border: "1px solid rgba(0,0,0,0.06)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <p className="text-[18px] sm:text-[20px] font-bold text-[#1a1a1a]">{label}</p>
      <div className="relative mt-3 w-full flex-1 min-h-[420px] overflow-hidden rounded-[8px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1320px) 30vw, 400px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export default function AuditRebuildSection() {
  const [active, setActive] = useState<TabKey>("home");
  const data = PANEL_COPY[active];

  return (
    <section
      className="w-full"
      style={{
        background: "#FBF7ED",
        borderTop: "1px solid rgba(0, 0, 0, 0.08)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="mx-auto px-[20px] py-[40px] sm:py-[50px] lg:py-[60px]"
        style={{ maxWidth: "1320px" }}
      >
        <h2
          className="mx-auto text-center text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.15]"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#0F172A", maxWidth: "820px" }}
        >
          We Don&apos;t Just Audit. We Rebuild for Revenue.
        </h2>
        <p
          className="mx-auto mt-6 text-center text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.7]"
          style={{ fontFamily: "'Poppins', sans-serif", color: "#334155", maxWidth: "1080px" }}
        >
          Our professional Shopify audit goes beyond spreadsheets and bullet points. We
          analyze every page, every interaction, and every drop-off point across your
          funnel. Then we deliver a data-driven Shopify store audit complete with
          interactive prototypes and prioritized recommendations. Resulting in up to 30%
          higher Conversions, higher AOV, Improved customer lifetime value, and a store
          experience that actually reflects your brand&rsquo;s value. That&rsquo;s what
          Shopify experts do.
        </p>

        {/* Tabs */}
        <div
          className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          role="tablist"
          aria-label="Audit redesign examples"
        >
          {TABS.map((t) => {
            const isActive = t.key === active;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.key)}
                className="rounded-[10px] px-3 md:px-5 py-3 md:py-4 text-[14px] sm:text-[15px] lg:text-[16px] font-semibold transition-colors duration-200 text-center"
                style={{
                  background: isActive ? "#000000" : "#FFFFFF",
                  color: isActive ? "#FFFFFF" : "#0F172A",
                  border: "1px solid rgba(0,0,0,0.08)",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content area */}
        <div className="mt-6 sm:mt-8 grid items-stretch gap-5 lg:grid-cols-3">
          <DataDrivenPanel data={data} />
          <ScreenshotCard label="Before" src={data.before.src} alt={data.before.alt} />
          <ScreenshotCard label="After" src={data.after.src} alt={data.after.alt} />
        </div>
      </div>
    </section>
  );
}
