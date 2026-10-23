# Icons, borders, radii and shadows

Updated: 23 October 2026. Stage 4 of the design-system review. Canonical values live in `src/app/tokens.css`; actual CSS consumers are listed in [surface-usage.md](surface-usage.md).

## Shape and border contract

| Role | Token | Normal-root value | Use |
| --- | --- | --- | --- |
| CTA | `--radius-button` | Pill | All text-button variants. The token now describes their actual shape. |
| Compact control | `--radius-control` | 8px | Menu trigger, removal/read-more control and review-source focus surface. |
| Input / tab / radio card | `--radius-input` | 8px | Rounded rectangular controls. |
| Icon badge | `--radius-icon` | 8px | Square contact/guide/about icon backgrounds. |
| Card / media frame | `--radius-card` | 12px | Product, review, guide, process, included-service, calculator and contact action cards; photo/map frames. |
| Large panel | `--radius-panel` | 16px | Complete form panels and alternative About contact panel. |
| True circle | `--radius-circle` | 50% | Equal-sided avatars, step markers, swatches, gallery arrows/zoom badges and floating call. |
| Standard border/divider | `--border-width` | 1px | Card boundaries and dividers. Decorative gray is intentionally lighter than functional input gray. |
| Strong boundary | `--border-emphasis-width` | 2px | Source for separately named focus, selection and upload-border aliases; image-caption accent. |
| Brand edge | `--border-accent-width` | 6px | Approved process/included-service left edges; preserve equal content insets. |

A 12px content card and 16px full form panel are different roles. Circular controls must have equal dimensions; do not use a circle radius for a text button. Color roles remain the previous contrast audit's approved palette. Selected and focused states have separate token names even while both use a 2px boundary. Keyboard focus also retains its independent visible ring.

## Elevation contract

- **Flat:** ordinary content/review/calculator cards, branded form panels and the alternative About contact panel. Border/color separates the surface; a shadow is not added by default.
- **Soft:** photographs, map frames and contact action cards. Contact cards intentionally keep the approved blue hover and soft resting separation; the informational working-hours card keeps the same approved hover without becoming a link/button.
- **Raised:** dropdown/mobile menus, gallery lightbox, floating call and contact-card hover. These represent an overlay or an explicit interactive elevation treatment.
- `Card` defaults to `elevation="none"`; `soft` and `raised` are explicit variants demonstrated in the internal catalogue. Focus rings are not elevation shadows and must survive hover.

## Icon contract and retained artwork

| Role | Size | Source / rationale |
| --- | --- | --- |
| Inline / navigation | 16px | Banner, compact trust/check text, and rating summary. |
| Action / disclosure / footer | 20px | Local Carbon filled call icon, action feedback, navigation/FAQ/product chevrons and footer contact/social icons. |
| Feature | 24px | Boxicons information icons and custom `WindowIcon`; window and DoorOpen use compatible 24-unit canvases/line weight. |
| Process / included service | 32px | Same Material Straighten and Drill assets in both sections; guarantee retains its approved shield. |
| Calculator preview | 48px | Approved custom 64-unit pleated, roller and fixed drawings. Fine mesh/hardware strokes are illustration geometry, not global UI strokes. |
| Menu / close | 20 / 17.6px | Boxicons artwork is cropped to its visible bounds. The close mark is 17.6px so its square visible area closely matches the menu bars’ 20 × 15.6px area. Both remain centered in the same 40px hit target, which extends 10px into the gutter so the menu bars reach the content edge. |
| Floating call | 28.8px | Existing optical size inside the larger 60px floating control. |
| Icon badge boxes | 40 / 48px | Named small/medium badge tokens. Contact-page detail row is compact; homepage contact/guide cards use the larger badge. |

Boxicons is the standard UI icon library. Call actions use the local `PhoneFilledIcon` component with the original Carbon path (Apache-2.0, license retained in `licenses/carbon-icons-LICENSE.txt`); navigation/accordion/gallery chevrons, gallery close/zoom, upload and secondary-link arrows use Boxicons. The upload equivalent is `ArrowFromBottom`, zoom is `SearchPlus`, and gallery close is `X`. Preserve the approved Material measurement/drill assets, custom product/window illustrations and Google artwork as explicit exceptions. The Carbon dependency has been removed. Filled call icons distinguish actions from informational outline phone icons. Google mark colors, verification artwork and yellow-star contrast contour remain unchanged. Decorative SVGs are hidden from assistive technology; their enclosing controls retain accessible names. SVG stroke/viewBox coordinates stay in asset code and are not converted to CSS rem tokens.

Centered rows use flex/grid alignment. Multi-line supporting notices align their icon to the first text line with a formula based on the text line-height and icon height. The service-area checklist uses the same first-line rule. Hero checkmarks remain centered against each full text row, including wrapped rows.

## Corrections made

1. Replaced the misleading 8px `--radius-button` role with the actual pill shape; introduced a separate compact-control role so menu/remove/source controls retain their accepted rounded-square shape.
2. Contact action cards now use the same 12px card radius as their peers instead of the large-panel radius. Icon badge radius/box sizes now have named shared roles across homepage, contact and alternative About.
3. Review cards and blue form panels no longer carry redundant elevation shadows. The base `Card` is flat by default; opt-in soft/raised catalogue examples remain available. Desktop dropdown uses raised elevation like the other overlay menus.
4. FAQ and product accordions use the same 20px disclosure-chevron token (products previously used 16px). Navigation now shares the 20px disclosure size at the user’s request.
5. Removed the Hero checkmark's 1.6px downward transform. Replaced fixed notice/checklist offsets with line-height-derived offsets (1px supporting notice / 3px body checklist at the normal root).
6. Contact-card hover now explicitly composes its raised shadow with the keyboard focus ring rather than overriding the ring.
7. Selection no longer borrows a focus-named width; circle geometry has a dedicated radius token. Removed the unused included-icon-size token, which no longer described rendered artwork.
8. `/design-system#surfaces` renders the actual icon assets at their production sizes and explains shape/elevation roles. Added a generated surface inventory that rejects new literal CSS border/radius/shadow dimensions outside tokens.

## Media review

Retained the accepted compositions: portrait 3:4 Hero; 4:3 contained transparent team image; square product frames with cover crops; installation gallery photo crops with a separate contained full-image lightbox; 4:3 service-area map; contact map at 4:3 on narrow screens and filling the form-column height on desktop; portrait alternative About installation/project images. Frame radii come from the card token. No photo, artwork, map URL or calculator mesh geometry was changed. Third-party map contents are outside the CSS audit.

## Verification and limits

- Seven routes (`/`, `/kontakt`, `/o-nama`, `/o-namav1`, both legal pages, `/design-system`) at 320/390/768/1024/1440px: 35 responsive states, 801 visible SVG observations and 225 surface observations. No page overflow, distorted SVG aspect ratios or unhidden decorative SVGs in the inspected main/header/footer scope. Evidence: `/tmp/insecto-icon-surface-audit/matrix.json`.
- Visual catalogue review covers actual call/disclosure, window/door, measurement/drill and all three calculator drawings. No asset geometry was rewritten.
- Contact detail badges measured 40px with 20px icons, 8px corners and the standard gray border. Homepage badges use 48px with 24px icons. Hero center offset is now 0px; notice/checklist offsets follow the documented formulas.
- Checked hover plus keyboard focus on contact cards, rounded mobile contact cards, and surface/token declarations. Source inventories cover both CSS files, including alternative About.
- `npm run lint`, `npx tsc --noEmit --incremental false`, `npm run build` and `git diff --check` passed. The surface inventory validated 227 declarations; the existing color audit also passed all 31 contrast pairs. `next-env.d.ts` has no diff.
- The three product routes currently return `null`, so they have no route-specific content components to inspect; their shared site chrome is covered by the other routes.
- Desktop Chromium responsive checks do not establish real-device Safari/Android behavior or a complete screen-reader audit. Full interaction/focus traversal remains stage 5; native text zoom, real devices and final content remain stage 6. Optical checks are visual, not a claim that unlike icon shapes occupy identical painted areas.
