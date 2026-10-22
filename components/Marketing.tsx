import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { ArrowIcon, CheckIcon, SparkIcon } from './Icons';

const CTA = ({ id, children }: { id: string; children: React.ReactNode }) => <Link id={id} className="button primary" href="/contact-us">{children} <ArrowIcon /></Link>;

function ServiceCards() {
  return <div className="service-grid">{site.services.map((service) => <Link className="service-card reveal" href={`/services/${service.slug}`} key={service.slug}><span className="service-signal" aria-hidden="true" /><h3>{service.name}</h3><p>{service.short}</p><span className="text-link">Explore the role <ArrowIcon /></span></Link>)}</div>;
}
function Principles() { return <div className="principles">{site.principles.map((item) => <div key={item}><CheckIcon /><span>{item}</span></div>)}</div>; }
function Latest() { return <div className="article-grid">{blogPosts.slice(0, 3).map((post) => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}><span className="pill">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><span className="text-link">Read the guide <ArrowIcon /></span></Link>)}</div>; }

export function HomePage() {
  return <main className={`home design-${site.design}`}>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">{site.eyebrow}</p><h1>{site.hero} <em>{site.heroAccent}</em></h1><p className="hero-body">{site.heroBody}</p><div className="hero-actions"><CTA id="cta-home-hero-bookcall">Book a free consultation</CTA><Link className="quiet-link" href="/services">See specialist roles</Link></div><Principles /></div>
      <div className="hero-visual"><Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 58vw" /><div className="hero-label"><SparkIcon /><span>{site.manifesto}</span></div></div>
    </section>
    <section className="section intro"><p className="eyebrow">Specialist support shaped around your work</p><div><h2>Build capacity without lowering the bar.</h2><p>{site.manifesto} Your contract team works from documented priorities, clear decision rights, and a practical review rhythm.</p></div></section>
    <section className="section services"><div className="section-heading"><p className="eyebrow">Roles that fit the work</p><h2>Choose support your team can actually use.</h2><p>Each role begins with a defined queue, source material, accountable owner, completion evidence, and escalation path.</p></div><ServiceCards /></section>
    <section className="section method"><div className="handoff-map" role="img" aria-label="A handoff atlas connecting scope, source, review, and escalation"><span>Scope</span><span>Source</span><span>Review</span><span>Escalation</span></div><div><p className="eyebrow">A visible working model</p><h2>Define. Delegate. Improve.</h2><p>Start with recurring work that already has an owner, a standard, and a clear exception path. Build one controlled handoff before expanding the role.</p><ol><li><strong>Define the boundary.</strong> Separate preparation and coordination from licensed, legal, financial, or executive judgment.</li><li><strong>Document the handoff.</strong> Set inputs, output format, review points, service windows, and exception rules.</li><li><strong>Improve with evidence.</strong> Review a focused sample and update the process when recurring patterns emerge.</li></ol><CTA id="cta-home-method-consultation">Plan a free consultation</CTA></div></section>
    <section className="section decision-guide"><div><p className="eyebrow">Use contract support deliberately</p><h2>Choose a role when the workflow is ready.</h2></div><div className="decision-columns"><article><h3>A strong starting point</h3><p>The work repeats, an internal owner is available, the source system is known, and completion can be inspected.</p></article><article><h3>Pause before hiring</h3><p>The work depends on undocumented judgment, no reviewer has capacity, access is undefined, or the team cannot name the intended output.</p></article><article><h3>Keep decisions internal</h3><p>Your qualified team retains policy, worker classification, regulated work, approvals, financial authority, and sensitive exceptions.</p></article></div></section>
    <section className="section journal"><div className="section-heading"><p className="eyebrow">Field notes</p><h2>Practical guidance for better delegation.</h2></div><Latest /></section>
    <section className="closing"><p className="eyebrow">Make room for the work only you can do</p><h2>Map your first specialist support role.</h2><p>Bring one recurring workflow, its current owner, and the evidence your team needs to accept the work.</p><CTA id="cta-home-closing-schedulecall">Schedule a free call</CTA></section>
  </main>;
}
