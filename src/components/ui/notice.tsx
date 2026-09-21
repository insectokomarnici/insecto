import { AlertTriangle, Check, InfoCircle } from "@boxicons/react";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Notice({ tone = "info", className, children, ...props }: HTMLAttributes<HTMLDivElement> & { tone?: "info" | "success" | "error" }) {
  const Icon = tone === "success" ? Check : tone === "error" ? AlertTriangle : InfoCircle;
  return <div className={cn("notice", `notice-${tone}`, className)} {...props}><Icon pack="filled" aria-hidden="true" /><div>{children}</div></div>;
}
