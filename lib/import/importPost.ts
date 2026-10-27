// Turns an uploaded Word file or a shared Google Doc into a new draft post.
//
// Adapted from the same agency's 100xRetention implementation.
//
// WHY THIS EXISTS RATHER THAN "JUST PASTE IT". Pasting goes through the
// clipboard, and the editor can only keep what it has a node for — a pasted
// table arrived as one paragraph per cell, silently, and was only noticed once
// the article was published. Reading the file itself keeps headings, lists,
// tables and images, and anything that cannot be converted is dropped visibly
// rather than quietly mangled.

import { convertHTMLToLexical, editorConfigFactory } from "@payloadcms/richtext-lexical";
import { JSDOM } from "jsdom";
import { addDataAndFileToRequest, type Endpoint, type PayloadRequest } from "payload";

import { postContentEditor } from "../cms/editor";
import { slugify } from "../cms/slugify";
import { cleanImportedHtml } from "./clean";
import { ImportError, docxToHtml, fetchGoogleDocHtml, loadImage } from "./sources";

const MAX_DOCX_BYTES = 15_000_000;

// Matches the limits on the Posts excerpt field. An excerpt shorter than the
// minimum is left out entirely rather than written short, because a value that
// fails validation would stop the draft saving at all.
const EXCERPT_MIN = 80;
const EXCERPT_MAX = 300;

const EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/gif": "gif",
  "image/webp": "webp",
  "image/avif": "avif",
};

type LexicalNode = { type?: string; value?: unknown; text?: string; children?: LexicalNode[] };

/** Upload nodes from the HTML importer carry the media id as a string; the Postgres relation needs a number. */
function fixUploadIds(node: LexicalNode) {
  if (node.type === "upload" && typeof node.value === "string" && /^\d+$/.test(node.value)) {
    node.value = Number(node.value);
  }
  node.children?.forEach(fixUploadIds);
}

const textOf = (n: LexicalNode): string =>
  typeof n.text === "string" ? n.text : (n.children ?? []).map(textOf).join("");

/**
 * An opening summary, built from the first paragraphs and cut at a word
 * boundary. It is only a starting point — the writer edits it — but having one
 * means an imported draft is not missing a required field.
 */
function excerptFrom(state: { root: LexicalNode }): string | undefined {
  let text = "";
  for (const node of state.root.children ?? []) {
    if (node.type !== "paragraph") continue;
    const part = textOf(node).replace(/\s+/g, " ").trim();
    if (!part) continue;
    text = text ? `${text} ${part}` : part;
    if (text.length >= EXCERPT_MIN) break;
  }
  if (text.length < EXCERPT_MIN) return undefined;
  if (text.length <= EXCERPT_MAX) return text;
  return `${text.slice(0, EXCERPT_MAX - 3).replace(/\s+\S*$/, "")}...`;
}

async function uniqueSlug(req: PayloadRequest, title: string): Promise<string> {
  const base = slugify(title) || "imported-post";
  for (let n = 1; n < 50; n++) {
    const slug = n === 1 ? base : `${base}-${n}`;
    const { totalDocs } = await req.payload.count({
      collection: "posts",
      where: { slug: { equals: slug } },
      req,
      overrideAccess: true,
    });
    if (!totalDocs) return slug;
  }
  return `${base}-${Date.now()}`;
}

/** Converts imported HTML into a new draft post (uploading its images to Media) and returns the post id. */
export async function createDraftFromHtml(
  req: PayloadRequest,
  sourceHtml: string,
): Promise<number> {
  const cleaned = cleanImportedHtml(sourceHtml);
  const title = cleaned.title || `Imported draft, ${new Date().toISOString().slice(0, 10)}`;
  const slug = await uniqueSlug(req, title);

  // Upload images and point the placeholders at the new Media documents.
  let html = cleaned.html;
  const imageIds: number[] = [];
  for (const [i, image] of cleaned.images.entries()) {
    const placeholder = `<img data-import-placeholder="${image.placeholder}">`;
    const file = await loadImage(image.src).catch(() => null);
    if (!file) {
      // An image we cannot fetch is removed rather than left as a broken box.
      html = html.replace(placeholder, "");
      continue;
    }
    const media = await req.payload.create({
      collection: "media",
      // Alt text is required, and an imported image rarely carries any. A
      // placeholder keeps the import moving; the writer replaces it.
      data: { alt: image.alt || `${title}, image ${i + 1}` },
      file: {
        data: file.data,
        mimetype: file.mimetype,
        name: `${slug}-${i + 1}.${EXT[file.mimetype] ?? "png"}`,
        size: file.data.byteLength,
      },
      req,
      overrideAccess: false,
    });
    imageIds.push(media.id as number);
    html = html.replace(
      placeholder,
      `<img data-lexical-upload-relation-to="media" data-lexical-upload-id="${media.id}">`,
    );
  }

  const editorConfig = await editorConfigFactory.fromEditor({
    config: req.payload.config,
    editor: postContentEditor,
  });
  const content = convertHTMLToLexical({ editorConfig, html, JSDOM });
  fixUploadIds(content.root as LexicalNode);

  const excerpt = excerptFrom(content as { root: LexicalNode });

  const post = await req.payload.create({
    collection: "posts",
    draft: true,
    data: {
      _status: "draft",
      title,
      slug,
      ...(excerpt ? { excerpt } : {}),
      content: content as never,
      // The first image in the document becomes the featured image, which is
      // usually right and is trivial to change.
      ...(imageIds[0] ? { heroImage: imageIds[0] } : {}),
    } as never,
    req,
    overrideAccess: false,
  });
  return post.id as number;
}

/**
 * POST /cms-api/posts/import, from the "Import a doc" screen in the CMS.
 * Body: form data with either "url" (a Google Docs link) or "file" (a .docx upload).
 * Responds with { id } of the new draft, or { error } with a message for the writer.
 *
 * It always creates a DRAFT, never a published post, so any writer may use it:
 * publishing remains an admin's decision.
 */
export const importPostEndpoint: Endpoint = {
  path: "/import",
  method: "post",
  handler: async (req) => {
    if (!req.user) {
      return Response.json({ error: "Log in to the CMS first." }, { status: 401 });
    }
    try {
      await addDataAndFileToRequest(req);
      const url = typeof req.data?.url === "string" ? req.data.url.trim() : "";
      let html: string;
      if (url) {
        html = await fetchGoogleDocHtml(url);
      } else if (req.file) {
        if (!/\.docx$/i.test(req.file.name)) {
          throw new ImportError(
            "Only Word .docx files can be imported. In Word, use File > Save As > Word Document (.docx).",
          );
        }
        if (req.file.size > MAX_DOCX_BYTES) {
          throw new ImportError(
            "That file is over 15 MB. Try a Google Doc link instead, or shrink the images in Word first.",
          );
        }
        html = await docxToHtml(req.file.data);
      } else {
        throw new ImportError("Paste a Google Docs link or choose a .docx file.");
      }
      const id = await createDraftFromHtml(req, html);
      return Response.json({ id });
    } catch (error) {
      // ImportError messages are written for the writer; anything else is
      // logged and answered generically, so an internal failure never leaks
      // detail into the admin interface.
      if (error instanceof ImportError) {
        return Response.json({ error: error.message }, { status: 400 });
      }
      req.payload.logger.error({ err: error, msg: "Post import failed" });
      return Response.json(
        { error: "Something went wrong while importing. Try again, or send the doc to an admin." },
        { status: 500 },
      );
    }
  },
};
