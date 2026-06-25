import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { og } from "@/lib/og";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import ServiceCategories from "@/components/ServiceCategories";
import OurWorkSection from "@/components/sections/OurWorkSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import { SERVICE_CATEGORIES, SERVICE_STATS, OUR_WORK } from "@/lib/services";

export const metadata: Metadata = {
  alternates: { canonical: "https://ecommwizards.com/services" },
  openGraph: og("/services", "Shopify Services"),
  title: { absolute: "Shopify Services: Development, Migration, CRO, SEO, Apps & B2B | Ecomm Wizards" },
  description:
    "Full-service Shopify agency: store builds, migrations, CRO, SEO, apps, B2B, and POS. One team behind 700+ stores and $900M+ in revenue. Get a free quote.",
  keywords: [
    "shopify services",
    "shopify agency",
    "shopify development services",
    "shopify migration services",
    "shopify cro agency",
    "shopify seo services",
    "shopify plus agency",
    "shopify app development",
  ],
};

const SERVICE_FAQS = [
  { question: "Which service is right for my store?", answer: "If you are not sure, start with a free store audit. We review your store and recommend the highest-impact services for your goals and budget. You can also book a call and we will point you in the right direction." },
  { question: "Do you offer one-off projects or ongoing work?", answer: "Both. Most clients start with a fixed-price project like a build, migration, or audit, then move to a monthly plan for ongoing optimization, support, and growth." },
  { question: "How much do your services cost?", answer: "Projects are fixed-price and scoped up front, so there are no surprises. Most builds run $5,000 to $50,000+ depending on complexity, and ongoing plans are billed monthly. The fastest way to an exact number is a free quote." },
  { question: "Can you handle my whole store, end to end?", answer: "Yes. We are a full-service team across design, development, migration, CRO, SEO, apps, B2B, and POS, so one partner can take you from build to growth without handoffs." },
  { question: "How soon can you start?", answer: "Usually within one to two weeks of agreeing scope. Book a call or request a quote and we will share current availability and a realistic timeline." },
];

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ecommwizards.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ecommwizards.com/services" },
  ],
};

const ITEMLIST_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Shopify Services by Ecomm Wizards",
  itemListElement: SERVICE_CATEGORIES.flatMap((c) => c.items).map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: `https://ecommwizards.com${s.href}`,
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_JSONLD) }} />

      <PageHero
        badge="Our Services"
        title="Shopify Services That"
        titleHighlight="Grow Revenue"
        subtitle="Design, build, migrate, optimize, and scale your store. One full-service team behind 700+ stores and $900M+ in revenue."
        primaryCta={{ label: "Get a Free Quote", href: "/contact-shopify-agency" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
        background="#000"
        paddingY={64}
        highlightGradient
        primaryWhite
        secondaryGradient
      />

      {/* Trust strip (continues the black hero) */}
      <section style={{ background: "#000", padding: "0 20px 56px" }} aria-label="Trusted Shopify agency">
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {SERVICE_STATS.map((s) => (
              <div key={s.label}>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: 38, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)", margin: "8px 0 0" }}>{s.label}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "26px 40px", marginTop: 40, opacity: 0.8 }}>
            {[1, 2, 3, 4, 5].map((n) => (
              <Image key={n} src={`/images/main-hero-logo-${n}.webp`} alt="" width={150} height={44} style={{ height: 32, width: "auto", objectFit: "contain" }} />
            ))}
          </div>
        </div>
      </section>

      {/* Services by category */}
      <section style={{ background: "#fff", padding: "64px 20px 16px" }}>
        <SectionHeader
          badge="What we do"
          title="Everything you need to build, grow, and scale on Shopify"
          subtitle="Pick a category to explore, or get a free quote and we will map the right services to your goals."
        />
        <div style={{ marginTop: 8 }}>
          <ServiceCategories />
        </div>
      </section>

      <OurWorkSection
        caseStudies={OUR_WORK}
        heading="Our Work"
        subheading="Real Shopify stores, real results. A few of the brands we have helped grow."
      />

      <ProcessSection />

      <SocialProofSection />

      <FAQSection title="Working With Ecomm Wizards" faqs={SERVICE_FAQS} />
      <div style={{ background: "#fff", textAlign: "center", padding: "0 20px 56px" }}>
        <Link href="/faqs" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 600, color: "#2A9555", textDecoration: "none" }}>
          See all FAQs
          <svg width="15" height="12" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </Link>
      </div>

      <CTASection
        heading="Not sure which service you need?"
        subheading="Get a free audit or book a call. We will recommend the right path for your goals and budget."
        background="#000"
        primaryWhite
        secondaryGradient
      />
    </>
  );
}
