import Link from "next/link";
import { SERVICE_CATEGORIES, type ServiceIcon } from "@/lib/services";

const ICONS: Record<ServiceIcon, React.ReactNode> = {
  build: (<path d="M3 21h18M4 21V9l8-6 8 6v12M9 21v-6h6v6" />),
  migrate: (<><path d="M21 12a9 9 0 1 1-2.64-6.36" /><path d="M21 4v5h-5" /></>),
  optimize: (<><path d="M3 21h18" /><path d="M7 21v-6M12 21V9M17 21v-9" /></>),
  apps: (<><rect x="3" y="3" width="7.5" height="7.5" rx="1.6" /><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6" /><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6" /><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6" /></>),
  b2b: (<path d="M3 7l2-3h14l2 3M4 7v13h16V7M3 7h18M9 20v-6h6v6" />),
};

function Icon({ name, size = 22 }: { name: ServiceIcon; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {ICONS[name]}
    </svg>
  );
}

export default function ServiceCategories() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* Header band (case-studies "Explore by industry" style) */}
      <section style={{ background: "#FBF7ED", padding: "0 20px" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "56px 0 40px" }}>
          <span className="ews-badge">Explore by category</span>
          <h2 className="ews-heading">Everything you need to build, grow, and scale on Shopify.</h2>
          <div className="ews-chips">
            {SERVICE_CATEGORIES.map((c) => (
              <a key={c.id} href={`#cat-${c.id}`} className="ews-chip">{c.label}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Category sections (cards) */}
      <section style={{ background: "#ffffff", padding: "0 20px" }}>
        <div className="ews" style={{ maxWidth: "1320px", margin: "0 auto", padding: "24px 0 32px" }}>
          {SERVICE_CATEGORIES.map((cat) => (
            <section key={cat.id} id={`cat-${cat.id}`} className="ews-cat" aria-labelledby={`cat-h-${cat.id}`}>
              <div className="ews-cat-head">
                <span className="ews-cat-icon"><Icon name={cat.icon} size={22} /></span>
                <div>
                  <h3 id={`cat-h-${cat.id}`} className="ews-cat-title">{cat.label}</h3>
                  <p className="ews-cat-tag">{cat.tagline}</p>
                </div>
              </div>

              <div className="ews-grid">
                {cat.items.map((s) => (
                  <Link key={s.href} href={s.href} className="ews-card">
                    <span className="ews-card-name">{s.name}</span>
                    <span className="ews-card-blurb">{s.blurb}</span>
                  </Link>
                ))}
              </div>

              <div className="ews-cat-cta-row">
                <Link href={cat.cta.href} className="ews-cat-cta">
                  {cat.cta.label}
                  <svg width="15" height="12" viewBox="0 0 18 14" fill="none" aria-hidden><path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

const CSS = `
.ews{font-family:'Poppins',sans-serif;color:#334155}
.ews *{box-sizing:border-box}

.ews-badge{display:inline-block;padding:4px 16px;font-family:'Poppins',sans-serif;font-size:11px;font-weight:600;color:#000;background:transparent;border:1.5px solid rgba(0,0,0,0.2);border-radius:9999px;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px}
.ews-heading{font-family:'Poppins',sans-serif;font-weight:700;color:#000;margin:0 0 28px;line-height:1.1;letter-spacing:-0.03em;font-size:clamp(30px,3vw,44px)}
.ews-chips{display:flex;flex-wrap:wrap;gap:10px}
.ews-chip{display:inline-flex;align-items:center;font-family:'Poppins',sans-serif;font-size:14px;font-weight:400;color:#000;background:transparent;border:1.5px solid rgba(0,0,0,0.18);border-radius:9999px;padding:8px 20px;text-decoration:none;transition:border-color .18s ease,background .18s ease;white-space:nowrap}
.ews-chip:hover{border-color:rgba(0,0,0,0.5)}

.ews-cat{scroll-margin-top:90px;padding:44px 0}
.ews-cat:first-child{padding-top:8px}
.ews-cat + .ews-cat{border-top:1px solid #eef1f4}
.ews-cat-head{display:flex;align-items:flex-start;gap:14px;margin-bottom:26px}
.ews-cat-icon{flex-shrink:0;width:46px;height:46px;border-radius:12px;background:#E8F5EC;color:#2A9555;display:flex;align-items:center;justify-content:center}
.ews-cat-title{font-size:26px;font-weight:700;color:#0f172a;margin:0;line-height:1.2}
.ews-cat-tag{font-size:15px;color:#64748b;margin:4px 0 0;line-height:1.5;max-width:680px}
.ews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.ews-card{display:flex;flex-direction:column;gap:8px;padding:22px;border:1px solid rgba(0,0,0,0.08);border-radius:14px;background:#FBF7ED;text-decoration:none;transition:border-color .18s ease,box-shadow .18s ease,transform .18s ease}
.ews-card:hover{border-color:#2A9555;box-shadow:0 8px 28px rgba(0,0,0,0.07);transform:translateY(-3px)}
.ews-card-name{font-size:17px;font-weight:600;color:#0f172a;line-height:1.3}
.ews-card-blurb{font-size:14px;color:#64748b;line-height:1.55}
.ews-card:hover .ews-card-name{color:#2A9555}
.ews-cat-cta-row{margin-top:26px}
.ews-cat-cta{display:inline-flex;align-items:center;gap:8px;font-size:15px;font-weight:600;color:#046bd2;text-decoration:none}
.ews-cat-cta:hover{text-decoration:underline}

@media (min-width:1024px){.ews-heading{white-space:nowrap}}
@media (max-width:900px){.ews-grid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:768px){.ews-heading{margin-bottom:24px}}
@media (max-width:600px){.ews-grid{grid-template-columns:1fr}.ews-cat{padding:32px 0}.ews-cat-title{font-size:22px}}
`;
