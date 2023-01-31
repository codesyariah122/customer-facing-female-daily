/**
 * get time zone code (wib,wit,wita)
 * outside indonesia using AM/PM
 * @author UniqFadilah <Uniq.Fadilah@ctcorpdigital.com>
 * @param time
 * @returns
 */

import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';

export function setTimeZoneByLocation(
  time: string,
  format: string = 'HH:mm'
): string {
  const location = new Date().getTimezoneOffset().toString();
  let result: string = 'Invalid Time';
  if (!time) return result;
  const times: string = UtcToLocalTime(time, format);
  result = `${times} ${UtcToLocalTime(time, 'A')}`;
  if (location === '-420') result = `${times} WIB`;
  if (location === '-480') result = `${times} WITA`;
  if (location === '-540') result = `${times} WIT`;
  return result;
}
