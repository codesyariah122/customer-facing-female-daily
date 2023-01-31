import { IMerchant } from '@utils/pages/productDetail/productDetailInterface';
import {
  isProductPromo,
  getFinalPrice,
  getOriginalPrice,
  getDiscPercent,
} from '@utils/pages/productDetail/productDetailAction';

/**
 * prepare data attribute variant
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {product} <object of product data>
 * @return any[]
 */
export function prepareDataVariant(product?: any): any[] {
  if (product.children) {
    const attrs: any = {
        attr: [], // for pdp variant option
        childOpt: [], // to be source for checking child
      },
      attrsTemp: any[] = [],
      childAttrs: any[] = [];

    // parse child data
    product.children.forEach((child: any) => {
      const existingChild = {
        sku: child.code,
        attr: '',
      };
      const childAttrOpt: string[] = [];
      child.attributes.forEach((attr: any) => {
        if (attr.variance === true) {
          const filter = attrs.attr.filter(function (
            arr: { name: string },
            i: number
          ) {
            return arr.name === attr.name;
          });
          let attrValue = attr.value;
          try {
            const parsing = JSON.parse(attr.value);
            attrValue = parsing[0];
          } catch (err) {}

          if (filter.length !== 0) {
            const row = filter[0];
            const index = attrsTemp.indexOf(row.name);
            const option = {
              code: attrValue.code ? attrValue.code : null,
              name: attrValue.name,
            };

            const check = row.options.filter(function (
              opt: { code: string; name: string },
              index: number
            ) {
              return opt.code === option.code;
            });

            if (check.length === 0) {
              row.options?.push(option);
              attrs.attr[index] = row;
            }
            childAttrOpt.push(attrValue.code);
          } else {
            const option = {
              name: attr.name,
              options: [
                {
                  code: attrValue.code ? attrValue.code : null,
                  name: attrValue.name,
                },
              ],
            };
            childAttrOpt.push(attrValue.code);
            attrs.attr.push(option);
            attrsTemp.push(attr.name);
          }
        }
      });
      if (childAttrOpt.length) {
        const stringChidlAttrOpt = childAttrOpt.sort().join('&&&');
        existingChild.attr = stringChidlAttrOpt;
      }
      if (existingChild.attr !== '') {
        attrs.childOpt.push(existingChild);
      }
    });
    return attrs;
  }
  return [];
}

/**
 * prepare data member review
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {memberReviews} <object of array data member review>
 * @returns {any[]}
 */
export function prepareDataMemberReview(memberReviews?: any[]): any[] {
  const data: any[] = [];
  if (memberReviews && memberReviews.length > 0) {
    memberReviews?.forEach((row) => {
      const rowData: any = {};
      rowData.id = row.id;
      rowData.code = row.code;

      const reviewer: any = {
        fullname: row.reviewer.fullname,
        username: row.reviewer.username,
        age: row.reviewer.age,
        ageRange: row.reviewer.age_range,
        skinType: row.reviewer.skin_type,
        avatarUrl: row.reviewer.avatar_url,
        beautyLevel: row.reviewer.beauty_level,
      };
      rowData.reviewer = reviewer;
      rowData.rating = row.rating;
      rowData.reviewerVerified = row.reviewer_verified;
      rowData.recommending = row.recommending;
      rowData.comment = row.comment;
      rowData.reviewDate = row.review_date;
      rowData.createdAt = row.created_at;

      data.push(rowData);
    });
  }

  return data;
}

/**
 * prepare data order review
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {orderReviews} <object of array data order review>
 * @returns {any[]}
 */
export function prepareDataOrderReview(orderReviews?: any[]): any[] {
  const data: any[] = [];
  if (orderReviews && orderReviews.length > 0) {
    orderReviews?.forEach((row) => {
      const rowData: any = {};
      rowData.id = row.id;
      rowData.code = row.code;

      const reviewer: any = {
        name: row.reviewer.name,
      };
      rowData.reviewer = reviewer;
      rowData.rating = row.rating;
      rowData.comment = row.comment;
      rowData.statue = row.status;
      rowData.reviewDate = row.review_date;
      rowData.tags = row.tags;
      rowData.merchantFeedback = {
        comment: row?.merchant_feedback?.comment,
        createdAt: row?.merchant_feedback?.created_at,
      };
      rowData.medias = row.medias;
      rowData.createdAt = row.created_at;
      rowData.recommending = row.recommending;

      data.push(rowData);
    });
  }

  return data;
}

/**
 * prepare data merchant
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {merchant} <object of merchant data>
 * @returns {IMerchant}
 */
export function prepareDataMerchant(merchant: any): IMerchant {
  const data: IMerchant = merchant;
  if (merchant?.profilePicture) {
    data.profilePicture = merchant?.profilePicture
      ? merchant?.profilePicture?.url
      : '';
  }

  return data;
}

/**
 * prepare data recommendation product PDP
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @return {any[]}
 */
export function prepareRecommdationData(recommendation: any): any[] {
  const dataProducts: any[] = [];
  if (recommendation) {
    recommendation?.forEach((data: any) => {
      const finalPrice = {
        normal: data.final_price?.setoko,
        promo: data.final_price?.promo,
        stock: data.final_price?.stock,
        maxPurchase: data.final_price?.max_purchase,
      };

      const product: any = {
        code: data.code,
        name: data.product_name,
        image: data.medias[0] ? data.medias[0].url : null,
        finalPrice: getFinalPrice(finalPrice),
        originalPrice: getOriginalPrice(finalPrice),
        discPercentage: getDiscPercent(finalPrice),
        isPromo: isProductPromo(finalPrice),
        rating: data.rating_average,
        sold: data.sold,
        favorites: data.favorites,
        productUrl: `/product/${data.url_key}`,
      };
      dataProducts.push(product);
    });
  }

  return dataProducts;
}
