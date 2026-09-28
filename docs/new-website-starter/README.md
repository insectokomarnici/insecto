# Paket za novi website

Pripremljeno 28. septembra 2026. na osnovu trenutnog Insecto projekta.

Ovaj paket prenosi način na koji je sajt organizovan: tokene, proporcije, komponente, responsive pravila i proces dorade. Novi sajt dobija sopstvene boje, fontove, sadržaj i fotografije. Nije potrebno da novi Codex projekat ima pristup Insecto repozitorijumu.

## Šta bih izabrao za tvoj način rada

Počni sa **design sistemom i prvom verzijom celog homepage-a**. Tako odmah vidiš kako boje, fontovi, razmaci i dugmad funkcionišu na pravim sekcijama. Tu verziju tretiraj kao početni predlog. Posle toga pregledajte i dorađujte jednu sekciju po jednu, počevši od headera i hero sekcije.

Ako boje i fontove želiš prvo posebno da uporediš, u brief-u izaberi režim `design-system-only`. U tom režimu dobijaš pregled komponenti i neutralnu probnu sekciju, pa homepage naručuješ sledećim promptom.

## Šta dobijaš

| Fajl | Namena |
| --- | --- |
| [DESIGN-SYSTEM-SPEC.md](DESIGN-SYSTEM-SPEC.md) | Temeljna tehnička specifikacija: konkretne mere, tokeni, komponente, ponašanje i kriterijumi provere. |
| [BRAND-BRIEF.md](BRAND-BRIEF.md) | Kratak formular za naziv, delatnost, boje, fontove, CTA i stvarne podatke novog biznisa. |
| [CODEX-PROMPTS.md](CODEX-PROMPTS.md) | Gotov početni prompt i promptovi za kasnije dorade. |
| [AGENTS.template.md](AGENTS.template.md) | Kratka trajna pravila za novi repozitorijum. Kopira se kao njegov `AGENTS.md`. |

Tehnička specifikacija i trajna projektna pravila su na engleskom. Brief, uputstvo i promptovi su na srpskom. Tekst sajta prati jezik iz brief-a.

## Kako da pokreneš novi projekat

1. Napravi zaseban folder za novi sajt i otvori ga kao novi projekat u Codexu.
2. U njemu napravi folder `docs/starter` i u njega kopiraj svih pet Markdown fajlova iz ovog paketa. Ako koristiš ZIP, raspakuj ga; nemoj samo ostaviti ZIP u projektu.
3. Popuni `docs/starter/BRAND-BRIEF.md`. Za prvu verziju najviše pomažu delatnost, publika, glavna usluga i željena glavna akcija. Za boje i fontove možeš napisati „predloži ti“.
4. Ako projekat još nema `AGENTS.md`, kopiraj sadržaj `docs/starter/AGENTS.template.md` u `AGENTS.md` u korenu projekta. Ako ga već ima, početni prompt traži od Codexa da smisleno spoji pravila.
5. Iz `docs/starter/CODEX-PROMPTS.md` kopiraj **Početni prompt** u novi Codex task.
6. Kada dobiješ lokalni prikaz, nastavi kratkim zahtevima za konkretne sekcije. Prompt za takvu doradu je u istom fajlu.

Predviđena početna struktura:

```text
novi-sajt/
  AGENTS.md
  docs/
    starter/
      README.md
      DESIGN-SYSTEM-SPEC.md
      BRAND-BRIEF.md
      CODEX-PROMPTS.md
      AGENTS.template.md
```

Codex zatim pravi aplikaciju, tokene, `/design-system`, dokumentaciju projekta i, u izabranom režimu, homepage. Paket sam po sebi nije gotova aplikacija.

## Kada nešto još nije poznato

- Boje i fontovi: Codex može da izabere privremeni vizuelni pravac i označi ga u projektnoj dokumentaciji kao predlog.
- Naziv ili fotografije: može da koristi jasno prepoznatljiv privremeni naziv i neutralne grafičke blokove za lokalni pregled.
- Broj telefona, adresa, radno vreme, cene, garancije i recenzije: ne sme da ih izmisli niti da preuzme Insecto podatke.
- Slanje upita: pregled forme može odmah da radi; stvarna isporuka poruka zahteva odredište i integraciju. Demo prikaz nikada ne tvrdi da je poruka stvarno poslata.

## Šta konkretno prenosimo

Glavni kontejner do 75rem, centralnu skalu tipografije i razmaka, tri veličine dugmeta, blago zaobljene kartice, jasnu hijerarhiju, provere na telefonu i desktopu i princip da se isti element svuda menja preko iste komponente. Novi identitet se definiše centralno kroz tokene.

Za novi projekat dodatno preciziramo zajednički `ActionGroup` za CTA sa recenzijama i `SplitLayout` za dve kolone. To su predložena poboljšanja za doslednost, a ne tvrdnja da Insecto već ima komponente sa tim imenima.

## Zašto postoji AGENTS.md

Codex koristi projektni `AGENTS.md` kao trajni izvor uputstava. Zato kratka pravila ostaju u njemu, a detaljne tabele i kriterijumi u specifikaciji. [Zvanična OpenAI dokumentacija za AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

Promptovi daju cilj, relevantne fajlove, granice zadatka i očekivane provere; naknadne izmene su usmerene na konkretnu sekciju. [Zvanična OpenAI dokumentacija o promptovima](https://learn.chatgpt.com/docs/prompting)

Ovaj paket ne menja postojeći Insecto sajt i ne odobrava push ili objavljivanje novog sajta.
