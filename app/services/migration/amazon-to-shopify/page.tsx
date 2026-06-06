import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Amazon to Shopify | Build Your Own Direct-to-Consumer Channel",
  description: "Move from Amazon to Shopify and own your customer data, margins, and brand. Build a DTC channel that works alongside or instead of Amazon.",
};

const FEATURES = [
  {
    "icon": "👤",
    "title": "Own Your Customer Data",
    "desc": "Build a direct relationship with your buyers — something Amazon never lets you do."
  },
  {
    "icon": "💰",
    "title": "Higher Margins",
    "desc": "Cut out Amazon fees and keep more of every sale you make."
  },
  {
    "icon": "🎨",
    "title": "Brand Experience",
    "desc": "Create a branded shopping experience that builds loyalty and repeat purchases."
  },
  {
    "icon": "📦",
    "title": "Product Catalogue Transfer",
    "desc": "All your ASINs and listings mapped to clean Shopify product records."
  },
  {
    "icon": "🔄",
    "title": "Inventory Sync",
    "desc": "Optional: keep selling on Amazon while syncing inventory with your Shopify store."
  },
  {
    "icon": "📈",
    "title": "Growth Strategy",
    "desc": "DTC growth strategy, email marketing, and retention flows to maximise lifetime value."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Amazon → Shopify"
        title="Own Your Customers."
        titleHighlight="Launch on Shopify."
        subtitle="Stop giving Amazon your margins and customer data. Build a direct-to-consumer Shopify channel that you own, control, and grow on your terms."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Amazon to Shopify Migration Services" />
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
        heading="Ready to Own Your DTC Channel?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
