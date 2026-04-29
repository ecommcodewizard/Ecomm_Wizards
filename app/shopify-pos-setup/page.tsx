import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify POS Setup Service | Remote Configuration and Migration",
  description: "Expert Shopify POS setup, hardware configuration, and POS migration from Square, Lightspeed, or Clover. Remote service for single stores to 50+ locations.",
};

const FEATURES = [
  { icon: "🔄", title: "Tailored POS Migrations",     desc: "Move from Square, Lightspeed, Clover, or any legacy POS — zero data loss guaranteed." },
  { icon: "🌐", title: "Remote Setup",                 desc: "Our team configures your entire POS system remotely — no on-site visit required." },
  { icon: "📊", title: "Real-Time Inventory Sync",    desc: "Online and in-store inventory stay in perfect sync across every location." },
  { icon: "📈", title: "Ongoing Revenue Support",     desc: "Post-setup optimisation, staff training, and performance monitoring included." },
  { icon: "📍", title: "Scalable Pilots",              desc: "Start with one location and scale to 50+ with confidence." },
  { icon: "🔒", title: "Data Integrity",               desc: "All customer records, order history, and product data migrated safely and accurately." },
];

const COMPARISON = [
  { competitor: "Square",     advantage: "Unified sync, no compromises",   impact: "Scale without silos, increased efficiency" },
  { competitor: "Lightspeed", advantage: "Native interoperability",        impact: "Simpler fulfilment, up to 10% more revenue" },
  { competitor: "Others",     advantage: "Lower total cost overall",       impact: "22% savings, faster ROI" },
];

const PROCESS = [
  { step: "01", title: "Discovery",     desc: "Audit your existing POS system, hardware, and workflows." },
  { step: "02", title: "Planning",      desc: "Map your inventory, products, staff permissions, and location setup." },
  { step: "03", title: "Migration",     desc: "Transfer all data from your current POS — zero loss guaranteed." },
  { step: "04", title: "Configuration", desc: "Hardware setup, payment processing, receipt design, and app integrations." },
  { step: "05", title: "Go-Live",       desc: "Soft launch with monitoring, staff training, and same-day support." },
];

export default function POSPage() {
  return (
    <>
      <PageHero
        badge="Shopify POS"
        title="Shopify POS Setup That Connects"
        titleHighlight="Your Store to the Street"
        subtitle="One system for every sale — online and in-person. Expert POS setup, migration, and hardware configuration for single stores to 50+ retail locations."
        primaryCta={{ label: "Request a POS Demo", href: "/book-shopify-consultation" }}
        secondaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        backgroundImage="/images/pos-hero.webp"
      />

      <div className="border-b border-slate-100 bg-white py-5">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Response within 24 hours · Fixed-price quotes · Zero obligation · Remote setup available
        </p>
      </div>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What You Get"
            title="Our Shopify POS Setup Service"
            subtitle="Everything you need to connect your physical and digital retail — handled end-to-end by our team."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-800">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Switching from Another POS?"
            title="The Numbers Do Not Lie — Shopify POS Costs Less"
            subtitle="Why retailers are ditching legacy POS systems for Shopify Point of Sale."
          />
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-slate-700 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-200">
              <span>Switching From</span>
              <span>Shopify Advantage</span>
              <span>Business Impact</span>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.competitor}
                className={`grid grid-cols-3 gap-4 px-6 py-5 text-sm ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <span className="font-semibold text-slate-800">{row.competitor}</span>
                <span className="text-slate-600">{row.advantage}</span>
                <span className="text-slate-600">{row.impact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Process" title="Our Proven Shopify POS Setup Process" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.step} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <span className="text-5xl font-extrabold text-slate-100 leading-none">{p.step}</span>
                <h3 className="mt-2 font-bold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Unify Your Online and In-Store Selling?"
        subheading="Request a free POS demo and see Shopify POS in action for your business."
        primaryLabel="Request a POS Demo"
        primaryHref="/book-shopify-consultation"
        secondaryLabel="Get a Free Quote"
        secondaryHref="/free-shopify-store-audit"
      />
    </>
  );
}
