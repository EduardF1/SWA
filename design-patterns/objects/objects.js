// object literal (if known, the properties of the object should be assigned directly on the object)
let obj = {
    firstName: 'Eduard',
    lastName: 'Fischer'
};

// assignment of properties
obj.firstName = 'Eduard';
obj['lastName'] = 'Fischer';

// accessing properties
const firstName = obj['firstName'];
const lastName = obj.lastName;
Object.defineProperty(obj, 'sex', {
    value: 'male'
});
Object.defineProperties(obj, {
    hobby: {
        value: 'history'
    },
    email: {
        value: 'email@email.com'
    }
});

// Using Object create
let foo = {};
let bar = Object.create(Object.prototype);
let johnDoe = {
    fName: 'John',
    lName: 'Doe',
    sayName: function () {
        return `My name is ${this.fName} ${this.lName}`
    }
};
let janeDoe = Object.create(johnDoe, {
    fName: {
        value: 'Jane'
    },
    greet: {
        value: function (person) {
            return "Hello, " + person.fName;
        }
    }
});
let jimSmith = Object.create(janeDoe, {
    fName: {value: 'Jim'},
    lName: {value: 'Smith'}
});

console.log(johnDoe.sayName());
console.log(janeDoe.sayName() + ' ' + janeDoe.greet(jimSmith));

console.log(johnDoe.isPrototypeOf(janeDoe));
console.log(janeDoe.isPrototypeOf(jimSmith));

// constructor function, also called the constructor pattern
function Individual(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// allow all instances to have the same method
Individual.prototype.sayName = function () {
    return `My name is ${this.firstName} ${this.lastName}`
};

let individual1 = new Individual('Karl', 'Schultz');
let individual2 = new Individual('Martin', 'Fritzschulle');
console.log(individual1 instanceof Individual);
console.log(individual2 instanceof Individual);
console.log(johnDoe.sayName === janeDoe.sayName);

// Inheritance (Prototype chaining)
function Beverage(name, temperature) {
    this.name = name;
    this.temperature = temperature;
}
Beverage.prototype.drink = function () {
    return `I'm drinking a ${this.name}`;
};

function Coffee(type, name, temperature) {
    Beverage.call(this, name, temperature)
    this.type = type;
}
Coffee.prototype = Object.create(Beverage.prototype);
Coffee.prototype.sip = function () {
    return `Sipping some nice ${this.type} ${this.name} which is ${this.temperature}`;
};

const beverage1 = new Beverage('water', 'cold');
const coffee1 = new Coffee('dark', 'coffee', 'hot')
console.log(beverage1.drink());
console.log(coffee1.drink());
console.log(coffee1.sip());

// Mixins (take an object and mix its functionality with another object)
function canine(state) {
    function bark() {
        console.log(`Woof! I'm a dog named ${state.name}`);
    }

    return {bark}
}

// Mixin
function robot(state) {
    function drive() {
        console.log(`Drive at ${state.speed} KPH`);
    }

    return {drive}
}

// Factory function (1 way to make inheritance)
function robotDog(name, speed, age) {
    const state = {name, speed, age, kind: 'Robot dog'}
    const canineNature = canine(state);
    const robotNature = robot(state);

    function getAge() {
        return state.age;
    }

    return {...canineNature, ...robotNature, getAge}
}

