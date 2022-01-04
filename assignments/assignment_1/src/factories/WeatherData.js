const {Event} = require('./Event');
const {DataType} = require('./DataType');

/**
 * Constructor function for the WeatherData "class" (factory function implementation approach).
 * @param state Variable (object) containing the initialization state for WeatherData objects.
 * @returns {
 *              {
 *                  getTime: (function(): Date),
 *                  getPlace: (function(): *),
 *                  setPlace: (function(*): *),
 *                  setTime: (function(*): *)
 *               } & {
 *                      getType: (function(): *),
 *                      setUnit: (function(*): *),
 *                      setType: (function(*): *),
 *                      getUnit: (function(): *)
 *                    } & {
 *                          getValue: (function(): *),
 *                          setValue: (function(*): *)
 *                         }
 *            }
 * @constructor
 */
function WeatherData(state) {
    const getValue = () => state.value;
    const setValue = (newValue) => state.value = newValue ? newValue : state.value;
    // Return a new object (initially empty) to which the defined functions are assigned together with the Event and DataType objects.
    return Object.assign({}, Event(state), DataType(state), {getValue, setValue});
}

module.exports = {
    WeatherData
}