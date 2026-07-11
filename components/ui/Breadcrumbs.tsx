import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/lib/services";

// Visible, crawlable breadcrumb trail (server component, no client hooks) that
// mirrors the BreadcrumbList JSON-LD on service pages. Prop-driven: pass the
// page's own path as `current` (e.g. "/services/shopify-cro-agency") and it
// builds Home > Services > [Migration >] Page. Pass `items` to override.

export type Crumb = { name: string; href?: string };

function humanize(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// Resolve a /services path to its display label from the service data, with a
// title-cased slug fallback for anything not (yet) in SERVICE_CATEGORIES.
function serviceLabel(path: string): string {
  for (const cat of SERVICE_CATEGORIES) {
    const item = cat.items.find((i) => i.href === path);
    if (item) return item.name;
  }
  const slug = path.split("/").filter(Boolean).pop() ?? "";
  return humanize(slug);
}

function buildTrail(path: string): Crumb[] {
  const parts = path.split("/").filter(Boolean); // ["services","migration","magento-to-shopify"]
  const trail: Crumb[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ];
  if (parts[1] === "migration" && parts.length > 2) {
    trail.push({ name: "Migration", href: "/services/migration" });
  }
  const leaf = path === "/services/migration" ? "Migration" : serviceLabel(path);
  trail.push({ name: leaf }); // current page — no href
  return trail;
}

export default function Breadcrumbs({ current, items }: { current?: string; items?: Crumb[] }) {
  const trail = items ?? (current ? buildTrail(current) : []);
  if (trail.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="ew-breadcrumb">
      <ol className="ew-breadcrumb-list">
        {trail.map((c, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={`${c.name}-${i}`} className="ew-breadcrumb-item">
              {c.href && !isLast ? (
                <Link href={c.href} className="ew-breadcrumb-link">{c.name}</Link>
              ) : (
                <span className="ew-breadcrumb-current" aria-current="page">{c.name}</span>
              )}
              {!isLast && <span className="ew-breadcrumb-sep" aria-hidden="true">›</span>}
            </li>
          );
        })}
      </ol>
      <style dangerouslySetInnerHTML={{ __html: `
        .ew-breadcrumb { background: #ffffff; border-bottom: 1px solid rgba(0,0,0,0.06); }
        .ew-breadcrumb-list { max-width: 1320px; margin: 0 auto; padding: 14px 20px; list-style: none; display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-family: 'Poppins', sans-serif; font-size: 13px; }
        .ew-breadcrumb-item { display: inline-flex; align-items: center; gap: 8px; }
        .ew-breadcrumb-link { color: rgba(0,0,0,0.55); text-decoration: none; transition: color 0.18s ease; }
        .ew-breadcrumb-link:hover { color: #2A9555; }
        .ew-breadcrumb-current { color: rgba(0,0,0,0.9); font-weight: 600; }
        .ew-breadcrumb-sep { color: rgba(0,0,0,0.3); }
        @media (max-width: 640px) { .ew-breadcrumb-list { padding: 12px 18px; font-size: 12px; } }
      ` }} />
    </nav>
  );
}
