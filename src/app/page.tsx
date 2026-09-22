import type { Metadata } from "next";
import Image from "next/image";
import { PhoneFilled } from "@carbon/icons-react";
import { SiteBanner } from "@/components/site-banner";
import { SiteHeader } from "@/components/site-header";
import { GoogleRating, getPlaceRating } from "@/components/google-rating";
import { ProductsSection } from "@/components/products-section";
import { ProcessSection } from "@/components/process-section";
import { AboutSection } from "@/components/about-section";
import { PricingCalculator } from "@/components/pricing-calculator";
import { GallerySection } from "@/components/gallery-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCallButton } from "@/components/floating-call-button";
import { Badge, Container, Heading } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Insecto Komarnici",
  description: "Izrada i ugradnja komarnika po meri.",
  robots: { index: false, follow: false },
};

export default async function Home() {
  const placeRating = await getPlaceRating();

  return <>
    <div className="site-chrome">
      <SiteBanner />
      <SiteHeader />
    </div>
    <main id="main">
      <section className="section hero-section" aria-labelledby="hero-title">
        <Container>
          <div className="hero-content">
            <div className="hero-copy stack">
              <Badge variant="error">⛔ BUBE STOP!</Badge>
              <Heading as="h1" size="hero" id="hero-title">Komarnici Novi Sad: Prodaja i ugradnja komarnika po meri</Heading>
              <p className="hero-description prose-width">Izrada fiksnih, rolo i plise komarnika po tvojoj meri. Ceo proces, od prvog poziva do ugradnje komarnika, završavamo u roku od 3 do 5 dana. Nema čekanja nedeljama zato nas nazovi danas kako bismo izmerili tvoje prozore i vrata.</p>
              <div className="hero-cta-group">
                <div className="hero-actions">
                  <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />Zakaži merenje</ButtonLink>
                </div>
                <GoogleRating />
              </div>
            </div>
            <div className="hero-media">
              <Image
                src="/hero-montaza.webp"
                alt="Ugradnja komarnika na prozoru"
                fill
                preload
                unoptimized
                sizes="(min-width: 64rem) 42vw, 100vw"
                className="hero-image"
              />
            </div>
          </div>
        </Container>
      </section>
      <ProductsSection placeRating={placeRating} />
      <AboutSection />
      <ProcessSection />
      <PricingCalculator />
      <GallerySection />
      <FaqSection />
      <ContactSection />
    </main>
    <SiteFooter />
    <FloatingCallButton />
  </>;
}
