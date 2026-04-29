import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Prestashop to Shopify Migration | Full Data Transfer Service",
  description: "Migrate from Prestashop to Shopify with zero data loss. Full product, customer, and order transfer with SEO preservation.",
};

const FEATURES = [
  {
    "icon": "📦",
    "title": "Products & Categories",
    "desc": "All Prestashop products, categories, attributes, and images transferred to Shopify."
  },
  {
    "icon": "👥",
    "title": "Customers & Orders",
    "desc": "Complete customer database and order history migrated with full validation."
  },
  {
    "icon": "🔍",
    "title": "SEO Redirects",
    "desc": "301 redirect mapping for all Prestashop URLs to protect your organic traffic."
  },
  {
    "icon": "🌍",
    "title": "Multi-Language/Currency",
    "desc": "Multi-store Prestashop setups migrated to Shopify's international commerce features."
  },
  {
    "icon": "🎨",
    "title": "Theme Development",
    "desc": "Modern, conversion-focused Shopify theme built to match or improve your Prestashop design."
  },
  {
    "icon": "🔌",
    "title": "Module Replacement",
    "desc": "All critical Prestashop modules replaced with equivalent Shopify apps and configurations."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Prestashop → Shopify"
        title="Prestashop to Shopify"
        titleHighlight="Full Migration Service"
        subtitle="Leave Prestashop's complexity behind and move to Shopify — the world's most popular ecommerce platform. We handle everything from audit to go-live."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Prestashop to Shopify Migration Services" />
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
        heading="Ready to Migrate from Prestashop?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
