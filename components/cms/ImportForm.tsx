"use client";

import { Button } from "@payloadcms/ui";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

type Source = "google" | "word";

export function ImportForm() {
  const router = useRouter();
  const [source, setSource] = useState<Source>("google");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    const body = new FormData();
    if (source === "google") {
      if (!url.trim()) return setError("Paste the link to your Google Doc first.");
      // Payload reads multipart form fields from a "_payload" JSON string.
      body.set("_payload", JSON.stringify({ url: url.trim() }));
    } else {
      if (!file) return setError("Choose a .docx file first.");
      body.set("file", file);
    }
    setBusy(true);
    try {
      // NO TRAILING SLASH. This project does not set trailingSlash, so
      // "/cms-api/posts/import/" answers 308 to the slashless URL — and a
      // browser will not resend a multipart upload through a redirect, so the
      // request failed before reaching the server and looked like a connection
      // problem. The reference implementation uses a trailing slash because
      // its own Next config sets trailingSlash: true.
      const response = await fetch("/cms-api/posts/import", {
        method: "POST",
        body,
        credentials: "include",
      });
      const result = (await response.json().catch(() => ({}))) as { id?: number; error?: string };
      if (!response.ok || !result.id) {
        setError(
          result.error ||
            (response.status === 413
              ? "That file is too large to upload. Try a Google Doc link instead."
              : "The import didn't work. Try again."),
        );
        return;
      }
      // Straight into the new draft, so the writer can see what came through.
      router.push(`/cms/collections/posts/${result.id}`);
    } catch {
      setError("We couldn't reach the server. Check your connection and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="cms-import__form">
      <fieldset className="cms-import__choice">
        <legend>Where is your article?</legend>
        <label>
          <input
            type="radio"
            name="source"
            checked={source === "google"}
            onChange={() => setSource("google")}
          />{" "}
          Google Doc
        </label>
        <label>
          <input
            type="radio"
            name="source"
            checked={source === "word"}
            onChange={() => setSource("word")}
          />{" "}
          Word file (.docx)
        </label>
      </fieldset>

      {source === "google" ? (
        <div className="cms-import__field">
          <label htmlFor="import-url">Google Doc link</label>
          <input
            id="import-url"
            type="url"
            placeholder="https://docs.google.com/document/d/..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <p className="cms-import__hint">
            First, in Google Docs click <strong>Share</strong> and set{" "}
            <strong>General access</strong> to <strong>Anyone with the link</strong>. Then copy
            the link and paste it here.
          </p>
        </div>
      ) : (
        <div className="cms-import__field">
          <label htmlFor="import-file">Word file</label>
          <input
            id="import-file"
            type="file"
            accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
          <p className="cms-import__hint">
            Use Heading 1 for the title and Heading 2 or 3 for sections. Files up to about 4 MB
            work best; for bigger files with lots of images, use a Google Doc link.
          </p>
        </div>
      )}

      {error && (
        <p role="alert" className="cms-import__error">
          {error}
        </p>
      )}

      <Button type="submit" disabled={busy}>
        {busy ? "Importing..." : "Create draft"}
      </Button>
    </form>
  );
}
