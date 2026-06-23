import nodemailer, { type Transporter } from "nodemailer";
import type { LeadInput } from "./leads";

// Email sending is isolated here so swapping the provider (e.g. to Resend) later
// is a one-file change. Currently: SMTP via Nodemailer (Gmail uses smtp.gmail.com
// with a Google App Password — NOT the normal account password).
let _transport: Transporter | null = null;

function getTransport(): Transporter {
  if (!_transport) {
    const port = Number(process.env.SMTP_PORT ?? 465);
    _transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  return _transport;
}

export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}) {
  return getTransport().sendMail({
    from: process.env.MAIL_FROM,
    to: opts.to,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
  });
}

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] ?? c);

// The single email we send: an internal notification to the team with every
// captured field. replyTo is set to the lead's email so a reply goes to them.
export function teamNotificationEmail(lead: LeadInput): { subject: string; html: string; text: string } {
  const label = lead.type === "audit" ? "Audit" : "Contact";
  const fields = ([
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone ?? ""],
    ["Company", lead.company ?? ""],
    ["Store URL", lead.url ?? ""],
    ["Situation", (lead.situation ?? []).join(", ")],
    ["Budget", lead.budget ?? ""],
    ["Services", lead.services ?? ""],
    ["How they found us", lead.source ?? ""],
    ["Message", lead.message ?? ""],
  ] as [string, string][]).filter(([, v]) => v !== "" && v != null);

  const rowsHtml = fields
    .map(
      ([k, v]) =>
        `<tr><td style="padding:7px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f8fafc;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="padding:7px 12px;border:1px solid #e5e7eb;vertical-align:top">${esc(v).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const subject = `New ${label} lead - ${lead.name}${lead.company ? ` (${lead.company})` : ""}`;
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;max-width:660px">
    <h2 style="margin:0 0 4px;font-size:18px;color:#000">New ${label} lead</h2>
    <p style="margin:0 0 16px;color:#64748b;font-size:13px">Reply to this email to respond directly to ${esc(lead.email)}.</p>
    <table style="border-collapse:collapse;width:100%;font-size:14px;color:#0f172a">${rowsHtml}</table>
  </div>`;
  const text = fields.map(([k, v]) => `${k}: ${v}`).join("\n");
  return { subject, html, text };
}
