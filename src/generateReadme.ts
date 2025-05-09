/* eslint-disable max-len */
/* eslint-disable no-useless-escape */
import { writeFileSync } from 'node:fs';
import { ParsedData, ParsedZone } from './helpers/parseData';
import { version, name } from '../package.json';

export function generateReadme(parsedData: ParsedData): void {
  const header = `# ${name}

Auto generated timezones from IANA DB [tzdata-latest.tar.gz](https://www.iana.org/time-zones/repository/tzdata-latest.tar.gz)

Inspired by: [list of tz database in wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

- **Package version**: ${version}
- **IANA DB Version**: ${parsedData.version}
- **Generated**: ${parsedData.date}
- **Zones**: ${parsedData.numberOfZones}
- **JSON data**: [timezones](./timezones.json)
- **Files used**: \`${parsedData.filesUsed.join(', ')}\`

---

`;

  const zonesByArea = new Map<string, ParsedZone[]>();
  for (const zone of Object.values(parsedData.zones)) {
    const area = zone.geographicArea ?? 'Etc';
    if (!zonesByArea.has(area)) {
      zonesByArea.set(area, []);
    }
    zonesByArea.get(area)!.push(zone);
  }

  function createMarkdownLink(timezoneName: string): string {
    const anchor = timezoneName
      .toLowerCase()
      .replace(/[\/_]/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    return `[\`${timezoneName}\`]\(#${anchor}\)`;
  }

  const areaSections = Array.from(zonesByArea.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([area, zones]) => {
      const tableHeader = `## ${area}\n\n| Location | Timezone | Type | Country Codes | Offset | Link |\n|----------|----------|------|---------------|--------|------|\n`;

      const tableRows = zones
        .sort((a, b) => a.timezoneName.localeCompare(b.timezoneName))
        .map((zone) => {
          const rowAnchor = zone.timezoneName
            .toLowerCase()
            .replace(/[\/_]/g, '-')
            .replace(/[^a-z0-9-]/g, '');
          const countryCodes = zone.countryCodes.length > 0 ? zone.countryCodes.join(', ') : '-';
          const offset = zone.currentOffset || 'N/A';

          let linkText = '-';
          if ('children' in zone && zone.children && zone.children.length > 0) {
            linkText = `Children: ${zone.children.map(createMarkdownLink).join(', ')}`;
          } else if ('parent' in zone && zone.parent) {
            linkText = `Parent: ${createMarkdownLink(zone.parent)}`;
          }

          return `| <a name="${rowAnchor}"></a>${zone.locationDisplayName ?? '-'} | \`${zone.timezoneName}\` | ${zone.type} | ${countryCodes} | ${offset} | ${linkText} |`;
        })
        .join('\n');

      return `${tableHeader}${tableRows}\n`;
    })
    .join('\n');

  writeFileSync('README.md', `${header}${areaSections}`);
}
