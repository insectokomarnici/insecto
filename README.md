# Insecto

Next.js App Router, TypeScript, React and Tailwind CSS website for Insecto Komarnici. The homepage, contact, about and legal pages are implemented. Product-detail routes remain reserved. Development and deployment are separate steps; push only when requested.

## Run and validate

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000/ or http://127.0.0.1:3000/design-system. The development server binds locally; if port 3000 is occupied, read Next's reported port.

```sh
npm run lint
npx tsc --noEmit --incremental false
npm run build
git diff --check
```

## Source of truth

- `src/app/tokens.css`: canonical visual roles and Tailwind mappings.
- `src/app/globals.css`: shared layouts and component styles.
- `src/components/ui/`: buttons, fields, feedback and layout primitives.
- `src/app/page.tsx`: homepage composition.
- `src/lib/products.ts`, `pricing.ts`, `google-reviews.ts`: product copy, calculator prices and manually maintained reviews.
- `src/components/contact-form.tsx`: reusable form; public wrappers submit to `/api/contact`.
- `/design-system`: live token previews, component variants and a local form simulation. No demo submissions or files leave that page.

Montserrat headings/buttons and Manrope body/forms are self-hosted. General icons use Boxicons. Filled call icons use a licensed local Carbon SVG, without a Carbon package dependency; Material service icons, Google artwork and custom screen illustrations are approved exceptions.

Read [design-system.md](docs/design-system.md), [project-handoff.md](docs/project-handoff.md) and [design-system-readiness.md](docs/design-system-readiness.md) before changes. Latest verification: [final interaction audit](docs/interaction-audit.md).

## Integrations and launch limits

Optional server-only Google rating variables: `GOOGLE_MAPS_API_KEY`, `GOOGLE_PLACE_ID` (see [setup](docs/google-rating.md)). Public contact delivery uses `RESEND_API_KEY` and `CONTACT_TO_EMAIL`. Keep secrets in ignored `.env.local` / deployment configuration; never use `NEXT_PUBLIC_` for these keys.

Review cards are fixed local data, independent of optional Places rating retrieval. Real email delivery was not exercised by the design audit. The current sender configuration, anti-spam protection, final product content and SEO indexing require a separate launch review. Public page metadata currently uses noindex. The internal design-system route is also noindex, but is not access-controlled.
