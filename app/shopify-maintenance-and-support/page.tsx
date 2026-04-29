import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Shopify Maintenance and Support | Ongoing Shopify Care Plans",
  description: "Ongoing Shopify maintenance, support, and development from a certified Shopify Plus agency. Monthly care plans for stores that can't afford downtime.",
};

const FEATURES = [
  {
    "icon": "🔧",
    "title": "Bug Fixes & Updates",
    "desc": "Same-day bug fixes and app update management — no issue left unresolved."
  },
  {
    "icon": "⚡",
    "title": "Performance Monitoring",
    "desc": "Ongoing speed and Core Web Vitals monitoring with proactive optimisation."
  },
  {
    "icon": "🔒",
    "title": "Security & Theme Updates",
    "desc": "Shopify theme updates applied safely with full testing before deployment."
  },
  {
    "icon": "🛠️",
    "title": "On-Demand Development",
    "desc": "Monthly development hours for new features, customisations, and improvements."
  },
  {
    "icon": "📊",
    "title": "Monthly Reporting",
    "desc": "Comprehensive monthly report covering performance, fixes, and recommendations."
  },
  {
    "icon": "🤝",
    "title": "Dedicated Account Manager",
    "desc": "A named account manager who knows your store inside out."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Ongoing Support"
        title="Ongoing Shopify Maintenance"
        titleHighlight="& Expert Support"
        subtitle="Your Shopify store never sleeps — and neither does our support team. Monthly care plans covering updates, bug fixes, performance monitoring, and on-demand development."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify Maintenance & Support Services" />
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
        heading="Looking for Reliable Shopify Support?"
        subheading="Get a free consultation and we'll recommend the right care plan for your store."
      />
    </>
  );
}
