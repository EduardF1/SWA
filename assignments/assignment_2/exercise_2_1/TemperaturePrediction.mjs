import {WeatherPrediction} from "./WeatherPrediction.mjs";
import {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} from "../../../Constants.js";

/**
 * Constructor (factory function) for the TemperaturePrediction "class".
 * @param time (Date) Value representing the time of a measurement.
 * @param place (String) Value representing the location at which the measurement was taken.
 * @param type (String) Value representing the type of the measurement.
 * @param unit (String) Value representing the unit of the measurement.
 * @param min (Number) The minimal value of the measurement.
 * @param max (Number) The maximum value of the measurement.
 * @constructor
 */
function TemperaturePrediction(time, place, type, unit, min, max) {
    /*
        Call the WeatherPrediction constructor from the context of the TemperaturePrediction object,
        set "this" to the current TemperaturePrediction object and then list (individually)
        the constructor (superclass) arguments.
    */
    WeatherPrediction.call(this, time, place, type, unit, min, max);
}
/*
    Set the prototype of the TemperaturePrediction "class" to be that of the WeatherPrediction "class".
    Set the inheritance relationship TemperaturePrediction --> WeatherPrediction.
 */
Object.setPrototypeOf(TemperaturePrediction.prototype, WeatherPrediction.prototype);
/**
 * The prototype of the TemperaturePrediction "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              convertToF: TemperaturePrediction.convertToF,
 *              convertToC: TemperaturePrediction.convertToC
 *          }
 *       }
 */
TemperaturePrediction.prototype = {
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