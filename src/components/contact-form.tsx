"use client";
import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { TextArea, TextField } from "@/components/ui/fields";
import { Notice } from "@/components/ui/notice";
import { cn } from "@/lib/cn";
import { validateContact, type ContactErrors, type ContactValues } from "@/lib/contact";

type Props = {
  submitContact: (values: ContactValues) => Promise<void>;
  successMessage?: string;
  failureMessage?: string;
  className?: string;
  buttonVariant?: "primary" | "secondary";
  buttonSize?: "small" | "medium" | "large";
  submitLabel?: string;
  nameLabel?: string;
  phoneLabel?: string;
  namePlaceholder?: string;
  phonePlaceholder?: string;
  messagePlaceholder?: string;
  footerNote?: string;
};

export function ContactForm({ submitContact, successMessage = "Poruka je uspešno poslata.", failureMessage = "Poruka nije poslata. Pokušajte ponovo. Uneti podaci su sačuvani u formi.", className, buttonVariant = "primary", buttonSize = "medium", submitLabel = "Pošaljite poruku", nameLabel = "Ime", phoneLabel = "Telefon", namePlaceholder = "Vaše ime", phonePlaceholder = "Broj telefona", messagePlaceholder = "Šta vam je potrebno?", footerNote }: Props) {
  const [values, setValues] = useState<ContactValues>({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [feedback, setFeedback] = useState<"idle" | "invalid" | "sending" | "success" | "error">("idle");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const sending = useRef(false);
  const busy = feedback === "sending";

  function update(field: keyof ContactValues, value: string) {
    if (sending.current) return;
    const next = { ...values, [field]: value };
    setValues(next);
    setFeedback("idle");
    setErrors((current) => ({ ...current, [field]: field === "phone" && phoneTouched ? validateContact(next).phone : undefined }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    setPhoneTouched(true);
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setFeedback("invalid");
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }
    sending.current = true;
    setFeedback("sending");
    try {
      await submitContact({ name: values.name.trim(), phone: values.phone.trim(), message: values.message.trim() });
      setFeedback("success");
    } catch {
      setFeedback("error");
    } finally { sending.current = false; }
  }

  return <form ref={formRef} className={cn("contact-form", className)} noValidate aria-label="Kontakt forma" aria-busy={busy} onSubmit={submit}>
    <div className="field-grid">
      <TextField name="name" label={nameLabel} optional autoComplete="name" maxLength={80} placeholder={namePlaceholder} value={values.name} readOnly={busy} error={errors.name} onChange={(e) => update("name", e.target.value)} />
      <TextField name="phone" label={phoneLabel} type="tel" inputMode="tel" autoComplete="tel" required maxLength={40} placeholder={phonePlaceholder} hint="Dozvoljeni su razmaci, zagrade i početni +." value={values.phone} readOnly={busy} error={errors.phone} onChange={(e) => update("phone", e.target.value)} onBlur={() => {
        if (!busy && (phoneTouched || values.phone.trim())) { setPhoneTouched(true); setErrors((current) => ({ ...current, phone: validateContact(values).phone })); }
      }} />
    </div>
    <TextArea name="message" label="Poruka" optional rows={4} maxLength={1000} placeholder={messagePlaceholder} hint="Možete navesti broj prozora i vrata. Do 1000 znakova." value={values.message} readOnly={busy} error={errors.message} onChange={(e) => update("message", e.target.value)} />
    <div role="alert" aria-atomic="true" className="feedback">{feedback === "invalid" ? <Notice tone="error">Upit nije poslat. Proverite označeno polje.</Notice> : feedback === "error" ? <Notice tone="error">{failureMessage}</Notice> : null}</div>
    <div role="status" aria-live="polite" aria-atomic="true" className="feedback">{feedback === "sending" ? <Notice>Slanje je u toku…</Notice> : feedback === "success" ? <Notice tone="success">{successMessage}</Notice> : null}</div>
    <div className="contact-form-footer">{footerNote && <p className="contact-form-note">{footerNote}</p>}<Button type="submit" loading={busy} variant={buttonVariant} size={buttonSize}>{submitLabel}</Button></div>
  </form>;
}
