import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify 2.0 Development | Sections Everywhere & Online Store 2.0",
  description: "Upgrade to Shopify 2.0 and unlock Sections Everywhere, metafields, and flexible content architecture. Certified Shopify 2.0 development agency.",
};

const FEATURES = [
  {
    "icon": "🧩",
    "title": "Sections Everywhere",
    "desc": "Full Shopify 2.0 architecture — sections and blocks on every page type."
  },
  {
    "icon": "📋",
    "title": "Metafields & Metaobjects",
    "desc": "Structured content and custom data built into your theme for ultimate flexibility."
  },
  {
    "icon": "⚡",
    "title": "Performance First",
    "desc": "Shopify 2.0 themes built for speed — lazy loading, optimised assets, and clean code."
  },
  {
    "icon": "🎨",
    "title": "Theme Upgrade",
    "desc": "Upgrade your existing Shopify theme to 2.0 — or build a new one from scratch."
  },
  {
    "icon": "🛠️",
    "title": "Custom Sections",
    "desc": "Purpose-built sections and blocks for your specific content and merchandising needs."
  },
  {
    "icon": "🔌",
    "title": "App Block Integration",
    "desc": "Shopify 2.0 app blocks integrated cleanly into your theme architecture."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Shopify 2.0"
        title="Shopify 2.0 Development"
        titleHighlight="Built for the Future"
        subtitle="Unlock the full power of Shopify Online Store 2.0 — Sections Everywhere, metafields, flexible templates, and a content-editable storefront your team can manage."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify 2.0 Development Services" />
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
        heading="Ready to Upgrade to Shopify 2.0?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
