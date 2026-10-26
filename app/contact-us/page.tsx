import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { approvedReviews, STEALTH_AGENTS_REVIEW_SOURCE_URL } from '@/lib/reviews';
import { site } from '@/lib/site';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Talk with Global Contract Staffing about a focused, managed remote staffing role for your business.',
  alternates: { canonical: '/contact-us' },
};

const steps = [
  ['Workflow discovery', 'Map the recurring work, systems, owner, handoffs, service windows, and exceptions.'],
  ['Role design', 'Define a focused role with clear outputs, access, review, and escalation points.'],
  ['Candidate matching', 'Review remote professionals whose strengths fit the approved workflow and collaboration needs.'],
  ['Controlled launch', 'Begin with documented work, measured handoffs, and an accountable internal manager.'],
] as const;

const faqs = [
  ['What functions can global contract staff support?', 'Contract staff can support documented operations, customer queues, sales administration, finance preparation, research, and project coordination when authority and management are clear.'],
  ['Do you determine worker classification or local legal compliance?', 'No. Your qualified legal, tax, employment, immigration, payroll, and compliance advisers must determine lawful engagement, classification, contracts, benefits, registrations, and country specific obligations.'],
  ['Can we start with one role?', 'Yes. A focused role can test documentation, access, communication, management capacity, service windows, and quality before a broader team is added.'],
  ['How should we prepare for the consultation?', 'Bring the recurring workflows, current owners, systems, access limits, management capacity, and service standards without sensitive data.'],
] as const;

function ReviewCard({ review }: { review: (typeof approvedReviews)[number] }) {
  return (
    <article className="review-card">
      <div className="review-stars" aria-label="Five out of five stars">★★★★★</div>
      <blockquote>“{review.quote}”</blockquote>
      <p><strong>{review.name}</strong>{review.role ? <span>{review.role}</span> : null}</p>
    </article>
  );
}

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${site.name}`,
    url: `https://${site.domain}/contact-us`,
    description: 'Global contract staffing consultation.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${site.domain}` },
        { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `https://${site.domain}/contact-us` },
      ],
    },
  };

  return (
    <main className="contact-page">
      <section className="contact-first-fold" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p className="eyebrow">Contact Us</p>
          <h1 id="contact-title">Build the support role your team needs.</h1>
          <p className="contact-lede">Tell us where recurring work is taking time. We will use your details to prepare a focused staffing conversation.</p>
          <ul className="context-labels" aria-label="Consultation topics">
            <li>Documented workflows</li>
            <li>Clear role boundaries</li>
            <li>Managed support</li>
          </ul>
          <div className="reviews-heading">
            <a href={STEALTH_AGENTS_REVIEW_SOURCE_URL} rel="noopener noreferrer">StealthAgents reviews</a>
            <span>Verified first party feedback</span>
          </div>
          <div
            className="review-marquee"
            aria-label="Stealth Agents customer reviews. Scroll horizontally to read more reviews."
            tabIndex={0}
          >
            <div className="review-track">
              <div className="review-set">
                {approvedReviews.map((review) => <ReviewCard key={review.name} review={review} />)}
              </div>
              <div className="review-set" aria-hidden="true">
                {approvedReviews.map((review) => <ReviewCard key={`repeat-${review.name}`} review={review} />)}
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-card">
          <h2>Book a Free Consultation</h2>
          <p>Share business details only. Do not include credentials, personal records, customer data, contracts, or financial data.</p>
          <LeadForm source="contact-page-consultation" />
        </div>
      </section>

      <section className="contact-section team-proof">
        <div className="contact-container team-grid">
          <figure className="team-photo">
            <Image
              src="/images/stealth-agents-team-bacolod.jpg"
              alt="Stealth Agents team in Bacolod"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <figcaption>Official team, Bacolod</figcaption>
          </figure>
          <div className="managed-service-copy">
            <Image
              className="parent-logo"
              src="/images/stealth-agents-logo-black.png"
              alt="Stealth Agents"
              width={149}
              height={50}
            />
            <p className="eyebrow">Managed service support</p>
            <h2>A real team behind every working relationship.</h2>
            <p>Stealth Agents supports candidate matching and the ongoing service relationship. Your organization defines the work, systems, access, internal manager, approval rights, and quality standard.</p>
            <p>That structure keeps recurring work visible and gives exceptions a clear path back to the accountable person in your business.</p>
          </div>
        </div>
      </section>

      <section className="contact-section process-section">
        <div className="contact-container">
          <p className="eyebrow">A controlled path forward</p>
          <h2>After you reach out</h2>
          <div className="step-grid">
            {steps.map(([title, copy]) => (
              <article key={title} className="step-card"><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section prep">
        <div className="contact-container">
          <p className="eyebrow">Make the conversation specific</p>
          <h2>Prepare for a useful call</h2>
          <div className="prep-grid">
            <article><h3>Recurring work</h3><p>Group recurring operations, customer, sales, finance, research, project, and cross team workflows by function.</p></article>
            <article><h3>Current ownership</h3><p>Identify who performs, reviews, approves, manages, communicates, resolves, and escalates each workflow.</p></article>
            <article><h3>Systems and access</h3><p>List approved tools, data classes, account owners, and least privilege access without sharing credentials.</p></article>
            <article><h3>Service standard</h3><p>Define timely, accurate, documented, secure, and reviewable completion for each queue.</p></article>
          </div>
        </div>
      </section>

      <section className="contact-section boundaries">
        <div className="contact-container narrow">
          <p className="eyebrow">Accountability stays clear</p>
          <h2>Responsibility and boundaries</h2>
          <p>Contract staff can prepare, coordinate, document, update authorized systems, communicate from approved guidance, and flag exceptions. They do not make licensed or executive decisions, provide legal or tax advice, determine worker classification, sign contracts, move money, hire or terminate personnel, override compliance controls, or act outside approved authority.</p>
          <p>Your organization and qualified advisers retain responsibility for worker classification, employment and contractor law, immigration, payroll, tax, sanctions, benefits, contracts, privacy, security, regulated work, supervision, performance management, and executive decisions in every relevant jurisdiction.</p>
        </div>
      </section>

      <section className="contact-section starting-points">
        <div className="contact-container">
          <p className="eyebrow">Explore focused support</p>
          <h2>Common starting points</h2>
          <div className="path-grid">
            <Link href="/services/operations-contract-team"><h3>Operations contract team</h3><p>Support repeatable operational queues with clear ownership.</p></Link>
            <Link href="/services/customer-support-contract-team"><h3>Customer support contract team</h3><p>Handle approved service workflows with documented escalation.</p></Link>
            <Link href="/services/sales-support-contract-team"><h3>Sales support contract team</h3><p>Prepare research, CRM, scheduling, and follow through operations.</p></Link>
            <Link href="/services/finance-admin-contract-team"><h3>Finance administration contract team</h3><p>Prepare routine finance records for accountable review.</p></Link>
          </div>
          <Link className="text-link all-services" href="/services">View the full services collection</Link>
        </div>
      </section>

      <section className="contact-section faq">
        <div className="contact-container narrow">
          <p className="eyebrow">Global contract staffing questions</p>
          <h2>Frequently asked questions</h2>
          {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
