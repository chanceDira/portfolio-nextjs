import nodemailer from "nodemailer"
import type { NextApiRequest, NextApiResponse } from "next"

interface ContactRequestBody {
  email: string
  subject: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { email, subject, message }: ContactRequestBody = req.body

    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required" })
    }

    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const emailTo = process.env.EMAIL_TO

    if (!emailUser || !emailPass || !emailTo) {
      console.error("Missing email configuration")
      return res.status(500).json({ error: "Email configuration error" })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })

    const emailOptions = {
      from: emailUser,
      to: emailTo,
      subject: subject || "Contact from Portfolio",
      text: `From: ${email}\nSubject: ${subject || "No subject"}\n\nMessage: ${message}`,
      replyTo: email,
    }


    
    await transporter.sendMail(emailOptions)
    console.log("Email sent successfully")
    res.status(200).json({ result: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    res.status(500).json({ error: "Something went wrong" })
  }
}