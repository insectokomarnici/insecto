"use client";

import { Check } from "@boxicons/react";
import { ContactForm } from "@/components/contact-form";
import { Container, Heading } from "@/components/ui/layout";
import type { ContactSubmissionValues } from "@/lib/contact";

export function ContactSection() {
  async function submitContact(values: ContactSubmissionValues) {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("message", values.message);
    if (values.surname !== undefined) formData.append("surname", values.surname);
    if (values.email !== undefined) formData.append("email", values.email);
    values.attachments?.forEach((file) => formData.append("photos", file, file.name));
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => null) as { error?: string } | null;
      throw new Error(payload?.error ?? "Poruka nije poslata.");
    }
  }

  return (
    <section className="section contact-section" aria-labelledby="contact-form-title">
      <Container>
        <div className="contact-panel">
          <div className="contact-intro">
            <Heading as="h2" size="section" id="contact-form-title">Brzi online upit</Heading>
            <p className="contact-trust"><Check aria-hidden="true" />Lako i jednostavno. Bez obaveza.</p>
          </div>

          <ContactForm
            className="contact-section-form"
            submitContact={submitContact}
            buttonVariant="secondary"
            buttonSize="medium"
            submitLabel="Pošalji upit"
            namePlaceholder="Kako se zoveš?"
            phoneLabel="Broj telefona"
            phonePlaceholder="060 1234567"
            messagePlaceholder="Npr. potrebni su mi komarnici za 3 prozora i balkonska vrata."
            footerNote="Tvoje podatke koristimo samo kako bismo ti odgovorili na upit."
            includeAttachments
          />
        </div>
      </Container>
    </section>
  );
}
