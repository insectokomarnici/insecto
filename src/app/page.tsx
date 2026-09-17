import type { Metadata } from "next";
import { PhoneFilled } from "@carbon/icons-react";
import { SiteBanner } from "@/components/site-banner";
import { SiteHeader } from "@/components/site-header";
import { Badge, Container, Heading } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Insecto Komarnici",
  description: "Izrada i ugradnja komarnika po meri.",
  robots: { index: false, follow: false },
};

export default function Home() {
  return <>
    <SiteBanner />
    <SiteHeader />
    <main id="main">
      <section className="hero-section">
        <Container>
          <div className="hero-grid">
            <div className="hero-copy stack">
              <Badge>Komarnici po meri</Badge>
              <Heading as="h1" size="hero">Svež vazduh bez insekata.</Heading>
              <p className="text-lead prose-width">Izrada i ugradnja komarnika za prozore i vrata, prilagođenih vašem prostoru.</p>
              <div className="hero-actions">
                <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />Pozovite nas</ButtonLink>
              </div>
            </div>
            <div className="hero-panel" aria-label="Vrste komarnika u ponudi">
              <p className="text-small">Naša ponuda</p>
              <ul className="hero-list">
                <li>Plise komarnici</li>
                <li>Fiksni komarnici</li>
                <li>Rolo komarnici</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
  </>;
}
