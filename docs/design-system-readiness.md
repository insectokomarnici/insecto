# Design system readiness

Updated: 23 October 2026

## Current status

The spacing audit includes a content-relationship re-review for the existing rendered pages at the tested Chromium widths; the earlier numeric-only closure missed the contact cards/form classification. See the current decision register in the audit. The canonical values live in `src/app/tokens.css`; relationship rules and actual coverage live in [spacing-audit.md](spacing-audit.md), and the generated selector inventory is [spacing-usage.md](spacing-usage.md).

This closes a spacing milestone, not every design-system concern. Preserve the approved layout and copy; change only findings supported by the next audits.

## Spacing contract for future changes

| Relationship | Token | Value |
| --- | --- | --- |
| Independent columns | `--layout-gap` | 32 / 40 / 48px |
| Separate section blocks | `--section-block-gap` | 16 / 24 / 24px |
| Repeated card grid | `--card-grid-gap` | 16 / 24 / 24px |
| Gallery tabs, photos and controls | `--gallery-content-gap` | Same as card grid |
| Section heading to content | `--section-heading-gap` | 24px |
| Heading to body | `--heading-copy-gap` | 12px |
| Card heading to copy | `--card-copy-gap` | 8px |
| Paragraphs / separate content groups | `--paragraph-gap` / `--content-group-gap` | 16px |
| Content to action group | `--content-action-gap` | 20px |
| CTA to its rating | `--action-rating-gap` | 8px |
| Form rows / labels | `--form-field-gap` / `--field-label-gap` | 16px / 8px |
| Compact choices | `--choice-gap` | 8px |

Responsive value triplets mean phone / tablet from 768px / desktop from 1024px. Layout switching at 640px does not create a new spacing scale. A gap has one owner: do not add a margin and a parent gap for the same relationship. Text stacks must not distribute spare container height between rows. CTA and rating remain one component group.

## Next audits, in order

### 1. Typography — implemented and verified in Chromium

Completed the site-wide role audit, local font checks, normal-width matrix and 200% root-text stress pass. Canonical weights and compact-heading/primary-choice roles are centralized; enlarged-text wrapping defects were fixed. See [typography-audit.md](typography-audit.md) for exact changes, evidence and limits. Native zoom, real devices and final-copy coverage remain in the cross-browser stage below.

### 2. Color and contrast — implemented and verified in Chromium

Completed the source/state inventory, 31 numeric token-pair checks and seven-route browser scan at 390/768/1440px. Fixed placeholders, inverse focus, photo captions, upload boundaries and rating contours without changing the brand palette. See [color-contrast-audit.md](color-contrast-audit.md), [contrast-ratios.md](contrast-ratios.md) and [color-usage.md](color-usage.md) for evidence and limits. The full keyboard/interaction and cross-browser stages below remain open.

### 3. Shared components — implemented and verified in Chromium

Completed the component-role inventory and seven-route responsive pass. Unified bordered/button dimensions, pending-submit footprint, CTA/rating composition and native radio choices; centered calculator removal controls. The internal showcase contains the size/variant matrix. See [component-audit.md](component-audit.md) for decisions, measured states and remaining limits. Existing data sources and approved copy/layout remain in place. The full accessibility and cross-browser stages remain open.

### 4. Icons and surfaces — implemented and verified in Chromium

Completed the source inventory and seven-route responsive review. Shape roles now distinguish CTA pills, compact controls/icon badges, cards, panels and circles. Default content surfaces are flat; media/contact cards retain soft elevation and overlays use raised elevation. Disclosure icons and line alignment are consistent; approved custom artwork is preserved. See [icon-surface-audit.md](icon-surface-audit.md) and [surface-usage.md](surface-usage.md) for changes, evidence and limits.

### 5. Interaction and accessibility

Perform a dedicated keyboard pass: navigation, focus order, visible focus, accordion state, tabs, lightbox focus trap/return, Escape and reduced motion. Check form loading/success/error/duplicate submission, attachments with long names and limit errors, and preserved input after failure. Use local simulation/interception; do not send test inquiries to the business. Finish with recorded outcomes and no known blocking accessibility or interaction defect.

### 6. Cross-browser and final content

Check real iOS Safari and Android Chrome plus desktop Safari/Chrome, text zoom and orientation changes. Recheck layouts after actual copy/images replace placeholders; include late image/font loading and open validation states. Fixed-screen gallery content and reserved product routes are still content work, not spacing regressions.

### 7. Documentation and release closure

Reconcile historical passages in `design-system.md` and the handoff with the current implementation. Update `/design-system` examples and labels, remove obsolete rules only after proving they are unused, and document approved variants. Finish with lint, TypeScript, production build and the visual/state matrix passing for the actual release revision.

## Definition of done

Each audit needs a scope, tested viewports/states, findings with resolutions and explicitly recorded remaining limitations. New final copy or component changes reopen only affected checks. A passing build alone does not certify visual quality, and a spacing audit alone does not certify the full design system.
