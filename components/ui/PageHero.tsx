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
  background?: string;
  paddingY?: number;
  paddingTop?: number;
  paddingBottom?: number;
  highlightGradient?: boolean;
  secondaryGradient?: boolean;
  primaryWhite?: boolean;
  subtitleColor?: string;
}

export default function PageHero({
  badge, title, titleHighlight, subtitle,
  primaryCta, secondaryCta, centered = true, backgroundImage,
  background = "linear-gradient(280deg, rgb(0,0,0) 0%, rgb(18,18,18) 100%)",
  paddingY, paddingTop, paddingBottom, highlightGradient, secondaryGradient, primaryWhite,
  subtitleColor = "rgba(255,255,255,0.7)",
}: PageHeroProps) {
  const padTop = paddingTop ?? paddingY;
  const padBottom = paddingBottom ?? paddingY;
  const customPad = padTop != null || padBottom != null;
  return (
    <section
      className={`relative overflow-hidden ${customPad ? "" : "pt-24 pb-20 sm:pt-28 sm:pb-24"}`}
      style={{ background, ...(customPad ? { paddingTop: padTop ?? 0, paddingBottom: padBottom ?? 0 } : {}) }}
    >
      {/* background photo */}
      {backgroundImage && (
        <Image src={backgroundImage} alt="" fill className="object-cover opacity-20" priority quality={55} />
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
            <> <span
              style={highlightGradient ? {
                background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              } : { color: "var(--color-gold)" }}
            >{titleHighlight}</span></>
          )}
        </h1>
        <p
          className={`mt-5 ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          style={{ fontSize: "18px", lineHeight: "28px", color: subtitleColor }}
        >
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className={`mt-8 flex flex-wrap gap-3 ${centered ? "justify-center" : ""}`}>
            {primaryCta && (primaryWhite ? (
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-transparent bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:border-gold"
              >
                <span className="bg-clip-text group-hover:text-transparent" style={{ backgroundImage: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}>{primaryCta.label}</span>
              </Link>
            ) : (
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
            ))}
            {secondaryCta && (secondaryGradient ? (
              <span
                className="group inline-flex p-[2px] rounded-full"
                style={{ background: "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)" }}
              >
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold transition-all duration-300 group-hover:bg-white"
                >
                  <span className="whitespace-nowrap text-white transition-colors duration-300 group-hover:text-black">{secondaryCta.label}</span>
                  <Image src="/images/arrow vector.png" alt="" width={16} height={16} className="transition-all duration-300 group-hover:brightness-0" />
                </Link>
              </span>
            ) : (
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
