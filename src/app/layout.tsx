import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Terras Altas Turismo",
  description: "Marketplace regional de experiências, eventos, gastronomia e hospedagem."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${playfair.variable}`}>
        <div className="page-shell">
          <header className="nav">
            <div className="container nav-inner">
              <input className="nav-menu-toggle" id="nav-menu-toggle" type="checkbox" />
              <Link className="brand" href="/">
                <span className="brand-mark">TA</span>
                <span className="brand-copy">
                  <strong>Terras Altas</strong>
                  <small>Turismo curado</small>
                </span>
              </Link>
              <nav className="nav-links" aria-label="Menu principal">
                <Link href="/eventos">O que fazer</Link>
                <Link href="/#setores">Onde ir</Link>
                <Link href="/#marketplace">Onde ficar</Link>
              </nav>
              <Link className="nav-cta" href="/eventos">
                Explorar
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
                <Link href="/eventos">O que fazer</Link>
                <Link href="/#setores">Onde ir</Link>
                <Link href="/#marketplace">Onde ficar</Link>
                <Link className="drawer-cta" href="/eventos">
                  Explorar agenda
                </Link>
              </aside>
            </div>
          </header>
          {children}
          <footer className="footer">
            <div className="container footer-grid">
              <div className="footer-brand">
                <Link className="brand" href="/">
                  <span className="brand-mark">TA</span>
                  <span>
                    Terras Altas
                    <small>Turismo curado</small>
                  </span>
                </Link>
                <p>
                  Uma camada inteligente para escolher eventos, sabores e refúgios sem navegar no escuro.
                </p>
                <div className="footer-status">
                  <span>Live region</span>
                  <strong>Serra ativa</strong>
                  <i aria-hidden="true" />
                </div>
              </div>
              <div className="footer-links-panel">
                <h3>Explorar</h3>
                <Link href="/eventos">Eventos</Link>
                <Link href="/#setores">Gastronomia</Link>
                <Link href="/#marketplace">Hospedagens</Link>
              </div>
              <div className="footer-links-panel">
                <h3>Institucional</h3>
                <Link href="#">Associados</Link>
                <Link href="#">Sobre o projeto</Link>
                <Link href="#">Contato comercial</Link>
              </div>
              <div className="footer-newsletter">
                <span className="footer-kicker">Agenda selecionada</span>
                <h3>Receba o melhor fim de semana.</h3>
                <p>Eventos, mesas e hospedagens escolhidos como uma curadoria, não como uma lista.</p>
                <div className="mini-form">
                  <span>email@exemplo.com</span>
                  <strong>Entrar</strong>
                </div>
              </div>
            </div>
            <div className="container footer-bottom">
              <span>Terras Altas Turismo - curadoria regional inteligente.</span>
              <span>Experiência premium para turismo, eventos e rotas locais.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
