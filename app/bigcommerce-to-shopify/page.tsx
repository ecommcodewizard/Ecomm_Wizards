import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "BigCommerce to Shopify Migration | Ecomm Wizards",
  description: "Seamlessly migrate from BigCommerce to Shopify. Products, customers, orders, and SEO preserved. Certified Shopify Plus Partner.",
};

const FEATURES = [
  {
    "icon": "📦",
    "title": "Full Product Transfer",
    "desc": "All products, categories, options, and digital assets migrated accurately."
  },
  {
    "icon": "👥",
    "title": "Customer Data",
    "desc": "Complete customer accounts, addresses, and purchase history."
  },
  {
    "icon": "📋",
    "title": "Order History",
    "desc": "Historical orders imported for reporting, returns, and customer service."
  },
  {
    "icon": "🔍",
    "title": "SEO Preservation",
    "desc": "URL redirects and metadata preservation to protect your organic traffic."
  },
  {
    "icon": "🎨",
    "title": "Theme Migration",
    "desc": "Recreate your BigCommerce design in Shopify — or take the opportunity to upgrade."
  },
  {
    "icon": "🔌",
    "title": "App Stack Setup",
    "desc": "Shopify app equivalents configured for everything you relied on in BigCommerce."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="BigCommerce → Shopify"
        title="BigCommerce to Shopify"
        titleHighlight="Seamless Migration"
        subtitle="Move from BigCommerce to Shopify with zero data loss and zero downtime. Our certified team handles every step from audit to go-live."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our BigCommerce to Shopify Migration Services" />
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
        heading="Ready to Move from BigCommerce to Shopify?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
