"use client";

import { Clock, Envelope, Phone } from "@boxicons/react";
import { useEffect, useState } from "react";

const BANNER_ROTATION_INTERVAL_MS = 3000;

const contactItems = [
  { href: "tel:+381611321324", label: "061 132 1324", Icon: Phone },
  { href: "mailto:kontakt@insecto.rs", label: "kontakt@insecto.rs", Icon: Envelope },
  { label: "Pon-Pet: 8:00-20:00", Icon: Clock },
] as const;

function ContactItem({
  item,
  active,
}: {
  item: (typeof contactItems)[number];
  active: boolean;
}) {
  const { label, Icon } = item;
  const content = <><Icon aria-hidden="true" /><span>{label}</span></>;

  if ("href" in item) {
    return <a className="site-banner-item" href={item.href} tabIndex={active ? 0 : -1}>{content}</a>;
  }

  return <span className="site-banner-item">{content}</span>;
}

export function SiteBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        setPreviousIndex(current);
        return (current + 1) % contactItems.length;
      });
    }, BANNER_ROTATION_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [paused]);

  return <aside className="site-banner" aria-label="Kontakt informacije">
    <div className="site-banner-inner site-container">
      <div
        className="site-banner-viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
      >
        <div className="site-banner-slides" aria-live="polite">
          {contactItems.map((item, index) => {
            const slideState = index === activeIndex ? "is-active" : index === previousIndex ? "is-exiting" : "";

            return <div className={`site-banner-slide ${slideState}`} aria-hidden={index !== activeIndex} key={item.label}>
            <ContactItem item={item} active={index === activeIndex} />
            </div>;
          })}
        </div>
      </div>
    </div>
  </aside>;
}
