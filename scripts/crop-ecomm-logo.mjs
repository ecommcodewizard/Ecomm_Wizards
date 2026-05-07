import sharp from "sharp";
import path from "node:path";

const INPUT = path.resolve("public/images/ecomm-green-logo.png");
const OUTPUT = path.resolve("public/images/ecomm-green-logo-cropped.png");

const img = sharp(INPUT).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

let minX = width, minY = height, maxX = 0, maxY = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const a = data[i + 3];
    const r = data[i], g = data[i + 1], b = data[i + 2];
    // detect non-white-and-not-fully-transparent pixels
    const isWhiteish = r > 240 && g > 240 && b > 240;
    if (a > 10 && !isWhiteish) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

const pad = 4;
const left = Math.max(0, minX - pad);
const top = Math.max(0, minY - pad);
const cropW = Math.min(width - left, maxX - left + 1 + pad);
const cropH = Math.min(height - top, maxY - top + 1 + pad);

await sharp(INPUT)
  .extract({ left, top, width: cropW, height: cropH })
  .png()
  .toFile(OUTPUT);

console.log(`cropped to ${cropW}x${cropH} from (${left},${top}) -> ${OUTPUT}`);
