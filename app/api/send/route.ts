import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email template as HTML
const getEmailTemplate = (
  fullName: string,
  userEmail: string,
  organization: string,
  joinType: string,
  message: string
) => `
  <div style="font-family: Arial, sans-serif; padding: 20px;">
    <h2>New Join Request</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${userEmail}</p>
    <p><strong>Organization:</strong> ${organization || "N/A"}</p>
    <p><strong>Join Type:</strong> ${joinType}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-line;">${message}</p>
  </div>
`;

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, organization, joinType, message } =
      await req.json();

    if (!fullName || !email || !joinType || !message) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // App password (not your Gmail password!)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send emails to yourself
      replyTo: email, // When you hit "Reply", it replies to the sender
      subject: `New Join Request from ${fullName}`,
      html: getEmailTemplate(fullName, email, organization, joinType, message),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
