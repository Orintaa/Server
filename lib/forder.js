import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const folder = {};

folder.fullPath = (directory) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname, `../${directory}`);
}

folder.read = async (directory) => {
    try {
        const folderPath = folder.fullPath(directory);
        const fileList = await fs.readdir(folderPath);
        return fileList;
    } catch (error) {
        return false;
    }
}

export { folder };