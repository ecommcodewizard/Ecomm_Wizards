import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify A/B Testing Agency | CRO Experimentation | Ecomm Wizards",
  description: "Data-driven A/B testing and CRO experimentation for Shopify stores. Test product pages, landing pages, checkout, and more. Results tied to revenue.",
};

const FEATURES = [
  {
    "icon": "🧪",
    "title": "Hypothesis Development",
    "desc": "Data-backed test hypotheses built from analytics, heatmaps, and session recordings."
  },
  {
    "icon": "🎯",
    "title": "Test Design",
    "desc": "Statistical test design ensuring valid, reliable results with proper sample sizes."
  },
  {
    "icon": "🔧",
    "title": "Test Implementation",
    "desc": "Custom test development using Shopify-compatible experimentation tools."
  },
  {
    "icon": "📊",
    "title": "Results Analysis",
    "desc": "Statistical significance testing and revenue impact analysis for every experiment."
  },
  {
    "icon": "📈",
    "title": "Winning Variant Rollout",
    "desc": "Fast deployment of winning variants with full QA and monitoring."
  },
  {
    "icon": "🔄",
    "title": "Continuous Iteration",
    "desc": "An ongoing testing programme that compounds improvements month over month."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="A/B Testing"
        title="Shopify A/B Testing"
        titleHighlight="Data-Driven Growth"
        subtitle="Stop guessing what works. We design, run, and analyse A/B tests that systematically improve your Shopify store's conversion rate — with results tied directly to revenue."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our A/B Testing for Shopify Services" />
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
        heading="Ready to Start A/B Testing Your Shopify Store?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
