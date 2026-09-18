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

  return { isOpen, isClosing, contentRef, toggle, onTransitionEnd };
}
