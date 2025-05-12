import { deepSort } from '../utils/deepSort.js';
import { logger } from '../utils/logger.js';
import type { CanonicalTimezone, IANATzDataFiles, LinkTimezone, ZoneFileRow } from '../types.js';
import { extractGeographicAreaAndLocation, formatLocation } from './utils.js';

import { parse as parseCsv, Options } from 'csv-parse/sync';
import { getCurrentOffset } from './getCurrentOffset.js';

export async function parseData(data: IANATzDataFiles) {
  const legacyZoneFileName = 'zone.tab';
  const zone1970FileName = 'zone1970.tab';
  const etcFileName = 'etcetera';
  const backwardFileName = 'backward';

  const parseOptions: Options = { delimiter: '\t', comment: '#', relax_column_count: true, skip_empty_lines: true };
  const zoneFileOptions: Options = {
    bom: true,
    ...parseOptions,
    columns: ['countryCodes', 'coordinates', 'name', 'comments'],
  };

  for (const file of [legacyZoneFileName, zone1970FileName, etcFileName, backwardFileName]) {
    if (!data[file]) {
      throw new Error(`Missing file: ${file}`);
    }
  }

  const legacyZoneFileRows: ZoneFileRow[] = parseCsv(data[legacyZoneFileName]!, zoneFileOptions);

  const legacyZoneRowsByZoneName: Record<string, ZoneFileRow> = {};
  for (const row of legacyZoneFileRows) {
    legacyZoneRowsByZoneName[row.name] = row;
  }

  const zoneFileRows: ZoneFileRow[] = parseCsv(data[zone1970FileName]!, zoneFileOptions);
  const etceteraRows: string[][] = parseCsv(data[etcFileName]!, { ...parseOptions, delimiter: ['\t', '\t\t'] });
  const linkFileRows: string[][] = parseCsv(data[backwardFileName]!, {
    ...parseOptions,
    delimiter: ['\t', '\t\t'],
  });

  const canonicalTimezones: Record<string, CanonicalTimezone> = {};
  const linkTimezones: Record<string, LinkTimezone> = {};

  for (const row of zoneFileRows) {
    const countryCodes = row.countryCodes.split(',');
    const name = row.name.trim(); // Trim to be safe
    if (!name) {
      logger.warn('Empty name in zone1970.tab row', { row });
      continue;
    }

    const { geographicArea, location } = extractGeographicAreaAndLocation(name);
    const currentOffset = getCurrentOffset(name);
    canonicalTimezones[name] = {
      type: 'Canonical',
      name,
      label: `${name} (GMT${currentOffset})`,
      countryCodes,
      geographicArea,
      location,
      locationLabel: formatLocation(location),
      ...(row.comments && {
        comments: row.comments,
      }),
      utc: currentOffset,
    };
  }

  // Etc zones moved to their own file, need to be added separately
  for (const etcZone of etceteraRows) {
    const recordType = etcZone[0];
    if (!recordType) {
      logger.warn('invalid record type at index[0]', { etcZone });
      continue;
    }

    if (recordType === 'Zone') {
      const [, name] = etcZone;
      if (!name) {
        logger.warn('no timezone name found for Zone record', { etcZone });
        continue;
      }

      const currentOffset = getCurrentOffset(name);
      canonicalTimezones[name] = {
        name,
        label: `${name} (GMT${currentOffset})`,
        locationLabel: null,
        geographicArea: null,
        location: null,
        type: 'Canonical',
        utc: currentOffset,
      };
    }

    if (recordType === 'Link') {
      const [, canonicalTimezoneName, , , , linkName] = etcZone;
      if (!canonicalTimezoneName) {
        logger.warn('File etcetera. No canonical zone found for link', { etcZone });
        continue;
      }
      if (!linkName) {
        logger.warn('File etcetera. No link name found for link', { etcZone });
        continue;
      }

      const parent = canonicalTimezones[canonicalTimezoneName];
      if (!parent) {
        logger.warn(`File etcetera. No parent found for: ${linkName}`, { etcZone });
        continue;
      }

      const currentOffset = getCurrentOffset(linkName);
      linkTimezones[linkName] = {
        name: linkName,
        label: `${linkName} (GMT${currentOffset})`,
        geographicArea: parent.geographicArea,
        location: parent.location,
        locationLabel: parent.locationLabel,
        type: 'Link',
        parent: canonicalTimezoneName,
        utc: currentOffset,
      };

      if (!parent.children && linkName) {
        parent.children = [];
      }
      if (parent.children) {
        parent.children.push(linkName);
      }
    }
  }

  for (const linkRow of linkFileRows) {
    const filteredLinkRow = linkRow.filter((value) => value !== '');

    // Assuming all rows are links
    const [, canonicalZoneName, linkName] = filteredLinkRow;

    if (!canonicalZoneName) {
      logger.warn(`File backward. No canonical zone for name.`, { filteredLinkRow });
      continue;
    }
    if (!linkName) {
      logger.warn(`File backward. No canonical link name.`, { filteredLinkRow });
      continue;
    }
    const canonicalZoneRecord = canonicalTimezones[canonicalZoneName];
    if (!canonicalZoneRecord) {
      logger.warn(`File backward. No canonical zone for: ${canonicalZoneName}.`, { filteredLinkRow });
      continue;
    }

    if (!canonicalZoneRecord.children && linkName) {
      canonicalZoneRecord.children = [];
    }
    if (canonicalZoneRecord.children) {
      canonicalZoneRecord.children.push(linkName);
    }

    const { geographicArea, location } = extractGeographicAreaAndLocation(linkName);

    const legacyRow = legacyZoneRowsByZoneName[linkName];

    const currentOffset = getCurrentOffset(linkName) || canonicalZoneRecord.utc;
    linkTimezones[linkName] = {
      name: linkName,
      label: `${linkName} (GMT${currentOffset})`,
      ...(legacyRow &&
        legacyRow.countryCodes && {
          countryCodes: [legacyRow.countryCodes],
        }),
      geographicArea: geographicArea || canonicalZoneRecord.geographicArea,
      location,
      locationLabel: formatLocation(location),
      ...(legacyRow?.comments && {
        comments: legacyRow.comments,
      }),
      type: 'Link',
      parent: canonicalZoneName,
      utc: currentOffset,
    };
  }

  const zones = {
    ...canonicalTimezones,
    ...linkTimezones,
  };

  const orderedZones = deepSort(zones);

  return {
    version: data.version,
    lastModified: data.lastModified,
    updatedAt: new Date().toUTCString(),
    numberOfZones: Object.keys(zones).length,
    filesUsed: [legacyZoneFileName, zone1970FileName, etcFileName, backwardFileName],
    zones: Object.freeze(orderedZones),
  };
}

export type ParsedData = Awaited<ReturnType<typeof parseData>>;
export type ParsedZone = ParsedData['zones'][string];
