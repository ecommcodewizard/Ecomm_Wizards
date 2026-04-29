import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Speed Optimisation | Sub-2s Load Times | Ecomm Wizards",
  description: "Expert Shopify speed optimisation service. Improve Core Web Vitals, Lighthouse scores, and page load times. Every 1s faster = more revenue.",
};

const FEATURES = [
  {
    "icon": "📊",
    "title": "Speed Audit",
    "desc": "Full benchmarking across mobile and desktop with Lighthouse, WebPageTest, and GTmetrix."
  },
  {
    "icon": "🖼️",
    "title": "Image Optimisation",
    "desc": "Next-gen formats, lazy loading, and responsive images that load instantly."
  },
  {
    "icon": "🧹",
    "title": "Code Optimisation",
    "desc": "Minification, unused CSS removal, render-blocking script elimination."
  },
  {
    "icon": "🔌",
    "title": "App Audit",
    "desc": "Identify and remove apps that are secretly killing your store speed."
  },
  {
    "icon": "⚡",
    "title": "Critical CSS",
    "desc": "Above-the-fold content prioritised for instant visual rendering."
  },
  {
    "icon": "🌐",
    "title": "CDN & Caching",
    "desc": "Proper cache configuration and CDN asset delivery for global performance."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Speed Optimisation"
        title="Shopify Speed Optimisation"
        titleHighlight="Sub-2s Load Times"
        subtitle="Every second of load time costs you conversions. Our speed experts optimise your Shopify store for Core Web Vitals, Lighthouse scores, and real-world performance."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
        backgroundImage="/images/speed-image4-scaled.webp"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify Speed Optimisation Services" />
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
        heading="Ready to Speed Up Your Shopify Store?"
        subheading="Get a free speed audit and see your Core Web Vitals, Lighthouse scores, and quick wins."
      />
    </>
  );
}
