const windows = new Map<string, { count: number; resetAt: number }>();

export function requestAddress(headers: Headers): string {
  return headers.get('cf-connecting-ip')
    || headers.get('x-real-ip')
    || headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || 'unknown';
}

export function withinRateLimit(key: string, limit: number, windowMs: number, now = Date.now()): boolean {
  if (windows.size > 2_000) {
    for (const [candidate, value] of windows) if (value.resetAt <= now) windows.delete(candidate);
  }
  const current = windows.get(key);
  if (!current || current.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (current.count >= limit) return false;
  current.count += 1;
  return true;
}

export function hasAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    const originUrl = new URL(origin);
    const requestUrl = new URL(request.url);
    return originUrl.host === requestUrl.host && originUrl.protocol === requestUrl.protocol;
  } catch {
    return false;
  }
}

export function boundedText(form: FormData, name: string, max: number): string {
  const value = form.get(name);
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, max);
}
