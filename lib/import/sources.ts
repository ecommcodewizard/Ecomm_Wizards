// Fetching the source document. Adapted from the same agency's 100xRetention
// implementation, which has been running this in production.
//
// Every error thrown here is written to be shown to the writer unchanged, so
// the messages say what to do next rather than what went wrong internally.

import mammoth from "mammoth";

/** Error whose message is safe and helpful to show the writer as is. */
export class ImportError extends Error {}

const DOC_ID = /docs\.google\.com\/document\/(?:u\/\d+\/)?d\/([\w-]{20,})/;

/** Fetches a Google Doc's HTML export. The doc must be shared as "Anyone with the link can view". */
export async function fetchGoogleDocHtml(link: string): Promise<string> {
  const id = link.match(DOC_ID)?.[1];
  if (!id) {
    throw new ImportError(
      "That doesn't look like a Google Docs link. It should start with https://docs.google.com/document/d/",
    );
  }
  let response: Response;
  try {
    response = await fetch(
      `https://docs.google.com/document/d/${id}/export?format=html`,
      { redirect: "manual", signal: AbortSignal.timeout(20_000) },
    );
  } catch {
    throw new ImportError("We couldn't reach Google Docs. Check your connection and try again.");
  }
  // A private doc answers with a redirect to the Google sign-in page (or 401/403).
  if (response.status >= 300 && response.status < 400) {
    throw new ImportError(
      'This doc isn\'t shared publicly yet. In Google Docs, click Share, set "General access" to "Anyone with the link", then try again.',
    );
  }
  if (response.status === 404) {
    throw new ImportError("Google Docs couldn't find that document. Check the link and try again.");
  }
  if (!response.ok) {
    throw new ImportError(
      'Google Docs refused the request. Make sure the doc is shared as "Anyone with the link", then try again.',
    );
  }
  const html = await response.text();
  if (!/<html/i.test(html) || /accounts\.google\.com\/(ServiceLogin|v3\/signin)/.test(html)) {
    throw new ImportError(
      'This doc isn\'t shared publicly yet. In Google Docs, click Share, set "General access" to "Anyone with the link", then try again.',
    );
  }
  return html;
}

/** Converts a .docx file to HTML. Embedded images come through as data: URIs. */
export async function docxToHtml(buffer: Buffer): Promise<string> {
  try {
    const { value } = await mammoth.convertToHtml(
      { buffer },
      {
        // Word's "Title" style is the post title; "Subtitle" is dropped like Google's.
        styleMap: [
          "p[style-name='Title'] => h1:fresh",
          "p[style-name='Subtitle'] => p.subtitle:fresh",
        ],
      },
    );
    return `<html><body>${value}</body></html>`;
  } catch {
    throw new ImportError(
      "We couldn't read that Word file. Save it as .docx (not .doc) and try again.",
    );
  }
}

// Images are fetched only from Google's own hosts, because the import follows
// URLs out of a document somebody pasted in. Anything else is skipped rather
// than fetched: an import must not become a way to make the server request
// arbitrary addresses.
const ALLOWED_IMAGE_HOSTS = /(^|\.)(googleusercontent\.com|google\.com|ggpht\.com)$/;
const MAX_IMAGE_BYTES = 8_000_000;

/** Image bytes from a data: URI (Word) or a Google-hosted URL (Google Docs). Other sources are skipped. */
export async function loadImage(
  src: string,
): Promise<{ data: Buffer; mimetype: string } | null> {
  const dataUri = src.match(/^data:(image\/[\w.+-]+);base64,(.+)$/);
  if (dataUri) return { mimetype: dataUri[1], data: Buffer.from(dataUri[2], "base64") };
  let url: URL;
  try {
    url = new URL(src);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || !ALLOWED_IMAGE_HOSTS.test(url.hostname)) return null;
  const response = await fetch(url, { signal: AbortSignal.timeout(20_000) }).catch(() => null);
  const mimetype = response?.headers.get("content-type")?.split(";")[0] ?? "";
  if (!response?.ok || !mimetype.startsWith("image/")) return null;
  const data = Buffer.from(await response.arrayBuffer());
  return data.byteLength <= MAX_IMAGE_BYTES ? { data, mimetype } : null;
}
