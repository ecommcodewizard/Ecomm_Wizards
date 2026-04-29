import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Bulk Shopify Development Hours | On-Demand Dev Team | Ecomm Wizards",
  description: "Buy bulk Shopify development hours and get on-demand access to our expert team. Theme customisation, bug fixes, new features, and more — on your schedule.",
};

const FEATURES = [
  {
    "icon": "🎨",
    "title": "Theme Customisation",
    "desc": "Any change to your Shopify theme — layout, colours, fonts, sections, and blocks."
  },
  {
    "icon": "🔧",
    "title": "Bug Fixes",
    "desc": "Fast resolution of any Shopify theme or app issue — same-day turnaround available."
  },
  {
    "icon": "🔌",
    "title": "App Integration",
    "desc": "Connect new apps to your theme or build custom integrations between your tools."
  },
  {
    "icon": "⚡",
    "title": "Performance Fixes",
    "desc": "Targeted speed improvements to specific pages or components."
  },
  {
    "icon": "📱",
    "title": "Mobile Fixes",
    "desc": "Mobile-specific layout fixes and responsive design improvements."
  },
  {
    "icon": "🛠️",
    "title": "Feature Development",
    "desc": "New features, custom sections, and functionality added to your existing store."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Bulk Hours"
        title="On-Demand Shopify Dev Hours"
        titleHighlight="No Retainer Required"
        subtitle="Buy a block of Shopify development hours and use them whenever you need. Theme customisations, bug fixes, new features, and app integrations — on your schedule."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Bulk Shopify Dev Hours Services" />
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
        heading="Need a Shopify Developer On-Demand?"
        subheading="Get a quote for bulk development hours — fixed price, no commitment, use when you need."
      />
    </>
  );
}
