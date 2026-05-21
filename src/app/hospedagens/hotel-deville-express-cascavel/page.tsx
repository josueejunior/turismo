import Link from "next/link";
import { imageOrFallback, stays } from "../../data";

const stay = stays[0];

export default function StayDetailPage() {
  return (
    <main>
      <section className="event-detail-hero luxury-event-hero">
        <div className="container detail-grid">
          <div className="event-hero-copy">
            <span className="eyebrow bright-eyebrow">
              <span className="dot" />
              Onde ficar
            </span>
            <h1>{stay.title}</h1>
            <p className="lead">{stay.subtitle}</p>
            <div
              className="detail-cover premium-cover"
              aria-label={stay.name}
              style={{
                backgroundImage: `linear-gradient(180deg, transparent, rgba(0, 43, 114, 0.5)), url(${imageOrFallback(stay.bannerImage)})`
              }}
            >
              <div className="cover-caption">
                <span>Imagem do cadastro</span>
                <strong>Logo, banner e fotos podem vir do associado cadastrado.</strong>
              </div>
            </div>
          </div>

          <aside className="ticket-card premium-ticket">
            <div
              className="company-logo-mark entity-logo"
              style={stay.logoImage ? { backgroundImage: `url(${stay.logoImage})` } : undefined}
            >
              {!stay.logoImage && stay.logo}
            </div>
            <h2>{stay.name}</h2>
            <p className="card-meta">{stay.description}</p>
            <Link className="pill-button" href={stay.website}>
              Website
            </Link>
            <div className="section-actions">
              <Link className="ghost-button" href="/#marketplace">
                Voltar para hospedagens
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <article className="content-block">
            <span className="eyebrow">Sobre a hospedagem</span>
            <h2>{stay.subtitle}</h2>
            <p>{stay.description}</p>
            <div className="media-grid">
              <div
                className="media-tile"
                style={{ backgroundImage: `url(${imageOrFallback(stay.bannerImage)})` }}
              />
              <div
                className="media-tile"
                style={{ backgroundImage: `url(${imageOrFallback()})` }}
              />
            </div>
          </article>

          <aside className="content-block">
            <h3>Informações</h3>
            <p>
              <strong>Endereço:</strong>
              <br />
              {stay.address}
            </p>
            <p>
              <strong>Contato:</strong>
              <br />
              {stay.contact}
            </p>
            <h3>Links úteis</h3>
            <div className="link-list">
              <Link className="resource-link" href={stay.website}>
                <span>Website oficial</span>
                <strong>Acessar</strong>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
