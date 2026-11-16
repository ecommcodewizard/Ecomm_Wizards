"""Build a Google disavow file for ecommwizards.com from Ahrefs referring domains.

Input: an Ahrefs "Referring domains" export (CSV/TSV, UTF-8 or UTF-16) or
refdomains-raw.txt (domain<TAB>traffic<TAB>first_seen).
Output: disavow-ecommwizards.txt (upload to Google's Disavow Links tool) and
review.txt (domains that need a human look before disavowing).

Rules (Master Plan 18.2: disavow only a clear, large spam pattern):
  * never disavow the KEEP list or anything with organic traffic >= 100
  * disavow names that advertise link selling / SEO spam
  * disavow spam-heavy TLDs (.shop .store .click .bond ...) with no traffic
  * disavow zero-traffic domains first seen from 2025-06 (the attack window)
  * everything else -> review.txt

Usage: python build_disavow.py <export.csv|refdomains-raw.txt>
"""
import csv
import io
import re
import sys
from datetime import date
from pathlib import Path

KEEP = {
    "za.com", "diigo.com", "zigpoll.com", "phacility.com", "parse.gl",
    "nitter.net", "kavin.rocks", "poast.org", "jakobs.systems", "tntcode.com",
}
SPAM_NAME = re.compile(
    r"seo|backlink|link|rank|pbn|guest-?post|outrank|fiverr|dofollow|"
    r"high-?da|niche-?edit|traffic|indexer|domains?-for|aged-domain",
    re.I,
)
SPAM_TLDS = (".shop", ".store", ".click", ".bond", ".homes", ".top", ".icu",
             ".xyz", ".site", ".website", ".sale", ".online", ".space", ".cv")
ATTACK_START = "2025-06-01"


def read_rows(path: Path):
    raw = path.read_bytes()
    text = raw.decode("utf-16") if raw[:2] in (b"\xff\xfe", b"\xfe\xff") else raw.decode("utf-8-sig")
    if path.suffix == ".txt":
        for line in text.splitlines():
            parts = line.strip().split("\t")
            if parts and parts[0]:
                yield parts[0].lower(), int(parts[1] or 0), parts[2] if len(parts) > 2 else ""
        return
    dialect = "excel-tab" if "\t" in text.splitlines()[0] else "excel"
    reader = csv.DictReader(io.StringIO(text), dialect=dialect)
    cols = {c.lower().strip(): c for c in reader.fieldnames or []}
    dom = next(cols[c] for c in cols if c in ("domain", "referring domain", "referring domains"))
    trf = next((cols[c] for c in cols if "traffic" in c), None)
    fst = next((cols[c] for c in cols if "first seen" in c), None)
    for r in reader:
        d = (r.get(dom) or "").strip().lower()
        if not d:
            continue
        t = r.get(trf) if trf else "0"
        try:
            t = int(float(str(t).replace(",", "") or 0))
        except ValueError:
            t = 0
        yield d, t, (r.get(fst) or "")[:10] if fst else ""


def classify(domain: str, traffic: int, first_seen: str) -> str:
    if domain in KEEP or traffic >= 100:
        return "keep"
    if SPAM_NAME.search(domain):
        return "disavow"
    if domain.endswith(SPAM_TLDS) and traffic == 0:
        return "disavow"
    if traffic == 0 and first_seen and first_seen >= ATTACK_START:
        return "disavow"
    return "review"


def main():
    src = Path(sys.argv[1] if len(sys.argv) > 1 else "refdomains-raw.txt")
    out = {"disavow": [], "review": [], "keep": []}
    for d, t, f in read_rows(src):
        out[classify(d, t, f)].append((d, t, f))
    here = Path(__file__).parent
    lines = [
        f"# Disavow file for ecommwizards.com - generated {date.today()} from {src.name}",
        "# Spam link attack since May 2026 (link-seller / PBN networks). Master Plan 18.2.",
        f"# {len(out['disavow'])} domains. Review before uploading at",
        "# https://search.google.com/search-console/disavow-links (Domain property).",
    ] + [f"domain:{d}" for d, _, _ in sorted(set(out["disavow"]))]
    (here / "disavow-ecommwizards.txt").write_text("\n".join(lines) + "\n", encoding="utf-8")
    (here / "review.txt").write_text(
        "# Not auto-disavowed: check these by hand (domain, traffic, first seen)\n"
        + "\n".join(f"{d}\t{t}\t{f}" for d, t, f in sorted(out["review"])) + "\n", encoding="utf-8")
    print({k: len(v) for k, v in out.items()})


if __name__ == "__main__":
    main()
