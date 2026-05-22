import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { imageOrFallback, posts } from "../../data";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Conteúdo não encontrado"
    };
  }

  return {
    title: post.title,
    description: post.subtitle
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <section className="listing-hero marketplace-hero blog-detail-hero">
        <div className="container listing-hero-grid">
          <div>
            <span className="eyebrow bright-eyebrow">
              <span className="dot" />
              {post.category}
            </span>
            <h1>{post.title}</h1>
            <p className="lead">{post.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section blog-detail-section">
        <div className="container detail-grid">
          <article className="content-block blog-detail-article">
            <Image
              className="blog-detail-cover"
              src={imageOrFallback(post.image)}
              alt=""
              aria-hidden="true"
              width={1200}
              height={720}
              priority
            />
            <div className="blog-detail-meta">
              <span>{post.category}</span>
              <span>{post.readTime} de leitura</span>
            </div>
            <h2>{post.title}</h2>
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <aside className="content-block blog-detail-sidebar">
            <span className="eyebrow">Próximos passos</span>
            <h3>Continue navegando pelo portal.</h3>
            <p>
              Volte para a listagem de conteúdos ou explore eventos, hospedagens e associados em destaque.
            </p>
            <div className="link-list">
              <Link className="resource-link" href="/blog">
                <span>Todos os conteúdos</span>
                <strong>Acessar</strong>
              </Link>
              <Link className="resource-link" href="/eventos">
                <span>Agenda de eventos</span>
                <strong>Acessar</strong>
              </Link>
              <Link className="resource-link" href="/#marketplace">
                <span>Associados</span>
                <strong>Acessar</strong>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
