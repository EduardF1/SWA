const http = require('http');
const SERVER_PORT = 4200;

// Create server object
http.createServer((request, response)=> {
    // Write response
    response.write('Hello from NodeJS server.');
    response.end();
}).listen(SERVER_PORT, () => console.log(`Server running on port: ${SERVER_PORT}`));