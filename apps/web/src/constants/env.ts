/** Process ENV */
export const REVALIDATE_KEY = process.env.REVALIDATE_KEY as string;
export const FEMALEDAILY_API_KEY = process.env.FEMALEDAILY_API_KEY as string;

/** NEXT_PUBLIC Process ENV */
export const APP_ENVIRONMENT =
  process.env.NEXT_PUBLIC_APP_ENVIRONMENT || ('production' as string);

export const CORE_URL = process.env.NEXT_PUBLIC_CORE_URL as string;
export const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string;
export const GRAPHQL_SCHEMA = process.env.NEXT_PUBLIC_GRAPHQL_SCHEMA as string;
export const FD_SSO_URL = process.env.NEXT_PUBLIC_FD_SSO_URL as string;

/** Custom ENV */
export const IS_DEV = APP_ENVIRONMENT !== ('production' as string);

/* Site Information */
export const SITE_NAME = 'FemaleDaily Studio' as string;
export const SITE_SHORTNAME = 'FD Studio' as string;
export const SITE_TAGLINE = 'Indonesia’s No.1 Beauty Destionation' as string;
export const PRODUCTION_URL = process.env.NEXT_PUBLIC_PRODUCTION_URL as string;
export const BASE_URL = (
  IS_DEV ? 'http://localhost:3000' : PRODUCTION_URL
) as string;
export const AUTH_URL = `${BASE_URL}/callback/auth` as string;
export const DEFAULT_LOCALE = 'id' as string;
export const ANALYTICS_ID = '' as string;
export const BLOG_PAGINATION_LIMIT = 6 as number;
export const DOWNLOAD_APP = {
  ANDROID: {
    URL: 'https://play.google.com' as string,
    INFO: 'Download FemaleDaily Now on Android!' as string,
  },
  IOS: {
    URL: 'https://apps.apple.com/us/app/itunes-store/id915061235' as string,
    INFO: 'Download FemaleDaily Now on iOS!' as string,
  },
};

/* Social Media */
export const SOCMED = {
  INSTAGRAM: {
    URL: 'https://www.instagram.com' as string,
    INFO: 'FD Studio’s Instagram' as string,
  },
  FACEBOOK: {
    URL: 'https://www.facebook.com' as string,
    INFO: 'FD Studio’s Facebook' as string,
  },
  TWITTER: {
    URL: 'https://www.twitter.com' as string,
    INFO: 'FD Studio’s Twitter' as string,
  },
  YOUTUBE: {
    URL: 'https://www.youtube.com' as string,
    INFO: 'FD Studio’s YouTube' as string,
  },
};

/* Author Information */
export const AUTHOR_NAME = 'CTCD Engineering.' as string;
export const AUTHOR_EMAIL = 'ctcd.engineering@ctcorpdigital.com' as string;

/* google maps key */
export const GOOGLE_MAP_FD_KEY = process.env.NEXT_PUBLIC_GOOGLE_KEY as string;
export const DISTRICT_URL = process.env.NEXT_PUBLIC_DISTRICT_URL as string;
