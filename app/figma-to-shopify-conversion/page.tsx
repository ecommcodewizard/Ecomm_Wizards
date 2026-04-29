import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Figma to Shopify Conversion | Pixel-Perfect Design to Production",
  description: "Convert any Figma design to a live, high-converting Shopify store. Pixel-perfect, mobile-first, and optimised for speed. Get a free quote.",
};

const PROCESS = [
  { step: "01", title: "Design Review",    desc: "We analyse your Figma file for completeness, edge cases, and mobile responsiveness." },
  { step: "02", title: "Component Mapping", desc: "We map every design component to Shopify sections, blocks, and Liquid templates." },
  { step: "03", title: "Development",       desc: "Clean, semantic Liquid code — no bloat, no drag-and-drop shortcuts." },
  { step: "04", title: "Responsive QA",    desc: "Mobile, tablet, and desktop testing across all major browsers." },
  { step: "05", title: "Handover",         desc: "Live on your Shopify store with full documentation and training." },
];

const INCLUDES = [
  "Pixel-perfect Liquid theme from your Figma file",
  "Mobile-first responsive development",
  "Shopify 2.0 sections & blocks architecture",
  "Speed-optimised — sub-2s load time target",
  "Animations and micro-interactions",
  "Cross-browser compatibility",
  "Accessibility (WCAG 2.1 AA) compliance",
  "Full source code ownership",
];

export default function FigmaToShopifyPage() {
  return (
    <>
      <PageHero
        badge="Figma to Shopify"
        title="Convert Any Figma Design"
        titleHighlight="Into a Live Shopify Store"
        subtitle="Pixel-perfect, mobile-first Shopify development from your Figma file. We write clean Liquid — no page builders, no bloat, no compromise."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader badge="What's Included" title="Everything in Your Figma, Live in Shopify" centered={false} />
              <ul className="space-y-3">
                {INCLUDES.map((item) => (
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
            <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800">Why Clean Code Matters</h3>
              <p className="mt-3 text-slate-500 leading-relaxed">
                Page builders create bloated themes that slow your store down. We write hand-crafted
                Liquid code that loads fast, ranks well in search, and is easy to maintain — giving
                you a true competitive advantage.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[["&lt;2s","Target load time"],["100","Lighthouse score target"],["Shopify 2.0","Architecture"],["Clean Liquid","No page builders"]].map(([v, l]) => (
                  <div key={l} className="rounded-xl bg-white p-4 text-center shadow-sm border border-slate-100">
                    <p className="text-xl font-bold text-slate-700" dangerouslySetInnerHTML={{ __html: v }} />
                    <p className="mt-1 text-xs text-slate-400">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Process" title="From Figma File to Live Shopify Store" subtitle="Five clear steps — no surprises, no scope creep." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.step} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <span className="text-5xl font-extrabold text-slate-100 leading-none">{p.step}</span>
                <h3 className="mt-2 font-bold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Have a Figma File Ready to Build?" subheading="Get a fixed-price quote within 24 hours. We'll review your file and send a detailed scope of work." primaryLabel="Get a Free Quote" />
    </>
  );
}
