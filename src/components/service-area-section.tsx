import { Check } from "@boxicons/react";
import { PhoneFilled } from "@carbon/icons-react";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";
import { insectoMapsEmbedUrl } from "@/lib/insecto-location";

export function ServiceAreaSection() {
  return (
    <section className="section service-area-section" aria-labelledby="service-area-title">
      <Container>
        <div className="service-area-layout">
          <div className="service-area-copy">
            <Heading as="h2" size="section" id="service-area-title">Novi Sad i bliža okolina</Heading>
            <p>Izrađujemo i ugrađujemo komarnike u Novom Sadu i bližoj okolini. Ako nisi siguran da li dolazimo na tvoju adresu, javi nam se i proverićemo dostupnost.</p>
            <p>Na mapi je prikazana naša lokacija, a termin za merenje i ugradnju dogovaramo prema tvojoj adresi.</p>
            <ul className="service-area-points">
              <li><Check aria-hidden="true" />Novi Sad</li>
              <li><Check aria-hidden="true" />Bliža okolina</li>
              <li><Check aria-hidden="true" />Merenje i ugradnja po dogovoru</li>
            </ul>
            <div className="service-area-actions">
              <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />Zakaži merenje</ButtonLink>
            </div>
          </div>
          <div className="service-area-map">
            <iframe
              title="Lokacija Insecto Komarnici u Novom Sadu"
              src={insectoMapsEmbedUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
