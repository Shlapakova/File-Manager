import fs from 'fs/promises';
import path from 'path';

export const mv = async (args, currentDir) => {
    if (args.length < 2) throw new Error();
    const [source, destination] = args;
    const sourcePath = path.resolve(currentDir, source);
    const destinationPath = path.resolve(currentDir, destination);
    try {
        await fs.rename(sourcePath, destinationPath);
    } catch {
        throw new Error();
    }
};
