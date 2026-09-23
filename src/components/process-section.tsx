import { CompassTool, Phone, Ruler } from "@boxicons/react";
import { PhoneFilled } from "@carbon/icons-react";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";
import { GoogleRating } from "@/components/google-rating";

type ProcessIcon = typeof Phone | typeof Ruler | typeof CompassTool;

const steps: Array<{ number: string; title: string; body: string; surface: "soft" | "brand-light" | "brand"; Icon: ProcessIcon }> = [
  {
    number: "01",
    title: "Zakaži merenje",
    body: "Za početak nas nazovi da zakažemo tvoj termin za uzimanje mera. Oko vremena dolaska se dogovaramo prema tvom rasporedu.",
    surface: "soft",
    Icon: Phone,
  },
  {
    number: "02",
    title: "Uzimamo mere",
    body: "Na tvoju adresu stižemo u potvrđeno vreme i uzimamo sve neophodne mere. Dobićeš preporuku oko izbora komarnika i tačnu cenu.",
    surface: "brand-light",
    Icon: Ruler,
  },
  {
    number: "03",
    title: "Montiramo komarnike",
    body: "Posle par dana se vraćamo sa tvojim novim komarnicima, montiramo ih gde treba i time završavamo ovaj jednostavan proces.",
    surface: "brand",
    Icon: CompassTool,
  },
];

export function ProcessSection() {
  return (
    <section className="section process-section" aria-labelledby="process-title">
      <Container>
        <div className="section-inner">
          <div className="section-intro stack">
            <span className="section-eyebrow">3 koraka</span>
            <Heading as="h2" size="section" id="process-title">Kako do komarnika?</Heading>
          </div>
          <ol className="process-steps">
            {steps.map(({ number, title, body, surface, Icon }) => (
              <li className={`process-step process-step-${surface}`} key={title}>
                <Heading as="h3" size="card">
                  <span className="process-step-heading">
                    <span className="process-step-kicker"><Icon aria-hidden="true" /><span className="process-step-number" aria-hidden="true">{number}</span></span>
                    <span>{title}</span>
                  </span>
                </Heading>
                <p className="process-step-body">{body}</p>
              </li>
            ))}
          </ol>
          <div className="process-actions">
            <div className="process-cta-group">
              <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />Zakaži merenje</ButtonLink>
              <GoogleRating />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
