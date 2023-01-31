import * as dayjs from 'dayjs';

/**
 * Convert UTC 0 to local time
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {datetime} <string datetime>
 * @param {format} <string datetime format>
 * @returns {string}
 */
export function UtcToLocalTime(
  datetime: string,
  format: string = 'DD MMM YYYY HH:mm'
): string {
  const date = new Date(datetime);
  const localTime = dayjs.default(date).format(format);
  return localTime;
}
