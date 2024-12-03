import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n/settings';


export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname;
    console.info(pathname, 'pathname middleware')
    // Check if the pathname starts with a locale
    const pathnameHasLocale = locales.some(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
  
    if (pathnameHasLocale) return;
  
    // Redirect if there is no locale
    const locale = request.cookies.get('NEXT_LOCALE')?.value || defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;

    console.log(locale, 'locale middleware')
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    // Match only internationalized pathnames
    matcher: [
        '/((?!_next).*)',
    ]
  };