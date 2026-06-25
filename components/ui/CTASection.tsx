import Link from "next/link";
import Image from "next/image";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  background?: string;
  primaryWhite?: boolean;
  secondaryGradient?: boolean;
}

const BRAND_GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";

export default function CTASection({
  heading = "Ready to grow your Shopify store?",
  subheading = "We'll show you exactly where you're losing revenue and how to fix it. Free audit, no commitment.",
  primaryLabel = "Get a Free Audit",
  primaryHref = "/free-shopify-store-audit",
  secondaryLabel = "Book a Call",
  secondaryHref = "/book-shopify-consultation",
  background = "var(--color-secondary)",
  primaryWhite,
  secondaryGradient,
}: CTASectionProps) {
  return (
    <section className="py-20" style={{ background }}>
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
          {primaryWhite ? (
            <Link
              href={primaryHref}
              className="group inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-transparent bg-white px-7 py-3 text-sm font-semibold text-black transition-all hover:border-gold"
            >
              <span className="bg-clip-text group-hover:text-transparent" style={{ backgroundImage: BRAND_GRADIENT }}>{primaryLabel}</span>
            </Link>
          ) : (
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
          )}
          {secondaryGradient ? (
            <span className="group inline-flex p-[2px] rounded-full" style={{ background: BRAND_GRADIENT }}>
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-semibold transition-all duration-300 group-hover:bg-white"
              >
                <span className="whitespace-nowrap text-white transition-colors duration-300 group-hover:text-black">{secondaryLabel}</span>
                <Image src="/images/arrow vector.png" alt="" width={16} height={16} className="transition-all duration-300 group-hover:brightness-0" />
              </Link>
            </span>
          ) : (
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
          )}
        </div>
      </div>
    </section>
  );
}
