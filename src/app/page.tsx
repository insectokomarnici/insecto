import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-background" aria-hidden="true">
          <Image
            src="/hero-komarnici.png"
            alt=""
            fill
            preload
            sizes="100vw"
            className="hero-image"
          />
        </div>
        <div className="hero-overlay" aria-hidden="true" />
        <Container>
          <div className="hero-content">
            <div className="hero-copy stack">
              <Badge>Komarnici Novi Sad</Badge>
              <Heading as="h1" size="hero" id="hero-title">Komarnici Novi Sad: Prodaja i ugradnja komarnika po meri</Heading>
              <p className="hero-description prose-width">Izrada fiksnih, rolo i plise komarnika po tvojoj meri. Ceo proces, od prvog poziva do ugradnje komarnika, završavamo u roku od 3 do 5 dana. Nema čekanja nedeljama zato nas nazovi danas kako bismo izmerili tvoje prozore i vrata.</p>
              <div className="hero-actions">
                <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />Zakaži izlazak na teren</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  </>;
}
