/**
 * Products utilities
 */
import { filtersData } from '@dummydata/filters';
import {
  GetProductsSortByFilter,
  _CATEGORY_FILTER_TYPE_,
  GetLocationsProductFilter,
  _LOCATION_FILTER_TYPE_,
  GetProductsRatingFilter,
  _RATING_FILTER_TYPE_,
  GetProductsSoldbyFilter,
  _SOLDBY_FILTER_TYPE_,
} from '@utils/app/commons/index';

/**
 * Constant _CATEGORIES_FILTER_TITLE_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant use as categories filter title
 * @var {string}
 */
export const _CATEGORIES_FILTER_TITLE_: string = 'Categories';

/**
 * Constant _USE_CATEGORIES_FILTER_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant as indicator is categories filter used
 * @var {boolean}
 */
export const _USE_CATEGORIES_FILTER_: boolean = true;

/**
 * Constant _PRICE_RANGE_FILTER_TITLE_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant use as price range filter title
 * @var {string}
 */
export const _PRICE_RANGE_FILTER_TITLE_: string = 'Prices Range';

/**
 * Constant _USE_PRICE_RANGE_FILTER_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant as indicator is categories filter used
 * @var {boolean}
 */
export const _USE_PRICE_RANGE_FILTER_: boolean = true;

/**
 * Constant _LOCATIONS_FILTER_TITLE_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant use as locations filter title
 * @var {string}
 */
export const _LOCATIONS_FILTER_TITLE_: string = 'Locations';

/**
 * Constant _USE_LOCATIONS_FILTER
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant as indicator is locations filter used
 * @var {boolean}
 */
export const _USE_LOCATIONS_FILTER: boolean = true;

/**
 * Constant _SHIPPING_COURIER_FILTER_TITLE
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant use as shipping courier filter title
 * @var {string}
 */
export const _SHIPPING_COURIER_FILTER_TITLE_: string = 'Shipping Methods';

/**
 * Constant _USE_SHIPPING_COURIER_FILTER_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant as indicator is shipping methods filter used
 * @var {boolean}
 */
export const _USE_SHIPPING_COURIER_FILTER_: boolean = false;

/**
 * Constant _OFFERS_FILTER_TITLE_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant use as customer offers filter title
 * @var {string}
 */
export const _OFFERS_FILTER_TITLE_: string = 'Offers';

/**
 * Constant _USE_OFFERS_FILTER_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant as indicator is customer offers filter used
 * @var {boolean}
 */
export const _USE_OFFERS_FILTER_: boolean = false;

/**
 * Constant _RATING_FILTER_TITLE_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant use as rating filter title
 * @var {string}
 */
export const _RATING_FILTER_TITLE_: string = 'Rating';

/**
 * Constant _USE_RATING_FILTER_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant as indicator is rating filter used
 * @var {boolean}
 */
export const _USE_RATING_FILTER_: boolean = true;

/**
 * Constant _RATING_FILTER_TITLE_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant use as rating filter title
 * @var {string}
 */
export const _SOLDBY_FILTER_TITLE_: string = 'Solds By';

/**
 * Constant _USE_RATING_FILTER_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant as indicator is rating filter used
 * @var {boolean}
 */
export const _USE_SOLDBY_FILTER_: boolean = true;

/**
 * Constant _PRODUCTS_SORT_BY_TITLE_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant use as title for sortby section
 * @var {string}
 */
export const _PRODUCTS_SORT_BY_TITLE_: string = 'Sort By';

/**
 * Constant _USE_PRODUCTS_SORT_BY_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description constant as indicator is sort by select showed on products
 * @var {boolean}
 */
export const _USE_PRODUCTS_SORT_BY_: boolean = true;

/**
 * Get categories filter
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get categories filter data
 * @returns {any}
 */
export function GetCategoriesFilter(): any {
  return {
    categoriesFilterTitle: _CATEGORIES_FILTER_TITLE_,
    useCategoriesFilter: _USE_CATEGORIES_FILTER_,
  };
}

/**
 * Get locations filter
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get locations filter data
 * @returns {any}
 */
export function GetLocationsFilter(): any {
  return {
    useLocationsFilter: _USE_LOCATIONS_FILTER,
    locationsFilterTitle: _LOCATIONS_FILTER_TITLE_,
  };
}

/**
 * Get shippings filter
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get shippings filter data
 * @returns {any}
 */
/**
 * FIXME:
 * - Until Des 07, 2022 - Get shipping methods list endpoint not available
 * - Until Des 07, 2022 - In mobile apps still doesn't have filter by shipping method
 * - Still use dummy data
 */
export function GetShippingsFilter(): any {
  return {
    useShippingsFilter: _USE_SHIPPING_COURIER_FILTER_,
    shippingsFilterTitle: _SHIPPING_COURIER_FILTER_TITLE_,
    shippingsFilterData: filtersData.filtersConfig.shippingsFilterData,
  };
}

/**
 * Get offers filter
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get offers filter data
 * @returns {any}
 */
/**
 * FIXME:
 * - Until Des 07, 2022 - Get customer offers list endpoint not available
 * - Until Des 07, 2022 - In mobile apps still doesn't have filter by customer offers
 * - Still use dummy data
 */
export function GetOffersFilter(): any {
  return {
    useOffersFilter: _USE_OFFERS_FILTER_,
    offersFilterTitle: _OFFERS_FILTER_TITLE_,
    offersFilterData: filtersData.filtersConfig.offersFilterData,
  };
}

/**
 * Get ratings filter
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get ratings filter data
 * @returns {any}
 */
export function GetRatingsFilter(): any {
  return {
    useRatingsFilter: _USE_RATING_FILTER_,
    ratingsFilterTitle: _RATING_FILTER_TITLE_,
    ratingsFilterData: GetProductsRatingFilter(),
  };
}

/**
 * Get solds by filter
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get solds by filter data
 * @returns {any}
 */
export function GetSoldsByFilter(): any {
  return {
    useSoldsByFilter: _USE_SOLDBY_FILTER_,
    soldsByFilterTitle: _SOLDBY_FILTER_TITLE_,
    soldsByFilterData: GetProductsSoldbyFilter(),
  };
}

/**
 * Get price range by filter
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get price range by filter data
 * @returns {any}
 */
export function GetPriceRangeFilter(): any {
  return {
    usePricesRangeFilter: _USE_PRICE_RANGE_FILTER_,
    pricesRangeFilterTitle: _PRICE_RANGE_FILTER_TITLE_,
  };
}

/**
 * Get pagination config information
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description hardcoded pagination configuration
 * @returns {any}
 */
export function GetProductsPaginationConfig(): any {
  return {
    totalCount: 0,
    pageSize: 10,
    siblingCount: 1,
    currentPage: 1,
  };
}

/**
 * Get sortby data information
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get requested data for sortby criteria on products page
 * @returns {any}
 */
export function GetProductsSortBy(): any {
  return {
    sortLabel: _PRODUCTS_SORT_BY_TITLE_,
    sortUseSelect: _USE_PRODUCTS_SORT_BY_,
    sortSelectSource: GetProductsSortByFilter(),
  };
}

/**
 * Get products search parameters
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Generate search parameters querystring
 * @param {any[]} filters <list of filters input data>
 * @param {number} page <current page input data>
 * @param {string} sort <sortBy input data>
 * @param {string} merchantCode <merchantCode input data>
 * @returns {string}
 */
export function GetProductsSearchParams(
  filters: any,
  page: number,
  size: number,
  isOnlyAvailable: boolean,
  sort: string | undefined,
  merchantCode: string,
  keywords?: string,
  brandName?: string
): string {
  let result: string = keywords ? `q=${keywords}` : `q=`;
  result += `&page=${page}&size=${size}&available=${isOnlyAvailable}`;
  result += sort ? `&sort=${sort}` : ``;
  result += merchantCode ? `&merchantCode=${merchantCode}` : ``;
  result += GetFilterQueryStringParams(filters);
  result += brandName ? `&queryBy=${brandName}` : ``;
  return result;
}

/**
 * Get category level param
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get category level param name based on category level value
 * @param {string} level <input category level>
 * @returns {string}
 */
export function GetCategoryLevelParam(level: string): string {
  let result: string = '';
  if (level === 'C0') {
    result = 'categoryLv1';
  }
  if (level === 'C1') {
    result = 'categoryLv2';
  }
  if (level === 'C2') {
    result = 'categoryLv3';
  }
  if (level === 'C3') {
    result = 'categoryLv4';
  }
  if (level === 'C4') {
    result = 'categoryLv5';
  }
  return result;
}

/**
 * Get filter query string params
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Convert filters object into querystring
 * @param {any[]} filters <input filters object>
 * @returns {string}
 */
export function GetFilterQueryStringParams(filters: any): string {
  let result: string = '';
  const isCategoryValid = (category: any): boolean => {
    return (
      category &&
      'paramLevel' in category &&
      GetCategoryLevelParam(category.paramLevel)
    );
  };

  // Categories filter
  if (
    _CATEGORY_FILTER_TYPE_ in filters &&
    Array.isArray(filters[_CATEGORY_FILTER_TYPE_])
  ) {
    filters[_CATEGORY_FILTER_TYPE_].map((category: any) => {
      if (isCategoryValid(category)) {
        result +=
          '&' +
          GetCategoryLevelParam(category.paramLevel) +
          '=' +
          category.paramName;
      }
    });
  }

  //price range filter
  if ('minPrice' in filters && 'maxPrice' in filters) {
    result += '&minPrice=' + filters.minPrice + '&maxPrice=' + filters.maxPrice;
  }

  // Locations filter
  if (
    _LOCATION_FILTER_TYPE_ in filters &&
    Array.isArray(filters[_LOCATION_FILTER_TYPE_])
  ) {
    filters[_LOCATION_FILTER_TYPE_].map((location) => {
      if (location) {
        result += '&city=' + location.paramName;
      }
    });
  }

  //rating filter
  if (_RATING_FILTER_TYPE_ in filters) {
    if (Array.isArray(filters.rating)) {
      filters.rating.map((rating: any) => {
        if (rating && 'paramValue' in rating) {
          result += '&rating=' + rating.paramValue;
        }
      });
    }
  }

  //soldsby filter
  if (_SOLDBY_FILTER_TYPE_ in filters) {
    if (Array.isArray(filters.soldby)) {
      filters.soldby.map((soldby: any) => {
        if (soldby && 'paramValue' in soldby) {
          result += '&seller_type=' + soldby.paramValue;
        }
      });
    }
  }

  return result;
}

/**
 * Convert product json format
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Convert product item json into determined json format
 * @param {any[]} products <list of prduducts json with original format>
 * @returns {any[]}
 */
export function ConvertProductsData(products: any[]): any[] {
  let results: any[] = [];
  if (Array.isArray(products)) {
    products.map((product) => {
      let item: any = {};

      item['addToCartText'] = '+ Add to Cart';
      item['isAddToCart'] = product.document.available;
      item['brand'] = { name: product.document.brand_name };
      item['item'] = {
        product: {
          code: product.document.id,
          name: product.document.name,
          price: {
            originalPrice: product.document.final_price.retail,
            promoPrice: product.document.final_price.setoko,
          },
          medias: {
            url: product.document.medias[0].url,
          },
          isVariance: product?.document?.variant
            ? product.document.variant
            : false,
          url_key: product?.document?.url_key ? product.document.url_key : '',
        },
        quantity: product.document.stock,
      };

      results.push(item);
    });
  }
  return results;
}

/**
 * GetFilteredCategoriesBySingleCategoryName
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description this function works with comparing between two input
 * first input is all category data need to filtered, second input is category name use as filter
 * second input is using array of string, which reflected the level of category
 * example, if second input contain data like ["body", "fragrance"]
 * it's mean categories will filtered by fragrance category (level C2) which child of body category (level C1))
 * the function only returning fragrance category and its child
 *
 * @param allCategories
 * @param categoriesFilter
 * @returns
 */
export function GetFilteredCategoriesBySingleCategoryName(
  sourceCategories: any[],
  categoriesFilter: string[]
): any[] {
  let result: any[] = [];
  let categoryFilterName: string = '';
  if (categoriesFilter.length > 0 && sourceCategories.length > 0) {
    categoriesFilter.map((category: any, key: number) => {
      categoryFilterName = categoriesFilter[key];
      if (key === 0) {
        sourceCategories.map((category: any) => {
          if (
            category.filterName.toLowerCase() ===
            categoryFilterName.toLowerCase()
          ) {
            result.push(category);
          }
        });
      } else {
        result[key - 1].checkboxItemsFilter.map((category: any) => {
          if (
            category.filterName.toLowerCase() ===
            categoryFilterName.toLowerCase()
          ) {
            result.push(category);
          }
        });
      }
    });

    return FormatFilteredCategoriesBySingleCategoryName(result);
  }

  return sourceCategories;
}

/**
 * Convert to accepted json format
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any[]} sourceCategories
 * @returns {any[]}
 */
export function FormatFilteredCategoriesBySingleCategoryName(
  sourceCategories: any[]
): any[] {
  let result: any = [];
  sourceCategories.reverse().map((category: any, key: number) => {
    if (key === 0) {
      category.isDefaultOpen = true;
      result.push(category);
    } else {
      category.isDefaultOpen = true;
      category.checkboxItemsFilter = [result.pop()];
      result.push(category);
    }
  });

  return result;
}
