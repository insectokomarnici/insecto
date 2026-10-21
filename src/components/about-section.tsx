import Image from "next/image";
import { Container, Heading } from "@/components/ui/layout";

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
          </div>
          <div className="about-copy stack">
            <Heading as="h2" size="section" id="about-title">Insecto Komarnici</Heading>
            <div className="about-text stack text-body">
              <p>Zdravo 👋! Mi smo Insecto i bavimo se isključivo jednim proizvodom: komarnicima. Ne radimo PVC stolariju, tende, niti roletne. Samo komarnike, svaki dan. I to je ono u čemu smo najbolji.</p>
              <p>Naš tim za sada broji petoro ljudi. Sastoji se od mlađih i starijih – tehničara, kreativaca i administracije. Iako imamo različite uloge, delimo jedan zajednički cilj: da ti pružimo najbolju moguću uslugu, od prvog poziva do poslednjeg šrafa.</p>
            </div>
            <dl className="about-stats">
              <div className="about-stat">
                <dt className="about-stat-label">Zadovoljnih kupaca</dt>
                <dd className="about-stat-value">2.500+</dd>
              </div>
              <div className="about-stat">
                <dt className="about-stat-label">Godina iskustva</dt>
                <dd className="about-stat-value">10+</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
