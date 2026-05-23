import Link from "next/link";
import type { Metadata } from "next";
import { events, imageOrFallback } from "../../data";
import styles from "./event-detail.module.css";

const event = events[0];

export const metadata: Metadata = {
  title: event.title,
  description: event.subtitle
};

export default function EventDetailPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.copy}>
            <Link className={styles.backLink} href="/eventos">
              ← Voltar para eventos
            </Link>
            <span className={styles.eyebrow}>{event.category} · {event.date}</span>
            <h1>{event.title}</h1>
            <p>
              Uma noite para provar receitas autorais, conhecer produtores locais e viver a cidade por meio
              da mesa, da música e dos encontros.
            </p>
            <div className={styles.facts} aria-label="Destaques do evento">
              <span>20 chefs convidados</span>
              <span>Feira de produtores</span>
              <span>Show ao vivo</span>
            </div>
          </div>

          <aside className={styles.ticketCard} aria-label="Ingressos">
            <span>Ingressos disponíveis</span>
            <h2>Garanta sua noite no festival</h2>
            <div className={styles.price}>
              <small>a partir de</small>
              <strong>R$ 89</strong>
            </div>
            <p>Lotes limitados com degustação, programação musical e acesso à feira regional.</p>
            <Link className={styles.primaryButton} href="#">
              Comprar ingressos
            </Link>
          </aside>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.contentGrid}>
          <article className={styles.mainCard}>
            <div
              className={styles.coverImage}
              style={{ backgroundImage: `url(${imageOrFallback(event.image)})` }}
              aria-label="Festival gastronômico"
            />
            <span className={styles.sectionLabel}>Sobre o evento</span>
            <h2>Gastronomia regional com estética contemporânea.</h2>
            <p>
              O festival reúne restaurantes, produtores artesanais, sommeliers e artistas em uma
              programação pensada para turistas e moradores. A experiência combina pratos assinados,
              ilhas de degustação, música ao vivo e espaços fotográficos para registrar a noite.
            </p>
            <p>
              A proposta é aproximar visitantes, empresas associadas e produtores regionais em uma
              experiência clara, organizada e fácil de compartilhar.
            </p>
            <div className={styles.photoGrid}>
              <div
                className={styles.photo}
                style={{
                  backgroundImage: `url(${imageOrFallback(event.photos[0])})`
                }}
              />
              <div
                className={styles.photo}
                style={{
                  backgroundImage: `url(${imageOrFallback(event.photos[1])})`
                }}
              />
            </div>
          </article>

          <aside className={styles.infoCard}>
            <h3>Informações</h3>
            <dl>
              <div>
                <dt>Data</dt>
                <dd>{event.date}</dd>
              </div>
              <div>
                <dt>Local</dt>
                <dd>Centro de Eventos, Cascavel - PR</dd>
              </div>
              <div>
                <dt>Contato</dt>
                <dd>contato@visitecascavel.com.br</dd>
              </div>
            </dl>
            <Link className={styles.secondaryButton} href="/eventos">
              Ver outros eventos
            </Link>
          </aside>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div>
            <span className={styles.eyebrow}>Últimos lotes</span>
            <h2>Reserve sua experiência gastronômica em Cascavel.</h2>
            <p>O botão pode apontar para a plataforma oficial de ingressos quando a venda estiver ativa.</p>
          </div>
          <Link className={styles.primaryButton} href="#">
            Comprar ingresso
          </Link>
        </div>
      </section>
    </main>
  );
}
