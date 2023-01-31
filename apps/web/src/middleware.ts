/**
 * Middleware Route
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @see https://nextjs.org/docs/advanced-features/middleware
 */

import { NextRequest, NextResponse, userAgent } from 'next/server';
import { IS_DEV } from '@constants/env';
import { _COOKIE_CUSTOMER_TOKEN_ } from '@utils/commons/customerHelper';
const PUBLIC_FILE = /\.(.*)$/;
const ALLOWED_EXT = [
  'css',
  'ico',
  'jpg',
  'png',
  'jpeg',
  'webm',
  'gif',
  'ico',
  'tiff',
  'pdf',
  'xml',
  'rar',
  'zip',
  'woff2',
  'js',
  'json',
  'svg',
];

export async function middleware(request: NextRequest) {
  /**
   * Middleware for Multilanguage
   * https://nextjs.org/docs/advanced-features/i18n-routing#prefixing-the-default-locale
   * @solution https://github.com/vercel/next.js/discussions/18419
   */
  const getNextUrlPathname = request.nextUrl.pathname;
  const nextPath = getNextUrlPathname.startsWith('/_next');
  const nextApiPath = getNextUrlPathname.includes('/api/');
  const publicPath = PUBLIC_FILE.test(getNextUrlPathname);
  // check allowed ext here
  const ext = getNextUrlPathname.split('.').pop();
  // set default language here
  const locale = request.cookies.get('NEXT_LOCALE') || 'en'; // English Language by default
  // passed allowed here
  if (ext && ALLOWED_EXT.includes(ext)) return NextResponse.next();
  if (nextPath || nextApiPath || publicPath) return NextResponse.next();
  // force redirect to default language (escape default lang browser)
  if (request.nextUrl.locale === 'default') {
    return NextResponse.redirect(
      new URL(
        `/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`,
        request.url
      )
    );
  }
  /**
   * Check userAgent
   */
  const hostname = request.headers.get('host');
  const { device } = userAgent(request);
  /**
   * FIXME: [P1]
   * For now, If femaledaily.com visited from mobile devices
   * redirect to Download app landing page
   *
   * TODO:
   * we can redirect to spesific 'hostname' here
   * for exp by check (hostname === 'femaledaily.com')
   * and redirect with these line of code
   *  const url = request.nextUrl.clone();
   *  url.hostname = 'm.femaledaily.com'
   *  return NextResponse.redirect(url)
   */

  /**
   * FIXME: [P2]
   * Can be bleeding as complexity, try again to find
   * better logic here
   */

  // allowedAccess path on mobile
  const baseCurrentPath =
    getNextUrlPathname.split('/')[1].length > 1
      ? `/${getNextUrlPathname.split('/')[1]}/`
      : '';
  const allowedAccess = [
    '/download/',
    '/help-center/',
    '/knowledge-center/',
    '/about-fd/',
    '/about-ct-corp/',
    '/term-conditions/',
    '/privacy-policy/',
    '/return-refund/',
    '/delivery-information/',
    '/payment-method/',
    '/how-to-pay/',
    '/how-to-shop/',
  ];
  // TODO: disabled this when responsive web ready
  if (
    (device.type === 'mobile' || device.type === 'tablet') &&
    !allowedAccess.includes(baseCurrentPath)
  ) {
    // redirect to 'download' page
    return NextResponse.redirect(new URL(`/download/`, request.url));
  }
  /**
   * Have to login before access these pages
   */
  const hasToLoginPages = [
    '/account/order/',
    '/account/profile/',
    '/account/payment/',
    '/account/address/',
    '/account/issues/',
    '/account/wishlist/',
    '/account/notification/',
    '/account/coupon/',
  ];
  const serverCookie = request.cookies;
  const isUserLogin = serverCookie.get(_COOKIE_CUSTOMER_TOKEN_) || undefined;

  if (
    (hasToLoginPages.includes(getNextUrlPathname) ||
      hasToLoginPages.includes(baseCurrentPath)) &&
    isUserLogin === undefined
  ) {
    // redirect to 'login' page
    const loginUrl = new URL(`/login/`, request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  // don't delete this, useful for DEVELOPMENT and loaded middleware on console
  IS_DEV && console.log('[middleware.ts]', '[DEVICE]', device);
  IS_DEV && console.log('[middleware.ts]', '[FULL_PATH]', getNextUrlPathname);
  IS_DEV && console.log('[middleware.ts]', '[BASE_PATH]', baseCurrentPath);
}
