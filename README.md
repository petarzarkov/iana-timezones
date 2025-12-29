# iana-db-timezones

[![cov](https://petarzarkov.github.io/iana-timezones/coverage.svg)](https://petarzarkov.github.io/iana-timezones)
[![build](https://github.com/petarzarkov/iana-timezones/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/petarzarkov/iana-timezones/actions)
[![license](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![version](https://img.shields.io/npm/v/iana-db-timezones?label=version)](https://www.npmjs.com/package/iana-db-timezones)
[![npm](https://img.shields.io/npm/dt/iana-db-timezones?label=npm-downloads)](https://www.npmjs.com/package/iana-db-timezones)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/iana-db-timezones?label=size)](https://www.npmjs.com/package/iana-db-timezones)
[![Known Vulnerabilities](https://snyk.io/test/github/petarzarkov/iana-timezones/badge.svg)](https://snyk.io/test/github/petarzarkov/iana-timezones)


******

Automatically generated timezones from IANA DB [tzdata-latest.tar.gz](https://www.iana.org/time-zones/repository/tzdata-latest.tar.gz)

- No external dependencies
- Weekly cron job to check for new iana timezone data
- Can be used both in both Node.js and Browser
- If you just need the json data - [timezones.json](https://github.com/petarzarkov/iana-timezones/blob/main/timezones.json)

The fields for each timezone object are as follows:
  | Field Name     | Description                                                                                                | Example Value             |
  |----------------|------------------------------------------------------------------------------------------------------------|---------------------------|
  | `tzCode`         | The standard IANA Time Zone Database identifier (tz tzCode).                                                 | `Kwajalein`            |
  | `label`        | A display string combining the `tzCode` and the current UTC offset.                                        | `Kwajalein (GMT+12:00)`           |
  | `utc`          | The current static UTC offset from UTC in `+HH:MM` or `-HH:MM` format. Reflects current DST.         | `+12:00`             |
  | `locationLabel`| A human-readable name for the primary city or location associated with the timezone.                         | `Kwajalein`   |
  | `countryCodes` | An array of `ISO 3166-1 alpha-2` country codes associated with this timezone.                            | `['KI', ...]` |
  | `geographicArea`| The continent or ocean region the timezone is located in.                                                  | `Pacific`  |
  | `type`         | Indicates if the entry is a `Canonical` timezone or a `Link` (an alias) to another timezone.             | `Canonical` or `Link` |
  | `parent`       | (Present for `Link` types) The `tzCode` of the canonical timezone that this link points to.              | `Europe/London`         |
  | `comments`     | (Optional) Additional notes from the IANA database.                                                      | `'Mountain (most areas)'`         |
  | `children`     | (Present for `Canonical` types) An array of `tzCode` values for the zones that are links pointing to this. | `['EST5EDT', ...]`      |
  | `location`     | The raw location name used in the IANA database (e.g., the last part of the `tzCode` before underscores).    | `Kwajalein`        |
  

Inspired by: [list of tz database in wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

- **IANA DB Version**: 2025b
- **Updated**: Thu, 15 May 2025 06:19:36 GMT
- **Last Modified**: Sat, 22 Mar 2025 21:45:31 GMT
- **Number of zones**: 597
- **Zones**: [TIMEZONES.md](https://github.com/petarzarkov/iana-timezones/blob/main/TIMEZONES.md)
- **Tests Coverage**: [coverage](https://petarzarkov.github.io/iana-timezones)
- **Files used from IANA DB**: `zone.tab, zone1970.tab, etcetera, backward`

******

## Overview

`iana-db-timezones` provides up-to-date information about timezones based on the IANA Time Zone Database. Unlike some other packages, this package provides richer details about each timezone, including its type (`Canonical` or `Link`), children/parent, current UTC offset, associated country codes, geographic area, location, and label.

Whenever new data is available, a new version of this package is automatically generated, tested, and published to npm. This ensures you always have the latest timezone information. The library is using semantic versioning.

The package supports CommonJS (CJS), ES Modules (ESM), and includes full TypeScript definitions.

## Installation

You can install the package using npm or yarn:

```bash
npm install iana-db-timezones
```

or

```bash
yarn add iana-db-timezones
```

or

```bash
pnpm add iana-db-timezones
```

## Usage

The package exports several utilities and the raw timezone data.

### Importing the package

**ES Modules (ESM):**

```javascript
import tzdb, { TimezoneCode, Timezone } from 'iana-db-timezones';
```

**CommonJS (CJS):**

```javascript
const tzdb = require('iana-db-timezones');
```

### Accessing the raw data

The raw timezone data is available as an object and an ES6 Map.

**Raw Data Object (`zones`):**

```javascript
import tzdb from 'iana-db-timezones';

const allZones = tzdb.zones;
console.log(allZones['Europe/Sofia']);
/*
// => {
//   tzCode: 'Europe/Sofia',
//   type: 'Canonical',
//   label: 'Europe/Sofia (GMT+03:00)',
//   countryCodes: [ 'BG' ],
//   location: 'Sofia',
//   locationLabel: 'Sofia',
//   geographicArea: 'Europe',
//   utc: '+03:00'
// }
*/
```

**ES6 Map (`map`):**

The data is also available as an ES6 Map for potentially better performance when looking up zones by tzCode.

```javascript
import tzdb from 'iana-db-timezones';

const zoneMap = tzdb.map;
console.log(zoneMap.get('America/New_York'));
/*
// => {
//   children: [ 'EST5EDT', 'US/Eastern' ],
//   comments: 'Eastern (most areas)',
//   countryCodes: [ 'US' ],
//   geographicArea: 'America',
//   label: 'America/New_York (GMT-04:00)',
//   location: 'New_York',
//   locationLabel: 'New York',
//   tzCode: 'America/New_York',
//   type: 'Canonical',
//   utc: '-04:00'
// }
*/
```

### Utility Functions

The package provides helper functions for common tasks.

#### `getZone(zoneName: TimezoneCode): Timezone | null`

Returns the timezone object for a given tzCode, or `null` if not found.

```javascript
import { getZone } from 'iana-db-timezones';

const sofiaZone = getZone('Europe/Sofia');
console.log(sofiaZone);
// => { ... detailed zone object ... }

const unknownZone = getZone('Invalid/Timezone');
console.log(unknownZone);
// => null
```

#### `getZoneUTC(zoneName: TimezoneCode): string | null`

Returns the current UTC offset for a timezone in `+HH:MM` or `-HH:MM` format, or `null` if the zone or offset is not available.

```javascript
import { getZoneUTC } from 'iana-db-timezones';

console.log(getZoneUTC('Europe/Sofia'));
// => '+03:00'

console.log(getZoneUTC('America/New_York'));
// => '-04:00' // Note: This reflects the *current* offset, including DST if applicable.

console.log(getZoneUTC('Invalid/Timezone'));
// => null
```

#### `getZoneISODate(zoneName: TimezoneCode): string | null`

Returns the current ISO 8601 date-time string adjusted to the timezone's current offset, or `null` if the zone or offset is not available or invalid. The format is `YYYY-MM-DDTHH:mm:ss.sss+HH:MM` or `YYYY-MM-DDTHH:mm:ss.sss-HH:MM`.

```javascript
import { getZoneISODate } from 'iana-db-timezones';

console.log(getZoneISODate('Europe/Sofia'));
// => '2025-05-12T08:25:49.322+03:00'

console.log(getZoneISODate('Invalid/Timezone'));
// => null
```

### TypeScript Support

The package is written in TypeScript and includes full type definitions. You can import the types directly:

```typescript
import type { CanonicalTimezone, LinkTimezone, Timezone, TimezoneCode } from 'iana-db-timezones';

const zone: Timezone | null = ianatz.getZone('Europe/London');

// Narrow the zone and typescript intellisense will help you
if (zone && zone.type === 'Canonical') {
  console.log(zone.children);
}
```

---

## Full Timezone List

A comprehensive list of all supported timezones, grouped by geographic area, can be found in [TIMEZONES.md](https://github.com/petarzarkov/iana-timezones/blob/main/TIMEZONES.md).
