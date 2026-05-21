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
            <span className="hero-edition">Edição de inverno · Terras Altas</span>
            <h1>A serra em forma de roteiro.</h1>
            <p className="lead">
              Uma vitrine de eventos, mesas, pousadas e paisagens para quem quer chegar com o
              fim de semana praticamente desenhado.
            </p>
            <div className="hero-actions">
              <Link className="pill-button" href="/eventos">
                Ver agenda curada
              </Link>
              <Link className="ghost-button light-ghost" href="/eventos/festival-gastronomico-da-serra">
                Festival em destaque
              </Link>
            </div>
            <div className="hero-itinerary" aria-label="Sugestão de roteiro de fim de semana">
              <article>
                <span>Chegada</span>
                <strong>Sexta ao pôr do sol</strong>
              </article>
              <article>
                <span>Sábado</span>
                <strong>Feira, trilha leve e jantar</strong>
              </article>
              <article>
                <span>Domingo</span>
                <strong>Café colonial e mirante</strong>
              </article>
            </div>
            <div className="stats hero-stats">
              <div className="stat">
                <strong>48h</strong>
                <span className="small-copy">roteiros enxutos para chegar e aproveitar</span>
              </div>
              <div className="stat">
                <strong>120+</strong>
                <span className="small-copy">negócios locais reunidos em uma vitrine</span>
              </div>
              <div className="stat">
                <strong>1</strong>
                <span className="small-copy">agenda clara para eventos, sabores e estadia</span>
              </div>
            </div>
          </div>
          <div className="scenic-showcase" aria-label="Paisagem turística regional">
            <div className="showcase-card main-photo">
              <div className="photo-label">
                <span>Fim de semana destaque · 14 jun</span>
                <strong>festival, produtores e noite no centro histórico</strong>
              </div>
            </div>
            <div className="showcase-index">
              <span>Guia local</span>
              <strong>04 rotas</strong>
              <small>gastronomia · natureza · cultura · hospedagem</small>
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
          {["Agenda com curadoria", "Experiências verificadas", "Roteiros de 48h", "Comércio local"].map(
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
              <h2>Uma agenda curta, escolhida para virar plano.</h2>
            </div>
            <p>
              Datas, lugares e experiências com contexto suficiente para decidir sem garimpar em
              várias páginas.
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
            {events.slice(0, 3).map((event, index) => (
              <Link
                className={`event-card ${index === 0 ? "event-card-featured" : ""}`}
                href={event.href}
                key={event.title}
              >
                <div className="event-image" style={{ backgroundImage: `url(${event.image})` }} />
                <div className="event-body">
                  <div className="event-meta-line">
                    <span>{event.category}</span>
                    <span>{event.date}</span>
                  </div>
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
            <p>Um recorte de sabores locais para montar o dia em torno da mesa certa.</p>
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
              <h2>Pousadas e refúgios para dormir dentro do clima da viagem.</h2>
            </div>
            <Link className="ghost-button" href="#">
              Ver todos
            </Link>
          </div>
          <div className="card-grid stay-grid">
            {stays.slice(0, 3).map((stay) => (
              <article className="company-card" key={stay}>
                <span className="stay-label">Hospedagem selecionada</span>
                <h3>{stay}</h3>
                <p className="card-meta">
                  Endereço, contato direto, fotos e contexto para escolher sem alternar entre abas.
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
            <h2 className="display">Um guia comercial com olhar de revista.</h2>
            <p>
              O projeto organiza a oferta turística da região com curadoria visual, informação
              prática e espaço comercial para quem recebe bem.
            </p>
            <Link className="pill-button" href="#">
              Nos conheça
            </Link>
          </div>
          <div className="editorial-proof" aria-label="Como a vitrine organiza o turismo local">
            {[
              ["Agenda", "Eventos com data, local e caminho claro até a compra."],
              ["Vitrine", "Negócios locais apresentados com foto, contato e contexto."],
              ["Roteiros", "Combinações de comida, natureza e hospedagem para 48h."]
            ].map(([title, copy]) => (
              <article className="proof-tile" key={title}>
                <span>{title}</span>
                <p>{copy}</p>
              </article>
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
            <h2>Do desejo de viajar ao roteiro possível.</h2>
            <p>
              A navegação acompanha o jeito real de planejar uma escapada: primeiro o clima, depois
              as combinações, por fim o contato ou ingresso.
            </p>
            <div className="journey-steps">
              {[
                ["01", "Escolha o motivo da viagem", "Festival, trilha, mesa regional ou descanso aparecem com imagem e data."],
                ["02", "Complete o fim de semana", "O guia aproxima eventos, restaurantes e hospedagens que combinam entre si."],
                ["03", "Vá direto ao contato certo", "Ingressos, links oficiais e informações práticas ficam no ponto de decisão."]
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
              <h2>Guias para esticar a visita sem improviso.</h2>
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
                  Um roteiro para comer bem, descobrir mirantes, escolher hospedagem e encaixar o
                  festival certo na viagem.
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
            <h2>Escolha uma data e deixe a serra conduzir o resto.</h2>
          </div>
          <Link className="pill-button" href="/eventos">
            Ver agenda de eventos
          </Link>
        </div>
      </section>
    </main>
  );
}
