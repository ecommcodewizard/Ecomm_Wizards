import Image from "next/image";
import Link from "next/link";
import type { CaseStudyCard } from "@/lib/services";

// "Our Work" proof grid: case-study cards with an auto-play muted video (image
// fallback) + a result metric. Extracted from the inline service-page pattern so
// it can be reused. Pure presentational, server component.
type Props = {
  caseStudies: CaseStudyCard[];
  heading?: string;
  subheading?: string;
  background?: string;
  allHref?: string;
};

export default function OurWorkSection({
  caseStudies,
  heading = "Our Work",
  subheading,
  background = "#FBF7ED",
  allHref = "/case-studies",
}: Props) {
  return (
    <section style={{ background, padding: "64px 20px 72px" }} aria-label="Our work and results">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: "clamp(28px,4vw,40px)", fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.2 }}>{heading}</h2>
          {subheading && (
            <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: 16, color: "#64748b", margin: "12px auto 0", maxWidth: 660, lineHeight: 1.6 }}>{subheading}</p>
          )}
        </div>

        <div className="ow-grid">
          {caseStudies.map((cs) => (
            <Link key={cs.brand} href={cs.href} className="ow-card" style={{ display: "flex", flexDirection: "column", background: "#fff", borderRadius: 20, overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div style={{ position: "relative", width: "calc(100% - 16px)", margin: "8px 8px 0", borderRadius: 14, overflow: "hidden", flexShrink: 0, aspectRatio: "16/10", background: "#e0ddd5" }}>
                {cs.video ? (
                  <video src={cs.video} autoPlay loop muted playsInline preload="none" poster={cs.image} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                ) : (
                  <Image src={cs.image} overrideSrc={cs.image} alt={`${cs.brand} Shopify case study`} fill className="ow-card-img" style={{ objectFit: "cover" }} sizes="(max-width:560px) 100vw, (max-width:900px) 50vw, 33vw" />
                )}
                <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(255,255,255,0.97)", borderRadius: 9999, padding: "5px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#000", display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, fontWeight: 400, color: "#000", whiteSpace: "nowrap" }}>{cs.metricLabel}</span>
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 700, color: "#000", whiteSpace: "nowrap" }}>{cs.metric}</span>
                </div>
                <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(0,0,0,0.72)", borderRadius: 9999, padding: "4px 12px" }}>
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, fontWeight: 500, color: "#fff", whiteSpace: "nowrap" }}>{cs.industry}</span>
                </div>
              </div>
              <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flexGrow: 1, gap: 12 }}>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: 22, fontWeight: 700, color: "#000", margin: 0, lineHeight: 1.2 }}>{cs.brand}</p>
                <div style={{ height: 1, background: "rgba(0,0,0,0.08)" }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {cs.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: "'Poppins',sans-serif", fontSize: 11, fontWeight: 500, color: "#444", border: "1px solid rgba(0,0,0,0.22)", borderRadius: 9999, padding: "3px 10px", whiteSpace: "nowrap" }}>{tag}</span>
                  ))}
                </div>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14, color: "rgba(0,0,0,0.55)", margin: 0, lineHeight: 1.6, flexGrow: 1 }}>{cs.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href={allHref} className="ow-allcta">
            See all case studies
            <svg width="16" height="13" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

const CSS = `
.ow-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.ow-card{transition:transform .22s ease,box-shadow .22s ease}
.ow-card:hover{transform:translateY(-6px);box-shadow:0 16px 48px rgba(0,0,0,0.10)}
.ow-card-img{transition:transform .4s ease}
.ow-card:hover .ow-card-img{transform:scale(1.03)}
.ow-allcta{display:inline-flex;align-items:center;gap:10px;background:#000;color:#fff;font-family:'Poppins',sans-serif;font-size:15px;font-weight:600;padding:14px 30px;border-radius:9999px;text-decoration:none;transition:opacity .2s ease}
.ow-allcta:hover{opacity:.88}
@media (max-width:900px){.ow-grid{grid-template-columns:repeat(2,1fr);gap:16px}}
@media (max-width:560px){.ow-grid{grid-template-columns:1fr}}
`;
