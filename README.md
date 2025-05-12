# timezone-db

[![cov](https://petarzarkov.github.io/iana-timezones/coverage.svg)](https://github.com/petarzarkov/iana-timezones/actions)
[![build](https://github.com/petarzarkov/iana-timezones/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/petarzarkov/iana-timezones/actions)
[![license](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

Automatically generated timezones from IANA DB [tzdata-latest.tar.gz](https://www.iana.org/time-zones/repository/tzdata-latest.tar.gz)

- No external dependencies
- Weekly cron job to check for new iana timezone data
- Can be used both in both Node.js and Browser
- If you just need the json data - [timezones.json](https://github.com/petarzarkov/iana-timezones/blob/main/timezones.json)

The fields for each timezone object in the timezones-db are as follows:

- `name`: The standard IANA Time Zone Database identifier (e.g., `America/Phoenix`, `Europe/London`).
- `label`: A display string containing the name followed by the current UTC offset (e.g., `America/Phoenix (GMT-07:00)`).
- `utc`: The current static UTC offset from Coordinated Universal Time (UTC) in `+HH:MM` or `-HH:MM` format (e.g., `-07:00`).
This offset reflects the current state (including Daylight Saving Time if applicable).
- `locationLabel`: A human-readable name for the primary city or location associated with the timezone (e.g., `Phoenix`, `London`).
- `countryCodes`: An array of `ISO 3166-1 alpha-2` country codes associated with this timezone (e.g. `['KI','MH','TV','UM','WF'`)
- `geographicArea`: The continent or ocean region the timezone is located in (e.g., `America`, `Europe`, `Pacific`).
- `type`: Indicates if the entry is a `Canonical` timezone or a `Link` (an alias) to another timezone.
- `parent`: (Present for Link types) The name of the canonical timezone that this link points to.
- `comments`: (Optional) Additional notes about the zone.
- `children`: (Present for Canonical types) An array of name values for the zones that are links pointing to this canonical zone.
- `location`: The raw location name used in the IANA database (e.g. `Phoenix`).

Inspired by: [list of tz database in wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

- **Package version**: 0.1.2
- **IANA DB Version**: 2025b
- **Updated**: Mon, 12 May 2025 12:57:38 GMT
- **Last Modified**: Sat, 22 Mar 2025 21:45:31 GMT
- **Number of zones**: 597
- **Zones Data File**: [timezones.ts](https://github.com/petarzarkov/iana-timezones/blob/main/timezones.ts)
- **Zones MD**: [timezones](https://github.com/petarzarkov/iana-timezones/blob/main/TIMEZONES.md)
- **Files used from IANA DB**: `zone.tab, zone1970.tab, etcetera, backward`

---







## Overview

`timezone-db` provides up-to-date information about timezones based on the IANA Time Zone Database. Unlike some other packages, this package provides richer details about each timezone, including its type (`Canonical` or `Link`), children/parent, current UTC offset, associated country codes, geographic area, location, and display name.

A key feature is the automated weekly update process. A cron job checks for updates to the IANA tz data, and if new data is available, a new version of this package is automatically generated, tested, and published to npm. This ensures you always have the latest timezone information. Using semantic versioning.

The package supports CommonJS (CJS), ES Modules (ESM), and includes full TypeScript definitions.

## Installation

You can install the package using npm or yarn:

```bash
npm install timezone-db
```

or

```bash
yarn add timezone-db
```

or

```bash
pnpm add timezone-db
```

## Usage

The package exports several utilities and the raw timezone data.

### Importing the package

**ES Modules (ESM):**

```javascript
import tzdb, { TimezoneName, Timezone } from 'timezone-db';
```

**CommonJS (CJS):

```javascript
const tzdb = require('timezone-db');
```

### Accessing the raw data

The raw timezone data is available as an object and an ES6 Map.

**Raw Data Object (`zones`):**

```javascript
import tzdb from 'timezone-db';

const allZones = tzdb.zones;
console.log(allZones['Europe/Sofia']);
/*
// => {
//   countryCodes: ['BG'],
//   utc: '+03:00',
//   geographicArea: 'Europe',
//   location: 'Sofia',
//   locationLabel: 'Sofia',
//   name: 'Europe/Sofia',
//   type: 'Canonical'
// }
*/
```

**ES6 Map (`map`):**

The data is also available as an ES6 Map for potentially better performance when looking up zones by name.

```javascript
import tzdb from 'timezone-db';

const zoneMap = tzdb.map;
console.log(zoneMap.get('America/New_York'));
/*
// => {
//   children: [ 'EST5EDT', 'US/Eastern' ],
//   comments: 'Eastern (most areas)',
//   countryCodes: [ 'US' ],
//   utc: '-04:00',
//   geographicArea: 'America',
//   location: 'New_York',
//   locationLabel: 'New York',
//   name: 'America/New_York',
//   type: 'Canonical'
// }
*/
```

### Utility Functions

The package provides helper functions for common tasks.

#### `getZone(zoneName: TimezoneName): Timezone | null`

Returns the timezone object for a given zone name, or `null` if not found.

```javascript
import { getZone } from 'timezone-db';

const sofiaZone = getZone('Europe/Sofia');
console.log(sofiaZone);
// => { ... detailed zone object ... }

const unknownZone = getZone('Invalid/Timezone');
console.log(unknownZone);
// => null
```

#### `getZoneUTC(zoneName: TimezoneName): string | null`

Returns the current UTC offset for a timezone in `+HH:MM` or `-HH:MM` format, or `null` if the zone or offset is not available.

```javascript
import { getZoneUTC } from 'timezone-db';

console.log(getZoneUTC('Europe/Sofia'));
// => '+03:00'

console.log(getZoneUTC('America/New_York'));
// => '-04:00' // Note: This reflects the *current* offset, including DST if applicable.

console.log(getZoneUTC('Invalid/Timezone'));
// => null
```

#### `getZoneISODate(zoneName: TimezoneName): string | null`

Returns the current ISO 8601 date-time string adjusted to the timezone's current offset, or `null` if the zone or offset is not available or invalid. The format is `YYYY-MM-DDTHH:mm:ss.sss+HH:MM` or `YYYY-MM-DDTHH:mm:ss.sss-HH:MM`.

```javascript
import { getZoneISODate } from 'timezone-db';

console.log(getZoneISODate('Europe/Sofia'));
// => '2025-05-12T08:25:49.322+03:00' (example output)

console.log(getZoneISODate('America/New_York'));
// => '2025-05-12T01:25:49.322-04:00' (example output, adjusted for offset)

console.log(getZoneISODate('Invalid/Timezone'));
// => null
```

### TypeScript Support

The package is written in TypeScript and includes full type definitions. You can import the types directly:

```typescript
import type { CanonicalTimezone, LinkTimezone, Timezone, TimezoneName } from 'timezone-db';

const zone: Timezone | null = ianatz.getZone('Europe/London');

// Narrow the zone and typescript intellisense will help you
if (zone && zone.type === 'Canonical') {
  console.log(zone.children);
}
```

---

## Full Timezone List

A comprehensive list of all supported timezones, grouped by geographic area, can be found in [TIMEZONES.md](https://github.com/petarzarkov/iana-timezones/blob/main/TIMEZONES.md).

