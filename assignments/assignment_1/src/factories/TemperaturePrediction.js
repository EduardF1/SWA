const {WeatherPrediction} = require('./WeatherPrediction');
const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require("../../../../Constants");

/**
 *
 * @param state Variable (object) containing the initialization state for TemperaturePrediction objects.
 * @returns {
 *              {
 *                  setMax: function(*): *,
 *                  setWeatherPrediction: (function(*): *),
 *                  getTime: (function(): Date),
 *                  getMax: function(): *,
 *                  getWeatherPrediction: (function(): {
 *                      setMax: function(*): *,
 *                      getTime: (function(): Date),
 *                      getMax: function(): *,
 *                      getPlace: (function(): *),
 *                      setType: (function(*): *),
 *                      setPlace: (function(*): *),
 *                      matches: function(*): *,
 *                      setMin: function(*): *,
 *                      getMin: function(): *,
 *                      getType: (function(): *),
 *                      setUnit: (function(*): *),
 *                      getUnit: (function(): *),
 *                      setTime: (function(*): *)
 *                      }
 *                   ),
 *                   getPlace: (function(): *),
 *                   setType: (function(*): *),
 *                   setPlace: (function(*): *),
 *                   matches: function(*): *,
 *                   convertToF: convertToF,
 *                   setMin: function(*): *,
 *                   getMin: function(): *,
 *                   getType: (function(): *),
 *                   setUnit: (function(*): *),
 *                   getUnit: (function(): *),
 *                   convertToC: convertToC,
 *                   setTime: (function(*): *)
 *              }
 *         }
 * @constructor
 */
const TemperaturePrediction = (state) => {
    let weatherPrediction =  WeatherPrediction(state);
    const convertToF = () => {
        if (weatherPrediction.getType() === CELSIUS_TYPE) {
            weatherPrediction.setType(FAHRENHEIT_TYPE);
            weatherPrediction.setMin(weatherPrediction.getMin() * 1.8 + 32);
            weatherPrediction.setMax(weatherPrediction.getMax() * 1.8 + 32)
            weatherPrediction.setUnit(FAHRENHEIT_UNIT);
        }
    }
    const convertToC = () => {
        if (weatherPrediction.getType() === FAHRENHEIT_TYPE) {
            weatherPrediction.setType(CELSIUS_TYPE);
            weatherPrediction.setMin((weatherPrediction.getMin() - 32) / 1.8);
            weatherPrediction.setMax((weatherPrediction.getMax() - 32) / 1.8);
            weatherPrediction.setUnit(CELSIUS_UNIT);
        }
    }
    const getWeatherPrediction = () => weatherPrediction;
    const setWeatherPrediction = (newWeatherPrediction) => weatherPrediction = newWeatherPrediction;
    /*
        Return a new object with the weatherPrediction inner object's properties (object destructuring used) and the
        additional listed methods.
    */
    return {...weatherPrediction, convertToC, convertToF, getWeatherPrediction, setWeatherPrediction};
}

module.exports = {
    TemperaturePrediction
}