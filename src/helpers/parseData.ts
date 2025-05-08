import { deepSort } from '../utils/deepSort.js';
import { logger } from '../utils/logger.js';
import type { CanonicalTimezone, IANATzDataFiles, LinkTimezone, ZoneFileRow } from './types.js';
import { extractGeographicAreaAndLocation, formatLocation } from './utils.js';

import { parse as parseCsv } from 'csv-parse/sync';

export async function parseData(data: IANATzDataFiles) {
  const parseOptions = { delimiter: '\t', comment: '#', relax_column_count: true, skip_empty_lines: true };

  const legacyZoneFileName = 'zone.tab';
  const zone1970FileName = 'zone1970.tab';
  const etcFileName = 'etcetera';
  const backwardFileName = 'backward';

  const zoneFileOptions = {
    bom: true,
    ...parseOptions,
    columns: ['countryCodes', 'coordinates', 'timezoneName', 'comments'],
  };

  for (const file of [legacyZoneFileName, zone1970FileName, etcFileName, backwardFileName]) {
    if (!data[file]) {
      throw new Error(`Missing file: ${file}`);
    }
  }

  const legacyZoneFileRows: ZoneFileRow[] = parseCsv(data[legacyZoneFileName]!, zoneFileOptions);

  const legacyZoneRowsByZoneName: Record<string, ZoneFileRow> = {};
  for (const row of legacyZoneFileRows) {
    legacyZoneRowsByZoneName[row.timezoneName] = row;
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
    const { geographicArea, location } = extractGeographicAreaAndLocation(row.timezoneName);

    canonicalTimezones[row.timezoneName] = {
      children: [],
      type: 'Canonical',
      timezoneName: row.timezoneName,
      countryCodes,
      geographicArea,
      geographicAreaDisplayName: geographicArea,
      location,
      locationDisplayName: formatLocation(location),
      comments: row.comments || null,
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
      const [, timezoneName] = etcZone;
      if (!timezoneName) {
        logger.warn('no timezone name found for Zone record', { etcZone });
        continue;
      }

      canonicalTimezones[timezoneName] = {
        timezoneName,
        locationDisplayName: null,
        countryCodes: [],
        geographicArea: null,
        geographicAreaDisplayName: null,
        location: null,
        comments: null,
        children: [],
        type: 'Canonical',
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
        logger.warn(`File etcetera. No parent found for: ${canonicalTimezoneName}`, { etcZone });
        continue;
      }

      linkTimezones[linkName] = {
        timezoneName: linkName,
        locationDisplayName: null,
        countryCodes: [],
        geographicArea: null,
        geographicAreaDisplayName: null,
        location: null,
        comments: null,
        type: 'Link',
        parent: canonicalTimezoneName,
      };

      parent.children.push(linkName);
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

    canonicalZoneRecord.children.push(linkName);

    const { geographicArea, location } = extractGeographicAreaAndLocation(linkName);

    const legacyRow = legacyZoneRowsByZoneName[linkName];

    linkTimezones[linkName] = {
      timezoneName: linkName,
      locationDisplayName: formatLocation(location),
      countryCodes: legacyRow ? [legacyRow.countryCodes] : [],
      geographicArea: geographicArea,
      geographicAreaDisplayName: geographicArea,
      location,
      comments: legacyRow?.comments || null,
      type: 'Link',
      parent: canonicalZoneName,
    };
  }

  const zones = {
    ...canonicalTimezones,
    ...linkTimezones,
  };

  const orderedZones = deepSort(zones);

  return {
    version: data.version,
    numberOfZones: Object.keys(zones).length,
    filesUsed: [legacyZoneFileName, zone1970FileName, etcFileName, backwardFileName],
    zones: orderedZones,
  };
}
