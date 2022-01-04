import {WeatherLedger} from "./WeatherLedger.mjs";

/**
 * Constructor (factory function) for the WeatherForecast "class".
 * @param data (Array of WeatherPrediction objects) The weather predictions of the forecast.
 * @constructor
 */
export function WeatherForecast(data) {
    /*
        Call the WeatherLedger constructor from the context of the WeatherForecast object,
        set "this" to the current WeatherForecast object and then list (individually)
        the constructor (superclass) arguments.
    */
    WeatherLedger.call(this, data);
}
/*
    Set the prototype of the WeatherForecast "class" to be that of the WeatherLedger "class".
    Set the inheritance relationship WeatherForecast --> WeatherLedger.
 */
Object.setPrototypeOf(WeatherForecast.prototype, WeatherLedger.prototype);
/**
 * The prototype of the WeatherForecast "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              getAverageMaxValue: (function()),
 *              getDataSize: (function(): *),
 *              getAverageMinValue: (function())
 *           }
 *       }
 */
// Utility function to get the size of the weather predictions' array.
const dataSize = this.getData().length;
WeatherForecast.prototype = {
    getAverageMaxValue: function () {
        return this.getData().map(element => element.getMax()).reduce((previous, current) => previous + current) / dataSize;
    },
    getAverageMinValue: function () {
        return this.getData().map(element => element.getMin()).reduce((previous, current) => previous + current) / dataSize;
    }
}
