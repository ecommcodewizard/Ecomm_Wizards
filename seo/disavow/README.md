# Spam cleanup — ecommwizards.com (Master Plan §3.6 NEG, §18.2)

## 1. Spam backlinks → disavow file
Since May 2026 ~850 spam domains link to us (link-seller and PBN networks: `*-seoexpress-*.store`, `*-outrank-hq-*.store`, `*-link-baron-*.store`, dozens of `*.shop`). Owner confirmed we never bought them.

**Status:** [disavow-ecommwizards.txt](disavow-ecommwizards.txt) holds **272 domains** from the first 300 referring domains (pulled via the Ahrefs connector). [review.txt](review.txt) lists 21 older/unclear domains not auto-disavowed.

**To finish (owner, ~5 min):**
1. Ahrefs → Site Explorer → `ecommwizards.com` (mode: domain and all subdomains) → **Referring domains** → **Export** → all rows (CSV).
2. Save it here as `refdomains-export.csv`.
3. Claude runs `python -I build_disavow.py refdomains-export.csv` → the full file (~850 domains) + an updated review list.
4. Upload at https://search.google.com/search-console/disavow-links → choose the **ecommwizards.com** Domain property → upload `disavow-ecommwizards.txt`. (Uploading replaces any earlier file, so always upload the full list.)
5. Re-run monthly while the attack continues (new spam keeps appearing); log each upload in the tracker's Change Log.

Rules used by the script: never disavow the KEEP list (za.com, diigo.com, zigpoll.com, parse.gl, nitter mirrors…) or anything with ≥100 organic traffic; disavow link-selling names, spam TLDs with no traffic, and zero-traffic domains first seen from June 2025.

## 2. The ~409k "Not indexed" spam URLs in Search Console
These are the `?c=` URLs the spam links point to. Status today: the site answers them with **410 Gone** (`middleware.ts`) and `robots.txt` blocks `/*?c=` and `/*&c=`.

- **They don't hurt rankings.** "Not indexed" means Google is *not* showing them. The report just lists every URL Google has heard of.
- **There is no button to delete them from the report.** Search Console's Removals tool only hides *indexed* URLs; these aren't indexed. The count falls on its own as Google forgets them (usually months).
- **What we keep doing:** 410 + robots block (saves crawl budget for real pages), disavow the domains that create the links, and watch the Pages report for "Indexed, though blocked by robots.txt". If that ever appears for `?c=` URLs, remove the robots block so Google can see the 410, and use Removals → "Remove all URLs with this prefix" (`https://ecommwizards.com/?c=`) as a temporary 6-month hide.

## 3. The real indexing issue: only 120 pages indexed
The sitemap lists 144 URLs plus 11 blog posts, but Search Console shows 120 indexed. Next step: Search Console → Pages → **filter "Sitemap: https://ecommwizards.com/sitemap.xml"** → export the not-indexed list, so we know which real pages are missing and why (likely "Discovered – currently not indexed" on city pages, plus the blog posts that aren't in the sitemap yet).
