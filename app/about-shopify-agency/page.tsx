import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AboutHero from "@/components/ui/AboutHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "About Ecomm Wizards | Leading Shopify Plus Agency",
  description: "Ecomm Wizards is a leading Shopify Plus agency with 8+ years of experience and $900M+ in client revenue. Meet the team behind 700+ successful Shopify stores.",
};

const VALUES = [
  {
    title: "100% Satisfaction Guarantee",
    desc: "We stand behind every project we deliver. If you're not satisfied, we make it right — no excuses.",
  },
  {
    title: "Result-Oriented Approach",
    desc: "We don't measure success by deliverables. We measure it by revenue, conversions, and growth for your brand.",
  },
  {
    title: "A Hub for Innovative Minds",
    desc: "Our team continuously trains on Shopify Plus features, AI tools, and conversion psychology — staying ahead so you don't have to.",
  },
  {
    title: "Ownership Mentality",
    desc: "Every project is treated like it's our own brand. No shortcuts. No templates. No recycled strategies.",
  },
];

const JOURNEY = [
  { year: "2018", title: "Founded",          desc: "Started as a boutique Shopify development shop focused on high-converting custom themes." },
  { year: "2019", title: "First 50 Stores",  desc: "Grew rapidly through referrals, building a reputation for speed and quality." },
  { year: "2021", title: "Shopify Plus Partner", desc: "Became an official Shopify Plus Partner, unlocking enterprise-grade capabilities." },
  { year: "2023", title: "500+ Stores",      desc: "Passed 500 successful store launches with $500M+ in client revenue tracked." },
  { year: "2026", title: "700+ Stores",      desc: "Now a multi-award-winning agency with $900M+ in client revenue and a global team." },
];

const TEAM = [
  { name: "Brook Sanderson",    role: "CEO & Founder",           photo: "/images/Brooke_06ed70b4-ed6c-424a-a067-cd3985d1d53a.webp" },
  { name: "Jake Amos",          role: "Head of Development",     photo: "/images/Jack.webp" },
  { name: "Truc Peter",         role: "Lead Designer",           photo: "/images/truc_3cf9e54f-2814-4e5c-8095-b741b24e790d.webp" },
  { name: "Giana Moretti",      role: "CRO Strategist",          photo: "/images/Giana.webp" },
  { name: "Anthony Spallone",   role: "Shopify Plus Specialist", photo: "/images/Anthony_b22b2509-6844-4fb7-9f9c-2b601cd1d475.webp" },
  { name: "Julia Matviichuk",   role: "SEO Lead",                photo: "/images/Julia_Matviichuk.webp" },
  { name: "Caroline Jay",       role: "Client Success Manager",  photo: "/images/Caroline.webp" },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* Agency Proof Showcase */}
      <section className="bg-white" style={{ padding: "40px 0 0", overflowX: "clip" }}>

        {/* Centered highlight text */}
        <div className="mx-auto px-6 sm:px-10 lg:px-16" style={{ maxWidth: "1080px" }}>
          <p
            className="text-center mx-auto"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 1.5vw, 20px)",
              lineHeight: "1.65",
              color: "#000000",
              maxWidth: "900px",
              marginBottom: "36px",
            }}
          >
            The Shopify Agency Behind{" "}
            <strong>$900M+ in Client Revenue.</strong>{" "}
            From startup founders launching their first Shopify store to enterprise
            brands upgrading to Shopify Plus, we&apos;ve helped over 700+&nbsp;ecommerce
            businesses scale profitably.
          </p>
        </div>

        {/* Full-width positioning context — lets convertionrate-box bleed left of container */}
        <div className="relative w-full">

          {/* convertionrate-box — dark card behind both images.
              Anchored so its left portion is visible in the margin to the left of the
              1080px container; right portion slides behind the workspace image (lower z-index). */}
          <div
            aria-hidden="true"
            className="absolute hidden xl:block"
            style={{
              left: "calc(50% - 540px - 80px)",
              top: "6%",
              width: "min(38%, 520px)",
              zIndex: 2,
            }}
          >
            <Image
              src="/images/convertionrate-box.webp"
              alt=""
              width={600}
              height={400}
              className="w-full rounded-2xl"
            />
          </div>

          {/* 1080px container: workspace image + arrow + mobile mockup */}
          <div className="mx-auto px-6 sm:px-10 lg:px-16 relative" style={{ maxWidth: "1080px" }}>

            {/* Image composition */}
            <div className="relative">

              {/* Main workspace image — z-index 5, sits on top of convertionrate-box */}
              <div
                className="relative overflow-hidden w-[82%] mx-auto xl:w-full xl:mx-0"
                style={{ aspectRatio: "1024 / 544", zIndex: 5, position: "relative" }}
              >
                <Image
                  src="/images/new-about-image_1_2048x2048-1.webp"
                  alt="Ecomm Wizards client ecommerce store workflow"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Grey dashed arrow — starts at the top-left corner of the workspace image,
                  makes two upward curls (CCW semicircles), then curves right to the mobile mockup.
                  SVG is placed 60px above the image top so the curls are visible in the padding. */}
              <div
                aria-hidden="true"
                className="absolute pointer-events-none hidden xl:block"
                style={{
                  left: 0,
                  top: "-60px",
                  width: "112%",
                  zIndex: 6,
                  lineHeight: 0,
                }}
              >
                <svg
                  viewBox="0 0 1060 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", height: "auto", display: "block" }}
                >
                  <defs>
                    <marker
                      id="two-curl-arrow"
                      markerWidth="8"
                      markerHeight="7"
                      refX="7"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 8 3.5, 0 7" fill="#9ca3af" />
                    </marker>
                  </defs>
                  {/*
                    y=60 corresponds to the workspace image top edge (SVG is offset -60px above it).
                    Start (20, 60): top-left corner of workspace image.
                    Curl 1: CCW semicircle radius=38, from x=20 to x=96, peak at y=22.
                    Curl 2: CCW semicircle radius=48, from x=96 to x=192, peak at y=12.
                    Then a bezier curve sweeps right across the image to the mobile mockup (~x=1020).
                  */}
                  <path
                    d="M 920 60 C 1010 0, 1075 30, 985 180"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                    fill="none"
                    markerEnd="url(#two-curl-arrow)"
                  />
                </svg>
              </div>

              {/* convertionrate-box — mobile/tablet (below xl): top-left corner overlay on image */}
              <div
                aria-hidden="true"
                className="absolute xl:hidden"
                style={{
                  left: "3%",
                  top: "8%",
                  width: "clamp(100px, 35%, 210px)",
                  zIndex: 7,
                }}
              >
                <Image
                  src="/images/convertionrate-box.webp"
                  alt=""
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>

              {/* Mobile arrow — xl:hidden — small dashed curl above the phone, pointing down at its top */}
              <div
                aria-hidden="true"
                className="absolute pointer-events-none xl:hidden"
                style={{ right: "8%", top: "2%", width: "42px", zIndex: 11 }}
              >
                <svg
                  viewBox="0 0 42 50"
                  fill="none"
                  style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
                >
                  <defs>
                    <marker id="arr-mob" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                      <polygon points="0 0, 8 3.5, 0 7" fill="#9ca3af" />
                    </marker>
                  </defs>
                  <path
                    d="M 2 4 C 22 -6, 48 8, 30 44"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeDasharray="5 4"
                    strokeLinecap="round"
                    fill="none"
                    markerEnd="url(#arr-mob)"
                  />
                </svg>
              </div>

              {/* Mobile store mockup — overlaps right edge of workspace image and extends past it */}
              <div
                className="absolute right-[3%] xl:-right-[8%]"
                style={{
                  top: "12%",
                  width: "clamp(78px, 16%, 150px)",
                  zIndex: 10,
                }}
              >
                <Image
                  src="/images/new-about-mobile-image_grande.webp"
                  alt="Mobile store view"
                  width={300}
                  height={520}
                  className="w-full drop-shadow-2xl"
                />
              </div>

            </div>{/* end image composition */}
          </div>{/* end 1080px container */}
        </div>{/* end full-width div */}
      </section>

      {/* Credibility logos strip — infinite marquee */}
      <section className="bg-white" style={{ padding: "60px 0 50px" }}>
        <div
          className="mx-auto px-3 sm:px-8 lg:px-16"
          style={{ maxWidth: "1320px" }}
        >
          <div className="logos-marquee">
            <ul className="logos-marquee-track">
              {(() => {
                const logos = [
                  { src: "/images/google.svg", alt: "Google Reviews", invert: false },
                  { src: "/images/main-hero-logo-2.webp", alt: "Clutch Reviews", invert: true },
                  { src: "/images/shopify platinum partner logo.svg", alt: "Shopify Platinum Partner", invert: false },
                  { src: "/images/main-hero-logo-4.webp", alt: "Shopify Platinum Partner", invert: true },
                  { src: "/images/main-hero-logo-5.webp", alt: "Shopify", invert: true },
                ];
                return [...logos, ...logos].map((logo, i) => (
                  <li
                    key={`${logo.src}-${i}`}
                    className="flex items-center justify-center shrink-0"
                    aria-hidden={i >= logos.length ? true : undefined}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={220}
                      height={80}
                      className="h-auto w-full max-w-[160px] object-contain"
                      style={logo.invert ? { filter: "brightness(0)" } : undefined}
                    />
                  </li>
                ));
              })()}
            </ul>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .logos-marquee {
            overflow: hidden;
            mask-image: linear-gradient(
              to right,
              transparent 0,
              #000 80px,
              #000 calc(100% - 80px),
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0,
              #000 80px,
              #000 calc(100% - 80px),
              transparent 100%
            );
          }
          .logos-marquee-track {
            display: flex;
            align-items: center;
            gap: 40px;
            width: max-content;
            animation: logos-scroll 30s linear infinite;
          }
          .logos-marquee-track > li {
            width: 160px;
          }
          .logos-marquee:hover .logos-marquee-track {
            animation-play-state: paused;
          }
          @keyframes logos-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .logos-marquee-track {
              animation: none;
            }
          }
          @media (min-width: 640px) {
            .logos-marquee-track {
              gap: 64px;
            }
          }
          @media (min-width: 1024px) {
            .logos-marquee-track {
              gap: 96px;
            }
          }
        ` }} />
      </section>

      {/* Mission — revenue machines */}
      <section style={{ background: "#F1F5FF", padding: "80px 20px" }}>
        <div className="mx-auto" style={{ maxWidth: "1320px" }}>
          <h2
            className="elementor-heading-title elementor-size-default text-center mx-auto"
            role="heading"
            aria-level={2}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "30px",
              fontWeight: 400,
              color: "#000000",
              lineHeight: "40px",
              maxWidth: "1253.5px",
              width: "100%",
              marginBottom: "20px",
            }}
          >
            At <strong style={{ fontWeight: 700 }}>Ecomm Wizards</strong>, we don&apos;t just build Shopify stores - we build revenue machines.
          </h2>

          <p
            className="text-center mx-auto"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(15px, 1.4vw, 19px)",
              color: "rgba(0, 0, 0, 0.8)",
              lineHeight: 1.5,
              maxWidth: "1320px",
              marginBottom: "56px",
            }}
          >
            Headquartered in Toronto with teams across America, Europe, and Asia we combine design obsession with technical precision to help DTC brands outperform their competition.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center"
          >
            {[
              {
                title: "100% Satisfaction Guarantee",
                desc: "If you're not happy, we're not done. We don't hide behind contracts or excuses. Every project gets our full attention until it exceeds your expectations - period.",
                icon: (
                  <svg height="50" viewBox="0 0 64 64" fill="none" stroke="#B18945" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 26 L13 22 L24 31 L31 27 C33 26 35 27 36 29 L46 39 C48 41 48 44 46 46 C44 48 41 48 39 46 L31 38" />
                    <path d="M61 26 L51 22 L40 31" />
                    <path d="M24 31 L17 38 C15 40 12 40 10 38 C8 36 8 33 10 31 L13 28" />
                    <path d="M40 36 L34 42 C32 44 29 44 27 42" />
                    <path d="M44 41 L40 45 C38 47 35 47 33 45" />
                  </svg>
                ),
              },
              {
                title: "Result-oriented Approach",
                desc: "Pretty stores are easy. Stores that convert? That's the hard part. We obsess over the details that actually move the needle - speed, UX, and conversion KPIs- so your revenue doesn't just grow, it compounds.",
                icon: (
                  <svg height="50" viewBox="0 0 64 64" fill="none" stroke="#B18945" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 4 L56 12 V30 C56 44 46 54 32 60 C18 54 8 44 8 30 V12 Z" />
                    <path d="M22 32 L29 39 L43 25" />
                  </svg>
                ),
              },
              {
                title: "A Hub for Innovative Minds",
                desc: "We attract people who hate mediocrity. Designers who push pixels until they're perfect. Developers who write clean code. Strategists who think three steps ahead. That Alpha energy shows up in every project we ship.",
                icon: (
                  <svg height="50" viewBox="0 0 64 64" fill="none" stroke="#B18945" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 6 H42 L52 16 V54 C52 56 50 58 48 58 H14 C12 58 10 56 10 54 V10 C10 8 12 6 14 6 Z" />
                    <path d="M42 6 V16 H52" />
                    <line x1="18" y1="28" x2="44" y2="28" />
                    <line x1="18" y1="38" x2="44" y2="38" />
                    <line x1="18" y1="48" x2="36" y2="48" />
                  </svg>
                ),
              },
            ].map((box) => (
              <div
                key={box.title}
                style={{
                  background: "#FFFFFF",
                  padding: "30px",
                  width: "100%",
                  minHeight: "326px",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#334155",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                }}
              >
                <div
                  style={{
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  {box.icon}
                </div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "25px",
                    color: "#000000",
                    fontWeight: 500,
                    lineHeight: "34.67px",
                    marginBottom: "16px",
                  }}
                  role="heading"
                  aria-level={3}
                >
                  {box.title}
                </span>
                <p
                  className="elementor-icon-box-description"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    color: "#000000",
                    lineHeight: "26px",
                    width: "100%",
                    maxWidth: "366.67px",
                    margin: 0,
                  }}
                >
                  {box.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "48px" }}>
            <Link
              href="/free-shopify-store-audit"
              className="elementor-button elementor-button-link elementor-size-sm transition-shadow duration-200 hover:shadow-[0_0_0_2px_#B18945]"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "211.64px",
                height: "60px",
                padding: "20px 45px",
                background: "#000000",
                color: "#FFFFFF",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
                borderRadius: "9999px",
                textDecoration: "none",
                boxSizing: "border-box",
              }}
            >
              Get Started
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6h14M14 6L9 1M14 6L9 11" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-slate-700 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1
            text-xs font-semibold uppercase tracking-widest text-slate-200">Our Culture</span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            The Culture Behind Our High-Performance Shopify Agency
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-300 leading-relaxed">
            We believe excellence compounds. Our team continuously trains on the latest Shopify Plus
            features, ecommerce trends, AI tools, and conversion psychology frameworks. We foster a
            culture of ownership — every Shopify project is treated like it&apos;s our own brand.
            No shortcuts. No templates. No recycled strategies.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Journey"
            title="8 Years of Compounding Impact as a Shopify Agency"
            subtitle="From a small team to a multi-award winning agency — here's how we got here."
          />
          <div className="relative ml-4 border-l-2 border-slate-100 pl-8 space-y-10">
            {JOURNEY.map((j) => (
              <div key={j.year} className="relative">
                <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center
                  rounded-full bg-slate-700 text-xs font-bold text-white ring-4 ring-white">
                  {j.year.slice(2)}
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">{j.year}</span>
                <h3 className="mt-1 text-lg font-bold text-slate-800">{j.title}</h3>
                <p className="mt-1 text-slate-500">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Team"
            title="The Multi Award Winning Team at Ecomm Wizards"
            subtitle="Strategists, designers, developers, and growth experts — all under one roof."
          />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {TEAM.map((member) => (
              <div key={member.name}
                className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image src={member.photo} alt={member.name} fill className="object-cover" />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-800">{member.name}</p>
                <p className="mt-0.5 text-xs text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Get your Free UX + UI Shopify Audit"
        subheading="We'll show you exactly where you're losing revenue and how to fix it — no commitment required."
      />
    </>
  );
}
