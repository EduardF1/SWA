const {Event} = require('./Event');
const {DataType} = require('./DataType');
const {WeatherPrediction} = require('./WeatherPrediction');
const {MM_TYPE, MM, IN_TYPE, IN} = require("../../../../Constants");

const PrecipitationPrediction = (unit, type, place, time, max, min, expectedTypes) => {
    let state = {unit: unit, type: type, place: place, time: time, max: max, min: min, expectedTypes: expectedTypes};
    let event = Event(state.place, state.time);
    let dataType = DataType(state.type, state.unit);
    let weatherPrediction = WeatherPrediction(dataType.getUnit(), dataType.getType(), event.getPlace(), event.getTime(), state.min, state.max);
    const getExpectedTypes = () => new Array(state.expectedTypes);
    const setExpectedTypes = (newExpectedTypes) => state.expectedTypes = newExpectedTypes;
    const setWeatherPrediction = (newWeatherPrediction) => weatherPrediction = newWeatherPrediction;
    const getWeatherPrediction = () => weatherPrediction;
    const matches = (data) => (
        data.getValue() === ((weatherPrediction.getMin() + weatherPrediction.getMax()) / 2) &&
        data.getDataType().getType() === weatherPrediction.getDataType().getType() &&
        data.getDataType().getUnit() === weatherPrediction.getDataType().getUnit() &&
        data.getEvent().getTime() === weatherPrediction.getEvent().getTime() &&
        data.getEvent().getPlace() === weatherPrediction.getEvent().getPlace()
    );
    const convertToInches = () => {
        if (weatherPrediction.getDataType().getType() === MM_TYPE) {
            weatherPrediction.getDataType().setUnit(IN);
            weatherPrediction.setMin((weatherPrediction.getMin() / 25.4));
            weatherPrediction.setMax((weatherPrediction.getMax() / 25.4));
            weatherPrediction.getDataType().setType(IN_TYPE);
        }
    };
    const convertToMM = () => {
        if (weatherPrediction.getDataType().getType() === IN_TYPE) {
            weatherPrediction.getDataType().setUnit(MM);
            weatherPrediction.setMin((weatherPrediction.getMin() * 0.0393701));
            weatherPrediction.setMax((weatherPrediction.getMax() * 0.0393701));
            weatherPrediction.getDataType().setType(MM_TYPE);
        }
    };
    return {...weatherPrediction, getExpectedTypes, setExpectedTypes, matches, convertToInches, convertToMM, getWeatherPrediction, setWeatherPrediction}
}

module.exports = {
    PrecipitationPrediction
}