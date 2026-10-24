import Image from "next/image";
import { AboutTeamNote } from "@/components/about-team-note";
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
          <div className="about-copy content-flow">
            <Heading as="h2" size="section" id="about-title">Insecto Komarnici</Heading>
            <div className="about-text stack text-body">
              <p>Zdravo 👋! Mi smo Insecto i bavimo se isključivo jednim proizvodom: komarnicima. Ne radimo PVC stolariju, tende, niti roletne. Samo komarnike, svaki dan. I to je ono u čemu smo najbolji.</p>
              <p>Naš tim za sada broji petoro ljudi. Sastoji se od mlađih i starijih – tehničara, kreativaca i administracije. Iako imamo različite uloge, delimo jedan zajednički cilj: da ti pružimo najbolju moguću uslugu, od prvog poziva do poslednjeg šrafa.</p>
            </div>
            <AboutTeamNote />
          </div>
        </div>
      </Container>
    </section>
  );
}
