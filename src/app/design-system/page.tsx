import { IconSurfaceTokens } from "@/components/design-system/icon-surface-tokens";
import { MeasurementCta } from "@/components/measurement-cta";
import { GoogleRating } from "@/components/google-rating";
import { TypographyTokens } from "@/components/design-system/typography-tokens";
import Image from "next/image";
import { Container, Heading, Card, Badge } from "@/components/ui/layout";
import { ActionDemo, FormDemo, WeightDemo } from "@/components/design-system/demos";
import { Notice } from "@/components/ui/notice";
import { SiteHeader } from "@/components/site-header";
import { SpacingTokens } from "@/components/design-system/spacing-tokens";
import { SiteBanner } from "@/components/site-banner";

const colors = [
  ["Brand", "brand"], ["Lighter blue", "brand-light"], ["Accent", "accent"], ["Accent surface", "accent-surface"],
  ["Headings", "heading"], ["Body text", "body"], ["Placeholder text", "placeholder"], ["Google rating star", "rating-star"], ["Product white", "product-white"], ["Product brown", "product-brown"], ["Product anthracite", "product-anthracite"], ["White", "surface"], ["Subtle surface", "surface-subtle"],
  ["Decorative border", "border"], ["Control border", "control-border"], ["Success", "success"], ["Success surface", "success-surface"], ["Error", "error"], ["Error surface", "error-surface"], ["Error boundary on brand", "error-on-brand"],
] as const;
const navigation = [["header", "Header"], ["colors", "Colors"], ["typography", "Typography"], ["layout", "Layout"], ["surfaces", "Surfaces"], ["actions", "Actions"], ["form", "Form"], ["motion", "Motion"]] as const;

function Title({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="ds-section-title"><span className="ds-number" aria-hidden="true">{number}</span><Heading>{children}</Heading></div>;
}

export default function DesignSystem() {
  return <>
    <header className="ds-header"><Container className="ds-header-inner"><Image className="ds-logo" src="/insecto-logo.svg" width={112} height={27} alt="Insecto" priority /><span className="text-small">Component library · October 2026</span></Container></header>
    <main id="main"><Container>
      <div className="ds-intro content-flow"><Badge>Osnova za sajt</Badge><Heading as="h1" size="hero">Insecto design system</Heading><p className="text-lead prose-width">Zajednički vizuelni jezik za svaku buduću sekciju. Ovde proveravamo pravila, komponente i njihovo ponašanje.</p></div>
      <nav className="ds-nav" aria-label="Design system contents">{navigation.map(([id,label]) => <a className="text-link" key={id} href={`#${id}`}>{label}</a>)}</nav>

      <section className="ds-section" id="header"><Title number="00">Header</Title><div className="ds-header-demo"><SiteBanner /><SiteHeader /></div><p className="text-small">Site chrome includes a brand announcement banner above Header. Its centered contact items rotate one at a time. Header keeps inline navigation on desktop, where the product dropdown opens on hover, focus or click, and an icon-only hamburger with a full-width mobile overlay below Header.</p></section>

      <section className="ds-section" id="colors"><Title number="01">Colors</Title><div className="ds-palette">{colors.map(([name,token]) => <div key={token}><div className="ds-swatch" style={{background:`var(--color-${token})`}} /><p className="font-semibold text-heading">{name}</p><code className="ds-token">--color-{token}</code></div>)}</div><p className="text-small ds-section-block">Color roles: decorative card borders stay subtle; input boundaries use the stronger control-border token. Placeholder text meets 4.5:1 on white and subtle surfaces. Keyboard focus uses mid blue on light surfaces and white on brand panels. Status messages include text; selection has a heavier full border or emphasized label. Google stars keep their original yellow fill without an outline; the rating is also provided as text.</p></section>

      <section className="ds-section" id="typography"><Title number="02">Typography</Title>
        <TypographyTokens />
        <div className="ds-section-block"><WeightDemo /></div>
      </section>

      <section className="ds-section" id="layout"><Title number="03">Spacing & widths</Title><div className="ds-spec-grid">
        <div className="content-flow"><Heading as="h3" size="card">Base scale</Heading><div className="ds-space-list">{[1,2,3,4,5,6,8,10,12,16,20,24].map((step) => <div className="ds-space-row" key={step}><code className="ds-token">{step / 4}rem</code><div className="ds-space-bar" style={{width:`var(--space-${step})`}} /></div>)}</div></div>
        <div className="content-flow"><Heading as="h3" size="card">Content widths</Heading><div className="ds-table-wrap"><table className="ds-table"><caption className="sr-only">Maximum content widths</caption><thead><tr><th scope="col">Purpose</th><th scope="col">Maximum</th></tr></thead><tbody><tr><td>Main content</td><td>75rem</td></tr><tr><td>Narrow block / contact form</td><td>45rem</td></tr><tr><td>Text</td><td>38rem</td></tr></tbody></table></div><Heading as="h3" size="card">Breakpoints</Heading><div className="ds-table-wrap"><table className="ds-table"><thead><tr><th scope="col">Breakpoint</th><th scope="col">From width</th></tr></thead><tbody>{[["sm",40],["md",48],["lg",64],["xl",80],["2xl",96]].map(([name,value])=><tr key={name}><td>{name}</td><td>{value}rem</td></tr>)}</tbody></table></div></div>
      </div><SpacingTokens /></section>

      <section className="ds-section" id="surfaces"><Title number="04">Radii & shadows</Title><div className="auto-grid">{[["none","No shadow"],["soft","Soft shadow"],["raised","Raised shadow"]].map(([elevation,label])=><Card key={elevation} elevation={elevation as "none"|"soft"|"raised"} className="content-flow"><Heading as="h3" size="card">{label}</Heading><p>Card radius: 0.75rem.</p><p className="text-small">Surface example for content.</p></Card>)}</div><p className="ds-section-block text-small">CTA buttons use the pill radius; fields and tabs use the input radius. Cards are informational unless they contain an explicit link or control. Decorative borders do not replace functional input boundaries.</p><IconSurfaceTokens /></section>

      <section className="ds-section" id="actions"><Title number="05">Buttons & feedback</Title><ActionDemo /><div className="stack ds-section-block"><Heading as="h3" size="compact">CTA + recenzije</Heading><p className="text-small">One shared group owns the 8px action-to-rating gap. This example uses the shared Google API rating, like the public CTAs. The rating is hidden when API credentials are unavailable. The group itself does not fetch data.</p><MeasurementCta rating={<GoogleRating />} /></div><div className="stack ds-section-block"><Notice tone="success">Primer uspeha: poruka je uspešno poslata.</Notice><Notice tone="error">Primer greške: proverite označeno polje.</Notice><Notice>Tab tasterom proverite fokus na dugmadima, linkovima i poljima.</Notice></div></section>

      <section className="ds-section" id="form"><Title number="06">Contact form</Title><FormDemo /></section>
      <section className="ds-section" id="motion"><Title number="07">Motion & interaction</Title><div className="content-flow"><p>Shared timing roles: feedback 160ms, disclosure 240ms, media 300ms. All use the easing token and become immediate with reduced motion. The banner can be paused and also stops while its content has focus, on hover, in hidden tabs and with reduced motion.</p><p>Calculator choices, product colors and gallery tabs have no hover color effect. Selection and keyboard focus remain visible. Menu icons crossfade without scaling. The desktop dropdown has a local 100ms pointer-leave grace period; it stays open while keyboard focus is inside.</p><p>Use Tab, Shift+Tab and Escape on the header above. Public gallery tabs also support arrow keys, Home and End; the lightbox contains focus and restores it on close. The form demo above tests empty, error, success and slow responses locally.</p></div></section>
      <footer className="ds-footer text-small">© 2026 Insecto Komarnici. Sva prava zadržana.</footer>
    </Container></main>
  </>;
}
