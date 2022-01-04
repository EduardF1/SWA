const {WeatherData} = require('./WeatherData');

/**
 * Constructor function for the CloudCoverage "class" (factory function implementation approach).
 * @param state Variable (object) containing the initialization state for CloudCoverage objects.
 * @returns {
 *              {
 *                  getTime: (function(): Date),
 *                  getPlace: (function(): *),
 *                  setPlace: (function(*): *),
 *                  setTime: (function(*): *)
 *              }
 *              & {
 *                  getType: function(): *,
 *                  setUnit: function(*): *,
 *                  setType: function(*): *,
 *                  getUnit: function(): *
 *                 } & {
 *                      getValue: function(): *,
 *                      setValue: function(*): *
 *                     }
 *            }
 * @constructor
 */
const CloudCoverage = (state) => {
    const weatherData = new WeatherData(state);
    // Return a new object (initially empty) to which the defined functions are assigned.
    return Object.assign({}, weatherData);
}

module.exports = {
    CloudCoverage
}