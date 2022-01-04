const {WeatherData} = require('./WeatherData');
const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_UNIT, FAHRENHEIT_TYPE} = require('../../../../Constants');

/**
 * Temperature class, subclass of WeatherData (inherits from).
 * Has as attributes/properties "place", "time", "type", "unit" and "value".
 * Has getters and setters for all the attributes and two conversion methods,
 * "convertToF" and "convertToC" used for changing the "value", "type" and "unit" attributes
 * from either International to US metrics or vice-versa.
 */
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