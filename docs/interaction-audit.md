# Interaction, forms and browser closure audit

Date: 24 October 2026. Scope: the four requested final checks—interaction/accessibility, contact states/uploads, responsive/browser behavior and documentation. This is a development-site audit, not a WCAG certification or a production delivery test. Previous approved hover/motion and copy changes were preserved. No commit or push was requested for this audit.

## Changes made

| Finding | Correction |
| --- | --- |
| Desktop dropdown could close on pointer leave while keyboard focus was inside | Close timer respects focus; Escape closes and returns focus to summary |
| Mobile menu lacked complete Escape/link/focus-leave handling | Added these paths; closing content is inert |
| A breakpoint change during closing could cancel transitionend and leave the menu in closing state | Shared disclosure hook settles via a fallback based on computed CSS timing; reduced-motion preference changes also settle state |
| Gallery recreated after an empty category lost scroll/resize observation | Observer effect follows category changes; empty panel is keyboard-focusable |
| Removing calculator rows or photos could lose the keyboard destination | Focus moves to the next removal control, or width/upload control when empty; calculator add returns to width |
| Rejected photo selection left an error that blocked an otherwise valid form | Rejected files remain excluded; successful validation can proceed with accepted attachments |
| Client MIME check was broader than server validation | Both use the explicit allowed MIME types; rejected selections announce an alert |
| Photo removal buttons had indistinguishable accessible names | Each includes its filename |
| Showcase and audit script referenced removed star outlines | Removed obsolete references/checks; preserved yellow stars without borders and the textual rating |
| Documentation mixed current implementation with obsolete proposals | Reconciled README, design contract, handoff, readiness and showcase; full local form demo now includes photo/error/slow-response states |

## Browser/state evidence

### Chrome

- Seven routes: `/`, `/kontakt`, `/o-nama`, `/o-namav1`, `/politika-privatnosti`, `/uslovi-koriscenja`, `/design-system`.
- DOM layout sweep at 320, 390, 768, 1024 and 1440px: **35 route/width combinations**, no document horizontal overflow, one H1 per route. This is a geometry sweep, not 35 separate complete accessibility audits.
- Desktop navigation: Tab into product links, visible focus, Escape back to trigger.
- Mobile navigation: open, nested products, same-page product link closes menu and reaches its hash. Escape closes. Changing width during close no longer leaves a stuck transition. Portrait/landscape viewport change (390×844 / 844×390) has no horizontal overflow.
- FAQ keyboard activation tested in both groups.
- Gallery: End reaches empty fixed-screen category; Home returns to Plise. Switching back restores carousel movement and previous-button state. Lightbox wraps Tab/Shift+Tab between controls; Escape closes and returns focus to originating photo.
- Calculator: adding quantity two produces two rows; focus returns to width. Removing the first row focuses the remaining removal control.
- Local form demo: empty validation and first-invalid focus; failure preserves fields; success status; slow submission plus two extra native Enter keypresses records **one attempt**. No business inquiry is sent.
- Pause button label switches to resume; mobile banner/menu inspected at 320px. Reduced-motion CSS and listeners were reviewed in source; live OS preference switching was not exercised.

### Desktop Safari

- Homepage, desktop dropdown/Escape, contact page and design-system full form rendered and operated through native UI.
- Native file picker: a sixth photo, a file above 5 MiB, and a combined selection above 10 MiB are rejected with their respective messages. Valid PNG with a long filename is accepted and can be removed.
- Native page zoom increased five steps: long filename wraps, removal control and submission action remain visible; zoom restored afterwards. This was native browser zoom, not a CSS font-size substitution.
- Test fixtures were synthetic local PNGs under `/tmp/insecto-form-audit`; no personal photos or real messages were submitted.

## Automated checks

All passed on the final code changes:

- `npm run lint`
- `npx tsc --noEmit --incremental false`
- `npm run build` (14 generated routes)
- `git diff --check`
- `node scripts/audit-colors.mjs`: 29 current contrast pairs pass, 353 CSS color declarations inventoried. Generated reports updated. This checks specified role pairs, not arbitrary image pixels or full WCAG compliance.

No generated `next-env.d.ts` change remained.

## Limits and launch tasks

- No physical iOS Safari or Android Chrome device was connected; viewport emulation is not equivalent. Real touch keyboards, camera/HEIC pickers and device orientation remain an acceptance check.
- No full screen-reader, forced-colors or native autofill audit was performed. Live OS reduced-motion switching remains untested; source paths and transition fallback were reviewed.
- Production build compiled successfully but was not served for a second complete browser matrix. Browser evidence is from the local development server.
- No actual Resend delivery, Google API billing/configuration or server anti-spam hardening was exercised. These are integration/launch work, not evidence of UI completeness.
- Fixed-screen gallery photos and reserved product-detail content remain incomplete. Current noindex metadata must be deliberately reviewed before SEO launch.
- Final copy, new imagery and new controls reopen the affected checks. Do not claim that future changes inherit this verification automatically.

## Local evidence

Temporary screenshots: `/tmp/insecto-form-audit-final.png`, `/tmp/insecto-safari-zoom-form.png`, `/tmp/insecto-design-system-final.png`. The repository record above is the durable summary; temporary files may be removed by the operating system.
