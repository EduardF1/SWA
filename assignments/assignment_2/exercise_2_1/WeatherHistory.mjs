import {WeatherLedger} from "./WeatherLedger.mjs";

/**
 * Constructor (factory function) for the WeatherHistory "class".
 * @param data (Array of WeatherData objects) The weather data (predictions) of the history.
 * @constructor
 */
export function WeatherHistory(data) {
    /*
        Call the WeatherLedger constructor from the context of the WeatherHistory object,
        set "this" to the current WeatherHistory object and then list (individually)
        the constructor (superclass) arguments.
    */
    WeatherLedger.call(this, data);
}
/*
    Set the prototype of the WeatherHistory "class" to be that of the WeatherLedger "class".
    Set the inheritance relationship WeatherHistory --> WeatherLedger.
 */
Object.setPrototypeOf(WeatherHistory.prototype, WeatherLedger.prototype);
/**
 * The prototype of the WeatherHistory "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              lowestValue: ((function(): (undefined))|*)
 *          }
 *       }
 */
WeatherHistory.prototype = {
    lowestValue: function () {
        if (this.getData() === undefined || this.getData().length === 0) {
            return undefined;
        }
        if (this.getData().map(element => element.getType()).filter((value, index, self) => self.indexOf(value) === index).length > 1) {
            return undefined;
        }
        return Math.min(...this.getData().map(element => Number(element.getValue())));
    }
}