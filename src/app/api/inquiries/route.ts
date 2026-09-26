import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { desc } from "drizzle-orm";
import * as z from "zod";

const inquirySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  mobile: z.string().min(10, "Mobile must be at least 10 digits"),
  email: z.string().email().optional().or(z.literal("")),
  address: z.string().min(3, "Address is required"),
  service: z.string().min(1, "Service is required"),
  propertyType: z.string().optional().default("Residential"),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = inquirySchema.parse(body);

    const [result] = await db.insert(inquiries).values({
      fullName: validated.fullName,
      mobile: validated.mobile,
      email: validated.email || null,
      address: validated.address,
      service: validated.service,
      propertyType: validated.propertyType,
      preferredDate: validated.preferredDate || null,
      message: validated.message || null,
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inspection booking has been received. Our team will contact you shortly!",
        id: result.insertId,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.errors[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Error creating inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to record inquiry in database" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const list = await db
      .select()
      .from(inquiries)
      .orderBy(desc(inquiries.createdAt));

    return NextResponse.json({ success: true, inquiries: list });
  } catch (error: unknown) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
