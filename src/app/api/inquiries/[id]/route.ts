import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { eq } from "drizzle-orm";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function PATCH(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await req.json();
    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      return NextResponse.json({ success: false, error: "Invalid ID" }, { status: 400 });
    }

    const updateData: Partial<typeof inquiries.$inferInsert> = {};
    if (body.status !== undefined) updateData.status = body.status;
    if (body.assignedTo !== undefined) updateData.assignedTo = body.assignedTo;
    if (body.technicianNotes !== undefined) updateData.technicianNotes = body.technicianNotes;
    if (body.preferredDate !== undefined) updateData.preferredDate = body.preferredDate;

    await db
      .update(inquiries)
      .set(updateData)
      .where(eq(inquiries.id, numericId));

    return NextResponse.json({ success: true, message: "Inquiry updated successfully" });
  } catch (error: unknown) {
    console.error("Error updating inquiry:", error);
    return NextResponse.json({ success: false, error: "Failed to update inquiry" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      return NextResponse.json({ success: false, error: "Invalid ID" }, { status: 400 });
    }

    await db.delete(inquiries).where(eq(inquiries.id, numericId));

    return NextResponse.json({ success: true, message: "Inquiry deleted successfully" });
  } catch (error: unknown) {
    console.error("Error deleting inquiry:", error);
    return NextResponse.json({ success: false, error: "Failed to delete inquiry" }, { status: 500 });
  }
}
