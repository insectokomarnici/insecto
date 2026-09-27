import Image from "next/image";
import { Buildings, DoorOpen } from "@boxicons/react";
import { PhoneFilled } from "@carbon/icons-react";
import { Container, Heading } from "@/components/ui/layout";
import { WindowIcon } from "@/components/ui/window-icon";
import { ButtonLink } from "@/components/ui/button";
import { GoogleRating } from "@/components/google-rating";

const guideItems = [
  {
    title: "Komarnici za prozore",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    Icon: WindowIcon,
  },
  {
    title: "Komarnici za vrata",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien at sem consequat finibus, sed tincidunt erat gravida.",
    Icon: DoorOpen,
  },
  {
    title: "Komarnici za alu, pvc i drvenu stolariju",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo, felis at feugiat posuere, neque erat tincidunt sem.",
    Icon: Buildings,
  },
];

export function SelectionGuideSection() {
  return (
    <section className="section selection-guide-section" aria-labelledby="selection-guide-title">
      <Container>
        <div className="selection-guide-layout">
          <figure className="selection-guide-media">
            <Image
              src="/images/selection-guide-window.jpg"
              alt="Komarnik na prozoru"
              fill
              sizes="(min-width: 64rem) 42vw, 100vw"
            />
          </figure>
          <div className="selection-guide-copy">
            <Heading as="h2" size="section" id="selection-guide-title">Kako izabrati pravi komarnik</Heading>
            <div className="selection-guide-items">
              {guideItems.map(({ title, body, Icon }) => (
                <article className="selection-guide-item" key={title}>
                  <span className="selection-guide-icon"><Icon aria-hidden="true" /></span>
                  <div className="selection-guide-item-copy">
                    <Heading as="h3" size="card">{title}</Heading>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="selection-guide-actions">
              <div className="selection-guide-cta-group">
                <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />Zakaži merenje</ButtonLink>
                <GoogleRating />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
