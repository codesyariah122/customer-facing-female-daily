const withCacheControl = (params = []) => [
  {
    key: 'Cache-Control',
    value: 'public, max-age=31536000, immutable',
  },
  ...params,
];

/** @see https://nextjs.org/docs/api-reference/next.config.js/headers */
function headers() {
  return [
    {
      source: '/fonts/(.*)',
      headers: withCacheControl(),
    },
    {
      source: '/images/(.*)',
      headers: withCacheControl(),
    },
    {
      source: '/banners/(.*)',
      headers: withCacheControl(),
    },
    {
      source: '/fonts/(.*)',
      headers: withCacheControl(),
    },
    {
      source: '/icons/(.*)',
      headers: withCacheControl(),
    },
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
      ],
    },
  ];
}

module.exports = headers;
