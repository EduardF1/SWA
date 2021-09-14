class Car {
    constructor(licensePlate, model) {
        this.licensePlate = licensePlate;
        this.model = model;
    }

    getLicensePlate() {
        return this.licensePlate;
    }
}

class ElectricCar extends Car {
    constructor(licensePlate, model, batteryCapacity) {
        super(licensePlate, model);
        this.batteryCapacity = batteryCapacity;
    }

    batteryLife(consumption) {
        return this.batteryCapacity / consumption;
    }
}
