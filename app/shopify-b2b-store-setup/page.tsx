import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Plus B2B Solutions | Wholesale & D2C From One Platform",
  description: "Run wholesale and D2C from one powerful Shopify Plus platform. Custom pricing portals, ERP sync, and B2B-specific features built by certified Shopify Plus experts.",
};

const FEATURES = [
  { icon: "💳", title: "Custom Pricing Portals",    desc: "Net terms, customer-specific pricing, volume discounts, and quote requests — all automated." },
  { icon: "🔄", title: "ERP Sync for B2B",          desc: "Real-time sync with NetSuite, SAP, and other ERPs. Accurate inventory and order data, always." },
  { icon: "🏪", title: "B2B Store Setup",            desc: "Full setup of Shopify B2B — customer accounts, company profiles, and wholesale catalogues." },
  { icon: "📦", title: "Wholesale Integrations",    desc: "Connect to distributors, third-party wholesale platforms, and fulfilment networks." },
  { icon: "📱", title: "Custom B2B Apps",            desc: "Purpose-built Shopify apps for approval workflows, rep portals, and account management." },
  { icon: "🔀", title: "B2B Migrations",             desc: "Move your wholesale operation from any platform to Shopify B2B without losing data or orders." },
];

const BENEFITS = [
  { label: "Unified Platform",   desc: "One Shopify store for D2C and wholesale — no more maintaining two separate systems." },
  { label: "Faster Checkout",    desc: "Buyers can reorder in seconds with saved addresses, payment terms, and order history." },
  { label: "Scalable Pricing",   desc: "Hundreds of price lists, customer-specific discounts, and currency support out of the box." },
  { label: "Better Analytics",   desc: "Consolidated reporting across all channels — retail, wholesale, and online in one dashboard." },
];

const PROCESS = [
  { step: "01", title: "Discovery",    desc: "We map your wholesale flows, pricing rules, and ERP requirements." },
  { step: "02", title: "Architecture", desc: "Design your Shopify B2B structure — companies, locations, payment terms." },
  { step: "03", title: "Build",        desc: "Custom theme, B2B portal, app integrations, and ERP connections." },
  { step: "04", title: "Migrate",      desc: "Transfer all customer accounts, order history, and product catalogues." },
  { step: "05", title: "Launch",       desc: "Zero-downtime go-live with team training and full documentation." },
];

export default function B2BPage() {
  return (
    <>
      <PageHero
        badge="Shopify B2B"
        title="Run Wholesale & D2C From"
        titleHighlight="One Powerful Platform"
        subtitle="Shopify Plus B2B solutions built for brands ready to scale wholesale without the complexity. Custom pricing, ERP sync, and branded buyer portals — all in one place."
        primaryCta={{ label: "Schedule a B2B Consultation", href: "/book-shopify-consultation" }}
        secondaryCta={{ label: "Get a Free Audit", href: "/free-shopify-store-audit" }}
        backgroundImage="/images/B2B-hero-image.webp"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="B2B Features"
            title="Every Feature Your Wholesale Shopify Store Needs"
            subtitle="Built and configured by certified Shopify Plus experts who understand wholesale at scale."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
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
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                badge="Why B2B Shopify?"
                title="Stop Managing Two Businesses Separately"
                subtitle="Smart wholesalers are moving to Shopify B2B — here's why."
                centered={false}
              />
              <div className="space-y-5">
                {BENEFITS.map((b) => (
                  <div key={b.label} className="flex gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-700 text-white">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800">{b.label}</p>
                      <p className="mt-0.5 text-sm text-slate-500">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-slate-700 p-10 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-6">Real Results</p>
              <div className="space-y-6">
                {[
                  { label: "Revenue increase for Fitness Brand",  value: "+38%" },
                  { label: "Order processing time reduction",      value: "-60%" },
                  { label: "Wholesale accounts onboarded in year 1", value: "500+" },
                ].map((r) => (
                  <div key={r.label}>
                    <p className="text-4xl font-extrabold">{r.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Process" title="How We Build Your Shopify B2B Operation" subtitle="From strategy to scale — a proven 5-step process." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.step} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <span className="text-5xl font-extrabold text-slate-100 leading-none">{p.step}</span>
                <h3 className="mt-2 font-bold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Join 1,000+ Brands Seeing Real B2B Results"
        subheading="Book a free B2B consultation and we'll map out your wholesale Shopify strategy — no commitment required."
        primaryLabel="Schedule a B2B Consultation"
        primaryHref="/book-shopify-consultation"
      />
    </>
  );
}
