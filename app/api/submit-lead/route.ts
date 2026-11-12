import { NextResponse } from 'next/server';
import { boundedText, hasAllowedOrigin, requestAddress, withinRateLimit } from '../../../lib/request-security';

const personalDomains = new Set(['gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com','aol.com','proton.me','protonmail.com']);
const MAX_BODY_BYTES = 64 * 1024;
const responseHeaders = { 'cache-control': 'no-store' };
const reply = (body: { ok: boolean; message?: string }, status = 200) => NextResponse.json(body, { status, headers: responseHeaders });

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') || '';
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (!contentType.startsWith('multipart/form-data') && !contentType.startsWith('application/x-www-form-urlencoded')) {
    return reply({ ok: false, message: 'Unsupported request format.' }, 415);
  }
  if ((Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) || !hasAllowedOrigin(request)) {
    return reply({ ok: false, message: 'Request rejected.' }, contentLength > MAX_BODY_BYTES ? 413 : 403);
  }
  if (!withinRateLimit(`lead:${requestAddress(request.headers)}`, 8, 10 * 60_000)) {
    return reply({ ok: false, message: 'Too many requests. Please wait and try again.' }, 429);
  }

  let form: FormData;
  try { form = await request.formData(); }
  catch { return reply({ ok: false, message: 'We could not read your request.' }, 400); }
  if (boundedText(form, 'website_url', 200)) return reply({ ok: true });

  const source = boundedText(form, 'source', 80);
  const full = source.startsWith('contact-page');
  const firstName = boundedText(form, 'first_name', 80);
  const lastName = boundedText(form, 'last_name', 80);
  const legacyName = boundedText(form, 'name', 160);
  const email = boundedText(form, 'email', 254).toLowerCase();
  const phoneCountry = boundedText(form, 'phone_country', 12);
  const phone = boundedText(form, 'phone', 40);
  const company = boundedText(form, 'company', 160);
  const companySize = boundedText(form, 'company_size', 80);
  const positions = boundedText(form, 'positions_to_fill', 120);
  const referral = boundedText(form, 'referral_source', 120);
  const message = boundedText(form, 'message', 2_000);
  const pageUrl = boundedText(form, '_page_url', 500) || (request.headers.get('referer') || '').slice(0, 500);

  if (!/^\S+@\S+\.\S+$/.test(email) || (full ? (!firstName || !lastName || !company || !companySize || !positions || !referral) : !legacyName)) {
    return reply({ ok: false, message: 'Please complete every required field.' }, 400);
  }
  if (full && personalDomains.has(email.split('@')[1])) {
    return reply({ ok: false, message: 'Please use your business email address.' }, 400);
  }

  // Keep validation and anti-abuse checks here; ACR delivers the accepted lead once.
  return reply({ ok: true });
}
