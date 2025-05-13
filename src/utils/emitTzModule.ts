import { ParsedZone } from '../helpers/parseData';

export function emitTzModule(zones: Record<string, ParsedZone>): string {
  const entries = Object.entries(zones).map(([tzCode, zone]) => {
    const properties = [
      `tzCode: "${tzCode}",`,
      `type: "${zone.type}",`,
      `geographicArea: "${zone.geographicArea}",`,
      `location: "${zone.location}",`,
      `locationLabel: "${zone.locationLabel}",`,
      zone.type === 'Link' ? `parent: "${zone.parent}",` : null,
      zone.type === 'Canonical' && zone.children?.length
        ? `children: [${zone.children.map((c) => `"${c}"`).join(', ')}],`
        : null,
      zone.countryCodes?.length ? `countryCodes: [${zone.countryCodes.map((cc) => `"${cc}"`).join(', ')}],` : null,
      zone.comments ? `comments: \`${zone.comments}\`,` : null,
      `get utc() { return getCurrentOffset("${tzCode}"); },`,
      `get label() { return \`${tzCode} (GMT\${getCurrentOffset("${tzCode}")})\`; },`,
    ];

    return `  "${tzCode}": {\n    ${properties.filter(Boolean).join('\n    ')}\n  }`;
  });

  return `import { getCurrentOffset } from './src/helpers/getCurrentOffset.js';

const timezones = {
${entries.join(',\n')}
};

export default timezones;
`;
}
