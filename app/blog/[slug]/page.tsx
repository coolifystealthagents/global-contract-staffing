import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleHero } from '@/components/ArticleHero';
import { ArticleSidebar } from '@/components/ArticleSidebar';
import { blogBySlug, blogPosts } from '@/lib/content';
import { site } from '@/lib/site';
import '../../article.css';

const sectionId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', {
  month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
}).format(new Date(`${date}T00:00:00Z`));

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: path,
      publishedTime: post.publishedAt,
      images: post.thumbnail ? [{ url: post.thumbnail, alt: `Editorial illustration for ${post.title}` }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);
  const tocItems = [
    ...post.sections.map((section) => ({ id: sectionId(section.heading), label: section.heading })),
    { id: 'common-questions', label: 'Common questions' },
  ];
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: `${site.name} Editorial Team` },
    publisher: { '@type': 'Organization', name: site.name },
    mainEntityOfPage: `https://${site.domain}/blog/${post.slug}`,
    image: post.thumbnail ? `https://${site.domain}${post.thumbnail}` : undefined,
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <main className="article-page">
      <header className="article-header">
        <div className="article-header-copy">
          <nav className="article-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{post.title}</span>
          </nav>
          <p className="eyebrow">Practical field note</p>
          <h1 id="article-title">{post.title}</h1>
          <p className="article-dek">{post.description}</p>
          <p className="article-byline">{site.name} Editorial Team · Published {formatDate(post.publishedAt)} · {post.readTime}</p>
        </div>
        <ArticleHero image={post.thumbnail} alt={`Operational atlas showing scope, handoff, review, and escalation for ${post.title}`} />
      </header>

      <div className="article-shell article-layout">
        <ArticleSidebar
          items={tocItems}
          related={related.map((item) => ({ href: `/blog/${item.slug}`, label: item.title, meta: item.category }))}
        />
        <article className="article-body" aria-labelledby="article-title">
          {post.sections.map((section, index) => (
            <section key={section.heading} id={sectionId(section.heading)}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {index === 2 && <p>Use the <Link href={post.internalService}>specialist service role</Link> as a starting point for defining scope and evidence.</p>}
              {index === 4 && <p><a href={post.source.url} rel="noopener noreferrer">{post.source.label}</a> provides public guidance that can help your team test the workflow assumptions.</p>}
              {index === 6 && <p>Compare this approach with our guide to <Link href={post.internalSibling}>the next related workflow</Link>.</p>}
            </section>
          ))}

          <section className="article-faq" id="common-questions">
            <h2>Common questions</h2>
            {post.faq.map((item) => (
              <div className="article-faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>

          <aside className="article-cta" aria-labelledby="article-cta-heading">
            <p className="eyebrow">Plan a controlled first handoff</p>
            <h2 id="article-cta-heading">Ready to create a clearer support role?</h2>
            <p>Bring the recurring workflow that consumes the most attention. We will help you shape its scope, ownership, evidence, and review points.</p>
            <Link id="cta-blog-final-consultation" className="button primary" href="/contact-us">Plan a free consultation</Link>
          </aside>
        </article>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
