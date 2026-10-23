"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "brand" | "secondary";
type ButtonSize = "small" | "medium" | "large";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: ButtonSize;
  loading?: boolean;
};

export function Button({ variant = "primary", size = "medium", loading = false, className, children, onClick, type = "button", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn("button", `button-${variant}`, `button-${size}`, className)}
      aria-busy={loading || props["aria-busy"] || undefined}
      aria-disabled={loading || props["aria-disabled"] || undefined}
      onClick={(event) => {
        if (loading || props["aria-disabled"] === true || props["aria-disabled"] === "true") {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      }}
    >
      {/* Retain the original label's footprint while the request is pending. */}
      <span className={cn("button-label", loading && "button-label-hidden")} aria-hidden={loading || undefined}>{children}</span>
      {loading && <span className="button-loading-label">Šalje se…</span>}
    </button>
  );
}

export function ButtonLink({ variant = "primary", size = "medium", className, ...props }: ComponentProps<typeof Link> & { variant?: Variant; size?: ButtonSize }) {
  return <Link {...props} className={cn("button", `button-${variant}`, `button-${size}`, className)} />;
}

export function TextLink({ className, ...props }: ComponentProps<typeof Link>) {
  return <Link {...props} className={cn("text-link", className)} />;
}
