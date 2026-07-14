import { getBookings, type BookingRow } from "@/lib/bookings";
import DeleteBookingButton from "./DeleteBookingButton";

// Internal bookings dashboard. Auth is enforced by the (protected) layout. Never
// cache (PII) and never index.
export const dynamic = "force-dynamic";
export const revalidate = 0;

function fmtWhen(v: string | null): string {
  if (!v) return "—";
  const t = new Date(v);
  return isNaN(t.getTime())
    ? String(v)
    : t.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });
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

function StatusBadge({ status }: { status: string | null }) {
  const s = (status ?? "").toLowerCase();
  const palette: Record<string, { bg: string; fg: string }> = {
    accepted: { bg: "#dcfce7", fg: "#166534" },
    confirmed: { bg: "#dcfce7", fg: "#166534" },
    pending: { bg: "#fef9c3", fg: "#854d0e" },
    cancelled: { bg: "#fee2e2", fg: "#991b1b" },
    canceled: { bg: "#fee2e2", fg: "#991b1b" },
    rejected: { bg: "#fee2e2", fg: "#991b1b" },
  };
  const c = palette[s] ?? { bg: "#f1f5f9", fg: "#475569" };
  const label = status ? status.charAt(0).toUpperCase() + status.slice(1) : "Booked";
  return (
    <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 99, background: c.bg, color: c.fg }}>
      {label}
    </span>
  );
}

export default async function BookingsDashboard() {
  let bookings: BookingRow[] = [];
  let error = "";
  try {
    bookings = await getBookings(200);
  } catch (e) {
    error = e instanceof Error ? e.message : "Could not load bookings.";
  }

  const now = Date.now();
  const upcoming = bookings.filter(
    (b) => b.start_time && new Date(b.start_time).getTime() > now,
  ).length;
  const past = bookings.length - upcoming;

  return (
    <>
      <p className="ewa-eyebrow"><i />Admin · Call Bookings</p>
      <h1 className="ewa-title">Call Bookings</h1>
      <p className="ewa-subtitle">
        {bookings.length
          ? `${bookings.length} ${bookings.length === 1 ? "booking" : "bookings"} · from the website calendar`
          : "Calls booked through the website calendar"}
      </p>

      {error ? (
        <div className="ewa-err">
          <strong>Could not load bookings.</strong> If this is the first run, create the <code>bookings</code> table
          (see <code>db/schema.sql</code>) in phpMyAdmin, and check the database environment variables.
          <div style={{ marginTop: 6, color: "#b91c1c", fontFamily: "monospace", fontSize: 12 }}>{error}</div>
        </div>
      ) : (
        <>
          <div className="ewa-stats" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <StatCard label="Upcoming" value={upcoming} sub="Scheduled ahead" />
            <StatCard label="Past" value={past} sub="Already happened" />
            <StatCard label="Captured" value={bookings.length} sub="Total recorded" />
          </div>

          <div className="ewa-note">
            Only calls booked through the website calendar are captured, and Cal.com does not include the attendee&apos;s
            email in the embed. For the full record (including email), see the booking notification in your inbox.
          </div>

          <div className="ewa-card" style={{ padding: "20px 4px 4px" }}>
            <div className="ewa-card-head" style={{ padding: "0 16px" }}>
              <p className="ewa-card-title">Recent bookings</p>
              <span className="ewa-card-note">{bookings.length} shown</span>
            </div>
            {bookings.length === 0 ? (
              <p className="ewa-empty" style={{ padding: "8px 16px 16px" }}>
                No bookings captured yet. Calls booked through the website calendar will appear here.
              </p>
            ) : (
              <div className="ewa-table-wrap">
                <table className="ewa-table">
                  <thead>
                    <tr>
                      <th>When</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Join</th>
                      <th aria-label="Row actions"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((b) => {
                      const up = !!b.start_time && new Date(b.start_time).getTime() > now;
                      return (
                        <tr key={b.id}>
                          <td style={{ whiteSpace: "nowrap", color: "#64748b" }}>
                            {fmtWhen(b.start_time)}
                            <span
                              style={{
                                marginLeft: 8,
                                fontSize: 10,
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: ".04em",
                                color: up ? "#1E7E45" : "#94a3b8",
                              }}
                            >
                              {up ? "Upcoming" : "Past"}
                            </span>
                          </td>
                          <td style={{ fontWeight: 500, color: "#0f172a" }}>
                            {b.name || <span className="ewa-muted">{b.title || "—"}</span>}
                          </td>
                          <td><StatusBadge status={b.status} /></td>
                          <td>
                            {b.video_call_url ? (
                              <a className="ewa-link" href={b.video_call_url} target="_blank" rel="noopener noreferrer">Join</a>
                            ) : (
                              <span className="ewa-muted">—</span>
                            )}
                          </td>
                          <td><DeleteBookingButton id={b.id} name={b.name || b.title || ""} /></td>
                        </tr>
                      );
                    })}
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
