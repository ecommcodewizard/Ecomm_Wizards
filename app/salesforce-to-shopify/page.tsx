import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Salesforce Commerce Cloud to Shopify Migration | Ecomm Wizards",
  description: "Exit Salesforce Commerce Cloud and migrate to Shopify Plus. Reduce total cost of ownership and regain agility without sacrificing enterprise features.",
};

const FEATURES = [
  {
    "icon": "💰",
    "title": "Dramatically Lower TCO",
    "desc": "Eliminate six-figure annual Salesforce licensing fees and proprietary developer costs."
  },
  {
    "icon": "⚡",
    "title": "Faster Time to Market",
    "desc": "Launch campaigns, features, and seasonal changes in days, not months."
  },
  {
    "icon": "🔗",
    "title": "Salesforce CRM Integration",
    "desc": "Keep your Salesforce CRM — we integrate it directly with Shopify for seamless data flow."
  },
  {
    "icon": "📦",
    "title": "Full Data Migration",
    "desc": "All products, customers, orders, and content migrated with zero loss."
  },
  {
    "icon": "🔍",
    "title": "SEO Continuity",
    "desc": "URL redirects and metadata preservation to maintain all organic traffic."
  },
  {
    "icon": "🏢",
    "title": "Enterprise Features",
    "desc": "Shopify Plus delivers the enterprise capabilities you need at a fraction of the cost."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Salesforce → Shopify"
        title="Exit Salesforce Commerce Cloud."
        titleHighlight="Move to Shopify Plus."
        subtitle="Reduce TCO, increase agility, and unlock faster innovation on Shopify Plus — without losing the enterprise features your business depends on."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Salesforce Commerce Cloud to Shopify Services" />
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
        heading="Ready to Exit Salesforce Commerce Cloud?"
        subheading="Book a free consultation and we'll build your Salesforce to Shopify migration strategy."
      />
    </>
  );
}
