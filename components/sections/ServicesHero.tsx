import Link from "next/link";
import Image from "next/image";

// Services hero, ported from the case-studies hero: a two-column layout with the
// headline + stats on the left and a testimonial + trusted-by logo marquee on the
// right (desktop only). Self-contained scoped CSS (svh-* + svh-marquee keyframes).
const GRADIENT =
  "linear-gradient(110deg, #A8F0B4 0%, #C8F57A 16.83%, #3DC77A 29.33%, #5FDB7E 41.83%, #A8F0B4 52.4%, #2A9555 66.83%, #4FB872 83.41%, #4EB771 100%)";
const GRADIENT_TEXT = {
  background: GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

const HERO_STATS = [
  { value: "8+", label: "Years Experience" },
  { value: "700+", label: "Stores Built" },
  { value: "$900M+", label: "Revenue Generated" },
  { value: "28.5%", label: "Avg Conversion Lift" },
];

const HERO_LOGOS = [
  "/images/trust_logo_hover_1.svg",
  "/images/trust_logo_hover_2.svg",
  "/images/trust_logo_hover_10.svg",
  "/images/trust_logo_hover_11.svg",
  "/images/trust_logo_hover_12.svg",
  "/images/trust_logo_hover_13.svg",
  "/images/trust_logo_hover_14.svg",
  "/images/trust_logo_2.svg",
  "/images/trust_logo_6.svg",
  "/images/trust_logo_7.svg",
  "/images/trust_logo_20.svg",
  "/images/trust_logo_26.svg",
  "/images/trust_logo_27.svg",
  "/images/trust_logo_31.svg",
  "/images/trust_logo_32.svg",
  "/images/ipsy-logo.svg",
  "/images/everlast-icon.svg",
];

export default function ServicesHero() {
  return (
    <section
      className="svh-section"
      style={{ background: "#000000", padding: "0 20px", position: "relative", overflow: "hidden" }}
    >
      {/* Green glow */}
      <div
        aria-hidden="true"
        className="svh-glow"
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 45% at 70% 40%, rgba(61,199,122,0.35) 0%, rgba(61,199,122,0.15) 40%, rgba(61,199,122,0.05) 65%, transparent 80%)",
        }}
      />
      {/* Dot pattern */}
      <div
        aria-hidden="true"
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: "radial-gradient(circle, #61ce70 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="svh-inner"
        style={{ maxWidth: "1320px", margin: "0 auto", padding: "60px 0 60px", position: "relative", zIndex: 1 }}
      >
        <div className="svh-grid">

          {/* ── Left column ── */}
          <div className="svh-left">
            <span
              style={{
                display: "inline-block",
                padding: "4px 16px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "#61ce70",
                background: "rgba(97,206,112,0.18)",
                border: "1px solid rgba(97,206,112,0.5)",
                borderRadius: "9999px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Our Services
            </span>

            <h1
              className="svh-h1"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                color: "#ffffff",
                margin: "0 0 24px",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Shopify Services{" "}
              <span style={{ color: "#ffffff" }}>That </span>
              <span style={GRADIENT_TEXT}>Grow Revenue.</span>
            </h1>

            <p
              className="svh-sub"
              style={{ fontFamily: "'Nunito', sans-serif", color: "#ffffff", margin: "0 0 40px", lineHeight: 1.7 }}
            >
              We design, build, and optimize Shopify stores around one goal: more revenue. Browse the work below and see exactly what that looks like.
            </p>

            {/* Stats row */}
            <div className="svh-stats">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="svh-stat-item">
                  <span
                    className="svh-stat-val"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, ...GRADIENT_TEXT, display: "block", lineHeight: 1, marginBottom: "6px" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="svh-stat-label"
                    style={{ fontFamily: "'Nunito', sans-serif", color: "#ffffff", display: "block", lineHeight: 1.4 }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="svh-cta-row">
              <Link
                href="/contact-shopify-agency"
                className="group inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-transparent bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:border-gold"
              >
                <span className="bg-clip-text group-hover:text-transparent" style={{ backgroundImage: GRADIENT }}>Get a Free Quote</span>
              </Link>
              <span className="group inline-flex p-[2px] rounded-full" style={{ background: GRADIENT }}>
                <Link
                  href="/book-shopify-consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold transition-all duration-300 group-hover:bg-white"
                >
                  <span className="whitespace-nowrap text-white transition-colors duration-300 group-hover:text-black">Book a Call</span>
                  <Image src="/images/arrow vector.png" alt="" width={16} height={16} className="transition-all duration-300 group-hover:brightness-0" />
                </Link>
              </span>
            </div>
          </div>

          {/* ── Right column (desktop only) ── */}
          <div className="svh-right" style={{ minWidth: 0, overflow: "hidden" }}>
            {/* Testimonial card */}
            <Link
              href="/case-studies/evie-lou-shopify-fashion-cro"
              className="svh-testimonial"
              style={{
                display: "block",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "24px",
                textDecoration: "none",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <Image
                  src="/images/Case%20studies/Kim%20Crow.jpg"
                  alt="Kim Crow"
                  width={52}
                  height={52}
                  style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0, width: "52px", height: "52px" }}
                />
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.9)", margin: "0 0 14px", lineHeight: 1.65 }}>
                    &ldquo;We always knew the brand looked great. We just could not figure out why the store was not converting. Ecomm Wizards found the problem fast and fixed it properly.&rdquo;
                  </p>
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.55)" }}>
                    Kim Crow &nbsp;·&nbsp; Owner, Evie Lou
                  </span>
                </div>
              </div>
            </Link>

            {/* Trusted by + logo marquee */}
            <div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 16px" }}>
                Trusted by world-class ecommerce brands
              </p>
              <div style={{ overflow: "hidden", position: "relative", background: "#000000" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "48px", background: "linear-gradient(to right, #000000, transparent)", zIndex: 2, pointerEvents: "none" }} />
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "48px", background: "linear-gradient(to left, #000000, transparent)", zIndex: 2, pointerEvents: "none" }} />
                <div className="svh-marquee">
                  {[...HERO_LOGOS, ...HERO_LOGOS].map((src, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={src}
                      alt=""
                      loading="lazy"
                      style={{ objectFit: "contain", flexShrink: 0, filter: "invert(1)", mixBlendMode: "screen", opacity: 1, width: "180px", height: "72px", display: "block" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: CSS }} />
    </section>
  );
}

const CSS = `
  .svh-h1 { font-size: 64px; }
  .svh-sub { font-size: 18px; max-width: 620px; }

  .svh-grid {
    display: grid;
    grid-template-columns: 55fr 45fr;
    gap: 64px;
    align-items: center;
    overflow: hidden;
  }
  .svh-left  { min-width: 0; }
  .svh-right {
    display: flex;
    flex-direction: column;
    gap: 28px;
    min-width: 0;
    overflow: hidden;
    width: 100%;
  }
  .svh-testimonial:hover {
    background: rgba(255,255,255,0.08) !important;
    border-color: rgba(255,255,255,0.18) !important;
  }

  @keyframes svh-marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .svh-marquee {
    display: flex;
    gap: 0;
    align-items: center;
    width: max-content;
    animation: svh-marquee 22s linear infinite;
  }
  .svh-marquee:hover { animation-play-state: paused; }

  .svh-stats { display: flex; gap: 0; }
  .svh-stat-item {
    padding-right: 28px;
    margin-right: 28px;
    border-right: 1px solid rgba(255,255,255,0.15);
  }
  .svh-stat-item:last-child { border-right: none; padding-right: 0; margin-right: 0; }
  .svh-stat-val { font-size: 36px; }
  .svh-stat-label { font-size: 14px; }

  .svh-cta-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 40px; }

  @media (max-width: 1024px) {
    .svh-glow { opacity: 0.4; }
    .svh-section { padding: 0 40px !important; }
    .svh-inner { padding: 40px 0 !important; }
    .svh-sub { margin-bottom: 24px !important; max-width: 100% !important; }
    .svh-h1 { font-size: 48px; }
    .svh-grid { grid-template-columns: 1fr; gap: 48px; }
    .svh-right { display: none; }
    .svh-stat-item { padding-right: 20px; margin-right: 20px; }
    .svh-stat-val { font-size: 48px; }
    .svh-stat-label { font-size: 14px; margin-top: 8px; }
  }
  @media (max-width: 768px) {
    .svh-h1 { font-size: 38px; }
    .svh-sub { font-size: 18px; }
    .svh-grid { gap: 36px; }
    .svh-stats { flex-wrap: nowrap; gap: 0; }
    .svh-stat-item { flex: 1; padding: 0 16px; margin: 0; border-right: 1px solid rgba(255,255,255,0.15); text-align: center; }
    .svh-stat-item:first-child { padding-left: 0; text-align: left; }
    .svh-stat-item:last-child { border-right: none; padding-right: 0; text-align: right; }
    .svh-stat-val { font-size: 32px; }
    .svh-stat-label { font-size: 14px; margin-top: 6px; }
  }
  @media (max-width: 639px) {
    .svh-section { padding: 0 20px !important; }
    .svh-inner { padding: 20px 0 !important; }
    .svh-h1 { margin-bottom: 16px !important; }
    .svh-stats { flex-wrap: wrap; gap: 0; }
    .svh-stat-item {
      flex: none !important;
      width: 50% !important;
      padding: 16px 20px !important;
      margin: 0 !important;
      border-right: 1px solid rgba(255,255,255,0.1) !important;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      text-align: left !important;
      box-sizing: border-box;
    }
    .svh-stat-item:nth-child(even) { border-right: none !important; }
    .svh-stat-item:nth-last-child(-n+2) { border-bottom: none; }
    .svh-stat-val { font-size: 32px; }
    .svh-stat-label { font-size: 13px; margin-top: 4px; }
    .svh-cta-row { margin-top: 24px; }
  }
  @media (max-width: 540px) {
    .svh-h1 { font-size: 32px; }
  }
`;
