/**
 * Extracts clean, structured content from WordPress/Elementor HTML exports
 * and writes JSON files used to build Next.js pages.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT  = join(__dir, '..');
const SRC   = join(ROOT, 'pages txts');
const OUT   = join(ROOT, 'scripts', 'extracted');

mkdirSync(OUT, { recursive: true });

// ── helpers ──────────────────────────────────────────────────────────────────

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ').replace(/&#\d+;/g, ' ').replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ').trim();
}

function extractMeta(html) {
  const title       = (html.match(/<title>([^<]+)<\/title>/i)  || [])[1] || '';
  const description = (html.match(/name="description"\s+content="([^"]+)"/i) || [])[1] || '';
  const h1raw       = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '';
  return { title: title.trim(), description: description.trim(), h1: strip(h1raw) };
}

function extractTags(html, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  const results = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = strip(m[1]);
    if (text.length > 3 && text.length < 2000) results.push(text);
  }
  return [...new Set(results)];
}

function extractButtons(html) {
  // elementor buttons
  const re = /<a[^>]*class="[^"]*elementor-button[^"]*"[^>]*href="([^"]*)"[^>]*>[\s\S]*?<span[^>]*class="[^"]*elementor-button-text[^"]*"[^>]*>([\s\S]*?)<\/span>/gi;
  const results = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    const href = m[1].replace(/https?:\/\/ecommwizards\.com/, '');
    const text = strip(m[2]);
    if (text) results.push({ text, href });
  }
  return results;
}

function extractStats(html) {
  // numbers like "700+" "8+" "$900M+"
  const re = /\b(\d[\d,]*\+?%?|\$[\d,]+[KMB]+\+?)\b/g;
  const all = [];
  let m;
  while ((m = re.exec(html)) !== null) all.push(m[1]);
  return [...new Set(all)].slice(0, 20);
}

function extractImages(html) {
  const re = /<img[^>]+src="([^"]+ecommwizards\.com[^"]+)"[^>]*(?:alt="([^"]*)")?[^>]*>/gi;
  const results = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    const src = m[1];
    const alt = (m[2] || '').trim();
    if (!src.includes('/wp-content/plugins/') && !src.includes('gravatar')) {
      results.push({ src, alt });
    }
  }
  return results.slice(0, 30);
}

// ── process each file ─────────────────────────────────────────────────────────

const files = [
  { file: 'homepage.txt',                      slug: 'home',                       name: 'Homepage' },
  { file: 'aboutus.txt',                        slug: 'about-shopify-agency',       name: 'About' },
  { file: 'Contactpage.txt',                    slug: 'contact-shopify-agency',     name: 'Contact' },
  { file: 'Custom Shopify store development.txt', slug: 'shopify-store-development', name: 'Build' },
  { file: 'Figma to Shopify Conversion.txt',    slug: 'figma-to-shopify-conversion', name: 'Figma to Shopify' },
  { file: 'Free shopify store audit.txt',       slug: 'free-shopify-store-audit',   name: 'Free Audit' },
  { file: 'Shopify App development.txt',        slug: 'shopify-app-development',    name: 'App Dev' },
  { file: 'Shopify ERP Integration.txt',        slug: 'erp-connections-to-shopify', name: 'ERP' },
  { file: 'Shopify POS Setup.txt',              slug: 'shopify-pos-setup',          name: 'POS' },
  { file: 'Shopify Plus B2B.txt',               slug: 'shopify-b2b-store-setup',    name: 'B2B' },
  { file: 'Shopify SEO Agency.txt',             slug: 'shopify-seo-agency',         name: 'SEO' },
  { file: 'book a call.txt',                    slug: 'book-shopify-consultation',  name: 'Book a Call' },
];

const summary = [];

for (const { file, slug, name } of files) {
  const html = readFileSync(join(SRC, file), 'utf8');
  const meta    = extractMeta(html);
  const h2s     = extractTags(html, 'h2');
  const h3s     = extractTags(html, 'h3');
  const h4s     = extractTags(html, 'h4');
  const paras   = extractTags(html, 'p').filter(t => t.split(' ').length > 5);
  const lis     = extractTags(html, 'li').filter(t => t.split(' ').length > 1 && t.length < 300);
  const buttons = extractButtons(html);
  const stats   = extractStats(html);
  const images  = extractImages(html);

  const data = { slug, name, meta, h2s, h3s, h4s, paras, lis, buttons, stats, images };
  writeFileSync(join(OUT, `${slug}.json`), JSON.stringify(data, null, 2));

  summary.push({ slug, name, h2Count: h2s.length, h3Count: h3s.length, paraCount: paras.length, liCount: lis.length });
  console.log(`✓ ${name.padEnd(20)} — ${h2s.length} h2s, ${h3s.length} h3s, ${paras.length} paras, ${lis.length} lis, ${images.length} imgs`);
}

writeFileSync(join(OUT, '_summary.json'), JSON.stringify(summary, null, 2));
console.log(`\nDone. JSON files written to scripts/extracted/`);
