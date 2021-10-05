const http = require('http');
const path = require('path');
const fs = require('fs');

const SERVER_PORT = parseInt(process.env.PORT) || 4200;


server = http.createServer((request, response) => {
    // Build file path
    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);
    // File Extension
    let fileExtension = path.extname(filePath);
    let contentType = 'text/html';
    // Set content based on file type
    switch (fileExtension) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        default:
            break;
    }

    // Read file
    fs.readFile(filePath, ((error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) => {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(content, 'utf8');
                });
            } else {
                response.writeHead(500);
                response.end(`Server Error: ${error.code}`);
            }
        }else {
            // Success
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf8');
        }
    }));
});

server.listen(SERVER_PORT, () => console.log(`Server running on port: ${SERVER_PORT}`));