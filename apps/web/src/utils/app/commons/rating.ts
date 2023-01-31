/**
 * Constant _RATING_FILTER_TYPE_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description use to determine filter type, each filter has different process based on the type
 */
export const _RATING_FILTER_TYPE_: string = 'rating';

/**
 * Constant _RATING_FILTER_DATA_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description hard code data based on available values for sort parameters on backend endpoint
 */
export const _RATING_FILTER_DATA_: any[] = [
  { filterType: _RATING_FILTER_TYPE_, filterName: '1', filterValue: '1' },
  { filterType: _RATING_FILTER_TYPE_, filterName: '2', filterValue: '2' },
  { filterType: _RATING_FILTER_TYPE_, filterName: '3', filterValue: '3' },
  { filterType: _RATING_FILTER_TYPE_, filterName: '4', filterValue: '4' },
  { filterType: _RATING_FILTER_TYPE_, filterName: '5', filterValue: '5' },
];

/**
 * Get rating filter data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {any[]}
 */
/**
 * FIXME:
 * - need to replace hardcoded data, when datasource from backend endpoint is available
 */
export function GetProductsRatingFilter(): any[] {
  return _RATING_FILTER_DATA_;
}
