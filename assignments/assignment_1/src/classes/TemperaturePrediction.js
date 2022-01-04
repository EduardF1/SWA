const {WeatherPrediction} = require('./WeatherPrediction');
const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_UNIT, FAHRENHEIT_TYPE} = require('../../../../Constants');

/**
 * TemperaturePrediction class, subclass of WeatherPrediction.
 * Has as attributes/properties "time", "place", "value", "type" and "unit".
 * Has setters and getters for all the attributes  and two conversion methods,
 * "convertToF" and "convertToC" used for changing the "value", "type" and "unit" attributes
 * from either International to US metrics or vice-versa.
 */
class TemperaturePrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit) {
        super(time, place, value, type, unit);
    }

    convertToF = () => {
        if (this.getDataType().getUnit() === CELSIUS_UNIT) {
            this.setValue((this.getValue() * 9 / 5) + 32);
            this.getDataType().setUnit(FAHRENHEIT_UNIT);
            this.setType(FAHRENHEIT_TYPE);
        }
    }
    convertToC = () => {
        if (this.getDataType().getUnit() === FAHRENHEIT_UNIT) {
            this.setValue((this.getValue() - 32) * (5 / 9));
            this.getDataType().setUnit(CELSIUS_UNIT);
            this.setType(CELSIUS_TYPE);
        }
    }
}

module.exports = {
    TemperaturePrediction
}