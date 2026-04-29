import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify App Development Company | Private and Public Apps",
  description: "Hire expert Shopify app developers to build custom private apps or launch on the Shopify App Store. Shopify Plus Preferred Partner. 700+ merchants. Get a free quote.",
};

const APP_TYPES = [
  {
    type: "Private Shopify Apps",
    icon: "🔒",
    desc: "Custom apps built exclusively for your store — solving problems no off-the-shelf app can handle.",
    items: ["Custom discount logic", "Automated order workflows", "ERP & CRM integrations", "Internal reporting dashboards", "Custom checkout extensions"],
  },
  {
    type: "Public Shopify App Store",
    icon: "🌐",
    desc: "Launch your own app on the Shopify App Store — designed, built, and submitted by our team.",
    items: ["App Store listing strategy", "Billing & subscription setup", "Shopify API compliance", "Review & approval process", "Ongoing updates & maintenance"],
  },
];

const BUILD_PROCESS = [
  { step: "Plan", items: ["Discovery & Strategy", "Technical Roadmapping", "Collaboration & Transparency"] },
  { step: "Design", items: ["UI/UX Prototyping", "Merchant & User Experience", "Brand Consistency"] },
  { step: "Develop", items: ["Expert Coding", "Agile Methodology", "Testing & Quality Assurance"] },
  { step: "Deploy", items: ["Version Control via GitHub", "App Store Submission", "Ongoing Maintenance"] },
];

const WHY = [
  { title: "Shopify Plus Preferred Partner", desc: "Certified by Shopify — we build apps that meet the highest standards." },
  { title: "700+ Merchants Served",         desc: "We understand what Shopify merchants actually need." },
  { title: "Full-Stack Expertise",          desc: "Node.js, React, Remix, Shopify Functions — we speak Shopify natively." },
  { title: "Fixed-Price Quotes",            desc: "Know your cost before we write a single line of code." },
  { title: "Post-Launch Support",           desc: "Ongoing maintenance, updates, and new features as you grow." },
  { title: "24-Hour Response",              desc: "Quick replies and clear communication throughout the project." },
];

export default function ShopifyAppDevelopmentPage() {
  return (
    <>
      <PageHero
        badge="Shopify App Development"
        title="Custom Shopify Apps That"
        titleHighlight="Actually Grow Your Store"
        subtitle="Hire a Shopify app developer who builds apps that solve real business problems — from private store automation to public App Store launches."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="App Types"
            title="Two Types of Shopify App Development Services"
            subtitle="Whether you need a private solution for your own store or want to build the next big Shopify app — we handle both."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {APP_TYPES.map((a) => (
              <div key={a.type} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <span className="text-4xl">{a.icon}</span>
                <h3 className="mt-4 text-xl font-bold text-slate-800">{a.type}</h3>
                <p className="mt-2 text-slate-500 leading-relaxed">{a.desc}</p>
                <ul className="mt-6 space-y-2">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Process" title="From First Call to Live Launch" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BUILD_PROCESS.map((phase, i) => (
              <div key={phase.step} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-slate-800">{phase.step}</h3>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="text-sm text-slate-500 flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Why Us" title="Why Choose Ecomm Wizards as Your Shopify App Development Company" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                  <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800">{w.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Build Your Shopify App?"
        subheading="Response within 24 hours. Fixed-price quotes. No commitment required."
        primaryLabel="Get a Free Quote"
      />
    </>
  );
}
