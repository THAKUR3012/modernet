import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const allUsers = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
        permissions: users.permissions,
        isActive: users.isActive,
        createdAt: users.createdAt,
      })
      .from(users);

    const formatted = allUsers.map((u) => {
      let perms: string[] = [];
      try {
        perms = JSON.parse(u.permissions);
      } catch {
        perms = [];
      }
      return { ...u, permissions: perms };
    });

    return NextResponse.json({ success: true, users: formatted });
  } catch (error: unknown) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role, permissions } = await req.json();

    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { success: false, error: "Name, email, password and role are required" },
        { status: 400 }
      );
    }

    const permsJson = JSON.stringify(permissions || ["leads:view"]);

    const [result] = await db.insert(users).values({
      name,
      email: email.trim().toLowerCase(),
      password,
      role,
      permissions: permsJson,
      isActive: true,
    });

    return NextResponse.json({ success: true, id: result.insertId }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error creating user:", error);
    return NextResponse.json({ success: false, error: "Failed to create user" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, role, permissions, isActive } = await req.json();
    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      return NextResponse.json({ success: false, error: "Invalid ID" }, { status: 400 });
    }

    const updateData: Partial<typeof users.$inferInsert> = {};
    if (role !== undefined) updateData.role = role;
    if (permissions !== undefined) updateData.permissions = JSON.stringify(permissions);
    if (isActive !== undefined) updateData.isActive = isActive;

    await db.update(users).set(updateData).where(eq(users.id, numericId));

    return NextResponse.json({ success: true, message: "User updated successfully" });
  } catch (error: unknown) {
    console.error("Error updating user:", error);
    return NextResponse.json({ success: false, error: "Failed to update user" }, { status: 500 });
  }
}
