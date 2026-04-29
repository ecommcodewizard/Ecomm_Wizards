import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify UX and UI Design | Conversion-Focused Shopify Design Agency",
  description: "Expert Shopify UX and UI design that drives conversions. Wireframes, high-fidelity mockups, and Figma-to-Shopify delivery by a certified Shopify agency.",
};

const FEATURES = [
  {
    "icon": "🗺️",
    "title": "UX Audit & Research",
    "desc": "Heatmaps, session recordings, and expert review to understand how users behave in your store."
  },
  {
    "icon": "✏️",
    "title": "Wireframing",
    "desc": "Structured page layouts before a single pixel of design — ensuring every element has a purpose."
  },
  {
    "icon": "🎨",
    "title": "High-Fidelity Mockups",
    "desc": "Pixel-perfect Figma designs across mobile, tablet, and desktop — ready for developer handover."
  },
  {
    "icon": "💳",
    "title": "Checkout UX",
    "desc": "Optimised checkout flow design to reduce abandonment and increase completed purchases."
  },
  {
    "icon": "📱",
    "title": "Mobile-First Design",
    "desc": "Designed for mobile first — where 70%+ of your traffic comes from."
  },
  {
    "icon": "🔄",
    "title": "Design to Development",
    "desc": "We can take your design all the way to live Shopify — no handoff gaps."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="UX & UI Design"
        title="Shopify UX & UI Design"
        titleHighlight="That Actually Converts"
        subtitle="Beautiful Shopify design is worthless if it doesn't sell. We design with conversion psychology, user behaviour data, and your brand at the centre of every decision."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify UX & UI Design Services" />
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
        heading="Ready for a Shopify Design That Converts?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
