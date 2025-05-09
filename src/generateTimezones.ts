import { writeFileSync } from 'node:fs';

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
    writeFileSync('timezones.json', JSON.stringify(parsedData, null, 2));
    generateReadme(parsedData);

    logger.info('tz data successfully generated', { elapsed: Date.now() - startTs });
  } catch (error) {
    logger.error('an error has occurred on processing tz data', { elapsed: Date.now() - startTs, error });
    throw error;
  }
}

await generateTimezones();
