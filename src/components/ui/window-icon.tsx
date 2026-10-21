import type { BoxIconProps } from "@boxicons/react";

/** Two-sash window matching Boxicons DoorOpen's line weight and square handles. */
export function WindowIcon({ removePadding: _removePadding, ...props }: BoxIconProps) {
  void _removePadding;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" focusable="false" {...props}>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM5 5h6v14H5V5Zm8 0h6v14h-6V5Z" />
      <path d="M8 11h2v2H8zM14 11h2v2h-2z" />
    </svg>
  );
}
