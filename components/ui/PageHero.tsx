import Link from "next/link";
import Image from "next/image";

interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  centered?: boolean;
  backgroundImage?: string;
}

export default function PageHero({
  badge, title, titleHighlight, subtitle,
  primaryCta, secondaryCta, centered = true, backgroundImage,
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24"
      style={{ background: "linear-gradient(280deg, rgb(0,0,0) 0%, rgb(18,18,18) 100%)" }}
    >
      {/* background photo */}
      {backgroundImage && (
        <Image src={backgroundImage} alt="" fill className="object-cover opacity-20" priority />
      )}
      {/* dot-grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle, #61ce70 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div
        className={`relative mx-auto px-5 ${centered ? "text-center" : ""}`}
        style={{ maxWidth: "var(--container-max)" }}
      >
        {badge && (
          <span
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-white/80"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "rgba(255,255,255,0.08)",
              borderRadius: "var(--radius-full)",
              padding: "4px 16px",
            }}
          >
            {badge}
          </span>
        )}
        <h1
          className="font-bold text-white"
          style={{ fontSize: "52px", fontWeight: 600, lineHeight: "62px" }}
        >
          {title}
          {titleHighlight && (
            <> <span style={{ color: "var(--color-gold)" }}>{titleHighlight}</span></>
          )}
        </h1>
        <p
          className={`mt-5 text-white/70 ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          style={{ fontSize: "18px", lineHeight: "28px" }}
        >
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className={`mt-8 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all"
                style={{
                  backgroundColor: "var(--color-secondary)",
                  color: "var(--color-white)",
                  borderRadius: "var(--radius-full)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all"
                style={{
                  border: "2px solid rgba(255,255,255,0.3)",
                  borderRadius: "var(--radius-full)",
                }}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
