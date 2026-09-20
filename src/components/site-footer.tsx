import Image from "next/image";
import Link from "next/link";
import { Email, LogoFacebook, LogoInstagram, PhoneFilled } from "@carbon/icons-react";
import { Container } from "@/components/ui/layout";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <Container>
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <Link className="site-footer-logo-link" href="/" aria-label="Insecto Komarnici — početna strana">
              <Image className="site-footer-logo" src="/insecto-logo.svg" alt="Insecto Komarnici" width={112} height={27} />
            </Link>
          </div>

          <div className="site-footer-column">
            <h2 className="site-footer-heading">Kontakt</h2>
            <div className="site-footer-list site-footer-contact">
              <a href="tel:+381611321324"><PhoneFilled aria-hidden="true" /><span>061 132 1324</span></a>
              <a href="mailto:kontakt@insecto.rs"><Email aria-hidden="true" /><span>kontakt@insecto.rs</span></a>
              <a href="https://www.facebook.com/insectokomarnici/" target="_blank" rel="noreferrer"><LogoFacebook aria-hidden="true" /><span>Facebook</span></a>
              <a href="https://www.instagram.com/insecto.rs/" target="_blank" rel="noreferrer"><LogoInstagram aria-hidden="true" /><span>Instagram</span></a>
            </div>
          </div>

          <div className="site-footer-column">
            <h2 className="site-footer-heading">Komarnici</h2>
            <nav className="site-footer-list site-footer-links" aria-label="Komarnici navigacija">
              <Link href="/plise-komarnici-novi-sad">Plise komarnici</Link>
              <Link href="/rolo-komarnici-novi-sad">Rolo komarnici</Link>
              <Link href="/fiksni-komarnici-novi-sad">Fiksni komarnici</Link>
            </nav>
          </div>

          <div className="site-footer-column">
            <h2 className="site-footer-heading">Informacije</h2>
            <nav className="site-footer-list site-footer-links" aria-label="Footer navigacija">
              <Link href="/#about">O nama</Link>
              <Link href="/#contact">Kontakt</Link>
              <Link href="/politika-privatnosti">Politika privatnosti</Link>
              <Link href="/uslovi-koriscenja">Uslovi korišćenja</Link>
            </nav>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>© 2026 Insecto Komarnici. Sva prava zadržana.</span>
          <span>Novi Sad i bliža okolina</span>
        </div>
      </Container>
    </footer>
  );
}
