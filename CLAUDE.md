# Ecomm Wizards — notes for Claude

This repo **is the live site** (https://ecommwizards.com, Next.js + Payload, hosted on Hostinger). Merging to `main` deploys to production.

## Working rules
- Work on a branch; open a PR; the owner approves before anything merges. Never push to `main`.
- Before asking for review: `npm run build`, `npm run lint`, `npm run typecheck`; for city/geo pages also `npm run geo:check`.
- Ask before commits, pushes, merges, deleting pages, or anything outward-facing.

## SEO / GEO work
- The rulebook is [seo/MASTER-SEO-GEO-PLAN.md](seo/MASTER-SEO-GEO-PLAN.md). The site plan is [seo/ECOMM-WIZARDS-SEO-PLAN.md](seo/ECOMM-WIZARDS-SEO-PLAN.md). Follow the site plan's priorities and rhythm; cite Master Plan § numbers.
- **North star: qualified calls held per week.** Pick the task closest to a booked call.
- Progress and logs live in [seo/SEO-GEO-Site-Tracker.xlsx](seo/SEO-GEO-Site-Tracker.xlsx) (Checklist, Routine, Approvals, Keywords, Content, Links, AI Prompts, KPIs, Weekly Bookings, Change Log). Log every ranking/conversion-affecting change in the Change Log.
- **Permission Gate (Master Plan §2):** any ⚠️ tactic (R1–R12, D1) needs the owner's written approval on the Approvals tab first. Never do the ⛔ list (fake reviews/stats/quotes, cloaking, link schemes, copying content).
- Keep the geo guardrails in `lib/geo/forbidden.ts` (no LocalBusiness/Review/AggregateRating schema or invented addresses on city pages). No new city pages without approval (R8).
- Run `/seo drift compare` before merging changes to page templates; `/seo audit` quarterly.
- Ahrefs is the Lite plan (no API): research uses CSV exports saved under `seo/research/` per [seo/research/README.md](seo/research/README.md).
- Never invent numbers, clients, reviews or credentials; case-study numbers only when verified.
