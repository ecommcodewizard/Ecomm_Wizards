import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/auth";
import {
  getTasks,
  createTask,
  reorderTasks,
  isTaskStatus,
  isTaskPriority,
  TASK_STATUSES,
  type TaskStatus,
} from "@/lib/tasks";

// Task board collection endpoint. Auth is checked here directly (a route handler
// does not re-run the (protected) admin layout guard).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function asRecord(v: unknown): Record<string, unknown> {
  return v && typeof v === "object" ? (v as Record<string, unknown>) : {};
}

export async function GET() {
  if (!(await isAuthed())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const tasks = await getTasks();
    return NextResponse.json({ tasks });
  } catch (e) {
    console.error("[admin] list tasks failed:", e);
    return NextResponse.json({ error: "Could not load tasks" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!(await isAuthed())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const root = asRecord(body);

  const title = typeof root.title === "string" ? root.title.trim() : "";
  if (!title) return NextResponse.json({ error: "Title is required" }, { status: 400 });

  const description = typeof root.description === "string" ? root.description.trim() || null : null;
  const assignee = typeof root.assignee === "string" ? root.assignee.trim().slice(0, 255) || null : null;
  const status: TaskStatus = isTaskStatus(root.status) ? root.status : "backlog";
  const priority = isTaskPriority(root.priority) ? root.priority : "medium";

  try {
    const task = await createTask({ title: title.slice(0, 512), description, assignee, status, priority });
    return NextResponse.json({ task }, { status: 201 });
  } catch (e) {
    console.error("[admin] create task failed:", e);
    return NextResponse.json({ error: "Could not create task" }, { status: 500 });
  }
}

// Bulk reorder / move: body = { order: { backlog: [ids…], todo: [ids…], … } }.
// Only the columns present are touched; ids keep their given order.
export async function PATCH(req: Request) {
  if (!(await isAuthed())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const src = asRecord(asRecord(body).order);
  if (Object.keys(src).length === 0) {
    return NextResponse.json({ error: "Missing order" }, { status: 400 });
  }

  const order: Partial<Record<TaskStatus, number[]>> = {};
  const seen = new Set<number>();
  for (const status of TASK_STATUSES) {
    const arr = src[status];
    if (arr === undefined) continue;
    if (!Array.isArray(arr)) {
      return NextResponse.json({ error: `Invalid order for ${status}` }, { status: 400 });
    }
    const ids = arr.map((n) => Number(n)).filter((n) => Number.isInteger(n) && n > 0);
    for (const taskId of ids) {
      // The same id in two columns would make the last-written column silently
      // win; reject it rather than corrupt the board.
      if (seen.has(taskId)) {
        return NextResponse.json({ error: "A task id appears in more than one column" }, { status: 400 });
      }
      seen.add(taskId);
    }
    order[status] = ids;
  }

  try {
    await reorderTasks(order);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[admin] reorder tasks failed:", e);
    return NextResponse.json({ error: "Could not reorder tasks" }, { status: 500 });
  }
}
