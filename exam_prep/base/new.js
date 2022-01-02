function Person(saying) {
    this.saying = saying;
}

Person.prototype.talk = function () {
    console.log('I say:', this.saying);
}

/*
    - Below, the use of the "new" keyword is (what it does, mimic of classes with constructor functions):
        1. Creates a new (plain) object with no properties.
        2. It is going to look at the object on which the "new" keyword is called
        and check that object's prototype property and it will set the prototype of the
        newly created object to that of the object (ex.: "Person").
        3. It will look on what "new" was called on and it will call the constructor function
        with the new object and assign it to "this".
        4. Return the new object and set the type of it.
 */
// Default (native) usage
// let crockFord = new Person('SEMICOLANS!!!1one1');
// crockFord.talk();

// Implementation of the "new" keyword as a function
function new_(constructor) {
    // Step 1, create an empty object.
    let obj = {};
    // Step 2, set the prototype of the newly created object to the passed constructor's prototype.
    Object.setPrototypeOf(obj, constructor.prototype);
    // Step 3, execute the constructor with "this".
    let argsArray = Array.from(arguments); // extract the function arguments and convert them to an array.
    constructor.apply(obj, argsArray.slice(1));
    // Step 4, return the created object.
    return obj;
}

const crockford = new_(Person, 'PS_Koans');
crockford.talk();
