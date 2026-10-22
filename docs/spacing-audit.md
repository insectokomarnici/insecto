# Site-wide spacing contract — 22 October 2026

## Scope and design decision

This is the current spacing contract for every implemented page: homepage, `/kontakt`, `/o-nama`, privacy policy, terms, alternative `/o-namav1`, shared header/footer, dialogs and `/design-system`. It supersedes the earlier token-only audit. The three reserved product routes return `null`; there is no product-page layout to inspect yet.

The goal is a compact, connected reading rhythm: titles belong visibly to their content and actions belong to the content they follow. Large section gaps must not leak into card internals or CTA placement. Keep separate topics distinguishable instead of reducing every distance indiscriminately.

The principles follow [Carbon's spacing guidance](https://www.carbondesignsystem.com/building-blocks/foundations/spacing/overview) and [Atlassian's spacing foundation](https://atlassian.design/foundations/spacing/): limited spacing scales, proximity for related content, and larger separation between groups. The exact values below are decisions for Insecto's existing typography and layouts, not values prescribed by those systems.

## Canonical scale and relationships

`src/app/tokens.css` owns all decisions. Layout uses rem; the table assumes the default 16px root. Tablet begins at 48rem, desktop at 64rem. Existing 40rem, 80rem and 96rem breakpoints remain available for component layout changes.

| Relationship | Token | Phone | Tablet | Desktop |
| --- | --- | --- | --- | --- |
| Section padding, **each** vertical edge | `--section-padding` | 32px | 40px | 48px |
| Compact inset section/panel | `--section-padding-compact` | 24px | 32px | 40px |
| Container side gutter, minimum | `--page-gutter` | 20px | 24px | 32px |
| Section title/introduction to cards or content | `--section-intro-gap` | 24px | 24px | 32px |
| Major columns / stacked halves | `--section-content-gap` | 32px | 40px | 48px |
| Card grid | `--grid-gap` | 16px | 24px | 24px |
| Card padding | `--card-padding` | 20px | 24px | 24px |
| Heading to accompanying body copy | `--heading-copy-gap` | 12px | 12px | 12px |
| Paragraph to paragraph | `--stack-gap` | 16px | 16px | 16px |
| Separate groups inside a panel | `--content-group-gap` | 24px | 24px | 24px |
| Card title to description | `--card-copy-gap` | 8px | 8px | 8px |
| Card icon/title or review content groups | `--card-content-gap` | 12px | 12px | 12px |
| Content to marketing CTA group | `--cta-gap` | 24px | 24px | 24px |
| CTA to rating row | `--cta-review-gap` | 8px | 8px | 8px |
| Inline icon to text | `--inline-gap` | 8px | 8px | 8px |
| Larger icon/avatar to copy | `--icon-copy-gap` | 12px | 12px | 12px |
| List items | `--list-gap` | 12px | 12px | 12px |
| Image to caption | `--caption-gap` | 8px | 8px | 8px |
| Disclosure vertical padding, each edge | `--disclosure-padding` | 12px | 12px | 12px |
| Gallery tabs to results / carousel to controls | `--control-content-gap` | 16px | 16px | 16px |
| Form rows and ordinary field columns | `--form-field-gap` | 20px | 20px | 20px |
| Field label to control | `--field-label-gap` | 8px | 8px | 8px |
| Calculator dimensions and choice columns | `--choice-gap` | 8px | 8px | 8px |
| Desktop navigation items | `--navigation-gap` | — | 24px | 24px |

Adjacent sections contribute both edges, giving 64/80/96px between their content boundaries. Do not add a second outside margin. A two-column layout's 48px desktop gap is intentionally larger than the 24px card-grid gap: columns contain independent topics; cards are peers within one group.

## Implementation contract

- `.section-inner` / `.section-flow`: grid with zero gap; each subsequent child receives the semantic intro margin. `.section-actions` changes only its incoming distance to 24px. `.section-group` sets 24px between related groups; `.section-controls-content` sets 16px after gallery tabs.
- `.content-flow`: paragraphs use 16px, a child immediately after `.heading` uses 12px, `.content-group` uses 24px, and `.content-actions` uses 24px. There is no parent gap to add accidentally to these margins.
- `.stack`: uniform paragraph/component stacks only. Do not use it as a substitute for a mixed heading/body/action flow.
- Incoming-spacing selectors are intentionally outside the component layer and more specific than list margin resets. Otherwise `.process-steps { margin: 0 }` silently erases heading-to-list space.
- Component styles own display, alignment and appearance; shared flow classes own relationships. Avoid negative margins or arithmetic such as `cta-gap - stack-gap`.
- Public spacing stays in CSS, not inline JSX. Inline styles in the internal token showcase demonstrate values; disclosure heights are animation measurements, not design decisions.

## Coverage and decisions by area

| Area | Applied / retained decision |
| --- | --- |
| Header, banner, menus | Desktop navigation 24px; dropdown distance reduced to 8px; 12px menu-row padding retained, as are compact icon gaps and full interaction targets. Mobile menu hierarchy keeps a 12px inset. |
| Hero | H1/body 12px, body/benefits 16px, benefit rows 12px, benefits/CTA 24px. Removed the old 16px parent gap + 8px extra-margin construction. |
| Products | Shared heading/grid distance; card padding 20/24px, title/body 8px, option groups 24px, swatches 8px; disclosure padding shared with FAQ. |
| About homepage | Heading/body 12px; paragraphs 16px; stats separated by a 24px incoming gap and 16px after the divider. Value/label remain compact. |
| Process and included services | Matching card padding, 12px icon/title, 8px title/body; equal space reserved for accent borders and bottom dividers. Process CTA is 24px after cards regardless of breakpoint. |
| Reviews | Heading/grid 24/32px; grid/CTA 24px instead of up to 40px; button/rating 8px. Avatar/copy 12px, author/date stay together without an extra gap. Fixed review heights and expansion behavior retained. |
| Guide | Two equal cards with shared grid/padding; icon/title 12px and title/body 8px. No content or images added. |
| Calculator | Heading/explanation 12px; instruction/calculation group 24px; labels 8px from controls, rows 20px apart; all three dimension columns and choice columns use 8px. Desktop minimum reduced from 644px to 624px after measuring intrinsic content. Initial panels align; added items grow only the right panel. |
| Gallery | Section title to tabs 24/32px; tabs to panel 16px, independent of section-intro spacing. Frame/controls 16px. The rail retains 4px top and 8px bottom for visual/focus/scrollbar clearance. |
| Gallery lightbox | Page gutters bound the dialog; 12px toolbar/control padding retained to fit 48px buttons. Image sizing and scrolling remain independent of content gaps. |
| Service area | Heading/body 12px, paragraphs 16px, list rows 12px, CTA 24px; map and copy share major column spacing. |
| FAQ | Heading/body 12px; question rows use symmetric 12px padding and preserve the 40px toggle area; answer bottom padding 12px. No sticky movement or default open question. |
| Homepage contact | Heading/cards 24/32px, cards/form 24px; larger icon/copy gap 12px, label/value together. Form intro/fields use 24px vertically and standard layout columns horizontally. |
| Contact page | Centered introduction uses common title spacing; left body/details/map groups 24px; detail icon/copy 12px. Map bottom remains aligned with the form at desktop. |
| Forms | Field rows 20px, label/control 8px, control padding 12px vertical /16px horizontal retained. Button/footer spacing remains a form relationship, not a marketing CTA. Feedback and upload lists keep 8–16px internal spacing. |
| About page | Title/body uses section-intro distance; paragraphs 16px, image/body groups 24px, caption 8px. No redundant margins around the image. |
| Legal pages | Title/content and legal-block separations use section-intro gap; heading/body 12px, paragraphs 16px, list rows 8px. Full standard container width preserved. |
| Alternative About | Shared mixed content flow replaces uniform 24px gaps; card descriptions 8px, image captions 8px; contact CTA/reviews remain a single group. |
| Footer | Shared outer section padding and major column gaps, heading/list 12px, list rows 12px, icon/text 8px. Bottom legal row retains 20px vertical padding. |
| Design-system page | Live spacing table updated; its section spacing follows the same tokens. Demonstration-only gaps and scale bars stay explicitly illustrative. |

## Deliberate exceptions

- Accessible control sizes and typography/line-height are not reduced as substitutes for spacing changes.
- Contact label/value and review author/date are one metadata unit: no added gap is needed beyond line-height.
- Calculator choice columns remain 8px by request, while ordinary form columns remain 20px.
- Equal-height cards can contain unused space when text lengths differ; fixed review heights are an explicit product decision. The guide's placeholder copy is unchanged.
- The calculator's desktop minimum accommodates the existing form and illustration while allowing content to grow. It is not a fixed height. At large text sizes layout stacks naturally.
- Google rating can be absent if its server data is unavailable. The spacing rules still apply to each rendered CTA/rating pair; no ratings or business claims were invented.

## Verification

Browser verification uses Chromium with the actual local site and loaded fonts. It covers all seven implemented/review routes at 320, 390, 639, 640, 767, 768, 1023, 1024, 1280, 1440 and 1920px, plus six routes at 200% root text size at 390 and 1440px. Checks include document overflow, sampled heading/label clipping, section title gaps and initial calculator alignment.

Interaction checks cover focus geometry, choice selection, adding three separate calculator items without growing the left side, gallery tabs/lightbox and FAQ expansion. No real inquiry is submitted. The local Google Maps frame is checked; Google controls and external content are not restyled.

Actual geometry checks verify heading/body 12px, hero/process/review CTA distance 24px, gallery tabs/panel 16px and section title spacing 24/32px. Screenshots are reviewed on phone and desktop. Required implementation checks: lint, nonincremental TypeScript check, production build and whitespace diff check.

Final results: all 89 route/viewport checks passed without document overflow, sampled text clipping or browser JavaScript errors. All sampled homepage title-to-content gaps measured 24px below desktop and 32px on desktop, including the process list after its margin-reset correction. Initial calculator panels measured equal heights at 1024, 1280, 1440 and 1920px. CTA, rating and gallery relationship assertions passed at 390 and 1440px. Mobile nested navigation and desktop hover navigation were also exercised. ESLint, `npx tsc --noEmit --incremental false`, production build and `git diff --check` passed. No commit or push was made for this audit.
