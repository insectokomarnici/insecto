import { ChevronDown, DoorOpen } from "@boxicons/react";
import { PhoneFilledIcon } from "@/components/ui/phone-filled-icon";
import { WindowIcon } from "@/components/ui/window-icon";
import { DrillIcon, StraightenIcon } from "@/components/measurement-icons";
import { FixedScreenIcon, PleatedScreenIcon, RollerScreenIcon } from "@/components/calculator-type-icons";
import { Heading } from "@/components/ui/layout";

export function IconSurfaceTokens() {
  return <div className="stack ds-section-block">
    <Heading as="h3" size="card">Icon roles</Heading>
    <div className="ds-spec-grid">
      <div className="content-flow">
        <div className="ds-icon-samples ds-icon-samples-action"><PhoneFilledIcon aria-hidden="true" /><ChevronDown aria-hidden="true" /></div>
        <p>Action / disclosure · 20px. Navigation chevrons remain 16px.</p>
      </div>
      <div className="content-flow">
        <div className="ds-icon-samples ds-icon-samples-feature"><WindowIcon aria-hidden="true" /><DoorOpen aria-hidden="true" /></div>
        <p>Feature · 24px. Window and door share a 24-unit canvas and matching line weight.</p>
      </div>
      <div className="content-flow">
        <div className="ds-icon-samples ds-icon-samples-process"><StraightenIcon aria-hidden="true" /><DrillIcon aria-hidden="true" /></div>
        <p>Process / included service · 32px. The same measurement and installation artwork appears in both sections.</p>
      </div>
      <div className="content-flow">
        <div className="ds-icon-samples ds-icon-samples-preview"><PleatedScreenIcon aria-hidden="true" /><RollerScreenIcon aria-hidden="true" /><FixedScreenIcon aria-hidden="true" /></div>
        <p>Product illustration · 48px. Detailed 64-unit drawings retain their approved hardware and mesh strokes.</p>
      </div>
    </div>
    <Heading as="h3" size="card">Shapes and elevation</Heading>
    <div className="ds-table-wrap"><table className="ds-table">
      <thead><tr><th scope="col">Role</th><th scope="col">Token</th><th scope="col">Rule</th></tr></thead>
      <tbody>
        <tr><td>CTA</td><td><code>--radius-button</code></td><td>Pill</td></tr>
        <tr><td>Field / icon badge</td><td><code>--radius-input / --radius-icon</code></td><td>8px rounded square</td></tr>
        <tr><td>Content card / media frame</td><td><code>--radius-card</code></td><td>12px</td></tr>
        <tr><td>Large form / contact panel</td><td><code>--radius-panel</code></td><td>16px</td></tr>
        <tr><td>Avatar / step marker / round control</td><td><code>--radius-circle</code></td><td>50% on equal sides</td></tr>
        <tr><td>Border / selected or focused / accent</td><td><code>--border-width / --border-emphasis-width / --border-accent-width</code></td><td>1 / 2 / 6px</td></tr>
        <tr><td>Content card / form panel</td><td>Flat</td><td>Border, no shadow by default</td></tr>
        <tr><td>Photo / map / contact action card</td><td><code>--shadow-soft</code></td><td>Subtle separation</td></tr>
        <tr><td>Menu / lightbox / floating control / contact hover</td><td><code>--shadow-raised</code></td><td>Elevated layer; focus remains visible</td></tr>
      </tbody>
    </table></div>
  </div>;
}
