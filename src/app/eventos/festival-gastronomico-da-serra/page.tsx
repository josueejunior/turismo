import Link from "next/link";

export default function EventDetailPage() {
  return (
    <main>
      <section className="event-detail-hero luxury-event-hero">
        <div className="container detail-grid">
          <div className="event-hero-copy">
            <span className="eyebrow bright-eyebrow">
              <span className="dot" />
              14 jun - Centro histórico
            </span>
            <h1>Festival Gastronômico da Serra</h1>
            <p className="lead">
              Uma noite para provar receitas autorais, conhecer produtores locais e viver a região
              por meio da mesa, da música e dos encontros.
            </p>
            <div className="event-highlights">
              {["20 chefs", "8 vinícolas", "Show ao vivo"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="detail-cover premium-cover" aria-label="Festival gastronômico">
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
              Lotes limitados com degustação, show ao vivo e acesso à feira de produtores.
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
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85)"
                }}
              />
              <div
                className="media-tile"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=85)"
                }}
              />
            </div>
          </article>

          <aside className="content-block">
            <h3>Informações</h3>
            <p>
              <strong>Endereço:</strong>
              <br />
              Praça Central, Centro Histórico
            </p>
            <p>
              <strong>Contato:</strong>
              <br />
              contato@terrasaltas.tur.br
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
              O CTA fica evidente, repetido no momento certo e conectado à proposta comercial da
              página: transformar interesse em ingresso.
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
