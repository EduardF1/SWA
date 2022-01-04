import {EventDataType} from "./EventDataType.mjs";

/**
 * Constructor function for the WeatherPrediction "class".
 * @param time (Date) The date at which a measurement has occurred.
 * @param place (String) The location at which a measurement has occurred.
 * @param type (String) The type of the measurement which has occurred.
 * @param unit (String) The unit of the measurement which has occurred.
 * @param min (Number) The minimal value of the measurement.
 * @param max (Number) The maximum value of the measurement.
 * @constructor
 */
export function WeatherPrediction(time, place, type, unit, min, max) {
    EventDataType.call(this, time, place, type, unit);
    // Specific fields
    this.min = min;
    this.max = max;
}
/*
    Set the prototype of the WeatherPrediction "class" to be that of the EventDataType "class".
    Set the inheritance relationship WeatherPrediction --> EventDataType.
 */
Object.setPrototypeOf(WeatherPrediction.prototype, EventDataType.prototype);
/**
 *
 * @type {
 *          {
 *              setMax: WeatherPrediction.setMax,
 *              setMin: WeatherPrediction.setMin,
 *              getMin: (function(): *),
 *              getMax: (function(): *),
 *              matches: (function(*))
 *          }
 *      }
 */
WeatherPrediction.prototype = {
    setMin: function (newMin) {
        this.min = newMin;
    },
    getMin: function () {
        return this.min;
    },
    setMax: function (newMax) {
        this.max = newMax;
    },
    getMax: function () {
        return this.max;
    },
    matches: function (data) {
        return data.getTime() === this.getTime() &&
            data.getPlace() === this.getPlace() &&
            data.getType() === this.getType() &&
            data.getUnit() === this.getUnit() &&
            (data.getValue() >= this.getMin() && data.getValue() <= this.getMax())
    }
}
