import {
  FetchAddProductToQuoteGuest,
  FetchAddProductToQuote,
  FetchDeductItemQuoteGuest,
  FetchDeductItemQuote,
  FetchCustomerCart,
  FetchUpdateItemStatus,
  FetchUpdateItemStatusByMerchant,
  FetchUpdateAllItemsStatus,
} from '@hooks/useCart';
import { TCartMarkItems } from '@utils/app/cart';
import { GetCustomerUUID } from '@utils/commons/customerHelper';
import { GetTokenJwt } from '@utils/commons/customerHelper';

/**
 * Add to cart for guest customer
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any} item <item or product object data>
 * @returns {boolean}
 */
export function GuestAddToCart(
  guestId: string,
  sku: string,
  quantity: number
): any {
  const param = {
    guestId: guestId,
    item: [
      {
        product: {
          code: sku,
        },
        quantity: quantity,
      },
    ],
  };

  return FetchAddProductToQuoteGuest(param);
}

export function CustomerAddToCart(sku: string, quantity: number): any {
  const param = {
    item: [
      {
        product: {
          code: sku,
        },
        quantity: quantity,
      },
    ],
  };

  return FetchAddProductToQuote(param);
}

/**
 * Add to cart for customer
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {any} item <item or product object data>
 * @returns {boolean}
 */
export function AddToCart(
  sku: string,
  quantity: number,
  absolute: boolean = false,
  retainOrder: boolean = false
): any {
  const param = {
    absolute,
    retainOrder,
    item: [
      {
        product: {
          code: sku,
        },
        quantity: quantity,
      },
    ],
  };

  return FetchAddProductToQuote(param);
}
/**
 * Deduct cart item for guest customer
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any} item <item or product object data>
 * @returns {boolean}
 */
export function GuestDeductCart(guestId: string, sku: string): any {
  const param = {
    guestId: guestId,
    item: [
      {
        product: {
          code: sku,
        },
        quantity: 1,
      },
    ],
  };

  return FetchDeductItemQuoteGuest(param);
}

/**
 * Deduct cart item
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {any} item <item or product object data>
 * @returns {boolean}
 */
export function DeductCart(
  sku: string,
  absolute: boolean = false,
  retainOrder: boolean = false
): any {
  const param = {
    absolute,
    retainOrder,
    item: [
      {
        product: {
          code: sku,
        },
        quantity: 1,
      },
    ],
  };

  return FetchDeductItemQuote(param);
}

/**
 * Deduct cart items bulk
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any[]} items
 * @param {boolean} absolute
 * @param {boolean} retainOrder
 * @returns {any}
 */
/**
 * FIXME:
 * - need to add remove items guest
 */
export function RemoveItemsBulk(
  items: any[],
  guestId: string = '',
  absolute: boolean = false,
  retainOrder: boolean = false
) {
  //Guest customer
  if (guestId) {
    const param = {
      guestId,
      absolute,
      retainOrder,
      item: items,
    };

    return FetchDeductItemQuoteGuest(param);
  }

  //Logged customer
  const param = {
    absolute,
    retainOrder,
    item: items,
  };

  return FetchDeductItemQuote(param);
}

/**
 * Update cart item status
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param sku <string product sku/code>
 * @param status <boolean>
 * @returns {boolean}
 */
export function UpdateItemStatus(sku: string, status: boolean = true): any {
  const token = GetTokenJwt();
  const param: any = {
    status,
    item: [
      {
        product: {
          code: sku,
        },
        quantity: 1,
      },
    ],
  };
  if (!token) {
    param.guestId = GetCustomerUUID();
  }

  return FetchUpdateItemStatus(param);
}

/**
 * Update cart item status by merchant
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param merchantCode <string product sku/code>
 * @param status <boolean>
 * @returns {boolean}
 */
export function UpdateItemStatusByMerchant(
  merchantCode: string,
  status: boolean = true
): any {
  const token = GetTokenJwt();
  const param: any = {
    status,
    item: [
      {
        merchant_code: merchantCode,
      },
    ],
  };
  if (!token) {
    param.guestId = GetCustomerUUID();
  }

  return FetchUpdateItemStatusByMerchant(param);
}

/**
 * get customer cart
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {any}
 */
export function GetCart(): any {
  return FetchCustomerCart();
}

/**
 * Update mark all cart items
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {boolean} status
 * @param {string} guestId
 * @returns {any}
 */
export function UpdateMarkAllItems(status: boolean, isGuest?: boolean) {
  let params: TCartMarkItems = { status: true };
  params.status = status;
  if (isGuest) {
    params.guestId = GetCustomerUUID();
  }
  return FetchUpdateAllItemsStatus(params);
}

/**
 * Is stock allowed
 * @description customer cannot request product exceed stock limit
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {number} totalRequest
 * @param {number} totalQuantity
 * @param {number} maxStock
 * @returns {boolean}
 */
export function IsStockAllowed(
  totalRequest?: number,
  totalQuantity?: number,
  maxStock?: number
): boolean {
  let result: boolean = false;
  if (
    totalRequest !== undefined &&
    totalQuantity !== undefined &&
    maxStock !== undefined
  ) {
    if (maxStock > 0) {
      result = totalQuantity + totalRequest <= maxStock;
    }
  }

  return result;
}

/**
 * isPurchaseAllowed
 * @description customer cannot puchased exceeded purchase limit
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {number} totalRequest
 * @param {number} totalQuantity
 * @param {number} maxStock
 * @returns {boolean}
 */
export function isPurchaseAllowed(
  totalRequest?: number,
  totalQuantity?: number,
  maxPurchase?: number
): boolean {
  let result: boolean = true;
  if (
    totalRequest !== undefined &&
    totalQuantity !== undefined &&
    maxPurchase !== undefined
  ) {
    if (maxPurchase > 0) {
      result = totalQuantity + totalRequest <= maxPurchase;
    }
  }

  return result;
}
