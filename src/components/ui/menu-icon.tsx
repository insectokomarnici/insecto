import type { SVGProps } from "react";

/** Three-line menu variant using the same 16px visible canvas as the menu close icon. */
export function CarbonMenuThreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="8 8 16 16" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M8 8.75h16v1.5H8z" />
      <path d="M8 15.25h16v1.5H8z" />
      <path d="M8 21.75h16v1.5H8z" />
    </svg>
  );
}
