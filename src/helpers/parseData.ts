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
    columns: ['countryCodes', 'coordinates', 'tzCode', 'comments'],
  };

  for (const file of [legacyZoneFileName, zone1970FileName, etcFileName, backwardFileName]) {
    if (!data[file]) {
      throw new Error(`Missing file: ${file}`);
    }
  }

  const legacyZoneFileRows: ZoneFileRow[] = parseCsv(data[legacyZoneFileName]!, zoneFileOptions);

  const legacyZoneRowsByZoneName: Record<string, ZoneFileRow> = {};
  for (const row of legacyZoneFileRows) {
    legacyZoneRowsByZoneName[row.tzCode] = row;
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
    const tzCode = row.tzCode.trim(); // Trim to be safe
    if (!tzCode) {
      logger.warn('Empty tzCode in zone1970.tab row', { row });
      continue;
    }

    const { geographicArea, location } = extractGeographicAreaAndLocation(tzCode);
    const currentOffset = getCurrentOffset(tzCode);
    canonicalTimezones[tzCode] = {
      type: 'Canonical',
      tzCode,
      label: `${tzCode} (GMT${currentOffset})`,
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
      const [, tzCode] = etcZone;
      if (!tzCode) {
        logger.warn('no timezone tzCode found for Zone record', { etcZone });
        continue;
      }

      const currentOffset = getCurrentOffset(tzCode);
      canonicalTimezones[tzCode] = {
        tzCode,
        label: `${tzCode} (GMT${currentOffset})`,
        locationLabel: null,
        geographicArea: null,
        location: null,
        type: 'Canonical',
        utc: currentOffset,
      };
    }

    if (recordType === 'Link') {
      const [, canonicalTimezoneName, , , , linkCode] = etcZone;
      if (!canonicalTimezoneName) {
        logger.warn('File etcetera. No canonical zone found for link', { etcZone });
        continue;
      }
      if (!linkCode) {
        logger.warn('File etcetera. No link tzCode found for link', { etcZone });
        continue;
      }

      const parent = canonicalTimezones[canonicalTimezoneName];
      if (!parent) {
        logger.warn(`File etcetera. No parent found for: ${linkCode}`, { etcZone });
        continue;
      }

      const currentOffset = getCurrentOffset(linkCode);
      linkTimezones[linkCode] = {
        tzCode: linkCode,
        label: `${linkCode} (GMT${currentOffset})`,
        geographicArea: parent.geographicArea,
        location: parent.location,
        locationLabel: parent.locationLabel,
        type: 'Link',
        parent: canonicalTimezoneName,
        utc: currentOffset,
      };

      if (!parent.children && linkCode) {
        parent.children = [];
      }
      if (parent.children) {
        parent.children.push(linkCode);
      }
    }
  }

  for (const linkRow of linkFileRows) {
    const filteredLinkRow = linkRow.filter((value) => value !== '');

    // Assuming all rows are links
    const [, canonicalZoneName, linkCode] = filteredLinkRow;

    if (!canonicalZoneName) {
      logger.warn(`File backward. No canonical zone for tzCode.`, { filteredLinkRow });
      continue;
    }
    if (!linkCode) {
      logger.warn(`File backward. No canonical link tzCode.`, { filteredLinkRow });
      continue;
    }
    const canonicalZoneRecord = canonicalTimezones[canonicalZoneName];
    if (!canonicalZoneRecord) {
      logger.warn(`File backward. No canonical zone for: ${canonicalZoneName}.`, { filteredLinkRow });
      continue;
    }

    if (!canonicalZoneRecord.children && linkCode) {
      canonicalZoneRecord.children = [];
    }
    if (canonicalZoneRecord.children) {
      canonicalZoneRecord.children.push(linkCode);
    }

    const { geographicArea, location } = extractGeographicAreaAndLocation(linkCode);

    const legacyRow = legacyZoneRowsByZoneName[linkCode];

    const currentOffset = getCurrentOffset(linkCode) || canonicalZoneRecord.utc;
    linkTimezones[linkCode] = {
      tzCode: linkCode,
      label: `${linkCode} (GMT${currentOffset})`,
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
