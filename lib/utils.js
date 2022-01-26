const utils = {};

utils.fileExtension = (url) => {
    const pathParts = url.split('.');
    return pathParts[pathParts.length - 1];
}

module.exports = utils;