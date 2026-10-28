import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { october12BlogPosts } from './october12Blog';
import { october12ResearchPosts } from './october12Research';
import { october22BlogPosts } from './october22-blog';
import { october22ResearchPosts } from './october22-research';
import { october27BlogPosts } from './october27-blog';
import { october28BlogPosts } from './october28-blog';
import { october27ResearchPosts } from './october27-research';
import { october28ResearchPosts } from './october28-research';
import { legacyBlogPosts, legacyResearchPosts } from './legacyEditorial';

function uniqueBySlug<T extends { slug: string }>(posts: T[]): T[] {
  const seen = new Set<string>();
  return posts.filter((post) => {
    if (seen.has(post.slug)) return false;
    seen.add(post.slug);
    return true;
  });
}

export const blogPosts: BlogPost[] = uniqueBySlug([...october28BlogPosts, ...october27BlogPosts, ...october22BlogPosts, ...october12BlogPosts, ...legacyBlogPosts]).sort((a,b)=>String(b.publishedAt).localeCompare(String(a.publishedAt)));
export const researchPosts: ResearchPost[] = uniqueBySlug([...october28ResearchPosts, ...october27ResearchPosts, ...october22ResearchPosts, ...october12ResearchPosts, ...legacyResearchPosts]).sort((a,b)=>String(b.publishedAt).localeCompare(String(a.publishedAt)));

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
