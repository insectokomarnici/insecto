import { Container, Heading } from "@/components/ui/layout";

const galleryItems = [
  "Plise komarnici",
  "Rolo komarnici",
  "Fiksni komarnici",
  "Komarnici za prozore",
  "Komarnici za vrata",
  "Komarnici po meri",
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
            {galleryItems.map((item, index) => (
              <figure className={`gallery-item gallery-item-${index + 1}`} key={item}>
                <div className="gallery-placeholder" role="img" aria-label={`Placeholder fotografija: ${item}`}>
                  <span>Fotografija u pripremi</span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
