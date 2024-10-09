import { writeFile } from 'fs/promises';
import path from 'path';

export const add = async (args, currentDir) => {
    if (!args[0]) throw new Error();
    const filePath = path.resolve(currentDir, args[0]);
    await writeFile(filePath, '');
};
