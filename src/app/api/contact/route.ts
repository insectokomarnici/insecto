import { NextResponse } from "next/server";
import { validateContact, type ContactValues } from "@/lib/contact";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const RESEND_SENDER = "Insecto Komarnici <onboarding@resend.dev>";

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });

  const hasSurname = Object.prototype.hasOwnProperty.call(body, "surname");
  const hasEmail = Object.prototype.hasOwnProperty.call(body, "email");
  const values: ContactValues = {
    name: asString(body.name),
    ...(hasSurname ? { surname: asString(body.surname) } : {}),
    ...(hasEmail ? { email: asString(body.email) } : {}),
    phone: asString(body.phone),
    message: asString(body.message),
  };
  const errors = validateContact(values, { requireSurname: hasSurname, requireEmail: hasEmail });
  if (Object.keys(errors).length > 0) return NextResponse.json({ error: "Proverite podatke u formi." }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !recipient) return NextResponse.json({ error: "Slanje poruka trenutno nije podešeno." }, { status: 503 });

  const emailText = [
    "NOVI UPIT",
    "",
    `Ime: ${values.name.trim() || "Nije uneto"}`,
    ...(hasSurname ? [`Prezime: ${values.surname?.trim() || "Nije uneto"}`] : []),
    ...(hasEmail ? [`E-mail: ${values.email?.trim() || "Nije unet"}`] : []),
    `Telefon: ${values.phone.trim()}`,
    `Poruka: ${values.message.trim() || "Nije uneta"}`,
  ].join("\n");

  const resendResponse = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: RESEND_SENDER,
      to: [recipient],
      subject: "NOVI UPIT",
      text: emailText,
    }),
  });

  if (!resendResponse.ok) {
    console.error("Resend contact form error", await resendResponse.text());
    return NextResponse.json({ error: "Poruka nije poslata. Pokušajte ponovo." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
