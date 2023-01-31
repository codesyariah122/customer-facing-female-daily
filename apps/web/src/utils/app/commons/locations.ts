/**
 * constant location_filter_type
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description use to indicate if filters is location type
 * @var {string}
 */
export const _LOCATION_FILTER_TYPE_: string = 'location';

export function GetLocationsProductFilter(locations: any[]): any[] {
  let result: any[] = [];
  const isValid = (location: any): boolean => {
    return (
      'id' in location &&
      'name' in location &&
      'active' in location &&
      location.active
    );
  };
  if (Array.isArray(locations)) {
    locations.map((location) => {
      if (isValid(location)) {
        result.push({
          filterType: _LOCATION_FILTER_TYPE_,
          filterName: location.name,
          filterValue: location.id,
        });
      }
    });
  }
  return result;
}
