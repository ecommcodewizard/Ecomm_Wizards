import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Landing Page Design | High-Converting Campaign Pages",
  description: "Custom Shopify landing pages designed and built to convert — product launches, seasonal campaigns, ad traffic, and more.",
};

const FEATURES = [
  {
    "icon": "🎯",
    "title": "Conversion-First Design",
    "desc": "Every element placed to move visitors towards a purchase — backed by CRO best practices."
  },
  {
    "icon": "📱",
    "title": "Mobile-Optimised",
    "desc": "Landing pages built mobile-first — where the majority of ad traffic converts."
  },
  {
    "icon": "⚡",
    "title": "Speed Optimised",
    "desc": "Fast-loading pages that don't let paid ad spend go to waste on slow load times."
  },
  {
    "icon": "🧪",
    "title": "A/B Test Ready",
    "desc": "Landing pages structured for easy A/B testing and iterative improvement."
  },
  {
    "icon": "🛍️",
    "title": "Direct to Checkout",
    "desc": "Streamlined paths from landing page to purchase — minimal friction, maximum sales."
  },
  {
    "icon": "📊",
    "title": "Analytics Integration",
    "desc": "Full tracking setup — GA4, Meta Pixel, TikTok Pixel, and conversion events."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Landing Pages"
        title="Shopify Landing Pages"
        titleHighlight="Built to Convert"
        subtitle="High-converting campaign pages for product launches, paid ads, seasonal promotions, and lead capture — designed and built by Shopify conversion experts."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify Landing Page Design Services" />
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
        heading="Ready to Build a Landing Page That Converts?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
