export default function CTABar() {
  return (
    <section style={{ background: "#FBF7ED", padding: "0 20px" }}>
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "40px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
        className="cta-bar-inner"
      >
        <p
          className="cta-bar-text"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(18px, 2vw, 28px)",
            fontWeight: 600,
            color: "#000000",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          We&apos;ve scaled 700+ stores. Let&apos;s see what&apos;s holding yours back.
        </p>

        <a
          href="/book-shopify-consultation"
          className="cta-bar-btn"
          style={{
            flexShrink: 0,
            fontFamily: "Poppins, sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#ffffff",
            background: "#000000",
            borderRadius: 999,
            padding: "16px 36px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Book a Free Call
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/arrow vector.png" alt="" width={16} height={16} style={{ marginLeft: 8 }} />
        </a>
      </div>
    </section>
  );
}
