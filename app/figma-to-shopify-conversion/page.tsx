import type { Metadata } from "next";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";

export const metadata: Metadata = {
  title: "Figma to Shopify Conversion | Pixel-Perfect Builds",
  description:
    "Convert your Figma files into a pixel-perfect custom Shopify store. Expert Shopify developers, Shopify 2.0 builds, free blueprint & quote. 700+ brands launched.",
  alternates: { canonical: "https://ecommwizards.com/services/figma-to-shopify-conversion/" },
};

const GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";
const GRADIENT_TEXT = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const PILLARS = [
  {
    title: "Pillar 1: No Design Too Complex",
    body: "Your Figma file has 47 layers, custom animations, and a layout that makes most developers sweat? Good. We live for that. Every detail ships exactly as designed, no matter how complex the brief.",
  },
  {
    title: "Pillar 2: Pixel-Perfect, Performance-Obsessed",
    body: "We don't approximate your design, we replicate, then optimize it. Every element is built in Shopify Liquid and stress-tested for Core Web Vitals, mobile, and conversion performance.",
  },
  {
    title: "Pillar 3: 700+ Stores. $900M+ in Revenue. 8 Years Deep.",
    body: "We've partnered with DTC brands, Shark Tank alumni, and high-growth startups to turn Figma designs into Shopify stores that sell. This isn't our first rodeo, it's our seven-hundredth.",
  },
  {
    title: "Pillar 4: Fast Turnaround, Zero Chaos",
    body: "Tailored quote within 24 hours. GitHub-powered version control. A structured, stage-by-stage workflow from Figma file to Shopify launch. Most projects complete in 2–6 weeks depending on scope.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Share Your Vision",
    body: "Send us your Figma files and full brief, integrations, features, Shopify Plus requirements, whatever you need. The more detail, the cleaner the build.",
  },
  {
    n: "02",
    title: "Get a Free Blueprint & Quote",
    body: "We map your design to Shopify 2.0 architecture and send back a fixed-price quote within 24 hours. No vague estimates. You'll know exactly what you're getting and when.",
  },
  {
    n: "03",
    title: "We Build. We Break. We Perfect.",
    body: "Our developers convert your Figma into a custom Shopify Liquid theme, component by component. Tested across all devices. Progress updates throughout, no radio silence.",
  },
  {
    n: "04",
    title: "Go Live & Grow With Us",
    body: "Your store launches fast, clean, and fully tested. We stay on for post-launch support, CRO tweaks, and performance optimization. We're in it with you.",
  },
];

const ICON_STACK = (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 2 2 7l10 5 10-5-10-5z" />
    <path d="m2 12 10 5 10-5" />
    <path d="m2 17 10 5 10-5" />
  </svg>
);
const ICON_CHART = (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
  </svg>
);
const ICON_DOC_SEARCH = (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <circle cx="11.5" cy="14.5" r="2.5" />
    <line x1="13.4" y1="16.4" x2="15.5" y2="18.5" />
  </svg>
);
const ICON_GEAR = (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const ICON_APP = (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
  </svg>
);
const ICON_DOC = (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="16" y2="17" />
  </svg>
);

const NO_FIGMA_FEATURES = [
  { title: "Custom Shopify Theme Design & Development", icon: ICON_STACK },
  { title: "Built-In Conversion Rate Optimization",     icon: ICON_CHART },
  { title: "Full UX & UI Audit Included",                icon: ICON_DOC_SEARCH },
];

const ALREADY_SHOPIFY_FEATURES = [
  { title: "ERP Integration & Backend Automation",        icon: ICON_GEAR },
  { title: "Custom Shopify App & Feature Development",    icon: ICON_APP },
  { title: "Shopify Liquid Customizations & Theme Edits", icon: ICON_DOC },
];

const QUOTE_STRIP = [
  {
    quote:
      "Working with EW was a truly top-notch experience. From start to finish, they made sure everything ran smoothly and professionally",
    logo: "/images/Frame_1000007615.webp",
  },
  {
    quote:
      "Ecomm Wizards has done a great job of creating exactly what we visioned while constantly refining and improving every detail.",
    logo: "/images/cashmere-sale-logo.avif",
  },
  {
    quote:
      "Their immense knowledge of Shopify Plus and exceptional communication skills made Ecomm Wizards a fantastic partner.",
    logo: "/images/Frame_1000007615-2.avif",
  },
];

const CASE_STUDY_APPS = [
  "/images/shopify-logo-slide_1024x1024.svg",
  "/images/infinite-logo-slide_1024x1024.svg",
  "/images/unknow-logo-slide_1024x1024.svg",
  "/images/Subtract-logo-slide_1024x1024.svg",
];

const CASE_STUDIES: CaseStudySlide[] = [
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: CASE_STUDY_APPS,
    headline: (
      <>
        A dynamically personalized <strong>Shopify Store</strong> developed &amp; maintained for <strong>Bark</strong>
      </>
    ),
    quote: (
      <>
        &ldquo;Their immense knowledge of Shopify Plus and exceptional communication skills, accompanied by a <strong>can-do attitude</strong> made Ecomm Wizards a fantastic partner.&rdquo;
      </>
    ),
    avatar: "/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp",
    name: "Nari Sitaraman",
    role: "Chief Technology Officer",
  },
  {
    key: "eby",
    image: "/images/Frame_1000004320.webp",
    apps: CASE_STUDY_APPS,
    headline: (
      <>
        An elegant <strong>Shopify Store</strong> designed and built for EBY by <strong>Sofia Vergara</strong>
      </>
    ),
    quote: (
      <>
        &ldquo;Working with EW was a truly <strong>top-notch experience</strong>. From start to finish, they made sure everything ran smoothly and professionally &mdash; we couldn&rsquo;t be happier!&rdquo;
      </>
    ),
    avatar: "/images/eby_dce31a54-eb36-409c-a8d7-e22fd8297de3_medium.webp",
    name: "EBY by Sofia Vergara",
    role: "Marketing Manager",
  },
  {
    key: "harvard",
    image: "/images/all-case-study-harvard.webp",
    apps: CASE_STUDY_APPS,
    headline: (
      <>
        A sophisticated <strong>Shopify Store</strong> designed and built for <strong>Harvard University</strong>
      </>
    ),
    quote: (
      <>
        &ldquo;Our experience with EW was excellent, characterized by an <strong>efficient workflow</strong> and <strong>professional execution</strong>; we couldn&rsquo;t be more delighted&rdquo;
      </>
    ),
    avatar: "/images/harvardperson_medium.webp",
    name: "Daniyal S.",
    role: "Harvard University",
  },
];

const ICON_BAG = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M6 2 4 6v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-2-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
const ICON_SPARK = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
  </svg>
);
const ICON_RECYCLE = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
    <polyline points="3 16 3 21 8 21" />
    <polyline points="21 8 21 3 16 3" />
  </svg>
);
const ICON_LINK_CIRCLES = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="9" cy="9" r="5.5" />
    <circle cx="15" cy="15" r="5.5" />
  </svg>
);
const ICON_ROCKET = (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const ICON_SHIELD_CHECK = (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const TOOLS = [
  { title: "Shopify Plus",                            icon: ICON_BAG },
  { title: "AI-Powered Product Recommendations",      icon: ICON_SPARK },
  { title: "Rebuy & Recharge",                         icon: ICON_RECYCLE },
  { title: "ERP Solutions (NetSuite, SAP & More)",    icon: ICON_GEAR },
  { title: "Klaviyo & Yotpo",                          icon: ICON_LINK_CIRCLES },
];

const FAQS = [
  {
    q: "How long does a Figma to Shopify conversion take?",
    a: "Most projects complete in 2–6 weeks. Simple builds (homepage + key pages) take 2–3 weeks. Complex builds with custom features or Shopify Plus integrations take 4–8 weeks. Every quote includes a clear timeline.",
  },
  {
    q: "How much does Figma to Shopify conversion cost?",
    a: "Pricing depends on page count, complexity, and integrations. We offer fixed-price quotes, no hourly surprises. Submit your file and get a detailed quote within 24 hours. The first page is free.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Your finalized Figma file (desktop + mobile), brand assets (fonts, icons, images), a feature list, and Shopify store access or a collaborator invite.",
  },
  {
    q: "Do you build on Shopify 2.0?",
    a: "Yes, every build uses Shopify 2.0's sections and blocks architecture. Your team can edit layouts and content from the theme customizer without touching code.",
  },
  {
    q: "What file formats do you accept besides Figma?",
    a: "Figma is our primary format and the one we recommend for the cleanest conversion. We also accept Adobe XD, Sketch, and PSD files. If you have designs in a different format, contact us and we'll assess compatibility.",
  },
  {
    q: "Will my Shopify store be mobile-responsive?",
    a: "Always. Every Figma-to-Shopify build we deliver is tested on mobile, tablet, and desktop before launch. We develop mobile-first by default, not as an afterthought. Your store will render correctly across all major devices and browsers.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Post-launch support, bug fixes, performance monitoring, and ongoing development are all available. Ask about our on-demand and retainer options.",
  },
];

export default function FigmaToShopifyConversionPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative w-full bg-black"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="mx-auto grid items-center gap-y-10 gap-x-[30px] py-[40px] lg:py-[60px] px-[15px] lg:px-[20px] lg:grid-cols-2"
          style={{ maxWidth: "1320px" }}
        >
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <h1 className="font-semibold leading-[1.1] tracking-tight text-white text-[34px] sm:text-[44px] lg:text-[56px] xl:text-[60px]">
              <span style={GRADIENT_TEXT}>Figma to Shopify</span>{" "}
              <span className="whitespace-nowrap sm:whitespace-normal">Conversion</span>{" "}
              That&rsquo;s Pixel-Perfect
            </h1>

            <p className="mt-6 text-white/85 text-[15px] sm:text-base lg:text-[17px] leading-[1.7]">
              You spent weeks getting your Figma file exactly right. Don&rsquo;t let a developer lose it in translation.
            </p>
            <p className="mt-5 text-white/85 text-[15px] sm:text-base lg:text-[17px] leading-[1.7]">
              We convert your Figma design into a custom Shopify store, every gradient, every interaction, every detail, exactly as intended. Fast, responsive, and built to convert from day one.
            </p>

            <a
              href="/book-shopify-consultation/"
              className="mt-8 inline-flex items-center gap-3 rounded-full border px-7 py-3 text-white text-[15px] sm:text-base transition hover:bg-white/5"
              style={{ borderColor: "#4FB872" }}
            >
              Submit Your Figma File
              <span aria-hidden className="text-lg leading-none">→</span>
            </a>
          </div>

          {/* Right: hero image */}
          <div className="order-last lg:order-none">
            <img
              src="/images/Group_1000004395.webp"
              alt="Figma to Shopify conversion"
              width={1024}
              height={795}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Trusted by Leading Shopify Brands ────────────────────────── */}
      <section
        className="f2s-trust-section"
        style={{
          background: "#FFFFFF",
          color: "#334155",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
        }}
      >
        <div
          className="f2s-trust-inner mx-auto"
          style={{ maxWidth: "1320px", padding: "60px 0" }}
        >
          <h2
            className="f2s-trust-heading text-center"
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
            className="f2s-trust-carousel"
            style={{ marginTop: "30px", width: "100%", overflow: "hidden" }}
          >
            <div className="f2s-trust-track">
              {[
                { src: "/images/ipsy-logo.svg",     alt: "IPSY" },
                { src: "/images/trust_logo_2.svg",  alt: "Peanuts" },
                { src: "/images/trust_logo_31.svg", alt: "Olaplex" },
                { src: "/images/trust_logo_32.svg", alt: "Forme" },
                { src: "/images/trust_logo_20.svg", alt: "SarahChloe" },
                { src: "/images/trust_logo_27.svg", alt: "Cellar.com" },
                // duplicate set for seamless marquee loop
                { src: "/images/ipsy-logo.svg",     alt: "" },
                { src: "/images/trust_logo_2.svg",  alt: "" },
                { src: "/images/trust_logo_31.svg", alt: "" },
                { src: "/images/trust_logo_32.svg", alt: "" },
                { src: "/images/trust_logo_20.svg", alt: "" },
                { src: "/images/trust_logo_27.svg", alt: "" },
              ].map((logo, i) => (
                <div key={i} className="f2s-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="f2s-trust-logo"
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
          .f2s-trust-track {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 24px;
            width: max-content;
            animation: f2sTrustScroll 32s linear infinite;
          }
          .f2s-trust-slide {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 178.32px;
            height: 86.04px;
          }
          .f2s-trust-logo {
            width: 178.32px;
            height: 86.04px;
            object-fit: contain;
            display: block;
          }
          @keyframes f2sTrustScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 1023px) {
            .f2s-trust-section { padding: 0 16px; }
            .f2s-trust-inner { padding: 36px 0 !important; }
            .f2s-trust-heading { font-size: 20px !important; }
            .f2s-trust-carousel { margin-top: 24px !important; }
            .f2s-trust-track { gap: 32px; animation-duration: 22s; }
            .f2s-trust-slide { width: 174.99px; height: 84.44px; }
            .f2s-trust-logo  { width: 174.99px; height: 84.44px; }
          }
        ` }} />
      </section>

      {/* ── Why Brands Choose ────────────────────────────────────────── */}
      <section
        className="f2s-why"
        style={{
          background: "#FBF7ED",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          className="f2s-why__inner mx-auto"
          style={{ maxWidth: "1320px" }}
        >
          <div className="f2s-why__grid">
            {/* Left: white card with title, intro, accordion */}
            <div className="f2s-why__card">
              <h2 className="f2s-why__title">
                Why Brands Choose <b>Ecomm Wizards</b> for Figma-to-Shopify Development
              </h2>
              <p className="f2s-why__intro">
                Most agencies drop a Figma file into Shopify and call it done. We&rsquo;re not that agency.
                We build a complete Shopify design system, custom Liquid themes, advanced functionality, seamless integrations, built to perform, not just look right.
              </p>

              <ul className="f2s-why__pillars">
                {PILLARS.map((p, i) => (
                  <li key={p.title} className="f2s-why__pillar">
                    <details open={i === 0}>
                      <summary>
                        <span className="f2s-why__pillar-title">{p.title}</span>
                        <span className="f2s-why__chev" aria-hidden>
                          <svg viewBox="0 0 32 32" width="14" height="14">
                            <path
                              d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </summary>
                      <div className="f2s-why__pillar-body">
                        <p>{p.body}</p>
                      </div>
                    </details>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: single black panel containing static image + video */}
            <div className="f2s-why__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="f2s-why__mediaImg"
                src="/images/image-699.webp"
                alt=""
                width={860}
                height={1024}
              />
              <video
                className="f2s-why__mediaVideo"
                src="https://ecommwizards.com/wp-content/uploads/2026/01/5a8e17ef773c4b6a9675ecd2347ac9de.HD-1080p-7.2Mbps-58742493-1.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .f2s-why__inner { padding: 40px 20px; }
          .f2s-why__grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
          }

          /* Left card */
          .f2s-why__card {
            background: #FFFFFF;
            border-radius: 24px;
            padding: 40px;
          }
          .f2s-why__title {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 32px;
            font-weight: 700;
            line-height: 1.2;
            margin: 0;
          }
          .f2s-why__title b { font-weight: 800; }
          .f2s-why__intro {
            color: #334155;
            font-size: 15px;
            line-height: 1.7;
            margin: 24px 0 0;
          }

          /* Accordion */
          .f2s-why__pillars {
            margin: 32px 0 0;
            padding: 0;
            list-style: none;
          }
          .f2s-why__pillar { border-top: 1px solid #E5E7EB; }
          .f2s-why__pillar:last-child { border-bottom: 1px solid #E5E7EB; }
          .f2s-why__pillar details > summary {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 18px 0;
            list-style: none;
            cursor: pointer;
            color: #000000;
            font-weight: 600;
            font-size: 16px;
          }
          .f2s-why__pillar details > summary::-webkit-details-marker { display: none; }
          .f2s-why__pillar-title { flex: 1; }
          .f2s-why__chev {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #000000;
            transition: transform 0.2s ease;
          }
          .f2s-why__pillar details[open] > summary .f2s-why__chev { transform: rotate(180deg); }
          .f2s-why__pillar-body { padding: 0 0 22px; }
          .f2s-why__pillar-body p {
            margin: 0;
            color: #334155;
            font-size: 15px;
            line-height: 1.7;
          }

          /* Right: single black panel housing both media items */
          .f2s-why__media {
            background: #000000;
            border-radius: 24px;
            overflow: hidden;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .f2s-why__mediaImg,
          .f2s-why__mediaVideo {
            display: block;
            height: auto;
            border-radius: 12px;
          }
          .f2s-why__mediaImg {
            width: 62%;
            margin: 0 auto;
          }
          .f2s-why__mediaVideo {
            width: 100%;
          }

          /* Desktop layout */
          @media (min-width: 1024px) {
            .f2s-why__inner { padding: 60px 20px; }
            .f2s-why__grid {
              grid-template-columns: 1fr 1fr;
              gap: 30px;
              align-items: start;
            }
            .f2s-why__card { padding: 48px; }
            .f2s-why__title { font-size: 38px; }
            .f2s-why__intro { font-size: 16px; }
            .f2s-why__pillar details > summary { font-size: 17px; padding: 20px 0; }
            .f2s-why__pillar-body p { font-size: 15px; }
          }

          /* Mobile-only fine tuning */
          @media (max-width: 1023px) {
            .f2s-why__inner { padding: 40px 15px; }
            .f2s-why__card { padding: 28px 24px; }
            .f2s-why__title { font-size: 28px; }
          }
        ` }} />
      </section>

      {/* ── 4 Simple Steps ───────────────────────────────────────────── */}
      <section
        className="f2s-steps"
        style={{
          background: "#FFFFFF",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          className="f2s-steps__inner mx-auto"
          style={{ maxWidth: "1320px" }}
        >
          <h2 className="f2s-steps__title">
            From Figma to Shopify in 4 Simple Steps
          </h2>

          <ol className="f2s-steps__list">
            {STEPS.map((s) => (
              <li key={s.n} className="f2s-steps__card">
                <span className="f2s-steps__num" aria-hidden>{s.n}.</span>
                <h3 className="f2s-steps__heading">{s.title}</h3>
                <p className="f2s-steps__body">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .f2s-steps__inner { padding: 40px 15px; }
          .f2s-steps__title {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 30px;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
            margin: 0;
          }
          .f2s-steps__list {
            list-style: none;
            padding: 0;
            margin: 32px 0 0;
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .f2s-steps__card {
            background: #FBF7ED;
            border-radius: 20px;
            padding: 32px 28px;
            position: relative;
          }
          .f2s-steps__num {
            display: block;
            color: rgba(177, 137, 69, 0.22);
            font-family: 'Poppins', sans-serif;
            font-size: 56px;
            font-weight: 700;
            line-height: 1;
            margin-bottom: 36px;
          }
          .f2s-steps__heading {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
            margin: 0;
          }
          .f2s-steps__body {
            color: #334155;
            font-family: 'Poppins', sans-serif;
            font-size: 15px;
            line-height: 1.7;
            margin: 14px 0 0;
          }

          @media (min-width: 1024px) {
            .f2s-steps__inner { padding: 72px 20px; }
            .f2s-steps__title { font-size: 40px; }
            .f2s-steps__list {
              grid-template-columns: 1fr 1fr;
              gap: 30px;
              margin-top: 48px;
            }
            .f2s-steps__card { padding: 40px 36px; }
            .f2s-steps__num { font-size: 64px; margin-bottom: 40px; }
            .f2s-steps__heading { font-size: 22px; }
            .f2s-steps__body { font-size: 16px; margin-top: 16px; }
          }
        ` }} />
      </section>

      {/* ── Don't Have a Figma File? & Already on Shopify ───────────── */}
      <section
        className="f2s-pair"
        style={{
          background: "#FBF7ED",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          className="f2s-pair__inner mx-auto"
          style={{ maxWidth: "1320px" }}
        >
          {/* Sub-section 1: text LEFT, video RIGHT */}
          <div className="f2s-pair__card f2s-pair__card--textFirst">
            <div className="f2s-pair__copy">
              <h2 className="f2s-pair__title">
                Don&rsquo;t Have a <b>Figma</b> File? We&rsquo;ll Build Your Store From Scratch.
              </h2>
              <p className="f2s-pair__intro">
                Our in-house design team creates a custom Figma design for your brand, then our developers build it into a high-performance Shopify store. Brief to launch, under one roof.
              </p>
              <ul className="f2s-pair__features">
                {NO_FIGMA_FEATURES.map((f) => (
                  <li key={f.title} className="f2s-pair__feature">
                    <span className="f2s-pair__featureTitle">{f.title}</span>
                    <span className="f2s-pair__featureIcon">{f.icon}</span>
                  </li>
                ))}
              </ul>
              <a className="f2s-pair__btn" href="/book-shopify-consultation/">
                Start My Custom Shopify Build
                <span aria-hidden className="f2s-pair__btnArrow">→</span>
              </a>
            </div>
            <div className="f2s-pair__media">
              <video
                src="https://ecommwizards.com/wp-content/uploads/2026/01/d7f14fb290a1484cbb32e6037b39d7f1.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Sub-section 2: image LEFT, text RIGHT on desktop; mobile DOM = copy → media */}
          <div className="f2s-pair__card f2s-pair__card--mediaFirst">
            <div className="f2s-pair__copy">
              <h2 className="f2s-pair__title">
                Already on Shopify? We Build What You&rsquo;re Missing.
              </h2>
              <p className="f2s-pair__intro">
                Need new functionality, a performance overhaul, or a custom feature? We work on-demand, no retainers, no lengthy onboarding. You scope it, we ship it.
              </p>
              <ul className="f2s-pair__features">
                {ALREADY_SHOPIFY_FEATURES.map((f) => (
                  <li key={f.title} className="f2s-pair__feature">
                    <span className="f2s-pair__featureTitle">{f.title}</span>
                    <span className="f2s-pair__featureIcon">{f.icon}</span>
                  </li>
                ))}
              </ul>
              <a className="f2s-pair__btn" href="/free-shopify-store-audit/">
                Tell Us What You Need
                <span aria-hidden className="f2s-pair__btnArrow">→</span>
              </a>
            </div>
            <div className="f2s-pair__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/video_cover_2048x.webp" alt="" width={1024} height={765} />
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .f2s-pair__inner {
            padding: 40px 15px;
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .f2s-pair__card {
            background: #FFFFFF;
            border-radius: 28px;
            overflow: hidden;
            display: grid;
            grid-template-columns: 1fr;
            gap: 0;
          }
          .f2s-pair__copy { padding: 32px 24px; }
          .f2s-pair__title {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 26px;
            font-weight: 700;
            line-height: 1.25;
            margin: 0;
          }
          .f2s-pair__title b { font-weight: 800; }
          .f2s-pair__intro {
            color: #334155;
            font-size: 15px;
            line-height: 1.7;
            margin: 18px 0 0;
          }

          /* Feature rows */
          .f2s-pair__features {
            list-style: none;
            margin: 24px 0 0;
            padding: 0;
          }
          .f2s-pair__feature {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 16px 0;
            border-top: 1px solid #E5E7EB;
          }
          .f2s-pair__feature:last-child { border-bottom: 1px solid #E5E7EB; }
          .f2s-pair__featureTitle {
            color: #000000;
            font-weight: 600;
            font-size: 15px;
            line-height: 1.4;
            flex: 1;
          }
          .f2s-pair__featureIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #0F172A;
            flex-shrink: 0;
          }

          /* CTA */
          .f2s-pair__btn {
            margin-top: 24px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: #000000;
            color: #FFFFFF;
            border: 2px solid transparent;
            border-radius: 999px;
            padding: 12px 26px;
            font-size: 15px;
            font-weight: 500;
            text-decoration: none;
            transition: background 0.3s ease;
          }
          .f2s-pair__btn:hover,
          .f2s-pair__btn:focus,
          .f2s-pair__btn:active,
          .f2s-pair__btn:visited {
            color: #FFFFFF;
          }
          .f2s-pair__btn:hover {
            background:
              linear-gradient(#000, #000) padding-box,
              linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%) border-box;
          }
          .f2s-pair__btnArrow { font-size: 18px; line-height: 1; }

          /* Media */
          .f2s-pair__media {
            padding: 0 24px 32px;
          }
          .f2s-pair__media img,
          .f2s-pair__media video {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 16px;
          }

          /* Mobile feature row: icon on LEFT */
          @media (max-width: 1023px) {
            .f2s-pair__feature { flex-direction: row-reverse; justify-content: flex-end; }
          }

          /* Desktop layout */
          @media (min-width: 1024px) {
            .f2s-pair__inner { padding: 60px 20px; gap: 30px; }
            .f2s-pair__card {
              grid-template-columns: 1fr 1fr;
              align-items: stretch;
              border-radius: 32px;
            }
            .f2s-pair__card--textFirst .f2s-pair__copy   { order: 1; }
            .f2s-pair__card--textFirst .f2s-pair__media  { order: 2; }
            .f2s-pair__card--mediaFirst .f2s-pair__media { order: 1; }
            .f2s-pair__card--mediaFirst .f2s-pair__copy  { order: 2; }
            .f2s-pair__copy  { padding: 48px 44px; align-self: center; }
            .f2s-pair__media {
              padding: 36px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .f2s-pair__title { font-size: 32px; }
            .f2s-pair__intro { font-size: 16px; }
            .f2s-pair__featureTitle { font-size: 16px; }
            .f2s-pair__btn { font-size: 16px; padding: 14px 30px; margin-top: 28px; }
            .f2s-pair__media img,
            .f2s-pair__media video {
              max-height: 460px;
              width: auto;
              object-fit: contain;
            }
          }
        ` }} />
      </section>

      {/* ── 700+ Brands / Case Studies ───────────────────────────────── */}
      <section className="ssd-results-section">
        <div className="ssd-results-inner">
          <h2 className="ssd-results-heading">Join 700+ Brands Seeing Real Results</h2>

          <div className="ssd-results-cards">
            {QUOTE_STRIP.map((q) => (
              <div key={q.logo} className="ssd-results-card">
                <p className="ssd-results-card-quote">{q.quote}</p>
                <div className="ssd-results-card-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={q.logo} alt="" />
                </div>
              </div>
            ))}
          </div>

          <CaseStudySlider slides={CASE_STUDIES} intervalMs={6000} />
        </div>
      </section>

      {/* ── Tools We Integrate ───────────────────────────────────────── */}
      <section
        className="f2s-tools"
        style={{
          background: "#FBF7ED",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          className="f2s-tools__inner mx-auto"
          style={{ maxWidth: "1320px" }}
        >
          <h2 className="f2s-tools__title">
            The Tools We Integrate Into Every Figma to Shopify Build
          </h2>

          <ul className="f2s-tools__list">
            {TOOLS.map((t) => (
              <li key={t.title} className="f2s-tools__pill">
                <span className="f2s-tools__pillIcon" aria-hidden>{t.icon}</span>
                <span className="f2s-tools__pillTitle">{t.title}</span>
              </li>
            ))}
          </ul>

          <div className="f2s-tools__ctaWrap">
            <div className="f2s-tools__ctaCard">
              <span className="f2s-tools__ctaIcon" aria-hidden>{ICON_ROCKET}</span>
              <h3 className="f2s-tools__ctaTitle">
                Your Figma Design Deserves Better Than &ldquo;Close Enough&rdquo;
              </h3>
              <p className="f2s-tools__ctaBody">
                Submit your Figma file today and we&rsquo;ll convert one page to Shopify &mdash; completely free. See the quality before you commit.
              </p>
              <a className="f2s-tools__btn" href="/book-shopify-consultation/">
                Claim Your Free Page
                <span aria-hidden className="f2s-tools__btnArrow">→</span>
              </a>
            </div>
            <div className="f2s-tools__ctaCard">
              <span className="f2s-tools__ctaIcon" aria-hidden>{ICON_SHIELD_CHECK}</span>
              <h3 className="f2s-tools__ctaTitle">
                100% Satisfaction.<br />Zero Risk.
              </h3>
              <p className="f2s-tools__ctaBody">
                Still have questions about our Figma to Shopify conversion process? Let&rsquo;s talk &mdash; no pressure, no pitch. Just answers.
              </p>
              <a className="f2s-tools__btn" href="/book-shopify-consultation/">
                Chat With Our Team
                <span aria-hidden className="f2s-tools__btnArrow">→</span>
              </a>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .f2s-tools__inner { padding: 40px 15px; }
          .f2s-tools__title {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.25;
            text-align: center;
            margin: 0 auto;
            max-width: 720px;
          }

          /* Tool pills */
          .f2s-tools__list {
            list-style: none;
            margin: 32px 0 0;
            padding: 0;
            display: grid;
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .f2s-tools__pill {
            background: #FFFFFF;
            border-radius: 14px;
            padding: 22px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            text-align: center;
          }
          .f2s-tools__pillIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #0F172A;
            flex-shrink: 0;
          }
          .f2s-tools__pillTitle {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 15px;
            line-height: 1.4;
          }

          /* CTA black panel containing two inner cards */
          .f2s-tools__ctaWrap {
            margin-top: 24px;
            background: #0A0A0A;
            border-radius: 28px;
            padding: 20px;
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .f2s-tools__ctaCard {
            background: #181818;
            border-radius: 20px;
            padding: 36px 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .f2s-tools__ctaIcon {
            display: inline-flex;
            color: #4FB872;
            margin-bottom: 18px;
          }
          .f2s-tools__ctaTitle {
            color: #FFFFFF;
            font-family: 'Poppins', sans-serif;
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
            margin: 0;
          }
          .f2s-tools__ctaBody {
            color: rgba(255, 255, 255, 0.78);
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            line-height: 1.65;
            margin: 14px 0 22px;
          }

          /* CTA pill button */
          .f2s-tools__btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: transparent;
            color: #FFFFFF;
            border: 2px solid #4FB872;
            border-radius: 999px;
            padding: 12px 26px;
            font-size: 15px;
            font-weight: 500;
            text-decoration: none;
            transition: background 0.3s ease;
          }
          .f2s-tools__btn:hover,
          .f2s-tools__btn:focus,
          .f2s-tools__btn:active,
          .f2s-tools__btn:visited {
            color: #FFFFFF;
          }
          .f2s-tools__btn:hover {
            border-color: transparent;
            background:
              linear-gradient(#181818, #181818) padding-box,
              linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%) border-box;
          }
          .f2s-tools__btnArrow { font-size: 18px; line-height: 1; }

          /* Desktop */
          @media (min-width: 1024px) {
            .f2s-tools__inner { padding: 60px 20px; }
            .f2s-tools__title { font-size: 40px; max-width: 900px; }

            .f2s-tools__list {
              grid-template-columns: repeat(6, 1fr);
              gap: 20px;
              margin-top: 48px;
            }
            .f2s-tools__pill {
              flex-direction: row;
              justify-content: flex-start;
              text-align: left;
              gap: 14px;
              padding: 20px 26px;
            }
            .f2s-tools__list li:nth-child(1) { grid-column: 1 / 3; }
            .f2s-tools__list li:nth-child(2) { grid-column: 3 / 5; }
            .f2s-tools__list li:nth-child(3) { grid-column: 5 / 7; }
            .f2s-tools__list li:nth-child(4) { grid-column: 2 / 4; }
            .f2s-tools__list li:nth-child(5) { grid-column: 4 / 6; }
            .f2s-tools__pillTitle { font-size: 16px; }

            .f2s-tools__ctaWrap {
              margin-top: 40px;
              padding: 36px;
              grid-template-columns: 1fr 1fr;
              gap: 24px;
            }
            .f2s-tools__ctaCard { padding: 56px 40px; }
            .f2s-tools__ctaTitle { font-size: 24px; }
            .f2s-tools__ctaBody { font-size: 15px; margin: 16px 0 28px; }
            .f2s-tools__btn { font-size: 16px; padding: 14px 30px; }
          }
        ` }} />
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────── */}
      <section
        className="f2s-faqs"
        style={{
          background: "#FFFFFF",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          className="f2s-faqs__inner mx-auto"
          style={{ maxWidth: "1100px" }}
        >
          <h2 className="f2s-faqs__title">Frequently Asked Questions</h2>

          <ul className="f2s-faqs__list">
            {FAQS.map((f, i) => (
              <li key={f.q} className="f2s-faqs__item">
                <details open={i === 0}>
                  <summary>
                    <span className="f2s-faqs__q">{f.q}</span>
                    <span className="f2s-faqs__chev" aria-hidden>
                      <svg viewBox="0 0 32 32" width="14" height="14">
                        <path
                          d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="f2s-faqs__a">
                    <p>{f.a}</p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQPage JSON-LD — scoped to this page only via Next.js per-route rendering.
            This script renders only on /figma-to-shopify-conversion. Do not move to layout.tsx. */}
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
          .f2s-faqs__inner { padding: 40px 15px; }
          .f2s-faqs__title {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 32px;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
            margin: 0 0 32px;
          }
          .f2s-faqs__list {
            list-style: none;
            margin: 0;
            padding: 0;
            border-top: 1px solid #E5E7EB;
          }
          .f2s-faqs__item { border-bottom: 1px solid #E5E7EB; }
          .f2s-faqs__item details > summary {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 18px 0;
            list-style: none;
            cursor: pointer;
          }
          .f2s-faqs__item details > summary::-webkit-details-marker { display: none; }
          .f2s-faqs__q {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 1.4;
            flex: 1;
          }
          .f2s-faqs__chev {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #000000;
            flex-shrink: 0;
            transition: transform 0.2s ease;
          }
          .f2s-faqs__item details[open] > summary .f2s-faqs__chev { transform: rotate(180deg); }
          .f2s-faqs__a { padding: 0 0 22px; }
          .f2s-faqs__a p {
            margin: 0;
            color: #334155;
            font-family: 'Poppins', sans-serif;
            font-size: 15px;
            line-height: 1.7;
          }

          @media (min-width: 1024px) {
            .f2s-faqs__inner { padding: 72px 20px; }
            .f2s-faqs__title { font-size: 44px; margin-bottom: 40px; }
            .f2s-faqs__item details > summary { padding: 22px 0; }
            .f2s-faqs__q { font-size: 17px; }
            .f2s-faqs__a p { font-size: 16px; }
          }
        ` }} />
      </section>

    </>
  );
}
