# Insecto design system — current contract

Updated: 24 October 2026. This document describes the implemented system, not an exploration proposal. Earlier versions remain in Git history. Canonical values are in `src/app/tokens.css`; component rules are in `src/app/globals.css` and scoped page styles. `/design-system` is the review surface.

## Ownership and naming

Use shared UI and semantic tokens. Names describe relationships or roles, not a convenient number. Keep primitive spacing references in the token layer. Use rem for layout/text, unitless line-height and em tracking; thin borders may use px. Runtime geometry (accordion height, carousel position) and token demonstrations may use inline values; static component design may not bypass tokens.

Not every local behavior needs a global token. The dropdown's 100ms close grace and banner's 3000ms rotation interval remain named local constants. Reusable visual timing lives in motion tokens. Custom artwork geometry remains local to the artwork.

## Typography

Self-hosted Montserrat Variable: headings and CTA buttons. Manrope Variable: prose, navigation, labels and inputs. Heading level follows document structure independently of visual size.

| Role | Size at normal root | Weight |
| --- | --- | --- |
| Hero | fluid 32–48px | 700 |
| Section | fluid 28–40px | 700 |
| Card | fluid 22–24px | 600 |
| Compact heading | 16px | 600 |
| Body / primary choices | 16px | 400 / role-specific emphasis |
| Supporting text / labels | 14px | 400 / 600 |
| CTA | 16px | 600 |

Line-height and tracking are also role tokens. Do not turn main copy into small helper text. Allow wrapping; normal text zoom must not be constrained by fixed text-box heights. See [typography audit](typography-audit.md).

## Spacing and layout

| Relationship | Semantic token | Phone / tablet / desktop (px) |
| --- | --- | --- |
| Page gutter | `--page-gutter` | 20 / 24 / 32 |
| Section top and bottom | `--section-padding` | 32 / 40 / 48 |
| Independent columns | `--layout-gap` | 32 / 40 / 48 |
| Peer cards / separate section blocks | `--card-grid-gap` / `--section-block-gap` | 16 / 24 / 24 |
| Card inset | `--card-padding` | 20 / 24 / 24 |
| Section heading to content | `--section-heading-gap` | 24 |
| Heading to body | `--heading-copy-gap` | 12 |
| Card title to body | `--card-copy-gap` | 8 |
| Paragraphs / related content groups | `--paragraph-gap` / `--content-group-gap` | 16 |
| Content to action group | `--content-action-gap` | 20 |
| Action to rating | `--action-rating-gap` | 8 |
| Field rows / label to field | `--form-field-gap` / `--field-label-gap` | 16 / 8 |
| Compact choices | `--choice-gap` | 8 |

Tablet starts at 48rem, desktop at 64rem; 40rem can change composition without creating a spacing scale. Additional named breakpoints are 80rem and 96rem. Maximum main/narrow/text widths are 75/45/38rem.

One owner per gap: do not combine parent gap and child margin for the same relationship. Use `.content-flow`, `.section-flow` and `.section-inner`. Two independent guide columns use layout gap; gallery tabs, images and controls share `--gallery-content-gap`. Contact cards to form use section-block gap, not the tighter prose group gap. Adjacent sections combine their respective top/bottom padding. See [spacing audit](spacing-audit.md) and [selector inventory](spacing-usage.md).

## Colors, borders and elevation

Primary brand is `#1e3b6f`, mid blue `#3f73b8`, heading `#111111`, body `#484848`, white surface and subtle `#f6f8fb`. Refer to tokens, not copied hex values. Decorative border and functional control border are different roles. Errors and success include explicit text.

Inputs retain mid-blue hover/focus. Links, navigation and FAQ use brand feedback. Calculator choices, product colors and gallery tabs intentionally have no hover-color effect; selected state and keyboard focus remain visible. Gallery selected tabs use a heavier full border, not an underline. Google stars remain yellow without outlines, accompanied by a textual rating; verification artwork is Google blue.

Keyboard focus is mid blue with white separation on light surfaces, white with brand separation on blue panels. A decorative shadow never substitutes for focus. Current numeric checks are in [contrast-ratios.md](contrast-ratios.md), with scope in [color-contrast-audit.md](color-contrast-audit.md).

CTA buttons are pills. Inputs, tabs and icon badges use the compact 8px radius; cards 12px, panels 16px. Circular avatars/number markers use the circle role. Default content cards are flat; media/contact surfaces may use soft elevation, overlays raised elevation. See [icon/surface audit](icon-surface-audit.md).

## Components and icons

Use `Button` / `ButtonLink`: small/medium/large minimum heights 44/48/52px, growing for wrapped text. Primary is the gradient call CTA; brand is the calculator action; secondary supports actions on blue forms. Calls use real tel links. Disabled controls are unavailable; pending submission uses aria-disabled, a status label and a duplicate-request guard while preserving focus.

`MeasurementCta` owns the button-and-rating group. When included or removed, treat both as a unit. Do not add this CTA to every section automatically.

General icons use Boxicons. Filled phone CTAs use `PhoneFilledIcon`, a local licensed Carbon path; the Carbon library is not installed. Material Straighten/Drill, Google artwork, matched custom menu/close icons and custom screen illustrations are approved exceptions. Icon size and badge dimensions follow semantic tokens; matched menu glyphs account for optical bounds rather than relying only on identical SVG boxes.

## Current section patterns

- Hero: text, benefit list and CTA/rating; portrait installation photo.
- Products: three color-selectable cards and disclosures, without an extra CTA/rating in each card.
- About homepage: team image with copy followed by “Mali tim, ličan pristup”; no CTA.
- Guide: equal text columns for windows and doors; no photo or CTA.
- Calculator: centered section title; explanation and form panels aligned initially on desktop. Saved entries grow only the right panel. Dimensions and quantity share the desktop row; type and color have their own rows. Quantity adds individual list entries. No explanation tooltip remains. Included services belong below the panels in the same section, with one gray top divider, left H3 and three borderless icon/title/body items.
- Gallery: three short full-bordered tabs (Plise, Rolo, Fiksni), including one row on phones; horizontal photos and modal lightbox. Captions are singular sentence case. The fixed-screen category is currently empty and has an explicit message.
- FAQ: two equal groups, Komarnici and Naša usluga; no sticky introductory card, numbered questions or subtitle. Questions begin closed.
- Contact: three contact cards followed by the blue Online upit panel. About page also reuses this section. Contact page uses the full form with surname, email and optional photos, plus the business map.

## Interaction contract

Desktop dropdown supports hover, click and keyboard; focus inside prevents pointer-leave closing. Escape returns focus to its summary. Mobile navigation closes with Escape, focus leaving or an activated link; closing content is inert. Disclosures settle if a CSS transition is cancelled by a breakpoint or reduced-motion change.

Gallery tabs use arrow keys/Home/End; empty panels remain focusable. Recreating the carousel after the empty category reattaches its scroll observer. Lightbox contains focus, closes with Escape and restores focus to the originating photo. Calculator add/remove and attachment removal retain a meaningful keyboard destination.

Form errors identify fields and focus the first invalid control; failed submission preserves input. Pending state blocks duplicate requests. Photo limits: five files, 5 MiB each, 10 MiB combined; MIME allowlist matches the server. Rejected selections never enter accepted attachments and do not prevent submitting an otherwise valid form. `/design-system#form` covers local success/error/slow responses, full fields and attachments; it sends nothing.

## Motion

Feedback 160ms, disclosure 240ms, media 300ms, through shared easing. Menu icons crossfade without scaling. Gallery zoom is 1.03. No entrance animations, parallax or moving contact cards. Reduced motion removes transitions/zoom and automatic banner rotation. Banner also stops when hidden, hovered or focused . See [motion audit](motion-audit.md).

## Verification and remaining limits

Latest results: [interaction and browser audit](interaction-audit.md). Release status: [readiness](design-system-readiness.md). Existing audits document tested states, not universal certification. Final content, physical iOS/Android testing, actual mail delivery and indexing are separate launch gates. Run lint, nonincremental TypeScript, production build and diff checks after changes; reopen only affected visual/interaction checks.
