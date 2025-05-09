export function formatLocation(location: string) {
  return location.replace('/', ' - ').replace('_', ' ');
}

export function extractGeographicAreaAndLocation(input: string): { geographicArea: string | null; location: string } {
  const firstSlash = input.indexOf('/');
  if (firstSlash === -1) {
    return { geographicArea: null, location: input };
  }

  const geographicArea = input.slice(0, firstSlash);
  // + 1 (don't actually copy the first slash)
  const location = input.slice(firstSlash + 1, input.length);
  return { geographicArea, location };
}

export function removeLineBreaks(value: string): string {
  return value.replace(/\n/g, '');
}
