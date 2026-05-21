import Link from "next/link";
import { NAVIGATION_LABELS } from "@/constants/categories";
import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG } from "@/constants/config";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href={ROUTES.HOME}>
            <span className="brand-mark">VC</span>
            <span>
              {SITE_CONFIG.name}
              <small>{SITE_CONFIG.descriptor}</small>
            </span>
          </Link>
          <p>
            Portal institucional de turismo para conectar visitantes, empresas associadas e experiências
            regionais com curadoria premium.
          </p>
          <div className="footer-socials" aria-label="Redes sociais">
            <Link href="#" aria-label="Instagram">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </Link>
            <Link href="#" aria-label="Facebook">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.3l.7-3h-3V9c0-.6.4-1 1-1Z" />
              </svg>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6.5 9H4v11h2.5V9ZM5.2 4.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20 14c0-3-1.6-5-4.2-5-1.4 0-2.3.7-2.8 1.5V9h-2.5v11H13v-5.8c0-1.7.8-2.7 2.2-2.7 1.3 0 2.3.9 2.3 2.8V20H20v-6Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="footer-links-panel">
          <h3>Navegação</h3>
          <Link href={ROUTES.EVENTS}>{NAVIGATION_LABELS.EVENTS}</Link>
          <Link href={ROUTES.WHERE_TO_GO}>{NAVIGATION_LABELS.WHERE_TO_GO}</Link>
          <Link href={ROUTES.MARKETPLACE}>{NAVIGATION_LABELS.MARKETPLACE}</Link>
        </div>
        <div className="footer-links-panel">
          <h3>Institucional</h3>
          <Link href={ROUTES.ABOUT}>Sobre nós</Link>
          <Link href={ROUTES.BLOG}>Blog</Link>
          <Link href={ROUTES.ABOUT}>Associados</Link>
          <Link href="#">Contato</Link>
        </div>
        <div className="footer-contact">
          <h3>Contato</h3>
          <p>
            <strong>Endereço</strong>
            {SITE_CONFIG.location}
          </p>
          <p>
            <strong>Email</strong>
            {SITE_CONFIG.email}
          </p>
          <p>
            <strong>Telefone</strong>
            {SITE_CONFIG.phone}
          </p>
        </div>
      </div>
      <div className="footer-bottom-wrap">
        <div className="container footer-bottom">
          <span>{SITE_CONFIG.copyright}</span>
          <div>
            <Link href="#">Privacidade</Link>
            <Link href="#">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
