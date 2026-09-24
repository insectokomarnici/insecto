import { NextResponse } from "next/server";
import { validateContact, type ContactValues } from "@/lib/contact";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const RESEND_SENDER = "Insecto Komarnici <onboarding@resend.dev>";
const MAX_ATTACHMENTS = 5;
const MAX_ATTACHMENT_SIZE = 5 * 1024 * 1024;
const MAX_ATTACHMENTS_TOTAL_SIZE = 10 * 1024 * 1024;
const ACCEPTED_ATTACHMENT_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"]);
const ACCEPTED_ATTACHMENT_EXTENSIONS = /\.(jpe?g|png|webp|heic|heif)$/i;

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let formData: FormData;
  if (contentType.includes("multipart/form-data")) {
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
    }
  } else {
    const body = await request.json().catch(() => null) as Record<string, unknown> | null;
    if (!body) return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
    formData = new FormData();
    Object.entries(body).forEach(([key, value]) => {
      if (typeof value === "string") formData.append(key, value);
    });
  }

  const hasSurname = formData.has("surname");
  const hasEmail = formData.has("email");
  const values: ContactValues = {
    name: asString(formData.get("name")),
    ...(hasSurname ? { surname: asString(formData.get("surname")) } : {}),
    ...(hasEmail ? { email: asString(formData.get("email")) } : {}),
    phone: asString(formData.get("phone")),
    message: asString(formData.get("message")),
  };
  const errors = validateContact(values, { requireSurname: hasSurname, requireEmail: hasEmail });
  if (Object.keys(errors).length > 0) return NextResponse.json({ error: "Proverite podatke u formi." }, { status: 400 });

  const photoEntries = formData.getAll("photos");
  const photos = photoEntries.filter((entry): entry is File => entry instanceof File && entry.size > 0);
  if (photoEntries.some((entry) => !(entry instanceof File)) || photos.length > MAX_ATTACHMENTS) {
    return NextResponse.json({ error: "Možete dodati najviše 5 fotografija." }, { status: 400 });
  }
  if (photos.some((file) => !ACCEPTED_ATTACHMENT_TYPES.has(file.type) || !ACCEPTED_ATTACHMENT_EXTENSIONS.test(file.name))) {
    return NextResponse.json({ error: "Dodajte samo fotografije u JPG, PNG, WebP ili HEIC formatu." }, { status: 400 });
  }
  if (photos.some((file) => file.size > MAX_ATTACHMENT_SIZE)) {
    return NextResponse.json({ error: "Svaka fotografija može imati najviše 5 MB." }, { status: 400 });
  }
  if (photos.reduce((total, file) => total + file.size, 0) > MAX_ATTACHMENTS_TOTAL_SIZE) {
    return NextResponse.json({ error: "Ukupna veličina fotografija može imati najviše 10 MB." }, { status: 400 });
  }

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
    ...(photos.length ? [`Fotografije: ${photos.length} priloženo uz ovaj upit.`] : []),
  ].join("\n");

  const attachments = await Promise.all(photos.map(async (photo) => ({
    filename: photo.name,
    content: Buffer.from(await photo.arrayBuffer()).toString("base64"),
  })));

  const resendResponse = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: RESEND_SENDER,
      to: [recipient],
      subject: "NOVI UPIT",
      text: emailText,
      ...(attachments.length ? { attachments } : {}),
    }),
  });

  if (!resendResponse.ok) {
    console.error("Resend contact form error", await resendResponse.text());
    return NextResponse.json({ error: "Poruka nije poslata. Pokušajte ponovo." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
