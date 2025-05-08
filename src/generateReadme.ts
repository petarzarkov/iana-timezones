import { writeFileSync } from 'node:fs';
import { ParsedData, ParsedZone } from './helpers/parseData';

export function generateReadme(parsedData: ParsedData): void {
  const header = `# iana-timezones

Auto generated timezones from IANA DB [tzdata-latest.tar.gz](https://www.iana.org/time-zones/repository/tzdata-latest.tar.gz)

Inspired by: [list of tz database time zones in wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

- **IANA DB Version**: ${parsedData.version}
- **Generated**: ${parsedData.date}
- **Zones**: ${parsedData.numberOfZones}
- **Files used**: \`${parsedData.filesUsed.join(', ')}\`

---

`;

  // Group zones by geographicArea
  const zonesByArea = new Map<string, ParsedZone[]>();
  for (const zone of Object.values(parsedData.zones)) {
    const area = zone.geographicAreaDisplayName ?? zone.geographicArea ?? 'Etc';
    if (!zonesByArea.has(area)) {
      zonesByArea.set(area, []);
    }
    zonesByArea.get(area)!.push(zone);
  }

  const areaSections = Array.from(zonesByArea.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([area, zones]) => {
      const tableHeader = `## ${area}\n\n| Location | Timezone | Type | Link |\n|----------|----------|------|------|\n`;
      const tableRows = zones
        .sort((a, b) => a.timezoneName.localeCompare(b.timezoneName))
        .map((zone) => {
          const link =
            'children' in zone && zone.children && zone.children.length
              ? `Children: ${zone.children.join(', ')}`
              : 'parent' in zone && zone.parent
                ? `Parent: ${zone.parent}`
                : '-';
          return `| ${zone.locationDisplayName} | \`${zone.timezoneName}\` | ${zone.type} | ${link} |`;
        })
        .join('\n');
      return `${tableHeader}${tableRows}\n`;
    })
    .join('\n');

  writeFileSync('README.md', `${header}${areaSections}`);
}
