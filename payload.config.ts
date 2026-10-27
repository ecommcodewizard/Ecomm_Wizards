import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { redirectsPlugin } from "@payloadcms/plugin-redirects";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Authors } from "./collections/Authors";
import { Categories } from "./collections/Categories";
import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";
import { Tags } from "./collections/Tags";
import { Users } from "./collections/Users";
import { BlogSettings } from "./globals/BlogSettings";

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
      title: "Dashboard",
      titleSuffix: " — Ecomm Wizards CMS",
      description: "Write, edit and publish articles for the Ecomm Wizards blog.",
      // The CMS must never be indexed. It is reachable on the public domain,
      // so this is the instruction that keeps /cms out of search results.
      robots: "noindex, nofollow",
    },
  },

  // Order here is the order of the nav: Blog, then Media, then Settings.
  collections: [Posts, Categories, Tags, Authors, Media, Users],

  globals: [BlogSettings],

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
    // UPLOADS GO TO NEON OBJECT STORAGE, NOT THE SERVER'S DISK.
    //
    // Hostinger clones the repository fresh on each deploy, so anything written
    // into the application directory is not guaranteed to survive one. Images
    // uploaded through the CMS would quietly disappear while the articles went
    // on pointing at them — the kind of breakage nobody notices until a reader
    // does. Object storage lives outside the application entirely.
    //
    // Neon's S3 support is path-style only and rejects the newer checksum
    // headers the AWS SDK sends by default, hence forcePathStyle and
    // requestChecksumCalculation below. Without them, uploads fail.
    //
    // DISABLED UNTIL THE CREDENTIALS EXIST, so a machine without them still
    // runs and simply writes to Media's staticDir as before. That keeps local
    // work and CI builds unaffected by a missing bucket.
    s3Storage({
      enabled: Boolean(
        process.env.AWS_ENDPOINT_URL_S3 && process.env.S3_BUCKET,
      ),
      collections: {
        media: {
          prefix: "blog",
          // Files are served straight from the bucket rather than proxied
          // through the app, so reading an image never wakes the database.
          disablePayloadAccessControl: true,
        },
      },
      bucket: process.env.S3_BUCKET || "",
      acl: "public-read",
      config: {
        region: process.env.AWS_REGION || "us-east-1",
        endpoint: process.env.AWS_ENDPOINT_URL_S3,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
        },
        forcePathStyle: true,
        requestChecksumCalculation: "WHEN_REQUIRED",
      },
    }),

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

    redirectsPlugin({
      collections: ["posts", "categories"],
      redirectTypes: ["301", "302"],
      overrides: {
        admin: {
          group: "Settings",
          description:
            "Old web addresses that forward to a new one. Changing a published article's slug breaks its existing links, so add a redirect when you do.",
          // Writers cannot manage redirects, so they do not see them.
          hidden: ({ user }) =>
            (user as { role?: string } | null)?.role !== "admin",
        },
        access: {
          read: () => true,
          create: ({ req: { user } }) =>
            (user as { role?: string } | null)?.role === "admin",
          update: ({ req: { user } }) =>
            (user as { role?: string } | null)?.role === "admin",
          delete: ({ req: { user } }) =>
            (user as { role?: string } | null)?.role === "admin",
        },
      },
    }),
  ],
});
