import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Request a Free Shopify Store Audit | Ecomm Wizards",
  description: "Get a free expert Shopify audit covering UX, speed, CRO, SEO, and revenue leaks. No commitment. Response within 24 hours.",
};

const AUDIT_COVERS = [
  { icon: "⚡", title: "Page Speed & Core Web Vitals",  desc: "We benchmark your store speed and identify every performance bottleneck costing you conversions." },
  { icon: "🎨", title: "UX & UI Review",                desc: "Expert review of your homepage, collection, and product pages — what's working and what's killing conversions." },
  { icon: "💳", title: "Checkout Funnel Analysis",      desc: "Step-by-step audit of your cart and checkout flow to identify drop-off points and friction." },
  { icon: "🔍", title: "SEO Health Check",              desc: "Technical SEO, metadata, structured data, and content gaps that are hurting your organic visibility." },
  { icon: "📱", title: "Mobile Experience",              desc: "70%+ of ecommerce traffic is mobile. We audit your mobile UX in detail." },
  { icon: "📊", title: "Revenue Leak Report",           desc: "A prioritised list of fixes ranked by potential revenue impact — with actionable recommendations." },
];

export default function FreeAuditPage() {
  return (
    <>
      <PageHero
        badge="Free Shopify Audit"
        title="We'll Show You Exactly Where"
        titleHighlight="You're Losing Revenue"
        subtitle="Get a free, expert Shopify store audit covering speed, UX, CRO, SEO, and your checkout funnel. No commitment. Delivered within 48 hours."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Form */}
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800">Request Your Free Audit</h2>
              <p className="mt-2 text-slate-500 text-sm">Fill in your details and we'll send your personalised audit report within 48 hours.</p>
              <form className="mt-8 space-y-5" action="#" method="POST">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Your Name</label>
                    <input id="name" name="name" type="text" required placeholder="Jane Smith"
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                    <input id="email" name="email" type="email" required placeholder="jane@store.com"
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                  </div>
                </div>
                <div>
                  <label htmlFor="url" className="block text-sm font-medium text-slate-700 mb-1.5">Shopify Store URL</label>
                  <input id="url" name="url" type="url" required placeholder="https://yourstore.myshopify.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                </div>
                <div>
                  <label htmlFor="revenue" className="block text-sm font-medium text-slate-700 mb-1.5">Monthly Revenue Range</label>
                  <select id="revenue" name="revenue"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200">
                    <option value="">Select range…</option>
                    <option>Under $10K/month</option>
                    <option>$10K – $50K/month</option>
                    <option>$50K – $250K/month</option>
                    <option>$250K – $1M/month</option>
                    <option>$1M+/month</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-slate-700 mb-1.5">Main Goal for Your Store</label>
                  <textarea id="goal" name="goal" rows={4}
                    placeholder="What's the #1 challenge you're facing right now?"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm resize-none focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                </div>
                <button type="submit" className="btn-primary w-full py-3">
                  Get My Free Audit →
                </button>
                <p className="text-center text-xs text-slate-400">No spam. No commitment. Audit delivered within 48 hours.</p>
              </form>
            </div>

            {/* What's covered */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800">What Your Free Audit Covers</h2>
              <p className="mt-2 text-slate-500">Our expert team manually reviews your Shopify store across 6 key areas and delivers a prioritised revenue impact report.</p>
              <div className="mt-8 space-y-5">
                {AUDIT_COVERS.map((a) => (
                  <div key={a.title} className="flex gap-4">
                    <span className="text-2xl shrink-0 mt-0.5">{a.icon}</span>
                    <div>
                      <h3 className="font-semibold text-slate-800">{a.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl bg-slate-700 p-6 text-white">
                <p className="font-bold text-lg">700+ stores audited. $900M+ revenue unlocked.</p>
                <p className="mt-2 text-sm text-slate-300">
                  Our free audit is the same process we use for paid clients — delivered without any obligation to work with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
