import { Readable } from 'node:stream';
import { decompressTarGz } from '../utils/decompressTarGz.js';
import { IANATzDataFiles, IANATzDataParams } from '../types.js';
import { removeLineBreaks } from './utils.js';

export async function getData(params?: IANATzDataParams): Promise<IANATzDataFiles> {
  const opts = {
    url: params?.url ?? process.env.IANA_TZ_DB_URL,
    filesToExtract: params?.filesToExtract ?? ['zone.tab', 'backward', 'etcetera'],
    fileEncoding: params?.fileEncoding ?? 'utf8',
  };

  const { url, filesToExtract, fileEncoding } = opts || {};
  if (!url) {
    throw new Error('No iana tz db URL provided');
  }

  const response = await fetch(url);
  if (!response.ok || response.status < 200 || response.status >= 300) {
    throw new Error(`Fetch failed: ${response.status}`);
  }

  if (!response.body) {
    throw new Error('Response body is empty');
  }

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
    { version: 'no version file found' },
  );

  IANATzDataFiles.version = removeLineBreaks(IANATzDataFiles.version);

  return IANATzDataFiles;
}
