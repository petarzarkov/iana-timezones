import timezones from './timezones.js';

import type { CanonicalTimezone, LinkTimezone } from './src/types';
export * from './src/types.js';
export type Timezone = CanonicalTimezone | LinkTimezone;
export type TimezoneName = keyof typeof timezones.zones;

const es6map = new Map<TimezoneName, Timezone>(Object.entries(timezones.zones) as [TimezoneName, Timezone][]);

/**
 * Returns zone by zone name
 * @param {TimezoneName} zone The name of the timezone (e.g., 'Europe/Sofia')
 * @example
 * ```js
 * getZone('Europe/Sofia')
 * // => {
 * //   countryCodes: ['BG'],
 * //   utc: '+03:00',
 * //   geographicArea: 'Europe',
 * //   location: 'Sofia',
 * //   locationLabel: 'Sofia',
 * //   name: 'Europe/Sofia',
 * //   type: 'Canonical'
 * // }
 * ```
 */
const getZone = (zone: TimezoneName) => es6map.get(zone) ?? null;

/**
 * Returns the current offset for a timezone
 * @param {TimezoneName} zone The name of the timezone (e.g., 'Europe/Sofia')
 * @example getZoneUTC('Europe/Sofia') //=> '+03:00'
 */
const getZoneUTC = (zone: TimezoneName) => es6map.get(zone)?.utc ?? null;

/**
 * Returns the current ISO date-time adjusted to the timezone offset.
 * @param {TimezoneName} zone The name of the timezone (e.g., 'Europe/Sofia')
 * @example getZoneISODate('Europe/Sofia') //=> '2025-05-12T08:25:49.322+03:00'
 */
const getZoneISODate = (zone: TimezoneName): string | null => {
  const offset = getZoneUTC(zone);
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

export default {
  zones: timezones.zones,
  map: es6map,
  getZone,
  getZoneUTC,
  getZoneISODate,
};
