/*
    -   What is "__proto__" ?
    -   A reference to the object prototype. Prototypal inheritance is all about delegating
    property lookup to other objects.
    -   The "prototype" property is present only on functions (constructor functions), this is automatically created
    on functions and it is useful for constructor functions used with the "new" keyword.
    Ref.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto
    -   Summary: "__proto__" is the property of an object that point to the prototype that has been set for the object.
                 "prototype" is the property of a function that is set (automatically) on a function when using the "new" keyword.
 */
let cat = {
    breed: 'munchkin'
}
let myCat = {
    name: 'Fluffykins'
}
Object.setPrototypeOf(myCat, cat);
console.log(myCat.name + ' ' + myCat.breed);
console.log(myCat.__proto__);
cat.tailLength = 15;
console.log(myCat.__proto__);

function Dog() {}
Dog.prototype.breed = "Bulldog";
const dog1 = new Dog();
console.log(dog1.breed);
console.log(Dog.prototype); //  function prototype
console.log(dog1.__proto__);    // object prototype