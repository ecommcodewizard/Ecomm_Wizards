import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/auth";
import { deleteBooking } from "@/lib/bookings";

// Delete a single captured booking. Auth is checked here directly (a route
// handler does not re-run the (protected) admin layout guard).
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
  const bookingId = Number(id);
  if (!Number.isInteger(bookingId) || bookingId <= 0) {
    return NextResponse.json({ error: "Invalid booking id" }, { status: 400 });
  }

  try {
    const deleted = await deleteBooking(bookingId);
    if (!deleted) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[admin] delete booking failed:", e);
    return NextResponse.json({ error: "Could not delete booking" }, { status: 500 });
  }
}
