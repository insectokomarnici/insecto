"use client";
import { useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Upload } from "@carbon/icons-react";
import { Button } from "@/components/ui/button";
import { TextArea, TextField } from "@/components/ui/fields";
import { Notice } from "@/components/ui/notice";
import { cn } from "@/lib/cn";
import { validateContact, type ContactErrors, type ContactSubmissionValues, type ContactValues } from "@/lib/contact";

const MAX_ATTACHMENTS = 5;
const MAX_ATTACHMENT_SIZE = 5 * 1024 * 1024;
const MAX_ATTACHMENTS_TOTAL_SIZE = 10 * 1024 * 1024;
const ACCEPTED_ATTACHMENT_TYPES = "image/jpeg,image/png,image/webp,image/heic,image/heif";
const ACCEPTED_ATTACHMENT_EXTENSIONS = /\.(jpe?g|png|webp|heic|heif)$/i;

type Props = {
  submitContact: (values: ContactSubmissionValues) => Promise<void>;
  successMessage?: string;
  failureMessage?: string;
  className?: string;
  buttonVariant?: "primary" | "secondary";
  buttonSize?: "small" | "medium" | "large";
  submitLabel?: string;
  nameLabel?: string;
  surnameLabel?: string;
  emailLabel?: string;
  phoneLabel?: string;
  namePlaceholder?: string;
  surnamePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  messagePlaceholder?: string;
  footerNote?: string;
  includeSurname?: boolean;
  includeEmail?: boolean;
  requireEmail?: boolean;
  includeAttachments?: boolean;
};

export function ContactForm({ submitContact, successMessage = "Poruka je uspešno poslata.", failureMessage = "Poruka nije poslata. Pokušajte ponovo. Uneti podaci su sačuvani u formi.", className, buttonVariant = "primary", buttonSize = "medium", submitLabel = "Pošaljite poruku", nameLabel = "Ime", surnameLabel = "Prezime", emailLabel = "E-mail", phoneLabel = "Telefon", namePlaceholder = "Vaše ime", surnamePlaceholder = "Vaše prezime", emailPlaceholder = "vas@email.com", phonePlaceholder = "Broj telefona", messagePlaceholder = "Šta vam je potrebno?", footerNote, includeSurname = false, includeEmail = false, requireEmail = true, includeAttachments = false }: Props) {
  const emailRequired = includeEmail && requireEmail;
  const attachmentInputId = useId();
  const [values, setValues] = useState<ContactValues>({ name: "", ...(includeSurname ? { surname: "" } : {}), ...(includeEmail ? { email: "" } : {}), phone: "", message: "" });
  const [attachments, setAttachments] = useState<File[]>([]);
  const [attachmentError, setAttachmentError] = useState<string>();
  const [errors, setErrors] = useState<ContactErrors>({});
  const [feedback, setFeedback] = useState<"idle" | "invalid" | "sending" | "success" | "error">("idle");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const attachmentInputRef = useRef<HTMLInputElement>(null);
  const sending = useRef(false);
  const busy = feedback === "sending";

  function update(field: keyof ContactValues, value: string) {
    if (sending.current) return;
    const next = { ...values, [field]: value };
    setValues(next);
    setFeedback("idle");
    setErrors((current) => ({ ...current, [field]: field === "phone" && phoneTouched ? validateContact(next, { requireSurname: includeSurname, requireEmail: emailRequired }).phone : undefined }));
  }

  function handleAttachmentsChange(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!selected.length) return;

    const invalidType = selected.find((file) => !file.type.startsWith("image/") || !ACCEPTED_ATTACHMENT_EXTENSIONS.test(file.name));
    if (invalidType) {
      setAttachmentError("Dodajte samo fotografije u JPG, PNG, WebP ili HEIC formatu.");
      return;
    }
    const oversized = selected.find((file) => file.size > MAX_ATTACHMENT_SIZE);
    if (oversized) {
      setAttachmentError("Svaka fotografija može imati najviše 5 MB.");
      return;
    }

    const existing = new Set(attachments.map((file) => `${file.name}-${file.size}-${file.lastModified}`));
    const additions = selected.filter((file) => !existing.has(`${file.name}-${file.size}-${file.lastModified}`));
    const next = [...attachments, ...additions];
    if (next.length > MAX_ATTACHMENTS) {
      setAttachmentError("Možete dodati najviše 5 fotografija.");
      return;
    }
    if (next.reduce((total, file) => total + file.size, 0) > MAX_ATTACHMENTS_TOTAL_SIZE) {
      setAttachmentError("Ukupna veličina fotografija može imati najviše 10 MB.");
      return;
    }

    setAttachments(next);
    setAttachmentError(undefined);
  }

  function removeAttachment(index: number) {
    if (sending.current) return;
    setAttachments((current) => current.filter((_, attachmentIndex) => attachmentIndex !== index));
    setAttachmentError(undefined);
    if (attachmentInputRef.current) attachmentInputRef.current.value = "";
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    setPhoneTouched(true);
    const nextErrors = validateContact(values, { requireSurname: includeSurname, requireEmail: emailRequired });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length || attachmentError) {
      setFeedback("invalid");
      requestAnimationFrame(() => {
        const firstInvalid = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]') ?? (attachmentError ? formRef.current?.querySelector<HTMLElement>(".file-upload-dropzone") : null);
        firstInvalid?.focus();
      });
      return;
    }
    sending.current = true;
    setFeedback("sending");
    try {
      await submitContact({ name: values.name.trim(), surname: values.surname?.trim(), email: values.email?.trim() || undefined, phone: values.phone.trim(), message: values.message.trim(), attachments });
      setFeedback("success");
    } catch {
      setFeedback("error");
    } finally { sending.current = false; }
  }

  return <form ref={formRef} className={cn("contact-form", className)} noValidate aria-label="Kontakt forma" aria-busy={busy} onSubmit={submit}>
    <div className="field-grid">
      <TextField name="name" label={nameLabel} required autoComplete="given-name" maxLength={80} placeholder={namePlaceholder} value={values.name} readOnly={busy} error={errors.name} onChange={(e) => update("name", e.target.value)} />
      {includeSurname && <TextField name="surname" label={surnameLabel} required autoComplete="family-name" maxLength={80} placeholder={surnamePlaceholder} value={values.surname ?? ""} readOnly={busy} error={errors.surname} onChange={(e) => update("surname", e.target.value)} />}
      {includeEmail && <TextField name="email" label={emailLabel} type="email" inputMode="email" autoComplete="email" required={emailRequired} maxLength={254} placeholder={emailPlaceholder} value={values.email ?? ""} readOnly={busy} error={errors.email} onChange={(e) => update("email", e.target.value)} />}
      <TextField name="phone" label={phoneLabel} type="tel" inputMode="tel" autoComplete="tel" required maxLength={40} placeholder={phonePlaceholder} value={values.phone} readOnly={busy} error={errors.phone} onChange={(e) => update("phone", e.target.value)} onBlur={() => {
        if (!busy && (phoneTouched || values.phone.trim())) { setPhoneTouched(true); setErrors((current) => ({ ...current, phone: validateContact(values).phone })); }
      }} />
    </div>
    <TextArea name="message" label="Poruka" required rows={2} className="contact-message" maxLength={1000} placeholder={messagePlaceholder} value={values.message} readOnly={busy} error={errors.message} onChange={(e) => update("message", e.target.value)} />
    {includeAttachments && <div className="field file-upload">
      <label className="field-label" htmlFor={attachmentInputId}>Fotografije <span className="field-note">(opciono)</span></label>
      <button className={cn("file-upload-dropzone", attachmentError && "is-invalid")} type="button" disabled={busy} aria-controls={attachmentInputId} aria-describedby={`${attachmentInputId}-hint${attachmentError ? ` ${attachmentInputId}-error` : ""}`} onClick={() => attachmentInputRef.current?.click()}>
        <Upload aria-hidden="true" />
        <span className="file-upload-dropzone-copy">Dodaj fotografije <span>(najviše 5)</span></span>
      </button>
      <input ref={attachmentInputRef} className="file-upload-native" id={attachmentInputId} name="photos" type="file" accept={ACCEPTED_ATTACHMENT_TYPES} multiple disabled={busy} tabIndex={-1} aria-hidden="true" onChange={handleAttachmentsChange} />
      <p className="field-hint" id={`${attachmentInputId}-hint`}>Dodaj do 5 fotografija, do 5 MB po fotografiji (JPG, PNG, WebP ili HEIC).</p>
      {attachmentError && <p className="field-error" id={`${attachmentInputId}-error`}>{attachmentError}</p>}
      {attachments.length > 0 && <ul className="file-upload-list" aria-label="Dodate fotografije">
        {attachments.map((file, index) => <li className="file-upload-item" key={`${file.name}-${file.size}-${file.lastModified}`}>
          <span className="file-upload-name">{file.name} <span>({formatFileSize(file.size)})</span></span>
          <button className="file-upload-remove" type="button" disabled={busy} onClick={() => removeAttachment(index)}>Ukloni</button>
        </li>)}
      </ul>}
    </div>}
    <div role="alert" aria-atomic="true" className="feedback">{feedback === "invalid" ? <Notice tone="error">Upit nije poslat. Proverite označeno polje.</Notice> : feedback === "error" ? <Notice tone="error">{failureMessage}</Notice> : null}</div>
    <div role="status" aria-live="polite" aria-atomic="true" className="feedback">{feedback === "sending" ? <Notice>Slanje je u toku…</Notice> : feedback === "success" ? <Notice tone="success">{successMessage}</Notice> : null}</div>
    <div className="contact-form-footer">{footerNote && <p className="contact-form-note">{footerNote}</p>}<Button type="submit" loading={busy} variant={buttonVariant} size={buttonSize}>{submitLabel}</Button></div>
  </form>;
}

function formatFileSize(size: number) {
  return size < 1024 * 1024 ? `${Math.max(1, Math.round(size / 1024))} KB` : `${(size / (1024 * 1024)).toFixed(1)} MB`;
}
