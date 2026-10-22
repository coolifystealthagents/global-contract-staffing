import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return <main className="not-found not-found-branded"><div><p className="eyebrow">Page not found</p><h1>That route is not on this atlas.</h1><p>The address may have changed, or the page may no longer be public. Continue with a primary destination.</p><div className="hero-actions"><Link className="button primary" href="/">Return home</Link><Link className="quiet-link" href="/services">Explore services</Link><Link className="quiet-link" href="/contact-us">Contact Us</Link></div></div><div className="not-found-media"><Image src="/images/pages/not-found-atlas.svg" alt="A route recovery atlas connecting home, services, contact, and return paths" fill sizes="(max-width: 900px) 90vw, 45vw" /></div></main>;
}
