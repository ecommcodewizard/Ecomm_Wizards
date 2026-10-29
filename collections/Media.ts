import type { CollectionConfig } from "payload";

// Images used in posts.
//
// Files currently land on the server's own disk under /public/cms-media. That
// works, but note it does NOT survive a Hostinger redeploy, which replaces the
// application directory — so this needs moving to object storage before anyone
// relies on it. Neon's object storage was enabled on the project for exactly
// this, and swapping it in is a plugin change, not a re-upload.
export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Image", plural: "Images" },
  admin: {
    group: "Media",
    useAsTitle: "alt",
    description:
      "Images for posts. Every image needs alt text. A cover photo should be wide and landscape, 1600 × 900 for preference — it is cropped to three different shapes around the site, and the focal point in the image editor decides which part survives.",
  },
  access: {
    // Public: the site has to be able to display these to visitors.
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) =>
      (user as { role?: string })?.role === "admin",
  },
  upload: {
    staticDir: "public/cms-media",
    // Generated once on upload rather than on every request, which keeps image
    // work off the server at page-view time.
    imageSizes: [
      { name: "thumbnail", width: 400, height: undefined, position: "centre" },
      { name: "card", width: 768, height: undefined, position: "centre" },
      { name: "hero", width: 1600, height: undefined, position: "centre" },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      admin: {
        description:
          "What the image shows, for screen readers and for Google. Describe the content, not the file.",
      },
    },
    {
      name: "caption",
      type: "text",
      admin: { description: "Optional. Shown under the image if set." },
    },
  ],
};
