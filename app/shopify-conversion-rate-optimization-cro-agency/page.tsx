import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Conversion Rate Optimisation (CRO) Agency | Ecomm Wizards",
  description: "Expert Shopify CRO agency. A/B testing, UX optimisation, checkout fixes, and data-driven experimentation to turn more visitors into buyers.",
};

const FEATURES = [
  {
    "icon": "🔬",
    "title": "CRO Audit",
    "desc": "Deep-dive analysis of your entire conversion funnel — from landing page to checkout."
  },
  {
    "icon": "🧪",
    "title": "A/B Testing",
    "desc": "Structured hypothesis testing to identify and implement the changes that lift revenue."
  },
  {
    "icon": "🔥",
    "title": "Heatmaps & Session Replay",
    "desc": "Visual behaviour analysis revealing exactly where users drop off and why."
  },
  {
    "icon": "💳",
    "title": "Checkout Optimisation",
    "desc": "Systematic checkout UX improvements that directly reduce cart abandonment."
  },
  {
    "icon": "📈",
    "title": "Revenue Impact Reports",
    "desc": "Clear attribution of CRO work to revenue — every test tied to a business outcome."
  },
  {
    "icon": "🎯",
    "title": "Personalisation",
    "desc": "Dynamic content and personalised experiences that increase relevance and conversion."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="CRO Agency"
        title="Turn More Visitors Into"
        titleHighlight="Paying Customers"
        subtitle="Shopify CRO agency specialising in data-driven experimentation, UX optimisation, and systematic conversion improvements. Average 28.5% conversion lift across our clients."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify CRO Services" />
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
        heading="Ready to Increase Your Conversion Rate?"
        subheading="Get a free CRO audit and see exactly where your store is losing revenue."
      />
    </>
  );
}
