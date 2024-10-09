import { chdir } from 'node:process';
import { existsSync } from 'node:fs';
import path from 'node:path';

export const changeDirectory = async (newPath) => {
    try {
        const fullPath = path.resolve(newPath);
        if (!existsSync(fullPath)) {
            console.log('Operation failed');
            return;
        }
        chdir(fullPath);
        console.log(`You are currently in ${process.cwd()}`);
    } catch (err) {
        console.log('Operation failed');
    }
};
