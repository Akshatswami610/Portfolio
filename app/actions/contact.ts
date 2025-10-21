"use server"

import { Resend } from "resend"

// Use the provided API key
const RESEND_KEY = "re_KMDwDrDq_Gh3WvTwAYMmEQCjJj1woYuBK"
const resend = new Resend(RESEND_KEY)

export async function sendContactMessage(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "All fields are required.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    console.log("Attempting to send email with Resend...")

    const result = await resend.emails.send({
      from: "Akshat Portfolio <onboarding@resend.dev>",
      to: ["akshatswami0610@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #0891b2, #3b82f6, #8b5cf6); padding: 30px; border-radius: 12px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">New Portfolio Contact</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Someone reached out through your portfolio!</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Contact Information</h2>
            <div style="margin: 20px 0;">
              <p style="margin: 8px 0;"><strong style="color: #0891b2;">Name:</strong> <span style="color: #475569;">${name}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #0891b2;">Email:</strong> <span style="color: #475569;">${email}</span></p>
              <p style="margin: 8px 0;"><strong style="color: #0891b2;">Subject:</strong> <span style="color: #475569;">${subject}</span></p>
            </div>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h3 style="color: #1e293b; margin-top: 0; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Message:</h3>
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #0891b2; margin-top: 15px;">
              <p style="line-height: 1.6; color: #334155; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              📧 This message was sent from your portfolio contact form<br>
              🕒 Received on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    })

    console.log("Email sent successfully:", result)

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Detailed error sending email:", error)

    // More specific error handling
    if (error instanceof Error) {
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)

      // Check for specific Resend errors
      if (error.message.includes("API key")) {
        return {
          success: false,
          message: "Email service configuration error. Please try again later.",
        }
      }

      if (error.message.includes("domain")) {
        return {
          success: false,
          message: "Email domain verification issue. Please try again later.",
        }
      }
    }

    return {
      success: false,
      message: "Failed to send message. Please try again later or contact me directly at akshatswami0610@gmail.com",
    }
  }
}
