import { CheckmarkFilled, WarningFilled, Information } from "@carbon/icons-react";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Notice({ tone = "info", className, children, ...props }: HTMLAttributes<HTMLDivElement> & { tone?: "info" | "success" | "error" }) {
  const Icon = tone === "success" ? CheckmarkFilled : tone === "error" ? WarningFilled : Information;
  return <div className={cn("notice", `notice-${tone}`, className)} {...props}><Icon aria-hidden="true" /><div>{children}</div></div>;
}
