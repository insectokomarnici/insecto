"use client";

import { Check, Clock, Envelope, Phone } from "@boxicons/react";
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
    <section className="section contact-section" aria-labelledby="contact-section-title">
      <Container>
        <div className="section-inner">
          <div className="section-intro stack">
            <Heading as="h2" size="section" id="contact-section-title">Kontaktiraj nas</Heading>
          </div>

          <div className="contact-section-layout">
            <div className="contact-section-intro">
              <div className="contact-page-copy stack text-body">
                <p><strong>Hajde da se čujemo!</strong> Možeš nas <strong>zvati</strong> svakog radnog dana <strong>od 8h do 20h</strong>, pisati <strong>putem email-a</strong> ili samo <strong>popuniti obrazac</strong>, a odgovor ćeš dobiti već istog dana.</p>
              </div>

              <div className="contact-page-details" aria-label="Kontakt informacije">
                <a className="contact-page-detail" href="tel:+381611321324">
                  <span className="contact-page-detail-icon"><Phone aria-hidden="true" /></span>
                  <span><strong>Telefon</strong><span>061 132 1324</span></span>
                </a>
                <a className="contact-page-detail" href="mailto:kontakt@insecto.rs">
                  <span className="contact-page-detail-icon"><Envelope aria-hidden="true" /></span>
                  <span><strong>Email</strong><span>kontakt@insecto.rs</span></span>
                </a>
                <div className="contact-page-detail">
                  <span className="contact-page-detail-icon"><Clock aria-hidden="true" /></span>
                  <span><strong>Radno vreme</strong><span>Pon-Pet: 8:00-20:00</span></span>
                </div>
              </div>
            </div>

            <div className="contact-page-form-panel contact-section-form-panel">
              <div className="contact-page-form-heading">
                <Heading as="h2" size="card">Brzi online upit</Heading>
                <p className="contact-trust"><Check aria-hidden="true" />Lako i jednostavno. Bez obaveza.</p>
              </div>
              <ContactForm
                className="contact-section-form"
                submitContact={submitContact}
                buttonVariant="secondary"
                buttonSize="medium"
                submitLabel="Pošalji upit"
                namePlaceholder="Ime"
                phoneLabel="Telefon"
                phonePlaceholder="060 1234567"
                messagePlaceholder="Npr. potrebni su mi komarnici za 3 prozora i balkonska vrata."
                footerNote="Tvoje podatke koristimo samo kako bismo ti odgovorili na upit."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
