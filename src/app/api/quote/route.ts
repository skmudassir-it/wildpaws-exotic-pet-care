import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().min(7, "A valid phone number is required").optional().or(z.literal("")),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Please fix the highlighted fields and try again.",
        issues: parsed.error.issues.map((i) => ({ path: i.path.join("."), message: i.message })),
      },
      { status: 400 }
    );
  }

  const { name, email, phone, service, message } = parsed.data;
  console.log(
    `[quote] ${service} | ${name} <${email}> | ${phone || "no phone"} | ${message.slice(0, 80)}`
  );

  return NextResponse.json({
    success: true,
    received: {
      name,
      email,
      service,
      messageLength: message.length,
    },
    message: "Quote request received. We will get back to you within one business day.",
  });
}
