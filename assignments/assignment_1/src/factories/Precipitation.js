const {WeatherData} = require('./WeatherData');
const {MM_TYPE, MM, IN_TYPE, IN} = require("../../../../Constants");

/**
 * Constructor function for the Precipitation "class" (factory function implementation approach).
 * @param state Variable (object) containing the initialization state for Precipitation objects.
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
 *                          getValue: function(): *,
 *                          setValue: function(*): *
 *                      } & {
 *                              getPrecipitationType: (function(): *),
 *                              convertToMM: convertToMM,
 *                              setPrecipitationType: (function(*): *),
 *                              convertToInches: convertToInches
 *                          }
 *        }
 * @constructor
 */
const Precipitation = (state) => {
    let weatherData = WeatherData(state);
    const getPrecipitationType = () => state.precipitationType;
    const setPrecipitationType = (precipitationType_) => state.precipitationType = precipitationType_;
    const convertToInches = () => {
        if (weatherData.getType() === MM_TYPE) {
            weatherData.setType(IN_TYPE);
            weatherData.setUnit(IN);
            weatherData.setValue(weatherData.getValue() / 25.4);
        }
    }
    const convertToMM = () => {
        if (weatherData.getType() === IN_TYPE) {
            weatherData.setType(MM_TYPE);
            weatherData.setUnit(MM);
            weatherData.setValue(weatherData.getValue() * 25.4);
        }
    }
    /*
        Return a new object with the weatherData inner object's properties and the
        additional "convertToInches()", "getPrecipitationType()", "setPrecipitationType()" and "convertToMM()" methods.
    */
    return Object.assign({}, weatherData, {convertToInches, convertToMM, getPrecipitationType, setPrecipitationType});
}

module.exports = {
    Precipitation
}