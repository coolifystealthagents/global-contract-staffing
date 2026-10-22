export const CANONICAL_HOST = 'globalcontractstaffing.com';

function visitorScheme(value: string | null): string | undefined {
  if (!value) return undefined;
  try {
    const parsed = JSON.parse(value) as { scheme?: unknown };
    return typeof parsed.scheme === 'string' ? parsed.scheme.toLowerCase() : undefined;
  } catch {
    return undefined;
  }
}

export function canonicalRedirect(input: {
  host: string | null;
  forwardedProto: string | null;
  cfVisitor: string | null;
  requestProtocol: string;
  pathname: string;
  search: string;
}): string | null {
  const host = (input.host || '').split(':')[0].toLowerCase();
  if (host !== CANONICAL_HOST && host !== `www.${CANONICAL_HOST}`) return null;
  const protocol = visitorScheme(input.cfVisitor)
    || input.forwardedProto?.split(',')[0]?.trim().toLowerCase()
    || input.requestProtocol.replace(':', '').toLowerCase();
  if (host === CANONICAL_HOST && protocol === 'https') return null;
  return `https://${CANONICAL_HOST}${input.pathname}${input.search}`;
}
