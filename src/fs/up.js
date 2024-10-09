import path from 'path';

export const up = async (args, currentDir) => {
    const parentDir = path.dirname(currentDir);
    if (parentDir !== currentDir) {
        process.chdir(parentDir);
    }
};
