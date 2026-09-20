import Link from "next/link";
import { PhoneFilled } from "@carbon/icons-react";

export function FloatingCallButton() {
  return <Link
    className="floating-call-button"
    href="tel:+381611321324"
    aria-label="Pozovite Insecto Komarnici na broj 061 132 1324"
  >
    <PhoneFilled aria-hidden="true" />
  </Link>;
}
