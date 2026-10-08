'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { site } from '@/lib/site';
import { nav } from '@/lib/content';
import { LeadForm } from './LeadForm';
import { ArrowIcon } from './Icons';

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><Image src="/logo.svg" alt="" width={42} height={42} /><span>{site.name}</span></Link><nav aria-label="Primary navigation">{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><Link id="cta-global-header-bookcall" className="button compact" href="/contact-us">Book a free call <ArrowIcon /></Link></header>;
}
export function Footer() {
  return <footer><div><Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link><p>Specialist remote staff for {site.audience}.</p></div><div className="footer-links">{nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div><p className="copyright">© {new Date().getFullYear()} {site.name}</p></footer>;
}
export function TimedLeadModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => { if (sessionStorage.getItem('lead-modal-seen')) return; const timer = window.setTimeout(() => { sessionStorage.setItem('lead-modal-seen', 'true'); setOpen(true); }, 8000); return () => clearTimeout(timer); }, []);
  useEffect(() => { const key = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false); window.addEventListener('keydown', key); return () => window.removeEventListener('keydown', key); }, []);
  if (!open) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setOpen(false)} aria-label="Close form">×</button><p className="eyebrow">A calmer next step</p><h2 id="modal-title">Tell us what is taking too much of your day.</h2><p>We will help you map the right support role in a free consultation.</p><LeadForm source="timed-modal" /></section></div>;
}
