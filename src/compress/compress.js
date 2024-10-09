import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import path from 'path';

export const compressFile = (inputFilePath, outputFilePath) => {
    const readStream = createReadStream(inputFilePath);
    const brotliStream = createBrotliCompress();
    const writeStream = createWriteStream(outputFilePath);

    readStream
        .pipe(brotliStream)
        .pipe(writeStream)
        .on('finish', () => {
            console.log(`File compressed to ${outputFilePath}`);
        })
        .on('error', () => {
            console.error('Operation failed');
        });
};


