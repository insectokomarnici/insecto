import type { Metadata } from "next";
import { SiteBanner } from "@/components/site-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Container, Heading } from "@/components/ui/layout";

export const metadata: Metadata = {
  title: "Uslovi korišćenja",
  description: "Uslovi korišćenja sajta Insecto Komarnici.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    id: "koriscenje-sajta",
    title: "Korišćenje sajta",
    paragraphs: [
      "Slažete se da ćete koristiti sajt isključivo u skladu sa zakonom i na način koji neće ugroziti prava drugih korisnika, niti ograničiti ili ometati njihovu upotrebu sajta. Takođe, prihvatate ove uslove korišćenja i pridržavate se svih relevantnih zakona i propisa.",
      "Slažete se da nećete menjati, prilagođavati ili stvarati nove sadržaje na osnovu bilo kog dela sajta.",
      "Korisnicima koji su registrovani na našem sajtu, s vremena na vreme možemo ograničiti pristup određenim delovima sajta, ili čak celom sajtu. Ako koristite korisnički identifikacioni kod, lozinku ili bilo koju drugu informaciju u okviru sigurnosnog procesa, obavezni ste da te podatke čuvate kao poverljive i ne delite ih sa trećim stranama. U slučaju da prekršite bilo koji od uslova korišćenja, Insecto zadržava pravo da blokira vaš identifikacioni kod ili lozinku, bilo da ste ih sami odabrali ili vam ih je dodelio Insecto.",
      "Ukoliko imate manje od 18 godina, molimo vas da prethodno pribavite dozvolu od roditelja ili staratelja pre nego što koristite interaktivne opcije sajta, kao što su prenos ili učitavanje sadržaja. Preporučujemo vam da ne delite lične podatke, kao što su broj telefona, kućna adresa ili e-mail adresa.",
      "Sajt održavamo i kontrolišemo iz Srbije, te sadržaj na sajtu možda nije dostupan ili pogodan za korišćenje u drugim teritorijama. Ako pristupate sajtu izvan Srbije, odgovorni ste da se pridržavate svih važećih zakona i propisa koji važe u vašoj zemlji.",
    ],
  },
  {
    id: "intelektualna-svojina",
    title: "Prava intelektualne svojine",
    paragraphs: [
      "Svi materijali dostupni na ovom sajtu, uključujući, ali ne ograničavajući se na informacije, podatke, tekstove, dokumente, grafikone, logotipe, slike, fotografije, video snimke, podkaste, blogove, softver, interaktivne opcije, reklame i druge sadržaje, zaštićeni su autorskim pravima, zaštitnim znakovima, pravima na podatke i drugim pravima intelektualne svojine. Ovi materijali pripadaju nama ili su licencirani od strane nas, ili ih koristimo na način koji je u skladu sa važećim zakonima i propisima.",
      "Ništa u vezi sa sadržajem ovog sajta neće se smatrati kao implicitna dodela prava, licenca ili dozvola za korišćenje bilo kog materijala osim onih koji su jasno dozvoljeni uslovima korišćenja sajta.",
      "Kao što je posebno naznačeno na sajtu, saglasni ste da nećete kopirati, čuvati u bilo kojem mediju, uključujući druge veb-sajtove, distribuirati, prenositi, ponovo emitovati, ponovo objavljivati, modifikovati ili javno prikazivati bilo koji deo ovog sajta bez naše prethodne pisane dozvole, u skladu sa autorskim pravima.",
    ],
  },
  {
    id: "pouzdanost-informacija",
    title: "Pouzdanost informacija na sajtu",
    paragraphs: [
      "Svi podaci i informacije objavljeni na ovom sajtu pruženi su isključivo u svrhe opštih informacija i ne treba ih smatrati kao stručni savet. Ne garantujemo tačnost, potpunost ili sigurnost bilo kog materijala, i oslobađamo se odgovornosti za bilo kakve posledice koje mogu nastati usled oslanjanja na bilo koji sadržaj sa ovog sajta od strane posetilaca ili korisnika.",
      "Takođe, potvrđujete da prilikom korišćenja sajta možete biti izloženi materijalu koji dolazi iz različitih izvora, i da Insecto ne snosi odgovornost za sadržaj, tačnost, pouzdanost ili sigurnost tih materijala.",
      "Trudimo se da sajt bude redovno ažuriran, ali zadržavamo pravo da izmenimo njegov sadržaj u bilo kom trenutku. Možemo, takođe, privremeno ili trajno obustaviti pristup sajtu, ili ga zatvoriti po sopstvenoj odluci. Materijali na sajtu mogu postati zastareli, i nemamo obavezu da ih redovno ažuriramo.",
    ],
  },
  {
    id: "odricanje",
    title: "Odricanje od odgovornosti",
    paragraphs: [
      "Sajt radi po principu „kakav jeste“ i „kakav je dostupan“ bez ikakvog predstavljanja ili odobrenja. U najvećoj meri koju dozvoljava važeći zakon, odričemo se svih garancija i bilo kakvih uslova, izraženih i implicitnih, u vezi sa sajtom i vašim korišćenjem istog, uključujući, bez ograničenja, zadovoljavajući kvalitet, pogodnost za određenu svrhu, nepovredivost, kompatibilnost, bezbednost i tačnost.",
      "Ne garantujemo da će funkcije sadržane u materijalu na sajtu biti bez grešaka, da će bilo koji defekti biti ispravljeni, niti da će sajt ili serveri koji ga podržavaju biti uvek dostupni i bez virusa.",
      "Korišćenje sajta i svih materijala na njemu vrši se potpuno na vaš rizik.",
      "U najvećoj meri dozvoljenoj zakonom, izričito isključujemo bilo kakvu odgovornost za bilo koju direktnu, indirektnu, posledičnu, specijalnu ili izuzetnu štetu ili gubitak koji proističe iz ili je u vezi sa korišćenjem sajta, uključujući povredu ili štetu na osobama ili imovini, gubitak podataka, prihoda, poslovanja, ugovora, prilika ili očekivanih ušteda, utrošeno vreme, kao i gubitak dobre volje ili narušavanje reputacije.",
      "Ovo isključenje ne odnosi se na odgovornost za smrt ili telesne povrede nastale usled našeg nemara, prevare, lažnog predstavljanja ili lažnog tumačenja kao osnovnog razloga, niti na bilo koju drugu odgovornost koja se ne može isključiti ili ograničiti u skladu sa primenljivim zakonima i propisima. Nećemo biti odgovorni za bilo kakvo kršenje ovih uslova prouzrokovano okolnostima koje su van naše kontrole.",
    ],
  },
  {
    id: "odsteta",
    title: "Pravo na odštetu",
    paragraphs: [
      "Pristajete da nas i bilo kog našeg službenika, direktora, zaposlenog, agenta, predstavnika, imaoca licence, dobavljača i provajdera operativnih usluga obeštetite na zahtev od bilo koje i sve tvrdnje, akcije, postupke, zahteve, štete, gubitke, obaveze, troškove i izdatke koje smo pretrpeli kao rezultat vašeg korišćenja sajta, osim u slučaju kada je takva šteta uzrokovana kršenjem ovih uslova, ili bilo kog važećeg zakona i propisa.",
    ],
  },
  {
    id: "virusi-hakovanje",
    title: "Virusi, hakovanje i drugi prekršaji",
    paragraphs: [
      "Ne smete zloupotrebiti sajt tako što ćete unositi, prenositi ili slati bilo kakve viruse, maliciozne fajlove, Trojance (Trojan Horse), crve (Worm), vremenske ili logičke bombe, keystroke loggere, spajver (Spyware), adver (Adware) ili bilo koji drugi materijal dizajniran da negativno utiče na rad kompjuterskog softvera, hardvera ili telekomunikacione opreme, ili da presreće ili preuzima podatke i lične informacije.",
      "Takođe, ne smete pokušavati da dobijete neautorizovani pristup sajtu, serveru na kojem se nalazi, niti bilo kojem serveru, računaru ili bazi podataka povezanim sa ovim sajtom. Nije dozvoljeno napadanje sajta putem odbijanja usluge (DoS), distribuiranog odbijanja usluge (DDoS) ili bilo kakvog drugog napada.",
      "Svako kršenje ovih odredbi smatra se krivičnim prekršajem. U slučaju takvog prekršaja, bićemo prinuđeni da obavestimo nadležne vlasti i sarađujemo sa njima kako bismo otkrili vaš identitet. U slučaju ovakvog prekršaja, vaša prava na korišćenje sajta biće odmah suspendovana.",
      "Nećemo snositi odgovornost za bilo kakav gubitak ili štetu nastalu zbog DDoS napada, virusa ili drugih štetnih tehničkih materijala koji mogu inficirati vašu računarsku opremu, računarske programe, podatke ili druge materijale tokom korišćenja sajta, preuzimanja materijala sa sajta ili sa sajtova povezanih sa našim.",
    ],
  },
  {
    id: "linkovi-treca-lica",
    title: "Linkovi ka sajtovima trećih lica",
    paragraphs: [
      "Insecto ne kontroliše sadržaj niti dostupnost sajtova trećih lica na koje možete pristupiti putem našeg sajta. Ove veze su pružene isključivo za vašu informaciju. Ukoliko odlučite da posetite bilo koji od tih sajtova, to radite na sopstveni rizik. Odgovornost je vaša da preduzmete odgovarajuće mere zaštite kako biste se osigurali od virusa i drugih destruktivnih elemenata.",
      "Ne odobravamo, niti snosimo odgovornost, direktno ili indirektno, za bilo koji sadržaj, reklame, proizvode, usluge, recenzije ili informacije koje su dostupne na sajtu treće strane, niti za bilo kakvu štetu, gubitak ili prekršaj koji je nastao ili je povezan sa vašim pristupom i korišćenjem sajta treće strane i bilo kojih usluga. Svi uslovi, garancije ili izjave u vezi sa poslovanjem na sajtu treće strane odnose se isključivo na vas i relevantnog provajdera tog sajta i/ili bilo koje relevantne usluge.",
    ],
  },
  {
    id: "linkovi-nas-sajt",
    title: "Linkovi ka našem sajtu",
    paragraphs: [
      "Možete se povezati sa naslovnom stranicom našeg sajta, ali pod uslovom da to radite na način koji je u skladu sa zakonom i koji ne šteti našoj reputaciji niti je zloupotrebljava. Ne smete uspostaviti vezu koja može stvoriti utisak bilo kakve veze, podrške, odobravanja ili preporuke sa naše strane, ukoliko takva povezanost ne postoji.",
      "Veze ka našem sajtu ne podrazumevaju naše odobravanje, niti znači da smo na bilo koji način povezani sa sajtom sa kojeg se linkujete, niti da taj sajt ima pravo da koristi bilo koji naš zaštitni znak, brend, logo, simbol autorskih prava ili prava naših saradnika i licencnih imalaca.",
      "Naš sajt ne sme biti u okviru bilo kog drugog sajta. Ne smete postavljati linkove ka bilo kojem delu našeg sajta, osim na naslovnu stranicu, bez prethodne pismene saglasnosti. Zadržavamo pravo da u bilo kom trenutku povučemo dozvolu za povezivanje bez prethodnog upozorenja. Sajt sa kojeg postavljate link ne sme sadržavati uvredljiv, nezakonit ili netačan sadržaj.",
    ],
  },
  {
    id: "privatnost-podataka",
    title: "Privatnost podataka",
    paragraphs: [
      "Vaša privatnost nam je veoma važna. Sve lične informacije koje nam pružite tokom procesa registracije i/ili drugih interakcija na sajtu biće prikupljene, sačuvane i korišćene u skladu sa našom Politikom privatnosti. Korišćenjem sajta, saglasni ste sa ovim pristupom i garantujete da su sve informacije koje ste dostavili tačne.",
    ],
  },
  {
    id: "redosled-vaznosti",
    title: "Redosled važnosti",
    paragraphs: [
      "U slučaju neslaganja između ovih uslova i specifičnih uslova koji se odnose na određeni materijal na sajtu, primeniće se specifični uslovi koji se odnose na taj materijal.",
    ],
  },
  {
    id: "delimicna-nistavnost",
    title: "Delimična ništavnost",
    paragraphs: [
      "Ovi uslovi se tumače i primenjuju u skladu sa zakonima Republike Srbije. Ukoliko bilo koji od ovih uslova bude proglašen ništavnim, nezakonitim ili nevažećim ili na bilo koji način neprimenjivim prema zakonima Republike Srbije, taj uslov će biti odvojen i izbrisan iz ovih uslova, dok će preostali uslovi ostati u punoj snazi i efikasnosti, nastavljajući da budu obavezujući.",
    ],
  },
  {
    id: "resavanje-sporova",
    title: "Rešavanje sporova",
    paragraphs: [
      "Svi sporovi koji nastanu ili su u vezi sa korišćenjem sajta biće rešavani isključivo pred nadležnim sudovima Republike Srbije. Ako se ne slažete sa ovim uslovima, molimo vas da ne pristupate niti koristite ovaj sajt.",
    ],
  },
];

export default function UsloviKoriscenjaPage() {
  return (
    <>
      <div className="site-chrome">
        <SiteBanner />
        <SiteHeader />
      </div>
      <main id="main">
        <section className="section legal-section" aria-labelledby="terms-title">
          <Container>
            <div className="legal-layout">
              <header className="legal-intro">
                <Heading as="h1" size="hero" id="terms-title">Uslovi korišćenja</Heading>
                <p className="text-body">Insecto zadržava pravo da u bilo kom trenutku i bez prethodne najave izmeni uslove korišćenja sajta. Preporučujemo vam da redovno proveravate ove uslove kako biste bili u toku sa svim izmenama. Vaš nastavak korišćenja sajta nakon što dođe do izmena uslova smatraće se vašim prihvatanjem tih izmena i obavezno ćete ih poštovati.</p>
              </header>
              <article className="legal-content">
                {sections.map((section) => (
                  <section className="legal-block" key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                    <Heading as="h2" size="card" id={`${section.id}-title`}>{section.title}</Heading>
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </section>
                ))}
                <section className="legal-block" id="kontakt" aria-labelledby="terms-contact-title">
                  <Heading as="h2" size="card" id="terms-contact-title">Kontaktirajte nas</Heading>
                  <p>Ukoliko imate bilo kakvih pitanja ili nedoumica u vezi sa našim Uslovima korišćenja, slobodno nas kontaktirajte putem e-maila na: <a className="text-link" href="mailto:kontakt@insecto.rs">kontakt@insecto.rs</a>. Tu smo da vam pomognemo!</p>
                </section>
              </article>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
