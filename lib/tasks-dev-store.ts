// DEV-ONLY in-memory task store. Used automatically when running locally without
// a database configured (NODE_ENV !== "production" && no DB_HOST) so the board
// can be exercised end-to-end on localhost. In production DB_HOST is always set
// (via hPanel), so this file is NEVER used there. Data lives only in process
// memory and resets when the dev server restarts. lib/tasks.ts delegates here.

import type { TaskRow, TaskInput, TaskPatch, TaskStatus } from "./task-types";
import { TASK_STATUSES, isTaskStatus, isTaskPriority } from "./task-types";

type Store = { rows: TaskRow[]; nextId: number };

declare global {
  // eslint-disable-next-line no-var
  var __ewDevTasks: Store | undefined;
}

function now(): string {
  return new Date().toISOString().slice(0, 19).replace("T", " ");
}

// A few sample cards so the board isn't empty on first view locally.
function seed(): Store {
  const t = now();
  const base: Array<Omit<TaskRow, "id" | "position" | "created_at" | "updated_at">> = [
    { title: "Fix cost FAQ currency (GBP → USD)", description: "Landing-page FAQ shows GBP; switch to USD.", assignee: "Asad", priority: "high", status: "in_progress" },
    { title: "Ship video sitemap + poster frames", description: "Verify /video-sitemap.xml on live and posters resolve.", assignee: "Mateen", priority: "medium", status: "done" },
    { title: "AdsBot / Hostinger bot-protection allowlist", description: "Unblock AdsBot-Google for the ads launch.", assignee: null, priority: "high", status: "todo" },
    { title: "Expand FAQ schema on service pages", description: "Add FAQPage JSON-LD where missing.", assignee: "Haseeb", priority: "low", status: "backlog" },
  ];
  const perCol: Partial<Record<TaskStatus, number>> = {};
  const rows: TaskRow[] = base.map((b, i) => {
    const pos = perCol[b.status] ?? 0;
    perCol[b.status] = pos + 1;
    return { ...b, id: i + 1, position: pos, created_at: t, updated_at: t };
  });
  return { rows, nextId: base.length + 1 };
}

function store(): Store {
  if (!global.__ewDevTasks) {
    global.__ewDevTasks = seed();
    console.warn("[tasks] Using DEV in-memory store (no DB_HOST configured). Data resets on restart.");
  }
  return global.__ewDevTasks;
}

export async function devGetTasks(): Promise<TaskRow[]> {
  return [...store().rows].sort((a, b) => a.position - b.position || a.id - b.id);
}

export async function devCreateTask(input: TaskInput): Promise<TaskRow> {
  const s = store();
  const status: TaskStatus = isTaskStatus(input.status) ? input.status : "backlog";
  const priority = isTaskPriority(input.priority) ? input.priority : "medium";
  const maxPos = s.rows.filter((r) => r.status === status).reduce((m, r) => Math.max(m, r.position), -1);
  const t = now();
  const row: TaskRow = {
    id: s.nextId++,
    title: input.title,
    description: input.description ?? null,
    status,
    assignee: input.assignee ?? null,
    priority,
    position: maxPos + 1,
    created_at: t,
    updated_at: t,
  };
  s.rows.push(row);
  return row;
}

export async function devUpdateTask(id: number, patch: TaskPatch): Promise<TaskRow | null> {
  const s = store();
  const row = s.rows.find((r) => r.id === id);
  if (!row) return null;
  // Match the DB behavior: moving to a new column via edit appends to its end.
  if (patch.status !== undefined && patch.status !== row.status) {
    const maxPos = s.rows.filter((r) => r.status === patch.status).reduce((m, r) => Math.max(m, r.position), -1);
    row.position = maxPos + 1;
  }
  if (patch.title !== undefined) row.title = patch.title;
  if (patch.description !== undefined) row.description = patch.description ?? null;
  if (patch.assignee !== undefined) row.assignee = patch.assignee ?? null;
  if (patch.status !== undefined) row.status = patch.status;
  if (patch.priority !== undefined) row.priority = patch.priority;
  row.updated_at = now();
  return row;
}

export async function devDeleteTask(id: number): Promise<boolean> {
  const s = store();
  const i = s.rows.findIndex((r) => r.id === id);
  if (i < 0) return false;
  s.rows.splice(i, 1);
  return true;
}

export async function devReorderTasks(order: Partial<Record<TaskStatus, number[]>>): Promise<void> {
  const s = store();
  for (const status of TASK_STATUSES) {
    const ids = order[status];
    if (!ids) continue;
    ids.forEach((id, idx) => {
      const row = s.rows.find((r) => r.id === id);
      if (row) {
        row.status = status;
        row.position = idx;
        row.updated_at = now();
      }
    });
  }
}
