"use client";

import { useState } from "react";
import { TOPICS, topicLabel, type Post, type TopicSlug } from "@/lib/blog/posts";

// Topic + search state shared by every blog layout.
export function useBlogFilter(posts: Post[]) {
  const [topic, setTopic] = useState<TopicSlug | "all">("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const results = posts.filter(
    (p) =>
      (topic === "all" || p.topic === topic) &&
      (!q || `${p.title} ${p.excerpt} ${topicLabel(p.topic)}`.toLowerCase().includes(q))
  );

  const topics = [{ slug: "all" as const, label: "All articles" }, ...TOPICS]
    .map((t) => ({ ...t, count: t.slug === "all" ? posts.length : posts.filter((p) => p.topic === t.slug).length }))
    .filter((t) => t.count);

  const reset = () => {
    setTopic("all");
    setQuery("");
  };

  return { topic, setTopic, query, setQuery, results, topics, browsing: topic === "all" && !q, reset };
}
