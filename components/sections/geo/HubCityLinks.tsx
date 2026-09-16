import Link from "next/link";
import type { GeoPage } from "@/lib/geo/types";

// Hub-down links to a hub's published geo pages. One component for every hub:
// the three geo-programme hubs and the hand-built Shopify development and
// Shopify SEO pages. Sharing it means the heading, the link labels and the
// published-only rule can't drift apart between them.
//
// HEADING LEVEL is H2 on purpose. This is a section of its own, a sibling of
// the page's other H2s. As an H3 it would sit under whichever H2 came before
// it in the document outline (on the Shopify development page, the booking
// section), which misdescribes the page.
//
// COPY follows docs/ecomm-wizards-page-standard.md. The heading says the BRANDS
// are in the markets, never that we are (Step 04, never say we are in the
// city). The market-knowledge claim is backed: every geo page carries its own
// sourced research. No description line, by the owner's call on 2026-09-17:
// heading and links only. Link labels are each page's shortTitle, which is its
// target keyword, so the anchor tells Google what the destination is about.
//
// Renders nothing until the hub has a published geo page, so a hub never links
// to a draft, which would 404.

export default function HubCityLinks({ heading, pages }: { heading: string; pages: GeoPage[] }) {
  if (pages.length === 0) return null;

  return (
    <section style={{ background: "#ffffff", padding: "0 20px 56px" }} aria-labelledby="hub-city-links-heading">
      <div style={{ maxWidth: 1320, margin: "0 auto", borderTop: "1px solid #e5e7eb", paddingTop: 36 }}>
        <h2
          id="hub-city-links-heading"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(24px, 2.6vw, 30px)",
            fontWeight: 700,
            lineHeight: 1.25,
            color: "#0f172a",
            margin: "0 0 18px",
          }}
        >
          {heading}
        </h2>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px 12px", listStyle: "none", margin: 0, padding: 0 }}>
          {pages.map((g) => (
            <li key={g.path}>
              <Link
                href={g.path}
                style={{
                  display: "inline-block",
                  fontSize: 14,
                  color: "#0f172a",
                  textDecoration: "none",
                  border: "1px solid #e5e7eb",
                  borderRadius: 9999,
                  padding: "7px 15px",
                }}
              >
                {g.shortTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
