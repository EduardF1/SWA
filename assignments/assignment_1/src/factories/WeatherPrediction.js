const {Event} = require('./Event');
const {DataType} = require('./DataType');

/**
 * Constructor function for the WeatherPrediction "class" (factory function implementation approach).
 * @param state Variable (object) containing the initialization state for WeatherPrediction objects.
 * @returns {
 *              {
 *                  setMax: (function(*): *),
 *                  getTime: (function(): Date),
 *                  getMax: (function(): *),
 *                  getPlace: (function(): *),
 *                  setType: (function(*): *),
 *                  setPlace: (function(*): *),
 *                  matches: (function(*)),
 *                  setMin: (function(*): *),
 *                  getMin: (function(): *),
 *                  getType: (function(): *),
 *                  setUnit: (function(*): *),
 *                  getUnit: (function(): *),
 *                  setTime: (function(*): *)
 *               }
 *         }
 * @constructor
 */
const WeatherPrediction = (state) => {
    let event =  Event(state);
    let dataType =  DataType(state);
    const getMin = () => state.min;
    const setMin = (newMin) => state.min = newMin;
    const getMax = () => state.max;
    const setMax = (newMax) => state.max = newMax;
    const matches = (data) => (
        data.getValue() === ((state.min + state.max) / 2) &&
        data.getTime().getTime() === event.getTime().getTime() &&
        data.getPlace() === event.getPlace() &&
        data.getType() === dataType.getType() &&
        data.getUnit() === dataType.getUnit()
    );
    /*
        Return a new object with the Event instance object's properties (destructured into the new object),
        the DataType instance object's properties (destructured into the new object) and the listed methods
        specific to the WeatherPrediction class.
     */
    return {...event, ...dataType, getMin, getMax, setMin, setMax, matches};
}

module.exports = {
    WeatherPrediction
}