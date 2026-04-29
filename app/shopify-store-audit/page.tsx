import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Audit | Expert Store Review & Revenue Recovery Report",
  description: "Expert Shopify store audit covering UX, speed, CRO, SEO, checkout, and revenue leaks. Get a prioritised action plan from a certified Shopify Plus agency.",
};

const FEATURES = [
  {
    "icon": "🎨",
    "title": "UX & Design Review",
    "desc": "Homepage, collection, and product page analysis — what's working and what's hurting conversions."
  },
  {
    "icon": "⚡",
    "title": "Speed & Performance",
    "desc": "Core Web Vitals, Lighthouse scores, and specific bottleneck identification."
  },
  {
    "icon": "💳",
    "title": "Checkout Funnel",
    "desc": "Step-by-step checkout analysis to pinpoint exactly where you're losing customers."
  },
  {
    "icon": "🔍",
    "title": "SEO Health",
    "desc": "Technical SEO, metadata, structured data, and content gap analysis."
  },
  {
    "icon": "📱",
    "title": "Mobile Experience",
    "desc": "Detailed mobile UX review — navigation, images, CTAs, and checkout on small screens."
  },
  {
    "icon": "📋",
    "title": "Priority Action Plan",
    "desc": "A ranked list of fixes ordered by estimated revenue impact — not just a list of problems."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Store Audit"
        title="Shopify Store Audit"
        titleHighlight="Find What's Costing You Revenue"
        subtitle="An expert review of your entire Shopify store — UX, speed, SEO, checkout, and conversion funnel. Get a prioritised action plan delivered within 48 hours."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
        backgroundImage="/images/shopify-audit_ecommwizards.png"
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify Store Audit Services" />
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
        heading="Claim Your Free Shopify Store Audit"
        subheading="No commitment. Delivered within 48 hours. Every fix prioritised by revenue impact."
      />
    </>
  );
}
