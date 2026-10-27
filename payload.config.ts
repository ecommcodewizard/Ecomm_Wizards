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

// What Google actually shows before truncating. The SEO plugin grades against
// 50-60 and 100-150; these ceilings keep a generated value inside that.
const SEO_TITLE_MAX = 60;
const SEO_DESC_MAX = 150;

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
      // The browser-tab icon. Without this the CMS shows Payload's own mark,
      // which is confusing once several tabs are open.
      icons: [{ rel: "icon", type: "image/png", url: "/images/ecomm-favicon.png" }],
    },
    components: {
      // Replaces Payload's default mark with the Ecomm Wizards logo: the
      // wordmark on the login screen, the badge in the nav.
      graphics: {
        Logo: "/components/cms/Logo#Logo",
        Icon: "/components/cms/Icon#Icon",
      },
      // "Import a doc" in the sidebar, below the collections.
      afterNavLinks: ["/components/cms/ImportButton#ImportNavLink"],
      views: {
        importPost: {
          Component: "/components/cms/ImportView#ImportView",
          path: "/import",
        },
      },
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
      // NO `acl` HERE, DELIBERATELY. Setting acl: "public-read" made every
      // upload fail with "A header or operation you provided implies
      // functionality that is not implemented": Neon controls bucket access
      // through its own console, not through S3 ACLs or bucket policies, so it
      // rejects the x-amz-acl header outright. The bucket is already set to
      // public read in Neon, which is what makes the images readable.
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
      // AUTO-GENERATE AIMS AT THE LENGTHS THE PLUGIN THEN GRADES YOU ON.
      // It used to append " | Ecomm Wizards" unconditionally and copy the
      // excerpt verbatim, which routinely produced a title over 60 characters
      // and a description over 150 — so pressing Auto-generate gave you a
      // value the checks below immediately marked as too long.
      //
      // Google truncates a title around 60 characters and a description around
      // 155, so these are not arbitrary targets: past them, the extra words are
      // written for nobody.
      generateTitle: ({ doc }) => {
        const title = ((doc as { title?: string })?.title ?? "").trim();
        if (!title) return "";
        const suffixed = `${title} | Ecomm Wizards`;
        // Keep the brand only when it fits; the headline matters more.
        if (suffixed.length <= SEO_TITLE_MAX) return suffixed;
        if (title.length <= SEO_TITLE_MAX) return title;
        return `${title.slice(0, SEO_TITLE_MAX - 1).replace(/\s+\S*$/, "")}…`;
      },
      generateDescription: ({ doc }) => {
        const excerpt = ((doc as { excerpt?: string })?.excerpt ?? "").trim();
        if (excerpt.length <= SEO_DESC_MAX) return excerpt;
        // Cut at a word boundary rather than mid-word.
        return `${excerpt.slice(0, SEO_DESC_MAX - 1).replace(/\s+\S*$/, "")}…`;
      },
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
