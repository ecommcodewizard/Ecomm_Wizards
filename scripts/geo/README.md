# Geo programme guardrails

Six checks over the pages registered in `lib/geo/registry.ts`, plus a runner. Each prints one line per issue (`FAIL` / `WARN` / `REVIEWED` / `SKIP`), then a summary, and exits 1 on any FAIL.

| Script | Command | What it checks |
| --- | --- | --- |
| `validate-content.ts` | `npm run geo:validate` | `validatePage` for every page (shape, unfilled `[NEEDS INPUT]` markers, proof count, unique FAQs, geo facts, inline `[src:id]` refs, word count, stale review windows) and duplicate paths. Draft/review pages get WARN, published pages FAIL. |
| `check-forbidden.ts` | `npm run geo:forbidden` | Prose plus metaTitle/metaDescription/shortTitle, markers stripped: banned filler words, em dashes, UK spellings, hard presence claims. Soft presence phrases (`in [City]`, `[City] team`) FAIL unless the exact phrase is in `page.reviewedPhrases`. |
| `check-schema.ts` | `npm run geo:schema` | Pass 1 rebuilds BreadcrumbList / FAQPage / Service JSON-LD from the content object; pass 2 (only after `next build`) parses the rendered HTML. FAIL on any type outside `ALLOWED_SCHEMA_TYPES`, any `FORBIDDEN_SCHEMA_PROPERTIES` key, FAQ text drift, missing hub crumb, LocalBusiness / PostalAddress / telephone. |
| `check-links.ts` | `npm run geo:links` | Proof slugs exist in the four case-study arrays, no bare `/case-studies` links in content, geo hub exists, forbidden twin-page cross links, and (after build) hub link present, proof cards deep-link, no `?c=` internal hrefs. |
| `check-shingles.ts` | `npm run geo:shingles` | 8-word shingle overlap across the set (min 60% unique per page) plus stricter COMPARE pairs against existing static routes when their HTML exists. |
| `velocity.ts` | `npm run geo:velocity` | Max 5 `status: "published"` flips under `lib/geo/pages` per rolling 7 days (git log). |
| `run-all.ts` | `npm run geo:check` | Runs all six in order, prints a summary table, exits 1 if any failed. |

Run from the repo root. Direct form: `npx tsx scripts/geo/<name>.ts`. Pass 2 of check-schema and the HTML parts of check-links / check-shingles need a prior `npm run build`; without one they report SKIP and still exit 0.

## When a check fails

Fix the content or the component, never the check. Do not widen an allow list, add to `reviewedPhrases` without a human reading the sentence, lower a threshold, or skip a script without asking the owner first. If a rule looks wrong, raise it; the checks encode the programme's publishing rules, not opinions.

## Publish gates (from the manual)

1. Indexed URL count in Search Console under roughly 200 (the `?c=` ghost cleanup must have collapsed first).
2. Footer city line removed site-wide.
3. Case-study verification table complete; only studies with `verified: true` may appear in `proof`.
4. Hubs live before any geo page beneath them.
5. Max 5 publishes per rolling 7 days (enforced by `velocity.ts`).

Publish checklist: flip `status` in `lib/geo/pages/<slug>.ts`, add the hub to `SERVICE_CATEGORIES` in `lib/services.ts`, purge the Hostinger CDN after deploy. `.github/workflows/checks.yml` runs `run-all.ts` on every PR and non-main push; branch protection on `main` must require that job.
