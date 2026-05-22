import Image from "next/image";
import Link from "next/link";
import { NAVIGATION_LABELS } from "@/constants/categories";
import { SITE_CONFIG } from "@/constants/config";
import { ROUTES } from "@/constants/routes";

export function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <input className="nav-menu-toggle" id="nav-menu-toggle" type="checkbox" />
        <Link className="brand" href={ROUTES.HOME}>
          <Image
            className="brand-logo nav-brand-logo"
            src="/visite-cascavel-logo-white.png"
            alt="Visite Cascavel Convention & Visitors Bureau"
            width={240}
            height={100}
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
