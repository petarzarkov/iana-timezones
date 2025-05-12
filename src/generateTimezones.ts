import { writeFileSync, stat } from 'node:fs';

import { logger } from './utils/logger.js';
import { fetchData } from './helpers/fetchData.js';
import { parseData } from './helpers/parseData.js';
import { prependReadme } from './prependReadme.js';
import { generateTimezonesReadme } from './generateTimezonesReadme.js';
import { inspect } from 'node:util';

export async function generateTimezones() {
  const startTs = Date.now();
  try {
    const latestData = await fetchData({
      filesToExtract: ['zone.tab', 'zone1970.tab', 'etcetera', 'backward'],
    });

    if (!latestData) {
      return;
    }

    const parsedData = await parseData(latestData);

    writeFileSync('previous.json', JSON.stringify({ lastModified: parsedData.lastModified }, null, 2));
    const jsObjectLiteralString = inspect(parsedData, { depth: null, compact: false, breakLength: 140 });

    logger.debug('Generating timezones.ts file...');
    writeFileSync('timezones.ts', `export default ${jsObjectLiteralString};`);
    logger.debug('Generating TIMEZONES.md file...');
    generateTimezonesReadme(parsedData);
    logger.debug('Updating README.md file...');
    prependReadme(parsedData);

    stat('timezones.ts', (err, stats) => {
      if (err) {
        logger.warn('Error on stat timezones.ts', { err });
      }

      logger.debug('Size in kb for timezones.ts', { kb: stats.size / 1024 });
    });

    logger.info('timezone-db successfully generated', { elapsed: Date.now() - startTs });
  } catch (error) {
    logger.error('an error has occurred on processing tz data', { elapsed: Date.now() - startTs, error });
    throw error;
  }
}

await generateTimezones();
