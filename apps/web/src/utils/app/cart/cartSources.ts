/**
 * Resources for mycart feature
 */
import {
  useCustomerCartGuest,
  useCustomerCart,
  useCustomerMiniCart,
} from '@hooks/useCart';
import { GetCustomerUUID } from '@utils/commons/customerHelper';
import {
  isPromoPrice,
  getDiscPromo,
  getFinalPrice,
  getOriginalPrice,
} from '@utils/commons/productHelper';
import { IsCartValid, IsCartDataValid } from './cartAction';
/**
 * Constant for several mycart non product items data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
const _MYCART_PAGE_TITLE_: string = 'Shopping Cart';
const _MYCART_REMOVE_BUTTON_TITLE_: string = 'Remove';
const _MYCART_ALL_ITEMS_CHECKED_TITLE_: string = 'Select all products';
const _MYCART_EMPTY_CART_MESSAGE_: string =
  "It's never too late to start adding stuff to your cart :)";
const _MYCART_EMPTY_CART_IMAGE_SOURCE_: string = '/';
const _MYCART_SHOP_NOW_BUTTON_TITLE_: string = 'Shop Now!';
const _MYCART_SHOP_NOW_HREF_: string = '/';
const _MYCART_SUMMARY_SECTION_TITLE_: string = 'Order Summary';
const _MYCART_SUMMARY_SUBTOTAL_TITLE: string = 'Subtotal';
const _MYCART_SUMMARY_ITEMS_UNIT_LABEL_: string = 'items';
const _MYCART_SUMMARY_TOTAL_TITLE_: string = 'Total';
const _MYCART_SUMMARY_CHECKOUT_BUTTON_TITLE_: string = 'Checkout Now';
const _MYCART_ITEM_BUTTON_MOVE_TO_WHITELIST_TITLE_: string = 'Move to wishlist';
const _MYCART_ITEMS_SOLBY_MERCHANT_TITLE_: string = 'Sold by';
const _MERCHANT_TYPE_BY_FD_: string[] = [
  'OFFICIAL_SELLER_BY_FEMALE_DAILY',
  'FEMALE_DAILY_STORE',
];

/**
 * Constant related to product item image
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export const _MYCART_ITEM_IMAGE_HEIGHT_DEFAULT_: number = 90;
export const _MYCART_ITEM_IMAGE_WIDTH_DEFAULT_: number = 90;

/**
 * constant related to merchant logo/image
 */
export const _MYCART_MERCHANT_LOGO_SOURCE_DEFAULT_: string = 'ico-mini-fd';
export const _MYCART_MERCHANT_LOGO_SOURCE_TYPE_DEFAULT_: string = 'class';

/**
 * constant related to modal remove all products
 */
export const _MYCART_MODAL_REMOVE_ALL_PRODUCTS_TITLE_: string =
  'REMOVE PRODUCTS';
export const _MYCART_MODAL_REMOVE_ALL_PRODUCTS_DESCRIPTION_: string =
  'Remove this products from this shopping cart?';
export const _MYCART_MODAL_REMOVE_ALL_PRODUCTS_BUTTON_REMOVE_TITLE_: string =
  'Remove';
export const _MYCART_MODAL_REMOVE_ALL_PRODUCTS_BUTTON_MOVE_WISHLIST_TITLE_: string =
  'Move to Wishlist';

/**
 * Resources for modalRemoveAllItems
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export const modalRemoveAllItemsSources: any = {
  modalTitle: _MYCART_MODAL_REMOVE_ALL_PRODUCTS_TITLE_,
  modalDescription: _MYCART_MODAL_REMOVE_ALL_PRODUCTS_DESCRIPTION_,
  removeButtonTitle: _MYCART_MODAL_REMOVE_ALL_PRODUCTS_BUTTON_REMOVE_TITLE_,
  moveWishlistButtonTitle:
    _MYCART_MODAL_REMOVE_ALL_PRODUCTS_BUTTON_MOVE_WISHLIST_TITLE_,
};

/**
 * Config resources for mycart page
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Provide non product item resource data such title, etc on mycart page
 * @returns {any}
 */
export const CartConfigSource = (): any => {
  return {
    pageTitle: _MYCART_PAGE_TITLE_,
    btnRemoveTitle: _MYCART_REMOVE_BUTTON_TITLE_,
    allItemsCheckedTitle: _MYCART_ALL_ITEMS_CHECKED_TITLE_,
    emptyCartMessage: _MYCART_EMPTY_CART_MESSAGE_,
    emptyCartImageHref: _MYCART_EMPTY_CART_IMAGE_SOURCE_,
    emptyCartImageWidth: _MYCART_ITEM_IMAGE_WIDTH_DEFAULT_,
    emptyCartImageHeight: _MYCART_ITEM_IMAGE_HEIGHT_DEFAULT_,
    btnShopNowTitle: _MYCART_SHOP_NOW_BUTTON_TITLE_,
    shopNowHref: _MYCART_SHOP_NOW_HREF_,
    cartItemsSoldbyMerchantTitle: _MYCART_ITEMS_SOLBY_MERCHANT_TITLE_,
    summaryInfo: {
      cartSummaryTitle: _MYCART_SUMMARY_SECTION_TITLE_,
      cartSummarySubtotalTitle: _MYCART_SUMMARY_SUBTOTAL_TITLE,
      cartSummaryItemsUnitLabel: _MYCART_SUMMARY_ITEMS_UNIT_LABEL_,
      cartSummaryTotalTitle: _MYCART_SUMMARY_TOTAL_TITLE_,
      cartSummaryCheckoutButtonTitle: _MYCART_SUMMARY_CHECKOUT_BUTTON_TITLE_,
      cartSummarySubtotalAmountDefault: 0,
      cartSummaryTotalQty: 0,
      cartSummarySubtotalPriceDefault: 0,
      cartSummaruTotalPriceDefault: 0,
    },
  };
};

/**
 * GetSummarySection
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Convert json data format from CartConfigSource.summaryInfo into ICartSummary interface
 * @param {any} summary
 * @returns {any}
 */
export const GetSummarySection = (summary: any): any => {
  return {
    cartSummaryTitle: summary.cartSummaryTitle,
    cartSubtotalTitle: summary.cartSummarySubtotalTitle,
    cartTotalQty: summary.cartSummaryTotalQty,
    cartSubtotalAmount: summary.cartSummarySubtotalAmountDefault,
    cartSubtotalAmountUnitTitle: summary.cartSummaryItemsUnitLabel,
    cartSubtotalPrice: summary.cartSummarySubtotalPriceDefault,
    cartTotalTitle: summary.cartSummaryTotalTitle,
    cartTotalPrice: summary.cartSummaruTotalPriceDefault,
    checkoutBtnTitle: summary.cartSummaryCheckoutButtonTitle,
  };
};

/**
 * Get customer guest cart data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {any}
 */
/**
 * FIXME:
 * - GetCustomerCartDataSourceGuest has a conflict between minicart and cart page
 * - Workaround is using optional props on hooks useCustomerCartGuest
 * - Need to fix with proper method
 */
export const GetCustomerCartDataSourceGuest = (source?: string): any => {
  return source
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCustomerCartGuest({ guestId: GetCustomerUUID(), isCart: true })
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCustomerCartGuest({ guestId: GetCustomerUUID() });
};

/**
 * Get customer cart data
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {any}
 */
export const GetCustomerCartDataSource = (): any => {
  return useCustomerCart();
};

/**
 * Get customer minicart data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {any}
 */
export const GetCustomerMiniCartDataSource = (): any => {
  return useCustomerMiniCart();
};

/**
 * Convert cart items json format
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Convert json format from backend endpoint into determined json format
 * @param {any} cart <cart data from backend response>
 * @returns {any[]}
 */
export const ConvertCartItemsDataFormat = (cart: any): any[] => {
  let convertedItems: any[] = [];

  if (IsCartValid(cart)) {
    const cartData = cart.pop();
    cartData.items.map((datasource: any) => {
      if (IsCartDataValid(datasource)) {
        const merchantItemsChecked = datasource.items.filter(function (
          row: any,
          i: number
        ) {
          return row.status === true;
        });
        let merchant: any = {
          merchantCode: datasource.merchant.code,
          merchantName: datasource.merchant.name,
          merchantStore: datasource.merchant.store,
          merchantType: datasource.merchant.seller_type,
          merchantByFDLabel: _MERCHANT_TYPE_BY_FD_.includes(
            datasource.merchant.seller_type
          )
            ? 'Dilayani Oleh FD'
            : undefined,
          merchantLogoHref: _MYCART_MERCHANT_LOGO_SOURCE_DEFAULT_,
          merchantLogoType: _MYCART_MERCHANT_LOGO_SOURCE_TYPE_DEFAULT_,
          items: [],
          merchantItemsCheck:
            datasource.items.length === merchantItemsChecked.length,
        };
        datasource.items.map((item: any) => {
          let medias = item.product?.medias?.pop();
          const finalPrice = {
            normalPrice: item.product.final_price.setoko,
            promoPrice: item.product.final_price.promo,
          };
          merchant.items.push({
            itemCode: item.product.code,
            itemName: item.product.name,
            itemBrand: item.product.brand.name,
            itemMedias: {
              url: medias?.url,
              kind: medias?.kind,
              filename: medias?.filename,
              width: _MYCART_ITEM_IMAGE_WIDTH_DEFAULT_,
              height: _MYCART_ITEM_IMAGE_HEIGHT_DEFAULT_,
            },
            itemPrice: {
              originalPrice: getOriginalPrice(finalPrice),
              finalPrice: getFinalPrice(finalPrice),
              stock: item.product.final_price.stock,
              isPromo: isPromoPrice(finalPrice),
              discPresentage: getDiscPromo(finalPrice),
              maxPurchase: item.product.final_price.max_purchase,
            },
            useWhitelist: true,
            itemBtnMoveWhitelistTitle:
              _MYCART_ITEM_BUTTON_MOVE_TO_WHITELIST_TITLE_,
            itemQuantity: item.quantity,
            status: item.status,
          });
        });
        convertedItems.push(merchant);
      }
    });
  }

  return convertedItems;
};

/**
 * Filter product items show on minicart
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any} carts
 * @returns {any[]}
 */
export const MinicartShowItemsFilter = (carts: any[]): any[] => {
  carts.map((cart, key) => {
    let items: any[] = [];
    if (cart?.merchantItemsCheck && cart?.items) {
      cart.items.map((item: any) => {
        if (item.status) {
          items.push(item);
        }
      });
    }
    carts[key].items = items;
  });
  return carts;
};

export function GetFavoriteItemsData(items: any[]): any[] {
  let results: any[] = [];
  if (Array.isArray(items) && items.length > 0) {
    items.map((item: any) => {
      results.push({ product_code: item.product.code });
    });
  }
  return results;
}
