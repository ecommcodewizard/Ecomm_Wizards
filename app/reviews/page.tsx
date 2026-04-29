import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Ecomm Wizards Reviews | Client Testimonials & Case Studies",
  description: "Read what 700+ Shopify merchants say about working with Ecomm Wizards. Real reviews, real results, real revenue growth.",
};

export default function Page() {
  return (
    <>
      <PageHero
        badge="Client Reviews"
        title="What Our Clients Say"
        titleHighlight="About Ecomm Wizards"
        subtitle="700+ Shopify stores built. $900M+ in client revenue generated. 8+ years of compounding results — read what our clients say."
        primaryCta={{ label: "Get a Free Quote", href: "/free-shopify-store-audit" }}
        secondaryCta={{ label: "Book a Call", href: "/book-shopify-consultation" }}
      />

      <CTASection
        heading="Ready to Join Our Happy Clients?"
        subheading="Book a free consultation and take the first step towards a high-converting Shopify store."
      />
    </>
  );
}
