import type { Metadata } from 'next';
import { HomePage } from '@/components/Marketing';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/', images: [{ url: '/hero.png', alt: 'Global contract staffing handoff atlas' }] },
};

export default function Page() { return <HomePage />; }
