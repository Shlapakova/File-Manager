import fs from 'fs';
import path from 'path';

export const cp = async (args, currentDir) => {
    if (args.length < 2) throw new Error();
    const [source, destination] = args;
    const sourcePath = path.resolve(currentDir, source);
    const destinationPath = path.resolve(currentDir, destination);
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);
    readStream.pipe(writeStream);
    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

