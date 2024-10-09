import { createHash } from 'crypto';
import fs from 'fs/promises';

export const hashFile = async (file) => {
    const hash = createHash('sha256');
    const fileStream = fs.createReadStream(file);
    fileStream.on('data', (chunk) => hash.update(chunk));
    fileStream.on('end', () => {
        console.log(hash.digest('hex'));
    });
};
