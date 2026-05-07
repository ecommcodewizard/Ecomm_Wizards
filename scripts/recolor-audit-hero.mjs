import sharp from "sharp";
import path from "node:path";

const INPUT = path.resolve("public/images/Group-1000004281.png");
const OUTPUT = path.resolve("public/images/Group-1000004281-green.png");

// Convert RGB (0-255) to HSV (h: 0-360, s: 0-1, v: 0-1)
function rgbToHsv(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  const s = max === 0 ? 0 : d / max;
  return [h, s, max];
}

// HSV (h: 0-360, s: 0-1, v: 0-1) -> RGB (0-255)
function hsvToRgb(h, s, v) {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if (h < 60)       { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else              { r = c; g = 0; b = x; }
  return [
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
  ];
}

const img = sharp(INPUT).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

// Gold range to detect (covers warm gold/yellow tones)
const GOLD_HUE_MIN = 25;   // orange-yellow boundary
const GOLD_HUE_MAX = 60;   // yellow-green boundary
const MIN_SAT = 0.18;      // skip near-grays
const MIN_VAL = 0.18;      // skip near-blacks

// Target green hue (olive-green from brand gradient). We center around 135° which lands
// in the #3DC77A / #4FB872 family.
const TARGET_HUE = 138;

let touched = 0;
for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const [h, s, v] = rgbToHsv(r, g, b);
  if (h >= GOLD_HUE_MIN && h <= GOLD_HUE_MAX && s >= MIN_SAT && v >= MIN_VAL) {
    // Map gold hue position (25..60) to target spread (125..148) so highlights stay
    // brighter-leaning and shadows lean deeper.
    const t = (h - GOLD_HUE_MIN) / (GOLD_HUE_MAX - GOLD_HUE_MIN); // 0..1
    const newHue = 125 + t * 23; // 125..148
    const [nr, ng, nb] = hsvToRgb(newHue, s, v);
    data[i] = nr;
    data[i + 1] = ng;
    data[i + 2] = nb;
    touched++;
  }
}

await sharp(data, { raw: { width, height, channels } }).png().toFile(OUTPUT);
console.log(`recolored ${touched} px / ${width * height} total -> ${OUTPUT}`);
