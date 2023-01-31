import { IMerchant } from './cartInterface';
import { _MINICART_MAX_ITEMS_ } from '@constants/cart';
/**
 * Checkout action from shopping cart into checkout area
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export function CartCheckoutAction() {
  console.log('CartToCheckout Action');
}

/**
 * Is cart input is valid
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Check if cart input object is valid based on backend response
 * @param {any} cartData
 * @returns {boolean}
 */
export const IsCartValid = (cartData: any): boolean => {
  if (Array.isArray(cartData) && cartData.length) {
    // get first array data
    const data = cartData[0];
    return (
      data && 'items' in data && Array.isArray(data.items) && data.items.length
    );
  }
  return false;
};

/**
 * Is Cart Data Valid
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description check if cart input has a valid data like has items, etc
 * @param {any} itemSource
 * @returns {boolean}
 */
export const IsCartDataValid = (itemSource: any): boolean => {
  return (
    'items' in itemSource &&
    'merchant' in itemSource &&
    Array.isArray(itemSource.items) &&
    itemSource.items.length &&
    'code' in itemSource.merchant &&
    'name' in itemSource.merchant
  );
};

/**
 * Calculate items amount on subtotal
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {IMerchant[]} cart
 * @returns {number}
 */
export function CalculateSubtotalAmount(cart: IMerchant[]): any {
  let amount = 0,
    totalQty = 0,
    totalItem = 0,
    totalActiveItem = 0;
  if (IsCartValid(cart)) {
    cart.map((cartData) => {
      if (cartData?.items && Array.isArray(cartData.items)) {
        cartData.items.map((datasource: any) => {
          if (datasource.status) {
            amount = amount + datasource.itemQuantity;
            totalActiveItem = totalActiveItem + 1;
          }
          totalItem = totalItem + 1;
          totalQty = totalQty + datasource.itemQuantity;
        });
      }
    });
  }

  return {
    amount: amount,
    totalQty: totalQty,
    totalItem: totalItem,
    totalActiveItem: totalActiveItem,
  };
}

/**
 * Calculate subtotal price
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IMerchant[]} cart
 * @returns {number}
 */
export function CalculateSubtotalPrice(cart: IMerchant[]): number {
  let price = 0;
  if (IsCartValid(cart)) {
    cart.map((cartData) => {
      if (cartData?.items && Array.isArray(cartData.items)) {
        cartData.items.map((datasource: any) => {
          if (datasource.status) {
            price =
              price + datasource.itemPrice.finalPrice * datasource.itemQuantity;
          }
        });
      }
    });
  }

  return price;
}

/**
 * Calculate total price
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IMerchant[]} cart
 * @returns {number}
 */
export function CalculateTotalPrice(cart: IMerchant[]): number {
  return CalculateSubtotalPrice(cart);
}

/**
 * Extract items data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IMerchant[]} cart
 * @returns {any[]}
 */
export function GetCartItems(cart: IMerchant[]): any[] {
  let result: any[] = [];
  if (IsCartValid(cart)) {
    cart.map((cartData) => {
      if (cartData?.items && Array.isArray(cartData.items)) {
        cartData.items.map((datasource: any) => {
          result.push(datasource);
        });
      }
    });
  }
  return result;
}

/**
 * Get filtered items for minicart
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any[]} items
 * @returns {any[]}
 */
export function GetFilteredItemsForMinicart(items: any[]): any[] {
  let result: any[] = [];
  items.map((item, key) => {
    if (key < _MINICART_MAX_ITEMS_) {
      result.push(item);
    }
  });
  return result;
}

/**
 * GroupItemsByMerchant grouping items list with it's merchant
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {any[]} items <array with sets of object>
 * @returns {any[]}
 */
export function GroupItemsByMerchant(items: any[]): any[] {
  let result: any[] = [];
  let merchants: string[] = [];
  items.map((item) => {
    if (
      item.itemMerchant?.merchantCode &&
      merchants.indexOf(item.itemMerchant.merchantCode) < 0
    ) {
      result.push(item.itemMerchant);
      merchants.push(item.itemMerchant.merchantCode);
    }
  });

  merchants = [];
  result.map((merchant, key) => {
    if (merchants.indexOf(merchant.merchantCode) < 0) {
      let product: any[] = [];
      items.map((item) => {
        if (item.itemMerchant?.merchantCode === merchant?.merchantCode) {
          product.push({
            itemCode: item.itemCode ? item.itemCode : '',
            itemName: item.itemName ? item.itemName : '',
            itemBrand: item.itemBrand ? item.itemBrand : {},
            itemMedias: item.itemMedias ? item.itemMedias : {},
            itemPrice: item.itemPrice ? item.itemPrice : {},
            itemQuantity: item.itemQuantity ? item.itemQuantity : 0,
            useWhitelist: item.useWhitelist ? item.useWhitelist : false,
            itemBtnMoveWhitelistTitle: item.itemBtnMoveWhitelistTitle
              ? item.itemBtnMoveWhitelistTitle
              : '',
          });
        }
      });
      merchant['items'] = product;
      result[key] = merchant;
      merchants.push(merchant.merchantCode);
    }
  });

  return result;
}
