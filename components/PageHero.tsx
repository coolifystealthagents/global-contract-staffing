import Image from 'next/image';
import type { ReactNode } from 'react';

export function PageHero({ eyebrow, title, copy, image, alt, children }: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-hero page-hero-with-media">
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        {children}
      </div>
      <div className="page-hero-media">
        <Image src={image} alt={alt} fill priority sizes="(max-width: 900px) 90vw, 46vw" />
      </div>
    </header>
  );
}
