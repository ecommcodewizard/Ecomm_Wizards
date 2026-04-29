import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Our Shopify Partners | Ecomm Wizards",
  description: "Ecomm Wizards works with the world's best Shopify apps and service providers. See our trusted partner network.",
};

export default function Page() {
  return (
    <>
      <PageHero
        badge="Valued Partners"
        title="Our Valued"
        titleHighlight="Partners"
        subtitle="We work with the best tools and platforms in ecommerce — ensuring every Shopify store we build is powered by the right technology stack."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <CTASection
        heading="Want to Become a Partner?"
        subheading="Join our partner program and earn commissions on every Shopify referral."
      />
    </>
  );
}
