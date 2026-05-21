import Link from "next/link";
import { imageOrFallback, restaurants } from "../../data";

const restaurant = restaurants[0];

export default function EstablishmentDetailPage() {
  return (
    <main>
      <section className="event-detail-hero luxury-event-hero">
        <div className="container detail-grid">
          <div className="event-hero-copy">
            <span className="eyebrow bright-eyebrow">
              <span className="dot" />
              Onde comer
            </span>
            <h1>{restaurant.title}</h1>
            <p className="lead">{restaurant.subtitle}</p>
            <div
              className="detail-cover premium-cover"
              aria-label={restaurant.name}
              style={{
                backgroundImage: `linear-gradient(180deg, transparent, rgba(0, 43, 114, 0.5)), url(${imageOrFallback(restaurant.bannerImage)})`
              }}
            >
              <div className="cover-caption">
                <span>Imagem do cadastro</span>
                <strong>Banner e fotos vêm do estabelecimento. Sem imagem, entra fallback turístico.</strong>
              </div>
            </div>
          </div>

          <aside className="ticket-card premium-ticket">
            <div
              className="company-logo-mark entity-logo"
              style={restaurant.logoImage ? { backgroundImage: `url(${restaurant.logoImage})` } : undefined}
            >
              {!restaurant.logoImage && restaurant.logo}
            </div>
            <h2>{restaurant.name}</h2>
            <p className="card-meta">{restaurant.description}</p>
            <Link className="pill-button" href={restaurant.website}>
              Website
            </Link>
            <div className="section-actions">
              <Link className="ghost-button" href="/#setores">
                Voltar para onde comer
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <article className="content-block">
            <span className="eyebrow">Sobre o estabelecimento</span>
            <h2>{restaurant.subtitle}</h2>
            <p>{restaurant.description}</p>
            <div className="media-grid">
              <div
                className="media-tile"
                style={{ backgroundImage: `url(${imageOrFallback(restaurant.bannerImage)})` }}
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
              {restaurant.address}
            </p>
            <p>
              <strong>Contato:</strong>
              <br />
              {restaurant.contact}
            </p>
            <h3>Links úteis</h3>
            <div className="link-list">
              <Link className="resource-link" href={restaurant.website}>
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
