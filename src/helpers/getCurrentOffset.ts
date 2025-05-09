import { logger } from '../utils/logger.js';

export function getCurrentOffset(timezoneName: string): string | null {
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
        const formattedPart = isoOffsetPart.value.substring(3); // Remove "GMT"
        return formattedPart !== '' ? formattedPart : '+00:00';
      }
    } catch (isoErr) {
      logger.warn(`Failed to get longOffset for ${timezoneName}:`, isoErr);
      return null;
    }

    if (offsetString === '') {
      return null;
    }

    return offsetString || null;
  } catch (error) {
    logger.warn(`Could not get offset for timezone "${timezoneName}":`, error);
    return null;
  }
}
