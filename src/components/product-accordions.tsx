"use client";

import { ChevronDown } from "@carbon/icons-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { cn } from "@/lib/cn";
import { MOTION_TRANSITION_DURATION_MS } from "@/lib/motion";
import type { Product } from "@/lib/products";

function ProductAccordionItem({ item, id }: { item: Product["accordions"][number]; id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const summaryId = `${id}-summary`;

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  function toggle(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    if (isClosing) return;

    if (!isOpen) {
      setIsOpen(true);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsOpen(false);
      return;
    }

    setIsClosing(true);
    closeTimer.current = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      closeTimer.current = null;
    }, MOTION_TRANSITION_DURATION_MS);
  }

  return (
    <details className={cn("product-accordion", isOpen && "is-open", isClosing && "is-closing")} open={isOpen || isClosing}>
      <summary id={summaryId} aria-expanded={isOpen && !isClosing} aria-controls={id} onClick={toggle}>
        <span>{item.title}</span>
        <ChevronDown aria-hidden="true" />
      </summary>
      <div id={id} className="product-accordion-content" role="region" aria-labelledby={summaryId}><p>{item.body}</p></div>
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
