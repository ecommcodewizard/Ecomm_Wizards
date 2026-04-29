import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Book a Shopify Consultation | Free 30-Minute Strategy Call",
  description: "Book a free 30-minute Shopify strategy call with our experts. No sales pitch — just honest, actionable advice for your store.",
};

const WHAT_TO_EXPECT = [
  { icon: "🎯", title: "Store Review",         desc: "We'll look at your current Shopify store and identify the biggest growth opportunities." },
  { icon: "📈", title: "Growth Strategy",      desc: "A custom roadmap covering design, CRO, SEO, and tech improvements specific to your goals." },
  { icon: "💡", title: "Expert Advice",        desc: "Honest, no-fluff recommendations from a Shopify Plus certified expert with 8+ years experience." },
  { icon: "🚀", title: "Next Steps",           desc: "Leave the call knowing exactly what to do next — whether you work with us or not." },
];

const FAQS = [
  { q: "Is the call really free?",              a: "Yes — completely free with no obligation. We believe in earning your trust before asking for your business." },
  { q: "How long is the call?",                 a: "30 minutes. We respect your time — we come prepared and get straight to the value." },
  { q: "Who will I be speaking with?",          a: "A senior Shopify strategist with hands-on experience across 700+ stores." },
  { q: "Do I need to prepare anything?",        a: "Just have your Shopify store URL handy. We'll do the research before the call." },
];

export default function BookCallPage() {
  return (
    <>
      <PageHero
        badge="Book a Free Call"
        title="Speak With a Shopify Expert"
        titleHighlight="In 30 Minutes"
        subtitle="No sales pitch. No pressure. Just 30 minutes of honest, expert advice to help you grow your Shopify store. Available Mon–Fri."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Booking form */}
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-800">Book Your Free Call</h2>
              <p className="mt-2 text-sm text-slate-500">Fill in the form and we&apos;ll confirm a time within a few hours.</p>
              <form className="mt-8 space-y-5" action="#" method="POST">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name</label>
                    <input type="text" required placeholder="Jane"
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name</label>
                    <input type="text" required placeholder="Smith"
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input type="email" required placeholder="jane@yourstore.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Shopify Store URL</label>
                  <input type="url" placeholder="https://yourstore.myshopify.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">What do you need help with?</label>
                  <select className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200">
                    <option value="">Select a topic…</option>
                    <option>Build / Redesign my Shopify store</option>
                    <option>Migrate to Shopify from another platform</option>
                    <option>Improve conversions / CRO</option>
                    <option>Shopify App Development</option>
                    <option>B2B / Wholesale setup</option>
                    <option>POS setup</option>
                    <option>SEO strategy</option>
                    <option>General growth strategy</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred call times</label>
                  <select className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200">
                    <option>Morning (9am–12pm)</option>
                    <option>Afternoon (12pm–5pm)</option>
                    <option>Any time</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Anything else we should know?</label>
                  <textarea rows={3} placeholder="Tell us about your goals, challenges, or timeline…"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm resize-none focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                </div>
                <button type="submit" className="btn-primary w-full py-3">
                  Book My Free Call →
                </button>
                <p className="text-center text-xs text-slate-400">No commitment. No sales pitch. Just expert advice.</p>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">What to Expect on Your Call</h2>
                <p className="mt-2 text-slate-500">A senior Shopify strategist will review your store and growth goals — and give you a clear action plan.</p>
              </div>
              <div className="space-y-5">
                {WHAT_TO_EXPECT.map((w) => (
                  <div key={w.title} className="flex gap-4">
                    <span className="text-2xl shrink-0">{w.icon}</span>
                    <div>
                      <h3 className="font-semibold text-slate-800">{w.title}</h3>
                      <p className="mt-1 text-sm text-slate-500 leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-slate-700 p-7 text-white">
                <p className="text-lg font-bold">700+ stores. $900M+ revenue. 8+ years.</p>
                <p className="mt-2 text-sm text-slate-300">
                  You&apos;re not just booking a call — you&apos;re getting access to the same team that has
                  helped hundreds of brands scale their Shopify stores profitably.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-slate-800">Common Questions</h3>
                {FAQS.map((faq) => (
                  <div key={faq.q} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-slate-800 text-sm">{faq.q}</h4>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
