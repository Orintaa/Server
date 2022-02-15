const utils = {};

utils.fileExtension = (url) => {
    const pathParts = url.split('.');
    return pathParts[pathParts.length - 1];
}

utils.parseJSONtoObject = (text) => {
    try {
        return JSON.parse(text);
    } catch(error) {
        return false;
    }
}

export { utils };