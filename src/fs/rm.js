import { unlink } from 'fs/promises';
import path from 'path';

export const rm = async (args, currentDir) => {
    if (!args[0]) throw new Error();
    const filePath = path.resolve(currentDir, args[0]);
    await unlink(filePath);
};
