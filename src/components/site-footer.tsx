import Image from "next/image";
import Link from "next/link";
import { Email, Location, PhoneFilled } from "@carbon/icons-react";
import { Container } from "@/components/ui/layout";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <Link className="site-footer-logo-link" href="/" aria-label="Insecto Komarnici — početna strana">
              <Image className="site-footer-logo" src="/insecto-logo.svg" alt="Insecto Komarnici" width={112} height={27} />
            </Link>
            <p>Komarnici po meri za prozore i vrata svih dimenzija.</p>
          </div>

          <div className="site-footer-column">
            <h2 className="site-footer-heading">Kontakt</h2>
            <div className="site-footer-list site-footer-contact">
              <a href="tel:+381611321324"><PhoneFilled aria-hidden="true" /><span>061 132 1324</span></a>
              <a href="mailto:kontakt@insecto.rs"><Email aria-hidden="true" /><span>kontakt@insecto.rs</span></a>
              <span><Location aria-hidden="true" /><span>Dimitrija Bugarskog 24b, Novi Sad</span></span>
            </div>
          </div>

          <div className="site-footer-column">
            <h2 className="site-footer-heading">Informacije</h2>
            <nav className="site-footer-list site-footer-links" aria-label="Footer navigacija">
              <a href="#products">Komarnici</a>
              <a href="#about">O nama</a>
              <a href="tel:+381611321324">Kontakt</a>
            </nav>
          </div>

          <div className="site-footer-column">
            <h2 className="site-footer-heading">Zaprati nas</h2>
            <nav className="site-footer-list site-footer-links" aria-label="Društvene mreže">
              <a href="https://www.facebook.com/insectokomarnici/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.instagram.com/insecto.rs/" target="_blank" rel="noreferrer">Instagram</a>
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
