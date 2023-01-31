import { GetCookie } from './cookiesHelper';
import {
  _CHECKOUT_SINGLE_ADDRESS_MERCHANT_COOKIE_DATA,
  _CHECKOUT_SINGLE_ADDRESS_SUMMARY_COOKIE_DATA_,
} from '@constants/checkout';

/**
 * GetCustomerCheckoutDelivery
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get customer checkout delivery choosen data
 * @returns {any[]}
 */
export function GetCustomerCheckoutDelivery(): any[] {
  return JSON.parse(GetCookie(_CHECKOUT_SINGLE_ADDRESS_MERCHANT_COOKIE_DATA));
}

/**
 * GetCustomerCheckoutDeliverySummary
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get customer checkout delivery summary information
 * @returns {any}
 */
export function GetCustomerCheckoutDeliverySummary(): any {
  const isValid = (summary: any): boolean => {
    return summary?.total && summary?.coupon;
  };

  const checkoutSummary = JSON.parse(
    GetCookie(_CHECKOUT_SINGLE_ADDRESS_SUMMARY_COOKIE_DATA_)
  );

  return isValid(checkoutSummary) ? checkoutSummary : {};
}

/**
 * GetCustomerCheckoutProducts
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get products available to checkout
 * @returns {string[]}
 */
/**
 * FIXME:
 * - only return default data
 */
/**
 * TODO:
 * - need to get actual data via cookies
 */
export function GetCustomerCheckoutProducts(): string[] {
  return [];
}
