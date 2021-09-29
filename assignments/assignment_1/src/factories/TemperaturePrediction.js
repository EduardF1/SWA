const {WeatherPrediction} = require('./WeatherPrediction');
const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require("../../../../Constants");

const TemperaturePrediction = (state) => {
    let weatherPrediction =  WeatherPrediction(state);
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