import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getUserByEmail, addUser, isAdmin } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name, company, phone, trade, licenseNumber, state } = body;

    if (!email || !password || !name || !company || !phone || !trade) {
      return NextResponse.json({ error: "All required fields must be filled" }, { status: 400 });
    }

    // Check if user already exists
    const existing = getUserByEmail(email);
    if (existing) {
      return NextResponse.json({ error: "An account with this email already exists" }, { status: 409 });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user
    const user = {
      id: crypto.randomUUID(),
      email: email.toLowerCase().trim(),
      passwordHash,
      name,
      company,
      phone,
      trade,
      licenseNumber: licenseNumber || "",
      state: state || "",
      role: isAdmin(email) ? "admin" as const : "bidder" as const,
      createdAt: new Date().toISOString(),
    };

    addUser(user);

    return NextResponse.json({ success: true, message: "Account created successfully" });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
