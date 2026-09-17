# Insecto

Next.js App Router, TypeScript, Tailwind CSS. Develop locally; GitHub and deployment are later steps requested separately by the user.

- Read docs/design-system.md for accepted decisions and current proposals.
- src/app/tokens.css is the canonical source for colors, typography, spacing, breakpoints, radii, shadows and control dimensions. Tailwind theme values are mapped there.
- Reuse src/components/ui and shared layout primitives. New sections should use semantic tokens; add a reusable token when a real need arises.
- Use rem for text and layout, unitless line-height, em for letter spacing. Thin borders may use px.
- Montserrat Variable is for headings; Manrope Variable for body and controls. Both fonts are self-hosted through installed Fontsource packages.
- Review one section at a time with the user. The public marketing homepage has not been designed yet.
- The design-system contact demo is a clearly labeled local simulation. Never pretend a message was delivered or invent a phone number, reviews, service areas or business claims.
- Keep keyboard focus visible, pair errors with text, preserve form entries on failed submission and guard duplicate requests.
- Run npm run lint, npm run typecheck and npm run build for implementation changes. Use browser checks for meaningful responsive and interaction changes.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
