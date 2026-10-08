import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { ArrowIcon } from '@/components/Icons';
export const metadata: Metadata = { title: 'Specialist support services', description: `Explore remote support roles shaped for ${site.audience}.` };
export default function ServicesPage(){return <main><header className="page-hero"><p className="eyebrow">Services</p><h1>Specialist support for work that must stay organized.</h1><p>Choose a focused role, then define the systems, boundaries, and review points that make the handoff reliable.</p></header><section className="content-wrap content-grid">{site.services.map((service)=><Link className="content-card" href={`/services/${service.slug}`} key={service.slug}><h2>{service.name}</h2><p>{service.short}</p><span className="text-link">View role details <ArrowIcon/></span></Link>)}</section></main>}
