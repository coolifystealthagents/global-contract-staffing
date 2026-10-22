'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const primaryNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact-us' },
] as const;

export function PrimaryNavigation({ className = '', label = 'Primary navigation' }: { className?: string; label?: string }) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label={label}>
      {primaryNavigation.map((item) => {
        const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
        return (
          <Link key={item.href} href={item.href} aria-current={active ? 'page' : undefined}>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
