import { getLeads, type LeadRow } from "@/lib/leads";

// Internal lead dashboard. Protected by Basic Auth in middleware.ts.
// Never cache (PII) and never index.
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata = {
  title: "Leads",
  robots: { index: false, follow: false },
};

function fmt(d: string): string {
  const t = new Date(d);
  return isNaN(t.getTime()) ? String(d) : t.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

const cell: React.CSSProperties = { padding: "10px 12px", borderBottom: "1px solid #e5e7eb", verticalAlign: "top", fontSize: 14 };
const th: React.CSSProperties = { ...cell, textAlign: "left", fontWeight: 700, color: "#475569", borderBottom: "2px solid #cbd5e1", whiteSpace: "nowrap" };

function Detail({ lead }: { lead: LeadRow }) {
  const items = ([
    ["Store URL", lead.url ?? ""],
    ["Situation", Array.isArray(lead.situation) ? lead.situation.join(", ") : ""],
    ["Budget", lead.budget ?? ""],
    ["Services", lead.services ?? ""],
    ["How they found us", lead.source ?? ""],
    ["Message", lead.message ?? ""],
    ["IP", lead.ip ?? ""],
    ["User agent", lead.user_agent ?? ""],
  ] as [string, string][]).filter(([, val]) => val !== "" && val != null);
  if (!items.length) return <span style={{ color: "#94a3b8" }}>—</span>;
  return (
    <details>
      <summary style={{ cursor: "pointer", color: "#2A9555", fontWeight: 600 }}>View</summary>
      <div style={{ marginTop: 8, display: "grid", gap: 4 }}>
        {items.map(([k, val]) => (
          <div key={k} style={{ fontSize: 13 }}>
            <strong style={{ color: "#475569" }}>{k}:</strong> <span style={{ whiteSpace: "pre-wrap" }}>{val}</span>
          </div>
        ))}
      </div>
    </details>
  );
}

export default async function AdminLeadsPage() {
  let leads: LeadRow[] = [];
  let error = "";
  try {
    leads = await getLeads(300);
  } catch (e) {
    error = e instanceof Error ? e.message : "Could not load leads.";
  }

  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 20px", fontFamily: "system-ui, sans-serif", color: "#0f172a" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 8 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, margin: 0 }}>Leads</h1>
        <span style={{ color: "#64748b", fontSize: 14 }}>{leads.length} most recent</span>
      </div>

      {error ? (
        <div style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#991b1b", padding: "16px 18px", borderRadius: 8, fontSize: 14 }}>
          <strong>Could not load leads.</strong> Check the database environment variables (DB_HOST/DB_USER/DB_PASSWORD/DB_NAME) and that the <code>leads</code> table exists.
          <div style={{ marginTop: 6, color: "#b91c1c", fontFamily: "monospace", fontSize: 12 }}>{error}</div>
        </div>
      ) : leads.length === 0 ? (
        <p style={{ color: "#64748b" }}>No leads yet.</p>
      ) : (
        <div style={{ overflowX: "auto", border: "1px solid #e5e7eb", borderRadius: 8 }}>
          <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 820 }}>
            <thead style={{ background: "#f8fafc" }}>
              <tr>
                <th style={th}>When</th>
                <th style={th}>Type</th>
                <th style={th}>Name</th>
                <th style={th}>Email</th>
                <th style={th}>Phone</th>
                <th style={th}>Company</th>
                <th style={th}>Details</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id}>
                  <td style={{ ...cell, whiteSpace: "nowrap", color: "#64748b" }}>{fmt(l.created_at)}</td>
                  <td style={cell}>
                    <span style={{ fontSize: 12, fontWeight: 700, padding: "2px 8px", borderRadius: 999, background: l.type === "audit" ? "#dcfce7" : "#e0f2fe", color: l.type === "audit" ? "#166534" : "#075985" }}>{l.type}</span>
                  </td>
                  <td style={cell}>{l.name}</td>
                  <td style={cell}><a href={`mailto:${l.email}`} style={{ color: "#2A9555" }}>{l.email}</a></td>
                  <td style={cell}>{l.phone ?? "—"}</td>
                  <td style={cell}>{l.company ?? "—"}</td>
                  <td style={cell}><Detail lead={l} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
