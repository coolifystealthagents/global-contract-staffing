import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));
const sources = (files) => files.map(read).join('\n');

const topRoutes = ['app/page.tsx','app/about/page.tsx','app/services/page.tsx','app/blog/page.tsx','app/research/page.tsx','app/contact-us/page.tsx','app/privacy/page.tsx','app/terms/page.tsx'];

test('global chrome and contact path keep the approved conversion model', () => {
  const chrome = read('components/SiteChrome.tsx');
  const nav = read('components/PrimaryNavigation.tsx');
  const contact = read('app/contact-us/page.tsx');
  const layout = read('app/layout.tsx');
  assert.match(chrome, /Powered by StealthAgents/);
  assert.match(nav, /aria-current/);
  assert.doesNotMatch(layout, /LeadModal/);
  assert.match(contact, /<LeadForm/);
  assert.match(contact, /approvedReviews/);
  const reviews = read('lib/reviews.ts');
  assert.ok((reviews.match(/quote:/g) || []).length >= 10);
  assert.doesNotMatch(contact, /oncehub|iframe/i);
});

test('all service records have long-form controls, unique CTAs, and distinct illustrations', () => {
  const data = read('lib/service-details.ts');
  const page = read('app/services/[slug]/page.tsx');
  for (const field of ['scope','inputs','deliverables','qualityControls','boundaries','scenarios','faqs','heroImage','ctaHeading']) assert.match(data, new RegExp(field));
  for (const heading of ['Scope','Inputs','Deliverables','Controls','Decision boundaries','Scenarios','Frequently asked questions','Related services']) assert.match(page, new RegExp(heading, 'i'));
  const art = fs.readdirSync(path.join(root, 'public/images/services')).filter((name) => name.endsWith('.svg'));
  assert.equal(art.length, 6);
  assert.equal(new Set(art.map((name) => read(`public/images/services/${name}`))).size, 6);
});

test('blog and research use the accessible editorial shell', () => {
  const blog = read('app/blog/[slug]/page.tsx');
  const research = read('app/research/[slug]/page.tsx');
  const sidebar = read('components/ArticleSidebar.tsx');
  for (const source of [blog, research]) {
    assert.match(source, /ArticleSidebar/);
    assert.match(source, /ArticleHero/);
    assert.match(source, /aria-current="page"/);
    assert.match(source, /application\/ld\+json/);
    assert.match(source, /alternates:\s*\{\s*canonical/);
  }
  assert.match(sidebar, /<nav/);
  assert.match(sidebar, /<details/);
});

test('all primary routes have self canonicals and a prominent media-led opening', () => {
  const combined = sources(topRoutes);
  for (const canonical of ["'/'","'/about'","'/services'","'/blog'","'/research'","'/contact-us'","'/privacy'","'/terms'"]) assert.match(combined, new RegExp(`canonical: ${canonical.replace(/[\/]/g, '\\/')}`));
  for (const file of ['app/about/page.tsx','app/services/page.tsx','app/blog/page.tsx','app/research/page.tsx']) assert.match(read(file), /PageHero/);
  assert.match(read('components/Marketing.tsx'), /hero-visual/);
  assert.match(read('app/contact-us/page.tsx'), /stealth-agents-team-bacolod\.jpg/);
  for (const asset of ['about-atlas.svg','services-atlas.svg','blog-atlas.svg','research-atlas.svg','booking-atlas.svg','confirmation-atlas.svg','not-found-atlas.svg']) assert.ok(exists(`public/images/pages/${asset}`));
});

test('canonical host policy and security headers cover every response', () => {
  const config = read('next.config.mjs');
  const proxy = read('proxy.ts');
  const policy = read('lib/canonical-request.ts');
  for (const header of ['Content-Security-Policy','Strict-Transport-Security','X-Content-Type-Options','Referrer-Policy','Permissions-Policy','X-Frame-Options']) assert.match(config, new RegExp(header));
  assert.match(config, /poweredByHeader:\s*false/);
  assert.doesNotMatch(config, /unoptimized:\s*true/);
  assert.match(proxy, /NextResponse\.redirect\(destination, 308\)/);
  assert.match(policy, /globalcontractstaffing\.com/);
  assert.match(policy, /www\./);
  assert.match(policy, /forwardedProto/);
});

test('lead and telemetry boundaries limit body, origin, rate, and forwarded fields', () => {
  const lead = read('app/api/submit-lead/route.ts');
  const track = read('app/ingest/track/route.ts');
  const guards = read('lib/request-security.ts');
  for (const source of [lead, track]) {
    assert.match(source, /hasAllowedOrigin/);
    assert.match(source, /withinRateLimit/);
    assert.match(source, /no-store/i);
  }
  assert.match(lead, /MAX_BODY_BYTES/);
  assert.doesNotMatch(lead, /Object\.fromEntries\(form\.entries\(\)\)/);
  assert.match(track, /JSON\.parse/);
  assert.match(guards, /cf-connecting-ip/);
});

test('brand identity, registry, and conversion utilities are complete', () => {
  assert.equal(read('app/icon.svg'), read('public/logo.svg'));
  const registry = JSON.parse(read('design-registry.json'));
  assert.equal(registry.length, 1);
  assert.equal(registry[0].domain, 'globalcontractstaffing.com');
  assert.equal(registry[0].signatureElement, 'Handoff atlas connecting scope, ownership, review, and escalation');
  for (const file of ['app/thank-you/page.tsx','app/thanks-whats-next/page.tsx','app/not-found.tsx']) assert.match(read(file), /images\/pages/);
});

test('decorative numbering and generic placeholder language are absent', () => {
  const marketing = read('components/Marketing.tsx');
  assert.doesNotMatch(marketing, /service-number/);
  assert.doesNotMatch(marketing, /String\(index/);
  const publicPages = sources([...topRoutes,'components/Marketing.tsx']);
  assert.doesNotMatch(publicPages, /lorem ipsum|coming soon|placeholder/i);
});

test('atlas hero emphasis and responsive grids retain accessible styles', () => {
  const css = read('app/globals.css');
  assert.match(css, /\.design-atlas \.hero-copy em\{color:#90c8ff\}/);
  assert.match(css, /\.article-grid\{grid-template-columns:repeat\(3,minmax\(0,1fr\)\)\}/);
  assert.match(css, /\.content-grid\{grid-template-columns:repeat\(3,minmax\(0,1fr\)\)\}/);
  assert.match(css, /\.article-card,.content-card\{min-width:0\}/);
  assert.match(css, /\.article-card h2,.content-card h2\{overflow-wrap:anywhere\}/);
  assert.match(css, /\.research-method\{grid-template-columns:repeat\(4,minmax\(0,1fr\)\)\}/);
  assert.match(css, /\.research-method article\{min-width:0\}/);
  assert.match(css, /@media\(max-width:900px\)\{\.article-grid,.content-grid\{grid-template-columns:repeat\(2,minmax\(0,1fr\)\)\}\}/);
  assert.match(css, /@media\(max-width:700px\)[^\n]*\.article-grid,.content-grid\{grid-template-columns:minmax\(0,1fr\)\}/);
});

test('merged editorial collections keep the newest record for each route slug', () => {
  const content = read('lib/content.ts');
  assert.match(content, /function uniqueBySlug/);
  assert.match(content, /uniqueBySlug\(\[\.\.\.october22BlogPosts, \.\.\.october12BlogPosts, \.\.\.legacyBlogPosts\]\)/);
  assert.match(content, /uniqueBySlug\(\[\.\.\.october22ResearchPosts, \.\.\.october12ResearchPosts, \.\.\.legacyResearchPosts\]\)/);
  assert.doesNotMatch(read('lib/october22-blog.ts'), /\/services\/finance-administration-contract-team/);
});

test('legacy editorial records do not repeat long paragraphs across articles', () => {
  const content = read('lib/legacyEditorial.ts');
  const strings = [...content.matchAll(/["'`]([^"'`\n]{100,})["'`]/g)].map((match) => match[1]);
  const counts = new Map();
  for (const value of strings) counts.set(value, (counts.get(value) || 0) + 1);
  const duplicates = [...counts.entries()].filter(([, count]) => count > 1);
  assert.deepEqual(duplicates, [], `Repeated long editorial passages: ${duplicates.slice(0, 4).map(([, count]) => count).join(', ')}`);
});
