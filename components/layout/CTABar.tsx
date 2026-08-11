"use client";

import { usePathname } from "next/navigation";

export default function CTABar() {
  // On the ads landing page, the CTA scrolls to the on-page booking section
  // instead of navigating away (the anchor only exists there).
  const pathname = usePathname();
  const bookHref = pathname === "/services/shopify-development-agency" ? "#book-a-call" : "/book-shopify-consultation";

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
          We&apos;ve scaled 150+ stores. Let&apos;s see what&apos;s holding yours back.
        </p>

        <a
          href={bookHref}
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
