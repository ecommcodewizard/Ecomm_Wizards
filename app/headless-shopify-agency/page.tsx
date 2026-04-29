import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Headless Shopify Agency | Next.js & Hydrogen Storefronts",
  description: "Build a blazing-fast headless Shopify storefront with Next.js or Hydrogen. Certified Shopify Plus partner. Sub-second load times. Maximum flexibility.",
};

const FEATURES = [
  {
    "icon": "⚡",
    "title": "Sub-Second Load Times",
    "desc": "Server-side rendering and edge delivery that makes your store the fastest in your niche."
  },
  {
    "icon": "⚛️",
    "title": "Next.js Storefronts",
    "desc": "Production-grade React storefronts powered by the Shopify Storefront API."
  },
  {
    "icon": "🌿",
    "title": "Shopify Hydrogen",
    "desc": "Shopify's official React framework — built for headless commerce from the ground up."
  },
  {
    "icon": "🔗",
    "title": "Omnichannel Commerce",
    "desc": "One Shopify backend powering web, mobile app, kiosk, and in-store experiences."
  },
  {
    "icon": "🎨",
    "title": "Unlimited UI Flexibility",
    "desc": "No Liquid constraints — build any user experience your brand vision demands."
  },
  {
    "icon": "📦",
    "title": "Shopify Admin Intact",
    "desc": "Your team still uses familiar Shopify Admin — only the frontend changes."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Headless Shopify"
        title="Headless Shopify."
        titleHighlight="Unlimited Frontend Freedom."
        subtitle="Decouple your Shopify backend from your frontend and unlock sub-second performance, custom UI, and omnichannel experiences — built by certified headless experts."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Headless Shopify Services" />
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
        heading="Ready to Go Headless?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
