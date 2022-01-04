const {CELSIUS_TYPE} = require('../../../Constants.js');
const {WeatherData} = require('assignments/assignment_2/exercise_2_1/WeatherData.mjs');

/**
 * Constructor (factory function) for the Temperature "class".
 * @param time (Date) Value representing the time of a measurement.
 * @param place (String) Value representing the location at which the measurement was taken.
 * @param type (String) Value representing the type of the measurement.
 * @param unit (String) Value representing the unit of the measurement.
 * @param value (Number) Value representing the value of the measurement.
 * @constructor
 */
export function Temperature(time, place, type, unit, value) {
    /*
        Call the WeatherData constructor from the context of the Temperature object,
        set "this" to the current Temperature object and then list (individually)
        the constructor (superclass) arguments.
     */
    WeatherData.call(this,time, place, type, unit, value);
}
/*
    Set the prototype of the Temperature "class" to be that of the WeatherData "class".
    Set the inheritance relationship Temperature --> WeatherData.
 */
Object.setPrototypeOf(Temperature.prototype, WeatherData.prototype);
/**
 * The prototype of the Temperature "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              convertToF: Temperature.convertToF,
 *              convertToC: Temperature.convertToC
 *          }
 *       }
 */
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