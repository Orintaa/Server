const { Console } = require('console');
const http = require('http')
const config = require('../config.js');
const file = require('./file.js');
const utils = require('./utils.js');

const server = {};



server.httpServer = http.createServer((req, res) => {
    // console.log(req);
    const baseURL = `http${req.socket.encrypted ? 's' : ''}://${req.headers.host}/`;
    const parsedURL =  new URL(req.url, baseURL);
    const httpMethod = req.method.toLowerCase();
    const parsedPathName = parsedURL.pathname;
    const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, '');
    const headers = req.headers;

    /*
    tekstiniai failai:
    - css failas
    - js failas
    - svg
    binariniai failai:
    - png/jpg/ico (nuotraukos) failas
    - woof (sriftu) failas
    - media (audio, video) failas
    API
    html turinys
    */

    const fileExtension = utils.fileExtension(trimmedPath);
    const textFileExtensions = ['css', 'js', 'svg'];
    const binaryFileExtensions = ['eot', 'ttf', 'woff', 'woff2', 'otf', 'png', 'jpg', 'ico'];
    const isTextFile = textFileExtensions.includes(fileExtension);
    const isBinaryFile = binaryFileExtensions.includes(fileExtension);;
    const isAPI = false;
    const isPage = !isTextFile && !isBinaryFile && !isAPI;

    console.log(parsedPathName, '--->', trimmedPath);
    // console.log('uzklausos pradzia');
    // console.log(req.method, req.url);

    req.on('data', (data) => {
        // console.log('gavau duomenis...')
    });
    req.on('end', async () => {
        let responseContent = '';

        if(isTextFile) {
            responseContent = await file.read('public', trimmedPath);
            if (responseContent === false) {
                responseContent = `ERROR: problema, bandant perskaityti ${trimmedPath} faila.`
            }
        }

        if(isBinaryFile) {
            responseContent = await file.readBinary('public', trimmedPath);
            if (responseContent === false) {
                responseContent = `ERROR: problema, bandant perskaityti ${trimmedPath} faila.`
            }
        }

        if(isAPI) {
            responseContent = 'API...'
        }

        if(isPage) {
            responseContent = await file.read('html', trimmedPath + '/index.html');
            if (responseContent === false) {
                responseContent = await file.read('html', '404/index.html');
            }

            const headHomeHTML = await file.read('components', 'head-home.html');
            const headBlogHTML = await file.read('components', 'head-blog.html');
            const headAuthHTML = await file.read('components', 'head-auth.html');
            const headerHTML = await file.read('components', 'header.html');
            const headerInnerHTML = await file.read('components', 'header-inner.html');
            const footerHTML = await file.read('components', 'footer.html');
            responseContent = responseContent.replace('{{HEAD-HOME}}', headHomeHTML);
            responseContent = responseContent.replace('{{HEAD-BLOG}}', headBlogHTML);
            responseContent = responseContent.replace('{{HEAD-AUTH}}', headAuthHTML);
            responseContent = responseContent.replace('{{HEADER}}', headerHTML);
            responseContent = responseContent.replace('{{HEADER-INNER}}', headerInnerHTML);
            responseContent = responseContent.replace('{{FOOTER}}', footerHTML);
        }

        // console.log('-------------');
        // console.log(trimmedPath, '->', responseContent)
        return res.end(responseContent);
        // return res.end(ATS);
    })
});

server.init = () => {
    // console.log(config);
    // console.log(http);
    // server.httpServer.listen(3000)
    server.httpServer.listen(config.httpPort, () => {
        console.log(`Tavo serveris suskasi ant http://localhost:${config.httpPort}`)
    })
};

module.exports = server;