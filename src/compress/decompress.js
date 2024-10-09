import fs from 'fs';
import { createBrotliDecompress } from 'zlib';
import path from 'path';

export const decompress = async (source, destination) => {
    const sourceStream = fs.createReadStream(source);
    const destinationStream = fs.createWriteStream(destination);
    const brotli = createBrotliDecompress();

    sourceStream.pipe(brotli).pipe(destinationStream);
};
