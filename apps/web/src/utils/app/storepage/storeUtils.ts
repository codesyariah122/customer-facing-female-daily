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
export function GetProductsSearchParams(
  filters: any,
  page: number,
  size: number,
  isOnlyAvailable: boolean,
  sortBy: string | undefined,
  merchantCode: string
): string {
  let result: string = 'q=&page=' + page + '&size=' + size;
  result += isOnlyAvailable ? '&available=true' : '';
  result += sortBy ? '&sort=' + sortBy : '';
  result += merchantCode ? '&merchantCode=' + merchantCode : '';
  result += GetFilterQueryStringParams(filters);
  return result;
}

export function GetFilterQueryStringParams(filters: any): string {
  let result: string = '';
  const isCategoryValid = (category: any): boolean => {
    return category;
  };
  if (
    _CATEGORY_FILTER_TYPE_ in filters &&
    Array.isArray(filters[_CATEGORY_FILTER_TYPE_])
  ) {
    filters[_CATEGORY_FILTER_TYPE_].map((category: any) => {
      if (isCategoryValid(category)) {
        result += '&categoryLv1=' + category.name;
      }
    });
  }
  return result;
}
