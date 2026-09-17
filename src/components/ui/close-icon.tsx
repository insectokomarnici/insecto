import type { SVGProps } from "react";

/** Carbon's original Close path, cropped to its visible 16px bounds. */
export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="8 8 16 16" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M17.4141 16 24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16z" />
    </svg>
  );
}
