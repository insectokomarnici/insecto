import Image from "next/image";
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
  return (
    <section className="section gallery-section" id="gallery" aria-labelledby="gallery-title">
      <Container>
        <div className="section-inner">
          <div className="section-intro stack">
            <Heading as="h2" size="section" id="gallery-title">Galerija komarnika</Heading>
          </div>
          <div className="gallery-grid" role="region" aria-label="Galerija komarnika, horizontalna lista fotografija" tabIndex={0}>
            {galleryItems.map(({ id, title, category, image }) => (
              <figure className="gallery-item" key={id}>
                <div className="gallery-card">
                  <div className="gallery-media">
                    <Image
                      src={image}
                      alt={`${title} na prozoru ili vratima`}
                      fill
                      sizes="(min-width: 64rem) 33vw, (min-width: 48rem) 50vw, 100vw"
                    />
                    <div className="gallery-overlay" aria-hidden="true" />
                    <figcaption className="gallery-caption">
                      <span className="gallery-caption-category">{category}</span>
                      <span>{title}</span>
                    </figcaption>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
