import type { Metadata } from 'next';
import { LeadForm } from '@/components/LeadForm';
import { site } from '@/lib/site';
export const metadata:Metadata={title:'Contact',description:`Request a free consultation with ${site.name}.`};
export default function ContactPage(){return <main><header className="page-hero"><p className="eyebrow">Free consultation</p><h1>Tell us where the work is getting stuck.</h1><p>Share the workflow, the pressure point, and the outcome your team needs. We will help you frame a practical support role.</p></header><section className="content-wrap contact-shell"><div><h2>A focused first conversation</h2><p>We will discuss the work, the current owner, the systems involved, and which decisions must stay with your team.</p><ul>{site.principles.map((item)=><li key={item}>{item}</li>)}</ul></div><div className="contact-card"><LeadForm source="contact-page-hero"/></div></section></main>}
