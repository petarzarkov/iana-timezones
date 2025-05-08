import { logger } from '../utils/logger.js';

export function getCurrentOffset(timezoneName: string): string {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: timezoneName,
      timeZoneName: 'shortOffset',
    });

    const parts = formatter.formatToParts(new Date());
    const offsetPart = parts.find((part) => part.type === 'timeZoneName');
    const offsetString = offsetPart ? offsetPart.value : '';

    try {
      const isoFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezoneName,
        timeZoneName: 'longOffset',
      });
      const isoParts = isoFormatter.formatToParts(new Date());
      const isoOffsetPart = isoParts.find((part) => part.type === 'timeZoneName');
      if (isoOffsetPart && isoOffsetPart.value.startsWith('GMT')) {
        return isoOffsetPart.value.substring(3); // Remove "GMT"
      }
    } catch (isoErr) {
      logger.warn(`Failed to get longOffset for ${timezoneName}:`, isoErr);
    }

    return offsetString || 'N/A';
  } catch (error) {
    logger.error(`Could not get offset for timezone "${timezoneName}":`, error);
    return 'N/A';
  }
}
