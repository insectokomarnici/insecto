"use client";

import Image from "next/image";
import { CheckShield, Plus, Trash } from "@boxicons/react";
import { useMemo, useRef, useState, type FormEvent } from "react";
import { FixedScreenIcon, PleatedScreenIcon, RollerScreenIcon } from "@/components/calculator-type-icons";
import { RadioChoice } from "@/components/ui/radio-choice";
import { Button } from "@/components/ui/button";
import { Card, Container, Heading } from "@/components/ui/layout";
import { DrillIcon, StraightenIcon } from "@/components/measurement-icons";
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

const includedItems = [
  {
    title: "Merenje otvora",
    body: "Precizno uzimamo mere svakog otvora pre izrade komarnika.",
    Icon: StraightenIcon,
  },
  {
    title: "Profesionalna ugradnja",
    body: "Komarnike ugrađujemo precizno i uredno, bez dodatnog traženja majstora.",
    Icon: DrillIcon,
  },
  {
    title: "2 godine garancije",
    body: "Na sve proizvode dobijaš garanciju u trajanju od dve godine.",
    Icon: CheckShield,
  },
];

const calculatorColorSwatchClasses: Record<PricingColor, string> = {
  bela: "calculator-color-swatch-white",
  braon: "calculator-color-swatch-brown",
  antracit: "calculator-color-swatch-anthracite",
};

const calculatorTypeIcons = {
  plise: PleatedScreenIcon,
  rolo: RollerScreenIcon,
  fiksni: FixedScreenIcon,
} as const;

export function PricingCalculator() {
  const calculatorRef = useRef<HTMLElement>(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [type, setType] = useState<PricingType>("plise");
  const [color, setColor] = useState<PricingColor>("bela");
  const [items, setItems] = useState<CalculatorItem[]>([]);
  const [nextItemId, setNextItemId] = useState(1);

  const calculation = useMemo(() => {
    const widthInMeters = Math.max(Number(width) || 0, 0) / 100;
    const heightInMeters = Math.max(Number(height) || 0, 0) / 100;
    const area = widthInMeters * heightInMeters;
    const quantityNumber = Number(quantity);
    const quantityValue = Number.isInteger(quantityNumber) && quantityNumber > 0 ? quantityNumber : 0;
    const pricePerM2 = getPricePerM2(type, color);
    const unitTotal = area > 0 ? Math.max(area * pricePerM2, pricePerM2) : 0;
    const total = unitTotal * quantityValue;

    return { area, pricePerM2, quantity: quantityValue, total };
  }, [color, height, quantity, type, width]);

  const typeLabel = pricingOptions.find((option) => option.id === type)?.label ?? type;
  const colorLabel = colorOptions.find((option) => option.id === color)?.label ?? color;
  const hasDimensions = calculation.area > 0 && calculation.quantity > 0 && Number.isFinite(calculation.total);
  const itemsCount = items.length;
  const itemsTotal = useMemo(() => items.reduce((sum, item) => sum + item.total, 0), [items]);

  function handleAddItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!hasDimensions) return;

    const unitTotal = calculation.total / calculation.quantity;
    const newItems = Array.from({ length: calculation.quantity }, (_, index) => ({
      id: nextItemId + index,
      typeLabel,
      colorLabel,
      width: Number(width),
      height: Number(height),
      area: calculation.area,
      pricePerM2: calculation.pricePerM2,
      total: unitTotal,
    }));

    setItems((currentItems) => [...currentItems, ...newItems]);
    setNextItemId((currentId) => currentId + calculation.quantity);
    setWidth("");
    setHeight("");
    setQuantity("1");
    requestAnimationFrame(() => calculatorRef.current?.querySelector<HTMLInputElement>("#calculator-width")?.focus({ preventScroll: true }));
  }

  function handleRemoveItem(id: number) {
    const index = items.findIndex((item) => item.id === id);
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
    requestAnimationFrame(() => {
      const remaining = calculatorRef.current?.querySelectorAll<HTMLButtonElement>(".calculator-remove");
      const next = remaining?.[Math.min(index, remaining.length - 1)];
      (next ?? calculatorRef.current?.querySelector<HTMLInputElement>("#calculator-width"))?.focus({ preventScroll: true });
    });
  }

  return (
    <section ref={calculatorRef} className="section calculator-section" id="calculator" aria-labelledby="calculator-title">
      <Container>
        <div className="section-inner">
          <div className="section-intro">
            <Heading as="h2" size="section" id="calculator-title">Cena komarnika</Heading>
          </div>
          <div className="calculator-content">
            <Card elevation="none" className="calculator-copy content-flow">
              <Heading as="h3" size="card">Kako da izračunaš cenu?</Heading>
              <div className="calculator-copy-body stack">
                <div className="calculator-copy-intro stack">
                  <p className="text-body calculator-description">
                    Unesi širinu i visinu otvora u centimetrima, količinu, zatim izaberi tip i boju komarnika da dobiješ cenu.
                  </p>
                  <div className="calculator-price-explanation">
                    <p className="text-body calculator-price-heading">Kako se računa cena?</p>
                    <p className="text-body">Površina u m² × Cena po m²</p>
                    <p className="text-body">Mere koje uneseš u centimetrima pretvaramo u metre, zatim množimo širinu i visinu u metrima da bismo izračunali površinu. Dobijenu površinu u m² pomnožimo cenom po m² za izabrani tip i boju komarnika.</p>
                  </div>
                </div>
                <div className="calculator-diagrams" aria-label="Primer merenja otvora">
                  <div className="calculator-diagram-labels">
                    <span className="field-label">Širina</span>
                    <span className="field-label">Visina</span>
                  </div>
                  <Image className="calculator-diagram" src="/images/calculator-pvc-exterior-v2.png" alt="Zatvoren PVC prozor gledan spolja, sa krilom uvučenim u štok. Strelice označavaju širinu i visinu prozora." width={1200} height={693} sizes="(max-width: 639px) 80vw, 352px" />
                </div>
              </div>
            </Card>

            <Card elevation="none" className="calculator-panel">
              <form className="calculator-form" onSubmit={handleAddItem}>
                <div className="calculator-field-grid">
                  <div className="field">
                    <label className="field-label" htmlFor="calculator-width">Širina</label>
                    <div className="calculator-input">
                      <input id="calculator-width" className="control" type="number" min="0" step="any" inputMode="decimal" aria-describedby="calculator-width-unit" value={width} onChange={(event) => setWidth(event.target.value)} />
                      <span id="calculator-width-unit" className="calculator-input-unit">cm</span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="calculator-height">Visina</label>
                    <div className="calculator-input">
                      <input id="calculator-height" className="control" type="number" min="0" step="any" inputMode="decimal" aria-describedby="calculator-height-unit" value={height} onChange={(event) => setHeight(event.target.value)} />
                      <span id="calculator-height-unit" className="calculator-input-unit">cm</span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="field-label" htmlFor="calculator-quantity">Količina</label>
                    <div className="calculator-input">
                      <input id="calculator-quantity" className="control" type="number" min="1" step="1" inputMode="numeric" aria-describedby="calculator-quantity-unit" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                      <span id="calculator-quantity-unit" className="calculator-input-unit">kom.</span>
                    </div>
                  </div>
                  <fieldset className="field calculator-choice-field">
                    <legend className="field-label">Tip</legend>
                    <div className="calculator-choice-list">
                      {pricingOptions.map((option) => {
                        const Icon = calculatorTypeIcons[option.id];
                        return (
                          <RadioChoice className="calculator-choice calculator-type-choice" key={option.id} name="calculator-type" value={option.id} checked={type === option.id} onChange={() => setType(option.id)}>
                            <Icon className="calculator-type-icon" aria-hidden="true" />
                            <span>{option.label}</span>
                          </RadioChoice>
                        );
                      })}
                    </div>
                  </fieldset>
                  <fieldset className="field calculator-choice-field calculator-color-field">
                    <legend className="field-label">Boja</legend>
                    <div className="calculator-choice-list">
                      {colorOptions.map((option) => (
                        <RadioChoice className="calculator-choice calculator-color-choice" key={option.id} name="calculator-color" value={option.id} checked={color === option.id} onChange={() => setColor(option.id)}>
                          <span className={`calculator-color-swatch ${calculatorColorSwatchClasses[option.id]}`} aria-hidden="true" />
                          <span>{option.label}</span>
                        </RadioChoice>
                      ))}
                    </div>
                  </fieldset>
                </div>
                <Button variant="brand" size="small" className="calculator-add-button" type="submit" disabled={!hasDimensions}>
                  <Plus aria-hidden="true" />
                  Dodaj komarnik
                </Button>
              </form>

              {items.length > 0 && (
                <div className="calculator-items" aria-live="polite">
                  <div className="calculator-items-heading">
                    <Heading as="h3" size="card">Dodati komarnici</Heading>
                    <span aria-label={`${itemsCount} dodatih komarnika`}>({itemsCount})</span>
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
                                <Trash aria-hidden="true" />
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
                    <strong aria-live="polite">{(calculation.area * calculation.quantity).toFixed(2)} m²</strong>
                  </div>
                  <div className="calculator-result calculator-result-price">
                    <span>Cena</span>
                    <strong aria-live="polite">{calculation.pricePerM2} €/m²</strong>
                  </div>
                </div>
                <div className="calculator-total">
                  <span>Ukupno</span>
                  <strong aria-live="polite">{items.length > 0 ? `${itemsTotal.toFixed(2)} €` : hasDimensions ? `${calculation.total.toFixed(2)} €` : "0.00 €"}</strong>
                </div>
              </div>
            </Card>
          </div>

          <section className="calculator-included" aria-labelledby="calculator-included-title">
            <Heading as="h3" size="card" id="calculator-included-title">Šta je SVE uključeno u cenu?</Heading>
            <ul className="calculator-included-list" aria-labelledby="calculator-included-title">
              {includedItems.map(({ title, body, Icon }) => (
                <li className="calculator-included-item" key={title}>
                  <span className="calculator-included-item-icon"><Icon aria-hidden="true" /></span>
                  <Heading as="h4" size="compact">{title}</Heading>
                  <p className="calculator-included-item-body">{body}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </section>
  );
}
