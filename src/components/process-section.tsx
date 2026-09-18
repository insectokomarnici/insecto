import { Phone, PhoneFilled, Ruler, Tools } from "@carbon/icons-react";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";

type ProcessIcon = typeof Phone | typeof Ruler | typeof Tools;

const steps: Array<{ title: string; body: string; surface: "soft" | "brand-light" | "brand"; Icon: ProcessIcon }> = [
  {
    title: "Zakaži merenje",
    body: "Za početak nas nazovi da zakažemo tvoj termin za uzimanje mera. Oko vremena dolaska se dogovaramo prema tvom rasporedu.",
    surface: "soft",
    Icon: Phone,
  },
  {
    title: "Uzimamo mere",
    body: "Na tvoju adresu stižemo u potvrđeno vreme i uzimamo sve neophodne mere. Dobićeš preporuku oko izbora komarnika i tačnu cenu.",
    surface: "brand-light",
    Icon: Ruler,
  },
  {
    title: "Montiramo komarnike",
    body: "Posle par dana se vraćamo sa tvojim novim komarnicima, montiramo ih gde treba i time završavamo ovaj jednostavan proces.",
    surface: "brand",
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
            {steps.map(({ title, body, surface, Icon }) => (
              <article className={`process-step process-step-${surface}`} key={title}>
                <Heading as="h3" size="card"><span className="process-step-heading"><Icon aria-hidden="true" /><span>{title}</span></span></Heading>
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
