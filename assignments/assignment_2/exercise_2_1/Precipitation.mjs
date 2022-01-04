import {WeatherData} from "./WeatherData.mjs";

/**
 * Constructor (factory function) for the Precipitation "class".
 * @param time (Date) Value representing the time of a measurement.
 * @param place (String) Value representing the location at which the measurement was taken.
 * @param type (String) Value representing the type of the measurement.
 * @param unit (String) Value representing the unit of the measurement.
 * @param value (Number) Value representing the value of the measurement.
 * @param precipitationType (String) Value representing the precipitation type of the measurement.
 * @constructor
 */
export function Precipitation(time, place, type, unit, value, precipitationType) {
    /*
        Call the WeatherData constructor from the context of the Precipitation object,
        set "this" to the current CloudCoverage object and then list (individually)
        the constructor (superclass) arguments.
    */
    WeatherData.call(this, time, place, type, unit, value);
    // Specific field.
    this.precipitationType = precipitationType;
}
/*
    Set the prototype of the Precipitation "class" to be that of the WeatherData "class".
    Set the inheritance relationship Precipitation --> WeatherData.
 */
Object.setPrototypeOf(Precipitation.prototype, WeatherData.prototype);
/**
 * The prototype of the Precipitation "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              getPrecipitationType: (function(): *),
 *              convertToMM: Precipitation.convertToMM,
 *              setPrecipitationType: Precipitation.setPrecipitationType,
 *              convertToInches: Precipitation.convertToInches
 *           }
 *        }
 */
Precipitation.prototype = {
    getPrecipitationType: function () {
        return this.precipitationType;
    },
    setPrecipitationType: function (newPrecipitationType) {
        this.precipitationType = newPrecipitationType;
    },
    convertToInches: function () {
        if (this.getType() === IN_TYPE) {
            this.setType(MM_TYPE);
            this.setUnit(MM_UNIT);
            this.setValue(this.getValue() * 2.237);
        }
    },
    convertToMM: function () {
        if (this.getType() === MM_TYPE) {
            this.setType(IN_TYPE);
            this.setUnit(IN_UNIT);
            this.setValue(this.getValue() / 2.237);
        }
    }
}