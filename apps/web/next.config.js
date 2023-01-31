/**
 * TODO: not implement yet
 * 1. Meta SEO
 * 2. I18n
 * 3. XXS Security
 * 4. Sitemap XML
 */

/** @type {import('next').NextConfig}  */
const path = require('path');
const headers = require('./headers.config');
const webpack = require('./webpack.config');
const nextConfig = {
  headers,
  webpack,
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  output: 'standalone',
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'media-fd-stg.setoko-test.com',
      'fd-stg.setoko-test.com',
      'media-fd-dev.setoko-test.com',
      'magento.femaledaily.com',
      'magento.femaledaily.net',
      'image.femaledaily.com',
      'chart.googleapis.com',
      'images.soco.id',
      'image.femaledaily.com',
      'cdn.siftandpick.com',
      'www.soco.id',
      'images.tokopedia.net',
    ],
  },
  experimental: {
    appDir: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
    transpilePackages: ['ui'],
  },
  // i18n: {
  //   locales: ['default', 'id', 'en'],
  //   defaultLocale: 'default',
  //   localeDetection: false,
  // },
  trailingSlash: true,
};
module.exports = nextConfig;
// Don't delete these console.log, useful to see the config in CI/CD pipeline
console.log('[next.config.js]', JSON.stringify(module.exports, null, 2));
