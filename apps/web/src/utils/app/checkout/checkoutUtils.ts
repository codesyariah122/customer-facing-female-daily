import {
  IAddressSnippetInfo,
  IDeliveryType,
  IDeliveryCourier,
} from './checkoutInterface';
import { GroupItemsByMerchant } from '../cart/cartAction';
import { modalGetCustomerAddressSample } from '@dummydata/modal';
import { cartData } from '@dummydata/mycart';
import { checkoutData, CheckoutDeliveryData } from '@dummydata/checkout';

/**
 * Get list of customer address
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {IAddressSnippetInfo[]}
 */
/**
 * FIXME:
 * - Still using dummy data as response
 */
export function GetCustomerAddresses(): IAddressSnippetInfo[] {
  // @dummyData
  return modalGetCustomerAddressSample;
}

/**
 * Get default customer address
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {IAddressSnippetInfo}
 */
/**
 * FIXME:
 * - Still using dummy data as response
 */
export function GetDefaultCustomerAddress(): IAddressSnippetInfo {
  let address: IAddressSnippetInfo = {};
  // @dummyData
  modalGetCustomerAddressSample.map((val) => {
    if (val.isPrimary) {
      address = val;
      return;
    }
  });
  return address;
}

/**
 * Get Customer cart items data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {any}
 */
/**
 * FIXME:
 * - Still using dummy as a response
 * - Still using {any} as response type
 */
export function GetCustomerQuoteItems(): any[] {
  // @dummyData
  return GroupItemsByMerchant(cartData.items);
}

/**
 * Get customer quote delivery type
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {IDeliveryType[]}
 */
/**
 * FIXME:
 * - Still using dummy as response
 */
export function GetCustomerDeliveryType(): IDeliveryType[] {
  return checkoutData.deliveryType;
}

/**
 * Get customer quote delivery courier
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {IDeliveryCourier[]}
 */
/**
 * FIXME:
 * - Still using dummy as a response
 */
export function GetCustomerDeliveryCourier(): IDeliveryCourier[] {
  return checkoutData.deliveryCourier;
}
