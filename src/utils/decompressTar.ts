import { Readable } from 'node:stream';
import tarStream, { Headers } from 'tar-stream';

export interface FileResult {
  data: Buffer;
  mode: number | undefined;
  mtime: Date | undefined;
  path: string;
  type: Pick<Headers, 'type'>['type'];
  linkname?: string | null | undefined;
}

export async function decompressTar(input: Buffer | Readable): Promise<FileResult[]> {
  const extract = tarStream.extract();
  const files: FileResult[] = [];

  extract.on('entry', (header, stream, next) => {
    const chunk: Uint8Array<ArrayBufferLike>[] = [];

    stream.on('data', (data) => chunk.push(data));
    stream.on('end', () => {
      const file: FileResult = {
        data: Buffer.concat(chunk),
        mode: header.mode,
        mtime: header.mtime,
        path: header.name,
        type: header.type,
      };

      if (header.type === 'symlink' || header.type === 'link') {
        file.linkname = header.linkname;
      }

      files.push(file);
      next();
    });

    stream.resume();
  });

  if (Buffer.isBuffer(input)) {
    extract.end(input);
  } else {
    input.pipe(extract);
  }

  return new Promise((resolve, reject) => {
    if (!Buffer.isBuffer(input)) {
      input.on('error', reject);
    }

    extract.on('finish', () => resolve(files));
    extract.on('error', reject);
  });
}
