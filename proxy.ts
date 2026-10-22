import { type NextRequest, NextResponse } from 'next/server';
import { canonicalRedirect } from '@/lib/canonical-request';

export function proxy(request: NextRequest) {
  const destination = canonicalRedirect({
    host: request.headers.get('host'),
    forwardedProto: request.headers.get('x-forwarded-proto'),
    cfVisitor: request.headers.get('cf-visitor'),
    requestProtocol: request.nextUrl.protocol,
    pathname: request.nextUrl.pathname,
    search: request.nextUrl.search,
  });
  return destination ? NextResponse.redirect(destination, 308) : NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
