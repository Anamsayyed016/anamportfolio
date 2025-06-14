import { type NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/db"
import { sendEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Save message to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      }
    })

    // Prepare email content
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `

    // Send notification email
    if (process.env.NOTIFICATION_EMAIL) {
      await sendEmail(
        process.env.NOTIFICATION_EMAIL,
        "New Contact Form Submission",
        emailHtml
      )
    }

    return NextResponse.json(
      { 
        message: "Message sent successfully! We'll get back to you soon.",
        id: contact.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("Error in contact form:", error)
    
    // Database error
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: "A message with this email already exists." },
        { status: 400 }
      )
    }

    // Email sending error
    if (error.message.includes('email')) {
      return NextResponse.json(
        { error: "Message saved but notification email failed. We'll still process your request." },
        { status: 207 }
      )
    }

    // Generic error
    return NextResponse.json(
      { error: "Something went wrong! Please try again later." },
      { status: 500 }
    )
  }
}
