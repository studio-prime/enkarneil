import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 },
      );
    }

    // Send notification email to Énkar
    await resend.emails.send({
      from: "Énkar Neil <noreply@studioprime.co>",
      to: "enkarneil@gmail.com",
      replyTo: email,
      subject: `[Contact] ${subject || "New message"} — ${name}`,
      html: `
        <h2>New contact message</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Subject</td><td style="padding:8px;border-bottom:1px solid #eee">${subject || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Message</td><td style="padding:8px;border-bottom:1px solid #eee">${message}</td></tr>
        </table>
      `,
    });

    // Send confirmation email to the sender
    await resend.emails.send({
      from: "Énkar Neil <noreply@studioprime.co>",
      to: email,
      subject: "Message received — Énkar Neil",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="font-weight:300;color:#1a1a1a">Thank you for reaching out, ${name}</h2>
          <p style="color:#3a3a3a;font-weight:300;line-height:1.8">I've received your message and will get back to you as soon as possible.</p>
          <hr style="border:none;border-top:1px solid #eee;margin:24px 0" />
          <p style="color:#999;font-size:14px;font-weight:300">Énkar Neil — Photographer & Visual Artist</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Error sending message. Please try again." },
      { status: 500 },
    );
  }
}
