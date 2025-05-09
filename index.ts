import timezones from './timezones.js';

import type { CanonicalTimezone, LinkTimezone } from './src/types';

export type Timezone = CanonicalTimezone | LinkTimezone;
export type TimezoneKey = keyof typeof timezones.zones;

const es6map = new Map<TimezoneKey, Timezone>(Object.entries(timezones.zones) as [TimezoneKey, Timezone][]);

export default es6map;
