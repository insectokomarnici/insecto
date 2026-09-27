import type { Metadata } from "next";
import Image from "next/image";
import { Brush, CheckShield, Envelope, Message, Ruler } from "@boxicons/react";
import { ArrowRight, PhoneFilled } from "@carbon/icons-react";
import { GoogleRating } from "@/components/google-rating";
import { AboutTeamNote } from "@/components/about-team-note";
import { ProcessSection } from "@/components/process-section";
import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ButtonLink, TextLink } from "@/components/ui/button";
import { Container, Heading, Section } from "@/components/ui/layout";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "O nama — Insecto tim",
  description: "Upoznaj Insecto Komarnici: tim iz Novog Sada posvećen komarnicima po meri, pažljivoj ugradnji i podršci nakon montaže.",
  robots: { index: false, follow: false },
};

const commitments = [
  {
    title: "Savet pre odluke",
    body: "Slušamo šta ti je potrebno i predlažemo komarnik koji odgovara tvom prostoru i načinu života. Tu smo da odgovorimo na pitanja i olakšamo ti izbor.",
    Icon: Message,
  },
  {
    title: "Pažljivo prema tvom domu",
    body: "Koristimo profesionalne alate, vodimo računa o detaljima i ostavljamo prostor uredan. Ako posle posla treba uzeti metlu u ruke, i to je deo našeg posla.",
    Icon: Brush,
  },
  {
    title: "Tu smo i posle ugradnje",
    body: "Na sve proizvode dajemo 2 godine garancije. Možeš da nam se obratiš za dodatnu podršku ili ako se nešto neplanirano desi.",
    Icon: CheckShield,
  },
];

const projects = [
  {
    src: "/images/gallery-3307.jpg",
    alt: "Antracit plise komarnik postavljen na otvorenom prozoru",
    caption: "Plise komarnik za prozor",
  },
  {
    src: "/images/gallery-6902.jpg",
    alt: "Plise komarnik po meri na balkonskim vratima",
    caption: "Plise komarnik za vrata",
  },
];

export default function AboutV1Page() {
  return (
    <div>
      <div className="site-chrome">
        <SiteBanner />
        <SiteHeader />
      </div>
      <main id="main" className={styles.page}>
        <Section aria-labelledby="about-v1-title">
          <header className="section-intro stack">
            <Heading as="h1" size="hero" id="about-v1-title">O nama</Heading>
            <p>Komarnici po meri. Ljudi na koje možeš da računaš.</p>
          </header>

          <div className={styles.story}>
            <div className={styles.copy}>
              <Heading as="h2" size="section">Samo komarnici.<br />Svaki dan.</Heading>
              <div className="stack text-body">
                <p>Zdravo 👋, mi smo Insecto Komarnici. Bavimo se jednom stvari: komarnicima. Naš cilj je da ti olakšamo svakodnevicu i pomognemo da uživaš u svom domu bez insekata. Pogotovo u Novom Sadu, gde oni nemaju milosti.</p>
                <p>Naš tim broji petoro ljudi — tehničare, kreativce i administrativce. Različite uloge, ali isti cilj: da budeš zadovoljan, od prvog razgovora do završene ugradnje.</p>
              </div>
              <AboutTeamNote />
            </div>
            <figure className={styles.teamFigure}>
              <div className="about-image">
                <Image
                  src="/images/insecto-team.avif"
                  alt="Dvojica članova Insecto tima"
                  fill
                  preload
                  sizes="(min-width: 80rem) 36rem, (min-width: 64rem) 46vw, (min-width: 48rem) 38rem, 100vw"
                />
              </div>
              <figcaption>Insecto Komarnici · Novi Sad</figcaption>
            </figure>
          </div>
        </Section>

        <Section aria-labelledby="about-v1-approach-title">
          <div className={styles.approach}>
            <figure className={styles.installationFigure}>
              <div className={styles.installationImage}>
                <Image
                  src="/hero-montaza.webp"
                  alt="Član Insecto tima ugrađuje komarnik na drvenom objektu"
                  fill
                  sizes="(min-width: 80rem) 34rem, (min-width: 64rem) 44vw, (min-width: 48rem) 38rem, 100vw"
                />
              </div>
              <figcaption>Od uzimanja mera do poslednjeg šrafa.</figcaption>
            </figure>
            <div className={styles.approachCopy}>
              <div className="stack">
                <Heading as="h2" size="section" id="about-v1-approach-title">Važno nam je kako se posao uradi</Heading>
                <p>Komarnik je mali deo doma. Način na koji biramo, ugrađujemo i brinemo o njemu pravi razliku.</p>
              </div>
              <ul className={styles.commitments}>
                {commitments.map(({ title, body, Icon }) => (
                  <li className={styles.commitment} key={title}>
                    <span className={styles.icon}><Icon aria-hidden="true" /></span>
                    <div className={styles.commitmentCopy}>
                      <Heading as="h3" size="card">{title}</Heading>
                      <p>{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <ProcessSection />

        <Section aria-labelledby="about-v1-work-title">
          <div className={styles.workLayout}>
            <div className={styles.copy}>
              <Heading as="h2" size="section" id="about-v1-work-title">Svaki prostor ima svoje mere</Heading>
              <p>Za prozor, vrata ili terasu biramo rešenje prema otvoru i načinu na koji ga koristiš. Izrađujemo fiksne, rolo i plise komarnike po meri.</p>
              <p>Ovo su neki od naših završenih radova. Više primera možeš da pogledaš u galeriji.</p>
              <TextLink href="/#gallery" className={styles.galleryLink}>Pogledaj naše radove <ArrowRight aria-hidden="true" /></TextLink>
            </div>
            <div className={styles.projects}>
              {projects.map(({ src, alt, caption }) => (
                <figure className={styles.projectFigure} key={src}>
                  <div className={styles.projectImage}>
                    <Image src={src} alt={alt} fill sizes="(min-width: 80rem) 22rem, (min-width: 64rem) 28vw, 46vw" />
                  </div>
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Section>

        <section className="section" aria-labelledby="about-v1-contact-title">
          <Container>
            <div className={styles.contactPanel}>
              <div className={styles.contactCopy}>
                <span className={styles.icon}><Ruler aria-hidden="true" /></span>
                <Heading as="h2" size="section" id="about-v1-contact-title">Hajde da se čujemo</Heading>
                <p>Nisi siguran koji ti odgovara? Pozovi nas ili pošalji upit. Saslušaćemo šta ti je potrebno i dogovoriti sledeći korak.</p>
              </div>
              <div className={styles.contactActions}>
                <div className={styles.buttons}>
                  <ButtonLink size="large" href="tel:+381611321324"><PhoneFilled aria-hidden="true" />Zakaži merenje</ButtonLink>
                  <ButtonLink size="large" variant="secondary" href="/kontakt"><Envelope aria-hidden="true" />Pošalji upit</ButtonLink>
                </div>
                <GoogleRating />
                <p className="text-small">Tu smo svakog radnog dana, od 8h do 20h.</p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
