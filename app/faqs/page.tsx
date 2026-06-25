import type { Metadata } from "next";
import { og } from "@/lib/og";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import FaqCategories from "@/components/FaqCategories";
import { ALL_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  alternates: { canonical: "https://ecommwizards.com/faqs" },
  openGraph: og("/faqs", "Shopify Agency FAQs"),
  title: { absolute: "Shopify Agency FAQs: Pricing, Migrations, SEO & Support | Ecomm Wizards" },
  description:
    "Answers to common Shopify questions: how much a store costs, how long a build takes, migrations, Shopify Plus, SEO, B2B, and ongoing support from Ecomm Wizards.",
  keywords: [
    "shopify agency faq",
    "how much does a shopify store cost",
    "how long does it take to build a shopify store",
    "shopify migration cost",
    "shopify development agency",
    "how much does shopify plus cost",
    "shopify seo",
    "is shopify good for b2b",
  ],
};

// FAQPage structured data, built from the same data the page renders, so the
// markup never drifts from the visible questions and answers.
const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "FAQs", item: "https://ecommwizards.com/faqs" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />

      <PageHero
        badge="FAQs"
        title="Frequently Asked"
        titleHighlight="Questions"
        subtitle="Everything you want to know about working with Ecomm Wizards: pricing, timelines, migrations, SEO, and support. Jump to a topic below."
        primaryCta={{ label: "Get a Free Quote", href: "/contact-shopify-agency" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
        background="#000"
        paddingY={60}
        highlightGradient
        secondaryGradient
        primaryWhite
      />

      <section style={{ background: "#fff", padding: "64px 20px 72px" }}>
        <FaqCategories />
      </section>

      <CTASection
        heading="Still Have Questions?"
        subheading="Book a free 30-minute call with one of our Shopify experts. No sales pitch, just answers."
        background="#000"
        primaryWhite
        secondaryGradient
      />
    </>
  );
}
