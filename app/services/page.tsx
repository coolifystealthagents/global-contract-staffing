import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { site } from '@/lib/site';
import { ArrowIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Global contract staffing services',
  description: 'Explore managed contract staffing roles for operations, customer support, sales support, finance administration, research, and project coordination.',
  alternates: { canonical: '/services' },
  openGraph: { url: '/services', images: [{ url: '/images/pages/services-atlas.svg', alt: 'Service atlas for global contract staffing roles' }] },
};

const readiness = [
  ['A recurring queue exists', 'The work arrives often enough to document, assign, and review.'],
  ['An accountable owner is available', 'A person inside your organization can approve access, answer exceptions, and accept the output.'],
  ['Completion can be inspected', 'The team can define the record, status, artifact, or evidence that marks the work complete.'],
  ['Authority has a clear limit', 'The contract role can prepare and coordinate without taking decisions that belong to qualified owners.'],
] as const;

export default function ServicesPage() {
  return <main>
    <PageHero eyebrow="Services" title="Contract staffing roles built around visible work." copy="Choose a focused support function, then define the systems, boundaries, evidence, and review points that make the handoff reliable." image="/images/pages/services-atlas.svg" alt="An operational service atlas connecting inputs, work queues, evidence, and escalation">
      <Link className="button primary" href="/contact-us">Discuss your workflow</Link>
    </PageHero>
    <section className="content-wrap service-index-intro"><div><p className="eyebrow">One operating system, six focused roles</p><h2>Start with the function that creates the clearest handoff.</h2></div><p>Every role below uses the same control logic: approved sources enter a documented queue, routine work follows written guidance, completion leaves evidence, and exceptions return to an accountable owner. The useful difference is the actual work, systems, inputs, and quality standard inside each function.</p></section>
    <section className="content-wrap service-index-list" aria-label="Global contract staffing services">{site.services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><div><span className="service-signal" aria-hidden="true" /><h2>{service.name}</h2><p>{service.short}</p></div><span className="text-link">View scope and controls <ArrowIcon /></span></Link>)}</section>
    <section className="content-wrap readiness-section"><div><p className="eyebrow">Readiness check</p><h2>What should be true before a role begins?</h2><p>A contract hire does not repair an undefined workflow by itself. Resolve these operating conditions before adding volume or access.</p></div><div className="readiness-grid">{readiness.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="content-wrap scope-boundary"><div><h2>Work that fits</h2><p>Documented preparation, records maintenance, routine coordination, approved communication, status updates, research, and exception routing can form a useful contract role.</p></div><div><h2>Decisions that stay with you</h2><p>Legal, tax, employment, privacy, security, regulated, financial, hiring, approval, policy, and executive decisions remain with your organization and qualified advisers.</p></div></section>
    <section className="closing"><p className="eyebrow">Choose the first controlled queue</p><h2>Turn recurring work into a reviewable role.</h2><p>Bring the workflow, current owner, systems, service window, and known exceptions. We will help you shape the first handoff.</p><Link className="button primary" href="/contact-us">Plan a free consultation</Link></section>
  </main>;
}
