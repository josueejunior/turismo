import type { Metadata } from "next";
import { imageOrFallback, posts } from "../data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Conteúdos e roteiros de turismo regional do Convention Visitors."
};

export default function BlogPage() {
  return (
    <main>
      <section className="listing-hero marketplace-hero blog-page-hero">
        <div className="container listing-hero-grid">
          <div>
            <span className="eyebrow bright-eyebrow">
              <span className="dot" />
              Blog
            </span>
            <h1>Conteúdos para inspirar visitantes e associados.</h1>
            <p className="lead">
              Últimas postagens com roteiros, gastronomia, hospedagem e novidades do turismo regional.
            </p>
          </div>
        </div>
      </section>

      <section className="section editorial-blog blog-page-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">Últimas postagens</span>
              <h2>Todos os conteúdos publicados.</h2>
            </div>
          </div>
          <div className="blog-layout">
            {posts.map((post) => (
              <article className="blog-feature" key={post.title}>
                <div
                  className="blog-feature-image"
                  style={{
                    backgroundImage: `linear-gradient(180deg, transparent, rgba(0, 43, 114, 0.42)), url(${imageOrFallback(post.image)})`
                  }}
                />
                <div className="blog-feature-content">
                  <h3>{post.title}</h3>
                  <p>{post.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
