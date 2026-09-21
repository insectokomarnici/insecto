"use client";

import { Check } from "@boxicons/react";
import { ContactForm } from "@/components/contact-form";
import { Container, Heading } from "@/components/ui/layout";
import type { ContactValues } from "@/lib/contact";

export function ContactSection() {
  async function submitContact(values: ContactValues) {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const payload = await response.json().catch(() => null) as { error?: string } | null;
      throw new Error(payload?.error ?? "Poruka nije poslata.");
    }
  }

  return (
    <section className="section contact-section" id="contact-form" aria-labelledby="contact-form-title">
      <Container>
        <div className="contact-panel">
          <div className="contact-intro">
            <Heading as="h2" size="section" id="contact-form-title">Brzi online upit</Heading>
            <p className="contact-trust"><Check aria-hidden="true" />Jednostavno. Bez obaveza.</p>
          </div>

          <ContactForm
            className="contact-section-form"
            submitContact={submitContact}
            buttonVariant="secondary"
            buttonSize="large"
            submitLabel="Pošalji upit"
            namePlaceholder="Kako se zoveš?"
            phoneLabel="Broj telefona"
            phonePlaceholder="060 1234567"
            messagePlaceholder=""
            footerNote="Tvoje ime, broj i poruku koristimo samo da ti odgovorimo na upit."
          />
        </div>
      </Container>
    </section>
  );
}
