"use client";

import { useEffect, useId, useRef, useState } from "react";

export function GoogleReviewCopy({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textId = useId();
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const checkOverflow = () => {
      if (!isExpanded) setIsOverflowing(element.scrollHeight > element.clientHeight + 1);
    };

    checkOverflow();
    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(element);
    return () => observer.disconnect();
  }, [isExpanded, text]);

  return (
    <div className={`google-review-copy${isExpanded ? " is-expanded" : ""}`}>
      <p ref={textRef} id={textId} className="google-review-text">{text}</p>
      {(isOverflowing || isExpanded) && <button
          className="google-review-more"
          type="button"
          aria-controls={textId}
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          {isExpanded ? "Prikaži manje" : "Pročitaj više"}
        </button>}
    </div>
  );
}
