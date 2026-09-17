import type { SVGProps } from "react";

/** Full-bleed close icon on the same 16px grid as the custom menu icon. */
export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M0 1.75 1.75 0 8 6.25 14.25 0 16 1.75 9.75 8 16 14.25 14.25 16 8 9.75 1.75 16 0 14.25 6.25 8 0 1.75Z" />
    </svg>
  );
}
