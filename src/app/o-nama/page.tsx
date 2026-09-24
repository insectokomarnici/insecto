import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about-page-content";
import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "O nama",
  description: "Upoznajte Insecto Komarnici i naš pristup izradi i ugradnji komarnika po meri.",
  robots: { index: false, follow: false },
};

export default function ONamaPage() {
  return (
    <>
      <div className="site-chrome">
        <SiteBanner />
        <SiteHeader />
      </div>
      <main id="main">
        <AboutPageContent />
      </main>
      <SiteFooter />
    </>
  );
}
