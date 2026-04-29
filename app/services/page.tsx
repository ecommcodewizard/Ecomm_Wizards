import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Services | Full-Service Shopify Agency | Ecomm Wizards",
  description: "Full-service Shopify agency offering store development, migrations, CRO, SEO, app development, B2B, POS, and marketing. 700+ stores built.",
};

const FEATURES = [
  {
    "icon": "🏗️",
    "title": "Build",
    "desc": "Custom themes, new stores, Shopify Plus, headless, Figma-to-Shopify, and 2.0 development."
  },
  {
    "icon": "🚚",
    "title": "Migrate",
    "desc": "WooCommerce, BigCommerce, Magento, Salesforce, Amazon — zero data loss migration to Shopify."
  },
  {
    "icon": "📈",
    "title": "Optimize",
    "desc": "Speed, CRO, A/B testing, SEO, analytics, store audits, and UX improvements."
  },
  {
    "icon": "⚙️",
    "title": "Apps",
    "desc": "Custom private apps, public App Store apps, mobile apps, and ERP integrations."
  },
  {
    "icon": "🏢",
    "title": "B2B",
    "desc": "Shopify Plus wholesale portals, custom pricing, ERP sync, and B2B app development."
  },
  {
    "icon": "🛒",
    "title": "POS",
    "desc": "Shopify POS setup, migration from Square/Lightspeed, and multi-location configuration."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="All Shopify Services"
        titleHighlight="Under One Roof"
        subtitle="From first pixel to post-launch growth — every Shopify service your brand needs, delivered by a certified Shopify Plus agency with 700+ stores and $900M+ revenue."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our All Services Services" />
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
        heading="Not Sure Which Service You Need?"
        subheading="Book a free consultation and we'll recommend the right solution for your goals."
      />
    </>
  );
}
