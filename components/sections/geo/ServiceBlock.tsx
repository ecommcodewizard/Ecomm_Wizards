import Link from "next/link";
import type { ServiceMapItem } from "@/lib/geo/types";
import Prose, { inline } from "./Prose";

// Block 3 / 6: what we do. Two columns at desktop: heading rail on the left,
// prose on the right. Three variants share the layout:
//   hub  - the hub's own "what we actually do" block
//   geo  - the geo page's "what we do about it" block, which MUST link up to
//          the owning hub (the "Part of our ... service." line)
//   map  - the H3 hub's service map: link cards under the prose, one per
//          service. Cards are links only; they never re-explain the service.

type Props = {
  heading: string;
  text: string;
  eyebrow?: string;
  variant?: "hub" | "geo" | "map";
  hub?: { label: string; href: string };
  mapItems?: ServiceMapItem[];
};

export default function ServiceBlock({ heading, text, eyebrow, variant = "hub", hub, mapItems }: Props) {
  const uplink = variant === "geo" ? hub : undefined;
  const map = variant === "map" && mapItems && mapItems.length > 0 ? mapItems : undefined;

  return (
    <section className="gp-section gp-section--cream gps" aria-labelledby="gps-heading">
      <div className="gp-inner">
        <div className="gps-grid">
          <div className="gps-left">
            {eyebrow ? <span className="gp-eyebrow">{inline(eyebrow)}</span> : null}
            <h2 id="gps-heading" className="gp-h2">
              {inline(heading)}
            </h2>
            {hub && !uplink ? (
              <Link href={hub.href} className="gp-link gps-hublink">
                {hub.label}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ) : null}
          </div>
          <div className="gps-right">
            <Prose text={text} className="gp-p" />
            {uplink ? (
              <p className="gp-p gps-uplink">
                Part of our <Link href={uplink.href}>{uplink.label}</Link> service.
              </p>
            ) : null}
          </div>
        </div>

        {map ? (
          <ul className="gp-grid-3 gps-map" aria-label="Services in this group">
            {map.map((item) => (
              <li key={item.href} className="gps-map-item">
                <Link href={item.href} className="gp-card gps-map-card">
                  <span className="gp-h3 gps-map-name">{inline(item.name)}</span>
                  <span className="gps-map-role">{inline(item.role)}</span>
                  <span className="gps-map-arrow" aria-hidden="true">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M0 5H14M14 5L9 0M14 5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .gps-grid { display: grid; grid-template-columns: 1fr; gap: 28px; }
          .gps-left .gp-h2 { margin-bottom: 12px; }
          .gps-hublink { margin-top: 4px; }
          .gps-uplink { margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(0,0,0,0.08); }
          .gps-map { list-style: none; margin: 40px 0 0; padding: 0; }
          .gps-map-item { display: flex; }
          .gps-map-card { display: flex; flex-direction: column; gap: 8px; width: 100%; text-decoration: none; color: inherit; transition: border-color .18s ease, box-shadow .18s ease, transform .18s ease; }
          .gps-map-card:hover { border-color: #2A9555; box-shadow: 0 8px 28px rgba(0,0,0,0.07); transform: translateY(-3px); }
          .gps-map-card:focus-visible { outline: 3px solid #3DC77A; outline-offset: 3px; }
          .gps-map-name { margin: 0; color: #0f172a; font-size: 18px; }
          .gps-map-card:hover .gps-map-name { color: #2A9555; }
          .gps-map-role { font-size: 14px; line-height: 1.55; color: #64748b; flex-grow: 1; }
          .gps-map-arrow { display: inline-flex; color: #2A9555; margin-top: 4px; }
          @media (min-width: 1024px) {
            .gps-grid { grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr); gap: 56px; align-items: start; }
            .gps-left { position: sticky; top: 120px; }
          }
          @media (prefers-reduced-motion: reduce) { .gps-map-card { transition: none; } .gps-map-card:hover { transform: none; } }
        `,
        }}
      />
    </section>
  );
}
