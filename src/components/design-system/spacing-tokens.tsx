"use client";

import { useEffect, useState } from "react";

// Names and roles only. Values are read from tokens.css at the current viewport,
// so this reference cannot silently disagree with the actual site's CSS.
const spacingRoles = [
  ["page-gutter", "Minimum space from the viewport edge"],
  ["section-padding", "Each vertical edge of a section"],
  ["section-heading-gap", "Section title / introduction to its content"],
  ["section-block-gap", "Separate blocks: contact cards / form, text / map or media"],
  ["layout-gap", "Independent columns, or their stacked mobile panels"],
  ["card-grid-gap", "Peer cards in a grid"],
  ["card-padding", "Content inset inside a card or panel"],
  ["heading-copy-gap", "Heading to accompanying copy"],
  ["card-copy-gap", "Card title to its description"],
  ["paragraph-gap", "Consecutive paragraphs"],
  ["content-group-gap", "Related content groups inside one topic"],
  ["card-item-gap", "Icon, heading or review blocks inside a card"],
  ["content-action-gap", "Content to its CTA + rating group"],
  ["action-rating-gap", "CTA to its rating"],
  ["action-group-gap", "Adjacent buttons"],
  ["form-field-gap", "Form rows and ordinary field columns"],
  ["field-label-gap", "Field label to control / help message"],
  ["choice-gap", "Peer choices / calculator dimension columns"],
  ["divider-content-gap", "Content inset from a divider"],
  ["inline-gap", "Inline icon and text"],
  ["icon-copy-gap", "Larger icon / avatar and copy"],
  ["metadata-gap", "Compact value / label pairs or stars"],
  ["list-gap", "List rows"],
  ["caption-gap", "Image and caption"],
  ["gallery-content-gap", "Gallery tabs, photos and carousel controls"],
  ["disclosure-padding", "Each vertical edge of an accordion row"],
  ["navigation-gap", "Desktop navigation links"],
] as const;

export function SpacingTokens() {
  const [values, setValues] = useState<Record<string, string>>({});
  useEffect(() => {
    const measure = () => {
      const style = getComputedStyle(document.documentElement);
      const rootSize = Number.parseFloat(style.fontSize);
      setValues(Object.fromEntries(spacingRoles.map(([name]) => {
        const value = style.getPropertyValue(`--${name}`).trim();
        const px = value.endsWith("rem") ? Number.parseFloat(value) * rootSize : Number.parseFloat(value);
        return [name, `${value} (${px}px)`];
      })));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return <div className="ds-table-wrap ds-section-block">
    <table className="ds-table">
      <caption>Live spacing tokens — resize the viewport to inspect responsive values.</caption>
      <thead><tr><th scope="col">Token</th><th scope="col">Relationship</th><th scope="col">Current value</th></tr></thead>
      <tbody>{spacingRoles.map(([name, purpose]) => <tr key={name}>
        <th scope="row"><code>--{name}</code></th><td>{purpose}</td><td>{values[name] ?? "Loading…"}</td>
      </tr>)}</tbody>
    </table>
  </div>;
}
