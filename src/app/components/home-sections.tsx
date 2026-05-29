import Link from "next/link";
import Image from "next/image";
import { HeroBackgroundFade } from "@/components/home/HeroBackgroundFade";
import { ROUTES } from "@/constants/routes";
import {
  categories,
  cuisines,
  events,
  imageOrFallback,
  institutionalBackgroundImage,
  marketplaceCategories,
  members,
  posts,
  restaurants,
  sectors,
  siteHeroBackgroundImages
} from "../data";

const visualTiles = [
  ["Onde ir", "parques, cultura, negócios e experiências regionais", "nature"],
  ["Onde comer", "restaurantes, cafés, bares e sabores autorais", "taste"],
  ["Onde ficar", "hotéis, pousadas e hospedagens associadas", "stay"],
  ["Onde comprar", "produtos locais, vouchers e experiências", "culture"]
];

const modernSignals = [
  ["Banco de dados preparado", "Cada associado pode exibir logo, banner, fotos, endereço, contato e website."],
  ["Marketplace institucional", "A navegação funciona como descoberta turística, mas com aparência premium."],
  ["Banners configuráveis", "Hero e eventos já consideram imagens administráveis e proporção consistente."],
  ["Fallback visual", "Quando não houver imagem própria, entram fotos genéricas de turismo regional."]
];

export function HomeHero() {
  const homeEventsCount = Math.min(3, events.length);

  return (
    <section className="luxe-hero" id="hero">
      <div className="luxe-hero-stage" aria-hidden="true">
        <HeroBackgroundFade images={siteHeroBackgroundImages} />
        <div className="luxe-hero-veil" />
        <div className="luxe-hero-grain" />
      </div>

      <div className="container luxe-hero-content">
        <span className="luxe-overline luxe-hero-block--desktop">
          <i aria-hidden="true" />
          Turismo regional · curadoria 2026
          <i aria-hidden="true" />
        </span>

        <p className="luxe-hero-badge luxe-hero-block--mobile">Turismo sem ruído</p>

        <h1 className="luxe-title">
          <span className="luxe-hero-desktop-title luxe-hero-block--desktop">
            <span className="luxe-title-line">Descubra o melhor do</span>
            <em>turismo regional</em>
          </span>
          <span className="luxe-hero-mobile-title luxe-hero-block--mobile">
            Um portal institucional com experiência de marketplace.
          </span>
        </h1>

        <p className="luxe-hero-cascavel-line">Turismo em Cascavel</p>

        <ul className="luxe-hero-pills luxe-hero-block--mobile" aria-label="Destaques do portal">
          <li>
            <strong>4</strong> categorias
          </li>
          <li>
            <strong>{homeEventsCount}</strong> eventos na home
          </li>
          <li>
            <strong>CVB</strong> identidade
          </li>
        </ul>

        <form className="luxe-search luxe-hero-block--desktop" aria-label="Busca turística">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            aria-label="Buscar experiências"
            placeholder="Buscar eventos, restaurantes ou hospedagens..."
          />
          <button type="submit">Buscar</button>
        </form>

        <div className="luxe-actions luxe-hero-block--desktop">
          <Link className="luxe-cta-primary luxe-cta-label-strong" href={ROUTES.EVENTS}>
            Ver agenda de eventos
            <span aria-hidden="true">→</span>
          </Link>
          <Link className="luxe-cta-ghost luxe-cta-label-strong" href="#marketplace">
            Explorar associados
          </Link>
        </div>

        <div className="luxe-actions luxe-actions--mobile-cta luxe-hero-block--mobile">
          <Link className="luxe-cta-primary" href={ROUTES.EVENTS}>
            Abrir agenda
            <span aria-hidden="true">→</span>
          </Link>
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
          <h2>Estrutura pensada para design bonito e implementação viável.</h2>
        </div>
        <div className="modern-bento-grid">
          {modernSignals.map(([title, copy], index) => (
            <article className={`modern-bento-card modern-bento-${index + 1}`} key={title}>
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
            <span className="eyebrow">O que fazer</span>
            <h2>Eventos com categorias, data visível e caminho claro para compra.</h2>
          </div>
          <Link className="ghost-button" href="/eventos">
            Ver todos <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="category-row tourism-category-row" aria-label="Categorias de eventos">
          {categories.slice(1).map((category) => (
            <span className="category-chip" key={category}>
              {category}
            </span>
          ))}
        </div>
        <div className="event-editorial-grid">
          {events.slice(0, 3).map((event) => (
            <Link className="event-portrait" href={event.href} key={event.title}>
              <div
                className="event-portrait-image"
                style={{ backgroundImage: `url(${imageOrFallback(event.image)})` }}
                aria-hidden="true"
              />
              <div>
                <span>{event.category} · {event.date}</span>
                <h3>{event.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TasteEditorialSection() {
  const tasteCoverImage =
    restaurants.find((restaurant) => restaurant.bannerImage)?.bannerImage ||
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=88";

  return (
    <section className="section taste-editorial" id="setores">
      <div className="container taste-editorial-grid">
        <div
          className="taste-editorial-image"
          style={{ backgroundImage: `url(${tasteCoverImage})` }}
          aria-hidden="true"
        />
        <div className="taste-editorial-copy">
          <span className="eyebrow">Onde comer</span>
          <h2>Categorias gastronômicas para descobrir a cidade pelo paladar.</h2>
          <p>Um radar gastronômico com cafés, restaurantes, bares e produtores que dão identidade ao destino.</p>
          <div className="cuisine-list">
            {cuisines.map((item) => (
              <span key={item}>
                <small>curado</small>
                {item}
              </span>
            ))}
          </div>
          <div className="food-company-list">
            {restaurants.map((restaurant) => (
              <Link className="food-company-card" href={restaurant.detailHref} key={restaurant.name}>
                <div
                  className="company-logo-mark"
                  style={restaurant.logoImage ? { backgroundImage: `url(${restaurant.logoImage})` } : undefined}
                >
                  {!restaurant.logoImage && restaurant.logo}
                </div>
                <div>
                  <span>{restaurant.subtitle}</span>
                  <strong>{restaurant.name}</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PlacesAndMarketplaceSection() {
  return (
    <section className="section places-marketplace-section" id="comprar">
      <div className="container places-marketplace-grid">
        <article className="content-block tourism-directory-card">
          <span className="eyebrow">Onde ir</span>
          <h2>Setores turísticos para navegar por interesse.</h2>
          <p>
            A página organiza parques, cultura, negócios e experiências regionais como portas de entrada
            para listagens futuras.
          </p>
          <div className="cuisine-list light-list">
            {sectors.map((item) => (
              <span key={item}>
                <small>setor</small>
                {item}
              </span>
            ))}
          </div>
        </article>

        <article
          id="marketplace"
          className="content-block tourism-directory-card yellow-card scroll-anchor-marketplace"
        >
          <span className="eyebrow">Onde comprar</span>
          <h2>Marketplace para produtos, vouchers e experiências locais.</h2>
          <p>
            A área de compras fica preparada para associados divulgarem itens comerciais sem perder o tom
            institucional do portal.
          </p>
          <div className="cuisine-list light-list">
            {marketplaceCategories.map((item) => (
              <span key={item}>
                <small>mktplace</small>
                {item}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export function InstitutionalSection() {
  return (
    <section className="section institutional-section" id="institucional">
      <div
        className="container split-band institutional-band"
        style={{ backgroundImage: `linear-gradient(135deg, rgba(0, 43, 114, 0.94), rgba(0, 43, 114, 0.78)), url(${institutionalBackgroundImage})` }}
      >
        <div>
          <span className="eyebrow bright-eyebrow">Institucional</span>
          <h2>Visite Cascavel Convention & Visitors Bureau</h2>
          <p>
            Uma vitrine comercial para fortalecer o turismo regional, conectar associados qualificados e
            apresentar a cidade com linguagem moderna, confiável e pronta para campanhas.
          </p>
          <div className="institutional-metrics" aria-label="Indicadores institucionais">
            <span>
              <strong>120+</strong>
              associados
            </span>
            <span>
              <strong>50+</strong>
              eventos
            </span>
            <span>
              <strong>10+</strong>
              anos
            </span>
          </div>
          <Link className="pill-button" href="#">
            Nos conheça <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="logo-cloud">
          {members.map((member) => (
            <span
              className="logo-tile"
              key={member.name}
              style={member.logoImage ? { backgroundImage: `url(${member.logoImage})` } : undefined}
            >
              {!member.logoImage && member.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BlogSection() {
  return (
    <section className="section editorial-blog" id="blog">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="eyebrow">Últimas postagens</span>
            <h2>Conteúdos recentes para inspirar visitantes e associados.</h2>
          </div>
          <Link className="ghost-button" href="/blog">
            Ver mais <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="blog-layout">
          {posts.map((post) => (
            <Link className="blog-feature" href={`/blog/${post.slug}`} key={post.title}>
              <Image
                className="blog-feature-image"
                src={imageOrFallback(post.image)}
                alt=""
                aria-hidden="true"
                width={900}
                height={520}
              />
              <div className="blog-feature-content">
                <h3>{post.title}</h3>
                <p>{post.subtitle}</p>
              </div>
            </Link>
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
          <span className="eyebrow bright-eyebrow">Turismo sem ruído</span>
          <h2>Um portal institucional com experiência de marketplace.</h2>
          <div className="cta-metrics">
            <span><strong>4</strong> categorias</span>
            <span><strong>3</strong> eventos na home</span>
            <span><strong>CVB</strong> identidade</span>
          </div>
        </div>
        <Link className="pill-button" href="/eventos">
          Abrir agenda <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
