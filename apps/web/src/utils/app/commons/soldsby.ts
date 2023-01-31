/**
 * Constant _SOLDBY_FILTER_TYPE_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description use to determine filter type, each filter has different process based on the type
 */
export const _SOLDBY_FILTER_TYPE_: string = 'soldby';

/**
 * Constant _SOLDBY_FILTER_DATA_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description hard code data based on available values for sort parameters on backend endpoint
 */
export const _SOLDBY_FILTER_DATA_: any[] = [
  {
    filterType: _SOLDBY_FILTER_TYPE_,
    filterName: 'Official Brand By FD',
    filterValue: 'OFFICIAL_SELLER_BY_FEMALE_DAILY',
  },
  {
    filterType: _SOLDBY_FILTER_TYPE_,
    filterName: 'Female Daily Store',
    filterValue: 'OFFICIAL_SELLER_BY_FEMALE_DAILY',
  },
  {
    filterType: _SOLDBY_FILTER_TYPE_,
    filterName: 'Sold By Seller',
    filterValue: 'SOLD_BY_SELLER',
  },
];

/**
 * Get soldby filter data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {any[]}
 */
/**
 * FIXME:
 * - need to replace hardcoded data, when datasource from backend endpoint is available
 */
export function GetProductsSoldbyFilter(): any[] {
  return _SOLDBY_FILTER_DATA_;
}
