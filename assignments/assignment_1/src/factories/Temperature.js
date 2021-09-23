const {WeatherData} = require('./WeatherData');
const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require("../../../../Constants");

const Temperature = (place, time, type, unit, value) => {
    let state = {time: time, place: place, type: type, unit: unit, value: value};
    let weatherData = WeatherData(state.place, state.time, state.type, state.unit, state.value)
    const convertToF = () => {
        if (weatherData.getType() === CELSIUS_TYPE) {
            weatherData.setType(FAHRENHEIT_TYPE);
            weatherData.setUnit(FAHRENHEIT_UNIT);
            weatherData.setValue((weatherData.getValue() * 9 / 5) + 32);
        }
    }
    const convertToC = () => {
        if (weatherData.getType() === FAHRENHEIT_TYPE) {
            weatherData.setType(CELSIUS_TYPE);
            weatherData.setUnit(CELSIUS_UNIT);
            weatherData.setValue((weatherData.getValue() - 32) * 5 / 9);
        }
    }
    return Object.assign({}, weatherData, {convertToC, convertToF});
}

module.exports = {
    Temperature
}