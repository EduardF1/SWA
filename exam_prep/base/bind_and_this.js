// Object literal
let dog = {
    sound: 'woof',  // sound property, set to 'woof'
    talk: function () { // the "talk" property, defined as a function, a method of "dog".
        console.log(this.sound);    // output to the console the sound property.
    }
};

dog.talk(); // "woof"
let talkFunction = dog.talk;    // talkFunction assigned the "talk" function of the "dog" object.
let boundFunction = talkFunction.bind(dog); // force "dog" to be "this", the call context
talkFunction(); // undefined as this.sound will be undefined because the call context is undefined.
boundFunction(); // "woof"

// the bind(obj) function sets the value of "this" to the passed argument object.