# Agentic readiness: ecommwizards.com (2026-11-16)

Lighthouse Agentic Browsing: unavailable (PSI HTTP 429 daily quota, mobile and desktop). No X/N. Rerun with a Google API key (/seo google setup).
Agent-UX heuristic (separate from Lighthouse): 100/100, complete, on / and /book-shopify-consultation.
Overall agent-readiness score: 88/100 (judgement, not a Lighthouse figure).

## Evidence
- Server rendering: pass. 2397 words without JS on /, 903 on booking page. Real 404s (no soft-404).
- A11y tree: / 3164 nodes, 193 interactive, 0 unnamed; booking 985 nodes, 139 interactive, 0 unnamed, no div-onclick widgets, no unlabeled inputs.
- robots.txt: 2 groups; named groups for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot. No search crawler blocked at root.
- Access policy: training = per-group rules present (Google-Extended, CCBot, GPTBot, ClaudeBot, Applebot-Extended; confirm allow/deny intent in robots.txt); search = not blocked (OAI-SearchBot, PerplexityBot, root); user-triggered = not blocked (ChatGPT-User, Perplexity-User; Perplexity-User and Google-Agent generally ignore robots.txt).
- Content-Signal: absent (draft/preference; checked 2026-09-23 per vendor-matrix).
- llms.txt: 200, text/plain, 26,836 bytes, Lighthouse rules pass. llms-full.txt 404.
- Markdown: none (no Accept negotiation, no alternate link, /index.md 404).
- /.well-known: api-catalog, oauth-*, agent-card.json, ucp all 404.
- WebMCP: 0 registerTool calls, 0 static forms, no navigator.modelContext. Draft; Chrome origin trial M149-M156.
- Booking page: no static <form> found in server HTML, so the booking widget is likely a client-side embed or link-out. Not verified at runtime.

## Findings
- P2 Lighthouse not measured (quota). Fix: add PSI API key, rerun.
- P2 Booking path not machine-declared: no form/WebMCP tool. Agents can still follow named links/buttons. Verify the embed (iframe/script) exposes labelled controls to an a11y-tree agent; if it is a cross-origin iframe, ensure a plain link to the booking URL exists.
- P3 No Content-Signal line. Optional: add e.g. Content-Signal: search=yes, ai-input=yes, ai-train=no per group matching your intent.
- P3 llms.txt is large (26.8 KB); consider trimming to key pages. Optional.
- P3 Markdown, ai-catalog.json, agent-card, WebMCP absent: opportunities, not defects; skip for a lead-gen site except optionally a simple WebMCP tool for booking later.
- No P0/P1 defects.

No ranking/citation/traffic effect is promised by any item above.
