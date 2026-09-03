// Storefront payload teardown. Measures what a storefront actually ships on
// its homepage, so the LA page's Only-Here Asset rests on our own measurement
// rather than on a published benchmark.
//
// Deliberately measures only what is verifiable from the served HTML and the
// response headers. It does NOT report Core Web Vitals: those are field data
// and cannot be obtained by fetching a page once. Anything this script cannot
// see is left out rather than estimated.
//
// Run: npx tsx scripts/geo/storefront-weight.ts urls.txt

import { readFileSync } from "node:fs";

interface Row {
  url: string;
  ok: boolean;
  shopify: boolean;
  htmlKb: number;
  images: number;
  eagerImages: number;
  videoTags: number;
  fontFiles: number;
  scriptTags: number;
  thirdPartyHosts: number;
  shopifyApps: number;
  // Design signals
  customTheme: boolean;
  themeName: string;
  modernImageFormats: boolean;
  motionLibs: number;
  stylesheets: number;
  customProps: number;
  note?: string;
}

const uniq = <T,>(a: T[]) => [...new Set(a)];
const countAll = (html: string, re: RegExp) => (html.match(re) ?? []).length;

async function measure(url: string): Promise<Row> {
  const base: Row = {
    url, ok: false, shopify: false, htmlKb: 0, images: 0, eagerImages: 0,
    videoTags: 0, fontFiles: 0, scriptTags: 0, thirdPartyHosts: 0, shopifyApps: 0,
    customTheme: false, themeName: "", modernImageFormats: false, motionLibs: 0,
    stylesheets: 0, customProps: 0,
  };
  let html = "";
  try {
    const res = await fetch(url, {
      redirect: "follow",
      headers: {
        // A real mobile UA: storefronts serve different markup to bots, and the
        // whole point is to measure what a customer on a phone receives.
        "user-agent":
          "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
        accept: "text/html,application/xhtml+xml",
      },
      signal: AbortSignal.timeout(30_000),
    });
    if (!res.ok) return { ...base, note: `HTTP ${res.status}` };
    html = await res.text();
  } catch (e) {
    return { ...base, note: e instanceof Error ? e.message.slice(0, 60) : "fetch failed" };
  }

  const host = new URL(url).hostname.replace(/^www\./, "");
  const shopify = /cdn\.shopify\.com|Shopify\.theme|shopify-features|myshopify\.com/i.test(html);

  // Every absolute src/href host that is not the store's own domain. This is the
  // third-party surface: analytics, pixels, app embeds, font hosts, chat.
  const hosts = uniq(
    (html.match(/(?:src|href)=["']https?:\/\/([^/"']+)/gi) ?? [])
      .map((m) => m.replace(/.*https?:\/\//i, "").toLowerCase())
      .filter((h) => !h.endsWith(host) && !h.includes("cdn.shopify.com")),
  );

  // ── Design signals ────────────────────────────────────────────────────
  // Added 2026-09-02: the asset was reading as a pure engineering teardown,
  // and the page has to show we are a design practice too. These are the
  // design decisions that are visible in the served HTML and that also have a
  // measurable weight cost, which is exactly the page's argument.
  const stockTheme = /"(Dawn|Debut|Craft|Sense|Refresh|Ride|Taste|Publisher|Origin|Colorblock|Studio|Spotlight|Crave)"/i.exec(
    (/Shopify\.theme\s*=\s*\{[^}]*\}/i.exec(html) ?? [""])[0],
  );
  const motionLibs = [
    /gsap|greensock/i, /lottie/i, /framer-motion/i, /aos\.js|animate-on-scroll/i,
    /swiper/i, /flickity/i, /splide/i, /barba/i, /locomotive/i,
  ].filter((re) => re.test(html)).length;

  return {
    url,
    ok: true,
    shopify,
    htmlKb: Math.round(Buffer.byteLength(html, "utf8") / 1024),
    images: countAll(html, /<img\b/gi),
    // Images without loading="lazy" compete with the hero for bandwidth.
    eagerImages: countAll(html, /<img\b(?![^>]*loading=["']lazy)/gi),
    videoTags: countAll(html, /<video\b/gi),
    fontFiles: uniq(html.match(/[^"'()\s]+\.woff2?/gi) ?? []).length,
    scriptTags: countAll(html, /<script\b/gi),
    thirdPartyHosts: hosts.length,
    shopifyApps: uniq(html.match(/cdn\.shopify\.com\/extensions\/[^/]+\/([^/]+)/gi) ?? []).length,
    // Design signals
    customTheme: !stockTheme,
    themeName: stockTheme ? stockTheme[1] : "custom or renamed",
    modernImageFormats: /\.(webp|avif)|format=webp|format=avif/i.test(html),
    motionLibs,
    stylesheets: countAll(html, /<link[^>]+rel=["']stylesheet/gi),
    customProps: uniq(html.match(/--[a-z][a-z0-9-]{2,}\s*:/gi) ?? []).length,
  };
}

const median = (ns: number[]) => {
  if (!ns.length) return 0;
  const s = [...ns].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
};

async function main() {
  const urls = readFileSync(process.argv[2], "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"));

  const rows: Row[] = [];
  for (const u of urls) {
    const r = await measure(u);
    rows.push(r);
    const tag = !r.ok ? `SKIP ${r.note}` : r.shopify ? "shopify" : "NOT SHOPIFY";
    console.log(
      `${r.url.padEnd(34)} ${tag.padEnd(16)} html ${String(r.htmlKb).padStart(4)}kb  ` +
        `img ${String(r.images).padStart(3)} (eager ${String(r.eagerImages).padStart(3)})  ` +
        `video ${r.videoTags}  fonts ${String(r.fontFiles).padStart(2)}  ` +
        `scripts ${String(r.scriptTags).padStart(3)}  3p ${String(r.thirdPartyHosts).padStart(2)}  ` +
        `embeds ${r.shopifyApps}`,
    );
  }

  const good = rows.filter((r) => r.ok && r.shopify);
  console.log("\n" + "=".repeat(70));
  console.log(`SAMPLE: ${good.length} Shopify storefronts measured of ${urls.length} attempted`);
  console.log("=".repeat(70));
  if (good.length) {
    const f = <K extends keyof Row>(k: K) => good.map((r) => r[k] as number);
    console.log(`  median HTML                 ${median(f("htmlKb"))} KB`);
    console.log(`  median <img> tags           ${median(f("images"))}`);
    console.log(`  median NOT lazy-loaded      ${median(f("eagerImages"))}`);
    console.log(`  stores with a <video> tag   ${good.filter((r) => r.videoTags > 0).length} of ${good.length}`);
    console.log(`  median distinct font files  ${median(f("fontFiles"))}`);
    console.log(`  median <script> tags        ${median(f("scriptTags"))}`);
    console.log(`  median third-party hosts    ${median(f("thirdPartyHosts"))}`);
    console.log(`  max third-party hosts       ${Math.max(...f("thirdPartyHosts"))}`);
    console.log(`  max <img> tags              ${Math.max(...f("images"))}`);
    console.log(`  max distinct font files     ${Math.max(...f("fontFiles"))}`);
    console.log("  --- design signals ---");
    console.log(`  custom / renamed theme      ${good.filter((r) => r.customTheme).length} of ${good.length}`);
    console.log(`  on a stock Shopify theme    ${good.filter((r) => !r.customTheme).map((r) => r.themeName).join(", ") || "none"}`);
    console.log(`  serving webp or avif        ${good.filter((r) => r.modernImageFormats).length} of ${good.length}`);
    console.log(`  motion/animation libraries  median ${median(f("motionLibs"))}, max ${Math.max(...f("motionLibs"))}`);
    console.log(`  stores shipping 2+ of them  ${good.filter((r) => r.motionLibs >= 2).length} of ${good.length}`);
    console.log(`  median stylesheets          ${median(f("stylesheets"))}`);
    console.log(`  median CSS custom props     ${median(f("customProps"))}  (design-token depth)`);
    console.log(`  max CSS custom props        ${Math.max(...f("customProps"))}`);
  }
}

void main();
