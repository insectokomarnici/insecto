import { DoorOpen } from "@boxicons/react";
import { Container, Heading } from "@/components/ui/layout";
import { WindowIcon } from "@/components/ui/window-icon";

const guideItems = [
  {
    title: "Komarnici za prozore",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    Icon: WindowIcon,
  },
  {
    title: "Komarnici za vrata",
    body: "Komarnici za vrata su neizbežan deo svakog domaćinstva od ulaznih vrata do terase ili balkona, na koje se izlazi sto puta dnevno. Kafa napolju, veš na sušilici, zalivanje cveća, razgovor sa komšinicom, itd. Upravo zato je kod komarnika za vrata najvažnije da budu praktični za učestalo korišćenje. Jedna od opcija jeste komarnik vrata, koji funkcionišu slično kao sva klasična vrata. Ako ipak želiš nešto diskretnije i modernije, plise komarnik je pun pogodak. Njegova mrežica se u potpunosti skuplja u levu ili desnu stranu kada se ne koristi.",
    Icon: DoorOpen,
  },
];

export function SelectionGuideSection() {
  return (
    <section className="section selection-guide-section" aria-labelledby="selection-guide-title">
      <Container>
        <div className="selection-guide-content">
          <div className="selection-guide-heading">
            <Heading as="h2" size="section" id="selection-guide-title">Vodič za izbor komarnika</Heading>
          </div>
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
        </div>
      </Container>
    </section>
  );
}
