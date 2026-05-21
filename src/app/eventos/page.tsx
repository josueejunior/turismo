import Link from "next/link";
import type { Metadata } from "next";
import { categories, events, imageOrFallback } from "../data";

export const metadata: Metadata = {
  title: "Eventos",
  description: "Lista de eventos futuros com filtros, datas e acesso aos detalhes."
};

export default function EventsPage() {
  return (
    <main>
      <section className="listing-hero marketplace-hero">
        <div className="container listing-hero-grid">
          <div>
            <span className="eyebrow bright-eyebrow">
              <span className="dot" />
              O que fazer em Cascavel
            </span>
            <h1>Eventos futuros com curadoria e acesso direto.</h1>
            <p className="lead">
              Eventos futuros ordenados por proximidade, com filtros por categoria, imagem forte,
              data visível e acesso direto aos detalhes.
            </p>
          </div>
          <div className="marketplace-panel">
            <span className="date-badge">Mais procurado</span>
            <h2>Festival Gastronômico de Cascavel</h2>
            <p>Ingressos abertos, chefs convidados, feira de produtores e programação comercial.</p>
            <Link className="pill-button" href="/eventos/festival-gastronomico-da-serra">
              Comprar agora
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container listing-layout">
          <aside className="filter-panel">
            <h3>Categorias</h3>
            <p className="card-meta">Filtre a lista abaixo por tipo de evento e encontre a experiência ideal.</p>
            <div className="filter-list">
              {categories.map((category) => (
                <Link href="#" key={category}>
                  {category}
                </Link>
              ))}
            </div>
          </aside>

          <div className="event-list">
            {events.map((event) => (
              <Link className="wide-event" href={event.href} key={event.title}>
                <div className="event-image" style={{ backgroundImage: `url(${imageOrFallback(event.image)})` }} />
                <div>
                  <span className="category-mini">{event.category}</span>
                  <span className="date-badge">{event.date}</span>
                  <h2>{event.title}</h2>
                  <p className="card-meta">{event.description}</p>
                </div>
                <span className="ghost-button">Abrir evento</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
