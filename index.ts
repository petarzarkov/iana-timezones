import timezones, { type TimezoneCode } from './timezones.js';

import type { Timezone } from './src/types';
export * from './src/types.js';

const es6map = new Map<TimezoneCode, Timezone>(Object.entries(timezones) as [TimezoneCode, Timezone][]);

const getZone = (tzCode: TimezoneCode) => es6map.get(tzCode) ?? null;
const getZoneUTC = (tzCode: TimezoneCode) => es6map.get(tzCode)?.utc ?? null;

const getZoneISODate = (tzCode: TimezoneCode): string | null => {
  const offset = getZoneUTC(tzCode);
  if (!offset) return null;

  const match = offset.match(/^([+-])(\d{2}):(\d{2})$/);
  if (!match) return null;

  const [, sign, hours, minutes] = match;
  const totalMinutes = parseInt(hours!) * 60 + parseInt(minutes!);
  const offsetMillis = totalMinutes * 60 * 1000 * (sign === '+' ? 1 : -1);

  const adjusted = new Date(Date.now() + offsetMillis);
  const iso = adjusted.toISOString().replace('Z', '');
  return `${iso}${offset}`;
};

const getZoneDate = (tzCode: TimezoneCode): Date | null => {
  const date = getZoneISODate(tzCode);
  return date ? new Date(date) : null;
};

export default {
  zones: timezones as Record<TimezoneCode, Timezone>, // using the ts cast to reduce the final bundled d.ts file size
  map: es6map as Map<TimezoneCode, Timezone>, // using the ts cast to reduce the final bundled d.ts file size
  /**
   * Returns zone by timezone tzCode
   * @param {TimezoneCode} tzCode The tz tzCode of the timezone (e.g., 'Europe/Sofia')
   * @example
   * ```js
   * getZone('Europe/Sofia')
   * // => {
   * //   countryCodes: ['BG'],
   * //   utc: '+03:00',
   * //   geographicArea: 'Europe',
   * //   location: 'Sofia',
   * //   locationLabel: 'Sofia',
   * //   tzCode: 'Europe/Sofia',
   * //   type: 'Canonical'
   * // }
   * ```
   */
  getZone,
  /**
   * Returns the current offset for a timezone
   * @param {TimezoneCode} tzCode The tzCode of the timezone (e.g., 'Europe/Sofia')
   * @example getZoneUTC('Europe/Sofia') //=> '+03:00'
   */
  getZoneUTC,
  /**
   * Returns the current date-time adjusted to the timezone offset.
   * @param {TimezoneCode} tzCode The tzCode of the timezone (e.g., 'Europe/Sofia')
   * @example getZoneDate('Europe/Sofia') //=> 'Tue May 13 2025 09:18:45 GMT+0300 (Eastern European Summer Time)'
   */
  getZoneDate,
  /**
   * Returns the current ISO date-time adjusted to the timezone offset.
   *
   * The format is `YYYY-MM-DDTHH:mm:ss.sss+HH:MM` or `YYYY-MM-DDTHH:mm:ss.sss-HH:MM`
   *
   * @param {TimezoneCode} tzCode The tzCode of the timezone (e.g., 'Europe/Sofia')
   * @example getZoneISODate('Europe/Sofia') //=> '2025-05-12T08:25:49.322+03:00'
   */
  getZoneISODate,
};
