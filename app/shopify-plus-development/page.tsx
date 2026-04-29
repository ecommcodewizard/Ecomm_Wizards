import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Plus Development Agency | Enterprise Shopify Solutions",
  description: "Certified Shopify Plus development agency. Custom checkout, Shopify Flow, Scripts, B2B, and enterprise integrations. 700+ stores built.",
};

const FEATURES = [
  {
    "icon": "💳",
    "title": "Custom Checkout",
    "desc": "Checkout Extensions, Functions, and branded checkout experiences unique to your brand."
  },
  {
    "icon": "🔄",
    "title": "Shopify Flow",
    "desc": "Advanced automation workflows for orders, customers, inventory, and marketing."
  },
  {
    "icon": "📜",
    "title": "Shopify Scripts",
    "desc": "Custom discount logic, tiered pricing, and cart modifications powered by Shopify Scripts."
  },
  {
    "icon": "🏢",
    "title": "B2B Features",
    "desc": "Company profiles, custom pricing, net terms, and wholesale portals on Shopify Plus."
  },
  {
    "icon": "🔗",
    "title": "Enterprise Integrations",
    "desc": "ERP, CRM, 3PL, and custom API integrations at enterprise scale."
  },
  {
    "icon": "🌍",
    "title": "Multi-Store Management",
    "desc": "Shopify Markets, expansion stores, and international commerce — configured for global scale."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Shopify Plus"
        title="Enterprise Shopify Plus"
        titleHighlight="Development"
        subtitle="Unlock the full power of Shopify Plus — custom checkout, Flow automations, Shopify Scripts, B2B, and enterprise-grade integrations. Built by certified Plus experts."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify Plus Development Services" />
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
        heading="Ready to Unlock Shopify Plus?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
