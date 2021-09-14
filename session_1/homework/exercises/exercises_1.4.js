// EX 1.4.1
// Which of the following are truthy?
// a)	2 + 2 === 4             TRUE
// b)	2 + 2 === '4'           FALSE
// c)	2 + 2 == '4'            TRUE
// d)	Number('4')             TRUE
// e)	Number('0')             FALSE
// f)	NaN                     FALSE
// g)	NaN != NaN              TRUE
// h)	Infinity == Infinity    TRUE
// i)	1/0 == 2/0              TRUE
// j)	2 * null                FALSE
// k)	2 + null                TRUE
// l)	7                       TRUE
// m)	null || 7               TRUE
// n)	'4'                     TRUE
// o)	''                      FA

console.log(2 + 2 === 4);
console.log(2 + 2 === '4');
console.log(2 + 2 == '4');
if (Number('4'))
    console.log('TRUE');
else
    console.log('FALSE');
if (Number('0'))
    console.log('TRUE');
else
    console.log('FALSE');
if (NaN)
    console.log('TRUE');
else
    console.log('FALSE');
console.log(NaN != NaN);
console.log(Infinity == Infinity);
console.log(1/0 == 2/0);
if (2 * null)
    console.log('TRUE');
else
    console.log('FALSE');
if (2 + null)
    console.log('TRUE');
else
    console.log('FALSE');
if (7)
    console.log('TRUE');
else
    console.log('FALSE');
if (null || 7)
    console.log('TRUE');
else
    console.log('FALSE');
if ('4')
    console.log('TRUE');
else
    console.log('FALSE');
if ('')
    console.log('TRUE');
else
    console.log('FALSE');

// EX 1.4.2
let numbers = [1,2,3,4,5,6,7,8,9,10];
// a)	Make a loop that prints (using console.log) the numbers from 1 to 10
numbers.forEach(print);
function print(number){
    console.log(number + ' ');
}

// b)	Make a loop that adds the numbers from 1 to 10
// The 0 in the example above (line no-7) is the initialValue i.e. 
// the value to use as the first argument to the first call of the callback.
// If no initial value is supplied, the first element in the array will be used.
function sum(_numbers){
    let sum = _numbers.reduce(function(a, b) {return a + b;}, 0)
    return  sum;
}

console.log(sum(numbers));

// c)	Make a loop that computes 10! (factorial)
// The task is to write a function factorial(n) that calculates n! using recursive calls.
// P.S. Hint: n! can be written as n * (n-1)!
function factorial(n){
    return n ? n * factorial(n-1) : 1;
}
console.log(factorial(5));

// EX 1.4.3
// given let a = [1, 2, 3, 5, 8];
// a)	What’s a[5]?                                    UNDEFINED
// b)	Make a loop that prints the elements of a
// c)	Make a loop that adds the elements of a
// d)	Make a function that takes an array
//      and returns the sum of its elements
// e)	Add an element to a like this: a[8] = 55        
// f)	What’s a[8]?                                    55
// g)	What’s the length of a?                         9
// h)	What happens if you print a to the console?     print a detailed picture of the array with empty and occupied indexes
// i)	What happens with your loop from (c)?           all numbers are added and empty indexes are skipped

let a = [1, 2, 3, 5, 8];
console.log('')
console.log('EX 1.4.3')
console.log(a[5]);
a.forEach(print);
function print(number){
    console.log(number + ' ');
}
function sum(_numbers){
    return  _numbers.reduce(function (a, b) {
        return a + b;
    }, 0);
}
console.log(sum(a));
a[8] = 55;
console.log(a[8]);
// console.log(a.length);
// console.log(a);
console.log(sum(a));

// EX 1.4.4
// a)
console.log('EX 1.4.4')
function factorialFunc(n){
    return n ? n * factorial(n-1) : 1;
}
let fact_of_ten = factorialFunc(10);
console.log(fact_of_ten);
// b)
function power(m,n){
    return Math.pow(m,n);
}
let ten_pow_2 = power(10,2);
console.log(ten_pow_2);
// EX 1.4.5

function work(m, n){
    if (n == null)
        return factorial(m);
    else
        // first number and power of second number
        return Math.pow(m,n);
}

console.log(work(2,3));
console.log(work(5));