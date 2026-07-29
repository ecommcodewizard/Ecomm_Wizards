// Case-study card preview videos (slug -> file under /public/images/Case studies).
// Each video has a first-frame poster generated alongside it in the sibling
// /posters/ folder with a .webp extension. Shared by the case-studies grid
// (components) and the video sitemap route so the two never drift.

export const CASE_STUDY_VIDEOS: Record<string, string> = {
  "111skin-shopify-cro-redesign": "/images/Case%20studies/111skin%20video.mp4",
  "evie-lou-shopify-fashion-cro": "/images/Case%20studies/evie-lou%20video.mp4",
  "happy-mammoth-shopify-subscriptions-cro": "/images/Case%20studies/happy-mammoth-video.mp4",
  "candy-kittens-shopify-food-beverage-cro": "/images/Case%20studies/Candy%20Kittens%20video.mp4",
  "everlast-shopify-plus-sports-redesign": "/images/Case%20studies/Everlast%20video.mp4",
  "ronaldo-jewelry-shopify-plus-redesign": "/images/Case%20studies/Ronaldo%20Jewelry-video.mp4",
  "mouldings-one-shopify-b2b-portal": "/images/Case%20studies/Mouldings%20One%20video.mp4",
  "wild-shopify-plus-subscriptions": "/images/Case%20studies/WeareWild%20video.mp4",
  "dryrobe-shopify-plus-redesign": "/images/Case%20studies/dryrobe%20video%20test.mp4",
  "loop-earplugs-shopify-landing-page-cro": "/images/Case%20studies/Loop%20Earplugs%20video.mp4",
  "sneak-energy-shopify-redesign": "/images/Case%20studies/Sneak%20video.mp4",
  "capelli-sports-shopify-migration": "/images/Case%20studies/Capelli%20Sports%20test%20video-2.mp4",
  "john-hardy-shopify-plus-migration": "/images/Case%20studies/John%20Hardy%20video.mp4",
  "saddleback-shopify-plus-b2b": "/images/Case%20studies/Saddleback%20video.mp4",
  "this-works-shopify-plus-migration": "/images/Case%20studies/This%20Works%20video.mp4",
  "twillory-shopify-cro": "/images/Case%20studies/Twillory%20video.mp4",
  "neom-wellbeing-shopify-upgrade": "/images/Case%20studies/NEOM%20Wellbeing%20video.mp4",
  "vithit-shopify-plus-d2c": "/images/Case%20studies/VITHIT%20video%202.mp4",
  "feetures-shopify-theme-development": "/images/Case%20studies/Feetures%20video.mp4",
  "chlobo-shopify-plus-migration": "/images/Case%20studies/ChloBo%20video.mp4",
  "henchman-shopify-plus-b2b": "/images/Case%20studies/Henchman%20video.mp4",
};

// Slugs whose preview uses the speed-adjusted player (faster playback loop).
export const SPEED_VIDEO_SLUGS = new Set<string>([
  "ronaldo-jewelry-shopify-plus-redesign",
  "mouldings-one-shopify-b2b-portal",
]);

// The poster for a video: same path under /posters/ with a .webp extension.
export function posterFor(videoSrc: string): string {
  return videoSrc.replace("/Case%20studies/", "/Case%20studies/posters/").replace(/\.mp4$/, ".webp");
}
