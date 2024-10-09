import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';

export const decompressFile = (inputFilePath, outputFilePath) => {
    const readStream = createReadStream(inputFilePath);
    const brotliStream = createBrotliDecompress();
    const writeStream = createWriteStream(outputFilePath);

    readStream
        .pipe(brotliStream)
        .pipe(writeStream)
        .on('finish', () => {
            console.log(`File decompressed to ${outputFilePath}`);
        })
        .on('error', () => {
            console.error('Operation failed');
        });
};

