import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Mobile App Development | iOS & Android Shopping Apps",
  description: "Turn your Shopify store into a branded mobile app for iOS and Android. Push notifications, loyalty, and native shopping experience for your customers.",
};

const FEATURES = [
  {
    "icon": "📱",
    "title": "Native iOS & Android",
    "desc": "Purpose-built mobile apps using React Native — not wrapped web views."
  },
  {
    "icon": "🔔",
    "title": "Push Notifications",
    "desc": "Direct customer communication — abandoned cart, new products, and personalised offers."
  },
  {
    "icon": "🛒",
    "title": "Shopify Sync",
    "desc": "Real-time product, inventory, and order sync from your existing Shopify store."
  },
  {
    "icon": "🎁",
    "title": "In-App Loyalty",
    "desc": "Gamified loyalty programmes and rewards built directly into the app experience."
  },
  {
    "icon": "💳",
    "title": "Native Checkout",
    "desc": "Streamlined checkout with Apple Pay, Google Pay, and saved payment methods."
  },
  {
    "icon": "📊",
    "title": "App Analytics",
    "desc": "Full in-app behaviour tracking and revenue attribution for mobile commerce."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Mobile Apps"
        title="Turn Your Shopify Store"
        titleHighlight="Into a Mobile App"
        subtitle="A branded iOS and Android mobile app connected directly to your Shopify store. Push notifications, in-app loyalty, and a native shopping experience that increases LTV."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify Mobile App Development Services" />
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
        heading="Ready to Launch Your Shopify Mobile App?"
        subheading="Get a free consultation from our Shopify experts. Response within 24 hours."
      />
    </>
  );
}
