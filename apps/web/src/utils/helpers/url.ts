/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @license Proprietary
 * @package utils/helpers/url
 */

import { AUTH_URL, CORE_URL, FD_SSO_URL } from '@constants/env';

/**
 * check if url is valid
 * @param val - value to be checked
 * @returns {boolean} - true/false validation URL
 */
export const isURL = (val: string): boolean => {
  const expression = /^(http:\/\/|https:\/\/)(?=.*[a-z0-9])/i;
  return expression.test(val);
};

/**
 * Sanitize URL
 * @param url - url to be sanitize
 * @returns {string} - sanitized url
 */
export const sanitizeURL = (url: string): string => {
  const [scheme] = url.split('://');
  const result = url
    .replace(/(http:\/\/|https:\/\/)/, '')
    .replace(/\/+/g, '/')
    .replace(/\/+$/, '');
  return scheme.includes('http') ? `${scheme}://${result}` : result;
};

/**
 * Parse query string to object query
 * @param url - url to be parsed
 * @returns {Record<string, string>} - object parsed url
 */
export const parseQuery = (url: string): Record<string, string> => {
  const query = url.split('?')[1];
  return query
    ? query.split('&').reduce((acc, item) => {
        const [key, value] = item.split('=');
        acc[key] = value;
        return acc;
      }, {} as Record<string, string>)
    : {};
};

/**
 * encode Query Param
 * @param data <array object>
 * @returns {string | undefined}
 */
export const encodeQueryData = (data?: any): string | undefined => {
  const ret = [];
  if (data) {
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    return ret.join('&');
  }
};

/**
 * prepareFdSsoLoginUrl
 * @param currentUrl set as window.location.href or other URL
 * @param guestId get from guestId (uuidV4 format)
 * @returns {string | boolean} generate SSO URL or FALSE if failed to generate
 */
export const prepareFdSsoLoginUrl = (currentUrl: string): string => {
  return (
    currentUrl &&
    `${FD_SSO_URL}?url=${AUTH_URL}?referral-page=${encodeURIComponent(
      currentUrl
    )}`
  );
};
