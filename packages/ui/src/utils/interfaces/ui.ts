/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import { ProductAttributeInterface } from './product';

/**
 * Interface MainSearchOptionInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface MainSearchOptionInterface {
  optionName?: string;
  optionCode?: string;
}

/**
 * Interface MiniNotifContentOptionInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface MiniNotifContentOptionInterface {
  imgSrc?: string;
  title?: string;
  description?: string;
  postDate?: string;
  href?: string;
}

/**
 * Interface MiniCartItemInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface MiniCartItemInterface {
  itemId?: string | number | undefined;
  itemSku?: string | number | undefined;
  itemPrice?: number | undefined;
  itemQtyAmount?: number | undefined;
  itemQtyTitle?: string | undefined;
  itemName?: string | undefined;
  itemImgSrc?: string | undefined;
  itemAttributes?: ProductAttributeInterface[] | null | undefined;
  itemInfoPreOrder?: MiniCartItemPreOrderInterface | undefined;
  itemInfoDiscount?: MiniCartItemDiscountInterface | undefined;
  itemCurrency?: string | undefined;
}

/**
 * Interface MiniCartItemDiscountInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface MiniCartItemDiscountInterface {
  discountPercentage?: string | number;
  originalItemPrice?: number;
  currency?: string;
}

/**
 * Interface MiniCartItemPreOrderInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface MiniCartItemPreOrderInterface {
  expireTime?: string | number;
  expireUnit?: string;
  message?: string;
}

/**
 * Interface AccountHeaderInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface AccountHeaderInterface {
  name?: string;
  imgSrc?: string;
}

/**
 * Interface AuthHeaderInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface AuthHeaderInterface {
  loginText?: string;
  registerText?: string;
}

export interface TopMenuItemInterface {
  menuItemTitle?: string;
  menuItemHref?: string;
}

/**
 * Interface MenuItemsPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface MenuCategoryItemsInterface {
  categoryName?: string;
  categoryHref?: string;
  categoryImg?: string;
  bannerImg?: string;
  subCategory?: MenuCategoryItemsInterface[];
  categories?: MenuCategoryItemsInterface[];
}

/**
 * Interface UiConfigInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface UiConfigInterface {
  timeoutDuration?: number;
}

/**
 * FooterInfoLinkPropsInterface interface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface FooterInfoLinkInterface {
  footerInfoText?: string;
  footerInfoLink?: string;
  footerInfoImgSrc?: string;
  footerInfoAlt?: string;
}

/**
 * FooterInfoPropsInterface interface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface FooterInfoInterface {
  footerInfoTitle?: string;
  footerInfo?: FooterInfoLinkInterface[];
}

/**
 * FooterInfoBarPropsInterface interface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface FooterInfoBarInterface {
  footerInfoData: FooterInfoInterface[];
  footerInfoConnect: FooterInfoInterface[];
}
