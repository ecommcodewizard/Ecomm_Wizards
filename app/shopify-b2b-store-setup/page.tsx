import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify B2B Store Setup | Wholesale & D2C From One Platform",
  description:
    "Shopify Plus B2B agency that builds unified wholesale + D2C operations on a single store. Custom pricing, net terms, ERP sync, self-serve buyer portals. Fixed-price quotes.",
  alternates: { canonical: "https://ecommwizards.com/services/shopify-b2b-store-setup/" },
};

const GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";
const GRADIENT_TEXT = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const CONSULT = "/book-shopify-consultation/";

const TRUST_LOGOS = [
  { src: "/images/trust_logo_32.svg", alt: "Forme" },
  { src: "/images/trust_logo_20.svg", alt: "SarahChloe" },
  { src: "/images/trust_logo_27.svg", alt: "Cellar.com" },
  { src: "/images/Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif", alt: "Lids HD" },
  { src: "/images/Olaplex-logo-new.avif", alt: "Olaplex" },
  { src: "/images/everlast-icon.svg", alt: "Everlast" },
];

const AUDIENCE = [
  {
    t: "Brands Launching Wholesale for the First Time",
    d: "Set up your Shopify B2B operation from scratch, pricing, accounts, catalog, without disrupting your D2C store.",
  },
  {
    t: "Businesses Migrating Off Legacy Wholesale Platforms",
    d: "Migrate your entire wholesale operation to Shopify Plus B2B with zero data loss and zero downtime.",
  },
  {
    t: "Shopify Plus Brands Scaling Their B2B Channel",
    d: "We audit your B2B setup, identify gaps, and build portals, net terms, and ERP sync wholesale buyers expect.",
  },
];

const TABLE_ROWS = [
  {
    benefit: "Operational Unity",
    desc: "Run Shopify B2B and D2C on one platform with seamless ERP integration",
    impact: "Cuts tech debt by 20 to 30%, eliminating duplicate systems and slashing maintenance costs",
  },
  {
    benefit: "Buyer Personalization",
    desc: "Custom catalogs, company-specific volume pricing, and self-serve buyer portals",
    impact: "Boosts repeat orders by 25 to 35% through buying experiences built around each account",
  },
  {
    benefit: "Automation Efficiency",
    desc: "Shopify Flow handles invoice generation, order approvals, and reorder triggers automatically",
    impact: "Cuts manual workload by 50 to 70%, freeing your team to focus on growth instead of admin",
  },
  {
    benefit: "Rapid Scalability",
    desc: "Handles high-volume orders with 99.99% uptime across multi-location buyers and global accounts",
    impact: "Launch new Shopify wholesale channels in weeks, not months",
  },
  {
    benefit: "Ecosystem Flexibility",
    desc: "Access 8,000+ apps and APIs with Shopify Plus B2B features that receive 200+ updates per year",
    impact: "Future-proof your wholesale setup without rebuilding from scratch",
  },
];

const FEATURES = [
  {
    t: "Company Profiles and Buyer Accounts",
    d: "Individual profiles with contacts, shipping locations, payment terms, and permissions. Buyers manage orders without emailing your team.",
  },
  {
    t: "Custom Pricing and Price Lists",
    d: "Account-specific price lists, tiered discounts, and MOQ rules. Each company sees only the pricing they're entitled to.",
  },
  {
    t: "Net Payment Terms and B2B Checkout",
    d: "Net 30, 60, or custom terms at checkout. PO capture, automated invoices, and tax exemption handling built in.",
  },
  {
    t: "Custom Catalog Management",
    d: "Control which products each wholesale buyer sees. Restrict visibility by segment, company, or location.",
  },
  {
    t: "Shopify Flow Automation",
    d: "Automate order approvals, reorder triggers, invoices, and buyer onboarding. No more manual workflows.",
  },
  {
    t: "ERP and Backend Integration",
    d: "Connect Shopify B2B to NetSuite, Acumatica, SAP via API. Real-time inventory, order sync, no manual reconciliation.",
  },
  {
    t: "Self-Serve Buyer Portal",
    d: "Branded portal for orders, history, reorders, and tracking. Buyers manage everything without contacting your team.",
  },
  {
    t: "Wholesale Pricing for Non-Plus Stores",
    d: "Not on Shopify Plus yet? We use SparkLayer or Wholesale Hub to serve B2B buyers today while you scale.",
  },
  {
    t: "Bulk Ordering and Order Management",
    d: "Quick order forms, CSV upload, and repeat orders. Less friction means more orders, fewer abandoned carts.",
  },
];

const ICON_PROPS = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const PROCESS_STEPS = [
  {
    title: "Discovery & Planning",
    body: (
      <>
        We audit your current workflows, buyer segments, and tech stack to map out exactly what your{" "}
        <b>Shopify for B2B</b> setup needs, from custom pricing rules to ERP sync requirements. No assumptions, no
        cookie-cutter configurations.
      </>
    ),
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M21 12a9 9 0 0 1-15.4 6.36" />
        <path d="M3 12a9 9 0 0 1 15.4-6.36" />
        <polyline points="21 3 21 9 15 9" />
        <polyline points="3 21 3 15 9 15" />
      </svg>
    ),
  },
  {
    title: "Configuration & Customization",
    body: (
      <>
        We build out company profiles, account-specific catalogs, and net payment terms inside Shopify Plus. Where
        needed, our <b>B2B Shopify developer</b> configures headless options or a branded <b>B2B Shopify theme</b> that
        matches your wholesale portal to your brand identity.
      </>
    ),
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2 3h3l2.5 13h12l2-9H6" />
      </svg>
    ),
  },
  {
    title: "Integration & Automation",
    body: (
      <>
        We connect your ERP (NetSuite, Acumatica, or others) via APIs and the right <b>Shopify B2B app</b>{" "}
        integrations, then configure Shopify Flow for automated PO handling, invoice generation, order approvals, and
        sales rep permissions.
      </>
    ),
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  },
  {
    title: "Testing & Quality Assurance",
    body: (
      <>
        Full QA across usability, data accuracy, and mobile responsiveness. We run simulated buyer scenarios to
        stress-test every workflow before a single real order goes through.
      </>
    ),
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Launch & Ongoing Refinement",
    body: (
      <>
        We go live with performance monitoring in place. Post-launch, we track buyer behaviour and iterate on features
        like bulk ordering, vaulted payments, and account-level reporting to keep your <b>Shopify B2B agency support</b>{" "}
        relationship active and results-driven.
      </>
    ),
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
  },
];

const MINI_CASES = [
  {
    t: "Fitness Equipment Wholesale Portal",
    d: "Buyer-specific catalogs and tiered pricing synced live with ERP. Built full B2B Shopify setup with real-time inventory. Result: 30% faster reorder cycles.",
    img: "/images/b2b-success-1.webp",
  },
  {
    t: "Apparel Brand Hybrid Model",
    d: "Connected wholesale and retail operations. Configured company profiles, Shopify Flow approvals, and automated invoices inside branded B2B themes.",
    img: "/images/b2b-success-2.webp",
  },
  {
    t: "Premium Goods B2B Setup",
    d: "Unified D2C and wholesale on one storefront. Self-serve portals, net payment terms, and buyer-level pricing turned one-timers into loyal accounts.",
    img: "/images/b2b-success-3.webp",
  },
  {
    t: "Luxury Accessories Implementation",
    d: "Headless flexibility with custom discount logic and PO tracking at scale. Premium brand consistency across every wholesale market.",
    img: "/images/b2b-success-4.webp",
  },
];

const FAQS = [
  {
    q: "What is Shopify B2B and do I need Shopify Plus for it?",
    a: "Shopify B2B is Shopify's native wholesale solution built into Shopify Plus. It includes company profiles, custom price lists, net payment terms, self-serve buyer portals, and bulk ordering features all managed from one admin. Full native Shopify B2B features require Shopify Plus. If you are on a lower plan, we configure a strong wholesale setup using apps like SparkLayer or Wholesale Hub until you are ready to upgrade.",
  },
  {
    q: "Can I run D2C and wholesale from one Shopify store?",
    a: "Yes. One of the biggest advantages of Shopify Plus B2B is the ability to run your D2C and wholesale operations from a single storefront. Wholesale buyers log in and see their company-specific pricing, catalog, and payment terms. D2C customers see the standard retail experience. No separate stores, no duplicate admin work.",
  },
  {
    q: "How long does a Shopify B2B setup take?",
    a: "Our standard Shopify B2B implementation runs four to six weeks for a full build. Simpler setups with fewer integrations can launch faster. More complex builds involving ERP integration, headless development, or large buyer catalogs take longer. We scope the exact timeline during your discovery call before any work begins.",
  },
  {
    q: "What net payment terms can you configure on Shopify B2B?",
    a: "We configure net 30, net 60, net 90, or custom payment terms at the buyer account level inside Shopify Plus. This includes purchase order number capture at checkout, automated invoice generation via Shopify Flow, and payment reminders. For brands not on Plus, we use third-party net terms apps to replicate this functionality.",
  },
  {
    q: "Can you integrate Shopify B2B with our ERP?",
    a: "Yes. Shopify B2B ERP integration is one of the most common parts of our builds. We connect Shopify to NetSuite, Acumatica, SAP, and other ERP systems through clean API integrations. Real-time inventory sync, order data flow, and financial reconciliation all happen automatically between your Shopify B2B store and your ERP.",
  },
  {
    q: "How much does a Shopify B2B setup cost?",
    a: "Shopify B2B setup cost depends on the scope of your build, the number of buyer accounts, catalog complexity, and whether ERP integration is required. We provide fixed-price quotes with no hourly surprises. Contact us and we will send a detailed breakdown within 24 hours.",
  },
  {
    q: "What is the difference between Shopify B2B and Shopify wholesale apps?",
    a: "Shopify B2B is the native Shopify Plus solution with company profiles, custom catalogs, and net terms built directly into the admin. Shopify wholesale apps like SparkLayer or Wholesale Hub replicate many of these features for brands on lower Shopify plans. Both paths are valid depending on your scale and budget. We build and configure both.",
  },
  {
    q: "Do you offer ongoing support after the Shopify B2B store launches?",
    a: "Yes. We do not hand you the keys and disappear. We offer post-launch support, performance monitoring, buyer behavior analysis, and ongoing feature development. Whether you need a long-term Shopify B2B agency partner or on-demand development, we are available.",
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

export default function ShopifyB2BPage() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────────── */}
      <section className="relative w-full bg-black" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div
          className="mx-auto grid items-center gap-y-10 gap-x-[30px] py-[40px] px-[15px] lg:py-[60px] lg:px-[20px] lg:grid-cols-2"
          style={{ maxWidth: "1320px" }}
        >
          <div className="text-center lg:text-left">
            <h1 className="font-semibold leading-[1.15] tracking-tight text-white text-[34px] sm:text-[44px] lg:text-[50px] xl:text-[54px]">
              Shopify Plus B2B Solutions: Run Wholesale and D2C{" "}
              <span style={GRADIENT_TEXT}>From One Powerful Platform</span>
            </h1>
            <p className="mt-7 text-white text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-[1.4]">
              Stop Managing Two Businesses Separately. B2B Shopify Was Built for This.
            </p>
            <p className="mt-5 text-white/85 text-[15px] sm:text-base lg:text-[16px] leading-[1.7]">
              Most wholesale businesses are stuck juggling a patchwork of tools. A separate wholesale portal here, a
              manual pricing spreadsheet there, and a D2C store that has no idea the other exists. It is slow, it is
              expensive, and it breaks at scale.
            </p>
            <p className="mt-4 text-white/85 text-[15px] sm:text-base lg:text-[16px] leading-[1.7]">
              Ecomm Wizards is a dedicated Shopify B2B agency that builds unified commerce solutions where your
              wholesale and D2C operations run together on a single Shopify Plus B2B infrastructure. Whether you are
              launching Shopify wholesale from scratch or migrating off a clunky legacy platform, we make Shopify for
              B2B feel effortless for your team and your buyers.
            </p>
            <a
              href={CONSULT}
              className="cta-pill-invert mt-7 inline-flex items-center gap-3 rounded-full border px-7 py-3 text-[15px] sm:text-base transition"
            >
              Book a Free Consultation
              <span aria-hidden className="text-lg leading-none">→</span>
            </a>
          </div>

          <div className="order-last lg:order-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/B2B-hero-image.webp"
              alt="Shopify Plus B2B unified DTC and wholesale storefronts"
              width={1184}
              height={1176}
              className="w-full h-auto"
              style={{ filter: "hue-rotate(100deg) saturate(1.05)" }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. Trusted by (marquee slider) ──────────────────────────── */}
      <section className="b2b-trust" style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>
        <div className="b2b-trust-inner mx-auto" style={{ maxWidth: "1320px", padding: "60px 0" }}>
          <h2
            className="b2b-trust-heading text-center"
            style={{ color: "#1e293b", fontSize: "22px", fontWeight: 700, lineHeight: 1.45, margin: 0 }}
          >
            Trusted by Leading Shopify Brands
          </h2>

          <div className="b2b-trust-carousel" style={{ marginTop: "30px", width: "100%", overflow: "hidden" }}>
            <div className="b2b-trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div key={i} className="b2b-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={i < TRUST_LOGOS.length ? l.alt : ""}
                    className="b2b-trust-logo"
                    width={178}
                    height={86}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Who We Build For ─────────────────────────────────────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-[#1e293b] text-[34px] sm:text-[42px] lg:text-[48px]">
            Who We Build Shopify B2B Stores For
          </h2>
          <p className="mx-auto mt-5 max-w-[900px] text-center text-[#334155] text-[15px] sm:text-base leading-[1.7]">
            Our Shopify B2B solutions are built for brands at every stage of wholesale growth.
          </p>
          <div className="mt-12 grid gap-[20px] lg:grid-cols-3">
            {AUDIENCE.map((a) => (
              <div key={a.t} className="rounded-[18px] bg-white p-7 sm:p-8">
                <h3 className="font-bold text-[#1e293b] text-[20px] sm:text-[22px] leading-[1.3]">{a.t}</h3>
                <p className="mt-4 text-[#334155] text-[15px] leading-[1.7]">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Why Wholesalers Are Moving (intro, white) ─────────────── */}
      <section style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px] text-center" style={{ maxWidth: "1320px" }}>
          <h2 className="font-bold leading-[1.2] text-[#1e293b] text-[34px] sm:text-[42px] lg:text-[48px]">
            Why Are Smart Wholesalers Moving to B2B Shopify?
          </h2>
          <p className="mx-auto mt-6 max-w-[1100px] text-[#334155] text-[15px] sm:text-base leading-[1.85]">
            Your buyers expect the same frictionless experience they get as consumers. Personalized pricing, instant
            order approvals, and self-serve account management. Legacy wholesale platforms were not built for that.
            Shopify B2B was. Here is what changes when you build your wholesale operation on Shopify Plus B2B, and why
            the numbers speak for themselves.
          </p>
        </div>
      </section>

      {/* ── 5. Comparison Table (black) ─────────────────────────────── */}
      <section style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <div className="rounded-[20px] p-5 sm:p-8 lg:p-10" style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="grid gap-5 lg:gap-7 lg:grid-cols-3">
              {/* col 1 — benefit labels */}
              <div className="rounded-[14px] p-5 sm:p-6" style={{ background: "#121212" }}>
                <div className="b2b-col-head" style={{ background: GRADIENT }}>Benefits</div>
                <ul className="mt-5">
                  {TABLE_ROWS.map((r, i) => (
                    <li
                      key={r.benefit}
                      className="py-5 text-white text-[15px] sm:text-base leading-[1.5]"
                      style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.10)" }}
                    >
                      {r.benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* col 2 — descriptions */}
              <div className="rounded-[14px] p-5 sm:p-6" style={{ background: "#121212" }}>
                <div className="b2b-col-head" style={{ background: GRADIENT }}>Description</div>
                <ul className="mt-5">
                  {TABLE_ROWS.map((r, i) => (
                    <li
                      key={r.benefit}
                      className="py-5 text-white/85 text-[14px] sm:text-[15px] leading-[1.6]"
                      style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.10)" }}
                    >
                      {r.desc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* col 3 — impact */}
              <div className="rounded-[14px] p-5 sm:p-6" style={{ background: "#121212" }}>
                <div className="b2b-col-head" style={{ background: GRADIENT }}>Impact on Your Business</div>
                <ul className="mt-5">
                  {TABLE_ROWS.map((r, i) => (
                    <li
                      key={r.benefit}
                      className="py-5 text-white/85 text-[14px] sm:text-[15px] leading-[1.6]"
                      style={{ borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.10)" }}
                    >
                      {r.impact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-[1100px] text-center text-white/85 text-[15px] sm:text-base leading-[1.85]">
            These are not theoretical benefits. They are outcomes delivered across 1,000+ brands, from apparel to luxury
            goods. When Shopify B2B is set up right, your wholesale operation stops being a cost center and starts being
            a growth engine.
          </p>
        </div>
      </section>

      {/* ── 6. Features Grid (cream, 3x3) ───────────────────────────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-[#1e293b] text-[32px] sm:text-[40px] lg:text-[46px]">
            Every Feature Your Wholesale Shopify Store Needs,<br className="hidden lg:block" /> Built and Configured by
            Experts
          </h2>
          <p className="mx-auto mt-5 max-w-[1050px] text-center text-[#334155] text-[15px] sm:text-base leading-[1.7]">
            We do not just turn on native Shopify B2B features. We build and configure each one around how your buyers
            actually order.
          </p>

          <div className="mt-12 grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.t} className="rounded-[18px] bg-white p-7 sm:p-8">
                <h3 className="font-bold text-[#1e293b] text-[20px] sm:text-[22px] leading-[1.3]">{f.t}</h3>
                <p className="mt-4 text-[#334155] text-[15px] leading-[1.7]">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Process (cream, image left + 5 steps right) ──────────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-[#1e293b] text-[32px] sm:text-[40px] lg:text-[46px]">
            How We Build Your Shopify B2B Operation:<br className="hidden lg:block" /> From Strategy to Scale
          </h2>
          <p className="mx-auto mt-5 max-w-[1050px] text-center text-[#334155] text-[15px] sm:text-base leading-[1.7]">
            Every Shopify B2B agency has a process. Ours is built around one principle: zero disruption to your existing
            store while we layer in a fully functional wholesale operation. Our structured five-step implementation
            typically runs 4 to 6 weeks.
          </p>

          <div className="mt-12 grid gap-[30px] lg:grid-cols-2 lg:items-center">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/b2b-tab-image-desktop.webp"
                alt="Shopify B2B wholesale build preview"
                width={800}
                height={937}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col">
              {PROCESS_STEPS.map((s, i) => (
                <div
                  key={s.title}
                  className="py-6"
                  style={{ borderTop: i === 0 ? "none" : "1px solid rgba(0,0,0,0.10)" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold text-[#1e293b] text-[20px] sm:text-[22px] leading-[1.3]">{s.title}</h3>
                    <span className="text-[#1e293b] flex-shrink-0 mt-1">{s.icon}</span>
                  </div>
                  <p className="mt-3 text-[#334155] text-[15px] leading-[1.7]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Mini Case Studies (cream, 2x2) ───────────────────────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-[#1e293b] text-[32px] sm:text-[40px] lg:text-[46px]">
            Real Brands. Real Shopify B2B Results.
          </h2>
          <p className="mx-auto mt-5 max-w-[1100px] text-center text-[#334155] text-[15px] sm:text-base leading-[1.7]">
            We have built Shopify wholesale operations across industries that could not be more different. Every
            implementation is shaped around the specific reality of that business. Here is what that looks like in
            practice.
          </p>

          <div className="mt-12 grid gap-[20px] lg:grid-cols-2">
            {MINI_CASES.map((c) => (
              <div key={c.t} className="rounded-[18px] bg-white p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1e293b] text-[18px] sm:text-[20px] leading-[1.3]">{c.t}</h3>
                  <p className="mt-3 text-[#334155] text-[14px] sm:text-[15px] leading-[1.7]">{c.d}</p>
                </div>
                <div className="w-full sm:w-[200px] lg:w-[230px] flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.t} className="w-full h-auto" />
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-[1100px] text-center text-[#334155] text-[15px] sm:text-base leading-[1.85]">
            These are four industries, four completely different setups, and one consistent outcome: a{" "}
            <b>Shopify B2B ecommerce agency</b> that delivers what wholesale brands actually need. View full case
            studies or request a demo on your consultation call.
          </p>
        </div>
      </section>

      {/* ── 9. About Agency (black, image left + text right) ────────── */}
      <section style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <div className="grid gap-[30px] lg:grid-cols-2 lg:items-center">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/b2b-content-image.webp"
                alt="B2B wholesale portal screenshot"
                width={1024}
                height={664}
                className="w-full h-auto rounded-[14px]"
              />
            </div>
            <div>
              <h2 className="font-bold leading-[1.2] text-white text-[30px] sm:text-[36px] lg:text-[42px]">
                The Shopify B2B Agency Behind Your Wholesale Growth
              </h2>
              <p className="mt-6 text-white/85 text-[15px] sm:text-base leading-[1.85]">
                Ecomm Wizards is not a generalist agency that dabbles in wholesale. We are a dedicated{" "}
                <b>Shopify B2B agency support</b> partner built specifically around the complexity that comes with
                scaling on Shopify Plus. From <b>B2B Shopify</b> builds and ERP integrations to custom app development,
                UX audits, Hydrogen migrations, CRO, Figma conversions, AI commerce integrations, and subscription
                models &ndash; we cover every layer of the Shopify ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ──────────────────────────────────────────────────── */}
      <section className="b2b-faq-section" style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />
        <div className="b2b-faq-inner mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="b2b-faq-title">Frequently Asked Questions</h2>

          <div className="b2b-faq-acc">
            {FAQS.map((_, i) => (
              <input
                key={i}
                className="b2b-faq-rad"
                type="radio"
                id={`b2b-faq-${i}`}
                name="b2b-faq-acc"
                defaultChecked={i === 0}
              />
            ))}
            <div className="b2b-faq-list">
              {FAQS.map((f, i) => (
                <div key={i} className="b2b-faq-item" data-faq={`b2b-faq-${i}`}>
                  <label htmlFor={`b2b-faq-${i}`} className="b2b-faq-head">
                    <span className="b2b-faq-q">{f.q}</span>
                    <span className="b2b-faq-ico" aria-hidden>
                      <svg className="b2b-faq-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
                        <path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" />
                      </svg>
                      <svg className="b2b-faq-up" viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
                        <path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" />
                      </svg>
                    </span>
                  </label>
                  <div className="b2b-faq-bodyc">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Page-scoped CSS (table col head + FAQ accordion + trust marquee) ────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Comparison table column header chip */
        .b2b-col-head {
          display: block;
          text-align: center;
          color: #1e293b;
          font-weight: 700;
          font-size: 16px;
          line-height: 1.3;
          padding: 12px 16px;
          border-radius: 8px;
        }
        @media (min-width: 1024px) {
          .b2b-col-head { font-size: 17px; }
        }

        /* FAQ accordion */
        .b2b-faq-title {
          color: #000000; font-size: 32px; font-weight: 700; line-height: 1.2;
          text-align: center; margin: 0 0 40px;
        }
        @media (min-width: 1024px) {
          .b2b-faq-title { font-size: 40px; margin-bottom: 50px; }
        }
        .b2b-faq-acc { position: relative; }
        .b2b-faq-rad { position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; }
        .b2b-faq-list { display: flex; flex-direction: column; }
        .b2b-faq-item { border-top: 1px solid rgba(0,0,0,0.10); }
        .b2b-faq-item:last-child { border-bottom: 1px solid rgba(0,0,0,0.10); }
        .b2b-faq-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 0; cursor: pointer; gap: 16px;
        }
        .b2b-faq-q { color: #1e293b; font-size: 17px; font-weight: 600; line-height: 1.4; }
        .b2b-faq-ico {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; color: #1e293b; flex: 0 0 auto;
        }
        .b2b-faq-up   { display: none; }
        .b2b-faq-down { display: block; }
        .b2b-faq-bodyc { display: none; padding: 0 60px 24px 0; }
        .b2b-faq-bodyc p { color: #334155; font-size: 15px; line-height: 1.75; margin: 0; }
        ${FAQS.map((_, i) => `#b2b-faq-${i}:checked ~ .b2b-faq-list [data-faq="b2b-faq-${i}"] .b2b-faq-bodyc`).join(",\n        ")} {
          display: block;
        }
        ${FAQS.map((_, i) => `#b2b-faq-${i}:checked ~ .b2b-faq-list [data-faq="b2b-faq-${i}"] .b2b-faq-down`).join(",\n        ")} {
          display: none;
        }
        ${FAQS.map((_, i) => `#b2b-faq-${i}:checked ~ .b2b-faq-list [data-faq="b2b-faq-${i}"] .b2b-faq-up`).join(",\n        ")} {
          display: block;
        }

        /* Trust logo marquee */
        .b2b-trust-track {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 24px;
          width: max-content;
          animation: b2bTrustScroll 32s linear infinite;
        }
        .b2b-trust-slide {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 178.32px;
          height: 86.04px;
        }
        .b2b-trust-logo {
          width: 178.32px;
          height: 86.04px;
          object-fit: contain;
          display: block;
        }
        @keyframes b2bTrustScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 1023px) {
          .b2b-trust       { padding: 0 16px; }
          .b2b-trust-inner { padding: 36px 0 !important; }
          .b2b-trust-heading { font-size: 20px !important; }
          .b2b-trust-carousel { margin-top: 24px !important; }
          .b2b-trust-track { gap: 32px; animation-duration: 22s; }
          .b2b-trust-slide { width: 174.99px; height: 84.44px; }
          .b2b-trust-logo  { width: 174.99px; height: 84.44px; }
        }
      ` }} />
    </>
  );
}
