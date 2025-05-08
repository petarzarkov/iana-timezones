import { writeFileSync } from 'node:fs';

import { logger } from './utils/logger.js';
import { getData } from './helpers/getData.js';
import { parseData } from './helpers/parseData.js';

async function generateTimezones() {
  const startTs = Date.now();
  try {
    const latestData = await getData({
      filesToExtract: ['zone.tab', 'zone1970.tab', 'etcetera', 'backward'],
    });
    const parsedData = await parseData(latestData);

    writeFileSync('timezones.json', JSON.stringify(parsedData, null, 2));
    logger.info('tz data successfully generated', { elapsed: Date.now() - startTs });
  } catch (error) {
    logger.error('an error has occurred on processing tz data', { elapsed: Date.now() - startTs, error });
  }
}

generateTimezones();
