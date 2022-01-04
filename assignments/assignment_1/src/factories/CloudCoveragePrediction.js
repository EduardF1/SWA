const {WeatherPrediction} = require('./WeatherPrediction');

/**
 * Constructor function for the CloudCoveragePrediction "class" (factory function implementation approach).
 * @param state Variable (object) containing the initialization state for CloudCoveragePrediction objects.
 * @returns {{
 *              setMax: function(*): *,
 *              setWeatherPrediction: (function(*): *),
 *              getTime: (function(): Date),
 *              getMax: function(): *,
 *              getWeatherPrediction: (function(): {setMax: function(*): *,
 *              getTime: (function(): Date),
 *              getMax: function(): *,
 *              getPlace: (function(): *),
 *              setType: function(*): *,
 *              setPlace: (function(*): *),
 *              matches: function(*): *,
 *              setMin: function(*): *,
 *              getMin: function(): *,
 *              getType: function(): *,
 *              setUnit: function(*): *,
 *              getUnit: function(): *,
 *              setTime: (function(*): *)}),
 *              getPlace: (function(): *),
 *              setType: function(*): *,
 *              setPlace: (function(*): *),
 *              matches: function(*): *,
 *              setMin: function(*): *,
 *              getMin: function(): *,
 *              getType: function(): *,
 *              setUnit: function(*): *,
 *              getUnit: function(): *,
 *              setTime: (function(*): *)
 *            }}
 * @constructor
 */
const CloudCoveragePrediction = (state) => {
    let weatherPrediction =  WeatherPrediction(state);
    const setWeatherPrediction = (weatherPrediction_) => weatherPrediction = weatherPrediction_;
    const getWeatherPrediction = () => weatherPrediction;
    /*
        Return a new object with the weatherPrediction inner object's properties destructured and the
        additional "setWeatherPrediction()" and "getWeatherPrediction()" methods.
     */
    return {...weatherPrediction, setWeatherPrediction, getWeatherPrediction};
}

module.exports = {
    CloudCoveragePrediction
}