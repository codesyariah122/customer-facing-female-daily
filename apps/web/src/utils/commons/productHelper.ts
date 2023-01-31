/**
 * check if the product is in promo
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {promoPrice, normalPrice} finalPrice <object final price data>
 * @returns {boolean}
 */
export function isPromoPrice(finalPrice: {
  normalPrice: number;
  promoPrice?: number;
}): boolean {
  if (
    finalPrice.promoPrice &&
    finalPrice.promoPrice !== finalPrice.normalPrice
  ) {
    return true;
  }
  return false;
}

/**
 * calculate discount percentage
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {promoPrice, normalPrice} finalPrice <object final price data>
 * @returns {number}
 */
export function getDiscPromo(finalPrice: {
  normalPrice: number;
  promoPrice: number;
}): number {
  let disc = 0;
  if (isPromoPrice(finalPrice)) {
    const normalPrice = finalPrice.normalPrice,
      promoPrice = finalPrice.promoPrice;
    disc = (100 * (normalPrice - promoPrice)) / normalPrice;
  }
  return Math.round(disc);
}

/**
 * get product final price
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {promoPrice, normalPrice} finalPrice <object final price data>
 * @returns {number}
 */
export function getFinalPrice(finalPrice: {
  normalPrice: number;
  promoPrice: number;
}): number {
  const isPromo = isPromoPrice(finalPrice);
  if (isPromo && finalPrice.promoPrice) {
    return finalPrice?.promoPrice;
  }
  return finalPrice.normalPrice;
}

/**
 * get product promo price
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {promoPrice, normalPrice} finalPrice <object final price data>
 * @returns {number}
 */
export function getOriginalPrice(finalPrice: {
  normalPrice: number;
  promoPrice: number;
}): number {
  return finalPrice.normalPrice;
}
