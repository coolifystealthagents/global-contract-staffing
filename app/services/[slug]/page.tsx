import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import { serviceDetailBySlug } from '@/lib/service-details';
import '../service-detail.css';

export function generateStaticParams() {
  return site.services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  const detail = serviceDetailBySlug(slug);
  if (!service || !detail) return {};
  return {
    title: service.name,
    description: service.short,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      type: 'website',
      title: service.name,
      description: service.short,
      url: `/services/${slug}`,
      images: [{ url: detail.heroImage, alt: detail.heroAlt }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  const detail = serviceDetailBySlug(slug);
  if (!service || !detail) notFound();

  const related = detail.related
    .map((relatedSlug) => serviceBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.short,
    provider: { '@type': 'Organization', name: site.name, url: `https://${site.domain}` },
    url: `https://${site.domain}/services/${slug}`,
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: detail.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <main className="service-detail-page">
      <header className="service-hero">
        <div className="service-hero-copy">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">{service.name}</span>
          </nav>
          <p className="eyebrow">Specialist contract team</p>
          <h1>{service.name}</h1>
          <p className="service-lede">{service.short}</p>
          <p>{detail.problem}</p>
          <Link id={`cta-services-${service.slug}-bookcall`} className="button primary" href="/contact-us">Discuss this role</Link>
        </div>
        <div className="service-hero-image">
          <Image src={detail.heroImage} alt={detail.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 48vw" />
        </div>
      </header>

      <section className="service-audience service-section" aria-labelledby="audience-heading">
        <p className="eyebrow">Designed around accountable work</p>
        <div>
          <h2 id="audience-heading">Who this team supports</h2>
          <p>{detail.audience}</p>
        </div>
      </section>

      <section className="service-section service-scope" aria-labelledby="scope-heading">
        <div>
          <p className="eyebrow">The working boundary</p>
          <h2 id="scope-heading">Scope of work</h2>
          <p>The role begins with a documented queue, approved systems, and a named internal owner. The scope can expand only after the first handoff is stable and reviewable.</p>
        </div>
        <ul className="check-list">{detail.scope.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="service-section service-inputs" aria-labelledby="inputs-heading">
        <div className="section-kicker"><p className="eyebrow">Before work begins</p><h2 id="inputs-heading">Inputs</h2></div>
        <p>A useful engagement does not begin with a broad task list. It begins with the source material, authority, completion standard, and reviewer that make the work safe to hand off.</p>
        <dl>{detail.inputs.map((item, index) => <div key={item}><dt>{index + 1}</dt><dd>{item}</dd></div>)}</dl>
      </section>

      <section className="service-section workflow-section" aria-labelledby="workflow-heading">
        <p className="eyebrow">A visible handoff</p>
        <h2 id="workflow-heading">Workflow</h2>
        <div className="handoff-atlas">{detail.workflow.map((step) => <article key={step.title}><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div>
      </section>

      <section className="service-section deliverables-section" aria-labelledby="deliverables-heading">
        <div>
          <p className="eyebrow">Reviewable output</p>
          <h2 id="deliverables-heading">Deliverables</h2>
          <p>Outputs should let an internal reviewer understand what was completed, what evidence supports it, and what still needs a decision.</p>
        </div>
        <ul>{detail.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="service-section controls-grid">
        <div aria-labelledby="quality-heading">
          <p className="eyebrow">Evidence before acceptance</p>
          <h2 id="quality-heading">Quality controls</h2>
          <ul>{detail.qualityControls.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div aria-labelledby="boundaries-heading">
          <p className="eyebrow">Human authority stays visible</p>
          <h2 id="boundaries-heading">Decision boundaries</h2>
          <ul>{detail.boundaries.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="service-section scenarios-section" aria-labelledby="scenarios-heading">
        <p className="eyebrow">Where a focused role can begin</p>
        <h2 id="scenarios-heading">Common starting scenarios</h2>
        <div className="scenario-list">{detail.scenarios.map((scenario) => <article key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.copy}</p></article>)}</div>
      </section>

      <section className="service-section service-faq" aria-labelledby="faq-heading">
        <p className="eyebrow">Questions to resolve early</p>
        <h2 id="faq-heading">Frequently asked questions</h2>
        {detail.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
      </section>

      <section className="service-section related-services" aria-labelledby="related-heading">
        <div><p className="eyebrow">Build the right support mix</p><h2 id="related-heading">Related services</h2></div>
        <div>{related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug}><h3>{item.name}</h3><p>{item.short}</p><span>Explore this team</span></Link>)}</div>
      </section>

      <section className="service-closing">
        <p className="eyebrow">Start with one clear queue</p>
        <h2>{detail.ctaHeading}</h2>
        <p>Bring one recurring workflow and the person who owns its outcome. We will help you define a controlled first handoff.</p>
        <Link id={`cta-services-${service.slug}-consultation`} className="button primary" href="/contact-us">Plan a free consultation</Link>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }} />
    </main>
  );
}
