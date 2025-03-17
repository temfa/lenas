import { NextResponse } from "next/server";
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY as string,
});

export async function POST(request: Request) {
  console.log(request);
  try {
    // Parse the request body
    const sentFrom = new Sender("topeakinfe@gmail.com", "Your name");

    const recipients = [new Recipient("akinfetemitope5@gmail.com", "Your Client")];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject("This is a Subject")
      .setHtml("<strong>This is the HTML content</strong>")
      .setText("This is the text content");

    await mailerSend.email.send(emailParams);

    // Return a success response
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);

    // Return an error response
    return NextResponse.json({ message: "Failed to process request" }, { status: 500 });
  }
}
