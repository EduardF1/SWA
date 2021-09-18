const {Event} = require('../src/Event');
const {DataType} = require('../src/DataType');
const {WeatherPrediction} = require('../src/WeatherPrediction');
const {MPH_TYPE, MPH, MPS, MPS_TYPE} = require("../../Constants");

const WindPrediction = (unit, type, place, time, max, min, expectedDirections) => {
    let state = {unit, type, place, time, max, min, expectedDirections: expectedDirections};
    let event = Event(place);
    let dataType = DataType(unit, type);
    let weatherPrediction = WeatherPrediction(dataType.getUnit(), dataType.getType(), event.getPlace(), state.min, state.max);
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
        if (weatherPrediction.getDataType().getUnit() === MPS) {
            weatherPrediction.getDataType().setUnit(MPH);
            weatherPrediction.setMin((weatherPrediction1.getMin() / 25.4));
            weatherPrediction.setMax((weatherPrediction1.getMax() / 25.4));
            weatherPrediction.getDataType().setType(MPH_TYPE);
        }
    };
    const convertToMS = () => {
        if (weatherPrediction.getDataType().getUnit() === MPH) {
            weatherPrediction.getDataType().setUnit(MPS);
            weatherPrediction.setMin((weatherPrediction.getMin() * 0.0393701));
            weatherPrediction.setMax((weatherPrediction.getMax() * 0.0393701));
            weatherPrediction.getDataType().setType(MPS_TYPE);
        }
    };
    return {...weatherPrediction, getExpectedDirections, setExpectedTypes, matches, convertToMPH, convertToMS, getWeatherPrediction, setWeatherPrediction};
}

module.exports = {
    WindPrediction
}