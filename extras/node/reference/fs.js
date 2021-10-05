const fs = require('fs');
const path = require('path');

// Create a folder
fs.mkdir(path.join(__dirname, '/test'), {}, error => {
    if (error) throw error;
    console.log('Folder created...');
});

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'New file created...', error => {
    if (error) throw error;
    console.log('File created and written to...');
    // Append to a file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nAnd appended to...', error => {
        if (error) throw error;
        console.log('File created and written to...');
    });
});

