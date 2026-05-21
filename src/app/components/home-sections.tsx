import Link from "next/link";
import { cuisines, events, stays } from "../data";

const visualTiles = [
  ["Gastronomia", "cafés, produtores e jantar com vista", "taste"],
  ["Natureza", "cachoeiras, mirantes e ar frio", "nature"],
  ["Cultura", "feiras, música e noites no centro", "culture"],
  ["Hospedagem", "chalés, pousadas e silêncio", "stay"]
];

const modernSignals = [
  ["Roteiros inteligentes", "48h de agenda pronta, com tempo realista entre cada parada."],
  ["Curadoria visual", "Escolha pela atmosfera: frio, vista, mesa, música ou descanso."],
  ["Camadas locais", "Eventos, produtores e hospedagens conectados numa única narrativa."],
  ["Experiência leve", "Menos lista infinita. Mais decisão bonita, rápida e segura."]
];

export function HomeHero() {
  return (
    <section className="hero cinematic-hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-watermark" aria-hidden="true">Serra</div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-status-strip" aria-label="Status da plataforma">
            <span>Live routes</span>
            <strong>12 experiências sincronizadas</strong>
            <i aria-hidden="true" />
          </div>
          <span className="hero-edition">Edição de inverno · Terras Altas</span>
          <span className="hero-route-code">SERRA / CURADORIA LOCAL / 48H</span>
          <h1>
            Uma serra para <em>viver devagar.</em>
          </h1>
          <p className="lead">Roteiros, sabores e refúgios escolhidos com olhar local.</p>
          <div className="hero-signal-panel" aria-label="Resumo da curadoria">
            <span>
              <strong>48h</strong>
              roteiro pronto
            </span>
            <span>
              <strong>04</strong>
              rotas locais
            </span>
            <span>
              <strong>curado</strong>
              por região
            </span>
          </div>
          <div className="hero-app-preview" aria-label="Prévia de roteiro inteligente">
            <div className="app-preview-topbar">
              <span />
              <span />
              <span />
              <strong>Terras OS</strong>
            </div>
            <div className="app-preview-map">
              <i className="route-node route-node-one" />
              <i className="route-node route-node-two" />
              <i className="route-node route-node-three" />
            </div>
            <div className="app-preview-row">
              <span>19h</span>
              <strong>Festival Gastronômico</strong>
              <small>12 min</small>
            </div>
            <div className="app-preview-row muted">
              <span>21h</span>
              <strong>Noite histórica</strong>
              <small>centro</small>
            </div>
          </div>
          <div className="hero-actions">
            <Link className="pill-button" href="/eventos">
              Ver agenda <span aria-hidden="true">→</span>
            </Link>
            <Link className="ghost-button light-ghost" href="/eventos/festival-gastronomico-da-serra">
              Festival da Serra
            </Link>
          </div>
        </div>
        <div className="scenic-showcase" aria-label="Paisagem turística regional">
          <div className="showcase-rail" aria-hidden="true">
            <span>Campos frios</span>
            <span>Rotas locais</span>
            <span>Fim de semana</span>
          </div>
          <div className="hero-compass" aria-hidden="true">
            <span>TA</span>
            <strong>24</strong>
          </div>
          <div className="showcase-mini-photo mini-photo-one" aria-hidden="true" />
          <div className="showcase-mini-photo mini-photo-two" aria-hidden="true" />
          <div className="showcase-card main-photo">
            <div className="photo-label">
              <span>Fim de semana destaque · 14 jun</span>
              <strong>festival, produtores e noite histórica</strong>
            </div>
          </div>
          <div className="showcase-index">
            <span>Guia local</span>
            <strong>04 rotas</strong>
            <small>gastronomia · natureza · cultura</small>
          </div>
          <div className="event-ticket-mini">
            <strong>Festival Gastronômico da Serra</strong>
            <Link className="pill-button" href="/eventos/festival-gastronomico-da-serra">
              Comprar ingresso <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VisualIndexSection() {
  return (
    <section className="section visual-index-section">
      <div className="container visual-index">
        {visualTiles.map(([title, copy, tone]) => (
          <article className={`visual-tile visual-tile-${tone}`} key={title}>
            <span>{title}</span>
            <strong>{copy}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ModernBentoSection() {
  return (
    <section className="section modern-bento-section">
      <div className="container modern-bento-shell">
        <div className="modern-bento-intro">
          <span className="eyebrow">Sistema de descoberta</span>
          <h2>Uma experiência moderna para decidir melhor a viagem.</h2>
        </div>
        <div className="modern-bento-grid">
          {modernSignals.map(([title, copy], index) => (
            <article className={`modern-bento-card modern-bento-${index + 1}`} key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventsEditorialSection() {
  return (
    <section className="section events-editorial" id="eventos">
      <div className="container editorial-shell">
        <div className="section-header editorial-header">
          <div>
            <span className="section-number">01</span>
            <span className="eyebrow">O que fazer</span>
            <h2>Agenda enxuta, visual e fácil de escolher.</h2>
          </div>
          <Link className="ghost-button" href="/eventos">
            Ver todos <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="section-system-bar">
          <span>Agenda Sync</span>
          <strong>4 experiências priorizadas</strong>
          <i aria-hidden="true" />
        </div>
        <div className="event-editorial-grid">
          <Link className="event-portrait" href={events[0].href}>
            <div className="event-portrait-image" style={{ backgroundImage: `url(${events[0].image})` }} />
            <div>
              <small>Evento principal</small>
              <span>{events[0].date}</span>
              <h3>{events[0].title}</h3>
            </div>
          </Link>
          <div className="event-side-list">
            {events.slice(1, 4).map((event) => (
              <Link className="event-line" href={event.href} key={event.title}>
                <div className="event-line-image" style={{ backgroundImage: `url(${event.image})` }} />
                <div>
                  <span>{event.category} · {event.date}</span>
                  <h3>{event.title}</h3>
                  <small>Ver experiência</small>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TasteEditorialSection() {
  return (
    <section className="section taste-editorial" id="setores">
      <div className="container taste-editorial-grid">
        <div className="taste-editorial-image" />
        <div className="taste-editorial-copy">
          <span className="section-number">02</span>
          <span className="eyebrow">Onde comer</span>
          <h2>Sabores com origem, vista e tempo.</h2>
          <p>Um radar gastronômico com cafés, mesas autorais e produtores que dão identidade à serra.</p>
          <div className="section-system-bar compact">
            <span>Taste Radar</span>
            <strong>5 categorias ativas</strong>
            <i aria-hidden="true" />
          </div>
          <div className="cuisine-list">
            {cuisines.slice(0, 5).map((item) => (
              <span key={item}>
                <small>curado</small>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function StaysEditorialSection() {
  return (
    <section className="section stays-editorial" id="marketplace">
      <div className="container">
        <div className="section-header editorial-header">
          <div>
            <span className="section-number">03</span>
            <span className="eyebrow">Onde ficar</span>
            <h2>Refúgios para acordar dentro da paisagem.</h2>
          </div>
          <Link className="ghost-button" href="#">
            Ver todos <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="section-system-bar">
          <span>Stay Index</span>
          <strong>curadoria boutique</strong>
          <i aria-hidden="true" />
        </div>
        <div className="stay-editorial-grid">
          {stays.slice(0, 3).map((stay, index) => (
            <article className={`stay-visual-card stay-visual-${index + 1}`} key={stay}>
              <span>{index === 1 ? "Boutique" : "Hospedagem"}</span>
              <h3>{stay}</h3>
              <small>{index === 1 ? "Vista + spa" : index === 2 ? "Chalé privativo" : "Check-in flexível"}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="section final-cta-section">
      <div className="container final-cta">
        <div>
          <span className="eyebrow bright-eyebrow">Pronto para explorar?</span>
          <h2>Monte uma viagem bonita sem abrir vinte abas.</h2>
          <div className="cta-metrics">
            <span><strong>48h</strong> roteiro</span>
            <span><strong>04</strong> rotas</span>
            <span><strong>1</strong> curadoria</span>
          </div>
        </div>
        <Link className="pill-button" href="/eventos">
          Ver agenda de eventos <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
