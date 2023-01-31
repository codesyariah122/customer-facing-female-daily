/**
 * Utils for headers data
 */
import { IHeaderCheckout } from './headersInterface';
import { HeaderCheckoutData } from '@dummydata/header';

/**
 * Get HeaderCheckout data
 * @returns {IHeaderCheckout}
 */
export function GetHeaderCheckout(): IHeaderCheckout {
  return {
    headerImgHref: HeaderCheckoutData.headerImgHref,
    headerImgWidth: HeaderCheckoutData.headerImgWidth,
    headerImgHeight: HeaderCheckoutData.headerImgHeight,
    headerImgAlt: HeaderCheckoutData.headerImgAlt,
    headerImgClassname: HeaderCheckoutData.headerImgClassname,
  };
}
