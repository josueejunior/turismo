import Link from "next/link";
import type { Metadata } from "next";
import { events, imageOrFallback } from "../../data";

const event = events[0];

export const metadata: Metadata = {
  title: event.title,
  description: event.subtitle
};

export default function EventDetailPage() {
  return (
    <main>
      <section className="event-detail-hero luxury-event-hero">
        <div className="container detail-grid">
          <div className="event-hero-copy">
            <span className="eyebrow bright-eyebrow">
              <span className="dot" />
              14 jun - Centro de Cascavel
            </span>
            <h1>Festival Gastronômico de Cascavel</h1>
            <p className="lead">
              Uma noite para provar receitas autorais, conhecer produtores locais e viver a cidade
              por meio da mesa, da música e dos encontros.
            </p>
            <div className="event-highlights">
              {["20 chefs", "8 vinícolas", "Show ao vivo"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div
              className="detail-cover premium-cover"
              aria-label="Festival gastronômico"
              style={{ backgroundImage: `linear-gradient(180deg, transparent, rgba(0, 43, 114, 0.5)), url(${imageOrFallback(event.image)})` }}
            >
              <div className="cover-caption">
                <span>Experiência destaque</span>
                <strong>Noite de sabores, música e produtores locais</strong>
              </div>
            </div>
          </div>

          <aside className="ticket-card premium-ticket">
            <span className="date-badge">Ingressos disponíveis</span>
            <h2>Garanta sua noite no festival</h2>
            <div className="price-line">
              <span>a partir de</span>
              <strong>R$ 89</strong>
            </div>
            <p className="card-meta">
              Lotes limitados com degustação, show ao vivo e acesso à feira de produtores associados.
            </p>
            <Link className="pill-button" href="#">
              Comprar ingressos
            </Link>
            <div className="ticket-benefits">
              <span>Degustação inclusa</span>
              <span>Entrada digital</span>
              <span>Cancelamento fácil</span>
            </div>
            <div className="section-actions">
              <Link className="ghost-button" href="/eventos">
                Voltar para eventos
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <article className="content-block">
            <span className="eyebrow">Sobre o evento</span>
            <h2>Gastronomia regional com estética contemporânea.</h2>
            <p>
              O festival reúne restaurantes, produtores artesanais, sommeliers e artistas em uma
              programação pensada para turistas e moradores. A experiência combina pratos assinados,
              ilhas de degustação, música ao vivo e espaços fotográficos para registrar a noite.
            </p>
            <p>
              A página do evento concentra conteúdo explicativo, fotos, vídeos, endereço, contatos e
              links úteis, reduzindo dúvidas antes da compra e aumentando a conversão.
            </p>
            <div className="media-grid">
              <div
                className="media-tile"
                style={{
                  backgroundImage: `url(${imageOrFallback(event.photos[0])})`
                }}
              />
              <div
                className="media-tile"
                style={{
                  backgroundImage: `url(${imageOrFallback(event.photos[1])})`
                }}
              />
            </div>
          </article>

          <aside className="content-block">
            <h3>Informações</h3>
            <p>
              <strong>Endereço:</strong>
              <br />
              Centro de Eventos, Cascavel - PR
            </p>
            <p>
              <strong>Contato:</strong>
              <br />
              contato@visitecascavel.com.br
              <br />
              (00) 90000-0000
            </p>
            <h3>Links úteis</h3>
            <div className="link-list">
              <Link className="resource-link" href="#">
                <span>Mapa do evento</span>
                <strong>Acessar</strong>
              </Link>
              <Link className="resource-link" href="#">
                <span>Programação completa</span>
                <strong>Acessar</strong>
              </Link>
              <Link className="resource-link" href="#">
                <span>Website oficial</span>
                <strong>Acessar</strong>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section event-cta-section">
        <div className="container event-cta-band">
          <div>
            <span className="eyebrow">Últimos lotes</span>
            <h2>Não deixe o evento mais desejado da temporada passar.</h2>
            <p>
              O CTA fica evidente quando houver link de ingresso, conectado à proposta comercial da
              página e preparado para transformar interesse em compra.
            </p>
          </div>
          <Link className="pill-button" href="#">
            Comprar meu ingresso
          </Link>
        </div>
      </section>
    </main>
  );
}
