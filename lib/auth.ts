import crypto from "node:crypto";
import { cookies } from "next/headers";

// Internal admin session. Auth runs ENTIRELY in the Node runtime (route handlers
// + a server layout), never in Edge middleware. The session cookie is an HMAC of
// a constant string keyed by ADMIN_PASSWORD: it cannot be forged without the
// password, and changing ADMIN_PASSWORD invalidates every existing session.
// NEVER import this file from middleware.ts (Edge can't use node:crypto).

export const COOKIE = "ew_admin";

export const COOKIE_OPTS = {
  httpOnly: true,
  secure: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 7, // 7 days
};

// Hash both sides to a fixed length first so timingSafeEqual never throws on a
// length mismatch and the comparison stays constant-time.
function safeEqual(a: string, b: string): boolean {
  const ha = crypto.createHash("sha256").update(a).digest();
  const hb = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(ha, hb);
}

export function sessionToken(): string {
  return crypto
    .createHmac("sha256", process.env.ADMIN_PASSWORD || "")
    .update("ew-admin-session-v1")
    .digest("hex");
}

export function verifyPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD || "";
  if (!expected || !password) return false;
  return safeEqual(password, expected);
}

export async function isAuthed(): Promise<boolean> {
  const value = (await cookies()).get(COOKIE)?.value;
  if (!value) return false;
  return safeEqual(value, sessionToken());
}
