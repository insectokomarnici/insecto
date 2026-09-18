"use client";

import { ChevronDown } from "@carbon/icons-react";
import type { Product } from "@/lib/products";

export function ProductAccordions({ product }: { product: Product }) {
  return (
    <div className="product-card-accordions">
      {product.accordions.map((item) => (
        <details className="product-accordion" key={item.title}>
          <summary>
            <span>{item.title}</span>
            <ChevronDown aria-hidden="true" />
          </summary>
          <div className="product-accordion-content"><p>{item.body}</p></div>
        </details>
      ))}
    </div>
  );
}
