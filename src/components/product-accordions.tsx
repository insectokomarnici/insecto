"use client";

import { ChevronDown } from "@boxicons/react";
import { cn } from "@/lib/cn";
import { useAnimatedDisclosure } from "@/lib/use-animated-disclosure";
import type { Product } from "@/lib/products";

function ProductAccordionItem({ item, id }: { item: Product["accordions"][number]; id: string }) {
  const { isOpen, isClosing, contentRef, toggle, onTransitionEnd } = useAnimatedDisclosure<HTMLDivElement>();
  const summaryId = `${id}-summary`;

  return (
    <details className={cn("product-accordion", isOpen && "is-open", isClosing && "is-closing")} open={isOpen || isClosing}>
      <summary id={summaryId} aria-expanded={isOpen && !isClosing} aria-controls={id} onClick={(event) => { event.preventDefault(); toggle(); }}>
        <span>{item.title}</span>
        <ChevronDown aria-hidden="true" />
      </summary>
      <div ref={contentRef} id={id} className="product-accordion-content" role="region" aria-labelledby={summaryId} onTransitionEnd={onTransitionEnd}><div className="product-accordion-content-inner">{item.body.split(/\r?\n\r?\n+/).map((paragraph, index) => <p key={`${id}-${index}`}>{paragraph}</p>)}</div></div>
    </details>
  );
}

export function ProductAccordions({ product }: { product: Product }) {
  return (
    <div className="product-card-accordions">
      {product.accordions.map((item, index) => <ProductAccordionItem key={item.title} item={item} id={`accordion-${product.slug}-${index}`} />)}
    </div>
  );
}
