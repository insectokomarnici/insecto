import { Menu } from "@boxicons/react";
import type { BoxIconProps } from "@boxicons/react";

/** Three-line Boxicons menu with the visible canvas cropped to the icon bounds. */
export function MenuIcon(props: BoxIconProps) {
  return <Menu removePadding {...props} />;
}
