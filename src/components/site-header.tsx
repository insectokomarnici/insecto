"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "@boxicons/react";
import { PhoneFilledIcon } from "@/components/ui/phone-filled-icon";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";
import { MenuIcon } from "@/components/ui/menu-icon";
import { CloseIcon } from "@/components/ui/close-icon";
import { useAnimatedDisclosure } from "@/lib/use-animated-disclosure";

const productLinks = [
  ["/#product-plise", "Plise komarnici"],
  ["/#product-rolo", "Rolo komarnici"],
  ["/#product-fiksni", "Fiksni komarnici"],
] as const;

// Brief pointer grace period when moving between the trigger and its links.
const DROPDOWN_CLOSE_DELAY_MS = 100;

function ProductLinks() {
  return <>{productLinks.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</>;
}

function ProductDropdown() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const hovering = useRef(false);
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  const cancelClose = () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  const openMenu = () => {
    cancelClose();
    setOpen(true);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      if (!hovering.current && !dropdownRef.current?.contains(document.activeElement)) setOpen(false);
    }, DROPDOWN_CLOSE_DELAY_MS);
  };

  useEffect(() => () => cancelClose(), []);

  return <details
    ref={dropdownRef}
    className="site-dropdown"
    open={open}
    onMouseEnter={() => { hovering.current = true; openMenu(); }}
    onMouseLeave={() => { hovering.current = false; scheduleClose(); }}
    onFocus={openMenu}
    onKeyDown={(event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      cancelClose();
      event.currentTarget.querySelector("summary")?.focus();
      setOpen(false);
    }}
    onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        hovering.current = false;
        cancelClose();
        setOpen(false);
      }
    }}
  >
    <summary className="site-nav-trigger" aria-expanded={open} onClick={(event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      if (hovering.current) {
        openMenu();
      } else {
        setOpen((current) => !current);
      }
    }}>Komarnici <ChevronDown aria-hidden="true" /></summary>
    <div className="site-dropdown-menu"><ProductLinks /></div>
  </details>;
}

function MobileMenu() {
  const { isOpen, isClosing, contentRef, toggle, close, onTransitionEnd } = useAnimatedDisclosure<HTMLDivElement>();

  return <details className={cn("site-menu", isOpen && "is-open", isClosing && "is-closing")} open={isOpen || isClosing}
    onKeyDown={(event) => {
      if (event.key !== "Escape" || !isOpen) return;
      event.preventDefault();
      event.currentTarget.querySelector("summary")?.focus();
      close();
    }}
    onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) close();
    }}>

    <summary className="site-menu-trigger" aria-label="Otvori ili zatvori meni" aria-expanded={isOpen && !isClosing} onClick={(event) => { event.preventDefault(); toggle(); }}>
      <MenuIcon className="site-menu-icon site-menu-icon-menu" aria-hidden="true" />
      <CloseIcon className="site-menu-icon site-menu-icon-close" />
      <span className="sr-only">Meni</span>
    </summary>
    <div ref={contentRef} className="site-menu-panel" inert={isClosing || !isOpen} onTransitionEnd={onTransitionEnd}
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a[href]")) close();
      }}>
      <div className="site-menu-panel-inner">
        <nav aria-label="Glavna navigacija">
          <details className="site-menu-products">
            <summary>Komarnici <ChevronDown aria-hidden="true" /></summary>
            <div className="site-menu-products-list"><ProductLinks /></div>
          </details>
          <Link href="/o-nama">O nama</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>
        <ButtonLink size="medium" className="site-menu-phone" href="tel:+381611321324" aria-label="Pozovite Insecto Komarnici na broj 061 132 1324">
          <PhoneFilledIcon aria-hidden="true" /><span>061 132 1324</span>
        </ButtonLink>
      </div>
    </div>
  </details>;
}

export function SiteHeader() {
  return <header className="site-header">
    <Container className="site-header-inner">
      <Link className="site-brand" href="/" aria-label="Insecto Komarnici — početna strana">
        <Image src="/insecto-logo.svg" width={134} height={32} alt="Insecto Komarnici" priority />
      </Link>

      <nav className="site-nav" aria-label="Glavna navigacija">
        <ProductDropdown />
        <Link href="/o-nama">O nama</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>

      <div className="site-header-actions">
        <ButtonLink size="small" className="site-phone-link" href="tel:+381611321324" aria-label="Pozovite Insecto Komarnici na broj 061 132 1324">
          <PhoneFilledIcon aria-hidden="true" /><span>061 132 1324</span>
        </ButtonLink>

        <MobileMenu />
      </div>
    </Container>
  </header>;
}
