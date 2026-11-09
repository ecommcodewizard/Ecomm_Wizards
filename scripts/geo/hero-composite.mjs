// HOW TO RUN (playwright is deliberately NOT a project dependency):
//   1. In any scratch folder: npm i playwright@1.56.1   (uses installed Edge via channel "msedge")
//   2. Copy this file there, add the new page to PAGES, then:
//        node hero-composite.mjs <outDir> <slug>
//   3. From the repo root, export to webp:
//        node -e "require('sharp')('<outDir>/<slug>.png').resize({width:1400}).webp({quality:80,alphaQuality:90,effort:6}).toFile('public/images/shopify-development-agency-<slug>-hero-v1.webp')"
//   4. In the page file: hero.image = { src, alt, cutout: true }.
// Pick screenshots from public/images/Case studies (storefront shots, not
// lifestyle photos) and badge figures that appear in that study's stats.
//
// Hero composites for the service-format location pages (dark hero).
// One main storefront in a laptop frame, two tilted browser windows, two
// result badges taken from the page's own case studies. Transparent
// background so it sits on the black hero. Rendered at 2x, exported by the
// caller to webp at 1400px.
// Usage: node hero-composite.mjs <outDir> [slug...]
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { writeFileSync } from "node:fs";

const CS = path.resolve(process.env.REPO ?? "C:/Users/SHOP/MyNewProject/Ecom wiz V2", "public/images/Case studies") + "/";
const img = (f) => pathToFileURL(CS + f).href;

const PAGES = {
  columbus: {
    main: "Twillory product page.png",
    top: "VITHIT PDP.png",
    bottom: "111skin-hero section.png",
    badges: [
      { n: "70%", l: "A/B test win rate", b: "Twillory" },
      { n: "+170%", l: "conversion rate", b: "VITHIT" },
    ],
  },
  charlotte: {
    main: "Mouldings One PDP.webp",
    top: "Candy Kittens hero section.webp",
    bottom: "Twillory hero section.png",
    badges: [
      { n: "+50%", l: "B2B revenue", b: "Mouldings One" },
      { n: "+182%", l: "conversion rate", b: "Candy Kittens" },
    ],
  },
  chicago: {
    main: "sneak-pdp.jpg",
    top: "evie-lou-1.webp",
    bottom: "Henchman-3.webp",
    badges: [
      { n: "+68%", l: "mobile conversion", b: "Sneak Energy" },
      { n: "+58%", l: "online revenue", b: "Henchman" },
    ],
  },
  miami: {
    main: "Dryrobe-best sellers.webp",
    top: "This Works-hero section.png",
    bottom: "Ronaldo Jewelry PDP.webp",
    badges: [
      { n: "+250%", l: "total sales", b: "Ronaldo Jewelry" },
      { n: "+89%", l: "online revenue", b: "Dryrobe" },
    ],
  },
  houston: {
    main: "Henchman-3.webp",
    top: "Mouldings One PDP.webp",
    bottom: "Saddleback-pdp.webp",
    badges: [
      { n: "-74%", l: "order processing time", b: "Mouldings One" },
      { n: "+881%", l: "B2B sales", b: "Saddleback" },
    ],
  },
  dallas: {
    main: "Everlast-all products.webp",
    top: "John Hardy-pdp.webp",
    bottom: "Saddleback-pdp.webp",
    badges: [
      { n: "+881%", l: "B2B sales", b: "Saddleback" },
      { n: "+152%", l: "conversion rate", b: "Everlast" },
    ],
  },
};

const html = (p) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;800&display=swap" rel="stylesheet">
<style>
  html,body{margin:0;background:transparent;}
  .stage{position:relative;width:1400px;height:1050px;font-family:'Poppins',sans-serif;}
  /* soft brand glow behind the laptop so the dark hero has depth */
  .glow{position:absolute;left:330px;top:250px;width:900px;height:620px;border-radius:50%;
    background:radial-gradient(closest-side,rgba(61,199,122,.30),rgba(61,199,122,.10) 55%,transparent);filter:blur(30px);}
  .laptop{position:absolute;left:330px;top:300px;width:1000px;}
  .screen{background:#0b0b0b;border-radius:22px 22px 0 0;padding:16px 16px 18px;border:2px solid #2a2a2a;}
  .screen .shot{height:560px;border-radius:6px;background-size:cover;background-position:top center;}
  .base{height:26px;margin:0 -60px;background:linear-gradient(#d9dbe0,#9ea3ab);border-radius:0 0 26px 26px;box-shadow:0 30px 60px rgba(0,0,0,.6);}
  .base:after{content:"";display:block;width:160px;height:9px;margin:0 auto;background:#8a8f97;border-radius:0 0 10px 10px;}
  .win{position:absolute;width:560px;background:#fff;border-radius:14px;overflow:hidden;
    box-shadow:0 24px 60px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.08);}
  .bar{height:30px;background:#f1f2f4;display:flex;align-items:center;gap:7px;padding:0 13px;}
  .bar i{width:11px;height:11px;border-radius:50%;display:block}
  .win .shot{height:330px;background-size:cover;background-position:top center;}
  .w1{left:30px;top:40px;transform:rotate(-4deg);}
  .w2{left:10px;top:600px;transform:rotate(3deg);width:500px;}
  .w2 .shot{height:300px}
  .badge{position:absolute;background:#fff;border-radius:22px;padding:24px 30px 22px;min-width:270px;
    box-shadow:0 24px 50px rgba(0,0,0,.5);}
  .badge .n{font-size:64px;font-weight:800;line-height:1;letter-spacing:-1px;
    background:linear-gradient(110deg,#2A9555 0%,#3DC77A 45%,#4FB872 100%);-webkit-background-clip:text;background-clip:text;color:transparent;}
  .badge .l{font-size:25px;font-weight:600;color:#0f172a;margin-top:10px;}
  .badge .b{font-size:20px;font-weight:500;color:#64748b;margin-top:4px;}
  .b1{right:20px;top:70px;}
  .b2{right:60px;top:830px;}
</style></head><body><div class="stage">
  <div class="glow"></div>
  <div class="laptop"><div class="screen"><div class="shot" style="background-image:url('${img(p.main)}')"></div></div><div class="base"></div></div>
  <div class="win w1"><div class="bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i></div><div class="shot" style="background-image:url('${img(p.top)}')"></div></div>
  <div class="win w2"><div class="bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i></div><div class="shot" style="background-image:url('${img(p.bottom)}')"></div></div>
  ${p.badges.map((b, i) => `<div class="badge b${i + 1}"><div class="n">${b.n}</div><div class="l">${b.l}</div><div class="b">${b.b}</div></div>`).join("")}
</div></body></html>`;

const [outDir, ...only] = process.argv.slice(2);
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1400, height: 1050 }, deviceScaleFactor: 2 });
for (const [slug, p] of Object.entries(PAGES)) {
  if (only.length && !only.includes(slug)) continue;
  // Load from disk: a file:// page may read file:// images, about:blank may not.
  const htmlFile = path.join(outDir, `${slug}.html`);
  writeFileSync(htmlFile, html(p));
  await page.goto(pathToFileURL(htmlFile).href, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);
  const out = path.join(outDir, `${slug}.png`);
  await page.locator(".stage").screenshot({ path: out, omitBackground: true });
  console.log("rendered", out);
}
await browser.close();
