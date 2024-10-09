import fs from 'fs/promises';
import path from 'path';

export const ls = async (args, currentDir) => {
    try {
        const items = await fs.readdir(currentDir);
        const detailed = await Promise.all(items.map(async item => {
            const itemPath = path.join(currentDir, item);
            const stats = await fs.stat(itemPath);
            return { name: item, type: stats.isDirectory() ? 'directory' : 'file' };
        }));
        detailed.sort((a, b) => {
            if (a.type === b.type) return a.name.localeCompare(b.name);
            return a.type === 'directory' ? -1 : 1;
        });
        detailed.forEach(item => console.log(`${item.type}\t${item.name}`));
    } catch {
        throw new Error();
    }
};
