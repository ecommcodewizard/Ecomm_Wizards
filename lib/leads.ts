import type { RowDataPacket, ResultSetHeader } from "mysql2";
import { getPool } from "./db";

export type LeadType = "audit" | "contact";

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
