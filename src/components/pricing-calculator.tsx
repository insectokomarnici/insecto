"use client";

import { useMemo, useState } from "react";
import { Container, Heading } from "@/components/ui/layout";
import { colorOptions, getPricePerM2, pricingOptions, type PricingType } from "@/lib/pricing";

type MeasurementDiagramProps = { axis: "width" | "height" };

function MeasurementDiagram({ axis }: MeasurementDiagramProps) {
  const isWidth = axis === "width";

  return (
    <svg className="calculator-diagram" viewBox="0 0 110 160" role="img" aria-label={isWidth ? "Ilustracija širine otvora" : "Ilustracija visine otvora"}>
      <rect className="calculator-diagram-frame" x="20" y="15" width="70" height="130" rx="2" />
      <rect className="calculator-diagram-screen" x="27" y="22" width="56" height="118" rx="1" />
      <rect className="calculator-diagram-screen-shade" x="30" y="25" width="50" height="112" />
      <ellipse className="calculator-diagram-handle" cx="78" cy="80" rx="2" ry="6" />
      <rect className="calculator-diagram-handle-detail" x="76" y="77" width="4" height="6" rx="0.5" />
      <rect className="calculator-diagram-handle-stem" x="77" y="74" width="2" height="12" rx="1" />
      {isWidth ? (
        <>
          <line className="calculator-diagram-measure-width" x1="27" y1="152" x2="83" y2="152" />
          <path className="calculator-diagram-measure-width" d="M20 152 L27 147.5 L27 156.5 Z" />
          <path className="calculator-diagram-measure-width" d="M90 152 L83 147.5 L83 156.5 Z" />
        </>
      ) : (
        <>
          <line className="calculator-diagram-measure-height" x1="98" y1="24" x2="98" y2="136" />
          <path className="calculator-diagram-measure-height" d="M98 18 L93 24.5 L103 24.5 Z" />
          <path className="calculator-diagram-measure-height" d="M98 142 L93 135.5 L103 135.5 Z" />
        </>
      )}
    </svg>
  );
}

export function PricingCalculator() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [type, setType] = useState<PricingType>("plise");
  const [color, setColor] = useState("bela");

  const calculation = useMemo(() => {
    const widthInMeters = Math.max(Number(width) || 0, 0) / 100;
    const heightInMeters = Math.max(Number(height) || 0, 0) / 100;
    const area = widthInMeters * heightInMeters;
    const pricePerM2 = getPricePerM2(type);
    const total = Math.max(area * pricePerM2, pricePerM2);

    return { area, pricePerM2, total };
  }, [height, type, width]);

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
              <p className="text-lead">Unosiš širinu i visinu otvora u centimetrima. Površinu dobijamo kao širina × visina u metrima. Zatim površinu množimo cenom po m² za izabrani tip komarnika.</p>
              <div className="calculator-diagrams" aria-label="Primer merenja otvora">
                <div className="calculator-diagram-item">
                  <span className="field-label">Širina</span>
                  <MeasurementDiagram axis="width" />
                </div>
                <div className="calculator-diagram-item">
                  <span className="field-label">Visina</span>
                  <MeasurementDiagram axis="height" />
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
                    <select id="calculator-color" className="control" value={color} onChange={(event) => setColor(event.target.value)}>
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
