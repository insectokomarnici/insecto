import type { SVGProps } from "react";

/** Three-line menu variant using the same 16px visible canvas as the menu close icon. */
export function CarbonMenuThreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="8 8 16 16" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M8 8.5h16v2H8z" />
      <path d="M8 15h16v2H8z" />
      <path d="M8 21.5h16v2H8z" />
    </svg>
  );
}
