"use client";

import { useState } from "react";
import { ChevronDown } from "@carbon/icons-react";
import { cn } from "@/lib/cn";
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
              <div className="faq-left-copy content-flow">
                <Heading as="h2" size="section" id="faq-title">Česta pitanja i odgovori</Heading>
                <p className="faq-description">Sve što treba da znaš pre nego što zakažeš merenje.</p>
              </div>

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
