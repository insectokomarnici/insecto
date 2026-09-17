import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ narrow, className, ...props }: HTMLAttributes<HTMLDivElement> & { narrow?: boolean }) {
  return <div className={cn("site-container", narrow && "site-container-narrow", className)} {...props} />;
}
export function Section({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={cn("section", className)} {...props}><Container><div className="section-inner">{children}</div></Container></section>;
}
export function Card({ elevation = "soft", className, ...props }: HTMLAttributes<HTMLDivElement> & { elevation?: "none" | "soft" | "raised" }) {
  return <div className={cn("card", elevation === "none" && "card-flat", elevation === "raised" && "card-raised", className)} {...props} />;
}
export function Heading({ as: Tag = "h2", size = "section", className, ...props }: HTMLAttributes<HTMLHeadingElement> & { as?: "h1" | "h2" | "h3" | "h4"; size?: "hero" | "section" | "card" }) {
  return <Tag className={cn("heading", `heading-${size}`, className)} {...props} />;
}
export function Badge({ children }: { children: ReactNode }) { return <span className="badge">{children}</span>; }
