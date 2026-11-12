import {notFound} from 'next/navigation';
import {ServiceDetail} from '../../inner-pages';
import d from '../../refresh-data.json';
export function generateStaticParams(){return d.services.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=d.services.find(x=>x.slug===slug);return s?{title:s.title,description:s.description,alternates:{canonical:'/services/'+slug},openGraph:{images:[{url:s.image,alt:s.alt}]}}:{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=d.services.find(x=>x.slug===slug);if(!s)notFound();return <><main id="main-content"><ServiceDetail content={s}/></main></>}
