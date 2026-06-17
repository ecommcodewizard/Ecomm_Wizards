import { ImageResponse } from "next/og";

// Node runtime (not edge): safer on the self-hosted Hostinger Node server.
export const runtime = "nodejs";

// Dynamic branded Open Graph card generator. Each page passes its own ?title=
// so every page gets a unique 1200x630 social-share image with no design
// assets. Falls back to a generic title if none is supplied.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const raw = (searchParams.get("title") || "Shopify Plus Agency").trim();
  const title = raw.length > 100 ? `${raw.slice(0, 99)}…` : raw;

  const GREEN = "#2A9555";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0F0D",
          backgroundImage: `radial-gradient(circle at 85% 8%, ${GREEN}40 0%, transparent 42%)`,
          padding: "72px",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "12px",
              backgroundColor: GREEN,
              display: "flex",
              marginRight: "18px",
            }}
          />
          <div style={{ display: "flex", fontSize: "32px", fontWeight: 700, color: "#FFFFFF" }}>
            Ecomm Wizards
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 48 ? "60px" : "72px",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.12,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>

        {/* Footer strip */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: "28px", fontWeight: 700, color: GREEN, marginRight: "24px" }}>
            ecommwizards.com
          </div>
          <div style={{ display: "flex", fontSize: "26px", color: "#9CA3AF" }}>
            700+ stores  ·  $900M+ revenue  ·  8+ years
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
