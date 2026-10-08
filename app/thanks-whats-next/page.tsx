import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata:Metadata={title:'What happens next',robots:{index:false,follow:false}};
export default function NextPage(){return <main><section className="not-found"><div><p className="eyebrow">You are booked</p><h1>Here is what happens next.</h1><p>Bring one recurring workflow that needs a clearer owner, output, or review point. We will use it to make the conversation practical.</p><Link className="button primary" href="/blog">Read practical guides</Link></div></section></main>}
