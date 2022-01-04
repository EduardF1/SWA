const {WeatherData} = require('./WeatherData');
const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require("../../../../Constants");

/**
 * Constructor function for the Temperature "class" (factory function implementation approach).
 * @param state Variable (object) containing the initialization state for Temperature objects.
 * @returns {
 *            {
 *              getTime: (function(): Date),
 *              getPlace: (function(): *),
 *              setPlace: (function(*): *),
 *              setTime: (function(*): *)
 *            } & {
 *                  getType: (function(): *),
 *                  setUnit: (function(*): *),
 *                  setType: (function(*): *),
 *                  getUnit: (function(): *)
 *                } & {
 *                      getValue: function(): *,
 *                      setValue: function(*): *
 *                    } & {
 *                          convertToF: convertToF,
 *                          convertToC: convertToC
 *                        }
 *           }
 * @constructor
 */
const Temperature = (state) => {
    let weatherData = WeatherData(state)
    const convertToF = () => {
        if (weatherData.getType() === CELSIUS_TYPE) {
            weatherData.setType(FAHRENHEIT_TYPE);
            weatherData.setUnit(FAHRENHEIT_UNIT);
            weatherData.setValue((weatherData.getValue() * 9 / 5) + 32);
        }
    }
    const convertToC = () => {
        if (weatherData.getType() === FAHRENHEIT_TYPE) {
            weatherData.setType(CELSIUS_TYPE);
            weatherData.setUnit(CELSIUS_UNIT);
            weatherData.setValue((weatherData.getValue() - 32) * 5 / 9);
        }
    }
    // Return a new object (initially empty) to which the defined functions are assigned.
    return Object.assign({}, weatherData, {convertToC, convertToF});
}

module.exports = {
    Temperature
}