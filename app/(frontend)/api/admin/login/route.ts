import { NextResponse } from "next/server";
import { verifyPassword, sessionToken, COOKIE, COOKIE_OPTS } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Slow brute force with a small in-memory per-IP attempt limit. This Map is its
// own module state, separate from the lead route's limiter. Resets on redeploy.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 10;
const attempts = new Map<string, number[]>();
function tooMany(ip: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  attempts.set(ip, recent);
  return recent.length > MAX_ATTEMPTS;
}

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (tooMany(ip)) {
    return NextResponse.json({ error: "Too many attempts. Please wait a few minutes." }, { status: 429 });
  }

  let password = "";
  try {
    const body = (await req.json()) as { password?: unknown };
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!verifyPassword(password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, sessionToken(), COOKIE_OPTS);
  return res;
}
