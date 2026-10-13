export type Service = { slug: string; name: string; short: string; tasks: string[] };
export type BlogPost = { slug: string; title: string; description: string; category: string; publishedAt: string; readTime: string; thumbnail?: string; sections: { heading: string; paragraphs: string[] }[]; faq: { q: string; a: string }[]; internalService: string; internalSibling: string; source: { label: string; url: string } };
export type ResearchPost = { slug: string; title: string; summary: string; cluster: string; publishedAt: string; finding: string; thumbnail?: string; sections?: { heading: string; paragraphs: string[] }[]; sources: { label: string; url: string }[] };
export type SiteConfig = {
  name: string; domain: string; siteId: string; niche: string; audience: string; design: string;
  eyebrow: string; hero: string; heroAccent: string; heroBody: string; manifesto: string;
  primary: string; secondary: string; accent: string; canvas: string; ink: string;
  displayFont: string; bodyFont: string; heroImage: string; heroAlt: string;
  services: Service[]; categories: string[]; principles: string[]; sources: { label: string; url: string }[];
};
