/*
    1. Summarise the JavaScript object model and contrast it to object models from other languages like Java or C#.
    In Java, inheritance occurs on class level using the "extend" keyword. For example, in the project "SWA_" we can see the code of the
    "Vehicle", "Bicycle", "Boat" and "Car" classes. The relationship between these is that of "Vehicle" being a parent class
    for the others (which are subclasses/children that inherit the parent's functionality - attributes and methods). The classes
    are blueprints for the objects that will be created, an object is created/instantiated using the "new" keyword.
 */
// Below, the above mentioned classes are implemented in JS using two approaches, class-based and factory functions.
// 1.a) Factory function implementation
/**
 * Vehicle base "class" constructor function.
 * @param brand The brand of the vehicle.
 * @param model The model of the vehicle.
 * @constructor
 */
function Vehicle(brand, model) {
    // Class attributes/fields, in JS, properties.
    this.brand = brand;
    this.model = model;
}

/**
 * Class methods, in JS, methods are plain functions assigned to objects. Those being set on the Vehicle "class" function's prototype
 * will be inherited by all subclasses of the Vehicle "class".
 * @type {{
 *          getModel: (function(): *),
 *          setBrand: Vehicle.setBrand,
 *          getBrand: (function(): *),
 *          setModel: Vehicle.setModel,
 *          toString: (function(): string)
 *          }}
 */
Vehicle.prototype = {
    setBrand: function (brand_) {
        this.brand = brand_;
    },
    getBrand: function () {
        return this.brand;
    },
    setModel: function (model_) {
        this.model = model_;
    },
    getModel: function () {
        return this.model;
    },
    toString: function () {
        return "Vehicle{" +
            "brand='" + this.brand + '\'' +
            ", model='" + this.model + '\'' +
            '}'
    },
}

/**
 * Car child "class" constructor function. Inherits from "Vehicle".
 * @param brand The brand of the car (vehicle).
 * @param model The model of the car (vehicle)
 * @param numberOfDoors The number of doors of the car.
 * @param isElectric Whether the car is electric or not.
 * @constructor
 */
function Car(brand, model, numberOfDoors, isElectric) {
    // Call the Vehicle constructor function with the brand and model arguments from the context of the Car constructor.
    Vehicle.call(this, brand, model);
    this.numberOfDoors = numberOfDoors;
    this.isElectric = isElectric;
}

/**
 * Car "class" methods, in JS, methods are plain functions assigned to objects. Those being set on the Car "class" function's prototype
 * will be inherited by all subclasses of the Car "class".
 * @type {{
 *          setNumberOfDoors: Car.setNumberOfDoors,
 *          getNumberOfDoors: (function(): *),
 *          toString: (function(): string),
 *          setIsElectric: Car.setIsElectric,
 *          getIsElectric: (function(): *)
 *          }}
 */
Car.prototype = {
    setNumberOfDoors: function (numberOfDoors_) {
        this.numberOfDoors = numberOfDoors_;
    },
    getNumberOfDoors: function () {
        return this.numberOfDoors;
    },
    setIsElectric: function (isElectric_) {
        this.isElectric = isElectric_;
    },
    getIsElectric() {
        return this.isElectric;
    },
    toString() {
        return "Car{" +
            "brand='" + this.brand + '\'' +
            ", model='" + this.model + '\'' +
            ", numberOfDoors=" + this.numberOfDoors +
            ", isElectric=" + this.isElectric +
            '}';
    }
}

// Set through the Object global parent class the prototype of the Car "class" prototype to the prototype of the Vehicle "class".
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

/**
 * Boat child "class" constructor function. Inherits from "Vehicle".
 * @param brand The brand of the boat (vehicle).
 * @param model The model of the boat (vehicle)
 * @param isCruisingShip Whether or not the boat is a cruising ship.
 * @constructor
 */
function Boat(brand, model, isCruisingShip) {
    // Call the Vehicle constructor function with the brand and model arguments from the context of the Boat constructor.
    Vehicle.call(this, brand, model);
    this.isCruisingShip = isCruisingShip;
}

/**
 * Boat "class" methods, in JS, methods are plain functions assigned to objects. Those being set on the Boat "class" function's prototype
 * will be inherited by all subclasses of the Boat "class".
 * @type {{
 *          toString: (function(): string),
 *          setIsCruisingShip: Boat.setIsCruisingShip,
 *          getIsCruisingShip: (function(): *)
 *          }}
 */
Boat.prototype = {
    getIsCruisingShip: function () {
        return this.isCruisingShip;
    },
    setIsCruisingShip: function (isCruisingShip_) {
        this.isCruisingShip = isCruisingShip_;
    },
    toString: function () {
        return "Boat{" +
            "brand=" + '\'' + this.brand + '\'' + ", " +
            "model=" + '\'' + this.model + '\'' + ", " +
            "isCruisingShip=" + this.isCruisingShip +
            '}';
    }
};
// Set through the Object global parent class the prototype of the Boat "class" prototype to the prototype of the Vehicle "class".
Object.setPrototypeOf(Boat.prototype, Vehicle.prototype);

/**
 * Bicycle child "class" constructor function. Inherits from "Vehicle".
 * @param brand The brand of the bicycle (vehicle).
 * @param model The model of the bicycle (vehicle)
 * @param type The type of the bicycle.
 * @constructor
 */
function Bicycle(brand, model, type) {
    // Call the Vehicle constructor function with the brand and model arguments from the context of the Bicycle constructor.
    Vehicle.call(this, brand, model);
    this.type = type;
}

/**
 * Bicycle "class" methods, in JS, methods are plain functions assigned to objects. Those being set on the Bicycle "class" function's prototype
 * will be inherited by all subclasses of the Bicycle "class".
 * @type {{
 *          getType: (function(): *),
 *          toString: (function(): string),
 *          setType: Bicycle.setType
 *        }}
 */
Bicycle.prototype = {
    getType: function () {
        return this.type;
    },
    setType: function (type_) {
        this.type = type_;
    },
    toString: function () {
        return "Bicycle{" +
            "type=" + '\'' + this.type + '\'' + ", " +
            "brand=" + '\'' + this.brand + '\'' + ", " +
            "model=" + '\'' + this.model + '\'' +
            '}';
    }
}
// Set through the Object global parent class the prototype of the Bicycle "class" prototype to the prototype of the Vehicle "class".
Object.setPrototypeOf(Bicycle.prototype, Vehicle.prototype);

const vehicle = new Vehicle('AIRBUS', 'A320');
const car = new Car('Toyota', 'Auris', 5, false);
const boat = new Boat('Yamaha', 'RXZ-1', true);
const bicycle = new Bicycle('Cube', 'RZ', 'Mountain Bike');

// Assert the inheritance chain. (Boat --> Vehicle)
console.log(Vehicle.prototype.isPrototypeOf(Boat.prototype));
// Assert the inheritance chain. (Car --> Vehicle)
console.log(Vehicle.prototype.isPrototypeOf(Car.prototype));
// Assert the inheritance chain. (Bicycle --> Vehicle)
console.log(Vehicle.prototype.isPrototypeOf(Bicycle.prototype));

// Display the prototypes of the "classes".
console.log(Vehicle.prototype);
console.log(Car.prototype);
console.log(Bicycle.prototype);
console.log(Boat.prototype);

// Object testing (factories)
console.log(car);
car.setBrand('Nissan')
car.setModel('Juke')
car.setNumberOfDoors(3);
car.setIsElectric(true)
console.log(car);

console.log(bicycle);
bicycle.setType('BMX');
bicycle.setModel('ROK-R');
bicycle.setBrand('DHS');
console.log(bicycle);

console.log(boat);
boat.setModel('U-Boat');
boat.setBrand('Daimler');
boat.setIsCruisingShip(false);
console.log(boat);

// 1.b) Class function implementation
class Vehicle_ {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    setBrand = (brand_) => this.brand = brand_;
    getBrand = () => this.brand;
    setModel = (model_) => this.model = model_;
    getModel = () => this.model;
    toString = () => "Vehicle{" +
        "brand='" + this.brand + '\'' +
        ", model='" + this.model + '\'' +
        '}';
}

class Car_ extends Vehicle_ {
    constructor(brand, model, numberOfDoors, isElectric) {
        super(brand, model);
        this.numberOfDoors = numberOfDoors;
        this.isElectric = isElectric;
    }

    setNumberOfDoors = (numberOfDoors_) => this.numberOfDoors = numberOfDoors_;
    getNumberOfDoors = () => this.numberOfDoors;
    setIsElectric = (isElectric_) => this.isElectric = isElectric_;
    getIsElectric = () => this.isElectric;
    toString = () => "Car{" +
        "brand='" + this.brand + '\'' +
        ", model='" + this.model + '\'' +
        ", numberOfDoors=" + this.numberOfDoors +
        ", isElectric=" + this.isElectric +
        '}';
}

class Boat_ extends Vehicle_ {
    constructor(brand, model, isCruisingShip) {
        super(brand, model);
        this.isCruisingShip = isCruisingShip;
    }

    setIsCruisingShip = (isCruisingShip_) => this.isCruisingShip = isCruisingShip_;
    getIsCruisingShip = () => this.isCruisingShip;
    toString = () => "Boat{" +
        "brand=" + '\'' + this.brand + '\'' + ", " +
        "model=" + '\'' + this.model + '\'' + ", " +
        "isCruisingShip=" + this.isCruisingShip +
        '}';
}

class Bicycle_ extends Vehicle_ {
    constructor(brand, model, type) {
        super(brand, model);
        this.type = type;
    }

    getType = () => this.type;
    setType = (type_) => this.type = type_;
    toString = () => "Bicycle{" +
        "type=" + '\'' + this.type + '\'' + ", " +
        "brand=" + '\'' + this.brand + '\'' + ", " +
        "model=" + '\'' + this.model + '\'' +
        '}';
}

// Object testing (classes)
const vehicleObj = new Vehicle_('Piaggio', 'Vespa');
const carObj = new Car_('Mitsubishi', 'Lancer', 3,false);
const boatObj = new Boat_('Daimler', 'U-boat', true);
const bicycleObj = new Bicycle_('Peugeot', 'EL-RX', 'Electric bike');

console.log(vehicleObj.toString());
vehicleObj.setBrand('Dacia');
vehicleObj.setModel('Duster');
console.log(vehicleObj.toString());

console.log(carObj.toString());
carObj.setBrand('Mitsubishi');
carObj.setModel('ASX');
carObj.setIsElectric(true);
carObj.setNumberOfDoors(5);
console.log(carObj.toString());

console.log(boatObj.toString());
boatObj.setBrand('Yamaha');
boatObj.setModel('Cruiser-2');
boatObj.setIsCruisingShip(false);
console.log(boatObj.toString());

console.log(bicycleObj.toString());
bicycleObj.setType('Mountain Bike');
bicycleObj.setBrand('DHS');
bicycleObj.setModel('Cross-2');
console.log(bicycleObj.toString());


/*
    2. Explain how ‘this’ works in JavaScript, and how to control it using bind.
    The keyword "this" infers the context in which it is used. The context is determined at the time of the call.
    The use cases of "this" are:
        -   In a method, "this" refers to the owner object.
        -   Alone, "this" refers to the global object (in the browser, the "window" object).
        -   In a function, in strict mode, "this" is undefined.
        -   In an event, "this" refers to the element that received the event.
        -   Methods like "call()", and "apply()" can refer "this" to any object.
 */
// Example 1, "this" in a method.
const Person = (firstName, lastName, id) => {
    return {
        firstName,
        lastName,
        getFullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    }
};

const person1 = Person('John', 'Doe', 112);
console.log(person1.getFullName());
// Example 2, "this" alone. In the browser, this would be the "window" object (Global object).
let globalObject = this;
console.log(globalObject);
// Example 3, in strict mode, "this" also refers to the Global object.
"use strict";
globalObject = this;
console.log(globalObject);

// Example 4, in a function (default), it refers to the Global object.
function getGlobalObject() {
    return this;
}

console.log(getGlobalObject());

const talk = function () {
    console.log(this.sound);
};
const Person_ = {
    speak: talk,
    sound: 'Faber castle.'
};
// A copy of the original "talk" function which gives the value of "Person_" to the "this" keyword.
const makePersonTalk = talk.bind(Person_);
talk();
makePersonTalk();
Person_.speak(); // call the "speak" property of the "Person_" object.

const directObj = {
    label: 'mustard',
    quantity: 22,
    getInfo: function () {
        return this.label + ' ' + this.quantity;
    }
};
console.log(directObj.getInfo());