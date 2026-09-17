import Image from "next/image";
import { Container, Heading, Card, Badge } from "@/components/ui/layout";
import { ActionDemo, FormDemo, WeightDemo } from "@/components/design-system/demos";
import { Notice } from "@/components/ui/notice";
import { SiteHeader } from "@/components/site-header";
import { SiteBanner } from "@/components/site-banner";

const colors = [
  ["Brand", "brand"], ["Lighter blue", "brand-light"], ["Accent", "accent"], ["Accent surface", "accent-surface"],
  ["Headings", "heading"], ["Body text", "body"], ["Google rating star", "rating-star"], ["White", "surface"], ["Subtle surface", "surface-subtle"],
  ["Decorative border", "border"], ["Control border", "control-border"], ["Success", "success"], ["Success surface", "success-surface"], ["Error", "error"], ["Error surface", "error-surface"],
] as const;
const navigation = [["header", "Header"], ["colors", "Colors"], ["typography", "Typography"], ["layout", "Layout"], ["surfaces", "Surfaces"], ["actions", "Actions"], ["form", "Form"]] as const;

function Title({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="ds-section-title"><span className="ds-number" aria-hidden="true">{number}</span><Heading>{children}</Heading></div>;
}

export default function DesignSystem() {
  return <>
    <header className="ds-header"><Container className="ds-header-inner"><Image className="ds-logo" src="/insecto-logo.svg" width={112} height={27} alt="Insecto" priority /><span className="text-small">Component library · v0.1</span></Container></header>
    <main id="main"><Container>
      <div className="ds-intro stack"><Badge>Osnova za sajt</Badge><Heading as="h1" size="hero">Insecto design system</Heading><p className="text-lead prose-width">Zajednički vizuelni jezik za svaku buduću sekciju. Ovde proveravamo pravila, komponente i njihovo ponašanje.</p></div>
      <nav className="ds-nav" aria-label="Design system contents">{navigation.map(([id,label]) => <a className="text-link" key={id} href={`#${id}`}>{label}</a>)}</nav>

      <section className="ds-section" id="header"><Title number="00">Header</Title><div className="ds-header-demo"><SiteBanner /><SiteHeader /></div><p className="text-small">Site chrome includes a brand announcement banner above Header. Its centered contact items rotate one at a time; the close action hides it. Header keeps inline navigation on desktop, where the product dropdown opens on hover, focus or click, and an icon-only hamburger with a full-width mobile overlay below Header.</p></section>

      <section className="ds-section" id="colors"><Title number="01">Colors</Title><div className="ds-palette">{colors.map(([name,token]) => <div key={token}><div className="ds-swatch" style={{background:`var(--color-${token})`}} /><p className="font-semibold text-heading">{name}</p><code className="ds-token">--color-{token}</code></div>)}</div></section>

      <section className="ds-section" id="typography"><Title number="02">Typography</Title>
        <div className="ds-type-row"><p className="text-small">Montserrat 700 · hero heading · 2–3rem</p><p className="heading heading-hero">Komarnici po meri</p></div>
        <div className="ds-type-row"><p className="text-small">Montserrat 700 · section heading · 1.75–2.5rem</p><p className="heading heading-section">Za prozore i vrata</p></div>
        <div className="ds-type-row"><p className="text-small">Montserrat 600 · card heading · 1.375–1.5rem</p><p className="heading heading-card">Rolo komarnici</p></div>
        <div className="ds-type-row"><p className="text-small">Manrope 400 · lead text · 1.125–1.25rem</p><p className="text-lead">Svež vazduh u vašem domu, bez neželjenih insekata.</p></div>
        <div className="ds-type-row"><p className="text-small">Manrope 400 · body text · 1rem</p><p className="prose-width">Javite nam se za više informacija o ugradnji komarnika. Pozovite nas ili pošaljite poruku putem kontakt forme.</p></div>
        <div className="ds-type-row"><p className="text-small">Manrope 400 · supporting text · 0.875rem</p><p className="text-small">U poruci možete navesti broj prozora i vrata.</p></div>
        <div className="ds-type-row"><p className="text-small">Manrope 600 · field label · 0.875rem</p><p className="field-label">Broj telefona</p></div>
        <div className="mt-8"><WeightDemo /></div>
      </section>

      <section className="ds-section" id="layout"><Title number="03">Spacing & widths</Title><div className="ds-spec-grid">
        <div className="stack"><Heading as="h3" size="card">Base scale</Heading><div className="ds-space-list">{[1,2,3,4,5,6,8,10,12,16,20,24].map((step) => <div className="ds-space-row" key={step}><code className="ds-token">{step / 4}rem</code><div className="ds-space-bar" style={{width:`var(--space-${step})`}} /></div>)}</div></div>
        <div className="stack"><Heading as="h3" size="card">Content widths</Heading><div className="ds-table-wrap"><table className="ds-table"><caption className="sr-only">Maximum content widths</caption><thead><tr><th scope="col">Purpose</th><th scope="col">Maximum</th></tr></thead><tbody><tr><td>Main content</td><td>75rem</td></tr><tr><td>Narrow block / contact form</td><td>45rem</td></tr><tr><td>Text</td><td>38rem</td></tr></tbody></table></div><Heading as="h3" size="card">Breakpoints</Heading><div className="ds-table-wrap"><table className="ds-table"><thead><tr><th scope="col">Breakpoint</th><th scope="col">From width</th></tr></thead><tbody>{[["sm",40],["md",48],["lg",64],["xl",80],["2xl",96]].map(([name,value])=><tr key={name}><td>{name}</td><td>{value}rem</td></tr>)}</tbody></table></div></div>
      </div><div className="ds-table-wrap mt-8"><table className="ds-table"><caption className="sr-only">Spacing by viewport width</caption><thead><tr><th scope="col">Purpose</th><th scope="col">Base</th><th scope="col">md</th><th scope="col">lg</th></tr></thead><tbody>{[["Page gutter","1.25rem","1.5rem","2rem"],["Section, top/bottom","3rem","4rem","5rem"],["Intro to content","2rem","2.5rem","3rem"],["Between cards","1rem","1.5rem","2rem"],["Inside a card","1.5rem","1.5rem","2rem"]].map(([label,...values])=><tr key={label}><th scope="row">{label}</th>{values.map((value,i)=><td key={i}>{value}</td>)}</tr>)}</tbody></table></div></section>

      <section className="ds-section" id="surfaces"><Title number="04">Radii & shadows</Title><div className="auto-grid">{[["none","No shadow"],["soft","Soft shadow"],["raised","Raised shadow"]].map(([elevation,label])=><Card key={elevation} elevation={elevation as "none"|"soft"|"raised"} className="stack"><Heading as="h3" size="card">{label}</Heading><p>Card radius: 0.75rem.</p><p className="text-small">Surface example for content.</p></Card>)}</div><p className="mt-6 text-small">Buttons and controls: 0.5rem · Badges: 0.25rem · Featured panel: 1rem.</p></section>

      <section className="ds-section" id="actions"><Title number="05">Buttons & feedback</Title><ActionDemo /><div className="stack mt-8"><Notice tone="success">Primer uspeha: poruka je uspešno poslata.</Notice><Notice tone="error">Primer greške: proverite označeno polje.</Notice><Notice>Tab tasterom proverite fokus na dugmadima, linkovima i poljima.</Notice></div></section>

      <section className="ds-section" id="form"><Title number="06">Contact form</Title><FormDemo /></section>
      <footer className="ds-footer text-small">© 2026 Insecto Komarnici. Sva prava zadržana.</footer>
    </Container></main>
  </>;
}
