import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Liquid to Shopify Hydrogen | Headless Shopify Migration",
  description: "Modernise your Shopify store by migrating from Liquid to Shopify Hydrogen and Next.js. Sub-second load times and full headless flexibility.",
};

const FEATURES = [
  {
    "icon": "⚡",
    "title": "Sub-Second Performance",
    "desc": "Hydrogen + Remix delivers the fastest possible storefront — Core Web Vitals maxed out."
  },
  {
    "icon": "⚛️",
    "title": "React-Powered Frontend",
    "desc": "Full component-based architecture with unlimited UI flexibility."
  },
  {
    "icon": "🔗",
    "title": "Shopify Storefront API",
    "desc": "Native integration with Shopify's Storefront API for real-time cart, products, and checkout."
  },
  {
    "icon": "🌐",
    "title": "Global CDN Delivery",
    "desc": "Oxygen hosting with edge delivery — fast everywhere in the world."
  },
  {
    "icon": "🔀",
    "title": "Existing Data Preserved",
    "desc": "All products, collections, customers, and metafields remain in Shopify Admin."
  },
  {
    "icon": "📱",
    "title": "Mobile-First Architecture",
    "desc": "Designed and built mobile-first — optimal performance on every device."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Liquid → Hydrogen"
        title="Modernise Your Shopify Store."
        titleHighlight="Go Headless with Hydrogen."
        subtitle="Migrate from a Liquid theme to Shopify Hydrogen — React-based, sub-second load times, and complete frontend flexibility. Built for brands that demand the best."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
        backgroundImage="/images/Hero_Section-hydrogen-scaled.webp"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Liquid to Shopify Hydrogen Migration Services" />
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
        heading="Ready to Go Headless with Shopify Hydrogen?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
