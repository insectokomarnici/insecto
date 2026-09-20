"use client";

import { ChevronDown, PhoneFilled } from "@carbon/icons-react";
import { cn } from "@/lib/cn";
import { useAnimatedDisclosure } from "@/lib/use-animated-disclosure";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";

const faqItems = [
  {
    question: "Kako mogu da naručim komarnike?",
    answer: "Potrebno je da nam se javiš putem telefona ili e-maila. Naš tim će ti objasniti proceduru i zakazati termin za uzimanje mera na tvojoj adresi.",
  },
  {
    question: "Kako da odaberem pravi komarnik za prozore i vrata?",
    answer: "Naš tim će ti pomoći da se odlučiš za najbolji model komarnika prema dimenzijama, izgledu i funkcionalnosti tvojih prozora i vrata. U ponudi imamo fiksne, rolo i plise komarnike.",
  },
  {
    question: "U kom gradu ugrađujete komarnike?",
    answer: "Ugradnju komarnika vršimo u Novom Sadu i bližoj okolini. Ukoliko ne znaš da li tvoja lokacija odgovara našem krugu poslovanja, slobodno nas kontaktiraj za više informacija.",
  },
  {
    question: "Da li naplaćujete dolazak na adresu za uzimanje mera?",
    answer: "Dolazak na adresu radi uzimanja mera je besplatan. Naša ekipa dolazi na tvoju adresu, uzima potrebne dimenzije i daje ti ponudu na licu mesta. Ako se tada predomisliš, pa ipak ne želiš da sarađuješ sa nama – nije nikakav problem!",
  },
  {
    question: "Koliko traje proces ugradnje komarnika?",
    answer: "Proces ugradnje od dana uzimanja mera do dana montaže komarnika može varirati. Najčešće je to period između 3-5 radnih dana.",
  },
  {
    question: "Kako se vrši plaćanje?",
    answer: "Komarnike možeš platiti u gotovini ili uplatom na račun firme.",
  },
  {
    question: "Kako se održavaju komarnici?",
    answer: "Komarnici se lako čiste i održavaju – jednostavno uzmi vlažnu krpu i nežno prebriši mrežicu i okvir nekoliko puta.",
  },
  {
    question: "Da li imam pravo na reklamaciju?",
    answer: "Da, tvoji komarnici su pod garancijom naredne 2 godine. Ako imaš bilo kakvih poteškoća, slobodno nas kontaktiraj putem telefona ili e-maila. Naš tim će se pobrinuti da rešimo problem što pre.",
  },
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const { isOpen, isClosing, contentRef, toggle, onTransitionEnd } = useAnimatedDisclosure<HTMLDivElement>();
  const itemId = `faq-${index}`;
  const summaryId = `${itemId}-summary`;

  return (
    <details className={cn("faq-item", isOpen && "is-open", isClosing && "is-closing")} open={isOpen || isClosing}>
      <summary id={summaryId} aria-expanded={isOpen && !isClosing} aria-controls={itemId} onClick={(event) => { event.preventDefault(); toggle(); }}>
        <span>{question}</span>
        <ChevronDown aria-hidden="true" />
      </summary>
      <div ref={contentRef} id={itemId} className="faq-content" role="region" aria-labelledby={summaryId} onTransitionEnd={onTransitionEnd}>
        <div className="faq-content-inner"><p>{answer}</p></div>
      </div>
    </details>
  );
}

export function FaqSection() {
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <Container>
        <div className="section-inner">
          <div className="faq-layout">
            <div className="faq-intro">
              <div className="faq-intro-copy stack">
                <Heading as="h2" size="section" id="faq-title">Česta pitanja</Heading>
                <p>Pronađi brze odgovore ili nam se javi ako ti treba dodatna pomoć.</p>
              </div>
              <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />061 132 1324</ButtonLink>
            </div>
            <div className="faq-list">
              {faqItems.map((item, index) => <FaqItem key={item.question} {...item} index={index} />)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
