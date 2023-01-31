import { _CHECKOUT_PAYMENT_MAIN_PAGE_TITLE_ } from '@constants/payment';
import {
  GetCustomerCheckoutDelivery,
  GetCustomerCheckoutDeliverySummary,
  GetCustomerCheckoutProducts,
} from '@utils/commons/checkoutHelper';
import {
  ILogisticCourier,
  IPaymentOrder,
  IPaymentParams,
  TOrderReferenceNumbers,
  TOrderRequestDataType,
  TPromoCodeDataType,
} from '.';
/**
 * Payment methods code
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export const ALLO_GROUP_CODE: string = 'allo_payment';
export const MEGA_GROUP_CODE: string = 'bank_mega';
export const OTHERS_GROUP_CODE: string = 'other_payments';
export const OFFLINE_GROUP_CODE: string = 'offline_payments';
export const ALLO_WALLET_CODE: string = 'ctcd_megapay_allo_wallet_plus';
export const MEGA_DEBIT_CODE: string = 'ctcd_megapay_debit';
export const MEGA_VA_CODE: string = 'ctcd_megapay_va';
export const MEGA_CREDIT_CODE: string = 'ctcd_megapay_cc';

/**
 * Payment logo default size value
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export const PAYMENT_LOGO_WIDTH: number = 47;
export const PAYMENT_LOGO_HEIGHT: number = 41;

/**
 * Is payment group is allo
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {string} groupCode
 * @returns {boolean}
 */
export function isAlloGroup(groupCode: string): boolean {
  return groupCode === ALLO_GROUP_CODE;
}

/**
 * Is payment group is bank mega
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {string} groupCode
 * @returns {boolean}
 */
export function isMegaGroup(groupCode: string): boolean {
  return groupCode === MEGA_GROUP_CODE;
}

/**
 * Is payment group is other payment
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {string} groupCode
 * @returns {boolean}
 */
export function isOtherGroup(groupCode: string): boolean {
  return groupCode === OTHERS_GROUP_CODE;
}

/**
 * Is payment group is offline
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {string} groupCode
 * @returns {boolean}
 */
export function isOfflineGroup(groupCode: string): boolean {
  return groupCode === OFFLINE_GROUP_CODE;
}

/**
 * Is payment method is alloWallet
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {string} methodCode
 * @returns {boolean}
 */
export function isAlloWalletMethod(methodCode: string): boolean {
  return methodCode === ALLO_WALLET_CODE;
}

/**
 * Is payment method is mega debit
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {string} methodCode
 * @returns {boolean}
 */
export function isMegaDebitMethod(methodCode: string): boolean {
  return methodCode === MEGA_DEBIT_CODE;
}

/**
 * Is payment method is megaVa
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {string} methodCode
 * @returns {boolean}
 */
export function isMegaVaMethod(methodCode: string): boolean {
  return methodCode === MEGA_VA_CODE;
}

/**
 * Is payment method is megaCredit
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {string} methodCode
 * @returns {boolean}
 */
export function isMegaCreditMethod(methodCode: string): boolean {
  return methodCode === MEGA_CREDIT_CODE;
}

/**
 * Get list of order reference_number
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns
 */
export function GetOrderReferencesNumber(): TOrderReferenceNumbers {
  let result: TOrderReferenceNumbers = [];
  GetCustomerCheckoutDelivery().map((merchant) => {
    if ('warehouses' in merchant) {
      merchant.warehouses.map((warehouse: any) => {
        if ('addresses' in warehouse) {
          warehouse.addresses.map((address: any) => {
            if ('delivery_methods' in address) {
              address.delivery_methods.map((delivery: any) => {
                if ('reference_number' in delivery) {
                  result?.push(delivery.reference_number);
                }
              });
            }
          });
        }
      });
    }
  });

  return result;
}

/**
 * GetCreateOrderParam
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IPaymentOrder} props
 * @returns {any}
 */
export function GetCreateOrderParam(props: IPaymentOrder): any {
  return {
    token: props.token,
    payment_method: props.paymentMethod,
    promo_codes: GetPromoCodesData(),
    payment_gateway_kind: props.paymentGatewayKind,
    order_requests: GetOrderRequests(GetCustomerCheckoutDelivery()),
  };
}

/**
 * Get Order request
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description get value for order_requests params for backend order creation
 * @param {TOrderReferenceNumbers} referenceNumbers
 * @returns {TOrderRequestDataType}
 */
export function GetOrderRequests(deliveries: any[]): TOrderRequestDataType {
  let result: TOrderRequestDataType = [];
  deliveries?.map((delivery) => {
    result.push({
      reference_number: delivery.reference_number,
      courier: GetCourierByReferenceNumber(delivery),
      note: delivery.note,
    });
  });

  return result;
}

/**
 * Get courier by reference number
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param referenceNumber
 * @returns {ILogisticCourier}
 */
export function GetCourierByReferenceNumber(delivery: any): ILogisticCourier {
  return {
    rate_id: delivery.courierSelected.rate.id,
    logistic_name: delivery.courierSelected.logistic.name,
    logistic_type: delivery.courierSelected.logistic.code,
    shipping_type: delivery.courierSelected.rate.type,
    cod: false,
    use_insurance: delivery.courierSelected.must_use_insurance,
    price: delivery.courierSelected.total_price,
    insurance_fee: delivery.courierSelected.insurance_fee,
    min_day: delivery.courierSelected.min_day,
    max_day: delivery.courierSelected.max_day,
  };
}

/**
 * Get promo codes data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description get value for promo_codes params for backend order creation
 * @param {TOrderReferenceNumbers} referenceNumbers
 * @returns {TOrderRequestDataType}
 */
/**
 * FIXME:
 * - current not any logic implemented, only using default value
 */
/**
 * TODO:
 * - once logic on checkout shipping done, need to add some logic
 */
export function GetPromoCodesData(): TPromoCodeDataType {
  let promoCodes: TPromoCodeDataType = [];
  return promoCodes;
}

/**
 * Search checkout data by reference number7
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param refNum
 * @returns
 */
export function SearchCheckoutDataByReferenceNumber(refNum: string): any {
  let foundKey: number = -1;
  let checkoutData: any[];

  checkoutData = GetCustomerCheckoutDelivery();
  checkoutData.map((merchant, key) => {
    if ('warehouses' in merchant) {
      merchant.warehouses.map((warehouse: any) => {
        if ('addresses' in warehouse) {
          warehouse.addresses.map((address: any) => {
            if ('delivery_methods' in address) {
              address.delivery_methods.map((delivery: any) => {
                if ('reference_number' in delivery) {
                  if (delivery.reference_number === refNum) {
                    foundKey = key;
                    return;
                  }
                }
              });

              if (foundKey) {
                return;
              }
            }
          });

          if (foundKey) {
            return;
          }
        }
      });

      if (foundKey) {
        return;
      }
    }
  });

  if (foundKey > -1) {
    return checkoutData[foundKey];
  }

  return {};
}

/**
 * Get payment querystring param
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IPaymentParams} params
 * @returns {string}
 */
/**
 * FIXME:
 * - Not supported for allo payment
 */
/**
 * TODO:
 * - For supporting allo payment need updated querystring with transactionNo and equipmentId params
 */
export function GetPaymentParams(params: IPaymentParams): string {
  let result: string = '';
  const isValid = (inputParams: IPaymentParams): boolean => {
    return Object.keys(inputParams).length > 0;
  };
  if (isValid(params)) {
    let isFirst = true;
    result += '?';
    for (const i in params) {
      if (i === 'promoCode') {
        params.promoCode?.map((code) => {
          result += isFirst ? `promoCode=${code}` : `&promoCode=${code}`;
          isFirst = false;
        });
      }
      if (i === 'productCode') {
        params.productCode?.map((code) => {
          result += isFirst ? `productCode=${code}` : `&productCode=${code}`;
          isFirst = false;
        });
      }
      if (i === 'amount') {
        result += isFirst
          ? `amount=${params.amount}`
          : `&amount=${params.amount}`;
        isFirst = false;
      }
    }
  }
  return result;
}

/**
 * Get payment page main title
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {string}
 */
export function GetPaymentPageMainTitle(): string {
  return _CHECKOUT_PAYMENT_MAIN_PAGE_TITLE_;
}

/**
 * Get promo use on checkout data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {string[]}
 */
export function GetCheckoutDeliveryPromoUsed(): string[] {
  return GetCustomerCheckoutDeliverySummary().coupon;
}

/**
 * Get checkout total price
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {number}
 */
export function GetCheckoutDeliveryTotalPrice(): number {
  return GetCustomerCheckoutDeliverySummary().total;
}

/**
 * Get checkout products data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {string[]}
 */
export function GetCheckoutProducts(): string[] {
  return GetCustomerCheckoutProducts();
}
