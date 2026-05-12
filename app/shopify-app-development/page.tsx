import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify App Development Company | Private and Public Apps",
  description:
    "Hire expert Shopify app developers to build custom private apps or launch on the Shopify App Store. Shopify Plus Preferred Partner. 700+ merchants. Get a free quote.",
  alternates: { canonical: "https://ecommwizards.com/services/shopify-app-development/" },
};

const FAQS = [
  {
    q: "How long does it take to build a Shopify app?",
    a: "It depends on the complexity and scope of your project. A simple private Shopify app with one or two integrations can be ready in a few weeks. A full-featured public app for the Shopify App Store, including design, development, QA, and the official Shopify app review process, typically takes two to four months. We provide a precise timeline during your discovery call.",
  },
  {
    q: "How much does Shopify app development cost?",
    a: "Shopify app development cost depends on the number of features, integrations, and whether you are building a private app or a public app for the Shopify App Store. Simple private apps can start from a few thousand dollars. Fully featured public apps with design, development, and App Store submission management will range higher. Every quote we send is fixed-price with no hourly billing surprises.",
  },
  {
    q: "What is the difference between a private Shopify app and a public Shopify app?",
    a: "A private Shopify app is built exclusively for one store. It is not listed on the Shopify App Store and is designed for custom integrations or proprietary functionality specific to your business. A public app is available to all merchants through the Shopify App Store and can generate recurring subscription revenue from thousands of merchants worldwide.",
  },
  {
    q: "Do I own the app source code once it's complete?",
    a: "Yes, 100%. Once the project is complete and payment is settled, full ownership of the source code transfers to you. No licensing fees and no vendor lock-in. The app is yours.",
  },
  {
    q: "Can you help us maintain and update our app post-launch?",
    a: "Yes. Our Shopify app development services do not end at deployment. We offer ongoing maintenance covering bug fixes, Shopify API updates, performance optimization, and new feature development so your app stays competitive long after launch.",
  },
  {
    q: "How do you protect our data and our customers' data?",
    a: "Security is built into every stage of our Shopify app development process. We follow Shopify's security best practices, conduct thorough vulnerability and penetration testing, and ensure full compliance with data privacy standards before any app goes live.",
  },
  {
    q: "Can you integrate a Shopify app with our ERP, CRM, or third-party platforms?",
    a: "Yes. Shopify API integration with ERP systems like NetSuite and SAP, CRM platforms, 3PL providers, payment gateways, and marketing tools is a core part of what we do. If your third-party system has an API, we can connect it to your Shopify store.",
  },
  {
    q: "Can you handle the Shopify App Store submission and review process?",
    a: "We manage the entire Shopify App Store submission from start to finish. That includes writing your listing copy, creating screenshots, preparing compliance documentation, and navigating the official Shopify app review. We know exactly what Shopify looks for in the review process. Our apps get approved without delays or rejections.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";
const GRADIENT_TEXT = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

export default function ShopifyAppDevelopmentPage() {
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
            <h1 className="font-semibold leading-[1.1] tracking-tight text-white text-[34px] sm:text-[44px] lg:text-[52px] xl:text-[58px]">
              <span style={GRADIENT_TEXT}>Hire a Shopify App Developer</span>{" "}
              Who Builds Apps That Actually Grow Your Store.
            </h1>

            <p className="mt-6 text-white/85 text-[15px] sm:text-base lg:text-[17px] leading-[1.7]">
              Need a private custom Shopify app built for your store, or a public app launched on the Shopify App Store? Our Shopify app development company builds both. Clean code, on-time delivery, results you can measure. We connect your store to the tools, workflows, and custom features it needs through expert Shopify API integration and custom development. Whether you are on Shopify, Shopify Plus, or scaling toward enterprise-level volume, our Shopify app development services are built to perform from day one.
            </p>

            <a
              href="/contact-shopify-agency/"
              className="cta-pill-invert mt-8 inline-flex items-center gap-3 rounded-full border px-7 py-3 text-[15px] sm:text-base transition"
            >
              Schedule a Call
              <span aria-hidden className="text-lg leading-none">→</span>
            </a>

            <p className="mt-6 text-white/85 text-[14px] sm:text-[15px] leading-[1.6]">
              Response within 24 hours. Fixed-price quotes. Zero obligation.
            </p>
          </div>

          {/* Right: hero image */}
          <div className="order-last lg:order-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Code-typing-bro.svg"
              alt="Shopify app developer at work"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Trusted by Leading Shopify Brands ────────────────────────── */}
      <section
        className="sad-trust-section"
        style={{
          background: "#FFFFFF",
          color: "#334155",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
        }}
      >
        <div
          className="sad-trust-inner mx-auto"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <h2
            className="sad-trust-heading text-center"
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
            className="sad-trust-carousel"
            style={{ marginTop: "30px", width: "100%", overflow: "hidden" }}
          >
            <div className="sad-trust-track">
              {[
                { src: "/images/trust_logo_31.svg", alt: "Olaplex" },
                { src: "/images/trust_logo_32.svg", alt: "Forme" },
                { src: "/images/trust_logo_20.svg", alt: "SarahChloe" },
                { src: "/images/trust_logo_27.svg", alt: "Cellar.com" },
                { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "Lids HD" },
                // duplicate set for seamless marquee loop
                { src: "/images/trust_logo_31.svg", alt: "" },
                { src: "/images/trust_logo_32.svg", alt: "" },
                { src: "/images/trust_logo_20.svg", alt: "" },
                { src: "/images/trust_logo_27.svg", alt: "" },
                { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "" },
              ].map((logo, i) => (
                <div key={i} className="sad-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="sad-trust-logo"
                    width={180}
                    height={86}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sad-trust-track {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 30px;
            width: max-content;
            animation: sadTrustScroll 40s linear infinite;
          }
          .sad-trust-track:hover { animation-play-state: paused; }
          .sad-trust-slide {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 180px;
            height: 86px;
          }
          .sad-trust-logo {
            width: 180px;
            height: 86px;
            object-fit: contain;
            display: block;
          }
          @keyframes sadTrustScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @media (max-width: 1023px) {
            .sad-trust-inner    { padding: 40px 16px !important; }
            .sad-trust-heading  { font-size: 20px !important; }
            .sad-trust-carousel { margin-top: 24px !important; }
            .sad-trust-track    { gap: 24px; animation-duration: 26s; }
            .sad-trust-slide,
            .sad-trust-logo     { width: 160px; height: 76px; }
          }
        ` }} />
      </section>

      {/* ── The Only Shopify App Dev Agency / Why work with us ──────── */}
      <section
        className="sad-about-section"
        style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="sad-about-inner mx-auto"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          {/* shared brand-gradient defs for the icons */}
          <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
            <defs>
              <linearGradient id="sadAboutGrad" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
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

          <div className="sad-about-grid">
            {/* LEFT — heading + body + CTA */}
            <div className="sad-about-left">
              <h2 className="sad-about-h2">
                <b>The Only Shopify App Development Agency</b> Your Store Will Ever Need.
              </h2>

              <p className="sad-about-p">
                Ecomm Wizards Apps is not a side project. It is a dedicated <b>Shopify app development company</b> built from within the Ecomm Wizards family, a Shopify Plus Preferred Partner with nearly a decade of ecommerce experience behind it.
              </p>

              <p className="sad-about-p">
                When you hire Shopify app developers from our team, you are not getting freelancers stitched together from Upwork. You get a specialized squad that has built, launched, and scaled apps for merchants across every niche, from custom private apps for enterprise stores to public apps that are live on the Shopify App Store today.
              </p>

              <a
                href="/contact-shopify-agency/"
                className="cta-pill-solid sad-about-cta inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-[15px] sm:text-base transition"
              >
                Schedule a Free Consultation
                <span aria-hidden className="text-lg leading-none">→</span>
              </a>
            </div>

            {/* RIGHT — Why work with us */}
            <div className="sad-about-right">
              <h3 className="sad-about-h3">Why work with us?</h3>

              <ul className="sad-about-list">
                <li className="sad-about-item">
                  <span className="sad-about-icon" aria-hidden>
                    <svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="url(#sadAboutGrad)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 17l4-4 5 5 3-3 6 6-3 3-5-5-4 4z" />
                      <path d="M14 14l4-4 6 6-3 3" />
                      <path d="M7 12l3-3M20 22l3-3" />
                    </svg>
                  </span>
                  <span className="sad-about-text">
                    <b>Over 1,000 Shopify stores served</b> through our sister company.
                  </span>
                </li>

                <li className="sad-about-item">
                  <span className="sad-about-icon" aria-hidden>
                    <svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="url(#sadAboutGrad)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3"  y="20" width="4" height="9" />
                      <rect x="10" y="14" width="4" height="15" />
                      <rect x="17" y="9"  width="4" height="20" />
                      <rect x="24" y="4"  width="4" height="25" />
                      <path d="M3 11c8-2 16-5 26-10" />
                    </svg>
                  </span>
                  <span className="sad-about-text">
                    <b>$1.5B+ revenue generated</b> collectively for our clients.
                  </span>
                </li>

                <li className="sad-about-item">
                  <span className="sad-about-icon" aria-hidden>
                    <svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="url(#sadAboutGrad)" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="16" cy="13" r="8" />
                      <path d="M11 20l-3 9 5-3 3 3 3-3 5 3-3-9" />
                      <path d="M13 13l2.5 2.5L20 11" />
                    </svg>
                  </span>
                  <span className="sad-about-text">
                    <b>28+ commerce awards</b> and more than <b>550 five star reviews.</b>
                  </span>
                </li>

                <li className="sad-about-item">
                  <span className="sad-about-icon" aria-hidden>
                    <svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="url(#sadAboutGrad)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 10 3 16 9 22" />
                      <polyline points="23 10 29 16 23 22" />
                      <line x1="19" y1="8" x2="13" y2="24" />
                    </svg>
                  </span>
                  <span className="sad-about-text">
                    <b>End-to-end app development</b> from concept and design to publish and ongoing updates.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sad-about-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: start;
          }
          .sad-about-h2 {
            color: #000000;
            font-size: 36px;
            font-weight: 700;
            line-height: 1.2;
            margin: 0 0 24px;
            letter-spacing: -0.01em;
          }
          .sad-about-p {
            color: #334155;
            font-size: 16px;
            line-height: 1.7;
            margin: 0 0 18px;
          }
          .sad-about-p b { color: #000000; font-weight: 700; }
          .sad-about-cta { margin-top: 14px; }
          .sad-about-h3 {
            color: #000000;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.25;
            margin: 0 0 24px;
          }
          .sad-about-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .sad-about-item {
            display: flex;
            align-items: flex-start;
            gap: 18px;
            padding: 20px 0;
            border-top: 1px solid rgba(0, 0, 0, 0.08);
          }
          .sad-about-item:first-child { border-top: none; padding-top: 0; }
          .sad-about-item:last-child  { padding-bottom: 0; }
          .sad-about-icon {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            margin-top: 2px;
          }
          .sad-about-text {
            color: #334155;
            font-size: 16px;
            line-height: 1.55;
          }
          .sad-about-text b { color: #000000; font-weight: 700; }

          @media (min-width: 1024px) {
            .sad-about-grid {
              grid-template-columns: 1.05fr 1fr;
              gap: 80px;
            }
            .sad-about-h2 { font-size: 44px; }
            .sad-about-h3 { font-size: 32px; }
          }

          @media (max-width: 1023px) {
            .sad-about-inner { padding: 50px 20px !important; }
            .sad-about-left, .sad-about-right { text-align: center; }
            .sad-about-item { text-align: left; }
            .sad-about-h2 { font-size: 30px; }
            .sad-about-h3 { font-size: 26px; }
            .sad-about-cta { display: inline-flex; }
          }
        ` }} />
      </section>

      {/* ── Two Types of Shopify App Development Services ────────────── */}
      <section
        className="sad-types-section"
        style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="sad-types-inner mx-auto"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <h2 className="sad-types-title">Two Types of Shopify App Development Services</h2>

          {/* PANEL 1 — Private */}
          <div className="sad-panel">
            <div className="sad-panel-grid">
              <div className="sad-panel-content">
                <h3 className="sad-panel-h">Private Shopify App Development for Your Store</h3>
                <p className="sad-panel-p">
                  Your store has needs that off-the-shelf apps cannot meet. We build <b>private Shopify apps</b> exclusively for your business, whether that is a deep ERP integration, a custom workflow, or proprietary functionality your competitors simply do not have.
                </p>

                <div className="sad-cards">
                  <div className="sad-card">
                    <span className="sad-card-icon" aria-hidden>
                      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="url(#sadAboutGrad)" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2"  y="6"  width="6" height="6" rx="1" />
                        <rect x="24" y="6"  width="6" height="6" rx="1" />
                        <rect x="13" y="20" width="6" height="6" rx="1" />
                        <path d="M8 9c4 0 8 4 8 11" />
                        <path d="M24 9c-4 0-8 4-8 11" />
                      </svg>
                    </span>
                    <div className="sad-card-body">
                      <h4 className="sad-card-h">Custom Shopify API Integration</h4>
                      <p className="sad-card-p">Connect your Shopify store to your CRM, ERP, 3PL, or any third-party platform. Seamlessly and without the workarounds.</p>
                    </div>
                  </div>

                  <div className="sad-card">
                    <span className="sad-card-icon" aria-hidden>
                      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="url(#sadAboutGrad)" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                        <line x1="2" y1="8"  x2="30" y2="8" />
                        <line x1="2" y1="16" x2="30" y2="16" />
                        <line x1="2" y1="24" x2="30" y2="24" />
                        <circle cx="9"  cy="8"  r="2.4" fill="#FBF7ED" />
                        <circle cx="22" cy="16" r="2.4" fill="#FBF7ED" />
                        <circle cx="13" cy="24" r="2.4" fill="#FBF7ED" />
                      </svg>
                    </span>
                    <div className="sad-card-body">
                      <h4 className="sad-card-h">Shopify Workflow Automation</h4>
                      <p className="sad-card-p">Automate inventory management, order fulfillment, reporting, and other complex operations so your team can focus on growth.</p>
                    </div>
                  </div>

                  <div className="sad-card">
                    <span className="sad-card-icon" aria-hidden>
                      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="url(#sadAboutGrad)" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="20" r="3.5" />
                        <path d="M11 14v-2M11 28v-2M5 20H3M19 20h-2M6.8 15.8l-1.4-1.4M16.6 25.6l-1.4-1.4M6.8 24.2l-1.4 1.4M16.6 14.4l-1.4 1.4" />
                        <circle cx="23" cy="9" r="2.5" />
                        <path d="M23 4v-2M23 16v-2M18 9h-2M30 9h-2" />
                      </svg>
                    </span>
                    <div className="sad-card-body">
                      <h4 className="sad-card-h">Store-Specific Custom Features</h4>
                      <p className="sad-card-p">Build proprietary functionality that&rsquo;s unique to your brand, the kind that creates real competitive advantage and keeps customers coming back.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sad-panel-art">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Code-typing-rafiki-1.svg" alt="Custom Shopify app development" width={500} height={500} loading="lazy" />
              </div>
            </div>
          </div>

          {/* PANEL 2 — Public (image left, text right on desktop) */}
          <div className="sad-panel sad-panel--rev">
            <div className="sad-panel-grid">
              <div className="sad-panel-art">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Interaction-Design-pana.svg" alt="Public Shopify App Store launch" width={500} height={500} loading="lazy" />
              </div>

              <div className="sad-panel-content">
                <h3 className="sad-panel-h">Public App Development for the Shopify App Store</h3>
                <p className="sad-panel-p">
                  Got an idea that could serve thousands of Shopify merchants? We handle the full lifecycle, from concept to Shopify App Store listing, optimized for downloads and <b>built to generate recurring revenue</b>. We do not just build the app. We help you monetize it.
                </p>

                <div className="sad-cards">
                  <div className="sad-card">
                    <span className="sad-card-icon" aria-hidden>
                      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="url(#sadAboutGrad)" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 18v-3a11 11 0 0 1 22 0v3" />
                        <rect x="3"  y="18" width="6" height="8" rx="1.5" />
                        <rect x="23" y="18" width="6" height="8" rx="1.5" />
                        <path d="M23 26v1a3 3 0 0 1-3 3h-3" />
                      </svg>
                    </span>
                    <div className="sad-card-body">
                      <h4 className="sad-card-h">End-to-End Shopify App Consultation</h4>
                      <p className="sad-card-p">From your first idea to user flow design, App Store listing copy, and post-launch marketing, we&rsquo;re with you every step.</p>
                    </div>
                  </div>

                  <div className="sad-card">
                    <span className="sad-card-icon" aria-hidden>
                      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="url(#sadAboutGrad)" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="16" cy="11" r="5" />
                        <path d="M7 28v-2a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v2" />
                        <path d="M9 14a8 8 0 1 1 14 0" />
                        <rect x="6"  y="14" width="3" height="6" rx="1" />
                        <rect x="23" y="14" width="3" height="6" rx="1" />
                      </svg>
                    </span>
                    <div className="sad-card-body">
                      <h4 className="sad-card-h">Full Lifecycle Support and Updates</h4>
                      <p className="sad-card-p">Ongoing updates, feature releases, and performance improvements to keep your app ahead of the competition.</p>
                    </div>
                  </div>

                  <div className="sad-card">
                    <span className="sad-card-icon" aria-hidden>
                      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="url(#sadAboutGrad)" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10a5 5 0 0 0-5-3h-2a4 4 0 0 0 0 8h4a4 4 0 0 1 0 8h-2a5 5 0 0 1-5-3" />
                        <line x1="16" y1="3" x2="16" y2="29" />
                      </svg>
                    </span>
                    <div className="sad-card-body">
                      <h4 className="sad-card-h">App Revenue and Growth Strategy</h4>
                      <p className="sad-card-p">Tap into Shopify&rsquo;s ecosystem of millions of merchants and build a recurring revenue stream around your app.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sad-types-title {
            color: #000000;
            font-size: 30px;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
            margin: 0 0 40px;
            letter-spacing: -0.01em;
          }
          .sad-panel {
            background: #FBF7ED;
            border-radius: 28px;
            padding: 40px 28px;
            margin-top: 28px;
          }
          .sad-panel:first-of-type { margin-top: 0; }
          .sad-panel-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
            align-items: center;
          }
          .sad-panel-h {
            color: #000000;
            font-size: 24px;
            font-weight: 700;
            line-height: 1.25;
            margin: 0 0 18px;
          }
          .sad-panel-p {
            color: #334155;
            font-size: 16px;
            line-height: 1.7;
            margin: 0 0 28px;
          }
          .sad-panel-p b { color: #000000; font-weight: 700; }
          .sad-panel-art {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sad-panel-art img {
            width: 100%;
            max-width: 460px;
            height: auto;
            display: block;
          }
          .sad-cards {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .sad-card {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 16px;
            padding: 20px 22px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
          }
          .sad-card-icon {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            margin-top: 2px;
          }
          .sad-card-body { flex: 1 1 auto; min-width: 0; }
          .sad-card-h {
            color: #000000;
            font-size: 17px;
            font-weight: 700;
            line-height: 1.35;
            margin: 0 0 8px;
          }
          .sad-card-p {
            color: #334155;
            font-size: 15px;
            line-height: 1.65;
            margin: 0;
          }

          @media (min-width: 1024px) {
            .sad-types-title { font-size: 44px; margin-bottom: 50px; }
            .sad-panel { padding: 60px 56px; margin-top: 40px; border-radius: 32px; }
            .sad-panel-grid { grid-template-columns: 1.05fr 1fr; gap: 60px; }
            .sad-panel--rev .sad-panel-grid { grid-template-columns: 1fr 1.05fr; }
            .sad-panel-h { font-size: 30px; }
          }

          @media (max-width: 1023px) {
            .sad-types-inner { padding: 50px 16px !important; }
            .sad-panel { padding: 32px 20px; border-radius: 22px; }
            .sad-panel-content { text-align: center; }
            .sad-panel-art { order: 99; }
            .sad-card { text-align: left; }
          }
        ` }} />
      </section>

      {/* ── How We Build Your Shopify App (4-tab process) ────────────── */}
      <section
        className="sad-proc-section"
        style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="sad-proc-inner mx-auto"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <h2 className="sad-proc-title">
            How We Build Your Shopify App:<br />From First Call to Live Launch
          </h2>

          <div className="sad-tabs">
            {/* radio inputs drive the active state — no JS required */}
            <input className="sad-tab-rad" type="radio" id="sad-tab-1" name="sad-proc" defaultChecked />
            <input className="sad-tab-rad" type="radio" id="sad-tab-2" name="sad-proc" />
            <input className="sad-tab-rad" type="radio" id="sad-tab-3" name="sad-proc" />
            <input className="sad-tab-rad" type="radio" id="sad-tab-4" name="sad-proc" />

            <div className="sad-tabs-row" role="tablist">
              <label htmlFor="sad-tab-1" className="sad-tab" data-tab="sad-tab-1" role="tab">
                <span className="sad-tab-ico" aria-hidden>
                  <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <line x1="2" y1="7"  x2="22" y2="7"  /><circle cx="26" cy="7"  r="3" fill="currentColor" stroke="none" />
                    <line x1="10" y1="16" x2="30" y2="16" /><circle cx="6"  cy="16" r="3" fill="currentColor" stroke="none" />
                    <line x1="2" y1="25" x2="18" y2="25" /><circle cx="22" cy="25" r="3" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span>Plan</span>
              </label>
              <label htmlFor="sad-tab-2" className="sad-tab" data-tab="sad-tab-2" role="tab">
                <span className="sad-tab-ico" aria-hidden>
                  <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4 4 10l12 6 12-6z" />
                    <path d="M4 16l12 6 12-6" />
                    <path d="M4 22l12 6 12-6" />
                  </svg>
                </span>
                <span>Design</span>
              </label>
              <label htmlFor="sad-tab-3" className="sad-tab" data-tab="sad-tab-3" role="tab">
                <span className="sad-tab-ico" aria-hidden>
                  <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="10 10 4 16 10 22" />
                    <polyline points="22 10 28 16 22 22" />
                    <line x1="18" y1="8" x2="14" y2="24" />
                  </svg>
                </span>
                <span>Develop</span>
              </label>
              <label htmlFor="sad-tab-4" className="sad-tab" data-tab="sad-tab-4" role="tab">
                <span className="sad-tab-ico" aria-hidden>
                  <svg viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4a8 8 0 0 0-8 8v6l-2 4h20l-2-4v-6a8 8 0 0 0-8-8z" />
                    <path d="M13 27a3 3 0 0 0 6 0" />
                  </svg>
                </span>
                <span>Deploy</span>
              </label>
            </div>

            <div className="sad-panels">
              {/* Plan */}
              <div className="sad-tabpanel" data-tab="sad-tab-1" role="tabpanel">
                <div className="sad-tabpanel-inner">
                  <div className="sad-tabpanel-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/plan-1.webp" alt="Plan" width={1024} height={414} loading="lazy" />
                  </div>
                  <h3 className="sad-tabpanel-h">1. Plan</h3>
                  <p className="sad-tabpanel-quote">&ldquo;They say an idiot with a plan can beat a genius without a plan. But what if we can do both?&rdquo;</p>
                  <div className="sad-tabpanel-cards">
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">Discovery &amp; Strategy</h4>
                      <p className="sad-mini-p">We start by getting deep into your business, your goals, your bottlenecks, your customers, and what success actually looks like for you. No templates. No assumptions.</p>
                    </div>
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">Technical Roadmapping</h4>
                      <p className="sad-mini-p">We translate your vision into a clear technical blueprint: project scope, feature priorities, API requirements, and milestone-by-milestone delivery timelines.</p>
                    </div>
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">Collaboration &amp; Transparency</h4>
                      <p className="sad-mini-p">You will always know what is happening and when. We set up clear communication workflows and shared project visibility from day one, so there are no surprises.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design */}
              <div className="sad-tabpanel" data-tab="sad-tab-2" role="tabpanel">
                <div className="sad-tabpanel-inner">
                  <div className="sad-tabpanel-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/desgin.webp" alt="Design" width={1024} height={414} loading="lazy" />
                  </div>
                  <h3 className="sad-tabpanel-h">2. Design</h3>
                  <p className="sad-tabpanel-quote">&ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;</p>
                  <div className="sad-tabpanel-cards">
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">UI/UX Prototyping</h4>
                      <p className="sad-mini-p">We wireframe and prototype every user flow before a single line of code is written &mdash; so you can see, test, and refine the experience upfront, not after launch.</p>
                    </div>
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">Merchant &amp; User Experience</h4>
                      <p className="sad-mini-p">Every screen is designed around how real Shopify merchants and their customers actually behave. Intuitive, fast to adopt, and built to reduce friction from the very first use.</p>
                    </div>
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">Brand Consistency</h4>
                      <p className="sad-mini-p">Your Shopify app should feel like a natural extension of your store, not a third-party tool that was bolted on. We match your visual identity and design language throughout every screen.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Develop */}
              <div className="sad-tabpanel" data-tab="sad-tab-3" role="tabpanel">
                <div className="sad-tabpanel-inner">
                  <div className="sad-tabpanel-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/develop.webp" alt="Develop" width={1024} height={414} loading="lazy" />
                  </div>
                  <h3 className="sad-tabpanel-h">3. Develop</h3>
                  <p className="sad-tabpanel-quote">&ldquo;Your online store is the heart of your business&mdash;don&rsquo;t let bad development slow you down.&rdquo;</p>
                  <div className="sad-tabpanel-cards">
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">Expert Coding</h4>
                      <p className="sad-mini-p">Our developers live inside Shopify&rsquo;s APIs, frameworks, and best practices. Every line of code meets Shopify&rsquo;s standards, built to be clean, scalable, and ready for real merchant volume.</p>
                    </div>
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">Agile Methodology</h4>
                      <p className="sad-mini-p">We work in focused development sprints with frequent check-ins and regular builds you can actually review. No black box development, no radio silence, no surprises at the end.</p>
                    </div>
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">Testing &amp; Quality Assurance</h4>
                      <p className="sad-mini-p">Before your app touches a single live store, it goes through performance, security, and cross-device compatibility testing. What we ship works. Every time.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deploy */}
              <div className="sad-tabpanel" data-tab="sad-tab-4" role="tabpanel">
                <div className="sad-tabpanel-inner">
                  <div className="sad-tabpanel-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/deploy.webp" alt="Deploy" width={1024} height={414} loading="lazy" />
                  </div>
                  <h3 className="sad-tabpanel-h">4. Deploy</h3>
                  <p className="sad-tabpanel-quote">&ldquo;No more &lsquo;Oops! That update broke the live site!&rsquo; thanks to our robust deployment process.&rdquo;</p>
                  <div className="sad-tabpanel-cards">
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">Version Control via GitHub</h4>
                      <p className="sad-mini-p">Every change is tracked, documented, and reversible. If a rollback is ever needed, we handle it instantly. No downtime, no panic.</p>
                    </div>
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">App Store Submission</h4>
                      <p className="sad-mini-p">From listing copy and screenshots to compliance checks and the official Shopify app review process, we manage the entire submission so your public app goes live without delays or rejections.</p>
                    </div>
                    <div className="sad-mini-card">
                      <h4 className="sad-mini-h">Ongoing Maintenance</h4>
                      <p className="sad-mini-p">Post-launch is not the finish line. We provide continuous support, bug fixes, Shopify API updates, and new feature development to keep your app competitive long after launch day.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sad-proc-title {
            color: #000000;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
            margin: 0 0 32px;
            letter-spacing: -0.01em;
          }
          .sad-tabs { position: relative; }
          .sad-tab-rad { position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; }

          .sad-tabs-row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
            margin-bottom: 24px;
          }
          .sad-tab {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background: #FFFFFF;
            color: #000000;
            border: 1px solid rgba(0, 0, 0, 0.06);
            border-radius: 14px;
            padding: 14px 12px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            user-select: none;
            transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
          }
          .sad-tab-ico { display: inline-flex; align-items: center; justify-content: center; }

          /* active tab — black bg, white text */
          #sad-tab-1:checked ~ .sad-tabs-row [data-tab="sad-tab-1"],
          #sad-tab-2:checked ~ .sad-tabs-row [data-tab="sad-tab-2"],
          #sad-tab-3:checked ~ .sad-tabs-row [data-tab="sad-tab-3"],
          #sad-tab-4:checked ~ .sad-tabs-row [data-tab="sad-tab-4"] {
            background: #000000;
            color: #FFFFFF;
            border-color: #000000;
          }

          /* keyboard focus ring on the label */
          .sad-tab-rad:focus-visible + .sad-tab,
          .sad-tab-rad:focus-visible ~ .sad-tabs-row label[for=""] {
            outline: 2px solid #3DC77A;
            outline-offset: 2px;
          }

          .sad-panels {
            background: #FBF7ED;
            border: 1px solid rgba(0, 0, 0, 0.06);
            border-radius: 22px;
            padding: 20px;
          }
          .sad-tabpanel { display: none; }
          #sad-tab-1:checked ~ .sad-panels [data-tab="sad-tab-1"],
          #sad-tab-2:checked ~ .sad-panels [data-tab="sad-tab-2"],
          #sad-tab-3:checked ~ .sad-panels [data-tab="sad-tab-3"],
          #sad-tab-4:checked ~ .sad-panels [data-tab="sad-tab-4"] {
            display: block;
          }
          .sad-tabpanel-img {
            background: #F1ECDD;
            border-radius: 16px;
            padding: 16px;
            margin-bottom: 24px;
            display: flex;
            justify-content: center;
          }
          .sad-tabpanel-img img {
            width: 100%;
            max-width: 1024px;
            height: auto;
            display: block;
            border-radius: 8px;
          }
          .sad-tabpanel-h {
            color: #000000;
            font-size: 26px;
            font-weight: 700;
            margin: 0 0 12px;
          }
          .sad-tabpanel-quote {
            color: #334155;
            font-size: 15px;
            line-height: 1.65;
            font-style: italic;
            margin: 0 0 22px;
          }
          .sad-tabpanel-cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .sad-mini-card {
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 16px;
            padding: 22px 24px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
          }
          .sad-mini-h {
            color: #000000;
            font-size: 18px;
            font-weight: 700;
            margin: 0 0 10px;
            line-height: 1.3;
          }
          .sad-mini-p {
            color: #334155;
            font-size: 15px;
            line-height: 1.65;
            margin: 0;
          }

          @media (min-width: 1024px) {
            .sad-proc-title  { font-size: 40px; margin-bottom: 44px; }
            .sad-tabs-row    { gap: 16px; margin-bottom: 32px; }
            .sad-tab         { padding: 18px 18px; font-size: 17px; gap: 10px; }
            .sad-panels      { padding: 40px; border-radius: 28px; }
            .sad-tabpanel-img { padding: 24px; margin-bottom: 30px; border-radius: 20px; }
            .sad-tabpanel-h  { font-size: 30px; margin-bottom: 14px; }
            .sad-tabpanel-quote { font-size: 16px; margin-bottom: 28px; }
            .sad-tabpanel-cards { grid-template-columns: repeat(3, 1fr); gap: 20px; }
          }

          @media (max-width: 1023px) {
            .sad-proc-inner { padding: 50px 16px !important; }
            .sad-tabs-row { gap: 8px; }
            .sad-tab { padding: 12px 8px; font-size: 13px; gap: 6px; border-radius: 12px; }
            .sad-tab-ico svg { width: 16px; height: 16px; }
            .sad-panels { padding: 14px; border-radius: 18px; }
            .sad-tabpanel-img { padding: 12px; margin-bottom: 18px; }
            .sad-tabpanel-h { font-size: 22px; }
          }
        ` }} />
      </section>

      {/* ── Results You Can Expect (image + accordion) ───────────────── */}
      <section
        className="sad-results-section"
        style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="sad-results-inner mx-auto"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <div className="sad-results-grid">
            <div className="sad-results-art">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/results.webp" alt="Shopify app analytics results dashboard" width={1024} height={969} loading="lazy" />
            </div>

            <div className="sad-results-body">
              <h2 className="sad-results-h">
                <b>Results</b> You Can Expect When You Hire a Shopify App Developer From Our Team
              </h2>

              {/* exclusive accordion — radio inputs + :checked, no JS */}
              <div className="sad-acc">
                <input className="sad-acc-rad" type="radio" id="sad-acc-1" name="sad-acc" defaultChecked />
                <input className="sad-acc-rad" type="radio" id="sad-acc-2" name="sad-acc" />
                <input className="sad-acc-rad" type="radio" id="sad-acc-3" name="sad-acc" />
                <input className="sad-acc-rad" type="radio" id="sad-acc-4" name="sad-acc" />

                <div className="sad-acc-list">
                  <div className="sad-acc-item" data-acc="sad-acc-1">
                    <label htmlFor="sad-acc-1" className="sad-acc-head">
                      <span className="sad-acc-title">More Efficiency, Less Manual Work</span>
                      <span className="sad-acc-ico" aria-hidden>
                        <svg className="sad-acc-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                        <svg className="sad-acc-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                      </span>
                    </label>
                    <div className="sad-acc-body">
                      <p>Our custom Shopify app development solutions automate the operations slowing your team down. Less manual work, fewer errors, and more time focused on growing the business.</p>
                    </div>
                  </div>

                  <div className="sad-acc-item" data-acc="sad-acc-2">
                    <label htmlFor="sad-acc-2" className="sad-acc-head">
                      <span className="sad-acc-title">Built to Scale With Your Store</span>
                      <span className="sad-acc-ico" aria-hidden>
                        <svg className="sad-acc-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                        <svg className="sad-acc-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                      </span>
                    </label>
                    <div className="sad-acc-body">
                      <p>Whether you are a growing DTC brand or a high-volume Shopify Plus merchant, every app we build is architected to scale. It performs on day one and keeps performing as your order volume grows.</p>
                    </div>
                  </div>

                  <div className="sad-acc-item" data-acc="sad-acc-3">
                    <label htmlFor="sad-acc-3" className="sad-acc-head">
                      <span className="sad-acc-title">Higher Conversions and More Sales</span>
                      <span className="sad-acc-ico" aria-hidden>
                        <svg className="sad-acc-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                        <svg className="sad-acc-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                      </span>
                    </label>
                    <div className="sad-acc-body">
                      <p>The right Shopify app does not just add features. It adds revenue. Custom functionality that reduces friction, increases average order value, and turns more browsers into buyers.</p>
                    </div>
                  </div>

                  <div className="sad-acc-item" data-acc="sad-acc-4">
                    <label htmlFor="sad-acc-4" className="sad-acc-head">
                      <span className="sad-acc-title">Global Reach Through the Shopify App Store</span>
                      <span className="sad-acc-ico" aria-hidden>
                        <svg className="sad-acc-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                        <svg className="sad-acc-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                      </span>
                    </label>
                    <div className="sad-acc-body">
                      <p>Publish on the Shopify App Store and reach millions of merchants worldwide. Our team knows exactly what it takes to build apps that rank, convert installs, and generate recurring subscription revenue.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sad-results-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
            align-items: center;
          }
          .sad-results-art {
            display: flex;
            justify-content: center;
            order: 99; /* mobile: image last */
          }
          .sad-results-art img {
            width: 100%;
            max-width: 560px;
            height: auto;
            display: block;
          }
          .sad-results-h {
            color: #000000;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            margin: 0 0 24px;
            letter-spacing: -0.01em;
            text-align: center;
          }
          .sad-results-h b { font-weight: 900; }

          /* accordion */
          .sad-acc { position: relative; }
          .sad-acc-rad { position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; }
          .sad-acc-list { display: flex; flex-direction: column; }
          .sad-acc-item {
            border-top: 1px solid rgba(0, 0, 0, 0.10);
            padding: 0;
          }
          .sad-acc-item:last-child { border-bottom: 1px solid rgba(0, 0, 0, 0.10); }
          .sad-acc-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 18px 0;
            cursor: pointer;
            user-select: none;
          }
          .sad-acc-title {
            color: #000000;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.4;
          }
          .sad-acc-ico {
            flex: 0 0 auto;
            color: #000000;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
          }
          .sad-acc-up   { display: none; }
          .sad-acc-down { display: block; }

          .sad-acc-body {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          .sad-acc-body p {
            color: #334155;
            font-size: 15px;
            line-height: 1.7;
            margin: 0;
            padding: 0 0 22px 0;
          }

          /* open state — drives by checked radio */
          #sad-acc-1:checked ~ .sad-acc-list [data-acc="sad-acc-1"] .sad-acc-body,
          #sad-acc-2:checked ~ .sad-acc-list [data-acc="sad-acc-2"] .sad-acc-body,
          #sad-acc-3:checked ~ .sad-acc-list [data-acc="sad-acc-3"] .sad-acc-body,
          #sad-acc-4:checked ~ .sad-acc-list [data-acc="sad-acc-4"] .sad-acc-body {
            max-height: 400px;
          }
          #sad-acc-1:checked ~ .sad-acc-list [data-acc="sad-acc-1"] .sad-acc-down,
          #sad-acc-2:checked ~ .sad-acc-list [data-acc="sad-acc-2"] .sad-acc-down,
          #sad-acc-3:checked ~ .sad-acc-list [data-acc="sad-acc-3"] .sad-acc-down,
          #sad-acc-4:checked ~ .sad-acc-list [data-acc="sad-acc-4"] .sad-acc-down {
            display: none;
          }
          #sad-acc-1:checked ~ .sad-acc-list [data-acc="sad-acc-1"] .sad-acc-up,
          #sad-acc-2:checked ~ .sad-acc-list [data-acc="sad-acc-2"] .sad-acc-up,
          #sad-acc-3:checked ~ .sad-acc-list [data-acc="sad-acc-3"] .sad-acc-up,
          #sad-acc-4:checked ~ .sad-acc-list [data-acc="sad-acc-4"] .sad-acc-up {
            display: block;
          }

          @media (min-width: 1024px) {
            .sad-results-grid {
              grid-template-columns: 1fr 1fr;
              gap: 60px;
            }
            .sad-results-art { order: 0; }
            .sad-results-h { font-size: 40px; text-align: left; margin-bottom: 30px; }
            .sad-acc-head { padding: 22px 0; }
            .sad-acc-title { font-size: 18px; }
          }

          @media (max-width: 1023px) {
            .sad-results-inner { padding: 50px 16px !important; }
          }
        ` }} />
      </section>

      {/* ── Success Stories & Testimonials ───────────────────────────── */}
      <section
        className="sad-stories-section"
        style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="sad-stories-inner mx-auto"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <h2 className="sad-stories-title">Success Stories &amp; Testimonials</h2>

          <div className="sad-stories-card">
            <div className="sad-stories-grid">
              <div className="sad-stories-left">
                <p className="sad-stories-quote">
                  &ldquo;Ecomm Wizards has been an invaluable partner&mdash;our custom app doubled our operational efficiency and saved us hours every day.&rdquo;
                </p>
                <div className="sad-stories-author">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="sad-stories-avatar"
                    src="/images/nari_medium_215a6a4f-f640-4b4f-98aa-28f001df20dd_medium.webp"
                    alt="Nari Sitaraman"
                    width={56}
                    height={56}
                    loading="lazy"
                  />
                  <div className="sad-stories-meta">
                    <div className="sad-stories-name">Nari Sitaraman</div>
                    <div className="sad-stories-role">Chief Technology Officer</div>
                  </div>
                </div>
              </div>

              <div className="sad-stories-right">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/review-1.webp" alt="Shopify app case study results" width={1024} height={708} loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sad-stories-title {
            color: #000000;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
            margin: 0 0 32px;
            letter-spacing: -0.01em;
          }
          .sad-stories-card {
            background: #FFFFFF;
            border-radius: 22px;
            padding: 32px 24px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
          }
          .sad-stories-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 28px;
            align-items: center;
          }
          .sad-stories-left { text-align: center; }
          .sad-stories-quote {
            color: #000000;
            font-size: 18px;
            font-weight: 600;
            line-height: 1.55;
            margin: 0 0 28px;
            letter-spacing: -0.005em;
          }
          .sad-stories-author {
            display: inline-flex;
            align-items: center;
            gap: 14px;
            flex-direction: column;
          }
          .sad-stories-avatar {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            object-fit: cover;
            display: block;
          }
          .sad-stories-meta { text-align: center; }
          .sad-stories-name {
            color: #000000;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.3;
          }
          .sad-stories-role {
            color: #334155;
            font-size: 14px;
            line-height: 1.5;
            margin-top: 2px;
          }
          .sad-stories-right {
            display: flex;
            justify-content: center;
          }
          .sad-stories-right img {
            width: 100%;
            max-width: 620px;
            height: auto;
            display: block;
          }

          @media (min-width: 1024px) {
            .sad-stories-title { font-size: 40px; margin-bottom: 44px; }
            .sad-stories-card  { padding: 50px 56px; border-radius: 28px; }
            .sad-stories-grid  { grid-template-columns: 1fr 1.05fr; gap: 60px; }
            .sad-stories-left  { text-align: left; }
            .sad-stories-quote { font-size: 22px; line-height: 1.55; margin-bottom: 32px; }
            .sad-stories-author { flex-direction: row; align-items: center; gap: 14px; }
            .sad-stories-meta  { text-align: left; }
          }

          @media (max-width: 1023px) {
            .sad-stories-inner { padding: 50px 16px !important; }
          }
        ` }} />
      </section>

      {/* ── Why Choose Ecomm Wizards (accordion + image, mirrored) ───── */}
      <section
        className="sad-why-section"
        style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="sad-why-inner mx-auto"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <h2 className="sad-why-h">
            <b>Why Choose</b> Ecomm Wizards as Your Shopify App Development Company
          </h2>

          <div className="sad-why-grid">
            <div className="sad-why-body">
              <div className="sad-why-acc">
                <input className="sad-why-rad" type="radio" id="sad-why-1" name="sad-why-acc" defaultChecked />
                <input className="sad-why-rad" type="radio" id="sad-why-2" name="sad-why-acc" />
                <input className="sad-why-rad" type="radio" id="sad-why-3" name="sad-why-acc" />
                <input className="sad-why-rad" type="radio" id="sad-why-4" name="sad-why-acc" />
                <input className="sad-why-rad" type="radio" id="sad-why-5" name="sad-why-acc" />

                <div className="sad-why-list">
                  <div className="sad-why-item" data-why="sad-why-1">
                    <label htmlFor="sad-why-1" className="sad-why-head">
                      <span className="sad-why-title">Shopify Plus Preferred Partner</span>
                      <span className="sad-why-ico" aria-hidden>
                        <svg className="sad-why-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                        <svg className="sad-why-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                      </span>
                    </label>
                    <div className="sad-why-bodyc">
                      <p>We do not just claim expertise. As a Shopify Plus Preferred Partner, we have been vetted by Shopify itself and trusted by some of the most demanding merchants on the platform.</p>
                    </div>
                  </div>

                  <div className="sad-why-item" data-why="sad-why-2">
                    <label htmlFor="sad-why-2" className="sad-why-head">
                      <span className="sad-why-title">Award-Winning Team</span>
                      <span className="sad-why-ico" aria-hidden>
                        <svg className="sad-why-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                        <svg className="sad-why-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                      </span>
                    </label>
                    <div className="sad-why-bodyc">
                      <p>28+ commerce awards. 550+ five-star reviews. When you hire Shopify app developers from Ecomm Wizards, you are hiring a team the industry keeps recognizing for results.</p>
                    </div>
                  </div>

                  <div className="sad-why-item" data-why="sad-why-3">
                    <label htmlFor="sad-why-3" className="sad-why-head">
                      <span className="sad-why-title">Dedicated Support</span>
                      <span className="sad-why-ico" aria-hidden>
                        <svg className="sad-why-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                        <svg className="sad-why-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                      </span>
                    </label>
                    <div className="sad-why-bodyc">
                      <p>Direct lines to Shopify and our partner network mean issues get resolved fast. Not routed through a ticket queue for three days while your store waits.</p>
                    </div>
                  </div>

                  <div className="sad-why-item" data-why="sad-why-4">
                    <label htmlFor="sad-why-4" className="sad-why-head">
                      <span className="sad-why-title">Transparent Pricing</span>
                      <span className="sad-why-ico" aria-hidden>
                        <svg className="sad-why-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                        <svg className="sad-why-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                      </span>
                    </label>
                    <div className="sad-why-bodyc">
                      <p>No surprise invoices. No scope creep. Every engagement starts with a clear proposal, defined milestones, and a Shopify app development cost breakdown you can plan a budget around.</p>
                    </div>
                  </div>

                  <div className="sad-why-item" data-why="sad-why-5">
                    <label htmlFor="sad-why-5" className="sad-why-head">
                      <span className="sad-why-title">Scalable Collaboration</span>
                      <span className="sad-why-ico" aria-hidden>
                        <svg className="sad-why-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                        <svg className="sad-why-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                      </span>
                    </label>
                    <div className="sad-why-bodyc">
                      <p>Need us to plug into your existing team? We can do that. Need us to be your entire app development department? We can do that too. We work the way your business needs us to.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sad-why-art">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/why-5.webp" alt="Why choose Ecomm Wizards" width={931} height={1024} loading="lazy" />
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sad-why-h {
            color: #000000;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
            margin: 0 0 32px;
            letter-spacing: -0.01em;
          }
          .sad-why-h b { font-weight: 900; }

          .sad-why-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
            align-items: center;
          }
          .sad-why-art {
            display: flex;
            justify-content: center;
            order: 99; /* mobile: image last */
          }
          .sad-why-art img {
            width: 100%;
            max-width: 560px;
            height: auto;
            display: block;
          }

          /* accordion */
          .sad-why-acc { position: relative; }
          .sad-why-rad { position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; }
          .sad-why-list { display: flex; flex-direction: column; }
          .sad-why-item {
            border-top: 1px solid rgba(0, 0, 0, 0.10);
          }
          .sad-why-item:last-child { border-bottom: 1px solid rgba(0, 0, 0, 0.10); }
          .sad-why-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 18px 0;
            cursor: pointer;
            user-select: none;
          }
          .sad-why-title {
            color: #000000;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.4;
          }
          .sad-why-ico {
            flex: 0 0 auto;
            color: #000000;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
          }
          .sad-why-up   { display: none; }
          .sad-why-down { display: block; }
          .sad-why-bodyc {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          .sad-why-bodyc p {
            color: #334155;
            font-size: 15px;
            line-height: 1.7;
            margin: 0;
            padding: 0 0 22px 0;
          }

          /* open state */
          #sad-why-1:checked ~ .sad-why-list [data-why="sad-why-1"] .sad-why-bodyc,
          #sad-why-2:checked ~ .sad-why-list [data-why="sad-why-2"] .sad-why-bodyc,
          #sad-why-3:checked ~ .sad-why-list [data-why="sad-why-3"] .sad-why-bodyc,
          #sad-why-4:checked ~ .sad-why-list [data-why="sad-why-4"] .sad-why-bodyc,
          #sad-why-5:checked ~ .sad-why-list [data-why="sad-why-5"] .sad-why-bodyc {
            max-height: 400px;
          }
          #sad-why-1:checked ~ .sad-why-list [data-why="sad-why-1"] .sad-why-down,
          #sad-why-2:checked ~ .sad-why-list [data-why="sad-why-2"] .sad-why-down,
          #sad-why-3:checked ~ .sad-why-list [data-why="sad-why-3"] .sad-why-down,
          #sad-why-4:checked ~ .sad-why-list [data-why="sad-why-4"] .sad-why-down,
          #sad-why-5:checked ~ .sad-why-list [data-why="sad-why-5"] .sad-why-down {
            display: none;
          }
          #sad-why-1:checked ~ .sad-why-list [data-why="sad-why-1"] .sad-why-up,
          #sad-why-2:checked ~ .sad-why-list [data-why="sad-why-2"] .sad-why-up,
          #sad-why-3:checked ~ .sad-why-list [data-why="sad-why-3"] .sad-why-up,
          #sad-why-4:checked ~ .sad-why-list [data-why="sad-why-4"] .sad-why-up,
          #sad-why-5:checked ~ .sad-why-list [data-why="sad-why-5"] .sad-why-up {
            display: block;
          }

          @media (min-width: 1024px) {
            .sad-why-h    { font-size: 40px; margin-bottom: 50px; }
            .sad-why-grid { grid-template-columns: 1fr 1fr; gap: 60px; }
            .sad-why-art  { order: 0; }
            .sad-why-head { padding: 22px 0; }
            .sad-why-title { font-size: 18px; }
          }

          @media (max-width: 1023px) {
            .sad-why-inner { padding: 50px 16px !important; }
          }
        ` }} />
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section
        className="sad-faq-section"
        style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
      >
        {/* page-scoped FAQPage JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />

        <div
          className="sad-faq-inner mx-auto"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <h2 className="sad-faq-title">Frequently Asked Questions</h2>

          <div className="sad-faq-acc">
            {FAQS.map((_, i) => (
              <input
                key={i}
                className="sad-faq-rad"
                type="radio"
                id={`sad-faq-${i}`}
                name="sad-faq-acc"
                defaultChecked={i === 0}
              />
            ))}

            <div className="sad-faq-list">
              {FAQS.map((f, i) => (
                <div key={i} className="sad-faq-item" data-faq={`sad-faq-${i}`}>
                  <label htmlFor={`sad-faq-${i}`} className="sad-faq-head">
                    <span className="sad-faq-q">{f.q}</span>
                    <span className="sad-faq-ico" aria-hidden>
                      <svg className="sad-faq-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                      <svg className="sad-faq-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                    </span>
                  </label>
                  <div className="sad-faq-bodyc">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sad-faq-title {
            color: #000000;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
            margin: 0 0 36px;
            letter-spacing: -0.01em;
          }
          .sad-faq-acc { position: relative; }
          .sad-faq-rad { position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; }
          .sad-faq-list { display: flex; flex-direction: column; }
          .sad-faq-item {
            border-top: 1px solid rgba(0, 0, 0, 0.10);
          }
          .sad-faq-item:last-child { border-bottom: 1px solid rgba(0, 0, 0, 0.10); }
          .sad-faq-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 20px 0;
            cursor: pointer;
            user-select: none;
          }
          .sad-faq-q {
            color: #000000;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.4;
          }
          .sad-faq-ico {
            flex: 0 0 auto;
            color: #000000;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
          }
          .sad-faq-up   { display: none; }
          .sad-faq-down { display: block; }
          .sad-faq-bodyc {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s ease;
          }
          .sad-faq-bodyc p {
            color: #334155;
            font-size: 15px;
            line-height: 1.7;
            margin: 0;
            padding: 0 0 24px 0;
          }

          /* open state — driven by checked radio */
          ${FAQS.map((_, i) => `#sad-faq-${i}:checked ~ .sad-faq-list [data-faq="sad-faq-${i}"] .sad-faq-bodyc`).join(",\n          ")} {
            max-height: 600px;
          }
          ${FAQS.map((_, i) => `#sad-faq-${i}:checked ~ .sad-faq-list [data-faq="sad-faq-${i}"] .sad-faq-down`).join(",\n          ")} {
            display: none;
          }
          ${FAQS.map((_, i) => `#sad-faq-${i}:checked ~ .sad-faq-list [data-faq="sad-faq-${i}"] .sad-faq-up`).join(",\n          ")} {
            display: block;
          }

          @media (min-width: 1024px) {
            .sad-faq-title { font-size: 40px; margin-bottom: 50px; }
            .sad-faq-head  { padding: 24px 0; }
            .sad-faq-q     { font-size: 18px; }
          }

          @media (max-width: 1023px) {
            .sad-faq-inner { padding: 50px 16px !important; }
          }
        ` }} />
      </section>

      {/* ── Our Valued Partners (logo grid, Ecomm Wizards excluded) ──── */}
      <section
        className="sad-partners-section"
        style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="sad-partners-inner mx-auto"
          style={{ maxWidth: "1320px", padding: "60px 20px" }}
        >
          <h2 className="sad-partners-h">
            Our Valued <b>Partners</b>
          </h2>
          <p className="sad-partners-p">
            The best <b>Shopify app development agency</b> doesn&rsquo;t work in isolation &mdash; it works within the ecosystem. Over nearly a decade, Ecomm Wizards has built deep, working relationships with the platforms and tools that power the world&rsquo;s top Shopify stores. These aren&rsquo;t logo badges we collected &mdash; they&rsquo;re active partnerships that make our solutions faster, smarter, and better integrated for every merchant we serve.
          </p>

          <div className="sad-partners-grid">
            {[
              { src: "/images/Shopify_864c7bb4-97c4-4c50-9f89-9e84042003b9-2.svg", alt: "Shopify" },
              { src: "/images/partner_logo_2-1.svg",  alt: "Yotpo" },
              { src: "/images/partner_logo_3-1.svg",  alt: "Rebuy" },
              { src: "/images/partner_logo_4-1.svg",  alt: "Recharge" },
              { src: "/images/partner_logo_5-1.svg",  alt: "Klaviyo" },
              { src: "/images/partner_logo_6-1.svg",  alt: "Gorgias" },
              { src: "/images/partner_logo_7-1.svg",  alt: "Okendo" },
              { src: "/images/partner_logo_8-1.svg",  alt: "Nosto" },
              { src: "/images/partner_logo_9-1.svg",  alt: "ShipStation" },
              { src: "/images/partner_logo_10-1.svg", alt: "Rise.ai" },
              { src: "/images/partner_logo_11-1.svg", alt: "Glew" },
              { src: "/images/partner_logo_12-1.svg", alt: "Matrixify" },
              { src: "/images/partner_logo_13-1.svg", alt: "Route" },
              { src: "/images/partner_logo_14-1.svg", alt: "Carro" },
            ].map((logo, i) => (
              <div key={i} className="sad-partners-cell">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sad-partners-h {
            color: #000000;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.2;
            text-align: center;
            margin: 0 0 22px;
            letter-spacing: -0.01em;
          }
          .sad-partners-h b { font-weight: 900; }
          .sad-partners-p {
            color: #334155;
            font-size: 15px;
            line-height: 1.7;
            text-align: center;
            margin: 0 auto 40px;
            max-width: 1080px;
          }
          .sad-partners-p b { color: #000000; font-weight: 700; }

          .sad-partners-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 32px 40px;
          }
          .sad-partners-cell {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 140px;
            height: 56px;
          }
          .sad-partners-cell img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            display: block;
          }

          @media (min-width: 1024px) {
            .sad-partners-h  { font-size: 36px; margin-bottom: 24px; }
            .sad-partners-p  { font-size: 16px; margin-bottom: 56px; }
            .sad-partners-grid { gap: 50px 70px; }
            .sad-partners-cell { width: 180px; height: 72px; }
          }

          @media (max-width: 1023px) {
            .sad-partners-inner { padding: 50px 16px !important; }
            .sad-partners-grid  { gap: 28px 36px; }
          }
        ` }} />
      </section>

      {/* ── Closing marquee — Why Work with Ecomm Wizards ────────────── */}
      <section
        className="sad-marq-section"
        style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="sad-marq-row">
          <h3 className="sad-marq-h">Why Work with Ecomm Wizards</h3>

          <div className="sad-marq-viewport">
            <div className="sad-marq-track">
              {/* duplicated set for seamless infinite scroll */}
              {[1, 2].map((dup) => (
                <div key={dup} className="sad-marq-group" aria-hidden={dup === 2}>
                  <span className="sad-marq-item">100% Client Satisfaction</span>
                  <span className="sad-marq-dot" aria-hidden />
                  <span className="sad-marq-item">Unsurpassed Quality</span>
                  <span className="sad-marq-dot" aria-hidden />
                  <span className="sad-marq-item">World-Class Customer Service</span>
                  <span className="sad-marq-dot" aria-hidden />
                  <span className="sad-marq-item">Unbeatable Integrity</span>
                  <span className="sad-marq-dot" aria-hidden />
                  <span className="sad-marq-item">Timely Delivery of Superior Products</span>
                  <span className="sad-marq-dot" aria-hidden />
                  <span className="sad-marq-item">Effective Collaboration</span>
                  <span className="sad-marq-dot" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .sad-marq-row {
            max-width: 1320px;
            margin: 0 auto;
            padding: 28px 20px;
            display: flex;
            align-items: center;
            gap: 40px;
            flex-direction: column;
          }
          .sad-marq-h {
            color: #000000;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.3;
            margin: 0;
            flex: 0 0 auto;
            text-align: center;
          }
          .sad-marq-viewport {
            flex: 1 1 auto;
            min-width: 0;
            width: 100%;
            overflow: hidden;
            -webkit-mask-image: linear-gradient(to right, transparent 0, #000 32px, #000 calc(100% - 32px), transparent 100%);
                    mask-image: linear-gradient(to right, transparent 0, #000 32px, #000 calc(100% - 32px), transparent 100%);
          }
          .sad-marq-track {
            display: flex;
            width: max-content;
            animation: sadMarqScroll 36s linear infinite;
          }
          .sad-marq-track:hover { animation-play-state: paused; }
          .sad-marq-group {
            display: flex;
            align-items: center;
            flex: 0 0 auto;
          }
          .sad-marq-item {
            color: #000000;
            font-family: 'Poppins', sans-serif;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: 0.3px;
            white-space: nowrap;
            padding: 0 22px;
          }
          .sad-marq-dot {
            flex: 0 0 auto;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%);
          }
          @keyframes sadMarqScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (min-width: 1024px) {
            .sad-marq-row { flex-direction: row; gap: 56px; padding: 32px 20px; }
            .sad-marq-h   { text-align: left; font-size: 20px; max-width: 220px; }
            .sad-marq-item { font-size: 16px; padding: 0 30px; }
          }
        ` }} />
      </section>
    </>
  );
}
