"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Close, ZoomIn } from "@carbon/icons-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container, Heading } from "@/components/ui/layout";

const galleryItems = [
  { id: "plise-3324", title: "Plise komarnici", category: "PLISE KOMARNICI", image: "/images/gallery-plise-komarnik.jpg" },
  { id: "plise-3307", title: "Plise komarnici", category: "PLISE KOMARNICI", image: "/images/gallery-3307.jpg" },
  { id: "plise-3609", title: "Plise komarnici", category: "PLISE KOMARNICI", image: "/images/gallery-3609.jpg" },
  { id: "plise-3612", title: "Plise komarnici", category: "PLISE KOMARNICI", image: "/images/gallery-3612.jpg" },
  { id: "plise-3663", title: "Plise komarnici", category: "PLISE KOMARNICI", image: "/images/gallery-3663.jpg" },
  { id: "rolo-5890", title: "Rolo komarnici", category: "ROLO KOMARNICI", image: "/images/gallery-5890.jpg" },
  { id: "plise-6902", title: "Plise komarnici", category: "PLISE KOMARNICI", image: "/images/gallery-6902.jpg" },
  { id: "rolo-porch", title: "Rolo komarnici", category: "ROLO KOMARNICI", image: "/images/gallery-rolo-porch.jpg" },
];

export function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const backdropPointerDown = useRef(false);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isLightboxOpen = activeIndex !== null;

  const updateScrollState = useCallback(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
    setCanScrollPrevious(gallery.scrollLeft > 1);
    setCanScrollNext(gallery.scrollLeft < maxScrollLeft - 1);
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    updateScrollState();
    gallery.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(gallery);
    return () => {
      gallery.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isLightboxOpen || !dialog) return;

    const trigger = document.activeElement;
    dialog.showModal();
    return () => {
      dialog.close();
      if (trigger instanceof HTMLElement) trigger.focus({ preventScroll: true });
    };
  }, [isLightboxOpen]);

  function scrollGallery(direction: -1 | 1) {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    const firstCard = gallery.firstElementChild;
    if (!(firstCard instanceof HTMLElement)) return;

    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
    const step = firstCard.offsetWidth + gap;
    const currentPosition = gallery.scrollLeft / step;
    const nextPosition = direction > 0
      ? Math.floor(currentPosition + 0.01) + 1
      : Math.ceil(currentPosition - 0.01) - 1;
    gallery.scrollTo({ left: Math.max(0, nextPosition * step), behavior });
  }

  function changePhoto(direction: -1 | 1) {
    setActiveIndex((current) => current === null ? null : (current + direction + galleryItems.length) % galleryItems.length);
  }

  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];

  return (
    <section className="section gallery-section" id="gallery" aria-labelledby="gallery-title">
      <Container>
        <div className="section-inner">
          <div className="section-intro stack">
            <Heading as="h2" size="section" id="gallery-title">Galerija komarnika</Heading>
          </div>
          <div className="gallery-frame">
            <div ref={galleryRef} className="gallery-grid" id="gallery-photos" role="region" aria-label="Fotografije ugrađenih komarnika" tabIndex={0}>
              {galleryItems.map(({ id, title, category, image }, index) => (
              <div className="gallery-item" key={id}>
                <button className="gallery-card" type="button" aria-label={`Otvori fotografiju ${index + 1} od ${galleryItems.length}: ${title}`} aria-haspopup="dialog" onClick={() => setActiveIndex(index)}>
                  <span className="gallery-media">
                    <Image
                      src={image}
                      alt={`${title} na prozoru ili vratima`}
                      fill
                      sizes="(min-width: 64rem) 33vw, (min-width: 48rem) 50vw, 100vw"
                    />
                    <span className="gallery-overlay" aria-hidden="true" />
                    <span className="gallery-caption" aria-hidden="true">
                      <span className="gallery-caption-category">{category}</span>
                      <span>{title}</span>
                    </span>
                    <span className="gallery-zoom" aria-hidden="true"><ZoomIn /></span>
                  </span>
                </button>
              </div>
              ))}
            </div>
            <div className="gallery-controls" aria-label="Listanje galerije">
              <button className="gallery-control" type="button" aria-label="Prethodne fotografije" aria-controls="gallery-photos" disabled={!canScrollPrevious} onClick={() => scrollGallery(-1)}>
                <ChevronLeft aria-hidden="true" />
              </button>
              <button className="gallery-control" type="button" aria-label="Sledeće fotografije" aria-controls="gallery-photos" disabled={!canScrollNext} onClick={() => scrollGallery(1)}>
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Container>
      <dialog
        ref={dialogRef}
        className="gallery-lightbox"
        aria-labelledby="gallery-lightbox-title"
        onCancel={() => setActiveIndex(null)}
        onPointerDown={(event) => { backdropPointerDown.current = event.target === event.currentTarget; }}
        onClick={(event) => {
          if (backdropPointerDown.current && event.target === event.currentTarget) setActiveIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            changePhoto(event.key === "ArrowLeft" ? -1 : 1);
          }
          if (event.key === "Tab") {
            const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button");
            const first = buttons[0];
            const last = buttons[buttons.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }
        }}
      >
        {activeItem && (
          <div className="gallery-lightbox-panel">
            <div className="gallery-lightbox-header">
              <h3 id="gallery-lightbox-title">{activeItem.title}</h3>
              <button className="gallery-control" type="button" aria-label="Zatvori fotografiju" onClick={() => setActiveIndex(null)}>
                <Close aria-hidden="true" />
              </button>
            </div>
            <div className="gallery-lightbox-media">
              <Image key={activeItem.id} src={activeItem.image} alt={`${activeItem.title} na prozoru ili vratima`} fill sizes="(min-width: 48rem) 45rem, 100vw" loading="eager" />
            </div>
            <div className="gallery-lightbox-controls">
              <button className="gallery-control" type="button" aria-label="Prethodna fotografija" onClick={() => changePhoto(-1)}>
                <ChevronLeft aria-hidden="true" />
              </button>
              <span className="gallery-lightbox-count" role="status" aria-live="polite" aria-atomic="true">
                <span className="sr-only">Fotografija </span>{activeIndex! + 1} / {galleryItems.length}
              </span>
              <button className="gallery-control" type="button" aria-label="Sledeća fotografija" onClick={() => changePhoto(1)}>
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
