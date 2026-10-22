import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Consultation booked',
  description: 'Your Global Contract Staffing consultation is booked. Prepare one recurring workflow for the discussion.',
  robots: { index: false, follow: false },
};

export default function NextPage() {
  return <main>
    <PageHero eyebrow="You are booked" title="Your consultation is on the calendar." copy="Bring one recurring workflow that needs a clearer owner, output, or review point. We will use it to keep the conversation practical." image="/images/pages/confirmation-atlas.svg" alt="A booked consultation atlas connecting workflow, owner, questions, and next step" />
    <section className="content-wrap preparation-list"><div><p className="eyebrow">Prepare without sending sensitive data</p><h2>Three useful things to bring</h2></div><ul><li><strong>The workflow:</strong> where work begins, how often it arrives, and which system contains the source record.</li><li><strong>The owner:</strong> who reviews the output, answers exceptions, and remains accountable for decisions.</li><li><strong>The standard:</strong> what complete looks like and what evidence the reviewer needs to accept the work.</li></ul><div className="hero-actions"><Link className="button primary" href="/services">Explore service roles</Link><Link className="quiet-link" href="/blog">Read practical guides</Link></div></section>
  </main>;
}
