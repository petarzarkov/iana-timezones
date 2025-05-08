export function deepSort<ToSort extends Record<string, unknown> | Record<string, unknown>[]>(obj: ToSort): ToSort {
  if (Array.isArray(obj)) {
    return obj.map(deepSort).sort((a, b) => {
      if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
        return JSON.stringify(a).localeCompare(JSON.stringify(b));
      }
      return String(a).localeCompare(String(b));
    }) as ToSort;
  }
  if (typeof obj === 'object' && obj !== null) {
    const sortedObj: Record<string, unknown> = {};
    Object.keys(obj)
      .sort()
      .forEach((key) => {
        sortedObj[key] = deepSort(obj[key] as Record<string, unknown>);
      });
    return sortedObj as ToSort;
  }
  return obj;
}
