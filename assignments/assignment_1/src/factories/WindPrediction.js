const {WeatherPrediction} = require('./WeatherPrediction');
const {MPH_TYPE, MPH_UNIT, MPS_UNIT, MPS_TYPE} = require("../../../../Constants");

/**
 * Constructor function for the WindPrediction "class" (factory function implementation approach).
 * @param state Variable (object) containing the initialization state for WindPrediction objects.
 * @returns {
 *              {
 *                  setMax: (function(*): *),
 *                  setWeatherPrediction: (function(*): *),
 *                  getTime: (function(): Date),
 *                  getMax: (function(): *),
 *                  getWeatherPrediction: (function(): {
 *                      setMax: (function(*): *),
 *                      getTime: (function(): Date),
 *                      getMax: (function(): *),
 *                      getPlace: (function(): *),
 *                      setType: (function(*): *),
 *                      setPlace: (function(*): *),
 *                      matches: (function(*)),
 *                      setMin: (function(*): *),
 *                      getMin: (function(): *),
 *                      getType: (function(): *),
 *                      setUnit: (function(*): *),
 *                      getUnit: (function(): *),
 *                      setTime: (function(*): *)
 *                   }
 *                  ),
 *                  getPlace: (function(): *),
 *                  setType: (function(*): *),
 *                  setPlace: (function(*): *),
 *                  matches: (function(*)),
 *                  getExpectedDirections: (function(): any[]),
 *                  convertToMPH: convertToMPH,
 *                  setMin: (function(*): *),
 *                  getMin: (function(): *),
 *                  getType: (function(): *),
 *                  setUnit: (function(*): *),
 *                  convertToMS: convertToMS,
 *                  setExpectedTypes: (function(*): *),
 *                  getUnit: (function(): *),
 *                  setTime: (function(*): *)
 *               }
 *            }
 * @constructor
 */
const WindPrediction = (state) => {
    let weatherPrediction = WeatherPrediction(state);
    const getExpectedDirections = () => new Array(state.expectedDirections);
    const setExpectedTypes = (newExpectedTypes) => state.expectedTypes = newExpectedTypes;
    const setWeatherPrediction = (newWeatherPrediction) => weatherPrediction = newWeatherPrediction;
    const getWeatherPrediction = () => weatherPrediction;
    const matches = (data) => (
        data.getValue() === ((weatherPrediction.getMin() + weatherPrediction.getMax()) / 2) &&
        data.getDataType().getType() === weatherPrediction.getDataType().getType() &&
        data.getDataType().getUnit() === weatherPrediction.getDataType().getUnit() &&
        data.getEvent().getTime() === weatherPrediction.getEvent().getTime()
    );
    const convertToMPH = () => {
        if (weatherPrediction.getUnit() === MPS_UNIT) {
            weatherPrediction.setUnit(MPH_UNIT);
            weatherPrediction.setMin((weatherPrediction.getMin() / 25.4));
            weatherPrediction.setMax((weatherPrediction.getMax() / 25.4));
            weatherPrediction.setType(MPH_TYPE);
        }
    };
    const convertToMS = () => {
        if (weatherPrediction.getUnit() === MPH_UNIT) {
            weatherPrediction.setUnit(MPS_UNIT);
            weatherPrediction.setMin((weatherPrediction.getMin() * 0.0393701));
            weatherPrediction.setMax((weatherPrediction.getMax() * 0.0393701));
            weatherPrediction.setType(MPS_TYPE);
        }
    };
    // Return a new object with the properties of the WeatherPrediction instance object, and the listed methods.
    return {
        ...weatherPrediction,
        getExpectedDirections,
        setExpectedTypes,
        matches,
        convertToMPH,
        convertToMS,
        getWeatherPrediction,
        setWeatherPrediction
    };
}

module.exports = {
    WindPrediction
}