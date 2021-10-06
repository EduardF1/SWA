const {CELSIUS_TYPE} = require('../../../../Constants');
const {WeatherData} = require('assignments/assignment_2/src/exercise_2_1/WeatherData.mjs');

export function Temperature(time, place, type, unit, value) {
    WeatherData.call(this,time, place, type, unit, value);
}

Object.setPrototypeOf(Temperature.prototype, WeatherData.prototype);

Temperature.prototype = {
    convertToF: function () {
        if (this.getType() === CELSIUS_TYPE) {
            this.setType(FAHRENHEIT_TYPE);
            this.setUnit(FAHRENHEIT_UNIT);
            this.setValue((this.getValue() * 1.8) + 32)
        }
    },
    convertToC: function () {
        if (this.getType() === FAHRENHEIT_TYPE) {
            this.setType(CELSIUS_TYPE);
            this.setUnit(CELSIUS_UNIT);
            this.setValue((this.getValue() - 32) / 1.8)
        }
    }
}