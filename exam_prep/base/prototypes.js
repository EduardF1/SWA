/*
    What are "prototypes" ?
    -   A class is a blueprint of objects.
    -   Prototypes are delegates. (the voter analogy)
    -   The JS "class" keyword actually uses prototypes under the hood.
 */

function talk() {
    console.log(this);
    console.log(this.sound);
}

let animal = {
    talk
}
let cat = {
    sound: 'meow!'
}
let dog = {
    sound: 'woof!'
}
let prarieDog = {
    howl: function () {
        console.log(this.sound.toUpperCase())
    }
}
// set the prototypes of cat and dog to inherit from animal.
Object.setPrototypeOf(cat, animal);
Object.setPrototypeOf(dog, animal);
cat.talk();
dog.talk();
// set the prototype of prarieDog to inherit from dog.
Object.setPrototypeOf(prarieDog, dog);
prarieDog.howl();