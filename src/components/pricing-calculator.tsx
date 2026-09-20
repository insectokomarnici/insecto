"use client";

import Image from "next/image";
import { Add, ChevronDown, TrashCan } from "@carbon/icons-react";
import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, Container, Heading } from "@/components/ui/layout";
import { colorOptions, getPricePerM2, pricingOptions, type PricingColor, type PricingType } from "@/lib/pricing";

type CalculatorItem = {
  id: number;
  typeLabel: string;
  colorLabel: string;
  width: number;
  height: number;
  area: number;
  pricePerM2: number;
  total: number;
};

export function PricingCalculator() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [type, setType] = useState<PricingType>("plise");
  const [color, setColor] = useState<PricingColor>("bela");
  const [items, setItems] = useState<CalculatorItem[]>([]);
  const [nextItemId, setNextItemId] = useState(1);

  const calculation = useMemo(() => {
    const widthInMeters = Math.max(Number(width) || 0, 0) / 100;
    const heightInMeters = Math.max(Number(height) || 0, 0) / 100;
    const area = widthInMeters * heightInMeters;
    const pricePerM2 = getPricePerM2(type, color);
    const total = Math.max(area * pricePerM2, pricePerM2);

    return { area, pricePerM2, total };
  }, [color, height, type, width]);

  const typeLabel = pricingOptions.find((option) => option.id === type)?.label ?? type;
  const colorLabel = colorOptions.find((option) => option.id === color)?.label ?? color;
  const canAddItem = calculation.area > 0;
  const itemsTotal = useMemo(() => items.reduce((sum, item) => sum + item.total, 0), [items]);

  function handleAddItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canAddItem) return;

    setItems((currentItems) => [
      ...currentItems,
      {
        id: nextItemId,
        typeLabel,
        colorLabel,
        width: Number(width),
        height: Number(height),
        area: calculation.area,
        pricePerM2: calculation.pricePerM2,
        total: calculation.total,
      },
    ]);
    setNextItemId((currentId) => currentId + 1);
    setWidth("");
    setHeight("");
  }

  function handleRemoveItem(id: number) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  return (
    <section className="section calculator-section" id="calculator" aria-labelledby="calculator-title">
      <Container>
        <div className="section-inner">
          <div className="section-intro calculator-intro">
            <Heading as="h2" size="section" id="calculator-title">Komarnici - Cena</Heading>
          </div>
          <div className="calculator-content">
            <Card elevation="none" className="calculator-copy">
              <Heading as="h3" size="card">Kako računamo cenu?</Heading>
              <div className="calculator-copy-body stack">
                <p className="text-body">Unesi širinu i visinu otvora u centimetrima. Površinu dobijamo množenjem širine i visine u metrima, a zatim tu površinu množimo cenom po m² za izabrani tip i boju komarnika. <span className="calculator-price-note">*Merenje i ugradnja su uračunati u cenu.</span></p>
                <div className="calculator-diagrams" aria-label="Primer merenja otvora">
                  <div className="calculator-diagram-labels">
                    <span className="field-label">Širina</span>
                    <span className="field-label">Visina</span>
                  </div>
                  <Image className="calculator-diagram" src="/images/calculator-measurements.svg" alt="" width={236} height={150} />
                </div>
              </div>
            </Card>

            <Card elevation="none" className="calculator-panel">
              <form className="calculator-form" onSubmit={handleAddItem}>
                <div className="calculator-field-grid">
                  <div className="field">
                    <label className="field-label" htmlFor="calculator-width">Širina</label>
                    <div className="calculator-input">
                      <input id="calculator-width" className="control" type="number" min="0" inputMode="decimal" aria-describedby="calculator-width-unit" value={width} onChange={(event) => setWidth(event.target.value)} />
                      <span id="calculator-width-unit" className="calculator-input-unit">cm</span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="calculator-height">Visina</label>
                    <div className="calculator-input">
                      <input id="calculator-height" className="control" type="number" min="0" inputMode="decimal" aria-describedby="calculator-height-unit" value={height} onChange={(event) => setHeight(event.target.value)} />
                      <span id="calculator-height-unit" className="calculator-input-unit">cm</span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="calculator-type">Tip</label>
                    <div className="calculator-select">
                      <select id="calculator-type" className="control" value={type} onChange={(event) => setType(event.target.value as PricingType)}>
                        {pricingOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
                      </select>
                      <ChevronDown aria-hidden="true" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="calculator-color">Boja</label>
                    <div className="calculator-select">
                      <select id="calculator-color" className="control" value={color} onChange={(event) => setColor(event.target.value as PricingColor)}>
                        {colorOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}
                      </select>
                      <ChevronDown aria-hidden="true" />
                    </div>
                  </div>
                </div>
                <Button variant="secondary" size="medium" className="calculator-add-button" type="submit" disabled={!canAddItem}>
                  <Add aria-hidden="true" />
                  Dodaj komarnik
                </Button>
              </form>

              {items.length > 0 && (
                <div className="calculator-items" aria-live="polite">
                  <div className="calculator-items-heading">
                    <Heading as="h3" size="card">Dodati komarnici</Heading>
                    <span aria-label={`${items.length} dodatih komarnika`}>({items.length})</span>
                  </div>
                  <ul className="calculator-item-list">
                    {items.map((item, index) => (
                      <li className="calculator-item" key={item.id}>
                        <div className="calculator-item-copy">
                          <strong>{item.typeLabel} komarnik · {item.colorLabel}</strong>
                          <div className="calculator-item-detail-row">
                            <span>{item.width} × {item.height} cm · {item.area.toFixed(2)} m² × {item.pricePerM2} €/m²</span>
                            <div className="calculator-item-meta">
                              <strong>{item.total.toFixed(2)} €</strong>
                              <button className="calculator-remove" type="button" aria-label={`Ukloni komarnik ${index + 1}`} onClick={() => handleRemoveItem(item.id)}>
                                <TrashCan aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="calculator-results">
                <div className="calculator-result-grid">
                  <div className="calculator-result">
                    <span>Površina</span>
                    <strong aria-live="polite">{calculation.area.toFixed(2)} m²</strong>
                  </div>
                  <div className="calculator-result calculator-result-price">
                    <span>Cena</span>
                    <strong aria-live="polite">{calculation.pricePerM2} €/m²</strong>
                  </div>
                </div>
                <div className="calculator-total">
                  <span>Ukupno</span>
                  <strong aria-live="polite">{(items.length > 0 ? itemsTotal : calculation.total).toFixed(2)} €</strong>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
