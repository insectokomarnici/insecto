import type { SVGProps } from "react";

function ScreenMesh({ bottom = 57, top = 7 }: { bottom?: number; top?: number }) {
  const vertical = Array.from({ length: 10 }, (_, index) => `M${18 + index * 3} ${top}V${bottom}`);
  const horizontal = Array.from({ length: Math.floor((bottom - top) / 3) }, (_, index) => `M15 ${top + (index + 1) * 3}H49`);

  return (
    <g>
      <path d={`M15 ${top}H49V${bottom}H15Z`} fill="currentColor" fillOpacity=".07" stroke="none" />
      <path d={[...vertical, ...horizontal].join(" ")} strokeWidth=".65" opacity=".3" />
    </g>
  );
}

function ScreenFrame() {
  return (
    <g>
      <path d="M12 3h40a1 1 0 0 1 1 1v56a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 4v50h34V7Z" fill="currentColor" fillOpacity=".1" fillRule="evenodd" stroke="none" />
      <rect x="11" y="3" width="42" height="58" rx="1" />
      <path d="M15 7h34v50H15Z" strokeWidth="1.2" />
      <path d="m11 3 4 4m34 0 4-4M11 61l4-4m34 0 4 4" strokeWidth=".8" opacity=".5" />
    </g>
  );
}

// Front views preserve the distinguishing hardware in the product photographs.
export function PleatedScreenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" focusable="false" {...props}>
      <path d="M15 7h22v50H15Z" fill="currentColor" fillOpacity=".08" stroke="none" />
      <path d="M17 7h2v50h-2Zm4 0h2v50h-2Zm4 0h2v50h-2Zm4 0h2v50h-2Zm4 0h2v50h-2Z" fill="currentColor" fillOpacity=".18" stroke="none" />
      <path d="M17 7v50M21 7v50M25 7v50M29 7v50M33 7v50" strokeWidth="1" opacity=".75" />
      <path d="M15 23h22M15 41h22" strokeWidth=".7" opacity=".4" />
      <ScreenFrame />
      <path d="M37 7h4v50h-4Z" fill="currentColor" fillOpacity=".12" strokeWidth="1.3" />
      <path d="M39 29v6" />
      <path d="M37 7h4v3h-4Zm0 47h4v3h-4Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function RollerScreenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" focusable="false" {...props}>
      <ScreenMesh top={11} bottom={38} />
      <path d="M11 11h4v46h34V11h4v49a1 1 0 0 1-1 1H12a1 1 0 0 1-1-1Z" fill="currentColor" fillOpacity=".1" />
      <rect x="9" y="3" width="46" height="8" rx="2.5" fill="currentColor" fillOpacity=".1" />
      <path d="M13 4v6M51 4v6" strokeWidth="2.5" />
      <rect x="15" y="38" width="34" height="5" rx=".75" fill="currentColor" fillOpacity=".18" strokeWidth="1.3" />
    </svg>
  );
}

export function FixedScreenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" focusable="false" {...props}>
      <ScreenMesh />
      <ScreenFrame />
    </svg>
  );
}
