import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact-page-content";
import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktirajte Insecto Komarnici za savet, preporuku i izradu komarnika po meri.",
  robots: { index: false, follow: false },
};

export default function KontaktPage() {
  return (
    <>
      <div className="site-chrome">
        <SiteBanner />
        <SiteHeader />
      </div>
      <main id="main">
        <ContactPageContent />
      </main>
      <SiteFooter />
    </>
  );
}
