import {WeatherData} from "./WeatherData.mjs";

/**
 * Constructor (factory function) for the CloudCoverage "class".
 * @param time (Date) Value representing the time of a measurement.
 * @param place (String) Value representing the location at which the measurement was taken.
 * @param type (String) Value representing the type of the measurement.
 * @param unit (String) Value representing the unit of the measurement.
 * @param value (Number) Value representing the value of the measurement.
 * @constructor
 */
export function CloudCoverage(time, place, type, unit, value) {
    /*
        Call the WeatherData constructor from the context of the CloudCoverage object,
        set "this" to the current CloudCoverage object and then list (individually)
        the constructor (superclass) arguments.
     */
    WeatherData.call(this, time, place, type, unit, value);
}
/*
    Set the prototype of the CloudCoverage "class" to be that of the WeatherData "class".
    Set the inheritance relationship CloudCoverage --> WeatherData.
 */
Object.setPrototypeOf(CloudCoverage.prototype, WeatherData.prototype);

