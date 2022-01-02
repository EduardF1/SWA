class Mammal {
    constructor(sound) {
        this.sound = sound;
    }
    talk() {
        return this.sound;
    }
}

class Dog extends Mammal {
    constructor() {
        super('woof');    // call the inherited constructor
    }
}
let fluffykins = new Mammal('woof!');
let fluffykins_ = new Dog();
console.log(fluffykins.talk());
let dog1 = new Dog();
console.log(dog1.talk());
console.log(typeof Dog);
const dog2 = Dog.prototype.talk.bind({
    _sound: 'Roar'
})();
console.log(Dog.prototype.isPrototypeOf(fluffykins_));