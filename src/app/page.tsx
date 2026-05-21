import Link from "next/link";
import { categories, cuisines, events, posts, stays } from "./data";

export default function Home() {
  return (
    <main>
      <section className="hero cinematic-hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow bright-eyebrow">
              <span className="dot" />
              Temporada aberta nas Terras Altas
            </span>
            <h1>Viva a cidade como um grande festival.</h1>
            <p className="lead">
              Eventos, sabores, rotas e hospedagens em uma vitrine vibrante para turistas que
              querem comprar, reservar e montar a viagem sem perder tempo.
            </p>
            <div className="hero-actions">
              <Link className="pill-button" href="/eventos">
                Planejar minha viagem
              </Link>
              <Link className="ghost-button light-ghost" href="/eventos/festival-gastronomico-da-serra">
                Ver festival destaque
              </Link>
            </div>
            <div className="hero-search-card">
              <div>
                <span>Quando?</span>
                <strong>Este fim de semana</strong>
              </div>
              <div>
                <span>Interesse</span>
                <strong>Gastronomia + música</strong>
              </div>
              <div>
                <span>Estilo</span>
                <strong>Experiências premium</strong>
              </div>
              <Link className="dark-button" href="/eventos">
                Buscar
              </Link>
            </div>
            <div className="stats hero-stats">
              <div className="stat">
                <strong>48h</strong>
                <span className="small-copy">roteiros para viagens rápidas</span>
              </div>
              <div className="stat">
                <strong>120+</strong>
                <span className="small-copy">empresas e experiências associadas</span>
              </div>
              <div className="stat">
                <strong>3</strong>
                <span className="small-copy">cliques até comprar ou reservar</span>
              </div>
            </div>
          </div>
          <div className="scenic-showcase" aria-label="Paisagem turística regional">
            <div className="showcase-card main-photo">
              <div className="photo-label">
                <span>Festival da Serra</span>
                <strong>14 jun - ingressos abertos</strong>
              </div>
            </div>
            <div className="showcase-card floating-photo photo-two">
              <span>Rota das Cachoeiras</span>
            </div>
            <div className="showcase-card floating-photo photo-three">
              <span>Jantar autoral</span>
            </div>
            <div className="weather-badge">
              <strong>27°C</strong>
              <span>dia perfeito para explorar</span>
            </div>
            <div className="event-ticket-mini">
              <span className="date-badge">Destaque</span>
              <strong>Festival Gastronômico da Serra</strong>
              <p>Pratos autorais, feira de produtores e show ao vivo.</p>
              <Link className="pill-button" href="/eventos/festival-gastronomico-da-serra">
                Comprar ingresso
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          {["Eventos com curadoria", "Compra de ingressos", "Roteiros de 48h", "Parceiros locais"].map(
            (item) => (
              <span key={item}>{item}</span>
            )
          )}
        </div>
      </section>

      <section className="section" id="eventos">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">O que fazer</span>
              <h2>Eventos selecionados para viver a cidade agora.</h2>
            </div>
            <p>
              Categorias rápidas, cards com imagem quadrada, data evidente e um caminho simples até
              a página do evento.
            </p>
          </div>
          <div className="category-row">
            {categories.slice(0, 6).map((category, index) => (
              <span className={`category-chip ${index === 0 ? "active" : ""}`} key={category}>
                {category}
              </span>
            ))}
          </div>
          <div className="card-grid event-feature-grid">
            {events.slice(0, 3).map((event) => (
              <Link className="event-card" href={event.href} key={event.title}>
                <div className="event-image" style={{ backgroundImage: `url(${event.image})` }} />
                <div className="event-body">
                  <span className="date-badge">{event.date}</span>
                  <h3>{event.title}</h3>
                  <p className="card-meta">{event.description}</p>
                  <span className="card-cta">Ver detalhes</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="section-actions">
            <Link className="ghost-button" href="/eventos">
              Ver todos os eventos
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="setores">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Onde comer</span>
              <h2>Da mesa afetiva à experiência autoral.</h2>
            </div>
            <p>Lista de culinárias pensada para navegação rápida e descoberta por intenção.</p>
          </div>
          <div className="category-row">
            {cuisines.map((item) => (
              <span className="category-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="taste-board">
            <article className="taste-card taste-large">
              <span className="eyebrow">Roteiro gourmet</span>
              <h3>Almoço rural, café colonial e jantar com vista.</h3>
            </article>
            <article className="taste-card">
              <strong>12</strong>
              <span>restaurantes selecionados</span>
            </article>
            <article className="taste-card">
              <strong>5</strong>
              <span>experiências para casais</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="marketplace">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Onde ficar</span>
              <h2>Hospedagens com assinatura local.</h2>
            </div>
            <Link className="ghost-button" href="#">
              Ver todos
            </Link>
          </div>
          <div className="card-grid stay-grid">
            {stays.slice(0, 3).map((stay) => (
              <article className="company-card" key={stay}>
                <span className="brand-mark">{stay.slice(0, 2)}</span>
                <h3>{stay}</h3>
                <p className="card-meta">
                  Página da entidade com fotos, endereço, contatos, website e texto comercial.
                </p>
                <span className="card-cta">Conhecer hospedagem</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-band signature-band">
          <div>
            <span className="eyebrow">Institucional</span>
            <h2 className="display">Uma vitrine viva para a economia do turismo.</h2>
            <p>
              Conectamos visitantes a empresas, produtores e experiências que fortalecem a região,
              com curadoria visual, informação clara e presença comercial de alto padrão.
            </p>
            <Link className="pill-button" href="#">
              Nos conheça
            </Link>
          </div>
          <div className="logo-cloud" aria-label="Associados participantes">
            {["Aurora", "Vale", "Mirante", "Raízes", "Serra", "Estação"].map((logo) => (
              <span className="logo-tile" key={logo}>
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="container journey-stage">
          <div className="journey-visual">
            <div className="route-card route-card-main">
              <span>Roteiro sugerido</span>
              <strong>Fim de semana gastronômico</strong>
            </div>
            <div className="route-pin pin-one">Evento</div>
            <div className="route-pin pin-two">Jantar</div>
            <div className="route-pin pin-three">Hotel</div>
          </div>
          <div className="journey-content">
            <span className="eyebrow bright-eyebrow">Como funciona</span>
            <h2>Do desejo ao ingresso, com ritmo de viagem.</h2>
            <p>
              Em vez de uma sequência genérica, a navegação parece um roteiro: o turista descobre,
              combina experiências e chega no CTA certo com confiança.
            </p>
            <div className="journey-steps">
              {[
                ["01", "Descubra o clima da viagem", "Eventos, gastronomia e lugares aparecem como uma curadoria visual."],
                ["02", "Combine o roteiro ideal", "Categorias, datas e hospedagens ajudam a transformar interesse em plano."],
                ["03", "Reserve sem fricção", "Links oficiais, contatos e ingressos ficam evidentes no momento da decisão."]
              ].map(([number, title, copy]) => (
                <article className="journey-card" key={number}>
                  <span>{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section editorial-blog" id="blog">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Blog</span>
              <h2>Guias que fazem o turista querer ficar mais um dia.</h2>
            </div>
            <Link className="ghost-button" href="#">
              Ver mais
            </Link>
          </div>
          <div className="blog-layout">
            <article className="blog-feature">
              <div className="blog-feature-image" />
              <div className="blog-feature-content">
                <span className="date-badge">Guia especial</span>
                <h3>Um fim de semana perfeito nas montanhas</h3>
                <p>
                  Um roteiro premium para comer bem, descobrir mirantes, escolher hospedagem e
                  encaixar o festival certo na viagem.
                </p>
                <Link className="pill-button" href="#">
                  Ler roteiro
                </Link>
              </div>
            </article>
            <div className="blog-stack">
              {posts.slice(1).map((post, index) => (
                <article className="blog-row" key={post.title}>
                  <div className="blog-row-image" style={{ backgroundImage: `url(${post.image})` }} />
                  <div>
                    <span>0{index + 2}</span>
                    <h3>{post.title}</h3>
                    <p>{post.subtitle}</p>
                  </div>
                </article>
              ))}
              <article className="blog-newsletter-card">
                <span className="eyebrow">Receba novidades</span>
                <h3>Eventos, ofertas e roteiros antes de todo mundo.</h3>
                <div className="mini-form">
                  <span>seu@email.com</span>
                  <strong>Enviar</strong>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div>
            <span className="eyebrow bright-eyebrow">Pronto para explorar?</span>
            <h2>Transforme a próxima visita em uma experiência completa.</h2>
          </div>
          <Link className="pill-button" href="/eventos">
            Ver agenda de eventos
          </Link>
        </div>
      </section>
    </main>
  );
}
