import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify App Setup and Optimisation | Get More from Your App Stack",
  description: "Expert Shopify app setup, configuration, and optimisation. Get the most from Klaviyo, Recharge, Yotpo, Gorgias, and every app in your stack.",
};

const FEATURES = [
  {
    "icon": "📧",
    "title": "Klaviyo Setup & Flows",
    "desc": "Email and SMS flows, segments, and integrations configured for maximum revenue."
  },
  {
    "icon": "🔄",
    "title": "Recharge / Subscriptions",
    "desc": "Subscription app setup, migration, and optimisation for recurring revenue."
  },
  {
    "icon": "⭐",
    "title": "Reviews & Loyalty",
    "desc": "Yotpo, Okendo, LoyaltyLion — configured and integrated with your storefront."
  },
  {
    "icon": "🛎️",
    "title": "Customer Support",
    "desc": "Gorgias, Zendesk, and Freshdesk — set up with Shopify order data integration."
  },
  {
    "icon": "🔍",
    "title": "Search & Discovery",
    "desc": "Searchanise, Boost Commerce — configured for maximum product discoverability."
  },
  {
    "icon": "📊",
    "title": "Analytics Apps",
    "desc": "Glew, Triple Whale, and attribution tools — set up for accurate reporting."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="App Optimisation"
        title="Get More From Your"
        titleHighlight="Shopify App Stack"
        subtitle="Most merchants use a fraction of what their Shopify apps can do. We configure, optimise, and integrate your app stack to work harder for your store."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify App Setup & Optimisation Services" />
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
        heading="Ready to Get More from Your Shopify Apps?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
