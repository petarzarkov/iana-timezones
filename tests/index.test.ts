import { describe, expect, test } from 'vitest';
import ianatz, { TimezoneName, Timezone, CanonicalTimezone } from '../index.js';

describe('iana-timezones', () => {
  const zones = Object.keys(ianatz.zones) as TimezoneName[];

  test('unknown zone', () => {
    expect(ianatz.getZone('unknown' as TimezoneName)).toBeNull();
    expect(ianatz.getZoneISODate('unknown' as TimezoneName)).toBeNull();
    expect(ianatz.getZoneCurrentOffset('unknown' as TimezoneName)).toBeNull();

    ianatz.map.set('bad-offset' as TimezoneName, {
      comments: 'Aysén Region',
      countryCodes: ['CL'],
      currentOffset: 'bad',
      geographicArea: 'America',
      location: 'Coyhaique',
      locationDisplayName: 'Coyhaique',
      timezoneName: 'America/Coyhaique',
      type: 'Canonical',
    });
    expect(ianatz.getZoneISODate('bad-offset' as TimezoneName)).toBeNull();
  });

  test.each(
    zones.map((zoneName) => ({
      zoneName,
    })),
  )('$zoneName', ({ zoneName }) => {
    const zone = ianatz.getZone(zoneName) as Timezone;
    expect(zone).toBeDefined();

    if ('parent' in zone) {
      expect(zone.parent).toBeDefined();
      expect(zone.type).toEqual('Link');
      const parentZone = ianatz.getZone(zone.parent as TimezoneName) as CanonicalTimezone;
      expect(parentZone.type).toEqual('Canonical');
      if (parentZone.children) {
        expect(parentZone.children).toBeDefined();
        expect(parentZone.children).toContain(zoneName);
      }
    }

    const currentOffset = ianatz.getZoneCurrentOffset(zoneName);
    if (currentOffset) {
      const now = Date.now();
      const isoDate = ianatz.getZoneISODate(zoneName);

      expect(isoDate).toBeDefined();
      const match = currentOffset.match(/^([+-])(\d{2}):(\d{2})$/);
      expect(currentOffset).toMatch(/^([+-])(\d{2}):(\d{2})$/);
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
      expect(new Date(`${iso}${currentOffset}`).getTime()).toBeLessThanOrEqual(new Date(isoDate!).getTime());
    } else {
      expect(currentOffset).toBeNull();
    }
  });
});
