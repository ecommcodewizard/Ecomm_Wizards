import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Migrate to Shopify | Zero Data Loss Migration Service | Ecomm Wizards",
  description: "Migrate to Shopify from any platform — WooCommerce, Magento, BigCommerce, and more. Zero data loss, zero downtime, certified Shopify Plus experts.",
};

const FEATURES = [
  {
    "icon": "📦",
    "title": "Full Product Migration",
    "desc": "All products, variants, images, metafields, and inventory transferred accurately."
  },
  {
    "icon": "👥",
    "title": "Customer & Order History",
    "desc": "Every customer record and order history migrated — no data left behind."
  },
  {
    "icon": "🔍",
    "title": "SEO Preservation",
    "desc": "301 redirects, metadata, and URL structure preserved to protect your organic rankings."
  },
  {
    "icon": "⚡",
    "title": "Zero Downtime Launch",
    "desc": "Your current store stays live until the Shopify store is fully tested and ready."
  },
  {
    "icon": "🔌",
    "title": "App & Integration Setup",
    "desc": "All your key apps, payment gateways, and integrations configured on Shopify."
  },
  {
    "icon": "🎓",
    "title": "Team Training",
    "desc": "Full Shopify Admin training for your team before go-live."
  }
];

const PROCESS = [
  {
    "step": "01",
    "title": "Audit",
    "desc": "Full audit of your current platform — data volume, custom features, and integration requirements."
  },
  {
    "step": "02",
    "title": "Plan",
    "desc": "Custom migration roadmap with timeline, milestones, and risk mitigation."
  },
  {
    "step": "03",
    "title": "Build",
    "desc": "Shopify store setup, theme development, and app configuration."
  },
  {
    "step": "04",
    "title": "Migrate",
    "desc": "Data transfer with full validation and QA — products, customers, orders."
  },
  {
    "step": "05",
    "title": "Launch",
    "desc": "DNS cutover, SEO redirect setup, and 30-day post-launch monitoring."
  }
];

const FAQS = [
  {
    "q": "Will I lose my SEO rankings when I migrate?",
    "a": "Not with us. We implement proper 301 redirects, preserve metadata, and monitor rankings for 30 days post-migration to protect your organic traffic."
  },
  {
    "q": "How long does a Shopify migration take?",
    "a": "Typically 4–12 weeks depending on store size and complexity. We'll give you a precise timeline in your free migration consultation."
  },
  {
    "q": "Can you migrate my order history?",
    "a": "Yes — we migrate all historical orders, customer accounts, and transaction data to Shopify."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="Migrate to Shopify"
        title="Migrate to Shopify."
        titleHighlight="Zero Downtime. Zero Data Loss."
        subtitle="Move your entire ecommerce operation to Shopify safely — products, customers, orders, SEO, and more. Certified Shopify Plus migration experts with 8+ years experience."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="What's Included" title="Our Shopify Migration Services" />
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

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Process" title="How We Deliver Shopify Migration" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p: {step:string;title:string;desc:string}) => (
              <div key={p.step} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                <span className="text-5xl font-extrabold text-slate-100 leading-none">{p.step}</span>
                <h3 className="mt-2 font-bold text-slate-800">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader badge="FAQs" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {FAQS.map((faq: {q:string;a:string}) => (
              <div key={faq.q} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-slate-800">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Make the Move to Shopify?"
        subheading="Book a free migration consultation and get a custom roadmap for your store — no commitment required."
      />
    </>
  );
}
