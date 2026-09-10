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
  // The one creative-strategy study with a preview video, so it is the one
  // entry living outside /images/Case studies/. posterFor still resolves it:
  // the replace targets the LAST path segment before the filename, which is
  // "/Case studies/" here too. Poster generated alongside it as the convention
  // above requires. Same file the study's own Challenge section plays.
  "prose-creative-strategy": "/images/Creative%20strategy%20services/Case%20studies/prose-cover.mp4",
  // The first Klaviyo study to get a preview. Its video and poster had been
  // sitting in /public unregistered, which is why the site-wide re-encode pass
  // missed the file: at 8.9 MB and 53 seconds it was the heaviest video in the
  // corpus against a 1.7 MB median. Re-encoded to a 26-second 960px loop with
  // no audio track, 2.33 MB, before being registered here.
  "living-in-sunshine-klaviyo-email": "/images/Case%20studies/Living%20in%20Sunshine%20Klaviyo%20video.mp4",
  // Both of these had a video AND a poster already sitting in /public,
  // unregistered, so their rows would have rendered as stills beside
  // neighbours that move. Chilly's points at the same file its own case study
  // plays, and its poster was generated to the convention above. Both are
  // inside the corpus size norm (1.0 MB and 1.7 MB against a ~1.7 MB median),
  // so unlike Living in Sunshine neither needed re-encoding.
  "cecraft-klaviyo-email": "/images/Case%20studies/Cande%20Klaviyo%20video.mp4",
  "chillys-creative-strategy": "/images/Creative%20strategy%20services/Case%20studies/chillys-series.mp4",
  // Registered for the Los Angeles marketing page, which leads its hero and its
  // first discipline row on this study. The video and a matching poster were
  // already sitting in /public unregistered, so the row would have rendered as
  // a still beside neighbours that move. Same situation as the two above.
  "andrea-maack-klaviyo-email": "/images/Case%20studies/Andrea%20Maack%20Klaviyo%20video.mp4",
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
