import Image from "next/image";
import { redirect } from "next/navigation";
import { isAuthed } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

// Node-runtime auth gate for everything under /admin (except /admin/login).
// Reading the session cookie here keeps the password check in the Node runtime.
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Leads",
  robots: { index: false, follow: false },
};

const ADMIN_CSS = `
.ew-admin{font-family:'Poppins',sans-serif;color:#334155;display:flex;min-height:100vh;background:#F4F6F9}
.ew-admin *{box-sizing:border-box}
.ewa-sidebar{width:240px;flex-shrink:0;background:#fff;border-right:1px solid #e5e7eb;display:flex;flex-direction:column;padding:22px 16px}
.ewa-brand{display:flex;align-items:center;gap:11px;padding:4px 8px 24px}
.ewa-brand-mark{width:34px;height:34px;border-radius:9px;background:#000;flex-shrink:0;display:flex;align-items:center;justify-content:center}
.ewa-brand-name{font-weight:700;font-size:15px;color:#0f172a;line-height:1.1}
.ewa-brand-sub{font-size:10px;color:#94a3b8;letter-spacing:.12em;text-transform:uppercase;margin-top:2px}
.ewa-nav{display:flex;flex-direction:column;gap:4px}
.ewa-navitem{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:9px;font-size:14px;font-weight:600;color:#475569;text-decoration:none}
.ewa-navitem--active{background:#E8F5EC;color:#1E7E45}
.ewa-logout{margin-top:auto;display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:9px;font-size:14px;font-weight:600;color:#64748b;background:transparent;border:1px solid #e5e7eb;cursor:pointer;font-family:inherit}
.ewa-logout:hover{color:#b91c1c;border-color:#fecaca;background:#fef2f2}
.ewa-main{flex:1;min-width:0;padding:34px 38px}
.ewa-eyebrow{display:flex;align-items:center;gap:8px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#94a3b8}
.ewa-eyebrow i{width:7px;height:7px;border-radius:2px;background:#2A9555;display:inline-block}
.ewa-title{font-size:30px;font-weight:700;color:#0f172a;margin:10px 0 2px}
.ewa-subtitle{font-size:14px;color:#64748b;margin:0 0 26px}
.ewa-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:18px}
.ewa-card{background:#fff;border:1px solid #eef1f4;border-radius:14px;padding:20px}
.ewa-stat-label{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#94a3b8;margin:0}
.ewa-stat-value{font-size:30px;font-weight:700;color:#0f172a;margin:8px 0 0;line-height:1}
.ewa-stat-sub{font-size:12px;color:#94a3b8;margin:7px 0 0}
.ewa-row2{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:18px}
.ewa-card-head{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:16px}
.ewa-card-title{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#94a3b8;margin:0}
.ewa-card-note{font-size:12px;color:#94a3b8}
.ewa-bar{display:grid;grid-template-columns:130px 1fr 34px;align-items:center;gap:12px;margin-bottom:11px;font-size:13px}
.ewa-bar:last-child{margin-bottom:0}
.ewa-bar-label{color:#475569;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ewa-bar-track{height:8px;background:#f1f5f9;border-radius:99px;overflow:hidden}
.ewa-bar-fill{height:100%;background:linear-gradient(90deg,#2A9555,#61CE70);border-radius:99px}
.ewa-bar-count{text-align:right;font-weight:600;color:#475569}
.ewa-table-wrap{overflow-x:auto}
.ewa-table{width:100%;border-collapse:collapse;font-size:14px;min-width:760px}
.ewa-table th{text-align:left;font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#94a3b8;padding:0 14px 13px;border-bottom:1px solid #eef1f4;white-space:nowrap}
.ewa-table td{padding:14px;border-bottom:1px solid #f1f5f9;vertical-align:top;color:#334155}
.ewa-table tr:last-child td{border-bottom:none}
.ewa-badge{font-size:11px;font-weight:700;padding:3px 9px;border-radius:99px;text-transform:capitalize}
.ewa-badge--audit{background:#dcfce7;color:#166534}
.ewa-badge--contact{background:#e0f2fe;color:#075985}
.ewa-muted{color:#94a3b8}
.ewa-link{color:#2A9555;text-decoration:none;font-weight:500}
.ewa-summary{cursor:pointer;color:#2A9555;font-weight:600;font-size:13px;list-style:none}
.ewa-summary::-webkit-details-marker{display:none}
.ewa-empty{color:#64748b;font-size:14px;padding:8px 2px}
.ewa-err{background:#fef2f2;border:1px solid #fecaca;color:#991b1b;padding:16px 18px;border-radius:12px;font-size:14px}
@media (max-width:900px){.ewa-sidebar{display:none}.ewa-main{padding:20px}.ewa-stats{grid-template-columns:repeat(2,1fr)}.ewa-row2{grid-template-columns:1fr}}
`;

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  if (!(await isAuthed())) redirect("/admin/login");
  return (
    <div className="ew-admin">
      <style dangerouslySetInnerHTML={{ __html: ADMIN_CSS }} />
      <aside className="ewa-sidebar">
        <div className="ewa-brand">
          <span className="ewa-brand-mark">
            <Image src="/images/ecomm-green-logo-cropped.png" alt="" width={22} height={22} style={{ objectFit: "contain" }} />
          </span>
          <span>
            <span className="ewa-brand-name" style={{ display: "block" }}>Ecomm Wizards</span>
            <span className="ewa-brand-sub">Admin</span>
          </span>
        </div>
        <nav className="ewa-nav">
          <a href="/admin/leads" className="ewa-navitem ewa-navitem--active">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Leads
          </a>
        </nav>
        <LogoutButton />
      </aside>
      <main className="ewa-main">{children}</main>
    </div>
  );
}
