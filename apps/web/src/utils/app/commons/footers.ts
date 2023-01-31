/**
 * Utils for footer data
 */
import { IFooterCheckout } from './footersInterface';
import { FooterCheckoutData } from '@dummydata/footer';

/**
 * GetFooterCheckout data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {IFooterCheckout}
 */
export function GetFooterCheckout(): IFooterCheckout {
  return {
    footerBarTitle: FooterCheckoutData.footerBarTitle,
  };
}
