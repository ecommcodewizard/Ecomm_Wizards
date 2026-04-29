import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Hire a Shopify Plus Agency | Contact Ecomm Wizards",
  description: "Ready to scale your store? Hire Ecomm Wizards, a certified Shopify Plus agency. Contact our experts today for a free audit and custom scaling roadmap.",
};

const REASONS = [
  { icon: "⚡", title: "Response within 24 hours",    desc: "We reply fast — no waiting days for a callback." },
  { icon: "💰", title: "Fixed-price quotes",           desc: "No surprise invoices. You know the cost before we start." },
  { icon: "🎯", title: "Zero obligation",              desc: "Get a quote and strategy call with no pressure to commit." },
  { icon: "🏆", title: "Shopify Plus Certified",      desc: "Certified Shopify Plus partner with 700+ stores launched." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get In Touch"
        title="Partner with a Certified"
        titleHighlight="Shopify Plus Agency"
        subtitle="Have a project in mind? We'd love to hear about it. Tell us what you need and we'll get back to you within 24 hours with a custom roadmap."
      />

      {/* Main content */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Contact form */}
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800">Send Us a Message</h2>
              <p className="mt-2 text-slate-500 text-sm">
                Fill in the form and a Shopify expert will be in touch within 24 hours.
              </p>
              <form className="mt-8 space-y-5" action="#" method="POST">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first" className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                    <input id="first" name="first" type="text" required placeholder="Jane"
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800
                        placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                  </div>
                  <div>
                    <label htmlFor="last" className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                    <input id="last" name="last" type="text" required placeholder="Smith"
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800
                        placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input id="email" name="email" type="email" required placeholder="jane@yourstore.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800
                      placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                </div>
                <div>
                  <label htmlFor="store" className="block text-sm font-medium text-slate-700 mb-1.5">Shopify Store URL</label>
                  <input id="store" name="store" type="url" placeholder="https://yourstore.myshopify.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800
                      placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">Service Needed</label>
                  <select id="service" name="service"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800
                      focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200">
                    <option value="">Select a service…</option>
                    <option>Build a New Shopify Store</option>
                    <option>Migrate to Shopify</option>
                    <option>Speed Optimisation</option>
                    <option>CRO / Conversion Optimisation</option>
                    <option>Shopify App Development</option>
                    <option>B2B / Wholesale Setup</option>
                    <option>POS Setup</option>
                    <option>Shopify SEO</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Tell us about your project</label>
                  <textarea id="message" name="message" rows={5} required
                    placeholder="What are you trying to achieve? What's your timeline and budget?"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800
                      placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full py-3 text-sm">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Info panel */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Why Work With Us</h2>
                <p className="mt-2 text-slate-500">
                  We&apos;re a certified Shopify Plus agency with 8+ years of experience building
                  high-converting stores for brands around the world.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {REASONS.map((r) => (
                  <div key={r.title}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                    <span className="text-2xl">{r.icon}</span>
                    <h3 className="mt-2 font-semibold text-slate-800 text-sm">{r.title}</h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>

              {/* Direct contact */}
              <div className="rounded-2xl bg-slate-700 p-7 text-white">
                <h3 className="text-lg font-bold">Prefer a direct conversation?</h3>
                <p className="mt-2 text-slate-300 text-sm">
                  Book a free 30-minute strategy call and speak with a Shopify expert directly.
                  No sales pitch — just honest advice for your store.
                </p>
                <a href="/book-shopify-consultation"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5
                    text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                  </svg>
                  Book a Free Call
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "700+", label: "Stores Built" },
                  { value: "24h",  label: "Response Time" },
                  { value: "8+",   label: "Years Experience" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-slate-100 bg-white p-4 text-center shadow-sm">
                    <p className="text-2xl font-extrabold text-slate-700">{s.value}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Not sure where to start?"
        subheading="Get a free Shopify store audit and we'll show you exactly where you're losing revenue."
        primaryLabel="Claim Free Audit"
        primaryHref="/free-shopify-store-audit"
      />
    </>
  );
}
