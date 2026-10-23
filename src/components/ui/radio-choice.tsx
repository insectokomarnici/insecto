"use client";

import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type RadioChoiceProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children" | "className"> & {
  name: string;
  checked: boolean;
  className?: string;
  children: ReactNode;
};

/** Native one-of-many selection. The label is the hit area and owns its visual state. */
export function RadioChoice({ className, children, checked, ...props }: RadioChoiceProps) {
  return (
    <label className={cn("radio-choice", className, checked && "is-selected")}>
      <input {...props} type="radio" className="radio-choice-input" checked={checked} />
      {children}
    </label>
  );
}
