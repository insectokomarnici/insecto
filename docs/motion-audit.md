# Motion audit

The site uses restrained motion to explain state changes. No section entrance animations, parallax, pulsing CTAs or count-up animations are introduced.

## Central tokens

| Role | Token | Duration | Consumers |
| --- | --- | --- | --- |
| Feedback | `--motion-feedback-duration` | 160ms | Color/border changes, menu icon crossfade |
| Disclosure | `--motion-disclosure-duration` | 240ms | FAQ, product accordions, mobile menu, chevrons, banner |
| Media | `--motion-media-duration` | 300ms | Gallery photo zoom |

All animated transitions use `--motion-easing` (`cubic-bezier(0.2, 0, 0, 1)`). Existing motion/gallery/banner duration names are aliases of these roles, not independent values. The tokens live in `src/app/tokens.css`.

## Decisions and corrections

- Replaced the general 420ms duration: small feedback now finishes in 160ms and disclosures in 240ms.
- Menu/close icons crossfade without spinning or scaling, preserving their approved optical size.
- Gallery zoom is 1.03 through `--gallery-hover-scale`, down from 1.05; duration is 300ms instead of 500ms. Overlay/caption use 240ms. Carousel scrolling uses browser-native smooth scrolling; the browser controls its duration.
- Contact cards keep their brand-color hover and subtle elevation but no longer move vertically. Hover styling is limited to fine pointers, avoiding lingering touch hover colors.
- Calculator choices, product color swatches and gallery tabs have no hover color effect. Selected state and keyboard focus remain explicit. Selection color transitions may use feedback timing.
- Inputs retain the previously approved mid-blue hover/focus. Buttons, links, navigation and FAQ retain functional color feedback; gradients switch directly rather than animating incompatible background images.
- Removed persistent `will-change` hints from gallery images and disclosure heights; no animation layer is reserved while idle.
- Banner rotation changes item every three seconds, pauses while hovered OR focused, and stops in hidden tabs or with reduced motion. Automatic rotation no longer repeatedly announces contact details to screen readers. All contact details remain available in the footer.
- Desktop dropdown close grace (100ms, `DROPDOWN_CLOSE_DELAY_MS` in `site-header.tsx`) is interaction tolerance, not a CSS animation. The design-system demo delay (1000ms, or 5000ms for the slow scenario) simulates submission and is not an animation token.

A closing disclosure also has a fallback derived from its computed CSS duration/delay. A viewport change may hide the panel and cancel transitionend; the fallback settles it without a second independent animation duration.

## Reduced motion

All three root duration tokens become 0ms. Existing explicit overrides remove gallery zoom and smooth scrolling. This also covers previously missed calculator choices, navigation chevrons, and FAQ chevron SVGs. Banner rotation stops. A media-query change during disclosure closing settles the React state because canceled CSS transitions may never emit `transitionend`.

## Scope

Reviewed shared CSS, page CSS modules, header/banner, gallery, FAQ, product disclosures, calculator, contact form/cards, footer, and JavaScript timing consumers. Shared components cover homepage, contact, about, alternate about, legal and design-system pages. Static surfaces and form result messages remain immediate. No extra loaders or ornamental animations were added.

## Verification

- Chromium computed styles: feedback 160ms, FAQ disclosure 240ms, gallery zoom 300ms.
- FAQ and product accordion opened and closed correctly; mobile menu at 390px opened, closed and returned to its idle state. Menu icon has no transform. Temporary viewport override was reset.
- Lint and nonincremental TypeScript checks passed. Production build passed.
- Reduced-motion CSS and media-query listener paths were reviewed in source; live OS preference switching and physical Safari/Android checks were not performed.
