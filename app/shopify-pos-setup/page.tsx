import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify POS Setup Service | Remote Configuration and Migration",
  description:
    "Expert Shopify POS setup, hardware configuration, and POS migration from Square, Lightspeed, or Clover. Remote service for single stores to 50+ locations. Get a free quote.",
  alternates: { canonical: "https://ecommwizards.com/services/shopify-pos-setup/" },
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

const SQUARE_REASONS = [
  {
    q: "Scale Without Limits",
    a: "Expand to new locations with native Shopify POS multi-location sync. No patchwork integrations required.",
  },
  {
    q: "Native Ecommerce Integration",
    a: "Your online store and physical retail floor run on the same system. Inventory, orders, and customer profiles are all connected from day one.",
  },
  {
    q: "One Dashboard. Full Control",
    a: "Manage every location, every channel, and every team member from a single Shopify admin. No tab-switching, no reconciling data across platforms.",
  },
  {
    q: "Consistent Customer Experience",
    a: "Same loyalty rewards, same purchase history, same personalized service, whether customers shop online or walk into your store.",
  },
  {
    q: "Unified Reporting You Can Trust",
    a: "One source of truth across all channels. No manual reconciliation, no guesswork at the end of the month.",
  },
  {
    q: "Built to Grow with You",
    a: "Add locations, staff, and features as your business grows. Shopify adapts with you. You will not need to rebuild.",
  },
  {
    q: "Always Innovating",
    a: "Shopify ships new POS features faster than any competitor. Your Shopify POS setup stays current without expensive hardware upgrades.",
  },
];

const LIGHTSPEED_REASONS = [
  {
    n: "1",
    title: "Nonstop Platform Innovation",
    desc: "Shopify ships new POS features faster than any competitor. Your Shopify POS configuration stays modern without paying for expensive upgrades.",
  },
  {
    n: "2",
    title: "Native Ecommerce Sync",
    desc: "Shopify POS is built on the best ecommerce platform in the world, not bolted on as an afterthought. Your online and in-store operations run on one shared foundation.",
  },
  {
    n: "3",
    title: "Unified Multi-Location Management",
    desc: "Manage inventory, staff permissions, and sales across every location from one admin. No third-party middleware, no extra monthly fees.",
  },
  {
    n: "4",
    title: "Centralized Customer Data",
    desc: "One customer profile across online and in-store. Better segmentation, smarter marketing, and higher customer lifetime value.",
  },
  {
    n: "5",
    title: "Grows When You Do",
    desc: "Add new Shopify POS hardware, locations, and features as your business scales. No platform migrations, no rebuilds, no disruption.",
  },
  {
    n: "6",
    title: "Support That Actually Shows Up",
    desc: "Real help when you need it. Not a chatbot maze. Direct answers from people who know the Shopify POS setup process inside out.",
  },
];

const COST_STATS = [
  {
    label: "22% lower retail technology costs",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 7h14M3 7l4-4M3 7l4 4" /><path d="M21 17H7M21 17l-4-4M21 17l-4 4" />
      </svg>
    ),
  },
  {
    label: "22% lower implementation costs",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M3 17a9 9 0 0118 0" /><path d="M2 17h20" /><path d="M9 9V5a3 3 0 016 0v4" />
      </svg>
    ),
  },
  {
    label: "11% lower ongoing operational costs",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h3l2.5 13h12l2-9H6" />
      </svg>
    ),
  },
];

const COST_ROWS = [
  { competitor: "Square", advantage: "Unified sync, no compromises", impact: "Scale without silos, increased efficiency" },
  { competitor: "Lightspeed", advantage: "Native interoperability", impact: "Simpler fulfillment, up to 10% more revenue" },
  { competitor: "Others", advantage: "Lower total cost overall", impact: "22% savings, faster ROI" },
];

const WHAT_YOU_GET = [
  {
    title: "Real-Time Inventory Sync",
    desc: "Knockdown strategies from Square, Lightspeed, or legacy systems.",
    img: "/images/pos-card-1.webp",
  },
  {
    title: "Scalable Pilots",
    desc: "Remote design, training, and launch for distributed teams.",
    img: "/images/pos-card-2.webp",
  },
  {
    title: "Data Integrity",
    desc: "Unlock Shopify's residual commissions for recurring revenue.",
    img: "/images/pos-card-3.webp",
  },
  {
    title: "Tailored POS Migrations",
    desc: "Real-time across locations to avoid stockouts.",
    img: "/images/pos-card-4.webp",
  },
];

const POS_PRO_PERKS = [
  {
    title: "Book a Free Consultation",
    desc: "Get a free POS Terminal (valued at $349) for every location. High-end payment device with a customer-facing screen included. We handle the full Shopify POS hardware setup and integration remotely.",
  },
  {
    title: "Free Launch Assistance",
    desc: "Stress-free Shopify POS migration covering product data, customer records, and go-live support. Valued at $1,500. Zero downtime, zero headaches.",
  },
  {
    title: "25% Off Monthly POS Pro",
    desc: "Save over $267 per location with discounted Shopify POS Pro pricing. Full features at the lowest monthly cost. We calculate your exact savings based on your store count.",
  },
  {
    title: "Subscription Fee Rebate",
    desc: "Hit $10,000 in Shopify Payments transactions within 90 days and earn back three months of subscription fees, valued at $200 per location. We optimize your Shopify POS setup to help you qualify fast.",
  },
];

const PROCESS_STEPS = [
  {
    n: "01.",
    title: "Discovery & Strategy",
    desc: "We review your current POS setup, locations, data, and workflows. You get a clear migration plan tailored to your business, not a generic template.",
  },
  {
    n: "02.",
    title: "Hardware and Configuration Planning",
    desc: "We audit your existing hardware and map what carries over. Staff roles, tax settings, payments, and register configurations are defined before setup begins.",
  },
  {
    n: "03.",
    title: "Data Migration and Setup",
    desc: "Products, customers, inventory, and gift cards are transferred with no data loss. Your Shopify POS is fully configured, tested, and ready before launch.",
  },
  {
    n: "04.",
    title: "Launch & QA",
    desc: "We test checkout, inventory sync, payments, hardware, and staff access across every location. Your system goes live without disruption.",
  },
  {
    n: "05.",
    title: "Post-Launch Support and Growth",
    desc: "We continue after launch with support, monitoring, and ongoing improvements to keep your POS running smoothly as you grow.",
  },
];

const RESULTS = [
  {
    title: "Faster Checkouts, Happier Customers",
    desc: "Streamlined Shopify POS configuration means shorter lines and smoother transactions. Your staff spend less time troubleshooting and more time serving customers.",
  },
  {
    title: "Real-Time Inventory You Can Trust",
    desc: "Automatic stock sync across every channel and location. What is sold in-store reflects online instantly. No overselling, no manual updates, no surprises.",
  },
  {
    title: "One View of Every Customer",
    desc: "Unified customer profiles across your online store and every retail location. Better personalization, stronger loyalty, and higher repeat purchase rates.",
  },
  {
    title: "A System That Scales With You",
    desc: "From a single pop-up to a 50-location Shopify POS enterprise rollout, the system grows with you. You will not need to switch platforms again.",
  },
];

const FAQS = [
  {
    q: "What does your Shopify POS setup service include?",
    a: "Our Shopify POS setup service covers everything from hardware configuration and Shopify POS Go setup to inventory import, staff PIN assignments, tax profiles, payment processing setup, and go-live support. Everything is handled remotely. You do not need to be on-site, and we do not need to be either.",
  },
  {
    q: "Can you migrate our data from Square or Lightspeed to Shopify POS?",
    a: "Yes. We handle full Shopify POS migrations from Square, Lightspeed, Clover, and other legacy systems. Product data, customer records, gift card balances, and order history are all transferred with zero data loss and zero downtime during the migration.",
  },
  {
    q: "How long does a Shopify POS setup take?",
    a: "A single-location Shopify POS setup typically takes one to two weeks depending on data volume and hardware requirements. Multi-location rollouts across five or more sites are scoped with a dedicated timeline during your discovery call. We provide a clear schedule before any work begins.",
  },
  {
    q: "Can you set up Shopify POS for multiple locations?",
    a: "Yes. Shopify POS multi-location setup is one of our most common projects. We configure inventory sync, staff permissions, tax profiles, and hardware across every location from a single remote session. Whether you have two locations or fifty, the process is the same.",
  },
  // TODO: FAQ #5 — "Do you handle Shopify POS hardware setup remotely?"
  // Source had wrong answer (text from app-dev page). Waiting on correct copy from user.
  {
    q: "What is Shopify POS Pro and do I need it?",
    a: "Shopify POS Pro is the advanced plan that unlocks unlimited staff registers, detailed analytics, smart inventory management, and advanced checkout customizations. It is recommended for any retail business with more than one location or a team of more than two staff members. We help you determine the right plan during your discovery call.",
  },
  {
    q: "How much does a Shopify POS setup service cost?",
    a: "Shopify POS setup cost depends on the number of locations, the complexity of your data migration, and the hardware required. We provide fixed-price quotes with no hourly billing surprises. Contact us and we will send a detailed quote within 24 hours.",
  },
  {
    q: "What POS systems can you migrate us from?",
    a: "We migrate from Square, Lightspeed, Clover, ShopKeep, Vend, and most other legacy POS systems. If your current system is not listed, contact us and we will assess compatibility.",
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

export default function ShopifyPOSSetupPage() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────────── */}
      <section className="relative w-full bg-black" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div
          className="mx-auto grid items-center gap-y-10 gap-x-[30px] py-[40px] px-[15px] lg:py-[60px] lg:px-[20px] lg:grid-cols-2"
          style={{ maxWidth: "1320px" }}
        >
          <div className="text-center lg:text-left">
            <h1 className="font-semibold leading-[1.15] tracking-tight text-white text-[34px] sm:text-[44px] lg:text-[52px] xl:text-[58px]">
              <span style={GRADIENT_TEXT}>Shopify POS Setup</span> That Connects Your Store to the Street
            </h1>
            <p className="mt-7 text-white text-[18px] sm:text-[20px] lg:text-[22px] font-semibold leading-[1.4]">
              One System. Every Sale. Online and In-Person.
            </p>
            <p className="mt-5 text-white/85 text-[15px] sm:text-base lg:text-[16px] leading-[1.7]">
              Running your online store on Shopify but using Square, Lightspeed, or Clover at the register? That disconnect is costing you money and you already know it. Inventory mismatches, double data entry, and fragmented customer profiles silently eat into your margins every day.
            </p>
            <p className="mt-4 text-white/85 text-[15px] sm:text-base lg:text-[16px] leading-[1.7]">
              Start with a low-risk pilot alongside your current system.
            </p>
            <a
              href={CONSULT}
              className="cta-pill-invert mt-7 inline-flex items-center gap-3 rounded-full border px-7 py-3 text-[15px] sm:text-base transition"
            >
              Book a Free Consultation
              <span aria-hidden className="text-lg leading-none">→</span>
            </a>
            <p className="mt-5 text-white/85 text-[14px] sm:text-[15px] leading-[1.6]">
              Response within 24 hours. Fixed-price quotes. Zero obligation.
            </p>
          </div>

          <div className="order-last lg:order-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/pos-hero.webp" alt="Shopify POS terminal and tablet" width={780} height={697} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* ── 2. Why Brands Are Ditching Legacy POS ────────────────────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px] text-center" style={{ maxWidth: "1320px" }}>
          <h2 className="font-bold leading-[1.2] text-[#1e293b] text-[34px] sm:text-[42px] lg:text-[48px]">
            Why Brands Are Ditching Legacy POS<br className="hidden sm:block" /> for Shopify Point of Sale
          </h2>
          <p className="mx-auto mt-8 max-w-[1100px] text-[#334155] text-[15px] sm:text-base leading-[1.85]">
            Shopify POS was built for unified commerce. One inventory, one customer profile, one dashboard. No more patching separate systems together and hoping the data syncs. Merchants who complete the Shopify POS setup see higher conversions, fewer support headaches, and a retail experience that feels modern. Below are the reasons brands are switching. If any of them sound familiar, talk to us about a Shopify POS setup plan built around your business.
          </p>
        </div>
      </section>

      {/* ── 3. From Square to Shopify POS (accordion) ────────────────── */}
      <section style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-[#1e293b] text-[34px] sm:text-[42px] lg:text-[48px]">
            From <span className="font-extrabold">Square to Shopify POS</span>: 7 Key Reasons<br className="hidden sm:block" /> Retailers Are Making the Switch
          </h2>
          <p className="mx-auto mt-5 max-w-[900px] text-center text-[#334155] text-[15px] sm:text-base leading-[1.7]">
            Growth-focused brands choose Shopify POS setup for scalable, unified retail operations that Square cannot match.
          </p>

          <div className="mt-12 grid gap-[30px] lg:grid-cols-2 items-start">
            {/* LEFT — image card + CTA + case study */}
            <div className="flex flex-col gap-[20px]">
              <div className="rounded-[18px] p-6 sm:p-10" style={{ background: "#FBF7ED" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/reasons-1.webp" alt="Mobile dashboards from real Shopify stores" className="w-full h-auto" />
                <div className="mt-7 flex justify-center">
                  <a
                    href={CONSULT}
                    className="cta-pill-solid inline-flex items-center gap-3 rounded-full border px-7 py-3 text-[15px] sm:text-base transition"
                  >
                    Book a Free Consultation
                    <span aria-hidden className="text-lg leading-none">→</span>
                  </a>
                </div>
              </div>
              <div className="rounded-[14px] p-6 sm:p-7" style={{ background: "#FBF7ED" }}>
                <p className="text-[#1e293b] text-[15px] leading-[1.7]">
                  <span className="font-bold">Case Study: </span>
                  Offbeat Bikes unified their online and in-store operations with a complete Shopify POS hardware setup, simplifying admin, syncing inventory, and improving the customer experience across every touchpoint.
                </p>
                <p className="mt-5 text-[#334155] italic text-[14px] leading-[1.6]">
                  &ldquo;Shopify makes the customer experience possible without more work.&rdquo;
                </p>
                <p className="mt-2 text-right font-bold text-[#1e293b] text-[14px]">Owner, Offbeat</p>
              </div>
            </div>

            {/* RIGHT — CSS-only accordion */}
            <div className="pos-sq-acc">
              {SQUARE_REASONS.map((_, i) => (
                <input
                  key={i}
                  className="pos-sq-rad"
                  type="radio"
                  id={`pos-sq-${i}`}
                  name="pos-sq-acc"
                  defaultChecked={i === 0}
                />
              ))}
              <div className="pos-sq-list">
                {SQUARE_REASONS.map((r, i) => (
                  <div key={i} className="pos-sq-item" data-faq={`pos-sq-${i}`}>
                    <label htmlFor={`pos-sq-${i}`} className="pos-sq-head">
                      <span className="pos-sq-q">{r.q}</span>
                      <span className="pos-sq-ico" aria-hidden>
                        <svg className="pos-sq-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                        <svg className="pos-sq-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                      </span>
                    </label>
                    <div className="pos-sq-bodyc">
                      <p>{r.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. From Lightspeed to Shopify POS (image + 6 cards) ──────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-[#1e293b] text-[34px] sm:text-[42px] lg:text-[48px]">
            From <span className="font-extrabold">Lightspeed to Shopify POS</span> : 6 Reasons<br className="hidden sm:block" /> Retailers Are Switching
          </h2>

          <div className="mt-12 grid gap-[30px] lg:grid-cols-[minmax(0,420px)_1fr] items-start">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/lightspeed-image.webp" alt="Why retailers switch from Lightspeed to Shopify POS" className="w-full h-auto rounded-[14px]" />
            </div>
            <div className="grid gap-[20px] sm:grid-cols-2">
              {LIGHTSPEED_REASONS.map((r) => (
                <div key={r.n} className="rounded-[14px] bg-white p-6 sm:p-7">
                  <h3 className="font-bold text-[#1e293b] text-[18px] leading-[1.3]">
                    {r.n}. {r.title}
                  </h3>
                  <p className="mt-3 text-[#334155] text-[15px] leading-[1.7]">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Cost Comparison ───────────────────────────────────────── */}
      <section style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <div className="grid gap-[40px] lg:grid-cols-2 items-start">
            <div>
              <h2 className="font-bold leading-[1.2] text-white text-[32px] sm:text-[38px] lg:text-[44px]">
                The Numbers Do Not Lie:<br /> Shopify POS Costs Less
              </h2>
              <p className="mt-5 text-white/85 text-[15px] sm:text-base leading-[1.7]">
                Independent research confirms that a complete Shopify POS setup delivers 22% lower total cost of ownership compared to competing systems. Here is what that means in practice.
              </p>
              <div className="mt-8 flex flex-col">
                {COST_STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between gap-4 py-5"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.15)", borderBottom: i === COST_STATS.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none" }}
                  >
                    <p className="font-bold text-white text-[16px] sm:text-[18px] leading-[1.3]">{s.label}</p>
                    <span aria-hidden>{s.icon}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href={CONSULT}
                  className="cta-pill-invert inline-flex items-center gap-3 rounded-full border px-7 py-3 text-[15px] sm:text-base transition"
                >
                  Book a Free Consultation
                  <span aria-hidden className="text-lg leading-none">→</span>
                </a>
              </div>
            </div>

            {/* right: comparison table */}
            <div className="rounded-[18px] bg-white p-6 sm:p-8">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-[8px] border border-[#1e293b]/15 px-4 py-3 text-[15px] font-semibold text-[#1e293b]">Competitor</div>
                <div className="rounded-[8px] border border-[#1e293b]/15 px-4 py-3 text-[15px] font-semibold text-[#1e293b]">Shopify Advantage</div>
                <div className="rounded-[8px] border border-[#1e293b]/15 px-4 py-3 text-[15px] font-semibold text-[#1e293b]">Business Impact</div>
                {COST_ROWS.map((row) => (
                  <span key={row.competitor} className="contents">
                    <div className="rounded-[8px] bg-[#FBF7ED] px-4 py-4 text-[14px] text-[#1e293b]">{row.competitor}</div>
                    <div className="rounded-[8px] bg-[#FBF7ED] px-4 py-4 text-[14px] text-[#334155]">{row.advantage}</div>
                    <div className="rounded-[8px] bg-[#FBF7ED] px-4 py-4 text-[14px] text-[#334155]">{row.impact}</div>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Brands That Made the Switch */}
          <div
            className="mt-12 rounded-[14px] p-6 sm:p-8"
            style={{ background: "#000000", border: "1.5px solid transparent", backgroundImage: `linear-gradient(#000,#000), ${GRADIENT}`, backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" }}
          >
            <h3 className="font-bold text-white text-[18px] sm:text-[20px]">Brands That Made the Switch</h3>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-white/90 text-[15px] leading-[1.7]">
              <li>Aviator Nation unified their online and in-store channels, fulfilling 2,000+ online orders monthly from retail locations and growing revenue by 10%.</li>
              <li>Bared Footwear consolidated two platforms into one. &ldquo;Operating two platforms hurt us. We needed Shopify POS for scale,&rdquo; says COO Alexandra McNab.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 6. What You Get With Our Shopify POS Setup Service ───────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-[#1e293b] text-[32px] sm:text-[40px] lg:text-[46px]">
            What You Get With Our Shopify POS Setup Service
          </h2>
          <p className="mx-auto mt-6 max-w-[1050px] text-center text-[#334155] text-[15px] sm:text-base leading-[1.85]">
            We handle the data, the Shopify POS hardware setup, and every configuration detail so your system works from day one, whether you are running a pop-up shop or a multi-location retail chain.
          </p>

          <div className="mt-12 grid gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_YOU_GET.map((c) => (
              <div key={c.title} className="rounded-[18px] bg-white p-6 sm:p-7 flex flex-col">
                <h3 className="font-bold text-[#1e293b] text-[18px] leading-[1.3]">{c.title}</h3>
                <p className="mt-3 text-[#334155] text-[14px] leading-[1.6]">{c.desc}</p>
                <div className="mt-auto pt-6 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} className="w-full h-auto" />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-[#334155] text-[16px] sm:text-[18px] leading-[1.5]">
            Faster checkouts. Unified insights. Built for growth.
          </p>
        </div>
      </section>

      {/* ── 7. Exclusive Perks (Shopify POS Pro Annual) ──────────────── */}
      <section style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <div className="grid gap-[30px] lg:grid-cols-2 items-stretch">
            <div className="rounded-[18px] p-8 sm:p-10 flex flex-col" style={{ background: "#121212" }}>
              <h2 className="font-bold leading-[1.2] text-white text-[30px] sm:text-[36px] lg:text-[40px]">
                Exclusive Perks When You Commit to <span style={GRADIENT_TEXT}>Shopify POS Pro</span> Annually
              </h2>
              <p className="mt-6 text-center text-white/85 text-[15px] sm:text-base leading-[1.7]">
                Lock in Shopify POS Pro for one year and unlock over $2,300 in value per location. These offers make the switch to Shopify POS easier, cheaper, and practically risk-free. Ecomm Wizards handles all setup remotely.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href={CONSULT}
                  className="cta-pill-invert inline-flex items-center gap-3 rounded-full border px-7 py-3 text-[15px] sm:text-base transition"
                >
                  Book a Free Consultation
                  <span aria-hidden className="text-lg leading-none">→</span>
                </a>
              </div>
            </div>
            <div className="rounded-[18px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/pos-pro-offer.webp" alt="Shopify POS Pro hardware" className="w-full h-auto lg:h-full object-cover" />
            </div>
          </div>

          <div className="mt-[30px] grid gap-[30px] sm:grid-cols-2">
            {POS_PRO_PERKS.map((p) => (
              <div key={p.title} className="rounded-[18px] p-7 sm:p-8" style={{ background: "#121212" }}>
                <h3 className="font-bold text-white text-[20px] sm:text-[22px] leading-[1.3]">{p.title}</h3>
                <p className="mt-4 text-white/85 text-[15px] leading-[1.7]">{p.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-white/80 text-[14px] sm:text-[15px] leading-[1.6]">
            $10k USD must be generated at a single POS location and cannot be spread across multiple locations.
          </p>
        </div>
      </section>

      {/* ── 8. Our Proven Shopify POS Setup Process ──────────────────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-[#1e293b] text-[32px] sm:text-[40px] lg:text-[46px]">
            Our Proven Shopify POS Setup<br className="hidden sm:block" /> Process
          </h2>
          <p className="mx-auto mt-5 max-w-[900px] text-center text-[#334155] text-[15px] sm:text-base leading-[1.7]">
            From the first call with us to hitting your goal. You can <span className="text-[#1e293b] font-semibold">join us at any stage</span>. Here is how we work.
          </p>

          {/* row 1 — steps 1-3 */}
          <div className="mt-12 grid gap-[20px] lg:grid-cols-3">
            {PROCESS_STEPS.slice(0, 3).map((s) => (
              <ProcessCard key={s.n} step={s} />
            ))}
          </div>
          {/* row 2 — steps 4-5 (offset center) */}
          <div className="mt-[20px] grid gap-[20px] lg:grid-cols-3">
            <div className="hidden lg:block" />
            {PROCESS_STEPS.slice(3, 5).map((s) => (
              <ProcessCard key={s.n} step={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Results You Can Expect ────────────────────────────────── */}
      <section style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-white text-[32px] sm:text-[40px] lg:text-[46px]">
            Results You Can Expect From Our<br className="hidden sm:block" /> Shopify POS Setup Service
          </h2>

          <div className="mt-12 grid gap-[30px] sm:grid-cols-2">
            {RESULTS.map((r) => (
              <div key={r.title} className="rounded-[18px] p-8 sm:p-10" style={{ background: "#121212" }}>
                <h3 className="font-bold text-[20px] sm:text-[22px] leading-[1.3]" style={GRADIENT_TEXT}>{r.title}</h3>
                <p className="mt-4 text-white/85 text-[15px] leading-[1.7]">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FAQ ──────────────────────────────────────────────────── */}
      <section className="pos-faq-section" style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />
        <div className="pos-faq-inner mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="pos-faq-title">Frequently Asked Questions</h2>

          <div className="pos-faq-acc">
            {FAQS.map((_, i) => (
              <input
                key={i}
                className="pos-faq-rad"
                type="radio"
                id={`pos-faq-${i}`}
                name="pos-faq-acc"
                defaultChecked={i === 0}
              />
            ))}
            <div className="pos-faq-list">
              {FAQS.map((f, i) => (
                <div key={i} className="pos-faq-item" data-faq={`pos-faq-${i}`}>
                  <label htmlFor={`pos-faq-${i}`} className="pos-faq-head">
                    <span className="pos-faq-q">{f.q}</span>
                    <span className="pos-faq-ico" aria-hidden>
                      <svg className="pos-faq-down" viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M31.582 8.495c-0.578-0.613-1.544-0.635-2.153-0.059l-13.43 12.723-13.428-12.723c-0.61-0.578-1.574-0.553-2.153 0.059-0.579 0.611-0.553 1.576 0.058 2.155l14.477 13.715c0.293 0.277 0.67 0.418 1.047 0.418s0.756-0.14 1.048-0.418l14.477-13.715c0.611-0.579 0.637-1.544 0.058-2.155z" /></svg>
                      <svg className="pos-faq-up"   viewBox="0 0 32 32" width="18" height="18" fill="currentColor"><path d="M26.915 10.844c0.451 0.451 0.451 1.162 0 1.613-0.436 0.436-1.162 0.436-1.597 0l-8.18-8.18v26.995c0 0.629-0.5 1.129-1.129 1.129s-1.146-0.5-1.146-1.129v-26.996l-8.164 8.18c-0.451 0.436-1.178 0.436-1.613 0-0.451-0.451-0.451-1.162 0-1.613l10.117-10.117c0.436-0.436 1.162-0.436 1.597 0l10.116 10.118z" /></svg>
                    </span>
                  </label>
                  <div className="pos-faq-bodyc">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Page-scoped accordion + FAQ CSS ──────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Square -> Shopify accordion (right column of section 3) */
        .pos-sq-acc { position: relative; }
        .pos-sq-rad { position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; }
        .pos-sq-list { display: flex; flex-direction: column; }
        .pos-sq-item { border-top: 1px solid rgba(0,0,0,0.10); }
        .pos-sq-item:last-child { border-bottom: 1px solid rgba(0,0,0,0.10); }
        .pos-sq-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 4px; cursor: pointer; gap: 16px;
        }
        .pos-sq-q { color: #1e293b; font-size: 17px; font-weight: 600; line-height: 1.4; }
        .pos-sq-ico {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; color: #1e293b; flex: 0 0 auto;
        }
        .pos-sq-up   { display: none; }
        .pos-sq-down { display: block; }
        .pos-sq-bodyc {
          display: none; padding: 0 4px 22px;
        }
        .pos-sq-bodyc p {
          color: #334155; font-size: 15px; line-height: 1.7; margin: 0;
        }
        ${SQUARE_REASONS.map((_, i) => `#pos-sq-${i}:checked ~ .pos-sq-list [data-faq="pos-sq-${i}"] .pos-sq-bodyc`).join(",\n        ")} {
          display: block;
        }
        ${SQUARE_REASONS.map((_, i) => `#pos-sq-${i}:checked ~ .pos-sq-list [data-faq="pos-sq-${i}"] .pos-sq-down`).join(",\n        ")} {
          display: none;
        }
        ${SQUARE_REASONS.map((_, i) => `#pos-sq-${i}:checked ~ .pos-sq-list [data-faq="pos-sq-${i}"] .pos-sq-up`).join(",\n        ")} {
          display: block;
        }

        /* FAQ accordion (section 10) */
        .pos-faq-title {
          color: #000000; font-size: 36px; font-weight: 700; line-height: 1.2;
          text-align: center; margin: 0 0 50px;
        }
        .pos-faq-acc { position: relative; }
        .pos-faq-rad { position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; }
        .pos-faq-list { display: flex; flex-direction: column; }
        .pos-faq-item { border-top: 1px solid rgba(0,0,0,0.10); }
        .pos-faq-item:last-child { border-bottom: 1px solid rgba(0,0,0,0.10); }
        .pos-faq-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 0; cursor: pointer; gap: 16px;
        }
        .pos-faq-q { color: #1e293b; font-size: 17px; font-weight: 600; line-height: 1.4; }
        .pos-faq-ico {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; color: #1e293b; flex: 0 0 auto;
        }
        .pos-faq-up   { display: none; }
        .pos-faq-down { display: block; }
        .pos-faq-bodyc { display: none; padding: 0 60px 24px 0; }
        .pos-faq-bodyc p { color: #334155; font-size: 15px; line-height: 1.75; margin: 0; }
        ${FAQS.map((_, i) => `#pos-faq-${i}:checked ~ .pos-faq-list [data-faq="pos-faq-${i}"] .pos-faq-bodyc`).join(",\n        ")} {
          display: block;
        }
        ${FAQS.map((_, i) => `#pos-faq-${i}:checked ~ .pos-faq-list [data-faq="pos-faq-${i}"] .pos-faq-down`).join(",\n        ")} {
          display: none;
        }
        ${FAQS.map((_, i) => `#pos-faq-${i}:checked ~ .pos-faq-list [data-faq="pos-faq-${i}"] .pos-faq-up`).join(",\n        ")} {
          display: block;
        }
      ` }} />
    </>
  );
}

/* Process card: faded "01." numeral over title + body */
function ProcessCard({ step }: { step: { n: string; title: string; desc: string } }) {
  return (
    <div className="rounded-[18px] bg-white p-7 sm:p-8">
      <span className="block font-bold text-[44px] sm:text-[52px] leading-none text-[#1e293b]/15">{step.n}</span>
      <h3 className="mt-3 font-bold text-[#1e293b] text-[22px] sm:text-[24px] leading-[1.25]">{step.title}</h3>
      <p className="mt-4 text-[#334155] text-[15px] leading-[1.7]">{step.desc}</p>
    </div>
  );
}
