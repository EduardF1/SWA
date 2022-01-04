const {WeatherPrediction} = require('./WeatherPrediction');
const {MM_TYPE, MM_UNIT, IN_TYPE, IN_UNIT} = require("../../../../Constants");

/**
 * Constructor function for the PrecipitationPrediction "class" (factory function implementation approach).
 * @param state Variable (object) containing the initialization state for PrecipitationPrediction objects.
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
 *                  }
 *                ),
 *               getPlace: (function(): *),
 *               setType: (function(*): *),
 *               setPlace: (function(*): *),
 *               matches: (function(*)),
 *               convertToMM: convertToMM,
 *               convertToInches: convertToInches,
 *               setMin: function(*): *,
 *               getMin: function(): *,
 *               getType: (function(): *),
 *               setUnit: (function(*): *),
 *               setExpectedTypes: (function(*): *),
 *               getExpectedTypes: (function(): any[]),
 *               getUnit: (function(): *),
 *               setTime: (function(*): *)
 *           }
 *       }
 * @constructor
 */
const PrecipitationPrediction = (state) => {
    let weatherPrediction = WeatherPrediction(state);
    const getExpectedTypes = () => new Array(state.expectedTypes);
    const setExpectedTypes = (newExpectedTypes) => state.expectedTypes = newExpectedTypes;
    const setWeatherPrediction = (newWeatherPrediction) => weatherPrediction = newWeatherPrediction;
    const getWeatherPrediction = () => weatherPrediction;
    const matches = (data) => (
        data.getValue() === ((weatherPrediction.getMin() + weatherPrediction.getMax()) / 2) &&
        data.getType() === weatherPrediction.getType() &&
        data.getUnit() === weatherPrediction.getUnit() &&
        data.getEvent().getTime() === weatherPrediction.getEvent().getTime() &&
        data.getEvent().getPlace() === weatherPrediction.getEvent().getPlace()
    );
    const convertToInches = () => {
        if (weatherPrediction.getType() === MM_TYPE) {
            weatherPrediction.setUnit(IN_UNIT);
            weatherPrediction.setMin((weatherPrediction.getMin() / 25.4));
            weatherPrediction.setMax((weatherPrediction.getMax() / 25.4));
            weatherPrediction.setType(IN_TYPE);
        }
    };
    const convertToMM = () => {
        if (weatherPrediction.getType() === IN_TYPE) {
            weatherPrediction.setUnit(MM_UNIT);
            weatherPrediction.setMin((weatherPrediction.getMin() * 0.0393701));
            weatherPrediction.setMax((weatherPrediction.getMax() * 0.0393701));
            weatherPrediction.setType(MM_TYPE);
        }
    };
    /*
        Return a new object with the weatherPrediction inner object's properties destructured and the
        additional listed methods.
    */
    return {
        ...weatherPrediction,
        getExpectedTypes,
        setExpectedTypes,
        matches,
        convertToInches,
        convertToMM,
        getWeatherPrediction,
        setWeatherPrediction
    }
}

module.exports = {
    PrecipitationPrediction
}