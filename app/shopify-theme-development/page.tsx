import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Theme Development | Custom Liquid Themes | Ecomm Wizards",
  description: "Custom Shopify theme development built for speed, conversions, and your unique brand. Shopify 2.0 architecture. Mobile-first. Zero page builders.",
};

const FEATURES = [
  {
    "icon": "🎨",
    "title": "Fully Custom Design",
    "desc": "Your unique brand identity translated into a bespoke Shopify theme — not a customised template."
  },
  {
    "icon": "📱",
    "title": "Mobile-First",
    "desc": "Built mobile-first by default — optimal experience on every screen size."
  },
  {
    "icon": "⚡",
    "title": "Speed Optimised",
    "desc": "Lean, clean Liquid code. No bloat. Target: 90+ Lighthouse score out of the box."
  },
  {
    "icon": "🧩",
    "title": "Shopify 2.0 Sections",
    "desc": "Full Sections Everywhere architecture — flexible, content-editable by your team."
  },
  {
    "icon": "♿",
    "title": "Accessibility Compliant",
    "desc": "WCAG 2.1 AA compliance built in from day one."
  },
  {
    "icon": "🔌",
    "title": "App-Ready Architecture",
    "desc": "Structured for seamless integration with your key Shopify apps from the start."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Theme Development"
        title="Custom Shopify Themes"
        titleHighlight="Built to Convert"
        subtitle="Bespoke Liquid themes engineered from scratch — no templates, no page builders, no compromise. Shopify 2.0 architecture, mobile-first, and built for speed."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify Theme Development Services" />
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
        heading="Ready for a Custom Shopify Theme?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
