// Write curried versions of the following functions
/*
function add(n, m) { return n + m }

function greater(n, m) { return n > m }

function get(attr, o) { return o[attr] }

function pipe(f, g) { return function(x) { let r = f(x) return g(r) } }
 */

// a)
const add = (n, m) => n + m;
// b)
const greater = (n, m) => n > m;
// c)
const get = (attr, o) => o[attr];
// d)
f = (x) => Math.pow(x,2);
g = (r) => r-1;
const pipe1 = f => g => x => g(f(x));
const pipe2 = (...fns) => (x) => fns.reduce((g,f) => f(g), x);

module.exports = {add, greater, get, pipe1, pipe2};
