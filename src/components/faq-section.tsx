"use client";

import { useState } from "react";
import { Phone } from "@boxicons/react";
import { ArrowRight, ChevronDown } from "@carbon/icons-react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";

const faqItems = [
  {
    question: "Kako mogu da naručim komarnike?",
    answer: "Potrebno je da nam se javiš putem telefona ili e-maila. Naš tim će ti objasniti proceduru i zakazati termin za uzimanje mera na tvojoj adresi.",
  },
  {
    question: "Koji komarnik je najbolji za mene?",
    answer: "Naš tim će ti pomoći da se odlučiš za najbolji model komarnika prema dimenzijama, izgledu i funkcionalnosti tvojih prozora i vrata. U ponudi imamo fiksne, rolo i plise komarnike.",
  },
  {
    question: "Gde vršite merenje i ugradnju?",
    answer: "Ugradnju komarnika vršimo u Novom Sadu i bližoj okolini. Ukoliko ne znaš da li tvoja lokacija odgovara našem krugu poslovanja, slobodno nas kontaktiraj za više informacija.",
  },
  {
    question: "Da li se merenje plaća?",
    answer: "Dolazak na adresu radi uzimanja mera je besplatan. Naša ekipa dolazi na tvoju adresu, uzima potrebne dimenzije i daje ti ponudu na licu mesta. Ako se tada predomisliš, pa ipak ne želiš da sarađuješ sa nama – nije nikakav problem!",
  },
  {
    question: "Koliko traje izrada i ugradnja?",
    answer: "Proces ugradnje od dana uzimanja mera do dana montaže komarnika može varirati. Najčešće je to period između 3-5 radnih dana.",
  },
  {
    question: "Na koji način se vrši plaćanje?",
    answer: "Komarnike možeš platiti u gotovini ili uplatom na račun firme.",
  },
  {
    question: "Kako se održavaju komarnici?",
    answer: "Komarnici se lako čiste i održavaju – jednostavno uzmi vlažnu krpu i nežno prebriši mrežicu i okvir nekoliko puta.",
  },
  {
    question: "Da li postoji garancija?",
    answer: "Da, tvoji komarnici su pod garancijom naredne 2 godine. Ako imaš bilo kakvih poteškoća, slobodno nas kontaktiraj putem telefona ili e-maila. Naš tim će se pobrinuti da rešimo problem što pre.",
  },
];

function FaqItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const itemId = `faq-${index}`;
  const panelId = `${itemId}-panel`;
  const summaryId = `${itemId}-summary`;

  return (
    <div className={cn("faq-item", isOpen && "is-open")}>
      <button
        className="faq-trigger"
        type="button"
        id={summaryId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="faq-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <span className="faq-question">{question}</span>
        <span className="faq-toggle" aria-hidden="true"><ChevronDown /></span>
      </button>
      <div
        className="faq-content"
        id={panelId}
        role="region"
        aria-labelledby={summaryId}
        aria-hidden={!isOpen}
      >
        <div className="faq-content-inner"><p>{answer}</p></div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <Container>
        <div className="section-inner">
          <div className="faq-layout">
            <div className="faq-left">
              <div className="faq-left-copy stack">
                <Heading as="h2" size="section" id="faq-title">Česta pitanja i odgovori</Heading>
                <p className="faq-description">Sve što treba da znaš pre nego što zakažeš merenje.</p>
              </div>

              <aside className="faq-contact-card" aria-label="Dodatna pitanja">
                <div className="faq-contact-copy">
                  <span className="faq-contact-icon"><Phone aria-hidden="true" /></span>
                  <div>
                    <p className="faq-contact-label">Imaš dodatno pitanje?</p>
                    <a className="faq-contact-phone" href="tel:+381611321324">061 132 1324</a>
                    <p className="faq-contact-note">Tu smo da pomognemo.</p>
                  </div>
                </div>
                <ButtonLink className="faq-contact-cta" size="medium" href="tel:+381611321324">
                  Zakaži merenje
                  <ArrowRight aria-hidden="true" />
                </ButtonLink>
              </aside>

            </div>

            <div className="faq-list" aria-label="Česta pitanja">
              {faqItems.map((item, index) => (
                <FaqItem
                  key={item.question}
                  {...item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex((current) => current === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
