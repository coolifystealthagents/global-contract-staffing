import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Global Contract Staffing',
  description: 'Learn how Global Contract Staffing defines managed remote roles, accountable ownership, review evidence, and safe decision boundaries.',
  alternates: { canonical: '/about' },
  openGraph: { url: '/about', images: [{ url: '/images/pages/about-atlas.svg', alt: 'Operating model atlas for managed contract staffing' }] },
};

export default function AboutPage() {
  return <main>
    <PageHero eyebrow={`About ${site.name}`} title="Better delegation starts with a better role." copy={`We help ${site.audience} shape focused remote support roles around real workflows, useful boundaries, and clear review points.`} image="/images/pages/about-atlas.svg" alt="An operating atlas connecting role charter, client owner, review loop, and accountability" />
    <section className="content-wrap about-principle"><p className="eyebrow">Our operating point of view</p><div><h2>Capacity should make work more visible, not less.</h2><p>Generic task lists often fail because they ignore the systems, language, risks, and approval rights inside the work. We begin with the workflow. The role follows only after the team can name the source, output, owner, and exception path.</p><p>This approach helps managers see whether a handoff is ready, what evidence to inspect, and where judgment must remain inside the organization.</p></div></section>
    <section className="content-wrap about-model"><article><h2>Role design</h2><p>A useful brief describes the recurring queue, systems, access, service windows, required evidence, and escalation triggers. It gives candidates a concrete operating context.</p></article><article><h2>Deliberate matching</h2><p>Availability alone is not enough. A contract professional needs strengths that fit the function, communication rhythm, source material, and level of ambiguity in the approved role.</p></article><article><h2>Managed launch</h2><p>The first work should be narrow enough to review closely. Managers can correct source guidance, permissions, output format, and exception rules before the queue expands.</p></article></section>
    <section className="content-wrap accountability-table"><div><p className="eyebrow">Accountability map</p><h2>Who owns what?</h2><p>Clear ownership prevents routine support from drifting into decisions the role should not make.</p></div><dl><div><dt>Your organization</dt><dd>Defines work, provides lawful access, names the manager, approves policy, accepts output, and retains regulated and executive authority.</dd></div><div><dt>The contract professional</dt><dd>Performs approved preparation and coordination, records evidence, communicates within guidance, protects access, and escalates exceptions.</dd></div><div><dt>Stealth Agents</dt><dd>Supports candidate matching and the managed service relationship while your organization remains accountable for its work and decisions.</dd></div></dl></section>
    <section className="content-wrap about-boundaries"><div><h2>What contract support can do</h2><p>Prepare records, maintain approved systems, coordinate routine handoffs, organize source material, draft from guidance, monitor queues, and surface exceptions.</p></div><div><h2>What it does not replace</h2><p>Qualified legal, tax, employment, immigration, payroll, privacy, security, financial, clinical, or other professional advice and accountable management.</p></div></section>
    <section className="closing"><p className="eyebrow">Begin with operational clarity</p><h2>Bring one workflow that needs a clearer owner or handoff.</h2><p>We will use it to discuss a focused role, appropriate boundaries, and a practical first review cycle.</p><Link id="cta-about-story-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link></section>
  </main>;
}
