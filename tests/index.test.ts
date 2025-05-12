import { describe, expect, test } from 'vitest';
import tzdb, { TimezoneName, Timezone, CanonicalTimezone } from '../index.js';

describe('iana-db-timezones', () => {
  const zones = Object.keys(tzdb.zones) as TimezoneName[];

  test('unknown zone', () => {
    expect(tzdb.getZone('unknown' as TimezoneName)).toBeNull();
    expect(tzdb.getZoneISODate('unknown' as TimezoneName)).toBeNull();
    expect(tzdb.getZoneUTC('unknown' as TimezoneName)).toBeNull();

    tzdb.map.set('bad-offset' as TimezoneName, {
      comments: 'Aysén Region',
      countryCodes: ['CL'],
      utc: 'bad',
      geographicArea: 'America',
      location: 'Coyhaique',
      locationLabel: 'Coyhaique',
      name: 'America/Coyhaique',
      label: 'some label',
      type: 'Canonical',
    });
    expect(tzdb.getZoneISODate('bad-offset' as TimezoneName)).toBeNull();
  });

  test.each(
    zones.map((zoneName) => ({
      zoneName,
    })),
  )('$zoneName', ({ zoneName }) => {
    const zone = tzdb.getZone(zoneName) as Timezone;
    expect(zone).toBeDefined();
    expect(zone.label).toEqual(`${zoneName} (GMT${zone.utc})`);

    if ('parent' in zone) {
      expect(zone.parent).toBeDefined();
      expect(zone.type).toEqual('Link');
      const parentZone = tzdb.getZone(zone.parent as TimezoneName) as CanonicalTimezone;
      expect(parentZone.type).toEqual('Canonical');
      if (parentZone.children) {
        expect(parentZone.children).toBeDefined();
        expect(parentZone.children).toContain(zoneName);
      }
    }

    const utc = tzdb.getZoneUTC(zoneName);
    if (utc) {
      const now = Date.now();
      const isoDate = tzdb.getZoneISODate(zoneName);

      expect(isoDate).toBeDefined();
      const match = utc.match(/^([+-])(\d{2}):(\d{2})$/);
      expect(utc).toMatch(/^([+-])(\d{2}):(\d{2})$/);
      expect(match).toBeDefined();
      const [, sign, hours, minutes] = match!;
      expect(sign).toBeOneOf(['+', '-']);
      expect(parseInt(hours)).toBeGreaterThanOrEqual(0);
      expect(parseInt(hours)).toBeLessThanOrEqual(23);
      expect(parseInt(minutes)).toBeGreaterThanOrEqual(0);
      expect(parseInt(minutes)).toBeLessThanOrEqual(59);

      const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
      const offsetMillis = totalMinutes * 60 * 1000 * (sign === '+' ? 1 : -1);
      const adjusted = new Date(now + offsetMillis);
      const iso = adjusted.toISOString().replace('Z', '');
      expect(new Date(`${iso}${utc}`).getTime()).toBeLessThanOrEqual(new Date(isoDate!).getTime());
    } else {
      expect(utc).toBeNull();
    }
  });
});
