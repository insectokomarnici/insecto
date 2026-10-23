import { PhoneFilledIcon } from "@/components/ui/phone-filled-icon";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";

/** Keep the action and its rating together. The caller owns the rating data source. */
export function MeasurementCta({ rating, secondaryAction, align = "center", className }: {
  rating: ReactNode;
  secondaryAction?: ReactNode;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div className={cn("measurement-cta", align === "start" && "measurement-cta-start", Boolean(secondaryAction) && "measurement-cta-multiple", className)}>
      <div className="measurement-cta-buttons">
        <ButtonLink size="large" href="tel:+381611321324"><PhoneFilledIcon aria-hidden="true" />Zakaži merenje</ButtonLink>
        {secondaryAction}
      </div>
      {rating}
    </div>
  );
}
