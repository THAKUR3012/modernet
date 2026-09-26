import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const sessionCookie = req.cookies.get("modernet_session")?.value;
    if (!sessionCookie) {
      return NextResponse.json({ authenticated: false, user: null }, { status: 401 });
    }

    const user = JSON.parse(sessionCookie);
    return NextResponse.json({ authenticated: true, user });
  } catch {
    return NextResponse.json({ authenticated: false, user: null }, { status: 401 });
  }
}
