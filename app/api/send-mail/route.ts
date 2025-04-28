import { EmailTemplate } from "@/utils/template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const payload = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Lenas Organic Skincare <onboarding@resend.dev>",
      to: ["lenasorganicskincare@gmail.com"],
      subject: "New Order",
      react: EmailTemplate({
        name: payload?.name,
        pickupMethod: payload?.pickupMethod,
        pickup: payload?.pickup,
        address: payload?.address,
        state: payload?.state,
        phoneNumber: payload?.phoneNumber,
        total: payload?.total,
        cartItems: payload?.cartItems,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
