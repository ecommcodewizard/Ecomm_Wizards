import type { RowDataPacket, ResultSetHeader } from "mysql2";
import { getPool } from "./db";

export type LeadType = "audit" | "contact" | "creative-audit";

export interface LeadInput {
  type: LeadType;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  url?: string | null;
  situation?: string[] | null; // audit only
  source?: string | null; // audit.source OR contact.referral
  budget?: string | null; // contact only
  services?: string | null; // contact only
  message?: string | null; // contact.project_details
  raw: Record<string, unknown>; // full payload, safety net
  ip?: string | null;
  userAgent?: string | null;
}

export interface LeadRow {
  id: number;
  type: LeadType;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  url: string | null;
  situation: string[] | null;
  source: string | null;
  budget: string | null;
  services: string | null;
  message: string | null;
  raw: Record<string, unknown> | null;
  ip: string | null;
  user_agent: string | null;
  created_at: string;
}

export async function insertLead(lead: LeadInput): Promise<number> {
  const pool = getPool();
  const [res] = await pool.execute<ResultSetHeader>(
    `INSERT INTO leads
       (type, name, email, phone, company, url, situation, source, budget, services, message, raw, ip, user_agent)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      lead.type,
      lead.name,
      lead.email,
      lead.phone ?? null,
      lead.company ?? null,
      lead.url ?? null,
      lead.situation && lead.situation.length ? JSON.stringify(lead.situation) : null,
      lead.source ?? null,
      lead.budget ?? null,
      lead.services ?? null,
      lead.message ?? null,
      JSON.stringify(lead.raw ?? {}),
      lead.ip ?? null,
      lead.userAgent ?? null,
    ],
  );
  return res.insertId;
}

export async function getLeads(limit = 200): Promise<LeadRow[]> {
  // LIMIT can't be a bound parameter in a prepared statement on all MySQL
  // versions, so clamp to a safe integer and inline it.
  const n = Math.min(Math.max(Math.floor(Number(limit) || 200), 1), 1000);
  const pool = getPool();
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM leads ORDER BY created_at DESC LIMIT ${n}`,
  );
  return rows as unknown as LeadRow[];
}

export interface LeadStats {
  total: number;
  today: number;
  last7: number;
  last30: number;
  byDay: { date: string; count: number }[];
  bySource: { label: string; count: number }[];
  byType: { audit: number; contact: number };
}

// Aggregate counts for the admin dashboard. Read-only; reuses the same pool as
// insertLead/getLeads. created_at is stored in UTC (pool timezone "Z"), so every
// window uses UTC functions for consistency.
export async function getLeadStats(): Promise<LeadStats> {
  const pool = getPool();

  const [totalsRows] = await pool.query<RowDataPacket[]>(
    `SELECT
       COUNT(*) AS total,
       SUM(created_at >= UTC_DATE()) AS today,
       SUM(created_at >= UTC_TIMESTAMP() - INTERVAL 7 DAY) AS last7,
       SUM(created_at >= UTC_TIMESTAMP() - INTERVAL 30 DAY) AS last30
     FROM leads`,
  );
  const t = totalsRows[0] ?? {};

  const [dayRows] = await pool.query<RowDataPacket[]>(
    `SELECT DATE_FORMAT(created_at, '%Y-%m-%d') AS d, COUNT(*) AS c
       FROM leads
      WHERE created_at >= UTC_DATE() - INTERVAL 29 DAY
      GROUP BY d`,
  );
  const dayMap = new Map<string, number>();
  for (const r of dayRows) dayMap.set(String(r.d), Number(r.c) || 0);

  // Continuous 30-day series (fill gaps with 0), oldest -> newest, in UTC.
  const byDay: { date: string; count: number }[] = [];
  const now = new Date();
  const todayUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  for (let i = 29; i >= 0; i--) {
    const key = new Date(todayUTC - i * 86_400_000).toISOString().slice(0, 10);
    byDay.push({ date: key, count: dayMap.get(key) ?? 0 });
  }

  const [sourceRows] = await pool.query<RowDataPacket[]>(
    `SELECT COALESCE(NULLIF(source, ''), 'Unknown') AS label, COUNT(*) AS c
       FROM leads
      GROUP BY label
      ORDER BY c DESC
      LIMIT 6`,
  );
  const bySource = sourceRows.map((r) => ({ label: String(r.label), count: Number(r.c) || 0 }));

  const [typeRows] = await pool.query<RowDataPacket[]>(
    `SELECT type, COUNT(*) AS c FROM leads GROUP BY type`,
  );
  const byType = { audit: 0, contact: 0 };
  for (const r of typeRows) {
    if (r.type === "audit") byType.audit = Number(r.c) || 0;
    else if (r.type === "contact") byType.contact = Number(r.c) || 0;
  }

  return {
    total: Number(t.total) || 0,
    today: Number(t.today) || 0,
    last7: Number(t.last7) || 0,
    last30: Number(t.last30) || 0,
    byDay,
    bySource,
    byType,
  };
}
