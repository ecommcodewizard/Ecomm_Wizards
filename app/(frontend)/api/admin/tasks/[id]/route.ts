import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/auth";
import { updateTask, deleteTask, isTaskStatus, isTaskPriority, type TaskPatch } from "@/lib/tasks";

// Single-task endpoint: edit fields (PATCH) or remove (DELETE). Auth checked here
// directly — route handlers don't re-run the (protected) admin layout guard.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function parseId(id: string): number | null {
  const n = Number(id);
  return Number.isInteger(n) && n > 0 ? n : null;
}

function asRecord(v: unknown): Record<string, unknown> {
  return v && typeof v === "object" ? (v as Record<string, unknown>) : {};
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthed())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const taskId = parseId(id);
  if (taskId === null) return NextResponse.json({ error: "Invalid task id" }, { status: 400 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const root = asRecord(body);

  const patch: TaskPatch = {};
  if (typeof root.title === "string") {
    const t = root.title.trim();
    if (!t) return NextResponse.json({ error: "Title cannot be empty" }, { status: 400 });
    patch.title = t.slice(0, 512);
  }
  if ("description" in root) {
    patch.description = typeof root.description === "string" ? root.description.trim() || null : null;
  }
  if ("assignee" in root) {
    patch.assignee = typeof root.assignee === "string" ? root.assignee.trim().slice(0, 255) || null : null;
  }
  if (root.status !== undefined) {
    if (!isTaskStatus(root.status)) return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    patch.status = root.status;
  }
  if (root.priority !== undefined) {
    if (!isTaskPriority(root.priority)) return NextResponse.json({ error: "Invalid priority" }, { status: 400 });
    patch.priority = root.priority;
  }

  try {
    const task = await updateTask(taskId, patch);
    if (!task) return NextResponse.json({ error: "Task not found" }, { status: 404 });
    return NextResponse.json({ task });
  } catch (e) {
    console.error("[admin] update task failed:", e);
    return NextResponse.json({ error: "Could not update task" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthed())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const taskId = parseId(id);
  if (taskId === null) return NextResponse.json({ error: "Invalid task id" }, { status: 400 });

  try {
    const deleted = await deleteTask(taskId);
    if (!deleted) return NextResponse.json({ error: "Task not found" }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[admin] delete task failed:", e);
    return NextResponse.json({ error: "Could not delete task" }, { status: 500 });
  }
}
