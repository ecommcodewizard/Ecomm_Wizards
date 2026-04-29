import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "FAQs | Ecomm Wizards Shopify Agency",
  description: "Frequently asked questions about working with Ecomm Wizards. Shopify development, pricing, timelines, and more.",
};

const FAQS = [
  {
    "q": "How much does a custom Shopify store cost?",
    "a": "Custom builds range from $5K–$50K+ depending on scope and complexity. We provide fixed-price quotes — no surprises. Contact us for a free estimate."
  },
  {
    "q": "How long does a Shopify project take?",
    "a": "A standard build takes 4–8 weeks. Migrations 4–12 weeks. Enterprise projects 8–16 weeks. We'll give you a precise timeline in your free consultation."
  },
  {
    "q": "Do you offer ongoing Shopify support?",
    "a": "Yes — monthly support plans covering bug fixes, updates, performance monitoring, and on-demand development hours."
  },
  {
    "q": "Are you a certified Shopify Plus Partner?",
    "a": "Yes. We're a certified Shopify Plus Partner with 8+ years experience and 700+ stores built."
  },
  {
    "q": "What platforms can you migrate from?",
    "a": "Any platform — WooCommerce, BigCommerce, Magento, Salesforce, Prestashop, Amazon, and custom platforms."
  },
  {
    "q": "Do you do free audits?",
    "a": "Yes — we offer free store audits covering speed, UX, SEO, and conversion rate. No commitment required."
  },
  {
    "q": "What industries do you specialise in?",
    "a": "We work across all ecommerce verticals — fashion, beauty, health, food, electronics, B2B wholesale, and more."
  },
  {
    "q": "Can I see examples of your work?",
    "a": "Yes — contact us and we'll share relevant case studies and examples from your niche."
  }
];

export default function Page() {
  return (
    <>
      <PageHero
        badge="FAQs"
        title="Frequently Asked"
        titleHighlight="Questions"
        subtitle="Everything you want to know about working with Ecomm Wizards — from pricing and timelines to process and results."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

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
        heading="Still Have Questions?"
        subheading="Book a free 30-minute call with one of our Shopify experts — no sales pitch, just answers."
      />
    </>
  );
}
