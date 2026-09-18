import type { Metadata } from "next";
import Image from "next/image";
import { PhoneFilled, StopFilled } from "@carbon/icons-react";
import { SiteBanner } from "@/components/site-banner";
import { SiteHeader } from "@/components/site-header";
import { GoogleRating } from "@/components/google-rating";
import { ProductsSection } from "@/components/products-section";
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
      <section className="section hero-section" aria-labelledby="hero-title">
        <div className="hero-overlay" aria-hidden="true" />
        <Container>
          <div className="hero-content">
            <div className="hero-copy stack">
              <Badge variant="error"><StopFilled aria-hidden="true" />KOMARCI STOP!</Badge>
              <Heading as="h1" size="hero" id="hero-title">Komarnici Novi Sad: Prodaja i ugradnja komarnika po meri</Heading>
              <p className="hero-description prose-width">Izrada fiksnih, rolo i plise komarnika po tvojoj meri. Ceo proces, od prvog poziva do ugradnje komarnika, završavamo u roku od 3 do 5 dana. Nema čekanja nedeljama zato nas nazovi danas kako bismo izmerili tvoje prozore i vrata.</p>
              <div className="hero-cta-group">
                <div className="hero-actions">
                  <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />Zakaži merenje</ButtonLink>
                </div>
                <GoogleRating />
              </div>
            </div>
            <div className="hero-background" aria-hidden="true">
              <Image
                src="/hero-komarnici.png"
                alt=""
                fill
                preload
                sizes="(min-width: 64rem) 56vw, 100vw"
                className="hero-image"
              />
            </div>
          </div>
        </Container>
      </section>
      <ProductsSection />
    </main>
  </>;
}
