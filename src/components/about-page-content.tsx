import Image from "next/image";
import { Container, Heading } from "@/components/ui/layout";

const aboutImage = "/images/insecto-team.avif";

export function AboutPageContent() {
  return <section className="section about-page-story-section" aria-labelledby="about-story-title">
    <Container narrow>
      <div className="about-page-story">
        <div className="about-page-story-heading stack">
          <Heading as="h1" size="hero" id="about-story-title">O nama</Heading>
          <p className="about-page-story-lead text-body">Zdravo 👋, mi smo Insecto Komarnici</p>
        </div>

        <div className="about-page-story-text stack text-body">
          <p>Naša misija je da svojim sugrađanima što više olakšamo svakodnevnicu sa nečim tako jednostavnim, a neophodnim za svaki dom. Pogotovo u Novom Sadu, gde insekti nemaju milosti.</p>
          <p>Tim za sada broji 5 ljudi – tu su mlađi i stariji – tehničari, kreativci, i administrativci. Imamo različite uloge, ali jedan zajednički cilj: da vidimo svoje kupce (tebe) 100% zadovoljne.</p>
        </div>

        <figure className="about-media about-page-story-media">
          <div className="about-image">
            <Image
              src={aboutImage}
              alt="Tim Insecto Komarnici"
              fill
              sizes="(min-width: 64rem) 45rem, 100vw"
            />
          </div>
          <figcaption>Insecto Komarnici</figcaption>
        </figure>

        <div className="about-page-story-text stack text-body">
          <p>Koristimo profesionalne alate, a dok radimo – brinemo i o najmanjem detalju. Tvoj stan će posle nas ostati uredan i čist, kao da nikada nismo bili tu. Što znači da ako majstor mora uzeti metlu u ruke posle završenog posla, to će i uraditi!</p>
          <p>Tu smo da te posavetujemo i da ti olakšamo izbor, pa tako odgovaramo na sva pitanja koja možeš imati. Uvek ćemo ti predložiti vrstu komarnika koja se najbolje uklapa uz tvoj prostor i način života.</p>
          <p>To je ono po čemu se ističemo – iskreno želimo da ti pomognemo. Nije nam u cilju da ugradimo komarnik i nestanemo, već smo tu ukoliko ti treba dodatna podrška ili ako se nešto neplanirano desi. Upravo zato ti dajemo 2 godine garancije na sve proizvode.</p>
          <p>Nebitno da li tražiš rešenje za prozore i vrata ili želiš da zatvoriš celu terasu, Insecto Komarnici imaju tačno ono što ti treba.</p>
        </div>

      </div>
    </Container>
  </section>;
}
