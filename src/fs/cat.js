import fs from 'fs';
import path from 'path';

export const cat = async (args, currentDir) => {
    if (!args[0]) throw new Error();
    const filePath = path.resolve(currentDir, args[0]);
    const readStream = fs.createReadStream(filePath, 'utf8');
    readStream.on('error', () => { throw new Error(); });
    readStream.pipe(process.stdout);
    await new Promise((resolve, reject) => {
        readStream.on('end', resolve);
        readStream.on('error', reject);
    });
};
