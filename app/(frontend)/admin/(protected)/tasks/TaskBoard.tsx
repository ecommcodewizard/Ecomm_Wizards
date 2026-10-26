"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TASK_STATUSES, type TaskRow, type TaskStatus, type TaskPriority } from "@/lib/task-types";

const STATUS_LABEL: Record<TaskStatus, string> = {
  backlog: "Backlog",
  todo: "To Do",
  in_progress: "In Progress",
  done: "Done",
};

const PRIORITY_META: Record<TaskPriority, { label: string; bg: string; fg: string }> = {
  low: { label: "Low", bg: "#f1f5f9", fg: "#64748b" },
  medium: { label: "Medium", bg: "#fef3c7", fg: "#92400e" },
  high: { label: "High", bg: "#fee2e2", fg: "#991b1b" },
};

const BOARD_CSS = `
.ewt-board{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;align-items:start;margin-top:4px}
.ewt-col{background:#eef1f5;border:1px solid #e5e7eb;border-radius:14px;display:flex;flex-direction:column;min-height:130px;transition:background .12s,outline-color .12s}
.ewt-col--over{outline:2px dashed #2A9555;outline-offset:-2px;background:#e8f5ec}
.ewt-col-head{display:flex;align-items:center;justify-content:space-between;padding:14px 14px 10px}
.ewt-col-title{font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#475569;display:flex;align-items:center;gap:8px}
.ewt-col-count{background:#fff;border:1px solid #e5e7eb;border-radius:99px;font-size:11px;font-weight:700;color:#64748b;padding:1px 8px}
.ewt-add{border:none;background:transparent;color:#2A9555;font-weight:700;font-size:13px;cursor:pointer;font-family:inherit;padding:2px 7px;border-radius:6px;line-height:1}
.ewt-add:hover{background:#dcfce7}
.ewt-list{display:flex;flex-direction:column;gap:8px;padding:0 10px 12px;min-height:28px}
.ewt-empty-col{font-size:12px;color:#aeb7c2;padding:4px 4px 8px;margin:0;font-style:italic}
.ewt-card{background:#fff;border:1px solid #e8ebef;border-left:3px solid #cbd5e1;border-radius:10px;padding:11px 12px;cursor:grab;box-shadow:0 1px 2px rgba(15,23,42,.04);text-align:left}
.ewt-card:hover{box-shadow:0 3px 10px rgba(15,23,42,.09)}
.ewt-card:focus-visible{outline:2px solid #2A9555;outline-offset:2px}
.ewt-card--dragging{opacity:.4}
.ewt-card--p-high{border-left-color:#ef4444}
.ewt-card--p-medium{border-left-color:#f59e0b}
.ewt-card--p-low{border-left-color:#94a3b8}
.ewt-card-title{font-size:13.5px;font-weight:600;color:#0f172a;margin:0;line-height:1.35;word-break:break-word}
.ewt-card-desc{font-size:12px;color:#64748b;margin:6px 0 0;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.ewt-card-foot{display:flex;align-items:center;justify-content:space-between;margin-top:10px;gap:8px}
.ewt-assignee{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;color:#334155;background:#f1f5f9;border-radius:99px;padding:3px 9px 3px 3px;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.ewt-avatar{width:17px;height:17px;border-radius:50%;background:#2A9555;color:#fff;font-size:9px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}
.ewt-unassigned{font-size:11px;color:#b0b8c4;font-style:italic}
.ewt-pill{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.03em;padding:2px 7px;border-radius:99px;flex-shrink:0}
.ewt-drop-line{height:2px;background:#2A9555;border-radius:2px;margin:1px 2px}
.ewt-overlay{position:fixed;inset:0;background:rgba(15,23,42,.45);display:flex;align-items:flex-start;justify-content:center;padding:56px 16px;z-index:50}
.ewt-modal{background:#fff;border-radius:16px;width:100%;max-width:470px;padding:22px 22px 20px;box-shadow:0 24px 60px rgba(15,23,42,.28)}
.ewt-modal h2{font-size:18px;font-weight:700;color:#0f172a;margin:0 0 16px}
.ewt-field{margin-bottom:13px}
.ewt-label{display:block;font-size:11px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#94a3b8;margin-bottom:5px}
.ewt-input,.ewt-textarea,.ewt-select{width:100%;font-family:inherit;font-size:14px;color:#0f172a;border:1px solid #e2e8f0;border-radius:9px;padding:9px 11px;background:#fff}
.ewt-input:focus,.ewt-textarea:focus,.ewt-select:focus{outline:none;border-color:#2A9555;box-shadow:0 0 0 3px rgba(42,149,85,.12)}
.ewt-textarea{resize:vertical;min-height:72px}
.ewt-row{display:grid;grid-template-columns:1fr 1fr;gap:11px}
.ewt-actions{display:flex;align-items:center;gap:10px;margin-top:18px}
.ewt-btn{font-family:inherit;font-size:14px;font-weight:600;border-radius:9px;padding:10px 16px;cursor:pointer;border:1px solid transparent}
.ewt-btn--primary{background:#1E7E45;color:#fff}
.ewt-btn--primary:hover{background:#186637}
.ewt-btn--ghost{background:#fff;color:#475569;border-color:#e2e8f0}
.ewt-btn--ghost:hover{background:#f8fafc}
.ewt-btn--danger{background:#fff;color:#b91c1c;border-color:#fecaca;margin-left:auto}
.ewt-btn--danger:hover{background:#fef2f2}
.ewt-btn:disabled{opacity:.6;cursor:default}
@media (max-width:1100px){.ewt-board{grid-template-columns:repeat(2,1fr)}}
@media (max-width:640px){.ewt-board{grid-template-columns:1fr}}
`;

type Draft = {
  id: number | null;
  title: string;
  description: string;
  assignee: string;
  priority: TaskPriority;
  status: TaskStatus;
};

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}

export default function TaskBoard({ initialTasks }: { initialTasks: TaskRow[] }) {
  const router = useRouter();
  const [tasks, setTasks] = useState<TaskRow[]>(initialTasks);
  const [dragId, setDragId] = useState<number | null>(null);
  const [dropHint, setDropHint] = useState<{ status: TaskStatus; index: number } | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [saving, setSaving] = useState(false);

  const group = (status: TaskStatus): TaskRow[] =>
    tasks.filter((t) => t.status === status).sort((a, b) => a.position - b.position || a.id - b.id);

  // ---------- drag & drop ----------
  function handleDrop(toStatus: TaskStatus) {
    const hint = dropHint;
    const id = dragId;
    setDragId(null);
    setDropHint(null);
    if (id == null) return;
    const toIndex = hint && hint.status === toStatus ? hint.index : group(toStatus).length;
    move(id, toStatus, toIndex);
  }

  function move(id: number, toStatus: TaskStatus, toIndex: number) {
    const byStatus: Record<TaskStatus, TaskRow[]> = {
      backlog: group("backlog"),
      todo: group("todo"),
      in_progress: group("in_progress"),
      done: group("done"),
    };

    let moved: TaskRow | null = null;
    let fromStatus: TaskStatus | null = null;
    let fromIndex = -1;
    for (const s of TASK_STATUSES) {
      const i = byStatus[s].findIndex((t) => t.id === id);
      if (i >= 0) {
        moved = byStatus[s][i];
        fromStatus = s;
        fromIndex = i;
        byStatus[s].splice(i, 1);
        break;
      }
    }
    if (!moved) return;

    // dropHint.index was measured against the column BEFORE the card was removed.
    // Dragging further down within the same column shifts every later index down
    // by one once the card is spliced out, so the target must shift too.
    let target = toIndex;
    if (fromStatus === toStatus && fromIndex < target) target -= 1;

    const dest = byStatus[toStatus];
    const clamped = Math.max(0, Math.min(target, dest.length));
    dest.splice(clamped, 0, { ...moved, status: toStatus });

    const next: TaskRow[] = [];
    for (const s of TASK_STATUSES) byStatus[s].forEach((t, idx) => next.push({ ...t, status: s, position: idx }));
    setTasks(next);

    const order: Record<string, number[]> = {};
    for (const s of TASK_STATUSES) order[s] = byStatus[s].map((t) => t.id);
    void persistOrder(order);
  }

  async function persistOrder(order: Record<string, number[]>) {
    try {
      const res = await fetch("/api/admin/tasks", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order }),
      });
      if (!res.ok) throw new Error("reorder failed");
    } catch {
      // The optimistic reorder already changed local state; if it didn't persist,
      // reload the real order from the server so the board can't silently diverge
      // (router.refresh alone won't reset this client component's useState).
      window.alert("Couldn't save the new order — reloading the board from the server.");
      try {
        const r = await fetch("/api/admin/tasks");
        if (r.ok) {
          const d = await r.json();
          setTasks(d.tasks as TaskRow[]);
          return;
        }
      } catch {
        /* fall through to a full refresh */
      }
      router.refresh();
    }
  }

  // ---------- create / edit / delete ----------
  const openNew = (status: TaskStatus) =>
    setDraft({ id: null, title: "", description: "", assignee: "", priority: "medium", status });
  const openEdit = (t: TaskRow) =>
    setDraft({
      id: t.id,
      title: t.title,
      description: t.description ?? "",
      assignee: t.assignee ?? "",
      priority: t.priority,
      status: t.status,
    });

  async function saveDraft() {
    if (!draft) return;
    const title = draft.title.trim();
    if (!title) return;
    setSaving(true);
    const payload = {
      title,
      description: draft.description.trim(),
      assignee: draft.assignee.trim(),
      priority: draft.priority,
      status: draft.status,
    };
    try {
      if (draft.id == null) {
        const res = await fetch("/api/admin/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error((await res.json().catch(() => null))?.error ?? "Could not create task");
        const { task } = await res.json();
        setTasks((prev) => [...prev, task]);
      } else {
        const res = await fetch(`/api/admin/tasks/${draft.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error((await res.json().catch(() => null))?.error ?? "Could not save task");
        const { task } = await res.json();
        setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));
      }
      setDraft(null);
    } catch (e) {
      window.alert(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  async function deleteDraft() {
    if (!draft || draft.id == null) return;
    if (!window.confirm("Delete this task? This cannot be undone.")) return;
    const id = draft.id;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/tasks/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error((await res.json().catch(() => null))?.error ?? "Could not delete task");
      setTasks((prev) => prev.filter((t) => t.id !== id));
      setDraft(null);
    } catch (e) {
      window.alert(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  // ---------- stats ----------
  const inProgress = tasks.filter((t) => t.status === "in_progress").length;
  const pending = tasks.filter((t) => t.status === "backlog" || t.status === "todo").length;
  const done = tasks.filter((t) => t.status === "done").length;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BOARD_CSS }} />

      <div className="ewa-stats">
        <StatCard label="In progress" value={inProgress} sub="Being worked on" />
        <StatCard label="Pending" value={pending} sub="Backlog + To Do" />
        <StatCard label="Done" value={done} sub="Completed" />
        <StatCard label="Total" value={tasks.length} sub="All tasks" />
      </div>

      <div className="ewt-board">
        {TASK_STATUSES.map((status) => {
          const col = group(status);
          const over = dragId != null && dropHint?.status === status;
          return (
            <section
              key={status}
              className={`ewt-col${over ? " ewt-col--over" : ""}`}
              onDragOver={(e) => {
                if (dragId == null) return;
                e.preventDefault();
                setDropHint({ status, index: col.length });
              }}
              onDrop={(e) => {
                e.preventDefault();
                handleDrop(status);
              }}
            >
              <div className="ewt-col-head">
                <span className="ewt-col-title">
                  {STATUS_LABEL[status]}
                  <span className="ewt-col-count">{col.length}</span>
                </span>
                <button className="ewt-add" type="button" onClick={() => openNew(status)}>
                  + Add
                </button>
              </div>

              <div className="ewt-list">
                {col.length === 0 && dragId == null && <p className="ewt-empty-col">No tasks</p>}

                {col.map((t, i) => (
                  <div key={t.id}>
                    {over && dropHint?.index === i && <div className="ewt-drop-line" />}
                    <article
                      className={`ewt-card ewt-card--p-${t.priority}${dragId === t.id ? " ewt-card--dragging" : ""}`}
                      draggable
                      onDragStart={(e) => {
                        setDragId(t.id);
                        e.dataTransfer.effectAllowed = "move";
                        e.dataTransfer.setData("text/plain", String(t.id));
                      }}
                      onDragEnd={() => {
                        setDragId(null);
                        setDropHint(null);
                      }}
                      onDragOver={(e) => {
                        if (dragId == null) return;
                        e.preventDefault();
                        e.stopPropagation();
                        const r = e.currentTarget.getBoundingClientRect();
                        const after = e.clientY > r.top + r.height / 2;
                        setDropHint({ status, index: after ? i + 1 : i });
                      }}
                      onClick={() => openEdit(t)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openEdit(t);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Edit task: ${t.title}`}
                    >
                      <p className="ewt-card-title">{t.title}</p>
                      {t.description && <p className="ewt-card-desc">{t.description}</p>}
                      <div className="ewt-card-foot">
                        {t.assignee ? (
                          <span className="ewt-assignee" title={t.assignee}>
                            <span className="ewt-avatar">{initials(t.assignee)}</span>
                            {t.assignee}
                          </span>
                        ) : (
                          <span className="ewt-unassigned">Unassigned</span>
                        )}
                        <span
                          className="ewt-pill"
                          style={{ background: PRIORITY_META[t.priority].bg, color: PRIORITY_META[t.priority].fg }}
                        >
                          {PRIORITY_META[t.priority].label}
                        </span>
                      </div>
                    </article>
                  </div>
                ))}

                {over && dropHint != null && dropHint.index >= col.length && <div className="ewt-drop-line" />}
              </div>
            </section>
          );
        })}
      </div>

      {draft && (
        <div className="ewt-overlay" onClick={() => !saving && setDraft(null)}>
          <div className="ewt-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <h2>{draft.id == null ? "New task" : "Edit task"}</h2>

            <div className="ewt-field">
              <label className="ewt-label">Title</label>
              <input
                className="ewt-input"
                autoFocus
                value={draft.title}
                placeholder="What needs doing?"
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) void saveDraft();
                }}
              />
            </div>

            <div className="ewt-field">
              <label className="ewt-label">Description</label>
              <textarea
                className="ewt-textarea"
                value={draft.description}
                placeholder="Details, links, acceptance criteria…"
                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
              />
            </div>

            <div className="ewt-row">
              <div className="ewt-field">
                <label className="ewt-label">Assignee</label>
                <input
                  className="ewt-input"
                  value={draft.assignee}
                  placeholder="Name"
                  onChange={(e) => setDraft({ ...draft, assignee: e.target.value })}
                />
              </div>
              <div className="ewt-field">
                <label className="ewt-label">Priority</label>
                <select
                  className="ewt-select"
                  value={draft.priority}
                  onChange={(e) => setDraft({ ...draft, priority: e.target.value as TaskPriority })}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            <div className="ewt-field">
              <label className="ewt-label">Column</label>
              <select
                className="ewt-select"
                value={draft.status}
                onChange={(e) => setDraft({ ...draft, status: e.target.value as TaskStatus })}
              >
                {TASK_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {STATUS_LABEL[s]}
                  </option>
                ))}
              </select>
            </div>

            <div className="ewt-actions">
              <button
                className="ewt-btn ewt-btn--primary"
                type="button"
                onClick={() => void saveDraft()}
                disabled={saving || !draft.title.trim()}
              >
                {saving ? "Saving…" : draft.id == null ? "Create task" : "Save"}
              </button>
              <button className="ewt-btn ewt-btn--ghost" type="button" onClick={() => setDraft(null)} disabled={saving}>
                Cancel
              </button>
              {draft.id != null && (
                <button className="ewt-btn ewt-btn--danger" type="button" onClick={() => void deleteDraft()} disabled={saving}>
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function StatCard({ label, value, sub }: { label: string; value: number; sub: string }) {
  return (
    <div className="ewa-card">
      <p className="ewa-stat-label">{label}</p>
      <p className="ewa-stat-value">{value}</p>
      <p className="ewa-stat-sub">{sub}</p>
    </div>
  );
}
