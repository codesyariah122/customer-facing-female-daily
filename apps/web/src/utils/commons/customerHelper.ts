import { resolve } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { DeleteCookie, GetCookie, HasCookie, SetCookie } from './cookiesHelper';

/**
 * Customer guestId cookie name
 */
export const _COOKIE_CUSTOMER_GUEST_: string = 'CustGuestId';
export const _COOKIE_CUSTOMER_TOKEN_: string = 'core_token';
export const _COOKIE_CUSTOMER_FD_TOKEN_: string = 'token';
export const _COOKIE_CUSTOMER_PROFILE_: string = 'core_fd_profile';

/**
 * Get customer uuid
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get customer random string uuid (when user not login yet)
 * @returns {string}
 */
export function GetCustomerUUID(): string {
  if (HasCookie(_COOKIE_CUSTOMER_GUEST_)) {
    return GetCookie(_COOKIE_CUSTOMER_GUEST_);
  }
  SetCookie(_COOKIE_CUSTOMER_GUEST_, uuidv4(), { maxAge: 60 * 6 * 24 });
  return GetCookie(_COOKIE_CUSTOMER_GUEST_);
}

/**
 * get customer jwt token
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {string}
 */
export function GetTokenJwt(): string {
  return GetCookie(_COOKIE_CUSTOMER_TOKEN_);
}

/**
 * get fd customer token
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {string}
 */
export function GetFDTokenJwt(): string {
  return GetCookie(_COOKIE_CUSTOMER_FD_TOKEN_);
}

/**
 * Checker if User Logged
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @returns {boolean}
 */
export const isFDUserLogin = (): boolean => {
  GetTokenJwt() && DeleteCookie(_COOKIE_CUSTOMER_GUEST_); // delete guest login, when checking user login
  return typeof GetTokenJwt() !== 'undefined' && GetTokenJwt() !== '';
};

/**
 * Checker if User Logged
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @returns {boolean}
 */
export const GetUserData = (): string => {
  return GetCookie(_COOKIE_CUSTOMER_PROFILE_);
};
