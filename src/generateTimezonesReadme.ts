/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
import { writeFileSync } from 'node:fs';
import { ParsedData, ParsedZone } from './helpers/parseData';

export function generateTimezonesReadme(parsedData: ParsedData): void {
  const zonesByArea = new Map<string, ParsedZone[]>();
  for (const zone of Object.values(parsedData.zones)) {
    const area = zone.geographicArea ?? 'Etc';
    if (!zonesByArea.has(area)) {
      zonesByArea.set(area, []);
    }
    zonesByArea.get(area)!.push(zone);
  }

  function createMarkdownLink(tzCode: string): string {
    const anchor = tzCode
      .toLowerCase()
      .replace(/[\/_]/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    return `[\`${tzCode}\`]\(#${anchor}\)`;
  }

  const timezoneTableContent = Array.from(zonesByArea.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([area, zones]) => {
      const tableHeader = `## ${area}\n\n| Location | Timezone | Type | Country Codes | Current Offset | Link |\n|----------|----------|------|---------------|----------------|------|\n`;

      const tableRows = zones
        .sort((a, b) => a.tzCode.localeCompare(b.tzCode))
        .map((zone) => {
          const rowAnchor = zone.tzCode
            .toLowerCase()
            .replace(/[\/_]/g, '-')
            .replace(/[^a-z0-9-]/g, '');
          const countryCodes = zone.countryCodes && zone.countryCodes.length > 0 ? zone.countryCodes.join(', ') : '-';
          const offset = zone.utc || 'N/A';

          let linkText = '-';
          if ('children' in zone && zone.children && zone.children.length > 0) {
            linkText = `Children: ${zone.children.map(createMarkdownLink).join(', ')}`;
          } else if ('parent' in zone && zone.parent) {
            linkText = `Parent: ${createMarkdownLink(zone.parent)}`;
          }

          return `| <a name="${rowAnchor}"></a>${zone.locationLabel ?? '-'} | \`${zone.tzCode}\` | ${zone.type} | ${countryCodes} | ${offset} | ${linkText} |`;
        })
        .join('\n');

      return `${tableHeader}${tableRows}\n`;
    })
    .join('\n');

  writeFileSync('TIMEZONES.md', `## Full Timezone Data\n\n${timezoneTableContent}`);
}
