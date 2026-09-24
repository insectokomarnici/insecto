import type { SVGProps } from "react";
import { Phone } from "@boxicons/react";
import { PhoneFilled } from "@carbon/icons-react";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";
import { GoogleRating } from "@/components/google-rating";

function StraightenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 -960 960 960" fill="currentColor" focusable="false" {...props}>
      <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm0-80h640v-320H680v160h-80v-160h-80v160h-80v-160h-80v160h-80v-160H160v320Zm120-160h80-80Zm160 0h80-80Zm160 0h80-80Zm-120 0Z" />
    </svg>
  );
}

function DrillIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 -960 960 960" fill="currentColor" focusable="false" {...props}>
      <path d="M240-200h240v-40H240v40Zm30-360h180q12 0 21-9t9-21q0-12-9-21t-21-9H270q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-100h180q12 0 21-9t9-21q0-12-9-21t-21-9H270q-12 0-21 9t-9 21q0 12 9 21t21 9Zm370 140v-80h80v-80h-80v-80h80q33 0 56.5 23.5T800-680h80q17 0 28.5 11.5T920-640q0 17-11.5 28.5T880-600h-80q0 33-23.5 56.5T720-520h-80ZM480-320h-80v-200h160v-240H240q-33 0-56.5 23.5T160-680v80q0 33 23.5 56.5T240-520h80v200h-80v-120q-66 0-113-47T80-600v-80q0-66 47-113t113-47h320q33 0 56.5 23.5T640-760v240q0 33-23.5 56.5T560-440h-80v120ZM220-120q-25 0-42.5-17.5T160-180v-80q0-25 17.5-42.5T220-320h280q25 0 42.5 17.5T560-260v80q0 25-17.5 42.5T500-120H220Zm140-520Zm120 440H240h240Z" />
    </svg>
  );
}

type ProcessIcon = typeof Phone | typeof StraightenIcon | typeof DrillIcon;

const steps: Array<{ number: string; title: string; body: string; surface: "soft" | "brand-light" | "brand"; Icon: ProcessIcon }> = [
  {
    number: "1",
    title: "Zakaži merenje",
    body: "Za početak nas nazovi da zakažemo tvoj termin za uzimanje mera. Oko vremena dolaska se dogovaramo prema tvom rasporedu.",
    surface: "soft",
    Icon: Phone,
  },
  {
    number: "2",
    title: "Uzimamo mere",
    body: "Na tvoju adresu stižemo u potvrđeno vreme i uzimamo sve neophodne mere. Dobićeš preporuku oko izbora komarnika i tačnu cenu.",
    surface: "brand-light",
    Icon: StraightenIcon,
  },
  {
    number: "3",
    title: "Montiramo komarnike",
    body: "Posle par dana se vraćamo sa tvojim novim komarnicima, montiramo ih gde treba i time završavamo ovaj jednostavan proces.",
    surface: "brand",
    Icon: DrillIcon,
  },
];

export function ProcessSection() {
  return (
    <section className="section process-section" aria-labelledby="process-title">
      <Container>
        <div className="section-inner">
          <div className="section-intro stack">
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
