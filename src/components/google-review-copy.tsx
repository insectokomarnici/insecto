"use client";

import { useId, useState } from "react";

export function GoogleReviewCopy({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const textId = useId();

  return (
    <div className={`google-review-copy${isExpanded ? " is-expanded" : ""}`}>
      <p id={textId} className="google-review-text">{text}</p>
      <button
        className="google-review-more"
        type="button"
        aria-controls={textId}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {isExpanded ? "Prikaži manje" : "Pročitaj više"}
      </button>
    </div>
  );
}
