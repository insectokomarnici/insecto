# Website design system starter specification

Version: 1.0 · Reference inspected: Insecto repository, 2026-09-28.

## 1. Purpose and authority

Build a new website with the reference project's layout discipline, proportions, reusable components and iterative workflow. Give it an independent visual identity through a new palette, font pairing, imagery and business content.

This document is self-contained. The implementing agent does not need access to the Insecto repository. It is a specification, not an existing component library or an application scaffold.

Read `BRAND-BRIEF.md` before implementation. Treat its confirmed facts as content input and this document as the initial design contract. Later explicit user decisions take precedence; record accepted changes in `docs/design-system.md` so this starter does not override newer choices.

The measurements below are starting values derived from the current implementation. New reusable abstractions and clarified rules are recommendations for the new project. In particular, `SplitLayout` and `ActionGroup` are proposed APIs, not claims about component names already present in Insecto.

Do not transfer the Insecto name, blue palette, Montserrat/Manrope pairing, reviews, contact information, service areas, prices, calculator logic, photographs or business claims. Do not copy historical experiments or contradictory values from old project notes.

## 2. Scope and working modes

Use the mode selected in the brief:

- `design-system-only`: implement the foundation, reusable components, a `/design-system` specimen page and a neutral composition for checking the visual direction.
- `design-system-and-homepage`: also implement a complete first homepage suitable for the stated business. This is the recommended starting mode for subsequent section-by-section refinement.

If colors or fonts are delegated to the agent, choose one coherent provisional direction and implement it. Record which decisions remain provisional. Do not block independent work for every reversible visual choice.

If the business purpose is unknown, ask for it while completing the independent foundation. Unknown business information is not permission to invent facts. A generic component specimen is preferable to a homepage claiming an invented company's history.

Initial delivery is local. GitHub pushes, production deployment, paid services and real form delivery require the user's relevant request or authorization. Do not create those as side effects of setting up the design system.

## 3. Implementation foundation

For an empty project, use Next.js App Router, TypeScript, Tailwind CSS and CSS custom properties. For an existing compatible application, inspect it first and preserve its architecture and uncommitted work. Do not overwrite an existing project to match a starter directory tree.

Verify the installed framework version and its relevant documentation before implementation. When available, read `node_modules/next/dist/docs/`. Do not pin a new project to the reference project's version merely because it was used here. Commit the package manager's lockfile and document the required runtime.

Suggested structure:

```text
src/
  app/
    globals.css
    tokens.css
    layout.tsx
    page.tsx
    design-system/page.tsx
  components/
    ui/                 # Semantic layout and control primitives
    sections/           # Business sections composed from those primitives
  lib/                  # Shared behavior and server integrations when needed
  content/              # Typed content when useful; not a mandatory CMS
public/
  images/
docs/
  starter/              # This portable package
  design-system.md      # Current accepted decisions and open proposals
  project-handoff.md    # Current state, validation and next section
AGENTS.md
README.md
```

Use server components by default. Limit client components to actual interaction. Avoid installing a large UI framework, a carousel package or an animation library for behavior that native elements and a small shared component can handle well.

Technical code and project documentation should be in English. User-facing website text follows the brief; the default is Serbian Latin. Component examples on `/design-system` must clearly distinguish sample content from confirmed business information.

## 4. Token architecture

`src/app/tokens.css` is the canonical source of visual values. Use three levels where helpful:

1. Foundation values: brand palette, neutral palette, spacing scale, font families, radii.
2. Semantic roles: page gutter, section gap, heading color, body text, control border, focus ring.
3. Component roles: button padding, icon container size, card padding or accordion duration when a real reusable need exists.

Map Tailwind theme names to the same values. With Tailwind v4, use the appropriate `@theme` or `@theme inline` declarations depending on whether a value is a literal or an alias. Avoid a second independent scale in a configuration file.

Examples of intended relationships:

```css
/* Semantic aliases; underlying palette values come from the new brand. */
:root {
  --color-link: var(--color-brand);
  --color-link-hover: var(--color-brand);
  --color-icon: var(--color-brand);
  --radius-button: var(--radius-pill);
  --radius-card: var(--radius-lg);
  --radius-media: var(--radius-lg);
}
```

Rules:

- Use `rem` for text, spacing, control dimensions and layout limits; unitless line heights; `em` for tracking. Use fluid percentages, grid fractions and `clamp()` where appropriate.
- Keep the root font size at `100%`. Do not use a 62.5% root or change the root font size to scale the entire layout on phones.
- Thin borders may use `1px`. A circle can use `50%`. Source SVG geometry can retain its original `viewBox` units.
- Do not hardcode repeated colors, radii, font sizes or gaps in individual sections, arbitrary Tailwind values or JSX style objects.
- Runtime measurement is a legitimate exception: measured accordion height, drag position, progress and similar behavior may use a CSS variable or inline style. Such values are not design tokens.
- Add a token when a recurring role or meaningful responsive rule needs one. Do not create a global token for every isolated number or every section name.
- Document a genuine intentional exception instead of quietly creating a competing visual system.

## 5. Color system and rebranding

Define a complete palette together; a search-and-replace of the old blue is insufficient. Choose colors from the brief or propose a coordinated set. The new palette must work for text, controls, surfaces, states and focus.

| Semantic token | Purpose |
| --- | --- |
| `--color-brand` | Main brand color, links, active controls and brand icons. |
| `--color-brand-light` | Coordinated gradient endpoint or lighter brand treatment; not automatically suitable for text. |
| `--color-on-brand` | Readable text/icons on solid and gradient brand surfaces. |
| `--color-heading` | Main headings and strong neutral text. |
| `--color-body` | Paragraphs, navigation and ordinary form text. |
| `--color-muted` | Supporting text; still readable on its intended surface. |
| `--color-placeholder` | Input examples; verify contrast separately. |
| `--color-surface` | Main light surface, typically white. |
| `--color-surface-subtle` | Soft section background. |
| `--color-border` | Standard card, media and decorative divider border. |
| `--color-control-border` | Boundary of interactive fields when needed for recognition. |
| `--color-focus` | Visible keyboard focus; select for the surfaces where it appears. |
| `--color-success`, `--color-success-surface` | Confirmed success messages and status. |
| `--color-error`, `--color-error-surface` | Validation and submission errors. |
| `--color-link-hover`, `--color-icon` | Shared aliases that prevent local hover/icon color drift. |

An accent color, warning state and dark panel aliases are optional; add them only when used. For a brand panel, define its foreground, muted foreground and field states centrally instead of scattering white opacity values.

Use one brand color for ordinary link, navigation, FAQ and review-control hover where their backgrounds permit it. The visible feedback can also be an underline or surface change. Control variants still have different state recipes: a filled button and a text link need not use identical CSS.

Success and error colors describe state; do not redefine them simply to match the brand. Official multicolor logos and rating symbols may retain their provider colors. User content and product swatches are data, not parts of the new brand palette.

Validate body text at least 4.5:1 against its actual background. WCAG permits 3:1 for qualifying large text. Necessary non-text control indicators generally need 3:1 against adjacent colors. Check placeholder text, focused controls, error states, soft panels and every relevant part of a gradient. A decorative divider does not automatically need the same contrast as an input boundary. See [WCAG text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) and [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

## 6. Fonts and typography

Define independent family roles even if some share a family:

```text
--font-heading   headings
--font-body      paragraphs, navigation, labels, form controls
--font-button    CTA buttons; usually the heading family
```

Select a new pairing from the brief. Self-host licensed font files or installed Fontsource packages. Verify actual support for `č ć š ž đ Č Ć Š Ž Đ`, requested weights and italics when used. Use appropriate fallback stacks and a loading strategy that minimizes layout shift. Do not synthesize missing bold weights.

Starting type scale:

| Role | Size | Line height | Weight | Tracking |
| --- | --- | --- | --- | --- |
| Hero title | `clamp(2rem, 1.6087rem + 1.7391vw, 3rem)` | 1.25; 1.166667 at `lg` | 700 | -0.025em |
| Section title | `clamp(1.75rem, 1.4565rem + 1.3043vw, 2.5rem)` | 1.285714; 1.2 at `lg` | 700 | -0.02em |
| Card title | `clamp(1.375rem, 1.3261rem + 0.2174vw, 1.5rem)` | 1.363636; 1.333333 at `lg` | 600 | -0.01em |
| Lead | `clamp(1.125rem, 1.0761rem + 0.2174vw, 1.25rem)` | 1.555556; 1.6 at `lg` | 400 | normal |
| Body | 1rem | 1.625 | 400 | normal |
| Small | 0.875rem | 1.571429 | 400 | normal |
| Label | 0.875rem | 1.428571 | 600 | normal |
| Navigation | 1rem | 1.5 | 600 | normal |
| Button | 1rem | 1.5 | 600 | normal |
| Process number | 1.5rem | 1 | 600 | normal |

An optional compact eyebrow may use the label scale and a separate tracking token of `0.06em`. It is not a default decoration above every heading. Do not apply its tracking to ordinary input labels.

These are starting metrics, not a promise that every font will occupy the same space. After selecting the new fonts, inspect their apparent size, weight, line wrapping and accented characters. Adjust shared role tokens if necessary and record the change.

Separate semantic heading level from visual size: an `h2` inside a smaller panel may use the card size while a section `h2` uses the section size. Keep one meaningful page `h1`, section `h2`s and nested `h3`s. Do not use heading tags to make text bold.

Do not insert manual `<br>` tags to fix a heading for one viewport. Prefer a reasonable text measure and natural wrapping. Centering a heading is an explicit layout choice; it must not change accidentally when a card border or background is removed.

## 7. Spacing, containers and breakpoints

Spacing scale:

| Step | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| rem | 0 | .25 | .5 | .75 | 1 | 1.25 | 1.5 | 2 | 2.5 | 3 | 4 | 5 | 6 |

Layout limits:

| Token role | Value |
| --- | --- |
| Main container | 75rem |
| Narrow content container | 45rem |
| Text measure | 38rem |
| Useful minimum repeated-card width | 18rem, capped by available width |

The main container includes its horizontal padding with border-box sizing. A full-width section background may extend across the viewport; its content stays inside the shared centered container. “Full width” normally means the site's content width unless the user explicitly requests an edge-to-edge treatment.

Breakpoints: `sm: 40rem`, `md: 48rem`, `lg: 64rem`, `xl: 80rem`, `2xl: 96rem`. Keep these aligned with the Tailwind theme. Native CSS media query boundaries must use matching literal values because ordinary CSS custom properties cannot be substituted into media query conditions.

Responsive semantic spacing:

| Role | Base | `md` and above | `lg` and above |
| --- | --- | --- | --- |
| Page gutter | 1.25rem | 1.5rem | 2rem |
| Section vertical padding | 2.5rem | 3rem | 4rem |
| Compact section padding | 2rem | 2.5rem | 3rem |
| Section content / split-column gap | 2rem | 2.5rem | 3rem |
| Section introduction → main content | 1.5rem | 2rem | 2.5rem |
| Repeated-card grid gap | 1rem | 1.5rem | 2rem |
| Card padding | 1.5rem | 1.5rem | 2rem |

Additional roles: ordinary text stack `1rem`; text → CTA `1.5rem`; CTA → rating row `0.5rem`; form field gap `1.25rem`; field label → control `0.5rem`.

Implement semantic responsive variables once. For example:

```css
:root {
  --container-wide: 75rem;
  --page-gutter: 1.25rem;
  --section-padding: 2.5rem;
  --section-content-gap: 2rem;
  --section-intro-gap: 1.5rem;
  --grid-gap: 1rem;
  --card-padding: 1.5rem;
}

@media (min-width: 48rem) {
  :root {
    --page-gutter: 1.5rem;
    --section-padding: 3rem;
    --section-content-gap: 2.5rem;
    --section-intro-gap: 2rem;
    --grid-gap: 1.5rem;
  }
}

@media (min-width: 64rem) {
  :root {
    --page-gutter: 2rem;
    --section-padding: 4rem;
    --section-content-gap: 3rem;
    --section-intro-gap: 2.5rem;
    --grid-gap: 2rem;
    --card-padding: 2rem;
  }
}
```

Keep gap roles distinct. A heading and its introductory paragraph use the text stack; the introduction and the section's grid use the intro gap; the two main columns use the content gap; cards inside a grid use the grid gap. Do not combine parent gap, paragraph margin and an extra spacer for the same relationship.

Use a reset for default heading/paragraph margins and express layout through the parent. Avoid negative margins to compensate for a duplicated introduction gap.

### Two-column rule

`SplitLayout` defaults to two equal `minmax(0, 1fr)` columns at `lg` and one column below it. Both children need `min-width: 0`. Use the shared content gap, not a local `gap-12` that silently differs on smaller screens.

Default alignment is start. Allow an explicit center-aligned variant for a short text block beside an image. Define visual and DOM order intentionally; mobile reading order must remain logical. A different ratio is allowed for a documented content need, not because each section was authored independently.

Two neighboring 50% widths plus a gap overflow; use grid fractions. Avoid fixed heights for text columns and cards. At narrow widths, let card grids become one column before text becomes cramped.

## 8. Surfaces, borders, radii and depth

| Role | Starting value |
| --- | --- |
| Small radius | 0.25rem |
| Medium radius / controls | 0.5rem |
| Large radius / cards / media | 0.75rem |
| Panel radius | 1rem |
| Pill radius / buttons | 999rem |
| Standard border | 1px solid semantic border color |
| Emphasis stripe | 0.375rem, only for an intentional emphasis variant |
| Dropzone dashed border | 0.125rem, only if uploads are included |

Choose explicit card variants such as plain, outlined, soft and brand panel. Do not give every block a border, tinted background and shadow by default. Standard outlined cards use the same border token; input borders may be stronger for contrast.

Optional restrained depth presets can start from `0 0.125rem 0.5rem` with approximately 6% tint and `0 0.375rem 1.25rem -0.25rem` with approximately 12% tint. Derive their color from the new palette or a suitable neutral; do not retain the old brand's shadow tint. Use elevated depth for an actual overlay when it helps separation.

A decorative thick left stripe must not change content alignment between otherwise equivalent cards. Reserve consistent geometry or draw it as an inset/pseudo-element within the standard box. Verify equal content offsets, including at the rounded corners.

Media wrappers own border, radius and clipping. The image fills that wrapper without duplicate competing borders. Changing a wrapper's surface must not alter unrelated SVG strokes or illustration frames.

## 9. Shared component contracts

Build components needed by the chosen scope. These names describe responsibilities; avoid both giant all-purpose components and copies for each section.

| Component | Contract |
| --- | --- |
| `Container` | Shared maximum width and responsive page gutters. |
| `Section` | Semantic section wrapper, surface and vertical padding variants. |
| `SectionIntro` | Optional eyebrow, heading and optional paragraph; explicit start/center alignment. |
| `SplitLayout` | Equal columns, shared gap, stacking and alignment rules. |
| `Heading` | Semantic element independent of visual type role. |
| `Button`, `ButtonLink` | Shared variant/size styling; correct action vs navigation semantics. |
| `ActionGroup` | Primary CTA and optional confirmed rating underneath as one reusable composition. |
| `Field`, input, textarea | Label, description, error and control relationships. |
| `Icon`, `IconBadge` | Size roles, decorative/accessibility behavior and consistent surface treatment. |
| `Card` or specific card patterns | A small set of meaningful visual variants. |
| `Accordion`, `Tooltip` | Shared interaction and accessibility if used. |

An eyebrow is optional. If present in multiple places, use one component with semantic tone variants, a shared radius and one heading gap. Do not create a new pill style for each section.

### Buttons

Three sizes; all use `--font-button`, weight 600, size `1rem` and line height `1.5`:

| Size | Minimum height | Block padding | Inline padding |
| --- | --- | --- | --- |
| small | 2.5rem | 0.625rem | 1rem |
| medium | 3rem | 0.75rem | 1.25rem |
| large | 3.25rem | 0.875rem | 1.375rem |

These are minimum heights, not fixed final heights. Text line height, padding and borders can make the rendered control taller. Do not force a height that clips text or focus at zoom.

Visual variants:

- `primary`: a restrained 110-degree gradient from the selected lighter brand tone to the main brand, legible foreground and shared border recipe. Hover settles into the main brand tone. If the new palette cannot support the gradient with accessible contrast, use a documented solid variant.
- `brand`: solid brand surface and matching border; hover uses the subtle surface with brand text and border.
- `secondary`: light surface, brand border and text; hover uses the shared soft surface.

The primary CTA remains recognizable across sections. Use the same component and state recipe in a floating CTA if one is requested. Do not switch it to a separate locally defined gradient.

Use a button for an action and an anchor for navigation, including `tel:` and section links. Give non-submit buttons `type="button"`. Keep visible focus. Do not resize a button when it becomes enabled, gains a loading indicator or causes a list to appear. Reserve appropriate space for loading feedback and prevent duplicate requests.

Mobile full-width behavior belongs to an explicit layout variant. Preserve useful touch targets without making every desktop control stretch across its container.

### CTA with rating

`ActionGroup` composes the real primary action and a compact optional rating row below, with a `0.5rem` gap. Its alignment is explicit. The rating row may contain a provider mark, stars, value and count linked to actual reviews. Use supplied or integrated data only.

Changing “add the CTA with reviews” must not turn the main CTA into a review link. The CTA performs the action specified in the brief; the rating is supporting information underneath. Omit the rating when data is unavailable. In the specimen page, a synthetic example must be visibly labeled as an example.

## 10. Icons and small visual elements

Choose one primary icon family compatible with the brand. Match stroke weight, stroke caps, optical size and filled/outlined treatment. A custom SVG may fill a real gap in that family; build it with matching geometry and `currentColor` rather than importing a random second style.

Starting visual size roles:

| Role | Icon size |
| --- | --- |
| Inline info/check | 1rem |
| Button/action | 1.25rem |
| Footer contact | 1.25rem |
| Feature item | 1.5rem |
| Process illustration | 2rem |
| Typical feature icon surface | 2.5rem square container |

The visible glyph and its interactive target are different measurements. Use a project default of at least `2.75rem` for independent icon-button targets where practical. WCAG 2.2 AA defines a 24 CSS pixel minimum target criterion with exceptions; the larger project target is a usability choice, not a statement that AA universally requires 44 pixels. See [target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).

For wrapped icon-plus-text rows, align the icon with the first text line using a consistent line-height wrapper. Do not vertically center a small check against an entire three-line paragraph. For a two-line contact label/value beside a large icon, centering against that deliberate text group may be appropriate.

Decorative icons are hidden from assistive technology. Icon-only controls have an accessible name. Use standard border color and a white/light icon surface when requested; avoid assigning every icon a new hue.

## 11. Forms and contact layouts

Use the body font for fields and labels. Starting field minimum height is `3.25rem`, padding `0.75rem 1rem`, with shared control radius and border. Keep labels separate from placeholders. A placeholder such as `tvoj@email` is an example, not a label or validation rule.

Field stacks use `1.25rem`; label → control uses `0.5rem`. A form can use two field columns from `sm` only when the containing panel has enough width. Collapse to one column without squeezing names, labels or errors.

Textarea variants may start at `8rem` standard and `5rem` compact with two visible rows. Let content and resizing expand naturally. Do not change every form because one section requested a compact message field.

Required fields follow the brief. An asterisk is a presentation choice; actual required semantics and clear instructions must remain correct. Keep labels consistent across forms, such as `Ime`, `Telefon` and `Email` for Serbian copy if those fields are used.

Support idle, focus, validation error, submitting, success and server error states. Associate error text with its field, do not rely only on color, preserve entries on failed delivery and guard duplicate submission. Use appropriate autocomplete, input type and mobile keyboard hints. A validation failure should direct attention to the first invalid field without unexpected page jumps on initial load.

Form demonstration and real delivery are separate:

- A clearly labeled local simulation belongs on `/design-system` and must not claim real delivery.
- A public form may display success only after confirmed server-side acceptance according to its integration contract.
- If integration is missing, do not ship a fake success flow. Document the pending connection and use an honest unavailable state or a real alternative contact method, if supplied.
- Keep credentials server-side and out of source control. Provide an `.env.example` with variable names, never real secrets.

Uploads, maps, marketing consent, spam controls and delivery services are added according to actual requirements. Do not inherit Insecto's fields, upload limits or service configuration automatically. If uploads are requested, define accepted types, limits, removal, error states and server validation explicitly.

A contact split uses the same equal-column and spacing rules as other sections. A brand form panel is a component variant; it does not require the whole section to be brand-colored. If a map is included and must align to the bottom of the form, use deliberate grid/flex allocation rather than unrelated manual spacer heights. On mobile, preserve the agreed reading order.

## 12. Interaction, motion and overlays

Use a small shared motion scale. Suggested new-project tokens: fast feedback `160ms`, normal feedback `240ms`, disclosure `420ms`, gallery overlay `300ms` and gallery image transform `500ms`. The disclosure and gallery timings are reference-derived; fast and normal are proposed defaults to be checked with the new design.

Use shared easing curves, animate only relevant properties and avoid `transition: all`. Hover must not move surrounding layout. Avoid unnecessary perpetual motion and carousel autoplay. Respect `prefers-reduced-motion` for transitions, animated scrolling and media.

Tooltips with an interactive info trigger must work on hover and focus and support tapping on touch screens. Give the trigger an accessible label, support Escape, keep the overlay within the viewport/required container and position the arrow relative to its actual trigger. Do not use a hardcoded offset that works only before the preceding sentence wraps. If the panel contains interactive content, implement it as a popover/disclosure rather than assigning tooltip semantics to it. Do not hide essential instructions exclusively in hover content.

Accordions use real triggers with expanded state and controlled panels, preserve logical focus and remove collapsed content from keyboard access. Prefer a robust native or accessible pattern. A shared animated disclosure may measure content height; do not clip content with a guessed `max-height`. Restore natural sizing after the transition so font loading and text changes remain safe.

For galleries, native horizontal scrolling with scroll snap is a valid first solution. Provide meaningful image alternatives, labelled previous/next controls where needed, touch support, visible focus and correct disabled/end states. No keyboard trap or surprise automatic movement. Show full images in an accessible dialog only if that behavior is requested and implemented completely.

## 13. Images, content and business sections

Use responsive image dimensions, appropriate `sizes`, reserved aspect ratios and optimized formats. Preserve source quality while avoiding multi-megabyte assets where a smaller file suffices. Strip unnecessary metadata from published photographs where practical. Do not claim image optimization or review it visually without actually doing so.

Choose aspect ratios by role, not by globally forcing all media square: a guide image may be `1 / 1`, project photos may be portrait, and a hero image may need a wider crop. Define focal points explicitly if needed and verify that important subjects survive mobile cropping. Keep meaningful text in HTML rather than baked into an image.

Use supplied/licensed assets. Do not present stock or generated people/projects as the actual team or completed work. If assets are missing, use an honest graphic or neutral placeholder in the local draft, and record what is needed.

Suggested homepage composition for a service business, adjusted to the brief:

1. Header and hero with one clear promise and real primary action.
2. Main services or products with a concise explanation.
3. Selection guidance or benefits relevant to the customer's decision.
4. Process describing only confirmed steps and timings.
5. Real customer evidence and project gallery when available.
6. About/team content grounded in supplied facts.
7. Frequently asked questions based on known service details.
8. Contact/inquiry section and footer.

This is a menu of useful roles, not a mandatory eight-section template. Do not add a price calculator, booking engine, blog or commerce flow unless it supports the brief. Reorder sections to fit the decision journey. Avoid repeating the same three cards, heading and CTA mechanically in every section.

### Reviews when real data is supplied

Use a compact author row: avatar, adjacent name/date stack and a restrained provider mark. Place stars below the author row and review text beneath them. Use the shared card, body and small-text roles. Missing avatars use a consistent neutral fallback.

For uniformly sized collapsed cards, clamp the review body and offer `Pročitaj više` only when content is truncated. Expand the text in the same card and update the control state; do not turn it into an unexpected outbound link. Allow the expanded card to grow or use an explicitly designed accessible detail view.

Preserve original review text and attribution. Do not fabricate a verification badge or imply the provider verified something the data does not establish. Follow the current provider's attribution, caching and display requirements. API availability, quotas and costs must be checked when integration is actually requested; no provider plan or unlimited usage is assumed here.

## 14. Header, footer and page behavior

Use a semantic main content area, skip link and accessible navigation. A sticky header should have predictable document flow and not obscure headings or keyboard focus. Choose the mobile navigation breakpoint based on real content fit within the shared breakpoint system.

Mobile menus need a named trigger, expanded state, keyboard operation, Escape and appropriate focus management. Preserve page scrolling when the menu is closed and prevent scroll lock from surviving navigation.

Footer layout should collapse deliberately: a desktop logo area plus link columns; an intermediate stage with the logo on its own row and the link columns beside one another; then a smaller-screen stack when needed. Do not squeeze the logo beside three cramped columns until they abruptly become one long column.

Check fresh direct entry, refresh, internal navigation and browser back/forward on every implemented route. A URL without a fragment should not unexpectedly start scrolled past its title. Hash navigation must reveal the correct section below the header, and history should retain expected behavior. Diagnose focus, scroll anchoring, sticky layout and routing causes before adding a global `scrollTo(0, 0)` workaround.

## 15. SEO, performance and accessibility baseline

Use truthful page titles/descriptions from the brief, a coherent heading hierarchy, descriptive links and appropriate image alternatives. Configure canonical URLs and indexability when the real domain and publication scope are known. Do not silently use the Insecto domain. Keep a component demo out of search results; `noindex` is not access control.

Only add structured data supported by real facts. Do not emit fabricated ratings, locations, opening hours or organizations just to populate a schema.

Reserve media space to avoid layout shift, load below-the-fold media appropriately and avoid sending the entire site as an unnecessary client component. Check responsive image requests, font behavior and browser errors. Performance claims need actual measurements.

Keep keyboard focus visible on every interactive element. A starting focus treatment may use a `0.1875rem` ring and `0.125rem` surface-colored separation; verify it on both light and brand panels. Avoid removing outlines unless an equally visible replacement is present.

Support keyboard-only use, readable errors, zoom, reduced motion, long content and accessible names. Aim for WCAG 2.2 AA; automated checking alone is not a conformance claim.

## 16. Specimen page and acceptance checks

The `/design-system` page should make consistency review practical. Include:

- Palette roles with actual foreground/background pairs and checked contrast.
- Heading/body/label examples, Serbian diacritics and long wrapping text.
- Spacing, container, radius and border examples.
- Every button size and variant in default, hover/focus, disabled and loading states.
- Ordinary and brand-panel form controls, errors and clearly labelled local demo states.
- Repeated cards, icon sizes, a two-column composition and `ActionGroup` with and without a labelled sample rating.
- Accordion, tooltip or gallery examples only for components included in the project.

For implementation changes run the project's lint, typecheck and production build commands, plus `git diff --check`. Set up equivalent scripts if the new scaffold does not provide them. A typical typecheck uses `tsc --noEmit --incremental false`; generate required framework route types first if the installed version requires them. Do not run commands concurrently when they modify shared generated output.

Browser validation is required for meaningful layout or interaction work. At minimum inspect 360px and 390px phone widths, 768px tablet, 1024px and 1440px desktop, plus just below and at the actual layout breakpoint where content changes. Include a narrow 320px/zoom check where content may overflow. These are test viewport dimensions, not extra CSS breakpoints.

Validate at least:

| Area | Evidence to collect |
| --- | --- |
| Containers | Shared left/right edges; no accidental viewport-width section content. |
| Split layouts | Equal widths where specified; measured gap matches the semantic token. |
| Typography | Real loaded fonts, correct weights, no cropped glyphs or unwanted forced wraps. |
| Controls | Stable dimensions, visible focus, appropriate target sizes, real destinations. |
| Forms | Correct labels/required state, readable errors, values retained on failure, duplicate guard. |
| Icons | Consistent glyph sizes, first-line alignment for wrapped text, correct border/surface roles. |
| Media | Intended crop, reserved dimensions, no broken images or unnecessary blur. |
| Interaction | Menus, disclosures, tooltips and gallery work with keyboard and touch patterns. |
| Navigation | Direct routes begin correctly, hashes work, back/forward and menu scroll lock behave. |
| Health | No new runtime/console errors, horizontal page overflow or unhandled loading state. |

Do not submit real inquiries or trigger external messages just to test a form without authorization. Use local mocks or a controlled test path for delivery states. Do not claim mobile-device testing when only a desktop viewport was resized; describe the actual method.

Do not add tests that simply mirror CSS declarations or trivial reversible copy changes. Use meaningful tests for behavior that can regress, such as validation and state transitions, when those features exist.

## 17. Iteration and handoff

After the initial homepage, refine one section at a time. Inspect its current implementation, make the requested change, check affected breakpoints and update the decision record. Preserve accepted content and unrelated sections. If a shared token changes, inspect its other consumers before calling the change complete.

Keep `docs/design-system.md` short and current: adopted palette/fonts, token departures from this baseline, shared component recipes, accepted layout rules and unresolved proposals. Do not accumulate contradictory historic decisions as if all were still active.

Keep `docs/project-handoff.md` practical: current routes, completed sections, pending business inputs, unconnected integrations, exact validation results, known limitations and the next suggested section. Do not store credentials or sensitive user data in handoff files.

The final implementation report should identify what exists, how to open it locally, which checks passed, what was actually inspected in the browser and any remaining blocker. A successful build alone is not proof that the layout matches this design system.
