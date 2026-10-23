import { PhoneFilledIcon } from "@/components/ui/phone-filled-icon";
import Link from "next/link";

export function FloatingCallButton() {
  return <Link
    className="floating-call-button"
    href="tel:+381611321324"
    aria-label="Pozovite Insecto Komarnici na broj 061 132 1324"
  >
    <PhoneFilledIcon aria-hidden="true" />
  </Link>;
}
