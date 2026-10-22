import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFile(new URL(path, root), 'utf8');

const routeFiles = [
  'app/page.tsx',
  'app/about/page.tsx',
  'app/services/page.tsx',
  'app/services/[slug]/page.tsx',
  'app/contact-us/page.tsx',
  'app/blog/page.tsx',
  'app/blog/[slug]/page.tsx',
  'app/research/page.tsx',
  'app/research/[slug]/page.tsx',
  'app/thank-you/page.tsx',
  'app/thanks-whats-next/page.tsx',
];

test('global chrome uses the required sticky navigation and parent attribution', async () => {
  const chrome = await read('components/SiteChrome.tsx');
  const navigation = await read('components/PrimaryNavigation.tsx');
  assert.match(navigation, /Home/);
  assert.match(navigation, /Services/);
  assert.match(navigation, /Contact Us/);
  assert.match(navigation, /usePathname/);
  assert.match(navigation, /aria-current/);
  assert.equal((chrome.match(/Powered by StealthAgents/g) || []).length, 2);
  assert.doesNotMatch(chrome, /TimedLeadModal/);
});

test('contact page implements the form-first conversion and approved trust section', async () => {
  const contact = await read('app/contact-us/page.tsx');
  assert.match(contact, /StealthAgents reviews/);
  assert.match(contact, /Official team, Bacolod/);
  assert.match(contact, /stealth-agents-team-bacolod/);
  assert.match(contact, /stealth-agents-logo-black/);
  assert.doesNotMatch(contact, /oncehub|booking-frame|consultation-calendar/i);
});

test('approved StealthAgents review collection has at least ten unique records', async () => {
  const reviews = await read('lib/reviews.ts');
  const quotes = [...reviews.matchAll(/quote:\s*['"`]([^'"`]+)['"`]/g)].map((match) => match[1]);
  assert.ok(quotes.length >= 10, `expected at least 10 reviews, found ${quotes.length}`);
  assert.equal(new Set(quotes).size, quotes.length, 'review quotes must be unique');
  assert.match(reviews, /https:\/\/stealthagents\.com/);
});

test('every service route uses the long-form service system and a unique hero', async () => {
  const servicePage = await read('app/services/[slug]/page.tsx');
  for (const heading of ['Who this team supports', 'Scope of work', 'Inputs', 'Deliverables', 'Quality controls', 'Decision boundaries', 'Common starting scenarios', 'Frequently asked questions', 'Related services']) {
    assert.match(servicePage, new RegExp(heading, 'i'));
  }
  const details = await read('lib/service-details.ts');
  assert.equal((details.match(/heroImage:/g) || []).length, 6);
  const heroes = [...details.matchAll(/heroImage:\s*['"`]([^'"`]+)['"`]/g)].map((match) => match[1]);
  assert.equal(new Set(heroes).size, 6);
});

test('blog and research articles share a populated sticky TOC sidebar', async () => {
  const sidebar = await read('components/ArticleSidebar.tsx');
  assert.match(sidebar, /IntersectionObserver/);
  assert.match(sidebar, /On this page/);
  assert.match(sidebar, /Related reading/);
  assert.match(sidebar, /aria-current/);
  for (const path of ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx']) {
    const page = await read(path);
    assert.match(page, /ArticleSidebar/);
    assert.match(page, /article-layout/);
  }
});

test('main route families expose intentional hero imagery', async () => {
  for (const path of routeFiles) {
    const source = await read(path);
    assert.match(source, /Image|ArticleHero|SchedulerEmbed|heroImage/, `${path} needs a rendered image treatment`);
  }
});

test('canonical metadata, security headers, and consistent brand assets are configured', async () => {
  const layout = await read('app/layout.tsx');
  assert.doesNotMatch(layout, /alternates:\s*\{\s*canonical:\s*['"]\/['"]/);
  const config = await read('next.config.mjs');
  for (const header of ['Content-Security-Policy', 'Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) {
    assert.match(config, new RegExp(header));
  }
  await access(new URL('app/icon.svg', root));
  const icon = await read('app/icon.svg');
  const logo = await read('public/logo.svg');
  assert.equal(icon.trim(), logo.trim());
});

test('design registry records the site fingerprint', async () => {
  const registry = JSON.parse(await read('design-registry.json'));
  const record = registry.find((item) => item.domain === 'globalcontractstaffing.com');
  assert.ok(record);
  for (const key of ['industry', 'audience', 'designFamily', 'heroComposition', 'typeCharacter', 'paletteFamily', 'shapeGrammar', 'imageTreatment', 'sectionRhythm', 'navigationTreatment', 'motionSignature', 'density', 'signatureElement']) {
    assert.ok(record[key], `missing ${key}`);
  }
});

test('visible source copy avoids forbidden dash punctuation and decorative labels', async () => {
  const files = await Promise.all(routeFiles.concat(['components/SiteChrome.tsx', 'components/Marketing.tsx', 'lib/site.ts']).map(async (path) => [path, await read(path)]));
  for (const [path, source] of files) {
    assert.doesNotMatch(source, /[–—]/, `${path} contains a forbidden dash`);
    assert.doesNotMatch(source, />\s*0[1-9]\s*</, `${path} contains decorative zero-padded labels`);
  }
});
