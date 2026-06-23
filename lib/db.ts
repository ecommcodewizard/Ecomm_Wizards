import mysql, { type Pool } from "mysql2/promise";

// Single MySQL connection pool, reused across requests. Passenger runs one
// long-lived Node process, so a module-level pool is correct; the globalThis
// cache also survives dev hot-reloads. NEVER import this from middleware
// (Edge runtime can't use mysql2) — only API routes / server components.
declare global {
  // eslint-disable-next-line no-var
  var __leadPool: Pool | undefined;
}

export function getPool(): Pool {
  if (!global.__leadPool) {
    global.__leadPool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT ?? 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 5, // Hostinger shared MySQL caps concurrent connections
      maxIdle: 2,
      idleTimeout: 60_000,
      enableKeepAlive: true,
      timezone: "Z",
    });
  }
  return global.__leadPool;
}
