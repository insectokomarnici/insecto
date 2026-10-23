# Site-wide spacing contract — 23 October 2026

## Scope and decision

This replaces the 22 October contract. The previous 24px content-group gap was consistently implemented but too strong for connected content. Consistency now means using the same distance for the same relationship, not using one distance for every relationship.

Reviewed scope: every homepage section, shared header/banner/footer, `/kontakt`, `/o-nama`, `/o-namav1`, `/politika-privatnosti`, `/uslovi-koriscenja`, `/design-system`, form states, calculator rows/results, product/FAQ disclosures, gallery tabs/rail/lightbox and navigation. `/plise-komarnici`, `/rolo-komarnici` and `/fiksni-komarnici` currently return `null`; they have no page layout to audit. External Google Maps internals are not styled by this project.

`src/app/tokens.css` is the only source of spacing values. Its comments explain roles. `globals.css` and the alternative About module consume semantic tokens. [spacing-usage.md](spacing-usage.md) records every spacing selector/property, including breakpoint overrides. `/design-system` reads the actual computed CSS values at the current viewport; it no longer maintains a second hard-coded numeric table.

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
| Calculator dimensions / peer choices / gallery tabs | `--choice-gap`: 8px |
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
- `.content-flow` owns mixed text flow through incoming margins: paragraph/group 16px, after a heading 12px, `.content-actions` 20px. Its grid gap is zero.
- `.section-inner` / `.section-flow` use 24px for title/content; `.section-group` uses 16px; `.section-actions` uses 20px. The gallery explicitly shares its responsive gallery gap between tabs, the image rail, and controls.
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
| Calculator | Content groups 16px, explanation 12px, form rows 16px, choice/dimension columns 8px. Removed auto margin above results. Desktop minimum is 37rem (592px); taller intrinsic copy is allowed. Initial panels align and saved rows grow only the right panel. |
| Gallery | Heading/tabs 24px; tabs/photos, photos/controls and photo-to-photo spacing share `--gallery-content-gap` (16/24/24px). The rail has no extra top inset, so focus clearance does not make the first photo appear farther from its tab than neighboring photos are from each other. Whole bordered tabs, two-row mobile layout and carousel behavior preserved. Long tab text can wrap at enlarged text sizes. |
| Service area | Heading/body 12px, paragraphs 16px, list rows 12px, CTA 20px; map is separated with the layout token. |
| FAQ | Heading/body 12px. Stacked intro/list 24px, desktop columns 48px. Toggle's layout box no longer adds accidental row height. FAQ/product disclosure insets match; answer uses body line-height. |
| Homepage contact | Heading/cards 24px; cards/form 16px; intro/form 16px when stacked. Cards keep icon/copy at 12px, title/value together. Icons can wrap above copy when enlarged text needs more width. |
| Contact page | Title/columns 24px; text/details/map 16px; form heading/body 12px and intro/fields 16px. Map bottom follows the form on desktop. |
| Forms | 16px rows, 8px label/help gaps; errors, upload rows, feedback and footer use named roles. Full control and button targets preserved. |
| About page | Title/story 24px, paragraphs and image/text groups 16px, caption 8px. |
| Alternative About | Same shared flow, 16px group/list spacing, icon/copy 12px, captions 8px, actions 20px with rating 8px. |
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
- `scripts/audit-spacing.mjs` checks all seven routes at 320, 390, 639, 640, 767, 768, 1023, 1024, 1280, 1440 and 1920px, plus 200% root text size at 390 and 1440px: 91 route/viewport combinations. It checks document overflow, sampled text clipping, actual flow gaps and initial calculator alignment. It captures phone/desktop screenshots.
- `scripts/audit-spacing-interactions.mjs` checks calculator selection geometry and adding/removing three rows, unchanged left-panel height, FAQ/product expansion, gallery filters/lightbox, review expansion, mobile/desktop navigation, form validation, attachments and preserved input after a simulated failure. Contact requests are intercepted locally; no inquiry is sent.
- Browser scripts require Playwright with Chrome available. Set `PLAYWRIGHT_MODULE_PATH` when using a bundled runtime, and optionally `AUDIT_BASE_URL` / `AUDIT_OUTPUT_DIR`. Defaults: localhost port 3000 and `/tmp/insecto-spacing-2026-10-23`.
- Required code checks: `npm run lint`, `npm run typecheck`, `npm run build`, `git diff --check`.

Browser checks are samples of geometry and interaction behavior, not a claim to certify every possible device or third-party map control. Text enlargement is an additional check, not a substitute for normal viewport review.

### Results — 23 October 2026

The final production build passed all 91 route/viewport geometry checks, including enlarged text and the check for stretched heading rows. The stateful checks passed at 390px and 1440px. Source inventory validation, ESLint, TypeScript, production build and `git diff --check` passed. Desktop and phone views were inspected; viewport captures were used for long pages to avoid full-page screenshot compositor repetition. Earlier overflow at enlarged text sizes in gallery tabs and contact cards was corrected. Local development remains available on port 3000. No commit or push was made for this revision.
