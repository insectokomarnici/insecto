"use client";

import { useEffect, useRef, useState } from "react";

// Sample real component classes so the reference reports the cascade as well as
// tokens. HTML heading rank and visual size are separate choices.
const roles = [
  ["Page title", "heading heading-hero", "Komarnici Novi Sad"],
  ["Section title", "heading heading-section", "Česta pitanja i odgovori"],
  ["Card / legal subsection", "heading heading-card", "Komarnici za prozore"],
  ["Compact title", "heading heading-compact", "Radno vreme"],
  ["Body", "text-body", "Širinu i visinu unesi u centimetrima. Čč Ćć Šš Žž Đđ."],
  ["Supporting copy", "text-small", "Tvoje podatke koristimo samo da odgovorimo na upit."],
  ["Field label", "field-label", "Širina"],
  ["Primary choice", "ds-type-choice", "Bela · Antracit · Braon"],
  ["CTA", "ds-type-button", "Zakaži merenje"],
  ["Emphasis within body", "text-body font-bold", "Direktno od proizvođača"],
  ["Optional lead (library)", "text-lead", "Svež vazduh u tvom domu."],
] as const;

export function TypographyTokens() {
  const root = useRef<HTMLDivElement>(null);
  const [fontStatus, setFontStatus] = useState("Checking local font faces…");
  const [values, setValues] = useState<Record<string, string>>({});
  useEffect(() => {
    let active = true;
    const measure = () => {
      if (!active || !root.current) return;
      setValues(Object.fromEntries(Array.from(root.current.querySelectorAll<HTMLElement>("[data-type-role]")).map((element) => {
        const style = getComputedStyle(element);
        const round = (value: string) => Number.parseFloat(value).toFixed(1).replace(/\.0$/, "");
        return [element.dataset.typeRole!, `${style.fontFamily.split(",")[0].replaceAll('"', '')} · ${style.fontWeight} · ${round(style.fontSize)}px / ${round(style.lineHeight)}px`];
      })));
    };
    measure();
    // This internal showcase explicitly loads each approved weight/subset.
    // fonts.ready alone only waits for faces already requested by visible text.
    const sample = "Čč Ćć Šš Žž Đđ 10+";
    const faces = [400, 600, 700].flatMap(weight =>
      ["Montserrat Variable", "Manrope Variable"].map(family => `${weight} 16px "${family}"`));
    void Promise.all(faces.map(face => document.fonts.load(face, sample))).then(() => {
      if (!active) return;
      setFontStatus(faces.every(face => document.fonts.check(face, sample))
        ? "Font check passed: both families, weights 400 / 600 / 700 and Serbian Latin sample are ready."
        : "Font check failed: inspect local font assets.");
      measure();
    }).catch(() => { if (active) setFontStatus("Font check failed: inspect local font assets."); });
    window.addEventListener("resize", measure);
    return () => { active = false; window.removeEventListener("resize", measure); };
  }, []);

  return <div ref={root}>
    <p className="text-small">Live typography: family, weight, size / line-height. Resize to inspect the fluid heading scale. Body and primary controls stay at 1rem; 0.875rem is for labels and supporting information.</p>
    <p className="text-small">{fontStatus}</p>
    {roles.map(([role, className, text]) => <div className="ds-type-row" key={role}>
      <p className="text-small">{role} — {values[role] ?? "Loading…"}</p>
      <p className={className} data-type-role={role}>{text}</p>
    </div>)}
  </div>;
}
