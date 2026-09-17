import type { SVGProps } from "react";

/** Three-line menu variant built on Carbon's 16px icon grid. */
export function CarbonMenuThreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M2 3h12v1H2z" />
      <path d="M2 7.5h12v1H2z" />
      <path d="M2 12h12v1H2z" />
    </svg>
  );
}
