#!/usr/bin/env python3
import json, os, re, sys, urllib.request, xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright

BASE = os.environ.get('QA_BASE', 'http://127.0.0.1:3100')
OUT = Path(os.environ.get('QA_OUT', 'artifacts/rendered-qa'))
OUT.mkdir(parents=True, exist_ok=True)

xml = urllib.request.urlopen(f'{BASE}/sitemap.xml', timeout=10).read()
root = ET.fromstring(xml)
routes = [urlparse(node.text).path or '/' for node in root.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
expected = {'/','/about','/services','/blog','/research','/contact-us','/privacy','/terms'}
assert expected.issubset(routes), f'missing primary routes: {sorted(expected-set(routes))}'
assert len(routes) == len(set(routes)), 'duplicate sitemap routes'

viewports = [(360, 800), (768, 900), (1440, 1000)]
representatives = {
  '/', '/about', '/services', '/services/operations-contract-team', '/blog',
  '/blog/fractional-coo-vs-global-contract-team', '/research',
  '/research/operations-contract-team-workflow-boundary-review-1', '/contact-us',
}
results = {'base': BASE, 'sitemap_routes': len(routes), 'viewports': {}, 'representative_screenshots': [], 'form_validation': {}, 'failures': []}

with sync_playwright() as p:
    launch_options = {'headless': True}
    if os.environ.get('PLAYWRIGHT_CHROMIUM_EXECUTABLE'):
        launch_options['executable_path'] = os.environ['PLAYWRIGHT_CHROMIUM_EXECUTABLE']
    browser = p.chromium.launch(**launch_options)
    for width, height in viewports:
        context = browser.new_context(viewport={'width': width, 'height': height}, reduced_motion='reduce')
        page = context.new_page()
        failures = []
        console_errors = []
        page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)
        page.on('pageerror', lambda exc: console_errors.append(str(exc)))
        titles = {}
        for route in routes:
            response = page.goto(BASE + route, wait_until='networkidle', timeout=30000)
            status = response.status if response else 0
            metrics = page.evaluate('''() => {
              const header = document.querySelector('.site-header');
              const h1 = document.querySelectorAll('main h1');
              const images = [...document.images];
              const main = document.querySelector('main');
              return {
                width: document.documentElement.scrollWidth,
                client: document.documentElement.clientWidth,
                h1: h1.length,
                title: document.title,
                canonical: document.querySelector('link[rel="canonical"]')?.href || '',
                description: document.querySelector('meta[name="description"]')?.content || '',
                brokenImages: images.filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.currentSrc || img.src),
                headerBottom: header?.getBoundingClientRect().bottom || 0,
                mainTop: main?.getBoundingClientRect().top || 0,
                parentText: document.body.innerText.includes('Powered by StealthAgents'),
                nav: [...document.querySelectorAll('.site-header nav a')].map((a) => a.textContent.trim()),
              };
            }''')
            expected_canonical = 'https://globalcontractstaffing.com' + ('' if route == '/' else route)
            route_fail = []
            if status != 200: route_fail.append(f'status={status}')
            if metrics['width'] > metrics['client'] + 1: route_fail.append(f'overflow={metrics["width"]-metrics["client"]}px')
            if metrics['h1'] != 1: route_fail.append(f'h1={metrics["h1"]}')
            canonical = metrics['canonical'].rstrip('/') if route == '/' else metrics['canonical']
            if canonical != expected_canonical: route_fail.append(f'canonical={metrics["canonical"]}')
            if not metrics['description']: route_fail.append('missing description')
            if metrics['brokenImages']: route_fail.append(f'broken images={metrics["brokenImages"]}')
            if not metrics['parentText']: route_fail.append('missing parent attribution')
            if metrics['nav'] != ['Home','Services','Contact Us']: route_fail.append(f'nav={metrics["nav"]}')
            if route in titles: route_fail.append('duplicate route encountered')
            titles[route] = metrics['title']
            if route_fail: failures.append({'route': route, 'issues': route_fail})
            if route in representatives:
                slug = 'home' if route == '/' else route.strip('/').replace('/','--')
                target = OUT / f'{slug}-{width}.png'
                page.screenshot(path=str(target), full_page=True)
                results['representative_screenshots'].append(str(target.resolve()))
        if console_errors:
            failures.append({'route': '*', 'issues': sorted(set(console_errors))[:20]})
        results['viewports'][str(width)] = {'routes': len(routes), 'failures': failures}
        results['failures'].extend([{'viewport': width, **failure} for failure in failures])
        context.close()

    context = browser.new_context(viewport={'width': 768, 'height': 900})
    page = context.new_page()
    page.goto(BASE + '/contact-us', wait_until='networkidle')
    values = {
      'first_name': 'QA', 'last_name': 'Reviewer', 'email': 'qa-review@gmail.com',
      'phone': '5550100', 'company': 'QA Review Only', 'message': 'Validation check only',
    }
    for name, value in values.items():
        locator = page.locator(f'[name="{name}"]')
        if locator.count(): locator.fill(value)
    for name in ['positions_to_fill','company_size','referral_source']:
        locator = page.locator(f'[name="{name}"]')
        if locator.count(): locator.select_option(index=1)
    page.locator('form button[type="submit"]').click()
    page.wait_for_timeout(200)
    error_text = page.locator('[role="alert"], .form-error').all_inner_texts()
    body_text = page.locator('body').inner_text()
    blocked = 'Please use your business email address.' in body_text
    results['form_validation'] = {'personal_email_blocked_client_side': blocked, 'error_nodes': error_text}
    if not blocked: results['failures'].append({'viewport': 768, 'route': '/contact-us', 'issues': ['personal email was not blocked client-side']})
    context.close()
    browser.close()

report = OUT / 'report.json'
report.write_text(json.dumps(results, indent=2))
print(json.dumps({'routes': len(routes), 'viewport_route_checks': len(routes)*len(viewports), 'screenshots': len(results['representative_screenshots']), 'form_validation': results['form_validation'], 'failures': results['failures'], 'report': str(report.resolve())}, indent=2))
sys.exit(1 if results['failures'] else 0)
