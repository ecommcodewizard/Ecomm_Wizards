import type { Metadata } from "next";
import CaseStudySlider, { type CaseStudySlide } from "@/components/sections/CaseStudySlider";

const CASE_STUDY_SLIDES: CaseStudySlide[] = [
  {
    key: "eby",
    image: "/images/Frame_1000004320.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/klaviyo.svg", "/images/yotpo.svg"],
    headline: (
      <>
        An elegant <strong>Shopify Store</strong> designed and built for{" "}
        <strong>EBY</strong> by <strong>Sofia Vergara</strong>
      </>
    ),
    quote: (
      <>
        &ldquo;Working with EW was a truly <strong>top-notch experience</strong>. From start to finish, they made sure everything ran smoothly and professionally — we couldn&apos;t be happier!&rdquo;
      </>
    ),
    avatar: "/images/Sofia_Jimenez.webp",
    name: "EBY by Sofia Vergara",
    role: "Marketing Manager",
  },
  {
    key: "harvard",
    image: "/images/all-case-study-harvard.webp",
    apps: ["/images/shopify-icon.svg", "/images/klaviyo.svg", "/images/yotpo.svg", "/images/gorgias.svg"],
    headline: (
      <>
        A sophisticated <strong>Shopify Store</strong> designed and built for a{" "}
        <strong>Harvard University</strong>
      </>
    ),
    quote: (
      <>
        &ldquo;Our experience with EW was excellent, characterized by an{" "}
        <strong>efficient workflow</strong> and <strong>professional execution</strong>; we couldn&apos;t be more delighted&rdquo;
      </>
    ),
    avatar: "/images/harvardperson_medium.webp",
    name: "Daniyal S.",
    role: "Harvard University",
  },
  {
    key: "bark",
    image: "/images/ai-bark-casestudy.webp",
    apps: ["/images/shopify-icon.svg", "/images/recharge.svg", "/images/Subtract.svg", "/images/64f098c0e38dec3a384cb182_rebuy.svg"],
    headline: (
      <>
        A dynamically personalized <strong>Shopify Store</strong> developed &amp; maintained for{" "}
        <strong>Bark</strong>
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
];

export const metadata: Metadata = {
  title: "Shopify ERP Integration Service | NetSuite, SAP and More",
  description:
    "Connect your ERP to Shopify with real-time bi-directional sync. NetSuite, SAP, Dynamics 365, Acumatica and more. Shopify Plus Preferred Partner. Get a free quote.",
  alternates: { canonical: "https://ecommwizards.com/services/erp-connections-to-shopify/" },
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
const CONTACT = "/contact-shopify-agency/";

const TRUST_LOGOS = [
  { src: "/images/Olaplex-logo-new.avif", alt: "Olaplex" },
  { src: "/images/everlast-icon.svg", alt: "Everlast" },
  { src: "/images/ipsy-logo.svg", alt: "Ipsy" },
  { src: "/images/trust_logo_2.svg", alt: "Peanuts" },
  { src: "/images/trust_logo_31.svg", alt: "Olaplex" },
  { src: "/images/trust_logo_32.svg", alt: "Forme" },
];

const INTRO_ROWS = [
  {
    title: "Increased Efficiency That You Can Actually Measure",
    body: (
      <>
        Every manual data entry between your ERP and Shopify is a chance for something to break. Wrong stock count,
        duplicate order, mismatched customer record. It adds up fast. The <b>best ERP for Shopify</b> integration
        eliminates that entire layer of human error by automating the flow of sales orders, customer data, and shipping
        details between both systems. Your operations team stops babysitting spreadsheets and starts doing work that
        actually moves revenue. That is what a proper <b>ERP for Shopify</b> connection delivers from day one.
      </>
    ),
    img: "/images/erp-image.webp",
    imageLeft: true,
  },
  {
    title: "Inventory Visibility Across Every Warehouse, Every Channel",
    body: (
      <>
        Overselling kills trust. Stockouts kill revenue. Both happen when your ERP and Shopify are not sharing inventory
        data in real time. Our <b>ERP for Shopify</b> integrations give you a single unified view of every SKU across
        every warehouse and every sales channel, so your available quantities are always accurate. No more selling a
        product on Shopify that your ERP already allocated to a wholesale order an hour ago. As one of the top{" "}
        <b>Shopify ERP CRM integration firms</b>, we build connections that keep your stock levels, reorder triggers,
        and fulfillment routing running on autopilot.
      </>
    ),
    img: "/images/erp-image.webp",
    imageLeft: false,
  },
  {
    title: 'We do Real Time Data Sync, Not "Close Enough"!',
    body: (
      <>
        A price change in your ERP should show up in your Shopify store instantly, not after someone remembers to export
        a CSV tomorrow morning. With our integration architecture, every update to stock levels, pricing, order status,
        and customer records syncs bidirectionally the moment it happens. No batch jobs running overnight. No five hour
        lag that causes your support team to apologize for showing the wrong price. When brands look for the{" "}
        <b>best ERP for Shopify</b> sync, this is the standard Ecomm Wizards sets, and it is the reason{" "}
        <b>Shopify ERP CRM integration firms</b> trust us to build the infrastructure their clients depend on.
      </>
    ),
    img: "/images/view-messy-office-workspace-with-laptop-device.webp",
    imageLeft: true,
  },
];

const SYNC_ITEMS = [
  {
    q: "Orders",
    a: "Every Shopify order automatically creates a corresponding record in your ERP. Order status, payment details, shipping information, and line items all flow across without manual entry.",
  },
  {
    q: "Inventory",
    a: "Stock levels sync in real time across every warehouse, location, and sales channel so Shopify always shows what is actually available to sell.",
  },
  {
    q: "Products",
    a: "SKUs, pricing, variants, descriptions, and media stay aligned between your ERP product master and your Shopify catalog. Edit once, publish everywhere.",
  },
  {
    q: "Customers",
    a: "Customer accounts, addresses, tax exemption status, and purchase history sync both directions so sales, finance, and support work from the same record.",
  },
  {
    q: "Financials",
    a: "Invoices, payments, refunds, credit memos, and tax data flow into your ERP automatically. Month-end reconciliation stops being a manual project.",
  },
  {
    q: "Fulfillment",
    a: "Shipment status, tracking numbers, and delivery confirmations push back to Shopify so customers always see accurate, up-to-date fulfillment information.",
  },
];

const ERP_SYSTEMS = [
  {
    name: "Microsoft Dynamics 365",
    logo: "/images/erp-1_1024x1024.webp",
    desc: "The natural choice for brands already in the Microsoft ecosystem. Finance, supply chain, and Shopify all connected in one environment.",
  },
  { illustration: true, img: "/images/erp-2_1024x1024.webp", alt: "Microsoft Dynamics 365 + Shopify" },
  {
    name: "SAP S/4HANA",
    logo: "/images/erp-3_1024x1024.webp",
    desc: "Built for high-volume, multi-region operations. Handles complex procurement, global logistics, and compliance alongside your Shopify storefront.",
  },
  {
    name: "Katana",
    logo: "/images/erp-4_1024x1024.webp",
    desc: "Purpose-built for Shopify brands that manufacture products. Real-time production planning, raw material tracking, and shop floor visibility.",
  },
  {
    name: "Odoo ERP",
    logo: "/images/erp-5_1024x1024.webp",
    desc: "Modular and cost-effective. Start with inventory and accounting, then add CRM or manufacturing as your business grows.",
  },
  {
    name: "SAP Business One",
    logo: "/images/erp-6_1024x1024.webp",
    desc: "Mid-market ERP with solid financial controls, warehouse management, and purchasing workflows. Less complex than S/4HANA.",
  },
  {
    name: "ERPNext",
    logo: "/images/erp-7_1024x1024.webp",
    desc: "Open-source ERP covering accounting, inventory, HR, and project management. No licensing fees. Fully customizable by your dev team.",
  },
  {
    name: "Oracle NetSuite ERP",
    logo: "/images/erp-8_1024x1024.webp",
    desc: "The most widely deployed cloud ERP for Shopify Plus merchants. Financials, warehouse management, and CRM in one platform.",
  },
  { illustration: true, img: "/images/erp-9_1024x1024.webp", alt: "Oracle NetSuite + Shopify" },
  {
    name: "Acumatica Cloud ERP",
    logo: "/images/erp-10_1024x1024.webp",
    desc: "Cloud-native ERP with unlimited-user licensing. Scales with your team without adding per-seat costs as you grow.",
  },
  {
    name: "Sage Intacct",
    logo: "/images/erp-11_1024x1024.webp",
    desc: "Finance-first ERP built for CFOs. Multi-entity consolidation, revenue recognition, and audit-ready reporting connected to Shopify.",
  },
  {
    name: "Epicor",
    logo: "/images/erp-12_1024x1024.avif",
    desc: "Built for manufacturers and distributors. Production management, quality control, and supply chain planning integrated with Shopify.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Integration Strategy and Data Mapping",
    body: "We audit your ERP data structure and your Shopify store setup to map exactly which data needs to flow, in which direction, and at what frequency. No assumptions. No generic templates.",
    icon: "/images/erp-conect-1_1024x1024.webp",
  },
  {
    title: "Build and Configuration",
    body: "We build the integration layer, whether that is a pre-built connector, iPaaS configuration, or custom API middleware. Every field is mapped, every edge case is accounted for, and every sync is tested against real data before going live.",
    icon: "/images/erp-conect-3_1024x1024.webp",
  },
  {
    title: "Testing, Launch, and Ongoing Support",
    body: "We run full QA across all data flows before your integration goes live. Post-launch, we monitor sync performance, handle errors, and iterate as your business and ERP requirements evolve.",
    icon: "/images/erp-conect-5_1024x1024.webp",
  },
];

const ADVANCED_FEATURES = [
  {
    q: "Bi-Directional Real-Time Sync",
    a: "Data flows both ways between Shopify and your ERP, automatically. Orders created in Shopify appear in your ERP within seconds. Fulfillment updates in your ERP push back to Shopify immediately. No scheduled batch exports, no lag, no manual intervention.",
  },
  {
    q: "Multi-Location Inventory Management",
    a: "Sync stock across unlimited warehouses, retail locations, and 3PL partners. Shopify routes orders to the right fulfillment point automatically based on availability, proximity, and your business rules.",
  },
  {
    q: "Custom Field Mapping and Data Transformation",
    a: "Every business has fields that do not match one-to-one between systems. We build custom mappings and transformation rules so your data lands clean in both directions, no matter how unique your schema is.",
  },
  {
    q: "Error Handling and Alerting",
    a: "When a sync fails, you know immediately. Automated retries handle transient issues, and our alerting system flags real problems to your team before they impact orders or customers.",
  },
  {
    q: "3PL and Warehouse Integration",
    a: "Connect ShipBob, ShipHero, Whiplash, and other 3PLs into the same data flow as your ERP. Inventory, orders, and shipment status stay aligned across every party in your fulfillment chain.",
  },
  {
    q: "B2B and Wholesale Data Sync",
    a: "Company profiles, custom price lists, payment terms, and PO numbers move cleanly between your Shopify B2B store and your ERP so wholesale orders are processed the same way as D2C.",
  },
];

const OUTCOMES = [
  {
    t: "Eliminate Manual Data Entry",
    d: "Every order, inventory update, and customer record that previously required manual entry now moves automatically. Your team stops doing the work that software should be doing.",
  },
  {
    t: "Inventory Accuracy Across Every Channel",
    d: "Real-time sync means your Shopify store always reflects your actual available stock. No more overselling, no more stockouts caused by data that is hours behind.",
  },
  {
    t: "Faster Fulfillment and Fewer Errors",
    d: "Orders flow from Shopify into your ERP and out to fulfillment without anyone touching them manually. Errors caused by manual entry drop immediately. Fulfillment speeds up.",
  },
  {
    t: "One Source of Truth for Your Business",
    d: "Finance, operations, and your Shopify store all work from the same live data. Month-end reconciliation gets faster. Purchasing decisions get smarter. Reporting gets accurate.",
  },
];

const FAQS = [
  {
    q: "What ERP systems can you connect to Shopify?",
    a: "We connect Shopify to NetSuite, Microsoft Dynamics 365, SAP Business One, SAP S/4HANA, Acumatica, Odoo, Sage 100, Sage 300, Sage X3, Katana, Epicor, and most other ERP systems with an available API. If your ERP is not on this list, contact us and we will assess compatibility.",
  },
  {
    q: "How long does a Shopify ERP integration take to build?",
    a: "Most Shopify ERP integrations launch in 6 to 12 weeks depending on scope. A pre-built connector configuration for NetSuite or Dynamics can go live faster. Custom middleware builds for unusual ERPs or complex data flows take longer. We scope the exact timeline on your discovery call before any work starts.",
  },
  {
    q: "How much does a Shopify ERP integration cost?",
    a: "Cost depends on your ERP, the data objects you need synced, the number of locations and channels, and whether we are configuring a connector or building custom middleware. We provide fixed-price quotes with no hourly billing surprises. Contact us and we will send a detailed breakdown within 24 hours.",
  },
  {
    q: "What data can you sync between Shopify and our ERP?",
    a: "Orders, inventory, products, variants, pricing, customers, addresses, tax data, invoices, payments, refunds, shipments, tracking, returns, and B2B-specific data like company accounts, price lists, and payment terms. If your ERP exposes it via API, we can sync it.",
  },
  {
    q: "Is the sync one-way or bi-directional?",
    a: "Bi-directional by default. Data flows both ways in real time. Orders move from Shopify to your ERP. Inventory, fulfillment, pricing, and product updates move from your ERP back to Shopify. We can also configure one-way flows for specific data objects if that fits your operating model.",
  },
  {
    q: "Will the integration disrupt our live Shopify store during setup?",
    a: "No. We build and test the integration in a sandbox environment that mirrors your production data. Cutover to live data only happens after full QA and your team's sign-off. Your live store keeps running normally throughout the build.",
  },
  {
    q: "What happens when a sync fails?",
    a: "Automated retries handle most transient failures within seconds. For anything that needs attention, our monitoring layer triggers immediate alerts to your team and ours. Every sync event is logged so we can trace exactly what happened and replay any missed data.",
  },
  {
    q: "Do you offer ongoing support after the integration is live?",
    a: "Yes. We monitor sync performance, handle errors, and iterate on the integration as your ERP version, Shopify features, and business processes evolve. Most clients keep us on a monthly support retainer after launch.",
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

const ArrowUp = (
  <svg {...ICON_PROPS}>
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);
const ChevronDown = (
  <svg {...ICON_PROPS}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function ERPPage() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────────── */}
      <section className="relative w-full bg-black" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div
          className="mx-auto grid items-center gap-y-10 gap-x-[30px] py-[40px] px-[15px] lg:py-[60px] lg:px-[20px] lg:grid-cols-2"
          style={{ maxWidth: "1320px" }}
        >
          <div className="text-center lg:text-left">
            <p className="text-white text-[14px] sm:text-[15px] font-semibold tracking-wide">
              Shopify Plus Preferred Partner
            </p>
            <h1 className="mt-4 font-semibold leading-[1.15] tracking-tight text-white text-[34px] sm:text-[44px] lg:text-[50px] xl:text-[54px]">
              <span style={GRADIENT_TEXT}>Shopify ERP Integration</span> That Eliminates the Manual Work Holding Your
              Business Back
            </h1>
            <p className="mt-7 text-white text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-[1.4]">
              Connecting ERPs to Shopify
            </p>
            <p className="mt-5 text-white/85 text-[15px] sm:text-base lg:text-[16px] leading-[1.7]">
              Your ERP manages your financials, inventory, and operations. Your Shopify store manages your sales. When
              those two systems are not connected, your team manually moves data between them every single day. That is
              time wasted, errors introduced, and decisions made on information that is already out of date.
            </p>
            <p className="mt-4 text-white/85 text-[15px] sm:text-base lg:text-[16px] leading-[1.7]">
              Whether you need a NetSuite Shopify connector, a custom API build, or middleware configuration for a less
              common ERP, we have built it before.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={CONSULT}
                className="cta-pill-invert inline-flex items-center gap-3 rounded-full border px-7 py-3 text-[15px] sm:text-base transition"
              >
                Book a Free Consultation
                <span aria-hidden className="text-lg leading-none">→</span>
              </a>
              <a
                href={CONTACT}
                className="erp-link inline-flex items-center gap-2 text-white text-[15px] sm:text-base underline-offset-4 hover:underline"
              >
                Contact Us
                <span aria-hidden className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>

          <div className="order-last lg:order-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/erp-banner-image_1024x1024.webp"
              alt="Shopify ERP integration system diagram"
              width={1024}
              height={952}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── 2. Trusted by (marquee slider) ──────────────────────────── */}
      <section className="erp-trust" style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>
        <div className="erp-trust-inner mx-auto" style={{ maxWidth: "1320px", padding: "60px 0" }}>
          <h2
            className="erp-trust-heading text-center"
            style={{ color: "#1e293b", fontSize: "22px", fontWeight: 700, lineHeight: 1.45, margin: 0 }}
          >
            Trusted by Leading Shopify Brands
          </h2>

          <div className="erp-trust-carousel" style={{ marginTop: "30px", width: "100%", overflow: "hidden" }}>
            <div className="erp-trust-track">
              {[...TRUST_LOGOS, ...TRUST_LOGOS].map((l, i) => (
                <div key={i} className="erp-trust-slide">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={i < TRUST_LOGOS.length ? l.alt : ""}
                    className="erp-trust-logo"
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

      {/* ── 3. Intro (cream) ────────────────────────────────────────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div
          className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px] text-center"
          style={{ maxWidth: "1320px" }}
        >
          <h2 className="font-bold leading-[1.2] text-[#1e293b] text-[30px] sm:text-[40px] lg:text-[46px]">
            Why Connecting Your ERP to Shopify Changes Everything
          </h2>
          <p className="mx-auto mt-6 max-w-[1050px] text-[#334155] text-[15px] sm:text-base leading-[1.85]">
            When Shopify and your ERP run as separate systems, your team becomes the integration. They export files,
            copy data, reconcile spreadsheets, and fix the errors that come from doing this manually every day. Here is
            what that actually costs.
          </p>
        </div>
      </section>

      {/* ── 4. Three alternating rows (cream) ───────────────────────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto px-[15px] lg:px-[20px] pb-[40px] lg:pb-[60px]" style={{ maxWidth: "1320px" }}>
          <div className="flex flex-col gap-[60px] lg:gap-[80px]">
            {INTRO_ROWS.map((r) => (
              <div key={r.title} className="grid gap-[30px] lg:grid-cols-2 lg:items-center">
                <div className={r.imageLeft ? "order-1" : "order-1 lg:order-2"}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.img}
                    alt=""
                    className="w-full h-auto rounded-[14px] object-cover"
                    style={{ maxHeight: 460 }}
                  />
                </div>
                <div className={r.imageLeft ? "order-2" : "order-2 lg:order-1"}>
                  <h3 className="font-bold text-[#1e293b] text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.25]">
                    {r.title}
                  </h3>
                  <p className="mt-5 text-[#334155] text-[15px] sm:text-base leading-[1.85]">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. What We Sync (white, accordion left + image right) ───── */}
      <section style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <div className="grid gap-[30px] lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-bold leading-[1.2] text-[#1e293b] text-[28px] sm:text-[34px] lg:text-[38px]">
                What We Sync Between Your ERP and Shopify
              </h2>
              <p className="mt-5 text-[#334155] text-[15px] sm:text-base leading-[1.7]">
                Every data flow is configured to move the right information, in the right direction, at the right time.
              </p>

              <div className="erp-acc mt-8">
                {SYNC_ITEMS.map((_, i) => (
                  <input
                    key={i}
                    className="erp-acc-rad"
                    type="radio"
                    id={`erp-sync-${i}`}
                    name="erp-sync-acc"
                    defaultChecked={i === 0}
                  />
                ))}
                <div className="erp-acc-list">
                  {SYNC_ITEMS.map((it, i) => (
                    <div key={i} className="erp-acc-item" data-acc={`erp-sync-${i}`}>
                      <label htmlFor={`erp-sync-${i}`} className="erp-acc-head">
                        <span className="erp-acc-q">{it.q}</span>
                        <span className="erp-acc-ico" aria-hidden>
                          <span className="erp-acc-open">{ArrowUp}</span>
                          <span className="erp-acc-closed">{ChevronDown}</span>
                        </span>
                      </label>
                      <div className="erp-acc-bodyc">
                        <p>{it.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={CONSULT}
                className="cta-pill mt-9 inline-flex items-center gap-3 rounded-full px-7 py-3 text-[15px] sm:text-base text-white"
                style={{ background: "#0a0a0a" }}
              >
                Book a Free Consultation
                <span aria-hidden className="text-lg leading-none">→</span>
              </a>
            </div>

            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/erp-image.webp"
                alt="ERP and Shopify data sync"
                className="w-full h-auto rounded-[14px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. ERP Systems Grid (cream) ─────────────────────────────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-[#1e293b] text-[30px] sm:text-[40px] lg:text-[46px]">
            ERP Systems We Connect to Shopify
          </h2>
          <p className="mx-auto mt-5 max-w-[1100px] text-center text-[#334155] text-[15px] sm:text-base leading-[1.7]">
            We integrate Shopify with the ERP systems running mid-market and enterprise commerce operations. If your ERP
            is not listed below, contact us. If it has an API, we can connect it.
          </p>

          <div className="mt-12 grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {ERP_SYSTEMS.map((s, i) =>
              s.illustration ? (
                <div
                  key={i}
                  className="rounded-[18px] p-6 sm:p-7 flex items-center justify-center"
                  style={{ background: "#F4ECD6", minHeight: 280 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.alt} className="w-full h-auto max-w-[420px] object-contain" />
                </div>
              ) : (
                <div key={s.name} className="rounded-[18px] bg-white p-6 sm:p-7 flex flex-col">
                  <div className="h-[64px] flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.logo} alt={s.name} className="h-full w-auto object-contain" />
                  </div>
                  <h3 className="mt-5 font-bold text-[#1e293b] text-[20px] sm:text-[22px] leading-[1.3]">{s.name}</h3>
                  <p className="mt-3 text-[#334155] text-[15px] leading-[1.7]">{s.desc}</p>
                </div>
              ),
            )}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={CONSULT}
              className="cta-pill inline-flex items-center gap-3 rounded-full px-7 py-3 text-[15px] sm:text-base text-white"
              style={{ background: "#0a0a0a" }}
            >
              Book a Free Consultation
              <span aria-hidden className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. How We Build (black, 3 cards w/ grid background) ─────── */}
      <section
        className="erp-process"
        style={{ background: "#000000", fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-white text-[30px] sm:text-[40px] lg:text-[46px]">
            How We Build Your Shopify ERP Integration
          </h2>

          <div className="mt-12 grid gap-[40px] lg:gap-[30px] lg:grid-cols-3 erp-process-grid">
            {PROCESS_STEPS.map((s) => (
              <div key={s.title} className="text-center erp-process-cell">
                <div className="mx-auto mb-6 flex h-[110px] w-[110px] items-center justify-center rounded-full bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.icon} alt="" className="h-[70px] w-[70px] object-contain" />
                </div>
                <h3 className="font-bold text-white text-[20px] sm:text-[22px] leading-[1.3]">{s.title}</h3>
                <p className="mt-4 text-white/80 text-[15px] leading-[1.75] max-w-[360px] mx-auto">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center font-bold text-white text-[18px] sm:text-[20px] lg:text-[22px]">
            Your Competitors Are Already Connected. Are You?
          </p>
          <div className="mt-7 flex justify-center">
            <a
              href={CONSULT}
              className="cta-pill-invert inline-flex items-center gap-3 rounded-full border px-7 py-3 text-[15px] sm:text-base transition"
            >
              Book a Free Consultation
              <span aria-hidden className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 8. Advanced Integration Features (white, image + accordion) ─ */}
      <section style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <div className="grid gap-[30px] lg:grid-cols-2 lg:items-center">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/erp-image.webp"
                alt="Advanced Shopify ERP integration features"
                className="w-full h-auto rounded-[14px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold leading-[1.2] text-[#1e293b] text-[28px] sm:text-[34px] lg:text-[38px]">
                Advanced Integration Features We Configure
              </h2>

              <div className="erp-acc mt-8">
                {ADVANCED_FEATURES.map((_, i) => (
                  <input
                    key={i}
                    className="erp-acc-rad"
                    type="radio"
                    id={`erp-adv-${i}`}
                    name="erp-adv-acc"
                    defaultChecked={i === 0}
                  />
                ))}
                <div className="erp-acc-list">
                  {ADVANCED_FEATURES.map((it, i) => (
                    <div key={i} className="erp-acc-item" data-acc={`erp-adv-${i}`}>
                      <label htmlFor={`erp-adv-${i}`} className="erp-acc-head">
                        <span className="erp-acc-q">{it.q}</span>
                        <span className="erp-acc-ico" aria-hidden>
                          <span className="erp-acc-open">{ArrowUp}</span>
                          <span className="erp-acc-closed">{ChevronDown}</span>
                        </span>
                      </label>
                      <div className="erp-acc-bodyc">
                        <p>{it.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. What Changes (cream, 2x2 grid + CTA) ─────────────────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-[#1e293b] text-[30px] sm:text-[40px] lg:text-[46px]">
            What Changes When Your ERP and Shopify Are Properly Connected
          </h2>

          <div className="mt-12 grid gap-[20px] sm:grid-cols-2">
            {OUTCOMES.map((o) => (
              <div key={o.t} className="rounded-[18px] bg-white p-7 sm:p-8">
                <h3 className="font-bold text-[#1e293b] text-[20px] sm:text-[22px] leading-[1.3]">{o.t}</h3>
                <p className="mt-4 text-[#334155] text-[15px] leading-[1.75]">{o.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={CONSULT}
              className="cta-pill inline-flex items-center gap-3 rounded-full px-7 py-3 text-[15px] sm:text-base text-white"
              style={{ background: "#0a0a0a" }}
            >
              Book a Free Consultation
              <span aria-hidden className="text-lg leading-none">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 10. Brands case study (cream) ───────────────────────────── */}
      <section
        className="ssd-results-section"
        style={{
          background: "#FBF7ED",
          color: "#334155",
          fontFamily: "'Poppins', sans-serif",
          fontSize: "16px",
          padding: "60px 20px",
        }}
      >
        <div className="ssd-results-inner mx-auto" style={{ maxWidth: "1320px" }}>
          <h2 className="ssd-results-heading">
            Brands That Connected Their ERP to Shopify With Ecomm Wizards
          </h2>

          <CaseStudySlider slides={CASE_STUDY_SLIDES} intervalMs={6000} />
        </div>
      </section>

      {/* ── 11. Getting Started (cream, 2 cards) ────────────────────── */}
      <section style={{ background: "#FBF7ED", fontFamily: "'Poppins', sans-serif" }}>
        <div className="mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]" style={{ maxWidth: "1320px" }}>
          <h2 className="text-center font-bold leading-[1.2] text-[#1e293b] text-[30px] sm:text-[40px] lg:text-[46px]">
            Getting Started With Us For Your ERP for Shopify Integration Looks Like This
          </h2>

          <div className="mt-12 grid gap-[20px] lg:grid-cols-2">
            <div className="rounded-[18px] bg-white p-7 sm:p-8 grid gap-6 sm:grid-cols-[1fr_auto] items-center">
              <div>
                <h3 className="font-bold text-[#1e293b] text-[22px] sm:text-[26px] leading-[1.3]">
                  Ready to integrate?
                </h3>
                <p className="mt-5 text-[#334155] text-[15px] leading-[1.75]">
                  You know your ERP and your Shopify store need to be connected. Book a free consultation and we will
                  scope the right integration approach for your systems, data volume, and budget.
                </p>
                <a
                  href={CONSULT}
                  className="erp-link mt-6 inline-flex items-center gap-2 text-[#1e293b] text-[15px] sm:text-base font-semibold hover:underline underline-offset-4"
                >
                  Book a Free Consultation
                  <span aria-hidden className="text-lg leading-none">→</span>
                </a>
              </div>
              <div className="w-full sm:w-[200px] lg:w-[240px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/call-image_1024x1024.webp" alt="Ready to integrate" className="w-full h-auto" />
              </div>
            </div>

            <div className="rounded-[18px] bg-white p-7 sm:p-8 grid gap-6 sm:grid-cols-[1fr_auto] items-center">
              <div>
                <h3 className="font-bold text-[#1e293b] text-[22px] sm:text-[26px] leading-[1.3]">
                  Not Sure Where to Start?
                </h3>
                <p className="mt-5 text-[#334155] text-[15px] leading-[1.75]">
                  Tell us which ERP you are running, how many orders you process per week, and what data you need to
                  sync. We will give you an honest recommendation, even if the answer is &ldquo;not yet.&rdquo;
                </p>
                <a
                  href={CONTACT}
                  className="erp-link mt-6 inline-flex items-center gap-2 text-[#1e293b] text-[15px] sm:text-base font-semibold hover:underline underline-offset-4"
                >
                  Contact Us Now
                  <span aria-hidden className="text-lg leading-none">→</span>
                </a>
              </div>
              <div className="w-full sm:w-[200px] lg:w-[240px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/contact_1024x1024.webp" alt="Not sure where to start" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. FAQ ──────────────────────────────────────────────────── */}
      <section className="erp-faq-section" style={{ background: "#FFFFFF", fontFamily: "'Poppins', sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
        <div
          className="erp-faq-inner mx-auto py-[40px] px-[15px] lg:py-[60px] lg:px-[20px]"
          style={{ maxWidth: "1320px" }}
        >
          <h2 className="erp-faq-title">Frequently Asked Questions</h2>

          <div className="erp-faq-acc">
            {FAQS.map((_, i) => (
              <input
                key={i}
                className="erp-faq-rad"
                type="radio"
                id={`erp-faq-${i}`}
                name="erp-faq-acc"
                defaultChecked={i === 0}
              />
            ))}
            <div className="erp-faq-list">
              {FAQS.map((f, i) => (
                <div key={i} className="erp-faq-item" data-faq={`erp-faq-${i}`}>
                  <label htmlFor={`erp-faq-${i}`} className="erp-faq-head">
                    <span className="erp-faq-q">{f.q}</span>
                    <span className="erp-faq-ico" aria-hidden>
                      <span className="erp-faq-open">{ArrowUp}</span>
                      <span className="erp-faq-closed">{ChevronDown}</span>
                    </span>
                  </label>
                  <div className="erp-faq-bodyc">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Page-scoped CSS ──────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Case Study slider (ported from shopify-store-development) ── */
        .ssd-results-heading {
          color: #000000;
          font-family: 'Poppins', sans-serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 52px;
          text-align: center;
          margin: 0 auto 48px;
          max-width: 920px;
        }
        .ssd-results-slider {
          position: relative;
          background: #F4ECD6;
          border-radius: 18px;
          padding: 0;
          overflow: hidden;
        }
        .ssd-results-slider-track {
          display: flex;
          will-change: transform;
        }
        .ssd-results-slide {
          display: grid;
          grid-template-columns: 600px 1fr;
          gap: 30px;
          align-items: center;
          padding: 30px 20px;
          box-sizing: border-box;
        }
        .ssd-results-slide-image {
          width: 600px;
          height: 423.42px;
          border-radius: 12px;
          overflow: hidden;
          background: #efe9d9;
        }
        .ssd-results-slide-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .ssd-results-slide-text {
          padding: 10px;
          color: #334155;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
        }
        .ssd-results-apps {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .ssd-results-apps-label {
          color: #000000;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 14px;
        }
        .ssd-results-apps-icons {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ssd-results-app-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #000000;
        }
        .ssd-results-app-chip img {
          width: 20px;
          height: 20px;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        .ssd-results-slide-headline {
          color: #000000;
          font-family: 'Poppins', sans-serif;
          font-size: 30px;
          font-weight: 500;
          line-height: 40px;
          margin: 0 0 18px;
          max-width: 600px;
        }
        .ssd-results-slide-headline strong { font-weight: 800; }
        .ssd-results-slide-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #000000;
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          text-decoration: none;
          margin: 0 0 22px;
          transition: gap 0.25s ease;
        }
        .ssd-results-slide-link:hover { gap: 12px; color: #000000; }
        .ssd-results-slide-link:focus,
        .ssd-results-slide-link:visited,
        .ssd-results-slide-link:active { color: #000000; }
        .ssd-results-slide-link span {
          border-bottom: 1px solid #000;
          padding-bottom: 1px;
        }
        .ssd-results-quote-card {
          background: #FFFFFF;
          border-radius: 12px;
          padding: 20px;
          max-width: 600px;
        }
        .ssd-results-quote-text {
          color: #000000;
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          line-height: 24px;
          margin: 0 0 18px;
        }
        .ssd-results-quote-text strong { font-weight: 700; }
        .ssd-results-quote-person {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ssd-results-quote-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          background: #ddd;
        }
        .ssd-results-quote-name {
          color: #000000;
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 22px;
        }
        .ssd-results-quote-role {
          color: rgba(0, 0, 0, 0.65);
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 20px;
        }
        .ssd-results-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #000000;
          color: #FFFFFF;
          border: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .ssd-results-arrow:hover { background: #2A9555; transform: translateY(-50%) scale(1.05); }
        .ssd-results-arrow-prev { left: 8px; }
        .ssd-results-arrow-next { right: 8px; }
        .ssd-results-dots {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 14px;
          display: flex;
          justify-content: center;
          gap: 8px;
          z-index: 4;
        }
        .ssd-results-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.25);
          border: 0;
          padding: 0;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .ssd-results-dot.is-active {
          background: #000000;
          transform: scale(1.2);
        }
        @media (max-width: 1023px) {
          .ssd-results-section { padding: 44px 20px !important; }
          .ssd-results-heading { font-size: 30px !important; line-height: 40px !important; margin-bottom: 28px !important; }
          .ssd-results-slide {
            grid-template-columns: 1fr !important;
            padding: 24px 16px !important;
            gap: 20px !important;
          }
          .ssd-results-slide-image {
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 600 / 423.42 !important;
          }
          .ssd-results-slide-text { padding: 0 !important; }
          .ssd-results-slide-headline { font-size: 22px !important; line-height: 30px !important; }
          .ssd-results-slide-link { font-size: 16px !important; }
          .ssd-results-quote-text { font-size: 14px !important; line-height: 22px !important; }
          .ssd-results-arrow { width: 36px !important; height: 36px !important; }
        }
        @media (max-width: 640px) {
          .ssd-results-section { padding: 36px 16px !important; }
          .ssd-results-heading { font-size: 26px !important; line-height: 34px !important; }
          .ssd-results-slider { padding: 0 !important; }
          .ssd-results-slide  { padding: 22px 14px !important; }
          .ssd-results-slide-headline { font-size: 19px !important; line-height: 26px !important; }
          .ssd-results-quote-card { padding: 16px !important; }
          .ssd-results-arrow { display: none !important; }
          .ssd-results-app-chip { width: 28px; height: 28px; }
          .ssd-results-app-chip img { width: 16px; height: 16px; }
        }

        /* CTA links: lock text color so global :hover blue can't leak */
        .erp-link, .erp-link:hover, .erp-link:focus, .erp-link:visited, .erp-link:active { color: inherit; }
        .cta-pill, .cta-pill:hover, .cta-pill:focus, .cta-pill:visited, .cta-pill:active { color: #FFFFFF; }
        .cta-pill-invert { color: #FFFFFF; border-color: rgba(255,255,255,0.5); }
        .cta-pill-invert:hover { background: rgba(255,255,255,0.06); }
        .cta-pill-invert, .cta-pill-invert:hover, .cta-pill-invert:focus, .cta-pill-invert:visited, .cta-pill-invert:active { color: #FFFFFF; }

        /* ── Generic accordion (used in sections 5 and 8) ── */
        .erp-acc { position: relative; }
        .erp-acc-rad { position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; }
        .erp-acc-list { display: flex; flex-direction: column; }
        .erp-acc-item { border-top: 1px solid rgba(0,0,0,0.10); }
        .erp-acc-item:last-child { border-bottom: 1px solid rgba(0,0,0,0.10); }
        .erp-acc-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 0; cursor: pointer; gap: 16px;
        }
        .erp-acc-q { color: #1e293b; font-size: 17px; font-weight: 600; line-height: 1.4; }
        .erp-acc-ico {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; color: #1e293b; flex: 0 0 auto;
        }
        .erp-acc-open   { display: none; }
        .erp-acc-closed { display: inline-flex; }
        .erp-acc-bodyc  { display: none; padding: 0 24px 22px 0; }
        .erp-acc-bodyc p { color: #334155; font-size: 15px; line-height: 1.75; margin: 0; }
        ${["erp-sync", "erp-adv"]
          .flatMap((g) =>
            (g === "erp-sync" ? SYNC_ITEMS : ADVANCED_FEATURES).map(
              (_, i) => `#${g}-${i}:checked ~ .erp-acc-list [data-acc="${g}-${i}"] .erp-acc-bodyc`,
            ),
          )
          .join(",\n        ")} {
          display: block;
        }
        ${["erp-sync", "erp-adv"]
          .flatMap((g) =>
            (g === "erp-sync" ? SYNC_ITEMS : ADVANCED_FEATURES).map(
              (_, i) => `#${g}-${i}:checked ~ .erp-acc-list [data-acc="${g}-${i}"] .erp-acc-closed`,
            ),
          )
          .join(",\n        ")} {
          display: none;
        }
        ${["erp-sync", "erp-adv"]
          .flatMap((g) =>
            (g === "erp-sync" ? SYNC_ITEMS : ADVANCED_FEATURES).map(
              (_, i) => `#${g}-${i}:checked ~ .erp-acc-list [data-acc="${g}-${i}"] .erp-acc-open`,
            ),
          )
          .join(",\n        ")} {
          display: inline-flex;
        }

        /* ── Process section grid background (subtle lines) ── */
        .erp-process { position: relative; overflow: hidden; }
        .erp-process-grid { position: relative; }
        .erp-process-cell { position: relative; }
        @media (min-width: 1024px) {
          .erp-process-grid::before {
            content: '';
            position: absolute;
            inset: -20px 12% -40px 12%;
            background-image:
              linear-gradient(to right, rgba(177, 137, 69, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(177, 137, 69, 0.18) 1px, transparent 1px);
            background-size: 60px 60px;
            pointer-events: none;
            opacity: 0.5;
          }
        }

        /* ── FAQ accordion ── */
        .erp-faq-title {
          color: #000000; font-size: 32px; font-weight: 700; line-height: 1.2;
          text-align: center; margin: 0 0 40px;
        }
        @media (min-width: 1024px) {
          .erp-faq-title { font-size: 40px; margin-bottom: 50px; }
        }
        .erp-faq-acc { position: relative; }
        .erp-faq-rad { position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px; }
        .erp-faq-list { display: flex; flex-direction: column; }
        .erp-faq-item { border-top: 1px solid rgba(0,0,0,0.10); }
        .erp-faq-item:last-child { border-bottom: 1px solid rgba(0,0,0,0.10); }
        .erp-faq-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 0; cursor: pointer; gap: 16px;
        }
        .erp-faq-q { color: #1e293b; font-size: 17px; font-weight: 600; line-height: 1.4; }
        .erp-faq-ico {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; color: #1e293b; flex: 0 0 auto;
        }
        .erp-faq-open   { display: none; }
        .erp-faq-closed { display: inline-flex; }
        .erp-faq-bodyc  { display: none; padding: 0 60px 24px 0; }
        .erp-faq-bodyc p { color: #334155; font-size: 15px; line-height: 1.75; margin: 0; }
        ${FAQS.map((_, i) => `#erp-faq-${i}:checked ~ .erp-faq-list [data-faq="erp-faq-${i}"] .erp-faq-bodyc`).join(",\n        ")} {
          display: block;
        }
        ${FAQS.map((_, i) => `#erp-faq-${i}:checked ~ .erp-faq-list [data-faq="erp-faq-${i}"] .erp-faq-closed`).join(",\n        ")} {
          display: none;
        }
        ${FAQS.map((_, i) => `#erp-faq-${i}:checked ~ .erp-faq-list [data-faq="erp-faq-${i}"] .erp-faq-open`).join(",\n        ")} {
          display: inline-flex;
        }

        /* ── Trust logo marquee ── */
        .erp-trust-track {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 24px;
          width: max-content;
          animation: erpTrustScroll 32s linear infinite;
        }
        .erp-trust-slide {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 178.32px;
          height: 86.04px;
        }
        .erp-trust-logo {
          width: 178.32px;
          height: 86.04px;
          object-fit: contain;
          display: block;
        }
        @keyframes erpTrustScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 1023px) {
          .erp-trust       { padding: 0 16px; }
          .erp-trust-inner { padding: 36px 0 !important; }
          .erp-trust-heading { font-size: 20px !important; }
          .erp-trust-carousel { margin-top: 24px !important; }
          .erp-trust-track { gap: 32px; animation-duration: 22s; }
          .erp-trust-slide { width: 174.99px; height: 84.44px; }
          .erp-trust-logo  { width: 174.99px; height: 84.44px; }
        }
      ` }} />
    </>
  );
}
