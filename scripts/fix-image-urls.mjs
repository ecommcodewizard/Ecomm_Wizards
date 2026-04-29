/**
 * 1. Builds a filename → /images/filename map from public/images/
 * 2. Scans lib/data.ts for wp-content/uploads URLs and replaces with local paths
 * 3. Prints a report of matched vs unmatched URLs
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// ── 1. Build local image map (filename → /images/filename) ───────────────────
const imgDir = join(ROOT, 'public', 'images');
const localFiles = new Set(readdirSync(imgDir));

// Also build a lowercase → original map for case-insensitive matching
const lowerMap = new Map();
for (const f of localFiles) lowerMap.set(f.toLowerCase(), f);

function resolveLocal(wpUrl) {
  // Extract just the filename from the WP URL
  // e.g. https://ecommwizards.com/wp-content/uploads/2026/01/hero.webp → hero.webp
  const raw = wpUrl.split('/').pop()?.split('?')[0] ?? '';
  if (!raw) return null;

  // Exact match
  if (localFiles.has(raw)) return `/images/${raw}`;

  // Case-insensitive match
  const lower = raw.toLowerCase();
  if (lowerMap.has(lower)) return `/images/${lowerMap.get(lower)}`;

  // WordPress sometimes appends -NNNxNNN size suffixes before the extension.
  // Try stripping them: image-300x200.webp → image.webp
  const stripped = raw.replace(/-\d+x\d+(\.[^.]+)$/, '$1');
  if (stripped !== raw) {
    if (localFiles.has(stripped)) return `/images/${stripped}`;
    const sl = stripped.toLowerCase();
    if (lowerMap.has(sl)) return `/images/${lowerMap.get(sl)}`;
  }

  return null;
}

// ── 2. Process lib/data.ts ───────────────────────────────────────────────────
const dataPath = join(ROOT, 'lib', 'data.ts');
let src = readFileSync(dataPath, 'utf8');

const wpUrlRe = /https?:\/\/ecommwizards\.com\/wp-content\/uploads\/[^\s"'`)>]+/g;

let matched = 0, unmatched = 0;
const missed = new Set();

src = src.replace(wpUrlRe, (url) => {
  // strip trailing punctuation that may have been caught
  const clean = url.replace(/[.,;)\]>'"]+$/, '');
  const local = resolveLocal(clean);
  if (local) { matched++; return local; }
  missed.add(clean.split('/').pop() ?? clean);
  unmatched++;
  return clean; // leave as-is
});

writeFileSync(dataPath, src);

// ── 3. Output mapping for use in pages ──────────────────────────────────────
// Produce a curated image-map.ts that page components can import
const CURATED = [
  // Homepage / global
  ['logo',                  'cropped-cropped-ecomm-golden.png'],
  ['heroBg',                'video_cover_2048x.webp'],
  ['shopifyPartner',        'shopifypartners-1.png'],
  ['shopifyPlus',           '65d7a4e5897af90454fdd5c7_shopify_plus-300x67-1.png'],
  // About
  ['aboutHero',             'about_main_image_1024x1024-1.webp'],
  ['brooke',                'Brooke_06ed70b4-ed6c-424a-a067-cd3985d1d53a.webp'],
  ['jack',                  'Jack.webp'],
  ['giana',                 'Giana.webp'],
  ['julia',                 'Julia_Matviichuk.webp'],
  ['caroline',              'Caroline.webp'],
  ['truc',                  'truc_3cf9e54f-2814-4e5c-8095-b741b24e790d.webp'],
  ['anthony',               'Anthony_b22b2509-6844-4fb7-9f9c-2b601cd1d475.webp'],
  // Service heroes
  ['b2bHero',               'B2B-hero-image.webp'],
  ['posHero',               'pos-hero.webp'],
  ['hydrogenHero',          'Hero_Section-hydrogen-scaled.webp'],
  ['wooHero',               'woocommerce-hero-scaled.webp'],
  ['uxUiImage',             'ux_ui_image_1024x1024.webp'],
  ['speedImage',            'speed-image4-scaled.webp'],
  ['storeAudit',            'shopify-audit_ecommwizards.png'],
  ['appDev',                'App-development-rafiki.svg'],
  ['erpIntegration',        'shopify-integration-top-banner-img.webp'],
  ['figmaDev',              'Code-typing-rafiki.svg'],
  ['shopifyExpert',         'shopify_expert.webp'],
  ['reviewBg',              'testimonial-bg-scaled.png'],
  ['results',               'results.webp'],
  ['securityImage',         'security-image.webp'],
  // Brand logos
  ['logoCalvinKlein',       'Calvin-Klein-logo.png-1.png'],
  ['logoLVMH',              'LVMH-logo.png-1.png'],
  ['logoAriZona',           'Logo-AriZona.png-1.png'],
  ['logoKhaite',            'Logo-Khaite.png-1.png'],
  ['logoOlaplex',           'Olaplex-logo-new.avif'],
  ['logoP448',              'P448-logo.png-1.png'],
  ['logoLids',              'Lids-logo_fcb134ea-8ac4-4592-bfa1-6a366076e371.avif'],
  ['logoSchutz',            'schutz-logo.png-2.png'],
  // App / partner logos
  ['logoKlaviyo',           '64f0a5e309c841126c840791_klaviyo-300x89-1.png'],
  ['logoRebuy',             '64f098c0e38dec3a384cb182_rebuy.svg'],
  ['logoRecharge',          '64f098d045e1c6882b3f1871_recharge-300x59-1.png'],
  ['logoOkendo',            '64f0a5d44229c4e2b2495658_okendo-300x65-1.png'],
  ['logoGorgias',           '65739f17195baa7e77a72d2f_5efb82474d9adf8a3ca19488_logo-gorgias.svg'],
  ['logoWonderment',        '64f0acefdb8f59708c94d775_wonderment-300x56-1.png'],
  ['logoTripleWhale',       'triple-whale.svg'],
  ['logoYotpo',             'yotpo.svg'],
  ['logoShopify',           'shopify.svg'],
  ['logoShopifyPlus',       'shopify-plus.svg'],
  ['logoTrustpilot',        'trustpilot.svg'],
  // Case study screens
  ['homePageDesktop',       'Home_Page_-_Desktop-scaled.webp'],
  ['collectionDesktop',     'Collection_Page_-_Desktop-scaled.webp'],
  ['pdpDesktop',            'PDP_-_Version_1_-_Desktop-768x3192-1-scaled.webp'],
];

// verify each exists
const imageMap = [];
for (const [key, filename] of CURATED) {
  if (localFiles.has(filename)) {
    imageMap.push([key, `/images/${filename}`]);
  } else {
    // try case-insensitive
    const fl = filename.toLowerCase();
    const found = lowerMap.get(fl);
    imageMap.push([key, found ? `/images/${found}` : null]);
  }
}

const mapTs = `// AUTO-GENERATED by scripts/fix-image-urls.mjs
// Curated local image paths — import in page components

export const images = {
${imageMap.map(([k, v]) => `  ${k}: ${v ? JSON.stringify(v) : 'null'}, // ${v ? '✓' : '✗ not found'}`).join('\n')}
} as const;
`;

writeFileSync(join(ROOT, 'lib', 'images.ts'), mapTs);

console.log(`\n✓ lib/data.ts updated`);
console.log(`  Replaced : ${matched} WordPress image URLs`);
console.log(`  Unmatched: ${unmatched} (left as-is)`);
if (missed.size) {
  console.log(`\n  Unmatched filenames:`);
  [...missed].slice(0, 20).forEach(f => console.log(`    - ${f}`));
}
console.log(`\n✓ lib/images.ts written with ${imageMap.filter(([,v])=>v).length} curated image paths`);
