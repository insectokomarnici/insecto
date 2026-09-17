# Insecto

Local Next.js + TypeScript + Tailwind CSS project. The current deliverable is the design-system foundation; marketing sections and real form delivery come later.

## Run locally

Node.js 20.9+ is required (Node 24 used for initial validation).

```sh
npm install
npm run dev
```

Open http://localhost:3000/design-system. The root route redirects there while the homepage is being planned. The server binds to the local machine. If port 3000 is occupied, Next prints the selected alternate port.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Where to edit

- `src/app/tokens.css`: canonical design tokens and Tailwind theme mappings.
- `src/app/globals.css`: component and internal showcase styles.
- `src/components/site-header.tsx`: reusable site Header with product dropdown and phone CTA.
- `src/components/site-banner.tsx`: dismissible rotating contact-information banner above the Header.
- `src/components/ui/`: shared buttons, links, fields, notices and layout primitives.
- `src/components/contact-form.tsx`: reusable contact form. A submission callback is required; no fake success fallback.
- `src/components/design-system/demos.tsx`: isolated local simulations and weight comparisons.
- `src/app/design-system/page.tsx`: internal review page.
- `src/app/page.tsx`: current homepage Header and Hero foundation.
- `docs/design-system.md`: decision history and implementation notes.

Montserrat Variable and Manrope Variable are self-hosted through Fontsource packages. No Google Fonts request is needed to build or view this project. All supported font weights are available.

Carbon Design System icons from `@carbon/icons-react` are the shared icon source for navigation, calls and form feedback. The package's four-line `Menu` variant is replaced by a local three-line SVG on Carbon's 16px grid to match the approved mobile Header pattern.

The shared button API supports `small`, `medium` and `large` sizes. Header uses `small`, standard actions and the form use `medium`, and the prominent Hero CTA uses `large`.

The phone CTA is connected to `tel:+381611321324` and displays `061 132 1324`. The contact demo never sends or persists entered data; a form delivery service must be supplied before the public site is launched. No GitHub repository, deployment, analytics or external accounts have been created or connected.

The design-system page is `noindex`, not authenticated. Decide whether to remove or protect it before any public deployment. Revisit global robots metadata when the real homepage is ready.
