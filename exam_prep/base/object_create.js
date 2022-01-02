/*
    -   Object.create() is a static method on the object prototype that creates a new object with the prototype set to a certain object.
    -   More natural to the prototype model than "new".
 */
const cat = {
    init: function (sound) {
        this.sound = sound;
        return this;
    },
    makeSound: function () {
        console.log(this.sound);
    }
}

const mark = Object.create(cat).init('meow');
mark.makeSound();

const waffles = Object.create(cat).init('mrrrroow');
waffles.makeSound();

console.log('Is mark a cat?', cat.isPrototypeOf(mark)); // mark is derived from the cat.

/**
 * Implementation of the Object.create().
 * @param proto The prototype of the object to be created.
 * @returns {{}} The object that will be created.
 */
function objectCreate(proto) {
    const obj = {};
    Object.setPrototypeOf(obj, proto);
    return obj;
}

