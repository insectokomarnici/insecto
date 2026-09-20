import Image from "next/image";
import { Container, Heading } from "@/components/ui/layout";

const galleryItems = [
  { title: "Plise komarnici", category: "PLISE KOMARNICI" },
  { title: "Rolo komarnici", category: "ROLO KOMARNICI" },
  { title: "Fiksni komarnici", category: "FIKSNI KOMARNICI" },
  { title: "Komarnici za prozore", category: "KOMARNICI ZA PROZORE" },
  { title: "Komarnici za vrata", category: "KOMARNICI ZA VRATA" },
  { title: "Komarnici po meri", category: "KOMARNICI PO MERI" },
];

export function GallerySection() {
  return (
    <section className="section gallery-section" id="gallery" aria-labelledby="gallery-title">
      <Container>
        <div className="section-inner">
          <div className="section-intro stack">
            <Heading as="h2" size="section" id="gallery-title">Galerija komarnika</Heading>
          </div>
          <div className="gallery-grid">
            {galleryItems.map(({ title, category }) => (
              <figure className="gallery-item" key={title}>
                <div className="gallery-card">
                  <div className="gallery-media">
                    <Image
                      src="/images/gallery-placeholder.svg"
                      alt={`Placeholder fotografija: ${title}`}
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
