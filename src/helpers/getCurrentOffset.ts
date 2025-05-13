import { logger } from '../utils/logger.js';

const futureOffsets: Record<string, string> = {
  'America/Coyhaique': '-03:00',
};

export function getCurrentOffset(tzCode: string): string | null {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: tzCode,
      timeZoneName: 'shortOffset',
    });

    const parts = formatter.formatToParts(new Date());
    const offsetPart = parts.find((part) => part.type === 'timeZoneName');
    const offsetString = offsetPart ? offsetPart.value : null;

    try {
      const isoFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tzCode,
        timeZoneName: 'longOffset',
      });
      const isoParts = isoFormatter.formatToParts(new Date());
      const isoOffsetPart = isoParts.find((part) => part.type === 'timeZoneName');
      if (isoOffsetPart && isoOffsetPart.value.startsWith('GMT')) {
        const formattedPart = isoOffsetPart.value.substring(3); // Remove "GMT"
        return formattedPart !== '' ? formattedPart : '+00:00';
      }
    } catch (isoErr) {
      logger.warn(`Failed to get longOffset for ${tzCode}:`, isoErr);
      return null;
    }

    if (offsetString === '') {
      return null;
    }

    return offsetString || null;
  } catch (error) {
    if (futureOffsets[tzCode]) {
      return futureOffsets[tzCode];
    } else {
      logger.warn(`Could not get offset for timezone "${tzCode}":`, error);
    }

    return null;
  }
}
