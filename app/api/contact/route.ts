import { type NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { Prisma } from "@prisma/client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Save message to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    // Prepare email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Send notification email
    if (process.env.NOTIFICATION_EMAIL) {
      try {
        await sendEmail(
          process.env.NOTIFICATION_EMAIL,
          "New Contact Form Submission",
          emailHtml
        );
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        return NextResponse.json(
          {
            message: "Message saved but email notification failed",
            id: contact.id,
          },
          { status: 207 }
        );
      }
    }

    return NextResponse.json(
      {
        message: "Message sent successfully! We'll get back to you soon.",
        id: contact.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact form:", error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return NextResponse.json(
          { error: "This email has already been used" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: "Something went wrong! Please try again later." },
      { status: 500 }
    );
  }
}
