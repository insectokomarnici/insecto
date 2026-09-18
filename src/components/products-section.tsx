"use client";

import Image from "next/image";
import { PhoneFilled } from "@carbon/icons-react";
import { ArrowRight } from "@carbon/icons-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";
import { ProductAccordions } from "@/components/product-accordions";
import { productColors, products, type ProductColor, type Product } from "@/lib/products";

const colorSwatchClasses: Record<ProductColor, string> = {
  bela: "product-color-swatch-white",
  braon: "product-color-swatch-brown",
  antracit: "product-color-swatch-anthracite",
};

function ProductCard({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState<ProductColor>("bela");
  const selectedOption = productColors.find(({ id }) => id === selectedColor) ?? productColors[0];

  return (
    <article className="product-card">
      <div className="product-card-media">
        <Image
          src={product.images[selectedColor]}
          alt={`${product.title}, ${selectedOption.label.toLowerCase()} boja`}
          fill
          sizes="(min-width: 64rem) 33vw, (min-width: 48rem) 50vw, 100vw"
        />
      </div>
      <div className="product-card-body">
        <div className="product-card-copy stack">
          <Heading as="h3" size="card">{product.title}</Heading>
          <p className="product-card-description">{product.description}</p>
        </div>

        <div className="product-card-options">
          <p className="product-option-label">Boja</p>
          <div className="product-color-list" role="group" aria-label={`Izaberi boju za ${product.title}`}>
            {productColors.map((option) => {
              const isSelected = option.id === selectedColor;
              return (
                <button
                  key={option.id}
                  type="button"
                  className={cn("product-color-button", isSelected && "is-selected")}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedColor(option.id)}
                >
                  <span className={cn("product-color-swatch", colorSwatchClasses[option.id])} aria-hidden="true" />
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="product-card-actions">
          <ButtonLink
            size="medium"
            href="tel:+381611321324"
            aria-label={`Zakaži merenje za ${product.title}`}
          >
            <PhoneFilled aria-hidden="true" />Zakaži merenje
          </ButtonLink>
          <ButtonLink variant="secondary" size="medium" href={product.path}>
            Saznaj više<ArrowRight aria-hidden="true" />
          </ButtonLink>
        </div>
        <ProductAccordions product={product} />
      </div>
    </article>
  );
}

export function ProductsSection() {
  return (
    <section className="section products-section" id="products" aria-labelledby="products-title">
      <Container>
        <div className="section-inner">
          <div className="section-intro stack">
            <Heading as="h2" size="section" id="products-title">Komarnici po meri</Heading>
            <p className="text-body prose-width">Za prozore i vrata svih dimenzija, prilagođeni tvom prostoru.</p>
          </div>
          <div className="products-grid">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </Container>
    </section>
  );
}
