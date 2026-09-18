import { Phone, PhoneFilled, Ruler, Tools } from "@carbon/icons-react";
import type { ComponentType, SVGProps } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";

type ProcessIcon = ComponentType<SVGProps<SVGSVGElement>>;

const steps: Array<{ number: string; title: string; body: string; Icon: ProcessIcon }> = [
  {
    number: "1",
    title: "Pozovi nas",
    body: "Za početak nas nazovi da zakažemo tvoj termin za uzimanje mera. Oko vremena dolaska se dogovaramo prema tvom rasporedu.",
    Icon: Phone,
  },
  {
    number: "2",
    title: "Uzimamo mere",
    body: "Na tvoju adresu stižemo u potvrđeno vreme i uzimamo sve neophodne mere. Dobićeš preporuku oko izbora komarnika i tačnu cenu.",
    Icon: Ruler,
  },
  {
    number: "3",
    title: "Montiramo komarnike",
    body: "Posle par dana se vraćamo sa tvojim novim komarnicima, montiramo ih gde treba i time završavamo ovaj jednostavan proces.",
    Icon: Tools,
  },
];

export function ProcessSection() {
  return (
    <section className="section process-section" aria-labelledby="process-title">
      <Container>
        <div className="section-inner">
          <div className="section-intro stack">
            <Heading as="h2" size="section" id="process-title">Kako do komarnika u 3 koraka</Heading>
          </div>
          <div className="process-steps">
            {steps.map(({ number, title, body, Icon }) => (
              <article className="process-step" key={number}>
                <div className="process-step-icon" aria-hidden="true"><Icon /></div>
                <p className="process-step-number">{number}</p>
                <Heading as="h3" size="card">{title}</Heading>
                <p className="process-step-body">{body}</p>
              </article>
            ))}
          </div>
          <div className="process-actions">
            <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />Zakaži merenje</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
