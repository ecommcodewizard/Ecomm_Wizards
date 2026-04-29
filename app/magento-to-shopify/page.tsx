import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Magento to Shopify Migration | Escape Magento Complexity",
  description: "Move from Magento 1 or Magento 2 to Shopify with zero data loss. Certified Shopify migration experts. Free consultation and quote.",
};

const FEATURES = [
  {
    "icon": "💰",
    "title": "Reduce Infrastructure Cost",
    "desc": "No more server costs, developer dependency, or security patches. Shopify handles it all."
  },
  {
    "icon": "📦",
    "title": "Full Data Migration",
    "desc": "All products, categories, customers, and orders — including Magento 1 and Magento 2."
  },
  {
    "icon": "🔍",
    "title": "SEO Continuity",
    "desc": "URL mapping, 301 redirects, and metadata preservation built into every migration."
  },
  {
    "icon": "⚡",
    "title": "Performance Upgrade",
    "desc": "Shopify's infrastructure is faster and more reliable than any self-hosted Magento install."
  },
  {
    "icon": "🎨",
    "title": "Modern Shopify Design",
    "desc": "Migrate to a fresh, conversion-focused Shopify theme — or replicate your existing look."
  },
  {
    "icon": "🔌",
    "title": "Extension Replacement",
    "desc": "We find Shopify equivalents for all your Magento extensions and configure them for you."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Magento → Shopify"
        title="Escape Magento."
        titleHighlight="Migrate to Shopify."
        subtitle="Magento is expensive, complex, and high-maintenance. Move to Shopify and take back control of your store — without losing products, customers, or SEO."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Magento to Shopify Migration Services" />
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
        heading="Ready to Leave Magento Behind?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
