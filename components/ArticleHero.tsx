import Image from 'next/image';

export function ArticleHero({ image, alt }: { image?: string; alt: string }) {
  if (image) {
    return (
      <div className="article-hero-media">
        <Image src={image} alt={alt} fill priority sizes="(max-width: 900px) 90vw, 46vw" />
      </div>
    );
  }

  return (
    <div className="article-hero-media article-hero-atlas" role="img" aria-label={alt}>
      <span className="atlas-line atlas-line-one" />
      <span className="atlas-line atlas-line-two" />
      <span className="atlas-node atlas-node-one">Scope</span>
      <span className="atlas-node atlas-node-two">Handoff</span>
      <span className="atlas-node atlas-node-three">Review</span>
      <span className="atlas-node atlas-node-four">Escalate</span>
    </div>
  );
}
