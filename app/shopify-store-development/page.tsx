import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

const OLIVE_GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";

export const metadata: Metadata = {
  title: "Custom Shopify Store Development | Ecomm Wizards",
  description: "Custom Shopify store development built for speed, scalability, and conversions. 700+ stores launched. Speak with our Shopify experts today.",
};

const PROCESS = [
  {
    step: "1",
    title: "Vision & Goals Mapping",
    desc: "We start with Slack and weekly video calls to understand what you're building - whether it's a D2C brand, B2B platform, or something hybrid. We map out your tech stack needs before touching any code.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    step: "2",
    title: "Brand-First Design & System Setup",
    desc: "Our Shopify design and development agency crafts custom layouts in Figma that match your brand identity. Simultaneously, we architect your backend integrations: ERP systems, inventory tools, and POS connections.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="12" r="3" />
        <line x1="9" y1="6" x2="15" y2="11" />
        <line x1="9" y1="18" x2="15" y2="13" />
      </svg>
    ),
  },
  {
    step: "3",
    title: "Platform Configuration & Apps",
    desc: "Payments, shipping rules, tax compliance, subscription tools, we configure everything so your store runs on autopilot.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01A1.65 1.65 0 0 0 10 4.6V4.5a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V10a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    step: "4",
    title: "Feature Engineering & Custom Builds",
    desc: "Need functionality that doesn't exist? Our Shopify theme development agency codes it from scratch. Custom apps, AI recommendations, unique checkout experiences that separate you from competitors using basic templates.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    step: "5",
    title: "A/B Testing & Speed Optimization",
    desc: "We test payments, checkout flows, mobile responsiveness, and page speed. Every element gets optimized for SEO, load times, and zero launch-day surprises.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6"  y1="20" x2="6"  y2="14" />
      </svg>
    ),
  },
  {
    step: "6",
    title: "Dedicated Support for Launch Day",
    desc: "Daily check-ins and real-time Slack support during your go-live. We're with you every step to ensure a flawless launch with minimal downtime.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    step: "7",
    title: "Post-Launch Ongoing Support",
    desc: "Track metrics, gather customer feedback, and run A/B tests. Our Shopify app development agency helps you iterate and scale with data-driven enhancements.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6" />
        <path d="M22 11h-6" />
      </svg>
    ),
  },
];

const WHY = [
  "700+ Shopify stores built across every niche",
  "Shopify Plus Certified Partner",
  "Average 28.5% conversion rate improvement",
  "Dedicated project manager for every build",
  "Fixed-price quotes — no surprise invoices",
  "Post-launch growth support included",
];

const FAQS = [
  { q: "How long does a Shopify store build take?",       a: "A standard custom build takes 4–8 weeks. Shopify Plus enterprise projects typically take 8–12 weeks. We'll give you a precise timeline in your free quote." },
  { q: "Do you work with existing Shopify stores?",       a: "Yes — we handle redesigns, theme customisations, feature additions, and full rebuilds for existing stores just as often as new builds." },
  { q: "What's included in a custom Shopify build?",      a: "Custom theme design, development, product import, payments and shipping setup, app integrations, speed optimisation, and full QA before launch." },
  { q: "Can you build a Shopify Plus store?",             a: "Absolutely. We're a certified Shopify Plus partner with dozens of Plus builds under our belt, including custom checkout, Scripts, Flow automations, and B2B." },
];

export default function ShopifyStoreDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="w-full"
        style={{
          background: "#000000",
          color: "#334155",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
        }}
      >
        <div
          className="ssd-hero-inner mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 px-5 lg:px-0"
          style={{
            maxWidth: "1320px",
            padding: "60px 0",
          }}
        >
          {/* Left: text content (645 × 470, 10px padding) */}
          <div
            className="ssd-hero-text w-full lg:max-w-[645px] lg:flex-shrink-0"
            style={{
              padding: "10px",
              color: "#FFFFFF",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "16px",
            }}
          >
            <h1
              className="text-[32px] sm:text-[36px] lg:text-[42px]"
              style={{
                color: "#FFFFFF",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                lineHeight: 1.24,
                margin: 0,
              }}
            >
              <span
                style={{
                  background: OLIVE_GRADIENT,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Shopify Development Agency
              </span>{" "}
              That Builds High-Converting Stores
            </h1>

            <h2
              className="mt-5 text-[20px] sm:text-[22px] lg:text-[24px]"
              style={{
                color: "#FFFFFF",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                lineHeight: 1.4,
                margin: "20px 0 0",
              }}
            >
              Custom Shopify Store Development from Strategy to Launch
            </h2>

            <p
              className="mt-5 text-[15px] lg:text-[16px]"
              style={{
                color: "#FFFFFF",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.65,
                margin: "20px 0 0",
              }}
            >
              Looking to build a Shopify store that actually performs? Our Shopify
              store development agency specializes in custom Shopify store design
              and development, Shopify Plus builds, advanced integrations, and
              conversion-focused built to scale with your brand.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <span
                className="inline-flex p-[2px] rounded-full"
                style={{ background: OLIVE_GRADIENT }}
              >
                <Link
                  href="/book-shopify-consultation"
                  className="ssd-hero-cta group inline-flex items-center gap-2 rounded-full"
                  style={{
                    padding: "20px 45px",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    color: "#FFFFFF",
                    lineHeight: 1,
                    background: "#000000",
                    transition: "background 0.25s ease, color 0.25s ease",
                  }}
                >
                  <span className="ssd-hero-cta-label whitespace-nowrap">
                    Book a Call
                  </span>
                  <svg
                    className="ssd-hero-cta-arrow"
                    width="18"
                    height="12"
                    viewBox="0 0 15 10.55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </span>
            </div>
          </div>

          {/* Right: 3-column vertical-scrolling slider (625 × 450), tilted +15° (top leans right) */}
          <div
            className="ssd-hero-slider"
            style={{
              width: "625px",
              maxWidth: "100%",
              height: "450px",
              overflow: "hidden",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <div className="ssd-hero-tilt">
              {[
                // Repacked so that the two images that visibly clashed (4-1 "anti-aging" and
                // 4-5-1 "Canada light therapy") are no longer in adjacent columns moving in
                // opposite directions. They now travel together in cols 1 and 3 (both UP), and
                // col 2 (DOWN) holds a fully disjoint set — no image is shared between any two
                // adjacent columns, so nothing crosses paths between adjacent cols.
                //
                // Col 1 — UP, [4-1, 4-5-1, 4-3]. Center cycle: 4-5-1 → 4-3 → 4-1
                { dir: "up",   delay: "0s",   imgs: ["/images/build-hero-4-1.webp", "/images/build-hero-4-5-1.webp", "/images/build-hero-4-3.webp"] },
                // Col 2 — DOWN, [4-4, 4-2, 4-6-1]. Center cycle: 4-2 → 4-4 → 4-6-1.
                // Disjoint from cols 1 and 3.
                { dir: "down", delay: "0s",   imgs: ["/images/build-hero-4-4.webp", "/images/build-hero-4-2.webp", "/images/build-hero-4-6-1.webp"] },
                // Col 3 — UP, [4-3, 4-1, 4-5-1]. Center cycle: 4-1 → 4-5-1 → 4-3.
                // Same image set as col 1, but reordered so its center never coincides with
                // col 1's at the same phase.
                { dir: "up",   delay: "0s",   imgs: ["/images/build-hero-4-3.webp", "/images/build-hero-4-1.webp", "/images/build-hero-4-5-1.webp"] },
              ].map((col, idx) => (
                <div key={idx} className="ssd-hero-col">
                  <div
                    className={`ssd-hero-marquee ssd-hero-marquee-${col.dir}`}
                    style={{ animationDelay: col.delay }}
                  >
                    {[...col.imgs, ...col.imgs].map((src, i) => (
                      <div key={`${idx}-${i}`} className="ssd-hero-card">
                        <Image
                          src={src}
                          alt=""
                          width={221}
                          height={179}
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .ssd-hero-cta-label {
            background-image: ${OLIVE_GRADIENT};
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            transition: color 0.25s ease, background 0.25s ease;
          }
          .ssd-hero-cta-arrow {
            color: #FFFFFF;
            transition: color 0.25s ease;
          }
          .ssd-hero-cta:hover,
          .ssd-hero-cta:focus-visible {
            background: #FFFFFF !important;
            outline: none;
          }
          .ssd-hero-cta:hover .ssd-hero-cta-label,
          .ssd-hero-cta:focus-visible .ssd-hero-cta-label {
            color: #000000;
            -webkit-text-fill-color: #000000;
            background: none;
          }
          .ssd-hero-cta:hover .ssd-hero-cta-arrow,
          .ssd-hero-cta:focus-visible .ssd-hero-cta-arrow {
            color: #000000;
          }

          /* Tilted grid wrapper — rotates the whole slider +15° clockwise (top leans right) */
          .ssd-hero-tilt {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 720px;       /* 3 × 220.3 + 2 × 12px gap + safety */
            height: 760px;      /* tall enough to cover after rotation + scroll */
            transform: translate(-50%, -50%) rotate(15deg);
            transform-origin: center center;
            display: grid;
            grid-template-columns: 220.3px 220.3px 220.3px;
            gap: 12px;
            justify-content: center;
            align-content: center;
          }
          .ssd-hero-col {
            width: 220.3px;
            /* Exactly 3 cards stacked = 3 × 178.61 + 2 × 12 = 559.83px (no within-column dupe visible) */
            height: 559.83px;
            overflow: hidden;
            position: relative;
            /* Heavy fade zones at top/bottom so cycling duplicates and side cards
               are deep in shadow — only the middle band is clearly visible */
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 35%, #000 65%, transparent 100%);
                    mask-image: linear-gradient(to bottom, transparent 0%, #000 35%, #000 65%, transparent 100%);
          }
          .ssd-hero-marquee {
            display: flex;
            flex-direction: column;
            gap: 12px;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            will-change: transform;
          }
          .ssd-hero-card {
            width: 220.3px;
            height: 178.61px;
            overflow: hidden;
            border-radius: 10px;
            flex-shrink: 0;
            background: #111;
            box-shadow: 0 4px 14px rgba(0,0,0,0.45);
          }

          /* Corner-darkening vignette overlaid on the 625×450 viewport */
          .ssd-hero-slider::before,
          .ssd-hero-slider::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 3;
          }
          .ssd-hero-slider::before {
            background:
              radial-gradient(ellipse at top left,     rgba(0,0,0,0.95), transparent 38%),
              radial-gradient(ellipse at top right,    rgba(0,0,0,0.95), transparent 38%),
              radial-gradient(ellipse at bottom left,  rgba(0,0,0,0.95), transparent 38%),
              radial-gradient(ellipse at bottom right, rgba(0,0,0,0.95), transparent 38%);
          }
          .ssd-hero-slider::after {
            /* Outer edge dim — pulls everything toward black at the very corners */
            background: radial-gradient(ellipse at center, transparent 52%, rgba(0,0,0,0.8) 100%);
          }

          /* Translate the marquee track by exact card-stride multiples so loop is seamless
             AND the within-column duplication never lands in the visible band:
             stride = 3 cards = 3 × 190.61 = 571.83px (card 178.61 + gap 12) */
          @keyframes ssdMarqueeUp {
            0%   { transform: translateY(0); }
            100% { transform: translateY(-571.83px); }
          }
          @keyframes ssdMarqueeDown {
            0%   { transform: translateY(-571.83px); }
            100% { transform: translateY(0); }
          }
          .ssd-hero-marquee-up   { animation: ssdMarqueeUp   40s linear infinite; }
          .ssd-hero-marquee-down { animation: ssdMarqueeDown 40s linear infinite; }
          .ssd-hero-slider:hover .ssd-hero-marquee-up,
          .ssd-hero-slider:hover .ssd-hero-marquee-down {
            animation-play-state: paused;
          }

          @media (max-width: 1023px) {
            /* Pull text + button off the screen edges */
            .ssd-hero-inner { padding: 28px 20px 44px !important; gap: 28px !important; }
            .ssd-hero-text  {
              padding: 0 !important;
              max-width: 100% !important;
              text-align: center !important;     /* center-align headline / subheading / desc */
            }
            .ssd-hero-text .mt-8 {
              display: flex !important;          /* center the CTA pill on its own row */
              justify-content: center !important;
            }
            /* Hero typography — locked to inspector specs at 380px viewport */
            .ssd-hero-text h1 {
              font-size: 32px !important;     /* spec: 380 × 168, 32px Poppins */
              line-height: 42px !important;
            }
            .ssd-hero-text h2 {
              font-size: 20px !important;     /* spec: 380 × 60, 20px Poppins */
              line-height: 30px !important;
              margin-top: 18px !important;
            }
            .ssd-hero-text p {
              font-size: 16px !important;     /* spec: 380 × 156, 16px Poppins */
              line-height: 26px !important;
              margin-top: 18px !important;
            }
            /* CTA — spec: 150.93 × 50, 14px Poppins, padding 16px 22px */
            .ssd-hero-text .mt-8 { margin-top: 24px !important; }
            .ssd-hero-cta {
              padding: 16px 22px !important;
              font-size: 14px !important;
              gap: 8px !important;
            }
            /* Slider sits below text and stays clear of the side gutter */
            .ssd-hero-slider {
              width: 100% !important;
              max-width: 100% !important;
            }
          }
          @media (max-width: 640px) {
            .ssd-hero-inner { padding: 24px 16px 40px !important; gap: 24px !important; }
            /* Keep the same inspector-spec sizes on phones too */
            .ssd-hero-text h1 { font-size: 32px !important; line-height: 42px !important; }
            .ssd-hero-text h2 { font-size: 20px !important; line-height: 30px !important; }
            .ssd-hero-text p  { font-size: 16px !important; line-height: 26px !important; }
            .ssd-hero-cta     { padding: 16px 22px !important; font-size: 14px !important; }
            .ssd-hero-tilt {
              width: 540px;
              height: 600px;
              grid-template-columns: 165px 165px 165px;
            }
            .ssd-hero-col { width: 165px; height: 426px; }
            .ssd-hero-card { width: 165px; height: 134px; }
            @keyframes ssdMarqueeUpMobile {
              0%   { transform: translateY(0); }
              100% { transform: translateY(-438px); }   /* 3 × (134 + 12) */
            }
            @keyframes ssdMarqueeDownMobile {
              0%   { transform: translateY(-438px); }
              100% { transform: translateY(0); }
            }
            .ssd-hero-marquee-up   { animation-name: ssdMarqueeUpMobile; }
            .ssd-hero-marquee-down { animation-name: ssdMarqueeDownMobile; }
          }
        ` }} />
      </section>

      {/* Trusted by Leading Shopify Brands */}
      <section
        className="ssd-trust-section"
        style={{
          background: "#FFFFFF",
          color: "#334155",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
        }}
      >
        <div
          className="ssd-trust-inner mx-auto"
          style={{
            maxWidth: "1320px",
            padding: "60px 0",
          }}
        >
          <h2
            className="ssd-trust-heading text-center"
            style={{
              color: "#000000",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "22px",
              fontWeight: 700,
              lineHeight: 1.45,
              margin: 0,
            }}
          >
            Trusted by Leading Shopify Brands
          </h2>

          <div
            className="ssd-trust-carousel"
            style={{
              marginTop: "30px",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <div className="ssd-trust-track">
              {[
                { src: "/images/trust_logo_2.svg",  alt: "Peanuts" },
                { src: "/images/trust_logo_31.svg", alt: "Olaplex" },
                { src: "/images/trust_logo_32.svg", alt: "Forme" },
                { src: "/images/trust_logo_20.svg", alt: "SarahChloe" },
                { src: "/images/trust_logo_27.svg", alt: "Cellar.com" },
                { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "Lids HD" },
                // duplicate set for seamless marquee
                { src: "/images/trust_logo_2.svg",  alt: "" },
                { src: "/images/trust_logo_31.svg", alt: "" },
                { src: "/images/trust_logo_32.svg", alt: "" },
                { src: "/images/trust_logo_20.svg", alt: "" },
                { src: "/images/trust_logo_27.svg", alt: "" },
                { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "" },
              ].map((logo, i) => (
                <div key={i} className="ssd-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="ssd-trust-logo"
                    width={178}
                    height={86}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .ssd-trust-track {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 24px;
            width: 100%;
          }
          .ssd-trust-slide {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 178.32px;
            height: 86.04px;
          }
          .ssd-trust-logo {
            width: 178.32px;
            height: 86.04px;
            object-fit: contain;
            display: block;
          }
          /* Hide the duplicate set on desktop — only need it for the mobile marquee */
          .ssd-trust-slide:nth-child(n + 7) { display: none; }

          @media (max-width: 1023px) {
            .ssd-trust-section { padding: 0 16px; }
            .ssd-trust-inner { padding: 36px 0 !important; }
            .ssd-trust-heading { font-size: 20px !important; }
            .ssd-trust-carousel { margin-top: 24px !important; }
            /* Show all (originals + dupes) and run an auto-scroll marquee */
            .ssd-trust-slide:nth-child(n + 7) { display: flex !important; }
            .ssd-trust-track {
              width: max-content;
              justify-content: flex-start;
              gap: 32px;
              animation: ssdTrustScroll 28s linear infinite;
            }
            /* Per inspector: each logo on mobile is 174.99 × 84.44 */
            .ssd-trust-slide {
              width: 174.99px;
              height: 84.44px;
            }
            .ssd-trust-logo {
              width: 174.99px;
              height: 84.44px;
            }
            @keyframes ssdTrustScroll {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          }
        ` }} />
      </section>

      {/* What You Get — intro */}
      <section
        className="ssd-what-section"
        style={{
          background: "#FBF7ED",
          color: "#334155",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
          padding: "60px 20px",
        }}
      >
        <div
          className="ssd-what-inner mx-auto"
          style={{ maxWidth: "1320px" }}
        >
          <h2
            className="ssd-what-heading text-center"
            style={{
              color: "#000000",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "42px",
              fontWeight: 700,
              lineHeight: "52px",
              margin: "0 auto 28px",
              maxWidth: "924px",
            }}
          >
            What You Get With Our Shopify Store Development Services
          </h2>

          <p
            className="ssd-what-desc text-center"
            style={{
              color: "rgba(0, 0, 0, 0.8)",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "18px",
              lineHeight: "28px",
              margin: "0 auto 31.5px",
              maxWidth: "1320px",
            }}
          >
            Building a new Shopify store isn&apos;t about picking a theme and calling
            it done. It&apos;s about creating a custom ecommerce experience that fits
            your brand, your customers, and your growth goals. Whether you&apos;re
            starting from scratch or need a complete rebuild, our Shopify development
            agency treats your store like a revenue-generating machine. From the
            first wireframe to the final pixel, we build stores optimized for
            conversions, built to scale, and designed to make your competitors
            nervous.
          </p>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1023px) {
            .ssd-what-section { padding: 44px 20px !important; }
            .ssd-what-heading {
              font-size: 30px !important;     /* per inspector: 400 × 120, 30px Poppins */
              line-height: 40px !important;
              margin: 0 auto 24px !important;
            }
            .ssd-what-desc {
              font-size: 16px !important;     /* per inspector: 400 × 286, 16px Poppins */
              line-height: 26px !important;
              margin: 0 auto 28px !important; /* per inspector: 0 0 28px */
            }
          }
          @media (max-width: 640px) {
            .ssd-what-section { padding: 36px 16px !important; }
            .ssd-what-heading {
              font-size: 30px !important;     /* keep at 30px on phones too */
              line-height: 40px !important;
            }
            .ssd-what-desc {
              font-size: 16px !important;
              line-height: 26px !important;
              margin-bottom: 28px !important;
            }
          }
        ` }} />
      </section>

      {/* Who this service is for + stats */}
      <section
        className="ssd-who-section"
        style={{
          background: "#FBF7ED",
          color: "#334155",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
          padding: "0 20px 60px",
        }}
      >
        <div
          className="ssd-who-inner mx-auto"
          style={{ maxWidth: "1320px" }}
        >
          <div className="ssd-who-grid">
            {/* Left card: Who this service is for */}
            <div className="ssd-who-left">
              <h2 className="ssd-who-heading">
                Who This Shopify Development Service Is For
              </h2>

              <div className="ssd-who-items">
                {[
                  { title: "New Brands",                 desc: "Launch a Shopify store built for conversions from day one" },
                  { title: "Scaling Brands",             desc: "Redesign and optimize your store to increase revenue" },
                  { title: "Enterprise / Shopify Plus",  desc: "Custom development, integrations, and scalable infrastructure" },
                ].map((item) => (
                  <div key={item.title} className="ssd-who-item">
                    <div className="ssd-who-item-content">
                      <h3 className="ssd-who-item-title">{item.title}</h3>
                      <p className="ssd-who-item-desc">{item.desc}</p>
                    </div>
                    <span className="ssd-who-item-icon" aria-hidden>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" stroke="#000000" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>

              <div className="ssd-who-cta-wrap">
                <Link
                  href="/book-shopify-consultation"
                  className="ssd-who-cta"
                >
                  <span className="ssd-who-cta-label">Book a Free Call Now</span>
                  <svg className="ssd-who-cta-arrow" width="18" height="13" viewBox="0 0 15 10.55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right column: single card. Top half = stats slider (rotates).
                Bottom half = static divider + static logo row. */}
            <div className="ssd-who-right">
              <div className="ssd-who-stat-card">
                {/* Sliding stats */}
                <div className="ssd-who-stat-slider">
                  <div className="ssd-who-stat-track">
                    {(() => {
                      const stats = [
                        { num: "700+",   label: "Stores Built" },
                        { num: "$900M+", label: "Revenue Generated" },
                        { num: "10+",    label: "Awards For Ecomm Wizards" },
                        { num: "8+",     label: "Years of Experience" },
                      ];
                      // duplicate first slide at the tail so the wrap-around is seamless
                      return [...stats, stats[0]].map((s, i) => (
                        <div key={i} className="ssd-who-stat-slide">
                          <div className="ssd-who-stat-number">{s.num}</div>
                          <div className="ssd-who-stat-label">{s.label}</div>
                        </div>
                      ));
                    })()}
                  </div>
                </div>

                {/* Static divider */}
                <hr className="ssd-who-stat-divider" />

                {/* Static logo row */}
                <div className="ssd-who-stat-logos">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner_logo_7.svg" alt="Okendo"  className="ssd-who-stat-logo" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner_logo_6.svg" alt="Gorgias" className="ssd-who-stat-logo" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/partner_logo_5.svg" alt="Klaviyo" className="ssd-who-stat-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          /* ── Two-column grid ────────────────────────────────────────── */
          .ssd-who-grid {
            display: flex;
            gap: 20px;
            align-items: stretch;
            color: #334155;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
          }
          .ssd-who-left,
          .ssd-who-right {
            flex: 1 1 0;
            max-width: 650px;
            min-height: 600px;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            color: #334155;
          }

          /* ── Left card ──────────────────────────────────────────────── */
          .ssd-who-left {
            background: #FFFFFF;
            padding: 40px 30px 30px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
          }
          .ssd-who-heading {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 40px;
            font-weight: 700;
            line-height: 50px;
            margin: 0 0 32px;
            max-width: 590px;
          }
          .ssd-who-items {
            display: flex;
            flex-direction: column;
            flex: 1;
          }
          .ssd-who-item {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            padding: 20px 0;
            border-bottom: 1px solid #E5E5E5;
            color: #334155;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
          }
          .ssd-who-item:first-child { padding-top: 0; }
          .ssd-who-item:last-child  { border-bottom: 0; }
          .ssd-who-item-content { flex: 1; min-width: 0; max-width: 545px; }
          .ssd-who-item-title {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 18px;
            font-weight: 600;
            line-height: 26px;
            margin: 0 0 6px;
          }
          .ssd-who-item-desc {
            color: rgba(0,0,0,0.85);
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            line-height: 24px;
            margin: 0;
          }
          .ssd-who-item-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            flex-shrink: 0;
          }

          /* ── CTA (287.59 × 60, padding 20 45, #000 / #FFF) ──────────── */
          .ssd-who-cta-wrap { margin-top: 28px; }
          .ssd-who-cta {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 18px 43px;        /* 2px shaved each side; the 2px transparent border restores 287.59 × 60 */
            background:
              linear-gradient(#000000, #000000) padding-box,
              linear-gradient(#000000, #000000) border-box;
            color: #FFFFFF;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            line-height: 1;
            border: 2px solid transparent;
            border-radius: 999px;
            text-decoration: none;
            transition: background 0.3s ease;
          }
          .ssd-who-cta-label { color: #FFFFFF; }
          .ssd-who-cta-arrow { color: #FFFFFF; }
          /* On hover: keep the inside black + white text, but swap the 2px ring to the olive gradient */
          .ssd-who-cta:hover,
          .ssd-who-cta:focus-visible {
            outline: none;
            background:
              linear-gradient(#000000, #000000) padding-box,
              linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%) border-box;
          }

          /* ── Right column: image backdrop, white card pinned to bottom-left ── */
          .ssd-who-right {
            padding: 20px 30px 30px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;        /* card hugs the bottom of the wrapper */
            align-items: flex-start;          /* card hugs the left of the wrapper */
            background-image: url('/images/Group_1000004345_1.webp');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 16px;
          }
          .ssd-who-stat-card {
            width: 590px;
            max-width: 100%;
            height: 375.39px;
            background: #FFFFFF;
            border-radius: 16px;
            box-shadow: 0 12px 36px rgba(0, 0, 0, 0.12);
            color: #334155;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
          }

          /* The sliding region — only the number + label cycle here. */
          .ssd-who-stat-slider {
            width: 100%;
            overflow: hidden;
            position: relative;
          }
          .ssd-who-stat-track {
            display: flex;
            width: 500%;          /* 5 slides = 4 unique + 1 duplicate of slide 1 */
            animation: ssdStatsSlide 24s ease-in-out infinite;
            will-change: transform;
          }
          .ssd-who-stat-card:hover .ssd-who-stat-track {
            animation-play-state: paused;
          }
          .ssd-who-stat-slide {
            flex: 0 0 20%;        /* each slide = 1 / 5 of the track */
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          /* Counter — 530 × 86.39, 72px Poppins, margin 0 0 20px */
          .ssd-who-stat-number {
            font-family: 'Poppins', sans-serif;
            font-size: 72px;
            font-weight: 700;
            line-height: 86.39px;
            letter-spacing: -1px;
            margin: 0 0 20px;
            max-width: 530px;
            background-image: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .ssd-who-stat-label {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            margin: 0;
          }

          /* Static divider — sits between the slider and the logo row */
          .ssd-who-stat-divider {
            border: 0;
            border-top: 1px solid #E5E5E5;
            margin: 36px 0 28px;
            width: 100%;
          }

          /* Static logo row */
          .ssd-who-stat-logos {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 16px;
            width: 100%;
          }
          .ssd-who-stat-logo {
            height: 32px;
            max-width: 150px;
            object-fit: contain;
            display: block;
          }

          /* Slide timing: 4 unique + 1 dup = 5 stops over 24s.
             Each stop holds for ~4.8s (~80% of a step), transitions over ~1.2s. */
          @keyframes ssdStatsSlide {
            0%,   18% { transform: translateX(0%);   }
            22%,  38% { transform: translateX(-20%); }
            42%,  58% { transform: translateX(-40%); }
            62%,  78% { transform: translateX(-60%); }
            82%, 100% { transform: translateX(-80%); }
          }

          /* ── Tablet & mobile ────────────────────────────────────────── */
          @media (max-width: 1023px) {
            .ssd-who-section { padding: 0 16px 56px !important; }
            .ssd-who-grid {
              flex-direction: column !important;
              gap: 24px !important;
              align-items: stretch !important;
            }
            .ssd-who-left,
            .ssd-who-right {
              flex: 0 0 auto !important;
              width: 100% !important;
              max-width: 100% !important;
              min-height: 0 !important;
            }

            /* Section heading — per inspector 360 × 120, 30px Poppins */
            .ssd-who-heading {
              font-size: 30px !important;
              line-height: 40px !important;
              margin-bottom: 24px !important;
            }

            /* Bullet rows: icon LEFT, content RIGHT.
               row-reverse swaps the visual order without touching the JSX. */
            .ssd-who-item {
              flex-direction: row-reverse !important;
              justify-content: flex-end !important;
              padding: 18px 0 !important;
              gap: 14px !important;
            }
            .ssd-who-item-content { flex: 1 1 auto !important; }
            .ssd-who-item-icon { margin-top: 4px !important; }

            /* Image backdrop must stay visible on mobile — keep wrapper padding
               and a tall enough viewport so the image shows above + around the card. */
            .ssd-who-right {
              padding: 16px !important;
              min-height: 460px !important;
            }
            .ssd-who-stat-card {
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              min-height: 0 !important;
              padding: 30px 20px 24px !important;
            }
            .ssd-who-stat-slide { padding: 0 !important; }
            .ssd-who-stat-number {
              font-size: 56px !important;
              line-height: 64px !important;
              margin-bottom: 14px !important;
            }
            .ssd-who-stat-label  { font-size: 18px !important; line-height: 26px !important; }
            .ssd-who-stat-divider { margin: 26px 0 22px !important; }
            .ssd-who-stat-logo  { height: 26px !important; max-width: 100px !important; }
          }

          @media (max-width: 640px) {
            .ssd-who-section { padding: 0 14px 48px !important; }
            .ssd-who-left { padding: 28px 20px 24px !important; }
            .ssd-who-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 20px !important; }
            .ssd-who-cta {
              padding: 14px 28px !important;
              width: 100% !important;
              justify-content: center !important;
            }
            .ssd-who-cta-wrap { display: flex; }

            .ssd-who-right {
              padding: 14px !important;
              min-height: 410px !important;
            }
            .ssd-who-stat-card { padding: 24px 18px 20px !important; }
            .ssd-who-stat-slide { padding: 0 !important; }
            .ssd-who-stat-number {
              font-size: 44px !important;
              line-height: 52px !important;
              margin-bottom: 10px !important;
            }
            .ssd-who-stat-label  { font-size: 16px !important; line-height: 24px !important; }
            .ssd-who-stat-divider { margin: 20px 0 16px !important; }
            .ssd-who-stat-logo  { height: 22px !important; max-width: 86px !important; }
            .ssd-who-stat-logos { gap: 8px !important; }
            .ssd-who-item { padding: 16px 0 !important; gap: 12px !important; }
            .ssd-who-item-title { font-size: 17px !important; }
            .ssd-who-item-desc  { font-size: 15px !important; line-height: 22px !important; }
          }
        ` }} />
      </section>

      {/* Our Proven Shopify Store Development Process */}
      <section
        className="ssd-process-section"
        style={{
          background: "#FFFFFF",
          color: "#334155",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
          padding: "60px 20px",
        }}
      >
        <div
          className="ssd-process-inner mx-auto"
          style={{ maxWidth: "1320px" }}
        >
          <div className="ssd-process-grid">
            {/* Left column: heading, description, CTA, image (650 × 1059.64, padding 10) */}
            <div className="ssd-process-left">
              <h2 className="ssd-process-heading">
                Our Proven Shopify Store Development Process
              </h2>

              <p className="ssd-process-desc">
                Our structured Shopify development process ensures your store
                launches optimized for performance, conversion, and long-term
                scalability.
              </p>

              <div className="ssd-process-cta-wrap">
                <Link href="/book-shopify-consultation" className="ssd-process-cta">
                  <span className="ssd-process-cta-label">Book a Call</span>
                  <svg className="ssd-process-cta-arrow" width="18" height="13" viewBox="0 0 15 10.55" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              <div className="ssd-process-image-wrap">
                <Image
                  src="/images/olaplex-px-new-2.webp"
                  alt="Shopify development workflow — design, code, and launch"
                  width={630}
                  height={678}
                  className="ssd-process-image"
                />
              </div>
            </div>

            {/* Right column: 6 numbered steps (650 × 1059.64, padding 10) */}
            <div className="ssd-process-right">
              <ul className="ssd-process-steps">
                {PROCESS.map((p) => (
                  <li key={p.step} className="ssd-process-step">
                    <div className="ssd-process-step-text">
                      <h3 className="ssd-process-step-title">
                        {p.step}. {p.title}
                      </h3>
                      <p className="ssd-process-step-desc">{p.desc}</p>
                    </div>
                    <span className="ssd-process-step-icon" aria-hidden="true">
                      {p.icon}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Mobile-only CTA — sits after the 7 bullets on phones/tablets,
                  hidden on desktop where the CTA above the image takes its place. */}
              <div className="ssd-process-cta-wrap-mobile">
                <Link href="/book-shopify-consultation" className="ssd-process-cta">
                  <span className="ssd-process-cta-label">Book a Call</span>
                  <svg className="ssd-process-cta-arrow" width="18" height="13" viewBox="0 0 15 10.55" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M0 5.275H15M15 5.275L9.5 0M15 5.275L9.5 10.55" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          /* ── Two-column grid ────────────────────────────────────────── */
          .ssd-process-grid {
            display: flex;
            gap: 20px;
            align-items: flex-start;
            color: #334155;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
          }
          .ssd-process-left,
          .ssd-process-right {
            flex: 1 1 0;
            max-width: 650px;
            padding: 10px;
            color: #334155;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
          }

          /* ── Left column ────────────────────────────────────────────── */
          .ssd-process-heading {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 40px;
            font-weight: 700;
            line-height: 50px;
            margin: 0 0 20px;
            max-width: 630px;
          }
          .ssd-process-desc {
            color: rgba(0, 0, 0, 0.8);
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            line-height: 26px;
            margin: 0 0 28px;
            max-width: 630px;
          }
          .ssd-process-cta-wrap { margin: 0 0 32px; }
          .ssd-process-cta-wrap-mobile { display: none; }
          .ssd-process-cta {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 18px 43px;        /* 2px shaved each side; 2px transparent border restores 210.2 × 60 */
            background:
              linear-gradient(#000000, #000000) padding-box,
              linear-gradient(#000000, #000000) border-box;
            color: #FFFFFF;
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            line-height: 1;
            border: 2px solid transparent;
            border-radius: 999px;
            text-decoration: none;
            transition: background 0.3s ease;
          }
          .ssd-process-cta-label { color: #FFFFFF; }
          .ssd-process-cta-arrow { color: #FFFFFF; }
          .ssd-process-cta:hover,
          .ssd-process-cta:focus-visible {
            outline: none;
            background:
              linear-gradient(#000000, #000000) padding-box,
              linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%) border-box;
          }

          .ssd-process-image-wrap {
            width: 100%;
            max-width: 630px;
          }
          .ssd-process-image {
            width: 100%;
            height: auto;
            display: block;
            object-fit: contain;
          }

          /* ── Right column: stepped list ─────────────────────────────── */
          .ssd-process-steps {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
          }
          .ssd-process-step {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            padding: 0 0 20px;        /* per inspector: 0 0 20px on each row */
            border-bottom: 1px solid #E5E5E5;
            margin-bottom: 20px;
          }
          .ssd-process-step:last-child {
            border-bottom: 0;
            margin-bottom: 0;
          }
          .ssd-process-step-text { flex: 1; min-width: 0; }
          .ssd-process-step-title {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 18px;          /* per inspector: 336.08 × 25, 18px Poppins */
            font-weight: 700;
            line-height: 25px;
            margin: 0 0 10px;
          }
          .ssd-process-step-desc {
            color: rgba(0, 0, 0, 0.8);
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            line-height: 26px;
            margin: 0;
          }
          .ssd-process-step-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            flex-shrink: 0;
            color: #000000;
            margin-top: 4px;
          }

          /* ── Tablet & mobile ────────────────────────────────────────── */
          @media (max-width: 1023px) {
            .ssd-process-section { padding: 44px 20px !important; }
            .ssd-process-grid {
              flex-direction: column !important;
              gap: 32px !important;
              align-items: stretch !important;
            }
            .ssd-process-left,
            .ssd-process-right {
              flex: 0 0 auto !important;
              width: 100% !important;
              max-width: 100% !important;
              padding: 0 !important;
            }
            /* Center heading + desc + CTA on mobile to match the rest of the page */
            .ssd-process-left { text-align: center !important; }
            .ssd-process-heading {
              font-size: 30px !important;
              line-height: 40px !important;
              margin: 0 auto 16px !important;
            }
            .ssd-process-desc {
              font-size: 16px !important;
              line-height: 26px !important;
              margin: 0 auto 24px !important;
            }
            /* Hide the desktop-position CTA on mobile and reveal the one
               that sits AFTER the 7 bullets in the right column. */
            .ssd-process-cta-wrap { display: none !important; }
            .ssd-process-cta-wrap-mobile {
              display: flex !important;
              justify-content: center !important;
              margin-top: 28px !important;
            }
            .ssd-process-cta {
              padding: 16px 32px !important;
              font-size: 14px !important;
            }
            .ssd-process-image-wrap {
              margin: 0 auto !important;
              max-width: 100% !important;
            }
            /* Bullet rows: icon LEFT, content RIGHT */
            .ssd-process-step {
              flex-direction: row-reverse !important;
              gap: 14px !important;
              text-align: left !important;
            }
            .ssd-process-step-title {
              font-size: 18px !important;     /* per inspector: 18px Poppins */
              line-height: 25px !important;
            }
            .ssd-process-step-desc {
              font-size: 15px !important;
              line-height: 24px !important;
            }
            .ssd-process-step-icon { margin-top: 2px !important; }
          }
          @media (max-width: 640px) {
            .ssd-process-section { padding: 36px 16px !important; }
            .ssd-process-heading { font-size: 28px !important; line-height: 36px !important; }
            .ssd-process-desc { font-size: 15px !important; line-height: 24px !important; }
            .ssd-process-cta {
              padding: 14px 28px !important;
              width: 100% !important;
              justify-content: center !important;
            }
            .ssd-process-step { gap: 12px !important; padding-bottom: 18px !important; margin-bottom: 18px !important; }
            .ssd-process-step-title { font-size: 18px !important; line-height: 25px !important; margin-bottom: 8px !important; }
            .ssd-process-step-desc { font-size: 14px !important; line-height: 22px !important; }
            .ssd-process-step-icon { width: 26px !important; height: 26px !important; }
          }
        ` }} />
      </section>

      {/* Why us */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                badge="Why Ecomm Wizards"
                title="Why Brands Choose Us for Shopify Development"
                centered={false}
              />
              <ul className="space-y-3">
                {WHY.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-white">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <a href="/free-shopify-store-audit" className="btn-primary">Get a Free Quote</a>
                <a href="/book-shopify-consultation" className="btn-outline">Book a Call</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["700+","Stores Built"],["$900M+","Revenue Generated"],["8+","Years Experience"],["28.5%","Avg Conversion Lift"]].map(([v, l]) => (
                <div key={l} className="flex flex-col items-center justify-center rounded-2xl bg-slate-700 p-8 text-center text-white">
                  <span className="text-4xl font-extrabold">{v}</span>
                  <span className="mt-2 text-xs text-slate-300">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader badge="FAQs" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-800">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Build Your Dream Shopify Store?"
        subheading="Get a fixed-price quote from our expert team within 24 hours. No commitment required."
        primaryLabel="Get a Free Quote"
      />
    </>
  );
}
