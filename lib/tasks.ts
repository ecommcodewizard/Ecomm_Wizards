import type { RowDataPacket, ResultSetHeader } from "mysql2";
import { getPool } from "./db";
import {
  TASK_STATUSES,
  isTaskStatus,
  isTaskPriority,
  type TaskStatus,
  type TaskPriority,
  type TaskRow,
  type TaskInput,
  type TaskPatch,
} from "./task-types";
import {
  devGetTasks,
  devCreateTask,
  devUpdateTask,
  devDeleteTask,
  devReorderTasks,
} from "./tasks-dev-store";

// Local dev without a database: fall back to an in-memory store so the board
// works on localhost. Production always has DB_HOST (set in hPanel), so this is
// never active there.
const USE_DEV_STORE = process.env.NODE_ENV !== "production" && !process.env.DB_HOST;

// Internal task board (website/dev work). Same self-provisioning pattern as
// `bookings`: the app creates the table on first use so it works even when
// Hostinger's phpMyAdmin is unreachable. Kept in sync with db/schema.sql by hand.
//
// The pure constants/types/guards live in ./task-types (no DB import) so client
// components can use them; re-exported here so server code can keep importing
// everything from "@/lib/tasks".
export * from "./task-types";

const CREATE_TASKS_TABLE = `CREATE TABLE IF NOT EXISTS tasks (
  id          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  title       VARCHAR(512)  NOT NULL,
  description TEXT          NULL,
  status      VARCHAR(32)   NOT NULL DEFAULT 'backlog',
  assignee    VARCHAR(255)  NULL,
  priority    VARCHAR(16)   NOT NULL DEFAULT 'medium',
  position    INT           NOT NULL DEFAULT 0,
  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_status_position (status, position)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`;

// Runs the idempotent CREATE once per process. Cached as a promise so concurrent
// callers share one attempt; cleared on failure so the next call can retry.
let ensured: Promise<void> | null = null;
function ensureTasksTable(): Promise<void> {
  if (!ensured) {
    ensured = getPool()
      .query(CREATE_TASKS_TABLE)
      .then(() => undefined)
      .catch((e) => {
        ensured = null;
        throw e;
      });
  }
  return ensured;
}

export async function getTasks(): Promise<TaskRow[]> {
  if (USE_DEV_STORE) return devGetTasks();
  await ensureTasksTable();
  const pool = getPool();
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT id, title, description, status, assignee, priority, position, created_at, updated_at
       FROM tasks ORDER BY position ASC, id ASC`,
  );
  return rows as unknown as TaskRow[];
}

async function getTaskById(id: number): Promise<TaskRow | null> {
  const pool = getPool();
  const [rows] = await pool.query<RowDataPacket[]>(
    `SELECT id, title, description, status, assignee, priority, position, created_at, updated_at
       FROM tasks WHERE id = ?`,
    [id],
  );
  return (rows[0] as unknown as TaskRow) ?? null;
}

export async function createTask(input: TaskInput): Promise<TaskRow> {
  if (USE_DEV_STORE) return devCreateTask(input);
  await ensureTasksTable();
  const pool = getPool();
  const status: TaskStatus = isTaskStatus(input.status) ? input.status : "backlog";
  const priority: TaskPriority = isTaskPriority(input.priority) ? input.priority : "medium";

  // New card goes to the end of its column.
  const [maxRows] = await pool.query<RowDataPacket[]>(
    `SELECT COALESCE(MAX(position), -1) + 1 AS pos FROM tasks WHERE status = ?`,
    [status],
  );
  const position = Number((maxRows[0] as { pos: number }).pos) || 0;

  const [res] = await pool.execute<ResultSetHeader>(
    `INSERT INTO tasks (title, description, status, assignee, priority, position)
     VALUES (?,?,?,?,?,?)`,
    [input.title, input.description ?? null, status, input.assignee ?? null, priority, position],
  );
  const row = await getTaskById(res.insertId);
  if (!row) throw new Error("Task vanished after insert");
  return row;
}

export async function updateTask(id: number, patch: TaskPatch): Promise<TaskRow | null> {
  if (USE_DEV_STORE) return devUpdateTask(id, patch);
  await ensureTasksTable();
  const pool = getPool();

  const sets: string[] = [];
  const vals: (string | number | null)[] = [];

  // Moving to a different column via the edit modal should append the task to the
  // end of that column (like a drag-drop move) instead of leaving it at its old
  // position, which would drop it into the middle of the destination column.
  if (patch.status !== undefined) {
    const current = await getTaskById(id);
    if (!current) return null;
    if (current.status !== patch.status) {
      const [maxRows] = await pool.query<RowDataPacket[]>(
        `SELECT COALESCE(MAX(position), -1) + 1 AS pos FROM tasks WHERE status = ?`,
        [patch.status],
      );
      sets.push("position = ?");
      vals.push(Number((maxRows[0] as { pos: number }).pos) || 0);
    }
  }

  if (patch.title !== undefined) { sets.push("title = ?"); vals.push(patch.title); }
  if (patch.description !== undefined) { sets.push("description = ?"); vals.push(patch.description ?? null); }
  if (patch.assignee !== undefined) { sets.push("assignee = ?"); vals.push(patch.assignee ?? null); }
  if (patch.status !== undefined) { sets.push("status = ?"); vals.push(patch.status); }
  if (patch.priority !== undefined) { sets.push("priority = ?"); vals.push(patch.priority); }

  if (sets.length > 0) {
    vals.push(id);
    await pool.execute<ResultSetHeader>(`UPDATE tasks SET ${sets.join(", ")} WHERE id = ?`, vals);
  }
  // affectedRows can be 0 for an unchanged row, so confirm existence with a read.
  return getTaskById(id);
}

export async function deleteTask(id: number): Promise<boolean> {
  if (USE_DEV_STORE) return devDeleteTask(id);
  await ensureTasksTable();
  const pool = getPool();
  const [res] = await pool.execute<ResultSetHeader>(`DELETE FROM tasks WHERE id = ?`, [id]);
  return res.affectedRows > 0;
}

// Persist a full re-ordering. `order` maps each column to its task ids in display
// order; every listed task gets that status and its array index as position, in
// one transaction so a mid-move failure can't leave the board half-updated.
export async function reorderTasks(order: Partial<Record<TaskStatus, number[]>>): Promise<void> {
  if (USE_DEV_STORE) return devReorderTasks(order);
  await ensureTasksTable();
  const conn = await getPool().getConnection();
  try {
    await conn.beginTransaction();
    for (const status of TASK_STATUSES) {
      const ids = order[status];
      if (!ids) continue;
      for (let i = 0; i < ids.length; i++) {
        await conn.execute(`UPDATE tasks SET status = ?, position = ? WHERE id = ?`, [status, i, ids[i]]);
      }
    }
    await conn.commit();
  } catch (e) {
    await conn.rollback();
    throw e;
  } finally {
    conn.release();
  }
}
