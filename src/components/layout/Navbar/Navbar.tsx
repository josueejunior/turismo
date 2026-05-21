import Link from "next/link";
import Image from "next/image";
import { NAVIGATION_LABELS } from "@/constants/categories";
import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG } from "@/constants/config";

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <input className="nav-menu-toggle" id="nav-menu-toggle" type="checkbox" />
        <Link className="brand" href={ROUTES.HOME}>
          <Image
            className="brand-logo"
            src="/visite-cascavel-logo.png"
            alt="Visite Cascavel Convention & Visitors Bureau"
            width={172}
            height={92}
            priority
          />
          <span className="brand-copy">
            <strong>{SITE_CONFIG.name}</strong>
            <small>{SITE_CONFIG.descriptor}</small>
          </span>
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
        <label className="nav-menu-button" htmlFor="nav-menu-toggle" aria-label="Abrir menu">
          <span />
          <span />
        </label>
        <label className="nav-menu-backdrop" htmlFor="nav-menu-toggle" aria-hidden="true" />
        <aside className="nav-drawer" aria-label="Menu mobile">
          <div className="drawer-head">
            <span>Menu</span>
            <label htmlFor="nav-menu-toggle" aria-label="Fechar menu">
              Fechar
            </label>
          </div>
          <Link href={ROUTES.EVENTS}>{NAVIGATION_LABELS.EVENTS}</Link>
          <Link href={ROUTES.WHERE_TO_GO}>{NAVIGATION_LABELS.WHERE_TO_GO}</Link>
          <Link href={ROUTES.MARKETPLACE}>{NAVIGATION_LABELS.MARKETPLACE}</Link>
          <Link href={ROUTES.BLOG}>{NAVIGATION_LABELS.BLOG}</Link>
          <Link className="drawer-cta" href={ROUTES.EVENTS}>
            Entrar
          </Link>
        </aside>
      </div>
    </header>
  );
}
