import fs from 'fs';
import { createBrotliCompress } from 'zlib';
import path from 'path';

export const compress = async (source, destination) => {
    const sourceStream = fs.createReadStream(source);
    const destinationStream = fs.createWriteStream(destination);
    const brotli = createBrotliCompress();
    sourceStream.pipe(brotli).pipe(destinationStream);
};
