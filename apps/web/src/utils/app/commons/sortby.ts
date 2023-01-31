/**
 * Constant _SORTBY_FILTER_DATA_
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description hard code data based on available values for sort parameters on backend endpoint
 */
export const _SORTBY_FILTER_DATA_: any[] = [
  {
    itemCode: 'NEWEST',
    itemName: 'Newest',
  },
  {
    itemCode: 'OLDEST',
    itemName: 'Oldest',
  },
];

/**
 * Get sortby filter data
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {any[]}
 */
/**
 * FIXME:
 * - need to replace hardcoded data, when datasource from backend endpoint is available
 */
export function GetProductsSortByFilter(): any[] {
  return _SORTBY_FILTER_DATA_;
}
