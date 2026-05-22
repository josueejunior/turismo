"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { NAVIGATION_LABELS } from "@/constants/categories";
import { SITE_CONFIG } from "@/constants/config";
import { ROUTES } from "@/constants/routes";

const MOBILE_NAV_LINKS = [
  { href: ROUTES.EVENTS, label: NAVIGATION_LABELS.EVENTS },
  { href: ROUTES.WHERE_TO_GO, label: NAVIGATION_LABELS.WHERE_TO_GO },
  { href: ROUTES.MARKETPLACE, label: NAVIGATION_LABELS.MARKETPLACE },
  { href: ROUTES.BLOG, label: NAVIGATION_LABELS.BLOG }
] as const;

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelId = useId();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const onChange = () => {
      if (mq.matches) {
        setMobileOpen(false);
      }
    };

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const mobileOverlay =
    mounted &&
    createPortal(
      <>
        <button
          type="button"
          className={`nav-mobile-backdrop${mobileOpen ? " is-open" : ""}`}
          aria-hidden={true}
          tabIndex={-1}
          onClick={closeMobile}
        />
        <aside
          id={panelId}
          className={`nav-mobile-panel${mobileOpen ? " is-open" : ""}`}
          aria-hidden={!mobileOpen}
          aria-label="Menu mobile"
        >
          <div className="drawer-head">
            <span>Menu</span>
            <button type="button" className="drawer-close" onClick={closeMobile}>
              Fechar
            </button>
          </div>
          {MOBILE_NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeMobile}>
              {label}
            </Link>
          ))}
          <Link className="drawer-cta" href={ROUTES.EVENTS} onClick={closeMobile}>
            Entrar
          </Link>
        </aside>
      </>,
      document.body
    );

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <Link className="brand" href={ROUTES.HOME}>
            <Image
              className="brand-logo nav-brand-logo"
              src="/visite-cascavel-logo-dark-bg-cropped.png"
              alt="Visite Cascavel Convention & Visitors Bureau"
              width={917}
              height={745}
              priority
            />
            <span className="nav-brand-name">{SITE_CONFIG.name}</span>
          </Link>
          <nav className="nav-links" aria-label="Menu principal">
            <Link href={ROUTES.EVENTS}>{NAVIGATION_LABELS.EVENTS}</Link>
            <Link href={ROUTES.WHERE_TO_GO}>{NAVIGATION_LABELS.WHERE_TO_GO}</Link>
            <Link href={ROUTES.MARKETPLACE}>{NAVIGATION_LABELS.MARKETPLACE}</Link>
            <Link href={ROUTES.BLOG}>{NAVIGATION_LABELS.BLOG}</Link>
          </nav>
          <Link className="nav-cta" href={ROUTES.EVENTS}>
            Entrar
          </Link>
          <button
            type="button"
            className={`nav-menu-button${mobileOpen ? " is-open" : ""}`}
            aria-expanded={mobileOpen}
            aria-controls={panelId}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      {mobileOverlay}
    </>
  );
}
