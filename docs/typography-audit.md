# Typography audit — 23 October 2026

## Scope and status

Typography was reviewed across every currently implemented page: homepage, contact, about, about v1, privacy, terms and the design-system showcase. Header, announcement banner, footer, forms, calculator, product cards, guide, gallery, reviews and FAQ are included. Reserved product routes currently return no page content; Google Maps controls belong to the external embed.

The tested Chromium layouts pass the recorded checks. This is a typography milestone, not a claim that color contrast, all accessibility states or real-device browser coverage are finished. Existing copy and the approved overall heading scale were preserved.

## Canonical contract

`src/app/tokens.css` owns values. `src/app/globals.css` applies roles; `Heading` separates semantic HTML rank from visual size. `/design-system#typography` reports actual computed styles and loads/checks both local variable-font families at weights 400, 600 and 700 with Serbian Latin characters. [typography-usage.md](typography-usage.md) lists every authored CSS typography declaration.

Values below assume the normal 16px browser root. Sizes use rem or fluid rem/vw expressions; line-height is unitless. Do not introduce pixel-sized text or per-section overrides to solve hierarchy problems.

| Role | Family | Size / line-height | Weight token |
| --- | --- | --- | --- |
| Page / hero title | Montserrat | 32–48px / 40–56px | `--weight-heading-hero` = 700 |
| Section title | Montserrat | 28–40px / 36–48px | `--weight-heading-section` = 700 |
| Card / legal subsection | Montserrat | 22–24px / 30–32px | `--weight-heading-card` = 600 |
| Compact heading | Montserrat | 16px / 24px | `--weight-heading-compact` = 600 |
| Body / input | Manrope | 16px / 26px | `--font-weight-normal` = 400 |
| Primary choice / navigation | Manrope | 16px / 24px | Choice 400; navigation 600 |
| Supporting copy | Manrope | 14px / 22px | 400; emphasis where intentional |
| Field label / review date | Manrope | 14px / 20px | Label 600; date 400 |
| CTA, all button sizes | Montserrat | 16px / 24px | `--weight-button` = 600 |
| Emphasized body text | Manrope | 16px / 26px | `--weight-emphasis` = 700 |
| Optional lead (showcase) | Manrope | 18–20px / 28–32px | 400 |

Fluid heading values vary continuously between endpoints; they are not fixed mobile/desktop jumps. Tracking is negative only for the established heading roles; normal body, controls and process numerals have normal tracking. Weight primitives back both semantic aliases and Tailwind utilities.

### Role decisions and deliberate exceptions

- Primary calculator choices, product color choices and gallery tabs are readable 16px controls. They are not supporting metadata.
- Contact titles in the homepage cards, contact page and footer share the compact 16px/24px Montserrat heading role. Their HTML rank follows the document structure.
- Form labels, validation/help text, attachment limits, privacy notes, review dates, rating summaries and the announcement banner remain 14px supporting information.
- FAQ questions keep the approved body-sized Montserrat 700 style; secondary product-card disclosures use Montserrat 600. Neither becomes a large section heading.
- “Kako se računa cena?” and hero benefits remain emphasized body text, separate from heading-weight decisions. A bold phrase does not become an h3 just for its appearance.
- Review names use the compact 1.25 line-height (20px at 16px); dates use the standard label line-height. The existing metadata gap remains intact.
- About statistics retain Montserrat, proportional numerals and bold weight. Calculator numeric results retain their existing larger numeric hierarchy. Tabular digits remain intentional for changing numeric controls/counts, not the about statistics.
- The about-page photo caption now uses body-family Manrope. Uppercase caption tracking uses its own token.
- Legal prose retains the explicitly requested full site-container width. Narrowing its reading measure would be a separate approved layout decision.
- Decorative text inside supplied image/SVG artwork is not live page typography. The only inline font-weight demo is the deliberate weight comparison on `/design-system`.

## Findings and resolutions

| Finding | Resolution |
| --- | --- |
| Repeated literal CSS weights made global roles difficult to change safely | Added weight primitives and semantic heading/button/label/emphasis aliases; replaced authored literal weights |
| Calculator and product primary choices used small helper-text sizing | Increased 14px to the 16px choice role; gallery tabs use the same line-height |
| Contact-page titles were smaller and used a different family from equivalent homepage/footer titles | Unified the compact heading role at 16px/24px Montserrat 600 |
| Upload action text used helper sizing | Primary dropzone action now 16px; file-format/limit hints stay 14px |
| Review name/date rhythm was uneven | Shared compact-name and label-date line-height roles |
| Process numeral tracking made single digits look off-center | Normal tracking; approved 24px size preserved |
| At 200% root text, calculator choices became too narrow | Choice grid can wrap while keeping three choices per row at ordinary tested sizes |
| At enlarged text, desktop navigation overflowed at tablet widths | Header container query allows the existing mobile navigation to appear when its text needs the space |
| Long email and opening-hours text overflowed at enlarged sizes | Footer children may shrink/wrap; banner text may wrap instead of clipping |
| Fixed-height review cards and intrinsic rating width clipped enlarged text | Cards have a minimum height, explicit shrinkable column, wrapping author/rating rows and breakable long words; expanded reviews grow naturally |
| Larger choices made the calculator right panel about 3px taller than the old 592px minimum | Shared desktop minimum is now 37.5rem (600px). Initial panels match; added rows grow only the right panel |

These reflow changes support typography; they do not change the palette, copy, prices or business behavior. CTA and rating remain one group.

## Verification

- Source inventory: `node scripts/typography-inventory.mjs` checks all authored typography declarations in the two current stylesheets. It rejects literal family/size/weight/line-height/tracking values outside documented reset exceptions. Regenerate `docs/typography-usage.md` after changes.
- Normal Chromium matrix: all seven routes at 320, 390, 640, 768, 1024 and 1440px (42 route/width combinations). Checked actual computed styles, visible clipping, viewport overflow and existing spacing contracts. Screenshots of all seven routes at 390, 768 and 1440px were reviewed; the live typography showcase was inspected after its final update.
- Enlarged-text stress test: actual root font-size temporarily set to 200%, seven routes at 390, 768 and 1440px (21 combinations). The override was removed afterwards. Reviewed open mobile navigation, expanded FAQ and expanded review; the latter exposed and verified the final intrinsic-width fix.
- Final calculator alignment recheck at 320, 1024, 1280, 1440 and 1920px passed. At 1440px both initial panels measured 600px; after adding three entries the left remained 600px and the right grew to approximately 932px.
- Explicit local font loading/checks passed for Montserrat and Manrope 400/600/700 with `Čč Ćć Šš Žž Đđ 10+`.
- Final `npm run lint`, `npx tsc --noEmit --incremental false`, `npm run build` and `git diff --check` all passed. `next-env.d.ts` has no diff.

Evidence for this local run is under `/tmp/insecto-typography/` (temporary, not committed): normal matrices, enlarged-text matrix, spacing regression, final calculator measurements and screenshots. A source/DOM pass does not replace visual inspection.

## Limits and next step

The 200% root-font test is an enlarged-text stress test, not a substitute for native browser zoom or real iOS/Android/Safari testing. Final copy and unusually long future author names/attachments can reopen affected checks. No real inquiry was submitted. The next category is color and contrast across normal, hover, focus, selected, disabled and error states, followed by shared-component and keyboard audits. See [design-system-readiness.md](design-system-readiness.md).
