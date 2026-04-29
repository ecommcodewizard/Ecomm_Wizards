import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Migrate to Shopify | From Any Platform | Ecomm Wizards",
  description: "Migrate to Shopify from any ecommerce platform. Zero data loss. Zero downtime. Certified Shopify Plus migration experts.",
};

const FEATURES = [
  {
    "icon": "🔀",
    "title": "Any Platform",
    "desc": "WooCommerce, BigCommerce, Magento, Salesforce, Prestashop, and any custom platform."
  },
  {
    "icon": "📦",
    "title": "Full Data Transfer",
    "desc": "All products, customers, orders, reviews, and content — zero loss guaranteed."
  },
  {
    "icon": "🔍",
    "title": "SEO Preserved",
    "desc": "301 redirects and metadata protection to maintain your organic search rankings."
  },
  {
    "icon": "⏱️",
    "title": "Zero Downtime",
    "desc": "Your current store stays live until your Shopify store is fully tested."
  },
  {
    "icon": "🎓",
    "title": "Team Training",
    "desc": "Full Shopify Admin training so your team hits the ground running."
  },
  {
    "icon": "🛠️",
    "title": "30-Day Post-Launch Support",
    "desc": "We monitor and support your store for 30 days after go-live."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Platform Migration"
        title="Migrate to Shopify"
        titleHighlight="From Any Platform"
        subtitle="Move your entire ecommerce operation to Shopify — no matter where you're coming from. Certified migration experts with 8+ years and 100+ successful migrations."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Migrate to Shopify Services" />
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
        heading="Ready to Migrate to Shopify?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
