"use client";

import { useEffect } from "react";

export function FocusModality() {
  useEffect(() => {
    const root = document.documentElement;
    const markPointer = () => { root.dataset.inputModality = "pointer"; };
    const markKeyboard = (event: KeyboardEvent) => {
      if (["Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp"].includes(event.key)) {
        root.dataset.inputModality = "keyboard";
      }
    };

    document.addEventListener("pointerdown", markPointer, true);
    document.addEventListener("keydown", markKeyboard, true);
    return () => {
      document.removeEventListener("pointerdown", markPointer, true);
      document.removeEventListener("keydown", markKeyboard, true);
    };
  }, []);

  return null;
}
