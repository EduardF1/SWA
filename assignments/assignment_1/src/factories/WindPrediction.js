const {WeatherPrediction} = require('./WeatherPrediction');
const {MPH_TYPE, MPH_UNIT, MPS_UNIT, MPS_TYPE} = require("../../../../Constants");

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
    return {...weatherPrediction, getExpectedDirections, setExpectedTypes, matches, convertToMPH, convertToMS, getWeatherPrediction, setWeatherPrediction};
}

module.exports = {
    WindPrediction
}