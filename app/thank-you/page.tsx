import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Choose a consultation time',
  description: 'Choose a time for your Global Contract Staffing consultation.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <main>
    <PageHero eyebrow="Request received" title="Thanks. Pick a time that works for you." copy="Your consultation can turn one recurring workflow into a clear support brief. Choose a time below without sharing sensitive records." image="/images/pages/booking-atlas.svg" alt="A consultation calendar atlas connecting the received request, preparation, and meeting">
      <Link className="quiet-link" href="/services">Review services while you prepare</Link>
    </PageHero>
    <section className="content-wrap booking-section" aria-labelledby="booking-heading"><div><p className="eyebrow">Next step</p><h2 id="booking-heading">Choose your consultation time</h2><p>The scheduler is provided by OnceHub. Selecting a time does not require you to upload workflow records, customer data, credentials, or financial information.</p></div><iframe className="booking-frame" title="Book your consultation with Stealth Agents" src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1" loading="lazy" /></section>
  </main>;
}
