"use client";
import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes, type Ref } from "react";
import { cn } from "@/lib/cn";

type FieldProps = { label: string; hint?: string; error?: string; optional?: boolean; hideRequiredIndicator?: boolean };
export function TextField({ label, hint, error, optional, hideRequiredIndicator, id: providedId, className, ref, ...props }: InputHTMLAttributes<HTMLInputElement> & FieldProps & { ref?: Ref<HTMLInputElement> }) {
  const generatedId = useId();
  const id = providedId ?? generatedId;
  const describedBy = [props["aria-describedby"], hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
  return <div className="field">
    <label className="field-label" htmlFor={id}>{label} <span className="field-note">{hideRequiredIndicator ? optional ? "(opciono)" : "" : props.required ? "*" : optional ? "(opciono)" : ""}</span></label>
    <input {...props} ref={ref} id={id} className={cn("control", className)} aria-invalid={error ? true : undefined} aria-describedby={describedBy} />
    {hint && <p className="field-hint" id={`${id}-hint`}>{hint}</p>}
    {error && <p className="field-error" id={`${id}-error`}>{error}</p>}
  </div>;
}
export function TextArea({ label, hint, error, optional, hideRequiredIndicator, id: providedId, className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & FieldProps) {
  const generatedId = useId();
  const id = providedId ?? generatedId;
  const describedBy = [props["aria-describedby"], hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
  return <div className="field">
    <label className="field-label" htmlFor={id}>{label} <span className="field-note">{hideRequiredIndicator ? optional ? "(opciono)" : "" : props.required ? "*" : optional ? "(opciono)" : ""}</span></label>
    <textarea {...props} id={id} className={cn("control", className)} aria-invalid={error ? true : undefined} aria-describedby={describedBy} />
    {hint && <p className="field-hint" id={`${id}-hint`}>{hint}</p>}
    {error && <p className="field-error" id={`${id}-error`}>{error}</p>}
  </div>;
}
