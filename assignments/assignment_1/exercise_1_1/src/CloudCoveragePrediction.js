const {Event} = require('../src/Event');
const {DataType} = require('../src/DataType');
const {WeatherPrediction} = require('../src/WeatherPrediction');

const CloudCoveragePrediction = (unit, type, place,time, max, min) => {
    let state = {unit, type, place,time, max, min};
    let event =  Event(state.place, state.time);
    let dataType =  DataType(state.unit, state.type)
    let weatherPrediction =  WeatherPrediction(dataType.getUnit(), dataType.getType(), event.getPlace(), event.getTime(), state.min, state.max);
    const setWeatherPrediction = (newWeatherPrediction) => weatherPrediction = newWeatherPrediction;
    const getWeatherPrediction = () => weatherPrediction;
    return {...weatherPrediction, setWeatherPrediction, getWeatherPrediction};
}

module.exports = {
    CloudCoveragePrediction
}