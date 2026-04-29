import { readFileSync, writeFileSync } from 'fs';

const content = readFileSync(
  new URL('../wordpress-export.xml.xml', import.meta.url),
  'utf8'
);

// Extract all <item> blocks
const items = [];
const itemRegex = /<item>([\s\S]*?)<\/item>/g;
let match;
while ((match = itemRegex.exec(content)) !== null) {
  items.push(match[1]);
}
console.log(`Total <item> blocks found: ${items.length}`);

function extractTag(block, tag) {
  // CDATA variant
  let re = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i');
  let m = block.match(re);
  if (m) return m[1].trim();
  // plain variant
  re = new RegExp(`<${tag}[^>]*>([^<]*)<\\/${tag}>`, 'i');
  m = block.match(re);
  return m ? m[1].trim() : '';
}

function extractMeta(block, key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern =
    '<wp:meta_key><!\\[CDATA\\[' + escaped + '\\]\\]><\\/wp:meta_key>' +
    '[\\s\\S]*?' +
    '<wp:meta_value><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/wp:meta_value>';
  const re = new RegExp(pattern);
  const m = block.match(re);
  return m ? m[1].trim() : '';
}

const pages = [];
const posts = [];
const skipped = {};

for (const block of items) {
  const postType = extractTag(block, 'wp:post_type');
  if (postType !== 'page' && postType !== 'post') {
    skipped[postType] = (skipped[postType] || 0) + 1;
    continue;
  }

  const title   = extractTag(block, 'title');
  const slug    = extractTag(block, 'wp:post_name');
  const id      = extractTag(block, 'wp:post_id');
  const parent  = extractTag(block, 'wp:post_parent');
  const status  = extractTag(block, 'wp:status');
  const date    = extractTag(block, 'wp:post_date');
  const encoded = extractTag(block, 'content:encoded');
  const excerpt = extractTag(block, 'excerpt:encoded');

  const linkMatch = block.match(/<link>([^<]+)<\/link>/);
  const link = linkMatch ? linkMatch[1] : '';

  const seoTitle = extractMeta(block, '_yoast_wpseo_title');
  const seoDesc  = extractMeta(block, '_yoast_wpseo_metadesc');
  const seoKw    = extractMeta(block, '_yoast_wpseo_focuskw');

  const plain = encoded.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 400);

  const record = {
    id,
    title,
    slug,
    link,
    parent,
    status,
    date,
    excerpt,
    seoTitle,
    seoDesc,
    seoKw,
    contentPreview: plain,
    hasContent: encoded.trim().length > 0,
    rawContent: encoded,
  };

  if (postType === 'page') pages.push(record);
  else posts.push(record);
}

console.log(`\n=== PAGES (${pages.length}) ===`);
pages.forEach(p =>
  console.log(`  [${String(p.id).padStart(4)}] ${p.status.padEnd(12)} slug="${p.slug.padEnd(35)}" | ${p.title}`)
);

console.log(`\n=== POSTS (${posts.length}) ===`);
posts.forEach(p =>
  console.log(`  [${String(p.id).padStart(4)}] ${p.status.padEnd(12)} slug="${p.slug.padEnd(35)}" | ${p.title}`)
);

console.log('\n=== SKIPPED TYPES ===');
for (const [t, c] of Object.entries(skipped).sort()) {
  console.log(`  ${t}: ${c}`);
}

// Write JSON for next step (strip rawContent to keep it manageable for the summary)
const summary = {
  pages: pages.map(({ rawContent: _r, ...rest }) => rest),
  posts: posts.map(({ rawContent: _r, ...rest }) => rest),
};
const outDir = new URL('../lib/', import.meta.url);

// Build TypeScript content
function escapeTS(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function renderRecord(r) {
  return `  {
    id: ${JSON.stringify(r.id)},
    title: ${JSON.stringify(r.title)},
    slug: ${JSON.stringify(r.slug)},
    link: ${JSON.stringify(r.link)},
    parentId: ${JSON.stringify(r.parent)},
    status: ${JSON.stringify(r.status)},
    date: ${JSON.stringify(r.date)},
    excerpt: \`${escapeTS(r.excerpt)}\`,
    seoTitle: ${JSON.stringify(r.seoTitle)},
    seoDescription: ${JSON.stringify(r.seoDesc)},
    seoKeyword: ${JSON.stringify(r.seoKw)},
    content: \`${escapeTS(r.rawContent)}\`,
  }`;
}

const ts = `// AUTO-GENERATED from wordpress-export.xml.xml — do not edit by hand
// Run: node scripts/parse-wp.mjs to regenerate

export interface WPPage {
  id: string;
  title: string;
  slug: string;
  link: string;
  parentId: string;
  status: string;
  date: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  seoKeyword: string;
  content: string; // raw HTML from WordPress
}

export const wpPages: WPPage[] = [
${pages.map(renderRecord).join(',\n')}
];

export const wpPosts: WPPage[] = [
${posts.map(renderRecord).join(',\n')}
];

/** Look up a page by its slug */
export function getPageBySlug(slug: string): WPPage | undefined {
  return wpPages.find((p) => p.slug === slug);
}

/** Look up a post by its slug */
export function getPostBySlug(slug: string): WPPage | undefined {
  return wpPosts.find((p) => p.slug === slug);
}
`;

writeFileSync(new URL('data.ts', outDir), ts, 'utf8');
console.log('\n✓ Wrote lib/data.ts');
