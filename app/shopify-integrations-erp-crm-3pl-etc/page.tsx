import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Integrations | ERP, CRM, 3PL & More | Ecomm Wizards",
  description: "Connect Shopify to any system — ERP, CRM, 3PL, marketing tools, and custom APIs. Real-time sync, zero data loss, certified Shopify Plus partner.",
};

const FEATURES = [
  {
    "icon": "🔷",
    "title": "ERP Integration",
    "desc": "NetSuite, SAP, Microsoft Dynamics — real-time bi-directional sync."
  },
  {
    "icon": "☁️",
    "title": "CRM Integration",
    "desc": "Salesforce, HubSpot, Klaviyo — customer data flowing where it needs to go."
  },
  {
    "icon": "📦",
    "title": "3PL & Warehouse",
    "desc": "ShipBob, ShipHero, Whiplash, and custom WMS connections for fulfilment automation."
  },
  {
    "icon": "💳",
    "title": "Payment Gateways",
    "desc": "Custom payment provider integrations beyond Shopify's standard gateway options."
  },
  {
    "icon": "📊",
    "title": "Analytics & BI Tools",
    "desc": "Google Analytics, Looker, Tableau — data flows for real-time business intelligence."
  },
  {
    "icon": "⚙️",
    "title": "Custom API",
    "desc": "Any system with an API can be connected to Shopify — we build the middleware."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Integrations"
        title="Connect Shopify to"
        titleHighlight="Every System You Use"
        subtitle="Real-time integrations between Shopify and your ERP, CRM, 3PL, warehouse, and marketing stack. We build the connections that make your operations run automatically."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify Integrations Services" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f: {icon:string;title:string;desc:string}) => (
              <div key={f.title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-800">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Connect Your Systems to Shopify?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
