import { isPromoPrice, getDiscPromo } from '@utils/commons/productHelper';
import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';
import {
  IFinalPrice,
  IMemberReview,
  IOrderReview,
  IReview,
} from './productDetailInterface';
import { productData } from '@dummydata/productDetail';
import {
  ProductImage,
  ProductBrand,
  ProductSpec,
} from '@utils/pages/productDetail/productDetailType';
import {
  convertReviewToLimited,
  reviewCharLimit,
} from '@utils/pages/productDetail/productReviewAction';

/**
 * is promo
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {finalPrice} <object of product final price>
 * @returns {boolean}
 */
export function isProductPromo(finalPrice: IFinalPrice): boolean {
  const param = {
    normalPrice: finalPrice.normal,
    promoPrice: finalPrice.promo,
  };
  return isPromoPrice(param);
}

/**
 * get product final price
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {finalPrice} <object of product final price>
 * @returns {number}
 */
export function getFinalPrice(finalPrice: IFinalPrice): number {
  const isPromo = isProductPromo(finalPrice);
  if (isPromo && finalPrice.promo) {
    return finalPrice?.promo;
  }
  return finalPrice.normal;
}

/**
 * get product promo price
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {finalPrice} <object of product final price>
 * @returns {number}
 */
export function getOriginalPrice(finalPrice: IFinalPrice): number {
  return finalPrice.normal;
}

/**
 * get product promo price
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {finalPrice} <object of product final price>
 * @returns {number}
 */
export function getDiscPercent(finalPrice: IFinalPrice): number {
  const param = {
    normalPrice: finalPrice.normal,
    promoPrice: finalPrice.promo ? finalPrice.promo : 0,
  };
  return getDiscPromo(param);
}

/**
 * get main image product
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {medias} <array of product images>
 * @returns {ProductImage}
 */
export function getMainImage(medias?: ProductImage[]): ProductImage {
  const images = medias,
    defaultImage = {
      kind: 'jpg',
      filename: 'default image',
      url: 'url',
    };
  if (images && images.length > 0) {
    return images[0];
  }
  return defaultImage;
}

/**
 * get review data
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {product} <object of product data>
 * @returns {IReview}
 */
export function getReviewData(product: any): IReview {
  const data = {
    ratingMemberReview: product.ratingAverage,
    totalMemberReview: product.reviewCount,
    userRecommendationPercentage: product.userRecommendationPercentage,
    memberReviews: getMemberReview(product.memberReview),
    orderReviews: getOrderReview(product.orderReview, product.merchant?.store),
    ratingOrderReview: product.orderRatingAverage,
    totalOrderReview: product.orderReviewCount,
  };
  return data;
}

/**
 * get member review data
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {memberReview} <array of product mamber review data>
 * @returns {IMemberReview[]}
 */
const getMemberReview = function (memberReview: any[]): IMemberReview[] {
  const result: IMemberReview[] = [];

  memberReview?.forEach((review) => {
    const reviewData = {
      id: review.id,
      userImage: review.reviewer.avatarUrl,
      username: review.reviewer.username,
      ratingReview: review.rating,
      isRecommend: review.recommending,
      reviewDate: UtcToLocalTime(review.reviewDate, 'DD/MM/YYYY'),
      reviewContent: review.comment,
      limitedReviewContent:
        review.comment.length > reviewCharLimit
          ? convertReviewToLimited(review.comment)
          : undefined,
      openLimitedReview: false,
      skinType: review.reviewer.skinType,
      beautyLevel: review.reviewer.beautyLevel,
      ageRange: review.reviewer.ageRange,
    };
    result.push(reviewData);
  });
  return result;
};

/**
 * get order review data
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {memberReview} <array of product mamber review data>
 * @returns {IOrderReview[]}
 */
const getOrderReview = function (
  orderReview: any[],
  storeName: string
): IOrderReview[] {
  const result: IOrderReview[] = [];

  orderReview?.forEach((review) => {
    const reviewData = {
      id: review.id,
      userName: review.reviewer.name,
      ratingReview: review.rating,
      reviewDate: UtcToLocalTime(review.reviewDate, 'DD MMM YYYY'),
      reviewContent: review.comment,
      tags: review.tags,
      images: review.medias,
      sellerResponse: {
        comment: review.merchantFeedback?.comment,
        createdAt: review.merchantFeedback?.createdAt
          ? UtcToLocalTime(review.merchantFeedback.createdAt, 'DD MMM YYYY')
          : undefined,
      },
      storeName: storeName,
      limitedReviewContent:
        review.comment?.length > reviewCharLimit
          ? convertReviewToLimited(review.comment)
          : undefined,
      openLimitedReview: false,
    };
    result.push(reviewData);
  });
  return result;
};

/**
 * get brand data
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {product} <object of product data>
 * @returns {ProductBrand}
 */
export function getBrandData(product: any) {
  let url = '/brand/' + product.brand?.urlKey;
  if (product.brand?.useExternalUrl) {
    url = product.brand?.externalUrl;
  }
  const data = {
    code: product.brand?.code,
    name: product.brand?.name,
    url: url,
  };
  return data;
}

/**
 * get product specification
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {attributes} <array of product attributes data>
 * @returns {ProductSpec}
 */
export function getSpecification(attributes: any[]): ProductSpec[] {
  const dataAttr: ProductSpec[] = [];
  attributes?.forEach((attr) => {
    const rowAttr: ProductSpec = {
      id: attr.id,
      name: attr.name,
      value: getAttributeValue(attr),
    };
    dataAttr.push(rowAttr);
  });
  return dataAttr;
}

/**
 * get attribute value
 * @param attribute <array of product attribute>
 * @returns {string}
 */
const getAttributeValue = function (attribute: any): string {
  const valueData = attribute.value;
  let result = null;
  try {
    const dataArray = JSON.parse(valueData);
    const value: string[] = [];
    dataArray.forEach((row: { name: any }) => {
      value.push(row.name);
    });
    result = value.join(', ');
  } catch (err) {
    result = valueData;
  }
  return result;
};

/**
 * get child product data
 * @param {parentProduct} <object of parent product data>
 * @param {sku} <string of product sku>
 * @return {any | undefined}
 */
export function getChildProductBySku(
  parentProduct: any,
  sku: string
): any | undefined {
  if (parentProduct.children) {
    const filter = parentProduct.children.filter(function (
      child: any,
      i: number
    ) {
      return child.code === sku;
    });

    if (filter.length > 0) {
      return filter[0];
    }
  }
  return undefined;
}
