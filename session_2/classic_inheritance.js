x = {
    a: 7,
    b: 2
}

let y = Object.create(x);

y.a
x.a = 7
y.a = 7

x.a = 100000

/*
*   x is an object. Y inherits from x and is a subclass of x. The inheritance is based.
*   on the prototype.
* */
console.log(x.isPrototypeOf(y));

console.log(y.toString()); // out: [object Object]
let z = {c: 78}
z.a
Object.setPrototypeOf(z, y)
z.a

// prototype chains x <- y <- z

let x_ = {a: 7}
let y_ = Object.create(x_)
console.log(y_.a) // out: 7
let z_ = {c: 87}
Object.setPrototypeOf(z_, y_) // z --> y --> x
console.log(y_.isPrototypeOf(z_)) // true

// Constructor:
function Car(licensePlate, model) {
    this.licensePlate = licensePlate;
    this.getLicensePlate = function () {
        return this.licensePlate;
    }
}

function Car(licensePlate, model) {

    this.licensePlate = licensePlate
    this.model = model
}

// The prototype used for all objects created with new Car(...)
Car.prototype.getLicensePlate = function () {
    return this.licensePlate;
}

let car = new Car('AB 12 345', 'Fiat');
console.log(Car.prototype.isPrototypeOf(car)); // out: true

function ElectricCar(licensePlate, model, batteryCapacity) {
    Car.call(this, licensePlate, model);  // Why not Car(licensePlate, model)
    this.batteryCapacity = batteryCapacity
}

Object.setPrototypeOf(ElectricCar.prototype, Car.prototype)
ElectricCar.prototype.batteryCapacity = function (consumption) {
    return this.batteryCapacity / consumption;
}