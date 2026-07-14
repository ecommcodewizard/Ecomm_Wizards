import type { RowDataPacket, ResultSetHeader } from "mysql2";
import { getPool } from "./db";

export interface BookingInput {
  uid: string | null;
  title: string | null;
  name: string | null;
  startTime: string | null; // ISO string from the embed
  endTime: string | null;
  status: string | null;
  eventTypeId: string | null;
  videoCallUrl: string | null;
  raw: Record<string, unknown>;
}

export interface BookingRow {
  id: number;
  uid: string | null;
  title: string | null;
  name: string | null;
  start_time: string | null;
  end_time: string | null;
  status: string | null;
  event_type_id: string | null;
  video_call_url: string | null;
  raw: Record<string, unknown> | null;
  created_at: string;
}

// The free Cal.com plan gives no API/webhooks and Hostinger's phpMyAdmin can be
// unreachable, so the app provisions this table itself. CREATE TABLE IF NOT
// EXISTS is idempotent (a no-op once the table is there) and only ever touches
// `bookings`. Kept in sync with db/schema.sql by hand.
const CREATE_BOOKINGS_TABLE = `CREATE TABLE IF NOT EXISTS bookings (
  id             BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  uid            VARCHAR(255)  NULL,
  title          VARCHAR(512)  NULL,
  name           VARCHAR(255)  NULL,
  start_time     DATETIME      NULL,
  end_time       DATETIME      NULL,
  status         VARCHAR(64)   NULL,
  event_type_id  VARCHAR(64)   NULL,
  video_call_url VARCHAR(1024) NULL,
  raw            JSON          NOT NULL,
  created_at     TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_uid (uid),
  KEY idx_start_time (start_time)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`;

// Runs the idempotent CREATE once per process. Cached as a promise so concurrent
// callers share one attempt; cleared on failure so the next call can retry.
let ensured: Promise<void> | null = null;
function ensureBookingsTable(): Promise<void> {
  if (!ensured) {
    ensured = getPool()
      .query(CREATE_BOOKINGS_TABLE)
      .then(() => undefined)
      .catch((e) => {
        ensured = null;
        throw e;
      });
  }
  return ensured;
}

// ISO timestamp -> MySQL DATETIME in UTC ("YYYY-MM-DD HH:MM:SS"). null if unparseable.
function toMysqlDateTime(iso: string | null): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 19).replace("T", " ");
}

// Upsert on uid so the same booking firing twice (re-render, double event) does
// not create duplicate rows, and a later fire refreshes the mutable fields.
export async function insertBooking(b: BookingInput): Promise<number> {
  await ensureBookingsTable();
  const pool = getPool();
  const [res] = await pool.execute<ResultSetHeader>(
    `INSERT INTO bookings
       (uid, title, name, start_time, end_time, status, event_type_id, video_call_url, raw)
     VALUES (?,?,?,?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE
       title = VALUES(title),
       name = VALUES(name),
       start_time = VALUES(start_time),
       end_time = VALUES(end_time),
       status = VALUES(status),
       video_call_url = VALUES(video_call_url),
       raw = VALUES(raw)`,
    [
      b.uid ?? null,
      b.title ?? null,
      b.name ?? null,
      toMysqlDateTime(b.startTime),
      toMysqlDateTime(b.endTime),
      b.status ?? null,
      b.eventTypeId ?? null,
      b.videoCallUrl ?? null,
      JSON.stringify(b.raw ?? {}),
    ],
  );
  return res.insertId;
}

export async function getBookings(limit = 200): Promise<BookingRow[]> {
  await ensureBookingsTable();
  // LIMIT can't be a bound parameter on all MySQL versions; clamp + inline.
  const n = Math.min(Math.max(Math.floor(Number(limit) || 200), 1), 1000);
  const pool = getPool();
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT * FROM bookings ORDER BY start_time DESC LIMIT ${n}`,
  );
  return rows as unknown as BookingRow[];
}

export async function deleteBooking(id: number): Promise<boolean> {
  const pool = getPool();
  const [res] = await pool.execute<ResultSetHeader>(
    `DELETE FROM bookings WHERE id = ?`,
    [id],
  );
  return res.affectedRows > 0;
}
