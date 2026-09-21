# Insecto — design system working draft

Version 0.6 · 17 September 2026

## Local implementation

This document has been moved into the `insecto` project. The canonical tokens now live in `src/app/tokens.css`, and Tailwind uses the same values. Shared components are in `src/components/ui`, the contact form is in `src/components/contact-form.tsx`, and the review page is available at `/design-system`. The standalone CSS drafts referenced below are part of the decision history; the project uses the consolidated tokens and `src/app/globals.css`.

Breakpoints: `sm` 40rem, `md` 48rem, `lg` 64rem, `xl` 80rem, `2xl` 96rem. The earlier local form breakpoint of 35rem was aligned with `sm` at 40rem. Fonts are served from the project through Fontsource packages, with all available variable weights and Serbian Latin support. Headings now use fluid sizes between the agreed minimum and maximum values.

The first homepage foundation is now implemented with the announcement banner, Header, Hero, Products, three-step process, About and pricing calculator sections. The Hero uses the approved Serbian copy, a large phone CTA and the supplied mosquito-screen installation photo as a right-side background layer at desktop widths; on narrow screens the background layer moves to the lower half so the copy remains readable. The image is rendered through Next.js `Image` optimization, and the longer Hero description uses the existing `--text-body` token so it remains secondary to the H1 and CTA. Supporting text paired with a section heading also uses `--text-body`, keeping section introductions aligned with the Hero body scale. The shared `.section` primitive applies the responsive `--section-padding` token to every public section; `.section-inner` owns the internal intro-to-content gap, so future sections reuse the same spacing rules without adding one-off outer margins. The Hero mobile layout keeps its intentional flush bottom edge for the background image. The Hero badge now uses the shared `Badge` error variant with `KOMARCI STOP!`, the existing error surface and error foreground tokens, and a Boxicons stop icon sized with `--icon-inline`. Products are rendered from one data-driven card component for Plise, Rolo and Fiksni komarnici; each card supports Bela, Braon and Antracit image variants, shared accordions, a phone CTA and a secondary product detail link. The new three-step process section uses a white section surface and three filled cards in the `surface-subtle`, `brand-light` and `brand` tokens; the soft first card also uses a `brand` border, while the blue cards use inherited white text. Boxicons step icons are integrated into each card heading and the section includes a shared phone CTA. The About section follows the reference content with the team image on the left at desktop widths and copy on the right; it uses the shared subtle surface, section spacing, body text and phone CTA tokens. The pricing calculator uses a left card with the main `Komarnici - Cena` heading, explanation and local width and height SVG illustration, alongside the form/results panel on the right. The illustration uses a transparent surrounding area and the shared typography and spacing tokens. Its explanation uses the shared `--text-body` token, while the calculation converts centimeters to square meters and uses color-aware prices: Plise 40 €/m² for Bela and 41 €/m² for Braon or Antracit, Rolo 42 €/m² for Bela and 43 €/m² for Braon or Antracit, and Fiksni 25 €/m² for Bela and 26 €/m² for Braon or Antracit. The minimum charge equals the selected product and color price per square meter. All calculator controls and results use the shared form, typography, surface, border and spacing tokens. The reserved product routes are `/plise-komarnici`, `/rolo-komarnici` and `/fiksni-komarnici`; their page content is intentionally empty until the dedicated product pages are designed. Empty routes also exist for `/o-nama`, `/kontakt`, `/politika-privatnosti` and `/uslovi-koriscenja`. The design-system review remains available at `/design-system`. The homepage form now submits to `/api/contact`, while the design-system demo keeps a local simulation. The phone CTA is connected to `tel:+381611321324`; the GitHub repository is connected, while Vercel deployment and real form delivery remain separate operational steps. Boxicons from `@boxicons/react` are the shared source for informational, navigation, feedback, process, social and product-detail icons. Carbon's filled `PhoneFilled` remains the canonical icon for CTA buttons and phone actions. The announcement banner uses the brand color and a centered rotating contact item for phone, email and opening hours. Banner text uses the smaller `--text-banner` token and its informational icons use the shared `--icon-inline` token.

The homepage Banner and Header are wrapped in a shared sticky site chrome so they follow the page scroll as one unit. The FAQ section uses a responsive split layout: a left bordered card with the shared phone CTA and a right card containing individually bordered accordion items. It collapses to a single column below the `lg` breakpoint while keeping the shared surface, typography, border, spacing and disclosure-motion tokens. The final homepage section is a responsive contact-form design with a brand-blue panel on the shared subtle section surface, a left introduction and a right two-column form. The live form posts to the server-only `/api/contact` route, which sends the submitted details through Resend to the configured Gmail recipient.

The Hero and process-section CTAs use the same centered Google rating row below the action at every viewport width. The rating uses the shared `--text-small`, `--icon-inline`, spacing and rating-star color tokens, while the CTA uses the shared button size and action tokens.

Product accordions and the mobile hamburger panel use the shared `--motion-transition-duration` token for matched open and close animations. The reduced-motion media query disables the transition while native `<details>` semantics and keyboard behavior remain intact.

Icon sizing is semantic: `--icon-inline` is `1rem` for icons beside text and navigation chevrons, `--icon-action` is `1.25rem` for buttons and feedback notices, `--icon-feature` is `1.5rem` for process-card heading icons, `--icon-floating-call` is `1.8rem` for the mobile floating call button, `--icon-menu` is `1rem` for the standalone mobile menu trigger, and `--icon-close` is `1rem` for the mobile menu X. Boxicons menu and close paths use the same cropped visible canvas, while their size and weight remain controlled by the shared CSS tokens. CTA buttons use Carbon's filled `PhoneFilled` icon for action emphasis, while the informational banner uses Boxicons' basic `Phone`, `Envelope` and `Clock` icons.

The product is a local business website for mosquito-screen installation. The primary action is a phone call, with a contact form that sends inquiries through the server route. Planned technology: Next.js, TypeScript and Tailwind CSS; hosting: Vercel.

## Decision status

- The existing logo, palette and font families are approved.
- The primary CTA button with a blue gradient is approved.
- The first site Header structure is approved for review: `Komarnici` product dropdown, `O nama`, `Kontakt` and the phone CTA.
- The first Hero direction is approved for implementation review: left-aligned Serbian copy and phone CTA with the supplied installation photo on the right at desktop widths.
- At the `md` breakpoint and above, Header uses inline navigation; the `Komarnici` product dropdown opens on hover, focus or click. Below `md`, the same icon-only hamburger opens a full-width overlay directly below Header. The mobile overlay keeps the same `--text-nav` link size and includes the phone CTA.
- The typography scale is accepted as a starting point and can be refined while building individual sections.
- Text sizes use `rem`, line-height is unitless, and letter-spacing uses `em`.
- Spacing and content widths are initial proposals for use in sections.
- Radii and shadows are defined as the current proposal for review; the primary button radius follows the previously approved visual.
- Buttons, links, form fields and feedback messages have initial rules and an interactive example; submission in the example is a local simulation.

## Colors

| Purpose | Proposed token | Value |
| --- | --- | --- |
| Brand | `color-brand` | `#1E3B6F` |
| Lighter blue for the gradient start | `color-brand-light` | `#3F73B8` |
| Decorative accent | `color-accent` | `#E7A23B` |
| Accent surface | `color-accent-background` | `#FEF2DF` |
| Headings | `color-heading` | `#111111` |
| Body text | `color-body` | `#484848` |
| Google rating star | `color-rating-star` | `#FBBC04` |
| Product white swatch | `color-product-white` | `#FFFFFF` |
| Product brown swatch | `color-product-brown` | `#6B4F3A` |
| Product anthracite swatch | `color-product-anthracite` | `#3F454D` |
| Subtle surface | `color-surface-subtle` | `#F6F8FB` |
| Base surface / text on dark surfaces | `color-white` | `#FFFFFF` |
| Subtle decorative border — proposal | `color-border-subtle` | `#E1E6EE` |
| Required control border — added proposal | `color-border-control` | `#7B879A` |
| Success text and icons | `success-foreground` | `#027A48` |
| Success surface | `success-background` | `#ECFDF3` |
| Error text and icons | `error-foreground` | `#B42318` |
| Error surface | `error-background` | `#FEF3F2` |

CTA: `linear-gradient(110deg in srgb, #3F73B8 0%, #1E3B6F 100%)`, with white text. The proposed hover state is solid brand blue. The 110deg angle comes from the approved visual example. Focus must remain clearly visible on the actual surface.

Use orange sparingly. Text on the cream surface should be dark or dark blue. Orange is not used for small text on a light surface. The subtle border is not approved as the required border for form controls; those borders are checked while designing the form.

Calculated contrast ratios: white on lighter blue 4.82:1; white on dark blue 10.99:1; success on its surface 5.13:1; error on its surface 6.05:1. Status always includes a clear text message. A submission confirmation is shown only after a real success response.

## Typography

Montserrat is used for headings and CTA buttons; Manrope is used for body text, navigation, form controls and supporting text. Available weight ranges: Montserrat 100–900, Manrope 200–800. The initial weights below can be changed consistently by role.

Site base: `html { font-size: 100%; }`. `rem` follows the root font size. Initial conversions use the common 16px base; user font-size settings are respected. The layout must also be checked with enlarged text.

| Role | Font | Mobile, rem | Desktop, rem | Mobile / desktop line-height | Weight | Letter-spacing |
| --- | --- | --- | --- | --- | --- | --- |
| Hero heading | Montserrat | 2 | 3 | 1.25 / 1.1667 | 700 | -0.025em |
| Section heading | Montserrat | 1.75 | 2.5 | 1.2857 / 1.2 | 700 | -0.02em |
| Card heading | Montserrat | 1.375 | 1.5 | 1.3636 / 1.3333 | 600 | -0.01em |
| Lead text | Manrope | 1.125 | 1.25 | 1.5556 / 1.6 | 400 | 0 |
| Body text / form input | Manrope | 1 | 1 | 1.625 / 1.625 | 400 | 0 |
| Navigation | Manrope | 1 | 1 | 1.5 / 1.5 | 600 | 0 |
| Banner text | Manrope | 0.875 | 0.875 | 1.5714 / 1.5714 | 600 | 0 |
| Supporting text | Manrope | 0.875 | 0.875 | 1.5714 / 1.5714 | 400 | 0 |
| Field label | Manrope | 0.875 | 0.875 | 1.4286 / 1.4286 | 600 | 0 |
| Button | Montserrat | 1 | 1 | 1.5 / 1.5 | 600 | 0 |

Line-height values in the table are rounded for readability. The visual sample keeps the exact relationships from the initial scale. Headings are planned to scale gradually between the endpoint sizes; exact formulas and wrapping are checked on real sections. The HTML heading level follows content structure independently from visual style. Navigation uses the base `1rem` size with weight 600; emphasized text also uses 600. The shared `--text-nav` token keeps Header, dropdown and mobile menu links aligned, while the smaller `--text-banner` token keeps the announcement banner visually secondary.

## Base spacing scale — proposal

The base step is 0.25rem. Names follow the number of steps; components should prefer the semantic tokens in the next table.

| Token | Value |
| --- | --- |
| `space-0` | 0 |
| `space-1` | 0.25rem |
| `space-2` | 0.5rem |
| `space-3` | 0.75rem |
| `space-4` | 1rem |
| `space-5` | 1.25rem |
| `space-6` | 1.5rem |
| `space-8` | 2rem |
| `space-10` | 2.5rem |
| `space-12` | 3rem |
| `space-16` | 4rem |
| `space-20` | 5rem |
| `space-24` | 6rem |

## Spacing roles — proposal

Mobile is the base layout. Tablet values begin at a 48rem viewport width, and desktop values at 64rem. These are starting points for layout changes; wrapping is checked against real content. Enlarged text can change effective dimensions, so the layout must remain flexible.

| CSS token | Purpose | Mobile | Tablet | Desktop |
| --- | --- | --- | --- | --- |
| `--page-gutter` | Minimum side space around content | 1.25rem | 1.5rem | 2rem |
| `--section-padding` | Section padding, top and bottom | 2.5rem | 3rem | 4rem |
| `--section-content-gap` | From the section intro to cards or the form | 2rem | 2.5rem | 3rem |
| `--grid-gap` | Between cards, in both directions | 1rem | 1.5rem | 2rem |
| `--card-padding` | Internal card padding | 1.5rem | 1.5rem | 2rem |
| `--stack-gap` | Between a heading and supporting text | 1rem | 1rem | 1rem |
| `--cta-gap` | From description to an action group | 1.5rem | 1.5rem | 1.5rem |
| `--form-field-gap` | Between complete field groups | 1.25rem | 1.25rem | 1.25rem |
| `--field-label-gap` | From the label to the control | 0.5rem | 0.5rem | 0.5rem |
| `--field-hint-gap` | From the control to the supporting message | 0.5rem | 0.5rem | 0.5rem |

Section padding is applied on every side of a section. Adjacent sections therefore combine their bottom and top padding; do not add another outer gap for the same boundary. If two blocks belong to the same section, use an internal gap.

## Content widths — proposal

| Token | Maximum width | Purpose |
| --- | --- | --- |
| `--container-wide` | 75rem | Main content, navigation and card layouts |
| `--container-narrow` | 45rem | Standalone contact form, single-column FAQ |
| `--content-text` | 38rem | Introductory text and longer paragraphs |
| `--grid-item-min` | 18rem | Starting minimum card width when space allows |

These are maximum, not fixed, widths. A container uses the available space minus side gutters until it reaches its maximum, then remains centered. On very wide screens, outer space grows naturally. On narrow screens, content and the form use one column. Cards wrap according to the actual parent width, with protection against horizontal overflow. Text does not need to fill a wide container.

A section background may extend edge to edge; content remains aligned to the shared container. Sections do not have a fixed height. Internal spacing and widths use `rem`; thin borders may use 1px.

## Radii — proposal

The visual direction is lightly rounded and orderly. Radii use `rem` and stay the same on mobile and desktop. A viewport change does not change the shape of the same component.

| Base token | Value | Semantic usage |
| --- | --- | --- |
| `--radius-none` | 0 | Sections that extend to the viewport edges |
| `--radius-sm` | 0.25rem | Small badges: `--radius-badge` |
| `--radius-md` | 0.5rem | Compact controls: `--radius-button`; form inputs: `--radius-input` |
| `--radius-lg` | 0.75rem | Cards and standalone media: `--radius-card`, `--radius-media` |
| `--radius-xl` | 1rem | Larger featured panel, such as contact: `--radius-panel` |
| `--radius-pill` | 999rem | Fully rounded shared CTA buttons |

Shared CTA buttons use the pill radius; compact controls and form inputs keep their smaller radii. Apply each radius consistently by role. A media element that touches the top edge of a card inherits the card's outer radius; media inside a padded card follows that relationship. Use a wrapper for image clipping so an interactive card's focus ring is not cut off.

## Shadows — proposal

There are three basic choices: no shadow, a soft shadow and a raised shadow. Both shadows use the existing brand blue at 6% and 12% opacity; no new palette color is added. Shadow dimensions use `rem`.

| Token | CSS value | Purpose |
| --- | --- | --- |
| `--shadow-none` | `none` | Buttons, controls and flat surfaces |
| `--shadow-soft` | `0 0.125rem 0.5rem rgb(30 59 111 / 0.06)` | Cards and a featured contact panel |
| `--shadow-raised` | `0 0.375rem 1.25rem -0.25rem rgb(30 59 111 / 0.12)` | An interactive card on hover |

Semantic mappings: `--shadow-button` and `--shadow-input` use `--shadow-none`; `--shadow-card` and `--shadow-panel` use `--shadow-soft`; `--shadow-card-interactive-hover` uses `--shadow-raised`.

Application rules:

- For a standard card, the proposal is a subtle decorative border and a soft shadow. On the actual surface, check whether one is enough.
- The primary button keeps the approved gradient and has no extra shadow.
- Form controls have no shadow in their default state. Their borders and focus state are defined in the controls and contact-form sections.
- Increase a shadow on hover only when a card leads to an action or page. An informational card remains still.
- A shadow does not replace visible focus, an error message or a required control border.
- Large sections are separated with spacing and surfaces. Shadows are reserved for smaller surfaces that need elevation.

## Buttons and links — proposal

The primary CTA is a phone call. The confirmed number is `061 132 1324`, represented by `tel:+381611321324`. The Header preview and Action demo use this real call link. A secondary action leads to the contact form. Form submission is the primary action inside that form.

| Component / state | Appearance and behavior |
| --- | --- |
| Primary button | Approved blue gradient, white Montserrat 600 via `--font-button`, fully rounded pill radius, no border or shadow |
| Hover / pressed | Solid brand blue; no layout shift |
| Secondary action | White surface, dark-blue border and text, fully rounded pill radius; light surface on hover |
| Text link | Dark blue and always underlined; lighter blue on hover |
| Keyboard focus | Preserve the native browser outline, with an additional blue ring and white gap |
| Unavailable | Light surface and gray text; use native `disabled` when a button is genuinely unavailable |
| Submission | Serbian UI label `Šalje se…`, `aria-disabled`, duplicate activation blocked; the button keeps focus |

Buttons use the `--font-button` token with Montserrat 600, have a minimum height of 3.25rem and use 1rem / 1.5 line-height text with 0.875rem vertical and 1.375rem horizontal padding. These control tokens preserve the proportions of the approved CTA. Height is a minimum, so text may wrap when enlarged. An icon is decorative next to clear text. Actions use `button`; navigation and calls use `a` with a real destination.

Focus uses blue `#3F73B8`, a 0.125rem gap and a 0.1875rem ring. Do not remove the browser outline. This ring is separate from decorative shadows. During implementation, check visibility on the real surfaces.

### Button size scale

Button sizes are semantic tokens rather than one-off dimensions. `small` is for compact Header actions, `medium` is the default for regular actions and forms, and `large` is reserved for a prominent Hero CTA.

| Size | Minimum height | Horizontal padding | Text |
| --- | --- | --- | --- |
| `small` | 2.5rem | 1rem | 1rem |
| `medium` | 3rem | 1.25rem | 1rem |
| `large` | 3.25rem | 1.375rem | 1rem |

All sizes use the same `1rem` font, weight, radius, focus ring and interaction rules. The size is selected through the shared `Button` or `ButtonLink` component, so individual sections do not duplicate control dimensions.

## Contact form — proposal

Proposed minimum field set:

| Field | Required | Initial behavior |
| --- | --- | --- |
| Name | Required | Text, up to 80 characters; autocomplete `name` |
| Phone | Required | Telephone input, up to 40 characters; autocomplete `tel` |
| Message | Required | Multiline input, up to 1000 characters |

A phone number is enough for the business to respond to an inquiry. Email can be added if that channel is selected later. The form structure is a proposal, not an assumption about an existing business process.

Controls use Manrope 400, 1rem, 1.625 line-height and a minimum height of 3.25rem with a 0.5rem radius. The textarea has a minimum height of 8rem and can grow vertically. Labels remain visible and are associated with controls; placeholders are supporting text only. Required fields use the native `required` attribute and a star beside the label instead of the word “obavezno”. Controls with a unit suffix reserve the shared `--control-suffix-space` token so the value and suffix remain readable at every breakpoint. Two short controls may use two columns; below 40rem they become one column.

The added required control-border color is `#7B879A`. Its contrast is 3.64:1 against white and 3.42:1 against the light-gray `#F6F8FB`. This separates a functional control boundary from a subtle decorative card border. The proposal adds one neutral token to the palette.

States:

1. Default: white surface, neutral border, no error before the user's attempt.
2. Hover: blue border. Focus: visible ring; the change does not alter control dimensions.
3. Error: red border, concrete explanation below the field, `aria-invalid` and `aria-describedby`.
4. Submission: controls temporarily readonly, form marked `aria-busy`; values and focus remain preserved. The handler rejects another submission while a request is active.
5. Submission failure: red message with a retry path; entered values remain in the form.
6. Success: green message only after confirmed success; use a status live region for the announcement.

Phone validation in the demo accepts an initial `+`, spaces, parentheses, hyphens and periods, with 7–15 digits. This is only a basic format check; it does not confirm that the number exists. For an empty or invalid form, show a summary and focus the first invalid field. Corrections remove stale errors without moving focus while typing.

The design-system interactive example does not use a network request, database or local persistence. After a short simulation it shows a labeled success or error example. The `Ishod sledećeg slanja` control is for reviewing both states. The homepage form uses server-side validation and sends confirmed submissions through `/api/contact`; rate limiting and additional anti-spam protection remain future hardening steps.

Isolated browser checks cover an empty and invalid required field, focus on the error, submission locking, duplicate-activation blocking, success, failure with preserved input, widths 320/390/736px and text at 200%. No JavaScript errors were recorded. Desktop and mobile screenshots were reviewed. This checks the demo only; it is not a server-side submission test or a complete accessibility audit.

## Application and next steps

The canonical implementation is now in the project. `src/app/tokens.css` contains the design tokens for color, typography, spacing, widths, breakpoints, radii, shadows and controls. `src/app/globals.css` contains shared component and review-page styles. `src/components/ui` contains reusable UI primitives, and `src/components/contact-form.tsx` contains the reusable form.

The earlier `insecto-layout-tokens.css`, `insecto-effects-tokens.css` and `insecto-controls.css` files were standalone exploration drafts. They remain useful as decision history, but are not the source of truth for the Next.js project. The visual examples were also exploratory and do not overwrite saved CSS tokens automatically.

For every new section, review existing tokens, narrow-screen behavior, enlarged-text behavior, heading wrapping and CTA clarity. Add a token when it represents a reusable rule. A one-off illustration or a photo-specific aspect ratio does not need to become a global token.

Next: review the Header and Hero foundation, then build the public site section by section. Confirm the form destination before connecting it.

## Technical references

- [MDN: relative units](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [MDN: gap](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/gap)
- [MDN: padding](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/padding)
- [W3C: minimum contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)
- [W3C: form validation](https://www.w3.org/WAI/tutorials/forms/validation/)
- [W3C: error and success notifications](https://www.w3.org/WAI/tutorials/forms/notifications/)
- [Google Fonts: Montserrat](https://github.com/google/fonts/blob/main/ofl/montserrat/METADATA.pb)
- [Google Fonts: Manrope](https://github.com/google/fonts/blob/main/ofl/manrope/METADATA.pb)
