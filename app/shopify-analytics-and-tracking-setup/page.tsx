import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Analytics and Tracking Setup | GA4, GTM, Pixels",
  description: "Full Shopify analytics setup — Google Analytics 4, Google Tag Manager, Meta Pixel, TikTok Pixel, and custom conversion tracking. Accurate data for better decisions.",
};

const FEATURES = [
  {
    "icon": "📊",
    "title": "Google Analytics 4 (GA4)",
    "desc": "Full GA4 implementation with enhanced ecommerce events, funnels, and revenue reporting."
  },
  {
    "icon": "🏷️",
    "title": "Google Tag Manager",
    "desc": "GTM setup with all conversion tags, remarketing pixels, and custom events."
  },
  {
    "icon": "📘",
    "title": "Meta Pixel",
    "desc": "Facebook/Instagram Pixel with server-side API for accurate conversion tracking post-iOS 14."
  },
  {
    "icon": "🎵",
    "title": "TikTok & Other Pixels",
    "desc": "TikTok, Pinterest, Snapchat, and any other platform pixel configured and validated."
  },
  {
    "icon": "🎯",
    "title": "Conversion Tracking",
    "desc": "Purchase, add-to-cart, checkout, and custom funnel events tracked accurately."
  },
  {
    "icon": "📈",
    "title": "Revenue Attribution",
    "desc": "Multi-touch attribution reporting so you know which channels actually drive revenue."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Analytics & Tracking"
        title="Shopify Analytics"
        titleHighlight="& Tracking Done Right"
        subtitle="Make decisions based on accurate data — not gut feel. Full GA4, GTM, and ad pixel setup for Shopify with conversion event tracking and revenue attribution."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify Analytics & Tracking Setup Services" />
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
        heading="Ready for Accurate Shopify Analytics?"
        subheading="Get a free analytics audit and we'll show you exactly what tracking you're missing."
      />
    </>
  );
}
