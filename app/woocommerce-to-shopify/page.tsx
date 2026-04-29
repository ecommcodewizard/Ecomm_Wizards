import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "WooCommerce to Shopify Migration | Ecomm Wizards",
  description: "Migrate from WooCommerce to Shopify without losing data, SEO, or customers. Certified Shopify migration experts. Free consultation.",
};

const FEATURES = [
  {
    "icon": "📦",
    "title": "Products & Variants",
    "desc": "All WooCommerce products, attributes, variations, and images migrated to Shopify."
  },
  {
    "icon": "👥",
    "title": "Customers & Orders",
    "desc": "Full customer database and order history transferred to Shopify."
  },
  {
    "icon": "🔍",
    "title": "SEO 301 Redirects",
    "desc": "Automatic redirect mapping from all WooCommerce URLs to Shopify equivalents."
  },
  {
    "icon": "🔌",
    "title": "Plugin Replacement",
    "desc": "We identify Shopify equivalents for every WooCommerce plugin you rely on."
  },
  {
    "icon": "🎨",
    "title": "Theme Redesign (Optional)",
    "desc": "Upgrade your design at the same time — or migrate your existing look and feel."
  },
  {
    "icon": "⚡",
    "title": "Performance Boost",
    "desc": "Shopify's infrastructure is faster, more reliable, and requires zero server maintenance."
  }
];

const PROCESS = [
  {
    "step": "01",
    "title": "WooCommerce Audit",
    "desc": "We map all your products, plugins, custom features, and payment gateways."
  },
  {
    "step": "02",
    "title": "Shopify Setup",
    "desc": "Store configuration, theme selection or build, and payment setup."
  },
  {
    "step": "03",
    "title": "Data Migration",
    "desc": "Products, customers, orders — all transferred with full validation."
  },
  {
    "step": "04",
    "title": "QA & Testing",
    "desc": "End-to-end testing across all devices and browsers."
  },
  {
    "step": "05",
    "title": "Go-Live",
    "desc": "Cutover with 301 redirects, monitoring, and post-launch support."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="WooCommerce → Shopify"
        title="WooCommerce to Shopify"
        titleHighlight="Migration Made Simple"
        subtitle="Escape WordPress complexity and move to Shopify — faster, more reliable, and built for ecommerce growth. Zero data loss. Zero downtime."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
        backgroundImage="/images/woocommerce-hero-scaled.webp"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our WooCommerce to Shopify Migration Services" />
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

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Process" title="How We Deliver WooCommerce to Shopify Migration" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p: {step:string;title:string;desc:string}) => (
              <div key={p.step} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <span className="text-5xl font-extrabold text-slate-100 leading-none">{p.step}</span>
                <h3 className="mt-2 font-bold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Escape WooCommerce?"
        subheading="Book a free migration consultation — we'll tell you exactly what it takes to move your store."
      />
    </>
  );
}
