import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "ERP Connections to Shopify | NetSuite, SAP, and More",
  description: "Connect your ERP, CRM, or 3PL to Shopify with zero data loss and real-time sync. NetSuite, SAP, Microsoft Dynamics, and custom integrations.",
};

const INTEGRATIONS = [
  { name: "NetSuite",             icon: "🔷", desc: "Bi-directional order, inventory, and customer sync with NetSuite ERP." },
  { name: "SAP",                  icon: "🟦", desc: "Real-time product and order data flow between SAP and Shopify." },
  { name: "Microsoft Dynamics",   icon: "🔵", desc: "Full Dynamics 365 integration for finance, inventory, and fulfilment." },
  { name: "Salesforce",           icon: "☁️",  desc: "CRM-to-storefront sync — customer data, orders, and marketing flows." },
  { name: "3PL Providers",        icon: "📦", desc: "Connect ShipBob, ShipHero, Whiplash, and other 3PLs to Shopify." },
  { name: "Custom ERP",           icon: "⚙️", desc: "We build custom middleware for proprietary or legacy ERP systems." },
];

const BENEFITS = [
  { title: "Real-Time Sync",       desc: "Inventory, orders, and customers stay in sync across all systems — no manual updates." },
  { title: "Zero Data Loss",       desc: "Every order, SKU, and customer record migrated with full validation." },
  { title: "Custom Middleware",    desc: "We build tailored connectors when off-the-shelf integrations don't cut it." },
  { title: "Ongoing Monitoring",   desc: "Automated alerts and health checks to catch sync issues before they impact operations." },
];

export default function ERPPage() {
  return (
    <>
      <PageHero
        badge="ERP Integrations"
        title="Connect Your ERP to Shopify"
        titleHighlight="Without the Headaches"
        subtitle="Real-time, bi-directional sync between Shopify and your ERP, CRM, or 3PL. NetSuite, SAP, Dynamics, Salesforce, and custom systems — we've connected them all."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
        backgroundImage="/images/shopify-integration-top-banner-img.webp"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Integrations" title="ERP, CRM & 3PL Systems We Connect to Shopify" subtitle="We've built integrations for the world's leading enterprise systems — and everything in between." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INTEGRATIONS.map((i) => (
              <div key={i.name} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{i.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-800">{i.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Benefits" title="Why Brands Trust Us for Shopify ERP Integrations" />
          <div className="grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-5 rounded-2xl bg-white p-7 shadow-sm border border-slate-100">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-slate-800">{b.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Connect Your ERP to Shopify?" subheading="Get a free technical consultation and we'll scope out your integration within 24 hours." primaryLabel="Get a Free Quote" />
    </>
  );
}
