import { Readable } from 'node:stream';
import { decompressTarGz } from '../utils/decompressTarGz.js';
import { IANATzDataFiles, IANATzDataParams } from '../types.js';
import { removeLineBreaks } from './utils.js';
import { logger } from '../utils/logger.js';

export async function fetchData(params?: IANATzDataParams): Promise<IANATzDataFiles | null> {
  const opts = {
    url: params?.url ?? process.env.IANA_TZ_DB_URL,
    filesToExtract: params?.filesToExtract ?? ['zone.tab', 'backward', 'etcetera'],
    fileEncoding: params?.fileEncoding ?? 'utf8',
  };

  const { url, filesToExtract, fileEncoding } = opts || {};
  if (!url) {
    throw new Error('No iana tz db URL provided');
  }

  const init: RequestInit = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const { lastModified } = await import('../../previous.json');
    const lastModifiedDate = new Date(lastModified).toUTCString();
    if (lastModifiedDate) {
      init.headers = {
        'If-Modified-Since': lastModifiedDate,
      };
    }
  } catch (error) {
    logger.warn('Error using last modified date', { error });
  }

  const response = await fetch(url, init);
  if (response.status === 304) {
    logger.info('No IANA db timezone changes since last check, skipping data fetch');
    return null;
  }

  if (!response.ok || response.status < 200 || response.status >= 300) {
    throw new Error(`Fetch failed: ${response.status}`);
  }

  if (!response.body) {
    throw new Error('Response body is empty');
  }

  const lastModified = response.headers.get('last-modified') || null;
  const nodeReadableStream = Readable.fromWeb(response.body);
  const decompressed = await decompressTarGz(nodeReadableStream);

  const IANATzDataFiles: IANATzDataFiles = decompressed.reduce(
    (acc: IANATzDataFiles, file) => {
      const fileName = file.path;
      if (filesToExtract.includes(fileName) || fileName === 'version') {
        const document = file.data.toString(fileEncoding);
        acc[fileName] = document;
      }
      return acc;
    },
    { version: 'no version file found', lastModified: lastModified || 'no last modified date' },
  );

  IANATzDataFiles.version = removeLineBreaks(IANATzDataFiles.version);

  return IANATzDataFiles;
}
