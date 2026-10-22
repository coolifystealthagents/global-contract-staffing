import { type NextRequest } from 'next/server';
import { hasAllowedOrigin, requestAddress, withinRateLimit } from '../../../lib/request-security';

const TRACKING_API = 'https://acrtracking.stealthagents.us/api/track';
const MAX_BODY_BYTES = 256_000;
export const runtime = 'nodejs';

const error = (detail: string, status: number) => Response.json({ status: 'error', detail }, { status, headers: { 'Cache-Control': 'no-store' } });

export async function POST(request: NextRequest) {
  try {
    const declaredLength = Number(request.headers.get('content-length') || '0');
    if (declaredLength > MAX_BODY_BYTES) return error('Payload too large', 413);
    if (!hasAllowedOrigin(request)) return error('Origin not allowed', 403);
    const clientIp = requestAddress(request.headers);
    if (!withinRateLimit(`track:${clientIp}`, 180, 60_000)) return error('Too many requests', 429);

    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) return error('Payload too large', 413);
    let event: unknown;
    try { event = JSON.parse(body); }
    catch { return error('Invalid JSON', 400); }
    if (!event || typeof event !== 'object' || Array.isArray(event)) return error('Invalid event', 400);

    const upstream = await fetch(TRACKING_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': (request.headers.get('user-agent') || '').slice(0, 500),
        'Accept-Language': (request.headers.get('accept-language') || '').slice(0, 200),
        'X-Forwarded-For': clientIp,
        'X-ACR-Client-IP': clientIp,
      },
      body: JSON.stringify(event),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    return new Response(await upstream.text(), {
      status: upstream.status,
      headers: {
        'Content-Type': upstream.headers.get('content-type') || 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } catch {
    return error('Upstream unavailable', 502);
  }
}
