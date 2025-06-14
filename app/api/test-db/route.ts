import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Contact from "@/models/Contact";

export async function GET() {
  try {
    await connectDB();
    
    // Get the latest 5 messages
    const messages = await Contact.find({})
      .sort({ createdAt: -1 })
      .limit(5);
    
    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Database test error:", error);
    return NextResponse.json(
      { error: "Failed to connect to database" },
      { status: 500 }
    );
  }
}
