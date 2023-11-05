import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/db";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const body = await req.json();
    const { name, email, phone, title, message } = body;

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
      return NextResponse.json({ error: "Error creating entry" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }
}

