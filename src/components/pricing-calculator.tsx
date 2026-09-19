"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container, Heading } from "@/components/ui/layout";
import { colorOptions, getPricePerM2, pricingOptions, type PricingColor, type PricingType } from "@/lib/pricing";

export function PricingCalculator() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [type, setType] = useState<PricingType>("plise");
  const [color, setColor] = useState<PricingColor>("bela");

  const calculation = useMemo(() => {
    const widthInMeters = Math.max(Number(width) || 0, 0) / 100;
    const heightInMeters = Math.max(Number(height) || 0, 0) / 100;
    const area = widthInMeters * heightInMeters;
    const pricePerM2 = getPricePerM2(type, color);
    const total = Math.max(area * pricePerM2, pricePerM2);

    return { area, pricePerM2, total };
  }, [color, height, type, width]);

  return (
    <section className="section calculator-section" id="calculator" aria-labelledby="calculator-title">
      <Container>
        <div className="section-inner">
          <div className="section-intro stack">
            <Heading as="h2" size="section" id="calculator-title">Komarnici - Cena</Heading>
          </div>
          <div className="calculator-content">
            <div className="calculator-copy stack">
              <Heading as="h3" size="card">Kako računamo cenu?</Heading>
              <p className="text-body">Unosiš širinu i visinu otvora u centimetrima. Površinu dobijamo kao širina × visina u metrima. Zatim površinu množimo cenom po m² za izabrani tip komarnika.</p>
              <div className="calculator-diagrams" aria-label="Primer merenja otvora">
                <div className="calculator-diagram-item">
                  <span className="field-label">Širina</span>
                  <Image className="calculator-diagram" src="/images/sirina.svg" alt="" width={110} height={160} />
                </div>
                <div className="calculator-diagram-item">
                  <span className="field-label">Visina</span>
                  <Image className="calculator-diagram" src="/images/visina.svg" alt="" width={110} height={160} />
                </div>
              </div>
            </div>

            <div className="calculator-panel card card-flat">
              <form className="calculator-form" onSubmit={(event) => event.preventDefault()}>
                <div className="calculator-field-grid">
                  <div className="field">
                    <label className="field-label" htmlFor="calculator-width">Širina</label>
                    <input id="calculator-width" className="control" type="number" min="0" inputMode="decimal" value={width} onChange={(event) => setWidth(event.target.value)} />
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="calculator-height">Visina</label>
                    <input id="calculator-height" className="control" type="number" min="0" inputMode="decimal" value={height} onChange={(event) => setHeight(event.target.value)} />
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="calculator-type">Tip</label>
                    <select id="calculator-type" className="control" value={type} onChange={(event) => setType(event.target.value as PricingType)}>
                      {pricingOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
                    </select>
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="calculator-color">Boja</label>
                    <select id="calculator-color" className="control" value={color} onChange={(event) => setColor(event.target.value as PricingColor)}>
                      {colorOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
                    </select>
                  </div>
                </div>
              </form>

              <div className="calculator-results">
                <div className="calculator-result-grid">
                  <div className="calculator-result">
                    <span>Površina</span>
                    <strong aria-live="polite">{calculation.area.toFixed(2)} m²</strong>
                  </div>
                  <div className="calculator-result">
                    <span>Cena</span>
                    <strong aria-live="polite">{calculation.pricePerM2} €/m²</strong>
                  </div>
                </div>
                <div className="calculator-total">
                  <span>Ukupno</span>
                  <strong aria-live="polite">{calculation.total.toFixed(2)} €</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
