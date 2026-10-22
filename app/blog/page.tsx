import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { blogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contract staffing field notes',
  description: 'Practical guides for defining, delegating, reviewing, and improving global contract staffing workflows.',
  alternates: { canonical: '/blog' },
  openGraph: { url: '/blog', images: [{ url: '/images/pages/blog-atlas.svg', alt: 'Editorial field notes atlas' }] },
};
const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export default function BlogPage() {
  return <main>
    <PageHero eyebrow="Practical field notes" title="Clearer roles. Better handoffs." copy="Guides for owners and managers who want to delegate recurring work without losing visibility, context, or control." image="/images/pages/blog-atlas.svg" alt="An editorial atlas connecting definition, delegation, inspection, and improvement" />
    <section className="content-wrap editorial-index-intro"><div><p className="eyebrow">Use the library</p><h2>Move from a broad staffing idea to one controlled workflow.</h2></div><p>Start with role design when ownership is unclear. Use contract operations for handoffs and evidence. Choose management systems when the role exists but review is inconsistent. Every guide keeps accountable decisions with your team.</p></section>
    <section className="content-wrap"><div className="principles" aria-label="Article topics">{[...new Set(blogPosts.map((post) => post.category))].map((category) => <span className="pill" key={category}>{category} ({blogPosts.filter((post) => post.category === category).length})</span>)}</div><div className="article-grid editorial-index-grid">{blogPosts.map((post) => <Link className="article-card" href={`/blog/${post.slug}`} key={post.slug}>{post.thumbnail ? <Image className="article-thumb" src={post.thumbnail} alt={`Editorial illustration for ${post.title}`} width={1200} height={630} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 44vw, 30vw" /> : <div className="article-thumb article-thumb-fallback" role="img" aria-label={`Operational atlas for ${post.title}`}><span>Scope</span><span>Handoff</span><span>Review</span></div>}<span className="pill">{post.category}</span><h2>{post.title}</h2><p>{post.description}</p><p className="meta">Published {formatDate(post.publishedAt)} · {post.readTime}</p><span className="text-link">Read article</span></Link>)}</div></section>
    <section className="closing"><p className="eyebrow">Apply the guidance</p><h2>Turn the next recurring queue into a role brief.</h2><p>Bring the source, current owner, desired output, and common exceptions to a focused staffing conversation.</p><Link className="button primary" href="/contact-us">Plan a free consultation</Link></section>
  </main>;
}
