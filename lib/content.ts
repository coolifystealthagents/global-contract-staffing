import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { october12BlogPosts } from './october12Blog';
import { october12ResearchPosts } from './october12Research';
import { legacyBlogPosts, legacyResearchPosts } from './legacyEditorial';

export const blogPosts: BlogPost[] = [...october12BlogPosts, ...legacyBlogPosts];
export const researchPosts: ResearchPost[] = [...october12ResearchPosts, ...legacyResearchPosts];

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/research', label: 'Research' },
  { href: '/contact-us', label: 'Contact' },
];

export function serviceBySlug(slug: string) { return site.services.find((service) => service.slug === slug); }
export function blogBySlug(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function researchBySlug(slug: string) { return researchPosts.find((post) => post.slug === slug); }
