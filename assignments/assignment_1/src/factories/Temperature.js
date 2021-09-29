const {WeatherData} = require('./WeatherData');
const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require("../../../../Constants");

const Temperature = (state) => {
    let weatherData = WeatherData(state)
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