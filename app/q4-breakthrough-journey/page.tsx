import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Q4 Breakthrough Journey | Shopify Q4 Preparation | Ecomm Wizards",
  description: "Prepare your Shopify store for Q4 — Black Friday, Cyber Monday, and holiday season. Speed, CRO, and conversion optimisation to maximise revenue.",
};

const PHASES = [
  { icon: "🔍", title: "Store Audit",         desc: "A complete review of your Shopify store — speed, UX, checkout, and conversion funnel. We identify everything that could cost you revenue in Q4." },
  { icon: "⚡", title: "Speed & Performance", desc: "Optimise for the traffic surge. Sub-2s load times, Core Web Vitals improvements, and server scaling preparation." },
  { icon: "🎨", title: "BFCM Design",         desc: "Custom Black Friday and Cyber Monday landing pages, banners, and promotional components designed and built to convert at scale." },
  { icon: "💳", title: "Checkout Optimisation", desc: "Every friction point in your checkout removed before high-traffic season. Express checkout, gift wrapping, upsells, and more." },
  { icon: "📧", title: "Email & SMS Setup",   desc: "Pre-Black Friday campaigns, abandoned cart flows, and post-purchase sequences built in Klaviyo and ready to fire." },
  { icon: "📊", title: "Analytics & Tracking", desc: "Full tracking setup so you know exactly which channels and products drove Q4 revenue — with real-time dashboards." },
];

export default function Q4Page() {
  return (
    <>
      <PageHero
        badge="Q4 Breakthrough"
        title="Is Your Shopify Store Ready"
        titleHighlight="for Q4?"
        subtitle="Black Friday. Cyber Monday. Holiday season. The 90 days that can make or break your entire year. We prepare your Shopify store to maximise every sale."
        primaryCta={{ label: "Start Q4 Preparation", href: "/book-shopify-consultation" }}
        secondaryCta={{ label: "Get a Free Audit", href: "/free-shopify-store-audit" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">The Programme</span>
            <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">The Q4 Breakthrough Journey</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-500">Six phases designed to get your Shopify store to peak performance before Q4 hits.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PHASES.map((p, i) => (
              <div key={p.title} className="relative rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-2xl">{p.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Don't Leave Q4 to Chance"
        subheading="Book your Q4 strategy session now and give your store the best shot at a record-breaking quarter."
        primaryLabel="Start Q4 Preparation"
        primaryHref="/book-shopify-consultation"
      />
    </>
  );
}
