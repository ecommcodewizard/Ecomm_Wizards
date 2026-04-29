import Link from "next/link";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  heading = "Ready to grow your Shopify store?",
  subheading = "We'll show you exactly where you're losing revenue and how to fix it. Free audit, no commitment.",
  primaryLabel = "Get a Free Audit",
  primaryHref = "/free-shopify-store-audit",
  secondaryLabel = "Book a Call",
  secondaryHref = "/book-shopify-consultation",
}: CTASectionProps) {
  return (
    <section className="py-20" style={{ backgroundColor: "var(--color-secondary)" }}>
      <div className="mx-auto px-5 text-center" style={{ maxWidth: "768px" }}>
        <h2
          className="font-bold text-white"
          style={{ fontSize: "42px", fontWeight: 600, lineHeight: "52px" }}
        >
          {heading}
        </h2>
        <p className="mt-4 text-white/80" style={{ fontSize: "16px", lineHeight: "1.75" }}>
          {subheading}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold transition-all"
            style={{
              backgroundColor: "var(--color-white)",
              color: "var(--color-secondary)",
              borderRadius: "var(--radius-full)",
              boxShadow: "var(--shadow-xs)",
            }}
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white transition-all"
            style={{
              border: "2px solid rgba(255,255,255,0.4)",
              borderRadius: "var(--radius-full)",
            }}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
