import { Readable } from 'node:stream';
import zlib from 'node:zlib';

import { decompressTar } from './decompressTar.js';

export async function decompressTarGz(input: Buffer | Readable) {
  if (!(Buffer.isBuffer(input) || input instanceof Readable)) {
    throw new TypeError(`Expected a Buffer or Readable stream, got ${typeof input}`);
  }

  const unzip = zlib.createGunzip();
  const result = decompressTar(unzip);

  if (Buffer.isBuffer(input)) {
    unzip.end(input);
  } else {
    input.pipe(unzip);
  }

  return result;
}
