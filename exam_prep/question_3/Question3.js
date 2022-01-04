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

console.log(Transport_.isPrototypeOf(Train_));
const train1 = new Train_(10, 5);
console.log(train1.getPrice());
console.log(typeof  train1)


// OOP
class Transport {
}

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

console.log(flightTripObj.getPrice());
console.log(trainTripObj.getPrice());
console.log(busTripObj.getPrice());
console.log(Transport.isPrototypeOf(Bus));
console.log(Transport.isPrototypeOf(Fly));
console.log(Transport.isPrototypeOf(Train));

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
console.log(calculateVAT(productPrice)); // Out: 250
console.log(calculateVAT(productPrice)); // Out: 250

/*
    *   Example (impure function) *
    *   The below function is impure as the output is dependent on the value of the external variable "tax".
    *   If the value of the "tax" variable is changed, then the output of the function will be different.
 */
const tax = 25;
function calculateVAT_(productPrice) {
    return productPrice * (tax / 100);
}
console.log(calculateVAT_(productPrice));
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

