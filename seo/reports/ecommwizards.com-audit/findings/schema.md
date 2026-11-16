# Schema / Structured Data Findings: ecommwizards.com
Date: 2026-11-16. Method: raw-HTML fetch (render_page.py --mode never) of 12 URLs plus 1 post (/insights/shopify-cro-agency). Next.js server-renders JSON-LD, so no SPA rendering was needed.

**Category score: 68/100**

## Detection by page
| Page | Types found |
|---|---|
| / , /insights | Organization + WebSite (global @graph only) |
| /about-shopify-agency | global graph + FAQPage (4 Q) + BreadcrumbList |
| /book-shopify-consultation | global graph + FAQPage (4 Q); no BreadcrumbList |
| /services/shopify-development-agency | global graph + FAQPage (10 Q) + BreadcrumbList + Service |
| /services/shopify-pos-setup | global graph + BreadcrumbList + FAQPage + Service |
| /services/migration/magento-to-shopify | global graph + FAQPage + BreadcrumbList + Service |
| /services/shopify-development-agency/charlotte | global graph + FAQPage (8) + BreadcrumbList + Service (areaServed AdministrativeArea) |
| /services/ecommerce-agency/new-york | same pattern, FAQPage (9) |
| /case-studies/111skin-... | global graph + Article + BreadcrumbList |
| /reviews | global graph + BreadcrumbList only |
| /faqs | global graph + FAQPage + BreadcrumbList |
| /insights/shopify-cro-agency | global graph + BlogPosting (+Person author, ImageObject, Organization publisher) + BreadcrumbList + FAQPage |

All blocks parse as valid JSON and use https://schema.org. No LocalBusiness, Review or AggregateRating anywhere (guardrail respected).

Correction to the brief: the static service pages checked (development, POS, Magento) DO already output a Service node (@id `...#service`, serviceType, provider -> `/#organization`, url, description). The "no Service on static pages" gap is smaller than assumed; verify the remaining static service pages (not sampled) the same way.

## Findings

### High
1. **Blog post image URL is malformed.** `image` = `https://ecommwizards.comhttps://br-solitary-firefly-...neon.tech/ecomm-wizards-media/blog/...jpg` (site origin prepended to an already absolute URL). Invalid for Article image requirements and exposes an internal storage hostname. Fix the URL builder (prefix only when the path is relative). Likely affects every post with a Payload-hosted image.
2. **dateModified earlier than datePublished** on the sampled post (published 2026-11-13, modified 2026-11-12). Contradictory freshness signal, likely a timezone or field-mapping bug. Dates are also date-only; prefer full ISO 8601 with offset.
3. **Post author is a Person named "Ecomm Wizards"** with only `worksFor`. A Person must be a human. No url, image, jobTitle or sameAs, which weakens E-E-A-T. Use a real named author with a profile page, or make the author an Organization reference (`/#organization`) until one exists.

### Medium
4. **Duplicate/conflicting Organization nodes.** The post publisher is a second Organization node reusing `@id .../#organization` with a different shape (logo as ImageObject) next to the global node (logo as string). The case study emits two more @id-less Organization nodes (author, publisher). Replace all with `{"@id": "https://ecommwizards.com/#organization"}` references.
5. **Organization is thin.** Logo is a plain string (use ImageObject). No contactPoint, email, foundingDate, address. sameAs has 4 social profiles only; add Shopify Partner directory, Clutch, Crunchbase, YouTube if they exist.
6. **Case-study Article is minimal.** No datePublished/dateModified; author is an @id-less Organization. The case-study video listed in /video-sitemap.xml has no VideoObject on the page.
7. **Mojibake in post description** (double-encoded UTF-8 apostrophe). Fix encoding in the source or serializer.
8. No BreadcrumbList on /book-shopify-consultation; /insights has no CollectionPage/Blog node.

### Low / Info
9. FAQPage appears on about, booking, services, city pages, posts and /faqs. Google FAQ rich results ended May 2026, so Info only: harmless, AI-understanding only, benefit unconfirmed. Do not expand; keep text matching visible content.
10. WebSite has no SearchAction. Skip unless real site search exists.
11. Service nodes lack offers; fine without verified pricing. City Service nodes are correct (provider by @id, areaServed AdministrativeArea, no LocalBusiness).
12. /reviews has only a breadcrumb. Correct per guardrails: do not add Review/AggregateRating.
13. Service description on the development page carries "150+ stores built" in markup; confirm it is verified.
14. ProfessionalService on the Organization only after a real office address is confirmed and the owner approves.

## What works
- Single global graph with stable @ids (`/#organization`, `/#website`); Services link to it via `provider`.
- Service nodes on static and city pages are well formed; city pages respect geo guardrails.
- Absolute URLs, https context, valid JSON on all 13 pages, BreadcrumbList on nearly every inner page.
- Server-rendered, visible without JS (good for AI crawlers).
- Video sitemap exists with thumbnails and content_loc.

## Top 3 gaps: ready-to-use JSON-LD (placeholders in brackets)

### 1. Organization enrichment (replace global node)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ecommwizards.com/#organization",
  "name": "Ecomm Wizards",
  "url": "https://ecommwizards.com",
  "logo": {
    "@type": "ImageObject",
    "@id": "https://ecommwizards.com/#logo",
    "url": "https://ecommwizards.com/images/ecomm-green.png",
    "width": 636,
    "height": 457
  },
  "image": { "@id": "https://ecommwizards.com/#logo" },
  "description": "Shopify experts specializing in store builds, migrations, optimization, custom apps, B2B, POS, and marketing.",
  "foundingDate": "[YYYY - confirm]",
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "[confirmed public email]",
    "availableLanguage": ["English"],
    "url": "https://ecommwizards.com/book-shopify-consultation"
  }],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61591725146049",
    "https://x.com/theecommwizards",
    "https://www.instagram.com/theecommwizards/",
    "https://www.linkedin.com/company/ecomm-wizards",
    "[Shopify Partner directory URL, if listed]",
    "[Clutch / Crunchbase / YouTube URL, if they exist]"
  ]
}
```
Omit address until a real one is confirmed; keep knowsAbout as is.

### 2. Fix BlogPosting (author, dates, image, publisher by reference)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://ecommwizards.com/insights/[slug]#article",
  "headline": "[post title]",
  "description": "[clean UTF-8 description]",
  "image": "[absolute image URL, no double prefix]",
  "datePublished": "[ISO 8601, e.g. 2026-11-13T09:00:00+00:00]",
  "dateModified": "[ISO 8601, >= datePublished]",
  "mainEntityOfPage": "https://ecommwizards.com/insights/[slug]",
  "author": {
    "@type": "Person",
    "@id": "https://ecommwizards.com/team/[author-slug]#person",
    "name": "[real author name]",
    "url": "https://ecommwizards.com/team/[author-slug]",
    "jobTitle": "[title]",
    "image": "[headshot URL]",
    "sameAs": ["[author LinkedIn URL]"],
    "worksFor": { "@id": "https://ecommwizards.com/#organization" }
  },
  "publisher": { "@id": "https://ecommwizards.com/#organization" }
}
```
If no named author exists, use `"author": {"@id": "https://ecommwizards.com/#organization"}`.

### 3. VideoObject for case-study video (111SKIN example; reuse video-sitemap data)
```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "111SKIN Shopify Case Study",
  "description": "[same text as video sitemap description]",
  "thumbnailUrl": "https://ecommwizards.com/images/Case%20studies/posters/111skin%20video.webp",
  "contentUrl": "https://ecommwizards.com/images/Case%20studies/111skin%20video.mp4",
  "uploadDate": "[ISO 8601 date, confirm]",
  "duration": "[PT#M#S, confirm]",
  "publisher": { "@id": "https://ecommwizards.com/#organization" }
}
```
Also upgrade the case-study Article: add datePublished/dateModified, author/publisher as @id references. Keep metrics (46% conversions, 21% revenue) only if verified.

## Priority order
1. Fix image URL builder, date logic, author entity (High 1-3); affects all posts.
2. Deduplicate Organization nodes via @id refs; enrich Organization.
3. VideoObject + Article dates on case studies; Service sweep of unsampled static pages.
Log template changes in the Change Log and run `/seo drift compare` before merging.
