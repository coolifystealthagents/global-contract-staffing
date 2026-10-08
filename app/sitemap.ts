import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { blogPosts,researchPosts } from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{const base=`https://${site.domain}`;const staticRoutes=['','/about','/services','/contact-us','/blog','/research','/privacy','/terms'];return[...staticRoutes.map((path)=>({url:`${base}${path}`,lastModified:new Date('2026-10-08')})),...site.services.map((s)=>({url:`${base}/services/${s.slug}`,lastModified:new Date('2026-10-08')})),...blogPosts.map((p)=>({url:`${base}/blog/${p.slug}`,lastModified:new Date(p.publishedAt)})),...researchPosts.map((p)=>({url:`${base}/research/${p.slug}`,lastModified:new Date(p.publishedAt)}))]}
