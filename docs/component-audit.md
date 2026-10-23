# Shared component audit

Updated: 23 October 2026. Stage 3 follows the spacing, typography and color audits. This is a component consistency pass, not a full accessibility or cross-browser certification.

## Scope and decisions

Reviewed the rendered homepage, contact, About, alternative About, both legal pages and internal design-system page. Reserved product routes contain no designed page content and are not counted as complete pages.

| Family | Shared owner / implementation | Contract and intentional variants |
| --- | --- | --- |
| Text buttons | `ui/button.tsx`, `.button`, `--button-*` | `primary`: gradient main action; `brand`: solid calculator add action; `secondary`: supporting action or submission on a blue surface. All variants share dimensions, text, icon gap and focus treatment. |
| Button sizes | `tokens.css` | Small 44px, medium 48px, large 52px at a 16px root. These are minimums, not fixed heights; wrapped/enlarged text may grow. The three sizes all use 16px text. |
| Button vs link | `Button`, `ButtonLink`, `TextLink` | A button changes state/submits. An anchor navigates, calls or opens email. Inline prose links remain underlined text. Navigation retains its separate body-font role. No disabled links are used. |
| Measurement + rating | `measurement-cta.tsx` | One component owns the call icon, large primary button and 8px rating gap. Used by Hero, process, reviews and alternative About. Alignment is explicit; a secondary contact action can accompany the call. On narrow screens that two-action variant fills its column. |
| Rating source | `GoogleRating` / `GoogleRatingView` passed through `rating` | Data fetching is not moved into the visual group. Hero/process/alternative About keep the existing optional server rating. Review section keeps the manually maintained summary. No invented fallback or new API request. |
| Standalone actions | Header, floating call, service-area section | Existing placements remain standalone. This pass does not add ratings or restore intentionally removed CTAs to products, guide or About. |
| Single-choice controls | `ui/radio-choice.tsx` | Products and calculator share a native radio input inside its full clickable label. Selection class derives from `checked`; keyboard focus is drawn on the visible label. Each product has its own radio name, separate from calculator type/color. |
| Choice appearances | `.product-color-choice`, `.calculator-choice` | Product swatches are compact 40px minimum pills; calculator options are larger, illustrated cards, at least 52px. Same selection semantics, intentionally different density. |
| Gallery tabs | `gallery-section.tsx`, `.gallery-tab` | Tabs change a related panel, so remain `tablist`/`tab`/`tabpanel`, not CTA buttons or form radios. 48px minimum, text may wrap, existing keyboard selection and mobile two-row arrangement retained. |
| Icon-only controls | Gallery, header menu, calculator removal, review source | Compact targets use `--compact-control-min-height` (40px), gallery arrows use 48px. Icons have explicit accessible control names; decorative zoom badges are not separate buttons. The floating phone action retains its 60px target. |
| Form fields | `ui/fields.tsx`, `.field`, `.control` | Shared label, hint/error association, typography, 52px input minimum, border and focus contract. Calculator retains native numeric inputs inside the same field/control CSS with unit suffixes. Radio legends use the same label token. |
| Form composition | `contact-form.tsx` | Homepage compact and contact-page extended fields intentionally differ. Both use the same field and submit components. Upload belongs to the extended form only. |
| Disclosures | FAQ and product accordions | Both share disclosure spacing and full-row activation. FAQ retains its single-open button/panel model; products retain native details with measured-height animation. These are documented behavioral variants, not unrelated button styling. |
| Read more | `google-review-copy.tsx` | Inline disclosure button appears only for overflowing review copy; expands the same card. It is not a navigation link or primary CTA. |
| Cards | `ui/layout.tsx`, section component styles | Calculator uses flat `Card`; products/reviews/process/included-services retain their content-specific compositions with shared padding/radius/border tokens. Contact phone/email cards are links; opening hours is informational with the already approved hover, not a fake button. Legal copy is not wrapped in cards. |
| Notices | `ui/notice.tsx` | Success/error/info use shared icon, text and color roles. Form failure retains entered data; no delivery is simulated on public pages. |

## Corrections implemented

1. Bordered buttons previously added 2px to the corresponding borderless button: e.g. medium secondary was 50px and medium primary 48px. Every button now reserves the same 1px border and compensates its padding. Sizes are 44/48/52px across all three variants. Small primary was already rendered at 44px despite a 40px minimum token; the token now expresses its real size. Compact icon/choice controls retain a separately named 40px token.
2. Pending submit text no longer shrinks the button. The original label keeps its footprint, while `Šalje se…` is displayed and `aria-busy`/`aria-disabled` announce the pending state. The existing duplicate-activation guard remains.
3. Replaced duplicated CTA/rating wrappers and section-specific spacing rules with `MeasurementCta`. Deleted the obsolete Hero/process/review group rules and alternative About action-row CSS. The parent section still owns the 20px incoming action margin.
4. Product color choices were toggle buttons despite representing one selected option. They now use the same `RadioChoice` primitive as the calculator, with native arrow-key behavior. The accepted appearance and default colors are preserved.
5. Centered calculator remove icons within their 40px hit areas; previously they were aligned to the trailing edge.
6. `/design-system#actions` now demonstrates every size/variant combination, disabled/loading state and the actual CTA/rating composition. Surface guidance distinguishes pill CTA buttons from rounded fields and tabs.

## Verification

- Read-only geometry/state scan: seven routes × 320/390/768/1024/1440px. Checks control heights, horizontal overflow, action-icon vertical alignment, one selected radio per group, and CTA/rating geometry. All 440 observed controls fit; same-size button variants match. Text remains free to wrap. Evidence: `/tmp/insecto-component-audit/matrix.json`.
- Product radio: ArrowRight changes the selected color and displayed photograph, retains one choice, and displays the focus ring. Mobile pointer selection also changes the photograph.
- Calculator: three identical screens add three separate rows; removing the second leaves two. Initial desktop panels both measure 600px; after adding three rows the left stays 600px and the right grows. Remove icons stay centered.
- Gallery: pointer and ArrowRight tab selection update the panel; fixed-screen category retains its explicit empty state. Gallery controls/lightbox remain their existing shared implementation.
- Mobile FAQ opens/closes; review “Pročitaj više” expands the same card.
- Local form simulation: measured submit button is 174.36 × 48px before and during loading; pending state is exposed. Success and failure messages appear, and failure preserves input. No inquiry was sent to the business.
- Existing spacing, typography and contrast inventories regenerated. `npm run lint`, `npx tsc --noEmit --incremental false`, `npm run build` and `git diff --check` all passed. The production build compiled all routes; browser checks used the local development server.

## Limits / next stage

The local optional API rating is absent where no rating data is returned; its data path was deliberately not changed. The fixed review summary and internal sample verify the shared group's 8px gap with real existing rating data. Browser checks use desktop Chromium with responsive viewports, not physical phones. Full focus-order/trap, reduced-motion, attachment error and duplicate-request testing remain stage 5; real Safari/Android and native text zoom remain stage 6. Detailed optical icon, radius, shadow and image-crop review is stage 4. Existing placeholder copy and empty fixed-screen gallery are content work.
