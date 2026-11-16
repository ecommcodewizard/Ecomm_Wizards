# SEO + GEO work — current status & how to resume
*Read this first in any new session or on any machine. Update it at the end of every working session.*
**Last updated:** 16 Nov 2026 · **Owner:** Mateen (GitHub `ecommcodewizard`) · **Operator:** Claude Code

---

## 1. Where we are (16 Nov 2026)
| Item | Status |
|---|---|
| Master rulebook | [MASTER-SEO-GEO-PLAN.md](MASTER-SEO-GEO-PLAN.md) — copied from the owner's file |
| Site plan | [ECOMM-WIZARDS-SEO-PLAN.md](ECOMM-WIZARDS-SEO-PLAN.md) v1.1 — **north star: qualified calls held per week** |
| Tracker | [SEO-GEO-Site-Tracker.xlsx](SEO-GEO-Site-Tracker.xlsx) — intake filled, Weekly Bookings tab, Nov KPIs, Change Log |
| PR #224 (plan + tracker) | **Merged** to `main` |
| PR #225 (day-0 audit, Ahrefs baseline, disavow tooling) | **Open** — branch `seo/day0-baseline` — docs only, safe to merge |
| Day-0 audit | Done: health **66/100** → [reports/ecommwizards.com-audit/](reports/ecommwizards.com-audit/) (FULL-AUDIT-REPORT, ACTION-PLAN, findings, screenshots, HTML report) |
| Ahrefs baseline | Done: DR 15, 888 ref. domains (~850 spam since May 2026), 0 organic keywords est. → [baseline/ahrefs-2026-11-16.md](baseline/ahrefs-2026-11-16.md) |
| GSC snapshot (owner screenshot) | 120 pages indexed · 409k not indexed (spam `?c=` URLs) · last update 09/11/2026 |
| Disavow | First file: 272 domains → [disavow/](disavow/) — waiting for full Ahrefs export |
| Code changes to the site | **None yet** |

## 2. Owner decisions so far
- Gymshark ("Ben Francis, Founder, Gymshark") **is a real client** → testimonials stay.
- Urgency countdown on `/services/shopify-store-audit` **stays** (owner's choice).
- Shopify Plus partner badge **valid until 2030** → make wording consistent; fix the CMS article `/insights/shopify-plus-development-agency` that says it was retired (content is in Payload DB, not code).
- No links were ever bought → spam links get disavowed.
- Markets: US, UK, Canada, Australia. Bookings today: 3–10/week.
- Risky tactics (Master Plan §2): **none approved**.

## 3. Waiting on the owner
1. ★ Ahrefs → Site Explorer → ecommwizards.com → Referring domains → **Export all rows** → save as `seo/disavow/refdomains-export.csv`.
2. ★ Search Console → Pages → filter "Sitemap: sitemap.xml" → export the **not-indexed** list (why only 120 pages are indexed).
3. ★ Real **Cal.com** booking link + Cal plan (webhooks?).
4. ★ Real **phone + email** for the site (WhatsApp optional).
5. ★ Google Business Profile office: real & staffed? Address (Toronto?).
6. Access: GSC, GA4, GTM, Bing WMT (or exports). CMS admin for the article fix.
7. Team bios, founder name, review profile links (Clutch, Google, Trustpilot), competitors per market (or "you propose").

## 4. Next steps for Claude (in order)
1. **Code PR 1** (new branch from `main`): sitemap adds `/insights` posts + `lastmod`; blog-post schema fixes (image URL double origin, dateModified < datePublished, real author); consistent partner-badge wording; first booking-tracking pieces (Klaviyo pages reuse the main `CalEmbed`, `lead_submit` from every form, `cta_click` / `cal_open`, booking source saved). Build + lint + typecheck + `geo:check`, then PR for owner review.
2. When item 3.1 arrives: `python -I seo/disavow/build_disavow.py seo/disavow/refdomains-export.csv` → owner uploads the file in GSC.
3. When item 3.2 arrives: diagnose the not-indexed real pages.
4. Then follow the site plan roadmap (section K) and the audit [ACTION-PLAN.md](reports/ecommwizards.com-audit/ACTION-PLAN.md); weekly rhythm in plan section J.

---

## 5. Resume on a new machine (one-time setup)
1. **Clone:** `git clone https://github.com/ecommcodewizard/Ecomm_Wizards.git` (sign in as **ecommcodewizard**; another saved login `fivefoldgrowth-source` gets 403 on this repo — if pushes fail, run `git config --local credential.https://github.com.username ecommcodewizard`).
2. **Node deps:** `npm install` (copy `.env` values from Hostinger/owner; see `.env.example`).
3. **Claude Code:** VS Code extension or CLI. Open the repo folder; `CLAUDE.md` loads automatically and points here.
4. **GitHub CLI:** `winget install GitHub.cli` → `gh auth login --hostname github.com --git-protocol https --web` → choose ecommcodewizard.
5. **claude-seo skills** (the `/seo …` commands): install Python 3.11–3.14 (tick "Add to PATH"), then
   `git clone https://github.com/AgriciDaniel/claude-seo.git` and run
   `powershell -ExecutionPolicy Bypass -File claude-seo\install.ps1` (Windows) or `bash claude-seo/install.sh` (Mac/Linux). Reload the editor.
6. **Ahrefs connector:** enabled in claude.ai connector settings (same Anthropic account). Plan: Lite, 200,000 API units/month, resets on the 10th — check units before big pulls.
7. Optional for real Core Web Vitals: a free Google PageSpeed Insights API key (claude-seo `google_auth.py`).

## 6. Start prompt for a new session
> "Read seo/STATUS.md and continue the SEO work for ecommwizards.com from section 4."

## 7. Session log
| Date | What happened |
|---|---|
| 2026-11-16 | Plan + tracker created (PR #224 merged). claude-seo installed. Day-0 audit + Ahrefs baseline + disavow tooling (PR #225 open). Owner answered audit questions. |
