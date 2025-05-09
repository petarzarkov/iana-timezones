import { writeFileSync, stat } from 'node:fs';

import { logger } from './utils/logger.js';
import { fetchData } from './helpers/fetchData.js';
import { parseData } from './helpers/parseData.js';
import { generateReadme } from './generateReadme.js';

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
    writeFileSync('timezones.ts', `export default ${JSON.stringify(parsedData, null, 1)};`);
    generateReadme(parsedData);

    stat('timezones.ts', (err, stats) => {
      if (err) {
        logger.warn('Error on stat timezones.json', { err });
      }

      logger.debug('Size in kb for timezones.ts', { kb: stats.size / 1024 });
    });

    logger.info('tz data successfully generated', { elapsed: Date.now() - startTs });
  } catch (error) {
    logger.error('an error has occurred on processing tz data', { elapsed: Date.now() - startTs, error });
    throw error;
  }
}

await generateTimezones();
