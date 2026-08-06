import Link from "next/link";
import { SERVICE_CATEGORIES, type ServiceItem } from "@/lib/services";

// Foot-of-page module (server component, no client hooks): 3–4 crawlable links
// to sibling services in the same category, topped up from the rest of the
// catalog for small/unlisted categories. Gives every service page lateral
// internal links so none is an orphan. Prop-driven: pass the page's own path
// as `current` (e.g. "/services/shopify-cro-agency").

export default function RelatedServices({
  current,
  max = 6,
  heading,
}: {
  current?: string;
  max?: number;
  heading?: string;
}) {
  const path = current ?? "";
  if (!path || path === "/services") return null;

  const flat = SERVICE_CATEGORIES.flatMap((c) => c.items);
  const cat = SERVICE_CATEGORIES.find((c) => c.items.some((i) => i.href === path));

  // Rotate the selection by the current page's position so internal-link coverage
  // spreads EVENLY across the catalog instead of always surfacing the first few
  // items (which starved later service pages of contextual inbound links). For
  // non-service pages (e.g. case studies) seed the rotation from the path so
  // different pages surface different — but still deterministic — service sets.
  const seedIndex = (() => {
    const i = flat.findIndex((it) => it.href === path);
    if (i >= 0) return i;
    let h = 0;
    for (let k = 0; k < path.length; k++) h = (h * 31 + path.charCodeAt(k)) >>> 0;
    return flat.length ? h % flat.length : 0;
  })();

  const items: ServiceItem[] = [];
  const seen = new Set<string>([path]);

  // 1) Same-category siblings first (most relevant), rotated within the category.
  if (cat) {
    const ci = Math.max(0, cat.items.findIndex((i) => i.href === path));
    for (let k = 1; k <= cat.items.length && items.length < max; k++) {
      const item = cat.items[(ci + k) % cat.items.length];
      if (!seen.has(item.href)) { items.push(item); seen.add(item.href); }
    }
  }

  // 2) Top up from the rest of the catalog, rotated by seedIndex for even spread.
  for (let k = 1; k <= flat.length && items.length < max; k++) {
    const item = flat[(seedIndex + k) % flat.length];
    if (!seen.has(item.href)) { items.push(item); seen.add(item.href); }
  }

  if (items.length === 0) return null;

  return (
    <section className="ew-related" aria-label="Related Shopify services">
      <div className="ew-related-inner">
        <h2 className="ew-related-title">{heading ?? "Explore more Shopify services"}</h2>
        <div className="ew-related-grid">
          {items.map((s) => (
            <Link key={s.href} href={s.href} className="ew-related-card">
              <span className="ew-related-name">{s.name}</span>
              <span className="ew-related-blurb">{s.blurb}</span>
              <span className="ew-related-cta" aria-hidden="true">
                Learn more
                <svg width="14" height="11" viewBox="0 0 18 14" fill="none">
                  <path d="M1 7h15M10 1l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .ew-related { background: #FBF7ED; border-top: 1px solid rgba(0,0,0,0.06); font-family: 'Poppins', sans-serif; }
        .ew-related-inner { max-width: 1320px; margin: 0 auto; padding: 56px 20px; }
        .ew-related-title { font-size: clamp(24px, 3vw, 34px); font-weight: 700; color: #0f172a; letter-spacing: -0.02em; margin: 0 0 28px; }
        .ew-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .ew-related-card { display: flex; flex-direction: column; gap: 10px; padding: 22px; background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 14px; text-decoration: none; transition: border-color .18s ease, box-shadow .18s ease, transform .18s ease; }
        .ew-related-card:hover { border-color: #2A9555; box-shadow: 0 8px 28px rgba(0,0,0,0.07); transform: translateY(-3px); }
        .ew-related-name { font-size: 17px; font-weight: 600; color: #0f172a; line-height: 1.3; }
        .ew-related-card:hover .ew-related-name { color: #2A9555; }
        .ew-related-blurb { font-size: 13.5px; color: #64748b; line-height: 1.55; flex-grow: 1; }
        .ew-related-cta { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #2A9555; margin-top: 4px; }
        @media (max-width: 1024px) { .ew-related-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .ew-related-grid { grid-template-columns: 1fr; } .ew-related-inner { padding: 40px 18px; } }
      ` }} />
    </section>
  );
}
