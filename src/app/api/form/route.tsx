import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import formSchema from "@/utils/schemas/formSchema";

export async function POST(req: NextRequest) {
  // Check for Content-Type 'application/json'
  if (req.headers.get("content-type") !== "application/json") {
    return NextResponse.json(
      { error: "Unsupported Media Type" },
      { status: 415 },
    );
  }
  if (req.method === "POST") {
    const body = await req.json();

    // Validate the form data with Zod
    const validationResult = formSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { errors: validationResult.error.flatten() },
        { status: 400 },
      );
    }

    // Destructure the data from validationResult
    const { name, email, phone, title, message } = validationResult.data;

    try {
      await prisma.form.create({
        data: {
          name,
          email,
          phone,
          title,
          message,
        },
      });

      return NextResponse.json("message sent");
    } catch (error) {
      console.error("Request error", error);
      return NextResponse.json(
        { error: "Error creating entry" },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}
