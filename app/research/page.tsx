import type { Metadata } from 'next';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
export const metadata:Metadata={title:'Research',description:'Source-led operational research for leaders designing specialist support roles.'};
export default function ResearchPage(){return <main><header className="page-hero"><p className="eyebrow">Research library</p><h1>Evidence for better operating decisions.</h1><p>Source-led briefs that turn public guidance and operational patterns into questions your team can use.</p></header><section className="content-wrap content-grid">{researchPosts.map((post)=><Link className="content-card" href={`/research/${post.slug}`} key={post.slug}><span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><span className="text-link">Review the brief</span></Link>)}</section></main>}
