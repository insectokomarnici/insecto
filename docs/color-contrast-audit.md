# Color and contrast audit — 23 October 2026

## Current amendment — 24 October 2026

The user removed star outlines and changed gallery selection to a full heavier border. Those decisions are preserved. Yellow stars accompany textual rating information and are not the only rating indicator. The obsolete `rating-outline` showcase and two script checks have been removed; the current matrix has 29 pairs. Generated inventories reflect current CSS; counts in the original verification record below are historical. Desktop Safari and interaction results are now in [interaction-audit.md](interaction-audit.md).

## Original scope and result

Reviewed the existing seven rendered routes: `/`, `/kontakt`, `/o-nama`, `/o-namav1`, `/politika-privatnosti`, `/uslovi-koriscenja` and `/design-system`. This includes site chrome, footer, hero, products, about, process cards, calculator, included services, gallery, reviews, guide, service-area copy, FAQ and both forms. Reserved product routes have no page content yet. Google Maps UI and image/brand artwork are external or supplied content, not authored UI palette consumers.

The measured token combinations pass their thresholds, and the final Chromium text scan found no failures in its supported solid/alpha background cases. This is not a full WCAG conformance claim: real-device/browser coverage and the dedicated keyboard/interaction audit remain separate work.

## Rules and roles

Canonical values and focus contexts live in `src/app/tokens.css`. No literal UI colors are introduced in component styles. [color-usage.md](color-usage.md) inventories 363 color declarations, including state selectors. [contrast-ratios.md](contrast-ratios.md) records the 31 tested foreground/background pairs.

- Body text, labels, links, placeholders and supporting information: at least **4.5:1**. We conservatively use this threshold in the token-pair test even where large text could use 3:1.
- Meaningful control boundaries, focus indicators and graphics: at least **3:1** against the relevant adjacent color.
- Decorative card borders and dividers stay `--color-border` (`#e1e6ee`). They are not the sole means of identifying a control, so darkening every card border is unnecessary.
- Input boundaries and visible carousel scrollbar use `--color-control-border` (`#7b879a`); text uses its own role, not the boundary token.
- Brand primary (`#1e3b6f`), mid blue (`#3f73b8`), white and subtle surfaces remain unchanged. Text/link hover uses brand primary. Input pointer hover/focus retains mid blue as previously requested. White text on the mid-blue process card and the light end of the CTA gradient passes 4.5:1.
- Keyboard focus is contextual: mid blue with white separation on light surfaces; white with brand separation on dark panels. `--focus-ring` is recomputed in each context so local aliases resolve correctly. Pointer-input focus remains a thicker mid-blue border without the keyboard halo.
- Success/error notices retain their semantic text and surface pairs and explicit messages. White field errors on a blue form remain readable; they do not rely only on red outlines. Upload error boundaries on blue use the separate `--color-error-on-brand` token.
- Disabled controls remain muted and non-interactive. Their WCAG contrast exemption is not used to weaken ordinary help text. Loading has a visible label and status message; the button's existing duplicate-activation guard is unchanged.
- Selection is not only a hue change: calculator choices use the existing heavier border/weight, gallery tabs now have an inset underline, and product choices retain their heavier text. Color swatches always have text labels.
- Google logo colors are original brand artwork and remain intact. The approved yellow star fill is retained with a contrasting contour so the shape is visible on white. The verification icon remains Google blue, which passes the graphic threshold.

References: [WCAG text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [use of color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html). Disabled and decorative exceptions do not apply to ordinary small text. Compare unrounded ratios to thresholds; rounded report numbers are display only.

## Findings and changes

| Finding | Resolution / evidence |
| --- | --- |
| Placeholder text reused the control-boundary gray, only 3.64:1 on white | `--color-placeholder` changed to `#657389`: 4.81:1 on white and 4.52:1 on subtle surfaces. Control borders remain unchanged |
| Mid-blue generic focus had only 2.28:1 against the dark-blue banner | Contextual white focus now gives 10.99:1 on brand; dark form panels use the same inverse focus context |
| A 40% photo overlay could not guarantee caption contrast over bright photos; category text also had only 60% white opacity | Caption gets its own 82% dark scrim; category uses 85% white. Conservative white-photo worst case: 11.06:1 title, 8.51:1 category. Existing image-wide hover overlay remains unchanged |
| Single-color gallery focus could disappear against parts of a photo or be clipped by the carousel | Two-tone inset indicator stays inside the card and provides a blue/white edge independently of image content |
| Gallery tabs differentiated selection primarily with color | Added an inset underline with no layout-size change |
| Carousel scrollbar used the decorative border color | Uses the stronger control-boundary role; buttons and photo layout remain unchanged |
| Upload dashed boundary was faint on blue | White alpha increased from 0.32 to 0.60; 4.68:1 against the upload surface |
| Red upload-error boundary was too weak on blue | Pale error role gives 5.78:1 against the upload surface. Error text remains explicit; white-input red error boundaries stay unchanged |
| Yellow star shapes had only 1.71:1 on white | Added a thin dark-gold contour: 4.59:1 on white, 4.31:1 on subtle surfaces; yellow fill and Google verification blue preserved |
| Reusable form-note base style assumed a blue parent | Base note now uses body color; public dark forms retain their explicit white overrides |
| Public upload disabled styles were visually overridden by the dark-panel variant | Added tokenized disabled opacity in that context; enabled and disabled remain distinct |

## Verification record

### Automated source / numeric checks

Run `node scripts/audit-colors.mjs`. The script:

1. Reads current color tokens, composites alpha colors, uses sRGB relative luminance and tests unrounded contrast values.
2. Checks 31 combinations, including text, placeholder, control/focus boundaries, notices, upload, rating contours and worst-case gallery caption backgrounds.
3. Samples 101 positions of the existing explicitly sRGB CTA gradient; minimum contrast is 4.82:1.
4. Inventories all current source CSS files except the token definitions and rejects literal hex/rgb/hsl color overrides there. Google SVG-logo fills and token-driven showcase swatches are intentional artwork/preview exceptions.
5. Regenerates `docs/color-usage.md` and `docs/contrast-ratios.md`.

All 31 pairs pass. Final lint, TypeScript (`--incremental false`), production build and `git diff --check` pass. `next-env.d.ts` has no diff.

### Browser coverage

Chromium scan: seven routes at **390, 768 and 1440px**, 21 route/width combinations and 2,016 text/placeholder observations. Final scan: zero failures in supported solid/alpha cases. The scanner separates gradient/image cases for dedicated analysis instead of pretending a white parent is their actual background. This count includes repeated shared elements; it is not a count of unique text styles.

Real UI states inspected:

- Contact page: pointer focus, keyboard focus on the blue panel, empty-submit validation with visible messages and the first invalid field. Empty submission stopped client-side; no real inquiry was sent.
- Calculator: disabled initial add button, selected radio, pointer focus (2px mid-blue border), keyboard focus (mid-blue ring), enabled add-button hover (brand text on subtle background).
- Gallery: selected second tab and its underline; photo hover caption; two-tone keyboard focus on a photo.
- FAQ: opened question with brand text and an expanded state.
- Contact action card: white text on brand hover, with a white icon surface.
- Announcement banner: visible white keyboard outline.
- Internal form demo: local loading, success and simulated failure with preserved values. These callbacks do not call the contact API.

Hover/active navigation, footer, text links, buttons, product choices and review links were also checked in the CSS consumer inventory; they reuse tested foreground/background pairs. Upload invalid/disabled combinations were verified in the token matrix and CSS cascade, not by sending files to the public form.

Visual screenshots reviewed: desktop gallery hover/focus, review cards and star contours, contact focus, and mobile contact keyboard focus. Evidence is local and temporary under `/tmp/insecto-color-audit/`: `before.json`, `after.json`, `states.json` and screenshots. Browser measurements were made on the running development site; the production build was compiled but not served for a separate visual pass.

## Remaining limits / next stage

- This audit does not certify every intermediate animation frame, operating-system forced-color mode, browser extension styling, native autofill color or external Google Maps controls.
- Real iOS Safari/Android Chrome and desktop Safari checks remain in the cross-browser stage. No business data or inquiry was submitted during testing.
- Final photography/copy or new color roles can reopen affected checks. Caption contrast has a worst-case scrim guarantee; decorative image content itself is not recolored.
- Next: shared component variants and consistency, followed by icon/surface and comprehensive keyboard/interaction checks in [design-system-readiness.md](design-system-readiness.md).
