import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/auth";
import { deleteLead } from "@/lib/leads";

// Delete a single lead. Auth is checked here directly: a route handler is a
// separate request that does NOT re-run the (protected) admin layout guard.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const leadId = Number(id);
  if (!Number.isInteger(leadId) || leadId <= 0) {
    return NextResponse.json({ error: "Invalid lead id" }, { status: 400 });
  }

  try {
    const deleted = await deleteLead(leadId);
    if (!deleted) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[admin] delete lead failed:", e);
    return NextResponse.json({ error: "Could not delete lead" }, { status: 500 });
  }
}
