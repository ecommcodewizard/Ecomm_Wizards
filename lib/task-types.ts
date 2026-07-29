// Pure task-board constants and types — NO database imports, so this module is
// safe to import from client components. lib/tasks.ts (which pulls in mysql2 and
// can't be bundled for the browser) imports from here and re-exports for server
// code. Client components must import from THIS file, not from lib/tasks.

export const TASK_STATUSES = ["backlog", "todo", "in_progress", "done"] as const;
export type TaskStatus = (typeof TASK_STATUSES)[number];

export const TASK_PRIORITIES = ["low", "medium", "high"] as const;
export type TaskPriority = (typeof TASK_PRIORITIES)[number];

export interface TaskRow {
  id: number;
  title: string;
  description: string | null;
  status: TaskStatus;
  assignee: string | null;
  priority: TaskPriority;
  position: number;
  created_at: string;
  updated_at: string;
}

export interface TaskInput {
  title: string;
  description?: string | null;
  assignee?: string | null;
  status?: TaskStatus;
  priority?: TaskPriority;
}

export interface TaskPatch {
  title?: string;
  description?: string | null;
  assignee?: string | null;
  status?: TaskStatus;
  priority?: TaskPriority;
}

export function isTaskStatus(v: unknown): v is TaskStatus {
  return typeof v === "string" && (TASK_STATUSES as readonly string[]).includes(v);
}
export function isTaskPriority(v: unknown): v is TaskPriority {
  return typeof v === "string" && (TASK_PRIORITIES as readonly string[]).includes(v);
}
