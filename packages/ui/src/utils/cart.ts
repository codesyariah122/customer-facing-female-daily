/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import { CartProductInterface } from './interfaces/cart';

/**
 * AddToCart action
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {CartProductInterface} item <Product item added to cart>
 * @returns {boolean}
 */
export const addToCartAction = (
  item: CartProductInterface | null | undefined
): boolean => {
  if (item) {
    console.log('AddToCart Action');
    console.log(item);
    return true;
  }

  return false;
};
