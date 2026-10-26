import { getCaseStudyBySlug } from "@/lib/case-studies";
import { CASE_STUDY_VIDEOS, posterFor } from "@/lib/case-study-videos";

// Video sitemap for the case-study preview videos. Each video is associated with
// its case study's canonical page. Google discovers this via robots.txt.
export const dynamic = "force-static";

const SITE = "https://ecommwizards.com";

const esc = (s: string) =>
  s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c] as string));

export function GET() {
  const items = Object.entries(CASE_STUDY_VIDEOS).map(([slug, video]) => {
    const cs = getCaseStudyBySlug(slug);
    const title = cs ? `${cs.brandName} Shopify Case Study` : slug;
    const desc = (cs?.metaDescription || cs?.heroDescription || title).slice(0, 2000);
    return { slug, video, poster: posterFor(video), title, desc };
  });

  const urls = items
    .map(
      (it) => `  <url>
    <loc>${SITE}/case-studies/${it.slug}</loc>
    <video:video>
      <video:thumbnail_loc>${SITE}${it.poster}</video:thumbnail_loc>
      <video:title>${esc(it.title)}</video:title>
      <video:description>${esc(it.desc)}</video:description>
      <video:content_loc>${SITE}${it.video}</video:content_loc>
    </video:video>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
