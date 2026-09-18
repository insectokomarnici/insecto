import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, PhoneFilled } from "@carbon/icons-react";
import { SiteBanner } from "@/components/site-banner";
import { SiteHeader } from "@/components/site-header";
import { ProductAccordions } from "@/components/product-accordions";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: `${product.title} | Insecto Komarnici`, description: product.description } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return <>
    <SiteBanner />
    <SiteHeader />
    <main id="main">
      <section className="section product-detail-section" aria-labelledby="product-detail-title">
        <Container>
          <div className="product-detail">
            <div className="product-detail-media">
              <Image
                src={product.images.bela}
                alt={`${product.title}, bela boja`}
                fill
                sizes="(min-width: 64rem) 50vw, 100vw"
              />
            </div>
            <div className="product-detail-copy stack">
              <p className="text-small product-detail-kicker">Komarnici po meri</p>
              <Heading as="h1" size="hero" id="product-detail-title">{product.title}</Heading>
              <p className="text-lead">{product.description}</p>
              <ButtonLink size="large" href="tel:+381611321324">
                <PhoneFilled aria-hidden="true" />Zakaži ugradnju
              </ButtonLink>
              <ProductAccordions product={product} />
              <ButtonLink variant="secondary" size="medium" href="/">
                <ArrowLeft aria-hidden="true" />Nazad na proizvode
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  </>;
}
