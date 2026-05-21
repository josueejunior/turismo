import Link from "next/link";
import { categories, events } from "../data";

export default function EventsPage() {
  return (
    <main>
      <section className="listing-hero marketplace-hero">
        <div className="container listing-hero-grid">
          <div>
            <span className="eyebrow bright-eyebrow">
              <span className="dot" />
              Agenda viva da região
            </span>
            <h1>Escolha o próximo motivo para sair.</h1>
            <p className="lead">
              Eventos futuros ordenados por proximidade, com filtros por categoria, imagem forte,
              data visível e acesso direto aos detalhes.
            </p>
          </div>
          <div className="marketplace-panel">
            <span className="date-badge">Mais procurado</span>
            <h2>Festival Gastronômico</h2>
            <p>Ingressos abertos, chefs convidados e feira de produtores locais.</p>
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
            <p className="card-meta">Filtre por clima de viagem e encontre a experiência ideal.</p>
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
                <div className="event-image" style={{ backgroundImage: `url(${event.image})` }} />
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
