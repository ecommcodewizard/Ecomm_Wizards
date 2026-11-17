import { z } from "zod";

// Lead validation. Only name + a valid email are strictly required — every other
// field is optional so a genuine lead is never rejected over a minor field. Max
// lengths mirror the DB columns to avoid truncation errors.
const name = z.string().trim().min(1, "Name is required").max(255);
const email = z.string().trim().min(1, "Email is required").email("Enter a valid email").max(320);
const opt = (max: number) => z.string().trim().max(max).optional().default("");

// Where the visitor came from (lib/tracking.ts). Optional and size-capped; it is
// stored only inside the lead's `raw` JSON, so no DB column or migration is
// needed. Without it in the schema, zod would silently strip it.
const attrField = z.string().trim().max(512).optional();
const attribution = z
  .object({
    page: attrField, // page the form was submitted on
    landing_page: attrField, // first page of the visitor's first visit
    referrer: attrField,
    utm_source: attrField,
    utm_medium: attrField,
    utm_campaign: attrField,
    utm_term: attrField,
    utm_content: attrField,
    gclid: attrField,
    first_seen: attrField,
  })
  .optional();

export const auditSchema = z.object({
  type: z.literal("audit"),
  name,
  email,
  phone: opt(64),
  company: opt(255),
  url: opt(512),
  situation: z.array(z.string().max(255)).max(20).optional().default([]),
  source: opt(128),
  attribution,
  _gotcha: z.string().optional(),
});

export const contactSchema = z.object({
  type: z.literal("contact"),
  name,
  email,
  company: opt(255),
  phone: opt(64),
  budget: opt(64),
  services: opt(255),
  referral: opt(128), // -> stored as `source`
  project_details: opt(5000), // -> stored as `message`
  // Geo programme embedded form (components/ui/LeadForm.tsx). All optional so
  // the original contact page keeps working unchanged.
  url: opt(512), // qualifying website URL
  landing_page: opt(512), // path of the page the form was on (attribution)
  ts: z.number().int().optional(), // client mount timestamp (bot gate in the API)
  attribution,
  _gotcha: z.string().optional(),
});

// Free creative audit (Creative Strategy lander). Maps onto existing lead columns:
// company<-brand, url<-store/product URL, budget<-monthly ad spend,
// services<-primary platform, situation<-creative challenges. No DB migration.
export const creativeAuditSchema = z.object({
  type: z.literal("creative-audit"),
  name,
  email,
  phone: opt(64),
  company: opt(255), // brand
  url: opt(512), // store or product URL
  budget: opt(64), // monthly ad spend
  services: opt(255), // primary platform
  situation: z.array(z.string().max(255)).max(20).optional().default([]), // creative challenges
  source: opt(128),
  attribution,
  _gotcha: z.string().optional(),
});

export const leadSchema = z.discriminatedUnion("type", [auditSchema, contactSchema, creativeAuditSchema]);
export type LeadPayload = z.infer<typeof leadSchema>;
