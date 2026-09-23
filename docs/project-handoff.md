# Insecto Project Handoff

This document captures the current product and implementation decisions so work can continue from another local Codex project.

## Project

- Product: Insecto Komarnici, a local mosquito-screen business serving Novi Sad and nearby areas.
- Stack: Next.js App Router, TypeScript, Tailwind CSS, CSS custom properties, and Vercel deployment.
- Repository: `https://github.com/insectokomarnici/insecto.git`
- Main branch: `main`
- Latest functional change before this handoff: product navigation order and homepage anchors.

## Local development

```bash
npm ci
npm run dev
```

Validation commands:

```bash
npm run lint
npx tsc --noEmit --incremental false
git diff --check
```

Do not commit `node_modules`, `.next`, `.env.local`, or API keys.

## Environment variables

The production values are configured in Vercel. The local file is ignored by Git and is only needed for local Google rating and contact-form testing.

```env
GOOGLE_MAPS_API_KEY=
GOOGLE_PLACE_ID=
RESEND_API_KEY=
CONTACT_TO_EMAIL=insectokomarnici@gmail.com
```

`GOOGLE_MAPS_API_KEY` and `RESEND_API_KEY` are server-only. Never rename them with a `NEXT_PUBLIC_` prefix or commit their values.

## Design system

Canonical tokens live in `src/app/tokens.css`; shared global/component rules live in `src/app/globals.css`. Keep new values in the token layer before adding component-specific styling. Use `rem`, semantic tokens, and the existing spacing/radius/shadow system.

Brand colors:

- Brand primary: `#1E3B6F`
- Brand light/mid: `#3F73B8`
- Accent: `#E7A23B`
- Accent surface: `#FEF2DF`
- Heading: `#111111`
- Body: `#484848`
- Surface: `#FFFFFF`
- Surface subtle: `#F6F8FB`
- Success: `#027A48` / `#ECFDF3`
- Error: `#B42318` / `#FEF3F2`

Typography:

- Manrope is the body/navigation/form font.
- Montserrat is used for headings and the current button token.
- Use the existing responsive text tokens rather than hard-coded sizes.

Breakpoints:

- `40rem` (`sm`)
- `48rem` (`md`)
- `64rem` (`lg`)
- `80rem` (`xl`)
- `96rem` (`2xl`)

Buttons use the shared `Button`/`ButtonLink` API with `small`, `medium`, and `large` sizes. Phone CTAs use Carbon `PhoneFilled` and `tel:+381611321324`, while the visible phone text is `061 132 1324`.

Carbon is used for CTA phone icons and chevrons. Boxicons are used for the remaining shared visual icons. Keep icon sizing through the existing icon tokens (`inline`, `action`, `feature`, `menu`, and `close`).

## Homepage structure

The homepage order is:

1. Announcement banner
2. Sticky Header
3. Hero
4. Products
5. About/Insecto Komarnici
6. How to get mosquito screens in three steps
7. Price calculator
8. Gallery
9. FAQ
10. Contact form
11. Footer

The main section IDs are `products`, `about`, `calculator`, `gallery`, and `faq`.

## Header and navigation

- Product navigation order is **Plise, Rolo, Fiksni** in both Header and Footer.
- Product links use homepage anchors:
  - `/#product-plise`
  - `/#product-rolo`
  - `/#product-fiksni`
- Product cards in `src/components/products-section.tsx` have the matching IDs.
- The `Saznaj više` button was removed from Product cards. Each card keeps the `Zakaži merenje` CTA and its accordion information.

## Product cards

Products are defined in `src/lib/products.ts`. Each product has three colors: Bela, Braon, and Antracit. Product accordions contain the agreed Serbian copy for description, colors/materials, and installation. Keep all product content centralized in that data file.

## Three-step process

- The process section is implemented as an ordered list so assistive technology announces three sequential items.
- It uses one column below `md` and three equal columns from `md`.
- Step markers, icons, typography, card padding, borders, radii, colors and spacing use shared or semantic tokens.
- Every card reserves the same thicker left-border width; the blue cards match that border to their surface so all content keeps identical edge spacing.
- The cards are informational and intentionally have no hover motion.
- The CTA and Google rating reuse the same shared components and tokenized spacing as the Hero.

## Calculator

The calculator is in `src/components/pricing-calculator.tsx`.

- Prices are per m² and vary by type and color in `src/lib/pricing.ts`.
- Brown and anthracite are €1/m² above the white price for each type.
- The calculator supports adding multiple mosquito screens and totals all items.
- Width and height fields accept decimal centimeter measurements.
- Item rows show dimensions, area, price per m², item total, item count, and a transparent remove control.
- The price explanation tooltip stays within the copy card at every breakpoint. It opens on hover or keyboard focus for precise pointers and by tap on coarse pointers.
- The left explanation card and right calculator panel have the same initial desktop height.
- When items are added, only the right calculator panel grows. This uses `--calculator-card-min-height` and the desktop layout rule in `globals.css`.
- Mobile layout stacks the two cards naturally.

## Integrations

- Google Places API rating and review count are fetched server-side with a seven-day revalidation period.
- The rating link points to the Google Business Profile/Maps URL.
- Contact form delivery uses the Resend API route at `src/app/api/contact/route.ts` and sends to `CONTACT_TO_EMAIL`.

## Working rules

- Keep technical documentation and code comments in English.
- Keep user-facing website copy in Serbian Latin.
- Reuse shared components and tokens; avoid one-off inline visual decisions.
- After each section change, review token usage, responsive behavior, accessibility, lint, and TypeScript.
- Push completed changes to `main` so Vercel can deploy automatically.

## Next setup on a new Mac

1. Clone the repository and run `npm ci`.
2. Add the cloned folder as a local Codex Project.
3. Run `npm run dev` to inspect the site locally.
4. Use the existing Vercel environment variables for production; create `.env.local` only when local integrations need to be tested.
