"use client";

import Image from "next/image";
import { PhoneFilled } from "@carbon/icons-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/button";
import { Container, Heading } from "@/components/ui/layout";

const colorOptions = [
  { id: "bela", label: "Bela", swatchClass: "product-color-swatch-white" },
  { id: "braon", label: "Braon", swatchClass: "product-color-swatch-brown" },
  { id: "antracit", label: "Antracit", swatchClass: "product-color-swatch-anthracite" },
] as const;

type ProductColor = (typeof colorOptions)[number]["id"];

const products = [
  {
    id: "plise",
    title: "Plise komarnici",
    description: "Plise ili klizni komarnici su odličan izbor za prozore, ulazna i balkonska vrata.",
    images: {
      bela: "/products/plise-komarnici-bela-boja.avif",
      braon: "/products/plise-komarnici-braon-boja.avif",
      antracit: "/products/plise-komarnici-antracit-boja.avif",
    },
  },
  {
    id: "rolo",
    title: "Rolo komarnici",
    description: "Rolo komarnici su praktičan izbor za standardne prozore i kada želiš da se mrežica skloni u kutiju.",
    images: {
      bela: "/products/rolo-komarnici-bela-boja.avif",
      braon: "/products/rolo-komarnici-braon-boja.avif",
      antracit: "/products/rolo-komarnici-antracit-boja.avif",
    },
  },
  {
    id: "fiksni",
    title: "Fiksni komarnici",
    description: "Fiksni komarnici su idealni za prozore koje koristiš za provetravanje bez potrebe za prolazom.",
    images: {
      bela: "/products/fiksni-komarnici-bela-boja.avif",
      braon: "/products/fiksni-komarnici-braon-boja.avif",
      antracit: "/products/fiksni-komarnici-antracit-boja.avif",
    },
  },
] as const;

type Product = (typeof products)[number];

function ProductCard({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState<ProductColor>("bela");
  const selectedOption = colorOptions.find(({ id }) => id === selectedColor) ?? colorOptions[0];

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
            {colorOptions.map((option) => {
              const isSelected = option.id === selectedColor;
              return (
                <button
                  key={option.id}
                  type="button"
                  className={cn("product-color-button", isSelected && "is-selected")}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedColor(option.id)}
                >
                  <span className={cn("product-color-swatch", option.swatchClass)} aria-hidden="true" />
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
            aria-label={`Zakaži ugradnju za ${product.title}`}
          >
            <PhoneFilled aria-hidden="true" />Zakaži ugradnju
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export function ProductsSection() {
  return (
    <section className="section products-section" id="products" aria-labelledby="products-title">
      <Container>
        <div className="section-inner">
          <div className="products-intro stack">
            <Heading as="h2" size="section" id="products-title">Komarnici po meri</Heading>
            <p className="text-lead prose-width">Za prozore i vrata svih dimenzija, prilagođeni tvom prostoru.</p>
          </div>
          <div className="products-grid">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </Container>
    </section>
  );
}
