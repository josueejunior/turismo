import Link from "next/link";
import Image from "next/image";
import { NAVIGATION_LABELS } from "@/constants/categories";
import { ROUTES } from "@/constants/routes";
import { SITE_CONFIG } from "@/constants/config";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href={ROUTES.HOME}>
            <Image
              className="brand-logo footer-brand-logo"
              src="/visite-cascavel-logo-footer-image.png"
              alt="Visite Cascavel Convention & Visitors Bureau"
              width={998}
              height={882}
            />
          </Link>
          <p>
            Portal institucional de turismo para conectar visitantes, empresas associadas e experiências
            regionais com curadoria premium.
          </p>
          <div className="footer-socials" aria-label="Redes sociais">
            <Link href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 2c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.3-.5.2-.9.4-1.3.8-.4.4-.6.7-.8 1.3-.1.4-.3 1-.3 2.1C2.7 9.7 2.7 10.1 2.7 12s0 2.3.1 3.5c.1 1.1.2 1.7.3 2.1.2.5.4.9.8 1.3.4.4.7.6 1.3.8.4.1 1 .3 2.1.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.3.5-.2.9-.4 1.3-.8.4-.4.6-.7.8-1.3.1-.4.3-1 .3-2.1.1-1.2.1-1.6.1-3.5s0-2.3-.1-3.5c-.1-1.1-.2-1.7-.3-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.7-.6-1.3-.8-.4-.1-1-.3-2.1-.3-1.2-.1-1.6-.1-3.7-.1Zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm5.6-2.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
              </svg>
            </Link>
            <Link href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
              </svg>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6V3.6c0-.3-.3-.6-.6-.6ZM8.4 18.4H5.6V9.5h2.8v8.9ZM7 8.3a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm11.4 10.1h-2.8v-4.3c0-1 0-2.4-1.4-2.4-1.5 0-1.7 1.1-1.7 2.3v4.4H9.7V9.5h2.7v1.2c.4-.7 1.3-1.4 2.6-1.4 2.8 0 3.3 1.9 3.3 4.3v4.8Z" />
              </svg>
            </Link>
            <Link href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8 0-1.6-.1-3.2-.4-4.8ZM10 14.8V9.2l5.2 2.8L10 14.8Z" />
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
