import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Ecomm Wizards Partner Program | Refer & Earn",
  description: "Partner with Ecomm Wizards and earn recurring commissions for every Shopify client you refer. Join our growing network of agencies, freelancers, and consultants.",
};

const FEATURES = [
  {
    "icon": "💰",
    "title": "Recurring Commissions",
    "desc": "Earn a commission for every project your referrals bring to Ecomm Wizards."
  },
  {
    "icon": "🤝",
    "title": "Dedicated Partner Manager",
    "desc": "A named contact to support you, your clients, and every referral you send."
  },
  {
    "icon": "📈",
    "title": "Co-Marketing Opportunities",
    "desc": "Joint webinars, case studies, and content to grow your audience together."
  },
  {
    "icon": "🎓",
    "title": "Shopify Training Access",
    "desc": "Exclusive access to our internal Shopify training resources and playbooks."
  },
  {
    "icon": "🏆",
    "title": "Partner Certification",
    "desc": "Ecomm Wizards partner badge for your website and proposals."
  },
  {
    "icon": "🌐",
    "title": "Partner Directory Listing",
    "desc": "Featured listing on our website to drive inbound clients your way."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Partner Program"
        title="Join the Ecomm Wizards"
        titleHighlight="Partner Program"
        subtitle="Earn recurring commissions for every Shopify client you refer. Join our network of agencies, freelancers, and ecommerce consultants."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Partner Program Services" />
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
        heading="Ready to Become a Partner?"
        subheading="Apply to the program and we'll be in touch within 24 hours."
      />
    </>
  );
}
