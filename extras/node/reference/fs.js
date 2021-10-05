const fs = require('fs');
const path = require('path');

// Create a folder
fs.mkdir(path.join(__dirname, '/test'), {}, error => {
    if (error) throw error;
    console.log('Folder created...');
});

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'It was a cold night...', error => {
    if (error) throw error;
    console.log('File created and written to...');
    // Append to a file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nIn the city of Berlin...', error => {
        if (error) throw error;
        console.log('File appended...');
    });
});

// Read file
setTimeout(() => {
    fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (error, data) => {
        if (error) throw error;
        console.log(data);
    });
}, 500);

// Rename file
setTimeout(() => {
    fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'log.txt'), (error) => {
        if (error) throw error;
        console.log('File renamed');
    });
}, 600);

