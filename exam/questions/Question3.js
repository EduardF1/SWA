/*
    1. Compare object-oriented and functional programming.
    - In the functional programming paradigm, everything is based on functions and data, where data is defined
    as input given to the function and output of the function.
    - In the OOP paradigm, objects are modeled from classes or factory functions and have data and functions (methods)
    within.

    1.a) Pure Functions
    - With the functional approach, data -> function -> data, the function does not depend on anything else than its input, such
    a function is called a "pure" function.
    - Pure functions are better at composability (chaining), testability (a specific input should result in a specific output), they
    are easier to reason with and in the context of Big Data, they can be used for parallelization.

    1.b) Impure functions
    - Are generally easy.
    - They perform some action.
    - Use cases: writing to a database, displaying UI content etc...

    1.c) Functional style
    - Mostly pure functions such as "f", "g", etc...
    - We then have some variables "x=f(x)", "y=g(x,y)"

     1.d) HOF
     - Functions are 1st class citizens (anything that can be used as a variable).
     - HOF:
        - store data in a variable, taken as a parameter
        - return from a function
        - used as parameters
 */

// functional
// Base constructor function, from which all the subclasses will inherit from.
function Transport_() {}

function Train_(ticket, service) {
    return {
        ticket,
        service,
        getPrice: function () {
            return this.ticket + this.service;
        }
    }
}

Object.setPrototypeOf(Train_, Transport_);

function Bus_(ticket) {
    return {
        ticket,
        getPrice: function () {
            return this.ticket;
        }
    }
}

Object.setPrototypeOf(Bus_, Transport_);

function Fly_(ticket, insurance, luggage) {
    return {
        ticket,
        insurance,
        luggage,
        getPrice: function () {
            return this.ticket + this.insurance + this.luggage;
        }
    }
}

Object.setPrototypeOf(Bus_, Transport_);

console.log('The Transport_ constructor is a prototype for the Train_ constructor: ',Transport_.isPrototypeOf(Train_));
const train1 = new Train_(10, 5);
console.log('Train trip price: ', train1.getPrice());
console.log('train1 type: ', typeof train1);


// OOP
class Transport {}

class Fly extends Transport {
    constructor(ticket, insurance, luggage) {
        super();
        this.ticket = ticket;
        this.insurance = insurance;
        this.luggage = luggage;
    }

    getPrice() {
        return this.ticket + this.insurance + this.luggage;
    }
}

class Train extends Transport {
    constructor(ticket, service) {
        super();
        this.ticket = ticket;
        this.service = service;
    }

    getPrice() {
        return this.ticket + this.service;
    }
}

class Bus extends Transport {
    constructor(ticket) {
        super();
        this.ticket = ticket;
    }

    getPrice() {
        return this.ticket;
    }
}

const flightTripObj = new Fly(10, 20, 30);
const trainTripObj = new Train(30, 5);
const busTripObj = new Bus(25);

console.log('Flight trip object price: ',flightTripObj.getPrice());
console.log('Train trip object price: ', trainTripObj.getPrice());
console.log('Bus trip object price: ', busTripObj.getPrice());
console.log('Transport (class) prototype of Bus (class): ',Transport.isPrototypeOf(Bus));
console.log('Transport (class) prototype of Fly (class): ',Transport.isPrototypeOf(Fly));
console.log('Transport (class) prototype of Train (class): ',Transport.isPrototypeOf(Train));

/*
    *   PURE FUNCTIONS  *
    * - Functions (blocks of code) that always return the same result if the same arguments are passed.
    * - It does not depend on any state, or data change during program execution, it only depends on the input arguments.
    * - It does not produce any observable side effects such as network requests or data mutations.
 */
/*
    *   Example (pure function) *
    *   The below function is pure as it will always return the same output given that the same input is provided.
    *   The output is not affected by any other values/state changes.
 */
const productPrice = 1000;

function calculateVAT(productPrice) {
    return productPrice * 0.25;
}

console.log('VAT: ', calculateVAT(productPrice)); // Out: 250
console.log('VAT: ', calculateVAT(productPrice)); // Out: 250

/*
    *   Example (impure function) *
    *   The below function is impure as the output is dependent on the value of the external variable "tax".
    *   If the value of the "tax" variable is changed, then the output of the function will be different.
 */
const tax = 25;

function calculateVAT_(productPrice) {
    return productPrice * (tax / 100);
}

console.log('VAT: ', calculateVAT_(productPrice));
/*
    *   Note    (ref.: https://www.geeksforgeeks.org/pure-functions-in-javascript/)*
    *   If a pure function calls a pure function, this is not considered a side effect and the calling function
    *   is still considered pure (ex.: using Math.max() inside a function).
    *   Below are the some side effects (but not limited to) which a function should not produce in order to be considered as a pure function:
        -   Making a HTTP request
        -   Mutating data
        -   Printing to a screen or console
        -   DOM Query/Manipulation
        -   Math.random()
        -   Getting the current time
 */

/*
    * HOF or High Order Functions *
    * - HOFs should be used when operations are repetitive and there is just a slight difference in the required output
    * (for example, obtaining a trooper's full name or his rank).
    * - In JS, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other
    * functions as parameters or returned from the as well. A "high-order-function" is a function that accepts functions as
    * parameters and/or return a function.
 */
/*
    *   Array methods *
    * Ref.: https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet
 */
/*
    a) Reduce (reduce())
    - The .reduce() method iterates through an array and returns a single value.
    - It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration,
    "accumulator" is the value returned by the last iteration, and the "currentValue" is the current element. Optionally, a
    second argument can be passed which acts as the initial value of the accumulator.
 */
// Example, summing all the elements of an array.
const arrayOfNumbers = [1,5,10,15,20];
const sum_ = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`The sum of ${arrayOfNumbers} is: `,sum_(arrayOfNumbers));
/*
    b) For each (forEach())
    -   The .forEach() method executes a callback function on each of the elements in an array in order.

    -   The following example shows how the ".forEach()" function is used to:
        -   iterate over the array elements.
        -   allow removal of elements, one by one.
        -   allow replacement with the doubled value of the initial elements' values.
 */
const numbers_ = [25,50,100,200];
numbers_.forEach(number => {
    numbers_.pop();
    numbers_.push(number * 2);
});
console.log(numbers_);
/*
    c) Filter (.filter())
    -   The .filter() method executes a callback function on each element in an array, The callback function for each of the
    elements must return either true or false. The returned array is a new array with any elements for which the callback function
    returns true.
    -   In the below example, the array "filteredArray" will contain all the elements of randomNumbers except the even ones.
 */
const randomNumbers = [4,13,40,12,35];
const filteredArray = randomNumbers.filter(number => !(number % 2 === 0));
console.log(filteredArray);
/*
    d) Map (.map())
    -   The .map() method executes a callback function on each element in an array, It returns a new array made up of the return
    values from the callback function. The original array does not get altered, and the returned array may contain different elements than
    the original array.
 */
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
const announcements = finalParticipants.map(member => member + ' joined the contest.');
console.log(announcements);

const troopers = [
    {rank: 'Private', division: '2nd', lastName: 'McCarthy', firstName: 'John'},
    {rank: 'Sergeant', division: '2nd', lastName: 'Dwight', firstName: 'Lawrence'},
    {rank: 'Corporal', division: '3rd', lastName: 'Larman', firstName: 'Larry'},
    {rank: 'Private', division: '3rd', lastName: 'Larson', firstName: 'Dwayne'},
    {rank: null, division: '2rd', lastName: 'Jameson', firstName: 'Laurence'}
];

/**
 * Function used to map over an array of troopers and return their ranks as an array.
 * @param troopers Function input, array of objects.
 * @returns {*[]}
 */
const getRanks = (troopers) => {
    let result = [];
    // Iterate over the trooper objects.
    troopers.forEach(trooper => {
        // Check whether the rank is present in the result array (avoid duplicates)
        // and if the rank is not undefined or null.
        if (!result.includes(trooper.rank) && trooper.rank) {
            result.push(trooper.rank);
        }
    });
    return result;
};
console.log('The trooper ranks are: ', getRanks(troopers));

/**
 * Function used to perform a mutation (transformation) on the input array.
 * The "map" function takes an array as input and returns a new array of the same size but with different values determined by the
 * applied/mutator function.
 * @param troopers Array of objects on which a mutation will be performed.
 * @param mutationFunction Function that performs a transformation on the objects passed as argument to the function.
 * @returns {*[]}
 */
const map = (troopers, mutationFunction) => {
    let result = [];
    troopers.forEach(trooper => {
        result.push(mutationFunction(trooper));
    });
    return result;
};

/**
 * Function used to compose the full name (concatenation of lastName and firstName) and return it.
 * @param trooper The object from which the full name is composed.
 * @returns {string|string} The full name of the trooper if both firstName and lastName are defined, otherwise "A trooper's name".
 */
const getTrooperFullName = trooper => (trooper.firstName && trooper.lastName) ? trooper.lastName + ' ' + trooper.firstName : "A trooper's name.";
/**
 * Function that uses currying (function transformation) to get the troopers' names.
 * @param troopers_ Input array of objects (troopers).
 * @returns {*[]} A new array containing the trooper names.
 */
const getTroopersNames = troopers_ => map(troopers_, trooper => getTrooperFullName(trooper));
console.log('The trooper names are: ',getTroopersNames(troopers));
/**
 * Function that uses currying (function transformation) to get the troopers' ranks, it filters against null or undefined values and
 * duplicates. The "filter" function returns a new array on which it performs sorting based on a given criteria.
 * @param troopers_ Input array of objects (troopers).
 * @returns {*[]} A new array of trooper ranks.
 */
const getTroopersRanks = troopers_ =>
    map(troopers_, trooper => trooper.rank)
        // filter against null or undefined values
        .filter(rank => rank)
        // filter against duplicates
        .filter((value, index, array) => array.indexOf(value) === index);
console.log('The trooper ranks (without duplicates) are: ', getTroopersRanks(troopers));

/**
 * Function used to filter the troopers' array and return the full names of all troopers which are privates.
 * @param troopers_ Input array of objects (troopers).
 */
const getPrivatesFullNames = troopers_ => troopers_.filter(trooper => trooper.rank === 'Private').map(trooper => getTrooperFullName(trooper));
console.log("The privates' complete names are: ", getPrivatesFullNames(troopers));

const numbers = [0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 50, 100];

/**
 * Function used to sum the elements of an array (numeric).
 * @param array Input array of numbers.
 * @returns {number} The sum of the input array elements.
 */
const sum = (array) => {
    // sum accumulator, initially set to 0.
    let sum_ = 0;
    // iterate over the input array's elements and add them to the sum_ accumulator.
    array.forEach(element => sum_ += element);
    // when done, return the accumulated sum.
    return sum_;
}

console.log(`The sum of ${numbers} is: `, sum(numbers));

/**
 * Functions used to compute the product of the elements of an array (numeric).
 * @param array Input array of numbers.
 * @returns {number} The product of the input array elements.
 */
const product = (array) => {
    let product_ = 1;
    array.forEach(element => product_ *= element === 0 ? 1 : element);
    return product_;
}

console.log(`The product of ${numbers} is: `, product(numbers));

/**
 * Function used to compute the sum of an array of numbers using a custom implementation of reduce.
 * @param array Input array of numbers.
 * @param function_ Reducer function.
 * @param initialValue Initial sum value.
 * @returns {*}
 */
const reduce = (array, function_, initialValue) => {
    let sum_ = initialValue;
    array.forEach(element => sum_ = function_(sum_, element));
    return sum_;
}
// Custom implementation
console.log(reduce(numbers, (sum, number) => sum + number, 0));
// Native "reduce"
console.log(numbers.reduce((sum, number) => sum + number, 0));

/*
    *   Currying    *
 */
const hypotenuse = (a, b) => Math.sqrt(a * a + b * b);
const as = [2, 4, 8.9378];
const b = 3.234;

// Not Currying way
console.log(as.map(a => hypotenuse(a, b)));

// Nobody does this
// function hypo(a) {
//     return function (b) {
//         return Math.sqrt(a * a + b * b);
//     }
// }


// Currying way
const hypo = (a) => b => Math.sqrt(a * a + b * b);
const h = hypo(3);
console.log(h(4));
console.log(as.map(a => hypo(a)));

/*
    *  More on function *
 */
// Functions assigned to variables
let plusFive = number => number + 5;

// f is assigned the value of plusFive
let f = plusFive;

console.log(plusFive(3)); // 8
// Since f has a function value, it can be invoked.
console.log(f(9)); // 14

/*
    *   Callback functions  *
    * In JS, a callback function is a function that is passed into another function as an argument. This function can then be
    * invoked during the execution of that higher order function (that of which it is an argument of).
    * Since in JS, functions are objects, functions can be passed as arguments.
 */
const isEven = (number) => number % 2 === 0;
const printMessage = (function_, number) => {
    const isNumberEven = function_(number);
    console.log(`The number ${number} is an even number: ${isNumberEven}.`)
};
printMessage(isEven, 10);

/*
    *   Immutability *
 */
const object = {
    propertyA: {
        // To safely update object.propertyA.propertyC, we have to copy each piece
        propertyC: 3
    },
    propertyB: 2
}

const object2 = {
    // copy object
    ...object,
    // overwrite propertyA
    propertyA: {
        // copy object.propertyA
        ...object.propertyA,
        // overwrite propertyC
        propertyC: 42
    }
}
console.log(object);
console.log(object2);


const array_ = ['a', 'b'];
// Create a new copy of arr, with "c" appended to the end
const array2 = array_.concat('c');

// or, we can make a copy of the original array:
const array3 = array_.slice();
// and mutate the copy:
array3.push('c');
console.log(array_);
console.log(array2);
console.log(array3);