// 1. Summarise the JS Object model and contract it to object models from other languages like Java or C#.
/*
- Below we have a Java class for the "Car" object which has four fields/attributes, namely "brand", "model", "numberOfDoors" and "isElectric".
- The class is a model, the "blueprint" of the "Car" object instances to be created. Each one is unique, having its own dedicated memory location.
- Objects cannot be created without the class definition and once the class is defined, the instances are bound to the class' attributes.
import java.util.Objects;

public class Car {
    private String brand;
    private String model;
    private int numberOfDoors;
    private boolean isElectric;

    public Car(String brand, String model, int numberOfDoors, boolean isElectric) {
        this.model = model;
        this.brand = brand;
        this.numberOfDoors = numberOfDoors;
        this.isElectric = isElectric;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getNumberOfDoors() {
        return numberOfDoors;
    }

    public void setNumberOfDoors(int numberOfDoors) {
        this.numberOfDoors = numberOfDoors;
    }

    public boolean isElectric() {
        return isElectric;
    }

    public void setElectric(boolean electric) {
        isElectric = electric;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Car car = (Car) o;
        return numberOfDoors == car.numberOfDoors && isElectric == car.isElectric && Objects.equals(brand, car.brand) && Objects.equals(model, car.model);
    }

    @Override
    public int hashCode() {
        return Objects.hash(brand, model, numberOfDoors, isElectric);
    }

    @Override
    public String toString() {
        return "Car info: " +
                "brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", numberOfDoors=" + numberOfDoors +
                ", isElectric=" + isElectric;
    }
}
 */

/*
- Example usage of the "Car" class:

public class Main {
    public static void main(String[] args) {
        Car car1 = new Car("Toyota", "Auris", 5, false);
        System.out.println(car1);
    }
}

// Output: Car info: brand='Toyota', model='Auris', numberOfDoors=5, isElectric=false
 */


//Below, the "Car" class is implemented in JS using two approaches, the class-based approach and factory function approach.
// 1. Factory function implementation

function Car(brand, model, numberOfDoors, isElectric) {
    /*
        -   Initial state (attributes).
        -   The keyword "this" sets the properties "brand", "model", "numberOfDoors" and "isElectric" on the context object.
     */
    this.brand = brand;
    this.model = model;
    this.numberOfDoors = numberOfDoors;
    this.isElectric = isElectric;
}

/*
    -   The "prototype" property allows the "Car" factory function "class" implementation to inherit the below defined functions.
    -   In the below methods, the "this" keyword is used to access the owning object's properties, given that the owning object is always
    the prototype of the "Car" class, its properties are the ones being accessed.
 */
Car.prototype = {
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
    setNumberOfDoors: function (numberOfDoors_) {
        this.numberOfDoors = numberOfDoors_;
    },
    getNumberOfDoors: function () {
        return this.numberOfDoors;
    },
    setIsElectric: function (isElectric_) {
        this.isElectric = isElectric_;
    },
    getIsElectric: function () {
        return this.isElectric;
    },
    equals: function (car_) {
        return this.brand === car_.brand &&
            this.model === car_.model &&
            this.isElectric === car_.isElectric &&
            this.numberOfDoors === car_.numberOfDoors &&
            (typeof this === typeof car_)
    },
    toString: function () {
        return "Car info: " +
            "brand='" + this.brand + '\'' +
            ", model='" + this.model + '\'' +
            ", numberOfDoors=" + this.numberOfDoors +
            ", isElectric=" + this.isElectric;
    },
}

console.log(Car.prototype); // Display Car "class" object model and its properties.
const car1 = new Car('Toyota', 'Auris', 5, false);
console.log(car1.toString());

car1.setModel('Quashqai');
car1.setIsElectric(true);
car1.setBrand('Nissan');
car1.setNumberOfDoors(3);
console.log(car1.toString());

// 2. Class-based implementation of the "Car" class.
class Car_ {
    // The constructor keyword allows to set the initial state of the "Car_" instance objects.
    constructor(brand, model, numberOfDoors, isElectric) {
        this.brand = brand;
        this.model = model;
        this.numberOfDoors = numberOfDoors;
        this.isElectric = isElectric;
    }

    setBrand = (brand_) => this.brand = brand_;
    getBrand = () => this.brand;
    setModel = (model_) => this.model = model_;
    getModel = () => this.model;
    setNumberOfDoors = (numberOfDoors_) => this.numberOfDoors = numberOfDoors_;
    getNumberOfDoors = () => this.numberOfDoors;
    setIsElectric = (isElectric_) => this.isElectric = isElectric_;
    getIsElectric = () => this.isElectric;
    equals = (car_) => this.brand === car_.brand &&
        this.model === car_.model &&
        this.isElectric === car_.isElectric &&
        this.numberOfDoors === car_.numberOfDoors &&
        (typeof this === typeof car_);
    toString = () => "Car info: " +
        "brand='" + this.brand + '\'' +
        ", model='" + this.model + '\'' +
        ", numberOfDoors=" + this.numberOfDoors +
        ", isElectric=" + this.isElectric;
}

/**
 * Utility function used to list the defined methods of the "Car_" object instances.
 * Ref.: https://flaviocopes.com/how-to-list-object-methods-javascript/
 * @param object The object for which the methods should be listed.
 * @returns {string[]} The object's methods as an array (of Strings).
 */
getMethods = (object) => Object.getOwnPropertyNames(object).filter(item => typeof object[item] === 'function');

const car2 = new Car_('Kia', "Ceed'd", 5, false);
console.log(getMethods(car2));

const car3 = new Car(car2.brand, car2.model, car2.numberOfDoors, car2.isElectric);
console.log(car3.equals(car2));