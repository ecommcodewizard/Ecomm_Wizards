"use client";

import { useState } from "react";

const Icon = ({ d, fill }: { d: string[]; fill?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" {...(fill ? { fill: "currentColor" } : { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const })}>
    {d.map((p) => <path key={p} d={p} />)}
  </svg>
);

const LINK = ["M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"];
const CHECK = ["M20 6 9 17l-5-5"];
const MAIL = ["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"];
const LINKEDIN = ["M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"];
const X = ["M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z"];

export default function ShareLinks({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link", url);
    }
  };

  return (
    <div className="sh">
      <p className="sh-label">Share this article</p>
      <div className="sh-row">
        <button type="button" className="sh-btn" onClick={copy}>
          <Icon d={copied ? CHECK : LINK} />
          {copied ? "Copied" : "Copy link"}
        </button>
        <a className="sh-btn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} target="_blank" rel="noopener noreferrer">
          <Icon d={LINKEDIN} fill />
          LinkedIn
        </a>
        <a className="sh-btn" href={`https://twitter.com/intent/tweet?url=${u}&text=${t}`} target="_blank" rel="noopener noreferrer">
          <Icon d={X} fill />
          X
        </a>
        <a className="sh-btn" href={`mailto:?subject=${t}&body=${u}`}>
          <Icon d={MAIL} />
          Email
        </a>
      </div>
    </div>
  );
}
