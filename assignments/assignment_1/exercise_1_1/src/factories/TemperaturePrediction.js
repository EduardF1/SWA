const {Event} = require('./Event');
const {DataType} = require('./DataType');
const {WeatherPrediction} = require('./WeatherPrediction');
const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require("../../../Constants");

const TemperaturePrediction = (unit, type, place, time, min, max) => {
    let state = {unit: unit, type: type, place: place, time: time, min: min, max: max};
    let event =  Event(state.place, state.time);
    let dataType =  DataType(state.type, state.unit);
    let weatherPrediction =  WeatherPrediction(dataType.getUnit(), dataType.getType(), event.getPlace(), state.time, state.min, state.max);
    const convertToF = () => {
        if (weatherPrediction.getDataType().getType() === CELSIUS_TYPE) {
            weatherPrediction.getDataType().setType(FAHRENHEIT_TYPE);
            weatherPrediction.setMin(weatherPrediction.getMin() * 1.8 + 32);
            weatherPrediction.setMax(weatherPrediction.getMax() * 1.8 + 32)
            weatherPrediction.getDataType().setUnit(FAHRENHEIT_UNIT);
        }
    }
    const convertToC = () => {
        if (weatherPrediction.getDataType().getType() === FAHRENHEIT_TYPE) {
            weatherPrediction.getDataType().setType(CELSIUS_TYPE);
            weatherPrediction.setMin((weatherPrediction.getMin() - 32) / 1.8);
            weatherPrediction.setMax((weatherPrediction.getMax() - 32) / 1.8);
            weatherPrediction.getDataType().setUnit(CELSIUS_UNIT);
        }
    }
    const getWeatherPrediction = () => weatherPrediction;
    const setWeatherPrediction = (newWeatherPrediction) => weatherPrediction = newWeatherPrediction;
    return {...weatherPrediction, convertToC, convertToF, getWeatherPrediction, setWeatherPrediction};
}

module.exports = {
    TemperaturePrediction
}