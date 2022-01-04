const {WeatherData} = require('./WeatherData');
const {MPH_TYPE, MPH_UNIT, MPS_UNIT, MPS_TYPE} = require("../../../../Constants");

/**
 * Constructor function for the Wind "class" (factory function implementation approach).
 * @param state Variable (object) containing the initialization state for Wind objects.
 * @returns {
 *              {
 *                  getTime: (function(): Date),
 *                  getPlace: (function(): *),
 *                  setPlace: (function(*): *),
 *                  setTime: (function(*): *)
 *              } & {
 *                      getType: (function(): *),
 *                      setUnit: (function(*): *),
 *                      setType: (function(*): *),
 *                      getUnit: (function(): *)
 *                  } & {
 *                          getValue: (function(): *),
 *                          setValue: (function(*): *)
 *                      } & {
 *                              getDirection: (function(): *),
 *                              convertToMS: convertToMS,
 *                              setDirection: (function(*): *),
 *                              convertToMPH: convertToMPH
 *                           }
 *          }
 * @constructor
 */
const Wind = (state) => {
    const weatherData = WeatherData(state);
    const getDirection = () => state.direction;
    const setDirection = (newDirection) => state.direction = newDirection ? newDirection : state.direction;
    const convertToMPH = () => {
        if (weatherData.getType() === MPS_TYPE) {
            weatherData.setType(MPH_TYPE);
            weatherData.setUnit(MPH_UNIT);
            weatherData.setValue(weatherData.getValue() * 2.237);
        }
    }
    const convertToMS = () => {
        if (weatherData.getType() === MPH_TYPE) {
            weatherData.setType(MPS_TYPE);
            weatherData.setUnit(MPS_UNIT);
            weatherData.setValue(weatherData.getValue() / 2.237);
        }
    }
    // Return a new object (initially empty) to which the defined functions are assigned together with the WeatherData object.
    return Object.assign({},
        // Sources
        weatherData,
        {getDirection, setDirection, convertToMS, convertToMPH}
    );
}

module.exports = {
    Wind
}