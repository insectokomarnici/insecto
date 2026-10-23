# Site-wide spacing contract — 23 October 2026

## Scope and decision

This replaces the 22 October contract. The previous 24px content-group gap was consistently implemented but too strong for connected content. Consistency now means using the same distance for the same relationship, not using one distance for every relationship.

Reviewed scope: every homepage section, shared header/banner/footer, `/kontakt`, `/o-nama`, `/o-namav1`, `/politika-privatnosti`, `/uslovi-koriscenja`, `/design-system`, form states, calculator rows/results, product/FAQ disclosures, gallery tabs/rail/lightbox and navigation. `/plise-komarnici`, `/rolo-komarnici` and `/fiksni-komarnici` currently return `null`; they have no page layout to audit. External Google Maps internals are not styled by this project.

`src/app/tokens.css` is the only source of spacing values. Its comments explain roles. `globals.css` and the alternative About module consume semantic tokens. [spacing-usage.md](spacing-usage.md) records every spacing selector/property, including breakpoint overrides. `/design-system` reads the actual computed CSS values at the current viewport; it no longer maintains a second hard-coded numeric table.

## Content-based decision rule

Token usage alone is not approval of a spacing decision. Classify the relationship before choosing the value:

1. **One unit:** label/value, icon/text or image/caption. Use compact role tokens (0/4/8/12px); zero is intentional for author/date and contact label/value pairs because their line boxes already separate the rows.
2. **One reading topic inside a panel:** paragraphs and related groups use 16px; a heading stays attached to its copy at 12px (8px for a compact card title/body pair).
3. **Separate blocks inside a section:** cards followed by a form, text/details/map, story text/media and an introduction followed by a feature list use `--section-block-gap` (16px phone, 24px from tablet). This role shares the peer-card rhythm through `--card-grid-gap`.
4. **Section heading/introduction:** 24px before the main content. This is not a default for every nested element.
5. **Independent columns:** `--layout-gap` remains 32/40/48px, also when those columns stack. Guide panels are independent reading columns even though they have card backgrounds. A form introduction inside a single padded form panel remains a closer 16px group when stacked.
6. **Action group:** 20px from its content, 8px between CTA and rating. Text-link actions use the same outside action gap; neither action nor rating is detached from the group.
7. **Separate sections:** each section contributes 32/40/48px at its edge; adjacent same-surface sections therefore have 64/80/96px total.

Do not select a token because its numeric value happens to fit. `--section-block-gap` and `--content-group-gap` both resolve to 16px on phones, but only the structural block role grows at tablet widths. `.section-block` replaces the ambiguous `.section-group` modifier; contact and gallery now use the exact same shared selector.

## Visual hierarchy

| Relationship | Canonical token | Phone / tablet / desktop, px |
| --- | --- | --- |
| Compact metadata: stars, number/label, choice icon/label | `--metadata-gap` | 4 / 4 / 4 |
| Card title to description | `--card-copy-gap` | 8 / 8 / 8 |
| Inline icon/text | `--inline-gap` | 8 / 8 / 8 |
| Image to caption | `--caption-gap` | 8 / 8 / 8 |
| Heading to its accompanying body copy | `--heading-copy-gap` | 12 / 12 / 12 |
| Larger icon/avatar to copy | `--icon-copy-gap` | 12 / 12 / 12 |
| Blocks within an icon/review card | `--card-item-gap` | 12 / 12 / 12 |
| Paragraphs | `--paragraph-gap` | 16 / 16 / 16 |
| Related groups in one topic/panel | `--content-group-gap` | 16 / 16 / 16 |
| Content to CTA + rating group | `--content-action-gap` | 20 / 20 / 20 |
| CTA to its rating | `--action-rating-gap` | 8 / 8 / 8 |
| Adjacent buttons | `--action-group-gap` | 12 / 12 / 12 |
| Section heading/introduction to content | `--section-heading-gap` | 24 / 24 / 24 |
| Independent columns / stacked panels | `--layout-gap` | 32 / 40 / 48 |
| Peer card grid | `--card-grid-gap` | 16 / 24 / 24 |
| Separate blocks within one section | `--section-block-gap` | 16 / 24 / 24 |
| Card/panel inset | `--card-padding` | 20 / 24 / 24 |
| Each section's vertical edge | `--section-padding` | 32 / 40 / 48 |
| Compact panel's vertical inset | `--section-padding-compact` | 24 / 32 / 40 |
| Minimum viewport side gutter | `--page-gutter` | 20 / 24 / 32 |

Values assume a 16px root. CSS uses rem, so user text enlargement also enlarges spacing. Tablet changes start at 48rem; desktop changes at 64rem. A heading stays closer to its own text than a new content group. That hierarchy is intentional; the previous 24px jump within a topic has been reduced to 16px. Two adjacent sections contribute both their edges (64/80/96px total), without extra outside margins.

## Controls, lists, dividers and overlays

| Relationship | Token / decision |
| --- | --- |
| Form rows and ordinary columns | `--form-field-gap`: 16px; controls retain their 52px minimum height |
| Label to control, control to help/error | `--field-label-gap`: 8px |
| Calculator dimensions / compact choices inside forms and cards | `--choice-gap`: 8px; full-width gallery tabs use the gallery grid gap instead |
| Ordinary list rows / compact attachment or legal lists | `--list-gap`: 12px / `--list-compact-gap`: 8px |
| Each accordion row's top/bottom inset | `--disclosure-padding`: 12px; both FAQ and product rows have a 52px minimum |
| Expanded accordion answer's bottom inset | Same `--disclosure-padding`: 12px |
| Content from a divider | `--divider-content-gap`: 16px; combined with card inset where the divider is inset |
| Gallery tabs/photos/carousel controls | `--gallery-content-gap`: same as the photo-to-photo gap, 16px / 24px / 24px |
| Desktop navigation links | `--navigation-gap`: 24px |
| Menu shell / link row / nested list | `--menu-padding`: 8px; `--menu-item-padding-block`: 12px; `--menu-item-padding-inline`: 16px; `--menu-item-gap`: 4px; `--menu-indent`: 12px |
| Compact controls | `--compact-control-padding-block`: 8px / `--compact-control-padding-inline`: 12px |
| Product swatches | `--swatch-padding-block`: 4px / `--swatch-padding-inline`: 8px |
| Lightbox toolbars | `--toolbar-padding`: 12px; text starts at `--toolbar-label-inset`: 20px |
| Floating call button from viewport | `--floating-control-inset`: 20px |
| Gallery's visible next-card hint | `--gallery-peek`: 32px, not a gap between cards |
| Gallery rail scrollbar clearance | `--gallery-scrollbar-clearance`: 8px below the photos |
| Footer legal strip inset | `--footer-legal-padding`: 16px |

Button paddings, sizes, focus-ring clearance and control border compensation remain in their dedicated tokens. Geometry such as a hidden radio's `margin: -1px`, a zero reset, or `margin-inline: auto` is not an editorial gap. Animation transforms and font line-height are not gap tokens either. The FAQ anchor retains its header-clearance offset; native page/history scrolling remains unchanged.

## One owner per relationship

- Choose the token by the relationship: independent text/media or content columns use the larger responsive `--layout-gap`; peer cards in a compact repeated grid use `--card-grid-gap`. Do not shrink a two-column content layout just because its columns are visually card-shaped.
- Full-width gallery tabs belong to the photo grid: their horizontal gutters and photo-width calculations use `--gallery-content-gap` together. At desktop, the three tab edges align with the three visible photo edges. On smaller screens the intentionally different tab/rail item counts stay intact, with equal gutters.
- `.content-flow` owns mixed text flow through incoming margins: paragraph/group 16px, after a heading 12px, `.content-actions` 20px. Its grid gap is zero.
- `.section-inner` / `.section-flow` use 24px for title/content; `.section-block` uses the responsive 16/24px peer-card rhythm; `.section-actions` uses 20px. The gallery explicitly shares its responsive gallery gap between tabs, the image rail, and controls.
- Text flow grids use `align-content: start`: equal-height parent grids must not distribute spare height into text rows and create apparent gaps larger than their tokens.
- `.stack` is a uniform paragraph/component stack using `--paragraph-gap`. It must not override a mixed heading/body/action flow.
- Local layout classes may use a semantic `gap` for their children, but must not add margins to those same relationships. Shared flow selectors intentionally take precedence over list resets.
- An action and its rating are one group. The outside 20px belongs to the group; the inside 8px belongs to the action/rating relation.
- No component margin/padding/gap uses `--space-N` directly. Primitive scale values belong in the token file. Match the token's meaning, not just its numeric value.

Example: `.calculator-copy-intro` uses `--content-group-gap` (16px) between “Unesi širinu…” and “Kako se računa cena?”. `.calculator-price-explanation` uses `--heading-copy-gap` (12px) between its short heading, formula and explanation. Product title/description uses `--card-copy-gap` (8px); description/colours/accordion groups use 16px.

## Coverage by area

| Area | Result |
| --- | --- |
| Hero | Heading/body 12px, body/benefits 16px, benefit rows 12px, CTA 20px, rating 8px. Portrait layout preserved. |
| Products | Title/description 8px; description/colours/disclosures 16px. Choice gaps 8px and independently named swatch padding. |
| About homepage | Heading/body 12px, paragraphs 16px; stats have 16px before their divider and 16px from divider to values. |
| Reviews | Title/grid 24px, CTA 20px. Card blocks 12px, author/date have no extra gap. Score/count now form a 4px group instead of using a negative margin. |
| Selection guide | Title/cards 24px; independent left/right content columns use `--layout-gap` (32/40/48px); card icon/copy 12px; title/body 8px. Equal columns and authored copy preserved. |
| Process and included services | Both use the same 20/24px card inset, 12px icon/title, 8px title/body and 16px reserved divider separation. |
| Calculator | Content groups 16px, explanation 12px, form rows 16px, choice/dimension columns 8px. From 640px, width/height/quantity share one row and type/color each occupy a full row; below 640px width/height share a row and quantity occupies its own row. Removed auto margin above results. Desktop minimum is 37.5rem (600px), adjusted in the typography audit for 16px primary choices; taller intrinsic copy is allowed. Initial panels align and saved rows grow only the right panel. |
| Gallery | Heading/tabs 24px; tabs/photos, photos/controls and photo-to-photo spacing share `--gallery-content-gap` (16/24/24px). The rail has no extra top inset, so focus clearance does not make the first photo appear farther from its tab than neighboring photos are from each other. Whole bordered tabs, two-row mobile layout and carousel behavior preserved. Long tab text can wrap at enlarged text sizes. |
| Service area | Heading/body 12px, paragraphs 16px, list rows 12px, CTA 20px; map is separated with the layout token. |
| FAQ | Heading/body 12px. Stacked intro/list 24px, desktop columns 48px. Toggle's layout box no longer adds accidental row height. FAQ/product disclosure insets match; answer uses body line-height. |
| Homepage contact | Heading/cards 24px; cards/form 16/24px; intro/form 16px when stacked. Cards keep icon/copy at 12px, title/value together. Icons can wrap above copy when enlarged text needs more width. |
| Contact page | Title/columns 24px; text/details/map 16/24px; form heading/body 12px and intro/fields 16px. Map bottom follows the form on desktop. |
| Forms | 16px rows, 8px label/help gaps; errors, upload rows, feedback and footer use named roles. Full control and button targets preserved. |
| About page | Title/story 24px, paragraphs 16px; image/text blocks 16/24px, caption 8px. |
| Alternative About | Same shared flow, introduction/feature-list 16/24px and list items 16px, icon/copy 12px, captions 8px, actions 20px with rating 8px. |
| Privacy and terms | Title/content and independent legal topics 24px; heading/body 12px; paragraphs 16px; compact lists 8px. |
| Header/footer | Navigation/menu distances explicitly named; footer heading/list 12px, rows 12px, legal strip 16px inset. Existing responsive column ordering preserved. |
| Design system | Demonstrations use the same flows. Live token table reports actual values; raw Tailwind spacing overrides removed. |

## Token migration

These ambiguous names have been removed from active source; do not reintroduce aliases:

| Previous name | Current name |
| --- | --- |
| `--stack-gap` | `--paragraph-gap` |
| `--section-content-gap` | `--layout-gap` |
| `--section-intro-gap` | `--section-heading-gap` |
| `--grid-gap` | `--card-grid-gap` |
| `--card-content-gap` | `--card-item-gap` |
| `--cta-gap` | `--content-action-gap` |
| `--cta-review-gap` | `--action-rating-gap` |

`--content-group-gap` stays as a role, now 16px instead of 24px. Separate roles may intentionally share a value; do not alias paragraphs, form rows and content groups to one another.

## Verification and repeatability

- `node scripts/spacing-inventory.mjs` validates token references and flags direct primitive/literal layout spacing, then regenerates the usage inventory.
- `scripts/audit-spacing.mjs` checks all seven routes at 320, 390, 639, 640, 767, 768, 1023, 1024, 1280, 1440 and 1920px, plus 200% root text size at 390 and 1440px: 91 route/viewport combinations. It checks document overflow, sampled text clipping, actual flow gaps and initial calculator alignment. It captures phone/tablet/desktop screenshots.
- `scripts/audit-spacing-interactions.mjs` checks calculator selection geometry and adding/removing three rows, unchanged left-panel height, FAQ/product expansion, gallery filters/lightbox, review expansion, mobile/desktop navigation, form validation, attachments and preserved input after a simulated failure. Contact requests are intercepted locally; no inquiry is sent.
- Browser scripts require Playwright with Chrome available. Set `PLAYWRIGHT_MODULE_PATH` when using a bundled runtime, and optionally `AUDIT_BASE_URL` / `AUDIT_OUTPUT_DIR`. Defaults: localhost port 3000 and `/tmp/insecto-spacing-2026-10-23`.
- Required code checks: `npm run lint`, `npm run typecheck`, `npm run build`, `git diff --check`.

Browser checks are samples of geometry and interaction behavior, not a claim to certify every possible device or third-party map control. Text enlargement is an additional check, not a substitute for normal viewport review.

### Results — 23 October 2026

**Current status: content relationships reviewed and corrected for the existing rendered pages in the tested Chromium layouts.** This is not completion of the entire design system. See [design-system-readiness.md](design-system-readiness.md) for the remaining acceptance checks.

The earlier production baseline passed 91 route/viewport geometry checks (including 200% root text at 390/1440px), and stateful checks at 390/1440px. That historical result is separate from the final review below; the enlarged-text matrix was not rerun in the final browser pass.

#### Final visual and geometry pass

- Visually reviewed all seven rendered routes at **390, 768 and 1440px**: homepage, contact, About, alternative About, privacy, terms and design-system demonstration. Header, footer and full page content were included.
- Read-only DOM measurements passed **77 route/width combinations**, using the eleven widths listed above. No document overflow or failures in the checked content gaps, text clipping, column alignment and initial calculator alignment.
- After adding a regression assertion for the calculator row layout, repeated the homepage measurements at all eleven widths: **11/11 passed**.
- At 390/768/1440px, exercised three calculator additions, FAQ/product disclosures, review expansion, gallery filters and lightbox navigation/closing, and empty contact-form validation. Calculator additions left the left panel's height unchanged. No actual inquiry was sent.
- Visually inspected mobile nested navigation and tablet/desktop navigation. Reviewed gallery lightbox at phone/desktop and form validation at all three visual widths.
- Final pass evidence is local in `/tmp/insecto-final-visual`: route screenshots, `boundaries.json`, `calculator-regression.json`, expanded-state screenshots and validation screenshots. These temporary files are review evidence, not shipped assets.

#### Findings resolved

| Finding | Resolution | Regression protection |
| --- | --- | --- |
| Gallery tabs used compact choice spacing while photos used card spacing | Tab gutters and photo width calculations share `--gallery-content-gap` | Compare actual tab/photo gutters and desktop column edges |
| Independent guide columns must follow the site column rhythm | Kept `--layout-gap` as the documented rule for both guide columns and calculator columns | Compare their desktop gutters |
| At tablet widths, quantity and type occupied the same row | Three measurement columns from 640px; type and color each span the full row | Check row alignment, full width and no row overlap at all eleven widths |

#### Code validation

After the final changes: spacing inventory validation, `npm run lint`, `npm run typecheck -- --incremental false`, `npm run build`, script syntax checks and `git diff --check` all passed. No generated `next-env.d.ts` change remained.

#### Scope and limitations

- `/plise-komarnici`, `/rolo-komarnici` and `/fiksni-komarnici` currently render no page content; they have no layout to certify yet.
- Google Maps shell dimensions were checked; Google's embedded controls and typography are external.
- Responsive Chromium inspection is not a real-device Safari/iOS/Android certification. That is a separate release check.
- Existing placeholder copy and an empty fixed-screen gallery are content tasks. As requested, this pass does not invent copy or add photographs to fill space.
- Attachment/server-failure behavior belongs to the earlier stateful baseline; the final visual pass did not repeat those scenarios. The broader interaction/accessibility audit remains open.
- Local development remains on port 3000. No commit or push was made for this revision.

## Content-relationship re-review — 23 October 2026

The earlier numeric pass missed a semantic error: contact cards and the form used the 16px text-group role, while equally distinct gallery blocks used the responsive card rhythm. The decision rule above and this re-review supersede that classification.

| Area reviewed | Decision / reason |
| --- | --- |
| Homepage contact | **Changed:** cards → form now uses shared `section-block` (16/24px), matching both peer card gaps and gallery tabs → photos. The intro inside the blue panel remains 16px from its form on mobile: both are parts of one padded form panel. |
| Contact page | **Changed:** introduction → contact details → map use the same structural block token. Icon rows retain 12px list spacing and zero extra label/value gap. Desktop map and form bottoms remain aligned, including validation errors. |
| About page | **Changed:** text → figure with caption → continuing text are separate blocks at 16/24px. Paragraphs within each text group remain 16px. |
| Alternative About | **Changed:** heading/intro group → commitments list is a structural boundary at 16/24px; individual commitments remain 16px. Gallery text-link action now has the shared 20px action spacing, rather than paragraph spacing. |
| Design-system demonstration | **Changed:** separate demonstrations and the live token table use `ds-section-block`; the new role is listed with its current computed value. |
| Hero / service area | Retained: heading/body 12px, paragraphs and benefit-group boundary 16px, list rows 12px and action 20px. Media/map columns use layout spacing, not text spacing. |
| Products | Retained: compact card title/body 8px, separate copy/options/disclosure groups 16px, label/choice 8px. Accordion controls retain symmetric 12px vertical padding and full hit areas. |
| Process / included services | Retained matching card grid, inset, icon/title and title/body relationships. Divider clearance is deliberate padding inside the card, not an extra external card gap. |
| Homepage About statistics | Retained: 16px before the divider and 16px inset after it. That creates two sides of a separator, not an accidental doubled margin. |
| Reviews | Retained: author/date are one compact unit; rating/copy blocks use 12px; read-more uses 8px plus its button hit-area padding. Equal collapsed card height is intentional, not distributed text spacing. CTA is 20px below the grid. |
| Guide | Retained the standard independent-column gutter (32/40/48px), card inset and compact title/body grouping. Unequal text lengths are content differences, not a reason to add different margins. |
| Calculator | Retained: heading/instructions 12px, instruction/explanation and explanation/diagram groups 16px. Formula explanation is a compact 12px stack. Form rows 16px, label/control 8px, peer choices 8px. Left panel remains stable when saved rows grow. |
| Gallery | Retained responsive shared tab/photo gutters. It now uses the same `section-block` composition rule as contact. The rail additionally reserves 8px for its scrollbar, so photo edge → controls includes clearance plus the block gap (and native scrollbar thickness where present). This is functional clearance, not a hidden editorial margin. |
| FAQ | Retained: title/body 12px, intro/list 24px when stacked; questions form one divided list with symmetric disclosure padding. Desktop columns retain 48px. |
| Header / footer / overlays | Retained separate navigation, menu, footer-column and toolbar roles. Their control targets and edge insets are functional component spacing, not prose gaps. |
| Privacy / terms | Retained: 24px between new headed topics, 12px heading/body and 16px paragraphs; compact bullet rows 8px. Full site-container width remains intentional. |

### Evidence for this revision

- Reviewed all spacing declarations in the generated inventory and their content/markup roles, including the alternative About CSS module.
- Fresh visual inspection of all seven rendered routes at 390, 768 and 1440px, including header/footer. Evidence: `/tmp/insecto-spacing-semantic`.
- Extended geometry checks explicitly distinguish structural boundaries from text groups. All **77** route/width combinations pass on this revision.
- Empty validation on both forms at 390/768/1440px: no overflow; homepage contact/gallery gaps are respectively **16/16**, **24/24**, **24/24** pixels. Contact-page map/form bottom difference on desktop remains **0px**.
- No test inquiry was sent. Previously tested disclosure/lightbox and calculator behavior was not changed by this revision. The earlier enlarged-text and interaction results remain historical evidence, not newly rerun claims.
- Visible white space inside transparent images, equal-height review cards and the gallery scrollbar clearance are not CSS content-group gaps. Preserve the approved asset framing and card behavior.

Code checks after the content-relationship revision: spacing inventory, script syntax, ESLint, TypeScript with incremental compilation disabled, production build and `git diff --check` passed. No commit or push was made.
