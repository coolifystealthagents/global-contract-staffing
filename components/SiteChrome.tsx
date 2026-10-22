import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { PrimaryNavigation } from './PrimaryNavigation';

function ParentBrand({ className = '', label }: { className?: string; label: string }) {
  return (
    <a
      className={`parent-brand ${className}`.trim()}
      href="https://stealthagents.com"
      rel="noopener noreferrer"
    >
      <span>{label}</span>
      <Image
        src="/images/stealth-agents-logo-black.png"
        alt=""
        width={149}
        height={50}
      />
    </a>
  );
}

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <Image src="/logo.svg" alt="" width={42} height={42} priority />
          <span>{site.name}</span>
        </Link>
        <PrimaryNavigation />
        <ParentBrand className="header-parent-brand" label="Powered by StealthAgents" />
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand inverse" href="/" aria-label={`${site.name} home`}>
          <Image src="/logo.svg" alt="" width={44} height={44} />
          <span>{site.name}</span>
        </Link>
        <p>Specialist remote staff for {site.audience}.</p>
      </div>
      <div className="footer-navigation">
        <div className="footer-links">
          <PrimaryNavigation label="Footer primary navigation" />
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <ParentBrand className="footer-parent-brand" label="Powered by StealthAgents" />
      </div>
      <p className="copyright">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
