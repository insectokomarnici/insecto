"use client";
import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "brand" | "secondary";
type ButtonSize = "small" | "medium" | "large";
export function Button({ variant = "primary", size = "medium", loading = false, className, children, onClick, type = "button", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: ButtonSize; loading?: boolean }) {
  return <button {...props} type={type} className={cn("button", `button-${variant}`, `button-${size}`, className)} aria-disabled={loading || props["aria-disabled"] || undefined} onClick={(event) => {
    if (loading || props["aria-disabled"] === true || props["aria-disabled"] === "true") { event.preventDefault(); return; }
    onClick?.(event);
  }}>{loading ? "Šalje se…" : children}</button>;
}
export function ButtonLink({ variant = "primary", size = "medium", className, ...props }: ComponentProps<typeof Link> & { variant?: Variant; size?: ButtonSize }) {
  return <Link {...props} className={cn("button", `button-${variant}`, `button-${size}`, className)} />;
}
export function TextLink({ className, ...props }: ComponentProps<typeof Link>) {
  return <Link {...props} className={cn("text-link", className)} />;
}
