import {CELSIUS_TYPE, FAHRENHEIT_TYPE, MM_TYPE, MPS_TYPE} from "../../../Constants.js";

/**
 * Constructor (factory function) for the WeatherLedger "class" (common functionality wrapper class used by WeatherForecast and WeatherHistory).
 * @param data (Array of WeatherPrediction objects or WeatherData objects) The data or predictions of the forecast.
 * @constructor
 */
export function WeatherLedger(data) {
    this.data = data;
}
/**
 * Constructor (factory function) for the WeatherLedger "class".
 * @type {
 *          {
 *              convertToInternationalUnits: (function(): WeatherLedger),
 *              forPlace: (function(*): WeatherLedger),
 *              including: (function(*): WeatherLedger),
 *              forType: (function(*): WeatherLedger),
 *              convertToUsUnits: (function(): WeatherLedger),
 *              getData: (function(): *),
 *              forPeriod: (function(*): WeatherLedger)
 *           }
 *         }
 */
WeatherLedger.prototype = {
    forPlace: function (place) {
        return new WeatherLedger(this.data.filter(element => element.getPlace() === place));
    },
    forType: function (type) {
        return new WeatherLedger(this.data.filter(element => element.getType() === type));
    },
    forPeriod: function (period) {
        return new WeatherLedger(this.data.filter(element => period.contains(element.getTime())));
    },
    including: function (data) {
        return new WeatherLedger(data.every(element => this.data.includes(element)));
    },
    /**
     * Converts the current WeatherLedger into a new WeatherLedger object with converted
     * metrics' information from International format to US.
     * @returns {WeatherLedger}
     */
    convertToUsUnits: function () {
        return new WeatherLedger(
            this.data.forEach(element => {
                switch (element.getType()) {
                    case CELSIUS_TYPE:
                        return element.convertToF();
                    case MM_TYPE:
                        return element.convertToInches();
                    case MPS_TYPE:
                        return element.convertToMPH();
                    default:
                        break;
                }
            })
        )
    },
    /**
     * Converts the current WeatherLedger into a new WeatherLedger object with converted
     * metrics' information from US to International format.
     * @returns {WeatherLedger}
     */
    convertToInternationalUnits: function () {
        return new WeatherLedger(
            this.data.forEach(element => {
                switch (element.getType()) {
                    case FAHRENHEIT_TYPE:
                        return element.convertToC();
                    case IN_TYPE:
                        return element.convertToMM();
                    case MPH_TYPE:
                        return element.convertToMPS();
                    default:
                        break;
                }
            })
        )
    },
    /**
     * Return the data or predictions (array of objects) of the ledger.
     * @returns {*}
     */
    getData: function () {
        return this.data;
    }
}