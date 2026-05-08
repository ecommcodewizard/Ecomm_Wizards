import KnifeAccordion from "@/components/sections/KnifeAccordion";

const PHONE_LOGOS = [
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

export default function WhyPartnerSection() {
  return (
    <section className="why-partner-section" style={{ background: "#ffffff", padding: "0 20px" }}>
      <div
        className="why-partner-inner"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "30px 0",
          display: "grid",
          gridTemplateColumns: "1fr 230px 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Left: heading + description */}
        <div className="why-partner-text">
          <h2
            className="why-partner-heading"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(28px, 3.2vw, 44px)",
              fontWeight: 300,
              color: "#000000",
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            Why Partner with<br />{" "}<strong style={{ fontWeight: 700 }}>Ecomm Wizards?</strong>
          </h2>
          <p
            className="why-partner-desc"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 16,
              lineHeight: 1.75,
              color: "#000000",
              margin: 0,
            }}
          >
            Partner with Ecomm Wizards to ensure your store evolves with AI, maintaining a competitive edge in the ever-changing eCommerce landscape.
          </p>
        </div>

        {/* Center: phone mockup with scrolling logos */}
        <div
          className="why-partner-phone"
          style={{
            backgroundImage: "linear-gradient(rgba(0,40,15,0.75), rgba(0,40,15,0.75)), url('/images/background-ai-custom-2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 28,
            height: 450,
            overflow: "hidden",
            padding: "0 16px",
          }}
        >
          <div
            className="why-partner-logo-track"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {[...PHONE_LOGOS, ...PHONE_LOGOS].map((src, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 78,
                  marginBottom: 10,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  style={{ width: 148, height: 78, objectFit: "contain", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: accordion */}
        <div className="why-partner-accordion">
          <KnifeAccordion />
        </div>
      </div>
    </section>
  );
}
