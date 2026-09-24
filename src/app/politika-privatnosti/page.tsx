import type { Metadata } from "next";
import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container, Heading } from "@/components/ui/layout";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description: "Informacije o prikupljanju, korišćenju i zaštiti podataka na sajtu Insecto Komarnici.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    id: "podaci",
    title: "Koje podatke prikupljamo o vama?",
    paragraphs: [
      "Tokom korišćenja naše veb stranice, Insecto može prikupljati određene informacije o vama. Pored podataka koje nam sami dostavite, prikupljamo i anonimne informacije o vašem načinu korišćenja sajta putem kolačića (cookies). Ovi podaci nisu povezani sa vašim identitetom. Više informacija o kolačićima možete pronaći u posebnom odeljku u nastavku.",
      "Kako bismo mogli da obradimo vaše zahteve i pružimo određene usluge, neophodno je da prikupimo vaše lične podatke. To može uključivati, ali nije ograničeno na: ime, prezime, adresu, e-mail adresu i broj telefona. U nekim slučajevima, možemo zatražiti i dodatne informacije za potrebe istraživanja, ali njihovo davanje nije obavezno – vi sami odlučujete koje podatke želite da podelite.",
    ],
  },
  {
    id: "koriscenje",
    title: "Kako koristimo vaše podatke?",
    paragraphs: [
      "Lične podatke koje nam dobrovoljno dostavite koristićemo za obradu vaših zahteva i narudžbina. Takođe, možemo ih upotrebiti za direktnu komunikaciju s vama, na primer, da vas obavestimo o osvajanju nagrade na nekom od naših konkursa ili da vas kontaktiramo u vezi sa vašim profilom na našem veb sajtu.",
      "Anonimne informacije koje prikupljamo koristićemo za analizu načina na koji se naš sajt upotrebljava i za izradu statističkih izveštaja o korisnicima. Takvi podaci, koji vas ne identifikuju, mogu biti iskorišćeni u marketinške i reklamne svrhe, kao i za prilagođavanje vašeg korisničkog iskustva. Više informacija o tome možete pronaći u odeljku o kolačićima (cookies).",
    ],
  },
  {
    id: "deljenje",
    title: "Sa kim delimo vaše podatke?",
    paragraphs: [
      "Ukoliko ste dali saglasnost, vaše lične podatke možemo deliti, iznajmiti ili razmenjivati sa pažljivo odabranim trećim stranama u marketinške svrhe. Takođe, vaše podatke možemo proslediti trećim stranama kako bi obradili vašu narudžbinu, ispunili zahtev ili omogućili pružanje određene usluge. U određenim situacijama, podaci mogu biti podeljeni i u svrhu pružanja ličnog saveta ili podrške.",
      "Anonimne i neidentifikujuće informacije mogu se deliti sa oglašivačima i poslovnim partnerima, uključujući podatke o prodaji i načinu korišćenja sajta. Ove informacije pomažu u optimizaciji oglasnog prostora i analizi efikasnosti poslovnih saradnji. Takođe, takve statističke podatke možemo proslediti renomiranim trećim stranama za dalju analizu ili istraživanje tržišta.",
      "Insecto zadržava pravo da otkrije lične podatke ukoliko je to neophodno radi poštovanja zakona, regulativa ili zahteva nadležnih organa. Pored toga, možemo koristiti ove podatke kako bismo zaštitili sigurnost našeg sistema i svih korisnika. Sve treće strane koje angažujemo za obradu vaših podataka obavezne su da poštuju ugovorne odredbe o zaštiti privatnosti i sigurnosti informacija, u skladu sa uslovima Politike privatnosti.",
    ],
  },
  {
    id: "zastita",
    title: "Kako štitimo vaše podatke?",
    paragraphs: [
      "Kada primimo vaše podatke, tretiramo ih s maksimalnim poštovanjem i u skladu sa zakonom i važećim propisima. Vaše informacije se čuvaju na sigurnim serverima, a primenjujemo stroge bezbednosne mere kako bismo zaštitili prikupljene podatke i osigurali njihovo sigurno čuvanje i korišćenje.",
      "Iako preduzimamo sve potrebne mere zaštite, važno je napomenuti da prenos informacija putem interneta nikada nije potpuno siguran. Insecto ulaže sve napore da zaštiti vaše lične podatke, ali ne može garantovati potpunu sigurnost informacija koje nam šaljete. Svaka razmena podataka putem interneta obavlja se na sopstveni rizik korisnika.",
      "Insecto preduzima sve neophodne mere kako bi vaši podaci bili obrađeni u skladu s najvišim međunarodnim i zakonskim standardima. Kao korisnik, imate pravo da budete informisani o tome kako se vaši podaci koriste, da im pristupite, zatražite njihovu kopiju, kao i da zahtevate ispravku, ažuriranje, brisanje ili prekid daljeg korišćenja.",
      "Za bilo koje informacije u vezi sa politikom privatnosti, ili za upućivanje zahteva za dopunu, ažuriranje, brisanje i prekid korišćenja vaših ličnih podataka, možete nas kontaktirati direktno putem e-maila: kontakt@insecto.rs. U slučaju neovlašćenog korišćenja vaših podataka, imate pravo da podnesete žalbu nadležnom državnom organu.",
    ],
  },
  {
    id: "drugi-sajtovi",
    title: "Drugi veb-sajtovi",
    paragraphs: [
      "Molimo vas da imate na umu da klikom na određene linkove ili reklame na našem veb-sajtu možete biti preusmereni na druge internet stranice, gde se pravila privatnosti mogu razlikovati od onih koja primenjuje Insecto. Pošto nemamo kontrolu nad politikama privatnosti trećih strana, preporučujemo da se upoznate s njihovim pravilima pre nego što im pružite bilo kakve lične podatke.",
      "Prilikom vaše posete, određeni podaci o pregledavanju stranica automatski se čuvaju u vidu log datoteka. Ove informacije mogu uključivati veb-sajt sa kog ste pristupili našoj stranici, vašu IP adresu, vreme i datum posete, poslate zahteve, HTTP odgovore, količinu preuzetih podataka, kao i podatke o vašem internet pretraživaču i operativnom sistemu.",
      "Neki kolačići su privremeni i brišu se nakon zatvaranja pretraživača, dok drugi ostaju sačuvani na vašem uređaju duže vreme. Možete u bilo kom trenutku onemogućiti korišćenje kolačića ili ih obrisati podešavanjem opcija u svom internet pretraživaču. Međutim, imajte na umu da bi to moglo uticati na funkcionalnost određenih delova sajta i smanjiti kvalitet korisničkog iskustva. Detaljna uputstva o upravljanju kolačićima možete pronaći u sekciji „Pomoć“ vašeg pretraživača.",
    ],
  },
  {
    id: "izmene",
    title: "Izmene naše politike privatnosti",
    paragraphs: [
      "Insecto redovno pregledava i ažurira svoju Politiku privatnosti kako bi osigurao njenu usklađenost sa važećim propisima i najboljim praksama. Sve izmene biće objavljene na ovoj stranici, tako da u svakom trenutku možete saznati koje podatke prikupljamo, na koji način ih koristimo i pod kojim uslovima ih možemo podeliti.",
    ],
  },
  {
    id: "kontakt",
    title: "Kako da nas kontaktirate?",
    paragraphs: [
      "Ukoliko imate bilo kakvih pitanja ili nedoumica u vezi sa našom Politikom privatnosti, slobodno nas kontaktirajte putem e-maila na: kontakt@insecto.rs. Tu smo da vam pomognemo!",
    ],
  },
  {
    id: "kolacici",
    title: "Kolačići (cookies)",
    paragraphs: [
      "Kolačići su mali tekstualni fajlovi koje naš veb-sajt, kao i određene treće strane, postavljaju na vaš pretraživač prilikom posete. Oni nam pomažu da vas prepoznamo prilikom svake naredne posete, omogućavajući vam lakše i personalizovanije korisničko iskustvo.",
    ],
  },
  {
    id: "koriscenje-kolacica",
    title: "Kako mi i treće strane koristimo kolačiće?",
    paragraphs: [
      "Kolačiće koristimo u različitim fazama vaše interakcije sa našim veb-sajtom. Na primer, kada prvi put posetite Insecto veb-sajt, na vaš pretraživač ćemo postaviti anonimni kolačić koji nam omogućava da vas prepoznamo prilikom sledeće posete. Takođe, kada se registrujete za neku od naših usluga, dodatni kolačići mogu biti postavljeni kako bismo olakšali vašu buduću prijavu i personalizovali vaše korisničko iskustvo.",
      "Pored toga, koristimo kolačiće za praćenje oglašavanja, kako bismo osigurali da reklame koje vidite budu relevantne i da ne budete izloženi prekomernom broju oglasa. Većinu reklama koje se pojavljuju na našem veb-sajtu postavljaju treće strane, koje mogu koristiti sopstvene kolačiće za prikupljanje anonimnih podataka o prikazivanju i interakciji sa oglasima. Ove informacije ne omogućavaju ličnu identifikaciju korisnika.",
      "Insecto takođe može sarađivati sa trećim stranama radi prikazivanja ciljnih oglasa. Kroz upotrebu kolačića, anonimni podaci o vašem pretraživanju na našem i drugim sajtovima mogu se koristiti za prikaz reklama koje su u skladu sa vašim interesovanjima. Za više informacija o onlajn oglašavanju i opcijama za isključivanje personalizovanih reklama, možete posetiti: https://www.youronlinechoices.com/opt-out-interface.",
      "Pored kolačića, koristimo i piksel-tagove koji nam omogućavaju da pratimo efikasnost oglašavanja i poslovnih saradnji sa trećim stranama. Ovi alati pomažu u prikupljanju anonimnih podataka kao što su broj prikaza oglasa, reakcije korisnika i ostvarenih kupovina. Takođe, piksel-tagovi mogu prepoznati kolačiće trećih strana i obavestiti nas o tome kako ste stigli na naš veb-sajt, omogućavajući nam da analiziramo performanse naših reklamnih kampanja.",
    ],
  },
  {
    id: "upravljanje-kolacicima",
    title: "Kako da upravljate vašim kolačićima?",
    paragraphs: [
      "Ukoliko ne želite da vaš pretraživač prihvata kolačiće, možete promeniti njegova podešavanja kako biste ih blokirali ili obrisali već sačuvane kolačiće. Međutim, imajte na umu da onemogućavanje kolačića može uticati na vaše korisničko iskustvo i prouzrokovati da određene funkcije na Insecto veb-sajtu ne rade pravilno.",
      "Neki kolačići su dizajnirani da vam olakšaju korišćenje sajta – na primer, pamćenjem vaših podataka za kontakt, kako ne biste morali da ih unosite svaki put prilikom nove narudžbine, osim ako se ti podaci ne promene.",
      "Postupak prilagođavanja privatnosti i podešavanja kolačića razlikuje se u zavisnosti od pretraživača koji koristite. Za detaljna uputstva o tome kako ih možete izmeniti, posetite sledeće veb-sajtove:",
    ],
    links: [
      { href: "https://aboutcookies.org/", label: "aboutcookies.org" },
      { href: "https://www.allaboutcookies.org/", label: "allaboutcookies.org" },
    ],
  },
];

export default function PolitikaPrivatnostiPage() {
  return (
    <>
      <div className="site-chrome">
        <SiteBanner />
        <SiteHeader />
      </div>
      <main id="main">
        <section className="section legal-section" aria-labelledby="privacy-title">
          <Container>
            <div className="legal-layout">
              <header className="legal-intro">
                <Heading as="h1" size="hero" id="privacy-title">Politika privatnosti</Heading>
                <p className="text-body">Informacije o tome koje podatke prikupljamo, kako ih koristimo i kako ih štitimo.</p>
              </header>
              <article className="legal-content">
                <section className="legal-block" aria-labelledby="privacy-overview-title">
                  <Heading as="h2" size="card" id="privacy-overview-title">Kako Insecto koristi vaše podatke</Heading>
                  <p>Ova Politika privatnosti opisuje kako Insecto prikuplja i koristi vaše podatke, kao i koji su vaši izbori u vezi sa tim podacima. Politika privatnosti se odnosi na naš veb-sajt insecto.rs.</p>
                  <p>Kada koristite naš veb-sajt, Insecto može prikupiti različite vrste podataka kako bi obradio vaše zahteve, omogućio vam bolje i personalizovano iskustvo, te unapredio kvalitet usluga. Takođe, možemo prikupljati anonimne informacije pomoću kolačića (cookies). Insecto je odgovoran za upravljanje podacima koje prikupi putem veb-sajta.</p>
                </section>
                {sections.map((section) => (
                  <section className="legal-block" key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                    <Heading as="h2" size="card" id={`${section.id}-title`}>{section.title}</Heading>
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraph}>
                        {paragraph}
                        {section.links && paragraphIndex === section.paragraphs.length - 1 ? section.links.map((link, linkIndex) => (
                          <span key={link.href}>{linkIndex === 0 ? " " : " i "}<a className="text-link" href={link.href} target="_blank" rel="noreferrer">{link.label}</a></span>
                        )) : null}
                        {section.links && paragraphIndex === section.paragraphs.length - 1 ? "." : null}
                      </p>
                    ))}
                  </section>
                ))}
              </article>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
