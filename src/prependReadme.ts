import { readFileSync, writeFileSync } from 'node:fs';
import { ParsedData } from './helpers/parseData';
import { version } from '../package.json';

export function prependReadme(parsedData: ParsedData): void {
  const zoneValues = Object.values(parsedData.zones);
  const rz = zoneValues[Math.floor(Math.random() * zoneValues.length)]!;

  const separator = '---';
  const dynamicHeader = `${separator}

Automatically generated timezones from IANA DB [tzdata-latest.tar.gz](https://www.iana.org/time-zones/repository/tzdata-latest.tar.gz)

- No external dependencies
- Weekly cron job to check for new iana timezone data
- Can be used both in both Node.js and Browser
- If you just need the json data - [timezones.json](https://github.com/petarzarkov/iana-timezones/blob/main/timezones.json)

The fields for each timezone object in the timezones-db are as follows:

- \`name\`: The standard IANA Time Zone Database identifier (e.g., \`${rz.name}\`, \`Europe/London\`).
- \`label\`: A display string containing the name followed by the current UTC offset (e.g., \`${rz.label}\`).
- \`utc\`: The current static UTC offset from Coordinated Universal Time (UTC) in \`+HH:MM\` or \`-HH:MM\` format (e.g., \`${rz.utc}\`).
This offset reflects the current state (including Daylight Saving Time if applicable).
- \`locationLabel\`: A human-readable name for the primary city or location associated with the timezone (e.g., \`${rz.locationLabel}\`, \`London\`).
- \`countryCodes\`: An array of \`ISO 3166-1 alpha-2\` country codes associated with this timezone (e.g. \`['KI','MH','TV','UM','WF'\`)
- \`geographicArea\`: The continent or ocean region the timezone is located in (e.g., \`${rz.geographicArea}\`, \`Europe\`, \`Pacific\`).
- \`type\`: Indicates if the entry is a \`Canonical\` timezone or a \`Link\` (an alias) to another timezone.
- \`parent\`: (Present for Link types) The name of the canonical timezone that this link points to.
- \`comments\`: (Optional) Additional notes about the zone.
- \`children\`: (Present for Canonical types) An array of name values for the zones that are links pointing to this canonical zone.
- \`location\`: The raw location name used in the IANA database (e.g. \`${rz.location}\`).

Inspired by: [list of tz database in wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

- **Package version**: ${version}
- **IANA DB Version**: ${parsedData.version}
- **Updated**: ${parsedData.updatedAt}
- **Last Modified**: ${parsedData.lastModified}
- **Number of zones**: ${parsedData.numberOfZones}
- **Zones Data File**: [timezones.ts](https://github.com/petarzarkov/iana-timezones/blob/main/timezones.ts)
- **Zones MD**: [timezones](https://github.com/petarzarkov/iana-timezones/blob/main/TIMEZONES.md)
- **Files used from IANA DB**: \`${parsedData.filesUsed.join(', ')}\`

${separator}`;

  const currentReadmeContent = readFileSync('README.md', 'utf8');

  // Find the index of the first '---' line
  const firstSeparatorStart = currentReadmeContent.indexOf(separator);

  // Find the index of the second '---' line, starting the search after the first one
  // Add separator.length to ensure we find the *next* separator
  const secondSeparatorStart = currentReadmeContent.indexOf(separator, firstSeparatorStart + separator.length);

  // Default content: prepend the new header to the entire existing content (fallback)
  let newReadmeContent = `${dynamicHeader}${currentReadmeContent}`;

  // If both separators are found, perform the targeted replacement
  if (firstSeparatorStart !== -1 && secondSeparatorStart !== -1) {
    // Content before the first separator
    const contentBefore = currentReadmeContent.substring(0, firstSeparatorStart);

    // Content after the second separator (including the newline after it if present)
    const contentAfter = currentReadmeContent.substring(secondSeparatorStart + separator.length);

    // Combine: contentBefore + new dynamic header + contentAfter
    newReadmeContent = `${contentBefore}${dynamicHeader}${contentAfter}`;
  }

  // Log a warning if the expected separator pattern wasn't found
  if (firstSeparatorStart === -1 || secondSeparatorStart === -1) {
    console.warn(
      "Warning: Expected '---' separators not found in the README.md. Prepending the new header to the entire file.",
    );
  }

  writeFileSync('README.md', newReadmeContent);
}
