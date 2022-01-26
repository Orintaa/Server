const fs = require('fs/promises');
const path = require('path');

const file = {};

file.fullPath = (directory, fileName) => {
    return path.join(__dirname, `../${directory}/${fileName}`);
}

file.create = (directory, fileName, content) => {
    console.log('Creating new file..')
}

file.read = async (directory, fileName) => {
    try {
        const filePath = file.fullPath(directory, fileName);
        const itemText = await fs.readFile(filePath, 'utf-8');
        return itemText;
    } catch (error) {
        return false
    }
}

file.readBinary = async (directory, fileName) => {
    try {
        const filePath = file.fullPath(directory, fileName);
        const fileContent = await fs.readFile(filePath);
        return fileContent;
    } catch (error) {
        return false
    }
}

file.update = (directory, fileName, content) => {
    console.log('Updaiting new file..')
}

file.delete = (directory, fileName) => {
    console.log('Deleating new file..')
}

module.exports = file;