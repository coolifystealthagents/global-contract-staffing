import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { researchPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Global contract operations research',
  description: 'Source-led operational research for leaders evaluating global contract staffing workflows, controls, and evidence.',
  alternates: { canonical: '/research' },
  openGraph: { url: '/research', images: [{ url: '/images/pages/research-atlas.svg', alt: 'Evidence library atlas for contract operations research' }] },
};
const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export default function ResearchPage() {
  return <main>
    <PageHero eyebrow="Research library" title="Evidence for better operating decisions." copy="Source-led briefs that turn public guidance and operational patterns into questions your team can use before assigning work or access." image="/images/pages/research-atlas.svg" alt="An evidence atlas connecting research questions, sources, methods, and decisions" />
    <section className="content-wrap editorial-index-intro"><div><p className="eyebrow">Read with the boundary in view</p><h2>Research should improve the question, not manufacture certainty.</h2></div><p>These briefs organize sources, operating assumptions, methods, and cautions. They support workflow design and internal review. They do not determine legal status, worker classification, compliance, or the right decision for a specific organization.</p></section>
    <section className="content-wrap research-method"><article><h2>Question</h2><p>Name the operational condition being examined and the decision it may inform.</p></article><article><h2>Sources</h2><p>Keep public source links visible so another reviewer can inspect the underlying guidance.</p></article><article><h2>Method</h2><p>Describe how records, fields, samples, or evidence are organized and where uncertainty remains.</p></article><article><h2>Decision</h2><p>Return interpretation and accountable judgment to the qualified owner inside your organization.</p></article></section>
    <section className="content-wrap content-grid editorial-index-grid">{researchPosts.map((post) => <Link className="content-card" href={`/research/${post.slug}`} key={post.slug}>{post.thumbnail ? <Image className="article-thumb" src={post.thumbnail} alt={`Research illustration for ${post.title}`} width={1200} height={630} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 44vw, 30vw" /> : <div className="article-thumb article-thumb-fallback research-fallback" role="img" aria-label={`Evidence atlas for ${post.title}`}><span>Question</span><span>Source</span><span>Review</span></div>}<span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><p className="meta">Published {formatDate(post.publishedAt)}</p><span className="text-link">Review the brief</span></Link>)}</section>
    <section className="closing"><p className="eyebrow">Connect evidence to the workflow</p><h2>Define the queue before you add contract capacity.</h2><p>Bring the source records, current owner, review standard, and known exceptions to a focused consultation.</p><Link className="button primary" href="/contact-us">Discuss a support role</Link></section>
  </main>;
}
