# Promptovi za novi projekat

Pre pokretanja postavi fajlove u `docs/starter/`, prema README-u, i popuni brief koliko možeš. U novom projektu koristi početni prompt ispod. Ne pokreći ga u Insecto folderu.

## Početni prompt

Kopiraj ceo sadržaj ovog bloka:

```text
U ovom novom projektu napravi website sa doslednim design sistemom prema priloženoj specifikaciji. Želim slične proporcije, jasnoću, razmake i način rada kao u referentnom Insecto projektu, ali nov vizuelni identitet, nove boje, nove fontove i sadržaj za moj biznis.

Pročitaj:
- docs/starter/BRAND-BRIEF.md
- docs/starter/DESIGN-SYSTEM-SPEC.md
- docs/starter/AGENTS.template.md
- postojeći AGENTS.md i README.md ako postoje.

Prvo proveri strukturu projekta, postojeći kod, git status i instalirane verzije. U praznom projektu postavi Next.js App Router, TypeScript i Tailwind CSS sa centralnim CSS tokenima. Ako postoji kompatibilna aplikacija, nastavi iz trenutnog stanja i sačuvaj postojeće izmene.

Ako root AGENTS.md ne postoji, napravi ga prema priloženom template-u. Ako postoji, uskladi projektna pravila bez brisanja nepovezanih uputstava. Specifikacija je početni ugovor, a docs/design-system.md postaje kratka evidencija aktuelnih odluka.

Režim rada pročitaj iz BRAND-BRIEF.md:
- design-system-and-homepage: napravi design system, /design-system prikaz komponenti i prvu kompletnu verziju homepage-a prema delatnosti i podacima iz brief-a.
- design-system-only: napravi design system, /design-system i neutralnu probnu kompoziciju; poslovni homepage ostavi za sledeći zahtev.

Boje i fontove uzmi iz brief-a. Ako piše PREDLOŽI TI, izaberi jedan usklađen privremeni pravac, sa fontovima koji podržavaju srpsku latinicu, proveri kontrast i implementiraj ga. U dokumentaciji jasno označi predlog. Ne preuzimaj Insecto plavu paletu ili kombinaciju Montserrat/Manrope kao podrazumevani novi identitet.

Koristi zajedničke tokene i komponente. Posebno napravi Section/Container, SectionIntro, SplitLayout, Heading, Button/ButtonLink, ActionGroup, polja forme i potrebne obrasce kartica. Isti CTA sa eventualnim realnim ratingom ispod mora svuda da koristi istu celinu. Razmaci, veličine ikonica, radius, hover i focus moraju biti definisani po ulozi, ne posebno za svaku sekciju.

Za početni homepage predloži smislen raspored prema brief-u i odmah ga implementiraj. Posle prve verzije ćemo dorađivati sekciju po sekciju. Ne moraš da zaustavljaš rad za odobrenje svakog reverzibilnog vizuelnog izbora. Nepoznate poslovne podatke ne izmišljaj. Ako nije poznata ni delatnost ili svrha sajta, pitaj za to i paralelno završi design system i nezavisan deo pripreme.

Homepage treba da koristi prave zajedničke komponente i smislen tekst iz poznatih podataka, a ne niz nepovezanih demo kartica. Sekcije koje zahtevaju nedostajuće stvarne podatke, kao recenzije, ostavi van javnog sadržaja; njihov dizajn možeš prikazati u jasno označenom /design-system primeru. Bez lažnih telefona, ocena, klijenata, garancija, sertifikata ili tvrdnje da demo forma zaista šalje poruke.

Isporuči funkcionalan lokalni projekat, /design-system, README.md, docs/design-system.md i docs/project-handoff.md. Proveri tokene, responsive raspored, tastaturu, menije, linkove, stanja forme i konzolu. Pokreni lint, typecheck, build i git diff --check. Browser provere moraju uključiti telefon, tablet, desktop i granice važnih breakpointa. Ne šalji stvarne test upite bez odobrenja. Napiši konkretno šta je provereno i šta je ostalo otvoreno.

Pokreni lokalni server i daj mi tačan URL za preview. Radi do konkretnog rezultata, ne završavaj samo planom. GitHub push, produkcioni deploy i povezivanje stvarnih servisa ćemo tražiti zasebno.
```

## Ako si prvo izabrao samo design system

```text
Na osnovu prihvaćenog design sistema i popunjenog docs/starter/BRAND-BRIEF.md sada napravi prvu kompletnu verziju homepage-a. Koristi postojeće komponente i tokene, bez novog vizuelnog pravca. Predloži i implementiraj redosled sekcija primeren biznisu. Koristi potvrđene podatke; otvorene stavke zapiši u handoff. Proveri desktop, telefon, interakcije i potrebne projektne komande. Prikaži mi lokalni rezultat; nakon toga dorađujemo sekciju po sekciju.
```

## Prompt za doradu jedne sekcije

Zameni delove u uglastim zagradama:

```text
Sada dorađujemo samo sekciju [NAZIV ILI ID SEKCIJE].
Želim sledeće izmene: [KONKRETNE IZMENE].

Prvo proveri njenu trenutnu implementaciju i relevantne prihvaćene odluke u docs/design-system.md. Iskoristi postojeće tokene i komponente. Ako izmena zahteva novo zajedničko pravilo, dodaj ga na odgovarajuće mesto i proveri druge komponente na koje utiče.

Proveri izgled na telefonu i desktopu: poravnanja, širine kolona, prelamanje teksta, razmake, ikonice, focus i relevantne interakcije. Za dugmad primeni postojeću kompletnu CTA kombinaciju ako je tražena. Ne menjaj sadržaj ili raspored drugih sekcija. Ažuriraj odluke i sažeto navedi rezultat i provere. Push samo ako ga izričito zatražim.
```

## Prompt za promenu brenda posle prve verzije

```text
Promeni globalni identitet sajta na [NOVE BOJE I FONTOVI]. Promenu uradi kroz tokene i podešavanje fontova. Sačuvaj strukturu i sadržaj prihvaćenih sekcija. Proveri sve kombinacije boja, uključujući gradient CTA, svetle/tamne panele, linkove, focus i greške u formi. Proveri prelamanje naslova, navigacije i dugmadi jer novi font menja njihove dimenzije. Zabeleži usvojene vrednosti i prikaži /design-system i homepage na telefonu i desktopu.
```

## Prompt za proveru konzistentnosti

```text
Pregledaj trenutni homepage prema docs/design-system.md. Proveri da li iste uloge koriste iste tokene i zajedničke komponente: CTA sa ratingom, naslovi, uvodni tekst, dve kolone, kartice, ikonice, forme, hover i focus. Posebno uporedi stvarno izmerene širine i razmake u browseru sa tokenima. Ispravi jasna odstupanja bez redizajna. Navedi samo preostale odluke koje zaista traže moj izbor, i nemoj tvrditi da je browser provera urađena ako nije.
```
