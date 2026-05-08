const COL1 = [
  "/images/partner-images-1-1.webp",
  "/images/partner-images-1-2.webp",
  "/images/partner-images-1-3.webp",
  "/images/partner-images-1-4.webp",
];

const COL2 = [
  "/images/partner-images-2-1.webp",
  "/images/partner-images-2-3.webp",
];

const COL3 = [
  "/images/partner-images-3-1.webp",
  "/images/partner-images-3-2.webp",
];

export default function MobileAppSection({ bgColor = "#FBF7ED" }: { bgColor?: string }) {
  return (
    <section className="mobile-app-section" style={{ background: bgColor, padding: "0 20px" }}>
      <div
        className="mobile-app-inner"
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "40px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* Left: 3-column vertical scroll grid */}
        <div
          className="mobile-app-grid"
          style={{
            overflow: "hidden",
            height: 520,
            borderRadius: 16,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
          }}
        >
          {/* Column 1 — slowest */}
          <div className="mobile-col-1" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[...COL1, ...COL1].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: 12, display: "block", flexShrink: 0 }} />
            ))}
          </div>

          {/* Column 2 — medium, offset down */}
          <div className="mobile-col-2" style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 40 }}>
            {[...COL2, ...COL2, ...COL2].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: 12, display: "block", flexShrink: 0 }} />
            ))}
          </div>

          {/* Column 3 — fastest, offset up */}
          <div className="mobile-col-3" style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: -40 }}>
            {[...COL3, ...COL3, ...COL3].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt="" style={{ width: "100%", borderRadius: 12, display: "block", flexShrink: 0 }} />
            ))}
          </div>
        </div>

        {/* Right: Text content */}
        <div className="mobile-app-text">
          <h2
            className="mobile-app-heading"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(28px, 3.71vw, 44px)",
              fontWeight: 300,
              color: "#0f172a",
              margin: "0 0 20px",
              lineHeight: 1.2,
            }}
          >
            Turn Your Shopify Store into a{" "}
            <strong style={{ fontWeight: 700 }}>Mobile App</strong>
          </h2>

          <p
            className="mobile-app-desc"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 16,
              lineHeight: 1.75,
              color: "#334155",
              margin: "0 0 32px",
            }}
          >
            Your customers live on their phones. Meet them there. We transform your store into a native mobile app – fast, seamless, and built for buyers on the go. Push notifications, personalized offers, and a direct line to your brand. Lower acquisition costs. Higher loyalty. No app store headaches.
          </p>

          <span className="group inline-flex p-[2px] rounded-full get-started-btn-wrap">
            <a
              href="/book-shopify-consultation"
              className="inline-flex items-center gap-2 rounded-full bg-black transition-all duration-300 get-started-btn-link"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                padding: "20px 45px",
              }}
            >
              <span className="text-white whitespace-nowrap">
                Get Started
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/arrow vector.png"
                alt=""
                width={16}
                height={16}
                className="transition-all duration-300"
              />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
