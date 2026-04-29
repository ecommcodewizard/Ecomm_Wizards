import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Custom Shopify Store Development | Ecomm Wizards",
  description: "Custom Shopify store development built for speed, scalability, and conversions. 700+ stores launched. Speak with our Shopify experts today.",
};

const DELIVERABLES = [
  { icon: "🎨", title: "Custom Shopify Theme Design",       desc: "Bespoke Liquid themes built from scratch to match your brand and convert visitors." },
  { icon: "📐", title: "Figma to Shopify Conversion",       desc: "Pixel-perfect translation of your design file into a fully functional Shopify store." },
  { icon: "🚀", title: "New Store Development",              desc: "Full setup — products, collections, payments, shipping, and launch-ready configuration." },
  { icon: "⚡", title: "Shopify Plus Development",           desc: "Enterprise-grade stores with custom checkout, Scripts, Flow, and B2B functionality." },
  { icon: "🌐", title: "Headless / Hydrogen Storefronts",   desc: "Next.js and Hydrogen builds for brands that need maximum speed and flexibility." },
  { icon: "🔌", title: "ERP & App Integrations",            desc: "Connect your store to NetSuite, SAP, 3PLs, CRMs, and any third-party system." },
];

const PROCESS = [
  { step: "01", title: "Discovery & Strategy",   desc: "We audit your brand, competitors, and goals to map out the perfect Shopify architecture." },
  { step: "02", title: "UX & Design",            desc: "Wireframes and high-fidelity mockups designed for conversion — reviewed and approved by you." },
  { step: "03", title: "Development",            desc: "Clean, optimised Liquid (or Hydrogen) code. Mobile-first. Accessibility-compliant. Fast." },
  { step: "04", title: "QA & Testing",           desc: "Cross-browser, cross-device testing. Speed benchmarks. Checkout flow validation." },
  { step: "05", title: "Launch & Handover",      desc: "Zero-downtime go-live with full training, documentation, and post-launch support." },
];

const WHY = [
  "700+ Shopify stores built across every niche",
  "Shopify Plus Certified Partner",
  "Average 28.5% conversion rate improvement",
  "Dedicated project manager for every build",
  "Fixed-price quotes — no surprise invoices",
  "Post-launch growth support included",
];

const FAQS = [
  { q: "How long does a Shopify store build take?",       a: "A standard custom build takes 4–8 weeks. Shopify Plus enterprise projects typically take 8–12 weeks. We'll give you a precise timeline in your free quote." },
  { q: "Do you work with existing Shopify stores?",       a: "Yes — we handle redesigns, theme customisations, feature additions, and full rebuilds for existing stores just as often as new builds." },
  { q: "What's included in a custom Shopify build?",      a: "Custom theme design, development, product import, payments and shipping setup, app integrations, speed optimisation, and full QA before launch." },
  { q: "Can you build a Shopify Plus store?",             a: "Absolutely. We're a certified Shopify Plus partner with dozens of Plus builds under our belt, including custom checkout, Scripts, Flow automations, and B2B." },
];

export default function ShopifyStoreDevelopmentPage() {
  return (
    <>
      <PageHero
        badge="Shopify Development"
        title="Custom Shopify Store Development"
        titleHighlight="Built to Convert"
        subtitle="Strategy to launch — custom themes, Shopify Plus, headless storefronts, and everything in between. 700+ stores built. Zero compromise on quality."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      {/* Trust bar */}
      <div className="border-b border-slate-100 bg-white py-5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            Shopify Plus Partner · 700+ Stores Built · $900M+ Client Revenue · 28.5% Avg Conversion Lift
          </p>
        </div>
      </div>

      {/* What you get */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="What's Included"
            title="Custom Shopify Store Development from Strategy to Launch"
            subtitle="Everything you need to go live with a high-converting Shopify store — and nothing you don't."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{d.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-800">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Process"
            title="Our Proven Shopify Store Development Process"
            subtitle="Five clear phases from kickoff to a live, revenue-generating Shopify store."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <span className="text-5xl font-extrabold text-slate-100 leading-none">{p.step}</span>
                <h3 className="mt-2 font-bold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                badge="Why Ecomm Wizards"
                title="Why Brands Choose Us for Shopify Development"
                centered={false}
              />
              <ul className="space-y-3">
                {WHY.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-white">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <a href="/free-shopify-store-audit" className="btn-primary">Get a Free Quote</a>
                <a href="/book-shopify-consultation" className="btn-outline">Book a Call</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["700+","Stores Built"],["$900M+","Revenue Generated"],["8+","Years Experience"],["28.5%","Avg Conversion Lift"]].map(([v, l]) => (
                <div key={l} className="flex flex-col items-center justify-center rounded-2xl bg-slate-700 p-8 text-center text-white">
                  <span className="text-4xl font-extrabold">{v}</span>
                  <span className="mt-2 text-xs text-slate-300">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader badge="FAQs" title="Frequently Asked Questions" />
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

      <CTASection
        heading="Ready to Build Your Dream Shopify Store?"
        subheading="Get a fixed-price quote from our expert team within 24 hours. No commitment required."
        primaryLabel="Get a Free Quote"
      />
    </>
  );
}
