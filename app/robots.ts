import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
export default function robots():MetadataRoute.Robots{return{rules:[{userAgent:'*',allow:'/',disallow:['/*?utm_*','/*?ref=*','/*?gclid=*','/thank-you','/thanks-whats-next']}],sitemap:`https://${site.domain}/sitemap.xml`,host:`https://${site.domain}`}}
