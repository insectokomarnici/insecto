import Image from "next/image";
import { Group } from "@boxicons/react";
import { PhoneFilled } from "@carbon/icons-react";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";
import { GoogleRating } from "@/components/google-rating";
import { AwardIcon } from "@/components/ui/award-icon";

const aboutImage = "/images/insecto-team.avif";

export function AboutSection() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <Container>
        <div className="about-layout">
          <div className="about-media">
            <div className="about-image">
              <Image
                src={aboutImage}
                alt="Tim Insecto Komarnici"
                fill
                sizes="(min-width: 64rem) 50vw, 100vw"
              />
            </div>
            <div className="about-stats" aria-label="Iskustvo i zadovoljstvo klijenata">
              <div className="about-stat">
                <span className="about-stat-icon"><Group aria-hidden="true" /></span>
                <span className="about-stat-copy"><strong>1.500+</strong><span>Zadovoljnih kupaca</span></span>
              </div>
              <div className="about-stat">
                <span className="about-stat-icon"><AwardIcon aria-hidden="true" /></span>
                <span className="about-stat-copy"><strong>6+</strong><span>Godina iskustva</span></span>
              </div>
            </div>
          </div>
          <div className="about-copy stack">
            <Heading as="h2" size="section" id="about-title">Insecto Komarnici</Heading>
            <div className="about-text stack text-body">
              <p>Zdravo 👋! Mi smo Insecto Komarnici, i bavimo se samo jednom stvari: komarnicima. Ne radimo pvc stolariju, tende, ni roletne. Samo komarnike, svaki dan. I to je ono u čemu smo najbolji.</p>
              <p>Naš tim za sada broji petoro ljudi. Sastoji se od mlađih i starijih – tehničara, kreativaca, i administrativaca. Iako imamo različite uloge, delimo jedan zajednički cilj: Da ti pružimo najbolju moguću uslugu, od prvog poziva do poslednjeg šrafa.</p>
            </div>
            <div className="about-cta-group">
              <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />Zakaži merenje</ButtonLink>
              <GoogleRating />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
