// jsonWriter.ts
import * as fs from 'fs';
import * as jsonlines from 'jsonlines';
import { IndexEntry } from './types';

export function writeJsonLines(data: IndexEntry[], outputPath: string): void {
  const jsonStream = jsonlines.stringify();
  const writableStream = fs.createWriteStream(outputPath);

  jsonStream.pipe(writableStream);

  data.forEach((entry) => jsonStream.write(entry));

  jsonStream.end();

  writableStream.on('finish', () => {
    console.log('JSON Lines file generated successfully.');
  });

  writableStream.on('error', (err) => {
    console.error('Error writing JSON Lines file:', err);
  });
}

