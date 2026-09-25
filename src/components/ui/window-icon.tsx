import type { BoxIconProps } from "@boxicons/react";

/** Custom window icon that follows the filled Boxicons visual language. */
export function WindowIcon({ removePadding: _removePadding, ...props }: BoxIconProps) {
  void _removePadding;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" focusable="false" {...props}>
      <path fillRule="evenodd" d="M19 2H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3Zm0 2c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h14Z" />
      <path d="M11 3h2v18h-2zM3 10h18v2H3z" />
    </svg>
  );
}
