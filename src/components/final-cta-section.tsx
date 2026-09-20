import { PhoneFilled } from "@carbon/icons-react";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";

export function FinalCtaSection() {
  return (
    <section className="section final-cta-section" aria-labelledby="final-cta-title">
      <Container>
        <div className="final-cta-content">
          <Heading as="h2" size="section" id="final-cta-title">Zakaži merenje na tvojoj adresi</Heading>
          <ButtonLink variant="secondary" size="large" className="button-white" href="tel:+381611321324">
            <PhoneFilled aria-hidden="true" />
            Zakaži merenje
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
