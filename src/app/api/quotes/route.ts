import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { quotes } from "@/db/schema";
import { desc } from "drizzle-orm";
import * as z from "zod";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().min(10, "Mobile must be at least 10 digits"),
  email: z.string().email().optional().or(z.literal("")),
  serviceType: z.string().min(1, "Service type is required"),
  lengthFeet: z.number().positive(),
  heightFeet: z.number().positive(),
  totalSqFt: z.number().positive(),
  estimatedPrice: z.number().positive(),
  notes: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = quoteSchema.parse(body);

    const [result] = await db.insert(quotes).values({
      fullName: validated.fullName,
      mobile: validated.mobile,
      email: validated.email || null,
      serviceType: validated.serviceType,
      lengthFeet: validated.lengthFeet.toFixed(2),
      heightFeet: validated.heightFeet.toFixed(2),
      totalSqFt: validated.totalSqFt.toFixed(2),
      estimatedPrice: validated.estimatedPrice.toFixed(2),
      status: "new",
      notes: validated.notes || null,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your estimated quote has been saved. We will contact you with special discounts!",
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
    console.error("Error creating quote:", error);
    return NextResponse.json({ success: false, error: "Failed to save quote" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const list = await db.select().from(quotes).orderBy(desc(quotes.createdAt));
    return NextResponse.json({ success: true, quotes: list });
  } catch (error: unknown) {
    console.error("Error fetching quotes:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch quotes" }, { status: 500 });
  }
}
