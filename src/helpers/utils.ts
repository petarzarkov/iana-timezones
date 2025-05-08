/**
 *
 * A valid row looks like:
 * ```
 * [ 'AU', '-3157+14127', 'Australia/Broken_Hill', 'New South Wales (Yancowinna)' ],
 * ```
 * OR
 * ```
 * ['GB,GG,IM,JE', '+513030-0000731', 'Europe/London']
 * ```
 */
export function isValidZoneTabRow(row: string[]) {
  const zone = row?.[0]?.split(',')?.[0];
  if (!zone) {
    return false;
  }

  return /^[A-Z]{2}$/.test(zone);
}

export function isValidLinkTabRow(row: string[]) {
  const link = row?.[0]?.split(',')?.[0];
  if (!link) {
    return false;
  }
  return /^Link{1}$/.test(link);
}

export function formatLocation(location: string) {
  return location.replace('/', ' - ').replace('_', ' ');
}

export function extractGeographicAreaAndLocation(input: string): { geographicArea: string; location: string } {
  const firstSlash = input.indexOf('/');
  const geographicArea = input.slice(0, firstSlash);
  // + 1 (don't actually copy the first slash)
  const location = input.slice(firstSlash + 1, input.length);
  return { geographicArea, location };
}

export function removeLineBreaks(value: string): string {
  return value.replace(/\n/g, '');
}
