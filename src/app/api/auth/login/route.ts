import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users, auditLogs } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    const [user] = await db.select().from(users).where(eq(users.email, email.trim().toLowerCase()));

    if (!user || user.password !== password) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        { success: false, error: "This account has been deactivated" },
        { status: 403 }
      );
    }

    let parsedPermissions: string[] = [];
    try {
      parsedPermissions = JSON.parse(user.permissions);
    } catch {
      parsedPermissions = [];
    }

    // Log login audit
    await db.insert(auditLogs).values({
      userEmail: user.email,
      action: "LOGIN",
      details: `User logged in with role ${user.role}`,
    });

    const sessionPayload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      permissions: parsedPermissions,
    };

    const response = NextResponse.json({
      success: true,
      user: sessionPayload,
    });

    // Store in cookie
    response.cookies.set("modernet_session", JSON.stringify(sessionPayload), {
      httpOnly: false, // accessible to client for quick permission checks
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error: unknown) {
    console.error("Login error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
