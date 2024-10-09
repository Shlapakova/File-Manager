import { rename } from 'fs/promises';
import path from 'path';

export const rn = async (args, currentDir) => {
    if (args.length < 2) throw new Error();
    const [oldName, newName] = args;
    const oldPath = path.resolve(currentDir, oldName);
    const newPath = path.resolve(currentDir, newName);
    await rename(oldPath, newPath);
};
