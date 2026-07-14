import { getLeads, getLeadStats, type LeadRow, type LeadStats } from "@/lib/leads";
import DeleteLeadButton from "./DeleteLeadButton";

// Internal lead dashboard. Auth is enforced by the (protected) layout. Never
// cache (PII) and never index.
export const dynamic = "force-dynamic";
export const revalidate = 0;

function fmtDateTime(d: string): string {
  const t = new Date(d);
  return isNaN(t.getTime()) ? String(d) : t.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
}

function fmtDay(iso: string): string {
  const t = new Date(`${iso}T00:00:00Z`);
  return isNaN(t.getTime()) ? iso : t.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}

function StatCard({ label, value, sub }: { label: string; value: number; sub: string }) {
  return (
    <div className="ewa-card">
      <p className="ewa-stat-label">{label}</p>
      <p className="ewa-stat-value">{value}</p>
      <p className="ewa-stat-sub">{sub}</p>
    </div>
  );
}

function Trend({ data }: { data: LeadStats["byDay"] }) {
  const W = 640;
  const H = 96;
  const P = 8;
  const n = data.length;
  const max = Math.max(1, ...data.map((d) => d.count));
  const x = (i: number) => (n <= 1 ? 0 : (i / (n - 1)) * W);
  const y = (v: number) => H - P - (v / max) * (H - P * 2);
  const line = data.map((d, i) => `${x(i).toFixed(1)},${y(d.count).toFixed(1)}`).join(" ");
  const area = `0,${H} ${line} ${W},${H}`;
  const peak = Math.max(0, ...data.map((d) => d.count));
  return (
    <div className="ewa-card" style={{ marginBottom: 18 }}>
      <div className="ewa-card-head">
        <p className="ewa-card-title">Last 30 days</p>
        <span className="ewa-card-note">peak {peak}/day</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ width: "100%", height: 96, display: "block" }} aria-hidden>
        <polygon points={area} fill="rgba(42,149,85,0.10)" />
        <polyline points={line} fill="none" stroke="#2A9555" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 11, color: "#94a3b8" }}>
        <span>{data.length ? fmtDay(data[0].date) : ""}</span>
        <span>{data.length ? fmtDay(data[data.length - 1].date) : ""}</span>
      </div>
    </div>
  );
}

function Bars({ items }: { items: { label: string; count: number }[] }) {
  if (!items.length) return <p className="ewa-empty">No data yet.</p>;
  const max = Math.max(1, ...items.map((i) => i.count));
  return (
    <div>
      {items.map((it) => (
        <div className="ewa-bar" key={it.label}>
          <span className="ewa-bar-label" title={it.label}>{it.label}</span>
          <span className="ewa-bar-track">
            <span className="ewa-bar-fill" style={{ width: `${it.count ? Math.max(6, (it.count / max) * 100) : 0}%` }} />
          </span>
          <span className="ewa-bar-count">{it.count}</span>
        </div>
      ))}
    </div>
  );
}

function Badge({ type }: { type: LeadRow["type"] }) {
  return <span className={`ewa-badge ewa-badge--${type}`}>{type}</span>;
}

function Detail({ lead }: { lead: LeadRow }) {
  const situation = Array.isArray(lead.situation) ? lead.situation.join(", ") : "";
  const items = ([
    ["Store URL", lead.url ?? ""],
    ["Situation", situation],
    ["Budget", lead.budget ?? ""],
    ["Services", lead.services ?? ""],
    ["How they found us", lead.source ?? ""],
    ["Message", lead.message ?? ""],
    ["IP", lead.ip ?? ""],
    ["User agent", lead.user_agent ?? ""],
  ] as [string, string][]).filter(([, v]) => v !== "" && v != null);
  if (!items.length) return <span className="ewa-muted">—</span>;
  return (
    <details>
      <summary className="ewa-summary">View</summary>
      <div style={{ marginTop: 10, display: "grid", gap: 5 }}>
        {items.map(([k, v]) => (
          <div key={k} style={{ fontSize: 13 }}>
            <strong style={{ color: "#475569" }}>{k}:</strong> <span style={{ whiteSpace: "pre-wrap" }}>{v}</span>
          </div>
        ))}
      </div>
    </details>
  );
}

export default async function LeadsDashboard() {
  let leads: LeadRow[] = [];
  let stats: LeadStats | null = null;
  let error = "";
  try {
    [leads, stats] = await Promise.all([getLeads(150), getLeadStats()]);
  } catch (e) {
    error = e instanceof Error ? e.message : "Could not load leads.";
  }

  return (
    <>
      <p className="ewa-eyebrow"><i />Admin · Leads</p>
      <h1 className="ewa-title">Leads</h1>
      <p className="ewa-subtitle">{stats ? `${stats.total} ${stats.total === 1 ? "lead" : "leads"} · newest first` : "Captured audit and contact requests"}</p>

      {error ? (
        <div className="ewa-err">
          <strong>Could not load leads.</strong> Check the database environment variables (DB_HOST/DB_USER/DB_PASSWORD/DB_NAME) and that the <code>leads</code> table exists.
          <div style={{ marginTop: 6, color: "#b91c1c", fontFamily: "monospace", fontSize: 12 }}>{error}</div>
        </div>
      ) : (
        <>
          {stats && (
            <>
              <div className="ewa-stats">
                <StatCard label="All-time" value={stats.total} sub="Total leads" />
                <StatCard label="Today" value={stats.today} sub="Since 00:00 UTC" />
                <StatCard label="Last 7 days" value={stats.last7} sub="Rolling window" />
                <StatCard label="Last 30 days" value={stats.last30} sub="Rolling window" />
              </div>

              <Trend data={stats.byDay} />

              <div className="ewa-row2">
                <div className="ewa-card">
                  <div className="ewa-card-head"><p className="ewa-card-title">Top source</p><span className="ewa-card-note">how they found us</span></div>
                  <Bars items={stats.bySource} />
                </div>
                <div className="ewa-card">
                  <div className="ewa-card-head"><p className="ewa-card-title">Leads by type</p></div>
                  <Bars items={[{ label: "Audit", count: stats.byType.audit }, { label: "Contact", count: stats.byType.contact }]} />
                </div>
              </div>
            </>
          )}

          <div className="ewa-card" style={{ padding: "20px 4px 4px" }}>
            <div className="ewa-card-head" style={{ padding: "0 16px" }}>
              <p className="ewa-card-title">Recent leads</p>
              <span className="ewa-card-note">{leads.length} shown</span>
            </div>
            {leads.length === 0 ? (
              <p className="ewa-empty" style={{ padding: "8px 16px 16px" }}>No leads yet.</p>
            ) : (
              <div className="ewa-table-wrap">
                <table className="ewa-table">
                  <thead>
                    <tr>
                      <th>When</th>
                      <th>Type</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Phone</th>
                      <th>Details</th>
                      <th aria-label="Row actions"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((l) => (
                      <tr key={l.id}>
                        <td style={{ whiteSpace: "nowrap", color: "#64748b" }}>{fmtDateTime(l.created_at)}</td>
                        <td><Badge type={l.type} /></td>
                        <td style={{ fontWeight: 500, color: "#0f172a" }}>{l.name}</td>
                        <td><a className="ewa-link" href={`mailto:${l.email}`}>{l.email}</a></td>
                        <td>{l.company || <span className="ewa-muted">—</span>}</td>
                        <td>{l.phone || <span className="ewa-muted">—</span>}</td>
                        <td><Detail lead={l} /></td>
                        <td><DeleteLeadButton id={l.id} name={l.name} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
