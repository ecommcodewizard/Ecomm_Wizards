import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  // PAYLOAD LIVES ENTIRELY UNDER /cms*, OFF BOTH PAYLOAD DEFAULTS.
  //
  // Its default admin route is /admin, which is already the MySQL-backed panel
  // for leads, bookings and tasks. Its default API route is /api, which carries
  // live enquiry capture at /api/lead and /api/bookings.
  //
  // Next does resolve specific routes ahead of catch-alls, so /api/[...slug]
  // could coexist with those. But a catch-all sitting in front of the endpoints
  // that receive real enquiries is a failure mode with no upside, and the
  // enquiry data is the one thing on this site that cannot be regenerated.
  // Both overrides are supported config, not workarounds.
  //
  // The folder names under app/(payload) must match these values.
  routes: {
    admin: "/cms",
    api: "/cms-api",
  },

  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " — Ecomm Wizards CMS",
    },
  },

  collections: [Posts, Media, Users],

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || "",

  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    // `push` lets Payload reshape the database to match these collections
    // automatically. That is convenient while building locally and genuinely
    // dangerous in production, where an unintended schema change is applied
    // without review. Development pushes; production runs committed migrations.
    push: process.env.NODE_ENV !== "production",
  }),

  // Payload uses sharp to generate the resized versions of uploaded images.
  sharp,

  plugins: [
    seoPlugin({
      collections: ["posts"],
      uploadsCollection: "media",
      // Falls back to the post's own title and excerpt so a post is never
      // published with an empty meta title or description. Both remain
      // editable: these are only the starting values.
      generateTitle: ({ doc }) =>
        `${(doc as { title?: string })?.title ?? ""} | Ecomm Wizards`,
      generateDescription: ({ doc }) =>
        (doc as { excerpt?: string })?.excerpt ?? "",
      generateURL: ({ doc }) =>
        `https://ecommwizards.com/insights/${(doc as { slug?: string })?.slug ?? ""}`,
      // Groups the SEO fields into their own tab rather than appending them to
      // the bottom of a long edit form.
      tabbedUI: true,
    }),
  ],
});
