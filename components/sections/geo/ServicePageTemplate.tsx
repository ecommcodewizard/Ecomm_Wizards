// Service-format location page (geo v5, owner-approved 2026-11-08).
//
// A normal service page written for one location, in the hub's own look and
// section order: hero, trust bar, pain points, services, location blocks,
// case studies, process, compare, industries, why us, FAQ, book a call.
// Content lives in lib/geo/pages/<slug>.ts (ServiceGeoPage); this file is
// layout plus the copy that is shared by design (why us, booking chips).
//
// Class names match app/(frontend)/services/shopify-development-agency so the
// two read as one site. The CSS is repeated here because the hub keeps its
// styles inline.

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ServiceSchema from "@/components/seo/ServiceSchema";
import RelatedServices from "@/components/sections/RelatedServices";
import SdaAccordion from "@/app/(frontend)/services/shopify-development-agency/SdaAccordion";
import SdaFaqAccordion from "@/app/(frontend)/services/shopify-development-agency/SdaFaqAccordion";
import CalEmbed from "@/app/(frontend)/book-shopify-consultation/CalEmbed";
import { CASE_STUDIES } from "@/lib/case-studies";
import { assertServicePublishable, canonicalUrl, geoForHub, hubPathToLabel } from "@/lib/geo/registry";
import HubCityLinks from "@/components/sections/geo/HubCityLinks";
import { breadcrumbListJsonLd, breadcrumbTrail, faqPageJsonLd, faqPlainText } from "@/lib/geo/schema";
import type { ServiceGeoPage, ServiceIcon } from "@/lib/geo/types";

const C_DARK = "#000000";
const C_TEXT = "#334155";
const C_WHITE = "#FFFFFF";
const C_CREAM = "#FBF7ED";
const GRADIENT = "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";
const gradText = { background: "var(--brand-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } as const;

/* Same verified logo set as the hub. */
const TRUST_LOGOS = [
  { src: "/images/Case%20studies/logos/111skin%20logo.png", alt: "111SKIN" },
  { src: "/images/Case%20studies/logos/Candy%20Kittens.webp", alt: "Candy Kittens" },
  { src: "/images/Case%20studies/logos/NEOM%20Wellbeing.png", alt: "NEOM Wellbeing" },
  { src: "/images/Case%20studies/logos/Ronaldo%20Jewelry.avif", alt: "Ronaldo Jewelry" },
  { src: "/images/Case%20studies/logos/Wild.svg", alt: "Wild" },
  { src: "/images/Case%20studies/logos/Everlast.png", alt: "Everlast" },
  { src: "/images/Case%20studies/logos/Saddleback.svg", alt: "Saddleback" },
  { src: "/images/Case%20studies/logos/Twillory.png", alt: "Twillory" },
];

/* ── Shared "why us", keyed by hub. Identical to the hub's own cards. ── */
type WhyCard = { title: string; desc: ReactNode; icon: ReactNode };
const svg = (d: ReactNode) => (
  <svg viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);
const WHY_US: Record<string, { heading: [string, string]; desc: string; cards: WhyCard[]; closing: string }> = {
  "/services/shopify-development-agency": {
    heading: ["Why Brands Choose Ecomm Wizards as Their", "Shopify Development Agency"],
    desc: "We have built 150+ live Shopify stores. Here is what separates a properly built Shopify store from one that was pieced together with themes and workarounds:",
    cards: [
      { title: "Shopify-Only Developers", desc: <>We work exclusively on Shopify. Not Shopify alongside WooCommerce or Magento. Every developer knows Shopify&apos;s API surface, Liquid, Shopify Functions, and the Storefront API in depth. When you hire a Shopify developer through us, you get someone who works on Shopify full-time and nothing else.</>, icon: svg(<><path d="M16 4l-2 2-4-2-2 4-4 2 2 4-2 4 4 2 2 4 4-2 4 2 2-4 4-2-2-4 2-4-4-2z" /><circle cx="16" cy="16" r="3" /></>) },
      { title: "Fixed Price, Confirmed on Day 1", desc: <>We define the full project before development starts. Your cost is agreed in writing before a line of code is written. No hourly billing. No surprise invoices. No extra charges at final delivery. <span className="sda-why-hl">You know the full number on Day 1 and it does not change.</span></>, icon: svg(<><rect x="4" y="5" width="24" height="24" rx="3" /><path d="M22 3v4M10 3v4M4 13h24" /><path d="M10 19l3 3 6-6" /></>) },
      { title: "You Own Every Line of Code", desc: <>Full code transfer and documentation at project completion. Every component, every metafield schema, and every integration lives in your repositories and accounts. No proprietary systems. No recurring license fees. If you stop working with us, your store keeps running exactly as we built it.</>, icon: svg(<><path d="M6 10l-4 6 4 6" /><path d="M26 10l4 6-4 6" /><path d="M19 6l-6 20" /></>) },
      { title: "150+ Live Shopify Stores Built", desc: <>We have built, migrated, and launched 150+ Shopify stores. DTC brands, Shopify Plus merchants, B2B distributors, and global retailers. Every project adds to a body of pattern knowledge most developers never build up. The edge cases that catch other agencies are ones we solved years ago.</>, icon: svg(<><path d="M4 22L10 12l5 6 4-8 5 8" /><circle cx="23" cy="6" r="3" /><path d="M20.5 6H6" strokeDasharray="2 2" /></>) },
      { title: "60 Days Post-Launch Support", desc: <>Go-live is not the finish line. We monitor every build for 60 days post-launch and respond to any incident within hours. If a bug, a performance issue, or a broken integration comes up after launch, we fix it. <span className="sda-why-hl">You are not on your own the morning after launch.</span></>, icon: svg(<><path d="M16 3L5 8v9c0 6.1 4.7 11.8 11 13 6.3-1.2 11-6.9 11-13V8L16 3z" /><path d="M11 16l3 3 7-7" /></>) },
      { title: "Shopify Plus Partners Since 2021", desc: <>We are Shopify Plus Partners (since 2021) with hands-on experience across Shopify Functions, Shopify Flow, and the full enterprise feature set. Every Shopify platform update that could affect your store, we test it and document it before your next project goes live. Your store is never caught off guard.</>, icon: svg(<><path d="M16 4 l3 2.4 l3.7 -0.6 l1.6 3.4 l3.4 1.6 l-0.6 3.7 l2.4 3 l-2.4 3 l0.6 3.7 l-3.4 1.6 l-1.6 3.4 l-3.7 -0.6 l-3 2.4 l-3 -2.4 l-3.7 0.6 l-1.6 -3.4 l-3.4 -1.6 l0.6 -3.7 l-2.4 -3 l2.4 -3 l-0.6 -3.7 l3.4 -1.6 l1.6 -3.4 l3.7 0.6 z" /><polyline points="11,16.5 14.5,20 21,12.5" /></>) },
    ],
    closing: "Every store we build is documented, tested, and handed over completely. A Shopify development company that knows the platform deeply catches edge cases before go-live, not after.",
  },
};

/* ── Icons ── */
const ICONS: Record<ServiceIcon, ReactNode> = {
  clock: <><circle cx="14" cy="14" r="11" /><path d="M14 8v6l4 2" /></>,
  grid: <><rect x="3" y="3" width="10" height="10" rx="2" /><rect x="15" y="3" width="10" height="10" rx="2" /><rect x="3" y="15" width="10" height="10" rx="2" /><rect x="15" y="15" width="10" height="10" rx="2" /></>,
  star: <path d="M14 4l2.5 5 5.5.8-4 3.9.9 5.5L14 16.5 9.6 19.2l.9-5.5-4-3.9 5.5-.8z" />,
  alert: <><path d="M14 3L25 21H3L14 3z" /><path d="M14 11v5M14 18v1.5" /></>,
  layers: <><path d="M14 4l10 5-10 5L4 9z" /><path d="M4 14l10 5 10-5" /><path d="M4 19l10 5 10-5" /></>,
  user: <><circle cx="14" cy="10" r="5" /><path d="M4 24c0-5.5 4.5-9 10-9s10 3.5 10 9" /></>,
  box: <><path d="M4 9l10-5 10 5v10l-10 5-10-5z" /><path d="M4 9l10 5 10-5M14 14v10" /></>,
  truck: <><rect x="2" y="8" width="15" height="11" rx="1" /><path d="M17 12h5l4 4v3h-9" /><circle cx="7" cy="21" r="2" /><circle cx="21" cy="21" r="2" /></>,
  calendar: <><rect x="4" y="5" width="20" height="19" rx="2" /><path d="M9 3v4M19 3v4M4 11h20" /></>,
  receipt: <><path d="M7 3h14v22l-3-2-2 2-2-2-2 2-2-2-3 2z" /><path d="M10 9h8M10 13h8M10 17h5" /></>,
  shirt: <><path d="M10 4L7 8H4v16h20V8h-3l-3-4h-8z" /><path d="M10 4c0 2.2 1.8 4 4 4s4-1.8 4-4" /></>,
  home: <><path d="M4 14L14 5l10 9" /><path d="M6 12v11h6v-6h4v6h6V12" /></>,
  food: <><path d="M9 4v8a5 5 0 0 0 10 0V4" /><path d="M14 16v8M10 24h8" /></>,
  flag: <><path d="M6 25V4" /><path d="M6 5h16l-3 5 3 5H6" /></>,
  paw: <><circle cx="8" cy="11" r="2" /><circle cx="12" cy="7" r="2" /><circle cx="17" cy="7" r="2" /><circle cx="21" cy="11" r="2" /><path d="M14.5 13c-3 0-6 4-6 7 0 2 2 3 3.5 2.5s2.5-.5 5 0S20.5 22 20.5 20c0-3-3-7-6-7z" /></>,
  cart: <><path d="M3 5h3l3 13h13l3-9H8" /><circle cx="11" cy="23" r="1.5" /><circle cx="20" cy="23" r="1.5" /></>,
  code: <><path d="M9 8l-6 6 6 6" /><path d="M19 8l6 6-6 6" /><path d="M16 5l-4 18" /></>,
  chart: <><path d="M4 24h20" /><path d="M7 20v-6M12 20V9M17 20v-8M22 20V5" /></>,
  search: <><circle cx="12" cy="12" r="7" /><path d="M17 17l7 7" /></>,
  store: <><path d="M4 11l2-6h16l2 6" /><path d="M4 11h20v13H4z" /><path d="M11 24v-7h6v7" /></>,
};
const Icon = ({ name }: { name: ServiceIcon }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{ICONS[name]}</svg>
);
const Arrow = () => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden><circle cx="9" cy="9" r="9" fill="rgba(97,206,112,0.15)" /><path d="M5 9l3 3 5-5" stroke="#61ce70" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/** Renders [link:/path|label] and **bold** markers in short prose. */
function rich(s: string, linkColor = "#1F7A45"): ReactNode {
  const parts: ReactNode[] = [];
  const re = /\[link:([^\]|]+)\|([^\]]+)\]|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(s)) !== null) {
    if (m.index > last) parts.push(s.slice(last, m.index));
    if (m[1]) parts.push(<Link key={k++} href={m[1]} style={{ color: linkColor, textDecoration: "underline", textUnderlineOffset: "2px", fontWeight: 600 }}>{m[2]}</Link>);
    else parts.push(<strong key={k++}>{m[3]}</strong>);
    last = m.index + m[0].length;
  }
  if (last < s.length) parts.push(s.slice(last));
  return parts;
}

function PillCta({ label = "Book a Free Discovery Call" }: { label?: string }) {
  return (
    <span className="group inline-flex p-[2px] rounded-full" style={{ background: GRADIENT }}>
      <Link href="#book-a-call" className="inline-flex items-center gap-2 rounded-full bg-black group-hover:bg-white transition-all duration-300 px-[32px] py-[14px]" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600 }}>
        <span className="text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap">{label}</span>
        <span className="text-white group-hover:text-black transition-colors duration-300"><Arrow /></span>
      </Link>
    </span>
  );
}

export default function ServicePageTemplate({ page }: { page: ServiceGeoPage }) {
  assertServicePublishable(page);
  const url = canonicalUrl(page);
  const trail = breadcrumbTrail(page);
  const why = WHY_US[page.hub] ?? WHY_US["/services/shopify-development-agency"];
  const studies = page.caseStudies.items
    .map((item) => ({ item, cs: CASE_STUDIES.find((c) => c.slug === item.slug) }))
    .filter((x): x is { item: (typeof page.caseStudies.items)[number]; cs: (typeof CASE_STUDIES)[number] } => Boolean(x.cs));
  const faqs = page.faqs.map((f) => ({ q: faqPlainText(f.question), a: faqPlainText(f.answer) }));
  const h = page.hero;
  // Every other location page under the same hub, old format and new.
  const siblings = geoForHub(page.hub).filter((p) => p.path !== page.path);

  return (
    <>
      <Breadcrumbs items={trail} />

      {/* 1. Hero (DARK) */}
      <section className="std-hero" style={{ background: C_DARK }} aria-label={`${page.shortTitle} hero`}>
        <div className="std-hero-inner mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center" style={{ maxWidth: "1320px", padding: "60px 20px" }}>
          <div>
            <span className="std-badge">{h.badge}</span>
            <h1 className="std-hero-h1 font-bold mt-5" style={{ color: C_WHITE, fontSize: "48px", lineHeight: 1.15, margin: "20px 0 0" }}>
              {h.h1Lead && <>{h.h1Lead} </>}
              <span style={gradText}>{h.h1Gradient}</span>
              {h.h1Tail && <> {h.h1Tail}</>}
            </h1>
            <p className="std-hero-p mt-6" style={{ color: "#ffffff", fontSize: 16, lineHeight: "28px", maxWidth: 580, marginTop: 24 }}>
              {rich(h.intro, "#61ce70")}
            </p>
            <div className="std-hero-stats">
              {h.stats.map((s) => (
                <div key={s.label} className="std-hero-stat-item">
                  <span className="std-hero-stat-num">{s.value}</span>
                  <span className="std-hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginTop: "32px" }}>
              <PillCta />
              <Link href="#case-studies" className="sda-hero-secondary-cta" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.7)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", padding: "14px 0" }}>
                See Our Work
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden><path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
            {h.footnote && (
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "24px" }}>
                <Image src="/images/shopify-icon.svg" unoptimized alt="" width={22} height={22} style={{ opacity: 0.8 }} />
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{h.footnote}</span>
              </div>
            )}
          </div>
          <div className="si-hero-img-wrap">
            <Image src={h.image.src} overrideSrc={h.image.src} alt={h.image.alt} width={640} height={480} priority className="si-hero-img" style={{ width: "100%", height: "auto", borderRadius: "16px", display: "block" }} />
          </div>
        </div>
      </section>

      {/* Scope summary: one quotable passage for AI Overviews and answer
          engines. Sits straight under the hero so it is read before anything
          else on the page. */}
      <section className="svc-summary" aria-label="Summary">
        <div className="svc-summary-card mx-auto">
          <p className="svc-summary-label">In short</p>
          <p className="svc-summary-text">{rich(page.summary)}</p>
        </div>
      </section>

      {/* 2. Trust bar (WHITE) */}
      <section className="std-trust" style={{ background: C_WHITE }} aria-label="Brands that trust Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px", padding: "48px 20px" }}>
          <h2 className="std-trust-h2 text-center" style={{ color: C_DARK, fontSize: 30, fontWeight: 700, lineHeight: 1.3, margin: 0 }}>{page.trust.heading}</h2>
          <p className="text-center" style={{ color: C_TEXT, fontSize: 16, lineHeight: "26px", margin: "10px 0 0" }}>{page.trust.subheading}</p>
          <div className="std-trust-carousel" style={{ marginTop: 20, width: "100%", overflow: "hidden" }}>
            <div className="sda-trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div key={i} className="std-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src} alt={i < TRUST_LOGOS.length ? l.alt : ""} className="std-trust-logo" width={200} height={80} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pain points (CREAM) */}
      <section className="sda-feat" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label="Problems we fix">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="si-feat-heading">{page.pains.heading}</h2>
          <p className="si-feat-desc">{page.pains.intro}</p>
          <div className={`si-feat-grid${page.pains.items.length === 4 ? " si-feat-grid--4" : ""}`}>
            {page.pains.items.map((p) => (
              <div key={p.name} className="si-feat-card">
                <span className="si-feat-icon" aria-hidden="true"><Icon name={p.icon} /></span>
                <h3 className="si-feat-name">{p.name}</h3>
                <p className="si-feat-desc-text">{rich(p.desc)}</p>
                <div className="si-feat-roi"><span className="si-feat-roi-label">What this costs you:</span> {p.cost}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services (WHITE) */}
      <section className="std-solutions" style={{ background: C_WHITE }} aria-label={page.services.heading}>
        <div className="std-solutions-grid mx-auto grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-start" style={{ maxWidth: "1320px", padding: "60px 20px" }}>
          <div className="std-solutions-left" style={{ position: "sticky", top: "120px", alignSelf: "start" }}>
            <span className="std-label">{page.services.label}</span>
            <h2 style={{ color: C_DARK, fontSize: 42, fontWeight: 700, lineHeight: 1.2, margin: "12px 0 0" }}>{page.services.heading}</h2>
            <p className="mt-5" style={{ color: C_TEXT, fontSize: 16, lineHeight: "28px" }}>{rich(page.services.intro)}</p>
            <Link href="#book-a-call" className="std-cta-sol mt-8">
              Book a Free Discovery Call
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden><path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
          <SdaAccordion items={page.services.items} />
        </div>
      </section>

      {/* 5. Location section (DARK) */}
      <section className="svc-local" style={{ background: C_DARK, padding: "60px 20px" }} aria-label={page.local.heading}>
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <p className="svc-local-label">{page.local.label}</p>
          <h2 className="svc-local-h2">{page.local.heading}</h2>
          <p className="svc-local-intro">{rich(page.local.intro, "#61ce70")}</p>
          <div className={`svc-local-grid svc-local-grid--${page.local.items.length}`}>
            {page.local.items.map((l) => (
              <div key={l.name} className="svc-local-card">
                <span className="svc-local-icon" aria-hidden="true"><Icon name={l.icon} /></span>
                <h3 className="svc-local-name">{l.name}</h3>
                <p className="svc-local-desc">{rich(l.desc, "#61ce70")}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}><PillCta /></div>
        </div>
      </section>

      {/* 6. Case studies (CREAM) */}
      <section id="case-studies" style={{ background: C_CREAM, padding: "60px 20px", scrollMarginTop: "90px" }} aria-label={page.caseStudies.heading}>
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center sda-cs-heading" style={{ color: C_DARK, fontSize: 40, fontWeight: 700, lineHeight: 1.2, margin: "0 0 12px" }}>{page.caseStudies.heading}</h2>
          <p className="text-center" style={{ color: "rgba(0,0,0,.75)", fontSize: 17, lineHeight: "28px", margin: "0 auto 28px", maxWidth: 860 }}>{page.caseStudies.intro}</p>
          <div className="sda-cs-grid">
            {studies.map(({ item, cs }, i) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} data-proof-card className={`sda-cs-card${i === 3 ? " sda-cs-card-4th" : ""}`} style={{ display: "flex", flexDirection: "column", background: C_WHITE, borderRadius: "20px", overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: "14px", overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                  {item.video ? (
                    <video src={item.video} poster={cs.heroImage} autoPlay loop muted playsInline preload="none" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <Image src={cs.heroImage} overrideSrc={cs.heroImage} alt={`${cs.brandName} Shopify case study`} fill className="sda-cs-card-img" style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" />
                  )}
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(255,255,255,0.97)", borderRadius: "9999px", padding: "5px 14px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#000", display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "#000", whiteSpace: "nowrap" }}>{cs.heroSubMetric}</span>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", fontWeight: 700, color: "#000", whiteSpace: "nowrap" }}>{cs.heroMetric}</span>
                  </div>
                  <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.72)", borderRadius: "9999px", padding: "4px 12px" }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 500, color: "#fff", whiteSpace: "nowrap" }}>{cs.industry}</span>
                  </div>
                </div>
                <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flexGrow: 1, gap: "12px" }}>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "22px", fontWeight: 700, color: "#000", margin: 0, lineHeight: 1.2 }}>{cs.brandName}</p>
                  <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {item.tags.map((tag) => (
                      <span key={tag} style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 500, color: "#444", border: "1px solid rgba(0,0,0,0.22)", borderRadius: "9999px", padding: "3px 10px", whiteSpace: "nowrap" }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "rgba(0,0,0,0.6)", margin: 0, lineHeight: 1.6, flexGrow: 1 }}>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Process (WHITE, cream panel) */}
      <section className="std-process max-sm:!py-[40px]" style={{ background: C_WHITE, padding: "53px 20px" }} aria-label={page.process.heading}>
        <div className="py-[40px] px-[48px] max-sm:py-[20px] max-sm:px-[20px] md:max-lg:py-[20px] lg:max-xl:py-[30px] lg:max-xl:px-[40px]" style={{ maxWidth: "1320px", margin: "0 auto", background: C_CREAM, borderRadius: "28px", boxSizing: "border-box", overflow: "hidden" }}>
          <h2 className="text-[28px] sm:text-[36px] md:text-[32px] lg:text-[42px] font-bold max-sm:font-semibold" style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", lineHeight: 1.2, margin: 0 }}>{page.process.heading}</h2>
          <p className="text-[16px] max-sm:text-[14px]" style={{ textAlign: "center", fontFamily: "'Poppins', sans-serif", color: "#000000", marginTop: "16px", lineHeight: 1.65 }}>{page.process.intro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mt-[20px]">
            {page.process.steps.map(({ title, desc }, i, arr) => {
              const lgClass = i < 3 ? " lg:col-span-2" : i === 3 ? " lg:[grid-column:2/4]" : " lg:[grid-column:4/6]";
              const smLastClass = i === arr.length - 1 ? " sm:col-span-2 sm:max-w-[360px] sm:mx-auto lg:max-w-none lg:mx-0" : "";
              return (
                <div key={title} className={`p-[30px] max-sm:p-[15px] md:max-lg:p-[16px] lg:max-xl:p-[20px]${lgClass}${smLastClass}`} style={{ background: "#FFFFFF", borderRadius: "16px", boxSizing: "border-box" }}>
                  <p className="text-[50px] max-sm:text-[35px] md:max-lg:text-[40px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "rgba(0,0,0,0.12)", lineHeight: 1, margin: "0 0 10px" }}>{String(i + 1).padStart(2, "0")}.</p>
                  <h3 className="text-[20px] max-sm:text-[18px] md:max-lg:text-[18px]" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#000000", lineHeight: 1.3, margin: "0 0 10px" }}>{title}</h3>
                  <p className="text-[15px] max-sm:text-[14px] md:max-lg:text-[14px]" style={{ fontFamily: "'Poppins', sans-serif", color: "rgba(0,0,0,0.8)", lineHeight: 1.7, margin: 0 }}>{rich(desc)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Compare (DARK) */}
      <section className="sda-compare" style={{ background: C_DARK, padding: "0 20px" }} aria-label={page.compare.heading}>
        <div className="mx-auto" style={{ maxWidth: 1320, padding: "60px 0" }}>
          <h2 className="sda-compare-h2" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(28px, 4.1vw, 42px)", fontWeight: 700, color: "#ffffff", textAlign: "center", margin: "0 0 10px" }}>{page.compare.heading}</h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, lineHeight: 1.75, color: "#ffffff", textAlign: "center", margin: "0 auto 10px", maxWidth: 900 }}>{page.compare.intro}</p>
          <div className={`svc-cmp-grid svc-cmp-grid--${page.compare.options.length + 1}`}>
            {page.compare.options.map((o) => (
              <div key={o.name} className="svc-cmp-card">
                <h3 className="svc-cmp-name">{o.name}</h3>
                <p className="svc-cmp-k">Good for</p>
                <p className="svc-cmp-v">{o.goodFor}</p>
                <p className="svc-cmp-k svc-cmp-k--warn">Watch for</p>
                <p className="svc-cmp-v">{o.watchFor}</p>
              </div>
            ))}
            <div className="svc-cmp-card svc-cmp-card--us">
              <span className="sda-compare-pill" style={{ display: "inline-block", background: "rgba(61,199,122,0.15)", color: "#3DC77A", fontFamily: "Poppins, sans-serif", fontSize: 16, fontWeight: 600, borderRadius: 999, padding: "6px 16px", marginBottom: 18, border: "1px solid rgba(61,199,122,0.3)" }}>✓ {page.compare.us.name}</span>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {page.compare.us.points.map((pt) => (
                  <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: "Poppins, sans-serif", fontSize: 15, color: "#ffffff", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: 2 }}><CheckIcon /></span><span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}><PillCta /></div>
        </div>
      </section>

      {/* 9. Industries (CREAM) */}
      <section className="sda-industries" style={{ background: C_CREAM, padding: "60px 20px" }} aria-label={page.industries.heading}>
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 style={{ color: C_DARK, fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, lineHeight: 1.2, textAlign: "center", margin: "0 0 12px" }}>{page.industries.heading}</h2>
          <p style={{ color: "#000000", fontFamily: "'Poppins', sans-serif", fontSize: 16, lineHeight: "26px", textAlign: "center", margin: "0 auto 40px", maxWidth: "720px" }}>{page.industries.intro}</p>
          <div className={`sda-ind-grid${page.industries.items.length % 3 === 0 && page.industries.items.length % 4 !== 0 ? " sda-ind-grid--3" : ""}`}>
            {page.industries.items.map((ind) => (
              <div key={ind.name} className="sda-ind-card">
                <span className="sda-ind-icon" aria-hidden="true"><Icon name={ind.icon} /></span>
                <h3 className="sda-ind-name">{ind.name}</h3>
                <p className="sda-ind-desc">{rich(ind.desc)}</p>
              </div>
            ))}
          </div>
          {page.industries.footnote && <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, color: "#000000", textAlign: "center", margin: "32px 0 0" }}>{page.industries.footnote}</p>}
        </div>
      </section>

      {/* 10. Why us (DARK, shared) */}
      <section className="std-why sda-why-section" style={{ background: C_DARK, color: C_TEXT, fontFamily: "'Poppins', sans-serif", fontSize: "16px", padding: "53px 20px" }} aria-label="Why brands choose Ecomm Wizards">
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="sda-why-heading">{why.heading[0]}{" "}<br className="sda-why-br-lg" /><span style={{ background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{why.heading[1]}</span></h2>
          <p className="sda-why-desc">{why.desc}</p>
          <div className="sda-why-grid">
            {why.cards.map((card) => (
              <div key={card.title} className="sda-why-card">
                <span className="sda-why-icon" aria-hidden="true">{card.icon}</span>
                <h3 className="sda-why-card-title">{card.title}</h3>
                <p className="sda-why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="sda-why-closing">{why.closing}</p>
          <div style={{ display: "flex", justifyContent: "center" }}><PillCta /></div>
        </div>
      </section>

      {/* 11. FAQ (WHITE) */}
      <section className="sda-faq-section" style={{ background: C_WHITE, fontFamily: "'Poppins', sans-serif" }} aria-label={page.faqHeading}>
        <div className="sda-faq__inner mx-auto" style={{ maxWidth: "1100px" }}>
          <h2 className="sda-faq__title">{page.faqHeading}</h2>
          <SdaFaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 12. Book a call (CREAM, shared calendar) */}
      <section id="book-a-call" style={{ background: C_CREAM, padding: "60px 20px 64px", scrollMarginTop: "90px" }} aria-label={page.book.heading}>
        <div className="mx-auto sda-book-grid" style={{ maxWidth: "1220px" }}>
          <div>
            <p className="sda-book-label">Free Discovery Call</p>
            <h2 className="sda-book-h2" style={{ color: C_DARK }}>{page.book.heading}</h2>
            <p className="sda-book-sub" style={{ color: "rgba(0,0,0,0.72)", maxWidth: 500 }}>{page.book.sub}</p>
            <div className="sda-book-wyg">
              {page.book.bullets.map((w) => (<div key={w} className="sda-book-wyg-row"><CheckIcon /><span>{w}</span></div>))}
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
          <div className="sda-book-cal"><CalEmbed /></div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(page.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListJsonLd(trail, page.path)) }} />
      <ServiceSchema url={url} name={page.shortTitle} serviceType={page.serviceType} description={page.metaDescription} areaServed={page.geo.areaServed} areaServedType={page.geo.type === "state" ? "State" : "AdministrativeArea"} />

      <HubCityLinks heading={`${hubPathToLabel(page.hub)} for Brands in Other Markets`} pages={siblings} />

      <RelatedServices current={page.hub} />

      <a href="#book-a-call" className="sda-spin-cta" aria-label="Book a free discovery call">
        <span className="sda-spin-cta-disc">
          <svg className="sda-spin-cta-text" viewBox="0 0 100 100" aria-hidden>
            <defs><path id="svcSpinPath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" /></defs>
            <text textLength="225" lengthAdjust="spacingAndGlyphs"><textPath href="#svcSpinPath" startOffset="0%">BOOK A CALL &#8226; BOOK A CALL &#8226;&#160;</textPath></text>
          </svg>
          <svg className="sda-spin-cta-arrow" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M7 17L17 7M17 7H9M17 7v8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </a>

      <style dangerouslySetInnerHTML={{ __html: CSS }} />
    </>
  );
}

const CSS = `
.si-hero-img-wrap { display:flex; align-items:center; justify-content:center; }
.si-hero-img { width:100%; height:auto; border-radius:16px; display:block; box-shadow:0 24px 64px rgba(0,0,0,0.45); }
@media (max-width:1023px){ .si-hero-img-wrap { margin-top:8px; } }
.sda-hero-secondary-cta:hover { color:#fff !important; }
.sda-trust-track { display:flex; align-items:center; gap:40px; width:max-content; animation:sdaTrustScroll 32s linear infinite; }
.std-trust-carousel:hover .sda-trust-track { animation-play-state:paused; }
@keyframes sdaTrustScroll { from { transform:translate3d(0,0,0); } to { transform:translate3d(-50%,0,0); } }
@media (max-width:640px){ .sda-trust-track { gap:16px !important; } .std-trust-logo { height:36px; width:auto; max-width:120px; object-fit:contain; } }
.std-badge { display:inline-block; padding:6px 16px; background:rgba(97,206,112,0.12); border:1px solid rgba(97,206,112,0.3); border-radius:999px; color:#61ce70; font-size:13px; font-weight:600; letter-spacing:.04em; text-transform:uppercase; }
.std-label { font-size:13px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; color:#334155; }
.std-hero-stats { display:flex; flex-wrap:wrap; margin-top:32px; border-top:1px solid rgba(255,255,255,0.12); padding-top:24px; }
.std-hero-stat-item { display:flex; flex-direction:column; gap:4px; padding:0 28px 0 0; margin-right:28px; border-right:1px solid rgba(255,255,255,0.12); }
.std-hero-stat-item:last-child { border-right:none; padding-right:0; margin-right:0; }
.std-hero-stat-num { font-size:28px; font-weight:800; line-height:1; background:var(--brand-gradient); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.std-hero-stat-label { font-size:13px; font-weight:500; color:#fff; letter-spacing:.02em; }
.std-cta-sol { position:relative; display:inline-flex; align-items:center; gap:12px; background:#000; color:#fff; font-family:'Poppins',sans-serif; font-weight:600; font-size:16px; border-radius:50px; padding:20px 45px; text-decoration:none; line-height:1; }
.std-cta-sol::before { content:''; position:absolute; inset:0; border-radius:50px; padding:2px; background:${GRADIENT}; -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:destination-out; mask-composite:exclude; opacity:0; transition:opacity .25s ease; pointer-events:none; }
.std-cta-sol:hover::before { opacity:1; }
.std-cta-sol:visited, .std-cta-sol:focus, .std-cta-sol:active { color:#fff; text-decoration:none; }
.std-acc-item { border-top:1px solid rgba(17,17,17,.14); }
.std-acc-item:last-child { border-bottom:1px solid rgba(17,17,17,.14); }
.std-acc-icon--open { transform:rotate(180deg); }

.si-feat-heading { color:#000; font-family:'Poppins',sans-serif; font-size:42px; font-weight:700; line-height:1.2; text-align:center; margin:0 auto 16px; max-width:1000px; }
.si-feat-desc { color:rgba(0,0,0,.75); font-family:'Poppins',sans-serif; font-size:18px; line-height:28px; text-align:center; margin:0 auto 24px; max-width:1000px; }
.si-feat-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.si-feat-grid--4 { grid-template-columns:repeat(2,1fr); }
.si-feat-card { background:#fff; border-radius:16px; padding:28px; border:1px solid rgba(0,0,0,0.07); display:flex; flex-direction:column; gap:12px; }
.si-feat-icon { display:inline-flex; align-items:center; justify-content:center; width:48px; height:48px; background:rgba(61,199,122,0.1); border-radius:12px; color:#2A9555; }
.si-feat-name { font-family:'Poppins',sans-serif; font-size:18px; font-weight:700; color:#000; margin:0; line-height:1.3; }
.si-feat-desc-text { font-family:'Poppins',sans-serif; font-size:14px; color:#334155; line-height:1.7; margin:0; flex-grow:1; }
.si-feat-roi { font-family:'Poppins',sans-serif; font-size:13px; color:#2A9555; line-height:1.5; background:rgba(61,199,122,0.08); border-radius:8px; padding:10px 14px; border-left:3px solid #3DC77A; margin-top:auto; }
.si-feat-roi-label { font-weight:700; }

.svc-summary { background:${C_CREAM}; padding:40px 20px; }
.svc-summary-card { max-width:1040px; background:#fff; border:1px solid rgba(0,0,0,0.07); border-left:4px solid #3DC77A; border-radius:16px; padding:26px 32px; box-shadow:0 8px 30px rgba(0,0,0,0.05); }
.svc-summary-label { font-family:'Poppins',sans-serif; font-size:12px; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#2A9555; margin:0 0 8px; }
.svc-summary-text { font-family:'Poppins',sans-serif; font-size:17px; line-height:29px; color:#1f2937; margin:0; }
@media (max-width:640px){ .svc-summary { padding:28px 16px; } .svc-summary-card { padding:20px 20px; } .svc-summary-text { font-size:15.5px; line-height:26px; } }

.svc-local-label { font-family:'Poppins',sans-serif; font-size:13px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; color:#61ce70; text-align:center; margin:0 0 12px; }
.svc-local-h2 { font-family:'Poppins',sans-serif; font-size:42px; font-weight:700; line-height:1.2; color:#fff; text-align:center; margin:0 auto 16px; max-width:1000px; }
.svc-local-intro { font-family:'Poppins',sans-serif; font-size:17px; line-height:28px; color:rgba(255,255,255,.85); text-align:center; margin:0 auto 32px; max-width:900px; }
.svc-local-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.svc-local-grid--2, .svc-local-grid--4 { grid-template-columns:repeat(2,1fr); }
.svc-local-card { position:relative; background:#0a0a0a; border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:28px; display:flex; flex-direction:column; gap:12px; }
.svc-local-icon { display:inline-flex; align-items:center; justify-content:center; width:48px; height:48px; background:rgba(61,199,122,0.12); border-radius:12px; color:#4FB872; }
.svc-local-name { font-family:'Poppins',sans-serif; font-size:20px; font-weight:700; color:#fff; margin:0; line-height:1.3; }
.svc-local-desc { font-family:'Poppins',sans-serif; font-size:15px; color:rgba(255,255,255,.82); line-height:1.7; margin:0; }

.sda-cs-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.sda-cs-card { transition:transform .22s ease, box-shadow .22s ease; }
.sda-cs-card:hover { transform:translateY(-6px); box-shadow:0 16px 48px rgba(0,0,0,0.10); }
.sda-cs-card-4th { display:none !important; }

.svc-cmp-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-top:24px; align-items:stretch; }
.svc-cmp-grid--3 { grid-template-columns:repeat(3,1fr); }
.svc-cmp-card { background:#121212; border-radius:16px; padding:26px; border:1px solid rgba(255,255,255,0.06); }
.svc-cmp-card--us { border:2px solid rgba(61,199,122,0.45); box-shadow:0 8px 30px rgba(61,199,122,0.12); }
.svc-cmp-name { font-family:'Poppins',sans-serif; font-size:18px; font-weight:700; color:#fff; margin:0 0 14px; line-height:1.3; }
.svc-cmp-k { font-family:'Poppins',sans-serif; font-size:12px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#3DC77A; margin:0 0 4px; }
.svc-cmp-k--warn { color:#fbbf24; margin-top:14px; }
.svc-cmp-v { font-family:'Poppins',sans-serif; font-size:14.5px; color:rgba(255,255,255,.85); line-height:1.6; margin:0; }

.sda-ind-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.sda-ind-grid--3 { grid-template-columns:repeat(3,1fr); }
.sda-ind-card { background:#fff; border-radius:16px; padding:24px; border:1px solid rgba(0,0,0,0.07); display:flex; flex-direction:column; gap:10px; }
.sda-ind-icon { display:inline-flex; align-items:center; justify-content:center; width:48px; height:48px; background:rgba(61,199,122,0.1); border-radius:12px; color:#2A9555; }
.sda-ind-name { font-family:'Poppins',sans-serif; font-size:16px; font-weight:700; color:#000; margin:0; line-height:1.3; }
.sda-ind-desc { font-family:'Poppins',sans-serif; font-size:13.5px; color:#334155; line-height:1.65; margin:0; }

.sda-why-heading { color:#fff; font-family:'Poppins',sans-serif; font-size:42px; font-weight:700; line-height:52px; text-align:center; margin:0 auto 24px; }
.sda-why-br-lg { display:inline; }
.sda-why-desc { color:#fff; font-family:'Poppins',sans-serif; font-size:18px; line-height:28px; text-align:center; margin:0 auto 24px; max-width:980px; }
.sda-why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin:0 0 30px; }
.sda-why-card { position:relative; background:#0a0a0a; padding:30px; border-radius:16px; border:1px solid rgba(255,255,255,0.08); display:flex; flex-direction:column; align-items:center; text-align:center; }
.sda-why-icon { display:inline-flex; align-items:center; justify-content:center; width:56px; height:56px; margin-bottom:10px; color:#4FB872; }
.sda-why-card-title { color:#fff; font-family:'Poppins',sans-serif; font-size:20px; font-weight:700; line-height:30px; margin:0 0 14px; }
.sda-why-card-desc { color:#fff; font-family:'Poppins',sans-serif; font-size:15px; line-height:24px; margin:0; }
.sda-why-hl { font-weight:700; background-image:${GRADIENT}; -webkit-background-clip:text; background-clip:text; color:transparent; }
.sda-why-closing { color:#fff; font-family:'Poppins',sans-serif; font-size:18px; line-height:28px; text-align:center; margin:20px auto; max-width:1100px; }

.sda-faq__inner { padding:40px 15px; }
.sda-faq__title { color:#000; font-family:'Poppins',sans-serif; font-size:32px; font-weight:700; line-height:1.2; text-align:center; margin:0 0 32px; }
.sda-faq__list { list-style:none; margin:0; padding:0; border-top:1px solid #E5E7EB; }
.sda-faq__item { border-bottom:1px solid #E5E7EB; }
.sda-faq__q { color:#000; font-family:'Poppins',sans-serif; font-weight:600; font-size:16px; line-height:1.4; flex:1; }
.sda-faq__chev { display:inline-flex; align-items:center; justify-content:center; color:#000; flex-shrink:0; }
.sda-faq__a-text { margin:0 0 22px; color:#334155; font-family:'Poppins',sans-serif; font-size:15px; line-height:1.7; }
@media (min-width:1024px){ .sda-faq__inner { padding:72px 20px; } .sda-faq__title { font-size:44px; margin-bottom:40px; } .sda-faq__q { font-size:17px; } .sda-faq__a-text { font-size:16px; } }

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
.sda-book-chip svg { color:#2A9555; }
.sda-book-cal { background:#fff; border-radius:20px; padding:14px; box-shadow:0 24px 70px rgba(0,0,0,.14); border:1px solid rgba(0,0,0,.06); }
.bkc-cal-wrap { position:relative; min-height:600px; border-radius:12px; overflow:hidden; }
.bkc-cal-loading { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:#94a3b8; font-family:'Poppins',sans-serif; font-size:14px; }
.bkc-cal-inline { position:relative; width:100%; min-height:600px; }
.bkc-cal-inline iframe { width:100% !important; }

.sda-spin-cta { position:fixed; right:16px; bottom:18px; z-index:60; width:92px; height:92px; display:none; }
@media (max-width:767px){ .sda-spin-cta { display:block; } }
.sda-spin-cta-disc { position:relative; display:block; width:100%; height:100%; border-radius:50%; border:2px solid transparent; background:linear-gradient(#000,#000) padding-box, ${GRADIENT} border-box; box-shadow:0 10px 28px rgba(0,0,0,0.35); }
.sda-spin-cta-text { position:absolute; inset:4px; width:calc(100% - 8px); height:calc(100% - 8px); animation:sdaSpin 12s linear infinite; transform-origin:50% 50%; }
.sda-spin-cta-text text { fill:#fff; font-family:'Poppins',sans-serif; font-size:10.5px; font-weight:600; letter-spacing:1.5px; }
.sda-spin-cta-arrow { position:absolute; top:50%; left:50%; width:24px; height:24px; transform:translate(-50%,-50%); }
@keyframes sdaSpin { to { transform:rotate(360deg); } }
@media (prefers-reduced-motion: reduce){ .sda-spin-cta-text, .sda-trust-track { animation:none; } }

@media (max-width:1280px){ .std-hero-stats { flex-wrap:nowrap !important; } .std-hero-stat-item { padding-right:20px !important; margin-right:20px !important; } }
@media (max-width:1024px){
  .std-hero-h1 { font-size:40px !important; }
  .std-solutions h2 { font-size:38px !important; }
  .std-solutions-grid { grid-template-columns:1fr 1.1fr !important; gap:40px !important; }
  .std-hero-stats { margin-top:16px !important; padding-top:16px !important; }
  .std-hero-stat-item { padding-right:16px !important; margin-right:16px !important; }
  .std-hero-stat-num { font-size:22px !important; }
  .std-hero-stat-label { font-size:12px !important; }
  .si-feat-heading, .svc-local-h2 { font-size:32px !important; }
  .si-feat-desc { font-size:16px !important; }
  .si-feat-grid, .svc-local-grid { grid-template-columns:repeat(2,1fr) !important; }
  .svc-cmp-grid { grid-template-columns:repeat(2,1fr) !important; }
  .sda-why-heading { font-size:30px !important; line-height:40px !important; }
  .sda-why-br-lg { display:none !important; }
  .sda-why-grid { grid-template-columns:repeat(2,1fr) !important; gap:16px !important; }
  .sda-ind-grid { gap:12px !important; }
}
@media (max-width:900px){ .sda-book-grid { grid-template-columns:1fr; gap:30px; } }
@media (max-width:768px){
  .sda-cs-grid { grid-template-columns:repeat(2,1fr); gap:16px; } .sda-cs-card-4th { display:flex !important; }
  .sda-ind-grid, .sda-ind-grid--3 { grid-template-columns:repeat(2,1fr) !important; }
  .std-solutions-grid { gap:24px !important; }
}
@media (max-width:640px){
  .std-hero > div { padding:46px 18px !important; }
  .std-trust > div { padding:40px 20px !important; }
  .sda-feat, .svc-local, .sda-industries { padding:40px 16px !important; }
  .si-feat-heading, .svc-local-h2 { font-size:26px !important; }
  .si-feat-grid, .svc-local-grid, .svc-cmp-grid, .sda-why-grid { grid-template-columns:1fr !important; }
  .si-feat-card, .svc-local-card { padding:22px !important; }
  .std-solutions > div { padding:40px 18px !important; gap:36px !important; }
  .std-solutions-grid { grid-template-columns:1fr !important; }
  .std-solutions-left { position:static !important; }
  .std-solutions h2 { font-size:26px !important; }
  .std-hero-h1 { font-size:28px !important; line-height:1.22 !important; }
  .std-hero-p { font-size:14px !important; line-height:24px !important; }
  .std-hero-stat-num { font-size:20px !important; }
  .std-hero-stat-label { font-size:11px !important; }
  .sda-cs-heading { font-size:26px !important; }
  .sda-compare-h2 { font-size:26px !important; line-height:1.25 !important; }
  .sda-compare > div { padding:46px 0 !important; }
  .sda-why-heading { font-size:26px !important; line-height:34px !important; }
  #book-a-call { padding-top:40px !important; padding-bottom:40px !important; }
  .sda-book-chips { display:none; }
}
@media (max-width:540px){ .sda-cs-grid { grid-template-columns:1fr; } .sda-cs-card-4th { display:none !important; } }
`;
