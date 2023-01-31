/**
 * Interface CartSummaryInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface ICartSummary {
  cartSummaryTitle?: string;
  cartSubtotalTitle?: string;
  cartSubtotalAmount?: number;
  cartSubtotalAmountUnitTitle?: string;
  cartSubtotalPrice?: number;
  cartTotalTitle?: string;
  cartTotalPrice?: number;
  checkoutBtnTitle?: string;
  toCheckoutAction?: (event: React.FormEvent<HTMLDivElement>) => void;
}

/**
 * Interface ICartItems
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface ICartItems {
  cartTitle?: string;
  cartRemoveBtnTitle?: string;
  cartRemoveAllTitle?: string;
  cartItemsSoldbyTitle?: string;
  isAllChecked?: boolean;
  allCheckedLabel: string;
  totalCheckedItems?: number;
  totalItems?: number;
  itemCheckedAction: (
    event: React.FormEvent<HTMLInputElement>,
    itemCode: string
  ) => void;
  merchantCheckedHandler: (
    event: React.FormEvent<HTMLInputElement>,
    merchantCode: string
  ) => void;
  isAllChangeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
  removeCheckedItemHandler: (event: React.FormEvent<HTMLDivElement>) => void;
  moveToWhitelistHandler: (
    event: React.FormEvent<HTMLDivElement>,
    itemCode: string,
    itemQunatity: number
  ) => void;
  addItemQuantityHandler: (
    event: React.FormEvent<HTMLDivElement>,
    itemCode: string,
    quantity: number,
    totalQuantity?: number,
    maxStock?: number,
    maxPurchase?: number
  ) => void;
  removeItemQuantityHandler: (
    event: React.FormEvent<HTMLDivElement>,
    itemCode: string,
    quantity: number
  ) => void;
  items?: IMerchant[];
  moveToWishlistBulkHandler: (event: React.FormEvent<HTMLDivElement>) => void;
  isOpenModal?: boolean;
  allowedItemsAdd?: string[];
}

/**
 * Interface ICartItem
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface ICartItem {
  itemCode?: string;
  itemName?: string;
  itemDescription?: string;
  itemMedias?: IItemMedia;
  itemPrice?: IItemPrice;
  itemBrand?: string;
  itemQuantity?: number;
  useWhitelist?: boolean;
  itemBtnMoveWhitelistTitle?: string;
  isChecked?: boolean;
}

/**
 * Interface IMerchant
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */

/**
 * FIXME:
 * - Should be use interface on the package
 */
export interface IMerchant {
  merchantCode: string;
  merchantName: string;
  merchantStore: string;
  merchantType: string;
  merchantByFDLabel?: string;
  merchantLogoHref: string;
  merchantLogoType: string;
  isChecked?: boolean;
  items?: ICartItem[];
  merchantItemsCheck: boolean;
}

/**
 * Interface IItemMedia
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */

/**
 * FIXME:
 * - Should be use interface on the package
 */
export interface IItemMedia {
  url?: string;
  kind?: string;
  filename?: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}

/**
 * Interface IItemPrice
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */

/**
 * FIXME:
 * - Should be use interface on the package
 */
export interface IItemPrice {
  originalPrice?: number;
  finalPrice?: number;
  promoAmount?: number;
  promoPrice?: number;
  stock?: number;
  maxPurchase?: number;
}

/**
 * Interface ICart
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface ICart {
  items?: any[];
  isAllChecked?: boolean;
  allCheckedLabel: string;
  totalCheckedItems?: number;
  totalItems?: number;
  cartTitle?: string;
  cartRemoveBtnTitle?: string;
  cartRemoveAllTitle?: string;
  selectAllItemsHandle?: (event: React.FormEvent<HTMLDivElement>) => void;
  toCheckoutAction: (event: React.FormEvent<HTMLDivElement>) => void;
  isAllChangeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
  merchantCheckedHandler: (
    event: React.FormEvent<HTMLInputElement>,
    merchantCode: string
  ) => void;
  itemCheckedAction: (
    event: React.FormEvent<HTMLInputElement>,
    itemCode: string
  ) => void;
  removeCheckedItemHandler: (event: React.FormEvent<HTMLDivElement>) => void;
  moveToWhitelistHandler: (
    event: React.FormEvent<HTMLDivElement>,
    itemCode: string,
    itemQuantity: number
  ) => void;
  addItemQuantityHandler: (
    event: React.FormEvent<HTMLDivElement>,
    itemCode: string,
    quantity: number
  ) => void;
  removeItemQuantityHandler: (
    event: React.FormEvent<HTMLDivElement>,
    itemCode: string,
    quantity: number
  ) => void;
  summary?: ICartSummary;
  emptyCartImageHref?: string;
  emptyCartImageWidth?: number;
  emptyCartImageHeight?: number;
  emptyCartImageAltTitle?: string;
  emptyCartImageClassName?: string;
  emptyCartMessage?: string;
  shopNowBtnTitle?: string;
  shopNowHref?: string;
  cartItemSoldbyTitle?: string;
  moveToWishlistBulkHandler: (event: React.FormEvent<HTMLDivElement>) => void;
  isOpenModal?: boolean;
  allowedItemsAdd?: string[];
}

/**
 * Type TCartItemAdd
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export type TCartItemAdd = {
  guestId?: string | undefined;
  absolute?: boolean;
  retainOrder?: boolean;
  item: {
    product:
      | {
          code: string | undefined;
        }
      | undefined;
    quantity: number | undefined;
  }[];
};

/**
 * Type TCheckItem
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export type TCheckItem = {
  guestId?: string | undefined;
  status: boolean;
  item: {
    product:
      | {
          code: string;
        }
      | undefined;
  }[];
};

/**
 * Type TCheckMerchant
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export type TCheckMerchant = {
  guestId?: string | undefined;
  status: boolean;
  item: {
    merchant_code: string;
  }[];
};

/**
 * Type TCartMarkItems
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export type TCartMarkItems = {
  guestId?: string | undefined;
  status: boolean;
};
