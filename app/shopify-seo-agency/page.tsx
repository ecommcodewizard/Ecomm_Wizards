import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify SEO Agency | Organic Growth for Ecommerce Stores",
  description: "Expert Shopify SEO services — technical SEO, content strategy, link building, and AI search optimisation. Grow organic revenue without paid ads.",
};

const SERVICES = [
  { icon: "🔧", title: "Technical SEO Audit",           desc: "Full crawl analysis, site speed, Core Web Vitals, structured data, and indexability fixes." },
  { icon: "🔑", title: "Keyword & Content Strategy",    desc: "Product, collection, and blog content mapped to buyer-intent search terms that convert." },
  { icon: "🤖", title: "AI Search Optimisation",        desc: "Optimise for ChatGPT, Gemini, and AI-powered search results — the future of organic discovery." },
  { icon: "🔗", title: "Link Building",                 desc: "High-authority backlinks from relevant publications to build domain authority." },
  { icon: "📍", title: "Local & International SEO",     desc: "Hreflang, multi-currency, geo-targeted content for brands selling across borders." },
  { icon: "📊", title: "SEO Reporting & Analytics",     desc: "Monthly reports tied to revenue — rankings, traffic, conversions, and ROI tracked." },
];

const RESULTS = [
  { metric: "3.2x",  label: "Average organic traffic increase in 6 months" },
  { metric: "47%",   label: "Average increase in organic revenue year-over-year" },
  { metric: "Top 3", label: "Average ranking position for target keywords" },
  { metric: "700+",  label: "Shopify stores in our SEO portfolio" },
];

const FAQS = [
  { q: "How long does Shopify SEO take to see results?",    a: "Most clients see measurable improvements within 3–6 months. Competitive niches may take 6–12 months. We set realistic timelines in your custom SEO roadmap." },
  { q: "Do you do one-time SEO audits or ongoing work?",   a: "Both. We offer one-time technical audits, and ongoing monthly SEO retainers that drive compounding organic growth." },
  { q: "What makes Shopify SEO different?",                 a: "Shopify has specific technical considerations — URL structures, duplicate content from variants, and theme performance — that require specialist expertise." },
  { q: "Do you optimise for AI search (ChatGPT etc.)?",    a: "Yes. We optimise your content and structured data for AI-powered search engines including ChatGPT Shopping, Google AI Overviews, and Gemini." },
];

export default function ShopifySEOPage() {
  return (
    <>
      <PageHero
        badge="Shopify SEO Agency"
        title="Rank Higher. Sell More."
        titleHighlight="Organically."
        subtitle="Expert Shopify SEO that drives compounding organic traffic and revenue — without relying on paid ads. Technical SEO, content strategy, AI search, and more."
        primaryCta={{ label: "Get a Free SEO Audit", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Strategy Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="SEO Services" title="Full-Service Shopify SEO" subtitle="Every lever we pull to grow your organic search presence and revenue." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-800">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-700 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-200">Results</span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">SEO Results You Can Expect</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {RESULTS.map((r) => (
              <div key={r.label} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <p className="text-4xl font-extrabold text-white">{r.metric}</p>
                <p className="mt-2 text-sm text-slate-300">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader badge="FAQs" title="Shopify SEO Questions Answered" />
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-800">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Start Growing Organically Today" subheading="Get a free Shopify SEO audit and see exactly where your organic growth opportunities are." primaryLabel="Get a Free SEO Audit" />
    </>
  );
}
