// Exercises 1

// Exercise 1.1

const chars = {
    '1': 'e',
    '8': 'r',
    '11': '!',
    '4': 'o',
    '0': 'H',
    '10': 'd',
    '6': 'W',
    '9': 'l',
    '2': 'l',
    '7': 'o',
    '3': 'l',
    length: 12
};

let msg = '';
for(let i = 0; i < chars.length; i++) {
    if (chars[i])
        msg = msg + chars[i]
    else
        msg = msg + ' ';
}

console.log(msg)
// a) NodeJS can be installed from https://nodejs.org/en/
// Notes:
// Within the program, a dictionary that stores characters at specified index positions is created (chars). Afterwards, a variable is instantiated with the purpose of holding
// a combination of characters. These characters will be fed into the variable through a variable loop which will pick dictionary entries according to their index starting at 0 and
// then incrementing by 1.
// The program outputs "Hello World!". It can be run from the terminal by running "node exercises_1.1.js" (the location must be the root directory where the js file is located).
