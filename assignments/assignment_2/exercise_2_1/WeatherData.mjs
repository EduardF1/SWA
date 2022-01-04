import {EventDataType} from './EventDataType.mjs';

/**
 * Constructor (factory function) for the WeatherData "class".
 * @param time (Date) Value representing the time of a measurement.
 * @param place (String) Value representing the location at which the measurement was taken.
 * @param type (String) Value representing the type of the measurement.
 * @param unit (String) Value representing the unit of the measurement.
 * @param value (Number) Value representing the value of the measurement.
 * @constructor
 */
export function WeatherData(time, place, type, unit, value) {
    /*
        Call the EventDataType constructor from the context of the WeatherData object,
        set "this" to the current WeatherData object and then list (individually)
        the constructor (superclass) arguments.
    */
    EventDataType.call(this,time, place, type, unit);
    // Specific field.
    this.value = value;
}
/**
 * The prototype of the WeatherData "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              getValue: (function(): *),
 *              setValue: WeatherData.setValue
 *          }
 *       }
 */
WeatherData.prototype = {
    setValue: function (newValue) {
        this.value = newValue;
    },
    getValue: function () {
        return this.value;
    }
}
/*
    Set the prototype of the WeatherData "class" to be that of the EventDataType "class".
    Set the inheritance relationship WeatherData --> EventDataType.
 */
Object.setPrototypeOf(WeatherData.prototype, EventDataType.prototype);