import { NextResponse } from "next/server";
import { registerUser } from "@/backend/services/auth.service";

export const handleRegister = async (req: Request) => {
  try {
    const body = await req.json();
    const { fullname, email, phoneNumber, password, role } = body;

    if (!fullname || !email || !phoneNumber || !password || !role) {
      return NextResponse.json(
        { message: "All fields are required", success: false },
        { status: 400 }
      );
    }

    await registerUser({ fullname, email, phoneNumber, password, role });

    return NextResponse.json(
      { message: "Account created successfully.", success: true },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(error);
    if (error.message === "User already exists") {
      return NextResponse.json(
        { message: error.message, success: false },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Internal server error", success: false },
      { status: 500 }
    );
  }
};
