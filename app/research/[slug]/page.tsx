import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleHero } from '@/components/ArticleHero';
import { ArticleSidebar } from '@/components/ArticleSidebar';
import { researchBySlug, researchPosts } from '@/lib/content';
import { site } from '@/lib/site';
import '../../article.css';

const sectionId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', {
  month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
}).format(new Date(`${date}T00:00:00Z`));

const fallbackSections = [
  {
    heading: 'What this brief examines',
    paragraphs: ['This brief connects public guidance with operating questions that arise when work is divided between an internal team and contract support. It does not replace professional advice. It provides a structured starting point for role design and review.'],
  },
  {
    heading: 'Questions to test inside the workflow',
    paragraphs: ['Identify which steps involve preparation, coordination, or documentation. Then name the decisions that require a qualified professional, manager, or accountable owner. Define the evidence a reviewer should see before accepting the work and the exceptions that need an explicit escalation path.'],
  },
  {
    heading: 'Practical interpretation',
    paragraphs: ['A useful support role is defined by the boundary between repeatable preparation and accountable judgment. The source record, review owner, and escalation path make that boundary inspectable during real work.'],
  },
];

export function generateStaticParams() {
  return researchPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) return {};
  const path = `/research/${post.slug}`;
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      url: path,
      publishedTime: post.publishedAt,
      images: post.thumbnail ? [{ url: post.thumbnail, alt: `Research illustration for ${post.title}` }] : undefined,
    },
  };
}

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) notFound();

  const sections = post.sections?.length ? post.sections : fallbackSections;
  const related = researchPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => Number(b.cluster === post.cluster) - Number(a.cluster === post.cluster))
    .slice(0, 3);
  const tocItems = [
    ...sections.map((section) => ({ id: sectionId(section.heading), label: section.heading })),
    { id: 'sources', label: 'Sources' },
  ];
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: `${site.name} Editorial Team` },
    publisher: { '@type': 'Organization', name: site.name },
    mainEntityOfPage: `https://${site.domain}/research/${post.slug}`,
    image: post.thumbnail ? `https://${site.domain}${post.thumbnail}` : undefined,
    citation: post.sources.map((source) => source.url),
  };

  return (
    <main className="article-page">
      <header className="article-header">
        <div className="article-header-copy">
          <nav className="article-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/research">Research</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{post.title}</span>
          </nav>
          <p className="eyebrow">Source led research brief</p>
          <h1 id="article-title">{post.title}</h1>
          <p className="article-dek">{post.summary}</p>
          <p className="article-byline">{site.name} Editorial Team · Published {formatDate(post.publishedAt)}</p>
        </div>
        <ArticleHero image={post.thumbnail} alt={`Evidence atlas showing scope, handoff, review, and escalation for ${post.title}`} />
      </header>

      <div className="article-shell article-layout">
        <ArticleSidebar
          items={tocItems}
          related={related.map((item) => ({ href: `/research/${item.slug}`, label: item.title, meta: item.cluster }))}
        />
        <article className="article-body" aria-labelledby="article-title">
          <p className="article-finding"><strong>Operational premise:</strong> {post.finding}</p>
          {sections.map((section) => (
            <section key={section.heading} id={sectionId(section.heading)}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}

          <section className="article-sources" id="sources">
            <h2>Sources</h2>
            <p>These public sources informed the operating questions in this brief. Their inclusion does not imply endorsement of this site or professional advice for a specific situation.</p>
            <ol>
              {post.sources.map((source) => (
                <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>
              ))}
            </ol>
          </section>

          <aside className="article-cta" aria-labelledby="research-cta-heading">
            <p className="eyebrow">Turn evidence into a role brief</p>
            <h2 id="research-cta-heading">Map the first workflow before adding capacity.</h2>
            <p>Bring the queue, source material, current owner, and known exceptions. We will help you define a controlled support role around them.</p>
            <Link id="cta-research-final-consultation" className="button primary" href="/contact-us">Plan a free consultation</Link>
          </aside>
        </article>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </main>
  );
}
