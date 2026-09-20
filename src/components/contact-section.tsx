"use client";

import type { FormEvent } from "react";
import { CheckmarkOutline } from "@carbon/icons-react";
import { Button } from "@/components/ui/button";
import { TextArea, TextField } from "@/components/ui/fields";
import { Container, Heading } from "@/components/ui/layout";

export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section className="section contact-section" id="contact-form" aria-labelledby="contact-form-title">
      <Container>
        <div className="contact-panel">
          <div className="contact-intro">
            <Heading as="h2" size="section" id="contact-form-title">
              Tvoj prostor.<br />
              <span className="contact-heading-accent">Naš sledeći posao.</span>
            </Heading>
            <p>Reci nam šta treba da se uradi. Ostavi broj i javićemo ti se da dogovorimo detalje.</p>
            <p className="contact-trust"><CheckmarkOutline aria-hidden="true" />Bez obaveze. Bez komplikovanja.</p>
          </div>

          <form className="contact-form contact-section-form" aria-label="Kontakt forma" onSubmit={handleSubmit}>
            <div className="field-grid">
              <TextField name="name" label="Ime" autoComplete="name" placeholder="Kako se zoveš?" />
              <TextField name="phone" label="Broj telefona" type="tel" inputMode="tel" autoComplete="tel" placeholder="06x xxx xxxx" />
            </div>
            <TextArea name="message" label="Poruka" rows={5} placeholder="Gde se nalazi prostor, približna kvadratura i šta treba da se uradi..." />
            <div className="contact-form-footer">
              <p className="contact-form-note">Tvoje ime, broj i poruku koristimo samo da ti odgovorimo na upit.</p>
              <Button type="submit" variant="secondary" size="large">Pošalji upit</Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
