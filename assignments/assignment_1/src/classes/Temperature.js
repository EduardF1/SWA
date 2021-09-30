const {WeatherData} = require('./WeatherData');
const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_UNIT, FAHRENHEIT_TYPE} = require('../../../../Constants');

class Temperature extends WeatherData {
    constructor(place, time, type, unit, value) {
        super(place, time, type, unit, value);
    }

    convertToF = () => {
        this.setValue(this.getValue() * (9 / 5) + 32);
        this.setType(FAHRENHEIT_TYPE);
        this.setUnit(FAHRENHEIT_UNIT);
    }

    convertToC = () => {
        this.setValue((this.getValue() - 32) * (5 / 9));
        this.setType(CELSIUS_TYPE);
        this.setUnit(CELSIUS_UNIT);
    }
}

module.exports = {
    Temperature
}