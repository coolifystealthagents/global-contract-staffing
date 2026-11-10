import { site } from './site';
import type { BlogPost, ResearchPost } from './types';
import { november06BlogPosts } from './november06-blog';
import { november06ResearchPosts } from './november06-research';
import { november05BlogPosts } from './november05-blog';
import { november05ResearchPosts } from './november05-research';
import { november03BlogPosts } from './november03-blog';
import { november04BlogPosts } from './november04-blog';
import { november09BlogPosts } from './november09-blog';
import { november10BlogPosts } from './november10-blog';
import { november08BlogPosts } from './november08-blog';
import { november07BlogPosts } from './november07-blog';
import { november02BlogPosts } from './november02-blog';
import { november01BlogPosts } from './november01-blog';
import { november03ResearchPosts } from './november03-research';
import { november04ResearchPosts } from './november04-research';
import { november09ResearchPosts } from './november09-research';
import { november10ResearchPosts } from './november10-research';
import { november08ResearchPosts } from './november08-research';
import { november07ResearchPosts } from './november07-research';
import { november02ResearchPosts } from './november02-research';
import { november01ResearchPosts } from './november01-research';
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

export const blogPosts: BlogPost[] = uniqueBySlug([...november09BlogPosts, ...november10BlogPosts, ...november08BlogPosts, ...november07BlogPosts, ...november06BlogPosts, ...november05BlogPosts, ...november02BlogPosts, ...november01BlogPosts, ...october28BlogPosts, ...october27BlogPosts, ...october22BlogPosts, ...october12BlogPosts, ...legacyBlogPosts]).sort((a,b)=>String(b.publishedAt).localeCompare(String(a.publishedAt)));
export const researchPosts: ResearchPost[] = uniqueBySlug([...november09ResearchPosts, ...november10ResearchPosts, ...november08ResearchPosts, ...november07ResearchPosts, ...november06ResearchPosts, ...november05ResearchPosts, ...november02ResearchPosts, ...november01ResearchPosts, ...october28ResearchPosts, ...october27ResearchPosts, ...october22ResearchPosts, ...october12ResearchPosts, ...legacyResearchPosts]).sort((a,b)=>String(b.publishedAt).localeCompare(String(a.publishedAt)));

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
