import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    // Get the latest 5 messages using Prisma
    const messages = await prisma.contact.findMany({
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Database test error:", error);
    return NextResponse.json(
      { error: "Failed to connect to database" },
      { status: 500 }
    );
  }
}
