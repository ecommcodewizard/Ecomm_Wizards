import { getTasks, type TaskRow } from "@/lib/tasks";
import TaskBoard from "./TaskBoard";

// Internal task board. Auth is enforced by the (protected) layout. Never cache
// and never index.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function TasksDashboard() {
  let tasks: TaskRow[] = [];
  let error = "";
  try {
    tasks = await getTasks();
  } catch (e) {
    error = e instanceof Error ? e.message : "Could not load tasks.";
  }

  return (
    <>
      <p className="ewa-eyebrow"><i />Admin · Tasks</p>
      <h1 className="ewa-title">Tasks</h1>
      <p className="ewa-subtitle">
        Website &amp; dev work — what is in progress, what is pending, and who is on each task
      </p>

      {error ? (
        <div className="ewa-err">
          <strong>Could not load tasks.</strong> The <code>tasks</code> table is created automatically on
          first use; if this persists, check the database environment variables.
          <div style={{ marginTop: 6, color: "#b91c1c", fontFamily: "monospace", fontSize: 12 }}>{error}</div>
        </div>
      ) : (
        <TaskBoard initialTasks={tasks} />
      )}
    </>
  );
}
