# Search Console regex library — Ecomm Wizards
*Where: GSC → Performance → Search results → + Add filter → Query → Custom (regex) → "Matches regex" (or "Doesn't match regex" to exclude). GSC uses RE2; `(?i)` makes it case-insensitive. Based on Master Plan §20, adapted for an agency. Copy each block exactly.*

### Brand (use "Doesn't match" for every non-brand report)
```
(?i)(ecomm ?wizards?|ecommwizards|ecom wizards)
```

### Agency buying / hiring intent → money-page quick wins (§6.7)
```
(?i)\b(hire|hiring|cost|costs|pricing|price|prices|quote|agency|agencies|developer|developers|expert|experts|consultant|consultants|company|companies|services|freelancer|partner|near me)\b
```

### Commercial investigation → comparison / "best agency" pages, GEO prompts
```
(?i)\b(best|top|vs|versus|review|reviews|alternative|alternatives|compare|comparison|rated)\b
```

### Questions → FAQ sections, blog topics
```
(?i)^(who|what|why|how|when|where|which|can|does|do|is|are|should|will|could|would)\b
```

### Migration demand → cluster 1 (Plus & migration)
```
(?i)(migrat|replatform|switch|transfer|convert|move).*shopify|(woocommerce|magento|bigcommerce|wix|squarespace|prestashop|amazon|salesforce|opencart|volusion).*(shopify|to)
```

### Shopify Plus
```
(?i)shopify ?plus
```

### CRO → cluster 2
```
(?i)\b(cro|conversion|conversions|convert|a/?b test|ab test|split test)\b
```

### Klaviyo / email → cluster 4
```
(?i)(klaviyo|email marketing|email flows|sms marketing)
```

### Apps → cluster 5
```
(?i)(app develop|custom app|shopify app|private app|public app)
```

### Cost / pricing questions → pricing page + cost guides
```
(?i)(how much|cost|price|pricing|budget|quote|rates?)
```

### Local: our city/state pages → city-page review (R8, §14.3)
```
(?i)\b(near me|alabama|arizona|atlanta|austin|boston|california|charlotte|chicago|colorado|columbus|dallas|denver|florida|houston|los angeles|maine|maryland|miami|milwaukee|minneapolis|new jersey|new york|nyc|north carolina|orange county|philadelphia|portland|raleigh|san diego|san francisco|seattle|vermont|wisconsin)\b
```

### UK / Canada / Australia demand → market decision (§10.4), weeks 9–10
```
(?i)\b(uk|united kingdom|england|london|manchester|birmingham|scotland|canada|toronto|vancouver|montreal|calgary|ottawa|australia|sydney|melbourne|brisbane|perth|optimisation|organisation)\b
```
Better: use GSC's **Country** filter for this; the regex catches queries that name the place.

### Long-tail (5+ words)
```
^(\S+\s){4,}\S+$
```

### Year / freshness → refresh loop (§8.8)
```
\b20(2[5-9])\b
```

## How to act on the results
1. Filter → Position greater than 4.9 and smaller than 20.1 → sort by impressions.
2. Keep queries with 0 clicks or CTR < 1%.
3. Click the query → **Pages** tab: if two of our pages show, fix cannibalisation first (§7.1).
4. Add a section answering it (H2 with the query, 40–60-word direct answer, FAQ entry) using prompt P14.
5. Change Log row → compare the page at 4 and 8 weeks.
