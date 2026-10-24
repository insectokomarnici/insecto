# Insecto project handoff

Updated: 24 October 2026. Read this together with `AGENTS.md` and [the current design contract](design-system.md). Historical layouts are retained in Git, not as competing instructions here.

## Project and working rules

Next.js App Router, TypeScript, React and Tailwind CSS. Repository: https://github.com/insectokomarnici/insecto.git, branch `main`. Develop locally; commit/push only when requested. Preserve approved Serbian Latin copy and layouts. Technical docs/comments are English. Reuse canonical tokens and shared UI; do not introduce one-off styling for an existing role.

Run `npm ci`, then `npm run dev`. Validate with `npm run lint`, `npx tsc --noEmit --incremental false`, `npm run build` and `git diff --check`. Keep `.env.local`, `.next`, dependencies and secrets out of commits. If `next-env.d.ts` changes only between generated dev/build type paths, restore that incidental diff.

## Source map

- `src/app/tokens.css`: typography, colors, spacing, surfaces, controls, icons and motion.
- `src/app/globals.css`: shared layout and component rules; page CSS modules remain scoped.
- `src/components/ui/`: shared layout, buttons, fields, notices and licensed SVG exceptions.
- `src/components/measurement-cta.tsx`: CTA and rating are one group; do not separate them when adding/removing a section CTA.
- `src/lib/products.ts`: product descriptions and color imagery.
- `src/lib/pricing.ts`: calculator rates and calculation rules.
- `src/lib/google-reviews.ts`: manually maintained review cards. CTA summary uses the shared GoogleRating API component.
- `src/components/contact-form.tsx`: reusable form; public wrappers use `/api/contact`.
- `/design-system`: live tokens, variants, motion rules and full local form simulation.

## Homepage order

Banner/header → Hero → Products → About → Reviews → Selection guide → Three-step process → Price calculator including services → Gallery → Novi Sad/service area → FAQ → Contact → Footer. Floating call action remains available on mobile.

Product links point to `/#product-plise`, `/#product-rolo`, `/#product-fiksni`. Main section anchors include `products`, `about`, `calculator`, `gallery`, `faq`. Product-detail routes are reserved and need final content before launch.

## Current patterns to preserve

- Hero uses portrait installation photography, the approved copy and four benefits. No eyebrow.
- Product order is Plise/Rolo/Fiksni. Color order is Bela/Antracit/Braon; initial images are white/anthracite/brown respectively. No per-card CTA/rating remains.
- Homepage About has team image and copy followed by the shared “Mali tim, ličan pristup” note, without CTA or image overlays.
- Guide has two equal columns: windows and doors, no photo and no CTA.
- Reviews are three fixed columns on desktop, with author/profile photo and manually maintained publication age, Google mark, yellow stars and Google-blue verification graphic. Long text expands in its card; read-more appears only for overflow. No API selects the review-card content.
- Process is an ordered list, three columns from tablet, with consistent content insets despite the first card's accent edge. CTA/rating stays together.
- Calculator has centered H2 and two initially aligned desktop panels. Only the right grows with saved entries. Desktop width/height/quantity share a row; type and color each have a separate row. Phone width/height stay together. Adding quantity N creates N individual removable entries. Initial area/total are zero; measurements clear after adding. The 1m² minimum charge remains calculation logic; there is no tooltip or minimum-measure explanation in the visible introduction. Included services sit inside this section below a gray divider, with a left H3 and three borderless service items.
- Gallery has short single-row category tabs (including phones), full selected border, and native horizontal scrolling: one/two/three previews on phone/tablet/desktop. Fixed-screen photos are not supplied yet; the category has an explicit empty state. Photo captions are singular sentence case. Modal uses full-image containment, Escape, focus trap and return.
- FAQ has equal Komarnici / Naša usluga groups, initially closed. No sticky intro, numbers, subtitle or contact card.
- Contact section has three information cards then a full-width blue Online upit panel. Work hours card has no link. Compact form has name, phone and message.

## Pages and scrolling

`/o-nama` is the canonical about page and uses the approved story/image/caption reading order with the shared ContactSection below it. The former `/o-namav1` review page has been removed. `/kontakt` has equal desktop columns: contact copy/details/map and the full form (name, surname, email, phone, message, optional photos). Legal pages use the normal site container without nested decorative boxes, centered H1 and body-sized introduction.

Public pages retain a normal-flow root div around sticky site chrome, main and footer. A Fragment with sticky siblings triggered a 45px Next navigation offset in this runtime. Do not reintroduce it or compensate with a global scroll-reset effect; preserve native hashes and history restoration.

## Interactions

General UI icons are Boxicons; filled call icons are local Carbon SVGs with license, no Carbon dependency. Material service icons, Google artwork, custom product illustrations and matched menu/close glyphs are intentional exceptions.

Motion uses feedback/disclosure/media roles. Desktop dropdown close grace is a local named 100ms constant. The three-second banner pauses on hover/focus, hidden tabs and reduced motion. Navigation closes via Escape; mobile links close the menu. Disclosure fallback derives timing from computed CSS to settle a cancelled transition on resize.

Form simulation includes full fields/photos, success/error/slow outcomes and attempt counter; no data leaves the demo. Failed requests preserve input, pending requests block duplicate activation. Limits match server: five files, 5 MiB/file, 10 MiB total, explicit MIME allowlist. Rejected selections do not block otherwise valid submission. Real HEIC pickers and actual mail delivery still need device/integration testing.

## Integrations and deployment

Server-only variable names (values must remain private):

```env
GOOGLE_MAPS_API_KEY=
GOOGLE_PLACE_ID=
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

Optional Google Places rating/count uses seven-day revalidation; fixed review cards do not depend on it. See [Google setup](google-rating.md). The map uses the approved business-profile embed. Public contact route sends through Resend; audit tests never send business inquiries. Verify production sender/domain, delivery and anti-spam separately before launch; client duplicate protection is not server spam protection.

Public page metadata currently uses noindex. SEO launch/indexing and final copy are separate from design completion. `/design-system` is also noindex but not authenticated; decide whether to remove or protect it for launch.

## Verification status

See [readiness](design-system-readiness.md) and [interaction/browser audit](interaction-audit.md). Chrome responsive and desktop Safari checks are recorded; physical iOS/Android, screen-reader testing and real delivery are not certified. Future copy, photo or component changes reopen affected checks only.
