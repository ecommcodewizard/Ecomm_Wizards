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

const DELIVERABLES = [
  { icon: "🎨", title: "Custom Shopify Theme Design",       desc: "Bespoke Liquid themes built from scratch to match your brand and convert visitors." },
  { icon: "📐", title: "Figma to Shopify Conversion",       desc: "Pixel-perfect translation of your design file into a fully functional Shopify store." },
  { icon: "🚀", title: "New Store Development",              desc: "Full setup — products, collections, payments, shipping, and launch-ready configuration." },
  { icon: "⚡", title: "Shopify Plus Development",           desc: "Enterprise-grade stores with custom checkout, Scripts, Flow, and B2B functionality." },
  { icon: "🌐", title: "Headless / Hydrogen Storefronts",   desc: "Next.js and Hydrogen builds for brands that need maximum speed and flexibility." },
  { icon: "🔌", title: "ERP & App Integrations",            desc: "Connect your store to NetSuite, SAP, 3PLs, CRMs, and any third-party system." },
];

const PROCESS = [
  { step: "01", title: "Discovery & Strategy",   desc: "We audit your brand, competitors, and goals to map out the perfect Shopify architecture." },
  { step: "02", title: "UX & Design",            desc: "Wireframes and high-fidelity mockups designed for conversion — reviewed and approved by you." },
  { step: "03", title: "Development",            desc: "Clean, optimised Liquid (or Hydrogen) code. Mobile-first. Accessibility-compliant. Fast." },
  { step: "04", title: "QA & Testing",           desc: "Cross-browser, cross-device testing. Speed benchmarks. Checkout flow validation." },
  { step: "05", title: "Launch & Handover",      desc: "Zero-downtime go-live with full training, documentation, and post-launch support." },
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
            .ssd-hero-inner { padding: 16px 0 40px !important; }
            .ssd-hero-text { padding: 0 !important; }
          }
          @media (max-width: 640px) {
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

      {/* Trust bar */}
      <div className="border-b border-slate-100 bg-white py-5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            Shopify Plus Partner · 700+ Stores Built · $900M+ Client Revenue · 28.5% Avg Conversion Lift
          </p>
        </div>
      </div>

      {/* What you get */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What's Included"
            title="Custom Shopify Store Development from Strategy to Launch"
            subtitle="Everything you need to go live with a high-converting Shopify store — and nothing you don't."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{d.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-800">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Process"
            title="Our Proven Shopify Store Development Process"
            subtitle="Five clear phases from kickoff to a live, revenue-generating Shopify store."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <span className="text-5xl font-extrabold text-slate-100 leading-none">{p.step}</span>
                <h3 className="mt-2 font-bold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
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
