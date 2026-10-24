# Verified contrast pairs

Generated from current tokens by `node scripts/audit-colors.mjs`. Ratios are rounded only for display; passing uses the unrounded value. 4.5:1 is used conservatively for all text pairs, 3:1 for meaningful boundaries/graphics. Decorative card borders, disabled controls and original brand artwork are not required to pass these thresholds. Hover/selected/active roles reuse these pairs; browser state verification is recorded in [color-contrast-audit.md](color-contrast-audit.md).

| Role | Foreground | Background | Ratio | Required | Result |
| --- | --- | --- | --- | --- | --- |
| heading text on surface | heading | surface | 18.88:1 | 4.5:1 | Pass |
| body text on surface | body | surface | 9.15:1 | 4.5:1 | Pass |
| brand text on surface | brand | surface | 10.99:1 | 4.5:1 | Pass |
| placeholder text on surface | placeholder | surface | 4.81:1 | 4.5:1 | Pass |
| Input boundary on surface | control-border | surface | 3.64:1 | 3:1 | Pass |
| Keyboard / pointer focus on surface | brand-light | surface | 4.82:1 | 3:1 | Pass |
| heading text on surface-subtle | heading | surface-subtle | 17.75:1 | 4.5:1 | Pass |
| body text on surface-subtle | body | surface-subtle | 8.60:1 | 4.5:1 | Pass |
| brand text on surface-subtle | brand | surface-subtle | 10.33:1 | 4.5:1 | Pass |
| placeholder text on surface-subtle | placeholder | surface-subtle | 4.52:1 | 4.5:1 | Pass |
| Input boundary on surface-subtle | control-border | surface-subtle | 3.42:1 | 3:1 | Pass |
| Keyboard / pointer focus on surface-subtle | brand-light | surface-subtle | 4.53:1 | 3:1 | Pass |
| White text on brand | surface | brand | 10.99:1 | 4.5:1 | Pass |
| White text on brand-light | surface | brand-light | 4.82:1 | 4.5:1 | Pass |
| Success notice | success | success-surface | 5.13:1 | 4.5:1 | Pass |
| Error notice | error | error-surface | 6.05:1 | 4.5:1 | Pass |
| Error boundary inside white input | error | surface | 6.57:1 | 3:1 | Pass |
| Inverse error boundary | error-on-brand | brand | 6.47:1 | 3:1 | Pass |
| Focus on brand panel / announcement | surface | brand | 10.99:1 | 3:1 | Pass |
| Upload hint on brand | upload-muted | brand | 6.54:1 | 4.5:1 | Pass |
| Upload action | surface | composited worst case | 9.81:1 | 4.5:1 | Pass |
| Upload icon | upload-muted | composited worst case | 5.97:1 | 3:1 | Pass |
| Upload boundary | upload-border | composited worst case | 4.68:1 | 3:1 | Pass |
| Upload error boundary | error-on-brand | composited worst case | 5.78:1 | 3:1 | Pass |
| Gallery title over white photo | surface | composited worst case | 11.06:1 | 4.5:1 | Pass |
| Gallery category over white photo | gallery-caption-muted | composited worst case | 8.51:1 | 4.5:1 | Pass |
| Google verification graphic | google-blue | surface | 3.56:1 | 3:1 | Pass |
| Accent badge text / selection | brand | accent-surface | 9.94:1 | 4.5:1 | Pass |
| White CTA text across sRGB gradient | surface | primary-gradient (101 samples) | 4.82:1 | 4.5:1 | Pass |
