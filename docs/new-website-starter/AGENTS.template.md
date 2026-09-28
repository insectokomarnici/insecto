# Website project rules

This is a template for the NEW project's root AGENTS.md. Merge it with existing project instructions rather than overwriting unrelated rules.

- Read `docs/starter/BRAND-BRIEF.md` and `docs/starter/DESIGN-SYSTEM-SPEC.md` for the initial build. Thereafter use `docs/design-system.md` for current accepted decisions and `docs/project-handoff.md` for state. Read relevant files when needed, not every file before every edit.
- Default stack for a new empty project: Next.js App Router, TypeScript, Tailwind CSS and CSS custom properties. Inspect installed package versions and their local/official documentation before using version-sensitive APIs. Preserve an existing compatible stack unless the user asks to migrate it.
- `src/app/tokens.css` is the only source of visual values. Reuse semantic tokens, UI primitives, layout primitives and action groups. Keep section styles scoped. No hard-coded per-section colors, typography, spacing or button variants.
- Use rem for typography/layout, unitless line-height, em for letter spacing; thin borders may use px. Runtime measurements and intrinsic image dimensions are allowed exceptions. No inline visual overrides. Keep dynamic measurement styles isolated from design decisions.
- Use the new brand palette and selected self-hosted fonts. Do not import Insecto branding, business details, copy, assets or credentials. Record proposed versus accepted visual choices.
- Two-column sections default to equal columns and `--section-content-gap`. Cards use `--grid-gap`. Heading-to-copy spacing uses `--stack-gap`. Do not use one token for unrelated roles.
- Shared buttons have small/medium/large sizes and primary/brand/secondary variants. Use one ActionGroup for a repeated primary CTA with optional real rating beneath it. CTA destination, label, icon, size and rating are part of that pattern.
- Keep heading semantics separate from visual size. Use the same icon family and semantic dimensions. Avoid manual line breaks, fixed content heights and invisible decorative layout hacks.
- Build the scope selected in the brief; then iterate one requested section at a time. Preserve accepted work. If a shared change affects other sections, inspect the affected examples and report its scope.
- Keep keyboard focus visible, label controls, explain errors in text, preserve input after failure and prevent duplicate submission. Show success only after the server confirms acceptance; do not imply inbox delivery unless it is actually confirmed. Simulations belong in a clearly labeled local demo.
- Do not invent reviews, ratings, contact details, claims, prices, statistics or service areas. Missing integration data must not hide headings or unrelated page content. Keep API keys server-only and out of Git.
- After implementation changes run `npm run lint`, `npm run typecheck`, `npm run build` and `git diff --check`. Run build and standalone typecheck sequentially if they share generated output. For responsive or interaction changes inspect actual desktop/mobile rendering and relevant keyboard/touch states; report what could not be checked.
- Keep docs/code comments in English and public copy in the brief's language. Update accepted decisions and handoff when meaningful choices change; do not leave obsolete instructions active.
- Develop locally. Push, deploy and connect external delivery services only when requested or already explicitly authorized for that task.
