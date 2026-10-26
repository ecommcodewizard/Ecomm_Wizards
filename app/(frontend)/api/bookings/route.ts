import { NextResponse } from "next/server";
import { insertBooking } from "@/lib/bookings";

// Public capture endpoint. The Cal.com embed on /book-shopify-consultation POSTs
// the bookingSuccessfulV2 payload here from the visitor's browser, because the
// free Cal.com plan has no server API or webhooks. It is unauthenticated by
// necessity (the browser calls it right after booking), so we validate the shape
// and rate-limit. We cannot cryptographically verify the booking is genuine —
// that would require the paid Cal.com webhook signature.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 15;
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

function str(v: unknown): string | null {
  if (typeof v === "string" && v.trim() !== "") return v.trim();
  if (typeof v === "number") return String(v);
  return null;
}

// Cal.com's default title is "<Event> between <Organizer> and <Attendee>", so
// the attendee name is the last segment after " and ". Best-effort only.
function nameFromTitle(title: string | null): string | null {
  if (!title) return null;
  const idx = title.toLowerCase().lastIndexOf(" and ");
  if (idx !== -1) {
    const n = title.slice(idx + 5).trim();
    if (n) return n;
  }
  return null;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const root = body && typeof body === "object" ? (body as Record<string, unknown>) : {};
  // Some embed versions nest the booking under `booking`; read that if present.
  const d =
    root.booking && typeof root.booking === "object"
      ? (root.booking as Record<string, unknown>)
      : root;

  const uid = str(d.uid);
  const title = str(d.title);
  const startTime = str(d.startTime ?? d.start ?? d.date);
  const endTime = str(d.endTime ?? d.end);
  const status = str(d.status);
  const eventTypeId = str(d.eventTypeId);
  const videoCallUrl = str(d.videoCallUrl ?? d.meetingUrl);

  // Need at least something identifying to be worth storing.
  if (!uid && !startTime) {
    return NextResponse.json({ error: "Empty booking payload" }, { status: 400 });
  }

  try {
    await insertBooking({
      uid,
      title,
      name: nameFromTitle(title),
      startTime,
      endTime,
      status,
      eventTypeId,
      videoCallUrl,
      raw: root,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[bookings] capture failed:", e);
    return NextResponse.json({ error: "Could not store booking" }, { status: 500 });
  }
}
