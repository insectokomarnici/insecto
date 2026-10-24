"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type TransitionEvent } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useAnimatedDisclosure<T extends HTMLElement>() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const contentRef = useRef<T | null>(null);
  const animationFrame = useRef<number | null>(null);

  const cancelAnimationFrame = useCallback(() => {
    if (animationFrame.current !== null) window.cancelAnimationFrame(animationFrame.current);
    animationFrame.current = null;
  }, []);

  useEffect(() => cancelAnimationFrame, [cancelAnimationFrame]);

  // Hiding a closing panel at a breakpoint can cancel transitionend. Use its
  // computed CSS timing as a fallback, so the menu cannot remain stuck closed.
  useEffect(() => {
    if (!isClosing || !contentRef.current) return;
    const style = getComputedStyle(contentRef.current);
    const milliseconds = (value: string) => parseFloat(value) * (value.trim().endsWith("ms") ? 1 : 1000);
    const duration = Math.max(...style.transitionDuration.split(",").map(milliseconds));
    const delay = Math.max(...style.transitionDelay.split(",").map(milliseconds));
    const timeout = window.setTimeout(() => {
      cancelAnimationFrame();
      if (contentRef.current) contentRef.current.style.height = "";
      setIsOpen(false);
      setIsClosing(false);
    }, duration + delay + 50);
    return () => window.clearTimeout(timeout);
  }, [cancelAnimationFrame, isClosing]);

  // A preference change cancels CSS transitions, so transitionend may never fire.
  // Settle the current disclosure immediately instead of leaving it mid-close.
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const settle = () => {
      if (!preference.matches) return;
      cancelAnimationFrame();
      if (contentRef.current) contentRef.current.style.height = isOpen && !isClosing ? "auto" : "";
      if (isClosing) {
        setIsOpen(false);
        setIsClosing(false);
      }
    };
    preference.addEventListener("change", settle);
    return () => preference.removeEventListener("change", settle);
  }, [cancelAnimationFrame, isClosing, isOpen]);

  useLayoutEffect(() => {
    const element = contentRef.current;
    if (!isOpen || !element) return;

    cancelAnimationFrame();

    if (isClosing) {
      element.style.height = `${element.scrollHeight}px`;
      animationFrame.current = window.requestAnimationFrame(() => {
        if (contentRef.current === element) element.style.height = "0px";
      });
      return cancelAnimationFrame;
    }

    if (prefersReducedMotion()) {
      element.style.height = "auto";
      return;
    }

    element.style.height = "0px";
    animationFrame.current = window.requestAnimationFrame(() => {
      if (contentRef.current === element) element.style.height = `${element.scrollHeight}px`;
    });

    return cancelAnimationFrame;
  }, [cancelAnimationFrame, isClosing, isOpen]);

  const open = useCallback(() => {
    if (!isOpen && !isClosing) setIsOpen(true);
  }, [isClosing, isOpen]);

  const close = useCallback(() => {
    if (!isOpen || isClosing) return;

    if (prefersReducedMotion()) {
      const element = contentRef.current;
      if (element) element.style.height = "";
      setIsOpen(false);
      return;
    }

    setIsClosing(true);
  }, [isClosing, isOpen]);

  const toggle = useCallback(() => {
    if (isClosing) return;
    if (isOpen) close();
    else open();
  }, [close, isClosing, isOpen, open]);

  const onTransitionEnd = useCallback((event: TransitionEvent<T>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "height") return;

    const element = contentRef.current;
    if (isClosing) {
      if (element) element.style.height = "";
      setIsOpen(false);
      setIsClosing(false);
      return;
    }

    if (isOpen && element) element.style.height = "auto";
  }, [isClosing, isOpen]);

  return { isOpen, isClosing, contentRef, toggle, close, onTransitionEnd };
}
