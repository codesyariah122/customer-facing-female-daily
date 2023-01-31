import {
  getCookies,
  getCookie,
  setCookie,
  hasCookie,
  deleteCookie,
} from 'cookies-next';
/**
 * Get all cookies
 * @returns
 */
export function GetCookies(): any {
  return getCookies();
}

/**
 * Set cookie
 * @param {string} key
 * @param {string} value
 * @param {any} options
 */
export function SetCookie(
  key: string,
  value: string | string[] | undefined,
  options?: any
): void {
  setCookie(key, value, options);
}

/**
 * Has cookie
 * @param {string} key
 * @returns {boolean}
 */
export function HasCookie(key: string): boolean {
  return hasCookie(key);
}

/**
 * Get cookie
 * @param {string} key
 * @returns {any}
 */
export function GetCookie(key: string): any {
  return getCookie(key);
}

/**
 * Get cookie
 * @param {string} key
 * @param {any} options
 * @returns {any}
 */
export function DeleteCookie(key: string, options?: any): any {
  return deleteCookie(key, options);
}
