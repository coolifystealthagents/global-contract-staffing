'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type TocItem = { id: string; label: string };
type RelatedItem = { href: string; label: string; meta?: string };

export function ArticleSidebar({ items, related }: { items: TocItem[]; related: RelatedItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: [0, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const navigation = (
    <>
      <nav aria-label="On this page">
        <p className="article-sidebar-label">On this page</p>
        <ol className="article-toc-list">
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      {related.length > 0 && (
        <div className="article-related">
          <p className="article-sidebar-label">Related reading</p>
          {related.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.meta && <span>{item.meta}</span>}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );

  return (
    <aside className="article-sidebar" aria-label="Article navigation">
      <div className="article-sidebar-desktop">{navigation}</div>
      <details className="article-sidebar-mobile">
        <summary>Article navigation</summary>
        {navigation}
      </details>
    </aside>
  );
}
