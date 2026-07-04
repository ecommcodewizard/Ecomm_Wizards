import { NextResponse } from "next/server";
import { leadSchema, type LeadPayload } from "@/lib/validation";
import { insertLead, type LeadInput } from "@/lib/leads";
import { sendEmail, teamNotificationEmail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Lightweight in-memory IP rate limit. Fine on a single Passenger process
// (the Map is shared across requests); resets on restart/redeploy.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 6;
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

function toLead(p: LeadPayload, ip: string, ua: string): LeadInput {
  const raw = p as unknown as Record<string, unknown>;
  if (p.type === "audit") {
    return {
      type: "audit",
      name: p.name,
      email: p.email,
      phone: p.phone || null,
      company: p.company || null,
      url: p.url || null,
      situation: p.situation && p.situation.length ? p.situation : null,
      source: p.source || null,
      raw,
      ip,
      userAgent: ua,
    };
  }
  if (p.type === "creative-audit") {
    return {
      type: "creative-audit",
      name: p.name,
      email: p.email,
      phone: p.phone || null,
      company: p.company || null, // brand
      url: p.url || null, // store/product URL
      budget: p.budget || null, // monthly ad spend
      services: p.services || null, // primary platform
      situation: p.situation && p.situation.length ? p.situation : null, // creative challenges
      source: p.source || "Creative Strategy Lander",
      raw,
      ip,
      userAgent: ua,
    };
  }
  return {
    type: "contact",
    name: p.name,
    email: p.email,
    company: p.company || null,
    phone: p.phone || null,
    budget: p.budget || null,
    services: p.services || null,
    source: p.referral || null, // contact "referral" -> source
    message: p.project_details || null, // contact "project_details" -> message
    raw,
    ip,
    userAgent: ua,
  };
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a bot filled the hidden field. Pretend success, store nothing.
  const gotcha = (body as Record<string, unknown> | null)?._gotcha;
  if (typeof gotcha === "string" && gotcha.trim()) {
    return NextResponse.json({ ok: true });
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
  }

  const lead = toLead(parsed.data, ip, req.headers.get("user-agent") ?? "");

  // Capture the lead in BOTH places if possible. The request only fails if BOTH
  // the database AND the email fail — so a single outage never loses a lead.
  let saved = false;
  let mailed = false;
  try {
    await insertLead(lead);
    saved = true;
  } catch (e) {
    console.error("[lead] DB insert failed:", e);
  }
  try {
    const msg = teamNotificationEmail(lead);
    await sendEmail({ to: process.env.MAIL_TO_TEAM ?? "", replyTo: lead.email, ...msg });
    mailed = true;
  } catch (e) {
    console.error("[lead] email failed:", e);
  }

  if (!saved && !mailed) {
    return NextResponse.json({ error: "Something went wrong. Please email us directly." }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
