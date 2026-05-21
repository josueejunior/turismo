import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
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
      <body className={`${inter.variable} ${playfair.variable}`}>
        <div className="page-shell">
          <header className="nav">
            <div className="container nav-inner">
              <Link className="brand" href="/">
                <span className="brand-mark">TA</span>
                <span>Terras Altas</span>
              </Link>
              <nav className="nav-links" aria-label="Menu principal">
                <Link href="/eventos">O que fazer</Link>
                <Link href="/#setores">Onde ir</Link>
                <Link href="/#marketplace">Onde comprar</Link>
                <Link href="/#blog">Blog</Link>
              </nav>
              <Link className="pill-button" href="/eventos">
                Explorar
              </Link>
            </div>
          </header>
          {children}
          <footer className="footer">
            <div className="container footer-grid">
              <div className="footer-brand">
                <Link className="brand" href="/">
                  <span className="brand-mark">TA</span>
                  <span>Terras Altas</span>
                </Link>
                <p>
                  Marketplace turístico para descobrir eventos, sabores, hospedagens e experiências
                  regionais com curadoria.
                </p>
              </div>
              <div>
                <h3>Explorar</h3>
                <Link href="/eventos">Eventos</Link>
                <Link href="/#setores">Gastronomia</Link>
                <Link href="/#marketplace">Hospedagens</Link>
              </div>
              <div>
                <h3>Institucional</h3>
                <Link href="#">Associados</Link>
                <Link href="#">Sobre o projeto</Link>
                <Link href="#">Contato comercial</Link>
              </div>
              <div className="footer-newsletter">
                <h3>Receba a agenda</h3>
                <p>Novos eventos, roteiros e experiências selecionadas.</p>
                <div className="mini-form">
                  <span>email@exemplo.com</span>
                  <strong>Entrar</strong>
                </div>
              </div>
            </div>
            <div className="container footer-bottom">
              <span>Terras Altas Turismo - conceito visual para marketplace regional.</span>
              <span>UX/UI premium para turismo e eventos.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
