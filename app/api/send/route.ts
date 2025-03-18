// import { NextApiResponse } from "next";
// import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();
  const { NEXT_PUBLIC_SMTP_EMAIL, NEXT_PUBLIC_SMTP_PASSWORD } = process.env;

  //   console.log(to, name, subject);

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: NEXT_PUBLIC_SMTP_EMAIL,
      pass: NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
    // return NextResponse.json(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: data?.from,
      to: "lenasorganicskincare@gmail.com",
      subject: data?.subject,
      html: data?.body,
      sender: data?.from,
      replyTo: data?.from,
    });
    console.log(sendResult);
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials": "false",
    };

    return new Response("Email Sent", {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.log(error);
  }
  //   return new Response("Testing");
}
// type ResponseData = {
//   message: string;
// };

// export async function Get() {
//   return NextResponse.json({ hello: "World" });
// }

export async function OPTIONS() {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    "Access-Control-Allow-Credentials": "false",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization ,Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Access-Control-Allow-Origin",
  };
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  });
}
