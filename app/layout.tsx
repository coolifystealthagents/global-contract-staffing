import type { Metadata } from 'next';
import Script from 'next/script';
import { Header, Footer, TimedLeadModal } from '@/components/SiteChrome';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} | Specialist remote staff`, template: `%s | ${site.name}` },
  description: site.heroBody,
  openGraph: { type: 'website', siteName: site.name, images: ['/hero.png'] },
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-design={site.design}><body style={{ '--primary': site.primary, '--secondary': site.secondary, '--accent': site.accent, '--canvas': site.canvas, '--ink': site.ink, '--display': site.displayFont, '--body': site.bodyFont } as React.CSSProperties}><Header />{children}<Footer /><TimedLeadModal /><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'${site.siteId}',endpoint:'/ingest/track',debug:false};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" /></body></html>;
}
