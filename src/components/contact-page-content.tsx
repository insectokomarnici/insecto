"use client";

import { Clock, Envelope, Phone } from "@boxicons/react";
import { ContactForm } from "@/components/contact-form";
import { Container, Heading } from "@/components/ui/layout";
import type { ContactValues } from "@/lib/contact";

export function ContactPageContent() {
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
    <section className="section contact-page-section" aria-labelledby="contact-page-title">
      <Container>
        <div className="contact-page-header stack">
          <Heading as="h1" size="hero" id="contact-page-title">Kontakt</Heading>
        </div>

        <div className="contact-page-layout">
          <div className="contact-page-intro">
            <div className="contact-page-copy stack text-body">
              <p>Treba ti pomoć? Tražiš savet ili preporuku komarnika za tvoj prostor?</p>
              <p><strong>Hajde da se čujemo!</strong> Možeš nas zvati svakog radnog dana od 08 do 20h, pisati putem mejla ili samo popuniti obrazac, a odgovor ćeš dobiti već istog dana.</p>
            </div>

            <div className="contact-page-details" aria-label="Kontakt informacije">
              <a className="contact-page-detail" href="tel:+381611321324">
                <span className="contact-page-detail-icon"><Phone aria-hidden="true" /></span>
                <span><strong>Telefon</strong><span>061 132 1324</span></span>
              </a>
              <a className="contact-page-detail" href="mailto:kontakt@insecto.rs">
                <span className="contact-page-detail-icon"><Envelope aria-hidden="true" /></span>
                <span><strong>E-mail</strong><span>kontakt@insecto.rs</span></span>
              </a>
              <div className="contact-page-detail">
                <span className="contact-page-detail-icon"><Clock aria-hidden="true" /></span>
                <span><strong>Radno vreme</strong><span>Pon-Pet: 8:00-20:00</span></span>
              </div>
            </div>
          </div>

          <div className="contact-page-form-panel">
            <div className="contact-page-form-heading">
              <Heading as="h2" size="card">Pošalji upit</Heading>
              <p>Popuni formu i odgovorićemo ti u najkraćem roku.</p>
            </div>
            <ContactForm
              className="contact-page-form"
              submitContact={submitContact}
              buttonVariant="secondary"
              buttonSize="medium"
              submitLabel="Pošalji upit"
              includeSurname
              includeEmail
              namePlaceholder="Ime"
              surnamePlaceholder="Prezime"
              emailPlaceholder="tvoj@email.com"
              phoneLabel="Broj telefona"
              phonePlaceholder="060 1234567"
              messagePlaceholder="Npr. potrebni su mi komarnici za 3 prozora i balkonska vrata."
              footerNote="Tvoje podatke koristimo samo kako bismo ti odgovorili na upit."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
