const {WeatherPrediction} = require('./WeatherPrediction');
const {MM_TYPE, MM_UNIT, IN_TYPE, IN_UNIT} = require("../../../../Constants");

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
    return {...weatherPrediction, getExpectedTypes, setExpectedTypes, matches, convertToInches, convertToMM, getWeatherPrediction, setWeatherPrediction}
}

module.exports = {
    PrecipitationPrediction
}