const http = require('http');
const path = require('path');
const fs = require('fs');

const SERVER_PORT = parseInt(process.env.PORT) || 4200;


server = http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, content) => {
            if (!error) {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(content);
            } else {
                console.error(error);
            }
        });
    }

    if (request.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (error, content) => {
            if (!error) {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(content);
            } else {
                console.error(error);
            }
        });
    }

    if (request.url === '/api/users') {
       const users = [
           {name: 'Bob Doe', age:30},
           {name: 'Carl Luther', age: 40}
       ];
       response.writeHead(200, {'Content-Type': 'application/json'});
       response.end(JSON.stringify(users));
    }
});

server.listen(SERVER_PORT, () => console.log(`Server running on port: ${SERVER_PORT}`));