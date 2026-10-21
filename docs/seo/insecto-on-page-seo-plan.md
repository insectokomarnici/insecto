# On page SEO plan za Insecto

Detaljan vodič za pripremu sajta za organsku pretragu

**Glavni ciljani upit:** komarnici Novi Sad  
**Projekat:** Insecto Komarnici  
**Datum provere:** 4. oktobar 2026.  
**Osnova pregleda:** lokalni repozitorijum, stanje na commitu `00f94ab`, i zvanična Google dokumentacija.

Ovaj dokument objašnjava šta treba da uradimo na samom sajtu da bi Google mogao da ga razume, indeksira i proceni kao koristan odgovor. Sadrži pregled trenutnog koda, konkretne predloge za Insecto, redosled implementacije i uslove za proveru završenog posla. Dokument je plan rada; opisane promene još nisu primenjene.

**Nijedna on page optimizacija ne može da garantuje prvo mesto.** Pozicija zavisi i od konkurencije, reputacije i drugih signala izvan stranice. Google ne objavljuje recept koji garantuje prvo mesto, niti garantuje indeksiranje svakog tehnički ispravnog sajta. Ovde optimizujemo ono što kontrolišemo na sajtu. [S1](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [S2](https://developers.google.com/search/docs/essentials/technical)

Pod prvim mestom u ovom dokumentu podrazumevamo organski rezultat za relevantan upit. Oglasi i rezultati na Google mapi imaju drugačije uslove prikazivanja. Optimizacija Google Business profila, kupovina oglasa, izgradnja linkova i druge aktivnosti van sajta nisu deo plana.

## Kako čitati dokument

- **P0 — uslov za SEO lansiranje:** prepreke pristupu i indeksiranju, pogrešne ili prazne javne stranice.
- **P1 — glavni posao:** sadržaj, namera pretrage, naslovi, relevantne stranice i njihovo povezivanje.
- **P2 — unapređenje:** dodatna jasnoća, prikaz u pretrazi, semantika i merena poboljšanja iskustva.
- **Opciono:** element koristan u odgovarajućem slučaju, ali nije obavezan uslov za rangiranje.

Prioriteti su radna preporuka za ovaj projekat, a ne Google ocena važnosti. Tehničke osnove koje neposredno omogućavaju prikaz stranice uključene su jer bez njih optimizacija sadržaja ne može da ostvari cilj.

## Prvih pet stvari za Insecto

1. Pred SEO lansiranje proveriti i ukloniti razvojni `noindex` sa stranica koje treba da budu javno indeksirane.
2. Završiti stranice plise, rolo i fiksnih komarnika i zameniti probni tekst u vodiču.
3. Napisati sadržaj koji jasno objašnjava ponudu, izbor, cenu, proces, garanciju i stvarnu zonu rada.
4. Uskladiti title, meta opis, glavne naslove, interne linkove i kanonske URL adrese.
5. Proveriti objavljeni HTML, mobilni prikaz, učitavanje i indeksiranje, pa meriti rezultate.

# 1 Šta je potvrđeno u sadašnjem projektu

Ovo je pregled lokalnog koda, ne izveštaj iz Search Console. Nisu potvrđeni stanje produkcije, stvarno indeksirane adrese, pozicije, obim pretrage ni rezultati brzine. Pre objavljivanja treba proveriti upravo domen koji će korisnici i Google otvarati.

| Prioritet | Nalaz u kodu | Potreban sledeći korak |
| --- | --- | --- |
| P0 pred lansiranje | `layout.tsx` i više pojedinačnih stranica imaju `index: false` i `follow: false`. | Sačuvati zaštitu tokom razvoja; pri lansiranju podesiti indeksiranje po ruti i proveriti završni HTML. |
| P0/P1 | Rute za plise, rolo i fiksne komarnike trenutno vraćaju `null`. | Završiti ih pre javnog predstavljanja kao stranica proizvoda; do tada ih ne nuditi kao završen SEO sadržaj. |
| P1 | Vodič za izbor komarnika sadrži `Lorem ipsum`. | Zameniti sva tri pasusa korisnim i proverljivim objašnjenjima. |
| P1 | Homepage title i meta opis su opšti; globalna metadata još opisuje design system. | Postaviti stvarni identitet sajta i jedinstvenu metadata za svaku glavnu stranicu. |
| P1 | Nije pronađena implementacija canonical, sitemap ili robots fajla u pregledanim izvornim fajlovima. | Definisati produkcijski domen, URL politiku, sitemap i pravila pristupa; proveriti i hosting. |
| P1 | Linkovi za proizvode u navigaciji vode na homepage sidra. | Kada detaljne stranice budu završene, povezati ih opisnim linkovima. |
| P1 | Hero navodi 3–7 dana, a FAQ 3–5 radnih dana; početak računanja roka nije jednako objašnjen. | Potvrditi stvarni rok, radne ili kalendarske dane i od kog trenutka se računa. |
| P2 | Opisi galerijskih fotografija su uglavnom generički i ponavljaju se. | Opisati ono što se stvarno vidi na svakoj važnoj fotografiji. |
| P2 | Nije pronađen JSON-LD strukturiranih podataka. | Razmotriti tačne podatke o firmi i breadcrumb putanju; ne očekivati automatske zvezdice. |

**Šta već imamo kao dobru osnovu:** H1 sa glavnom temom i lokacijom, jezik `sr-Latn`, odvojene sekcije ponude i procesa, kalkulator, sopstvene fotografije, kontakt stranicu i stranicu o timu. Postojeći dizajn ne treba menjati samo da bi sajt navodno bio „više SEO“.

**Važna napomena:** `noindex` u razvojnom projektu nije sam po sebi greška. Postaje prepreka ako ostane na završenoj produkcijskoj stranici koju želimo u pretrazi. Ne uklanjati ga naslepo sa svih ruta.

# 2 Odabir teme i namere pretrage

Stranica treba da odgovori na ono što osoba želi kada ukuca upit. Za „komarnici Novi Sad“ naša radna pretpostavka je lokalna komercijalna namera: izbor izvođača, vrste komarnika, cena, merenje i ugradnja. Pre konačnog pisanja treba pregledati aktuelne rezultate pretrage i proveriti tu pretpostavku. Ovaj dokument ne predstavlja urađenu analizu konkurentskih rezultata.

## Predložena mapa stranica

| Stranica | Glavna tema | Šta treba da rešava |
| --- | --- | --- |
| Početna `/` | Komarnici Novi Sad | Jasna lokalna ponuda, izbor proizvoda, proces i kontakt. |
| `/plise-komarnici` | Plise komarnici u Novom Sadu | Primena, način rada, ograničenja, izbor i merenje. |
| `/rolo-komarnici` | Rolo komarnici u Novom Sadu | Kada su prikladni, korišćenje, održavanje i izbor. |
| `/fiksni-komarnici` | Fiksni komarnici u Novom Sadu | Namena, postavljanje, skidanje i uslovi uklapanja. |
| `/o-nama` | Insecto Komarnici i tim | Ko stoji iza ponude i zašto mu verovati. |
| `/kontakt` | Kontakt Insecto Komarnici | Telefon, Email, radno vreme, lokacija i slanje upita. |

Ovo su tematski pravci, ne tvrdnja da znamo koliko se svaki izraz pretražuje. Ne treba praviti dodatnu `/komarnici-novi-sad` stranicu koja samo ponavlja početnu. Posebna stranica o ceni ima smisla tek ako može samostalno i detaljno da odgovori na pitanja; za sada kalkulator i objašnjenje na početnoj mogu obavljati tu ulogu.

## Koraci za istraživanje pre pisanja

1. Pregledati rezultate za glavni upit, vrste proizvoda i pitanja o ceni sa relevantnom lokacijom pretrage.
2. Zabeležiti koje potrebe rezultati pokrivaju: materijali, fotografije, dimenzije, merenje, rokovi i cena.
3. Izdvojiti pitanja koja korisnik mora da reši pre poziva, umesto prepisivanja konkurenata.
4. Svako pitanje dodeliti najprikladnijoj stranici, pa povezati srodne stranice.

Prirodno koristiti izraze „komarnici po meri“, „za prozore“, „za vrata“ i nazive proizvoda tamo gde pomažu objašnjenju. Ne postoji potrebna gustina ključne reči. Ponavljanje „komarnici Novi Sad“ u svakom pasusu, alt opisu i naslovu nije cilj. Slične stranice za svako naselje bez stvarne dodatne vrednosti nose rizik doorways sadržaja. [S19](https://developers.google.com/search/docs/essentials/spam-policies)

**Završeno kada:** svaka planirana stranica ima jasan glavni zadatak, razlikuje se od drugih i pruža stvaran razlog da korisnik na nju ode.

# 3 Istraživanje ključnih reči i preklapanje stranica

**Prioritet P1.** Tema stranice je početna odluka; izbor konkretnih upita zahteva podatke. Ne biramo samo izraz sa najvećim brojem pretraga, već upite koji odgovaraju stvarnoj ponudi i nameri potencijalnog kupca.

## Kako pravimo spisak upita

1. Početi od stvarnih proizvoda i pitanja kupaca: „komarnici Novi Sad“, „plise komarnici“, „komarnici za vrata“, „cena komarnika“ i pitanja o merenju ili održavanju.
2. Pregledati rezultate za svaki pravac i utvrditi da li dominiraju lokalne ponude, detaljne stranice proizvoda, prodavnice ili vodiči. To određuje kakav odgovor pripremamo.
3. Ako postoje Search Console podaci, izvući stvarne upite i stranice, odvojeno za Srbiju i relevantne uređaje. Procene pretrage iz drugih alata zabeležiti kao procene, sa lokacijom i periodom. [S25](https://support.google.com/webmasters/answer/7576553)
4. Grupisati izraze koji traže isto rešenje. „Cena komarnika“ i „koliko koštaju komarnici“ ne zahtevaju automatski dve stranice.
5. Za svaku grupu odrediti najprikladniji postojeći ili planirani URL i pitanja na koja mora odgovoriti.

Glavnu temu prirodno izraziti u title naslovu, H1 i uvodnom objašnjenju. Podteme koristiti u relevantnim H2/H3 naslovima i pasusima. Ne treba boldovati svaku ključnu reč, ponavljati je u svakom podnaslovu ili ubacivati nepovezane izraze sa spiska iz SEO alata.

## Kada stranice nepotrebno konkurišu jedna drugoj

**Kanibalizacija ključnih reči** je naziv za problem kada više naših stranica praktično rešava istu potrebu, a signali i sadržaj ne ukazuju jasno koja je glavna. Samo pojavljivanje dve stranice za isti upit nije dokaz problema niti automatska kazna.

Kod Insecta početna treba da predstavlja ukupnu lokalnu ponudu, dok plise stranica detaljno odgovara na pitanja o plise komarnicima. Obe smeju pominjati Novi Sad. Problem bi bio da napravimo još jednu gotovo istu početnu stranicu samo za drugačiji redosled reči.

**Provera:** u Search Console filtrirati upit, zatim pogledati karticu stranica kroz uporediv period. Ako korisnik završava na slabije odgovarajućoj stranici, proveriti sadržaj, title i interne linkove. Različite potrebe jasnije razdvojiti; suvišne duplikate po potrebi spojiti i preusmeriti. Canonical koristiti za iste ili veoma slične verzije, ne za prikrivanje dve različite korisne stranice. [S4](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

**Radni zapis za svaki URL:** ciljna potreba, glavna grupa upita, ključna pitanja, jedinstveni dokazi, title, H1, stranice koje treba da ga povezuju i osoba koja potvrđuje sadržaj. To je praktična osnova za pisanje i kasniju proveru rezultata.

# 4 Indeksiranje i tehnički uslovi za ulazak u pretragu

**Indeksiranje** znači da Google stranicu uključuje u svoj indeks; rangiranje je odluka kada i na kom mestu da je prikaže. Stranica najpre mora biti dostupna Googlebotu, vraćati odgovarajući uspešan odgovor i imati sadržaj koji može da se indeksira. Ispunjavanje tih uslova omogućava razmatranje, ali ne garantuje pojavljivanje. [S2](https://developers.google.com/search/docs/essentials/technical)

## Šta proveravamo pre objavljivanja

- Glavna stranica i završene detaljne stranice vraćaju HTTP `200`, sa stvarnim sadržajem.
- Pristup ne blokiraju prijava, firewall, razvojna zaštita ili robots pravilo.
- Nema neželjenog `noindex` u meta robots tagu ili HTTP `X-Robots-Tag` zaglavlju.
- Važan tekst i linkovi dostupni su u početnom ili renderovanom HTML-u.
- Slike, CSS i JavaScript potrebni za prikaz nisu neopravdano blokirani.

Kod Insecta treba proveriti i globalni `src/app/layout.tsx` i metadata u `page.tsx` fajlovima. **Promena samo globalnog podešavanja nije dovoljna** ako pojedinačne stranice i dalje imaju svoj `noindex`. Isto tako, promena homepage-a neće automatski rešiti kontakt i o nama.

Razvojne rute, `/design-system` i probna `/o-namav1` ne treba pustiti u indeks samo zato što menjamo globalno pravilo. Ako je nova verzija o nama prihvaćena, sadržaj ide na odabrani javni URL; probna verzija se uklanja, preusmerava kada postoji jasan naslednik ili zadržava van indeksa.

## Robots fajl i sitemap imaju različite zadatke

`robots.txt` određuje pravila obilaska. Nije pouzdan način da uklonimo adresu iz pretrage. Da bi Google video `noindex`, mora moći da obiđe stranicu; zato ne treba istovremeno blokirati obilazak i očekivati da pročita zabranu indeksiranja. [S3](https://developers.google.com/search/docs/crawling-indexing/block-indexing)

XML sitemap je preporučen spisak javnih kanonskih URL adresa. U njega ne stavljamo probne, `noindex`, preusmerene ili nepostojeće stranice, niti `#` sidra. Datum izmene treba da odražava stvarnu značajnu promenu, ne svaki deploy. Sitemap pomaže otkrivanju, ali nije uslov niti garancija visokog rangiranja. [S5](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

**Način provere:** otvoriti produkcijske URL-ove, pregledati zaglavlja i HTML, zatim koristiti Search Console URL Inspection. Uporediti proveru uživo sa poslednjom indeksiranom verzijom; to nisu isti podaci. [S26](https://support.google.com/webmasters/answer/9012289)

# 5 URL adrese i sprečavanje nepotrebnih duplikata

**Canonical** je signal o preferiranoj adresi kada postoji više istih ili veoma sličnih verzija. Google može izabrati drugu ako drugi signali nisu usklađeni. Canonical nije zamena za završavanje sadržaja niti automatsko sredstvo protiv svake konkurencije među stranicama. [S4](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

## URL politika za Insecto

1. Potvrditi glavni produkcijski domen i jednu verziju sa ili bez `www`.
2. Koristiti HTTPS i dosledno preusmeravati alternativne verzije domena.
3. Za svaku završenu javnu stranicu postaviti odgovarajući apsolutni canonical.
4. Interne linkove i sitemap uskladiti sa tim istim URL-ovima.
5. Proveriti da preview domen ili `localhost` nisu ostali u metadata.

Početna treba da pokazuje na svoj javni URL. Stranica plise komarnika treba da pokazuje na svoju adresu, a ne na početnu. Različiti proizvodi zaslužuju zasebne kanonske stranice kada imaju različit, koristan sadržaj. Varijante sa parametrima proveravamo prema tome da li zaista menjaju sadržaj ili samo služe praćenju.

Kratke i razumljive adrese kao `/plise-komarnici` su sasvim upotrebljive. Nema razloga menjati stabilne adrese samo da bismo svuda dodali „Novi Sad“. Promena URL-a zahteva obradu starih linkova i može stvoriti dodatni posao bez stvarne koristi.

## Ako novi sajt zamenjuje postojeći sajt

Pre objavljivanja napraviti popis starih javnih adresa. Za svaku odrediti da li ostaje ista, dobija stvarnog naslednika ili se ukida. Koristiti trajno preusmeravanje na najbliži relevantan novi sadržaj kada se adresa menja. Ne slati sve stare stranice na homepage. Ažurirati interne linkove, canonical i sitemap da odmah koriste nove adrese. [S27](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)

Za stranicu koja ne postoji treba vratiti odgovarajući status, a ne prazan ekran sa `200`. Isto važi za trenutne prazne rute proizvoda: pre lansiranja moraju dobiti sadržaj ili jasno definisano privremeno stanje van SEO ponude.

**Završeno kada:** svaka indeksabilna stranica ima jednu jasnu primarnu adresu, stari relevantni URL-ovi imaju plan, a testne verzije nisu ponuđene kao javni rezultati.

# 6 Title tag i meta opis

**Title tag**, često skraćeno TT, predstavlja naslov stranice u HTML-u. Google ga može koristiti za naslov rezultata, ali može napraviti i drugačiji prikaz na osnovu stranice. Naslov treba da bude specifičan, razumljiv i usklađen sa glavnim sadržajem. [S6](https://developers.google.com/search/docs/appearance/title-link)

**Meta description**, odnosno MD, jeste kratak opis namenjen objašnjenju stranice. Google može prikazati njega ili isečak iz vidljivog teksta prema konkretnom upitu. Meta opis nije direktan faktor rangiranja; dobar opis pomaže korisniku da razume rezultat i proceni da li želi da ga otvori. [S7](https://developers.google.com/search/docs/appearance/snippet), [S24](https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag)

## Preporuka za homepage

**Title:** Komarnici Novi Sad: Izrada i ugradnja komarnika po meri

Ovo je dobra, jasna verzija koja odgovara tvojoj ponudi i postojećem H1. Ponavljanje reči „komarnici“ u ovoj razumljivoj rečenici samo po sebi nije problem. Ne bih je menjao samo zbog tvrdnje da je crtica bolja od dvotačke ili da svako ponavljanje treba ukloniti.

**Alternativa sa brendom:** Komarnici Novi Sad – Izrada i ugradnja po meri | Insecto

Obe verzije su prihvatljive. Biramo jednu prema jasnoći i željenom identitetu, bez obećanja da će razlika u interpunkciji doneti bolju poziciju.

**Predlog meta opisa:**

Komarnici za prozore, vrata i terase u Novom Sadu. Izrada i ugradnja plise, rolo i fiksnih komarnika po meri. Zakaži merenje sa Insecto timom.

Ponudu za terase i sve navedene usluge zadržati samo ako su stvarno dostupne. Ne dodavati „najjeftiniji“, „najbolji“ ili cenu koju nismo potvrdili.

## Primena na ostale stranice

| Stranica | Primer jedinstvenog title naslova |
| --- | --- |
| Plise | Plise komarnici Novi Sad – Izrada po meri \| Insecto |
| Rolo | Rolo komarnici Novi Sad – Izrada i ugradnja \| Insecto |
| Fiksni | Fiksni komarnici Novi Sad – Po meri \| Insecto |
| O nama | O nama – Insecto Komarnici |
| Kontakt | Kontakt i zakazivanje merenja \| Insecto Komarnici |

Pri implementaciji proveriti globalni title template: ne sme nekontrolisano da doda još jedan brend iza već kompletno napisanog naslova. Jedinstveni opisi treba da govore o sadržaju baš te stranice, bez kopiranja homepage opisa na sve rute.

**Nema obaveznog limita od 60 ili 160 znakova.** To su orijentiri za uređivanje, ne Google pravila za rangiranje. Prikaz zavisi i od širine znakova, uređaja i izabranog isečka. Ne žrtvovati smisao da bismo ispunili navodni SEO broj. [S6](https://developers.google.com/search/docs/appearance/title-link), [S7](https://developers.google.com/search/docs/appearance/snippet)

# 7 H1 i hijerarhija naslova

H1 je glavni vidljivi naslov stranice; H2 označava velike teme, a H3 podteme. Veličina fonta je deo dizajna, dok nivo naslova opisuje strukturu dokumenta. Mali naslov kartice može biti H3, a da i dalje izgleda kao standardni podebljani tekst.

Za ovaj sajt preporučujem jedan jasan H1 po stranici radi uredne strukture i pristupačnosti. To je naša urednička konvencija, ne tvrdnja da Google automatski kažnjava svaki dokument sa više H1. Nema SEO formule zasnovane na broju naslova. [S1](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## Predložena struktura početne

- **H1:** Komarnici Novi Sad: Izrada i ugradnja komarnika po meri
- **H2:** Komarnici po meri
- **H3:** Plise komarnici, Rolo komarnici, Fiksni komarnici
- **H2:** Insecto Komarnici
- **H2:** Iskustva naših klijenata
- **H2:** Vodič za izbor komarnika
- **H3:** Komarnici za prozore, Komarnici za vrata, Komarnici za različitu stolariju
- **H2:** Kako do komarnika
- **H2:** Cena komarnika
- **H2:** Šta je uključeno u cenu
- **H2:** Galerija komarnika
- **H2:** Novi Sad i bliža okolina
- **H2:** Česta pitanja i odgovori
- **H2:** Kontaktiraj nas

Spisak prikazuje logičku strukturu; nije zahtev da svaku stavku slepo pretvorimo u heading ili da promenimo prihvaćen redosled sekcija. Naslovi treba da odgovaraju stvarnom sadržaju.

U trenutnom bloku „Šta je uključeno u cenu“ postoje H4 naslovi pod H2. Preporuka je urednija H3 semantika za kartice, uz iste tokene i isti izgled. To je poboljšanje strukture, ne velika SEO prepreka.

Prvi pasus treba brzo da potvrdi šta nudimo, kome i gde. Postojeći hero već pokriva vrste komarnika, Novi Sad i okolinu, rok i garanciju. Njega treba proveriti i usaglasiti sa drugim delovima sajta, ne produžavati samo da bi sadržao više ključnih reči.

**Završeno kada:** hijerarhija ima smisla i kada se pročita bez dizajna, H1 odgovara temi i title naslovu, a naslovi nisu ubačeni samo radi fraza za pretragu.

# 8 Šta svaka homepage sekcija treba da kaže

Sadržaj treba da pomogne čoveku da izabere i kontaktira pravi tim. Vrednost proizlazi iz iskustva, konkretnih odgovora i proverljivih podataka, a ne iz proizvoljnog broja reči. Tuđe opise ne treba prepisivati; objašnjenja treba da odražavaju stvarnu Insecto ponudu. [S8](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

| Sekcija | Sadržaj koji treba pripremiti |
| --- | --- |
| Hero | Šta izrađujemo i ugrađujemo, gde radimo i koji je sledeći korak. Rok i garanciju navesti samo u potvrđenom obliku. |
| Proizvodi | Kratka razlika između plise, rolo i fiksnih komarnika, tipična primena i link ka detaljima. |
| O nama | Ko je tim, kako radi i originalna fotografija. Broj članova, godine iskustva i broj kupaca samo ako su tačni i održavani. |
| Recenzije | Autentičan tekst, autor i izvor uz dozvoljenu upotrebu; dosledna ocena i broj recenzija. |
| Vodič | Kako otvor, način prolaska, stolarija i raspoloživ prostor utiču na izbor. Zameniti sva tri Lorem ipsum pasusa. |
| Proces | Kontakt, merenje i dogovor, izrada i ugradnja; šta korisnik treba da uradi u svakom koraku. |
| Cena | Kako se računa, šta utiče na obračun, minimalna obračunska površina ako važi, i šta je uključeno. |
| Uključeno u cenu | Jasno značenje merenja, profesionalne ugradnje i garancije, sa stvarnim uslovima. |
| Galerija | Sopstveni radovi koji pokazuju različite proizvode i primene; kratak opis kada doprinosi razumevanju. |
| Zona rada | Novi Sad i stvarno pokrivena okolina; kako se zakazuje dolazak i postoje li uslovi za udaljenije lokacije. |
| FAQ i kontakt | Odgovori na preostale nedoumice i jednostavan način da korisnik postavi svoje pitanje. |

## Posebno proveriti cenu i rokove

Ako kalkulator piše „tačna cena“, sve promenljive koje mogu da utiču na konačan iznos moraju biti obuhvaćene ili jasno objašnjene. Ako cenu potvrđujemo posle merenja, tekst treba pošteno da kaže kada je iznos procena. Ne menjati tvrdnju bez dogovora sa vlasnikom posla.

Nije obavezno objaviti cenovnik da bi stranica mogla da rangira. Ako cenu trenutno ne objavljujemo, korisno je objasniti način obračuna i šta korisnik dobija nakon upita. Ne izmišljati „od“ cenu radi privlačenja klikova.

**Završeno kada:** svaki blok odgovara na konkretno pitanje kupca, nema probnog sadržaja i nijedna tvrdnja nije u sukobu sa ostatkom sajta.

# 9 Detaljne stranice proizvoda

Homepage daje pregled, a stranice proizvoda omogućavaju da detaljno odgovorimo na različite potrebe. Trenutne prazne rute nisu spremne za SEO lansiranje. Njih treba razvijati kao korisne stranice, ne kao isti tekst sa zamenjenom rečju plise, rolo ili fiksni.

## Obrazac za jednu dobru stranicu

1. **H1 i kratak uvod:** koji proizvod nudimo, osnovna primena i dostupna usluga.
2. **Originalna fotografija:** proizvod u celini i detalj mehanizma ili montaže kada pomaže izboru.
3. **Za koga je dobar izbor:** vrste otvora, učestalost korišćenja i situacije u kojima odgovara.
4. **Ograničenja:** potrebni prostor, smer otvaranja, dostupne dimenzije i kompatibilnost koju zaista možemo potvrditi.
5. **Opcije:** materijali, profili, mreža i boje koje stvarno nudimo. Ne dodavati tehničke specifikacije bez potvrde dobavljača.
6. **Cena i proces:** od čega zavisi obračun, kako se uzimaju mere i kako se ugovara posao.
7. **Korišćenje i održavanje:** praktični saveti, skidanje ili čišćenje ako je primenljivo.
8. **Garancija i podrška:** trajanje, šta pokriva i kako se prijavljuje problem, prema stvarnim uslovima.
9. **Relevantna pitanja:** odgovori specifični za taj proizvod, umesto kopije celog homepage FAQ-a.
10. **Sledeći korak:** standardni CTA za merenje, sa recenzijama u istom sklopu gde je to prihvaćeni obrazac sajta.

## Primer sadržaja koji pomaže izboru

Za pitanje „plise ili rolo“ treba objasniti razliku u načinu korišćenja, potrebnom prostoru i primeni na konkretnom otvoru. Nije dovoljno napisati da su oba proizvoda kvalitetna, moderna i praktična. Korisnik treba da razume šta treba da proveri kod svog prozora ili vrata i kada da se obrati timu.

Ako postoje stvarne razlike, može pomoći uporedna tabela. Podatke u njoj potvrđuje osoba koja proizvode meri i ugrađuje. Ne koristiti univerzalne tvrdnje kao „odgovara svakoj stolariji“ bez uslova i provere.

**Dužina sadržaja:** koliko je potrebno da odgovor bude potpun, bez propisanih 1.000 ili 2.000 reči. Ne uvoditi blog i desetine tekstova pre nego što su glavne uslužne stranice korisne i završene.

**Završeno kada:** korisnik na svakoj stranici dobija informacije koje nije već pročitao u kratkoj kartici na početnoj i može da donese bolju odluku.

# 10 Lokalna relevantnost i poverenje

Za lokalnu uslugu treba jasno pokazati ko posao obavlja, gde ga obavlja i kako ga kontaktirati. To radimo kroz vidljiv sadržaj i tačne podatke na sajtu. Aktivnosti na Google Business profilu i drugim platformama ostaju izvan ovog dokumenta.

## Šta treba da bude vidljivo

- Stvaran naziv poslovanja i jasna stranica o timu.
- Isti kontakt telefon i Email u headeru, footeru, kontaktu i strukturiranim podacima.
- Stvarno radno vreme i objašnjenje kada korisnik može očekivati odgovor.
- Tačna zona ugradnje; konkretna mesta navesti tek kada potvrdiš da ih pokrivate.
- Originalne fotografije tima i radova, sa objašnjenjem kada je korisno.
- Razumljivi uslovi garancije, podrške i obrade upita.

Tačna Google mapa koju već imamo korisna je za prepoznavanje lokacije. Sama mapa nije prečica do prvog mesta. Ako ne primate mušterije na adresi, ne predstavljati je kao javni salon. Ne izvlačiti adresu ili koordinate poslovanja iz centra prikaza mape bez provere.

## Recenzije koje ručno održavamo

U kodu postoje fiksni podaci o oceni i broju recenzija, a postoji i mehanizam za opcionalno preuzimanje Google ocene. Treba odrediti jedan dosledan način prikaza, da različite sekcije ne prikazuju različite podatke. Ručno izabrane recenzije predstavljati pošteno kao izbor iskustava, uz stvarni izvor.

Tekstovi „pre 5 meseci“ zastarevaju. Za ručno održavanje praktičniji je provereni datum ili mesec i godina, ili redovan postupak ažuriranja. Ne osvežavati datume tako da stara recenzija izgleda kao nova. Ne izmišljati autora, fotografiju ili iskustvo.

Plavi verification simbol može sugerisati da je neka nezavisna strana proverila konkretnu recenziju. Ako za to nemamo osnov, ne predstavljati običnu lokalnu ikonicu kao dokaz Google verifikacije. To je pitanje tačnosti i poverenja, ne ukrasni SEO trik.

## Kako pokazujemo iskustvo i stručnost

E-E-A-T označava iskustvo, stručnost, autoritet i pouzdanost. Nije pojedinačni Google faktor ni sertifikat koji dobijamo dodavanjem biografije. Za Insecto to praktično znači da stručne tvrdnje proverava osoba koja ugrađuje komarnike, da prikazujemo svoje radove i objasnimo stvarne uslove. Ako objavljujemo detaljan stručni vodič, jasno navesti ko ga je pripremio ili proverio kada to pomaže proceni pouzdanosti. Ne izmišljati stručnog autora. [S8](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

**Šta nam ne treba:** izmišljeni sertifikati, broj zadovoljnih kupaca bez evidencije, nepotvrđene tehničke tvrdnje ili tekst koji obećava više nego što tim pruža. Poverenje se gradi podacima koji se mogu objasniti i proveriti. [S8](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

# 11 Link juice i prenos vrednosti kroz linkove

**Link juice**, odnosno **link equity**, jeste neformalan SEO izraz za vrednost koju link može da prenese ka drugoj stranici. Povezan je sa analizom linkova i PageRank-om, ali nije naziv javne Google metrike koju možemo očitati u procentima. Google potvrđuje da je PageRank, znatno razvijen u odnosu na prvobitnu verziju, i dalje deo njegovih sistema rangiranja. [S28](https://developers.google.com/search/docs/appearance/ranking-systems-guide)

Kada stranica A linkuje ka stranici B, taj link može pomoći otkrivanju stranice B, razumevanju njene teme i proceni značaja kroz strukturu linkova. Postojanje linka ne garantuje veću poziciju. Njegova praktična korisnost zavisi i od sadržaja, konteksta i toga da li Google može da ga obradi.

## Kako to primenjujemo na Insecto

Početna je prirodno mesto za pregled ponude. Sa nje treba direktno povezati završene stranice proizvoda; iz vodiča uputiti korisnika na proizvod o kome se govori. To je preporuka za organizaciju sajta, ne tvrdnja da smo izmerili koliko autoriteta početna trenutno ima.

| Izvor linka | Odredište | Svrha |
| --- | --- | --- |
| Kartica na početnoj | `/plise-komarnici` | Pregled ponude vodi ka detaljnom odgovoru. |
| Pasus vodiča o rolo modelu | `/rolo-komarnici` | Objašnjenje povezuje srodnu temu i proizvod. |
| Detaljna stranica proizvoda | Relevantan vodič ili alternativa | Korisnik nastavlja poređenje i lakše bira. |

Ovo prikazuje smer povezivanja, ne procente prenosa. U našem trenutnom kodu `/#product-plise` vodi unutar početne. Takvo sidro ne povezuje posebnu plise stranicu i ne zamenjuje link ka `/plise-komarnici`.

## Šta ne možemo izračunati prostom formulom

Ne tvrdimo da deset linkova dobija po 10% vrednosti ili da jedan link u tekstu uvek vredi tačno više od linka u meniju. Google ne objavljuje takav upotrebljiv obračun za naš sajt. Dodavanje istog linka više puta nije pouzdan način da višestruko povećamo njegov efekat. DA i DR iz komercijalnih alata nisu Google PageRank niti njegova direktna očitana vrednost.

Nije cilj skloniti kontakt, politiku privatnosti ili druge potrebne linkove da bismo „sačuvali juice“. Ne treba koristiti interni `nofollow` za navodno usmeravanje celokupne vrednosti na prodajne stranice. Google je još u smernicama o arhitekturi linkova preporučio korisnu navigaciju umesto rada na takvom PageRank sculpting-u. Taj stariji izvor ne koristimo kao formulu današnjeg algoritma. [S30](https://developers.google.com/search/blog/2008/10/importance-of-link-architecture)

**Prioritet P1:** završiti odredišne stranice, povezati ih sa odgovarajućih mesta i proveriti da nijedna važna stranica nije dostupna samo kroz sitemap. Pribavljanje linkova sa drugih sajtova pripada off-page SEO-u i nije deo ovog plana.

# 12 Interni linkovi i navigacija

Interni linkovi povezuju stranice istog sajta. Pomažu ljudima da nastave istraživanje i Google-u da otkrije i razume odnose između stranica. Standardni HTML link sa `href` adresom je pouzdana osnova; tekst linka treba da kaže šta korisnik otvara. [S9](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)

## Plan povezivanja za Insecto

- Kartica „Plise komarnici“ vodi na završenu plise stranicu, a isto važi za rolo i fiksne.
- Vodič za izbor povezuje objašnjenje sa odgovarajućim proizvodom.
- Stranica proizvoda povezuje korisnika sa kalkulatorom ili objašnjenjem cene, kontaktom i relevantnom alternativom.
- O nama i kontakt ostaju dostupni kroz standardnu navigaciju i footer.
- Detaljne stranice mogu imati breadcrumb putanju poput „Početna → Plise komarnici“.

Postojeći linkovi `/#product-plise` i slični vode na deo početne stranice. To je ispravno za kretanje kroz homepage, ali nije isto što i posebna stranica proizvoda. Google ne dobija tri detaljne stranice samo zato što postoje tri sidra.

Ne treba menjati sve linkove odjednom dok nove stranice vraćaju prazan sadržaj. Prvo završavamo destinaciju, zatim povezujemo kartice i navigaciju. Korisniku ne nudimo „Saznaj više“ ako nema gde da sazna više.

## Tekst i ponašanje linka

„Pogledaj plise komarnike“ ili sam naziv proizvoda jasniji su od niza jednakih „klikni ovde“. Nije potrebno u svaki link ubacivati ceo izraz „najbolji komarnici Novi Sad“. Link treba da bude prirodan u rečenici.

Telefonski CTA služi pozivu. Njegova uloga nije da zameni link ka informacijama o proizvodu. Postojeći standardni CTA i recenzije ostaju jedinstven vizuelni sklop gde su tako dogovoreni; SEO ne traži njihovo razdvajanje.

## Izlazni linkovi i nofollow

Korisni linkovi ka izvorima i stvarnom Google profilu nisu nešto što automatski uklanjamo zbog „curenja autoriteta“. Standardni urednički link ne zahteva posebno `rel="dofollow"` označavanje. `sponsored` označava plaćene linkove, `ugc` linkove iz korisničkog sadržaja, a `nofollow` koristimo kada odgovarajući odnos nije obuhvaćen tim vrednostima i ne želimo da preporučimo odredište. To nisu obavezne oznake za svaki spoljni link. [S29](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)

Google ove oznake obrađuje kao smernice u svojim sistemima; `nofollow` nije zabrana indeksiranja ciljne stranice. Interni link bez te oznake takođe nije garancija vrednosti ili indeksiranja. [S31](https://developers.google.com/search/blog/2019/09/evolving-nofollow-new-ways-to-identify)

**Provera:** svaka važna javna stranica mora biti dostupna kroz smislen put od početne. Proveriti stvarne URL adrese, ne samo da dugme izgleda kao link. Ukloniti pokvarene linkove, izbeći nepotrebne lance preusmeravanja i ne ostavljati važne stranice povezane samo kroz sitemap.

# 13 Fotografije i video

Fotografije su važan dokaz kako proizvod i ugradnja izgledaju. Za Insecto imaju veću praktičnu vrednost stvarni radovi nego generička fotografija uz dugačak SEO opis. Slika treba da bude dostupna za obilazak, povezana sa relevantnim tekstom i dovoljno kvalitetna za svoju veličinu prikaza. [S10](https://developers.google.com/search/docs/appearance/google-images)

## Alt tekst bez gomilanja ključnih reči

Alt opis prenosi značenje slike kada ona nije vidljiva i pomaže pristupačnosti. Treba opisati važan vidljivi sadržaj, ne napisati spisak prodajnih fraza.

**Generički:** Komarnik na prozoru ili vratima.

**Korisnije, ako odgovara fotografiji:** Beli fiksni komarnik postavljen na prozor sa PVC okvirom.

**Loše:** Komarnici Novi Sad najbolji jeftini komarnici Novi Sad cena ugradnja.

Naziv naselja dodajemo samo kada znamo gde je rad izveden i kada je taj podatak relevantan. Čisto dekorativne slike mogu imati prazan alt. Ne izmišljati materijal, mehanizam ili lokaciju na osnovu pretpostavke.

## Tehnička priprema

1. Koristiti dimenzije primerene stvarnom prikazu i odgovarajuće responsive varijante.
2. Izabrati efikasan format i kompresiju uz vizuelnu proveru mrežice i sitnih detalja.
3. Rezervisati prostor pomoću dimenzija ili odnosa stranica da slika ne pomera sadržaj.
4. Slike ispod početnog prikaza mogu se odloženo učitavati; glavnu važnu hero sliku ne odlagati bez razloga.
5. Proveriti stvarne zahteve u browseru: poslatu veličinu, format, keširanje i vreme učitavanja.

Hero u kodu trenutno koristi `unoptimized`. To je razlog za merenje pre odluke, **nije dokaz da je stranica spora**. Zamena tog podešavanja ima smisla ako donosi stvarno poboljšanje kvaliteta i veličine resursa.

U galeriji zadržati pregledne slike i funkcionalno listanje na telefonu. Važne fotografije i opis ne smeju zavisiti od radnje koju Google možda neće izvršiti. Za video koristiti razuman format, poster i kontrolisano učitavanje; težak animirani GIF nije SEO zahtev.

**Opciono:** Open Graph slika i opis poboljšavaju deljenje na društvenim mrežama. Favicon pomaže prepoznatljivosti u rezultatima. To nisu direktne poluge za prvo mesto. [S23](https://developers.google.com/search/docs/appearance/favicon-in-search)

# 14 Strukturirani podaci i granice njihovog efekta

Strukturirani podaci su mašinski čitljiv opis sadržaja, najčešće JSON-LD. Mogu pomoći razumevanju i podobnosti za određene bogatije prikaze, ali ne zamenjuju vidljiv tekst i ne garantuju poseban rezultat. Podaci moraju biti tačni, relevantni i usklađeni sa stranicom. [S20](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)

| Tip | Primena kod Insecta | Uslov ili ograničenje |
| --- | --- | --- |
| Organization ili prikladan LocalBusiness | Identitet firme, naziv, URL, telefon i provereni podaci. | Za Google LocalBusiness podršku poštovati tražena polja; ne izmišljati javnu adresu. |
| WebSite | Naziv sajta na početnoj stranici. | Isti stvarni naziv i kanonski URL; pomaže signalima za ime sajta. |
| BreadcrumbList | Putanja do detaljne stranice proizvoda. | Mora odgovarati stvarnoj navigacionoj strukturi. |
| Product i Offer | Samo ako konkretna ponuda zaista odgovara proizvodu i dostupnim podacima. | Opciono; ne izmišljati cenu i dostupnost za uslugu po meri. |
| FAQPage | Nije zadatak potreban za planirani Google FAQ prikaz. | Google je ukinuo FAQ rich result od 7. maja 2026. |

Za Google-ov LocalBusiness prikaz dokumentacija traži naziv i adresu, uz dodatna preporučena polja. Ako nema odgovarajuće javne poslovne adrese, to prvo razjasniti. Nije prihvatljivo izmišljati adresu da bismo popunili validator; može biti prikladniji osnovni Organization opis. [S11](https://developers.google.com/search/docs/appearance/structured-data/local-business)

## Zvezdice nisu automatska posledica schema podataka

Google ne daje review stars za samopromotivne recenzije firme na njenoj sopstvenoj LocalBusiness ili Organization stranici, uključujući prikaz preko spoljnog widgeta. Google recenzije o Insecto firmi ne treba preimenovati u recenzije proizvoda da bismo pokušali da zaobiđemo pravilo. [S12](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

Vidljive autentične recenzije i dalje imaju vrednost za korisnike. Samo ne obećavamo da će ocena 4,9 ispod našeg CTA dugmeta postati zvezdice uz organski rezultat.

## FAQ ostaje koristan sadržaj

Prema Google evidenciji promena, FAQ rich result više se ne prikazuje od 7. maja 2026, a prateća dokumentacija je zatim uklonjena. Zato ne treba investirati u FAQ schema radi očekivanog proširenog rezultata. Pitanja i odgovori ostaju korisni kao vidljiv sadržaj koji rešava nedoumice. [S13](https://developers.google.com/search/updates)

**Provera:** pregled JSON-LD podataka, Rich Results Test za podržane funkcije i poređenje sa stvarnim vidljivim sadržajem. Zelen validator potvrđuje tehničku podobnost u svom obimu, ne rangiranje. [S21](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [S22](https://developers.google.com/search/docs/appearance/site-names)

# 15 Mobilni prikaz i brzina

Google koristi mobilnu verziju sadržaja za indeksiranje. Važna objašnjenja, slike, naslovi i linkovi zato ne treba da nestanu na telefonu. Accordion je prihvatljiv način organizacije ako je sadržaj dostupan za renderovanje, a ne učitava se tek radnjom korisnika. [S16](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [S17](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)

Trenutni FAQ odgovori postoje u renderovanom sadržaju i kada su vizuelno zatvoreni. Nema potrebe da jedno pitanje ostaje stalno otvoreno radi SEO-a. Važno je da otvaranje radi pristupačno, kroz tastaturu i dodir.

## Šta merimo

| Metrika | Šta opisuje | Granica dobrog rezultata |
| --- | --- | --- |
| LCP | Vreme do prikaza najvećeg važnog elementa. | Do 2,5 sekunde. |
| INP | Odziv interfejsa na korisničku interakciju. | Do 200 milisekundi. |
| CLS | Neočekivano pomeranje rasporeda. | Do 0,1. |

Ove granice se procenjuju na 75. percentilu stvarnih poseta, odvojeno za mobilne i desktop podatke. Core Web Vitals se koriste u sistemima rangiranja, ali dobar rezultat nije garancija prve pozicije. [S14](https://developers.google.com/search/docs/appearance/core-web-vitals), [S15](https://web.dev/articles/vitals)

## Postupak za naš sajt

1. Proveriti objavljenu stranicu kroz PageSpeed Insights, uz razliku između podataka stvarnih korisnika i laboratorijskog testa.
2. Zabeležiti resurs koji pravi LCP, pre nego što menjamo hero sliku ili prioritete učitavanja.
3. Proveriti kalkulator, galeriju i formu na sporijem telefonu; tražiti zastoje i nepotreban JavaScript.
4. Rezervisati prostor za fotografije, mapu, recenzije i druge elemente koji mogu kasno da se pojave.
5. Proveriti fontove, redosled učitavanja i početni položaj stranice.

Lighthouse 100 nije uslov za rangiranje. Ako sajt nema dovoljno stvarnih poseta, nedostatak javnih terenskih podataka nije dokaz da je brz ili spor. Tada laboratorijski test koristimo za dijagnostiku, uz ponovljiva merenja.

## UX provera koja mora da prati merenje

Naslov ne sme da bude sakriven iza headera pri prvom dolasku. Tekst treba da bude čitljiv, kontrola dovoljno velika za dodir, fokus vidljiv, forma upotrebljiva, a poruke greške razumljive. Proveriti 360–390 px, tablet i desktop, kao i širine između breakpointa. Ne uvoditi nametljive slojeve koji zaklanjaju sadržaj. [S18](https://developers.google.com/search/docs/appearance/page-experience)

Ove mere prvenstveno pomažu korisniku i upotrebljivosti. Boja dugmeta, border ili raspored recenzija nemaju zasebnu čarobnu SEO vrednost.

# 16 Dodatne kontrole i uslovne SEO potrebe

Ove provere dopunjuju osnovni plan. Neke važe za sadašnji sajt, a druge postaju potrebne tek ako dodamo nove jezike, javne dokumente ili složenije listanje sadržaja.

## Prikaz teksta i slika u pretrazi

Pored `noindex`, proveriti da nisu slučajno postavljeni `nosnippet`, `max-snippet:0`, `data-nosnippet` preko glavnog sadržaja ili restriktivan `max-image-preview`. Ova podešavanja ograničavaju šta Google sme da prikaže. Mogu biti namerna, ali ih ne uključujemo naslepo. `data-nosnippet` isključuje označeni tekst iz isečka, a ne celu stranicu iz indeksa. [S32](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)

Ispod naslova pitanja prvo dati jasan odgovor, pa objašnjenje, korake ili poređenje. To je korisno čitaocu; ne postoji posebna oznaka kojom sami dodeljujemo stranici featured snippet. Google bira kada i šta prikazuje. [S35](https://developers.google.com/search/docs/appearance/featured-snippets)

## Neispravne adrese i javni fajlovi

Prava nepostojeća stranica treba da vraća `404` ili `410`, a trajno preseljena odgovarajuće `301` ili `308` preusmeravanje. Prazna stranica sa `200`, ili poruka o grešci predstavljena kao uspešan sadržaj, može biti prepoznata kao soft 404. Ne koristiti preusmeravanje svih grešaka na početnu. [S34](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)

Ako kasnije objavimo PDF cenovnik ili katalog, odlučiti da li treba da se pojavljuje samostalno u pretrazi. `X-Robots-Tag` može kontrolisati indeksiranje takvog fajla; HTML meta tag iz druge stranice to ne radi. Za poverljive podatke koristiti kontrolu pristupa, jer `noindex` nije zaštita pristupa. [S32](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)

## Jezici i hreflang

Za jednu srpsku verziju sajta sada ne uvodimo `hreflang`. Potreban je za označavanje odgovarajućih alternativnih jezičkih ili regionalnih verzija kada one stvarno postoje, na odvojenim URL-ovima. Tada proveravamo uzajamne oznake i canonical po verziji. Postojeći `lang="sr-Latn"` koristan je za pristupačnost; Google jezik utvrđuje iz sadržaja, ne iz tog atributa. [S33](https://developers.google.com/search/docs/specialty/international/localized-versions)

## Galerija i sadržaj iza interakcije

Ako listanje samo menja vidljiv raspored već dostupnih slika, nije automatski potrebna posebna paginacija za SEO. Ako važne nove stranice ili tekst postanu dostupni jedino klikom na „učitaj još“, dodati stvarne dostupne URL-ove i linkove. Proveriti renderovani HTML i ono što Google vidi, ne samo šta se pojavi nakon našeg klika. [S16](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)

# 17 Redosled implementacije u ovom projektu

Ovo je predlog rada, bez automatskog menjanja sajta. Svaka faza ima rezultat koji možemo pregledati pre sledeće. Dizajn, tokene, standardne CTA sklopove i postojeće funkcionalnosti čuvamo osim kada postoji konkretan razlog za izmenu.

## Faza A Potvrda poslovnih podataka

**Odgovoran:** vlasnik posla uz urednika sadržaja.

Potvrditi rokove, uslove garancije, zonu rada, radno vreme, materijale, opcije, način obračuna i šta je uključeno u cenu. Proveriti broj i ocenu recenzija. Zapisati jednu referentnu verziju tih podataka da se tekstovi ubuduće ne razilaze.

## Faza B Sadržaj i stranice

**Odgovoran:** urednik i developer.

Zameniti probni tekst u `src/components/selection-guide-section.tsx`. Završiti tri produktne rute u `src/app/`. Uskladiti hero i FAQ; srediti informacije o timu, cenu i lokalnu sekciju. Tek zatim povezati završene stranice sa karticama i navigacijom.

## Faza C Metadata i tehnička osnova

**Odgovoran:** developer.

U `src/app/layout.tsx` definisati stvarni identitet i produkcijsku URL osnovu. Svakoj glavnoj ruti dodeliti jedinstven title, opis i odgovarajući canonical. Pripremiti sitemap, robots i eventualna preusmeravanja prema prethodnim adresama. Zadržati razvojno isključivanje indeksiranja do spremnosti za lansiranje.

Dodati samo potrebne i istinite strukturirane podatke, zatim opisne alt tekstove u galeriji. Proveriti oznake linkova i podešavanja prikaza isečka u pretrazi. Za konkretne Next.js API-je koristiti dokumentaciju instalirane verzije iz `node_modules/next/dist/docs/`, ne pretpostavke o starijim verzijama.

## Faza D Provera pre javnog SEO lansiranja

**Odgovoran:** developer i vlasnik posla.

Pokrenuti lint, typecheck i build prema pravilima projekta. Proveriti produkcijski HTML, status kodove, metadata, interne linkove i mobilni prikaz. Izmeriti performanse pre i posle opravdanih optimizacija. Vlasnik potvrđuje poslovne tvrdnje i kontakt podatke.

## Faza E Lansiranje i praćenje

Na potvrđenom javnom domenu omogućiti indeksiranje odabranih završenih ruta. Ponovo proveriti stvarni odgovor servera, a ne samo lokalni kod. Prijaviti sitemap u Search Console i pregledati glavne URL adrese. Ne obećavati indeksiranje ili poziciju do određenog datuma.

# 18 Završna kontrolna lista

Ova lista služi prihvatanju implementacije. Stavka bez oznake „opciono“ predstavlja preporučeni standard projekta, ali nije svaka zasebno Google uslov za rangiranje.

## Dostupnost i URL adrese

- [ ] Potvrđen je jedan javni produkcijski domen i HTTPS verzija.
- [ ] Završene stranice vraćaju `200` i stvarni sadržaj.
- [ ] Nema neželjenog `noindex` u HTML-u ili zaglavljima javnih SEO stranica.
- [ ] Googlebot može da dođe do sadržaja i resursa potrebnih za prikaz.
- [ ] Razvojne i probne rute ostaju van indeksa prema dogovorenom planu.
- [ ] Canonical, interni linkovi i sitemap koriste usklađene URL-ove.
- [ ] Ako zamenjujemo postojeći sajt, važne stare adrese imaju proverena preusmeravanja.

## Sadržaj i elementi stranice

- [ ] Svaka glavna stranica ima jedinstven title i koristan meta opis.
- [ ] Globalni title template ne duplira brend; nema neželjenih zabrana prikaza isečka.
- [ ] H1 jasno opisuje temu; podnaslovi imaju smislen redosled.
- [ ] Nema Lorem ipsum teksta, praznih produktnih stranica i probnih tvrdnji.
- [ ] Vrste komarnika su objašnjene; svaki URL ima svoj zadatak bez suvišnih duplikata.
- [ ] Rokovi, garancija, uslovi cene i zona rada su potvrđeni; određen je vlasnik ažuriranja.
- [ ] Kontakt podaci i radno vreme jednaki su u svim važnim delovima sajta.
- [ ] Fotografije i recenzije su autentične; prikaz ne stvara lažan utisak verifikacije.
- [ ] Važne stranice imaju opisne interne linkove i nisu dostupne samo kroz sitemap.
- [ ] Interni nofollow nije korišćen za sculpting; spoljne oznake odgovaraju odnosu linka.
- [ ] Alt tekstovi odgovaraju fotografijama; dekorativne slike tretirane su pravilno.

## Prikaz i funkcionalnost

- [ ] Mobilna verzija sadrži iste ključne informacije kao desktop.
- [ ] Pri prvom dolasku ili osvežavanju header ne skriva naslov.
- [ ] Kalkulator, galerija, FAQ, telefonski linkovi i forma rade.
- [ ] Učitavanje slika, fontova i mape ne izaziva neprihvatljivo pomeranje sadržaja.
- [ ] Izmerene su performanse i zabeležena ograničenja dostupnih podataka.
- [ ] Ako dodajemo strukturirane podatke, oni su validni i odgovaraju vidljivom sadržaju.
- [ ] Opciono: Open Graph i favicon provereni su za deljenje i prepoznatljivost.
- [ ] Search Console provera pokazuje očekivanu dostupnost, a sitemap je predat.

# 19 Kako merimo rezultat i šta ne treba raditi

Zabeležiti datum lansiranja i tačne promene. U Search Console pratiti homepage i produktne stranice odvojeno, uz filtere za upite, državu i uređaj. Gledati prikaze, klikove, CTR i prosečnu poziciju zajedno. Prosečna pozicija nije univerzalno mesto na koje će svaki korisnik naići. [S25](https://support.google.com/webmasters/answer/7576553)

## Praktičan ritam praćenja

**Nakon objavljivanja:** proveriti odgovor servera, indeksabilnost i URL Inspection. Ako stranica nije u indeksu, utvrditi razlog pre ponovnog menjanja teksta.

**Kada se pojave podaci:** proveriti da li se prikazujemo za željene upite i da li prava stranica dobija te prikaze. Razlikovati brendirane upite od onih poput „komarnici Novi Sad“.

**Za poređenje:** koristiti uporedive periode, na primer 28 dana, tek kada imamo dovoljno podataka. Uvažiti sezonalnost komarnika i promene ponude. Taj period je predlog za organizaciju analize, ne obećan rok rezultata.

**Ako ima prikaza bez klikova:** pogledati upite, relevantnost naslova i stvarni prikaz rezultata. Ne zaključivati automatski da je meta opis jedini problem. **Ako ima klikova bez upita:** proveriti jasnoću ponude, funkcionalnost kontakta i kvalitet poseta. Konverzija nije isto što i rangiranje.

## Održavanje sadržaja

Kao radnu rutinu, pre sezone proveriti ponudu, rokove, garanciju, zone rada, kontakt i recenzije; poslovne promene uneti čim nastanu. Za svaku glavnu stranicu zabeležiti vlasnika sadržaja i datum stvarne provere. Datum u tekstu i sitemap-u menjati kada postoji odgovarajuća stvarna izmena, ne radi privida svežine. Ako se ponuda ukine, odlučiti da li stranica dobija korisnog naslednika ili se uklanja, pa ažurirati njene linkove.

## SEO prečice koje preskačemo

- Ne postoji obavezna gustina ključne reči ili univerzalna minimalna dužina teksta.
- `meta keywords` ne pomaže Google rangiranju. [S24](https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag)
- Ne dodajemo nevidljiv tekst, liste gradova ni kopirane stranice za svako naselje. [S19](https://developers.google.com/search/docs/essentials/spam-policies)
- Ne kupujemo niti izmišljamo recenzije i ne menjamo stare datume da bi delovali sveže.
- Ne obećavamo FAQ proširenje rezultata, automatske zvezdice ili prvo mesto zbog schema koda.
- Ne jurimo Lighthouse 100 pre rešavanja praznog sadržaja i `noindex` prepreke.
- Ne menjamo dizajn sekcije samo zato što navodno „Google više voli“ neku boju ili okvir.

Za ovaj projekat najvažniji posao je da Google može da pročita završene stranice i da te stranice pruže precizan, lokalno relevantan i uverljiv odgovor. Nakon toga poboljšanja zasnivamo na stvarnim podacima, a ne na broju popunjenih polja u SEO alatu.

# Izvori i obim provere

Smernice su proverene 4. oktobra 2026. Izvori su Google Search Central, Search Console Help i web.dev. Konkretni prioriteti, tekstovi i predlozi strukture predstavljaju preporuke za Insecto, ne Google obećanje rezultata.

- **S1** [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — osnove SEO-a, realna očekivanja i česti mitovi.
- **S2** [Google Search technical requirements](https://developers.google.com/search/docs/essentials/technical) — tehnički uslovi za podobnost za indeksiranje.
- **S3** [Block indexing with noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing) — pravila za noindex i pristup crawlera.
- **S4** [Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) — canonical i usklađivanje duplih adresa.
- **S5** [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) — sitemap, URL adrese i datumi izmena.
- **S6** [Influencing title links in Google Search](https://developers.google.com/search/docs/appearance/title-link) — naslovi rezultata i njihovo generisanje.
- **S7** [Control your snippets in search results](https://developers.google.com/search/docs/appearance/snippet) — meta opisi i izbor isečka teksta.
- **S8** [Creating helpful reliable people first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — koristan sadržaj, iskustvo i poverenje.
- **S9** [Link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) — crawlable linkovi i smislen tekst linka.
- **S10** [Google image SEO best practices](https://developers.google.com/search/docs/appearance/google-images) — slike, kontekst i alt tekst.
- **S11** [Local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business) — podaci o lokalnom poslovanju.
- **S12** [Review snippet structured data](https://developers.google.com/search/docs/appearance/structured-data/review-snippet) — pravila za ocene i samopromotivne recenzije.
- **S13** [Google Search documentation updates](https://developers.google.com/search/updates) — evidencija iz maja i juna 2026. o ukidanju FAQ rich result funkcije.
- **S14** [Understanding Core Web Vitals and Google search results](https://developers.google.com/search/docs/appearance/core-web-vitals) — odnos CWV i pretrage.
- **S15** [Web Vitals](https://web.dev/articles/vitals) — LCP, INP, CLS i pragovi za stvarne korisnike.
- **S16** [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) — obrada sadržaja i JavaScript prikaz.
- **S17** [Mobile site and mobile first indexing best practices](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) — sadržaj mobilne verzije.
- **S18** [Understanding page experience](https://developers.google.com/search/docs/appearance/page-experience) — upotrebljivost i iskustvo na stranici.
<!-- pagebreak -->

## Izvori nastavak

- **S19** [Spam policies for Google web search](https://developers.google.com/search/docs/essentials/spam-policies) — keyword stuffing, doorway stranice i druge zloupotrebe.
- **S20** [General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) — istinitost podataka i ograničenja bogatih rezultata.
- **S21** [Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) — navigacione putanje.
- **S22** [Provide a site name to Google Search](https://developers.google.com/search/docs/appearance/site-names) — naziv sajta i WebSite podaci.
- **S23** [Define a favicon to show in search results](https://developers.google.com/search/docs/appearance/favicon-in-search) — favicon u rezultatima pretrage.
- **S24** [Google does not use the keywords meta tag](https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag) — meta keywords i razlika u ulozi meta opisa.
- **S25** [Search Console performance report](https://support.google.com/webmasters/answer/7576553) — prikazi, klikovi, CTR, pozicija i filteri.
- **S26** [URL Inspection tool](https://support.google.com/webmasters/answer/9012289) — provera uživo i indeksirane verzije.
- **S27** [Site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) — planiranje novih adresa i preusmeravanja.

- **S28** [A guide to Google Search ranking systems](https://developers.google.com/search/docs/appearance/ranking-systems-guide) — analiza linkova i PageRank u aktuelnim sistemima.
- **S29** [Qualify your outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links) — sponsored, ugc i nofollow.
- **S30** [Importance of link architecture](https://developers.google.com/search/blog/2008/10/importance-of-link-architecture) — stariji Google savet o arhitekturi i sculpting-u, bez tvrdnje o današnjoj formuli.
- **S31** [Evolving nofollow](https://developers.google.com/search/blog/2019/09/evolving-nofollow-new-ways-to-identify) — uloga oznaka linkova kao smernica.
- **S32** [Robots meta and snippet controls](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) — robots pravila, X-Robots-Tag i prikaz isečaka.
- **S33** [Tell Google about localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions) — jezičke i regionalne alternative.
- **S34** [How HTTP status codes affect crawlers](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes) — uspešni odgovori, preusmeravanja i greške.
- **S35** [Featured snippets and your website](https://developers.google.com/search/docs/appearance/featured-snippets) — izbor istaknutih isečaka u rezultatima.

## Lokalni fajlovi korišćeni za pregled

Pregled obuhvata `AGENTS.md`, `README.md`, `docs/project-handoff.md`, `docs/design-system.md`, globalni layout i javne rute u `src/app/`, kao i komponente hero sadržaja, navigacije, galerije, vodiča, FAQ-a, kalkulatora, recenzija i lokalne sekcije. Posebno su provereni `src/lib/google-reviews.ts`, `src/components/google-rating.tsx` i `src/lib/insecto-location.ts`.

Dokument ne potvrđuje konačnu pravnu formulaciju uslova poslovanja, rezultate realnog korisničkog testiranja, Google indeksiranje ili trenutne konkurentske pozicije. To su zasebne provere koje se rade nad potvrđenim poslovnim podacima i objavljenim sajtom.
