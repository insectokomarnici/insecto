"use client";
import { useState } from "react";
import { ArrowRight } from "@boxicons/react";
import { PhoneFilledIcon } from "@/components/ui/phone-filled-icon";
import { Button, ButtonLink, TextLink } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

export function ActionDemo() {
  return <div className="stack">
    <p className="text-small">Text buttons: small 44px, medium 48px, large 52px at normal text size. Borders do not change dimensions; wrapped text can grow. Primary: main call to action. Brand: calculator action. Secondary: supporting action or submission on a blue panel.</p>
    {(["small", "medium", "large"] as const).map((size) => (
      <div className="ds-button-size-grid" key={size}>
        {(["primary", "brand", "secondary"] as const).map((variant) => (
          <div className="stack" key={variant}>
            <p className="text-small">{size} · {variant}</p>
            <Button size={size} variant={variant}><PhoneFilledIcon aria-hidden="true" />Zakaži merenje</Button>
          </div>
        ))}
      </div>
    ))}
    <div className="ds-button-size-grid">
      <div className="stack"><p className="text-small">Disabled action</p><Button disabled size="small" variant="brand">Dodaj komarnik</Button></div>
      <div className="stack"><p className="text-small">Loading · original width preserved</p><Button loading variant="secondary">Pošalji upit</Button></div>
      <div className="stack"><p className="text-small">Link styled as an action</p><ButtonLink variant="secondary" href="#form">Pošaljite upit<ArrowRight aria-hidden="true" /></ButtonLink></div>
    </div>
    <p><TextLink href="#form">Pređite na kontakt formu</TextLink></p>
  </div>;
}

export function FormDemo() {
  const [outcome, setOutcome] = useState("success");
  return <div className="stack ds-form-wrapper">
    <div className="field">
      <label htmlFor="demo-outcome" className="field-label">Simulation outcome</label>
      <select id="demo-outcome" className="control ds-select" value={outcome} onChange={(e) => setOutcome(e.target.value)}>
        <option value="success">Successful submission</option><option value="error">Submission error</option>
      </select>
    </div>
    <div className="ds-demo stack">
      <div className="content-flow"><h3 className="heading heading-card">Pošaljite upit</h3><p>Ostavite broj telefona za dogovor o ugradnji.</p></div>
      <ContactForm submitContact={async () => {
        const result = outcome;
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (result === "error") throw new Error("Simulated delivery failure");
      }} successMessage="Simulacija uspeha: ovde će se pojaviti potvrda nakon stvarno uspešnog slanja." failureMessage="Simulacija greške: poruka nije poslata. Pokušajte ponovo. Unos je sačuvan u formi." />
    </div>
  </div>;
}

export function WeightDemo() {
  const [headingWeight, setHeadingWeight] = useState(700);
  const [bodyWeight, setBodyWeight] = useState(400);
  return <div className="card content-flow">
    <div className="field-grid">
      <div className="field"><label className="field-label" htmlFor="heading-weight">Montserrat · weight</label><select className="control" id="heading-weight" value={headingWeight} onChange={(e) => setHeadingWeight(Number(e.target.value))}>{[100,200,300,400,500,600,700,800,900].map((weight) => <option key={weight}>{weight}</option>)}</select></div>
      <div className="field"><label className="field-label" htmlFor="body-weight">Manrope · weight</label><select className="control" id="body-weight" value={bodyWeight} onChange={(e) => setBodyWeight(Number(e.target.value))}>{[200,300,400,500,600,700,800].map((weight) => <option key={weight}>{weight}</option>)}</select></div>
    </div>
    <p className="heading heading-card" style={{fontWeight:headingWeight}}>Komarnici po meri</p>
    <p style={{fontWeight:bodyWeight}}>Svež vazduh u vašem domu. Čč Ćć Šš Žž Đđ.</p>
  </div>;
}
